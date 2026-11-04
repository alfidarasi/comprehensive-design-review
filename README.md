<div align="center">

<br/>

# Comprehensive Design Review

**Claude skill untuk review UI dan UX secara menyeluruh yang akan menyesuaikan dengan konteks produk dan penggunanya.**

Dibuat untuk product designer, UX researcher, UX writer, product manager, dan developer.

</div>

---

## Daftar isi

- [Apa yang dilakukan](#apa-yang-dilakukan)
- [Instalasi](#instalasi)
- [Cara kerja](#cara-kerja)
- [Tujuh lensa review](#tujuh-lensa-review)
- [Pemeriksaan otomatis](#pemeriksaan-otomatis)
- [Seperti apa hasilnya](#seperti-apa-hasilnya)
- [Contoh prompt](#contoh-prompt)
- [Isi repo](#isi-repo)
- [Keterbatasan](#keterbatasan)

---

## Apa yang dilakukan

Berikan screenshot, mockup Figma, flow, URL, kode, atau copy deck, lalu ceritakan siapa penggunanya. Claude akan:

1. **Menyusun profil konteks:** siapa penggunanya, seberapa sering memakai, di perangkat apa, dan dalam situasi apa.
2. **Memilih prinsip yang relevan** untuk konteks itu, dan mengesampingkan yang tidak relevan beserta alasannya.
3. **Menjalankan pemeriksaan otomatis** (aksesibilitas, konsistensi visual, copy, responsif) bila input berupa URL atau kode.
4. **Menulis laporan berprioritas** yang bisa dipahami dalam satu menit dan langsung dijadikan tiket.

```
"Review form pengajuan ini. Penggunanya dosen, dipakai 1 sampai 2 kali setahun, kadang dari ponsel."
"Cek aksesibilitas halaman pendaftaran ini sampai level AAA."
"Review hierarki visual dashboard admin ini saja. Dipakai staf HR setiap hari di komputer kantor."
"Review copy alur checkout ini dan beri usulan pengganti."
"Flow pendaftaran ini kepanjangan nggak? Mana langkah yang bisa dipangkas?"
"Ini mockup chatbot layanan akademik. Apa yang perlu diperbaiki dari sisi UX?"
```

---

## Instalasi

**Claude Code, untuk satu proyek:**

```bash
git clone https://github.com/alfidarasi/comprehensive-design-review.git .claude/skills/comprehensive-design-review
```

**Claude Code, untuk semua proyek:**

```bash
git clone https://github.com/alfidarasi/comprehensive-design-review.git ~/.claude/skills/comprehensive-design-review
```

**Claude.ai:** unggah file `comprehensive-design-review.skill` di pengaturan Skills.

Claude mengenali skill ini secara otomatis saat Anda meminta design review, UI review, UX review, audit aksesibilitas, review copy, atau cek tampilan mobile.

### Pemeriksaan otomatis (opsional)

Skill tetap bisa dipakai tanpa langkah ini, misalnya untuk review screenshot. Untuk menjalankan skrip pada URL atau kode, butuh Node.js 18 atau lebih baru. Masuk ke folder tempat skill di-clone, lalu pasang dependensinya.

Bila di-clone ke `~/.claude/skills/` (semua proyek):

```bash
cd ~/.claude/skills/comprehensive-design-review
npm install
npx playwright install chromium
```

Bila di-clone ke `.claude/skills/` di dalam proyek, jalankan dari folder proyek:

```bash
cd .claude/skills/comprehensive-design-review
npm install
npx playwright install chromium
```

Perintah terakhir mengunduh browser Chromium untuk Playwright. Lewati bila sudah pernah dipasang.

Cek apakah semuanya jalan:

```bash
node ~/.claude/skills/comprehensive-design-review/scripts/run_all.mjs https://example.com --out ~/hasil-cek
```

---

## Cara kerja

Prinsip desain tidak berlaku sama kuat di semua produk. Skill ini selalu mulai dari konteks, lalu menyesuaikan tiga hal:

| Yang disesuaikan | Contoh |
|---|---|
| **Prinsip yang dinilai** | Rule of thirds dinilai untuk landing page, tidak untuk tabel data. Kriteria WCAG soal video dilewati bila tidak ada video. |
| **Bobot dan severity** | Information density (banyaknya informasi di satu layar) bisa menjadi kelebihan di dashboard harian untuk pengguna ahli, dan menjadi masalah di halaman yang dikunjungi sekali oleh pengguna awam. |
| **Bentuk rekomendasi** | Singkatan "PAK" atau "SKP" wajar untuk dosen dan staf kepegawaian, tetapi perlu dijelaskan untuk masyarakat umum. |

Satu hal tidak ikut berubah: pelanggaran WCAG level A dan AA pada kriteria yang relevan tetap dilaporkan, termasuk untuk aplikasi internal, karena disabilitas sering tidak terlihat atau bersifat sementara.

---

## Tujuh lensa review

| # | Lensa | Yang dinilai | Cara diuji |
|---|---|---|---|
| 1 | **Tugas utama, flow, dan journey** | Apakah aksi utama terlihat; berapa langkah, field, dan keputusan untuk menyelesaikan tugas; langkah yang bisa dihapus, digabung, atau diisi otomatis; dead end, pemulihan, titik masuk, dan touchpoint lintas channel (email, notifikasi, petugas) | Peta flow dan hitungan interaction cost, dengan bobot sesuai konteks |
| 2 | **UX psychology** | 9 kelompok prinsip: change blindness, Gestalt, memory dan cognitive load, perception, navigation, information foraging, mental model, decision making, interaction cost, motivation, serta persuasion, trust, dan deceptive patterns | Profil konteks dengan 7 dimensi dan tabel bobot |
| 3 | **Aksesibilitas** | Seluruh 86 kriteria WCAG 2.2 level A, AA, dan AAA | `a11y_scan.mjs` (axe-core dan pemeriksaan tambahan) |
| 4 | **Hierarki visual dan konsistensi** | 20 prinsip (focal point, kontras, alignment, whitespace, tipografi, dan lainnya) serta token desain | `style_audit.mjs` dan squint test |
| 5 | **UX writing** | Keterbacaan, nada, jargon, struktur konten, label perintah dan link, pesan error, copy manipulatif | `copy_audit.mjs` |
| 6 | **Responsif dan konteks penggunaan** | Layout, pola komponen di layar kecil, sentuhan, input, performa, data nyata, lingkungan pemakaian | `responsive_audit.mjs` |
| 7 | **Fitur AI** (bila ada) | Anthropomorphism, trust, verifikasi jawaban, user control, personalisasi | Penilaian Claude |

Selain tujuh lensa, ada **pemeriksaan pola** untuk pola antarmuka yang paling sering bermasalah. Pemeriksaan ini bukan lensa tambahan: temuannya dimasukkan ke lensa yang sesuai (misalnya "5 · Form"), dan kedalamannya mengikuti konteks.

| Pola | Dijalankan bila | Yang dinilai |
|---|---|---|
| **State dan umpan balik** | Setiap review | Kosong, loading, sebagian, error, offline, tanpa izin, sukses; umpan balik setelah aksi; pencegahan kesalahan; konfirmasi atau undo |
| **Form** | Ada form atau field isian | Keperluan field, kontrol, label dan petunjuk, wajib dan opsional, format yang toleran, waktu validasi, default, unggah berkas, data sensitif |
| **Navigasi dan pencarian** | Ada menu, pencarian, filter, atau sort | Struktur dan label menurut tujuan pengguna, penanda lokasi, findability, hasil pencarian kosong, filter aktif dan reset |
| **Data display** | Ada tabel data, dashboard, atau grafik | Pertanyaan yang terjawab dalam 5 detik, KPI dengan pembanding, jenis grafik, grafik yang jujur dan tidak bergantung pada warna, tabel kerja, tanggal pembaruan data |

Setiap temuan memuat prioritas, letak masalah, akibatnya bagi pengguna, dan saran perbaikan. Untuk tim teknis, lampiran laporan juga mencatat **severity** (Kritis, Tinggi, Sedang, Rendah), **confidence** (seberapa pasti temuannya), **effort** (perkiraan besar pekerjaan perbaikan), lensa, kriteria, dan bukti.

---

## Pemeriksaan otomatis

Jalankan semuanya sekaligus:

```bash
node scripts/run_all.mjs <url | file.html | copy.md> --out hasil-review [--perf]
```

Hasilnya `hasil-review/ringkasan-otomatis.md` (ringkasan satu halaman), laporan detail per lensa, dan screenshot.

| Skrip | Yang diperiksa |
|---|---|
| `a11y_scan.mjs` | axe-core, ukuran target 24 dan 44 px, reflow 320 px, spasi teks, zoom 200%, urutan dan visibilitas fokus keyboard, fokus yang tertutup, orientasi, reduced motion, dan lainnya |
| `style_audit.mjs` | Jumlah ukuran dan ketebalan huruf, warna aksen, skala spacing, radius, bayangan, variasi tombol, urutan heading, serta screenshot normal dan blur |
| `copy_audit.mjs` | Label generik, istilah yang tidak konsisten, pesan error teknis, kalimat panjang, angka yang ditulis kata, singkatan, daftar, in-page link, accordion. Bisa membaca copy deck `.txt` atau `.md` |
| `annotate_screenshot.py` | Menggambar penanda bernomor di screenshot sesuai nomor temuan, untuk bagian "Letak masalah di layar" di laporan. Butuh Python 3 dan Pillow (`python3 -m pip install pillow`) |
| `responsive_audit.mjs` | Render di beberapa lebar, scroll horizontal, teks terpotong, tabel, input di ponsel, elemen sticky, posisi aksi utama, hover, stress test teks panjang, dan performa di jaringan lambat (`--perf`) |

Semua hasil skrip adalah **bukti atau kandidat**. Claude menilai setiap butir terhadap konteks sebelum menjadikannya temuan.

---

## Seperti apa hasilnya

Laporan mengikuti [`assets/report-template.md`](assets/report-template.md) dan punya **dua lapis**:

- **Isi utama untuk siapa saja**, termasuk pimpinan, PM, atau klien yang bukan desainer. Bahasanya sehari-hari, tanpa kode atau istilah teknis, dikelompokkan menurut prioritas.
- **Lampiran untuk tim desain dan developer**, berisi lensa, kriteria WCAG, confidence, effort, dan bukti teknis.

Keduanya memakai nomor temuan yang sama (1, 2, 3, ...), termasuk di screenshot yang diberi penanda bernomor, jadi tim teknis tetap bisa merujuk "temuan no. 4" di tiket.

Contoh potongan isi utama untuk form pengajuan kenaikan jabatan dosen:

> **Kesimpulan:** Dosen bisa mengisi form ini di laptop, tetapi hampir tidak bisa memakainya di ponsel. Informasi tenggat, hal terpenting di halaman, justru paling sulit dibaca, dan susunan tombol berisiko membuat usulan terhapus tanpa sengaja.
>
> **Status:** Perlu diperbaiki dulu sebelum dipakai
>
> | 🔴 Harus diperbaiki sebelum dipakai | 🟠 Segera diperbaiki | 🟡 Perlu diperbaiki | ⚪ Penyempurnaan kecil |
> |:---:|:---:|:---:|:---:|
> | 1 | 6 | 4 | 1 |
>
> ### 🔴 Harus diperbaiki sebelum dipakai
>
> #### 1. Halaman tidak bisa dipakai di ponsel
>
> **Di mana:** seluruh halaman, paling parah di tabel Riwayat Usulan
> **Masalahnya:** di ponsel, halaman tampil mengecil dan tidak bisa diperbesar. Tabelnya juga harus digeser ke samping.
> **Akibatnya:** dosen yang membuka link dari notifikasi WhatsApp tidak bisa membaca status usulannya.
> **Saran:** izinkan halaman diperbesar, dan ubah setiap baris tabel menjadi kartu di layar ponsel.
>
> *Perkiraan kerja perbaikan: sedang (beberapa hari)*

Susunan laporan:

| Bagian | Isi |
|---|---|
| 1. Ringkasan satu menit | Kesimpulan, status, jumlah masalah per prioritas, tiga prioritas, angka flow bila ada |
| 2. Letak masalah di layar | Screenshot dengan penanda bernomor (bila ada gambar atau URL) |
| 3. Masalah yang ditemukan | Dikelompokkan per prioritas: di mana, masalahnya, akibatnya, saran |
| 4. Alur tugas | Langkah sekarang dan usulan, dengan angka (bila review mencakup flow) |
| 5. Perbaikan cepat | Daftar centang yang siap dijadikan tiket |
| 6. Yang sudah baik | Hal yang perlu dipertahankan |
| 7. Yang belum bisa dipastikan | Apa yang perlu dicek, kenapa, dan caranya |
| 8. Ringkasan stakeholder | Opsional, untuk manajemen atau klien |
| Lampiran A | Untuk tim desain dan developer: tabel temuan teknis, kondisi per lensa, aksesibilitas, konteks dan asumsi, hasil otomatis, glosarium |

Format bisa disesuaikan dengan pembacanya, misalnya "laporannya untuk rapat pimpinan" atau "cukup ringkas di chat".

---

## Contoh prompt

### Sederhana

**Review satu layar**
```
Review screenshot halaman login ini. Penggunanya mahasiswa, dibuka dari ponsel.
```
→ Laporan singkat dengan prioritas, dengan bobot untuk pengguna mobile dan pemakaian berulang.

**Fokus satu lensa**
```
Cek aksesibilitas halaman ini sampai AAA: https://contoh.ac.id/daftar
```
→ Hasil Lensa 3 dipisah menjadi pelanggaran A/AA, peluang AAA, dan hal yang perlu diuji manual.

**Review copy**
```
Review copy di file copy-onboarding.md. Nada produk kami serius tapi santai.
```
→ Kandidat dari `copy_audit.mjs`, dinilai terhadap nada produk, dengan usulan sebelum dan sesudah.

### Menengah

**Flow lengkap**
```
Ini 5 screenshot alur pengajuan cuti pegawai dari awal sampai selesai.
Penggunanya pegawai administrasi, dipakai beberapa kali setahun.
```
→ Peta flow dengan jumlah layar, field, dan keputusan; langkah yang bisa dihapus, digabung, atau diisi otomatis; flow usulan; serta review antar layar (informasi yang harus diingat antar langkah, perubahan status, konsistensi).

**URL produk dengan performa**
```
Review https://portal.contoh.id/usulan. Banyak pengguna membuka dari Android di luar kota.
Jalankan juga cek performa.
```
→ Semua skrip termasuk `--perf`, dengan bobot untuk perangkat kelas bawah dan jaringan lambat.

### Lanjutan

**Untuk rapat stakeholder**
```
Ringkas hasil review ini untuk dibawa ke rapat manajemen besok.
```
→ Ringkasan dengan dasar temuan, dampak bisnis, dan satu skenario pengguna.

**Fitur AI**
```
Ini mockup chatbot asisten akademik. Review UX-nya, termasuk soal trust pengguna ke AI.
```
→ Lensa 7: posisi AI, batas kemampuan, cara memverifikasi jawaban, dan jalur ke petugas manusia.

---

## Isi repo

```
comprehensive-design-review/
│
├── SKILL.md                          ← Alur kerja dan aturan utama (dibaca Claude)
│   ├── Konteks berlaku untuk semua lensa
│   ├── Lensa 1 sampai 7               ← Alur kerja ringkas per lensa
│   ├── Pemeriksaan pola               ← State, form, navigasi, data display (lintas lensa)
│   ├── Severity, confidence, effort
│   └── Format laporan
│
├── references/                        ← Detail per lensa, dibaca saat lensa dijalankan
│   ├── task-flow.md                   ← Flow, journey, touchpoint, dan interaction cost
│   ├── states-feedback.md             ← Pola: state layar, umpan balik, pencegahan kesalahan
│   ├── forms.md                       ← Pola: desain form
│   ├── navigation-search.md           ← Pola: navigasi, pencarian, filter, sort
│   ├── data-display.md                ← Pola: tabel data, dashboard, grafik
│   ├── ux-psychology.md               ← Profil konteks, bobot, kartu prinsip A sampai I
│   ├── wcag-22-automated.md           ← 86 kriteria WCAG 2.2 dan cara mengujinya
│   ├── visual-hierarchy.md            ← 20 prinsip hierarki visual dan konsistensi
│   ├── ux-writing.md                  ← Keterbacaan, nada, jargon, label, pesan error
│   └── responsive.md                  ← Perangkat, pola komponen, performa, data nyata
│
├── scripts/                           ← Pemeriksaan otomatis (Node.js dan Playwright)
│   ├── run_all.mjs                    ← Menjalankan semua skrip dan membuat ringkasan
│   ├── annotate_screenshot.py         ← Penanda bernomor di screenshot untuk laporan
│   ├── a11y_scan.mjs
│   ├── style_audit.mjs
│   ├── copy_audit.mjs
│   └── responsive_audit.mjs
│
├── assets/
│   └── report-template.md             ← Template laporan akhir
│
├── evals/
│   └── evals.json                     ← Skenario uji perilaku skill
│
├── package.json
└── comprehensive-design-review.skill  ← Paket siap unggah ke Claude.ai
```

---

## Keterbatasan

- **Pemeriksaan otomatis menangkap sekitar sepertiga masalah aksesibilitas.** Sisanya butuh pembaca layar, navigasi keyboard oleh manusia, atau uji dengan pengguna disabilitas. Skill menuliskannya di bagian "Perlu diverifikasi".
- **Review dari screenshot** tidak bisa mengukur urutan fokus, label pembaca layar, atau perilaku interaksi. Nilai yang diperkirakan ditandai.
- **Dampak psikologis dari tampilan statis adalah dugaan.** Validasi lebih lanjut diperlukan dengan usability testing, analitik, atau 5-second test.
- **Emulasi tetap berbeda dari perangkat nyata.** Keyboard di layar, in-app browser, dan performa perangkat kelas bawah tetap perlu dicek di perangkat sungguhan.

---

## Bahasa

Isi skill ditulis dalam Bahasa Indonesia. Laporan mengikuti bahasa yang dipakai pengguna.

---

## Kata kunci

design review, UI review, UX review, UX audit, user flow, user journey, touchpoint, interaction cost, empty state, form design, navigation, information architecture, search and filter, dashboard, data visualization, onboarding, notifications, design critique, UX psychology, accessibility audit, WCAG 2.2, visual hierarchy, design consistency, design tokens, UX writing, microcopy, error messages, responsive design, mobile UX, Core Web Vitals, AI UX, deceptive patterns, Claude skill
