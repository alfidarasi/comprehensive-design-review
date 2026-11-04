# Referensi Pola: Desain Form

File ini dibaca saat menjalankan pemeriksaan pola "Form" (SKILL.md bagian 3, Pemeriksaan pola), yaitu bila layar memuat form, field isian, atau kontrol input. Isinya: definisi, cakupan, bobot per konteks, alur kerja, area yang dicek, pemetaan temuan ke lensa, severity, dan kesalahan umum saat menilai.

Pemeriksaan ini bukan lensa baru. Aspek form sudah tersebar di beberapa lensa (proximity label di Lensa 2 kelompok B, label dan pesan error di Lensa 5, keyboard mobile di Lensa 6 bagian 6.3, label dan autocomplete di Lensa 3, data berulang di Lensa 1). File ini menyatukannya menjadi satu alur review dan menambahkan hal yang belum dibahas. Temuan tetap dilaporkan di lensa yang sesuai dengan tabel di bagian 6. Jangan mengulang isi file lain; rujuk saja.

Semua aturan diterapkan sesuai konteks dari pengguna skill (SKILL.md bagian 1).

## Daftar isi
1. Definisi
2. Bobot menurut konteks
3. Alur kerja
4. Area yang dicek
5. Penyajian di laporan
6. Pemetaan temuan ke lensa
7. Severity dan aturan penulisan temuan
8. Kesalahan umum saat menilai

---

## 1. Definisi

- **Form:** kumpulan field dan kontrol untuk mengumpulkan data dari pengguna, dari satu kolom pencarian sampai pengajuan multi-langkah.
- **Field:** satu isian beserta label, petunjuk (hint), dan pesan error-nya.
- **Kontrol:** jenis elemen input: kolom teks, area teks, radio, checkbox, toggle, dropdown, combobox (dropdown yang bisa diketik), date picker, slider, stepper angka, unggah berkas.
- **Validasi:** pemeriksaan apakah isian sesuai aturan. Bisa inline (saat atau setelah field diisi) atau saat submit.

## 2. Bobot menurut konteks

| Kondisi konteks | Naikkan bobot | Turunkan bobot |
|---|---|---|
| Dipakai sesekali (pendaftaran, pengajuan tahunan) | Petunjuk dan contoh format, dokumen yang dibutuhkan disebut di awal, label tanpa jargon internal, simpan draf | Shortcut keyboard dan entri cepat |
| Dipakai harian (entri data, back office) | Kecepatan entri: urutan Tab yang logis, default yang mengingat isian terakhir, entri dengan keyboard, combobox yang bisa diketik, bulk input | Petunjuk panjang yang selalu tampil |
| Proses berisiko (keuangan, hukum, data resmi) | Ringkasan sebelum kirim, validasi yang mencegah kesalahan mahal, penjelasan dampak setiap pilihan penting | Pemadatan form demi kecepatan |
| Mobile | Satu kolom, tipe keyboard, field sedikit, unggah dari kamera (Lensa 6 bagian 6.3) | Layout multi-kolom |
| Pengguna dengan pengalaman digital rendah | Satu pertanyaan per layar untuk form panjang, kontrol yang familiar (radio daripada dropdown), contoh isian, bahasa sederhana | Kontrol inovatif |
| Pengguna mudah pindah | Jumlah field minimum, field opsional dihapus atau ditunda, penjelasan kenapa data diminta (trust, Lensa 2 kelompok I) | (tidak ada) |
| Data sensitif (NIK, gaji, kesehatan) | Alasan permintaan data, siapa yang bisa melihat, pilihan untuk tidak menjawab bila boleh | (tidak ada) |

## 3. Alur kerja

1. **Daftar semua field.** Untuk setiap field catat label, kontrol, wajib atau opsional, petunjuk, dan validasi yang terlihat. Untuk input kode atau URL, ambil dari DOM; untuk screenshot, dari tampilan.
2. **Uji keperluan setiap field.** Apakah datanya dipakai untuk tugas ini? Apakah sistem sudah memilikinya? Bisa ditunda? Hasilnya dipakai juga oleh Lensa 1 (5.3 di `references/task-flow.md`).
3. **Uji kecocokan kontrol** dengan jenis data dan jumlah pilihan (bagian 4.2).
4. **Uji struktur:** urutan, pengelompokan, layout, dan posisi tombol.
5. **Uji validasi dan error** di lingkungan uji bila memungkinkan: submit kosong, format salah, nilai di luar batas, paste dengan spasi, karakter khusus, nama satu kata, nama sangat panjang.
6. **Uji dengan keyboard saja** (input kode atau URL): urutan Tab, Enter untuk submit, kontrol custom yang bisa dioperasikan.

## 4. Area yang dicek

### 4.1 Keperluan dan jumlah field
- **Cek:** field yang datanya tidak dipakai; data yang sudah dimiliki sistem; field opsional yang lebih banyak daripada field wajib; satu konsep dipecah menjadi beberapa field tanpa alasan (nama depan, tengah, belakang untuk pengguna Indonesia yang banyak bernama satu kata); konfirmasi email atau password yang bisa diganti tombol tampilkan password.
- **Rekomendasi:** hapus, isi otomatis, atau tunda; satu field "Nama lengkap" kecuali sistem benar-benar butuh dipisah; tombol tampilkan password daripada field konfirmasi.

### 4.2 Pemilihan kontrol
- **Cek:** dropdown untuk 2 sampai 5 pilihan (lebih baik radio atau segmented control); dropdown sangat panjang tanpa bisa diketik (pilih kota, institusi); checkbox untuk pilihan yang saling eksklusif; toggle untuk pilihan yang baru berlaku setelah disimpan (toggle seharusnya berlaku langsung); slider untuk nilai yang harus tepat; date picker kalender untuk tanggal lahir; stepper angka untuk nilai besar.
- **Rekomendasi:** radio untuk sedikit pilihan eksklusif; combobox dengan pencarian untuk daftar panjang; checkbox untuk pilihan independen; toggle hanya untuk efek langsung; input teks dengan format atau masker untuk tanggal lama dan nominal.

### 4.3 Label, petunjuk, dan placeholder
- **Cek:** placeholder dipakai sebagai label (hilang saat mengetik, juga WCAG 3.3.2); petunjuk format yang baru muncul setelah error; label di dalam field yang mengecil (floating label) dengan kontras rendah; petunjuk penting di tooltip yang harus di-hover.
- **Rekomendasi:** label di atas field, selalu terlihat; petunjuk dan contoh format di bawah label sebelum diisi; tooltip hanya untuk informasi tambahan. Kata-katanya dinilai di Lensa 5.

### 4.4 Wajib dan opsional
- **Cek:** tanda bintang tanpa keterangan arti; semua field ditandai wajib; tidak ada tanda sama sekali sehingga pengguna baru tahu setelah submit; penanda yang hanya berupa warna.
- **Rekomendasi:** tandai yang lebih sedikit. Bila sebagian besar field wajib, tandai yang opsional dengan teks "(opsional)". Bila memakai bintang, jelaskan di awal form.

### 4.5 Struktur, urutan, dan layout
- **Cek:** urutan yang tidak sesuai dokumen sumber atau cara pengguna berpikir; field yang berhubungan terpisah jauh; layout multi-kolom yang membuat urutan baca ambigu; lebar field yang tidak sesuai panjang isian (kolom kode pos selebar layar, kolom alamat sempit); form panjang tanpa pengelompokan atau judul bagian; tombol submit jauh dari field terakhir; tombol sekunder ("Batal", "Reset") setara atau lebih menonjol dari tombol utama.
- **Rekomendasi:** satu kolom untuk sebagian besar form; kelompokkan dengan judul bagian (fieldset dan legend, juga WCAG 1.3.1); lebar field mengisyaratkan panjang isian; tombol utama tepat setelah field terakhir; hindari tombol Reset. Pengelompokan visual dinilai bersama Lensa 2 kelompok B dan Lensa 4.

### 4.6 Format input yang toleran
- **Cek:** sistem menolak format yang wajar (nomor telepon dengan spasi atau +62, nominal dengan titik ribuan, NIK yang di-paste dengan spasi, email dengan huruf kapital); field yang memotong input tanpa memberi tahu; aturan password yang baru diberitahukan setelah gagal.
- **Rekomendasi:** terima berbagai format lalu normalisasi di sistem; tampilkan aturan sebelum diisi; tampilkan sisa karakter bila ada batas panjang.

### 4.7 Validasi dan waktu munculnya error
- **Cek:** error muncul saat pengguna baru mulai mengetik; error hanya muncul setelah submit di form panjang sehingga pengguna harus mencari ke atas; ringkasan error di atas tanpa link ke field-nya; tombol submit dinonaktifkan tanpa memberi tahu field mana yang belum benar; error hilang ketika field diperbaiki tetapi tidak ada tanda sukses untuk field yang aturannya rumit (password).
- **Rekomendasi:** validasi inline setelah pengguna meninggalkan field (on blur), bukan saat mengetik; untuk aturan rumit, umpan balik langsung yang positif (checklist aturan password); saat submit, ringkasan error di atas dengan link ke setiap field dan fokus dipindah ke ringkasan; biarkan tombol submit aktif lalu tunjukkan apa yang kurang. Isi pesan error mengikuti `references/ux-writing.md` bagian 10; WCAG 3.3.1 dan 3.3.3 dilaporkan di Lensa 3.

### 4.8 Default dan pengisian otomatis
- **Cek:** tidak ada default untuk pilihan yang hampir selalu sama; default yang menguntungkan organisasi tetapi merugikan pengguna (preselection, deceptive pattern, Lensa 2 kelompok I); `autocomplete` tidak dipasang (WCAG 1.3.5); data dari pengajuan sebelumnya tidak dipakai ulang.
- **Rekomendasi:** default yang aman dan paling umum; atribut `autocomplete` yang benar; isi dari profil atau pengajuan sebelumnya dengan tanda bahwa data diambil dari sana dan bisa diubah.

### 4.9 Unggah berkas
- **Cek:** format dan ukuran maksimum baru disebut setelah gagal; tidak ada progres unggah; tidak ada pratinjau atau nama berkas setelah diunggah; berkas hilang saat form gagal submit; tidak bisa mengganti atau menghapus berkas.
- **Rekomendasi:** sebut format, ukuran, dan jumlah sebelum memilih; progres per berkas; pratinjau dan nama berkas; berkas tetap tersimpan saat error di field lain. Aspek mobile (kamera, galeri) ada di Lensa 6 bagian 6.3.

### 4.10 Form panjang dan multi-langkah
- **Cek:** form yang sangat panjang di satu halaman tanpa pengelompokan atau simpan draf; pembagian langkah yang tidak mengikuti kelompok logis; data hilang saat berpindah langkah.
- **Rekomendasi:** bagi berdasarkan kelompok logis, simpan draf otomatis, ringkasan sebelum kirim. Panjang flow dan jumlah langkah dinilai di Lensa 1 (`references/task-flow.md`).

### 4.11 Data sensitif dan privasi
- **Cek:** data pribadi diminta tanpa alasan; tidak jelas siapa yang bisa melihat data; field sensitif yang wajib padahal tidak perlu; nilai sensitif ditampilkan penuh di ruang publik (Lensa 6 bagian 11).
- **Rekomendasi:** jelaskan alasan singkat di dekat field ("NIK dipakai untuk verifikasi ke Dukcapil"); jadikan opsional bila memungkinkan; sembunyikan sebagian nilai sensitif setelah diisi. Dampak pada trust dinilai di Lensa 2 kelompok I.

## 5. Penyajian di laporan

- Untuk form yang menjadi tugas utama, boleh tambahkan tabel inventaris field ringkas di detail temuan atau lampiran: Field | Kontrol | Wajib | Masalah | No. temuan.
- Gabungkan masalah yang berulang di banyak field menjadi satu temuan dengan beberapa contoh, misalnya "placeholder dipakai sebagai label di 9 field".
- Sebut jumlah field sekarang dan usulan bila ada field yang bisa dihapus atau diisi otomatis.

## 6. Pemetaan temuan ke lensa

| Jenis temuan | Dilaporkan di |
|---|---|
| Field yang tidak perlu, data berulang, field yang bisa diisi otomatis atau ditunda, form multi-langkah | Lensa 1 |
| Pemilihan kontrol, default, pengelompokan dan proximity, posisi tombol submit, preselection yang manipulatif, privasi dan trust | Lensa 2 (kelompok B, F, G, I sesuai jenisnya) |
| Label terprogram, autocomplete, error teks, petunjuk, fieldset, urutan fokus, kontrol custom | Lensa 3 (1.3.1, 1.3.5, 2.4.3, 3.3.1, 3.3.2, 3.3.3, 4.1.2) |
| Layout, lebar field, konsistensi gaya field dan state | Lensa 4 |
| Kata pada label, petunjuk, pesan error, dan tombol | Lensa 5 |
| Keyboard mobile, field tertutup keyboard di layar, unggah dari kamera, satu kolom di mobile | Lensa 6 |

Tulis kolom Lensa di tabel temuan dengan nomor lensa dan nama pola, misalnya "2 · Form" atau "5 · Form".

## 7. Severity dan aturan penulisan temuan

- **Kritis:** form tidak bisa diselesaikan (validasi menolak format yang sah tanpa jalan keluar, tombol submit tidak bisa dicapai, field wajib tidak bisa diisi dengan keyboard atau di perangkat utama); input hilang saat error pada form panjang atau berisiko.
- **Tinggi:** error yang tidak menyebut field atau cara memperbaiki; aturan format atau syarat berkas yang baru muncul setelah gagal; preselection yang merugikan pengguna; placeholder sebagai satu-satunya label pada form penting.
- **Sedang:** kontrol yang kurang cocok, field yang bisa dihapus atau diisi otomatis, penanda wajib dan opsional yang membingungkan, layout multi-kolom yang ambigu.
- **Rendah:** lebar field yang kurang sesuai, variasi kecil dalam gaya penanda.

Aturan penulisan:
- Sebut nama field atau kelompok field, kontrol, dan perilakunya. Untuk input kode atau URL, sertakan selector atau data uji yang dipakai.
- Sebut alasan kontekstual (contoh: "sebagian dosen menyalin NIDN dari dokumen PDF dengan spasi, dan field menolak paste itu tanpa penjelasan").

## 8. Kesalahan umum saat menilai

- **Mengulang temuan yang sama di beberapa lensa.** Pilih satu lensa menurut tabel di bagian 6, lalu rujuk dari lensa lain bila perlu.
- **Menyarankan semua form dipecah menjadi multi-langkah.** Form pendek lebih cepat di satu halaman; pembagian langkah hanya bila kelompoknya jelas dan form panjang.
- **Menyarankan inline validation saat mengetik.** Error yang muncul sebelum pengguna selesai mengetik terasa menyalahkan. Validasi setelah meninggalkan field, kecuali untuk umpan balik positif pada aturan rumit.
- **Mengabaikan entri cepat untuk pengguna harian.** Form yang ramah pengguna baru bisa memperlambat staf yang mengisinya puluhan kali sehari.
- **Menghapus field tanpa memastikan kebutuhan bisnis.** Bila field mungkin diwajibkan regulasi, tulis sebagai pertanyaan atau batasan, bukan langsung "hapus".
