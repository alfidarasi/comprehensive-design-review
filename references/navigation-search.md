# Referensi Pola: Navigasi, Arsitektur Informasi, Pencarian, dan Filter

File ini dibaca saat menjalankan pemeriksaan pola "Navigasi dan pencarian" (SKILL.md bagian 3, Pemeriksaan pola), yaitu bila bahan review memuat menu, navigasi antar halaman, struktur kategori, kolom pencarian, filter, atau sort. Isinya: definisi, cakupan, bobot per konteks, alur kerja, area yang dicek, pemetaan temuan ke lensa, severity, dan kesalahan umum saat menilai.

Pemeriksaan ini bukan lensa baru. Prinsip dasarnya sudah ada di Lensa 2 kelompok E (mental model, information scent, satisficing) dan kelompok C (recognition over recall, spatial memory). File ini menerapkan prinsip itu pada struktur navigasi, pencarian, dan filter. Pola navigasi di layar kecil (hamburger, tab bar bawah) ada di `references/responsive.md` bagian 6.1 dan tidak diulang di sini. Temuan dilaporkan di lensa yang sesuai dengan tabel di bagian 6.

Semua aturan diterapkan sesuai konteks dari pengguna skill (SKILL.md bagian 1).

## Daftar isi
1. Definisi
2. Cakupan menurut jenis input
3. Bobot menurut konteks
4. Alur kerja
5. Area yang dicek
6. Pemetaan temuan ke lensa
7. Severity dan aturan penulisan temuan
8. Kesalahan umum saat menilai

---

## 1. Definisi

- **Arsitektur informasi (information architecture, IA):** cara konten dan fitur dikelompokkan, diberi nama, dan disusun bertingkat sehingga pengguna bisa menemukan yang dicari.
- **Navigasi global:** menu utama yang tampil di semua halaman. **Navigasi lokal:** menu di dalam satu bagian (sub-menu, tab, navigasi samping). **Navigasi kontekstual:** link di dalam konten yang menuju hal terkait.
- **Wayfinding:** kemampuan pengguna mengetahui di mana mereka berada, ke mana bisa pergi, dan bagaimana kembali.
- **Findability:** seberapa mudah sebuah fitur atau konten ditemukan, baik lewat navigasi maupun pencarian. **Discoverability:** seberapa mudah pengguna mengetahui bahwa fitur itu ada walaupun tidak sedang mencarinya.
- **Filter:** mempersempit daftar berdasarkan atribut. **Faceted filter:** beberapa filter yang bisa digabung, biasanya dengan jumlah hasil per pilihan. **Sort:** mengubah urutan tanpa mengurangi isi.

## 2. Cakupan menurut jenis input

| Bahan yang tersedia | Yang dikerjakan |
|---|---|
| Satu layar dengan menu terlihat | Nilai label, pengelompokan, penanda lokasi, dan elemen pencarian atau filter yang terlihat. Kedalaman struktur yang tidak terlihat masuk "Perlu diverifikasi". |
| Beberapa layar, sitemap, atau URL | Petakan struktur menu (tingkat dan jumlah item), telusuri tugas kunci lewat navigasi, uji pencarian dan filter dengan kata kunci realistis. |
| Daftar menu atau sitemap saja | Nilai struktur dan label. Sarankan tree testing atau card sorting untuk validasi. |

Saat menguji pencarian, pakai kata yang dipakai pengguna target, bukan kata di label antarmuka: sinonim, singkatan umum, salah ketik, dan bahasa sehari-hari.

## 3. Bobot menurut konteks

| Kondisi konteks | Naikkan bobot | Turunkan bobot |
|---|---|---|
| Dipakai harian | Stabilitas posisi menu (spatial memory), akses cepat ke fitur yang sering dipakai, pencarian sebagai jalan pintas, filter dan sort yang diingat | Penjelasan menu untuk pengguna baru |
| Dipakai sesekali | Label yang jelas tanpa istilah internal, pengelompokan menurut tujuan pengguna, pencarian yang toleran, halaman awal yang menunjukkan tugas utama | Kustomisasi menu |
| Banyak konten atau fitur (portal, intranet, katalog) | Struktur bertingkat yang konsisten, penanda lokasi, pencarian dengan cakupan jelas, faceted filter | (tidak ada) |
| Sedikit fitur (aplikasi sederhana) | Semua tugas utama terlihat langsung | Struktur bertingkat, pencarian global |
| Daftar data besar (tabel admin, katalog produk) | Filter dan sort yang kuat, filter aktif yang terlihat, hasil kosong yang membantu, simpan filter | (tidak ada) |
| Pengguna dengan pengalaman digital rendah | Menu yang dangkal dengan label lengkap, ikon selalu disertai teks, menu yang tidak tersembunyi | Navigasi berbasis gestur |
| Struktur mengikuti organisasi (instansi, kampus) | Label berdasarkan tugas pengguna, bukan nama unit atau bagian | (tidak ada) |

## 4. Alur kerja

1. **Inventaris struktur.** Catat menu global, menu lokal, jumlah item per tingkat, dan kedalaman. Untuk URL, telusuri dari halaman awal.
2. **Tentukan 3 sampai 5 tugas kunci** dari Lensa 1 dan profil konteks, misalnya "cek status pengajuan" atau "unduh slip gaji".
3. **Telusuri setiap tugas lewat navigasi.** Di setiap pilihan menu, apakah label yang benar jelas lebih menjanjikan daripada yang lain (information scent)? Catat jumlah klik dan titik ragu.
4. **Telusuri tugas yang sama lewat pencarian** dengan kata pengguna, sinonim, dan salah ketik.
5. **Uji filter dan sort** pada daftar utama: kombinasi filter, filter tanpa hasil, reset, dan perilaku saat kembali dari halaman detail.
6. **Periksa area** di bagian 5 sesuai bobot konteks.

## 5. Area yang dicek

### 5.1 Struktur dan pengelompokan
- **Cek:** pengelompokan berdasarkan struktur organisasi, bukan tujuan pengguna; item yang sama muncul di beberapa kategori dengan nama berbeda; kategori "Lainnya" atau "Umum" yang berisi item penting; menu sangat dalam (lebih dari 3 tingkat untuk tugas umum) atau sangat lebar tanpa pengelompokan; tugas utama tersembunyi di tingkat kedua atau ketiga.
- **Rekomendasi:** kelompokkan menurut tujuan pengguna; tugas yang paling sering di tingkat pertama atau di halaman awal; satu item di satu tempat utama, dengan link silang bila perlu; validasi dengan card sorting atau tree testing.

### 5.2 Label navigasi
- **Cek:** jargon, nama program, nama unit, atau singkatan internal sebagai label; label yang tumpang tindih maknanya ("Layanan" dan "Fasilitas"); label kreatif yang tidak menjelaskan isi; ikon tanpa teks untuk fungsi yang tidak universal.
- **Rekomendasi:** kata yang dipakai pengguna; label yang saling eksklusif; ikon selalu disertai teks kecuali ikon yang benar-benar universal (cari, tutup, beranda). Kata-katanya dinilai bersama Lensa 5 bagian 9.

### 5.3 Wayfinding dan penanda lokasi
- **Cek:** menu aktif tidak ditandai; tidak ada breadcrumb di struktur bertingkat; judul halaman tidak sama dengan label menu yang diklik; tombol Back browser yang membawa ke tempat tak terduga (misalnya mereset filter atau keluar dari aplikasi satu halaman); halaman detail tanpa jalan kembali ke daftar dengan posisi yang sama.
- **Rekomendasi:** tandai menu aktif tidak hanya dengan warna; breadcrumb untuk struktur lebih dari dua tingkat; judul halaman sama dengan label yang diklik; Back yang mengembalikan state sebelumnya (posisi scroll, filter).

### 5.4 Konsistensi navigasi
- **Cek:** posisi atau urutan menu berubah antar halaman (juga WCAG 3.2.3); item yang sama punya nama berbeda di tempat berbeda (WCAG 3.2.4); navigasi yang muncul dan hilang tanpa pola.
- **Rekomendasi:** navigasi global yang stabil. Kriteria WCAG dilaporkan di Lensa 3; dampak pada spatial memory dinilai di Lensa 2 kelompok C.

### 5.5 Findability dan discoverability
- **Cek:** fitur yang hanya bisa diakses dari satu tempat yang tidak terduga; fitur penting di menu tiga titik atau klik kanan saja; halaman awal yang berisi banner dan berita tetapi tidak menunjukkan tugas utama; fitur baru tanpa jalan masuk dari tempat pengguna biasa bekerja.
- **Rekomendasi:** jalur masuk dari tempat pengguna sedang bekerja (navigasi kontekstual); tugas utama di halaman awal; akses cepat untuk fitur yang paling sering dipakai; beberapa cara menemukan halaman (WCAG 2.4.5).

### 5.6 Pencarian
- **Cek:**
  - Kolom pencarian yang sulit ditemukan atau terlalu sempit untuk kata kunci yang wajar.
  - Cakupan pencarian yang tidak jelas (seluruh situs, bagian ini saja, atau hanya judul).
  - Tidak toleran terhadap salah ketik, singkatan, sinonim, huruf kapital, atau kata dalam bahasa sehari-hari.
  - Urutan hasil yang tidak relevan; hasil tanpa cuplikan atau konteks yang membantu memilih; jenis hasil yang bercampur tanpa penanda (halaman, dokumen, orang).
  - Hasil kosong tanpa saran ("Tidak ditemukan" saja).
  - Kata kunci hilang dari kolom setelah pencarian sehingga sulit diperbaiki.
- **Rekomendasi:** kolom pencarian di posisi konvensional dengan lebar memadai; cakupan disebut di placeholder atau label ("Cari pengajuan"); toleran salah ketik dan sinonim; hasil dengan judul, cuplikan yang menyorot kata kunci, jenis, dan tanggal; hasil kosong yang menyarankan ejaan lain, kata lebih umum, atau link ke kategori; kata kunci tetap tampil dan bisa diedit; saran otomatis saat mengetik untuk kumpulan data yang diketahui.

### 5.7 Filter dan sort
- **Cek:**
  - Filter yang aktif tidak terlihat sehingga pengguna mengira datanya hilang.
  - Tidak ada cara menghapus satu filter atau semua filter sekaligus.
  - Filter yang langsung memuat ulang halaman setiap kali satu pilihan diklik, sehingga memilih beberapa pilihan menjadi lambat.
  - Kombinasi filter yang menghasilkan nol tanpa peringatan sebelumnya.
  - Filter dan sort yang hilang saat kembali dari halaman detail.
  - Atribut filter yang tidak sesuai cara pengguna memilih; urutan default yang tidak dijelaskan; label sort yang ambigu ("Terbaru" untuk tanggal dibuat atau diperbarui?).
- **Rekomendasi:** chip filter aktif di atas hasil dengan tombol hapus per filter dan "Hapus semua"; jumlah hasil per pilihan filter; terapkan otomatis di desktop bila respons cepat, atau tombol "Terapkan" bila memuat lama dan di mobile; pertahankan filter saat kembali dan di URL; urutan default yang masuk akal dan disebut; label sort yang spesifik. Dasar perilakunya ada di Lensa 2 kelompok F (strategi noncompensatory, satisficing pada urutan default). Hasil filter kosong dinilai juga dengan `references/states-feedback.md`.

## 6. Pemetaan temuan ke lensa

| Jenis temuan | Dilaporkan di |
|---|---|
| Tugas utama tidak bisa ditemukan atau dicapai lewat navigasi maupun pencarian | Lensa 1 |
| Struktur dan pengelompokan, information scent, mental model, spatial memory, perilaku filter dan sort | Lensa 2 (kelompok E, C, F) |
| Navigasi tidak konsisten, beragam cara, skip link, penanda lokasi hanya warna, nama yang dapat diakses | Lensa 3 (3.2.3, 3.2.4, 2.4.5, 2.4.1, 1.4.1, 2.4.8) |
| Penanda menu aktif dan kejelasan visual navigasi | Lensa 4 |
| Kata pada label menu, placeholder pencarian, pesan hasil kosong, label sort | Lensa 5 |
| Pola navigasi dan filter di layar kecil | Lensa 6 |
| Rekomendasi dan urutan berbasis algoritma | Lensa 7F |

Tulis kolom Lensa di tabel temuan dengan nomor lensa dan nama pola, misalnya "2 · Navigasi" atau "5 · Navigasi".

## 7. Severity dan aturan penulisan temuan

- **Kritis:** tugas utama tidak bisa ditemukan sama sekali lewat navigasi maupun pencarian; Back atau navigasi yang membuang pekerjaan pengguna.
- **Tinggi:** tugas utama tersembunyi di tempat yang tidak terduga; pencarian yang gagal untuk kata kunci umum pengguna target; filter aktif tidak terlihat sehingga data terkesan hilang.
- **Sedang:** label yang kabur atau tumpang tindih; tidak ada penanda lokasi; filter yang hilang saat kembali; hasil kosong tanpa saran.
- **Rendah:** urutan item menu yang kurang optimal, variasi kecil dalam penanda.

Aturan penulisan:
- Sebut tugas, jalur yang ditelusuri, dan titik ragunya (contoh: "untuk mencari slip gaji, pengguna harus memilih antara 'Kepegawaian', 'Keuangan', dan 'Layanan Mandiri'; ketiganya sama menjanjikan").
- Untuk pencarian, sebut kata kunci yang diuji dan hasilnya.
- Perubahan struktur besar diberi effort Besar dan disarankan divalidasi dengan tree testing, card sorting, atau analisis log pencarian sebelum diterapkan. Masukkan cara validasi ke "Perlu diverifikasi".

## 8. Kesalahan umum saat menilai

- **Menilai struktur dari sudut pandang tim.** Tim mengenal nama unit dan program internal. Telusuri dengan kata dan tujuan pengguna target.
- **Menganggap semua harus maksimal tiga klik.** Jumlah klik kurang penting dibanding kepastian di setiap pilihan. Klik tambahan yang jelas lebih baik daripada satu menu yang membingungkan.
- **Menyarankan pencarian sebagai pengganti navigasi.** Banyak pengguna menjelajah dulu; pencarian butuh pengguna tahu kata yang tepat.
- **Mengusulkan restrukturisasi total dari satu layar.** Struktur yang tidak terlihat masuk "Perlu diverifikasi".
- **Mengabaikan pengguna harian.** Mengubah posisi menu yang sudah dihafal punya biaya besar walaupun struktur barunya lebih logis (spatial memory, Lensa 2 kelompok C).
