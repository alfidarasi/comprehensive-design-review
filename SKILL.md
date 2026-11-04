---
name: comprehensive-design-review
description: "Review UI dan UX secara menyeluruh dari screenshot, mockup Figma, flow, URL, kode, atau copy deck, dengan 7 lensa yang disesuaikan konteks pengguna: tugas utama serta flow dan user journey (interaction cost, touchpoint), UX psychology, aksesibilitas WCAG 2.2 (A, AA, AAA) yang diuji otomatis, hierarki visual dan konsistensi, UX writing, responsif dan konteks penggunaan, serta fitur AI bila ada, ditambah pemeriksaan pola state, form, navigasi, dan data display. Menghasilkan laporan temuan berprioritas (severity, bukti, rekomendasi, quick wins) yang mudah dibaca. Gunakan saat pengguna meminta design review, UI atau UX review, audit UX, design critique, review flow, user journey, form, empty state, navigasi, pencarian, tabel, dashboard, atau grafik, audit aksesibilitas atau WCAG, cek hierarki visual, review copy atau microcopy, cek tampilan mobile, atau bertanya apa yang kurang dari sebuah desain."
---

# Comprehensive Design Review

Skill ini dipakai untuk menilai sebuah tampilan (layar aplikasi, halaman web, flow, atau komponen) dari beberapa sudut pandang sekaligus, lalu menghasilkan laporan temuan yang spesifik, berbasis prinsip, dan bisa langsung ditindaklanjuti oleh desainer atau developer.

## Isi skill

SKILL.md berisi alur kerja dan aturan utama. Detail setiap lensa ada di file referensi, dibaca hanya saat lensa itu dijalankan.

| File | Isi | Dibaca saat |
|---|---|---|
| `references/task-flow.md` | Cakupan flow menurut input, bobot per konteks, pemetaan flow dan interaction cost, area cek (panjang, urutan, dead end, pemulihan, titik masuk, touchpoint, onboarding, notifikasi), penyajian peta flow, severity | Lensa 1 |
| `references/ux-psychology.md` | Profil konteks, tabel bobot prinsip, pertentangan antar prinsip, kartu prinsip kelompok A sampai I | Lensa 2 |
| `references/wcag-22-automated.md` | Katalog 86 kriteria WCAG 2.2 dan cara sistem mengujinya | Lensa 3 |
| `references/visual-hierarchy.md` | Prinsip hierarki visual, bobot per konteks, konsistensi dan token desain, format data lokal | Lensa 4 |
| `references/ux-writing.md` | Keterbacaan, nada, istilah, struktur konten, label, pesan error, pola konten panjang | Lensa 5 |
| `references/responsive.md` | Profil perangkat dan kondisi, bobot per konteks, lebar yang diuji, pola komponen di layar kecil, sentuhan, performa, stress test data, lingkungan pemakaian | Lensa 6 |
| `references/states-feedback.md` | Inventaris state layar, umpan balik sistem, empty state, loading, error dan offline, izin, pencegahan kesalahan, konfirmasi atau undo | Pemeriksaan pola: State |
| `references/forms.md` | Keperluan field, pemilihan kontrol, label dan petunjuk, wajib dan opsional, struktur, format toleran, waktu validasi, default, unggah berkas, data sensitif | Pemeriksaan pola: Form |
| `references/navigation-search.md` | Struktur dan label navigasi, wayfinding, findability, pencarian, filter dan sort | Pemeriksaan pola: Navigasi |
| `references/data-display.md` | Tujuan dashboard, KPI dan pembanding, pemilihan jenis grafik, kejujuran dan warna grafik, tabel data di desktop, kesegaran data, drill-down, alternatif grafik | Pemeriksaan pola: Data |
| `assets/report-template.md` | Template laporan akhir yang mudah dibaca | Saat menulis laporan |
| `scripts/annotate_screenshot.py` | Menggambar penanda bernomor di screenshot sesuai nomor temuan | Saat menulis laporan, input gambar atau URL |
| `scripts/run_all.mjs` | Menjalankan semua skrip sekaligus dan membuat `ringkasan-otomatis.md` | Input URL, kode, atau copy deck |
| `scripts/a11y_scan.mjs` | Scan aksesibilitas otomatis (axe-core dan pemeriksaan tambahan) | Lensa 3, input URL atau kode |
| `scripts/style_audit.mjs` | Inventaris gaya visual dan screenshot squint test | Lensa 4, input URL atau kode |
| `scripts/copy_audit.mjs` | Kandidat masalah copy dan inventaris label | Lensa 5, input URL, kode, atau copy deck |
| `scripts/responsive_audit.mjs` | Render di beberapa lebar, kandidat masalah layout, input, sticky, gambar, hover, stress test teks, performa | Lensa 6, input URL atau kode |

Semua skrip butuh Node.js 18 atau lebih baru. Jalankan `npm install` sekali di folder skill (memasang Playwright dan axe-core); bila browser belum ada, jalankan `npx playwright install chromium`. Cara tercepat menjalankan semua pemeriksaan:

```bash
node <folder-skill>/scripts/run_all.mjs <url | file.html | copy.md> --out hasil-review [--perf]
```

## 1. Kumpulkan konteks dulu

Sebelum menilai, pastikan hal-hal ini jelas:

1. Tujuan layar: apa satu tugas utama yang harus berhasil dilakukan pengguna di layar ini.
2. Pengguna target: siapa mereka, seberapa familiar dengan teknologi dan dengan domain produknya.
3. Platform: web desktop, web mobile, aplikasi iOS/Android, atau dashboard internal.
4. Tahap desain: wireframe, mockup final, atau produk live. Tahap ini menentukan seberapa detail kritik visual yang pantas diberikan.
5. Usage frequency: dipakai setiap hari sebagai alat kerja, atau hanya sesekali. Informasi ini sangat menentukan prinsip UX psychology mana yang paling relevan (lihat Lensa 2).

Kalau informasi ini tidak diberikan, ajukan maksimal satu pertanyaan singkat yang menanyakan hal paling menentukan (biasanya pengguna target dan usage frequency). Kalau pengguna tidak sedang menunggu jawaban atau konteks cukup jelas dari input, buat asumsi yang masuk akal dan tulis asumsi itu di laporan (Lampiran A4, dan satu kalimat di bagian "Untuk siapa" bila menyangkut pengguna target).

### Konteks berlaku untuk semua lensa

Konteks yang diberikan pengguna skill (tujuan layar, pengguna target, platform, tahap desain, usage frequency, serta batasan lain seperti regulasi, brand guideline, atau keputusan desain yang sudah dikunci) adalah acuan utama untuk seluruh review. Semua prinsip di skill ini, mulai dari UX psychology, aksesibilitas, hierarki visual, UX writing, responsif, sampai fitur AI, diterapkan sesuai konteks itu. Prinsip tidak diterapkan seragam ke semua layar.

Konteks memengaruhi tiga hal:
1. **Relevansi:** prinsip mana yang dinilai. Prinsip yang tidak berlaku untuk konteks ini dilewati dan dicatat singkat di bagian "Prinsip yang dikesampingkan" di laporan. Contoh: rule of thirds tidak dinilai untuk tabel data, kriteria WCAG soal video tidak dinilai bila tidak ada video.
2. **Bobot dan severity:** seberapa besar dampak sebuah temuan. Contoh: information density yang tinggi bisa menjadi kelebihan untuk dashboard yang dipakai setiap hari oleh pengguna ahli, dan menjadi masalah untuk halaman yang dikunjungi sekali oleh pengguna awam.
3. **Bentuk rekomendasi:** solusi disesuaikan dengan platform, tahap desain, dan batasan yang ada. Contoh: untuk wireframe, kritik warna dan detail visual dikurangi. Untuk keputusan desain yang sudah dikunci, temuan tetap dicatat dengan rekomendasi yang bekerja di dalam batasan itu.

Bila konteks dari pengguna skill bertentangan dengan bawaan skill, ikuti konteks pengguna dan tulis keputusan itu di bagian asumsi laporan. Contoh: pengguna meminta target WCAG level AAA penuh, atau meminta fokus hanya pada aksesibilitas.

Satu batasan untuk aksesibilitas: konteks boleh mengubah relevansi kriteria, target level, dan urutan prioritas. Namun pelanggaran A dan AA pada kriteria yang relevan tetap dilaporkan, termasuk untuk aplikasi internal atau pengguna yang dianggap "tidak ada yang disabilitas". Alasannya: disabilitas sering tidak terlihat, bisa bersifat sementara (tangan cedera, layar terkena silau matahari), dan pengguna baru dengan kebutuhan aksesibilitas bisa datang kapan saja. Untuk konteks seperti itu, severity boleh disesuaikan dan alasannya ditulis.

## 2. Kenali jenis input

- Screenshot atau gambar mockup: review visual dan perilaku yang bisa disimpulkan. Hal yang butuh kode (urutan fokus keyboard, label screen reader, atribut ARIA) masuk ke bagian "Perlu diverifikasi".
- File gambar yang tersedia di workspace: hitung rasio kontras warna dengan sampling piksel memakai Python (lihat bagian 6), jangan hanya menebak.
- Kode HTML/JSX/CSS: periksa semantik, label, atribut alt, struktur heading, role, dan state fokus langsung dari kode, lalu render file itu secara lokal dan jalankan skrip scan aksesibilitas (Lensa 3).
- URL produk atau prototipe: ambil screenshot di lebar desktop dan mobile, jalankan skrip scan aksesibilitas (Lensa 3), lalu tetap lakukan review lensa lainnya.
- Beberapa layar sekaligus (sebuah flow), prototipe, atau URL multi-halaman: jalankan Lensa 1B (flow) penuh. Nilai juga konsistensi antar layar, informasi yang harus diingat pengguna antar langkah, dan apa yang berubah di layar setelah setiap aksi. Untuk prototipe atau URL, telusuri flow-nya langsung dari titik masuk yang realistis.

## 3. Lensa review

Kerjakan Lensa 1 sampai 6 untuk setiap review, kecuali pengguna skill membatasi cakupan (misalnya hanya meminta review aksesibilitas atau hierarki visual); dalam hal itu kerjakan lensa yang diminta saja dan sebutkan lensa yang tidak dikerjakan di bagian asumsi. Lensa 7 hanya dikerjakan bila layar memuat fitur AI atau konten yang disusun algoritma. Setelah lensa, jalankan pemeriksaan pola yang relevan (state, form, navigasi, data display) seperti dijelaskan di akhir bagian ini; temuannya masuk ke lensa yang sudah ada. Setiap lensa dijalankan menurut aturan "Konteks berlaku untuk semua lensa" di bagian 1: nilai hanya prinsip yang relevan, dan sesuaikan bobot serta rekomendasinya dengan konteks. Catat temuan hanya bila benar-benar terlihat atau beralasan kuat; jangan mengisi lensa dengan temuan generik supaya terlihat lengkap.

### Lensa 1: Tugas utama, flow, dan journey

Lensa ini menilai dua hal: apakah tugas utama bisa diselesaikan, dan berapa biaya (interaction cost) yang harus dibayar pengguna untuk menyelesaikannya, dari satu layar sampai seluruh journey lintas touchpoint. Panjang flow selalu dinilai terhadap konteks (frekuensi, risiko, profil pengguna), tidak terhadap angka ideal yang seragam. Penjelasan lengkap, tabel bobot, area cek, dan format peta flow ada di `references/task-flow.md`. Baca file itu setiap kali menjalankan lensa ini.

#### 1A. Pemahaman tugas di layar (selalu dikerjakan)
- Apakah tindakan utama (primary action) langsung terlihat dalam 5 detik pertama?
- Apakah ada lebih dari satu tombol yang bersaing sebagai tindakan utama?
- Apakah pengguna tahu sedang berada di mana dan langkah apa berikutnya?
- Untuk input satu layar: dari mana pengguna datang, berapa langkah tersisa, dan apakah ada langkah di layar ini yang bisa dihapus, digabung, atau diisi otomatis? Hal yang tidak terlihat masuk "Perlu diverifikasi".

#### 1B. Flow (dikerjakan bila input berupa beberapa layar, prototipe, URL multi-halaman, atau tugas multi-langkah)
1. **Rumuskan tugas dan definisi selesai** dari sudut pandang pengguna, lalu tentukan titik masuk yang realistis (beranda, link email, notifikasi, pencarian).
2. **Petakan happy path** langkah demi langkah: layar, aksi, sub-langkah mental, data yang diminta, waktu tunggu.
3. **Hitung biaya:** layar, klik atau tap, field, keputusan, waktu tunggu, perpindahan konteks, dan informasi yang harus dicari di luar produk. Bandingkan dengan jumlah langkah minimum yang benar-benar dibutuhkan.
4. **Uji setiap langkah:** hapus, gabung, isi otomatis, tunda, pindah urutan, atau lindungi (langkah pengaman seperti konfirmasi hapus dan tinjau sebelum kirim dipertahankan, dibuat ringan).
5. **Petakan unhappy path:** error, Back, keluar lalu kembali, timeout, data belum lengkap, revisi setelah ditolak.
6. **Periksa area** di bagian 5 file referensi sesuai bobot konteks: panjang flow, urutan langkah, data berulang, orientasi dan progres, dead end dan detour, jeda dan pemulihan, penutupan, titik masuk, efisiensi untuk pengguna berulang, pemakaian pertama dan onboarding, serta notifikasi dan pengingat.

#### 1C. Journey dan touchpoint (dikerjakan bila bahan atau konteks menyebut touchpoint di luar layar, atau pengguna memintanya)
- Petakan tahapan journey dan touchpoint-nya (email, notifikasi, WhatsApp, persetujuan atasan, petugas, loket, dokumen fisik). Tandai titik ketika pengguna terputus: tidak tahu status, harus bertanya ke petugas, langkah offline yang tidak diberitahukan di awal, atau informasi yang berbeda antar channel.
- Bagian journey yang tidak terlihat di bahan review ditulis sebagai asumsi dengan confidence "Perlu verifikasi".

#### 1D. Hubungan dengan lensa lain dan aturan penulisan
- Lensa 2 kelompok G (interaction cost) adalah dasar teori. Temuan tentang panjang atau urutan flow dilaporkan di Lensa 1; temuan di level satu kontrol (misalnya posisi tombol submit) tetap di Lensa 2. Sludge dan deceptive patterns di dalam flow (forced registration, roach motel) mengikuti severity kelompok I.
- WCAG 3.3.7, 3.3.4, 2.2.1, 2.4.5, 3.2.6, dan 3.3.8 dilaporkan di Lensa 3 dan dirujuk dari sini.
- Setiap temuan flow menyebut tugas, langkah, layar, dan angkanya, serta alasan kontekstual (contoh: "staf memproses sekitar 40 pengajuan per hari, jadi 3 klik tambahan menjadi 120 klik per hari").
- Ringkas hasil 1B dengan angka sebelum dan sesudah, lalu isi bagian "Alur tugas: sekarang dan usulan" di laporan. Usulan perbaikan ditulis sebagai daftar langkah flow baru, bukan hanya "sederhanakan flow".
- Langkah yang ada karena regulasi atau aturan bisnis dicatat sebagai batasan, dengan rekomendasi yang bekerja di dalam batasan itu.

### Lensa 2: UX psychology yang disesuaikan konteks

UX psychology adalah penerapan temuan psikologi kognitif dan perilaku (cara orang memperhatikan, mengingat, memutuskan, dan merasa) pada desain. Prinsip ini tidak berlaku sama kuat di semua produk. Prinsip yang sangat penting untuk aplikasi kerja yang dibuka setiap hari bisa hampir tidak relevan untuk halaman pemasaran yang dikunjungi sekali, dan sebaliknya. Penjelasan lengkap, tabel bobot, dan kartu setiap prinsip (inti, cara cek, rekomendasi) ada di `references/ux-psychology.md`. Baca file itu setiap kali menjalankan lensa ini.

#### 2A. Alur kerja
1. **Susun profil konteks** dengan tujuh dimensi: usage frequency, switching cost (wajib memakai atau bisa pindah), primary task, information density, usage context, user profile (domain expertise, tech literacy, usia, AI literacy bila relevan), dan emotional load. Dimensi yang tidak diketahui ditulis sebagai asumsi. Profil ini ditulis ringkas di Lampiran A4 laporan (isi utama cukup menyebut penggunanya dalam satu kalimat) dan juga dipakai oleh lensa lain.
2. **Tentukan bobot prinsip** dengan tabel di bagian 2B file referensi. Periksa paling dalam kelompok yang bobotnya naik untuk konteks ini. Prinsip berbobot rendah boleh dilaporkan bila masalahnya jelas terlihat, tetapi jangan dicari-cari.
3. **Periksa prinsip** yang terpilih dengan kartu di bagian 2C file referensi.
4. **Selesaikan pertentangan antar prinsip** (misalnya konsistensi versus pola baru yang lebih efisien, atau estetika versus information density) berdasarkan profil konteks, dan tulis alasannya. Daftar pertentangan yang umum ada di bagian 2B file referensi.

#### 2B. Kelompok prinsip
- **A. Change blindness:** perubahan di layar yang tidak disadari pengguna.
- **B. Gestalt:** proximity, similarity, common region, closure.
- **C. Memory dan cognitive load:** working memory, recognition over recall, chunking, cognitive load, spatial memory, power law of learning.
- **D. Perception, expectation, dan first impression:** priming, peak-end, picture superiority, halo effect, negativity bias, aesthetic-usability dan kesan pertama, delight.
- **E. Navigation, information foraging, dan mental model:** mental model, information scent, satisficing.
- **F. Decision making:** strategi compensatory dan noncompensatory, perbedaan opsi yang eksplisit, choice overload dan sludge, prospect theory, anchoring.
- **G. Interaction cost dan motor behavior:** interaction cost, Fitts's law, device inertia, momentum behavior, selective attention.
- **H. Motivation:** self-determination theory (autonomy, competence, relatedness), fresh start effect.
- **I. Persuasion, trust, dan ethics:** trust pyramid, credibility, prinsip Cialdini, creepiness, deceptive patterns, attention capture dan the Vortex, anthropomorphism dan trust pada AI.

#### 2C. Hubungan dengan lensa lain
- Gestalt (kelompok B) menjadi dasar penilaian pengelompokan di Lensa 4. Nilai dampaknya pada perilaku di sini, dan dampaknya pada urutan baca di Lensa 4, tanpa melaporkan masalah yang sama dua kali.
- Chunking, information scent, negativity bias, dan peak-end menjadi dasar penjelasan dampak di Lensa 5.
- Copy manipulatif (Lensa 5 bagian 11 file referensinya) dinilai dengan severity deceptive patterns di kelompok I.
- Anthropomorphism dan mental model AI dilanjutkan di Lensa 7 bila produk punya fitur AI.

#### 2D. Aturan penulisan temuan
- Setiap temuan wajib menyebut alasan kontekstual, yaitu mengapa prinsip itu penting untuk produk dan pengguna ini (contoh: "karena layar ini dibuka setiap hari oleh staf administrasi, perubahan urutan menu akan merusak kebiasaan mereka").
- Prinsip yang tidak relevan dengan profil konteks cukup disebut singkat di bagian "Prinsip yang dikesampingkan" beserta alasannya dalam satu kalimat.
- Bedakan dugaan perilaku dari bukti. Dampak psikologis yang disimpulkan dari tampilan statis diberi confidence "Perlu verifikasi" kecuali sangat jelas, dan sarankan cara memvalidasinya (usability testing, 5-second test, analytics).
- Setiap deceptive pattern minimal ber-severity Tinggi; yang menyebabkan kerugian uang atau data tanpa persetujuan jelas dinilai Kritis.

### Lensa 3: Aksesibilitas (WCAG 2.2 level A, AA, dan AAA, diuji oleh sistem)

Lensa ini mencakup seluruh 86 kriteria WCAG 2.2 di level A, AA, dan AAA, dengan fokus pada pengujian yang bisa dilakukan sistem: skrip, browser otomatis, dan analisis Claude atas kode, DOM, atau piksel gambar. Katalog lengkapnya, termasuk kategori setiap kriteria dan cara mengujinya, ada di `references/wcag-22-automated.md`. Baca file itu setiap kali mengerjakan lensa ini.

Langkah kerja:

1. Tentukan target level dan kriteria yang relevan dari konteks. Lewati kriteria yang tidak berlaku untuk konten layar (misalnya kriteria media bila tidak ada audio atau video). Bawaan skill adalah A dan AA sebagai standar yang wajib, dengan AAA dilaporkan terpisah sebagai peluang peningkatan. Ikuti target lain bila pengguna menyebutkannya (misalnya regulasi yang mewajibkan level tertentu).
2. Jalankan pengujian sesuai jenis input:
   - Kode atau URL: jalankan `scripts/a11y_scan.mjs` (cara instal dan pemakaian ada di file referensi). Skrip menjalankan axe-core ditambah pemeriksaan yang tidak dicakup axe: ukuran target, reflow 320 px, spasi teks, pembesaran 200%, penelusuran keyboard, fokus terlihat, fokus tertutup, orientasi, dan lainnya.
   - Screenshot saja: lakukan pemeriksaan yang bisa dilakukan dari piksel (kontras, ukuran target relatif, teks dalam gambar, informasi yang hanya dibedakan warna, frasa sensorik, panjang baris). Hitung kontras dengan rumus di bagian 6.
   - Bila skrip tidak bisa dijalankan (jaringan terblokir, halaman butuh login), jelaskan dalam satu kalimat, lakukan pemeriksaan yang masih mungkin dari kode atau screenshot, dan sarankan pengguna menjalankan skrip atau alat scan seperti axe DevTools atau WAVE lalu mengirim hasilnya.
3. Untuk kriteria berkategori S (semi-otomatis), lanjutkan dengan pemeriksaan [Claude] dan [interaksi] yang tercantum di katalog. Jalankan interaksi yang mengubah data (submit form, tambah item) hanya di file lokal, prototipe, atau lingkungan uji.
4. Tafsirkan hasil. Status `fail` dari skrip masuk tabel temuan dengan confidence "Terkonfirmasi" setelah dicek tidak salah konteks. Status `candidate` harus dikonfirmasi dari kode atau screenshot; bila tidak bisa dipastikan, masuk dengan confidence "Perlu verifikasi". Gabungkan temuan axe dan skrip yang menunjuk masalah yang sama supaya tidak dobel.
5. Kriteria berkategori M (manual) tidak dinilai. Sebutkan hanya yang relevan dengan layar ini di bagian "Perlu diverifikasi", beserta cara mengujinya (screen reader NVDA atau VoiceOver, navigasi keyboard oleh penguji, atau uji dengan pengguna disabilitas).

Aturan penulisan temuan aksesibilitas:
- Sebutkan nomor kriteria, nama, dan levelnya (misalnya "WCAG 2.5.8 Target Size (Minimum), AA").
- Sertakan bukti terukur: rasio kontras dengan nilai hex, ukuran dalam px, lebar konten saat reflow, atau selector elemen.
- Jangan menyimpulkan halaman "aksesibel" hanya karena scan bersih. Scan otomatis rata-rata hanya menangkap sekitar sepertiga masalah aksesibilitas; nyatakan hal ini di ringkasan Lensa 3.
- Di laporan, pisahkan hasil Lensa 3 menjadi tiga bagian: pelanggaran A/AA, peluang AAA, dan kriteria yang perlu diverifikasi manual.

### Lensa 4: Hierarki visual dan konsistensi

Hierarki visual adalah penataan elemen supaya pengguna langsung mengenali urutan kepentingannya: apa yang dilihat pertama, kedua, dan seterusnya. Konsistensi adalah pemakaian pola visual dan perilaku yang sama untuk hal yang sama, sehingga hierarki itu bisa dipelajari dan diandalkan di seluruh produk. Penjelasan lengkap setiap prinsip (penjelasan, cara cek, rekomendasi, cara ukur) ada di `references/visual-hierarchy.md`. Baca file itu setiap kali menjalankan lensa ini.

#### 4A. Alur kerja
1. **Tetapkan urutan kepentingan yang diharapkan.** Dari tugas utama (Lensa 1), tulis 3 sampai 5 elemen yang seharusnya dilihat berurutan.
2. **Squint test.** Buramkan tampilan dan catat urutan elemen yang benar-benar menonjol. Input URL atau kode: pakai `-blur.png` dari skrip di langkah 3. Input screenshot atau mockup: blur Gaussian radius 8 dengan Python (PIL). Selisih antara urutan yang diharapkan dan yang terlihat adalah kandidat temuan. Layar yang semua elemennya menonjol setara berarti tidak punya hierarki.
3. **Ukur dengan skrip** (input URL atau kode):
   ```bash
   node scripts/style_audit.mjs <url-atau-file> --out style-report            # desktop
   node scripts/style_audit.mjs <url-atau-file> --out style-report-m --width 390   # mobile
   ```
   Skrip menginventarisasi ukuran dan ketebalan huruf, keluarga huruf, line height, warna, warna aksen, spacing, radius, bayangan, varian tombol, urutan heading, posisi tepi kiri, dan elemen teks paling menonjol, lalu memberi catatan otomatis. Untuk screenshot, lakukan inventaris visual dan tandai sebagai perkiraan.
4. **Nilai prinsip sesuai bobot konteks.** Pakai tabel bobot di bagian 3 file referensi. Prinsip komposisi (rule of thirds, golden ratio, rule of odds, perspektif, random) hanya berbobot untuk hero, marketing, ilustrasi, dan slide. Untuk aplikasi kerja, form, dan dashboard, fokus pada alignment, proximity, spacing, kontras, tipografi, dan konsistensi.
5. **Periksa konsistensi** (bagian 8 file referensi): token visual, komponen dan state, ikonografi, pola interaksi dan template, format data, terminologi (Lensa 5), dan konsistensi eksternal dengan konvensi platform. Bedakan inkonsistensi tak sengaja dari penekanan yang disengaja.

#### 4B. Prinsip yang dinilai
- **Titik fokus dan penekanan:** focal point, ukuran dan skala, warna, kontras, tekstur dan gaya, perspektif dan elevasi, anomali (efek isolasi).
- **Struktur, arah, dan alur:** alignment dan grid, rule of thirds, golden ratio, balance, movement dan petunjuk arah, garis penuntun, pola baca (F, Z, layer-cake, spotted).
- **Pengelompokan dan ruang:** proximity, sistem spacing, whitespace mikro dan makro, repetisi, pola, rule of odds.
- **Hierarki tipografi:** skala tipografi, 3 sampai 4 tingkat hierarki, ketebalan, line height, panjang baris, huruf kapital, keluarga huruf.

#### 4C. Hubungan dengan lensa lain
- Proximity, similarity, dan common region adalah prinsip Gestalt di Lensa 2 kelompok B. Di lensa ini nilai dampaknya pada urutan baca dan pengelompokan, tanpa mengulang temuan yang sama.
- Kontras, warna sebagai satu-satunya penanda, urutan heading, focus visible, dan konsistensi navigasi juga kriteria WCAG (1.4.1, 1.4.3, 1.4.11, 1.3.1, 2.4.7, 3.2.3, 3.2.4). Laporkan sekali di Lensa 3 dan rujuk dari sini.
- Penonjolan pilihan tertentu (paket "paling populer", tombol tolak yang disamarkan) dicek kejujurannya di Lensa 2 kelompok I.
- Pertentangan estetika dan information density ditimbang dengan profil konteks di Lensa 2.

#### 4D. Aturan penulisan temuan
- Setiap temuan menyebut prinsip, bukti (nilai dari skrip, lokasi elemen, atau hasil squint test), dan dampak pada pengguna. Hindari penilaian selera seperti "kurang menarik".
- Gabungkan catatan skrip yang berasal dari satu akar masalah. Contoh: belasan nilai spacing ganjil dilaporkan sebagai satu temuan "belum ada skala spacing" dengan contoh nilai.
- Tingkat keparahan: titik fokus yang salah pada alur penting biasanya Tinggi; inkonsistensi komponen yang bisa membuat pengguna salah mengira fungsi biasanya Sedang; inkonsistensi token tanpa dampak fungsi biasanya Rendah.
- Margin bawaan browser yang muncul di inventaris spacing dilaporkan sebagai Rendah (style dasar belum di-reset).

### Lensa 5: Konten dan UX writing

Lensa ini menilai semua teks di antarmuka: label perintah, link, heading, microcontent (judul, ringkasan, notifikasi), pesan error, istilah, nada, dan struktur konten. Penjelasan lengkap, contoh, dan pedoman per jenis teks ada di `references/ux-writing.md`. Baca file itu setiap kali menjalankan lensa ini.

#### 5A. Alur kerja
1. **Tentukan acuan dari konteks.** Siapa pembacanya (awam, ahli domain, pengguna baru di domain), seberapa sering mereka memakai produk, platform, kondisi emosi di momen itu, dan pedoman gaya organisasi bila ada. Pakai tabel bobot di bagian 2 file referensi. Contoh: istilah "PAK" atau "SKP" wajar untuk dosen dan staf kepegawaian, tetapi perlu dijelaskan untuk pengguna baru atau masyarakat umum.
2. **Jalankan skrip** (input URL, kode, atau copy deck .txt/.md):
   ```bash
   node scripts/copy_audit.mjs <url | file.html | copy.txt | copy.md> --out copy-report
   ```
   Skrip menghasilkan kandidat temuan dan inventaris heading serta label. Untuk screenshot, baca teksnya langsung dan terapkan pemeriksaan yang sama secara manual. Setiap kandidat dinilai terhadap konteks sebelum menjadi temuan.
3. **Baca bagian yang paling mungkin dipindai:** heading, label tombol, link, kata pertama paragraf dan item daftar. Apakah halaman bisa dipahami dari bagian itu saja? Apakah kata kunci ada di depan?
4. **Ikuti CTA dan link utama** (bila input berupa flow, prototipe, atau URL). Apakah halaman tujuan menepati janji label?
5. **Picu pesan error dan state kosong** di lingkungan uji (submit kosong, data salah) bila memungkinkan, lalu nilai dengan pedoman pesan error.
6. **Nilai nada dan istilah** terhadap profil konteks.

#### 5B. Area yang dinilai
- **Keterbacaan dan pemahaman:** kalimat pendek, kata yang lazim, kalimat positif, inverted pyramid. Kalimat pasif hanya ditandai bila pelaku yang harus bertindak menjadi tidak jelas atau kalimat berbelit, karena pasif wajar dalam bahasa Indonesia dan berguna untuk front-loading.
- **Nada:** empat dimensi (lucu-serius, formal-santai, hormat-nyeleneh, antusias-datar). Kepercayaan lebih menentukan daripada keramahan. Humor berisiko di bidang serius dan di momen sulit.
- **Istilah, jargon, dan singkatan:** pohon keputusan dua pertanyaan (berapa yang tahu, seberapa penting), format "bahasa sederhana (istilah)", singkatan dijabarkan, konsistensi satu konsep satu istilah. Untuk pengguna ahli: fakta, sumber, tanggal, dan jangan menjelaskan istilah dasar bidang mereka.
- **Struktur dan format:** front-loading, chunking, ringkasan, tebal maksimal sekitar 30 persen, daftar berbutir yang paralel, angka sebagai digit untuk fakta.
- **Microcontent:** judul halaman, heading, tagline, subjek email, judul notifikasi, ringkasan kartu, dan petunjuk singkat yang bermakna di luar konteks dan tanpa clickbait.
- **Label perintah:** 1 sampai 4 kata, kata kerja yang menyebut hasil, label toggle menyebut keadaan berikutnya, tanpa "OK" di dialog konfirmasi, tanpa istilah bermerek, konsisten, elipsis untuk perintah yang butuh input lanjutan. Untuk aplikasi kerja: shortcut keyboard yang standar dan mudah ditemukan.
- **Label link:** 4S (spesifik, jujur, cukup isi, ringkas), hindari "Selengkapnya" dan "Mulai" yang umum, link adalah janji yang ditepati halaman tujuan.
- **Pesan error:** dekat sumbernya, tidak hanya warna, sesuai tingkat dampak, tidak muncul terlalu cepat, bahasa manusia, menjelaskan masalah dan solusi, tidak menyalahkan, menjaga input, mencegah kesalahan yang mudah ditebak.
- **Empty state dan state lain:** memberi arahan langkah pertama.
- **Copy yang memengaruhi keputusan:** scare tactics, kelangkaan buatan, emotional framing, confirmshaming, dan copy yang tidak cocok dengan pilihan sebenarnya. Penilaian dan severity mengikuti deceptive patterns di Lensa 2 kelompok I.
- **Penyajian konten panjang:** pilihan antara tampil penuh, accordion, in-page link, atau tab, sesuai kebutuhan pengguna dan ukuran layar (bagian 12 file referensi).

#### 5C. Hubungan dengan lensa lain
- Link generik juga WCAG 2.4.4 dan 2.4.9, error tanpa teks juga WCAG 3.3.1 dan 3.3.3, label tombol ikon juga 4.1.2 dan 2.5.3, judul halaman juga 2.4.2, dan shortcut satu huruf juga 2.1.4. Laporkan di Lensa 3 dan rujuk dari sini.
- Information scent, chunking, working memory, negativity bias, dan peak-end ada di Lensa 2. Gunakan sebagai dasar penjelasan dampak.
- Legibility (ukuran, kontras, typeface) dinilai di Lensa 3 dan Lensa 4.
- Panjang label dan judul yang terpotong di layar kecil dicek bersama Lensa 6.

#### 5D. Aturan penulisan temuan
- Kutip teks aslinya dan beri usulan perbaikan dalam format sebelum dan sesudah. Ikuti nada produk yang sudah ada; untuk copy penting, beri 2 sampai 3 alternatif (bagian 14 file referensi).
- Sebut dampaknya pada pengguna dalam konteks ini (misalnya "dosen tidak tahu tombol ini mengirim usulan ke fakultas atau hanya menyimpan draf").
- Gabungkan masalah yang berulang menjadi satu temuan dengan beberapa contoh, misalnya "label link generik di 6 tempat".
- Hal yang hanya bisa dipastikan lewat pengguna (pemahaman istilah, kesan nada) masuk "Perlu diverifikasi" beserta cara mengujinya.

### Lensa 6: Responsif dan konteks penggunaan

Lensa ini menilai apakah tugas utama tetap bisa diselesaikan di semua perangkat, ukuran layar, metode input, kualitas jaringan, dan situasi pemakaian yang relevan untuk pengguna target. Kemiripan tampilan antar perangkat tidak menjadi tujuan. Penjelasan lengkap, tabel bobot, pola komponen, dan cara uji ada di `references/responsive.md`. Baca file itu setiap kali menjalankan lensa ini.

#### 6A. Alur kerja
1. **Susun profil perangkat dan kondisi:** perangkat utama dan proporsinya, kelas perangkat, sistem dan browser (termasuk in-app browser seperti WhatsApp), jaringan, cara memegang, lingkungan fisik, pola tugas (sekali duduk atau berpindah perangkat), serta waktu dan gangguan. Pakai data analitik bila pengguna skill memilikinya; selain itu tulis sebagai asumsi.
2. **Tentukan bobot dan lebar yang diuji** dengan tabel di bagian 3 dan 4 file referensi. Contoh: aplikasi kerja desktop menekankan 1280 sampai 1920, laptop kecil, dan zoom browser, dengan pemeriksaan mobile untuk fungsi yang sering dibuka dari ponsel (cek status, setujui). Layanan publik menekankan 360 sampai 412, perangkat kelas bawah, dan jaringan lambat.
3. **Jalankan skrip** (input URL atau kode):
   ```bash
   node scripts/responsive_audit.mjs <url-atau-file> --out resp-report [--widths 360,390,412,768,1024,1280,1440] [--perf]
   ```
   Gabungkan dengan hasil `a11y_scan.mjs` untuk reflow 320px, orientasi, ukuran target, spasi teks, dan zoom 200 persen. Untuk screenshot atau mockup, nilai dari desain yang tersedia dan masukkan ukuran yang tidak tersedia ke "Perlu diverifikasi".
4. **Periksa area** di 6B sesuai bobot konteks.
5. **Jalankan stress test data nyata:** data kosong, sangat banyak, teks panjang (nama bergelar, institusi panjang), nama satu kata, karakter khusus, angka besar, dan status langka.

#### 6B. Area yang dinilai
- **Layout dan prioritas konten:** reflow tanpa scroll horizontal, urutan konten di mobile yang mengikuti tugas utama, konten penting yang tidak disembunyikan, ilusi halaman sudah habis, ruang dan panjang baris di layar lebar.
- **Elemen fixed dan sticky:** total tinggi di mobile, tidak menutupi fokus, pesan error, atau tombol aksi.
- **Tipografi responsif:** teks isi sekitar 16px di mobile, font input minimal 16px (mencegah zoom otomatis di iOS), heading yang menyesuaikan.
- **Gambar dan media:** gambar responsif, dimensi untuk mencegah pergeseran layout, teks dalam gambar, video yang hemat kuota.
- **Pola komponen di layar kecil:** navigasi (hamburger, tab bar bawah, priority+), tabel data (scroll dengan kolom sticky, kartu, kolom prioritas), form (satu kolom, tipe keyboard, autocomplete, keyboard di layar, unggah berkas dari kamera atau galeri), modal (layar penuh atau bottom sheet), konten panjang, carousel.
- **Sentuhan dan ergonomi:** ukuran dan jarak target, zona jangkauan jempol, aksi berbahaya yang tidak mudah tersentuh, gestur dengan alternatif yang terlihat, konten yang bergantung pada hover.
- **Metode input:** sentuhan, mouse, keyboard fisik, stylus, suara, kamera; perangkat hybrid.
- **Performa dan jaringan:** LCP, INP, CLS, ukuran halaman, umpan balik saat menunggu, koneksi terputus saat submit, offline, timeout sesi, hemat kuota.
- **Lingkungan dan situasi:** silau, bising, bergerak atau satu tangan, sering terganggu, ruang publik (privasi data), perangkat bersama, tekanan tenggat, ruang gelap.
- **Kontinuitas antar perangkat:** draf tersimpan di server, deep link dari email atau notifikasi, berkas unduhan yang bisa dibuka di ponsel, gaya cetak.
- **Konvensi platform dan pengaturan sistem:** tombol Back Android, gestur iOS, safe area, ukuran huruf sistem, dark mode, reduced motion, in-app browser.

#### 6C. Hubungan dengan lensa lain
- Reflow (1.4.10), orientasi (1.3.4), ukuran target (2.5.8 dan 2.5.5), konten hover (1.4.13), gestur (2.5.1, 2.5.7), fokus tertutup (2.4.11), dan timeout (2.2.1) adalah kriteria WCAG. Laporkan di Lensa 3 dan rujuk dari sini.
- Fitts's law, interaction cost, device inertia, dan spatial memory (Lensa 2 kelompok C dan G) menjadi dasar penjelasan dampak.
- Hierarki yang berubah di mobile (aksi utama terdorong ke bawah) dicek bersama Lensa 4.
- Label yang terpotong karena terlalu panjang dan pola accordion atau in-page link dicek bersama Lensa 5.

#### 6D. Aturan penulisan temuan
- Sebutkan lebar layar, perangkat, atau kondisi tempat masalah muncul, beserta buktinya (screenshot per lebar, nilai px, hasil skrip).
- Kaitkan severity dengan profil perangkat: masalah di perangkat utama pengguna dinilai penuh; masalah di perangkat yang jarang dipakai pengguna target diturunkan dengan alasan tertulis.
- Gabungkan masalah dengan akar yang sama (misalnya satu elemen lebar tetap yang menyebabkan scroll horizontal di semua lebar mobile) menjadi satu temuan.
- Hal yang butuh perangkat nyata (keyboard di layar, in-app browser, performa di perangkat kelas bawah, tombol Back, pemakaian satu tangan) masuk "Perlu diverifikasi" beserta cara mengujinya.

### Lensa 7 (bersyarat): Fitur AI, chatbot, dan personalisasi berbasis algoritma

Kerjakan lensa ini hanya bila layar memuat fitur generative AI (chatbot, asisten, ringkasan otomatis, AI search) atau konten yang disusun algoritma (rekomendasi, feed, personalisasi). Prinsip psikologinya ada di Lensa 2 (anthropomorphism dan trust, mental model, information foraging, working memory). Lensa ini berisi pemeriksaan desain yang spesifik untuk fitur tersebut.

Pertimbangkan dua dimensi AI literacy pengguna target dari profil konteks:
- Prompt fluency: kemampuan menyampaikan tujuan, konteks, dan batasan kepada AI. Pengguna yang rendah di sini menulis permintaan seperti kata kunci mesin pencari.
- Output literacy: kemampuan menilai jawaban AI, misalnya mengenali informasi yang mungkin keliru dan tahu kapan harus memeriksa sumber.
Kedua dimensi ini tidak selalu tumbuh bersamaan. Pengguna yang lancar memakai AI bisa tetap tidak kritis terhadap jawabannya. Adopsi AI juga masih jauh lebih rendah dan lebih sederhana daripada yang dibayangkan tim teknologi, terutama pada pengguna berusia lebih tua dan di luar bidang teknologi.

**7A. Pemahaman kemampuan dan onboarding**
- Cek: nama atau tagline yang tidak menjelaskan fungsi; tutorial panjang di awal; pop-up instruksi yang mudah dikira iklan; contoh perintah yang terlalu khusus atau sekadar tren; pilihan kepribadian di onboarding yang membuat pengguna salah paham soal kualitas hasil; AI yang tidak bisa menjawab dengan benar saat ditanya "bisakah kamu...?"; fitur penting yang tersembunyi sehingga pengguna tidak tahu kemampuan alatnya (discoverability barrier).
- Rekomendasi: nama dan deskripsi yang langsung menjelaskan fungsi; contoh perintah yang umum dan mengundang ("Ringkas dokumen ini", "Bandingkan dua pilihan"); bantuan kontekstual saat fitur pertama kali dipakai; AI mengenal kemampuannya sendiri; fitur AI yang sempit dan jelas tujuannya lebih mudah dipahami pengguna baru daripada chat serba bisa.

**7B. Membantu pengguna menyampaikan kebutuhan**
- Cek: kotak input kosong tanpa petunjuk; jawaban panjang dan umum atas permintaan yang samar, tanpa pertanyaan klarifikasi; saran pertanyaan lanjutan yang terlalu dasar, mirip pertanyaan awal, atau hilang setelah jawaban berikutnya; tidak ada cara cepat menambahkan batasan (anggaran, lokasi, waktu).
- Rekomendasi: ajukan pertanyaan klarifikasi singkat saat permintaan samar; tampilkan saran lanjutan yang bisa diklik, relevan, dan tetap tersedia; sediakan penyempurnaan sekali klik (persingkat, perpanjang, jadikan tabel, urutkan); sediakan kontrol batasan yang umum untuk domainnya. Fungsi ini juga mengatasi keyword foraging, yaitu kesulitan pengguna mencari istilah yang tepat untuk sesuatu yang belum mereka ketahui namanya.

**7C. Kualitas dan relevansi jawaban**
- Cek: jawaban yang hanya berisi daftar link sehingga pengguna tetap harus mengumpulkan informasinya sendiri; jawaban umum yang tidak memakai konteks pengguna (lokasi, data yang sudah diberikan, percakapan sebelumnya); AI yang lupa konteks di tengah percakapan; terlalu banyak informasi yang tidak diminta; iklan di percakapan yang bersifat riset.
- Rekomendasi: AI merangkum informasi dari berbagai sumber menjadi jawaban yang spesifik; tawarkan format yang mendukung keputusan (tabel pembanding, daftar berperingkat), karena ini berfungsi sebagai external memory; pertahankan konteks percakapan; iklan hanya untuk permintaan produk yang spesifik dan relevan.

**7D. Kemudahan memeriksa jawaban**
- Inti: memeriksa jawaban AI punya interaction cost yang besar, sehingga pengguna hanya memeriksa bila taruhannya tinggi. Desain harus membuat pemeriksaan murah dan terlihat. Pengguna cenderung beralih ke pencarian biasa dan sumber resmi untuk harga, angka, kesehatan, hukum, dan topik khusus.
- Cek: sumber tidak ada, tidak relevan, atau tidak jelas mendukung klaim yang mana; link yang rusak, kedaluwarsa, atau tidak berisi informasi yang diklaim; peringatan akurasi yang tertimbun di bawah jawaban panjang; tidak ada penanda untuk informasi yang rawan salah (harga, ketersediaan, langkah teknis di antarmuka); saran lanjutan yang selalu mendorong ke pertanyaan baru, tidak pernah ke pemeriksaan.
- Rekomendasi: kaitkan setiap klaim dengan sumbernya, idealnya dengan tautan langsung ke bagian yang dikutip; pakai bahasa yang menunjukkan ketidakpastian bila informasi mungkin usang; tampilkan peringatan kontekstual tepat di samping informasi yang rawan salah; sediakan tombol pemeriksaan yang terlihat ("Lihat sumber", "Periksa klaim utama", "Bandingkan dengan hasil web"); beri tanda jelas bila sumber tidak ditemukan; sediakan saran lanjutan yang mengajak berpikir kritis ("Seberapa yakin jawaban ini?"); untuk data penting, arahkan ke sumber resmi.

**7E. Menjaga konteks dan kendali percakapan**
- Cek: link atau video yang membuka halaman baru tanpa penanda sehingga pengguna takut kehilangan percakapan; tombol "percakapan baru" yang terlalu dekat dengan kotak input; pengiriman tidak sengaja yang membuat AI menganggap topik baru; tampilan mobile yang terlalu padat; riwayat percakapan yang sulit ditemukan.
- Rekomendasi: beri tanda tujuan link; putar video di dalam percakapan; jauhkan tombol yang merusak konteks dari kotak input; simpan riwayat yang mudah dibuka kembali.

**7F. Rekomendasi dan personalisasi berbasis algoritma**
- Inti: bagi pengguna, algoritma adalah kotak hitam. Mereka tidak tahu tindakan mana yang dihitung dan tidak bisa mengendalikan hasilnya. Akibatnya muncul teori yang keliru dan kecurigaan bahwa sistem lebih "menguntit" daripada kenyataannya.
- Cek: rekomendasi tanpa penjelasan asal-usulnya; tidak ada cara memberi umpan balik atas rekomendasi yang buruk, terutama yang memakan banyak ruang atau waktu; item yang sama muncul berulang di beberapa daftar; urutan yang tidak bisa dipahami dan tidak bisa diubah ke urutan yang wajar (misalnya kronologis); tata letak atau gambar sampul yang berubah tiap sesi.
- Rekomendasi: jelaskan alasan rekomendasi ("Karena Anda membuka..."); sediakan kontrol untuk mengurutkan, memfilter, atau menyembunyikan, dengan tombol umpan balik yang makin menonjol bila rekomendasi buruk makin merugikan; hindari duplikasi; personalisasi per pengguna lalu pertahankan stabil antar sesi (lihat spatial memory di Lensa 2); taruh informasi kunci di awal judul dan deskripsi supaya mudah dipindai.

### Pemeriksaan pola (lintas lensa)

Pemeriksaan pola menyatukan aspek yang tersebar di beberapa lensa menjadi satu alur review untuk pola antarmuka yang sering bermasalah. Pemeriksaan ini bukan lensa baru: setiap temuan dilaporkan di lensa yang sudah ada menurut tabel pemetaan di file referensinya, dengan kolom Lensa ditulis sebagai nomor lensa dan nama pola (misalnya "1 · State", "5 · Form", "2 · Navigasi", "4 · Data"). Satu akar masalah dilaporkan sekali. Kedalaman dan bobot setiap pemeriksaan mengikuti konteks pengguna skill (bagian 1) dan tabel bobot di file referensinya. Bila pengguna skill membatasi cakupan, pemeriksaan pola ikut dibatasi, kecuali pola yang menyangkut lensa yang diminta.

| Pola | Dijalankan bila | File referensi | Inti pemeriksaan |
|---|---|---|---|
| **State dan umpan balik** | Setiap review layar atau flow (kedalamannya mengikuti bahan) | `references/states-feedback.md` | Inventaris state (kosong, loading, sebagian, error, offline, tanpa izin, diproses, sukses, kedaluwarsa, terkunci); apakah sistem memberi tahu apa yang terjadi dan apakah aksi berhasil; pencegahan kesalahan; konfirmasi atau undo untuk aksi destruktif |
| **Form** | Layar memuat form atau field isian | `references/forms.md` | Keperluan setiap field, kontrol yang cocok, label dan petunjuk, wajib dan opsional, struktur dan posisi tombol, format input yang toleran, waktu validasi, default, unggah berkas, data sensitif |
| **Navigasi dan pencarian** | Bahan memuat menu, struktur halaman, pencarian, filter, atau sort | `references/navigation-search.md` | Struktur dan label menurut tujuan pengguna, wayfinding, findability, pencarian yang toleran dengan hasil kosong yang membantu, filter aktif yang terlihat dan bisa direset |
| **Data display** | Bahan memuat tabel data, dashboard, kartu KPI, atau grafik | `references/data-display.md` | Pertanyaan pengguna yang terjawab dalam 5 detik, KPI dengan pembanding dan satuan, jenis grafik yang cocok, grafik yang jujur dan bisa dibaca tanpa warna saja, perataan angka dan aksi di tabel, tanggal pembaruan data |

Aturan umum:
- Untuk screenshot atau mockup yang hanya menampilkan satu state, susun daftar state yang seharusnya ada dan masukkan state yang tidak tersedia ke "Perlu diverifikasi" sebagai satu baris, kecuali state itu menyangkut tugas utama atau proses berisiko.
- Untuk kode, prototipe, atau URL, picu state dan uji form, pencarian, serta filter di lingkungan uji. Jangan mengubah data atau memicu error di lingkungan produksi.
- Jangan mengulang isi file referensi lensa. Contoh: isi pesan error tetap dinilai dengan `references/ux-writing.md` bagian 10, keyboard mobile dengan `references/responsive.md` bagian 6.3, dan prinsip information scent dengan Lensa 2 kelompok E.

## 4. Skala severity, confidence, dan effort

Severity:
- Kritis: menghalangi pengguna menyelesaikan tugas utama, atau melanggar aksesibilitas sehingga sebagian pengguna tidak bisa memakai fitur sama sekali.
- Tinggi: menyebabkan error, kebingungan berulang, atau risiko keputusan yang salah. Semua deceptive patterns minimal masuk tingkat ini.
- Sedang: memperlambat atau menambah cognitive load, tetapi tugas masih bisa selesai.
- Rendah: inkonsistensi kosmetik atau peningkatan kecil.

Confidence (seberapa pasti temuannya) untuk setiap temuan:
- Terkonfirmasi: terlihat langsung atau terukur dari input.
- Perlu verifikasi: dugaan kuat yang butuh kode, data analytics, atau uji dengan pengguna.

Effort (perkiraan besar pekerjaan perbaikan) untuk setiap temuan: Kecil (kurang dari 1 hari), Sedang (beberapa hari), atau Besar (lebih dari satu sprint atau butuh riset). Quick wins adalah temuan berdampak besar dengan effort Kecil.

## 5. Format laporan

Tulis dalam Bahasa Indonesia, kecuali pengguna menulis dalam bahasa lain. Ikuti `assets/report-template.md`.

### 5A. Dua lapis: isi utama untuk awam, lampiran untuk tim teknis

Laporan sering dibaca orang yang bukan desainer (pimpinan, PM, klien, pemilik layanan). Karena itu isi utama ditulis dengan bahasa sehari-hari dan tanpa kode, sedangkan detail teknis (lensa, kriteria WCAG, confidence, effort, selector) dipindah ke Lampiran A untuk tim desain dan developer. Tidak ada informasi yang dibuang; hanya letaknya yang dipisah.

Isi utama:
1. **Ringkasan satu menit:** kesimpulan, status (siap dipakai sampai perlu dirancang ulang), jumlah masalah per prioritas, tiga hal yang paling perlu diperbaiki, satu kalimat angka flow bila ada, dan satu hal yang sudah baik.
2. **Letak masalah di layar** (bila ada screenshot atau URL): screenshot dengan penanda bernomor yang sama dengan nomor temuan (lihat 5C).
3. **Masalah yang ditemukan:** dikelompokkan per prioritas. Temuan 🔴 dan 🟠 ditulis sebagai kartu: Di mana, Masalahnya, Akibatnya, Saran, tabel sekarang dan usulan untuk copy, baris "Perlu dicek dulu" bila masih dugaan, dan perkiraan kerja dalam bahasa awam. Temuan 🟡 dan ⚪ cukup satu sampai dua kalimat. Untuk flow dengan tiga layar atau lebih, kelompokkan lagi per layar di dalam setiap prioritas.
4. **Alur tugas: sekarang dan usulan** (bila Lensa 1B atau 1C dikerjakan): tabel langkah dengan beban dan nomor masalah, angka sekarang dan usulan, alur usulan, serta perjalanan di luar layar bila 1C dikerjakan.
5. **Perbaikan cepat:** daftar centang perbaikan berdampak besar dengan effort Kecil, siap dijadikan tiket.
6. **Yang sudah baik:** 2 sampai 4 hal yang perlu dipertahankan supaya tidak hilang saat redesign.
7. **Yang belum bisa dipastikan (perlu diverifikasi):** apa yang perlu dicek, kenapa, dan caranya, dalam bahasa awam.
8. **Ringkasan untuk stakeholder (opsional):** dipakai bila laporan dibawa ke manajemen, tim bisnis, atau klien, dengan rhetorical triangle: ethos (dasar temuan), logos (pola "Bila kita [perbaikan], masalah [masalah pengguna] teratasi dan [nilai bisnis] meningkat"), dan pathos (satu skenario konkret dari sudut pandang pengguna).

Lampiran A (untuk tim desain dan developer): A1 tabel temuan teknis dengan kolom No., Temuan, Severity, Lensa, Dasar penilaian, Confidence, Effort, dan Bukti; A2 kondisi per lensa; A3 hasil aksesibilitas yang dipisah menjadi pelanggaran A/AA, peluang AAA, dan uji manual; A4 profil konteks, profil perangkat, asumsi, dan prinsip yang dikesampingkan; A5 hasil pengecekan otomatis dan cara review; A6 glosarium.

### 5B. Nomor dan label prioritas

- **Nomor temuan** adalah angka biasa (1, 2, 3, ...) yang diurutkan dari prioritas tertinggi. Nomor yang sama dipakai di isi utama, penanda screenshot, tabel alur, perbaikan cepat, dan Lampiran A, sehingga tim teknis tetap bisa merujuk "temuan no. 4" di tiket.
- **Label prioritas** di isi utama ditulis sebagai keputusan, bukan istilah severity. Selalu tulis ikon warna dan teks labelnya bersama-sama: ikon membuat prioritas terlihat sekilas, teks memastikan maknanya tidak hanya bergantung pada warna. Pakai keduanya di tabel jumlah, judul kelompok prioritas, tiga prioritas di ringkasan, dan kolom Severity di Lampiran A.

| Label di isi utama | Severity di Lampiran A |
|---|---|
| 🔴 Harus diperbaiki sebelum dipakai | Kritis |
| 🟠 Segera diperbaiki | Tinggi |
| 🟡 Perlu diperbaiki | Sedang |
| ⚪ Penyempurnaan kecil | Rendah |

- **Confidence** di isi utama hanya muncul sebagai baris "Perlu dicek dulu" pada temuan yang masih dugaan. **Effort** ditulis sebagai "Perkiraan kerja perbaikan: kecil (kurang dari sehari) / sedang (beberapa hari) / besar (lebih dari dua minggu atau perlu riset dulu)".

### 5C. Screenshot dengan penanda bernomor

Bila bahan berupa gambar, frame Figma yang diekspor, atau URL, buat satu gambar per layar dengan penanda bernomor di lokasi setiap temuan:

```bash
python3 scripts/annotate_screenshot.py <gambar.png> <penanda.json> --out <nama>-penanda.png [--scale 2]
```

- `penanda.json` berisi daftar `{"n": nomor, "x": .., "y": .., "w": .., "h": ..}` dalam piksel gambar; `w` dan `h` opsional (tanpa keduanya hanya nomor yang digambar). Skrip butuh Pillow (`python3 -m pip install pillow`).
- Input URL atau kode: ambil koordinat dengan Playwright `element.boundingBox()` dan pakai `--scale` sesuai `deviceScaleFactor` screenshot. Input gambar: tentukan koordinat dari gambar.
- Selalu buka hasilnya dan periksa setiap penanda berada di elemen yang benar sebelum dipakai di laporan. Bila posisi tidak bisa dipastikan, jangan beri penanda untuk temuan itu; cukup sebut lokasinya di teks.
- Temuan yang tidak punya lokasi di layar (misalnya alur, notifikasi, atau perilaku setelah submit) tidak diberi penanda.

### 5D. Menyesuaikan format dengan pembaca

Format bawaan adalah dua lapis di 5A. Sesuaikan bila pengguna skill menyebut pembacanya, dan tulis keputusannya di A4:
- **Tim desain atau developer saja:** tetap pakai isi utama, tetapi kartu boleh menyertakan nama prinsip atau kriteria di samping judulnya. Lampiran A tetap lengkap.
- **Pimpinan atau klien:** isi utama dengan bagian 8 (stakeholder) diaktifkan. Lampiran A tetap disertakan untuk tim teknis, kecuali pengguna skill memintanya dihapus.
- **Review singkat satu layar di percakapan:** ringkasan satu menit, daftar masalah per prioritas, dan perbaikan cepat. Lampiran cukup disebut bila diminta.

### 5E. Aturan supaya laporan mudah dibaca

- **Isi utama harus bisa dipahami pembaca non-desainer.** Tanpa kode, nama lensa, nomor kriteria WCAG, atau istilah teknis yang tidak dijelaskan. Bila istilah teknis perlu, jelaskan langsung di kalimat yang sama (misalnya "kontras warna terlalu rendah, jadi teks sulit dibaca di bawah sinar matahari").
- **Judul temuan menyebut masalah dan akibatnya,** bukan nama prinsip. "Tombol Hapus mudah tertekan saat ingin menyimpan" lebih jelas daripada "Pelanggaran Fitts's law".
- **Satu temuan untuk satu masalah.** Masalah yang berulang digabung menjadi satu temuan dengan beberapa contoh.
- **Kalimat pendek dan spesifik:** sebut elemen, angka, dan pengguna yang terdampak.
- **Istilah teknis di Lampiran A** (reflow, kontras 4,5:1, squint test, cognitive load, dan sejenisnya) tetap ditulis dengan istilah aslinya dan dijelaskan di glosarium. Jangan menerjemahkan istilah teknis, termasuk istilah psikologi, menjadi kata umum yang maknanya kabur (misalnya "kepercayaan" untuk trust atau "usaha" untuk effort).
- Hapus bagian template yang tidak dipakai dan jangan menyisakan placeholder.
- Bila hasil pemeriksaan otomatis dijalankan, sebutkan lokasi file ringkasan dan screenshot sebagai bukti di Lampiran A.
- Laporan panjang yang akan dibagikan sebaiknya disimpan sebagai file atau dokumen (misalnya `laporan-design-review.md`) bersama gambar penandanya, bila lingkungan kerja memungkinkan.

## 6. Menghitung kontras warna

Bila file gambar tersedia, ambil warna piksel teks dan latarnya, lalu hitung:

```python
def lum(rgb):
    def ch(c):
        c = c / 255
        return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4
    r, g, b = (ch(x) for x in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def contrast(fg, bg):
    l1, l2 = sorted([lum(fg), lum(bg)], reverse=True)
    return (l1 + 0.05) / (l2 + 0.05)
```

Cantumkan nilai hex kedua warna dan rasio yang didapat di temuan. Ingat bahwa kompresi gambar dan anti-aliasing bisa menggeser warna, jadi ambil piksel dari bagian tengah huruf yang tebal atau dari area latar yang rata.

## 7. Jaga objektivitas peninjau

Peninjau juga manusia (atau model) yang bisa bias. Terapkan pengaman berikut selama review:

- False-consensus effect: jangan menganggap diri sendiri, tim desain, atau pengguna skill ini sebagai wakil pengguna. Nilai dari sudut user profile di 2A, terutama pengguna dengan pengalaman digital dan kapasitas working memory paling rendah dalam kelompok target. Hal yang sama berlaku untuk fitur AI: tim produk dan peninjau biasanya jauh lebih akrab dengan AI daripada pengguna rata-rata.
- Confirmation bias: bila pengguna skill sudah punya dugaan ("menurutku masalahnya di tombol X"), periksa dugaan itu, tetapi tetap jalankan semua lensa. Cari juga bukti yang membantah dugaan, dan laporkan bila masalah terbesar ternyata ada di tempat lain.
- Halo effect pada peninjau: tampilan yang rapi dan modern tidak membuktikan alur yang mudah. Nilai setiap lensa terpisah sebelum membuat kesimpulan umum.
- Aesthetic-usability effect pada data pengguna: bila pengguna skill membawa hasil tes yang berisi pujian visual dari peserta yang kesulitan menyelesaikan tugas, utamakan apa yang peserta lakukan di atas apa yang mereka katakan. Pujian itu bisa muncul karena peserta merasa harus berkomentar, ingin bersikap sopan, atau memang terpengaruh tampilan.
- Framing: saat menyajikan data atau temuan kuantitatif, tampilkan dari dua sisi (misalnya "4 dari 20 gagal" dan "16 dari 20 berhasil") dan sebut jumlah orang yang terdampak. Jangan menyajikan persentase dari sampel kecil seolah berlaku untuk semua pengguna.
- Functional fixedness (kecenderungan hanya melihat solusi yang biasa dipakai): untuk temuan severity Kritis atau Tinggi, pertimbangkan minimal satu alternatif solusi di luar pola yang paling umum, dengan cara merumuskan ulang masalah intinya tanpa detail permukaan. Tetap utamakan pola umum bila alternatif tidak jelas lebih baik.

Saat menyusun bagian "Perlu diverifikasi", sarankan cara validasi yang tidak bias:
- Tugas uji yang realistis dan akrab bagi pengguna target, tanpa memakai kata yang persis sama dengan label di antarmuka.
- Untuk fitur AI, rekrut peserta dari berbagai kelompok usia dan tingkat AI literacy, dan tanyakan pengalaman AI mereka sebelumnya di tahap penyaringan. Panel rekrutmen online cenderung didominasi pengguna muda yang lebih akrab dengan AI. Jangan beri tahu peserta di awal sesi bahwa studinya tentang AI, supaya pilihan alat mereka tetap alami.
- Pertanyaan terbuka yang tidak mengarahkan (misalnya "Bagaimana proses pengajuannya? Ceritakan bagian yang Anda suka dan tidak suka", alih-alih "Apakah tombol merah sulit ditemukan?").
- Kurangi Hawthorne effect (perubahan perilaku karena merasa diamati): jelaskan bahwa yang diuji adalah desainnya, tegaskan semua masukan berguna, dan pertimbangkan sesi lebih panjang atau observasi di lingkungan kerja asli.
- Triangulasi: gabungkan usability testing dengan data lain seperti analytics, log layanan pelanggan, atau tiket bantuan.

## 8. Aturan kualitas

- Setiap temuan wajib menyebut lokasi spesifik dan prinsip yang mendasarinya. Temuan tanpa lokasi tidak boleh masuk laporan.
- Rekomendasi harus konkret dan bisa dieksekusi (misalnya "ubah warna teks #9E9E9E menjadi #6B6B6B agar rasio naik ke sekitar 5.3:1"), hindari saran umum seperti "tingkatkan kontras".
- Prioritaskan. Batasi tabel utama sekitar 15 sampai 25 temuan; sisanya cukup disebut ringkas.
- Jangan mengarang perilaku yang tidak terlihat. Bila ragu, masukkan ke "Perlu diverifikasi".
- Jelaskan istilah teknis yang jarang dikenal dengan kalimat sederhana saat pertama kali muncul.
- Nada konstruktif dan langsung: sampaikan masalah dengan jelas tanpa melunakkan severity.
