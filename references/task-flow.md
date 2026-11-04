# Referensi Lensa 1: Tugas Utama, Flow, dan Journey

File ini dibaca saat menjalankan Lensa 1. Isinya: definisi, cakupan menurut jenis input, bobot per konteks, alur kerja pemetaan flow dan interaction cost, area yang dicek, cara menyajikan di laporan, hubungan dengan lensa lain, aturan severity, dan kesalahan umum saat menilai.

Semua aturan di sini diterapkan sesuai konteks dari pengguna skill (SKILL.md bagian 1). Lensa ini menilai dua hal: apakah tugas utama bisa diselesaikan, dan berapa biaya yang harus dibayar pengguna untuk menyelesaikannya. Flow yang wajar untuk pengajuan tahunan yang berisiko bisa terlalu panjang untuk tugas harian yang diulang puluhan kali, dan sebaliknya. Karena itu panjang flow selalu dinilai terhadap frekuensi, risiko, dan profil pengguna, tidak terhadap angka ideal yang seragam.

## Daftar isi
1. Definisi
2. Cakupan menurut jenis input
3. Bobot menurut konteks
4. Alur kerja: pemetaan flow dan interaction cost
5. Area yang dicek
6. Penyajian di laporan
7. Hubungan dengan lensa lain
8. Severity dan aturan penulisan temuan
9. Kesalahan umum saat menilai

---

## 1. Definisi

- **Tugas (task):** tujuan yang ingin dicapai pengguna, dirumuskan dari sudut pandang pengguna ("cuti saya disetujui"), bukan dari sudut pandang sistem ("form cuti tersimpan di database").
- **Flow:** rangkaian layar, langkah, dan keputusan di dalam produk untuk menyelesaikan satu tugas, dari titik masuk sampai pengguna tahu tugasnya selesai.
- **User journey:** pengalaman lengkap pengguna untuk mencapai tujuannya, termasuk hal yang terjadi sebelum, di antara, dan sesudah memakai produk: membaca email undangan, menunggu persetujuan atasan, datang ke loket, menerima notifikasi hasil.
- **Touchpoint:** setiap titik tempat pengguna berinteraksi dengan layanan: layar aplikasi, email, notifikasi, WhatsApp atau SMS, telepon ke layanan pelanggan, dokumen cetak, loket, atau petugas.
- **Interaction cost:** total usaha mental dan fisik untuk mencapai tujuan (membaca, scroll, mencari, memahami, memutuskan, klik atau tap, mengetik, menunggu, berpindah perhatian, mengingat). Teori lengkapnya ada di `references/ux-psychology.md` kelompok G. File ini memakai teori itu pada level flow dan journey.
- **Happy path:** jalur ketika semuanya berjalan lancar. **Unhappy path:** jalur ketika ada error, data tidak lengkap, pengguna berhenti di tengah, atau kondisi khusus.

## 2. Cakupan menurut jenis input

Kedalaman lensa ini mengikuti bahan yang tersedia dan permintaan pengguna skill. Jangan mengarang langkah yang tidak terlihat.

| Bahan yang tersedia | Yang dikerjakan |
|---|---|
| Satu layar atau satu komponen | 1A (pemahaman tugas di layar ini) ditambah pertanyaan flow ringan: dari mana pengguna datang, apa langkah berikutnya, berapa langkah tersisa, apakah ada langkah di layar ini yang bisa dihapus atau digabung. Temuan flow hanya ditulis bila terlihat dari layar itu; sisanya masuk "Perlu diverifikasi". |
| Beberapa layar, prototipe, atau URL multi-halaman | 1A untuk layar kunci dan 1B (flow) penuh: peta langkah, hitungan biaya, cek area di bagian 5. |
| Bahan atau konteks yang menyebut touchpoint di luar layar (email, notifikasi, persetujuan atasan, loket, dokumen fisik), atau pengguna meminta review journey | 1A, 1B, dan 1C (journey dan touchpoint). Bagian journey yang tidak terlihat ditulis sebagai asumsi dan diberi confidence "Perlu verifikasi". |
| Pengguna skill membatasi cakupan (misalnya hanya aksesibilitas) | Ikuti batasan itu. Sebut di bagian asumsi bahwa flow tidak dinilai. |

Bila input berupa URL atau prototipe yang bisa dijelajahi, telusuri flow-nya langsung (klik CTA utama, isi form dengan data uji di lingkungan uji) dan catat setiap layar. Jangan mengirim data sungguhan atau mengubah data di lingkungan produksi.

## 3. Bobot menurut konteks

Pakai profil konteks dari Lensa 2 (2A). Tabel ini menentukan aspek flow yang diperiksa paling dalam dan seberapa berat sebuah temuan.

| Kondisi konteks | Naikkan bobot | Turunkan bobot |
|---|---|---|
| Dipakai harian atau berulang | Interaction cost per tugas rutin (biaya kecil dikali frekuensi menjadi besar), akselerator (shortcut, bulk action, template, duplikat pengajuan lama), default yang mengingat pilihan terakhir, langkah yang bisa dilewati pengguna yang sudah paham | Penjelasan bertahap dan wizard panjang yang hanya berguna untuk pemakaian pertama |
| Dipakai sesekali | Orientasi (di mana saya, berapa langkah lagi), syarat dan dokumen yang dibutuhkan disebut di awal, bisa dijeda dan dilanjutkan, ringkasan sebelum kirim | Optimasi kecepatan untuk pengguna mahir |
| Pengguna wajib memakai | Biaya flow tetap dinilai penuh, karena biayanya muncul sebagai waktu kerja yang hilang, kesalahan, dan permintaan bantuan; frekuensi kontak ke admin atau helpdesk sebagai bukti | (tidak ada) |
| Pengguna mudah pindah | Time-to-value (seberapa cepat pengguna mendapat manfaat), registrasi atau login wall sebelum manfaat terlihat, langkah awal yang panjang, abandonment di langkah pertama | (tidak ada) |
| Proses menegangkan atau berisiko (pengajuan resmi, pembayaran, tenggat) | Langkah tinjau sebelum kirim, status yang jelas setelah kirim, pemulihan dari error tanpa kehilangan data, bukti atau nomor pengajuan | Pemangkasan langkah yang agresif. Langkah konfirmasi yang melindungi pengguna dipertahankan |
| Transaksi atau checkout | Guest checkout, biaya yang baru muncul di akhir, langkah tambahan yang tidak berhubungan dengan pembelian, kebutuhan membuat akun | (tidak ada) |
| Mobile, sering terganggu, atau jaringan tidak stabil | Langkah pendek, draf tersimpan otomatis, titik lanjut yang jelas saat kembali, sedikit perpindahan aplikasi (misalnya ke email untuk kode OTP) | Flow satu halaman yang sangat panjang |
| Banyak aktor (persetujuan atasan, verifikasi admin) | Handoff antar aktor, status yang terlihat oleh semua pihak, siapa yang sedang ditunggu, notifikasi saat giliran berpindah, revisi yang tidak memaksa mengulang dari awal | (tidak ada) |
| Pengguna dengan pengalaman digital rendah atau usia lanjut | Sedikit keputusan per langkah, satu hal per layar (boleh menambah jumlah layar), bahasa langkah yang jelas, jalur bantuan manusia | Pemadatan banyak langkah ke satu layar |
| Pemakaian pertama atau onboarding | Langkah opsional yang bisa dilewati, manfaat sebelum permintaan data, progressive profiling (data diminta saat dibutuhkan) | Akselerator untuk pengguna mahir |

Catatan penting: **jumlah langkah bukan satu-satunya ukuran.** Lima layar yang masing-masing ringan dan jelas bisa lebih mudah daripada satu layar dengan tiga puluh field. Yang dinilai adalah total biaya dan sebarannya: langkah yang tidak memberi nilai, keputusan yang sulit, data yang harus dicari di luar, dan waktu tunggu.

## 4. Alur kerja: pemetaan flow dan interaction cost

1. **Rumuskan tugas dan definisi selesai.** Tulis tugas dari sudut pandang pengguna dan kapan pengguna merasa tugasnya selesai. Contoh: "Pegawai tahu pengajuan cutinya sudah diterima atasan", bukan "Form terkirim".
2. **Tentukan titik masuk yang realistis.** Dari mana pengguna biasanya mulai: halaman beranda, link di email, notifikasi, pencarian Google, atau bookmark. Flow dinilai dari titik masuk itu, tidak dari layar pertama form.
3. **Petakan happy path langkah demi langkah.** Untuk setiap langkah catat layar, aksi pengguna, sub-langkah mental (mencari, membaca syarat, memutuskan, mengingat), data yang diminta, dan waktu tunggu. Pakai tabel di bagian 6.
4. **Hitung biaya.** Minimal: jumlah layar atau halaman, jumlah klik atau tap, jumlah field isian, jumlah keputusan, waktu tunggu yang terlihat, perpindahan konteks (tab, aplikasi lain, perangkat lain), dan informasi yang harus dicari atau diingat di luar produk. Beri setiap langkah biaya Rendah, Sedang, atau Tinggi. Untuk input berupa screenshot, angka ini adalah perkiraan dan ditandai demikian.
5. **Bandingkan dengan baseline.** Berapa langkah minimum yang benar-benar dibutuhkan untuk data yang esensial? Bandingkan juga dengan pola umum di platform, produk sejenis yang dikenal pengguna, atau versi sebelumnya bila ada. Selisihnya adalah kandidat temuan.
6. **Uji setiap langkah dengan enam pertanyaan.**
   - **Hapus:** apakah langkah ini memberi nilai bagi pengguna atau hanya bagi sistem atau organisasi?
   - **Gabung:** bisakah digabung dengan langkah sebelum atau sesudahnya tanpa membuat layar terlalu padat?
   - **Isi otomatis:** apakah sistem sudah punya datanya (profil, pengajuan sebelumnya, lokasi, dokumen yang pernah diunggah)? Bisakah diberi default yang masuk akal?
   - **Tunda:** apakah data ini bisa diminta nanti, saat benar-benar dibutuhkan?
   - **Pindah urutan:** apakah urutannya sesuai cara pengguna berpikir dan dokumen yang mereka pegang?
   - **Lindungi:** apakah langkah ini mencegah kesalahan yang mahal (konfirmasi hapus, tinjau sebelum kirim)? Bila ya, pertahankan dan buat ringan, jangan dihapus.
7. **Petakan unhappy path.** Error validasi, data atau dokumen yang belum lengkap, pengguna menekan Back, keluar di tengah lalu kembali besok, sesi habis, pengajuan ditolak dan perlu revisi, kondisi khusus (cabang flow untuk kasus tertentu), pengguna pertama kali dan pengguna yang kembali.
8. **Untuk 1C, petakan journey.** Susun tahapan (misalnya tahu ada layanan, menyiapkan dokumen, mengajukan, menunggu, menerima hasil, menindaklanjuti), touchpoint di setiap tahap, dan perpindahan antar touchpoint. Tandai titik ketika pengguna terputus: tidak tahu status, harus bertanya ke petugas, atau menerima informasi yang berbeda di channel berbeda.
9. **Ringkas dengan angka.** Contoh: "Saat ini 7 layar, 31 field, 4 keputusan, dan 1 perpindahan ke email. Usulan: 4 layar, 18 field (9 diisi otomatis dari profil), tanpa perpindahan ke email."

## 5. Area yang dicek

### 5.1 Panjang flow dan langkah yang tidak memberi nilai
- **Cek:** layar perantara yang hanya berisi tombol "Lanjut"; splash atau layar tunggu yang tidak perlu; konfirmasi untuk aksi yang mudah dibatalkan; wizard multi-langkah untuk tugas yang sebenarnya sederhana; login atau registrasi yang diminta sebelum pengguna perlu; langkah yang hanya ada karena struktur organisasi atau sistem lama (misalnya memilih unit kerja yang sebenarnya sudah diketahui sistem).
- **Rekomendasi:** hapus layar perantara; ganti konfirmasi dengan undo untuk aksi yang bisa dibatalkan; tunda login sampai saat menyimpan atau mengirim; isi otomatis data yang sudah dimiliki sistem.

### 5.2 Urutan langkah
- **Cek:** syarat kelayakan atau dokumen wajib baru diberitahukan di akhir; biaya total baru terlihat di langkah terakhir; data diminta sebelum pengguna melihat manfaatnya; keputusan penting diminta terlalu awal sebelum pengguna punya informasi cukup; urutan field yang tidak sesuai dokumen fisik yang dipegang pengguna (misalnya KTP, SK, atau formulir kertas).
- **Rekomendasi:** tampilkan syarat, dokumen yang dibutuhkan, dan estimasi waktu di awal; tampilkan biaya sejak awal; ikuti urutan dokumen sumber; tempatkan keputusan setelah informasi yang dibutuhkan untuk memutuskan.

### 5.3 Data dan input sepanjang flow
- **Cek:** data yang sama diminta lebih dari sekali (juga WCAG 3.3.7); data yang sebenarnya sudah dimiliki sistem; unggah dokumen yang bisa diambil dari sistem lain; field opsional yang tampil setara dengan field wajib sehingga pengguna mengisi semuanya; tidak ada default untuk pilihan yang hampir selalu sama.
- **Rekomendasi:** isi otomatis dari profil atau pengajuan sebelumnya; integrasi atau rujukan ke data yang sudah ada; sembunyikan atau tandai jelas field opsional; beri default yang aman dan bisa diubah.

### 5.4 Orientasi dan progres
- **Cek:** tidak ada penanda posisi di flow multi-langkah; stepper yang tidak menyebut nama langkah; jumlah langkah yang berubah tanpa penjelasan; tidak ada estimasi waktu untuk proses panjang; pengguna tidak tahu apakah sudah selesai atau masih ada langkah lagi.
- **Rekomendasi:** stepper dengan nama langkah dan posisi saat ini; estimasi waktu yang jujur di awal; ringkasan di langkah terakhir; pernyataan jelas saat tugas selesai.

### 5.5 Dead end, loop, dan detour
- **Cek:** halaman tanpa langkah berikutnya (misalnya halaman sukses tanpa link kembali atau tindak lanjut); error yang mengembalikan pengguna ke awal flow; pengguna harus keluar dari flow untuk mencari informasi (panduan, syarat, nomor rekening) lalu kembali; pogo-sticking (bolak-balik antara daftar dan detail karena informasi kunci tidak ada di daftar); menu atau tombol yang membawa ke flow yang salah.
- **Rekomendasi:** setiap layar akhir punya langkah berikutnya yang jelas; error ditangani di tempat tanpa mengulang; informasi pendukung tersedia di dalam flow (tooltip, panel samping, ringkasan syarat); informasi kunci ditampilkan di daftar.

### 5.6 Jeda, lanjut, dan pemulihan
- **Cek:** data hilang saat menekan Back atau saat sesi habis; tidak ada draf untuk flow panjang; tidak ada titik lanjut saat pengguna kembali; mengedit satu bagian dari ringkasan memaksa mengulang beberapa langkah; tidak ada peringatan sebelum timeout (juga WCAG 2.2.1); pengajuan yang ditolak harus dibuat ulang dari nol.
- **Rekomendasi:** simpan draf otomatis di server; tampilkan "Lanjutkan dari langkah X" saat kembali; link "Ubah" di ringkasan yang membawa langsung ke bagian itu lalu kembali ke ringkasan; revisi yang memakai data pengajuan sebelumnya.

### 5.7 Umpan balik dan penutupan
- **Cek:** status setelah submit tidak jelas; tidak ada nomor atau bukti pengajuan; pengguna tidak tahu apa yang terjadi selanjutnya, berapa lama, dan apa yang harus dilakukan; layar selesai yang langsung hilang atau tertutup notifikasi kecil.
- **Rekomendasi:** layar selesai yang menyebut status, nomor pengajuan, langkah berikutnya, perkiraan waktu, dan cara memantau. Akhir flow sangat menentukan kesan keseluruhan (peak-end, Lensa 2 kelompok D).

### 5.8 Titik masuk
- **Cek:** link di email atau notifikasi membuka beranda, bukan langkah yang dimaksud; setelah login pengguna dibawa ke beranda, bukan ke halaman tujuan semula; flow tidak bisa ditemukan dari tempat pengguna biasanya mencari (menu, pencarian, beranda); URL langkah tidak bisa dibagikan atau dibuka ulang.
- **Rekomendasi:** deep link ke langkah atau item yang tepat; kembali ke tujuan semula setelah login; jalur masuk dari tempat yang paling sering dipakai pengguna.

### 5.9 Journey dan touchpoint lintas channel (1C)
- **Cek:** status yang hanya bisa diketahui dengan menghubungi petugas; istilah atau status yang berbeda antara aplikasi, email, dan notifikasi; notifikasi yang tidak menyebut tindakan yang diminta; langkah offline (cetak, tanda tangan basah, datang ke loket) yang tidak diberitahukan di awal; handoff ke manusia yang membuat pengguna mengulang cerita atau data; dalam proses banyak aktor, tidak jelas siapa yang sedang ditunggu; tidak ada pengingat sebelum tenggat.
- **Rekomendasi:** status yang sama dan terlihat di semua channel; notifikasi yang menyebut apa yang terjadi, apa yang harus dilakukan, dan link langsung ke tindakannya; langkah offline disebut di awal dan dikurangi bila memungkinkan; konteks pengguna terbawa saat dialihkan ke petugas; tampilan "menunggu siapa" untuk proses persetujuan.

### 5.10 Efisiensi untuk pengguna berulang
- **Cek:** tugas yang sama harus diisi ulang dari nol setiap kali; tidak ada bulk action untuk pekerjaan yang biasanya dilakukan sekaligus; pilihan terakhir tidak diingat; tidak ada shortcut untuk tugas paling sering; akselerator ada tetapi tidak ditawarkan di saat relevan (momentum behavior, Lensa 2 kelompok G).
- **Rekomendasi:** duplikat pengajuan sebelumnya, template, bulk action, ingat pilihan terakhir, shortcut yang mudah ditemukan, dan tawarkan cara yang lebih cepat tepat di titik pengguna memakai cara lama.

### 5.11 Pemakaian pertama dan onboarding
- **Cek:** tutorial atau tur produk panjang sebelum pengguna bisa melakukan apa pun; carousel pengenalan yang tidak bisa dilewati; permintaan data atau izin perangkat (notifikasi, lokasi, kamera) di layar pertama sebelum manfaatnya terlihat; layar awal kosong tanpa arahan langkah pertama; tips yang muncul semua sekaligus dan bukan saat fitur dipakai; tidak ada cara membuka kembali panduan; onboarding yang sama untuk pengguna baru dan pengguna yang hanya pindah perangkat.
- **Rekomendasi:** biarkan pengguna mencapai manfaat pertama secepatnya (time-to-value); panduan kontekstual saat fitur pertama kali dipakai, bukan tur di depan; minta izin perangkat tepat saat dibutuhkan dengan alasan singkat; empty state yang berfungsi sebagai onboarding (pola State); langkah opsional bisa dilewati dan panduan bisa dibuka lagi dari menu bantuan; data contoh untuk produk yang baru bermanfaat setelah berisi data.
- **Catatan konteks:** bobotnya tinggi untuk produk yang mudah ditinggalkan dan untuk pengguna dengan pengalaman digital rendah, serta rendah untuk sistem internal yang pelatihannya sudah diberikan. Dasar psikologinya ada di Lensa 2 kelompok H (competence, autonomy) dan D (kesan pertama); untuk fitur AI dilanjutkan di Lensa 7A.

### 5.12 Notifikasi dan pengingat
- **Cek:** notifikasi yang tidak menyebut apa yang terjadi dan apa yang harus dilakukan; link di notifikasi yang membuka beranda, bukan item terkait (lihat 5.8); pengingat tenggat yang datang terlalu dekat dengan tenggat atau tidak datang sama sekali; terlalu banyak notifikasi berprioritas sama sehingga yang penting terlewat; tidak ada pengaturan channel dan frekuensi; notifikasi yang sama dikirim di beberapa channel tanpa koordinasi; isi sensitif yang tampil di layar kunci.
- **Rekomendasi:** isi notifikasi menyebut kejadian, tindakan yang diminta, dan tenggat bila ada, dengan kata kunci di depan karena sering terpotong (copy-nya dinilai di Lensa 5 bagian 7); deep link ke tindakannya; pengingat bertahap (misalnya 7 hari, 1 hari, dan hari H) dengan zona waktu yang jelas; pisahkan notifikasi tindakan dari informasi; pengaturan per jenis dan per channel; isi sensitif diringkas di layar kunci.
- **Catatan konteks:** notifikasi yang mengejar keterlibatan tanpa manfaat bagi pengguna dinilai dengan attention capture di Lensa 2 kelompok I.

## 6. Penyajian di laporan

Bila review mencakup flow (1B) atau journey (1C), isi bagian "Alur tugas: sekarang dan usulan" di template laporan. Bagian ini ada di isi utama yang dibaca awam, jadi pakai bahasa sehari-hari: "isian" untuk field, "beban" untuk biaya, "lewat apa" untuk touchpoint.

**Tabel alur** (satu tabel per tugas utama, maksimal dua tugas):

| Langkah | Layar | Yang dilakukan pengguna | Beban | Bisa diperbaiki? | Masalah no. |
|---|---|---|---|---|---|
| 1 | Beranda | Mencari menu "Cuti" di dalam menu Layanan | Sedang (menu bertingkat dua) | Taruh menu Cuti di beranda | 6 |
| 2 | Form cuti | Mengisi 12 isian, 5 sudah ada di profil | Berat | Isi otomatis 5 isian | 3 |
| 3 | Konfirmasi | Klik "Lanjut" tanpa informasi baru | Ringan | Hapus layar ini | 7 |

**Angka sekarang dan usulan:** jumlah layar, klik atau ketukan, isian yang diketik manual, pilihan yang harus diputuskan, dan perpindahan ke aplikasi atau tab lain. Tandai "perkiraan" bila berasal dari screenshot. Satu kalimat ringkasnya juga ditulis di ringkasan satu menit.

**Perjalanan di luar layar** (hanya untuk 1C):

| Tahap | Lewat apa | Yang dialami pengguna | Di mana putusnya | Masalah no. |
|---|---|---|---|---|
| Menunggu persetujuan | Email, aplikasi | Tidak tahu pengajuan sudah dibaca atasan | Status hanya "Diproses" selama 5 hari | 2 |

Nomor masalah sama dengan nomor temuan di bagian "Masalah yang ditemukan" dan di Lampiran A (Lensa "1"). Tabel ini hanya membantu pembaca melihat letak masalah di sepanjang alur.

## 7. Hubungan dengan lensa lain

- **Lensa 2 kelompok G** (interaction cost, Fitts's law, device inertia, momentum behavior) adalah dasar teori. Temuan yang menyangkut panjang atau urutan flow dilaporkan di Lensa 1 dengan dasar penilaian dari kelompok G; temuan di level satu kontrol (misalnya posisi tombol submit) tetap di Lensa 2. Jangan melaporkan hal yang sama dua kali.
- **Lensa 2 kelompok C** (working memory antar langkah), **A** (change blindness pada status), dan **D** (peak-end di akhir flow) menjadi dasar penjelasan dampak.
- **Lensa 2 kelompok F dan I:** sludge (hambatan yang sengaja atau tidak sengaja dibuat untuk tindakan yang diinginkan pengguna, misalnya membatalkan langganan yang jauh lebih sulit daripada mendaftar) dan deceptive patterns (forced registration, roach motel, forced continuity) dinilai dengan aturan severity kelompok I, yaitu minimal Tinggi.
- **Lensa 3:** WCAG 3.3.7 (pengisian redundan), 3.3.4 (pencegahan kesalahan), 2.2.1 (timeout), 2.4.5 (beragam cara), 3.2.6 (bantuan yang konsisten), dan 3.3.8 (autentikasi yang aksesibel) dilaporkan di Lensa 3 dan dirujuk dari sini.
- **Lensa 5:** apakah label CTA menepati janji halaman tujuan, dan bahasa di stepper serta layar selesai.
- **Lensa 6:** kontinuitas antar perangkat dan masalah flow yang hanya muncul di perangkat tertentu (misalnya perpindahan ke aplikasi email untuk OTP di ponsel) dilaporkan di Lensa 6 bila akar masalahnya perangkat, dan di Lensa 1 bila akar masalahnya struktur flow.

## 8. Severity dan aturan penulisan temuan

Panduan severity, selalu disesuaikan dengan profil konteks:
- **Kritis:** tugas utama tidak bisa diselesaikan (dead end, loop tanpa jalan keluar, langkah wajib yang tidak bisa dilakukan di perangkat utama pengguna), atau error membuat pengguna kehilangan seluruh isian pada proses berisiko.
- **Tinggi:** langkah berlebih yang signifikan pada tugas harian atau berulang; syarat atau biaya yang baru muncul di akhir; data hilang saat Back atau timeout; status setelah submit yang tidak jelas pada proses berisiko; pengguna harus menghubungi petugas untuk mengetahui status.
- **Sedang:** langkah yang bisa dihapus, digabung, atau diisi otomatis pada tugas sesekali; orientasi atau progres yang kurang jelas; detour untuk mencari informasi pendukung.
- **Rendah:** peningkatan efisiensi kecil, misalnya mengingat pilihan terakhir pada tugas yang jarang.

Aturan penulisan:
- Sebut tugas, langkah, dan layar tempat masalah muncul, beserta angkanya (jumlah layar, field, klik, atau keputusan). Temuan tanpa angka atau lokasi tidak masuk laporan.
- Sebut alasan kontekstual: mengapa biaya ini penting untuk pengguna ini (contoh: "staf HR memproses sekitar 40 pengajuan per hari, jadi 3 klik tambahan per pengajuan menjadi 120 klik per hari").
- Jangan mengklaim waktu penyelesaian atau tingkat drop-off tanpa data. Perkiraan dari analisis diberi confidence "Perlu verifikasi", dengan saran validasi: usability testing dengan task completion rate dan time on task, analisis funnel atau drop-off per langkah di analytics, atau data tiket bantuan.
- Bila langkah ada karena regulasi atau aturan bisnis yang tidak bisa diubah, catat sebagai batasan, lalu beri rekomendasi yang bekerja di dalam batasan itu (misalnya tanda tangan basah tetap wajib, tetapi diberitahukan di awal beserta template yang bisa diunduh).
- Untuk usulan flow baru, tulis flow usulan secara ringkas (daftar langkah), bukan hanya "sederhanakan flow".

## 9. Kesalahan umum saat menilai

- **Menganggap lebih sedikit langkah selalu lebih baik.** Memadatkan banyak keputusan ke satu layar bisa menaikkan cognitive load dan error, terutama untuk pengguna awam dan proses berisiko.
- **Memangkas langkah pengaman.** Konfirmasi hapus, tinjau sebelum kirim, dan verifikasi pembayaran melindungi pengguna. Buat ringan, jangan dihapus.
- **Menilai journey yang tidak terlihat sebagai fakta.** Langkah di luar bahan review (email, persetujuan atasan, loket) ditulis sebagai asumsi dan diberi confidence "Perlu verifikasi".
- **Menilai dari sudut pandang tim.** Tim produk tahu jalan pintas dan istilah internal. Telusuri flow dari titik masuk pengguna sungguhan, dengan pengetahuan pengguna target (lihat SKILL.md bagian 7).
- **Melupakan pengguna yang kembali.** Flow yang mulus untuk pertama kali bisa melelahkan untuk pemakaian ke-50, dan sebaliknya.
- **Melaporkan dua kali.** Satu akar masalah (misalnya form yang tidak memakai data profil) dilaporkan sekali, walaupun terlihat di beberapa langkah.
