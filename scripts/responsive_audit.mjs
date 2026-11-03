#!/usr/bin/env node
// Responsive and context-of-use audit for the comprehensive-design-review skill.
// Renders the page at several viewport widths and checks layout, touch, input,
// sticky elements, tables, images, hover-only UI, text expansion, and (optionally)
// performance under a throttled mobile network and CPU.
// Overlaps with a11y_scan.mjs (reflow 320, orientation, target size) are left to that script.
//
// Usage:
//   node responsive_audit.mjs <url-or-file> [--out resp-report]
//        [--widths 360,390,412,768,1024,1280,1440] [--perf] [--no-shots]
// Output: <out>.md, <out>.json, <out>-<width>.png (viewport screenshots)

import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

// Resolve dependencies from the current folder first, then from the skill folder (npm install in the skill root).
const reqCwd = createRequire(path.join(process.cwd(), 'noop.js'));
const reqHere = createRequire(import.meta.url);
const require = (m) => { try { return reqCwd(m); } catch { return reqHere(m); } };
require.resolve = (m) => { try { return reqCwd.resolve(m); } catch { return reqHere.resolve(m); } };
const { chromium } = require('playwright');

const args = process.argv.slice(2);
if (!args[0]) { console.error('Usage: node responsive_audit.mjs <url-or-file> [--out resp-report] [--widths 360,390,768,1280] [--perf] [--no-shots]'); process.exit(1); }
const opt = (n, d) => { const i = args.indexOf(n); return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : d; };
const target = args[0];
const outBase = opt('--out', 'resp-report');
const widths = opt('--widths', '360,390,412,768,1024,1280,1440').split(',').map((w) => parseInt(w, 10)).filter(Boolean);
const doPerf = args.includes('--perf');
const shots = !args.includes('--no-shots');
const url = /^https?:\/\//i.test(target) || target.startsWith('file:') ? target : pathToFileURL(path.resolve(target)).href;

const browser = await chromium.launch().catch(() => chromium.launch({ executablePath: '/usr/bin/google-chrome' }));
const heightFor = (w) => (w <= 480 ? 800 : w <= 1024 ? 1024 : 900);

async function open(w, extra = {}) {
  const mobile = w <= 480;
  const ctx = await browser.newContext({ viewport: { width: w, height: heightFor(w) }, isMobile: mobile, hasTouch: w <= 1024, deviceScaleFactor: 1, ...extra });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => page.goto(url, { waitUntil: 'load', timeout: 60000 }));
  await page.waitForTimeout(400);
  return { ctx, page };
}

// In-page analysis, run per width
const analyze = ([W, H]) => {
  const layoutW = innerWidth;
  const vis = (el) => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && parseFloat(s.opacity) > 0; };
  const sel = (el) => { let p = el.tagName.toLowerCase(); if (el.id) return p + '#' + el.id; if (el.classList.length) p += '.' + [...el.classList].slice(0, 2).join('.'); return p; };
  const inScroller = (el) => { let p = el.parentElement; while (p && p !== document.body) { const o = getComputedStyle(p).overflowX; if (o === 'auto' || o === 'scroll' || o === 'hidden' || o === 'clip') return true; p = p.parentElement; } return false; };
  const all = [...document.querySelectorAll('body *')].filter(vis);
  const res = { W, H, layoutW, docW: Math.max(document.documentElement.scrollWidth, layoutW), docH: document.documentElement.scrollHeight };

  // Horizontal overflow (outermost offenders only)
  const over = all.filter((el) => { const r = el.getBoundingClientRect(); return (r.right > W + 1 || r.left < -1) && !inScroller(el) && getComputedStyle(el).position !== 'fixed'; });
  res.overflow = over.filter((el) => !over.includes(el.parentElement)).slice(0, 10).map((el) => { const r = el.getBoundingClientRect(); return `${sel(el)} (lebar ${Math.round(r.width)}px, kanan ${Math.round(r.right)}px)`; });

  // Truncated or clipped text
  res.truncated = all.filter((el) => {
    if (!el.innerText || !el.innerText.trim() || el.children.length > 3) return false;
    const s = getComputedStyle(el);
    const clipsX = (s.overflow === 'hidden' || s.overflowX === 'hidden' || s.textOverflow === 'ellipsis') && el.scrollWidth > el.clientWidth + 1;
    const clamps = (s.webkitLineClamp && s.webkitLineClamp !== 'none') && el.scrollHeight > el.clientHeight + 1;
    return clipsX || clamps;
  }).slice(0, 12).map((el) => `${sel(el)} "${el.innerText.trim().slice(0, 40)}"`);

  // Text sizes
  const textEls = all.filter((el) => [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 1));
  res.smallText = textEls.filter((el) => parseFloat(getComputedStyle(el).fontSize) < 12).slice(0, 10).map((el) => `${sel(el)} ${getComputedStyle(el).fontSize} "${el.innerText.trim().slice(0, 30)}"`);
  const pText = textEls.filter((el) => el.matches('p, li, td, dd'));
  res.bodySizes = [...new Set(pText.map((el) => getComputedStyle(el).fontSize))];

  // Inputs: iOS zoom (<16px) and keyboard type
  const inputs = [...document.querySelectorAll('input:not([type=hidden]):not([type=checkbox]):not([type=radio]):not([type=submit]):not([type=button]), select, textarea')].filter(vis);
  res.inputSmallFont = inputs.filter((el) => parseFloat(getComputedStyle(el).fontSize) < 16).map((el) => `${sel(el)} ${getComputedStyle(el).fontSize}`);
  const labelOf = (el) => { const id = el.id && document.querySelector(`label[for="${CSS.escape(el.id)}"]`); return ((id && id.innerText) || el.closest('label')?.innerText || el.getAttribute('aria-label') || el.placeholder || el.name || '').toLowerCase(); };
  const kb = [];
  for (const el of inputs.filter((e) => e.tagName === 'INPUT')) {
    const t = (el.getAttribute('type') || 'text').toLowerCase(); const im = el.getAttribute('inputmode'); const lab = labelOf(el);
    const want = /e-?mail|surel/.test(lab) ? 'email' : /telep|phone|\bhp\b|ponsel|whatsapp|\bwa\b|no\.? ?telp/.test(lab) ? 'tel' : /nomor|nim|nip|nidn|nik|npwp|kode pos|otp|jumlah|nominal|angka|tahun|\bno\b/.test(lab) ? 'numeric' : /cari|search/.test(lab) ? 'search' : /url|website|situs/.test(lab) ? 'url' : null;
    if (!want) continue;
    const ok = want === 'numeric' ? (t === 'number' || t === 'tel' || im === 'numeric' || im === 'decimal') : (t === want || im === want);
    if (!ok) kb.push(`${sel(el)} "${lab.slice(0, 30)}" type=${t}${im ? ' inputmode=' + im : ''} (disarankan ${want === 'numeric' ? 'inputmode=numeric' : 'type/inputmode=' + want})`);
  }
  res.keyboardType = kb;

  // Sticky / fixed coverage
  const isFix = (el) => el && ['fixed', 'sticky'].includes(getComputedStyle(el).position);
  const fixed = all.filter((el) => isFix(el) && !isFix(el.parentElement));
  let cover = 0; const fixedList = [];
  const VH = innerHeight, VW = innerWidth; // layout viewport (larger than W/H when the mobile browser zooms out)
  for (const el of fixed) { const r = el.getBoundingClientRect(); const top = Math.max(0, r.top), bot = Math.min(VH, r.bottom); if (bot > top && r.width > VW * 0.5) { cover += bot - top; fixedList.push(`${sel(el)} ${Math.round(bot - top)}px`); } }
  res.stickyCoverPct = Math.round(100 * Math.min(cover, VH) / VH); res.sticky = fixedList;

  // Primary action candidate: largest saturated-background button
  const sat = (c) => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return 0; const [r, g, b, a = 1] = m[1].split(',').map(parseFloat); if (a < 0.5) return 0; const mx = Math.max(r, g, b) / 255, mn = Math.min(r, g, b) / 255; const l = (mx + mn) / 2; return mx === mn ? 0 : (l > 0.5 ? (mx - mn) / (2 - mx - mn) : (mx - mn) / (mx + mn)); };
  const btns = [...document.querySelectorAll('button, [role=button], input[type=submit], a.btn, a[class*=button], a[class*=btn]')].filter(vis);
  const scored = btns.map((el) => { const r = el.getBoundingClientRect(); return { el, r, score: r.width * r.height * (0.3 + sat(getComputedStyle(el).backgroundColor)) * (el.matches('[type=submit]') ? 1.5 : 1) }; }).sort((a, b) => b.score - a.score);
  if (scored[0]) { const { el, r } = scored[0]; const y = r.top + scrollY;
    res.primary = { sel: sel(el), text: (el.innerText || el.value || '').trim().slice(0, 40), y: Math.round(y), aboveFold: y + r.height <= H, cx: Math.round(r.left + r.width / 2), zone: r.top > H / 3 ? 'dua pertiga bawah' : 'sepertiga atas' }; }

  // Tables wider than viewport without scroll container
  res.tables = [...document.querySelectorAll('table')].filter(vis).filter((t) => t.getBoundingClientRect().width > W + 1 && !inScroller(t)).map((t) => `${sel(t)} ${Math.round(t.getBoundingClientRect().width)}px`);

  // Images
  const imgs = [...document.querySelectorAll('img')].filter(vis);
  const iname = (i) => { const u = i.currentSrc || i.src || ''; return u.startsWith('data:') ? `gambar data URI (alt="${i.alt || ''}")` : u.split('?')[0].split('/').pop().slice(0, 40); };
  res.imgOversized = imgs.filter((i) => i.naturalWidth > 2.5 * i.getBoundingClientRect().width * devicePixelRatio && i.naturalWidth > 600).slice(0, 8).map((i) => `${iname(i)} asli ${i.naturalWidth}px, tampil ${Math.round(i.getBoundingClientRect().width)}px`);
  res.imgNoDims = imgs.filter((i) => !i.getAttribute('width') && !i.getAttribute('height') && getComputedStyle(i).aspectRatio === 'auto').slice(0, 8).map(iname);

  // Hover-only reveal rules (same-origin stylesheets)
  const hoverOnly = [];
  for (const sh of [...document.styleSheets]) { let rules; try { rules = sh.cssRules; } catch { continue; }
    const walk = (list) => { for (const r of list) { if (r.cssRules && !r.selectorText) { walk(r.cssRules); continue; } if (!r.selectorText || !/:hover/.test(r.selectorText)) continue;
      const reveals = /display\s*:\s*(block|flex|grid|inline)|visibility\s*:\s*visible|opacity\s*:\s*1/.test(r.style.cssText);
      if (reveals && !/:focus|:focus-within/.test(r.selectorText)) hoverOnly.push(r.selectorText.slice(0, 80)); } };
    walk(rules); }
  res.hoverOnly = [...new Set(hoverOnly)].slice(0, 8);
  res.hasHoverMQ = [...document.styleSheets].some((sh) => { try { return [...sh.cssRules].some((r) => r.media && /hover|pointer/.test(r.media.mediaText)); } catch { return false; } });
  return res;
};

// Text-expansion stress test (simulates long names, long data, translation)
const expand = () => {
  const vis = (el) => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const sel = (el) => { let p = el.tagName.toLowerCase(); if (el.id) return p + '#' + el.id; if (el.classList.length) p += '.' + [...el.classList].slice(0, 2).join('.'); return p; };
  const clip = () => { const m = {}; for (const el of document.querySelectorAll('body *')) { if (!vis(el)) continue; const s = getComputedStyle(el);
    const ov = Math.max(el.scrollWidth - el.clientWidth, (s.overflowY === 'hidden' || s.overflow === 'hidden') ? el.scrollHeight - el.clientHeight : 0);
    if (ov > 1 && (s.overflow === 'hidden' || s.overflowX === 'hidden' || s.textOverflow === 'ellipsis' || s.whiteSpace === 'nowrap')) m[sel(el)] = ov; } m.__docW = document.documentElement.scrollWidth - innerWidth; return m; };
  const before = clip();
  const targets = document.querySelectorAll('button, a, label, h1, h2, h3, h4, th, td, li, [role=tab], [role=menuitem], .badge, .chip, .tag');
  for (const el of targets) for (const n of el.childNodes) if (n.nodeType === 3 && n.textContent.trim().length > 1) { const t = n.textContent; n.textContent = t + ' ' + t.trim().slice(0, Math.ceil(t.trim().length * 0.4)); }
  const after = clip();
  const worse = Object.keys(after).filter((k) => k !== '__docW' && after[k] > (before[k] || 0) + 4);
  return { newClips: worse.slice(0, 12), docOverflowAdded: Math.max(0, after.__docW - Math.max(0, before.__docW)) };
};

const perWidth = [];
for (const w of widths) {
  const { ctx, page } = await open(w);
  const r = await page.evaluate(analyze, [w, heightFor(w)]);
  if (shots) await page.screenshot({ path: `${outBase}-${w}.png` });
  perWidth.push(r);
  await ctx.close();
}

// Text expansion at the smallest width
const small = Math.min(...widths);
let expansion = null;
{ const { ctx, page } = await open(small); expansion = await page.evaluate(expand); await ctx.close(); }

// Dark mode support (informational)
let darkMode = null;
{ const ctxL = await open(1280, { colorScheme: 'light' }); const a = await ctxL.page.screenshot(); await ctxL.ctx.close();
  const ctxD = await open(1280, { colorScheme: 'dark' }); const b = await ctxD.page.screenshot(); await ctxD.ctx.close();
  darkMode = !a.equals(b); }

// Performance under throttled mobile conditions (optional)
let perf = null;
if (doPerf) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 800 }, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  const cdp = await ctx.newCDPSession(page);
  await cdp.send('Network.enable');
  await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: (1.6 * 1024 * 1024) / 8, uploadThroughput: (750 * 1024) / 8 });
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  let bytes = 0, reqs = 0; const byType = {};
  cdp.on('Network.loadingFinished', (e) => { bytes += e.encodedDataLength || 0; reqs++; });
  const types = {}; cdp.on('Network.responseReceived', (e) => { types[e.requestId] = e.type; });
  cdp.on('Network.loadingFinished', (e) => { const t = types[e.requestId] || 'Other'; byType[t] = (byType[t] || 0) + (e.encodedDataLength || 0); });
  await page.addInitScript(() => {
    window.__lcp = 0; window.__cls = 0;
    new PerformanceObserver((l) => { for (const e of l.getEntries()) window.__lcp = e.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; }).observe({ type: 'layout-shift', buffered: true });
  });
  const t0 = Date.now();
  await page.goto(url, { waitUntil: 'load', timeout: 120000 }).catch(() => {});
  const loadMs = Date.now() - t0;
  await page.waitForTimeout(2500);
  const m = await page.evaluate(() => ({ lcp: Math.round(window.__lcp), cls: +window.__cls.toFixed(3), dcl: Math.round(performance.getEntriesByType('navigation')[0]?.domContentLoadedEventEnd || 0) }));
  perf = { loadMs, ...m, kb: Math.round(bytes / 1024), reqs, byTypeKB: Object.fromEntries(Object.entries(byType).map(([k, v]) => [k, Math.round(v / 1024)])) };
  await ctx.close();
}
await browser.close();

// ---------------- Report ----------------
const flags = [];
const add = (cat, msg, ex = []) => flags.push({ cat, msg, ex: ex.slice(0, 8) });
for (const r of perWidth) {
  const w = r.W, mob = w <= 480, tab = w > 480 && w <= 1024;
  if (r.layoutW > w + 1) add('Layout', `Di ${w}px browser mobile memperkecil seluruh halaman (layout melebar ke ${r.layoutW}px) karena ada konten yang lebih lebar dari layar. Pengguna melihat teks kecil dan harus zoom atau scroll ke samping.`, r.overflow);
  else if (r.docW > w + 1) add('Layout', `Scroll horizontal di lebar ${w}px (lebar dokumen ${r.docW}px).`, r.overflow);
  else if (r.overflow.length) add('Layout', `Elemen keluar dari layar di ${w}px (kemungkinan terpotong tanpa scroll).`, r.overflow);
  if (r.truncated.length) add('Teks terpotong', `Teks terpotong (ellipsis atau clip) di ${w}px. Pastikan teks lengkap bisa dibaca (tooltip, baris kedua, atau halaman detail).`, r.truncated);
  if (r.tables.length) add('Tabel', `Tabel lebih lebar dari layar di ${w}px tanpa wadah scroll.`, r.tables);
  if (mob && r.smallText.length) add('Teks kecil', `Teks di bawah 12px di ${w}px.`, r.smallText);
  if (mob && r.inputSmallFont.length) add('Input', `Font input di bawah 16px di ${w}px. Safari iOS akan memperbesar halaman otomatis saat input disentuh.`, r.inputSmallFont);
  if ((mob || tab) && r.stickyCoverPct > 25) add('Sticky', `Elemen fixed/sticky menutupi ${r.stickyCoverPct}% tinggi layar di ${w}px. Sisakan ruang yang cukup untuk konten, apalagi saat keyboard terbuka.`, r.sticky);
  if (mob && r.primary) add('Aksi utama', `Kandidat aksi utama di ${w}px: ${r.primary.sel} "${r.primary.text}" pada y=${r.primary.y}px, ${r.primary.aboveFold ? 'terlihat tanpa scroll' : 'di bawah lipatan layar'}, area ${r.primary.zone}. Nilai apakah posisinya sesuai tugas dan mudah dijangkau jempol.`);
  if (mob && r.imgOversized.length) add('Gambar', `Gambar jauh lebih besar dari ukuran tampilnya di ${w}px (boros data). Gunakan srcset atau ukuran yang sesuai.`, r.imgOversized);
}
const first = perWidth[0];
const kbAll = [...new Set(perWidth.flatMap((r) => r.keyboardType))];
if (kbAll.length) add('Input', 'Field yang keyboard mobile-nya kemungkinan tidak sesuai (email, telepon, angka).', kbAll);
if (first && first.imgNoDims.length) add('Gambar', 'Gambar tanpa atribut width/height atau aspect-ratio. Berisiko menggeser layout saat dimuat (CLS).', first.imgNoDims);
if (first && first.hoverOnly.length) add('Hover', 'Aturan CSS yang memunculkan konten hanya saat :hover tanpa padanan :focus. Konten ini tidak bisa diakses di layar sentuh dan keyboard.', first.hoverOnly);
if (expansion && (expansion.newClips.length || expansion.docOverflowAdded > 0)) add('Data panjang', `Saat teks label dan data diperpanjang 40% (simulasi nama panjang, data panjang, atau terjemahan) di ${small}px, muncul pemotongan baru${expansion.docOverflowAdded ? ` dan scroll horizontal ${expansion.docOverflowAdded}px` : ''}.`, expansion.newClips);
const sizesByW = perWidth.map((r) => `${r.W}px: ${r.bodySizes.join(', ') || '-'}`);

const md = [
  '# Audit responsif dan konteks penggunaan', '', `- URL: ${url}`, `- Lebar yang diuji: ${widths.join(', ')} px (<=480 diemulasikan sebagai perangkat mobile sentuh)`,
  `- Dukungan dark mode (prefers-color-scheme): ${darkMode ? 'ada perubahan tampilan' : 'tidak ada perubahan'}`,
  `- Media query hover/pointer dipakai: ${first?.hasHoverMQ ? 'ya' : 'tidak terdeteksi'}`, '',
  'Semua butir adalah kandidat. Nilai terhadap perangkat dan kondisi yang benar-benar dipakai pengguna target.', '',
  '## Catatan', ...(flags.length ? flags.flatMap((f) => [`- [${f.cat}] ${f.msg}`, ...f.ex.map((e) => `  - ${e}`)]) : ['- Tidak ada kandidat masalah.']), '',
  '## Ringkasan per lebar', '| Lebar | Lebar dokumen | Tinggi dokumen | Overflow | Teks terpotong | Sticky menutupi | Aksi utama terlihat tanpa scroll |', '|---|---|---|---|---|---|---|',
  ...perWidth.map((r) => `| ${r.W} | ${r.docW} | ${r.docH} | ${r.docW > r.W + 1 ? 'ya' : 'tidak'} | ${r.truncated.length} | ${r.stickyCoverPct}% | ${r.primary ? (r.primary.aboveFold ? 'ya' : 'tidak') : '-'} |`), '',
  '## Ukuran teks isi per lebar', ...sizesByW.map((s) => `- ${s}`), '',
  ...(perf ? ['## Performa (emulasi 4G lambat 1,6 Mbps, latensi 150 ms, CPU 4x lebih lambat, 390px)', `- Waktu load: ${perf.loadMs} ms; DOMContentLoaded: ${perf.dcl} ms`, `- LCP: ${perf.lcp} ms (baik <= 2500 ms); CLS: ${perf.cls} (baik <= 0,1)`, `- Total transfer: ${perf.kb} KB dalam ${perf.reqs} request`, `- Per jenis (KB): ${Object.entries(perf.byTypeKB).map(([k, v]) => `${k} ${v}`).join(', ')}`, '- INP (respons interaksi) tidak bisa diukur tanpa interaksi nyata; cek manual atau dari data lapangan.', ''] : ['## Performa', '- Tidak dijalankan. Tambahkan --perf untuk URL yang di-host (hasil untuk file lokal tidak mewakili jaringan nyata).', '']),
  shots ? `Screenshot: ${widths.map((w) => `${path.basename(outBase)}-${w}.png`).join(', ')}` : '',
];
fs.writeFileSync(`${outBase}.md`, md.join('\n'));
fs.writeFileSync(`${outBase}.json`, JSON.stringify({ url, widths, flags, perWidth, expansion, darkMode, perf }, null, 2));
console.log(`Selesai: ${flags.length} catatan. Laporan: ${outBase}.md`);
