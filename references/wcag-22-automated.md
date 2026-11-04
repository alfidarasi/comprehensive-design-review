# Katalog WCAG 2.2 (Level A, AA, AAA) untuk pengujian oleh sistem

Katalog ini memetakan semua 86 kriteria keberhasilan WCAG 2.2 berdasarkan seberapa jauh sistem (skrip, browser otomatis, dan analisis Claude atas kode, DOM, atau gambar) bisa mengujinya tanpa pengujian manual oleh manusia. Kriteria 4.1.1 Parsing sudah dinyatakan usang di WCAG 2.2 dan selalu dianggap terpenuhi, tetapi ID duplikat yang dirujuk atribut ARIA tetap diperiksa lewat 4.1.2.

## Kategori pengujian

- **O (otomatis)**: sistem bisa memutuskan lulus atau gagal dengan confidence tinggi. Temuan diberi confidence "Terkonfirmasi".
- **S (semi-otomatis)**: sistem menemukan kandidat pelanggaran atau sebagian kasus, lalu Claude menilai lebih lanjut dari kode, teks, atau gambar. Temuan yang belum bisa dipastikan diberi confidence "Perlu verifikasi".
- **M (manual)**: butuh penilaian manusia, pengujian dengan screen reader, atau pengguna disabilitas. Sistem tidak menilai kriteria ini; cukup masukkan ke bagian "Perlu diverifikasi" di laporan bila kriterianya relevan dengan layar yang direview.

Label sumber pengujian:
- **[axe]**: aturan axe-core yang dijalankan skrip `scripts/a11y_scan.mjs`.
- **[skrip]**: pemeriksaan tambahan di skrip yang sama.
- **[interaksi]**: skrip Playwright tambahan yang ditulis Claude untuk kasus itu (misalnya mengisi form uji, membuka menu). Hanya jalankan di file lokal, prototipe, atau lingkungan uji, jangan di produksi bila aksinya mengubah data.
- **[Claude]**: analisis Claude atas kode HTML/CSS/JS, teks halaman, atau piksel screenshot.

Catatan penting: scan otomatis rata-rata hanya menangkap sekitar sepertiga masalah aksesibilitas dan bisa menghasilkan false positive (melaporkan masalah yang sebenarnya tidak ada) maupun false negative (melewatkan masalah yang ada). Halaman yang lolos scan belum tentu aksesibel.

## Kemampuan berdasarkan jenis input

| Input | Yang bisa diuji sistem |
|---|---|
| Screenshot atau gambar mockup saja | Kontras teks dan komponen dari piksel (1.4.3, 1.4.6, 1.4.11), perkiraan ukuran target dari skala gambar (2.5.5, 2.5.8), teks di dalam gambar (1.4.5, 1.4.9), informasi yang hanya dibedakan warna (1.4.1), frasa instruksi sensorik di teks yang terbaca (1.3.3), panjang baris dan perataan teks (1.4.8). Kriteria lain masuk "Perlu diverifikasi". |
| Kode HTML/CSS/JS | Semua pemeriksaan statis, ditambah render lokal dengan Playwright sehingga skrip scan bisa dijalankan penuh pada file itu. |
| URL produk atau prototipe | Skrip scan penuh. Akses jaringan dari workspace bisa diblokir; bila begitu, pakai browser yang tersedia di sesi untuk membaca halaman, atau minta pengguna menjalankan skrip/alat scan sendiri dan mengirim hasilnya. |
| Beberapa halaman sekaligus | Pemeriksaan konsistensi antar halaman (2.4.5, 3.2.3, 3.2.4, 3.2.6) dengan membandingkan navigasi, label, dan posisi bantuan. |

Alat scan yang bisa disarankan bila pengguna ingin menjalankan sendiri: axe DevTools (ekstensi Chrome), WAVE (ekstensi Chrome), Oobee (CLI/desktop dari GovTech Singapura), Radikal WCAG Checker (radikal.id/id/wcag), dan Lighthouse (bawaan Chrome DevTools).

## Cara menjalankan skrip scan

```bash
# di folder kerja sementara, bukan di folder proyek pengguna
npm i playwright axe-core
node <folder-skill>/scripts/a11y_scan.mjs <url-atau-file.html> --out laporan-a11y
```

Skrip menghasilkan `laporan-a11y.md` (ringkasan per kriteria) dan `laporan-a11y.json`. Skrip memakai Chromium bawaan Playwright, atau `/usr/bin/google-chrome` bila tersedia. Yang dijalankan skrip:
1. axe-core dengan tag wcag2a, wcag2aa, wcag2aaa, wcag21a, wcag21aa, wcag22aa, dan best-practice.
2. Pemeriksaan DOM statis: ukuran target 24 px dan 44 px beserta pengecualian jarak, label in name, autocomplete, placeholder sebagai label, teks link generik, frasa sensorik, tabindex positif, elemen dengan click handler yang tidak bisa difokus, meta viewport, meta refresh, link tab baru, media, animasi tanpa henti, aturan prefers-reduced-motion, perataan teks dan panjang baris, live region, skip link, CAPTCHA.
3. Uji paste di field password.
4. Penelusuran keyboard dengan Tab: jangkauan, jebakan keyboard, urutan fokus, indikator fokus terlihat (perbandingan piksel fokus dan tidak fokus), dan fokus tertutup elemen fixed/sticky.
5. Reflow di lebar 320 px, perbandingan portrait dan landscape, penambahan spasi teks, pembesaran teks 200%, dan emulasi prefers-reduced-motion.

Tafsirkan hasil skrip, jangan salin mentah. Status `fail` berarti sistem cukup yakin. Status `candidate` harus dikonfirmasi dulu dari kode atau screenshot sebelum masuk tabel temuan.

## 1. Terindra (Perceivable)

| Kriteria | Level | Kategori | Cara sistem menguji | Yang tetap manual |
|---|---|---|---|---|
| 1.1.1 Konten Non-Teks | A | S | [axe] image-alt, input-image-alt, area-alt, svg-img-alt, role-img-alt, object-alt, button-name. [Claude] periksa nilai alt yang berupa nama file, kata generik ("gambar", "foto", "image"), atau diawali "gambar dari..." (screen reader sudah mengumumkan bahwa itu gambar); ikon interaktif yang hanya punya tooltip visual; gambar dekoratif yang diberi deskripsi panjang alih-alih `alt=""`. | Apakah isi alt akurat dan setara maknanya dengan gambar; alternatif CAPTCHA. |
| 1.2.1 Hanya Audio dan Hanya Video (Rekaman) | A | S | [skrip] deteksi `<audio>`, `<video>`, dan embed media. [Claude] cari link transkrip di dekat pemutar. Video latar yang murni dekoratif tidak wajib transkrip. | Kesetaraan isi transkrip. |
| 1.2.2 Caption (Rekaman) | A | S | [skrip] `<video>` tanpa `<track kind="captions/subtitles">`; embed YouTube/Vimeo ditandai untuk dicek. | Caption yang tertanam di video, akurasi dan sinkronisasi caption. |
| 1.2.3 Deskripsi Audio atau Alternatif Media (Rekaman) | A | S | [skrip] tidak ada `<track kind="descriptions">`; [Claude] cari transkrip lengkap. | Kecukupan deskripsi. |
| 1.2.4 Caption (Siaran Langsung) | AA | M | Sistem hanya bisa mendeteksi adanya pemutar siaran langsung. | Ketersediaan dan mutu caption langsung. |
| 1.2.5 Deskripsi Audio (Rekaman) | AA | S | [skrip] track descriptions. | Isi deskripsi audio. |
| 1.2.6 Bahasa Isyarat (Rekaman) | AAA | M | | Seluruhnya. |
| 1.2.7 Deskripsi Audio Diperluas | AAA | M | | Seluruhnya. |
| 1.2.8 Alternatif Media (Rekaman) | AAA | S | [Claude] cari transkrip lengkap untuk setiap video. | Kesetaraan isi. |
| 1.2.9 Hanya Audio (Siaran Langsung) | AAA | M | | Seluruhnya. |
| 1.3.1 Informasi dan Relasi | A | S | [axe] label, list, listitem, definition-list, th-has-data-cells, td-headers-attr, aria-required-children/parent, empty-heading, heading-order, landmark rules. [Claude] teks yang terlihat seperti heading (besar dan tebal) tetapi bukan elemen heading; grup radio tanpa fieldset/legend; tabel tata letak yang memakai markup tabel data. | Apakah struktur mencerminkan makna visual secara utuh. |
| 1.3.2 Urutan yang Bermakna | A | S | [skrip] urutan fokus dibanding posisi visual. [Claude] CSS `order`, `flex-direction: *-reverse`, `grid` penempatan manual, posisi absolut yang membuat urutan DOM berbeda dari urutan visual. | Apakah urutan baca screen reader masuk akal. |
| 1.3.3 Karakteristik Sensorik | A | S | [skrip] frasa seperti "tombol hijau", "di sebelah kanan", "ikon bulat". | Konfirmasi bahwa instruksi tidak punya penjelasan lain. |
| 1.3.4 Orientasi | AA | S | [skrip] perbandingan isi portrait dan landscape, media query orientasi. [Claude] panggilan `screen.orientation.lock`. | Apakah pembatasan orientasi memang esensial. |
| 1.3.5 Identifikasi Tujuan Input | AA | O | [axe] autocomplete-valid. [skrip] field data pribadi tanpa autocomplete. | Tidak ada. |
| 1.3.6 Identifikasi Tujuan | AAA | S | [Claude] landmark lengkap, ikon dengan nama yang dapat diprogram, atribut ARIA yang menyatakan tujuan. | Kecukupan secara keseluruhan. |
| 1.4.1 Penggunaan Warna | A | S | [axe] link-in-text-block. [Claude] error hanya ditandai border merah tanpa ikon/teks, grafik yang hanya dibedakan warna, status yang hanya berupa titik warna. Dari screenshot: bandingkan elemen yang hanya berbeda hue. | Konfirmasi makna. |
| 1.4.2 Kontrol Audio | A | O | [skrip] media `autoplay` tanpa `muted`. [Claude] audio yang diputar lewat JavaScript. | Durasi audio lebih dari 3 detik bila dari JS. |
| 1.4.3 Kontras (Minimum) | AA | O | [axe] color-contrast (4.5:1, teks besar 3:1). [Claude] teks di atas gambar atau gradien: sampling piksel dengan rumus di bagian 6 SKILL.md. | Tidak ada, kecuali status axe "incomplete" (latar gambar) yang harus diukur dari piksel. |
| 1.4.4 Mengubah Ukuran Teks | AA | S | [axe] meta-viewport. [skrip] teks terpotong saat diperbesar 200%. | Kehilangan fungsi yang tidak terlihat sebagai teks terpotong. |
| 1.4.5 Teks Berbasis Gambar | AA | S | [Claude] baca gambar di halaman; tandai gambar yang isinya sebagian besar teks (bukan logo). | Pengecualian esensial. |
| 1.4.6 Kontras (Ditingkatkan) | AAA | O | [axe] color-contrast-enhanced (7:1, teks besar 4.5:1). | Sama dengan 1.4.3. |
| 1.4.7 Audio Latar Rendah atau Tanpa Audio Latar | AAA | M | | Seluruhnya. |
| 1.4.8 Presentasi Visual | AAA | S | [skrip] teks justify, panjang baris lebih dari 80 karakter, jarak baris kurang dari 1.5. [Claude] jarak paragraf, lebar kontainer, kemungkinan pengguna memilih warna. | Kemampuan memilih warna latar dan teks. |
| 1.4.9 Teks Berbasis Gambar (Tanpa Pengecualian) | AAA | S | Sama dengan 1.4.5 tanpa pengecualian selain logo. | |
| 1.4.10 Penyusunan Ulang (Reflow) | AA | O | [skrip] scroll horizontal di lebar 320 px dan elemen yang keluar layar (tabel data, peta, dan kode dikecualikan). | Kehilangan konten yang tidak terlihat sebagai overflow. |
| 1.4.11 Kontras Non-Teks | AA | S | [Claude] hitung kontras border input, ikon fungsional, indikator fokus, dan state komponen terhadap warna di sebelahnya, dari CSS atau piksel. | Apakah komponen itu memang perlu untuk memahami UI. |
| 1.4.12 Spasi Teks | AA | O | [skrip] suntik spasi teks WCAG lalu cari teks yang terpotong baru atau makin terpotong. | Teks yang saling tumpang tindih tanpa overflow. |
| 1.4.13 Konten saat Hover atau Fokus | AA | S | [interaksi] hover/fokus pemicu, lalu cek konten tambahan bisa ditutup dengan Esc tanpa memindah pointer, tetap terlihat saat pointer dipindah ke atasnya, dan tidak hilang sendiri. | Tooltip bawaan browser (atribut title) dikecualikan. |

## 2. Dapat Dioperasikan (Operable)

| Kriteria | Level | Kategori | Cara sistem menguji | Yang tetap manual |
|---|---|---|---|---|
| 2.1.1 Keyboard | A | S | [skrip] elemen dengan click handler atau cursor pointer yang tidak bisa difokus; jumlah elemen interaktif yang tercapai lewat Tab. [axe] scrollable-region-focusable, nested-interactive. [interaksi] aktifkan kontrol dengan Enter/Space dan bandingkan hasilnya dengan klik. | Fungsi rumit seperti drag, editor, dan peta. |
| 2.1.2 Tidak Ada Perangkap Keyboard | A | O | [skrip] fokus tertahan di elemen yang sama atau berputar di kelompok kecil. [interaksi] buka modal, tekan Tab dan Esc, pastikan fokus bisa keluar. | Komponen pihak ketiga (iframe, plugin). |
| 2.1.3 Keyboard (Tanpa Pengecualian) | AAA | S | Sama dengan 2.1.1 tanpa pengecualian. | |
| 2.1.4 Shortcut Tombol Karakter | A | S | [Claude] cari listener keydown yang bereaksi pada satu huruf, angka, atau tanda baca tanpa Ctrl/Alt/Meta. [interaksi] tekan huruf tunggal saat fokus di luar input, amati perubahan halaman. | Apakah ada cara mematikan atau mengubah shortcut. |
| 2.2.1 Waktu Bisa Disesuaikan | A | S | [axe] meta-refresh. [Claude] timer sesi, hitung mundur, redirect otomatis di kode. | Apakah pengguna diberi peringatan dan cara memperpanjang. |
| 2.2.2 Jeda, Hentikan, Sembunyikan | A | S | [skrip] animasi tanpa henti, marquee, blink. [interaksi] screenshot berselang 5 detik untuk mendeteksi carousel otomatis, lalu cari tombol jeda. [axe] blink, marquee. | Apakah konten bergerak itu esensial. |
| 2.2.3 Tanpa Batas Waktu | AAA | S | [Claude] adanya batas waktu di kode atau teks. | |
| 2.2.4 Interupsi | AAA | S | [Claude] pop-up atau notifikasi otomatis tanpa opsi menunda. | |
| 2.2.5 Autentikasi Ulang | AAA | M | | Data hilang setelah sesi habis. |
| 2.2.6 Batas Waktu | AAA | M | | Pemberitahuan kehilangan data akibat tidak aktif. |
| 2.3.1 Tiga Kilatan atau di Bawah Ambang Batas | A | S | [interaksi] rekam video halaman atau ambil frame media, hitung perubahan luminans antar frame; lebih dari 3 kilatan per detik pada area besar ditandai. | Penilaian pasti memakai alat khusus seperti PEAT. |
| 2.3.2 Tiga Kilatan | AAA | S | Sama dengan 2.3.1 tanpa ambang area. | |
| 2.3.3 Animasi dari Interaksi | AAA | S | [skrip] tidak ada aturan prefers-reduced-motion; animasi tetap berjalan saat preferensi itu diemulasikan. | Animasi yang esensial. |
| 2.4.1 Lewati Blok | A | O | [axe] bypass, skip-link. [skrip] elemen fokus pertama dan tujuan skip link. | Tidak ada. |
| 2.4.2 Ada Judul Halaman | A | S | [axe] document-title. [Claude] judul deskriptif dan berbeda antar halaman. | Kualitas judul. |
| 2.4.3 Urutan Fokus | A | S | [skrip] tabindex positif dan lompatan fokus ke atas. [interaksi] fokus pindah ke dalam modal saat dibuka dan kembali ke pemicu saat ditutup. | Apakah urutan menjaga makna. |
| 2.4.4 Tujuan Tautan (Dalam Konteks) | A | S | [axe] link-name. [skrip] teks link generik. [Claude] link dengan teks sama tetapi tujuan berbeda. | Apakah konteks sekitar cukup. |
| 2.4.5 Beragam Cara | AA | S | [Claude] pada beberapa halaman: ada pencarian, sitemap, atau navigasi yang konsisten. | Halaman yang merupakan langkah proses dikecualikan. |
| 2.4.6 Judul dan Label | AA | S | [axe] empty-heading. [Claude] heading atau label yang kosong, duplikat, atau generik ("Form", "Data"). | Kualitas deskripsi. |
| 2.4.7 Fokus Terlihat | AA | O | [skrip] perbandingan piksel area elemen saat fokus dan tidak fokus. [Claude] CSS `outline: none` tanpa pengganti. | Indikator yang terlalu samar walau ada perubahan piksel. |
| 2.4.8 Lokasi | AAA | S | [Claude] breadcrumb, `aria-current`, judul halaman yang menunjukkan posisi. | |
| 2.4.9 Tujuan Tautan (Hanya Tautan) | AAA | O | [skrip] teks link generik tanpa nama aksesibel yang menjelaskan tujuan. | |
| 2.4.10 Judul Bagian | AAA | S | [skrip] konten panjang dengan sedikit heading. | |
| 2.4.11 Fokus Tidak Tertutup (Minimum) | AA | O | [skrip] titik sampel elemen terfokus yang seluruhnya tertutup elemen fixed/sticky. | Konten yang dibuka pengguna sendiri (misalnya panel yang bisa ditutup). |
| 2.4.12 Fokus Tidak Tertutup (Ditingkatkan) | AAA | O | [skrip] elemen terfokus yang tertutup sebagian. | |
| 2.4.13 Tampilan Fokus | AAA | S | [skrip] ada atau tidaknya perubahan. [Claude] ukur dari piksel: area indikator minimal setara garis 2 px di sekeliling elemen dan kontras 3:1 antara keadaan fokus dan tidak fokus. | |
| 2.5.1 Gestur Pointer | A | S | [Claude] handler multi-sentuh, pinch, atau swipe tanpa tombol alternatif. | Apakah gestur esensial. |
| 2.5.2 Pembatalan Pointer | A | S | [Claude] aksi dijalankan pada `mousedown`, `pointerdown`, atau `touchstart`. | |
| 2.5.3 Label dalam Nama | A | O | [axe] label-content-name-mismatch. [skrip] aria-label yang tidak memuat teks terlihat. | |
| 2.5.4 Aktuasi Gerakan | A | S | [Claude] listener `devicemotion`/`deviceorientation` dan alternatif UI-nya. | |
| 2.5.5 Ukuran Target (Ditingkatkan) | AAA | O | [skrip] target kurang dari 44x44 CSS px (link di dalam kalimat dikecualikan). | |
| 2.5.6 Mekanisme Input Bersamaan | AAA | S | [Claude] kode yang mematikan jenis input tertentu. | |
| 2.5.7 Gerakan Seret | AA | S | [Claude] elemen `draggable`, library drag-and-drop, slider tanpa input alternatif; cari tombol atau field pengganti. | |
| 2.5.8 Ukuran Target (Minimum) | AA | O | [axe] target-size. [skrip] target kurang dari 24x24 CSS px yang berdekatan (pengecualian jarak). | Pengecualian kontrol bawaan browser dan target yang esensial. |

## 3. Dapat Dimengerti (Understandable)

| Kriteria | Level | Kategori | Cara sistem menguji | Yang tetap manual |
|---|---|---|---|---|
| 3.1.1 Bahasa Halaman | A | O | [axe] html-has-lang, html-lang-valid. [Claude] bahasa yang dideklarasikan sesuai bahasa isi. | |
| 3.1.2 Bahasa Bagian | AA | S | [axe] valid-lang. [Claude] deteksi kalimat berbahasa lain tanpa atribut `lang` (istilah serapan dan nama diri dikecualikan). | |
| 3.1.3 Kata yang Tidak Umum | AAA | S | [Claude] istilah teknis atau jargon tanpa penjelasan atau glosarium. | |
| 3.1.4 Singkatan | AAA | S | [Claude] singkatan tanpa kepanjangan saat pertama muncul atau tanpa `<abbr>`. | |
| 3.1.5 Tingkat Bacaan | AAA | S | [Claude] perkirakan tingkat keterbacaan teks; untuk bahasa Indonesia, nilai panjang kalimat dan kosakata. | Alat ukur baku untuk bahasa Indonesia terbatas. |
| 3.1.6 Pelafalan | AAA | M | | |
| 3.2.1 Saat Fokus | A | S | [interaksi] saat Tab, deteksi navigasi halaman, jendela baru, atau submit form. | |
| 3.2.2 Saat Input | A | S | [interaksi] ubah nilai select, radio, dan checkbox; deteksi navigasi atau submit otomatis tanpa pemberitahuan. [Claude] handler `onchange` yang memicu navigasi. | |
| 3.2.3 Navigasi yang Konsisten | AA | S | [Claude] bandingkan urutan menu navigasi di beberapa halaman. | |
| 3.2.4 Identifikasi yang Konsisten | AA | S | [Claude] komponen dengan fungsi sama yang label atau ikonnya berbeda antar halaman. | |
| 3.2.5 Perubahan Sesuai Permintaan | AAA | S | [skrip] meta refresh, link tab baru tanpa pemberitahuan. | |
| 3.2.6 Bantuan yang Konsisten | A | S | [Claude] posisi relatif mekanisme bantuan (kontak, chat, FAQ) sama di beberapa halaman. | |
| 3.3.1 Identifikasi Kesalahan | A | S | [interaksi] di lingkungan uji, kirim form kosong atau tidak valid; cek muncul pesan teks, `aria-invalid="true"`, dan `aria-describedby` yang menghubungkan pesan ke field. | Kejelasan isi pesan. |
| 3.3.2 Label atau Instruksi | A | O | [axe] label, select-name. [skrip] placeholder sebagai satu-satunya label. [Claude] field wajib tanpa penanda dan format yang tidak dijelaskan. | |
| 3.3.3 Saran Koreksi Kesalahan | AA | S | [interaksi] masukkan format salah; [Claude] nilai apakah pesan memberi saran perbaikan. | |
| 3.3.4 Pencegahan Kesalahan (Hukum, Keuangan, Data) | AA | S | [Claude] untuk form yang berdampak hukum, keuangan, atau mengubah data: ada langkah tinjau, konfirmasi, atau pembatalan. | Kecukupan mekanismenya. |
| 3.3.5 Bantuan | AAA | S | [Claude] bantuan kontekstual di field yang rumit. | |
| 3.3.6 Pencegahan Kesalahan (Semua) | AAA | S | Sama dengan 3.3.4 untuk semua form. | |
| 3.3.7 Pengisian Redundan | A | S | [Claude] pada flow beberapa langkah: field yang meminta data yang sama dua kali tanpa diisi otomatis atau opsi memilih. | |
| 3.3.8 Autentikasi yang Aksesibel (Minimum) | AA | S | [skrip] paste diblokir di field password, CAPTCHA terdeteksi. [Claude] autocomplete `username`/`current-password`, login yang mewajibkan mengingat atau mengetik ulang kode tanpa paste. | Alternatif CAPTCHA. |
| 3.3.9 Autentikasi yang Aksesibel (Ditingkatkan) | AAA | S | Sama dengan 3.3.8, ditambah tes mengenali objek atau gambar dinilai gagal. | |

## 4. Handal (Robust)

| Kriteria | Level | Kategori | Cara sistem menguji | Yang tetap manual |
|---|---|---|---|---|
| 4.1.2 Nama, Role, Value | A | O | [axe] aria-allowed-attr, aria-required-attr, aria-valid-attr, aria-valid-attr-value, aria-roles, button-name, link-name, input-button-name, frame-title, duplicate-id-aria. [interaksi] state seperti `aria-expanded` dan `aria-checked` berubah setelah komponen diaktifkan. | Pengumuman screen reader pada komponen kustom. |
| 4.1.3 Pesan Status | AA | S | [skrip] keberadaan live region. [interaksi] jalankan aksi (tambah item, simpan, cari) di lingkungan uji dan cek pesan muncul di dalam `role="status"`, `role="alert"`, atau `aria-live`. | Apakah pengumumannya terdengar tepat. |

## Kesalahan umum yang perlu diwaspadai sistem

- Menganggap kriteria terpenuhi hanya karena atributnya ada, misalnya alt yang ada tetapi isinya nama file.
- Alt yang diawali "gambar dari..." atau "foto...", padahal screen reader sudah menyebut elemennya sebagai gambar.
- Gambar dekoratif yang diberi deskripsi panjang, sehingga menambah kebisingan bagi pengguna screen reader.
- Ikon tombol yang hanya mengandalkan tooltip visual, padahal tooltip tidak selalu dibacakan screen reader.
- Menambahkan caption pada video tanpa suara; video tanpa suara membutuhkan transkrip atau audio description.
- Transkrip yang ada tetapi diletakkan jauh dari pemutar atau tidak ditautkan.
