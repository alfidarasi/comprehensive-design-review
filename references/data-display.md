# Referensi Pola: Tabel Data, Dashboard, dan Grafik

File ini dibaca saat menjalankan pemeriksaan pola "Data display" (SKILL.md bagian 3, Pemeriksaan pola), yaitu bila bahan review memuat tabel data, dashboard, kartu KPI, atau grafik. Isinya: definisi, bobot per konteks, alur kerja, area yang dicek, pemetaan temuan ke lensa, severity, dan kesalahan umum saat menilai.

Pemeriksaan ini bukan lensa baru. Beberapa aspek sudah ada di file lain dan tidak diulang di sini: tabel di layar kecil (`references/responsive.md` bagian 6.2), format tanggal dan angka (`references/visual-hierarchy.md` bagian 8.6 dan `references/ux-writing.md` bagian 6.6), information density dan common region (Lensa 2 kelompok B dan C), warna sebagai satu-satunya penanda (WCAG 1.4.1), serta filter dan sort (`references/navigation-search.md` bagian 5.7). Temuan dilaporkan di lensa yang sesuai dengan tabel di bagian 6.

Semua aturan diterapkan sesuai konteks dari pengguna skill (SKILL.md bagian 1). Dashboard pemantauan untuk operator yang membukanya sepanjang hari, laporan bulanan untuk pimpinan, dan statistik publik untuk masyarakat membutuhkan penilaian yang sangat berbeda.

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

- **Tabel data:** data terstruktur dalam baris dan kolom untuk dibaca, dibandingkan, dicari, atau ditindaklanjuti per baris.
- **Dashboard:** satu layar yang merangkum beberapa indikator untuk menjawab pertanyaan rutin, misalnya "apakah ada yang perlu saya tangani hari ini?".
- **KPI (key performance indicator):** angka kunci yang dipantau terhadap target atau pembanding.
- **Jenis dashboard menurut tujuan:**
  - **Operasional:** memantau keadaan saat ini dan memicu tindakan (antrean pengajuan, tiket terbuka). Dibuka sering, butuh data terkini dan peringatan.
  - **Analitis:** menjelajah tren dan penyebab (analisis per fakultas, per periode). Butuh filter, drill-down, dan perbandingan.
  - **Strategis atau ringkasan:** gambaran besar untuk pimpinan. Butuh sedikit angka dengan konteks yang jelas.
- **Drill-down:** berpindah dari angka ringkasan ke rincian di baliknya.

## 2. Bobot menurut konteks

| Kondisi konteks | Naikkan bobot | Turunkan bobot |
|---|---|---|
| Dashboard operasional, dipakai harian | Item yang butuh tindakan paling menonjol, peringatan dan ambang batas, kesegaran data, posisi stabil (spatial memory), aksi langsung dari dashboard | Grafik dekoratif, animasi |
| Dashboard analitis | Perbandingan yang benar, filter dan rentang waktu, drill-down, ekspor, satuan dan definisi metrik | Penyederhanaan berlebihan |
| Ringkasan untuk pimpinan atau stakeholder | Sedikit angka dengan pembanding (target, periode lalu), kesimpulan tertulis, bahasa non-teknis | Tabel rinci di layar pertama |
| Statistik untuk publik | Grafik sederhana yang lazim, label langsung, penjelasan istilah, sumber dan tanggal data, alternatif teks | Grafik canggih yang butuh literasi data tinggi |
| Tabel kerja (admin, back office) | Pemindaian per kolom, sort, density yang bisa diatur, aksi per baris dan aksi massal, header sticky | Gaya visual yang berat |
| Mobile | Kartu KPI bertumpuk, satu grafik per layar, tabel menurut `references/responsive.md` bagian 6.2 | Grafik dengan banyak seri |
| Data sensitif atau berdampak (nilai, gaji, kinerja individu) | Akurasi, definisi, siapa yang bisa melihat, konteks agar tidak salah tafsir | (tidak ada) |

## 3. Alur kerja

1. **Tentukan pertanyaan pengguna.** Untuk dashboard, tulis 3 sampai 5 pertanyaan yang seharusnya terjawab dalam beberapa detik (contoh: "berapa pengajuan yang menunggu saya?", "apakah ada yang melewati tenggat?"). Untuk tabel, tentukan apa yang dilakukan pengguna: mencari satu baris, membandingkan, memindai anomali, atau memproses satu per satu.
2. **Uji 5 detik.** Dari tampilan, pertanyaan mana yang langsung terjawab? Mana yang butuh membaca lama, membuka menu, atau menghitung sendiri?
3. **Periksa setiap angka dan grafik:** apa satuannya, periode apa, dibandingkan dengan apa, kapan diperbarui, dan apa yang harus dilakukan bila angkanya buruk.
4. **Periksa area** di bagian 4 sesuai bobot konteks.
5. **Stress test data:** nilai nol, nilai sangat besar, angka negatif, satu kategori sangat dominan, banyak kategori, label kategori panjang, dan data yang belum ada untuk periode tertentu (dicek bersama Lensa 6 bagian 10 dan pola State).

## 4. Area yang dicek

### 4.1 Dashboard: tujuan dan prioritas
- **Cek:** dashboard berisi semua metrik yang tersedia, bukan yang menjawab pertanyaan pengguna; semua kartu sama besar dan sama menonjol; item yang butuh tindakan tertimbun di bawah grafik tren; tidak ada urutan baca dari ringkasan ke rincian.
- **Rekomendasi:** susun dari pertanyaan pengguna; letakkan yang butuh tindakan atau paling penting di kiri atas (atau di atas pada mobile); ringkasan dulu, rincian lewat drill-down; kurangi metrik yang tidak memicu keputusan. Hierarki visualnya dinilai bersama Lensa 4.

### 4.2 Angka dan KPI
- **Cek:** angka tanpa pembanding sehingga pengguna tidak tahu baik atau buruk; persentase tanpa jumlah dasarnya ("75%" dari 4 orang); satuan atau periode tidak disebut; definisi metrik yang ambigu ("Pengajuan aktif" termasuk draf atau tidak?); presisi berlebihan (3,14159 persen); perubahan naik atau turun yang hanya dibedakan warna merah dan hijau.
- **Rekomendasi:** setiap KPI punya pembanding (target, periode lalu, rata-rata) dan arah yang jelas (naik itu baik atau buruk); tampilkan jumlah dasar di samping persentase; satuan dan periode di label; definisi lewat tooltip atau info; pembulatan yang wajar; ikon atau teks arah selain warna (WCAG 1.4.1).

### 4.3 Pemilihan jenis grafik
Pilih grafik menurut pertanyaan, bukan menurut variasi visual.

| Pertanyaan | Grafik yang biasanya cocok | Hindari |
|---|---|---|
| Membandingkan nilai antar kategori | Batang horizontal (label panjang muat) atau vertikal, diurutkan | Pie dengan banyak irisan, radar |
| Perubahan dari waktu ke waktu | Garis; batang untuk sedikit periode | Pie, area bertumpuk dengan banyak seri |
| Bagian dari keseluruhan | Batang bertumpuk 100 persen, atau pie dan donat hanya untuk 2 sampai 3 bagian | Pie dengan lebih dari sekitar 5 irisan, 3D |
| Distribusi | Histogram, box plot untuk pengguna yang terbiasa | Rata-rata saja tanpa sebaran |
| Hubungan dua variabel | Scatter plot | Dua sumbu Y yang menyesatkan |
| Satu angka terhadap target | Bullet chart, progress bar dengan target | Gauge besar yang memakan ruang |
| Nilai pasti yang harus dibaca | Tabel atau angka langsung | Grafik apa pun |

- **Cek:** grafik 3D; pie atau donat untuk banyak kategori atau untuk perbandingan yang halus; grafik untuk data yang lebih mudah dibaca sebagai satu angka; jenis grafik berbeda-beda untuk pertanyaan yang sama di halaman yang sama.

### 4.4 Kejujuran dan keterbacaan grafik
- **Cek:**
  - Sumbu Y batang yang tidak mulai dari nol sehingga perbedaan terlihat dramatis.
  - Skala sumbu yang berbeda antar grafik yang diletakkan berdampingan untuk dibandingkan.
  - Legenda jauh dari data sehingga mata bolak-balik; terlalu banyak seri dengan warna mirip.
  - Nilai penting hanya bisa dibaca lewat tooltip saat hover (tidak bisa di layar sentuh, juga WCAG 1.4.13).
  - Label sumbu, judul, satuan, atau sumber data tidak ada; label yang miring 45 derajat dan sulit dibaca.
  - Kategori yang tidak diurutkan sehingga sulit menemukan yang terbesar dan terkecil.
- **Rekomendasi:** batang mulai dari nol (garis boleh tidak dari nol bila disebut); skala yang sama untuk grafik yang dibandingkan; label langsung di ujung garis atau batang; batasi sekitar 5 sampai 7 seri berwarna, sisanya abu-abu atau "Lainnya"; nilai kunci tertulis di grafik; judul yang menyebut kesimpulan ("Pengajuan naik 20% sejak Maret") untuk ringkasan pimpinan; urutkan kategori menurut nilai, kecuali urutan alami (waktu, tingkat).

### 4.5 Warna di grafik dan status
- **Cek:** warna kategori yang tidak bisa dibedakan oleh pengguna buta warna (merah dan hijau); kontras elemen grafik terhadap latar kurang dari 3:1 (WCAG 1.4.11); warna yang maknanya berbeda antar grafik; skala warna pelangi untuk data berurutan; warna merah untuk hal yang tidak buruk.
- **Rekomendasi:** palet yang aman untuk buta warna dan diuji; tambahkan pola, bentuk, label, atau ikon; satu warna satu makna di seluruh dashboard; skala satu warna (terang ke gelap) untuk data berurutan dan dua warna dengan titik tengah netral untuk data yang menyimpang dari nilai tengah; merah dan kuning hanya untuk peringatan.

### 4.6 Tabel data di desktop
- **Cek:**
  - Angka rata kiri atau rata tengah sehingga sulit dibandingkan; angka tanpa pemisah ribuan atau dengan jumlah desimal berbeda di satu kolom.
  - Header hilang saat scroll pada tabel panjang; kolom terlalu banyak tanpa pilihan menyembunyikan.
  - Teks terpotong tanpa cara melihat isi lengkap.
  - Kolom penting (status, tenggat) di ujung kanan yang tidak terlihat tanpa scroll.
  - Aksi per baris hanya muncul saat hover, atau aksi destruktif bersebelahan dengan aksi umum.
  - Tidak ada aksi massal untuk pekerjaan yang biasa dilakukan sekaligus; pilih semua yang ambigu (halaman ini atau semua hasil?).
  - Tidak ada sort di kolom yang wajar diurutkan, atau arah sort tidak terlihat.
  - Pagination tanpa jumlah total, atau infinite scroll pada tabel yang perlu dirujuk ulang.
- **Rekomendasi:** angka rata kanan dengan digit tabular dan desimal seragam; teks rata kiri; header sticky; pilihan kolom dan density (comfortable dan compact) untuk pengguna harian; kolom terpenting di kiri; isi lengkap lewat tooltip yang bisa difokus atau baris yang bisa dibuka; aksi baris selalu terlihat atau lewat menu yang jelas; aksi massal dengan jumlah item terpilih; indikator arah sort; pagination dengan total dan pilihan jumlah per halaman. Struktur tabel untuk pembaca layar (header terprogram, caption) dilaporkan di Lensa 3 (1.3.1).

### 4.7 Kesegaran, sumber, dan definisi data
- **Cek:** tidak ada keterangan kapan data diperbarui; data dari sumber berbeda dengan periode berbeda dicampur tanpa keterangan; angka yang berbeda untuk hal yang sama di dua tempat; data yang belum final tidak ditandai.
- **Rekomendasi:** tanda "Diperbarui 4 Nov 2026, 09.00 WIB" atau "Data sampai 31 Oktober"; sumber data; tanda "sementara" untuk data yang masih bisa berubah; satu definisi metrik di semua tempat.

### 4.8 Interaksi: filter, rentang waktu, drill-down, ekspor
- **Cek:** filter global dan filter per grafik yang tidak jelas cakupannya; rentang waktu yang tidak terlihat; tidak bisa drill-down dari angka ke daftar di baliknya; ekspor yang tidak menyertakan filter aktif atau definisi.
- **Rekomendasi:** filter global di atas dengan cakupan yang jelas; rentang waktu selalu terlihat; klik angka atau batang membuka daftar rinciannya; ekspor CSV atau Excel yang menyertakan filter dan tanggal. Perilaku filter umum ada di `references/navigation-search.md` bagian 5.7.

### 4.9 Alternatif dan aksesibilitas grafik
- **Cek:** grafik tanpa alternatif teks atau tabel data; informasi hanya dari warna; grafik interaktif yang tidak bisa dioperasikan dengan keyboard.
- **Rekomendasi:** ringkasan teks berisi kesimpulan utama, tombol "Lihat sebagai tabel", label langsung, dan navigasi keyboard untuk titik data. Kriteria WCAG (1.1.1, 1.4.1, 1.4.11, 2.1.1) dilaporkan di Lensa 3.

## 5. Penyajian di laporan

- Untuk dashboard, tulis daftar pertanyaan pengguna beserta hasil uji 5 detik (terjawab, terjawab dengan usaha, tidak terjawab). Temuan yang menyangkut pertanyaan utama masuk tabel temuan.
- Usulan perbaikan grafik ditulis konkret: jenis grafik pengganti, pembanding yang ditambahkan, label yang ditulis langsung. Bila memungkinkan, beri sketsa susunan dashboard usulan sebagai daftar berurutan.
- Gabungkan masalah yang berulang (misalnya "angka rata kiri di 6 kolom tabel") menjadi satu temuan.

## 6. Pemetaan temuan ke lensa

| Jenis temuan | Dilaporkan di |
|---|---|
| Dashboard tidak menjawab pertanyaan utama pengguna, item yang butuh tindakan tidak ditemukan | Lensa 1 |
| Cognitive load, perbandingan yang sulit, framing angka (persentase tanpa jumlah dasar), anchoring pada pembanding, spatial memory dashboard harian | Lensa 2 (kelompok C, F) |
| Alternatif teks grafik, warna sebagai satu-satunya penanda, kontras elemen grafik, struktur tabel, tooltip hover, keyboard | Lensa 3 (1.1.1, 1.3.1, 1.4.1, 1.4.11, 1.4.13, 2.1.1) |
| Prioritas visual kartu dan grafik, perataan angka, konsistensi format data dan warna | Lensa 4 |
| Judul grafik, label metrik, definisi, satuan | Lensa 5 |
| Tabel dan grafik di layar kecil, performa dashboard berat | Lensa 6 |

Tulis kolom Lensa di tabel temuan dengan nomor lensa dan nama pola, misalnya "4 · Data" atau "2 · Data".

## 7. Severity dan aturan penulisan temuan

- **Kritis:** grafik atau angka yang menyesatkan sehingga pengguna mengambil keputusan berdampak yang salah (sumbu terpotong pada laporan pimpinan, definisi metrik yang salah); informasi status penting yang hanya bisa dibaca dari warna oleh pengguna yang harus menindaklanjutinya.
- **Tinggi:** pertanyaan utama dashboard operasional tidak terjawab tanpa usaha besar; tidak ada pembanding untuk KPI yang dipakai mengambil keputusan; data tanpa tanggal pembaruan pada konteks yang sensitif waktu.
- **Sedang:** jenis grafik yang kurang cocok; legenda jauh dari data; angka rata kiri di tabel; tidak ada sort atau aksi massal untuk pekerjaan rutin.
- **Rendah:** pembulatan, variasi kecil dalam gaya grafik.

Aturan penulisan:
- Sebut grafik atau kolom, nilai contohnya, dan dampaknya pada keputusan (contoh: "pimpinan melihat batang Fakultas A dua kali lebih tinggi dari Fakultas B, padahal selisih sebenarnya 4%, karena sumbu dimulai dari 90").
- Dampak tafsir yang disimpulkan dari tampilan diberi confidence "Perlu verifikasi" kecuali jelas terukur, dengan saran validasi (uji 5 detik, minta pengguna menjawab pertanyaan dari dashboard).

## 8. Kesalahan umum saat menilai

- **Menyarankan lebih sedikit data untuk pengguna ahli.** Operator dan analis sering butuh density tinggi; nilai apakah data padat itu tersusun, bukan apakah sedikit.
- **Menilai dari estetika grafik.** Grafik yang indah tetapi tidak menjawab pertanyaan tetap bermasalah, dan sebaliknya.
- **Melarang semua pie chart.** Pie untuk 2 sampai 3 bagian dari keseluruhan masih wajar bagi pembaca umum.
- **Mengulang temuan format data.** Konsistensi format dinilai di Lensa 4 bagian 8.6; di sini nilai dampaknya pada pembacaan angka.
- **Menebak arti metrik.** Bila definisi tidak tersedia, tulis sebagai pertanyaan di "Perlu diverifikasi".
