<!--
TEMPLATE LAPORAN COMPREHENSIVE DESIGN REVIEW

Cara mengisi (hapus komentar ini dari laporan akhir):
- Anggap pembacanya orang sibuk yang bukan desainer. Bagian 1 harus bisa dibaca dan dipahami dalam satu menit.
- Pakai kalimat pendek dan kata sehari-hari. Istilah teknis bahasa Inggris (misalnya severity, flow, quick wins)
  tetap dipakai, lalu dijelaskan singkat di Glosarium.
- ID temuan = huruf severity + nomor urut. K = Kritis, T = Tinggi, S = Sedang, R = Rendah. Contoh: K-01, T-03.
- Temuan Kritis dan Tinggi wajib punya kartu detail di bagian 4. Temuan Sedang dan Rendah cukup ditulis di tabel
  bagian 3, kecuali perlu contoh sebelum dan sesudah.
- Satu kartu = satu masalah. Kalau masalah yang sama muncul di banyak tempat, jadikan satu kartu dengan beberapa contoh.
- Hapus bagian opsional yang tidak dipakai. Jangan tinggalkan placeholder [ ... ] di laporan akhir.
-->

# Design Review: [Nama layar, fitur, atau flow]

| | |
|---|---|
| **Yang direview** | [Nama layar atau flow, plus versi atau tanggal desainnya] |
| **Bahan yang diterima** | [Screenshot / Figma / URL / kode / copy deck] |
| **Yang dicek** | [Lensa yang dipakai, misalnya "Lensa 1 sampai 6. Lensa 7 tidak dipakai karena tidak ada fitur AI"] |
| **Tanggal review** | [Tanggal] |

---

## 1. Ringkasan satu menit

**Kesimpulan:** [Satu atau dua kalimat. Contoh: "Pengajuan bisa diselesaikan di laptop, tetapi sulit di ponsel. Dosen juga bisa tidak sengaja menghapus usulannya."]

**Status:** [Siap dipakai / Siap, tinggal perbaikan kecil / Perlu diperbaiki dulu sebelum rilis / Perlu dirancang ulang]

**Jumlah temuan menurut severity (tingkat keparahan):**

| Kritis | Tinggi | Sedang | Rendah |
|:---:|:---:|:---:|:---:|
| [n] | [n] | [n] | [n] |

**Tiga hal yang paling perlu diperbaiki:**
1. **[K-01] [Judul singkat]:** [akibatnya bagi pengguna, dalam satu kalimat].
2. **[T-01] [Judul singkat]:** [akibatnya bagi pengguna].
3. **[T-02] [Judul singkat]:** [akibatnya bagi pengguna].

**Yang sudah baik:** [Satu kalimat. Contoh: "Label form ada di atas kolom isian, dan status usulan ditulis dengan teks, bukan hanya dibedakan warna."]

---

## 2. Kondisi per lensa

<!-- Isi status dengan: Baik / Perlu perhatian / Bermasalah. Tambahkan skor 1 sampai 5 hanya kalau pengguna memintanya. -->

| Lensa (sudut pandang yang dicek) | Status | Catatan singkat |
|---|---|---|
| 1. Tugas utama: bisakah pengguna menyelesaikan tujuannya? | [Status] | [Satu kalimat] |
| 2. UX psychology: apakah desain cocok dengan cara orang berpikir dan memutuskan? | [Status] | [Satu kalimat] |
| 3. Aksesibilitas (WCAG 2.2): bisakah dipakai orang dengan disabilitas? | [Status] | [Contoh: "5 masalah di level AA, 3 hal bisa ditingkatkan ke level AAA"] |
| 4. Hierarki visual dan konsistensi: apakah yang penting terlihat duluan, dan tampilannya seragam? | [Status] | [Satu kalimat] |
| 5. UX writing: apakah teksnya jelas dan mudah dipahami? | [Status] | [Satu kalimat] |
| 6. Responsif dan konteks penggunaan: apakah tetap nyaman di ponsel dan situasi nyata? | [Status] | [Satu kalimat] |
| 7. Fitur AI: apakah fitur AI-nya jelas dan bisa dipercaya? | [Status atau "Tidak dipakai"] | [Satu kalimat] |

---

## 3. Daftar temuan

<!--
Urutkan dari severity paling tinggi.
Isi kolom Confidence dengan "Terkonfirmasi" atau "Perlu verifikasi", dan kolom Effort dengan Kecil, Sedang, atau Besar.
Keterangan di bawah tabel tetap ditampilkan di laporan supaya pembaca paham arti kedua kolom itu.
-->

| ID | Temuan | Lensa | Dasar penilaian | Severity | Confidence | Effort |
|---|---|---|---|---|---|---|
| K-01 | [Judul singkat] | [6] | [WCAG 1.4.10] | Kritis | Terkonfirmasi | [Sedang] |
| T-01 | [Judul singkat] | [1, 4] | [Focal point] | Tinggi | Terkonfirmasi | [Kecil] |
| S-01 | [Judul singkat] | [5] | [Inverted pyramid] | Sedang | Perlu verifikasi | [Kecil] |

**Confidence** (seberapa pasti temuan ini): *Terkonfirmasi* berarti terlihat atau terukur langsung; *Perlu verifikasi* berarti dugaan kuat yang masih perlu dicek.
**Effort** (perkiraan besar pekerjaan perbaikan): *Kecil* kurang dari 1 hari, *Sedang* beberapa hari, *Besar* lebih dari 1 sprint atau perlu riset dulu.

---

## 4. Detail temuan

### K-01 · [Judul singkat yang langsung menyebut masalahnya]

| Severity | Confidence | Lensa | Dasar penilaian | Lokasi | Effort |
|---|---|---|---|---|---|
| Kritis | Terkonfirmasi | [6 Responsif] | [WCAG 1.4.10 Reflow (AA)] | [Bagian yang bermasalah, misalnya "tabel Riwayat Usulan"] | [Sedang] |

**Masalahnya apa.** [Ceritakan apa yang terjadi dengan bahasa sehari-hari.]

**Akibatnya bagi pengguna.** [Kenapa ini penting. Sebut siapa yang kena dan dalam situasi apa.]

**Buktinya.** [Angka hasil ukur, hasil skrip, atau screenshot. Contoh: "Di layar selebar 360px, halaman melebar jadi 844px sehingga harus digeser ke samping (responsif-360.png)."]

**Saran perbaikan.**
- [Langkah perbaikan utama]
- [Langkah tambahan, kalau ada]

<!-- Untuk temuan soal teks, tambahkan:
| Sebelum | Sesudah |
|---|---|
| "[teks asli]" | "[usulan teks baru]" |
-->

---

## 5. Quick wins

<!-- Perbaikan yang mudah dan cepat, tapi hasilnya terasa. Bisa langsung dijadikan tiket. -->

- [ ] **[ID]** [Apa yang harus dilakukan]
- [ ] **[ID]** [Apa yang harus dilakukan]

---

## 6. Yang sudah baik dan perlu dipertahankan

- [Hal yang sudah baik, dan kenapa itu baik]
- [Hal yang sudah baik, dan kenapa itu baik]

---

## 7. Perlu diverifikasi

<!-- Hal yang belum bisa dipastikan dari bahan yang ada. -->

| Yang perlu dicek | Kenapa belum bisa dipastikan | Cara mengeceknya |
|---|---|---|
| [Contoh: urutan baca screen reader] | [Bahan yang diterima hanya screenshot] | [Coba langsung dengan NVDA atau VoiceOver] |

---

## 8. Konteks dan asumsi

**Profil konteks** (gambaran siapa penggunanya dan bagaimana mereka memakai produk ini)

| Hal | Isi | Sumber informasi |
|---|---|---|
| User profile (siapa penggunanya) | [Siapa mereka, domain expertise (seberapa paham bidangnya), tech literacy (seberapa terbiasa dengan teknologi)] | [Dari pengguna skill / asumsi] |
| Usage frequency (seberapa sering dipakai) | [Setiap hari / sesekali] | |
| Switching cost (wajib pakai atau bisa pindah?) | [Wajib memakai / bisa pindah ke produk lain] | |
| Primary task (tugas yang paling sering) | [Mengisi form, membaca, membandingkan, memantau] | |
| Information density (seberapa banyak informasi di layar) | [Rendah sampai sangat tinggi] | |
| Usage context (perangkat dan kondisi pemakaian) | [Laptop, ponsel, kualitas internet, lingkungan sekitar] | |
| Emotional load (seberapa tegang atau berisiko situasinya) | [Santai dan rutin / tegang, misalnya dikejar tenggat] | |

**Asumsi yang dipakai:** [Hal-hal yang dianggap benar karena belum ada datanya, dan ikut memengaruhi penilaian.]

**Prinsip yang dikesampingkan** (prinsip yang sengaja tidak dinilai)

| Prinsip | Alasan |
|---|---|
| [Contoh: Rule of thirds] | [Layar ini form untuk bekerja, jadi aturan komposisi foto tidak relevan] |

---

## 9. Ringkasan untuk stakeholder (opsional)

<!-- Pakai kalau laporan ini akan dibawa ke manajemen, tim bisnis, atau klien. -->

- **Dasar temuan:** [Prinsip, kriteria WCAG, atau data riset yang dijadikan pegangan.]
- **Kalau diperbaiki:** Kalau kita [perbaikan], maka [masalah pengguna] selesai dan [manfaat bisnis atau operasional] meningkat.
- **Dari sisi pengguna:** [Satu cerita nyata tentang pengguna yang kena masalah ini.]

---

## Lampiran

**Hasil pengecekan otomatis:** [Lokasi file ringkasan-otomatis.md dan laporan detailnya, atau "Tidak dijalankan karena bahan yang diterima hanya screenshot".]

**Cara review ini dilakukan:** Desain dicek dari 7 sudut pandang (lensa) menurut skill Comprehensive Design Review. Prinsip yang dipakai dipilih dan diberi bobot sesuai profil konteks di bagian 8. Pengecekan otomatis hanya bisa menangkap sebagian masalah. Hal yang perlu diuji dengan pengguna sungguhan ada di bagian 7.

**Glosarium**

| Istilah | Artinya |
|---|---|
| [Contoh: Reflow] | [Isi halaman menyesuaikan lebar layar, jadi tidak perlu digeser ke samping] |
