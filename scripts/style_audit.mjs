#!/usr/bin/env node
// Visual hierarchy and consistency audit for the comprehensive-design-review skill.
// Inventories computed styles (type scale, weights, families, colors, spacing,
// radii, shadows, button variants) and produces a normal and a blurred screenshot
// for the squint test.
//
// Usage:
//   node style_audit.mjs <url-or-local-html-path> [--out style-report] [--width 1280]
// Output:
//   <out>.md, <out>.json, <out>-normal.png, <out>-blur.png
// Requirements: npm i playwright (uses /usr/bin/google-chrome if bundled Chromium is missing)

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
if (!args[0]) { console.error('Usage: node style_audit.mjs <url-or-file> [--out style-report] [--width 1280]'); process.exit(1); }
const opt = (n, d) => { const i = args.indexOf(n); return i >= 0 && args[i + 1] ? args[i + 1] : d; };
const target = args[0];
const outBase = opt('--out', 'style-report');
const width = parseInt(opt('--width', '1280'), 10);
const url = /^https?:\/\//i.test(target) || target.startsWith('file:') ? target : pathToFileURL(path.resolve(target)).href;

const browser = await chromium.launch().catch(() => chromium.launch({ executablePath: '/usr/bin/google-chrome' }));
const page = await browser.newPage({ viewport: { width, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => page.goto(url, { waitUntil: 'load', timeout: 60000 }));
await page.waitForTimeout(500);

const data = await page.evaluate(() => {
  const vis = (el) => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && parseFloat(s.opacity) > 0; };
  const sel = (el) => { let p = el.tagName.toLowerCase(); if (el.id) return p + '#' + el.id; if (el.classList.length) p += '.' + [...el.classList].slice(0, 2).join('.'); return p; };
  const count = (map, key, el) => { if (!key) return; if (!map[key]) map[key] = { n: 0, ex: [] }; map[key].n++; if (map[key].ex.length < 3) map[key].ex.push(sel(el)); };
  const toHex = (c) => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const [r, g, b, a = 1] = m[1].split(',').map((x) => parseFloat(x));
    if (a === 0) return null; return '#' + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('') + (a < 1 ? `@${a}` : ''); };
  const sat = (hex) => { const h = hex.slice(1, 7); const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b); const l = (mx + mn) / 2; return mx === mn ? 0 : (l > 0.5 ? (mx - mn) / (2 - mx - mn) : (mx - mn) / (mx + mn)); };

  const textEls = [...document.querySelectorAll('body *')].filter((el) => vis(el) &&
    [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 1));
  const all = [...document.querySelectorAll('body *')].filter(vis);

  const fontSize = {}, fontWeight = {}, fontFamily = {}, lineHeight = {}, textColor = {}, bgColor = {}, borderColor = {},
    radius = {}, shadow = {}, spacing = {}, letterCase = {};
  for (const el of textEls) {
    const s = getComputedStyle(el);
    count(fontSize, s.fontSize, el); count(fontWeight, s.fontWeight, el);
    count(fontFamily, s.fontFamily.split(',')[0].replace(/["']/g, '').trim(), el);
    const fs = parseFloat(s.fontSize); const lh = s.lineHeight === 'normal' ? 'normal' : (parseFloat(s.lineHeight) / fs).toFixed(2);
    count(lineHeight, `${s.fontSize} / ${lh}`, el);
    count(textColor, toHex(s.color), el);
    if (s.textTransform === 'uppercase') count(letterCase, 'uppercase', el);
  }
  for (const el of all) {
    const s = getComputedStyle(el);
    count(bgColor, toHex(s.backgroundColor), el);
    if (parseFloat(s.borderTopWidth) > 0 && s.borderTopStyle !== 'none') count(borderColor, toHex(s.borderTopColor), el);
    if (s.borderRadius !== '0px') count(radius, s.borderRadius, el);
    if (s.boxShadow !== 'none') count(shadow, s.boxShadow, el);
    for (const p of ['marginTop', 'marginBottom', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 'rowGap', 'columnGap']) {
      const v = parseFloat(s[p]); if (v > 0) count(spacing, `${Math.round(v)}px`, el);
    }
  }

  // Button-like variants: group by visual signature
  const btnEls = [...document.querySelectorAll('button,[role=button],a.btn,a[class*=button],input[type=submit],input[type=button]')].filter(vis);
  const buttons = {};
  for (const el of btnEls) {
    const s = getComputedStyle(el);
    const sig = `bg ${toHex(s.backgroundColor) || 'transparent'} | text ${toHex(s.color)} | radius ${s.borderRadius} | border ${parseFloat(s.borderTopWidth) > 0 ? toHex(s.borderTopColor) : 'none'} | font ${s.fontSize} ${s.fontWeight} | h ${Math.round(el.getBoundingClientRect().height)}px`;
    count(buttons, sig, el);
  }

  // Headings hierarchy
  const headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter(vis).map((h) => {
    const s = getComputedStyle(h); return { tag: h.tagName.toLowerCase(), size: parseFloat(s.fontSize), weight: s.fontWeight, text: h.innerText.trim().slice(0, 50) };
  });

  // Largest / most salient text elements (top 8 by font-size x weight x area)
  const salient = textEls.map((el) => { const s = getComputedStyle(el); const r = el.getBoundingClientRect();
    return { sel: sel(el), text: el.innerText.trim().slice(0, 40), size: parseFloat(s.fontSize), weight: parseInt(s.fontWeight, 10), y: Math.round(r.top + scrollY) }; })
    .sort((a, b) => b.size * b.weight - a.size * a.weight).slice(0, 8);

  // Saturated accent colors in backgrounds of interactive or text
  const accents = Object.keys({ ...bgColor, ...textColor }).filter((h) => h && sat(h) > 0.45);

  // Alignment: distinct left edges of block text elements
  const lefts = {};
  for (const el of textEls) { if (getComputedStyle(el).display.startsWith('inline')) continue; const x = Math.round(el.getBoundingClientRect().left); lefts[x] = (lefts[x] || 0) + 1; }

  return { fontSize, fontWeight, fontFamily, lineHeight, textColor, bgColor, borderColor, radius, shadow, spacing, letterCase, buttons, headings, salient, accents, lefts,
    viewport: { w: innerWidth, h: innerHeight }, docHeight: document.documentElement.scrollHeight };
});

await page.screenshot({ path: `${outBase}-normal.png`, fullPage: false });
await page.addStyleTag({ content: 'html{filter:blur(8px)}' });
await page.waitForTimeout(200);
await page.screenshot({ path: `${outBase}-blur.png`, fullPage: false });
await browser.close();

// ---------- Analysis ----------
const keys = (m) => Object.keys(m);
const sortBy = (m) => Object.entries(m).sort((a, b) => b[1].n - a[1].n);
const flags = [];
const nSizes = keys(data.fontSize).length;
if (nSizes > 8) flags.push(`Ada ${nSizes} ukuran huruf berbeda; skala tipografi biasanya cukup 5 sampai 8 tingkat.`);
const sizesNum = keys(data.fontSize).map(parseFloat).sort((a, b) => a - b);
const close = []; for (let i = 1; i < sizesNum.length; i++) if (sizesNum[i] - sizesNum[i - 1] > 0 && sizesNum[i] / sizesNum[i - 1] < 1.08) close.push(`${sizesNum[i - 1]}px dan ${sizesNum[i]}px`);
if (close.length) flags.push(`Ukuran huruf yang terlalu mirip sehingga perbedaan hierarkinya tidak terasa: ${close.join('; ')}.`);
if (keys(data.fontFamily).length > 2) flags.push(`Ada ${keys(data.fontFamily).length} keluarga huruf (${keys(data.fontFamily).join(', ')}); umumnya cukup 1 sampai 2.`);
if (keys(data.fontWeight).length > 4) flags.push(`Ada ${keys(data.fontWeight).length} ketebalan huruf (${keys(data.fontWeight).join(', ')}); umumnya cukup 2 sampai 3.`);
if (data.accents.length > 4) flags.push(`Ada ${data.accents.length} warna jenuh (${data.accents.slice(0, 8).join(', ')}); terlalu banyak warna aksen melemahkan titik fokus.`);
const offScale = keys(data.spacing).filter((v) => parseFloat(v) % 4 !== 0 && parseFloat(v) > 2);
if (offScale.length) flags.push(`Nilai jarak di luar kelipatan 4: ${offScale.slice(0, 15).join(', ')}${offScale.length > 15 ? ', ...' : ''}.`);
if (keys(data.spacing).length > 12) flags.push(`Ada ${keys(data.spacing).length} nilai jarak berbeda; skala spacing biasanya 6 sampai 10 nilai.`);
if (keys(data.radius).length > 4) flags.push(`Ada ${keys(data.radius).length} nilai border radius berbeda.`);
if (keys(data.shadow).length > 4) flags.push(`Ada ${keys(data.shadow).length} gaya bayangan berbeda; level elevasi biasanya cukup 2 sampai 4.`);
if (keys(data.buttons).length > 4) flags.push(`Ada ${keys(data.buttons).length} variasi tampilan tombol; periksa apakah semuanya mewakili tingkat kepentingan yang berbeda.`);
const h = data.headings;
for (let i = 1; i < h.length; i++) {
  const lvA = +h[i - 1].tag[1], lvB = +h[i].tag[1];
  if (lvB > lvA && h[i].size > h[i - 1].size) flags.push(`Heading tingkat lebih rendah tampil lebih besar: ${h[i].tag} "${h[i].text}" (${h[i].size}px) setelah ${h[i - 1].tag} "${h[i - 1].text}" (${h[i - 1].size}px).`);
}
const h1 = h.filter((x) => x.tag === 'h1');
if (h1.length > 1) flags.push(`Ada ${h1.length} h1 yang terlihat; titik fokus judul bisa terpecah.`);
const leftEdges = Object.entries(data.lefts).filter(([, n]) => n >= 1).length;
if (leftEdges > 10) flags.push(`Ada ${leftEdges} posisi tepi kiri teks yang berbeda; periksa apakah elemen mengikuti grid.`);

const list = (m, max = 12) => sortBy(m).slice(0, max).map(([k, v]) => `- \`${k}\` dipakai ${v.n}x (contoh: ${v.ex.join(', ')})`).join('\n') || '- (tidak ada)';
const md = [
  '# Audit hierarki visual dan konsistensi', '', `- URL: ${url}`, `- Viewport: ${data.viewport.w}x${data.viewport.h}, tinggi dokumen ${data.docHeight}px`,
  `- Screenshot: ${path.basename(outBase)}-normal.png dan ${path.basename(outBase)}-blur.png (untuk squint test)`, '',
  '## Catatan otomatis', flags.length ? flags.map((f) => `- ${f}`).join('\n') : '- Tidak ada pola yang mencolok.', '',
  '## Elemen teks paling menonjol (ukuran x ketebalan)', data.salient.map((x, i) => `${i + 1}. ${x.sel} "${x.text}" ${x.size}px/${x.weight}, y=${x.y}`).join('\n'), '',
  '## Heading', data.headings.map((x) => `- ${x.tag} ${x.size}px/${x.weight} "${x.text}"`).join('\n') || '- (tidak ada)', '',
  '## Ukuran huruf', list(data.fontSize), '', '## Ketebalan huruf', list(data.fontWeight), '', '## Keluarga huruf', list(data.fontFamily), '',
  '## Ukuran huruf / line-height', list(data.lineHeight), '', '## Warna teks', list(data.textColor), '', '## Warna latar', list(data.bgColor), '',
  '## Warna border', list(data.borderColor), '', '## Nilai jarak (margin, padding, gap)', list(data.spacing, 20), '', '## Border radius', list(data.radius), '',
  '## Bayangan', list(data.shadow, 8), '', '## Variasi tombol', list(data.buttons, 10), '',
];
fs.writeFileSync(`${outBase}.md`, md.join('\n'));
fs.writeFileSync(`${outBase}.json`, JSON.stringify({ url, flags, ...data }, null, 2));
console.log(`Selesai: ${flags.length} catatan. Laporan: ${outBase}.md`);
