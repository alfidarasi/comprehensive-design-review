# Referensi Lensa 6: Responsif dan Konteks Penggunaan

File ini dibaca saat menjalankan Lensa 6. Isinya: definisi, profil perangkat dan kondisi, bobot per konteks, lebar layar yang diuji, layout dan prioritas konten, pola komponen di layar kecil, sentuhan dan ergonomi, metode input, performa dan jaringan, kondisi data nyata, lingkungan pemakaian, kontinuitas antar perangkat, konvensi platform, metode pengukuran, dan kesalahan umum saat menilai.

Semua aturan di sini diterapkan sesuai konteks dari pengguna skill (SKILL.md bagian 1). Lensa ini paling bergantung pada pertanyaan "perangkat apa yang benar-benar dipakai pengguna, di mana, dan dalam kondisi apa". Dashboard admin yang hanya dibuka di komputer kantor dan layanan publik yang dibuka lewat ponsel di jalan membutuhkan pemeriksaan yang sangat berbeda.

## Daftar isi
1. Definisi
2. Profil perangkat dan kondisi pemakaian
3. Bobot menurut konteks
4. Lebar layar yang diuji
5. Layout dan prioritas konten
6. Pola komponen di layar kecil
7. Sentuhan dan ergonomi
8. Metode input
9. Performa dan jaringan
10. Kondisi data nyata (stress test)
11. Lingkungan dan situasi pemakaian
12. Kontinuitas antar perangkat
13. Konvensi platform dan pengaturan sistem
14. Cara menguji dan mengukur
15. Kesalahan umum saat menilai

---

## 1. Definisi

- **Desain responsif:** satu tampilan yang menyesuaikan tata letaknya dengan lebar layar, biasanya dengan grid fleksibel dan media query (aturan CSS yang aktif pada ukuran layar tertentu). Penjelasan sederhananya: konten yang sama menata ulang dirinya supaya pas di layar apa pun.
- **Desain adaptif:** beberapa tata letak tetap yang dipilih sesuai jenis perangkat. Dalam review, keduanya dinilai dengan cara yang sama, dari hasil yang dilihat pengguna.
- **Konteks penggunaan:** semua kondisi di sekitar pemakaian produk: perangkat, ukuran layar, cara memegang, metode input, kualitas jaringan, lingkungan fisik, gangguan, waktu yang tersedia, dan apakah tugas dilakukan sekali duduk atau berpindah perangkat.
- **Breakpoint:** lebar layar tempat tata letak berubah. Breakpoint yang baik ditentukan oleh konten (saat tata letak mulai rusak), dan tidak sekadar mengikuti ukuran perangkat tertentu.
- **Layout viewport:** area yang dipakai browser untuk menata halaman. Bila konten lebih lebar dari layar, browser mobile memperkecil seluruh halaman, sehingga teks menjadi kecil dan pengguna harus zoom atau scroll ke samping.

Lensa ini menilai apakah produk tetap bisa dipakai untuk tugas utamanya di semua perangkat dan kondisi yang relevan. Kemiripan tampilan antar perangkat tidak menjadi tujuan.

---

## 2. Profil perangkat dan kondisi pemakaian

Sebelum menilai, tentukan profil berikut dari keterangan pengguna skill, data analitik bila ada, atau bukti di input. Bagian yang tidak diketahui ditulis sebagai asumsi.

| Dimensi | Pertanyaan | Contoh |
|---|---|---|
| Perangkat utama | Desktop, laptop, tablet, ponsel, atau campuran? Berapa persen masing-masing? | Staf kepegawaian di kantor: desktop. Dosen yang cek status usulan: sering ponsel |
| Kelas perangkat | Perangkat kelas atas atau kelas bawah (RAM kecil, CPU lambat, layar kecil)? | Pengguna umum di Indonesia banyak memakai Android kelas menengah ke bawah |
| Sistem dan browser | Android atau iOS, Chrome, Safari, browser bawaan, atau browser di dalam aplikasi (in-app browser WhatsApp, Instagram)? | Link yang dibagikan lewat WhatsApp terbuka di in-app browser |
| Jaringan | Wi-Fi kantor yang stabil, data seluler, sinyal tidak stabil, kuota terbatas? | Pengguna di luar kota besar atau sedang di perjalanan |
| Cara memegang dan postur | Satu tangan, dua tangan, sambil berdiri atau berjalan, di meja? | Mengisi data sambil antre |
| Lingkungan fisik | Di dalam ruangan, di luar ruangan (silau), bising, ruang publik (privasi)? | Petugas lapangan, pengguna di transportasi umum |
| Pola tugas | Selesai sekali duduk, atau dimulai di satu perangkat dan dilanjutkan di perangkat lain? | Dosen mulai mengisi di ponsel, mengunggah berkas di laptop |
| Waktu dan gangguan | Ada tekanan waktu, sering terputus, sesi panjang? | Mengisi form panjang di sela pekerjaan |

**Catatan untuk konteks Indonesia.** Android menguasai sebagian besar pasar ponsel, sehingga lebar layar ponsel yang paling umum berada di sekitar 360 sampai 412 CSS piksel (piksel logis yang dipakai browser, lebih kecil dari resolusi fisik layar). Kualitas jaringan dan harga kuota juga sangat bervariasi. Bila pengguna skill punya data analitik, pakai data itu untuk menentukan lebar dan kondisi yang diuji.

---

## 3. Bobot menurut konteks

| Konteks | Bobot tinggi | Bobot rendah atau disesuaikan |
|---|---|---|
| Aplikasi kerja internal yang dipakai di desktop (admin, dashboard, back office) | Lebar 1280 sampai 1920 dan laptop kecil (1280 x 720 atau 1366 x 768), kepadatan data, tabel lebar, multi-jendela atau jendela setengah layar, zoom browser 125 sampai 200 persen, shortcut keyboard | Thumb zone, gestur, kuota data. Mobile cukup dicek bahwa tidak rusak total dan fungsi darurat (lihat status, setujui) masih bisa |
| Layanan publik atau pengguna umum | Mobile lebih dulu (360 sampai 412), perangkat kelas bawah, jaringan lambat, data hemat, form mobile, bahasa sederhana | Layar sangat lebar |
| Aplikasi mobile native atau PWA | Thumb zone, gestur dan alternatifnya, safe area (area aman di sekitar notch dan garis navigasi), tombol Back Android, konvensi iOS dan Android, offline | Hover |
| Multi-perangkat (mulai di ponsel, lanjut di laptop) | Sinkronisasi status, simpan draf, link dari email atau notifikasi yang bekerja di semua perangkat, unggah berkas dari ponsel | (tidak ada) |
| Pemakaian di lapangan (inspeksi, survei, petugas) | Kontras di bawah sinar matahari, target besar, satu tangan, offline dan sinkronisasi, input kamera dan lokasi | Animasi dan dekorasi |
| Tablet (kios, kelas, presentasi) | Landscape dan portrait, target sentuh, keyboard eksternal, layout dua kolom | (tidak ada) |
| Landing page dan pemasaran | Konten di atas lipatan layar per ukuran, gambar responsif (art direction), kecepatan muat (LCP), CTA yang terlihat di mobile | Tabel data |
| Konten panjang (bantuan, dokumentasi, kebijakan) | Panjang baris, ukuran teks, daftar isi atau accordion di mobile, gambar dan tabel yang bisa dibaca di layar kecil, cetak | (tidak ada) |

Aturan: masalah yang hanya muncul di perangkat yang tidak dipakai pengguna target cukup dicatat dengan severity rendah, dengan alasan ditulis. Masalah di perangkat utama pengguna dinilai penuh.

---

## 4. Lebar layar yang diuji

| Kelompok | Lebar (CSS px) | Alasan |
|---|---|---|
| Ponsel kecil | 320 | Batas WCAG 1.4.10 (reflow), juga setara tampilan desktop di zoom 400 persen. Diuji oleh `a11y_scan.mjs` |
| Ponsel umum | 360, 390, 412 | Rentang Android dan iPhone yang paling umum |
| Ponsel landscape dan tablet kecil | 568 sampai 768 | Orientasi landscape dan tablet portrait |
| Tablet dan laptop kecil | 1024 | Tablet landscape, jendela setengah layar di laptop |
| Desktop umum | 1280, 1366, 1440 | Laptop kantor |
| Desktop lebar | 1920 ke atas | Cek panjang baris dan ruang kosong yang berlebihan |

Selain lebar, cek juga:
- **Tinggi layar pendek** (laptop 1366 x 768 dengan bar browser, ponsel saat keyboard terbuka). Konten penting dan tombol aksi bisa terdorong ke bawah.
- **Zoom browser 200 persen** di desktop (WCAG 1.4.4, diuji `a11y_scan.mjs`).
- **Orientasi** portrait dan landscape (WCAG 1.3.4).
- **Ukuran teks sistem diperbesar** (pengaturan ukuran huruf di Android dan iOS).

Uji juga di lebar di antara breakpoint (misalnya 900px). Tata letak sering rusak tepat sebelum breakpoint berikutnya aktif.

---

## 5. Layout dan prioritas konten

### 5.1 Reflow dan scroll horizontal
**Penjelasan.** Konten harus mengalir ulang ke satu kolom tanpa scroll horizontal di lebar kecil. Pengecualian yang sah: tabel data, peta, diagram, dan editor yang memang butuh dua dimensi (WCAG 1.4.10).
**Cek.** Scroll horizontal pada halaman, elemen dengan lebar tetap (px), gambar tanpa `max-width: 100%`, teks panjang tanpa pemenggalan (URL, email, nomor), dan halaman yang diperkecil otomatis oleh browser mobile.
**Rekomendasi.** Lebar relatif, `max-width: 100%` untuk media, `overflow-wrap: anywhere` untuk string panjang, dan wadah scroll khusus untuk konten dua dimensi.

### 5.2 Prioritas konten di layar kecil
**Penjelasan.** Layar kecil memaksa tim memilih apa yang paling penting. Prioritas ditentukan tugas utama (Lensa 1), sehingga urutan konten di mobile tidak harus sama dengan urutan visual di desktop.
**Cek.**
- Apakah tugas utama dan informasi terpenting terlihat tanpa banyak scroll di mobile?
- Apakah ada konten penting yang disembunyikan di mobile? Menyembunyikan fitur di mobile hanya wajar bila pengguna memang tidak membutuhkannya di perangkat itu. Pengguna mobile sering mencari informasi yang sama dengan pengguna desktop.
- Apakah sidebar desktop berpindah ke posisi yang masuk akal (di bawah konten utama, atau di menu)?
- Apakah urutan kolom saat bertumpuk masuk akal, dan sesuai urutan DOM (urutan kode) sehingga urutan baca pembaca layar dan fokus keyboard tetap logis (WCAG 1.3.2 dan 2.4.3)?
- Apakah banner, hero, atau promosi menghabiskan seluruh layar pertama di mobile? Ini bisa menciptakan **ilusi halaman sudah habis**: pengguna tidak sadar ada konten di bawah dan berhenti (terkait closure di Lensa 2 kelompok B).

### 5.3 Ruang dan kepadatan
- Mobile: margin samping sekitar 16px, jarak antar bagian cukup untuk membedakan kelompok.
- Desktop lebar: panjang baris tetap terbatas (sekitar 45 sampai 75 karakter untuk teks), konten tidak meregang ke seluruh 1920px, dan ruang kosong tidak berlebihan.
- Aplikasi kerja: kepadatan yang sesuai untuk pengguna harian; sediakan mode tampilan padat bila pengguna beragam.

### 5.4 Elemen fixed dan sticky
**Penjelasan.** Header, footer, banner cookie, tombol chat, dan bar aksi yang menempel di layar mengurangi ruang konten. Di ponsel dengan keyboard terbuka, ruang yang tersisa bisa sangat kecil.
**Cek.**
- Total tinggi elemen sticky di mobile. Lebih dari sekitar 25 persen tinggi layar biasanya mengganggu.
- Apakah elemen sticky menutupi fokus keyboard, heading tujuan in-page link, atau pesan error (WCAG 2.4.11)?
- Apakah tombol chat atau tombol melayang menutupi tombol aksi atau isi form?
- Apakah header bisa mengecil atau tersembunyi saat scroll ke bawah dan muncul lagi saat scroll ke atas?

### 5.5 Tipografi responsif
- Teks isi minimal sekitar 16px di mobile. Teks di bawah 12px hanya untuk label sangat pendek, itu pun sebaiknya dihindari.
- Heading perlu skala yang lebih kecil di mobile supaya judul tidak memenuhi seluruh layar atau terpotong per kata.
- Font input minimal 16px. Di bawah itu, Safari iOS otomatis memperbesar halaman saat input disentuh, dan pengguna harus mengecilkan lagi secara manual.
- Teks tetap terbaca saat pengguna memperbesar ukuran huruf sistem atau zoom 200 persen.

### 5.6 Gambar dan media
- Gambar responsif (`srcset`, `sizes`) supaya ponsel tidak mengunduh gambar ukuran desktop.
- Art direction: potongan gambar berbeda untuk mobile bila subjek utama menjadi terlalu kecil.
- Atribut `width` dan `height` atau `aspect-ratio` supaya layout tidak bergeser saat gambar dimuat (CLS).
- Teks di dalam gambar menjadi tidak terbaca di layar kecil, dan juga masalah aksesibilitas (WCAG 1.4.5).
- Video: jangan putar otomatis dengan suara, sediakan kontrol, dan pertimbangkan biaya kuota.

---

## 6. Pola komponen di layar kecil

### 6.1 Navigasi
| Pola | Kelebihan | Kelemahan | Cocok untuk |
|---|---|---|---|
| Menu hamburger | Hemat ruang | Fitur tersembunyi jarang ditemukan dan jarang dipakai; menambah langkah | Navigasi sekunder, situs dengan banyak bagian |
| Tab bar bawah (3 sampai 5 item) | Selalu terlihat, mudah dijangkau jempol | Terbatas jumlah item, mengambil ruang | Aplikasi dengan beberapa tugas utama yang sering dipindah |
| Navigasi yang terlihat sebagian (priority+) | Item utama terlihat, sisanya di "Lainnya" | Butuh penentuan prioritas | Situs dengan 4 sampai 8 bagian utama |
| Navigasi tab yang bisa digeser horizontal | Semua item tersedia | Item di ujung sering tidak terlihat | Kategori yang setara |

**Cek.** Apakah tugas paling sering di mobile bisa dicapai tanpa membuka menu tersembunyi? Apakah penanda lokasi ("Anda di sini") tetap terlihat? Apakah navigasi konsisten antar halaman (WCAG 3.2.3)?

### 6.2 Tabel data
Tabel lebar adalah masalah paling umum di aplikasi kerja yang diakses lewat mobile. Pilihan solusi:
| Solusi | Cocok bila |
|---|---|
| Wadah scroll horizontal dengan kolom pertama sticky | Pengguna perlu membandingkan antar kolom; beri petunjuk visual bahwa tabel bisa digeser |
| Ubah setiap baris menjadi kartu (label di samping nilai) | Pengguna melihat satu catatan pada satu waktu |
| Tampilkan kolom prioritas, sisanya di halaman detail atau baris yang bisa dibuka | Ada 2 sampai 3 kolom yang paling penting |
| Ringkasan di mobile, tabel lengkap di desktop | Analisis mendalam memang dilakukan di desktop |
**Cek.** Header tabel tetap terhubung dengan isinya (bagi pembaca layar dan saat scroll), aksi per baris tetap bisa dijangkau, dan angka tidak terpotong.

### 6.3 Form
- Satu kolom di mobile. Label di atas input.
- **Tipe keyboard yang sesuai:** `type="email"`, `type="tel"`, `inputmode="numeric"` untuk NIP, NIDN, NIK, kode pos, dan OTP. Hindari `type="number"` untuk nomor identitas karena bisa menghapus angka nol di depan dan menampilkan tombol naik turun.
- `autocomplete` yang benar (WCAG 1.3.5) dan pengisian otomatis OTP.
- **Keyboard di layar menutupi separuh layar.** Field aktif dan pesan error harus tetap terlihat saat keyboard terbuka. Tombol submit tidak boleh tertutup atau hilang.
- Pilihan sedikit (2 sampai 5) lebih mudah sebagai radio atau segmented control daripada dropdown.
- Date picker: input tanggal yang bisa diketik selain kalender, terutama untuk tanggal lahir atau tanggal lama.
- **Unggah berkas di mobile:** dukung pilihan dari kamera, galeri, dan penyimpanan file; jelaskan format dan batas ukuran sebelum memilih; tampilkan progres unggah; dan bila berkasnya harus PDF, sediakan cara untuk foto dokumen atau beri panduan.
- Form panjang: bagi menjadi langkah atau bagian, simpan draf otomatis, tampilkan progres.

### 6.4 Modal dan dialog
- Di mobile, modal besar sebaiknya menjadi layar penuh atau bottom sheet (panel dari bawah).
- Isi modal yang panjang harus bisa di-scroll, tombol tutup dan aksi tetap terlihat.
- Tombol Back Android sebaiknya menutup modal dan tidak keluar dari halaman.
- Hindari modal di atas modal.

### 6.5 Konten panjang
Accordion, in-page link, dan tab di mobile dibahas di `references/ux-writing.md` bagian 12.

### 6.6 Carousel
Carousel di mobile sering dilewati dan slide setelah yang pertama jarang dilihat. Bila dipakai: sediakan penanda jumlah slide, geser dengan jari serta tombol, tidak bergeser otomatis (atau bisa dihentikan, WCAG 2.2.2), dan jangan menaruh informasi penting di slide kedua dan seterusnya.

---

## 7. Sentuhan dan ergonomi

### 7.1 Ukuran dan jarak target
| Acuan | Ukuran minimum |
|---|---|
| WCAG 2.5.8 (AA) | 24 x 24 CSS px, atau jarak cukup dari target lain |
| WCAG 2.5.5 (AAA) | 44 x 44 CSS px |
| Apple Human Interface Guidelines | 44 x 44 pt |
| Material Design (Android) | 48 x 48 dp |
Untuk mobile, gunakan 44 sampai 48 sebagai target kerja, dengan jarak antar target sekitar 8px. Pengukuran otomatis dilakukan `a11y_scan.mjs`.

### 7.2 Zona jangkauan jempol
**Penjelasan.** Riset Steven Hoober tentang cara orang memegang ponsel menemukan pegangan satu tangan, ditopang satu tangan dan disentuh tangan lain, serta dua tangan, dan orang sering berganti pegangan. Area tengah layar paling mudah dan paling akurat disentuh; sudut atas, terutama sudut yang berlawanan dengan tangan yang dipakai, paling sulit dijangkau dengan satu tangan. Akurasi sentuhan juga menurun di tepi layar, sehingga target di tepi perlu lebih besar.
**Cek.**
- Aksi utama dan aksi yang sering dipakai berada di area yang mudah dijangkau (tengah ke bawah).
- Aksi berbahaya (hapus, keluar) tidak berada tepat di samping aksi yang sering dipakai, dan tidak di posisi yang mudah tersentuh tanpa sengaja.
- Pada ponsel layar besar, tombol penting tidak hanya ada di pojok kiri atas.
**Catatan.** Jangan memindahkan semua aksi ke bawah. Pengguna tetap berharap navigasi dan judul di atas (konvensi platform). Prioritaskan aksi yang sering dan penting.

### 7.3 Gestur
- Setiap fungsi yang hanya bisa dilakukan dengan gestur (geser, cubit, tekan lama) harus punya alternatif yang terlihat, misalnya tombol (WCAG 2.5.1 untuk gestur multi-titik atau berbasis jalur, 2.5.7 untuk drag).
- Gestur tersembunyi tidak bisa ditemukan tanpa petunjuk (terkait recognition over recall, Lensa 2 kelompok C).
- Hindari gestur yang bentrok dengan gestur sistem (geser dari tepi untuk Back, tarik dari atas untuk notifikasi).
- Aksi yang dipicu oleh menggoyang perangkat harus bisa dimatikan dan punya alternatif (WCAG 2.5.4).

### 7.4 Ketergantungan pada hover
**Penjelasan.** Layar sentuh tidak punya keadaan hover. Konten yang hanya muncul saat kursor diarahkan (menu, tooltip, tombol aksi pada baris tabel) tidak bisa diakses di sentuhan dan sering juga tidak bisa diakses dengan keyboard.
**Rekomendasi.** Tampilkan aksi secara permanen atau lewat ketukan, gunakan `:focus-within` di samping `:hover`, dan gunakan media query `(hover: hover)` untuk efek yang hanya cocok di perangkat dengan kursor. Konten yang muncul saat hover atau fokus harus bisa ditutup, bisa diarahkan kursor, dan tetap terlihat (WCAG 1.4.13).

---

## 8. Metode input

| Metode | Yang dicek |
|---|---|
| Sentuhan | Target, gestur, hover, keyboard di layar |
| Mouse dan trackpad | Hover state, klik kanan bila dipakai, target kecil di layar padat tetap memadai |
| Keyboard fisik | Fokus terlihat, urutan fokus, shortcut (Lensa 3 dan Lensa 5), termasuk keyboard eksternal di tablet |
| Stylus | Area tanda tangan atau gambar yang cukup besar |
| Suara dan pembaca layar | Label tombol yang bisa diucapkan (WCAG 2.5.3) |
| Kamera dan sensor | Scan dokumen atau QR dengan alternatif input manual, izin kamera yang dijelaskan sebelum diminta |

Perangkat hybrid (laptop layar sentuh, tablet dengan keyboard) memakai beberapa metode sekaligus. Gunakan media query `pointer` dan `hover` berdasarkan kemampuan input, dan hindari asumsi bahwa layar lebar berarti mouse.

---

## 9. Performa dan jaringan

### 9.1 Core Web Vitals
Metrik Google yang mengukur pengalaman muat dan interaksi, dinilai pada persentil ke-75 pengunjung:
| Metrik | Arti sederhana | Baik |
|---|---|---|
| LCP (Largest Contentful Paint) | Kapan konten utama terbesar muncul | 2,5 detik atau kurang |
| INP (Interaction to Next Paint) | Seberapa cepat layar merespons ketukan atau klik | 200 ms atau kurang |
| CLS (Cumulative Layout Shift) | Seberapa banyak tata letak bergeser tiba-tiba saat dimuat | 0,1 atau kurang |

CLS juga masalah UX langsung: tombol yang bergeser saat akan disentuh membuat pengguna salah klik.

### 9.2 Cek
- Ukuran total halaman dan jumlah request di mobile, terutama gambar, font, dan JavaScript.
- Waktu muat di jaringan lambat dan perangkat kelas bawah. Tim biasanya menguji di laptop kencang dan Wi-Fi kantor, sehingga masalah ini sering tidak terlihat.
- **Umpan balik saat menunggu:** skeleton atau indikator loading untuk proses lebih dari sekitar 1 detik, progres untuk proses lebih dari sekitar 10 detik (terkait change blindness dan working memory di Lensa 2).
- **Koneksi terputus:** apa yang terjadi bila jaringan putus saat submit? Apakah data hilang? Apakah ada pesan yang jelas dan tombol coba lagi? Apakah submit ganda dicegah?
- **Offline:** untuk aplikasi lapangan, apakah data bisa diisi offline dan disinkronkan?
- **Timeout sesi:** peringatan sebelum sesi habis dan cara memperpanjang (WCAG 2.2.1), data tidak hilang setelah login ulang (WCAG 2.2.5, AAA).
- **Hemat kuota:** video tidak diputar otomatis, gambar sesuai ukuran, unduhan besar diberi tahu ukurannya.

### 9.3 Rekomendasi umum
Kompres dan ubah ukuran gambar, lazy-load gambar di bawah lipatan, kurangi JavaScript yang tidak perlu, sediakan ukuran gambar dan ruang untuk konten dinamis, simpan draf secara lokal, dan beri state yang jelas untuk loading, gagal, dan offline.

---

## 10. Kondisi data nyata (stress test)

Mockup biasanya memakai data ideal. Produk nyata menghadapi data yang jauh lebih beragam.
| Kondisi | Contoh untuk dicek |
|---|---|
| Data kosong | Pengguna baru tanpa riwayat, hasil pencarian kosong, tabel tanpa baris. Empty state memberi arahan (Lensa 5) |
| Data sangat sedikit | Satu item di grid yang dirancang untuk banyak item |
| Data sangat banyak | Ribuan baris, ratusan notifikasi, daftar dropdown sangat panjang. Perlu pencarian, filter, paginasi atau virtual scroll |
| Teks panjang | Nama dengan gelar panjang ("Prof. Dr. Ir. Raden Ajeng ..., M.Sc., Ph.D."), nama institusi panjang, judul dokumen panjang, alamat email panjang |
| Teks sangat pendek | Nama satu kata. Banyak orang Indonesia hanya punya satu nama, jadi form yang mewajibkan nama belakang akan gagal |
| Karakter khusus | Apostrof (Ma'ruf), tanda hubung, titik, huruf beraksen, emoji |
| Angka besar dan format | Rp 1.250.000.000, angka negatif, desimal dengan koma, persentase |
| Terjemahan | Teks bahasa Inggris ke bahasa Indonesia, dan sebaliknya, bisa bertambah panjang sekitar 20 sampai 40 persen |
| Waktu dan zona | Tanggal dengan WIB, WITA, WIT; tenggat yang lewat tengah malam |
| Status langka | Dibatalkan, ditolak, kedaluwarsa, ditangguhkan, sedang diproses lama |
| Izin | Pengguna dengan hak akses terbatas melihat tombol yang tidak bisa dipakai |
| Gagal | Server error, unggah gagal, pembayaran gagal |

**Cek.** Apakah teks panjang terpotong tanpa cara melihat versi lengkap? Apakah tata letak rusak (tombol terdorong keluar, kartu tidak sejajar)? Apakah setiap kondisi punya tampilan yang dirancang?

---

## 11. Lingkungan dan situasi pemakaian

| Situasi | Dampak | Yang dicek |
|---|---|---|
| Di luar ruangan, silau | Kontras rendah tidak terbaca | Kontras di atas minimum WCAG untuk teks dan kontrol penting, hindari abu-abu muda untuk informasi penting |
| Bising atau tidak boleh bersuara | Audio tidak terdengar | Teks pengganti untuk audio (caption, transkrip), informasi tidak hanya lewat suara |
| Bergerak atau satu tangan | Sentuhan kurang akurat | Target besar, aksi utama dalam jangkauan jempol, konfirmasi untuk aksi berbahaya, undo |
| Terganggu dan berpindah tugas | Lupa langkah, sesi habis | Simpan draf otomatis, ringkasan posisi saat kembali, peringatan timeout |
| Ruang publik | Data pribadi terlihat orang lain | Masking data sensitif (NIK, nomor rekening) dengan opsi lihat, notifikasi yang tidak menampilkan isi sensitif di layar kunci |
| Perangkat bersama (komputer lab, warnet, perangkat kantor) | Akun tertinggal masuk | Logout yang mudah ditemukan, opsi "jangan ingat saya", sesi yang berakhir |
| Tekanan waktu (tenggat) | Pengguna terburu-buru dan rawan salah | Informasi tenggat yang jelas, pencegahan error, konfirmasi yang ringkas |
| Malam hari atau ruang gelap | Layar terang menyilaukan | Dukungan dark mode bila relevan, tanpa menurunkan kontras |

---

## 12. Kontinuitas antar perangkat

**Penjelasan.** Banyak tugas dimulai di satu perangkat dan diselesaikan di perangkat lain. Contoh: dosen menerima notifikasi di ponsel, melihat status, lalu mengunggah berkas dari laptop.
**Cek.**
- Draf dan progres tersimpan di server, dan tidak hanya di satu browser.
- Link dari email, WhatsApp, atau notifikasi membuka halaman yang tepat (deep link), juga setelah login, dan bekerja di mobile.
- Halaman yang dibuka dari link di mobile tidak berakhir di pesan "gunakan desktop" tanpa alternatif.
- Berkas yang diunduh (PDF, SK, laporan) bisa dibuka di ponsel; tabel atau laporan yang dicetak tetap rapi (gaya cetak).
- Fungsi yang sengaja hanya tersedia di desktop dijelaskan di mobile, dengan cara melanjutkan (misalnya kirim link ke email).

---

## 13. Konvensi platform dan pengaturan sistem

- **Android:** tombol atau gestur Back sistem harus berperilaku sesuai harapan (menutup modal atau panel, kembali satu langkah), dan tidak keluar dari alur tanpa peringatan bila ada data yang belum disimpan.
- **iOS:** gestur geser dari tepi kiri untuk kembali, safe area di sekitar notch, Dynamic Island, dan indikator home.
- **Safe area:** konten dan tombol tidak tertutup notch atau bar navigasi sistem (`env(safe-area-inset-*)`).
- **Ukuran huruf sistem:** tata letak tetap berfungsi saat pengguna memperbesar huruf di pengaturan ponsel.
- **Dark mode:** bila didukung, cek kontras di kedua mode, gambar dan logo yang tetap terlihat, dan grafik yang warnanya masih bisa dibedakan.
- **Reduced motion:** animasi besar dikurangi saat pengguna mengaktifkan pengaturan gerak dikurangi (diuji `a11y_scan.mjs`).
- **Orientasi:** tidak dikunci kecuali memang wajib (WCAG 1.3.4).
- **In-app browser:** fitur seperti unggah berkas, unduh, login dengan Google, dan pembayaran bisa gagal di browser bawaan aplikasi chat. Bila link sering dibagikan lewat WhatsApp, uji di sana atau beri petunjuk membuka di browser.

---

## 14. Cara menguji dan mengukur

### 14.1 Otomatis (input URL atau kode)
```bash
node scripts/responsive_audit.mjs <url-atau-file> --out resp-report [--widths 360,390,412,768,1024,1280,1440] [--perf]
```
Skrip merender halaman di setiap lebar (lebar 480 ke bawah diemulasikan sebagai ponsel sentuh) dan menandai kandidat:
- halaman yang diperkecil otomatis oleh browser mobile, scroll horizontal, dan elemen yang keluar layar,
- teks terpotong (ellipsis atau clip),
- tabel lebih lebar dari layar tanpa wadah scroll,
- teks di bawah 12px di mobile dan font input di bawah 16px,
- field email, telepon, dan angka dengan tipe keyboard yang tidak sesuai,
- elemen sticky yang menutupi lebih dari 25 persen tinggi layar,
- posisi kandidat aksi utama (di atas atau bawah lipatan, sepertiga atas atau dua pertiga bawah),
- gambar yang jauh lebih besar dari ukuran tampilnya dan gambar tanpa dimensi (risiko CLS),
- aturan CSS yang memunculkan konten hanya saat hover,
- stress test teks: label dan data diperpanjang 40 persen di lebar terkecil untuk melihat pemotongan dan overflow baru,
- dukungan dark mode (informasi).

Dengan `--perf`, skrip memuat halaman di emulasi ponsel dengan jaringan 4G lambat (1,6 Mbps, latensi 150 ms) dan CPU 4 kali lebih lambat, lalu melaporkan waktu muat, LCP, CLS, total transfer, dan jumlah request. Pakai hanya untuk URL yang di-host; file lokal tidak mewakili jaringan nyata. Hasil emulasi adalah perkiraan; data lapangan (Chrome UX Report, PageSpeed Insights, analitik) lebih akurat.

Pemeriksaan yang sudah dilakukan `a11y_scan.mjs` tidak diulang: reflow 320px, orientasi, ukuran target, spasi teks, dan zoom 200 persen. Gabungkan hasil kedua skrip.

### 14.2 Untuk screenshot dan mockup
- Minta atau periksa desain di beberapa ukuran (mobile, tablet, desktop). Bila hanya ada satu ukuran, nilai apakah desain itu bisa diadaptasi, dan masukkan sisanya ke "Perlu diverifikasi".
- Perkirakan posisi aksi utama terhadap zona jempol dan lipatan layar.
- Cek apakah mockup memakai data ideal; usulkan kasus data nyata dari bagian 10.
- Untuk Figma: cek apakah frame memakai auto layout dan constraints sehingga bisa menyesuaikan lebar.

### 14.3 Yang perlu diuji manual (masuk "Perlu diverifikasi")
- Perangkat nyata, terutama Android kelas bawah dan iPhone (emulasi tidak meniru performa dan keyboard sepenuhnya).
- Keyboard di layar menutupi field atau tombol.
- In-app browser WhatsApp atau aplikasi lain yang dipakai pengguna untuk membuka link.
- Jaringan putus saat submit, dan perilaku offline.
- Tombol Back Android dan gestur iOS.
- Pemakaian satu tangan pada ponsel besar.
- INP (respons interaksi) dari data lapangan.

---

## 15. Kesalahan umum saat menilai

- **Menilai semua produk dengan standar mobile-first.** Aplikasi kerja desktop tidak perlu dinilai rendah karena kurang nyaman di ponsel bila penggunanya tidak memakai ponsel untuk tugas itu. Sebutkan asumsi perangkat.
- **Sebaliknya, menganggap pengguna internal pasti memakai desktop.** Pengguna sering membuka notifikasi atau link di ponsel. Fungsi kecil yang sering dilakukan (cek status, setujui) tetap perlu bisa di mobile.
- **Hanya menguji di breakpoint populer.** Tata letak sering rusak di antara breakpoint.
- **Hanya memakai data ideal.** Nama pendek, tabel lima baris, dan jaringan kantor menyembunyikan banyak masalah.
- **Menganggap layar lebar berarti mouse,** atau layar kecil berarti tidak ada keyboard.
- **Menyarankan semua aksi dipindah ke bawah layar.** Ikuti konvensi platform dan prioritaskan aksi yang sering.
- **Melaporkan dua kali.** Reflow, orientasi, ukuran target, dan hover yang tidak bisa ditutup adalah kriteria WCAG; laporkan di Lensa 3 dan rujuk dari sini. Teks terpotong yang merupakan masalah penulisan (label terlalu panjang) dicatat di Lensa 5.
