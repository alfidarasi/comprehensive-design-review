# Referensi Pola: State Layar, Umpan Balik Sistem, dan Pencegahan Kesalahan

File ini dibaca saat menjalankan pemeriksaan pola "State dan umpan balik" (SKILL.md bagian 3, Pemeriksaan pola). Isinya: definisi, cakupan menurut jenis input, bobot per konteks, inventaris state, area yang dicek (umpan balik sistem, state per jenis, pencegahan kesalahan, aksi destruktif), pemetaan temuan ke lensa, severity, dan kesalahan umum saat menilai.

Pemeriksaan ini bukan lensa baru. Temuannya dilaporkan di lensa yang sudah ada sesuai tabel di bagian 7. Semua aturan diterapkan sesuai konteks dari pengguna skill (SKILL.md bagian 1).

Alasan pemeriksaan ini dirinci: mockup dan screenshot hampir selalu menampilkan keadaan ideal (data lengkap, rapi, tanpa error). Keadaan lain, seperti kosong, loading, gagal, sebagian, atau tanpa izin, paling sering lupa didesain, dan justru di keadaan itulah pengguna paling butuh arahan.

## Daftar isi
1. Definisi
2. Cakupan menurut jenis input
3. Bobot menurut konteks
4. Inventaris state
5. Area yang dicek
6. Penyajian di laporan
7. Pemetaan temuan ke lensa
8. Severity dan aturan penulisan temuan
9. Kesalahan umum saat menilai

---

## 1. Definisi

- **State layar:** keadaan sebuah layar atau bagian layar berdasarkan data dan kondisi sistem: kosong, loading, berisi, sebagian, error, offline, tanpa izin, dan seterusnya.
- **State komponen:** keadaan tampilan satu komponen interaktif (default, hover, focus, active, disabled, loading, error, success, selected). Konsistensi visualnya dinilai di Lensa 4 (`references/visual-hierarchy.md` bagian 8.3). File ini menilai apakah state itu ada dan bermakna bagi pengguna.
- **Umpan balik sistem (visibility of system status):** sistem memberi tahu pengguna apa yang sedang terjadi, apakah aksinya berhasil, dan apa yang harus dilakukan berikutnya, dalam waktu yang wajar.
- **Pencegahan kesalahan:** desain yang membuat kesalahan sulit terjadi (batasan, default aman, konfirmasi yang tepat) dan mudah dipulihkan (undo, riwayat, pemulihan data).

## 2. Cakupan menurut jenis input

| Bahan yang tersedia | Yang dikerjakan |
|---|---|
| Screenshot atau mockup satu state saja | Susun inventaris state yang seharusnya ada (bagian 4), nilai state yang terlihat, dan masukkan state yang tidak tersedia ke "Perlu diverifikasi" sebagai daftar state yang perlu didesain. Jangan menebak tampilan state yang tidak ada. |
| Mockup atau Figma dengan beberapa state | Nilai setiap state yang tersedia dan tandai state yang hilang. |
| Kode, prototipe, atau URL | Picu state di lingkungan uji: kosongkan data, filter tanpa hasil, putus jaringan (DevTools offline atau throttling), submit data salah, buka tanpa login atau dengan akun berizin terbatas. Jangan memicu error atau mengubah data di lingkungan produksi. |

## 3. Bobot menurut konteks

| Kondisi konteks | Naikkan bobot | Turunkan bobot |
|---|---|---|
| Pemakaian pertama atau onboarding | Empty state pertama kali (penjelasan dan langkah pertama), contoh atau data contoh | State untuk data sangat banyak |
| Dipakai harian dengan data banyak | State data banyak dan sebagian, loading yang tidak memblokir kerja, umpan balik aksi massal, undo | Ilustrasi besar di empty state |
| Proses berisiko (pembayaran, pengajuan resmi, hapus data) | Umpan balik setelah submit, state "sedang diproses" yang mencegah submit ganda, konfirmasi dan undo untuk aksi destruktif, pemulihan dari error tanpa kehilangan data | Delight dan animasi dekoratif |
| Jaringan lambat atau tidak stabil | Loading yang jujur, state offline, retry, penyimpanan lokal sementara, status kirim yang jelas | (tidak ada) |
| Banyak aktor atau data yang diubah bersama | State terkunci atau sedang diedit orang lain, data kedaluwarsa, konflik penyimpanan, status persetujuan | (tidak ada) |
| Peran dan izin berbeda | State tanpa izin dan fitur yang tidak tersedia untuk peran tertentu (sembunyikan atau tampilkan dengan alasan) | (tidak ada) |
| Pengguna dengan pengalaman digital rendah | Bahasa state yang sederhana, langkah pemulihan yang eksplisit, jalur bantuan manusia | Kode error teknis |
| Fitur AI | State "sedang berpikir", jawaban sebagian (streaming), gagal menjawab, dan tidak yakin; dinilai bersama Lensa 7 | (tidak ada) |

## 4. Inventaris state

Untuk setiap layar atau area utama, cek apakah state berikut relevan dan sudah didesain. Lewati state yang memang tidak mungkin terjadi.

| State | Pertanyaan kunci |
|---|---|
| Kosong, pertama kali | Apakah pengguna tahu fungsi area ini dan langkah pertama yang harus dilakukan? |
| Kosong, karena pengguna menghapus semua | Apakah pesannya berbeda dari pemakaian pertama (tidak menjelaskan ulang fitur dari awal)? |
| Kosong, hasil pencarian atau filter | Apakah filter yang aktif terlihat, dan ada cara mengubah atau mereset (lihat `references/navigation-search.md`)? |
| Loading awal | Apakah ada tanda sistem sedang bekerja? Apakah layout tidak melompat saat data muncul (CLS, Lensa 6)? |
| Loading sebagian atau memuat lebih banyak | Apakah bagian yang sudah ada tetap bisa dipakai? |
| Berisi, data sedikit | Apakah layout tidak terlihat rusak atau terlalu kosong dengan 1 sampai 2 item? |
| Berisi, data sangat banyak | Pagination, virtual scroll, atau ringkasan; dicek bersama stress test Lensa 6 |
| Sebagian atau tidak lengkap | Data yang belum lengkap, profil setengah terisi, draf: apakah statusnya jelas dan ada cara melengkapi? |
| Error, gagal memuat | Apakah pengguna tahu apa yang gagal, apakah datanya aman, dan bisa mencoba lagi? |
| Error, gagal menyimpan atau mengirim | Apakah input tetap ada? Apakah jelas bahwa aksi tidak berhasil? |
| Offline atau koneksi terputus | Apakah pengguna diberi tahu? Apa yang masih bisa dilakukan? Apakah aksi disimpan untuk dikirim nanti? |
| Tanpa izin atau fitur tidak tersedia | Apakah ada alasan dan cara mendapatkan akses, atau elemen disembunyikan dengan sengaja? |
| Sedang diproses (setelah submit) | Apakah tombol dicegah ditekan dua kali? Apakah ada perkiraan waktu untuk proses lama? |
| Sukses | Apakah konfirmasinya terlihat, cukup lama, dan menyebut apa yang terjadi beserta langkah berikutnya? |
| Kedaluwarsa atau berubah | Data lama, sesi habis, harga atau kuota berubah, item sudah dihapus orang lain |
| Terkunci atau konflik | Sedang diedit orang lain, sudah disetujui sehingga tidak bisa diubah, konflik versi |

## 5. Area yang dicek

### 5.1 Umpan balik sistem
- **Cek:** aksi yang tidak memberi tanda apa pun bahwa sistem menerimanya; indikator loading tanpa konteks untuk proses lebih dari beberapa detik; toast sukses yang hilang terlalu cepat atau muncul jauh dari area aksi (change blindness, Lensa 2 kelompok A); status yang hanya dibedakan warna (WCAG 1.4.1); perubahan status yang tidak diumumkan ke screen reader (WCAG 4.1.3); progres yang berhenti di 99 persen tanpa penjelasan.
- **Panduan waktu (perkiraan umum):** respons kurang dari sekitar 0,1 detik terasa instan; sampai sekitar 1 detik alur pikir masih terjaga tanpa indikator khusus; lebih dari sekitar 1 detik perlu indikator; lebih dari sekitar 10 detik perlu progres atau perkiraan waktu, serta cara membatalkan atau meninggalkan proses dengan aman.
- **Rekomendasi:** umpan balik langsung di dekat elemen yang ditekan; skeleton atau placeholder untuk loading konten; progress bar dengan langkah atau persentase untuk proses lama; pesan sukses yang menyebut hasil ("3 dokumen dihapus") dan bertahan cukup lama atau bisa ditutup sendiri; optimistic UI hanya untuk aksi yang hampir pasti berhasil dan mudah dikembalikan.

### 5.2 Empty state
- **Cek:** area kosong tanpa teks; "Tidak ada data" tanpa penjelasan atau langkah berikutnya; empty state yang sama untuk pertama kali, setelah dihapus, dan hasil filter kosong; ilustrasi besar yang menutupi aksi utama di aplikasi kerja.
- **Rekomendasi:** tiga unsur, yaitu apa yang biasanya ada di sini, kenapa kosong, dan satu aksi berikutnya ("Belum ada pengajuan. Pengajuan yang Anda kirim akan tampil di sini. [Buat pengajuan]"). Bedakan pesan per jenis kosong. Copy-nya dinilai di Lensa 5.

### 5.3 Loading
- **Cek:** layar putih atau spinner layar penuh untuk konten yang bisa dimuat bertahap; layout yang melompat saat data datang; tombol yang tetap aktif selama submit sehingga terkirim dua kali; loading tanpa batas waktu dan tanpa pesan bila gagal.
- **Rekomendasi:** skeleton yang mengikuti bentuk konten; muat bertahap (konten utama dulu); tombol berubah menjadi state loading dan nonaktif selama proses; timeout dengan pesan dan tombol coba lagi.

### 5.4 Error dan kegagalan sistem
- **Cek:** error yang mengganti seluruh layar padahal hanya satu bagian yang gagal; kode error teknis tanpa penjelasan; tidak ada tombol coba lagi; input hilang setelah gagal menyimpan; error yang tidak membedakan "data Anda salah" dari "sistem kami bermasalah".
- **Rekomendasi:** batasi error di area yang gagal; sebut apa yang gagal, apakah data aman, dan apa yang bisa dilakukan; coba lagi otomatis atau manual; simpan input. Pedoman copy pesan error ada di `references/ux-writing.md` bagian 10, jangan diulang di sini.

### 5.5 Offline, sesi, dan data kedaluwarsa
- **Cek:** aksi yang gagal diam-diam saat offline; sesi habis yang membuang isian; data yang ditampilkan sudah lama tanpa tanda waktu; pengguna mengedit item yang sudah dihapus atau diubah orang lain tanpa diberi tahu.
- **Rekomendasi:** banner offline yang jelas dan antrean aksi; peringatan sebelum sesi habis (WCAG 2.2.1) dan pemulihan isian setelah login ulang; tanda "Diperbarui 10 menit lalu" untuk data yang bisa usang; deteksi konflik dengan pilihan yang jelas.

### 5.6 Izin dan fitur yang tidak tersedia
- **Cek:** tombol yang terlihat aktif tetapi menghasilkan error "akses ditolak"; tombol disabled tanpa alasan; halaman 403 tanpa arahan; fitur yang disembunyikan sehingga pengguna mengira produk tidak punya fitur itu.
- **Rekomendasi:** pilih sengaja antara menyembunyikan (fitur tidak relevan untuk peran itu) dan menampilkan dengan alasan (fitur relevan tetapi butuh syarat, misalnya "Hanya admin fakultas yang bisa menyetujui. Hubungi [nama]"). Tombol disabled sebaiknya disertai penjelasan syarat yang belum terpenuhi.

### 5.7 Pencegahan kesalahan
- **Cek:** input bebas untuk data yang punya format pasti (tanggal, nominal, kode); pilihan yang memungkinkan kombinasi mustahil (tanggal selesai sebelum tanggal mulai); default yang berisiko (misalnya "kirim ke semua"); tombol berbahaya bersebelahan dan setara dengan tombol aman; aksi penting yang bisa dipicu tidak sengaja (gestur, tombol Enter).
- **Rekomendasi:** batasan yang mencegah nilai mustahil; contoh format dan input yang toleran (`references/forms.md` bagian 4.6); default yang aman; jarak dan perbedaan visual antara aksi aman dan berbahaya (Lensa 4 dan Lensa 2 kelompok G); ringkasan sebelum kirim untuk proses berisiko (WCAG 3.3.4).

### 5.8 Aksi destruktif: konfirmasi atau undo
- **Prinsip:** konfirmasi yang terlalu sering membuat pengguna menekan "Ya" tanpa membaca. Pakai undo untuk aksi yang bisa dikembalikan, dan konfirmasi hanya untuk aksi yang tidak bisa dikembalikan atau dampaknya besar.
- **Cek:** dialog konfirmasi untuk aksi kecil yang bisa dibatalkan; tidak ada konfirmasi maupun undo untuk hapus permanen; dialog dengan label "OK" atau "Ya" (Lensa 5); konfirmasi yang tidak menyebut objek dan dampaknya; aksi massal tanpa jumlah item yang terdampak.
- **Rekomendasi:** undo melalui snackbar beberapa detik atau tempat sampah dengan masa simpan; konfirmasi yang menyebut objek, jumlah, dan akibat ("Hapus 12 berkas? Berkas tidak bisa dikembalikan"); untuk aksi sangat berat, minta pengguna mengetik nama objek; tombol konfirmasi menyebut aksinya ("Hapus 12 berkas").

## 6. Penyajian di laporan

- State yang hilang dari bahan review ditulis di "Perlu diverifikasi" sebagai satu baris berisi daftar state, bukan satu temuan per state. Contoh: "State kosong, loading, gagal memuat, dan tanpa izin untuk tabel Riwayat Usulan tidak tersedia di mockup."
- Bila state yang hilang menyangkut tugas utama atau proses berisiko (misalnya tidak ada umpan balik setelah submit pengajuan), jadikan temuan dengan confidence "Perlu verifikasi".
- Untuk input kode atau URL, sebut cara memicu state sebagai bukti ("Dengan jaringan offline di DevTools, tombol Simpan tidak memberi tanda apa pun dan isian hilang setelah reload").

## 7. Pemetaan temuan ke lensa

| Jenis temuan | Dilaporkan di |
|---|---|
| State yang hilang atau umpan balik yang tidak ada sehingga tugas tidak bisa diselesaikan atau hasilnya tidak diketahui | Lensa 1 |
| Perubahan status yang tidak disadari, toast yang terlalu cepat, error jauh dari sumbernya | Lensa 2 kelompok A |
| Status hanya dibedakan warna, status tidak diumumkan ke screen reader, timeout tanpa peringatan, ringkasan sebelum kirim untuk proses berisiko | Lensa 3 (1.4.1, 4.1.3, 2.2.1, 3.3.4) |
| Tampilan state komponen yang tidak konsisten (disabled, loading, error) | Lensa 4 bagian 8.3 |
| Copy empty state, pesan error, dialog konfirmasi | Lensa 5 |
| Loading di jaringan lambat, offline, layout yang melompat | Lensa 6 |
| State fitur AI | Lensa 7 |

Tulis kolom Lensa di tabel temuan dengan nomor lensa dan nama pola, misalnya "1 · State" atau "5 · State". Satu akar masalah dilaporkan sekali.

## 8. Severity dan aturan penulisan temuan

- **Kritis:** data atau input hilang tanpa bisa dipulihkan pada proses berisiko; submit ganda yang menyebabkan pembayaran atau pengajuan dobel; aksi destruktif permanen tanpa konfirmasi maupun undo.
- **Tinggi:** tidak ada umpan balik setelah aksi penting sehingga pengguna tidak tahu berhasil atau tidak; error yang tidak memberi jalan keluar; state tanpa izin yang membingungkan pada tugas utama.
- **Sedang:** empty state tanpa arahan; loading tanpa indikator yang memadai; konfirmasi berlebihan untuk aksi yang bisa dibatalkan.
- **Rendah:** variasi kecil dalam penyajian state yang tidak memengaruhi pemahaman.

Aturan penulisan:
- Sebut layar atau area, state, dan cara memicunya.
- Sebut alasan kontekstual (contoh: "karena pengajuan hanya dibuka setahun sekali dan tenggatnya ketat, dosen yang tidak yakin pengajuannya terkirim akan mengirim ulang atau menelepon admin").
- Usulan state baru ditulis konkret: isi teks, aksi, dan perilakunya.

## 9. Kesalahan umum saat menilai

- **Menilai hanya state ideal.** Selalu susun inventaris state, walaupun bahan hanya satu screenshot.
- **Melaporkan setiap state yang hilang sebagai temuan terpisah.** Gabungkan menjadi satu baris "Perlu diverifikasi" kecuali state itu menyangkut tugas utama.
- **Menyarankan konfirmasi untuk semua aksi.** Konfirmasi berlebihan melatih pengguna menekan "Ya" tanpa membaca. Pilih undo bila memungkinkan.
- **Menyarankan spinner untuk semua loading.** Konten yang bisa dimuat bertahap lebih baik dengan skeleton atau muat sebagian.
- **Mengulang pedoman pesan error.** Copy error dinilai di Lensa 5; file ini menilai keberadaan, posisi, dan perilaku state.
