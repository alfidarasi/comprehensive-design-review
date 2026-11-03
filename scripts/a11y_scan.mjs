#!/usr/bin/env node
// Automated WCAG 2.2 (A, AA, AAA) scan for the comprehensive-design-review skill.
// Runs axe-core plus custom checks that axe does not cover (target size, reflow,
// text spacing, keyboard traversal, focus visibility, focus obscured, etc.).
//
// Usage:
//   node a11y_scan.mjs <url-or-local-html-path> [--out report] [--max-tabs 150]
// Output:
//   <out>.json (raw results) and <out>.md (summary grouped by WCAG criterion)
//
// Requirements (install in a scratch folder, not in the user's project):
//   npm i playwright axe-core
// Uses the bundled Chromium if present, otherwise /usr/bin/google-chrome.

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
const axeSource = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');

// ---------- args ----------
const args = process.argv.slice(2);
if (!args[0]) {
  console.error('Usage: node a11y_scan.mjs <url-or-file> [--out report] [--max-tabs 150]');
  process.exit(1);
}
const target = args[0];
const opt = (name, def) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : def;
};
const outBase = opt('--out', 'a11y-report');
const maxTabs = parseInt(opt('--max-tabs', '150'), 10);
const url = /^https?:\/\//i.test(target) || target.startsWith('file:')
  ? target
  : pathToFileURL(path.resolve(target)).href;

// ---------- WCAG metadata ----------
const SC = {
  '1.1.1': ['Non-text Content', 'A'], '1.2.1': ['Audio-only and Video-only (Prerecorded)', 'A'],
  '1.2.2': ['Captions (Prerecorded)', 'A'], '1.2.3': ['Audio Description or Media Alternative', 'A'],
  '1.2.5': ['Audio Description (Prerecorded)', 'AA'], '1.2.8': ['Media Alternative (Prerecorded)', 'AAA'],
  '1.3.1': ['Info and Relationships', 'A'], '1.3.2': ['Meaningful Sequence', 'A'],
  '1.3.3': ['Sensory Characteristics', 'A'], '1.3.4': ['Orientation', 'AA'],
  '1.3.5': ['Identify Input Purpose', 'AA'], '1.3.6': ['Identify Purpose', 'AAA'],
  '1.4.1': ['Use of Color', 'A'], '1.4.2': ['Audio Control', 'A'], '1.4.3': ['Contrast (Minimum)', 'AA'],
  '1.4.4': ['Resize Text', 'AA'], '1.4.5': ['Images of Text', 'AA'], '1.4.6': ['Contrast (Enhanced)', 'AAA'],
  '1.4.8': ['Visual Presentation', 'AAA'], '1.4.10': ['Reflow', 'AA'], '1.4.11': ['Non-text Contrast', 'AA'],
  '1.4.12': ['Text Spacing', 'AA'], '1.4.13': ['Content on Hover or Focus', 'AA'],
  '2.1.1': ['Keyboard', 'A'], '2.1.2': ['No Keyboard Trap', 'A'], '2.1.3': ['Keyboard (No Exception)', 'AAA'],
  '2.1.4': ['Character Key Shortcuts', 'A'], '2.2.1': ['Timing Adjustable', 'A'],
  '2.2.2': ['Pause, Stop, Hide', 'A'], '2.2.4': ['Interruptions', 'AAA'],
  '2.3.3': ['Animation from Interactions', 'AAA'], '2.4.1': ['Bypass Blocks', 'A'],
  '2.4.2': ['Page Titled', 'A'], '2.4.3': ['Focus Order', 'A'], '2.4.4': ['Link Purpose (In Context)', 'A'],
  '2.4.6': ['Headings and Labels', 'AA'], '2.4.7': ['Focus Visible', 'AA'],
  '2.4.9': ['Link Purpose (Link Only)', 'AAA'], '2.4.10': ['Section Headings', 'AAA'],
  '2.4.11': ['Focus Not Obscured (Minimum)', 'AA'], '2.4.12': ['Focus Not Obscured (Enhanced)', 'AAA'],
  '2.4.13': ['Focus Appearance', 'AAA'], '2.5.3': ['Label in Name', 'A'],
  '2.5.5': ['Target Size (Enhanced)', 'AAA'], '2.5.8': ['Target Size (Minimum)', 'AA'],
  '3.1.1': ['Language of Page', 'A'], '3.1.2': ['Language of Parts', 'AA'],
  '3.2.5': ['Change on Request', 'AAA'], '3.3.2': ['Labels or Instructions', 'A'],
  '3.3.8': ['Accessible Authentication (Minimum)', 'AA'], '4.1.2': ['Name, Role, Value', 'A'],
  '4.1.3': ['Status Messages', 'AA'],
};

const findings = []; // {sc, status: 'fail'|'candidate', source, rule, message, targets[]}
const add = (sc, status, source, rule, message, targets = []) =>
  findings.push({ sc, status, source, rule, message, targets: targets.slice(0, 15), count: targets.length });

// ---------- browser ----------
async function launch() {
  try { return await chromium.launch(); }
  catch { return await chromium.launch({ executablePath: '/usr/bin/google-chrome' }); }
}

const browser = await launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await context.newPage();
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(async () => {
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
});
await page.waitForTimeout(500);

// Helper injected into pages: builds a short CSS selector for reporting.
const SELECTOR_FN = `
window.__sel = function(el){
  if(!el || el.nodeType!==1) return '';
  if(el.id) return '#'+CSS.escape(el.id);
  const parts=[];
  while(el && el.nodeType===1 && parts.length<4){
    let p=el.tagName.toLowerCase();
    if(el.classList.length) p+='.'+[...el.classList].slice(0,2).map(c=>CSS.escape(c)).join('.');
    const sib=el.parentElement?[...el.parentElement.children].filter(c=>c.tagName===el.tagName):[];
    if(sib.length>1) p+=':nth-of-type('+(sib.indexOf(el)+1)+')';
    parts.unshift(p);
    if(el.id) break;
    el=el.parentElement;
  }
  return parts.join(' > ');
};`;
await page.addInitScript(SELECTOR_FN);
await page.evaluate(SELECTOR_FN);

// ---------- 1. axe-core ----------
await page.evaluate(axeSource);
const axe = await page.evaluate(async () => {
  return await window.axe.run(document, {
    runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag2aaa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] },
    resultTypes: ['violations', 'incomplete'],
  });
});
const scFromTags = (tags) => tags
  .filter((t) => /^wcag\d{3,4}$/.test(t))
  .map((t) => { const d = t.slice(4); return d.length === 3 ? `${d[0]}.${d[1]}.${d[2]}` : `${d[0]}.${d[1]}.${d.slice(2)}`; });
for (const [list, status] of [[axe.violations, 'fail'], [axe.incomplete, 'candidate']]) {
  for (const v of list) {
    const scs = scFromTags(v.tags);
    const targets = v.nodes.map((n) => n.target.join(' '));
    if (scs.length === 0) add('best-practice', status, 'axe', v.id, v.help, targets);
    for (const sc of scs) add(sc, status, 'axe', v.id, v.help, targets);
  }
}

// ---------- 2. Static DOM checks ----------
const stat = await page.evaluate(() => {
  const vis = (el) => {
    const r = el.getBoundingClientRect(); const s = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && s.opacity !== '0';
  };
  const out = {};
  const interactiveSel = 'a[href],button,input:not([type=hidden]),select,textarea,summary,[role=button],[role=link],[role=checkbox],[role=radio],[role=tab],[role=menuitem],[role=switch],[tabindex]:not([tabindex="-1"])';
  const targets = [...document.querySelectorAll(interactiveSel)].filter(vis);

  // Target size (2.5.8 AA = 24px with spacing exception, 2.5.5 AAA = 44px)
  const boxes = targets.map((el) => ({ el, r: el.getBoundingClientRect() }));
  const isInlineLink = (el) => el.tagName === 'A' && el.parentElement &&
    [...el.parentElement.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 0);
  out.small24 = []; out.small44 = [];
  for (const b of boxes) {
    if (isInlineLink(b.el)) continue;
    const w = b.r.width, h = b.r.height;
    if (w < 44 || h < 44) out.small44.push(__sel(b.el) + ` (${Math.round(w)}x${Math.round(h)})`);
    if (w < 24 || h < 24) {
      // Spacing exception: 24px circle centered on target must not intersect another target or its circle.
      const cx = b.r.left + w / 2, cy = b.r.top + h / 2;
      const crowded = boxes.some((o) => {
        if (o === b) return false;
        const ox = o.r.left + o.r.width / 2, oy = o.r.top + o.r.height / 2;
        return Math.hypot(cx - ox, cy - oy) < 24;
      });
      if (crowded) out.small24.push(__sel(b.el) + ` (${Math.round(w)}x${Math.round(h)})`);
    }
  }

  // Label in Name (2.5.3)
  out.labelInName = [];
  for (const el of targets) {
    const al = el.getAttribute('aria-label');
    const txt = (el.innerText || el.value || '').replace(/\s+/g, ' ').trim().toLowerCase();
    if (al && txt && txt.length > 1 && !al.toLowerCase().includes(txt)) out.labelInName.push(`${__sel(el)} visible="${txt.slice(0, 40)}" aria-label="${al.slice(0, 40)}"`);
  }

  // Input purpose (1.3.5)
  const personal = /(e-?mail|surel|phone|tel|telp|hp|whatsapp|wa|nama|name|alamat|address|kota|city|kode.?pos|postal|zip|username|user|password|sandi|birth|lahir|negara|country|organi[sz]ation|instansi)/i;
  const validTokens = new Set('name honorific-prefix given-name additional-name family-name honorific-suffix nickname username new-password current-password one-time-code organization-title organization street-address address-line1 address-line2 address-line3 address-level4 address-level3 address-level2 address-level1 country country-name postal-code cc-name cc-given-name cc-additional-name cc-family-name cc-number cc-exp cc-exp-month cc-exp-year cc-csc cc-type transaction-currency transaction-amount language bday bday-day bday-month bday-year sex url photo tel tel-country-code tel-national tel-area-code tel-local tel-local-prefix tel-local-suffix tel-extension email impp off on webauthn'.split(' '));
  out.autocompleteMissing = []; out.autocompleteInvalid = [];
  for (const el of document.querySelectorAll('input:not([type=hidden]):not([type=submit]):not([type=button]):not([type=checkbox]):not([type=radio]),select,textarea')) {
    if (!vis(el)) continue;
    const ac = (el.getAttribute('autocomplete') || '').trim();
    const hint = [el.name, el.id, el.type, el.placeholder, el.getAttribute('aria-label')].join(' ');
    if (!ac && (personal.test(hint) || ['email', 'tel', 'password'].includes(el.type))) out.autocompleteMissing.push(__sel(el));
    if (ac) {
      const last = ac.split(/\s+/).filter((t) => !/^(section-|shipping|billing|home|work|mobile|fax|pager)/.test(t)).pop();
      if (last && !validTokens.has(last)) out.autocompleteInvalid.push(`${__sel(el)} autocomplete="${ac}"`);
    }
  }

  // Placeholder used as the only label (3.3.2)
  out.placeholderOnly = [...document.querySelectorAll('input[placeholder],textarea[placeholder]')].filter(vis).filter((el) =>
    !el.labels?.length && !el.getAttribute('aria-labelledby') && !el.getAttribute('aria-label') && !el.title).map(__sel);

  // Generic link text (2.4.4 / 2.4.9)
  const generic = /^(klik di ?sini|di ?sini|sini|selengkapnya|baca selengkapnya|lihat|lihat detail|detail|lanjut|more|read more|click here|here|learn more|link|tautan|info|lainnya)$/i;
  out.genericLinks = [...document.querySelectorAll('a[href]')].filter(vis).filter((a) => generic.test((a.innerText || '').trim()))
    .map((a) => `${__sel(a)} "${a.innerText.trim()}"${a.getAttribute('aria-label') || a.getAttribute('aria-describedby') ? ' (punya aria-label/describedby, periksa isinya)' : ''}`);

  // Sensory characteristics (1.3.3)
  const sensory = /(tombol|ikon|kotak|lingkaran|button|icon)\s+(merah|hijau|biru|kuning|oranye|abu|bulat|kotak|segitiga|red|green|blue|yellow|round|square)|(di|sebelah|pada sisi)\s+(kanan|kiri|atas|bawah)|(on the|to the)\s+(right|left|top|bottom)|(shown|marked)\s+in\s+(red|green|blue)|bertanda\s+(merah|hijau|bintang)/gi;
  const bodyText = document.body.innerText || '';
  out.sensory = [...new Set((bodyText.match(sensory) || []).map((m) => m.trim()))];

  // Positive tabindex (2.4.3)
  out.positiveTabindex = [...document.querySelectorAll('[tabindex]')].filter((el) => parseInt(el.getAttribute('tabindex'), 10) > 0).map(__sel);

  // Click handlers on non-focusable elements (2.1.1)
  out.clickNonFocusable = [...document.querySelectorAll('[onclick],[ng-click],[v-on\\:click],[\\@click]')]
    .filter((el) => vis(el) && !el.matches(interactiveSel)).map(__sel);
  out.cursorPointerNonFocusable = [...document.querySelectorAll('div,span,li,img,svg,i,td')]
    .filter((el) => vis(el) && getComputedStyle(el).cursor === 'pointer' && !el.closest(interactiveSel) && !el.querySelector(interactiveSel))
    .slice(0, 50).map(__sel);

  // Viewport meta (1.4.4)
  const vp = document.querySelector('meta[name=viewport]')?.content || '';
  out.viewportMeta = vp;
  out.zoomBlocked = /user-scalable\s*=\s*(no|0)/i.test(vp) || (() => { const m = vp.match(/maximum-scale\s*=\s*([\d.]+)/i); return m && parseFloat(m[1]) < 2; })();

  // Meta refresh (2.2.1 / 3.2.5)
  out.metaRefresh = document.querySelector('meta[http-equiv="refresh" i]')?.content || null;

  // New window without warning (3.2.5 AAA)
  out.newWindowNoWarning = [...document.querySelectorAll('a[target=_blank]')].filter(vis).filter((a) =>
    !/(tab baru|jendela baru|new tab|new window|opens in)/i.test((a.innerText || '') + ' ' + (a.getAttribute('aria-label') || '') + ' ' + (a.title || ''))).map(__sel);

  // Media (1.2.x, 1.4.2)
  out.media = [...document.querySelectorAll('video,audio')].map((m) => ({
    sel: __sel(m), tag: m.tagName.toLowerCase(), autoplay: m.autoplay, muted: m.muted, controls: m.controls,
    captions: !!m.querySelector('track[kind=captions],track[kind=subtitles]'),
    descriptions: !!m.querySelector('track[kind=descriptions]'),
  }));
  out.embeds = [...document.querySelectorAll('iframe')].map((f) => f.src).filter((s) => /youtube|vimeo|spotify|soundcloud/i.test(s));

  // Animations (2.2.2 / 2.3.3)
  out.infiniteAnimations = document.getAnimations ? [...new Set(document.getAnimations()
    .filter((a) => a.effect?.getComputedTiming?.().iterations === Infinity)
    .map((a) => __sel(a.effect.target)))] : [];
  out.marqueeBlink = [...document.querySelectorAll('marquee,blink')].map(__sel);
  let reducedMotionRule = false; let orientationRules = [];
  for (const sheet of document.styleSheets) {
    let rules; try { rules = sheet.cssRules; } catch { continue; }
    const walk = (rs) => { for (const r of rs) {
      if (r.media && /prefers-reduced-motion/.test(r.media.mediaText)) reducedMotionRule = true;
      if (r.media && /orientation/.test(r.media.mediaText)) orientationRules.push(r.media.mediaText);
      if (r.cssRules) walk(r.cssRules);
    } };
    walk(rules);
  }
  out.reducedMotionRule = reducedMotionRule; out.orientationRules = [...new Set(orientationRules)];

  // Visual presentation (1.4.8 AAA)
  out.justified = []; out.longLines = []; out.tightLineHeight = [];
  for (const p of [...document.querySelectorAll('p,li,dd,blockquote')].filter(vis).slice(0, 300)) {
    const s = getComputedStyle(p); const txt = (p.innerText || '').trim();
    if (txt.length < 120) continue;
    if (s.textAlign === 'justify') out.justified.push(__sel(p));
    const fs = parseFloat(s.fontSize); const lh = s.lineHeight === 'normal' ? fs * 1.2 : parseFloat(s.lineHeight);
    if (lh / fs < 1.5) out.tightLineHeight.push(`${__sel(p)} (${(lh / fs).toFixed(2)})`);
    const lines = Math.max(1, Math.round(p.getBoundingClientRect().height / lh));
    const cpl = txt.length / lines;
    if (lines > 1 && cpl > 80) out.longLines.push(`${__sel(p)} (~${Math.round(cpl)} karakter/baris)`);
  }

  // Long content without headings (2.4.10 AAA)
  out.headingCount = document.querySelectorAll('h1,h2,h3,h4,h5,h6,[role=heading]').length;
  out.textLength = bodyText.length;

  // Status messages (4.1.3)
  out.liveRegions = [...document.querySelectorAll('[role=status],[role=alert],[role=log],[aria-live]')].map(__sel);

  // Skip link (2.4.1)
  const firstFocusable = targets[0];
  out.firstFocusable = firstFocusable ? `${__sel(firstFocusable)} "${(firstFocusable.innerText || '').trim().slice(0, 40)}"` : null;
  out.skipLink = !!firstFocusable && firstFocusable.tagName === 'A' && /^#/.test(firstFocusable.getAttribute('href') || '') &&
    !!document.getElementById((firstFocusable.getAttribute('href') || '').slice(1));

  // Language (3.1.1)
  out.lang = document.documentElement.getAttribute('lang');
  out.title = document.title;

  // Password fields for paste test (3.3.8)
  out.passwordFields = [...document.querySelectorAll('input[type=password]')].map(__sel);
  out.captcha = !!document.querySelector('[class*=captcha i],[id*=captcha i],iframe[src*=recaptcha],iframe[src*=hcaptcha]');
  out.interactiveCount = targets.length;
  return out;
});

const s = stat;
if (s.small24.length) add('2.5.8', 'fail', 'custom', 'target-size-24', 'Target lebih kecil dari 24x24 CSS px dan terlalu berdekatan dengan target lain', s.small24);
if (s.small44.length) add('2.5.5', 'fail', 'custom', 'target-size-44', 'Target lebih kecil dari 44x44 CSS px', s.small44);
if (s.labelInName.length) add('2.5.3', 'fail', 'custom', 'label-in-name', 'aria-label tidak memuat teks yang terlihat', s.labelInName);
if (s.autocompleteMissing.length) add('1.3.5', 'candidate', 'custom', 'autocomplete-missing', 'Field data pribadi tanpa atribut autocomplete', s.autocompleteMissing);
if (s.autocompleteInvalid.length) add('1.3.5', 'fail', 'custom', 'autocomplete-invalid', 'Nilai autocomplete tidak valid', s.autocompleteInvalid);
if (s.placeholderOnly.length) add('3.3.2', 'fail', 'custom', 'placeholder-only-label', 'Placeholder dipakai sebagai satu-satunya label', s.placeholderOnly);
if (s.genericLinks.length) { add('2.4.4', 'candidate', 'custom', 'generic-link-text', 'Teks link generik, periksa apakah konteks sekitarnya cukup', s.genericLinks); add('2.4.9', 'fail', 'custom', 'generic-link-text', 'Teks link generik tidak menjelaskan tujuan tanpa konteks', s.genericLinks); }
if (s.sensory.length) add('1.3.3', 'candidate', 'custom', 'sensory-phrases', 'Instruksi yang mungkin hanya bergantung pada warna, bentuk, atau posisi', s.sensory);
if (s.positiveTabindex.length) add('2.4.3', 'candidate', 'custom', 'positive-tabindex', 'tabindex positif mengubah urutan fokus alami', s.positiveTabindex);
if (s.clickNonFocusable.length) add('2.1.1', 'fail', 'custom', 'click-handler-not-focusable', 'Elemen dengan click handler tidak bisa difokus keyboard', s.clickNonFocusable);
if (s.cursorPointerNonFocusable.length) add('2.1.1', 'candidate', 'custom', 'pointer-cursor-not-focusable', 'Elemen terlihat bisa diklik (cursor pointer) tetapi tidak bisa difokus keyboard', s.cursorPointerNonFocusable);
if (s.zoomBlocked) add('1.4.4', 'fail', 'custom', 'viewport-zoom-blocked', `Meta viewport membatasi zoom: "${s.viewportMeta}"`);
if (s.metaRefresh) { add('2.2.1', 'fail', 'custom', 'meta-refresh', `Meta refresh: "${s.metaRefresh}"`); add('3.2.5', 'fail', 'custom', 'meta-refresh', `Meta refresh: "${s.metaRefresh}"`); }
if (s.newWindowNoWarning.length) add('3.2.5', 'candidate', 'custom', 'new-window-no-warning', 'Link membuka tab baru tanpa pemberitahuan', s.newWindowNoWarning);
for (const m of s.media) {
  if (m.autoplay && !m.muted) add('1.4.2', 'fail', 'custom', 'autoplay-audio', 'Media berputar otomatis dengan suara', [m.sel]);
  if (m.tag === 'video' && !m.captions) add('1.2.2', 'candidate', 'custom', 'video-no-captions-track', 'Video tanpa track captions (periksa apakah caption tertanam di video)', [m.sel]);
  if (m.tag === 'video' && !m.descriptions) { add('1.2.3', 'candidate', 'custom', 'video-no-description', 'Video tanpa track descriptions; periksa transkrip atau audio description', [m.sel]); add('1.2.5', 'candidate', 'custom', 'video-no-description', 'Video tanpa track descriptions', [m.sel]); }
  if (m.tag === 'audio') add('1.2.1', 'candidate', 'custom', 'audio-transcript', 'Audio ditemukan; pastikan ada transkrip di dekatnya', [m.sel]);
}
if (s.embeds.length) add('1.2.2', 'candidate', 'custom', 'embedded-media', 'Media tersemat dari pihak ketiga; caption dan transkrip harus diperiksa', s.embeds);
if (s.infiniteAnimations.length || s.marqueeBlink.length) add('2.2.2', 'candidate', 'custom', 'infinite-animation', 'Animasi berulang tanpa henti; pastikan ada kontrol jeda bila >5 detik dan berjalan bersama konten lain', [...s.infiniteAnimations, ...s.marqueeBlink]);
if ((s.infiniteAnimations.length) && !s.reducedMotionRule) add('2.3.3', 'candidate', 'custom', 'no-reduced-motion', 'Ada animasi tetapi tidak ada aturan CSS prefers-reduced-motion');
if (s.orientationRules.length) add('1.3.4', 'candidate', 'custom', 'orientation-media-query', 'Ada CSS berbasis orientasi; pastikan konten tidak dikunci ke satu orientasi', s.orientationRules);
if (s.justified.length) add('1.4.8', 'fail', 'custom', 'justified-text', 'Teks rata kanan-kiri (justify)', s.justified);
if (s.longLines.length) add('1.4.8', 'fail', 'custom', 'line-length', 'Panjang baris melebihi 80 karakter', s.longLines);
if (s.tightLineHeight.length) add('1.4.8', 'fail', 'custom', 'line-height', 'Jarak baris di paragraf kurang dari 1.5', s.tightLineHeight);
if (s.textLength > 3000 && s.headingCount < 2) add('2.4.10', 'candidate', 'custom', 'few-headings', `Konten panjang (${s.textLength} karakter) dengan ${s.headingCount} heading`);
if (!s.skipLink && s.interactiveCount > 15) add('2.4.1', 'candidate', 'custom', 'no-skip-link', `Elemen fokus pertama bukan skip link (${s.firstFocusable}); periksa landmark atau skip link`);
if (s.captcha) add('3.3.8', 'candidate', 'custom', 'captcha', 'CAPTCHA terdeteksi; pastikan ada alternatif tanpa tes kognitif');
if (!s.liveRegions.length) add('4.1.3', 'candidate', 'custom', 'no-live-region', 'Tidak ada live region (role=status/alert/aria-live); pesan status dinamis kemungkinan tidak diumumkan screen reader');

// ---------- 3. Paste blocked on password (3.3.8) ----------
for (const sel of s.passwordFields) {
  const blocked = await page.evaluate((sel) => {
    const el = document.querySelector(sel); if (!el) return false;
    const ev = new ClipboardEvent('paste', { bubbles: true, cancelable: true, clipboardData: new DataTransfer() });
    el.dispatchEvent(ev); return ev.defaultPrevented;
  }, sel).catch(() => false);
  if (blocked) add('3.3.8', 'fail', 'custom', 'paste-blocked', 'Field password memblokir paste (menyulitkan password manager)', [sel]);
}

// ---------- 4. Keyboard traversal: 2.1.1, 2.1.2, 2.4.3, 2.4.7, 2.4.11, 2.4.12, 2.4.13 ----------
const traversal = [];
await page.evaluate(() => { document.activeElement?.blur(); window.scrollTo(0, 0); });
let stuckCount = 0; let last = null;
const limit = Math.min(maxTabs, Math.max(20, s.interactiveCount * 2 + 5));
for (let i = 0; i < limit; i++) {
  await page.keyboard.press('Tab');
  await page.waitForTimeout(60);
  const info = await page.evaluate(() => {
    const el = document.activeElement;
    if (!el || el === document.body || el === document.documentElement) return null;
    el.scrollIntoView({ block: 'nearest' });
    const r = el.getBoundingClientRect();
    // Obscured check: sample points inside the element
    const pts = [[0.5, 0.5], [0.1, 0.1], [0.9, 0.1], [0.1, 0.9], [0.9, 0.9]];
    let covered = 0;
    for (const [fx, fy] of pts) {
      const x = r.left + r.width * fx, y = r.top + r.height * fy;
      if (x < 0 || y < 0 || x > innerWidth || y > innerHeight) { covered++; continue; }
      const top = document.elementFromPoint(x, y);
      if (top && top !== el && !el.contains(top) && !top.contains(el)) {
        let n = top; let fixed = false;
        while (n && n !== document.body) { const p = getComputedStyle(n).position; if (p === 'fixed' || p === 'sticky') { fixed = true; break; } n = n.parentElement; }
        if (fixed) covered++;
      }
    }
    return { sel: __sel(el), x: r.left + scrollX, y: r.top + scrollY, w: r.width, h: r.height, covered, total: pts.length,
      vx: r.left, vy: r.top };
  });
  if (!info) { last = null; continue; }
  // Full cycle completed: focus is back at the first element.
  if (traversal.length > 1 && info.sel === traversal[0].sel) break;
  // Focus visible: compare element region focused vs blurred
  let visibleChange = null; let changedArea = 0;
  try {
    const clip = { x: Math.max(0, info.vx - 6), y: Math.max(0, info.vy - 6), width: Math.max(1, Math.min(info.w + 12, 1280)), height: Math.max(1, Math.min(info.h + 12, 900)) };
    const focused = await page.screenshot({ clip });
    await page.evaluate(() => { window.__lastFocus = document.activeElement; document.activeElement.blur(); });
    const blurred = await page.screenshot({ clip });
    await page.evaluate(() => window.__lastFocus?.focus({ preventScroll: true }));
    visibleChange = !focused.equals(blurred);
    changedArea = visibleChange ? 1 : 0;
  } catch { visibleChange = null; }
  info.focusVisible = visibleChange; info.changed = changedArea;
  if (last && last.sel === info.sel) stuckCount++; else stuckCount = 0;
  traversal.push(info);
  if (stuckCount >= 3) break;
  last = info;
}

const uniq = [...new Set(traversal.map((t) => t.sel))];
if (stuckCount >= 3) add('2.1.2', 'fail', 'custom', 'keyboard-trap', `Fokus tertahan di elemen yang sama setelah beberapa kali Tab`, [last?.sel]);
else {
  // Cycle within a subset smaller than the tabbable set suggests a trap (e.g., modal without escape)
  const tail = traversal.slice(-20).map((t) => t.sel);
  const tailUniq = new Set(tail);
  if (traversal.length >= limit && tailUniq.size < Math.min(5, uniq.length) && uniq.length < s.interactiveCount * 0.5)
    add('2.1.2', 'candidate', 'custom', 'keyboard-cycle', 'Fokus berputar di sekelompok kecil elemen; periksa kemungkinan jebakan keyboard', [...tailUniq]);
}
if (s.interactiveCount > 0 && uniq.length < s.interactiveCount * 0.6)
  add('2.1.1', 'candidate', 'custom', 'unreachable-by-tab', `Hanya ${uniq.length} dari ${s.interactiveCount} elemen interaktif yang tercapai dengan Tab (sebagian bisa wajar: elemen di dalam menu tertutup, radio group)`);
const noFocus = traversal.filter((t) => t.focusVisible === false).map((t) => t.sel);
if (noFocus.length) { add('2.4.7', 'fail', 'custom', 'focus-not-visible', 'Tidak ada perubahan visual saat elemen menerima fokus', [...new Set(noFocus)]); add('2.4.13', 'fail', 'custom', 'focus-not-visible', 'Indikator fokus tidak ada', [...new Set(noFocus)]); }
const fullyHidden = traversal.filter((t) => t.covered >= t.total).map((t) => t.sel);
const partHidden = traversal.filter((t) => t.covered > 0 && t.covered < t.total).map((t) => t.sel);
if (fullyHidden.length) add('2.4.11', 'fail', 'custom', 'focus-obscured-full', 'Elemen terfokus tertutup penuh oleh elemen fixed/sticky', [...new Set(fullyHidden)]);
if (fullyHidden.length || partHidden.length) add('2.4.12', 'fail', 'custom', 'focus-obscured-partial', 'Elemen terfokus tertutup sebagian oleh elemen fixed/sticky', [...new Set([...fullyHidden, ...partHidden])]);
// Focus order vs visual order: backward jumps on the same page region
const jumps = [];
for (let i = 1; i < traversal.length; i++) {
  const a = traversal[i - 1], b = traversal[i];
  if (b.y < a.y - 80) jumps.push(`${a.sel} -> ${b.sel}`);
}
if (jumps.length) add('2.4.3', 'candidate', 'custom', 'focus-order-jump', 'Urutan fokus melompat ke atas (tidak mengikuti urutan visual)', jumps);
if (traversal.length && s.interactiveCount > 0) { /* 2.4.13 needs area/contrast measurement: report as candidate when indicator exists */ }

// ---------- 5. Reflow at 320 CSS px (1.4.10) ----------
await page.setViewportSize({ width: 320, height: 640 });
await page.waitForTimeout(400);
const reflow = await page.evaluate(() => {
  const sw = document.documentElement.scrollWidth;
  const over = [...document.querySelectorAll('body *')].filter((el) => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.right <= innerWidth + 1) return false;
    if (el.closest('table,pre,code,canvas,video,iframe,[role=grid],map,svg')) return false;
    let p = el.parentElement;
    while (p && p !== document.body) { const o = getComputedStyle(p).overflowX; if (o === 'auto' || o === 'scroll' || o === 'hidden') return false; p = p.parentElement; }
    return true;
  }).slice(0, 15).map((el) => __sel(el));
  return { sw, over };
});
if (reflow.sw > 322) add('1.4.10', 'fail', 'custom', 'reflow-320', `Scroll horizontal di lebar 320px (lebar konten ${reflow.sw}px)`, reflow.over);

// ---------- 6. Orientation (1.3.4) ----------
await page.setViewportSize({ width: 390, height: 844 });
await page.waitForTimeout(300);
const portraitLen = await page.evaluate(() => document.body.innerText.length);
await page.setViewportSize({ width: 844, height: 390 });
await page.waitForTimeout(300);
const landscapeLen = await page.evaluate(() => document.body.innerText.length);
if (Math.min(portraitLen, landscapeLen) < 0.3 * Math.max(portraitLen, landscapeLen))
  add('1.3.4', 'fail', 'custom', 'orientation-lock', `Konten berbeda jauh antara portrait (${portraitLen}) dan landscape (${landscapeLen}); kemungkinan dikunci ke satu orientasi`);

// ---------- 7. Text spacing (1.4.12) ----------
await page.setViewportSize({ width: 1280, height: 900 });
await page.waitForTimeout(300);
const clipCheck = async () => page.evaluate(() => {
  const res = {};
  for (const el of document.querySelectorAll('body *')) {
    const s = getComputedStyle(el);
    if (!el.innerText || el.children.length > 3 || el.clientHeight === 0) continue;
    const hidden = ['hidden', 'clip'];
    const v = hidden.includes(s.overflowY) ? el.scrollHeight - el.clientHeight : 0;
    const h = hidden.includes(s.overflowX) && s.textOverflow !== 'ellipsis' ? el.scrollWidth - el.clientWidth : 0;
    if (v > 2 || h > 2) res[__sel(el)] = v + h;
  }
  return res;
});
// Flags elements whose clipped overflow is new or grew after the change.
const worsened = (before, after) => Object.entries(after).filter(([k, v]) => !(k in before) || v > before[k] + 4).map(([k]) => k).slice(0, 20);
const clippedBefore = await clipCheck();
await page.addStyleTag({ content: `*{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important}p{margin-bottom:2em!important}` });
await page.waitForTimeout(300);
const clippedAfter = worsened(clippedBefore, await clipCheck());
if (clippedAfter.length) add('1.4.12', 'fail', 'custom', 'text-spacing-clip', 'Teks terpotong setelah spasi teks diperbesar', clippedAfter);

// ---------- 8. Resize text 200% (1.4.4) ----------
await page.reload({ waitUntil: 'load' }).catch(() => {});
await page.evaluate(SELECTOR_FN);
const before200 = await clipCheck();
await page.addStyleTag({ content: 'html{font-size:200%!important}' });
await page.evaluate(() => { document.body.style.zoom = '2'; });
await page.waitForTimeout(300);
const after200 = worsened(before200, await clipCheck());
if (after200.length) add('1.4.4', 'candidate', 'custom', 'resize-200-clip', 'Teks terpotong saat diperbesar 200%', after200);

// ---------- 9. Reduced motion emulation (2.3.3) ----------
await page.emulateMedia({ reducedMotion: 'reduce' });
await page.reload({ waitUntil: 'load' }).catch(() => {});
await page.waitForTimeout(500);
const stillInfinite = await page.evaluate(() => document.getAnimations ? document.getAnimations().filter((a) => a.effect?.getComputedTiming?.().iterations === Infinity).length : 0);
if (stillInfinite > 0 && s.infiniteAnimations.length) add('2.3.3', 'candidate', 'custom', 'motion-ignores-preference', `${stillInfinite} animasi tetap berjalan saat prefers-reduced-motion aktif`);

await browser.close();

// ---------- Output ----------
const byScore = { fail: 0, candidate: 1 };
findings.sort((a, b) => a.sc.localeCompare(b.sc, undefined, { numeric: true }) || byScore[a.status] - byScore[b.status]);
const report = { url, scannedAt: new Date().toISOString(), axeVersion: axe.testEngine?.version, findings, traversalCount: traversal.length, interactiveCount: s.interactiveCount, title: s.title, lang: s.lang };
fs.writeFileSync(`${outBase}.json`, JSON.stringify(report, null, 2));

const lines = [`# Hasil scan aksesibilitas otomatis`, '', `- URL: ${url}`, `- Judul halaman: ${s.title || '(kosong)'}`, `- Bahasa halaman: ${s.lang || '(tidak ada)'}`, `- Elemen interaktif terlihat: ${s.interactiveCount}; tercapai lewat Tab: ${uniq.length}`, '',
  'Status "fail" berarti sistem cukup yakin kriteria dilanggar. Status "candidate" berarti perlu dikonfirmasi peninjau. Scan otomatis hanya menangkap sebagian masalah aksesibilitas.', ''];
let cur = '';
for (const f of findings) {
  if (f.sc !== cur) { cur = f.sc; const meta = SC[f.sc]; lines.push('', `## ${f.sc}${meta ? ` ${meta[0]} (${meta[1]})` : ''}`); }
  lines.push(`- [${f.status}] ${f.message} (${f.source}: ${f.rule}, ${f.count} elemen)`);
  for (const t of f.targets.slice(0, 5)) lines.push(`  - \`${String(t).slice(0, 160)}\``);
}
fs.writeFileSync(`${outBase}.md`, lines.join('\n'));
console.log(`Selesai: ${findings.length} temuan. Laporan: ${outBase}.md dan ${outBase}.json`);
