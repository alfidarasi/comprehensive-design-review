#!/usr/bin/env node
// Runs every automated check of the comprehensive-design-review skill and writes
// one readable summary (ringkasan-otomatis.md) next to the detailed reports.
//
// Usage:
//   node run_all.mjs <url | file.html | copy.txt | copy.md> [--out hasil-review] [--perf] [--widths 360,390,768,1280]
// A .txt or .md copy deck only runs the copy audit.

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
if (!args[0]) { console.error('Usage: node run_all.mjs <url|file.html|copy.txt|copy.md> [--out hasil-review] [--perf] [--widths 360,390,768,1280]'); process.exit(1); }
const opt = (n, d) => { const i = args.indexOf(n); return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : d; };
const target = args[0];
const outDir = path.resolve(opt('--out', 'hasil-review'));
fs.mkdirSync(outDir, { recursive: true });
const isDeck = /\.(txt|md)$/i.test(target) && !/^https?:/i.test(target);

const jobs = isDeck
  ? [{ lens: 'Lensa 5: UX writing', script: 'copy_audit.mjs', out: 'copy' }]
  : [
      { lens: 'Lensa 3: Aksesibilitas', script: 'a11y_scan.mjs', out: 'aksesibilitas' },
      { lens: 'Lensa 4: Hierarki visual', script: 'style_audit.mjs', out: 'visual' },
      { lens: 'Lensa 5: UX writing', script: 'copy_audit.mjs', out: 'copy' },
      { lens: 'Lensa 6: Responsif', script: 'responsive_audit.mjs', out: 'responsif', extra: [...(args.includes('--perf') ? ['--perf'] : []), ...(opt('--widths') ? ['--widths', opt('--widths')] : [])] },
    ];

const results = [];
for (const j of jobs) {
  process.stdout.write(`Menjalankan ${j.script} ... `);
  const t0 = Date.now();
  const r = spawnSync(process.execPath, [path.join(here, j.script), target, '--out', path.join(outDir, j.out), ...(j.extra || [])], { encoding: 'utf8', cwd: process.cwd() });
  const ok = r.status === 0;
  console.log(ok ? `selesai (${((Date.now() - t0) / 1000).toFixed(1)} dtk)` : 'gagal');
  let json = null; try { json = JSON.parse(fs.readFileSync(path.join(outDir, `${j.out}.json`), 'utf8')); } catch {}
  results.push({ ...j, ok, err: ok ? '' : (r.stderr || r.stdout || '').trim().split('\n').slice(-3).join(' '), json });
}

// ---------- Summary ----------
const L = [];
const rel = (f) => path.relative(process.cwd(), path.join(outDir, f)) || f;
L.push('# Ringkasan pemeriksaan otomatis', '');
L.push(`- Sumber: ${target}`, `- Waktu: ${new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' })}`, '');
L.push('> Ini hasil mesin, belum laporan review. Semua butir adalah bukti atau kandidat yang masih harus dinilai terhadap konteks pengguna. Pemeriksaan otomatis rata-rata hanya menangkap sekitar sepertiga masalah aksesibilitas, dan tidak menilai alur, psikologi, maupun kesesuaian konteks.', '');

L.push('## Sekilas', '', '| Lensa | Status | Hasil | Laporan detail |', '|---|---|---|---|');
const a11y = results.find((r) => r.script === 'a11y_scan.mjs');
const style = results.find((r) => r.script === 'style_audit.mjs');
const copy = results.find((r) => r.script === 'copy_audit.mjs');
const resp = results.find((r) => r.script === 'responsive_audit.mjs');

// map SC -> "name (level)" from the a11y markdown headings
const scInfo = {};
if (a11y?.ok) { try { for (const m of fs.readFileSync(path.join(outDir, 'aksesibilitas.md'), 'utf8').matchAll(/^## (\d+\.\d+\.\d+) (.+) \((A{1,3})\)$/gm)) scInfo[m[1]] = { name: m[2], level: m[3] }; } catch {} }

const row = (r, text) => L.push(`| ${r.lens} | ${r.ok ? 'Selesai' : 'Gagal'} | ${r.ok ? text : r.err.slice(0, 120)} | ${r.ok ? '`' + rel(r.out + '.md') + '`' : '-'} |`);
let a11yF = [];
if (a11y) {
  a11yF = a11y.json?.findings || [];
  const fails = a11yF.filter((f) => f.status === 'fail'), cands = a11yF.filter((f) => f.status === 'candidate');
  const byLvl = (arr, lv) => arr.filter((f) => (scInfo[f.sc]?.level || '') === lv).length;
  row(a11y, `${fails.length} pelanggaran (A ${byLvl(fails, 'A')}, AA ${byLvl(fails, 'AA')}, AAA ${byLvl(fails, 'AAA')}), ${cands.length} kandidat`);
}
if (style) row(style, `${style.json?.flags?.length ?? 0} catatan konsistensi`);
if (copy) row(copy, `${copy.json?.flags?.length ?? 0} kandidat copy`);
if (resp) row(resp, `${resp.json?.flags?.length ?? 0} kandidat responsif`);
L.push('');

if (a11y?.ok) {
  const fails = a11yF.filter((f) => f.status === 'fail');
  const order = { A: 0, AA: 1, AAA: 2 };
  fails.sort((x, y) => (order[scInfo[x.sc]?.level] ?? 3) - (order[scInfo[y.sc]?.level] ?? 3));
  L.push('## Aksesibilitas: pelanggaran yang terdeteksi', '');
  if (!fails.length) L.push('Tidak ada pelanggaran yang terdeteksi otomatis. Ini belum berarti halaman aksesibel.', '');
  else { L.push('| Kriteria | Level | Masalah | Elemen |', '|---|---|---|---|');
    for (const f of fails.slice(0, 20)) L.push(`| ${f.sc} ${scInfo[f.sc]?.name || ''} | ${scInfo[f.sc]?.level || '-'} | ${f.message.replace(/\|/g, '/')} | ${f.count} |`);
    if (fails.length > 20) L.push('', `Dan ${fails.length - 20} lainnya di laporan detail.`);
    L.push(''); }
}
const first = (m) => m.split('. ')[0].replace(/\.+$/, '') + '.';
const flagList = (title, r, fmt) => { if (!r?.ok) return; const fl = r.json?.flags || []; L.push(`## ${title}`, ''); if (!fl.length) { L.push('Tidak ada catatan.', ''); return; } for (const f of fl.slice(0, 15)) L.push(`- ${fmt(f)}`); if (fl.length > 15) L.push(`- Dan ${fl.length - 15} lainnya di laporan detail.`); L.push(''); };
flagList('Hierarki visual dan konsistensi', style, (f) => f);
flagList('UX writing (kandidat)', copy, (f) => `**${f.cat}:** ${first(f.msg)}${f.ex?.length ? ` Contoh: ${f.ex.slice(0, 2).join('; ')}` : ''}`);
flagList('Responsif (kandidat)', resp, (f) => `**${f.cat}:** ${first(f.msg)}`);

const shots = fs.readdirSync(outDir).filter((f) => f.endsWith('.png')).sort();
if (shots.length) L.push('## Screenshot', '', ...shots.map((s) => `- \`${rel(s)}\``), '');
L.push('## Langkah berikutnya', '', 'Claude memakai ringkasan ini sebagai bukti, lalu menilai setiap butir terhadap profil konteks dan menuliskan laporan akhir dengan `assets/report-template.md`.', '');

fs.writeFileSync(path.join(outDir, 'ringkasan-otomatis.md'), L.join('\n'));
console.log(`\nRingkasan: ${rel('ringkasan-otomatis.md')}`);
