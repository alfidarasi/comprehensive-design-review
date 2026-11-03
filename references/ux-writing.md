# Referensi Lensa 5: Konten dan UX Writing

File ini dibaca saat menjalankan Lensa 5. Isinya: cara pengguna membaca, bobot per konteks, keterbacaan, nada, istilah dan jargon, struktur konten, microcontent, label perintah, label link, pesan error, copy yang memengaruhi keputusan, pola penyajian konten panjang, teknik meringkas, cara menulis rekomendasi copy, dan cara menguji.

Semua aturan di sini diterapkan sesuai konteks dari pengguna skill (lihat SKILL.md bagian 1). Contoh paling penting: istilah domain seperti "PAK", "SKP", atau "JAD" adalah jargon bagi masyarakat umum, tetapi bahasa sehari-hari bagi dosen dan staf kepegawaian. Keputusan memakai, menjelaskan, atau mengganti istilah selalu bergantung pada siapa pembacanya.

## Daftar isi
1. Cara pengguna membaca di layar
2. Bobot menurut konteks
3. Tiga lapis: legibility, readability, comprehension
4. Nada (tone of voice)
5. Istilah, jargon, dan singkatan
6. Struktur konten: inverted pyramid, front-loading, chunking, format
7. Microcontent: judul, heading, tagline, ringkasan, notifikasi
8. UI copy: label perintah dan shortcut keyboard
9. Label link: 4S dan "link adalah janji"
10. Pesan error
11. Copy yang memengaruhi keputusan
12. Pola penyajian konten panjang: accordion, in-page link, tab
13. Teknik meringkas
14. Cara menulis rekomendasi copy
15. Cara menguji dan mengukur
16. Kesalahan umum saat menilai

---

## 1. Cara pengguna membaca di layar

- **Pengguna memindai.** Pada kunjungan rata-rata, pengguna web hanya membaca sekitar 20 sampai 28 persen kata di halaman. Mereka melihat heading, kata yang ditebalkan, daftar berbutir, angka, dan link.
- **Dua kata pertama paling menentukan.** Riset eyetracking (pelacakan gerak mata) menunjukkan pengguna sering hanya membaca 2 sampai 3 kata pertama dari heading, item daftar, atau link sebelum memutuskan lanjut atau lewat.
- **Pengguna menghitung untung rugi.** Sebelum membaca, pengguna menimbang biaya (usaha membaca, waktu) terhadap manfaat (informasi yang akan didapat). Copy yang baik menurunkan biaya dan memperjelas manfaat sejak awal.
- **Pengguna memutuskan dalam sekitar 10 detik** apakah sebuah halaman layak dibaca. Poin utama harus sampai dalam rentang itu.
- **Pengguna ahli juga memindai.** Dosen, peneliti, dokter, dan insinyur tetap membaca secara tidak linear: ringkasan dulu, lalu grafik atau tabel, lalu kesimpulan, baru bagian tengah bila perlu.
- **Pengguna literasi rendah tidak bisa memindai** dengan efisien. Mereka membaca kata per kata, sehingga kalimat panjang dan istilah sulit lebih berat lagi bagi mereka.

Implikasi untuk review: nilai copy dari bagian yang paling mungkin dibaca (heading, label, awal paragraf, link), sebelum menilai isi paragraf.

---

## 2. Bobot menurut konteks

| Konteks | Bobot tinggi | Bobot rendah atau disesuaikan |
|---|---|---|
| Layanan publik, pengguna awam, literasi beragam | Bahasa sederhana, kalimat pendek, istilah dijelaskan, pesan error yang membimbing, angka digit, nada tenang dan hormat | Jargon (hindari kecuali wajib dipelajari pengguna) |
| Aplikasi kerja untuk pengguna ahli domain (misalnya sistem kepegawaian untuk staf HR dan dosen) | Istilah domain yang tepat dan konsisten, label perintah ringkas, efisiensi, konsistensi terminologi, pesan error yang spesifik | Penjelasan istilah dasar (bisa membuat pengguna ahli merasa konten bukan untuk mereka), nada antusias |
| Pengguna baru di domain (pegawai baru, mahasiswa, onboarding) | Istilah domain dengan penjelasan dalam konteks, tooltip definisi, ringkasan, contoh | Kepadatan informasi |
| Marketing, landing page, onboarding produk | Front-loading, microcontent, tagline yang menjelaskan produk, label CTA yang spesifik, kejujuran klaim | Daftar panjang, detail teknis di atas lipatan layar |
| Konten panjang (bantuan, dokumentasi, artikel, kebijakan) | Inverted pyramid, ringkasan, heading deskriptif, chunking, daftar isi, in-page link | Label perintah |
| Konten ilmiah atau teknis untuk ahli | Fakta di atas interpretasi, sumber dan sitasi, tanggal terbit atau pembaruan, grafik dan tabel, judul akurat tanpa hype, desain visual yang tidak terlalu "promosi" | Penjelasan konsep dasar bidang |
| Transaksi atau proses berisiko (pembayaran, pengajuan, penghapusan data) | Label perintah yang menyebut konsekuensi, pesan konfirmasi spesifik, error yang menjaga input, kejujuran pilihan | Humor, nada main-main |
| Mobile | Ringkas, front-loading lebih ketat, accordion untuk konten panjang, label tidak terpotong | In-page link panjang di atas konten |
| Produk dwibahasa atau bahasa campuran | Satu bahasa per layar untuk label perintah, istilah yang dipakai pengguna sehari-hari | Penerjemahan harfiah istilah teknis yang sudah lazim dalam bahasa Inggris |

---

## 3. Tiga lapis: legibility, readability, comprehension

Ketiganya adalah penghalang bertingkat. Copy yang bagus isinya tetap gagal bila salah satu lapis bermasalah.

### 3.1 Legibility (keterlihatan huruf)
**Penjelasan.** Apakah pengguna bisa melihat dan membedakan huruf serta kata. Ini terutama urusan tipografi, sehingga sebagian besar dinilai di Lensa 3 (kontras, ukuran teks, pembesaran) dan Lensa 4 (tipografi).
**Cek.** Ukuran huruf isi yang cukup (sekitar 16px di web), kontras teks terhadap latar, latar polos di belakang teks (latar bertekstur atau foto mengganggu bentuk huruf), dan typeface yang bersih (hindari font dekoratif atau bergaya tulisan tangan untuk teks isi).
**Catatan.** Ketajaman penglihatan menurun seiring usia. Untuk produk yang dipakai pengguna usia lanjut (misalnya dosen senior), bobot legibility naik.

### 3.2 Readability (keterbacaan)
**Penjelasan.** Seberapa rumit kata dan struktur kalimat. Makin panjang kata dan kalimat, makin berat dibaca. Dalam bahasa Inggris biasanya diukur dengan formula seperti Flesch-Kincaid atau Fry yang menghasilkan "tingkat kelas" (misalnya kelas 8 untuk publik umum). Untuk bahasa Indonesia belum ada formula baku yang dipakai luas, jadi skill ini memakai indikator kasar: rata-rata panjang kalimat, persentase kata panjang, dan jumlah kalimat lebih dari 25 kata.
**Target.**
- Publik umum: setara tingkat SMP, kalimat rata-rata sekitar 10 sampai 15 kata.
- Pengguna berpendidikan tinggi: boleh lebih tinggi, tetapi tetap beberapa tingkat di bawah pendidikan mereka. Orang berpendidikan tinggi juga lebih suka teks yang mudah dibaca.
**Pedoman.**
- Kata yang lazim dan pendek. Hindari kata yang dibuat-buat atau terlalu formal ("melakukan pengecekan" menjadi "mengecek").
- Kalimat pendek. Hindari kalimat majemuk dengan banyak anak kalimat, karena memaksa pembaca menyimpan banyak hal di working memory (Lensa 2 kelompok C).
- Pernyataan positif ("Isi semua kolom wajib") lebih mudah dipahami daripada negatif ("Jangan biarkan kolom wajib kosong"). Negatif ganda ("tidak boleh tidak diisi") hampir selalu buruk.
- Kalimat aktif sebagai bawaan. Lihat catatan kalimat pasif di 3.4.

### 3.3 Comprehension (pemahaman)
**Penjelasan.** Apakah pengguna menangkap makna yang dimaksud, menarik kesimpulan yang benar, dan bisa bertindak setelah membaca.
**Pedoman.**
- Bahasa yang berpusat pada pengguna: istilah yang dikenal pengguna target (lihat bagian 5).
- Inverted pyramid: kesimpulan atau poin utama di awal (bagian 6).
- Bangun di atas mental model yang sudah ada dan kurangi kebutuhan mengingat informasi dari bagian lain teks.
- Gambar atau diagram kadang menjelaskan lebih baik daripada paragraf panjang.
- Makin ringkas, makin besar peluang pengguna mau berusaha memahami.
- Di mobile, ringkas lebih ketat lagi. Layar kecil memperlihatkan sedikit konteks dan sulit untuk melihat kembali informasi sebelumnya.

### 3.4 Kalimat pasif
**Penjelasan.** Kalimat aktif ("Pelaku melakukan X pada objek") biasanya lebih langsung daripada kalimat pasif ("Objek di-X oleh pelaku"). Kalimat pasif tanpa pelaku bisa membuat pengguna salah menangkap siapa yang harus bertindak. Contoh: "Dokumen harus diunggah sebelum 30 Juni" tidak jelas siapa yang mengunggah, dosen atau admin fakultas. "Dosen mengunggah dokumen sebelum 30 Juni" jelas.
**Pengecualian.** Pasif boleh dipakai untuk menaruh kata kunci di depan (front-loading) pada heading, ringkasan, item daftar, dan link. Contoh: "Usulan kenaikan JAD ditolak karena berkas PAK belum lengkap" lebih cepat dipindai daripada "Tim penilai menolak usulan kenaikan JAD karena...".
**Catatan bahasa Indonesia.** Kalimat pasif bentuk di- sangat lazim dan wajar dalam bahasa Indonesia, lebih lazim daripada passive voice dalam bahasa Inggris. Jangan menandai semua kalimat pasif sebagai temuan. Tandai hanya bila (1) pelaku yang harus bertindak menjadi tidak jelas, atau (2) kalimat menjadi panjang dan berbelit.

---

## 4. Nada (tone of voice)

**Penjelasan.** Desain visual adalah cara produk terlihat, tulisan adalah cara produk terdengar. Nada adalah kesan kepribadian dari cara menulis, terpisah dari isinya. Riset menunjukkan nada berpengaruh terukur pada kesan pengguna terhadap keramahan, keterpercayaan, dan kesediaan merekomendasikan produk.

### 4.1 Empat dimensi nada
Setiap dimensi adalah skala dengan titik tengah netral. Gabungan posisi di keempat dimensi membentuk **profil nada**.
| Dimensi | Satu ujung | Ujung lain |
|---|---|---|
| Humor | Lucu | Serius |
| Formalitas | Formal | Santai (casual) |
| Rasa hormat | Hormat | Nyeleneh (irreverent) |
| Antusiasme | Antusias | Datar, apa adanya (matter-of-fact) |

### 4.2 Temuan riset yang dipakai saat menilai
- **Kepercayaan lebih menentukan daripada keramahan.** Dalam riset NN/g, keterpercayaan menjelaskan sekitar 52 persen variasi kesediaan merekomendasikan, sedangkan keramahan hanya menambah sekitar 8 persen. Nada yang ramah tetapi menurunkan kepercayaan adalah pertukaran yang buruk.
- **Nada santai dan percakapan umumnya bekerja paling baik**, termasuk untuk bidang serius seperti perbankan, selama tetap serius isinya. Nada formal dan kaku sering terasa "membosankan" atau "mengintimidasi".
- **Humor berisiko.** Yang lucu bagi satu orang terasa garing bagi orang lain. Humor di bidang serius (asuransi, kesehatan, keuangan, layanan pemerintah, kepegawaian) bisa menurunkan kredibilitas. Judul yang jenaka sering gagal menjalankan fungsi judul, yaitu memberi tahu isi di bawahnya.
- **Sesuaikan dengan kondisi emosi pengguna.** Pengguna yang cemas (menunggu hasil pengajuan, menghadapi error, mengurus kesehatan) membutuhkan nada hangat, tenang, dan jelas. Lelucon di halaman error membuat pengguna yang sedang frustrasi makin kesal (terkait negativity bias dan peak-end di Lensa 2 kelompok D).

### 4.3 Cek
- Susun profil nada produk dari copy yang ada, lalu bandingkan dengan profil konteks (Lensa 2A). Apakah nadanya cocok untuk jenis organisasi, pengguna, dan momen?
- Apakah nada konsisten antar layar? Contoh masalah: halaman onboarding sangat santai, sedangkan pesan error sangat teknis dan dingin.
- Apakah nada berubah sesuai momen? Momen sukses boleh lebih hangat, momen gagal harus tenang dan membantu.
- Tanda seru berlebihan, kata superlatif ("luar biasa", "terbaik"), atau sapaan berlebihan yang terasa tidak tulus.

### 4.4 Rekomendasi
- Tuliskan profil nada singkat (misalnya "serius, santai, hormat, tidak terlalu antusias") sebagai acuan perbaikan.
- Untuk produk institusi atau layanan wajib: serius, hormat, santai secukupnya. Hindari humor.
- Untuk menguji nada dengan pengguna: gunakan wireframe atau teks saja supaya pengguna tidak terdistraksi visual; tanyakan "Kalau situs ini seorang manusia, orang seperti apa dia?"; atau minta pengguna memilih kata sifat dari daftar.

---

## 5. Istilah, jargon, dan singkatan

### 5.1 Jargon itu relatif
**Penjelasan.** Jargon adalah istilah khusus suatu profesi atau kelompok yang tidak dimengerti orang di luar kelompok itu. Satu istilah bisa sangat jelas bagi satu pembaca dan tidak bermakna bagi pembaca lain. Karena itu, istilah tidak bisa dinilai tanpa profil pengguna.

### 5.2 Pohon keputusan istilah
Ajukan dua pertanyaan:
1. **Berapa banyak pembaca yang tahu istilah ini?**
   - Hampir semua: pakai tanpa penjelasan.
   - Sebagian, sedikit, atau tidak ada: lanjut ke pertanyaan 2.
2. **Seberapa penting istilah ini dipakai?** (Apakah pengguna perlu mempelajarinya? Apakah istilah ini lebih tepat daripada padanan sederhananya?)
   - Tidak penting: ganti dengan bahasa sederhana.
   - Agak atau sangat penting: pakai istilahnya dengan penjelasan dalam konteks.

### 5.3 Format menjelaskan istilah
- Kebanyakan pembaca belum tahu: **[bahasa sederhana] ([istilah])**, contoh: "nilai kinerja tahunan (SKP)".
- Kebanyakan pembaca sudah tahu, sebagian belum: **[istilah] ([bahasa sederhana])**, contoh: "SKP (sasaran kinerja pegawai)".
- Penjelasan yang lebih panjang: tooltip atau ikon info di samping istilah, sehingga yang tidak butuh tidak terganggu dan yang butuh tidak perlu pindah halaman.
- Penjelasan harus bermakna dalam situasi pengguna. Definisi kamus saja jarang cukup. Jelaskan apa artinya bagi pengguna saat itu (misalnya "angka kredit yang masih kurang untuk naik ke Lektor Kepala").

### 5.4 Singkatan dan akronim
- Singkatan hanya bisa dipahami bila pembaca sudah pernah mempelajarinya, dan satu singkatan bisa punya banyak arti.
- Jabarkan saat pertama muncul dengan format **[kepanjangan] ([singkatan])**. Pada konten panjang, ulangi di awal setiap bagian besar, karena pengguna tidak membaca dari awal.
- Bila singkatannya lebih dikenal daripada kepanjangannya, pakai singkatan dan jelaskan konsepnya.
- Untuk aplikasi kerja yang penggunanya pasti mengenal singkatan domain, singkatan boleh dipakai langsung. Sediakan glosarium atau tooltip untuk pengguna baru.

### 5.5 Pengguna ahli domain
Temuan riset pada dosen, dokter, peneliti, dan insinyur:
- **Fakta di atas interpretasi.** Pengguna ahli waspada pada klaim berlebihan tanpa data. Klaim berlebihan menurunkan kredibilitas.
- **Sumber dan bukti.** Sitasi, nama penulis atau lembaga, dan link ke sumber asli menaikkan kepercayaan.
- **Tanggal.** Tampilkan tanggal terbit atau tanggal pembaruan, terutama untuk aturan, statistik, dan informasi yang cepat berubah (misalnya regulasi kepegawaian).
- **Kosakata bersama.** Pakai istilah bidang mereka. Istilah khusus sering lebih jelas dan lebih ringkas bagi ahli daripada parafrase panjang, dan membuat produk terlihat paham bidangnya. Jangan menjelaskan istilah dasar bidang mereka, karena pengguna ahli bisa menyimpulkan konten itu ditujukan untuk orang awam.
- **Pengecualian:** pengguna baru di bidang itu, istilah yang jarang dipakai, istilah dari bidang lain, dan istilah yang punya beberapa arti tetap perlu penjelasan.
- **Ejaan dan tata bahasa.** Pengguna berpendidikan tinggi lebih cepat menemukan salah ketik dan lebih kritis terhadapnya.
- **Ahli tidak selalu mahir teknologi.** Jangan menganggap mereka paham pola antarmuka yang tidak lazim.
- **Konten ilmiah:** judul akurat tanpa hype, ringkasan 1 sampai 3 kalimat di atas (abstrak yang dipersingkat), subjudul yang bisa diprediksi, latar belakang dipindah ke bawah atau diberi label jelas, grafik dan tabel yang bisa diperbesar, dan desain visual yang tidak terlalu "promosi" (desain yang terlalu dipoles bisa terbaca sebagai konten untuk publik umum).

### 5.6 Konsistensi istilah
Satu konsep, satu istilah, di semua layar dan di semua kanal (aplikasi, email, notifikasi, dokumen bantuan). Contoh masalah: "Usulan", "Pengajuan", dan "Permohonan" dipakai bergantian untuk hal yang sama. Gunakan istilah yang dipakai pengguna sendiri. Sumber bukti: log pencarian internal, kata-kata pengguna saat wawancara atau di kolom isian bebas survei, dan reaksi saat usability testing.

---

## 6. Struktur konten

### 6.1 Inverted pyramid (piramida terbalik)
**Penjelasan.** Gaya jurnalistik yang menaruh informasi terpenting (atau kesimpulan) paling atas, diikuti detail pendukung, lalu latar belakang. Bentuknya seperti segitiga terbalik: luas di atas, mengecil ke bawah. Pembaca yang hanya membaca satu kalimat tetap mendapat poin utamanya.
**Manfaat.** Pemahaman lebih cepat (pengguna punya gambaran umum dulu), interaction cost lebih rendah, mendorong scroll karena poin utama menarik, dan mendukung pembaca yang memindai.
**Cara menerapkan.** Tentukan satu poin kunci, urutkan informasi pendukung dari yang paling dibutuhkan banyak orang, tulis ringkas, dan front-load semua elemen (judul, heading, kalimat pertama paragraf, kata pertama kalimat).

### 6.2 Front-loading
**Penjelasan.** Menaruh kata yang membawa informasi di awal heading, link, item daftar, dan kalimat. Karena pengguna sering hanya membaca 2 kata pertama, kata pembuka harus kata kunci.
**Contoh.** "Panduan lengkap tentang cara mengajukan kenaikan jabatan" menjadi "Kenaikan jabatan: cara mengajukan". Hindari pembuka kosong seperti "Berikut adalah", "Informasi mengenai", "Selamat datang di".
**Aturan tambahan.** Jangan memakai kata pembuka yang sama di judul dan ringkasan di bawahnya, karena dua kata pertama di masing-masing adalah kesempatan menyampaikan hal berbeda. Kata kunci terpenting boleh diulang di tengah ringkasan.

### 6.3 Chunking
**Penjelasan.** Memecah konten menjadi unit kecil yang bermakna dan terpisah secara visual. Detail prinsip psikologinya di Lensa 2 kelompok C.
**Cara.** Paragraf pendek dengan jarak, panjang baris sekitar 50 sampai 75 karakter, heading dan subheading yang kontras, kata kunci tebal, daftar berbutir, ringkasan untuk bagian panjang, dan pengelompokan string (nomor telepon, NIP, nomor rekening) sesuai format lazimnya.
**Catatan.** Angka "7 plus minus 2" dari Miller sering disalahpahami. Jangan menyarankan membatasi menu menjadi 7 item; menu dikenali, tidak dihafal.

### 6.4 Teknik format untuk konten panjang (lebih dari sekitar 1.000 kata)
Rapikan isinya lebih dulu: apakah konten ini perlu, apakah tingkat detailnya tepat, bisakah diringkas, bisakah ditulis lebih sederhana. Setelah itu:
- **Ringkasan.** Di awal untuk membantu pengguna memutuskan apakah konten relevan; di akhir tiap bagian untuk konten sangat panjang. Beri heading jelas ("Ringkasan", "Poin penting") dan pembeda visual (border atau latar).
- **Tebal dan sorot.** Hanya untuk poin terpenting, maksimal sekitar 30 persen teks. Jangan menebalkan sekadar untuk menguatkan nada.
- **Daftar berbutir.** Lihat 6.5.
- **Callout.** Paragraf yang diberi gaya berbeda untuk statistik, contoh, definisi, atau peringatan.
- **Visual.** Visual informatif (diagram, contoh layar, grafik) membantu pemahaman. Visual dekoratif (foto stok generik) sering dilewati dan memperpanjang halaman, terutama di mobile. Pilih visual yang relevan.
- **Struktur halaman:** daftar isi, chunk berheading, progressive disclosure (lihat bagian 12), dan in-page link untuk melompat ke bagian.

### 6.5 Daftar berbutir
1. Panjang item kurang lebih sama dan tingkat kepentingannya setara.
2. Daftar bernomor hanya bila urutan atau jumlah penting (langkah prosedur). Daftar pilihan yang diberi nomor bisa membuat pengguna mengira harus menjalankan semuanya.
3. Struktur paralel: semua item diawali jenis kata yang sama (misalnya semua kata kerja) dan semuanya kalimat lengkap atau semuanya frasa.
4. Hindari kata pembuka yang sama di setiap item; taruh kata pembeda di depan.
5. Kalimat pengantar yang jelas sebelum daftar.
6. Format konsisten: item berupa kalimat lengkap diawali huruf kapital dan diakhiri titik; item berupa frasa tanpa titik di akhir. Ikuti pedoman gaya organisasi bila ada.
7. Jangan berlebihan. Daftar vertikal paling berguna untuk 3 item atau lebih. Hindari daftar bersarang; bila terpaksa, bedakan gaya butir tiap tingkat.

### 6.6 Angka
**Penjelasan.** Angka digit menarik mata saat memindai, karena bentuknya berbeda dari huruf dan mewakili fakta. "23" lebih cepat ditangkap daripada "dua puluh tiga".
**Pedoman untuk UI.**
- Tulis fakta spesifik dengan digit, termasuk di awal kalimat atau item daftar.
- Angka besar: digit untuk angka penting, kata untuk besarnya ("Rp 2,4 miliar", "24 juta"). Untuk angka sangat besar, jelaskan bila pembaca awam.
- Angka yang tidak mewakili fakta spesifik boleh ditulis kata ("ribuan dosen").
- Angka pasti menaikkan kredibilitas ("2.692 dosen" lebih meyakinkan daripada "ribuan dosen").
- Jelaskan satuan dan singkatan satuan yang tidak lazim bagi pengguna target.
**Catatan bahasa Indonesia.** Pedoman ejaan (EYD/PUEBI) meminta angka di awal kalimat dan bilangan satu atau dua kata ditulis dengan huruf untuk teks formal. Untuk antarmuka dan konten yang dipindai, digit lebih efektif. Bila organisasi mewajibkan ejaan baku di dokumen resmi, terapkan aturan baku di dokumen itu dan digit di antarmuka, lalu tulis keputusan ini di pedoman gaya. Format angka Indonesia: titik untuk ribuan (1.250.000), koma untuk desimal (3,75), "Rp" diikuti spasi.

---

## 7. Microcontent

**Penjelasan.** Microcontent adalah potongan teks pendek yang sering tampil tanpa konteks pendukung dan mewakili konten yang lebih besar: judul halaman, heading, tagline, subjek email, judul notifikasi, ringkasan pada kartu, serta petunjuk singkat. Microcontent menentukan apakah pengguna mau membuka konten lengkapnya. Banyak orang membentuk opini, bahkan membagikan artikel, hanya dari judul dan ringkasan.

### 7.1 Pedoman umum
- Harus bermakna di luar konteks (di hasil pencarian, notifikasi, feed, daftar).
- Spesifik dan memberi manfaat nyata. Hindari judul umum.
- Bahasa sederhana, tanpa plesetan, idiom, atau gaya yang sok kekinian. Idiom juga sulit dipahami penutur asing.
- Ringkas: buang kata yang tidak perlu dan detail yang mengaburkan poin.
- Front-load kata kunci.
- Jangan clickbait. Judul sensasional yang tidak ditepati isinya merusak kepercayaan.

### 7.2 Per jenis
| Jenis | Pedoman |
|---|---|
| Judul halaman (tag title) | Sekitar 40 sampai 60 karakter, kata kunci di depan, tanpa kata pembuka seperti "Berikut". Judul harus unik per halaman (juga WCAG 2.4.2) |
| Heading | Deskriptif, menjelaskan isi di bawahnya, bisa dipindai sebagai kerangka halaman |
| Tagline | Menjelaskan siapa Anda dan apa yang ditawarkan dengan singkat. Jangan menganggap semua pengunjung sudah mengenal produk |
| Subjek email dan judul notifikasi | Dirumuskan sebagai manfaat atau jawaban atas kebutuhan pengguna ("Usulan Anda disetujui: SK terbit 12 Juli"), kata kunci di depan karena sering terpotong |
| Ringkasan dan kartu | Abstrak sangat singkat dari konten; bantu pengguna memutuskan perlu membuka atau tidak |
| Petunjuk, tip, penjelas | Menjawab pertanyaan pengguna tepat di saat munculnya ("Tidak perlu kartu kredit", "Kenapa kami meminta NIDN?") |

### 7.3 Cek
Baca semua heading dan judul kartu saja, tanpa isi. Apakah pengguna bisa memahami isi halaman? Apakah ada heading "kreatif" yang tidak informatif ("Langkah Baru Menuju Masa Depan")?

---

## 8. UI copy: label perintah dan shortcut keyboard

**Penjelasan.** UI copy di sini adalah label untuk perintah: tombol, item menu, opsi radio, dan elemen aksi lain. Perintah biasanya mengubah keadaan sistem, berbeda dengan link yang memindahkan pengguna antar konten. Label yang jelas menjembatani gulf of execution, yaitu jarak antara niat pengguna dan cara mewujudkannya di antarmuka.

### 8.1 Pedoman label perintah
1. **Pendek tetapi jelas.** 1 sampai 4 kata. Perintah yang jarang dipakai boleh sedikit lebih panjang supaya jelas. Buang kata yang tidak perlu ("Klik untuk", "Silakan").
2. **Sebut keadaan yang akan terjadi.** Label toggle menunjukkan hasil setelah diklik ("Jeda" saat video diputar, "Tampilkan detail" yang berubah menjadi "Sembunyikan detail").
3. **Kata kerja untuk aksi.** "Ajukan usulan", "Unduh SK", "Masuk". Label umum seperti "Kembali", "Berikutnya", "Batal", dan "Pengaturan" sudah dikenal, tetapi kata kerja spesifik lebih baik bila memungkinkan ("Lanjut ke pembayaran" lebih baik daripada "Berikutnya").
4. **Kata sifat untuk perubahan tampilan.** "Tebal", "Miring", "Ringkas", "Lengkap".
5. **Hindari label samar, lucu, atau ikut tren.** Pengguna tidak boleh perlu mencari arti nama perintah.
6. **Batasi istilah bermerek.** Nama fitur bermerek ("SmartSync") tidak dimengerti pengguna baru. Pakai deskripsi fungsinya.
7. **Konsisten antar konteks.** Perintah yang sama memakai label dan posisi yang sama. Tambahkan kata benda bila objeknya tidak jelas ("Hapus folder", "Hapus lampiran").
8. **Hindari "OK" di dialog konfirmasi.** Pengguna menekan "OK" karena kebiasaan tanpa membaca. Sebut aksinya ("Buang perubahan", "Hapus 3 dokumen"). Sediakan undo bila memungkinkan.
9. **Elipsis (...)** di akhir label menandakan perintah yang butuh input tambahan sebelum dijalankan ("Ekspor sebagai...").
10. **Tooltip** untuk tombol ikon dan perintah yang jarang dipakai, berisi penjelasan hasilnya. Tombol ikon tetap butuh nama yang bisa dibaca pembaca layar (Lensa 3, WCAG 4.1.2 dan 2.5.3).

### 8.2 Shortcut keyboard
Relevan untuk aplikasi kerja yang dipakai sering (dashboard, editor, sistem administrasi).
- Prioritaskan shortcut untuk tugas yang paling sering, berdasarkan observasi pengguna.
- Jangan mengubah fungsi shortcut standar (Ctrl/Cmd + S untuk simpan, Ctrl/Cmd + C/V, Ctrl/Cmd + Z).
- Jangan bentrok dengan shortcut teknologi bantu dan browser. Shortcut satu huruf wajib bisa dimatikan atau diubah (WCAG 2.1.4, Lensa 3).
- Buat shortcut bisa ditemukan: tampilkan di tooltip dan di samping item menu, sediakan daftar shortcut yang mudah dicari dan dicetak.
- Sediakan padanan untuk Windows dan macOS, dan izinkan pengguna mengatur shortcut sendiri bila memungkinkan.
- Mudah dipelajari dan diingat: sistem yang konsisten, modifier (Ctrl, Shift, Alt) sesedikit mungkin.
- Beri label "Shortcut keyboard" dengan jelas supaya tidak tertukar dengan fitur "pintasan" lain di produk.

---

## 9. Label link

### 9.1 Empat S
| S | Arti | Cek |
|---|---|---|
| **Specific** (spesifik) | Label menyebut apa yang ada di balik link | "Selengkapnya", "Pelajari lebih lanjut", "Klik di sini", "Lihat" |
| **Sincere** (jujur) | Harapan yang dibangun label langsung terpenuhi setelah diklik | Link "Info & daftar" yang ternyata membuka form kontak |
| **Substantial** (cukup isi) | Label bisa dipahami tanpa membaca teks di sekitarnya | Label puitis yang baru bermakna setelah membaca deskripsinya |
| **Succinct** (ringkas) | Tidak ada kata yang terbuang, kata kunci di depan | Diperhatikan paling akhir; label boleh panjang asal setiap katanya berguna |

### 9.2 Kenapa "Selengkapnya" atau "Pelajari lebih lanjut" bermasalah
- Information scent lemah: pengguna tidak tahu apa yang akan didapat, ragu, dan membuang klik.
- Banyak link "Selengkapnya" di satu halaman membuat pengguna tidak tahu apakah tujuannya sama atau berbeda.
- Buruk untuk aksesibilitas: pengguna pembaca layar sering mendengar daftar link tanpa konteks visual (terkait WCAG 2.4.4 dan 2.4.9 di Lensa 3).
- Buruk untuk SEO karena tidak ada kata kunci.
**Solusi.** (1) Ganti dengan kata kunci tujuan ("Syarat kenaikan ke Lektor"), (2) pertahankan format dan tambahkan objek ("Pelajari syarat kenaikan jabatan"), atau (3) jadikan heading-nya sebagai link dan hapus link "Selengkapnya".

### 9.3 "Mulai" atau "Get started" yang menghentikan pengguna
Label CTA yang sangat umum seperti "Mulai", "Mulai sekarang", atau "Coba sekarang" menarik banyak klik karena terasa cocok untuk tujuan apa pun. Masalahnya, pengguna yang ingin mencari informasi (apa produk ini, berapa harganya) ikut mengklik dan langsung masuk ke kuis, pendaftaran, atau sales funnel tanpa mendapat informasi. Mereka kesal, kehilangan kepercayaan, lalu pergi. Analitik mencatatnya sebagai klik yang berhasil, padahal pengguna gagal.
**Cek.** Apa yang terjadi setelah CTA diklik? Apakah label menyebutnya? Apakah informasi dasar (apa layanannya, biaya, syarat) bisa ditemukan tanpa masuk alur pendaftaran?
**Rekomendasi.** Sebut langkahnya ("Isi kuis gaya", "Buat akun gratis", "Cek kelayakan Anda"), berikan informasi sebelum meminta data (prinsip reciprocity, Lensa 2 kelompok I), dan sediakan tagline singkat yang menjelaskan layanan.

### 9.4 Link adalah janji
Label link berjanji tentang halaman tujuan. Janji yang tidak ditepati, besar atau kecil, mengikis kepercayaan.
**Konfirmasi di halaman tujuan:**
- Konten yang diharapkan langsung terlihat tanpa scroll atau klik tambahan.
- Heading halaman tujuan sama atau sangat mirip dengan label link.
- Bila link menuju form atau alat, form atau langkah pertama alat itu langsung tampil.
**Cek dalam review flow:** ikuti setiap CTA utama dan bandingkan label dengan halaman yang muncul. Login wall atau langkah perantara yang tidak disebut label adalah janji yang dilanggar.

---

## 10. Pesan error

**Definisi.** Gangguan dari sistem pada alur kerja pengguna yang memberi tahu ada situasi yang tidak lengkap, tidak cocok, atau tidak diinginkan.

### 10.1 Keterlihatan
- **Dekat dengan sumber error.** Tampilkan pesan di samping field atau elemen yang bermasalah (proximity, Lensa 2 kelompok B). Untuk form panjang, tambahkan ringkasan error di atas dengan link ke tiap field.
- **Penanda yang jelas, berulang, dan aksesibel.** Teks merah tebal, border, dan ikon. Jangan mengandalkan warna atau animasi saja (WCAG 1.4.1, 3.3.1, Lensa 3). Pesan error harus diumumkan ke pembaca layar (WCAG 4.1.3).
- **Sesuai tingkat dampak.** Peringatan yang tidak menghalangi cukup berupa label, toast, atau banner. Modal hanya untuk error berat yang harus diselesaikan.
- **Jangan muncul terlalu cepat.** Menampilkan error saat pengguna baru berpindah dari field kosong terasa seperti "dinilai sebelum sempat menjawab". Untuk input yang memang rawan salah (syarat kata sandi), validasi langsung saat mengetik justru membantu.

### 10.2 Komunikasi
- **Bahasa manusia.** Hindari jargon teknis dan kode error. Kode boleh ditampilkan kecil untuk keperluan diagnosis.
- **Jelaskan masalahnya dengan tepat.** "Terjadi kesalahan" tidak membantu. Sebutkan apa yang terjadi, dengan ketepatan yang sesuai mental model pengguna.
- **Beri solusi.** Contoh: "Ukuran berkas 12 MB. Batas unggah 5 MB. Kompres PDF atau pisahkan menjadi beberapa berkas."
- **Nada positif dan tidak menyalahkan.** Hindari "tidak valid", "ilegal", "salah". Fokus pada syarat ("NIDN terdiri dari 10 angka"). Hindari humor karena error yang sering muncul membuat lelucon cepat basi.

### 10.3 Efisiensi
- **Cegah kesalahan yang mudah ditebak.** Pesan error terburuk adalah yang tidak ada. Contoh: peringatan bila email menyebut "terlampir" tetapi tidak ada lampiran; peringatan bila periode SKP yang dipilih tidak sesuai tahun pengajuan.
- **Pertahankan input pengguna.** Biarkan pengguna memperbaiki tanpa mengisi ulang. Tawarkan simpan draf bila pengguna meninggalkan halaman.
- **Kurangi usaha perbaikan.** Tawarkan pilihan perbaikan yang kemungkinan benar ("Maksud Anda: Universitas Airlangga?").
- **Ajarkan secara singkat.** Jelaskan cara kerja sistem bila perlu, dengan link ke penjelasan lengkap.

### 10.4 Kegagalan total
Saat sistem sama sekali tidak bisa melayani (server tumbang), permintaan maaf yang tulus dengan sedikit hal yang menyenangkan bisa mengurangi kesan buruk (terkait peak-end dan negativity bias). Jangan dipakai bila input pengguna terancam hilang atau situasinya serius bagi pengguna (misalnya tenggat pengajuan).

---

## 11. Copy yang memengaruhi keputusan

**Penjelasan.** Tidak ada penyajian pilihan yang benar-benar netral (choice architecture, Thaler dan Sunstein). Kata-kata di pilihan ikut menentukan apa yang dipilih pengguna. Copy bisa mendukung keputusan yang baik atau mendorong pengguna memilih hal yang merugikan mereka. Dalam usability testing, pengguna sering membaca pilihan dari sudut pandang orang pertama ("Saya mau..."), sehingga pilihan adalah pernyataan yang diminta mereka setujui.

Pola manipulatif yang dicek di copy (detail penilaian dan severity di Lensa 2 kelompok I, pola menipu):
| Pola | Bentuk di copy | Contoh |
|---|---|---|
| Scare tactics dan penonjolan kerugian | Copy yang mengulang besarnya kerugian untuk menakut-nakuti | Menyebut ulang total biaya yang akan hilang di samping opsi menolak proteksi |
| Kelangkaan buatan | Batas waktu atau stok tanpa alasan yang dijelaskan, kata-kata mendesak | Modal "Tunggu! Diskon hanya 30 menit" dengan pilihan "Tolak diskon" |
| Emotional framing | Pilihan biasa dibingkai sebagai cerminan karakter pengguna atau keputusan mulia | "Saya pilih menanggung biaya admin agar lebih banyak yang terbantu" yang tercentang otomatis |
| Confirmshaming | Opsi penolakan yang mempermalukan | "Tidak, saya tidak peduli karier saya" |
| Ketidakcocokan copy dan pilihan | Copy menjanjikan fleksibilitas yang tidak ada di pilihan sebenarnya | "Bukan langganan, batalkan kapan saja" padahal semua opsi berlangganan |

**Rekomendasi.** Sajikan pilihan dengan bahasa yang jujur, setara, dan langsung. Label menolak cukup netral ("Tidak sekarang", "Lewati"). Bila ada batas waktu atau stok, sebutkan alasannya dan pastikan benar. Kepuasan dan kepercayaan jangka panjang lebih bernilai daripada beberapa konversi.

---

## 12. Pola penyajian konten panjang: accordion, in-page link, tab

**Prinsip utama:** susun dan rapikan kontennya lebih dulu, baru pilih pola. Banyak masalah hilang setelah konten dipersingkat.

### 12.1 Perbandingan
| | In-page link (daftar isi) | Accordion | Tab |
|---|---|---|---|
| Fungsi | Navigasi di halaman | Menyusun dan menyembunyikan konten | Menyusun beberapa bagian panjang |
| Panjang halaman | Bertambah | Berkurang | Berkurang |
| Konten tersembunyi | Tidak | Ya | Ya |
| Melihat beberapa bagian sekaligus | Ya | Hanya bila beberapa panel boleh terbuka | Tidak |
| Cocok untuk | Konten panjang yang dibaca berurutan atau dilompati | Beberapa bagian pendek yang independen, mobile | Sedikit bagian panjang yang setara |
| Kelemahan | Bisa disangka link ke halaman lain | Interaction cost, konten tersembunyi bisa terlewat | Tab selain default jarang dibuka, sulit membandingkan |

### 12.2 Accordion
**Gunakan bila:** pengguna hanya butuh beberapa bagian (FAQ, detail produk); proses bertahap (checkout, form multi-langkah); konten panjang di layar kecil (mobile, tempat accordion paling bermanfaat karena berfungsi sebagai mini-IA, yaitu gambaran struktur halaman).
**Hindari bila:** pengguna butuh sebagian besar atau semua isinya (misalnya daftar syarat pengajuan; lebih baik tampilkan semua walau halaman lebih panjang); kontennya sedikit (halaman terlihat kosong); hierarki dalam bertingkat (accordion bersarang membingungkan); konten sulit diringkas menjadi heading; konten dibaca sebagai alur cerita.
**Cek implementasi:**
- Heading deskriptif dan mewakili isi panel.
- Penanda bisa dibuka yang jelas (ikon caret atau plus), dan heading serta ikon sama-sama bisa diklik.
- Beberapa panel boleh terbuka sekaligus; sediakan "Buka semua" dan "Tutup semua" bila banyak.
- Informasi penting tidak disembunyikan di panel tertutup.
- Di mobile: panel pertama sebaiknya tidak terbuka otomatis bila itu menyembunyikan gambaran struktur halaman; heading tetap terlihat (sticky) saat isi panel panjang; halaman tidak melompat ke atas saat panel dibuka (pengguna bisa mengira pindah halaman lalu menekan Back).
- Aksesibilitas: heading berupa tombol, status terbuka atau tertutup diumumkan (aria-expanded), isi panel tertutup tidak bisa dijangkau keyboard (Lensa 3).
- Bisa dicetak lengkap.
**Mitos yang perlu diluruskan saat memberi rekomendasi:** pengguna tetap scroll halaman panjang bila kontennya relevan dan terformat baik. Pengguna memberi sekitar 80 persen perhatian di atas lipatan layar dan 20 persen di bawahnya. Halaman panjang bukan masalah dengan sendirinya.

### 12.3 In-page link
**Gunakan bila:** konten panjang dengan bagian-bagian yang jelas, indeks atau FAQ, tombol "Kembali ke atas" di halaman sangat panjang. Manfaatnya makin besar di layar kecil.
**Tidak perlu bila:** halaman pendek atau tiap bagian sangat pendek (daftar isi justru mendorong konten ke bawah), atau konten berupa alur yang saling menyambung.
**Cek implementasi:**
- Diberi label "Di halaman ini" atau "Daftar isi" dan gaya yang membedakannya dari link ke halaman lain. Jangan letakkan di area navigasi utama.
- Teks link sama dengan heading tujuan.
- Setelah diklik, heading tujuan berada dekat bagian atas layar, tidak tertutup header sticky (juga WCAG 2.4.11), dengan sedikit konteks di atasnya.
- Bagian terakhir cukup panjang supaya bisa berada di atas layar.
- Daftar isi sticky di samping menunjukkan posisi pengguna saat ini.
- Tombol Back: untuk daftar isi, Back kembali ke posisi sebelumnya di halaman; untuk "Kembali ke atas", Back kembali ke halaman sebelumnya.
- Bila topiknya saling jauh dan pengguna biasanya hanya butuh satu, pertimbangkan memecah menjadi beberapa halaman.

### 12.4 Tab
Sering terlewat: pengguna fokus pada tab default. Jangan menaruh informasi penting di tab selain default. Di mobile, deretan tab sering tidak muat.

---

## 13. Teknik meringkas

Dipakai saat menulis rekomendasi perbaikan copy yang terlalu panjang. Pertanyaan pemandu: **apakah pembaca membutuhkan ini untuk memahami maksudnya?**

1. **Lepaskan bagian favorit (kill your darlings).** Kalimat pembuka retoris yang enak dibaca tetapi tidak membawa informasi.
2. **Buang kata yang tidak perlu.**
   - Pembuka kosong: "Perlu diketahui bahwa", "Adapun", "Dalam hal ini", "Berikut ini adalah".
   - Penguat yang tidak perlu: "sangat", "benar-benar", "sungguh".
   - Nominalisasi (kata kerja yang dibendakan): "melakukan pengecekan" menjadi "mengecek", "melakukan pengunggahan" menjadi "mengunggah".
   - Kata sambung berlebihan: "yang mana", "dalam rangka".
3. **Hapus pengulangan.** Contoh: "seperti A, B, C, dan lain sebagainya" (kata "seperti" sudah menunjukkan contoh).
4. **Periksa anak kalimat.** Buang anak kalimat yang tidak menambah informasi ("Seperti yang kita ketahui bersama, ...").
5. **Sesuaikan dengan tujuan dan pembaca.** Jangan jelaskan hal yang sudah pasti diketahui pembaca target.
6. **Buang detail berlebihan.**
7. **Susun ulang kalimat.** Kadang menukar urutan memperlihatkan bagian yang bisa dihapus.

Bila sebuah konten memang tidak bisa diringkas tanpa kehilangan kejelasan, kejelasan menang. Kurangi panjang di bagian lain dan gunakan format (daftar, subjudul) untuk membantu pemindaian.

---

## 14. Cara menulis rekomendasi copy

Saat skill memberi contoh perbaikan copy:
- **Tampilkan sebelum dan sesudah** di tabel temuan atau lampiran, supaya tim bisa langsung memakainya.
- **Ikuti nada yang sudah ada.** Ambil contoh copy produk yang sudah baik sebagai acuan gaya. Meniru contoh nyata menghasilkan nada yang lebih alami daripada mengandalkan satu kata sifat nada (misalnya "ceria"), yang cenderung dilebih-lebihkan menjadi tidak wajar. Bila memakai kata sifat, gabungkan beberapa (misalnya "serius, santai, hormat").
- **Beri 2 sampai 3 alternatif** untuk copy penting (CTA utama, judul, pesan error kritis), dengan catatan singkat perbedaannya.
- **Patuhi batasan:** panjang yang muat di komponen (terutama mobile), istilah domain yang wajib, pedoman gaya organisasi, dan regulasi.
- **Tandai sebagai draf yang perlu diuji** bila menyangkut nada atau istilah yang belum pasti dikenal pengguna.

---

## 15. Cara menguji dan mengukur

### 15.1 Otomatis (input URL, kode, atau copy deck)
```bash
node scripts/copy_audit.mjs <url | file.html | copy.txt | copy.md> --out copy-report
```
Copy deck berformat teks: baris diawali `#` dibaca sebagai heading, `-` atau angka sebagai item daftar, dan `[Label]` sebagai tombol.

Skrip menandai **kandidat**: label generik, label sama dengan tujuan berbeda, label tombol terlalu panjang, istilah perintah yang tidak konsisten, pesan error teknis atau menyalahkan atau terlalu umum, kalimat lebih dari 25 kata, paragraf lebih dari 90 kata, angka ditulis kata, singkatan tanpa kepanjangan, huruf kapital semua, masalah daftar, teks tebal lebih dari 30 persen, in-page link tanpa label atau target, accordion, placeholder berisi instruksi, dan tanda seru berlebihan. Skrip juga mengeluarkan inventaris heading dan label untuk dinilai Claude.

Semua hasil skrip harus dinilai terhadap konteks. Contoh: singkatan "PAK" ditandai skrip, tetapi untuk aplikasi yang hanya dipakai dosen dan staf kepegawaian, singkatan itu wajar dan tidak menjadi temuan. Skrip juga tidak bisa memicu pesan error yang belum tampil; untuk itu lakukan interaksi (submit form kosong, isi data salah) di lingkungan uji.

### 15.2 Penilaian Claude
- Baca heading, label, dan link saja: apakah halaman masih bisa dipahami?
- Profil nada dan kesesuaiannya dengan konteks.
- Front-loading pada heading, link, dan item daftar.
- Ikuti CTA utama dan cek janji link.
- Istilah domain dengan pohon keputusan di bagian 5.

### 15.3 Yang perlu diuji dengan pengguna (masuk "Perlu diverifikasi")
- Pemahaman: usability test dengan tugas nyata, lalu pertanyaan pemahaman.
- Cloze test: hapus setiap kata ke-6 dari teks penting dan minta pengguna mengisinya; skor 60 persen ke atas menandakan teks cukup mudah dipahami.
- Keterlihatan huruf: kecepatan baca dibanding desain acuan, atau amati pengguna yang mendekatkan wajah ke layar.
- Istilah: kartu sortir atau wawancara untuk mengetahui istilah yang dipakai pengguna.
- Nada: wawancara kualitatif dengan teks tanpa visual, atau pemilihan kata sifat.

---

## 16. Kesalahan umum saat menilai

- **Menilai istilah tanpa profil pengguna.** Menandai semua jargon sebagai masalah di aplikasi untuk pengguna ahli, atau sebaliknya membiarkan jargon di layanan publik.
- **Menandai semua kalimat pasif.** Dalam bahasa Indonesia, pasif wajar. Tandai hanya bila pelaku menjadi tidak jelas atau kalimat berbelit.
- **Menuntut semua copy sesingkat mungkin.** Kejelasan lebih penting daripada jumlah kata. Link yang panjang tetapi spesifik lebih baik daripada "Selengkapnya".
- **Menyarankan accordion untuk semua konten panjang.** Pengguna scroll bila kontennya relevan. Accordion menambah klik dan menyembunyikan informasi.
- **Menulis ulang dengan nada Claude sendiri.** Rekomendasi harus mengikuti nada produk.
- **Melaporkan masalah yang sama dua kali.** Link generik juga masalah WCAG 2.4.4, error tanpa teks juga masalah WCAG 3.3.1, dan copy manipulatif juga pola menipu di Lensa 2. Laporkan di satu tempat dan rujuk silang.
