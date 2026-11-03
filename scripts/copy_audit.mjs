#!/usr/bin/env node
// UX writing audit for the comprehensive-design-review skill.
// Extracts visible copy from a page (or a plain .txt/.md copy deck) and flags
// candidates: generic labels, inconsistent command terms, technical or blaming
// error text, long sentences and paragraphs, numbers written as words,
// unexpanded acronyms, all-caps runs, list problems, heavy bolding,
// in-page links without a label, and accordions.
// Every flag is a CANDIDATE: Claude must judge it against the review context.
//
// Usage:
//   node copy_audit.mjs <url | file.html | copy.txt | copy.md> [--out copy-report]
// Output: <out>.md and <out>.json

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
if (!args[0]) { console.error('Usage: node copy_audit.mjs <url|file.html|copy.txt|copy.md> [--out copy-report]'); process.exit(1); }
const opt = (n, d) => { const i = args.indexOf(n); return i >= 0 && args[i + 1] ? args[i + 1] : d; };
const target = args[0];
const outBase = opt('--out', 'copy-report');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function textToHtml(txt) {
  const out = ['<!doctype html><html><head><meta charset="utf-8"><title>Copy deck</title></head><body>'];
  let list = null;
  for (const block of txt.split(/\n\s*\n/)) {
    for (const raw of block.split('\n')) {
      const line = raw.trim(); if (!line) continue;
      const h = line.match(/^(#{1,6})\s+(.*)$/);
      const li = line.match(/^(?:[-*•]|\d+[.)])\s+(.*)$/);
      if (li) { const t = /^\d/.test(line) ? 'ol' : 'ul'; if (list !== t) { if (list) out.push(`</${list}>`); out.push(`<${t}>`); list = t; } out.push(`<li>${esc(li[1])}</li>`); continue; }
      if (list) { out.push(`</${list}>`); list = null; }
      if (h) out.push(`<h${h[1].length}>${esc(h[2])}</h${h[1].length}>`);
      else if (/^\[.+\]$/.test(line)) out.push(`<button>${esc(line.slice(1, -1))}</button>`); // [Label] = button in copy deck
      else out.push(`<p>${esc(line)}</p>`);
    }
    if (list) { out.push(`</${list}>`); list = null; }
  }
  out.push('</body></html>');
  return out.join('\n');
}

let url;
const isText = /\.(txt|md)$/i.test(target) && !/^https?:/i.test(target);
if (isText) {
  const tmp = path.resolve(`${outBase}-source.html`);
  fs.writeFileSync(tmp, textToHtml(fs.readFileSync(target, 'utf8')));
  url = pathToFileURL(tmp).href;
} else {
  url = /^https?:\/\//i.test(target) || target.startsWith('file:') ? target : pathToFileURL(path.resolve(target)).href;
}

const browser = await chromium.launch().catch(() => chromium.launch({ executablePath: '/usr/bin/google-chrome' }));
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => page.goto(url, { waitUntil: 'load', timeout: 60000 }));
await page.waitForTimeout(400);

const data = await page.evaluate(() => {
  const vis = (el) => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none'; };
  const sel = (el) => { let p = el.tagName.toLowerCase(); if (el.id) return p + '#' + el.id; if (el.classList.length) p += '.' + [...el.classList].slice(0, 2).join('.'); return p; };
  const txt = (el) => (el.innerText || el.value || '').replace(/\s+/g, ' ').trim();
  const name = (el) => (el.getAttribute('aria-label') || txt(el) || el.getAttribute('title') || '').replace(/\s+/g, ' ').trim();
  const lang = (document.documentElement.lang || '').toLowerCase();

  const commands = [...document.querySelectorAll('button, [role=button], input[type=submit], input[type=button], a[href], [role=menuitem], [role=tab]')]
    .filter(vis).map((el) => ({ sel: sel(el), tag: el.tagName.toLowerCase(), role: el.getAttribute('role') || '', text: name(el), href: el.getAttribute('href') || '',
      inDialog: !!el.closest('dialog, [role=dialog], [role=alertdialog], .modal') }));
  const headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6,[role=heading]')].filter(vis).map((h) => ({ tag: h.tagName.toLowerCase(), text: txt(h) }));
  const paras = [...document.querySelectorAll('p, li, dd, td, label, [role=alert], [aria-live], .error, .help, small')].filter(vis).map((el) => ({ sel: sel(el), tag: el.tagName.toLowerCase(), text: txt(el) })).filter((x) => x.text.length > 0);
  const lists = [...document.querySelectorAll('ul, ol')].filter(vis).filter((l) => !l.closest('nav') && l.getAttribute('role') !== 'menu' && l.getAttribute('role') !== 'tablist').map((l) => {
    let depth = 0, p = l.parentElement; while (p) { if (p.tagName === 'UL' || p.tagName === 'OL') depth++; p = p.parentElement; }
    const items = [...l.children].filter((c) => c.tagName === 'LI').map((li) => txt(li).split(/\n/)[0]);
    return { sel: sel(l), tag: l.tagName.toLowerCase(), depth, items };
  });
  const bodyText = txt(document.body);
  const boldText = [...document.querySelectorAll('p strong, p b, li strong, li b')].filter(vis).map(txt).join(' ');
  const proseText = [...document.querySelectorAll('p, li')].filter(vis).map(txt).join(' ');
  const inPage = [...document.querySelectorAll('a[href^="#"]')].filter(vis).filter((a) => a.getAttribute('href').length > 1).map((a) => {
    const id = decodeURIComponent(a.getAttribute('href').slice(1)); const tgt = document.getElementById(id);
    const container = a.closest('nav, aside, section, div, ul, ol'); const near = container ? txt(container.parentElement || container).slice(0, 300) : '';
    return { sel: sel(a), text: txt(a), target: id, targetExists: !!tgt, targetText: tgt ? txt(tgt).slice(0, 80) : '', labelled: /di halaman ini|daftar isi|isi halaman|on this page|in this article|table of contents|contents/i.test(near) || !!a.closest('[aria-label]'), skip: /lewati|skip/i.test(txt(a)) };
  });
  const accordions = [...document.querySelectorAll('details, [aria-expanded]')].filter(vis).filter((el) => el.tagName === 'DETAILS' || el.matches('button, [role=button], summary, a')).map((el) => ({
    sel: sel(el), text: el.tagName === 'DETAILS' ? txt(el.querySelector('summary') || el) : name(el), open: el.tagName === 'DETAILS' ? el.open : el.getAttribute('aria-expanded') === 'true' }));
  const inputs = [...document.querySelectorAll('input:not([type=hidden]):not([type=submit]):not([type=button]), select, textarea')].filter(vis).map((el) => ({ sel: sel(el), placeholder: el.getAttribute('placeholder') || '' }));
  return { lang, title: document.title, commands, headings, paras, lists, bodyText, boldText, proseText, inPage, accordions, inputs };
});
await browser.close();

// ---------------- Analysis ----------------
const words = (s) => (s.match(/[\p{L}\p{N}'’-]+/gu) || []);
const norm = (s) => s.toLowerCase().replace(/[.!…:]+$/g, '').trim();
const flags = [];
const add = (cat, msg, ex = []) => flags.push({ cat, msg, ex: ex.slice(0, 6) });

// 1. Generic labels
const GENERIC = /^(ok|oke|okay|ya|yes|tidak|no|klik di ?sini|click here|di ?sini|here|selengkapnya|baca selengkapnya|lihat selengkapnya|lebih lanjut|pelajari lebih lanjut|learn more|read more|more|more info|info|detail|details|lihat|lihat detail|view|go|submit|kirim|lanjut|lanjutkan|next|continue|mulai|mulai sekarang|get started|start|start now|ayo mulai|coba sekarang|try now|button|tombol)$/i;
const generic = data.commands.filter((c) => c.text && GENERIC.test(norm(c.text)));
if (generic.length) add('Label generik', 'Label perintah atau link yang tidak menjelaskan hasil atau tujuannya bila dibaca sendiri. Nilai bersama konteks sekitarnya; label seperti "Lanjut" bisa diterima di wizard yang langkahnya jelas.', generic.map((c) => `${c.sel} "${c.text}"${c.inDialog ? ' (di dialog)' : ''}`));
const okDialog = data.commands.filter((c) => c.inDialog && /^(ok|oke|okay|ya|yes)$/i.test(norm(c.text)));
if (okDialog.length) add('Label generik', '"OK" atau "Ya" di dialog konfirmasi. Ganti dengan kata kerja yang menyebut aksinya (misalnya "Hapus draf", "Buang perubahan").', okDialog.map((c) => `${c.sel} "${c.text}"`));

// 2. Same label, different destinations (and vice versa)
const byLabel = {};
for (const c of data.commands.filter((c) => c.href && !c.href.startsWith('#') && c.text)) { const k = norm(c.text); (byLabel[k] ||= new Set()).add(c.href); }
const dupLabel = Object.entries(byLabel).filter(([, s]) => s.size > 1);
if (dupLabel.length) add('Link promise', 'Label link yang sama mengarah ke tujuan berbeda. Pengguna dan pembaca layar tidak bisa membedakannya.', dupLabel.map(([k, s]) => `"${k}" -> ${[...s].slice(0, 3).join(', ')}`));

// 3. Long command labels
const longCmd = data.commands.filter((c) => !c.href && words(c.text).length > 5);
if (longCmd.length) add('Label perintah', 'Label tombol lebih dari 5 kata. Label perintah idealnya 1 sampai 4 kata; pindahkan penjelasan ke teks pendukung.', longCmd.map((c) => `${c.sel} "${c.text}"`));

// 4. Terminology consistency across commands
const GROUPS = [
  ['hapus', 'buang', 'delete', 'remove', 'hilangkan'], ['simpan', 'save', 'menyimpan'], ['batal', 'batalkan', 'cancel'],
  ['ubah', 'edit', 'sunting', 'perbarui', 'update'], ['kirim', 'ajukan', 'submit'], ['masuk', 'login', 'log in', 'sign in'],
  ['keluar', 'logout', 'log out', 'sign out'], ['daftar', 'register', 'sign up', 'buat akun'], ['tambah', 'tambahkan', 'add', 'buat baru', 'new'],
  ['unduh', 'download'], ['unggah', 'upload'], ['cari', 'search', 'telusuri'], ['tutup', 'close'], ['kembali', 'back'], ['pengaturan', 'setelan', 'settings', 'konfigurasi'],
];
const cmdTexts = data.commands.map((c) => norm(c.text));
for (const g of GROUPS) {
  const found = g.filter((w) => cmdTexts.some((t) => new RegExp(`(^|\\s)${w.replace(/ /g, '\\s')}(\\s|$)`, 'i').test(t)));
  if (found.length > 1) add('Konsistensi istilah', `Beberapa istilah dipakai untuk perintah yang kemungkinan sama: ${found.map((f) => `"${f}"`).join(', ')}. Pilih satu, kecuali artinya memang berbeda (misalnya "Hapus" permanen vs "Arsipkan").`);
}

// 5. Error / system text: technical codes and blaming words
const TECH = /\b(error\s*\d{3}|err_[a-z_]+|exception|stack ?trace|null|undefined|nan|errno|sqlstate|http\s*\d{3}|code[:\s]*\d{3,})\b/i;
const BLAME = /\b(tidak valid|invalid|ilegal|illegal|salah input|input salah|anda salah|kesalahan anda|incorrect|wrong|gagal karena anda|tidak diizinkan|forbidden|fatal)\b/i;
const VAGUE_ERR = /^(terjadi (sebuah |suatu )?kesalahan|an error (has )?occurred|something went wrong|ada yang salah|gagal|error|oops!?|ups!?)\.?$/i;
const sysTexts = [...data.paras, ...data.headings.map((h) => ({ sel: h.tag, text: h.text }))];
const tech = sysTexts.filter((p) => TECH.test(p.text));
if (tech.length) add('Pesan error', 'Teks berisi kode atau istilah teknis yang terlihat pengguna. Tampilkan bahasa manusia; kode cukup untuk diagnosis (misalnya kecil di bawah pesan).', tech.map((p) => `${p.sel}: "${p.text.slice(0, 90)}"`));
const blame = sysTexts.filter((p) => BLAME.test(p.text));
if (blame.length) add('Pesan error', 'Kata yang terdengar menyalahkan atau terlalu teknis ("tidak valid", "ilegal", "salah"). Jelaskan syaratnya dan cara memperbaiki.', blame.map((p) => `${p.sel}: "${p.text.slice(0, 90)}"`));
const vague = sysTexts.filter((p) => VAGUE_ERR.test(p.text.trim()));
if (vague.length) add('Pesan error', 'Pesan error umum tanpa penjelasan masalah dan solusi.', vague.map((p) => `${p.sel}: "${p.text}"`));

// 6. Sentences and paragraphs
const prose = data.paras.filter((p) => ['p', 'li', 'dd'].includes(p.tag));
const sentences = prose.flatMap((p) => p.text.split(/(?<=[.!?])\s+/).map((s) => ({ sel: p.sel, s })));
const longSent = sentences.filter((x) => words(x.s).length > 25);
if (longSent.length) add('Keterbacaan', `Kalimat lebih dari 25 kata (${longSent.length} kalimat). Pecah menjadi kalimat yang lebih pendek.`, longSent.map((x) => `${x.sel}: "${x.s.slice(0, 100)}..." (${words(x.s).length} kata)`));
const longPara = prose.filter((p) => p.tag === 'p' && words(p.text).length > 90);
if (longPara.length) add('Keterbacaan', 'Paragraf lebih dari 90 kata. Pertimbangkan subjudul, daftar berbutir, atau ringkasan.', longPara.map((p) => `${p.sel} (${words(p.text).length} kata): "${p.text.slice(0, 70)}..."`));
const avgSent = sentences.length ? (sentences.reduce((a, x) => a + words(x.s).length, 0) / sentences.length).toFixed(1) : 0;
const allW = words(data.proseText);
const longWordPct = allW.length ? (100 * allW.filter((w) => w.length >= 12).length / allW.length).toFixed(1) : 0;

// 7. Numbers as words
const NUMWORD = /\b(satu|dua|tiga|empat|lima|enam|tujuh|delapan|sembilan|sepuluh|sebelas|seratus|seribu|sejuta|(dua|tiga|empat|lima|enam|tujuh|delapan|sembilan) (puluh|belas|ratus|ribu|juta)|two|three|four|five|six|seven|eight|nine|ten|twenty|thirty|hundred|thousand)\b/i;
const numWords = [...data.paras, ...data.headings.map((h) => ({ sel: h.tag, text: h.text })), ...data.commands.map((c) => ({ sel: c.sel, text: c.text }))]
  .filter((p) => NUMWORD.test(p.text) && !/\bsatu-satunya|salah satu|satu per satu|dua-duanya|one of|one by one\b/i.test(p.text));
if (numWords.length) add('Angka', 'Angka yang ditulis dengan kata. Untuk fakta (jumlah, harga, durasi, langkah), angka digit lebih mudah dipindai. Abaikan bila bukan fakta spesifik.', numWords.map((p) => `${p.sel}: "${p.text.slice(0, 80)}"`));

// 8. Acronyms without expansion
const acr = {};
const mostlyCaps = (t) => { const L = t.replace(/[^A-Za-z]/g, ''); return L.length > 8 && L.replace(/[^A-Z]/g, '').length / L.length > 0.6; };
for (const t of [...sysTexts.map((p) => p.text), ...data.commands.map((c) => c.text)]) {
  if (mostlyCaps(t)) continue; // all-caps headings or labels are styling, not acronyms
  for (const m of t.matchAll(/\b([A-Z]{2,6})\b/g)) acr[m[1]] = (acr[m[1]] || 0) + 1;
}
const COMMON = new Set(['OK', 'PDF', 'URL', 'HTML', 'CSS', 'FAQ', 'ID', 'PIN', 'OTP', 'SMS', 'API', 'USB', 'UI', 'UX', 'AI', 'IT', 'CV', 'WIB', 'WITA', 'WIT', 'PT', 'CEO', 'KTP', 'NIK', 'NPWP', 'RT', 'RW', 'HP', 'TV', 'GB', 'MB', 'KB', 'AM', 'PM']);
const unexp = Object.keys(acr).filter((a) => !COMMON.has(a) && !new RegExp(`\\(${a}\\)|${a}\\s*\\(`).test(data.bodyText) && !/^[IVXLC]+$/.test(a));
if (unexp.length) add('Singkatan', 'Singkatan yang tidak pernah dijabarkan di halaman ini. Jabarkan saat pertama muncul, kecuali pengguna target pasti mengenalnya (istilah domain yang dipakai sehari-hari).', unexp.slice(0, 15).map((a) => `${a} (${acr[a]}x)`));

// 9. All caps runs
const caps = sysTexts.filter((p) => /\b([A-Z]{2,}\s+){3,}[A-Z]{2,}\b/.test(p.text));
if (caps.length) add('Huruf kapital', 'Teks huruf kapital semua lebih dari 3 kata. Lebih lambat dibaca. Bila kapital ditulis langsung di teks (bukan lewat CSS text-transform), sebagian pembaca layar bisa mengejanya per huruf.', caps.map((p) => `${p.sel}: "${p.text.slice(0, 70)}"`));

// 10. Lists
for (const l of data.lists) {
  const lens = l.items.map((i) => words(i).length).filter((n) => n > 0);
  if (l.items.length && l.items.length < 3 && l.depth === 0) add('Daftar', `Daftar dengan ${l.items.length} item. Daftar vertikal paling berguna untuk 3 item atau lebih; yang lebih pendek bisa ditulis dalam kalimat.`, [`${l.sel}: ${l.items.join(' | ').slice(0, 90)}`]);
  if (l.depth >= 2) add('Daftar', 'Daftar bersarang lebih dari 2 tingkat sulit diikuti.', [l.sel]);
  if (lens.length >= 3 && Math.max(...lens) > 15 && Math.max(...lens) / Math.max(1, Math.min(...lens)) > 4) add('Daftar', 'Panjang item daftar sangat tidak seimbang. Samakan panjang dan pola kalimat (paralel).', [`${l.sel}: ${lens.join(', ')} kata`]);
  const firsts = l.items.map((i) => (words(i)[0] || '').toLowerCase()).filter(Boolean);
  if (firsts.length >= 3 && new Set(firsts).size === 1) add('Daftar', `Semua item daftar diawali kata yang sama ("${firsts[0]}"). Taruh kata pembeda di depan.`, [l.sel]);
}

// 11. Bold proportion
const boldPct = data.proseText.length ? (100 * data.boldText.length / data.proseText.length) : 0;
if (boldPct > 30) add('Penekanan', `Teks tebal mencapai ${boldPct.toFixed(0)}% dari isi. Penekanan kehilangan fungsi bila lebih dari sekitar 30%.`);

// 12. In-page links
const toc = data.inPage.filter((a) => !a.skip);
const broken = toc.filter((a) => !a.targetExists);
if (broken.length) add('In-page link', 'In-page link yang target ID-nya tidak ditemukan.', broken.map((a) => `"${a.text}" -> #${a.target}`));
if (toc.length >= 3 && !toc.some((a) => a.labelled)) add('In-page link', 'Ada daftar in-page link tanpa label seperti "Di halaman ini" atau "Daftar isi". Pengguna bisa mengira link membuka halaman lain.', toc.slice(0, 4).map((a) => `"${a.text}"`));
const mismatch = toc.filter((a) => a.targetExists && a.targetText && a.text && !a.targetText.toLowerCase().includes(a.text.toLowerCase().slice(0, 12)));
if (mismatch.length) add('In-page link', 'Teks in-page link tidak sama dengan heading tujuannya. Samakan supaya pengguna yakin sudah sampai di bagian yang benar.', mismatch.map((a) => `"${a.text}" -> "${a.targetText.slice(0, 50)}"`));

// 13. Accordions
if (data.accordions.length) {
  const openN = data.accordions.filter((a) => a.open).length;
  add('Struktur konten', `Ada ${data.accordions.length} elemen yang bisa dibuka-tutup (${openN} terbuka saat awal). Nilai apakah pengguna perlu membuka sebagian besar isinya; bila ya, tampilkan saja semuanya. Pastikan label tiap bagian deskriptif.`, data.accordions.slice(0, 6).map((a) => `${a.sel} "${a.text.slice(0, 60)}"`));
}

// 14. Placeholder-as-instructions
const phLong = data.inputs.filter((i) => words(i.placeholder).length > 6);
if (phLong.length) add('Microcopy form', 'Placeholder panjang berisi instruksi. Instruksi hilang saat pengguna mengetik; pindahkan ke teks bantuan di bawah label.', phLong.map((i) => `${i.sel}: "${i.placeholder}"`));

// 15. Exclamation overuse in UI copy
const excl = sysTexts.filter((p) => /!/.test(p.text));
if (excl.length > 3) add('Nada', `Tanda seru muncul di ${excl.length} teks. Bila berlebihan, nada terasa berteriak atau terlalu antusias; sesuaikan dengan profil nada produk.`, excl.map((p) => `${p.sel}: "${p.text.slice(0, 60)}"`));

// ---------------- Report ----------------
const cats = [...new Set(flags.map((f) => f.cat))];
const md = [
  '# Audit UX writing (kandidat)', '', `- Sumber: ${isText ? target + ' (copy deck)' : url}`, `- Bahasa dokumen (lang): ${data.lang || '(tidak diset)'}`, `- Judul halaman: ${data.title || '(kosong)'}`,
  `- Jumlah perintah dan link: ${data.commands.length}; heading: ${data.headings.length}; kalimat isi: ${sentences.length}`,
  `- Rata-rata panjang kalimat: ${avgSent} kata; kata panjang (12+ huruf): ${longWordPct}% (indikator kasar keterbacaan, bukan skor baku)`, '',
  'Semua butir di bawah adalah KANDIDAT. Nilai bersama konteks (pengguna target, istilah domain, platform) sebelum dijadikan temuan.', '',
  ...cats.flatMap((c) => [`## ${c}`, ...flags.filter((f) => f.cat === c).flatMap((f) => [`- ${f.msg}`, ...f.ex.map((e) => `  - ${e}`)]), '']),
  '## Inventaris heading (untuk dinilai: deskriptif, front-loaded, bermakna di luar konteks)', ...data.headings.map((h) => `- ${h.tag}: ${h.text}`), '',
  '## Inventaris label perintah dan link', ...[...new Set(data.commands.map((c) => c.text).filter(Boolean))].slice(0, 80).map((t) => `- ${t}`), '',
];
fs.writeFileSync(`${outBase}.md`, md.join('\n'));
fs.writeFileSync(`${outBase}.json`, JSON.stringify({ source: target, flags, stats: { avgSent, longWordPct, boldPct }, ...data }, null, 2));
console.log(`Selesai: ${flags.length} kandidat. Laporan: ${outBase}.md`);
