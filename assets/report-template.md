<!--
TEMPLATE LAPORAN COMPREHENSIVE DESIGN REVIEW

Cara mengisi (hapus komentar ini dari laporan akhir):
- Laporan punya dua lapis. Isi utama (bagian 1 sampai 8) ditulis untuk pembaca awam: pimpinan, PM, klien, atau
  siapa pun yang bukan desainer. Lampiran A ditulis untuk tim desain dan developer (lensa, kriteria, confidence,
  effort, bukti teknis).
- Di isi utama: tanpa kode, tanpa nama lensa, tanpa nomor kriteria WCAG, tanpa istilah teknis yang tidak dijelaskan.
  Bila istilah teknis memang perlu, jelaskan langsung di kalimat yang sama.
- Nomor temuan adalah angka biasa (1, 2, 3, ...), diurutkan dari prioritas tertinggi. Nomor yang sama dipakai di
  semua bagian, di penanda screenshot, dan di Lampiran A.
- Label prioritas selalu ditulis lengkap: ikon warna dan teksnya. Ikon wajib ada supaya prioritas terlihat sekilas;
  teks wajib ada supaya maknanya tidak hanya bergantung pada warna.
    🔴 Harus diperbaiki sebelum dipakai   (severity Kritis)
    🟠 Segera diperbaiki                  (severity Tinggi)
    🟡 Perlu diperbaiki                   (severity Sedang)
    ⚪ Penyempurnaan kecil                (severity Rendah)
- Temuan 🔴 dan 🟠 ditulis sebagai kartu lengkap. Temuan 🟡 dan ⚪ cukup satu sampai dua kalimat.
- Satu temuan = satu masalah. Masalah yang sama di banyak tempat digabung menjadi satu temuan dengan beberapa contoh.
- Hapus bagian opsional yang tidak dipakai. Jangan tinggalkan placeholder [ ... ] di laporan akhir.
-->

# Design Review: [Nama layar, fitur, atau flow]

| | |
|---|---|
| **Yang direview** | [Nama layar atau flow, plus versi atau tanggal desainnya] |
| **Untuk siapa** | [Siapa pengguna produknya, misalnya "dosen yang mengajukan kenaikan jabatan 1 sampai 2 kali setahun, kadang dari ponsel"] |
| **Tanggal review** | [Tanggal] |

---

## 1. Ringkasan satu menit

**Kesimpulan:** [Satu atau dua kalimat. Contoh: "Pengajuan bisa diselesaikan di laptop, tetapi sulit di ponsel. Dosen juga bisa tidak sengaja menghapus usulannya."]

**Status:** [Siap dipakai / Siap, tinggal perbaikan kecil / Perlu diperbaiki dulu sebelum dipakai / Perlu dirancang ulang]

**Jumlah masalah yang ditemukan:**

| 🔴 Harus diperbaiki sebelum dipakai | 🟠 Segera diperbaiki | 🟡 Perlu diperbaiki | ⚪ Penyempurnaan kecil |
|:---:|:---:|:---:|:---:|
| [n] | [n] | [n] | [n] |

**Tiga hal yang paling perlu diperbaiki:**
1. 🔴 **[Judul singkat]:** [akibatnya bagi pengguna, dalam satu kalimat].
2. 🟠 **[Judul singkat]:** [akibatnya bagi pengguna].
3. 🟠 **[Judul singkat]:** [akibatnya bagi pengguna].

<!-- Bila review mencakup flow, tambahkan satu kalimat angka. Contoh:
**Alur pengajuan:** sekarang 7 layar dan 31 isian; bisa dipangkas menjadi 4 layar dan 18 isian. -->

**Yang sudah baik:** [Satu kalimat. Contoh: "Label form ada di atas kolom isian, dan status usulan ditulis dengan teks, bukan hanya dibedakan warna."]

---

## 2. Letak masalah di layar (bila ada screenshot)

<!--
Pakai bila bahan berupa gambar, mockup yang bisa diekspor, atau URL. Buat dengan scripts/annotate_screenshot.py.
Satu gambar per layar. Penanda bernomor sama dengan nomor temuan. Hapus bagian ini bila tidak ada gambar.
-->

![Layar [nama] dengan penanda nomor temuan]([nama-file]-penanda.png)

*Angka di gambar sama dengan nomor masalah di bagian 3.*

---

## 3. Masalah yang ditemukan

<!--
Urutkan dari prioritas tertinggi. Untuk flow dengan tiga layar atau lebih, boleh dikelompokkan lagi per layar
di dalam setiap prioritas, dengan subjudul "Di [nama layar]".
Baris "Perlu dicek dulu" hanya ditulis bila temuan masih dugaan (confidence "Perlu verifikasi").
-->

### 🔴 Harus diperbaiki sebelum dipakai

#### 1. [Judul singkat yang langsung menyebut masalahnya, misalnya "Halaman tidak bisa dipakai di ponsel"]

**Di mana:** [Bagian yang bermasalah, misalnya "tabel Riwayat Usulan"]

**Masalahnya:** [Apa yang terjadi, dengan bahasa sehari-hari.]

**Akibatnya:** [Siapa yang kena, dalam situasi apa, dan apa yang mereka alami.]

**Saran:**
- [Langkah perbaikan utama]
- [Langkah tambahan, kalau ada]

<!-- Untuk temuan soal teks, tambahkan:
| Sekarang | Usulan |
|---|---|
| "[teks asli]" | "[usulan teks baru]" |
-->

<!-- Bila masih dugaan:
**Perlu dicek dulu:** [Apa yang belum pasti dan cara memastikannya, misalnya "coba langsung di ponsel Android dengan browser bawaan WhatsApp".] -->

*Perkiraan kerja perbaikan: [kecil (kurang dari sehari) / sedang (beberapa hari) / besar (lebih dari dua minggu atau perlu riset dulu)]*

### 🟠 Segera diperbaiki

#### 2. [Judul singkat]

[Format sama dengan kartu di atas.]

### 🟡 Perlu diperbaiki

- **4. [Judul singkat]** ([di mana]): [masalah dan saran dalam satu sampai dua kalimat].
- **5. [Judul singkat]** ([di mana]): [masalah dan saran].

### ⚪ Penyempurnaan kecil

- **8. [Judul singkat]** ([di mana]): [masalah dan saran dalam satu kalimat].

---

## 4. Alur tugas: sekarang dan usulan (bila review mencakup flow)

<!--
Isi bila review mencakup flow (Lensa 1B) atau journey (Lensa 1C). Hapus bila review hanya satu layar.
Satu tabel per tugas utama, maksimal dua tugas. Tulis "perkiraan" bila angka berasal dari screenshot.
Kolom "Beban" diisi Ringan / Sedang / Berat.
-->

**Tugas:** [Dari sudut pandang pengguna, misalnya "Pegawai tahu pengajuan cutinya sudah diterima atasan"]
**Mulai dari:** [Tempat pengguna biasanya mulai, misalnya "link di email pengingat"]

| Langkah | Layar | Yang dilakukan pengguna | Beban | Bisa diperbaiki? | Masalah no. |
|---|---|---|---|---|---|
| 1 | [Beranda] | [Mencari menu Cuti di dalam menu Layanan] | [Sedang] | [Taruh menu Cuti di beranda] | [6] |
| 2 | [Form cuti] | [Mengisi 12 isian, 5 sudah ada di profil] | [Berat] | [Isi otomatis 5 isian] | [3] |
| 3 | [Konfirmasi] | [Klik "Lanjut" tanpa informasi baru] | [Ringan] | [Hapus layar ini] | [7] |

| | Sekarang | Usulan |
|---|:---:|:---:|
| Jumlah layar | [7] | [4] |
| Klik atau ketukan | [n] | [n] |
| Isian yang diketik manual | [31] | [18] |
| Pilihan yang harus diputuskan | [n] | [n] |
| Pindah ke aplikasi atau tab lain | [1] | [0] |

**Alur usulan:**
1. [Langkah 1 baru]
2. [Langkah 2 baru]
3. [Langkah 3 baru]

<!-- Perjalanan di luar layar: pakai hanya bila Lensa 1C dikerjakan. -->

| Tahap | Lewat apa | Yang dialami pengguna | Di mana putusnya | Masalah no. |
|---|---|---|---|---|
| [Menunggu persetujuan] | [Email, aplikasi] | [Tidak tahu apakah atasan sudah membaca pengajuan] | [Status hanya "Diproses" selama 5 hari] | [2] |

---

## 5. Perbaikan cepat

<!-- Perbaikan yang mudah, kurang dari sehari, tapi hasilnya terasa. Bisa langsung dijadikan tiket. -->

- [ ] **No. [n]:** [Apa yang harus dilakukan]
- [ ] **No. [n]:** [Apa yang harus dilakukan]

---

## 6. Yang sudah baik dan perlu dipertahankan

- [Hal yang sudah baik, dan kenapa itu baik]
- [Hal yang sudah baik, dan kenapa itu baik]

---

## 7. Yang belum bisa dipastikan (perlu diverifikasi)

<!-- Hal yang belum bisa dinilai dari bahan yang ada. Tulis dengan bahasa awam; detail teknis di Lampiran A. -->

| Yang perlu dicek | Kenapa belum bisa dipastikan | Cara mengeceknya |
|---|---|---|
| [Contoh: apakah halaman bisa dibacakan dengan lancar oleh aplikasi pembaca layar untuk tunanetra] | [Bahan yang diterima hanya screenshot] | [Coba langsung dengan NVDA atau VoiceOver] |

---

## 8. Ringkasan untuk stakeholder (opsional)

<!-- Pakai kalau laporan ini akan dibawa ke manajemen, tim bisnis, atau klien. -->

- **Dasar temuan:** [Prinsip, standar aksesibilitas, atau data riset yang dijadikan pegangan, dalam bahasa awam.]
- **Kalau diperbaiki:** Kalau kita [perbaikan], maka [masalah pengguna] selesai dan [manfaat bisnis atau operasional] meningkat.
- **Dari sisi pengguna:** [Satu cerita konkret tentang pengguna yang kena masalah ini.]

---

## Lampiran A. Untuk tim desain dan developer

### A1. Daftar temuan teknis

<!--
Nomor sama dengan isi utama. Kolom Lensa: nomor lensa, ditambah nama pola bila berasal dari pemeriksaan pola
(misalnya "1 · State", "5 · Form"). Confidence: Terkonfirmasi / Perlu verifikasi. Effort: Kecil / Sedang / Besar.
-->

| No. | Temuan | Severity | Lensa | Dasar penilaian | Confidence | Effort | Bukti |
|---|---|---|---|---|---|---|---|
| 1 | [Judul singkat] | 🔴 Kritis | [6] | [WCAG 1.4.10 Reflow (AA)] | Terkonfirmasi | Sedang | [Lebar 360px, konten melebar jadi 844px (responsif-360.png)] |
| 2 | [Judul singkat] | 🟠 Tinggi | [1 · State] | [Umpan balik setelah submit] | Perlu verifikasi | Kecil | [Mockup tidak punya layar sukses] |

**Severity:** 🔴 Kritis = tugas utama gagal atau sebagian pengguna tidak bisa memakai fitur; 🟠 Tinggi = error, kebingungan berulang, atau risiko keputusan salah; 🟡 Sedang = memperlambat tetapi tugas tetap selesai; ⚪ Rendah = kosmetik atau peningkatan kecil.
**Confidence:** *Terkonfirmasi* berarti terlihat atau terukur langsung; *Perlu verifikasi* berarti dugaan kuat yang masih perlu dicek.
**Effort:** *Kecil* kurang dari 1 hari, *Sedang* beberapa hari, *Besar* lebih dari 1 sprint atau perlu riset dulu.

### A2. Kondisi per lensa

<!-- Status: Baik / Perlu perhatian / Bermasalah. Skor 1 sampai 5 hanya kalau pengguna memintanya. -->

| Lensa | Status | Catatan singkat |
|---|---|---|
| 1. Tugas utama, flow, dan journey | [Status] | [Contoh: "Pengajuan bisa selesai, tetapi butuh 7 layar; 3 di antaranya bisa dihapus atau digabung"] |
| 2. UX psychology | [Status] | [Satu kalimat] |
| 3. Aksesibilitas (WCAG 2.2) | [Status] | [Contoh: "5 pelanggaran level AA, 3 peluang AAA"] |
| 4. Hierarki visual dan konsistensi | [Status] | [Satu kalimat] |
| 5. UX writing | [Status] | [Satu kalimat] |
| 6. Responsif dan konteks penggunaan | [Status] | [Satu kalimat] |
| 7. Fitur AI | [Status atau "Tidak dipakai"] | [Satu kalimat] |
| Pemeriksaan pola | [State, Form, Navigasi, Data: yang dijalankan] | [Satu kalimat] |

### A3. Aksesibilitas (bila Lensa 3 dikerjakan)

<!-- Pisahkan tiga kelompok sesuai SKILL.md Lensa 3. Cantumkan nomor kriteria, level, dan bukti terukur. -->

- **Pelanggaran A/AA:** [daftar nomor temuan dan kriterianya]
- **Peluang AAA:** [daftar]
- **Perlu diuji manual:** [kriteria dan cara mengujinya]

### A4. Konteks dan asumsi

**Profil konteks**

| Hal | Isi | Sumber informasi |
|---|---|---|
| User profile | [Siapa mereka, domain expertise, tech literacy] | [Dari pengguna skill / asumsi] |
| Usage frequency | [Setiap hari / sesekali] | |
| Switching cost | [Wajib memakai / bisa pindah ke produk lain] | |
| Primary task | [Mengisi form, membaca, membandingkan, memantau] | |
| Information density | [Rendah sampai sangat tinggi] | |
| Usage context | [Perangkat, kualitas internet, lingkungan sekitar] | |
| Emotional load | [Santai dan rutin / tegang, misalnya dikejar tenggat] | |

**Bahan yang diterima:** [Screenshot / Figma / URL / kode / copy deck]

**Yang dicek:** [Lensa dan pemeriksaan pola yang dipakai, misalnya "Lensa 1 sampai 6, ditambah pola State dan Form. Lensa 7 tidak dipakai karena tidak ada fitur AI"]

**Asumsi yang dipakai:** [Hal yang dianggap benar karena belum ada datanya dan ikut memengaruhi penilaian.]

**Prinsip yang dikesampingkan**

| Prinsip | Alasan |
|---|---|
| [Contoh: Rule of thirds] | [Layar ini form untuk bekerja, jadi aturan komposisi foto tidak relevan] |

### A5. Hasil pengecekan otomatis dan cara review

**Hasil pengecekan otomatis:** [Lokasi file ringkasan-otomatis.md dan laporan detailnya, atau "Tidak dijalankan karena bahan yang diterima hanya screenshot".]

**Cara review ini dilakukan:** Desain dicek dari 7 sudut pandang (lensa) menurut skill Comprehensive Design Review, ditambah pemeriksaan pola (state, form, navigasi, data display) yang temuannya dimasukkan ke lensa terkait. Prinsip dipilih dan diberi bobot sesuai profil konteks di A4. Pengecekan otomatis hanya bisa menangkap sebagian masalah; hal yang perlu diuji dengan pengguna sungguhan ada di bagian 7.

### A6. Glosarium

| Istilah | Artinya |
|---|---|
| [Contoh: Reflow] | [Isi halaman menyesuaikan lebar layar, jadi tidak perlu digeser ke samping] |
