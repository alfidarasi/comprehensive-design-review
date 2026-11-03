<!--
TEMPLATE LAPORAN COMPREHENSIVE DESIGN REVIEW

Aturan pengisian (hapus komentar ini di laporan akhir):
- Tulis untuk pembaca yang sibuk dan bukan desainer. Bagian 1 harus bisa dipahami dalam satu menit.
- ID temuan: huruf severity + nomor urut. K = Kritis, T = Tinggi, S = Sedang, R = Rendah. Contoh: K-01, T-03.
- Kartu detail (bagian 4) wajib untuk Kritis dan Tinggi. Sedang dan Rendah cukup di tabel bagian 3,
  kecuali butuh contoh sebelum dan sesudah.
- Satu kartu untuk satu masalah. Masalah yang berulang di banyak tempat digabung menjadi satu kartu dengan beberapa contoh.
- Hapus bagian opsional yang tidak dipakai. Jangan menyisakan placeholder [ ... ].
- Istilah teknis yang dipakai di laporan dijelaskan singkat di Glosarium.
-->

# Design Review: [Nama layar, fitur, atau flow]

| | |
|---|---|
| **Yang direview** | [Nama layar atau flow, versi atau tanggal desain] |
| **Jenis input** | [Screenshot / Figma / URL / kode / copy deck] |
| **Cakupan** | [Lensa yang dikerjakan, misalnya "Semua lensa (1 sampai 6), Lensa 7 tidak berlaku"] |
| **Tanggal review** | [Tanggal] |

---

## 1. Ringkasan satu menit

**Kesimpulan:** [Satu atau dua kalimat. Contoh: "Alur pengajuan bisa diselesaikan di desktop, tetapi gagal di ponsel dan berisiko membuat dosen menghapus usulan tanpa sengaja."]

**Status:** [Siap dipakai / Siap dengan perbaikan kecil / Perlu perbaikan sebelum rilis / Perlu dirancang ulang]

| Kritis | Tinggi | Sedang | Rendah |
|:---:|:---:|:---:|:---:|
| [n] | [n] | [n] | [n] |

**Tiga hal yang paling perlu diperbaiki:**
1. **[K-01] [Judul singkat]:** [dampak ke pengguna dalam satu kalimat].
2. **[T-01] [Judul singkat]:** [dampak].
3. **[T-02] [Judul singkat]:** [dampak].

**Yang sudah baik:** [satu kalimat, misalnya "Label form berada di atas field dan status usulan memakai teks, tidak hanya warna."]

---

## 2. Kondisi per lensa

<!-- Status: Baik / Perlu perhatian / Bermasalah. Tambahkan skor 1 sampai 5 hanya bila pengguna memintanya. -->

| Lensa | Status | Catatan singkat |
|---|---|---|
| 1. Tugas utama | [Status] | [Satu kalimat] |
| 2. UX psychology | [Status] | [Satu kalimat] |
| 3. Aksesibilitas (WCAG 2.2) | [Status] | [Contoh: "5 pelanggaran AA, 3 peluang AAA"] |
| 4. Hierarki visual dan konsistensi | [Status] | [Satu kalimat] |
| 5. UX writing | [Status] | [Satu kalimat] |
| 6. Responsif dan konteks penggunaan | [Status] | [Satu kalimat] |
| 7. Fitur AI | [Status atau "Tidak berlaku"] | [Satu kalimat] |

---

## 3. Daftar temuan

<!-- Urutkan dari severity tertinggi. Usaha: Kecil (kurang dari 1 hari), Sedang (beberapa hari), Besar (lebih dari 1 sprint atau butuh riset). -->

| ID | Temuan | Lensa | Prinsip atau kriteria | Severity | Keyakinan | Usaha |
|---|---|---|---|---|---|---|
| K-01 | [Judul singkat] | [6] | [WCAG 1.4.10] | Kritis | Terkonfirmasi | [Sedang] |
| T-01 | [Judul singkat] | [1, 4] | [Focal point] | Tinggi | Terkonfirmasi | [Kecil] |
| S-01 | [Judul singkat] | [5] | [Inverted pyramid] | Sedang | Perlu verifikasi | [Kecil] |

---

## 4. Detail temuan

### K-01 · [Judul singkat yang menyebut masalahnya]

| Severity | Keyakinan | Lensa | Prinsip atau kriteria | Lokasi | Usaha |
|---|---|---|---|---|---|
| Kritis | Terkonfirmasi | [6 Responsif] | [WCAG 1.4.10 Reflow (AA)] | [Elemen spesifik, misalnya "tabel Riwayat Usulan"] | [Sedang] |

**Masalah.** [Apa yang terjadi, dengan bahasa sederhana.]

**Dampak ke pengguna.** [Kenapa ini penting untuk pengguna dan konteks ini. Sebut siapa yang terdampak dan dalam situasi apa.]

**Bukti.** [Nilai terukur, hasil skrip, atau screenshot. Contoh: "Di lebar 360px, lebar halaman menjadi 844px (responsif-360.png)."]

**Rekomendasi.**
- [Langkah perbaikan utama]
- [Langkah tambahan bila ada]

<!-- Untuk temuan copy, tambahkan:
| Sebelum | Sesudah |
|---|---|
| "[teks asli]" | "[usulan]" |
-->

---

## 5. Quick wins

<!-- Perbaikan berdampak besar dengan usaha kecil. Bisa langsung dijadikan tiket. -->

- [ ] **[ID]** [Tindakan konkret]
- [ ] **[ID]** [Tindakan konkret]

---

## 6. Yang sudah baik dan perlu dipertahankan

- [Hal yang baik dan alasannya]
- [Hal yang baik dan alasannya]

---

## 7. Perlu diverifikasi

| Hal yang dicek | Kenapa belum bisa dipastikan | Cara mengecek |
|---|---|---|
| [Contoh: urutan baca pembaca layar] | [Input hanya screenshot] | [Uji dengan NVDA atau VoiceOver] |

---

## 8. Konteks dan asumsi

**Profil konteks**

| Dimensi | Isi | Sumber |
|---|---|---|
| Pengguna | [Siapa, keahlian domain, keakraban teknologi] | [Dari pengguna skill / asumsi] |
| Frekuensi pemakaian | [Harian / sesekali] | |
| Keterikatan | [Wajib memakai / bisa pindah] | |
| Tugas dominan | [Mengisi form, membaca, membandingkan, memantau] | |
| Kepadatan informasi | [Rendah sampai tinggi] | |
| Perangkat dan kondisi | [Desktop, ponsel, jaringan, lingkungan] | |
| Muatan emosional | [Rutin / menegangkan, misalnya tenggat] | |

**Asumsi yang dibuat:** [Daftar asumsi yang memengaruhi penilaian.]

**Prinsip yang dikesampingkan**

| Prinsip | Alasan |
|---|---|
| [Contoh: Rule of thirds] | [Layar ini form kerja, prinsip komposisi tidak relevan] |

---

## 9. Ringkasan untuk stakeholder (opsional)

<!-- Pakai bila laporan dibawa ke manajemen, tim bisnis, atau klien. -->

- **Dasar temuan:** [Prinsip, kriteria WCAG, atau data riset yang dipakai.]
- **Bila diperbaiki:** Bila kita [perbaikan], masalah [masalah pengguna] teratasi dan [nilai bisnis atau operasional] meningkat.
- **Dari sudut pandang pengguna:** [Satu skenario konkret pengguna yang terdampak.]

---

## Lampiran

**Hasil pemeriksaan otomatis:** [Path ke ringkasan-otomatis.md dan laporan detail, atau "Tidak dijalankan karena input berupa screenshot".]

**Cara review dilakukan:** Review memakai 7 lensa skill Comprehensive Design Review. Prinsip dipilih dan diberi bobot sesuai profil konteks. Pemeriksaan otomatis hanya menangkap sebagian masalah; hal yang butuh pengguna nyata tercantum di bagian 7.

**Glosarium**

| Istilah | Arti singkat |
|---|---|
| [Contoh: Reflow] | [Konten menyesuaikan lebar layar tanpa perlu menggeser ke samping] |
