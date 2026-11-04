# Referensi Lensa 4: Hierarki Visual dan Konsistensi

File ini dibaca saat menjalankan Lensa 4. Isinya: definisi, pola pemindaian, tabel bobot per konteks, kartu prinsip (penjelasan, cara cek, rekomendasi, cara ukur), konsistensi, dan metode pengukuran.

## Daftar isi
1. Definisi dan alasan penting
2. Pola pemindaian (scanning pattern)
3. Bobot prinsip menurut konteks
4. Kelompok A: Titik fokus dan penekanan
5. Kelompok B: Struktur, arah, dan alur
6. Kelompok C: Pengelompokan dan ruang
7. Kelompok D: Hierarki tipografi
8. Konsistensi
9. Metode pengukuran
10. Kesalahan umum saat menilai

---

## 1. Definisi dan alasan penting

**Hierarki visual** adalah penataan elemen sehingga orang langsung mengenali urutan kepentingannya: apa yang dilihat pertama, kedua, dan seterusnya. Penjelasan sederhananya: desain yang hierarkinya baik "memberi tahu" mata harus mulai dari mana tanpa perlu instruksi.

Hierarki penting karena tiga hal:
- **Mengarahkan perhatian.** Pengguna memindai (scan), mereka jarang membaca semua. Hierarki menentukan bagian mana yang tertangkap saat pemindaian singkat itu.
- **Mengurangi beban kognitif.** Saat semua elemen sama kuatnya, otak harus memilah sendiri. Saat urutannya jelas, pemilahan itu sudah dilakukan oleh desain (terkait Lensa 2 kelompok C, cognitive load).
- **Membangun kepercayaan.** Tata letak yang rapi dan terarah memberi kesan produk dikerjakan dengan serius (terkait efek estetika-kegunaan dan kesan pertama di Lensa 2 kelompok D).

Kutipan acuan dari Kelley Gordon (Nielsen Norman Group): jika sulit menentukan harus melihat ke mana pada sebuah halaman, kemungkinan besar tata letaknya tidak punya hierarki visual yang jelas.

**Konsistensi** adalah penggunaan pola visual dan perilaku yang sama untuk hal yang sama. Konsistensi membuat hierarki dapat dipelajari: begitu pengguna tahu bahwa tombol biru solid berarti aksi utama, mereka bisa mengandalkannya di seluruh produk. Inkonsistensi membuat setiap layar harus dipelajari ulang.

Hubungan keduanya: hierarki menciptakan perbedaan yang bermakna, konsistensi memastikan perbedaan itu dipakai dengan arti yang sama di semua tempat.

---

## 2. Pola pemindaian (scanning pattern)

Pola pemindaian adalah jalur yang umumnya dilalui mata saat melihat halaman sekilas. Polanya dipengaruhi tata letak dan arah baca (kiri ke kanan untuk bahasa Indonesia dan Inggris).

| Pola | Bentuk | Muncul pada | Implikasi review |
|---|---|---|---|
| **Pola F** | Mata membaca baris atas, lalu baris kedua lebih pendek, lalu turun di sisi kiri | Halaman teks padat tanpa struktur kuat, hasil pencarian | Informasi penting ditaruh di awal baris dan awal paragraf. Pola F sering tanda struktur lemah, karena pengguna "terpaksa" memindai sisi kiri saja |
| **Pola Z** | Kiri atas, ke kanan atas, diagonal ke kiri bawah, ke kanan bawah | Halaman dengan sedikit teks: landing page, hero, iklan | Logo atau judul di kiri atas, aksi utama di kanan bawah atau sepanjang diagonal |
| **Layer-cake** | Mata melompat dari heading ke heading, melewati isi | Konten dengan heading dan subheading yang jelas | Pola paling efisien untuk konten panjang. Heading harus deskriptif dan mudah dibedakan dari isi |
| **Spotted** | Mata mencari pola tertentu (angka, link, kata kunci) | Pengguna mencari informasi spesifik seperti harga atau nomor telepon | Informasi yang sering dicari diberi format yang mudah dikenali |
| **Commitment** | Membaca hampir semua | Pengguna yang sangat termotivasi | Jangan dijadikan asumsi desain, karena jarang terjadi |

Catatan: untuk aplikasi kerja dan dashboard, pola pemindaian lebih dipengaruhi kebiasaan dan memori spasial (Lensa 2 kelompok C) daripada pola F atau Z. Pengguna harian langsung melihat ke posisi yang sudah mereka hafal.

---

## 3. Bobot prinsip menurut konteks

Tidak semua prinsip sama pentingnya di semua konteks. Prinsip komposisi seperti rule of thirds atau golden ratio berasal dari seni rupa dan fotografi. Prinsip itu relevan untuk tampilan yang bersifat ekspresif (hero, ilustrasi, poster), dan jarang relevan untuk tabel data atau formulir.

| Konteks | Prinsip berbobot tinggi | Prinsip berbobot rendah atau hanya catatan |
|---|---|---|
| Aplikasi kerja, dashboard, admin, tabel data | Alignment dan grid, proximity, spacing, repetisi, kontras, tipografi, konsistensi komponen dan state | Rule of thirds, golden ratio, rule of odds, tekstur, random, perspektif |
| Formulir dan alur transaksi | Titik fokus (satu aksi utama), proximity label dan input, alignment, kontras, konsistensi state | Komposisi artistik |
| Landing page, marketing, onboarding, halaman kampanye | Titik fokus, ukuran, warna, kontras, whitespace, arah gerak (movement), balance, rule of thirds, pola Z | Information density |
| Konten artikel, dokumentasi, help center | Tipografi (skala, panjang baris, line height), layer-cake, whitespace, heading | Tekstur, random |
| Slide presentasi | Titik fokus tunggal per slide, ukuran, kontras, whitespace, rule of thirds | Pola F |
| E-commerce, katalog | Repetisi dan pola (kartu produk seragam), titik fokus per kartu, kontras harga dan aksi | Golden ratio |
| Ilustrasi, hero image, poster | Semua prinsip komposisi berlaku | - |

Aturan: prinsip berbobot rendah boleh disebut sebagai catatan opsional, dan tidak dijadikan temuan bertingkat Tinggi.

---

## 4. Kelompok A: Titik fokus dan penekanan

Kelompok ini menjawab pertanyaan: apa yang dilihat pertama, dan apakah itu memang yang paling penting?

### A1. Focal point (titik fokus)
**Penjelasan.** Titik fokus adalah elemen yang pertama menarik mata. Setiap layar idealnya punya satu titik fokus utama yang sesuai dengan tugas utama pengguna (Lensa 1). Jika ada tiga elemen yang sama-sama menonjol, sebenarnya tidak ada titik fokus. Penjelasan sederhananya: titik fokus adalah jawaban desain atas pertanyaan "lihat ini dulu".
**Cek.**
- Apa yang terlihat pertama pada squint test? Apakah itu tugas utama?
- Berapa banyak elemen yang bersaing di tingkat menonjol yang sama?
- Apakah ada elemen dekoratif (banner, ilustrasi, promosi) yang mengalahkan aksi utama?
**Rekomendasi.** Pilih satu elemen utama per layar atau per bagian. Turunkan bobot visual elemen lain (ukuran lebih kecil, warna lebih netral, gaya tombol sekunder).
**Cara ukur.** Squint test (blur). Daftar "elemen teks paling menonjol" dari `style_audit.mjs`. Bandingkan urutan di daftar itu dengan urutan kepentingan yang diharapkan.

### A2. Size and scale (ukuran dan skala)
**Penjelasan.** Elemen yang lebih besar dilihat lebih dulu. Skala adalah ukuran relatif antar elemen. Yang penting adalah selisih: judul 44pt menonjol karena teks di sekitarnya 16pt. Jika semua elemen besar, ukuran tidak lagi memberi sinyal.
**Cek.**
- Apakah elemen terbesar adalah yang paling penting?
- Apakah selisih ukuran antar tingkat cukup terasa? Selisih di bawah sekitar 8 persen (misalnya 14px dan 15px) biasanya tidak terbaca sebagai tingkat yang berbeda.
- Apakah ada elemen yang besar tanpa alasan (gambar dekoratif raksasa, ikon terlalu besar)?
**Rekomendasi.** Gunakan skala yang jelas, misalnya rasio 1,2 sampai 1,333 antar tingkat (lihat D1). Perbesar elemen utama atau perkecil elemen pendukung.
**Cara ukur.** `style_audit.mjs` menandai ukuran huruf yang terlalu mirip dan jumlah ukuran yang berlebihan.

### A3. Colour (warna)
**Penjelasan.** Warna cerah dan jenuh (saturated, artinya warna yang "pekat", jauh dari abu-abu) menarik mata lebih kuat daripada warna pudar. Warna juga membawa makna: merah untuk bahaya atau error, hijau untuk sukses. Warna aksen paling kuat jika dipakai sedikit. Jika lima warna jenuh muncul bersamaan, tidak ada yang menonjol.
**Cek.**
- Apakah warna aksen dipakai untuk aksi utama dan status penting?
- Berapa banyak warna aksen berbeda yang tampil?
- Apakah warna dipakai dengan makna yang konsisten (misalnya merah hanya untuk error dan aksi berbahaya)?
- Apakah informasi hanya disampaikan lewat warna? Jika ya, itu masalah aksesibilitas (Lensa 3, kriteria 1.4.1).
**Rekomendasi.** Batasi palet: satu warna utama (brand atau aksi), satu set warna semantik (sukses, peringatan, error, info), dan skala netral. Tambahkan ikon atau teks pada status yang hanya berupa warna.
**Cara ukur.** `style_audit.mjs` menghitung warna jenuh dan menandai lebih dari 4 aksen.

### A4. Contrast (kontras)
**Penjelasan.** Kontras adalah perbedaan antar elemen: terang dan gelap, tebal dan tipis, besar dan kecil, padat dan kosong. Kontras membuat elemen menonjol dan juga menentukan apakah teks bisa dibaca oleh pengguna dengan gangguan penglihatan. Karena itu kontras adalah bagian hierarki sekaligus bagian aksesibilitas.
**Cek.**
- Apakah teks utama lolos rasio kontras WCAG (4.5:1 untuk teks normal, 3:1 untuk teks besar dan komponen UI)? Ini dicek di Lensa 3.
- Apakah ada kontras yang cukup antara tingkat hierarki (judul vs isi, aksi utama vs sekunder)?
- Apakah elemen yang tidak penting justru berkontras tinggi?
**Rekomendasi.** Turunkan kontras elemen sekunder (teks bantuan, metadata) tanpa melanggar batas minimum WCAG. Naikkan kontras aksi utama.
**Cara ukur.** Hasil axe dan rumus kontras di SKILL.md bagian 6.

### A5. Texture and style (tekstur dan gaya)
**Penjelasan.** Elemen dengan detail visual lebih kaya (ilustrasi, foto, gradien, pola) cenderung menarik perhatian lebih kuat dibanding elemen datar seperti ikon garis. Gaya juga mencakup perlakuan seperti bayangan atau bingkai.
**Cek.**
- Apakah elemen yang paling kaya teksturnya memang penting? Ilustrasi besar di empty state wajar, ilustrasi besar yang mengalahkan form tidak.
- Apakah gaya ilustrasi dan ikon konsisten satu sama lain (lihat bagian 8)?
**Rekomendasi.** Gunakan tekstur dan ilustrasi untuk mendukung titik fokus atau mengisi momen emosional (onboarding, sukses, empty state). Kurangi di area kerja padat.

### A6. Perspective, depth, dan elevation (perspektif dan kedalaman)
**Penjelasan.** Perspektif dalam ilustrasi memberi kesan ruang tiga dimensi. Dalam UI, padanannya adalah **elevasi**: elemen dengan bayangan lebih tebal terlihat "lebih dekat" ke pengguna sehingga lebih menonjol. Modal dan dropdown biasanya berada di elevasi tertinggi karena sedang meminta perhatian.
**Cek.**
- Apakah tingkat elevasi mengikuti tingkat kepentingan atau lapisan (konten dasar, kartu, menu melayang, modal)?
- Berapa banyak gaya bayangan berbeda? Lebih dari 4 biasanya tanda tidak ada sistem elevasi.
**Rekomendasi.** Tetapkan 2 sampai 4 level elevasi dengan arti yang jelas.
**Cara ukur.** `style_audit.mjs` menghitung gaya bayangan.

### A7. Random dan anomali (isolasi)
**Penjelasan.** Satu elemen yang berbeda di tengah elemen yang seragam akan langsung menonjol. Ini disebut efek isolasi atau efek Von Restorff: hal yang berbeda dari sekitarnya lebih mudah diingat. Prinsip "random" di infografis merujuk pada penataan acak, yang bisa memberi kesan dinamis pada desain ekspresif, tetapi di UI fungsional penataan acak terbaca sebagai berantakan.
**Cek.**
- Apakah ada elemen yang sengaja dibedakan (misalnya paket harga "paling populer")? Apakah perbedaan itu jujur, atau mendorong pilihan secara menyesatkan (lihat Lensa 2 kelompok I)?
- Apakah ada elemen yang berbeda tanpa sengaja (ukuran tombol yang beda sendiri, satu kartu yang tidak sejajar)? Itu inkonsistensi, dan pengguna bisa mengira perbedaan itu bermakna.
**Rekomendasi.** Gunakan anomali hanya untuk satu hal yang benar-benar perlu ditekankan. Hilangkan perbedaan yang tidak disengaja.

---

## 5. Kelompok B: Struktur, arah, dan alur

Kelompok ini menjawab: setelah titik fokus, ke mana mata bergerak, dan apakah tata letaknya teratur?

### B1. Alignment dan grid (perataan)
**Penjelasan.** Alignment adalah penataan tepi atau pusat elemen pada garis yang sama. Grid adalah kerangka kolom dan baris yang menjadi acuan perataan. Perataan yang rapi membuat halaman terasa teratur dan mempermudah mata mengikuti alur. Saat hampir semua elemen rata, satu elemen yang keluar dari garis akan menonjol, jadi elemen yang miring tanpa sengaja akan terlihat seperti kesalahan atau seperti sinyal yang tidak dimaksudkan.
**Cek.**
- Berapa banyak posisi tepi kiri yang berbeda? Banyaknya posisi tepi menandakan elemen tidak mengikuti grid.
- Apakah label, input, dan tombol dalam form sejajar?
- Apakah angka dalam tabel rata kanan (supaya digit sejajar dan mudah dibandingkan) dan teks rata kiri?
- Apakah teks panjang rata tengah? Teks rata tengah lebih dari dua atau tiga baris sulit dibaca karena awal baris berpindah-pindah.
**Rekomendasi.** Gunakan grid kolom (misalnya 12 kolom di desktop, 4 di mobile) dan jumlah tepi kiri yang terbatas. Teks panjang rata kiri.
**Cara ukur.** `style_audit.mjs` menghitung posisi tepi kiri yang berbeda dan menandai lebih dari 10.

### B2. Rule of thirds (aturan sepertiga)
**Penjelasan.** Area dibagi dengan dua garis horizontal dan dua garis vertikal menjadi 9 bagian sama besar. Titik potong garis dianggap posisi yang menarik untuk elemen penting. Penempatan di titik potong biasanya terasa lebih dinamis dibanding penempatan tepat di tengah.
**Berlaku untuk.** Hero image, foto, ilustrasi, slide, poster. Tidak dijadikan ukuran untuk tabel, form, atau dashboard.
**Cek.** Apakah subjek utama gambar atau judul hero berada dekat titik potong, atau sengaja di tengah karena alasan simetri?
**Rekomendasi.** Untuk foto hero dengan teks, letakkan subjek foto di satu sepertiga dan teks di sepertiga lain supaya keduanya tidak bertabrakan.

### B3. Golden ratio (rasio emas)
**Penjelasan.** Rasio sekitar 1:1,618. Sering dipakai untuk membagi lebar kolom (misalnya konten 61,8 persen dan sidebar 38,2 persen) atau skala tipografi. Bukti bahwa rasio ini lebih indah secara universal tidak kuat. Nilainya terutama sebagai satu dari banyak rasio yang menghasilkan proporsi yang konsisten.
**Berlaku untuk.** Proporsi layout ekspresif dan ilustrasi. Dalam review, cukup dicek apakah proporsi terasa disengaja dan konsisten.
**Rekomendasi.** Jangan jadikan temuan jika tidak dipakai. Yang lebih penting adalah proporsi mengikuti satu sistem.

### B4. Balance (keseimbangan)
**Penjelasan.** Keseimbangan adalah distribusi bobot visual di area tampilan. Bobot visual adalah seberapa kuat elemen menarik mata, ditentukan ukuran, warna, kontras, dan density.
- **Simetris:** kedua sisi mirip. Terasa stabil, formal, dan tenang. Cocok untuk institusi resmi, halaman login.
- **Asimetris:** sisi berbeda tetapi bobotnya setara (misalnya satu gambar besar di kiri diseimbangkan beberapa elemen kecil di kanan). Terasa dinamis dan modern.
- **Radial:** elemen menyebar dari titik pusat.
**Cek.** Apakah ada sisi yang terasa "berat" sampai halaman seperti miring? Apakah ada area kosong besar yang terlihat tidak sengaja?
**Rekomendasi.** Seimbangkan elemen berat dengan ruang kosong atau kelompok elemen ringan di sisi lain.

### B5. Movement dan directional cues (gerak dan petunjuk arah)
**Penjelasan.** Movement adalah jalur yang dilalui mata dari satu elemen ke elemen berikutnya. Jalur ini dibentuk oleh urutan ukuran, arah pandang wajah dalam foto (mata cenderung mengikuti arah pandangan orang di foto), panah, dan posisi. Dalam UI, movement juga bisa berarti animasi yang menarik perhatian.
**Cek.**
- Apakah jalur mata berakhir di aksi utama?
- Apakah orang di foto menghadap ke konten atau justru keluar dari halaman?
- Apakah animasi menarik perhatian ke hal yang penting? Animasi terus-menerus pada elemen tidak penting merusak hierarki dan bisa melanggar WCAG 2.2.2 (Lensa 3).
**Rekomendasi.** Arahkan petunjuk arah ke aksi atau konten utama. Batasi animasi menarik perhatian untuk perubahan status penting.

### B6. Lines dan leading lines (garis dan garis penuntun)
**Penjelasan.** Garis memisahkan, menghubungkan, atau menuntun mata. Garis penuntun adalah garis (nyata atau tersirat, misalnya deretan elemen) yang membawa mata ke titik tertentu. Dalam UI, contohnya garis langkah pada stepper, timeline, dan garis pemisah tabel.
**Cek.**
- Apakah garis pemisah terlalu banyak? Garis di setiap baris dan kolom membuat tampilan padat. Sering, whitespace saja sudah cukup memisahkan.
- Apakah garis penghubung (stepper, timeline) jelas menunjukkan urutan?
**Rekomendasi.** Gunakan garis tipis berkontras rendah untuk pemisah, dan andalkan spacing jika memungkinkan. Garis pada komponen yang wajib terlihat (batas input) tetap perlu kontras 3:1 (WCAG 1.4.11).

### B7. Pola baca (lihat bagian 2)
Saat menilai alur, cocokkan tata letak dengan pola yang diharapkan: pola Z untuk halaman ringan teks, layer-cake untuk konten panjang, dan memori spasial untuk aplikasi harian.

---

## 6. Kelompok C: Pengelompokan dan ruang

Kelompok ini menjawab: apakah pengguna bisa melihat elemen mana yang saling berhubungan?

### C1. Proximity (kedekatan)
**Penjelasan.** Elemen yang berdekatan dipersepsikan sebagai satu kelompok (prinsip Gestalt, Lensa 2 kelompok B). Ini prinsip pengelompokan paling kuat dan murah, karena tidak butuh garis atau kotak.
**Cek.**
- Apakah label lebih dekat ke input miliknya daripada ke input lain? Masalah umum: jarak label ke input atas sama dengan ke input bawah, sehingga label terlihat ambigu.
- Apakah jarak di dalam kelompok lebih kecil daripada jarak antar kelompok?
- Apakah tombol aksi dekat dengan konten yang ia pengaruhi?
**Rekomendasi.** Gunakan aturan "jarak dalam < jarak antar". Misalnya 8px antara label dan input, 24px antar field, 48px antar bagian.

### C2. Spacing (sistem jarak)
**Penjelasan.** Spacing adalah nilai jarak (margin, padding, gap) yang dipakai di seluruh produk. Sistem spacing yang baik memakai skala terbatas, biasanya kelipatan 4 atau 8 (4, 8, 12, 16, 24, 32, 48, 64). Penjelasan sederhananya: dengan sedikit pilihan jarak, setiap jarak punya arti, dan desainer serta developer tidak menebak.
**Cek.**
- Berapa banyak nilai jarak berbeda? Lebih dari 12 biasanya tanda tidak ada sistem.
- Apakah ada nilai ganjil seperti 7px, 13px, 21px?
- Apakah elemen yang setara memakai jarak yang sama?
**Rekomendasi.** Tetapkan skala spacing dan petakan nilai ganjil ke nilai terdekat di skala.
**Cara ukur.** `style_audit.mjs` menandai nilai di luar kelipatan 4 dan jumlah nilai yang berlebihan. Catatan: margin bawaan browser (misalnya margin h1 sebesar 0,67em yang menghasilkan sekitar 21px) bisa muncul di daftar. Laporkan sebagai tanda bahwa style dasar belum di-reset, dengan tingkat Rendah.

### C3. Whitespace atau negative space (ruang kosong)
**Penjelasan.** Ruang kosong adalah area tanpa elemen. Ruang kosong tidak harus putih, yang penting kosong. Ada dua jenis:
- **Mikro:** jarak antar huruf, antar baris, antar ikon dan label.
- **Makro:** jarak antar bagian, margin halaman, ruang di sekitar titik fokus.
Ruang kosong membingkai elemen penting, menenangkan tampilan, dan meningkatkan pemahaman teks. Halaman pencarian Google adalah contoh terkenal: hampir seluruhnya kosong sehingga kotak pencarian menjadi titik fokus mutlak.
**Cek.**
- Apakah titik fokus punya cukup ruang di sekitarnya?
- Apakah tampilan terasa sesak? Untuk aplikasi kerja, information density tinggi bisa wajar (pengguna ahli butuh banyak data). Bedakan "padat tapi teratur" dari "sesak".
- Apakah ada ruang kosong besar yang terlihat seperti konten gagal dimuat?
**Rekomendasi.** Tambah ruang makro di sekitar aksi utama. Untuk dashboard, sediakan pilihan density (comfortable dan compact) jika pengguna beragam.

### C4. Repetition (repetisi)
**Penjelasan.** Bentuk, warna, atau gaya yang diulang memberi tahu pengguna bahwa elemen-elemen itu berhubungan atau punya fungsi sama. Repetisi juga membangun identitas visual. Karena pengguna cepat membuat asosiasi ini, repetisi harus disengaja: jika tombol dan badge non-interaktif memakai gaya sama, pengguna akan mencoba mengklik badge.
**Cek.**
- Apakah elemen yang fungsinya sama tampil sama (semua link, semua tombol utama, semua kartu)?
- Apakah elemen yang fungsinya berbeda tampil terlalu mirip?
**Rekomendasi.** Satukan gaya elemen setara. Bedakan secara jelas elemen interaktif dari yang tidak.

### C5. Pattern (pola)
**Penjelasan.** Pola adalah repetisi yang membentuk struktur yang bisa ditebak, seperti grid kartu produk, baris tabel, atau daftar. Pola memudahkan pemindaian karena setelah mempelajari satu item, pengguna bisa memindai item lain dengan cepat. Pola juga mencakup pola desain antarmuka yang sudah umum (pola keranjang belanja, pola pencarian), yang terkait dengan konsistensi eksternal di bagian 8.
**Cek.**
- Apakah setiap item dalam daftar menempatkan informasi di posisi yang sama (judul, harga, aksi)?
- Apakah ada item yang memecah pola tanpa alasan (gambar beda rasio, tombol beda posisi)?
**Rekomendasi.** Kunci struktur item: rasio gambar, urutan informasi, posisi aksi. Tangani konten panjang dengan pemotongan yang konsisten.

### C6. Rule of odds (aturan ganjil)
**Penjelasan.** Pengelompokan berjumlah ganjil (3 atau 5) sering terasa lebih dinamis dan alami karena ada elemen tengah yang menjadi fokus. Dalam UI, contoh umumnya adalah 3 paket harga dengan paket tengah ditonjolkan, atau 3 fitur utama di landing page.
**Berlaku untuk.** Marketing, harga, ilustrasi. Untuk data nyata (jumlah produk, jumlah menu), jumlah ditentukan konten, dan aturan ini tidak dijadikan temuan.
**Cek.** Jika ada pengelompokan buatan desainer (fitur unggulan, paket), apakah jumlah dan penekanannya membantu pengambilan keputusan? Penonjolan paket tengah harus jujur (lihat efek decoy dan pola menipu di Lensa 2).

---

## 7. Kelompok D: Hierarki tipografi

Tipografi adalah alat hierarki paling sering dipakai di UI karena sebagian besar antarmuka adalah teks.

### D1. Skala tipografi (type scale)
**Penjelasan.** Skala tipografi adalah sekumpulan ukuran huruf yang dihasilkan dari satu rasio. Contoh dengan dasar 16px dan rasio 1,25: 12,8 / 16 / 20 / 25 / 31,25 / 39. Rasio umum:
- 1,125 sampai 1,2: halus, cocok untuk aplikasi padat dan mobile.
- 1,25 sampai 1,333: seimbang, cocok untuk kebanyakan produk.
- 1,5 ke atas: dramatis, cocok untuk landing page dan editorial.
**Cek.**
- Berapa ukuran berbeda yang dipakai? 5 sampai 8 biasanya cukup.
- Apakah ada ukuran yang hampir sama (14 dan 15px)?
- Apakah teks isi minimal sekitar 16px di web dan mobile? Di bawah 14px untuk teks utama menyulitkan pembaca dengan penglihatan rendah.
**Cara ukur.** `style_audit.mjs`.

### D2. Tingkat hierarki
**Penjelasan.** Kebanyakan layar cukup memakai 3 sampai 4 tingkat: judul halaman, judul bagian, isi, dan teks pendukung (caption, metadata). Lebih dari itu sulit dibedakan pengguna.
**Cek.**
- Apakah heading tingkat rendah pernah tampil lebih besar dari heading tingkat tinggi? Ini membingungkan secara visual dan juga untuk pembaca layar (Lensa 3, 1.3.1).
- Apakah ada lebih dari satu h1 yang terlihat?
**Cara ukur.** `style_audit.mjs` memeriksa urutan ukuran heading dan jumlah h1.

### D3. Ketebalan (font weight)
**Penjelasan.** Ketebalan memberi penekanan tanpa mengubah ukuran. Dua sampai tiga ketebalan (misalnya regular 400, medium 500 atau semibold 600, bold 700) cukup. Terlalu banyak ketebalan membuat perbedaannya kabur. Ketebalan sangat tipis (100 sampai 300) di ukuran kecil menurunkan keterbacaan.
**Cek.** Jumlah ketebalan, dan penggunaan bold berlebihan (jika semua tebal, tidak ada yang tebal).

### D4. Line height (jarak baris)
**Penjelasan.** Jarak antar baris dibanding ukuran huruf. Teks isi nyaman dibaca di sekitar 1,4 sampai 1,6. Heading boleh lebih rapat (1,1 sampai 1,3). WCAG 1.4.12 mensyaratkan tampilan tetap berfungsi saat pengguna menaikkan line height ke 1,5, dan AAA 1.4.8 menyarankan minimal 1,5 untuk paragraf.

### D5. Panjang baris (line length)
**Penjelasan.** Jumlah karakter per baris. Nyaman di sekitar 45 sampai 75 karakter. WCAG 1.4.8 (AAA) menyarankan maksimal 80. Baris terlalu panjang membuat mata sulit menemukan awal baris berikutnya. Baris terlalu pendek memecah alur baca.

### D6. Case (huruf kapital)
**Penjelasan.** Teks HURUF KAPITAL SEMUA lebih lambat dibaca dalam kalimat panjang karena bentuk kata menjadi seragam. Kapital cocok untuk label pendek (overline, tag) dengan letter spacing sedikit dilonggarkan. Sentence case (hanya huruf pertama kapital) paling mudah dibaca untuk tombol dan judul di UI.
**Cara ukur.** `style_audit.mjs` menghitung elemen bertransformasi uppercase.

### D7. Keluarga huruf (font family)
**Penjelasan.** Satu sampai dua keluarga huruf cukup, misalnya satu untuk heading dan satu untuk isi, atau satu keluarga dengan banyak ketebalan. Keluarga ketiga biasanya hanya untuk kode (monospace). Lebih dari itu menimbulkan kesan tidak terarah.

---

## 8. Konsistensi

### 8.1 Jenis konsistensi
| Jenis | Penjelasan | Yang dicek |
|---|---|---|
| **Visual** | Elemen yang sama tampil sama | Token warna, tipografi, spacing, radius, elevasi, ikon |
| **Fungsional** | Kontrol yang sama berperilaku sama | Tombol "Simpan" selalu menyimpan tanpa menutup, swipe selalu berarti hal sama, link selalu membuka di tab yang sama |
| **Internal** | Konsisten di dalam satu produk | Antar layar, antar fitur, antar platform produk sendiri (web dan mobile) |
| **Eksternal** | Konsisten dengan konvensi umum dan platform | Konvensi iOS dan Android, posisi logo di kiri atas, ikon keranjang untuk belanja. Hukum Jakob: pengguna menghabiskan sebagian besar waktunya di produk lain, jadi mereka berharap produk Anda bekerja serupa |

### 8.2 Token desain (design tokens)
Token desain adalah nilai dasar yang diberi nama dan dipakai ulang di seluruh produk, misalnya `color-primary`, `space-16`, `radius-md`. Penjelasan sederhananya: token adalah daftar resmi nilai yang boleh dipakai, sehingga semua orang memakai warna dan jarak yang sama.

| Kategori token | Batas wajar | Tanda masalah |
|---|---|---|
| Warna | 1 warna utama, 4 warna semantik, 8 sampai 10 tingkat netral | Banyak warna hampir sama (#333, #343434, #353535) |
| Ukuran huruf | 5 sampai 8 | Lebih dari 8, atau ukuran nyaris sama |
| Ketebalan | 2 sampai 3 | Lebih dari 4 |
| Keluarga huruf | 1 sampai 2 (+ monospace) | Lebih dari 2 |
| Spacing | 6 sampai 10 nilai di satu skala | Lebih dari 12 atau nilai ganjil |
| Radius | 2 sampai 4 | Lebih dari 4 |
| Elevasi | 2 sampai 4 | Lebih dari 4 |
| Varian tombol | Primary, secondary, tertiary atau ghost, destructive | Lebih dari 4 tanpa makna berbeda |
| Durasi animasi | 2 sampai 3 (cepat, sedang, lambat) | Durasi acak |

### 8.3 Komponen dan state
**State** adalah kondisi tampilan komponen: default, hover, focus, active atau pressed, disabled, loading, error, success, selected, empty. Setiap komponen interaktif perlu state yang lengkap dan tampil sama di semua tempat.
**Cek.**
- Apakah semua tombol punya state focus yang terlihat (juga Lensa 3, 2.4.7)?
- Apakah state disabled konsisten dan bisa dibedakan dari state normal tanpa hanya mengandalkan warna?
- Apakah pesan error tampil di posisi dan gaya yang sama di semua form?
- Apakah layar punya empty state, loading state, dan error state? Inventaris state lengkap dan perilakunya dinilai di pemeriksaan pola State (`references/states-feedback.md`); di sini cukup nilai konsistensi tampilannya.

### 8.4 Ikonografi
**Cek.**
- Satu gaya (garis saja atau isi saja; campuran hanya bila ada alasan), ketebalan garis sama, ukuran dasar sama (misalnya 16, 20, 24px).
- Satu ikon untuk satu makna. Ikon yang sama dengan arti berbeda di dua tempat membingungkan.
- Ikon tanpa label hanya untuk makna yang sangat umum (cari, tutup, menu). Ikon lain perlu label teks.

### 8.5 Pola interaksi dan template tata letak
**Cek.**
- Posisi aksi utama sama di layar sejenis (misalnya selalu kanan bawah pada dialog).
- Urutan tombol konsisten (misalnya "Batal" kiri, "Simpan" kanan) di seluruh produk.
- Navigasi muncul di posisi yang sama dan urutan yang sama di setiap halaman (juga WCAG 3.2.3 dan 3.2.4).
- Layar sejenis (detail, daftar, form) memakai template yang sama.

### 8.6 Format data
**Cek.** Tanggal (misalnya 3 Nov 2026 atau 03/11/2026, pilih satu), jam (24 jam atau 12 jam), angka (pemisah ribuan titik untuk konteks Indonesia), mata uang (Rp 150.000), satuan, dan zona waktu ditulis dengan format yang sama di semua tempat.

**Format lokal untuk pengguna Indonesia.** Konsistensi saja tidak cukup; formatnya juga harus sesuai kebiasaan pengguna target.
- **Tanggal:** nama bulan dalam bahasa Indonesia (Mei, Agu, Okt, Des, bukan May, Aug, Oct, Dec) bila antarmuka berbahasa Indonesia. Hindari format angka saja yang ambigu untuk pengguna lintas negara (03/11 bisa dibaca 3 November atau 11 Maret). Untuk tenggat, sertakan hari ("Jumat, 14 Nov 2026").
- **Jam dan zona waktu:** format 24 jam dengan titik (09.00, 14.30) lazim di Indonesia. Untuk layanan nasional, sebut zona waktu (WIB, WITA, WIT) pada tenggat, jadwal, dan batas waktu, karena pengguna di tiga zona bisa salah menghitung tenggat.
- **Waktu relatif:** "2 jam lalu" cocok untuk aktivitas terbaru; untuk tenggat, catatan resmi, dan data yang dirujuk ulang, tampilkan tanggal pasti (bisa di tooltip atau di samping waktu relatif).
- **Angka dan mata uang:** titik untuk ribuan, koma untuk desimal (detail di `references/ux-writing.md` bagian 6.6). Field nominal sebaiknya memformat ribuan saat diketik dan menerima input tanpa titik.
- **Nomor telepon, nama, dan alamat:** terima +62, 62, atau 0 di depan nomor ponsel; dukung nama satu kata dan nama dengan gelar; struktur alamat mengikuti kebiasaan lokal (RT/RW, kelurahan atau desa, kecamatan) bila sistem memang membutuhkan rinciannya. Penanganan input ada di `references/forms.md` bagian 4.6.
- **Produk dua bahasa:** format mengikuti bahasa antarmuka yang dipilih, bukan bercampur dalam satu layar.

Format yang tidak sesuai kebiasaan lokal dan berdampak pada tenggat atau uang dinilai minimal Sedang; ketidakkonsistenan murni tanpa dampak tetap Rendah.

### 8.7 Terminologi
Istilah yang sama untuk hal yang sama, misalnya tidak bergantian antara "Hapus", "Buang", dan "Delete". Detailnya di Lensa 5 (UX writing).

### 8.8 Inkonsistensi yang disengaja
Tidak semua perbedaan adalah kesalahan. Perbedaan yang disengaja dipakai untuk menekankan sesuatu, misalnya tombol destruktif berwarna merah atau banner peringatan yang beda gaya. Aturan untuk membedakan:
- Disengaja jika perbedaannya punya makna yang jelas, dipakai konsisten untuk makna itu, dan jarang.
- Tidak disengaja jika perbedaannya tidak membawa arti dan hanya muncul di satu atau dua tempat secara acak.

---

## 9. Metode pengukuran

### 9.1 Untuk input URL atau kode
Jalankan:
```bash
node scripts/style_audit.mjs <url-atau-file.html> --out style-report [--width 1280]
```
Hasil:
- `style-report.md` dan `.json`: inventaris ukuran huruf, ketebalan, keluarga huruf, line height, warna teks dan latar dan border, spacing, radius, bayangan, varian tombol, heading, elemen paling menonjol, warna aksen, dan catatan otomatis.
- `style-report-normal.png` dan `style-report-blur.png`: pasangan untuk squint test.

Jalankan ulang dengan `--width 390` untuk melihat hierarki di mobile. Hierarki sering berubah di layar kecil, misalnya aksi utama terdorong ke bawah lipatan layar.

Batasan skrip: skrip membaca style yang dihitung browser. Skrip tidak tahu niat desain, jadi semua catatannya adalah indikasi yang perlu dinilai. Skrip juga hanya melihat state awal halaman (tidak membuka menu atau modal).

### 9.2 Untuk input screenshot atau mockup
Squint test dengan Python:
```python
from PIL import Image, ImageFilter
img = Image.open("screenshot.png")
img.filter(ImageFilter.GaussianBlur(8)).save("screenshot-blur.png")
```
Lihat hasil blur, lalu catat urutan 3 sampai 5 area yang paling menonjol. Untuk konsistensi, inventarisasi secara visual: perkirakan jumlah ukuran huruf, warna aksen, gaya tombol, dan radius. Tandai hasil sebagai perkiraan dan masukkan nilai pasti ke bagian "perlu diverifikasi".

Untuk Figma, jika file bisa diakses, cek apakah warna dan teks memakai style atau variabel (token) atau nilai lepas.

### 9.3 Membandingkan urutan yang diharapkan dan yang terlihat
Tulis dua daftar:
1. **Urutan yang diharapkan:** berdasarkan tugas utama (Lensa 1), elemen apa yang seharusnya dilihat pertama, kedua, ketiga.
2. **Urutan yang terlihat:** hasil squint test dan daftar elemen menonjol.
Setiap selisih antara keduanya adalah kandidat temuan. Selisih di posisi pertama (titik fokus salah) biasanya bertingkat Tinggi untuk alur penting.

---

## 10. Kesalahan umum saat menilai

- **Menerapkan prinsip komposisi seni ke UI fungsional.** Menyebut dashboard melanggar rule of thirds tidak membantu. Pakai tabel bobot di bagian 3.
- **Menganggap information density sebagai masalah.** Pengguna ahli yang memakai aplikasi setiap hari sering butuh density tinggi. Masalahnya ada pada density yang tidak teratur.
- **Menilai berdasarkan selera.** Setiap temuan harus menyebut dampak pada pengguna (mereka melewatkan aksi, salah mengelompokkan informasi, butuh waktu lebih lama), dan tidak berhenti di "kurang menarik".
- **Melaporkan setiap angka skrip sebagai temuan.** Gabungkan catatan skrip yang berasal dari satu akar masalah, misalnya "tidak ada skala spacing" sebagai satu temuan dengan contoh nilai.
- **Mengabaikan hubungan dengan aksesibilitas.** Kontras, warna sebagai satu-satunya penanda, ukuran huruf, dan urutan heading adalah bagian hierarki sekaligus kriteria WCAG. Rujuk silang ke Lensa 3 dan jangan laporkan dua kali.
