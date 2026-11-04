# Referensi Lensa 2: UX Psychology yang Disesuaikan Konteks

File ini dibaca saat menjalankan Lensa 2. Isinya: cara menyusun profil konteks (2A), tabel bobot prinsip dan pertentangan antar prinsip (2B), kartu prinsip kelompok A sampai I dengan inti, cara cek, dan rekomendasi (2C), serta aturan khusus penulisan temuan. Nama bagian (2A, 2B, kelompok A sampai I) dipakai sebagai rujukan dari lensa lain, jadi pertahankan penamaannya bila file ini diubah.

## Daftar isi
- 2A. Susun profil konteks
- 2B. Tentukan bobot prinsip (termasuk pertentangan antar prinsip)
- 2C. Periksa prinsip
  - A. Change blindness
  - B. Gestalt: cara mata mengelompokkan elemen
  - C. Memory dan cognitive load
  - D. Perception, expectation, dan first impression
  - E. Navigation, information foraging, dan mental model
  - F. Decision making
  - G. Interaction cost dan motor behavior
  - H. Motivation dan psychological needs
  - I. Persuasion, trust, dan ethics
- Aturan khusus Lensa 2

---

Prinsip psikologi kognitif tidak berlaku sama kuat di semua produk. Prinsip yang sangat penting untuk aplikasi kerja yang dibuka setiap hari bisa hampir tidak relevan untuk halaman pemasaran yang dikunjungi sekali, dan sebaliknya. Karena itu lensa ini dikerjakan dalam tiga langkah berurutan: susun profil konteks, tentukan bobot prinsip, baru periksa prinsipnya.

## 2A. Susun profil konteks

Tentukan tujuh dimensi berikut dari keterangan pengguna skill atau dari bukti di input:

1. Usage frequency: harian atau berulang (aplikasi kerja, sistem internal, dashboard), atau sesekali (pendaftaran tahunan, pengajuan yang jarang, situs pemasaran).
2. Switching cost: apakah pengguna wajib memakai produk ini (sistem kantor, layanan resmi institusi) atau bisa dengan mudah pindah ke produk lain.
3. Primary task: mengisi form atau transaksi, membaca konten, membandingkan pilihan, memantau data, atau menjelajah.
4. Information density: rendah (landing page, layar tunggal sederhana) sampai tinggi (tabel data, aplikasi dengan banyak kontrol).
5. Usage context: perangkat utama, apakah ukuran layar bervariasi (layout responsif), gangguan lingkungan, dan tekanan waktu.
6. User profile: domain expertise (keahlian di bidangnya), tech literacy (keakraban dengan teknologi), rentang usia. Kapasitas working memory (kapasitas otak untuk menahan informasi sementara saat mengerjakan tugas) berbeda antar orang dan cenderung menurun seiring usia. Tim pembuat produk biasanya punya kapasitas dan pengalaman teknologi di atas pengguna rata-rata, sehingga desain yang "terasa mudah bagi tim" belum tentu mudah bagi pengguna. Untuk produk dengan fitur AI, perkirakan juga AI literacy pengguna (lihat Lensa 7).
7. Emotional load: apakah layar ini bagian dari proses yang menegangkan atau berisiko (pengajuan, pembayaran, tenggat waktu, data penting) atau kegiatan rutin.

Tulis profil ini secara ringkas di Lampiran A4 laporan; isi utama cukup menyebut penggunanya dalam satu kalimat ("Untuk siapa"). Dimensi yang tidak diketahui ditulis sebagai asumsi.

## 2B. Tentukan bobot prinsip

Gunakan tabel ini untuk memilih kelompok prinsip yang diperiksa paling dalam. Prinsip berbobot rendah tetap boleh dilaporkan bila masalahnya jelas terlihat, tetapi jangan dicari-cari.

| Kondisi konteks | Naikkan bobot | Turunkan bobot |
|---|---|---|
| Dipakai harian atau berulang | Spatial memory, power law of learning (efisiensi setelah terbiasa), recognition untuk fitur yang sering dipakai, interaction cost per tugas rutin, Fitts's law untuk kontrol yang sering diklik, autonomy lewat akselerator (pintasan, tampilan yang bisa diganti), momentum behavior | Imagery untuk pemasaran, peak-end yang sifatnya dekoratif |
| Dipakai sesekali | Konsistensi dengan pola umum, mental model, information scent, recognition over recall, bantuan kontekstual, kemudahan dipahami sejak pertama kali | Optimasi untuk pengguna mahir, stabilitas posisi jangka panjang |
| Form atau transaksi | Change blindness (pesan error dan status), chunking field, working memory antar langkah, priming dari field yang memicu perilaku, Fitts's law (posisi tombol submit), interaction cost, prospect theory (kekhawatiran sebelum mulai), peak-end di akhir proses | Picture superiority |
| Membandingkan pilihan | Strategi compensatory (alat banding), perbedaan opsi yang eksplisit, prospect theory (isolation effect dan framing), working memory dan external memory, similarity pada atribut, chunking | Closure |
| Data padat atau dashboard | Common region dan proximity, cognitive load ekstrinsik, interaction cost, spatial memory, landmark dan overview | Closure sebagai ajakan scroll, imagery |
| Konten, pemasaran, atau onboarding | Information scent, satisficing (ringkasan di depan), picture superiority dan imagery, priming ekspektasi, chunking teks, closure untuk mencegah ilusi halaman sudah habis | Spatial memory |
| Navigasi dan pencarian konten | Information scent, mental model (letak item dan cakupan pencarian), satisficing, recognition over recall | Prospect theory |
| Memilih paket, layanan, atau opsi berbiaya | Perbedaan opsi yang eksplisit, compensatory decision, prospect theory dan pemeriksaan deceptive patterns, choice overload | Spatial memory |
| Daftar pilihan berjumlah besar | Strategi noncompensatory (filter dan pencarian), satisficing (urutan default dan opsi sort), choice overload | Compensatory decision sebelum daftar menyempit |
| Perangkat sentuh (mobile, tablet) | Fitts's law (ukuran target, jarak antar target, posisi submit), interaction cost (menunggu dan scroll), information scent pada label yang konteksnya terpotong | Keunggulan target di tepi layar (tidak berlaku untuk sentuh) |
| Perangkat mouse (desktop) | Fitts's law termasuk pemanfaatan tepi layar, jarak menu kontekstual dari pemicunya | (tidak ada) |
| Pengguna dengan pengalaman digital rendah atau anak-anak | Mental model (metafora dunia nyata), recognition over recall, ukuran target, perbedaan opsi yang eksplisit | Pola inovatif |
| Pengguna dengan hambatan membaca atau motorik | Interaction cost dengan bobot sesuai hambatannya (membaca atau klik), Fitts's law, chunking | (tidak ada) |
| Layout responsif atau ukuran layar bervariasi | Proximity yang berubah saat kolom ditumpuk, jarak gambar dengan teksnya, closure yang tidak stabil di berbagai ukuran layar | (tidak ada) |
| Pengguna wajib memakai | Pola baru masih bisa diterima bila terbukti lebih efisien setelah dipelajari, asalkan ada bantuan belajar; competence dan relatedness tetap penting karena pengguna yang terpaksa memakai sistem cenderung menilai seluruh produk dari pengalaman terburuknya (halo effect, negativity bias) | (tidak ada) |
| Pengguna mudah pindah | Konsistensi dengan pola umum, pencegahan peak negatif, negativity bias, halo effect kesan pertama, larangan pop-up yang memohon pengguna tidak pergi | Pola inovatif yang butuh waktu belajar |
| Proses menegangkan atau berisiko | Peak-end (error yang jelas, layar selesai yang menenangkan), change blindness pada status dan konfirmasi, negativity bias (nada pesan error, microcopy yang menjawab kekhawatiran), anchoring (estimasi waktu di awal yang akurat) | Elemen dekoratif |
| Pemakaian pertama atau onboarding | Competence (bantuan kontekstual saat dibutuhkan), autonomy (langkah opsional bisa dilewati, bisa menjelajah dulu), halo effect (kesan pertama), mental model | Spatial memory, akselerator untuk pengguna mahir |
| Pengaturan, preferensi, atau personalisasi | Autonomy (sedikit opsi bermakna, default yang masuk akal), choice overload | Picture superiority |
| Input angka atau nilai (jumlah, nominal, durasi) | Anchoring (default dan nilai saran yang representatif), interaction cost mengetik | Closure |
| Notifikasi, pengingat, email, atau kampanye | Relatedness (pesan relevan dan tepat waktu), fresh start effect (momen awal periode), selective attention (pesan yang mirip iklan diabaikan) | Fitts's law |
| Dipakai di lebih dari satu perangkat | Device inertia (tugas penting harus bisa selesai di perangkat yang sedang dipakai), sinkronisasi pekerjaan antar perangkat | (tidak ada) |
| Fitur canggih yang jarang ditemukan pengguna | Momentum behavior, selective attention, information scent, competence | (tidak ada) |
| Halaman awal atau kunjungan pertama | Kesan pertama dan aesthetic-usability, faktor kredibilitas, prominence-interpretation, trust pyramid, reciprocity | Spatial memory |
| Pendaftaran, permintaan data pribadi, atau izin perangkat | Trust pyramid, reciprocity, commitment dan consistency, creepiness-convenience | Picture superiority |
| Langganan, pembayaran berulang, atau checkout | Pemeriksaan deceptive patterns (forced continuity, hidden costs, preselection), keterbukaan biaya, anchoring | Spatial memory |
| Produk yang bersaing merebut waktu dan perhatian | Attention capture dan the Vortex, notifikasi, pemeriksaan deceptive patterns | (tidak ada) |
| Ulasan, komunitas, atau marketplace | Social proof, authority, scarcity yang jujur, faktor kredibilitas | (tidak ada) |
| Antarmuka percakapan atau AI | Anthropomorphism dan trust pada AI, mental model tentang kemampuan sistem, information foraging, halo effect pada jawaban yang rapi, autonomy (jalur alternatif); kerjakan juga Lensa 7 | Gestalt pada tata letak statis |
| Rekomendasi, feed, atau personalisasi berbasis algoritma | Mental model (algoritma sebagai kotak hitam), creepiness-convenience, spatial memory (tata letak yang stabil antar sesi), autonomy (kontrol urutan dan umpan balik); kerjakan juga Lensa 7F | (tidak ada) |
| Produk untuk anak atau yang diatur orang tua | Attention capture, kontrol orang tua yang terbuka, mental model sederhana, ukuran target | Persuasi untuk konversi |
| Layanan resmi atau institusi dengan pengguna wajib | Liking (wajah petugas nyata), faktor kredibilitas, nada yang sesuai situasi, delight yang tidak dipaksakan | Scarcity, social proof untuk konversi |

Bila dua prinsip memberi saran yang bertentangan, pilih berdasarkan profil konteks dan tulis alasannya. Contoh pertentangan yang umum:
- Konsistensi dengan pola umum versus pola baru yang lebih efisien: pola baru hanya layak bila pengguna akan mengulanginya cukup sering sampai terbiasa.
- Filter yang langsung diterapkan (cepat) versus perubahan hasil yang tidak disadari: pertahankan kecepatan, tambahkan penanda perubahan yang jelas.
- Kotak dan border untuk pengelompokan versus kekacauan visual: gunakan jarak (whitespace) dulu, tambahkan kotak hanya bila jarak tidak cukup.
- Reflow layout saat layar diubah ukurannya versus stabilitas posisi: untuk aplikasi harian, utamakan posisi yang stabil.
- Kelengkapan fitur versus kesederhanaan: fitur yang hanya dibutuhkan sebagian kecil pengguna tidak boleh menambah langkah atau pilihan di jalur utama mayoritas pengguna. Pindahkan ke pengaturan lanjutan atau progressive disclosure.
- Mendorong pengguna ke pilihan yang diinginkan organisasi (nudge) versus mempermudah pengguna memilih yang mereka butuhkan: utamakan menghapus hambatan keputusan. Dorongan yang memanfaatkan bias secara tidak jujur dinilai sebagai temuan, bukan rekomendasi.
- Autosuggest dan daftar riwayat versus beban memindai: saran membantu bila relevan, tetapi menambah usaha bila daftarnya panjang atau tidak akurat. Nilai berdasarkan seberapa sering saran itu tepat untuk tugas utama.
- Autonomy versus kesederhanaan: tidak ada pilihan sama sekali mengekang pengguna, tetapi terlalu banyak pilihan membebani. Jalan tengahnya adalah sedikit opsi yang bermakna, default yang masuk akal, dan opsi "lainnya" atau isian bebas untuk kebutuhan di luar pilihan yang disediakan.
- Wizard (alur langkah demi langkah yang dipandu sistem) versus autonomy: wizard menaikkan competence untuk proses rumit dan jarang dilakukan, tetapi mengambil kendali dari pengguna. Untuk proses yang sering diulang oleh pengguna mahir, sediakan jalur cepat atau mode ringkas.
- Efisiensi versus ekspektasi: alur yang lebih pendek tetapi tidak lazim bisa terasa lebih sulit daripada alur yang lebih panjang tetapi sesuai harapan pengguna. Jangan merekomendasikan pemangkasan langkah tanpa memeriksa mental model pengguna.
- Persuasi versus penipuan: social proof, scarcity, anchoring, dan authority sah dipakai bila datanya benar dan tidak disaring secara menyesatkan. Bila datanya dipalsukan atau sebagian informasi sengaja disembunyikan, laporkan sebagai deceptive pattern.
- Engagement versus kendali pengguna: metrik waktu pakai yang tinggi belum tentu berarti pengalaman baik. Bila pengguna kemungkinan besar merasa terseret, utamakan rasa kendali.
- Estetika versus information density: visual besar memberi kesan pertama yang baik, tetapi bisa menghambat tugas yang berulang. Untuk aplikasi kerja, utamakan information density yang cukup.
- Delight versus kondisi emosi pengguna: elemen jenaka atau perayaan hanya cocok di momen positif. Di momen sulit, utamakan bantuan yang praktis dan nada yang tenang.
- Default dan nilai saran sebagai bantuan versus manipulasi: anchoring yang membantu memakai nilai yang mewakili kebutuhan mayoritas pengguna. Nilai default yang sengaja dipasang tinggi demi metrik organisasi dinilai sebagai temuan.

## 2C. Periksa prinsip

Setiap prinsip di bawah berisi inti (penjelasan singkat), hal yang dicek, dan rekomendasi tipikal. Hanya periksa secara mendalam prinsip yang berbobot tinggi menurut 2B.

**A. Change blindness**
- Inti: pengguna sering tidak menyadari perubahan di layar bila perubahan itu terjadi jauh dari titik yang sedang mereka lihat. Risikonya naik bila perubahan terjadi seketika, terjadi bersamaan dengan reload halaman, terjadi bersamaan dengan perubahan lain yang lebih menarik perhatian, atau terjadi di tepi layar. Perubahan yang terlewat menambah waktu dan bisa membuat tugas gagal.
- Cek: pesan error yang muncul setelah submit tetapi letaknya jauh dari field atau tombol yang ditekan; label tombol yang berubah (misalnya menjadi "Stok habis") tanpa perbedaan visual; indikator loading atau progres yang warnanya menyatu dengan latar; hasil filter yang berubah seketika tanpa tanda; navigasi samping yang isinya berubah antar halaman; elemen yang muncul saat scroll (sticky bar, tombol kembali ke atas) dengan warna yang menyatu; aksi yang mengubah beberapa area layar sekaligus.
- Rekomendasi: satu perubahan pada satu waktu; kelompokkan elemen yang berubah bersamaan di satu area; letakkan informasi baru dekat titik fokus pengguna (dekat tombol atau field yang baru dipakai); beri penekanan visual yang cukup (kontras, ukuran, padding); gunakan animasi transisi untuk menjelaskan perubahan, tetapi jangan biarkan beberapa animasi bersaing; redupkan area yang tidak berubah; hindari reload halaman penuh bila bisa. Uji cepatnya: squint test, yaitu menyipitkan mata atau melihat layar dari jauh, lalu cek apakah elemen baru itu masih menonjol.

**B. Gestalt: cara mata mengelompokkan elemen**

Prinsip Gestalt menjelaskan bagaimana orang menyimpulkan elemen mana yang saling berhubungan. Urutan kekuatannya secara umum: common region paling kuat, lalu proximity, lalu similarity (similarity lebih lemah tetapi tetap bekerja walaupun elemennya berjauhan).

- Proximity (kedekatan)
  - Inti: elemen yang berdekatan dianggap satu kelompok; elemen yang berjauhan dianggap tidak berhubungan dan mudah terlewat oleh pengguna yang fokus pada tugasnya.
  - Cek: jarak label ke field-nya lebih kecil daripada jarak ke field berikutnya; tombol yang tidak berhubungan (misalnya "Tambah" yang menjadi bagian isi form) tercampur dengan tombol navigasi langkah ("Lanjut", "Simpan draf", "Batal"); opsi penting (misalnya "Lewati") terletak di pojok jauh dari tindakan utama; tombol submit jauh dari area yang diisi; di versi mobile, kolom yang ditumpuk membuat dua hal yang seharusnya dibandingkan menjadi berjauhan.
  - Rekomendasi: atur whitespace untuk menyatukan atau memisahkan; letakkan aksi dekat konten yang dipengaruhinya; periksa ulang pengelompokan di setiap breakpoint responsif.

- Similarity (kemiripan)
  - Inti: elemen dengan warna, bentuk, ukuran, atau gaya huruf yang sama dianggap berfungsi sama dan sama penting.
  - Cek: warna link dipakai juga untuk teks yang tidak bisa diklik (judul, kata kunci, ikon dekoratif); ikon dekoratif berwarna sama dengan tombol di dekatnya sehingga terlihat bisa diklik; semua tombol berwarna sama sehingga tombol utama tidak terbedakan dari tombol sekunder; ikon yang sangat mirip dipakai untuk kategori yang berbeda; badge atau penanda status yang bentuk dan warnanya terlalu mirip; konten penting berukuran sama dengan iklan atau banner sehingga diabaikan (banner blindness).
  - Rekomendasi: satu warna khusus untuk elemen interaktif dan jangan dipakai untuk yang lain; tombol utama punya gaya berbeda dari tombol sekunder; bedakan penanda dengan kombinasi warna dan bentuk atau ikon; bedakan ukuran konten penting dari blok promosi.

- Common region (area bersama)
  - Inti: elemen di dalam satu batas (border atau warna latar yang sama) dianggap satu kelompok, dan efek ini mengalahkan proximity.
  - Cek: informasi yang ambigu milik siapa (misalnya rating atau keterangan yang berada di antara dua item); header sticky yang tidak terpisah jelas dari konten di bawahnya; tabel lebar tanpa pembeda baris; kotak dan border berlebihan yang hanya dekoratif; blok warna selebar layar yang membuat pengguna mengira halaman sudah selesai (false floor) sehingga berhenti scroll.
  - Rekomendasi: gunakan layout kartu untuk mengikat gambar, judul, dan detail satu item; gunakan zebra stripe untuk tabel perbandingan; hapus kotak yang tidak dibutuhkan bila jarak sudah cukup untuk menunjukkan kelompok.

- Closure (melengkapi bentuk)
  - Inti: orang cenderung melengkapi bentuk yang terpotong. Elemen yang terlihat sebagian memberi sinyal bahwa masih ada konten lanjutan.
  - Cek: konten di atas lipatan layar (bagian yang terlihat tanpa scroll) terlihat sudah lengkap sehingga pengguna tidak tahu ada konten di bawahnya (illusion of completeness); carousel horizontal yang item terpotongnya terlalu kecil sehingga tidak terlihat sebagai item; ikon minimalis yang memakai efek ini tetapi tanpa label teks.
  - Rekomendasi: tampilkan potongan item berikutnya dengan porsi yang cukup besar untuk dikenali (kira-kira sepertiga sampai setengah item); untuk layar yang ukurannya sangat bervariasi, jangan hanya mengandalkan potongan ini sebagai satu-satunya sinyal; tetap beri label pada ikon.

**C. Memory dan cognitive load**

- Working memory dan external memory
  - Inti: working memory punya kapasitas kecil dan cepat hilang (sekitar belasan sampai dua puluh detik tanpa diulang). Bila layar memaksa pengguna mengingat informasi dari langkah sebelumnya, mereka akan lupa, melambat, atau salah. External memory adalah fitur yang menyimpan informasi itu untuk pengguna, sehingga mereka tidak perlu mengingatnya.
  - Cek: informasi dari langkah sebelumnya yang dibutuhkan lagi tetapi tidak ditampilkan ulang; pengguna harus bolak-balik antar halaman untuk membandingkan item; kode, nomor, atau istilah yang harus diingat lalu diketik ulang; bantuan yang berada di halaman terpisah sehingga pengguna harus menghafal langkahnya; link atau item yang sudah dibuka tidak ditandai; waktu respons lambat sehingga pengguna lupa sedang mengerjakan apa.
  - Rekomendasi: tampilkan ulang data yang sudah diisi (ringkasan sebelum submit, header konteks di setiap langkah); sediakan tabel pembanding, daftar simpanan, atau keranjang sebagai external memory; terapkan kode atau data secara otomatis lewat sistem; letakkan bantuan di titik dibutuhkan; tandai item yang sudah dikunjungi.
  - Catatan: angka "7 plus minus 2" sering disalahartikan. Jangan merekomendasikan pembatasan menu menjadi 7 item, karena menu dibaca dengan cara mengenali (recognition), bukan dihafal. Yang perlu dibatasi adalah jumlah hal yang harus diingat pengguna, dan untuk itu angka praktisnya lebih kecil, sekitar 3 sampai 5.

- Recognition over recall
  - Inti: mengenali pilihan yang ditampilkan jauh lebih mudah daripada mengingat sesuatu tanpa petunjuk, karena pilihan yang terlihat memberi banyak petunjuk ke memori.
  - Cek: input teks bebas yang bisa diganti pilihan atau saran otomatis; ikon tanpa label; gestur tersembunyi tanpa penanda; tutorial di awal aplikasi yang harus dihafal; tidak ada riwayat atau daftar "terakhir dibuka" padahal pengguna sering melanjutkan pekerjaan.
  - Rekomendasi: dropdown, autocomplete, atau saran pencarian; label teks di samping ikon; riwayat, item terakhir, dan favorit; tips kontekstual di layar terkait sebagai pengganti tutorial panjang di awal.

- Chunking
  - Inti: informasi yang dipecah menjadi kelompok bermakna lebih mudah dipindai, dipahami, dan diingat.
  - Cek: dinding teks tanpa subjudul; baris teks terlalu panjang (idealnya sekitar 50 sampai 75 karakter per baris); form panjang tanpa pengelompokan bagian; nomor panjang (telepon, rekening, nomor identitas) ditampilkan tanpa pemisah; input yang mewajibkan pengguna mengetik tanda pemisah sendiri.
  - Rekomendasi: paragraf pendek, subjudul yang kontras, kata kunci tebal, daftar berbutir; kelompokkan field form ke beberapa bagian bermakna; tampilkan nomor dengan format standar daerahnya; gunakan auto-format pada input sehingga pemisah muncul sendiri.

- Cognitive load ekstrinsik
  - Inti: beban kognitif intrinsik adalah usaha memahami informasi yang memang dibutuhkan, dan ini tidak bisa dihapus. Beban kognitif ekstrinsik adalah usaha tambahan yang tidak membantu tugas, dan inilah yang harus dikurangi.
  - Cek: variasi gaya huruf atau warna yang tidak membawa makna; gambar dan link berulang yang tidak relevan; label dan layout yang menyimpang dari kebiasaan produk sejenis; keputusan yang sebenarnya bisa diambilkan sistem.
  - Rekomendasi: hapus elemen dekoratif yang tidak bermakna; pakai pola dan istilah yang sudah dikenal pengguna; alihkan beban ke sistem lewat default yang cerdas, data yang diisi ulang otomatis, atau visual pengganti teks panjang.

- Spatial memory
  - Inti: dengan pemakaian berulang, pengguna mengingat perkiraan lokasi elemen (area kasarnya, tidak sampai titik persisnya), berpatokan pada batas area dan landmark (elemen menonjol). Ingatan ini hanya terbentuk bila posisi elemen stabil.
  - Cek: menu atau toolbar yang urutannya berubah otomatis berdasarkan pemakaian; layout yang mengalir ulang (reflow) besar-besaran saat jendela diubah ukurannya; hierarki menu yang dalam dan sempit; ikon tanpa label di area padat; data panjang tanpa gambaran keseluruhan; tidak ada penanda item yang sudah dilihat.
  - Rekomendasi: posisi kontrol yang stabil dan area kontrol dengan batas jelas; bila ingin menampilkan item yang sering dipakai, buat area khusus dan tetap simpan item itu di posisi aslinya; hierarki lebar dan dangkal; label teks dan thumbnail; overview seperti minimap atau thumbnail halaman; penanda kunjungan (visit wear) seperti titik warna pada item yang sudah dibuka.
  - Catatan konteks: prinsip ini utama untuk aplikasi yang dipakai berulang. Untuk situs yang jarang dikunjungi, reflow biasanya tidak menjadi masalah.

- Power law of learning dan konsistensi
  - Inti: waktu menyelesaikan tugas turun cepat di awal pengulangan lalu mendatar. Pola umum yang sudah dipakai pengguna di banyak produk lain sudah berada di titik datar itu, sedangkan pola baru memaksa pengguna mulai dari awal. Tutorial saja tidak cukup untuk membuat pengguna menguasai pola baru; yang membuat terbiasa adalah pengulangan.
  - Cek: pola yang menyimpang dari kebiasaan umum (posisi logo, letak pencarian, arah scroll, navigasi tersembunyi di desktop) tanpa manfaat yang jelas; inkonsistensi antar layar dalam produk yang sama.
  - Rekomendasi: gunakan pola umum sebagai bawaan. Pola baru hanya layak bila memenuhi tiga syarat: jauh lebih efisien setelah dipelajari, pengguna akan mengulanginya cukup sering (misalnya alat kerja harian), dan ada bantuan belajar seperti tips kontekstual dan progressive disclosure (menampilkan fitur lanjutan secara bertahap). Untuk tugas yang dilakukan setahun sekali, pilih desain yang langsung bisa dipahami walaupun bukan yang tercepat bagi pengguna mahir.

**D. Perception, expectation, dan first impression**

- Priming
  - Inti: elemen yang dilihat lebih dulu memengaruhi perilaku dan penilaian berikutnya, sering tanpa disadari.
  - Cek: field atau elemen yang memicu perilaku yang tidak diinginkan (contoh klasik: kolom kode kupon yang menonjol di checkout membuat pengguna keluar untuk mencari kupon); gambar yang memberi kesan cakupan yang salah (misalnya foto yang membuat layanan terlihat hanya untuk satu kelompok pengguna); tampilan visual yang memberi kesan berbeda dari karakter organisasinya; istilah di instruksi atau onboarding yang mengarahkan pengguna ke istilah berbeda dari yang dipakai di antarmuka.
  - Rekomendasi: sembunyikan atau kecilkan elemen yang hanya relevan bagi sebagian kecil pengguna (misalnya kupon diterapkan otomatis lewat link); pilih gambar yang mewakili seluruh cakupan layanan; samakan istilah antara instruksi dan antarmuka.
  - Catatan: bila skill dipakai untuk merancang skenario usability testing, hindari memakai kata yang persis sama dengan label di antarmuka, karena kata di instruksi akan mengarahkan peserta.

- Peak-end rule
  - Inti: orang menilai pengalaman terutama dari momen paling intens (positif atau negatif) dan momen terakhirnya. Momen negatif diingat lebih kuat daripada momen positif.
  - Cek: titik frustrasi paling tajam dalam flow (menu yang mudah tertutup, error yang membingungkan); layar akhir proses yang datar atau langsung menjual hal lain; pesan error atau gangguan sistem yang tidak menjelaskan masalah, tidak memberi perkiraan waktu, atau terkesan menyalahkan pengguna; pop-up yang memohon pengguna tidak pergi.
  - Rekomendasi: prioritaskan perbaikan pada peak negatif; beri layar konfirmasi atau selesai yang jelas dan menenangkan untuk proses yang melelahkan; pesan error menjelaskan apa yang terjadi, apa yang bisa dilakukan, dan kapan perkiraan pulih; progress indicator yang terasa makin cepat di akhir; jangan pakai pop-up penahan pengguna.

- Picture superiority dan kualitas gambar
  - Inti: gambar lebih mudah diingat daripada kata, karena tersimpan di memori sebagai gambar sekaligus sebagai label kata. Efeknya makin kuat bila gambar terlihat cukup lama, jelas dan literal, akrab bagi pengguna, dan unik dibanding gambar di sekitarnya.
  - Cek: gambar yang tidak berhubungan dengan isi teks; foto stok generik; gambar ilustrasi abstrak yang sulit diberi label; gambar yang jauh dari teks terkait, terutama di versi mobile; terlalu banyak gambar serupa sehingga hierarki hilang; gambar beresolusi rendah; carousel yang berganti otomatis terlalu cepat (beberapa detik) sehingga gambar tidak sempat dipahami; ikon dalam satu set yang terlalu mirip satu sama lain; gambar yang maknanya bisa berbeda di budaya pengguna.
  - Rekomendasi: gunakan gambar produk asli atau screenshot nyata; tampilkan produk dalam konteks pemakaian sebenarnya; letakkan gambar tepat di samping teksnya dan jaga kedekatan ini di semua breakpoint; pilih sedikit gambar yang kuat; gunakan gambar yang tetap terlihat (hindari auto-rotate cepat); bedakan bentuk ikon dalam satu set sambil menjaga keselarasan palet; selalu sertakan label teks, karena gambar tidak menggantikan kata.

- Halo effect
  - Inti: pengguna menilai keseluruhan produk dari satu atribut yang paling mudah dinilai. Satu pengalaman buruk (hasil pencarian yang acak, pembuatan akun yang rumit) membuat pengguna menganggap seluruh produk dan organisasinya buruk, dan kesan ini bertahan walaupun produk kemudian diperbaiki. Arah sebaliknya juga terjadi: tampilan yang menarik bisa membuat pengguna merasa puas walaupun banyak tugas gagal.
  - Cek: titik kontak pertama (halaman awal, login, pembuatan akun, hasil pencarian pertama) yang kualitasnya jauh di bawah bagian lain; fitur yang paling sering dipakai tetapi paling bermasalah; tampilan rapi yang menutupi alur yang membingungkan.
  - Rekomendasi: prioritaskan perbaikan pada titik kontak pertama dan fitur yang paling sering dinilai pengguna (misalnya kualitas hasil pencarian internal); jangan menjadikan kepuasan visual sebagai bukti kemudahan pakai.

- Negativity bias
  - Inti: pengalaman negatif diperhatikan dan diingat jauh lebih kuat daripada pengalaman positif yang setara. Pengguna jarang berkomentar saat semuanya lancar, tetapi satu salah ketik atau satu pesan error yang kasar bisa terus mengganggu mereka. Pengguna juga membandingkan produk dengan semua produk lain yang pernah mereka pakai, sehingga standar "layak" terus naik.
  - Cek: salah ketik dan inkonsistensi kecil; pesan error yang kaku, menyalahkan, samar, atau mencoba lucu di situasi yang tidak tepat; alur yang tidak sesuai urutan yang diharapkan pengguna; kekhawatiran yang bisa diantisipasi (biaya, waktu tunggu, apakah data tersimpan) tetapi tidak dijawab; posisi elemen standar (logo, pencarian, navigasi) yang dipindah tanpa alasan kuat.
  - Rekomendasi: perbaiki gangguan kecil dengan serius karena dampaknya ke persepsi besar; tulis pesan error yang sopan, jelas, dan memberi jalan keluar; tambahkan microcopy (teks pendek di dekat elemen) yang menjawab kekhawatiran tepat di titik munculnya; ikuti standar posisi elemen umum.

- Aesthetic-usability effect dan kesan pertama
  - Inti: penilaian estetika terjadi sangat cepat (dalam sepersekian detik) lewat pemrosesan otomatis yang disebut System 1, yaitu cara berpikir cepat yang bekerja tanpa usaha sadar. Tampilan yang menarik membuat pengguna menganggap produk lebih mudah dipakai dan lebih memaafkan masalah kecil. Efek ini punya batas: masalah besar tetap tidak dimaafkan, dan kekaguman awal bisa berubah jadi kesal bila tugas gagal. Tampilan yang berantakan atau kontras rendah memberi kesan ada yang disembunyikan.
  - Cek: lebih dari satu tombol utama dengan bobot visual setara; terlalu banyak warna aksen (lebih dari sekitar 4) atau jenis huruf (lebih dari sekitar 2) sehingga terasa kacau; layout yang tidak sejajar pada grid; teks kecil atau kontras rendah; gambar besar yang indah tetapi menurunkan kepadatan informasi sehingga pengguna harus scroll jauh untuk menemukan isi; layar pertama yang tidak menjelaskan siapa organisasinya dan apa yang ditawarkan; ejaan atau istilah yang tidak sesuai bahasa lokal pengguna.
  - Rekomendasi: satu tindakan utama yang paling menonjol per layar; batasi warna aksen dan jenis huruf; susun pada grid; nyatakan identitas dan fungsi produk secara singkat di area paling menonjol; sesuaikan ejaan dan konvensi lokal.

- Delight: surface delight dan deep delight
  - Inti: delight adalah perasaan positif saat memakai produk. Surface delight datang dari elemen terpisah seperti animasi, microcopy jenaka, atau ilustrasi. Deep delight muncul bila produk berfungsi, andal, mudah dipakai, sekaligus menyenangkan, sehingga pengguna bisa bekerja lancar tanpa terganggu. Delight bekerja di tiga tingkat: visceral (kesan indrawi pertama), behavioral (tugas terasa lebih mudah dari yang diharapkan), dan reflective (produk sesuai nilai dan identitas pengguna). Karena negativity bias, satu tingkat yang lemah bisa menghapus kesan baik dari dua tingkat lainnya.
  - Cek: elemen jenaka atau dekoratif yang muncul di atas alur yang masih bermasalah; nada ceria atau lucu di momen yang sedang menegangkan atau menyedihkan bagi pengguna (misalnya saat pengajuan ditolak atau saat ada masalah data); animasi yang memperlambat tugas; gaya yang tidak sesuai karakter organisasi (misalnya terlalu main-main untuk layanan resmi).
  - Rekomendasi: prioritaskan fungsi, keandalan, dan kemudahan sebelum menambah elemen pemanis; sesuaikan nada dengan kondisi emosi pengguna di momen itu; untuk momen sulit, pilih bantuan praktis (misalnya opsi dihubungi balik) daripada hiburan.

**E. Navigation, information foraging, dan mental model**

Penerapan kelompok ini pada struktur menu, label navigasi, wayfinding, pencarian, filter, dan sort ada di pemeriksaan pola Navigasi (`references/navigation-search.md`). Temuan perilaku navigasi dilaporkan di lensa ini dengan label "2 · Navigasi".

- Mental model
  - Inti: mental model adalah keyakinan pengguna tentang cara kerja sistem. Keyakinan ini dibentuk dari pengalaman di produk lain dan di dunia nyata, sehingga bisa berbeda dari cara kerja sistem yang sebenarnya. Tim pembuat punya mental model yang jauh lebih lengkap daripada pengguna. Mental model juga punya inersia (sulit berubah): satu salah paham di awal bisa membuat pengguna salah menafsirkan seluruh sesi tanpa pernah mempertanyakan asumsinya.
  - Cek: perilaku yang melanggar ekspektasi umum (item atau biaya ditambahkan ke keranjang secara otomatis; tombol Back browser tidak menutup overlay tetapi melompat dua halaman; tombol Back di aplikasi naik ke level atas, bukan kembali ke layar sebelumnya); lebih dari satu kotak pencarian di satu halaman dengan cakupan berbeda; pengelompokan menu yang mengikuti struktur organisasi, bukan cara pengguna mencari; perbedaan konsep yang hanya dipahami orang dalam.
  - Rekomendasi: ada dua jalan dan pilih sesuai konteks. Pertama, ubah sistem agar sesuai mental model pengguna (misalnya pindahkan item ke tempat pengguna mencarinya, validasi dengan card sorting). Kedua, bila sistem tidak bisa diubah, bentuk mental model yang benar lewat label yang lebih jelas dan penjelasan singkat di awal. Bila perbedaan konsep tidak bisa dipahami pengguna, pertimbangkan untuk menghapus perbedaan itu dari antarmuka. Gunakan satu kotak pencarian global, atau beri label cakupan yang sangat jelas bila memang harus lebih dari satu. Untuk pengguna dengan pengalaman digital rendah, metafora dunia nyata (misalnya peta untuk alur belajar) membantu membentuk mental model.
  - Verifikasi: salah paham mental model paling terlihat lewat usability testing dengan metode think-aloud (peserta menyuarakan apa yang dipikirkan dan diharapkan saat memakai produk).

- Information scent dan information foraging
  - Inti: pengguna memperkirakan apakah sebuah link akan membawa mereka ke yang dicari berdasarkan label link, teks dan gambar pendampingnya, konteks halaman, posisi link, dan pengetahuan mereka sebelumnya. Perkiraan ini disebut information scent. Pengguna terus mengklik selama mereka merasa makin dekat ke tujuan, dan pergi bila petunjuknya melemah. Mereka menimbang manfaat yang diharapkan terhadap usaha yang diperkirakan.
  - Cek: label samar seperti "Selengkapnya", "Klik di sini", atau "Lihat detail" tanpa objek; jargon, nama program internal, singkatan, atau istilah merek sebagai label navigasi; teks ringkasan yang tidak menambah informasi; gambar kategori yang generik atau bukan contoh paling khas dari kategorinya; label yang hanya bisa dipahami bila konteks di sekitarnya terlihat, padahal di mobile konteks itu terpotong; halaman tujuan yang layar pertamanya tidak menegaskan bahwa pengguna berada di jalur yang benar; konten penting di kolom kanan yang mudah dianggap iklan; tidak ada penanda lokasi saat pengguna masuk lebih dalam (breadcrumb, judul halaman, menu aktif).
  - Rekomendasi: label spesifik dengan bahasa pengguna; ringkasan yang menjelaskan isi tujuan; gambar yang mewakili kategori dengan contoh paling umum; penanda lokasi di setiap tingkat; halaman awal yang menampilkan contoh konten bernilai sekaligus navigasi dan pencarian yang menonjol; janji di label harus ditepati di halaman tujuan, karena label yang menjebak menghabiskan kepercayaan pengguna.
  - Catatan konteks: untuk pengguna yang sudah memahami domain, istilah teknis bisa berbau kuat. Untuk pengguna baru, istilah yang sama bisa sama sekali tidak bermakna. Sesuaikan penilaian dengan user profile di 2A.

- Satisficing
  - Inti: kebanyakan pengguna tidak mencari jawaban terbaik. Mereka berhenti pada jawaban yang cukup baik, karena setiap langkah tambahan punya biaya. Keputusan berisiko tinggi membuat pengguna lebih teliti, tetapi mereka tetap memindai lebih dulu.
  - Cek: informasi terpenting tidak berada di awal halaman atau di awal paragraf; judul tidak deskriptif; tidak ada ringkasan untuk konten panjang; daftar panjang tanpa urutan default yang masuk akal atau tanpa opsi pengurutan.
  - Rekomendasi: struktur piramida terbalik (kesimpulan dulu, detail kemudian); ringkasan poin kunci di awal; daftar isi dengan link ke setiap bagian; urutan default yang dibutuhkan mayoritas pengguna ditambah opsi urutan lain (terbaru, terpopuler, relevansi).

**F. Decision making**

- Strategi noncompensatory dan compensatory
  - Inti: saat pilihannya banyak, pengguna memakai strategi noncompensatory, yaitu langsung membuang opsi yang tidak memenuhi syarat wajib (misalnya ukuran atau harga). Saat pilihannya tinggal sedikit (sekitar 5 sampai 7), pengguna beralih ke strategi compensatory, yaitu menimbang kelebihan dan kekurangan setiap opsi, sehingga kelebihan satu atribut bisa menutup kekurangan atribut lain. Strategi kedua membebani working memory. Kebanyakan keputusan memakai keduanya berurutan.
  - Cek: daftar panjang tanpa filter; filter yang atributnya tidak relevan bagi pengguna (misalnya hanya nama koleksi atau kode internal); pencarian beberapa kata yang tidak berperilaku seperti filter; tidak ada cara melihat beberapa opsi berdampingan; tabel pembanding dengan atribut yang tidak lengkap atau tidak sejajar; kekurangan suatu opsi disembunyikan sehingga pengguna tidak bisa menimbang.
  - Rekomendasi: filter berdasarkan kriteria yang benar-benar dipakai pengguna (sumbernya log pencarian, tim layanan pelanggan, dan usability testing); alat banding yang cukup mendukung sekitar 5 item; tabel banding dengan kolom dan baris sejajar, teks sel pendek, dan atribut yang sama untuk semua item; dukung alur saring dulu, lalu bandingkan.

- Perbedaan antar opsi harus eksplisit
  - Inti: bila perbedaan antar opsi hanya tersirat, pengguna menganggap semua opsi sama atau justru cemas berlebihan pada perbedaan kecil, lalu salah pilih. Istilah yang terasa jelas bagi tim sering tidak jelas bagi pengguna baru.
  - Cek: opsi yang hanya berbeda pada satu atau dua atribut tetapi perbedaannya tidak ditonjolkan; tabel banding yang didominasi atribut yang sama untuk semua opsi; istilah yang mengandaikan pengetahuan domain; satuan abstrak tanpa terjemahan ke dampak nyata; biaya atau syarat penting yang hanya ada di halaman lain.
  - Rekomendasi: tonjolkan atribut yang berbeda atau taruh di bagian atas; gabungkan sel untuk atribut yang sama di semua opsi; pakai progressive disclosure untuk detail minor; terjemahkan satuan abstrak ke konsekuensi nyata (misalnya kapasitas dalam jumlah porsi atau jumlah pengguna); tampilkan semua biaya dan syarat di satu tempat.
  - Catatan: kalimat "itu sudah jelas" dari tim adalah tanda bahaya yang perlu divalidasi dengan pengguna.

- Choice overload, feature creep, dan sludge
  - Inti: makin banyak pilihan dan fitur, makin besar usaha memutuskan, makin tinggi risiko salah pilih, dan makin besar kemungkinan pengguna menyerah atau tidak puas dengan pilihannya. Sludge adalah hambatan yang membuat keputusan yang sebenarnya baik menjadi sulit diambil. Membersihkan sludge biasanya lebih efektif daripada mendorong pengguna ke pilihan tertentu (nudge).
  - Cek: fitur atau opsi yang jarang dipakai tetapi berada di jalur utama; keputusan yang sebenarnya tidak perlu diminta dari pengguna; langkah memilih yang berbelit; pilihan yang sulit dibedakan; tidak ada bantuan memilih untuk keputusan yang jarang dilakukan pengguna.
  - Rekomendasi: kurangi pilihan di jalur utama dan pindahkan opsi lanjutan ke pengaturan atau progressive disclosure; gunakan default yang masuk akal; untuk keputusan sulit, sediakan alat bantu seperti rekomendasi, kuis singkat, kalkulator, atau tabel banding.
  - Catatan konteks: perkirakan tingkat kesulitan keputusan dari empat faktor: seberapa sering pengguna pernah membuat keputusan sejenis, seberapa besar dampaknya bagi hidup atau pekerjaan mereka, berapa banyak opsi yang biasanya dibandingkan, dan seberapa mudah opsi itu dibedakan. Makin sulit, makin perlu alat bantu.

- Prospect theory: certainty, isolation effect, loss aversion, dan framing
  - Inti: pengguna tidak memutuskan secara murni rasional. Untuk keuntungan, mereka memilih yang pasti walaupun lebih kecil (certainty). Untuk kerugian, mereka berani mengambil risiko demi menghindari kerugian pasti. Rasa rugi terasa lebih kuat daripada rasa untung yang sama besar (loss aversion). Saat membandingkan, mereka mengabaikan hal yang sama di semua opsi dan fokus pada perbedaannya (isolation effect), sehingga cara penyajian (framing) bisa mengubah keputusan.
  - Cek: kekhawatiran pengguna yang tidak dijawab sebelum mereka memulai proses (berapa lama, dokumen apa yang dibutuhkan, apakah bisa disimpan di tengah jalan); insentif berupa undian yang kurang menarik dibanding imbalan kecil yang pasti; penyajian angka yang bisa dibaca sebagai untung atau rugi; momen frustrasi kecil yang menumpuk, karena pengalaman buruk diingat lebih kuat.
  - Rekomendasi: tampilkan estimasi waktu dan daftar dokumen di awal proses; pilih imbalan pasti daripada undian; sajikan perbandingan dengan menonjolkan pembeda; perbaiki hambatan kecil karena dampaknya ke persepsi lebih besar daripada kelihatannya.
  - Batas etis: prinsip ini tidak boleh dipakai untuk menakut-nakuti atau menjebak. Periksa deceptive patterns dengan daftar lengkap di kelompok I.

- Anchoring
  - Inti: saat kekurangan informasi, orang bertumpu pada informasi pertama yang mereka lihat (jangkar) untuk memperkirakan nilai dan mengambil keputusan berikutnya, walaupun jangkar itu tidak relevan.
  - Cek: field angka kosong tanpa contoh atau nilai saran, sehingga pengguna baru tidak tahu nilai yang wajar; estimasi waktu atau jumlah langkah di awal proses yang tidak ada atau terlalu optimis; nilai default yang tidak mewakili kebutuhan mayoritas pengguna; harga atau angka pembanding yang menyesatkan.
  - Rekomendasi: beri default atau nilai saran yang mewakili kebutuhan umum pengguna, dengan pilihan untuk mengubahnya; tampilkan estimasi waktu yang akurat atau sedikit konservatif, karena estimasi yang meleset membuat pengguna merasa tertipu; gunakan angka pembanding yang jujur.
  - Catatan: anchoring paling membantu pengguna baru. Pengguna yang sangat ahli di domainnya biasanya sudah punya jangkar sendiri yang akurat.

**G. Interaction cost dan motor behavior**

- Interaction cost dan expected utility
  - Inti: interaction cost adalah total usaha mental dan fisik untuk mencapai tujuan: membaca, scroll, mencari dengan mata, memahami, klik atau tap, mengetik, menunggu, berpindah perhatian, dan mengingat. Pengguna memilih tindakan dengan manfaat terbesar dikurangi usaha terkecil (expected utility). Bila usaha di satu produk terlihat terlalu besar, mereka pindah ke produk lain, kecuali motivasinya sangat tinggi atau mereka tidak punya pilihan.
  - Teknik: untuk flow atau tugas utama, uraikan langkah demi langkah termasuk sub-langkah mental (menemukan, memindai, memutuskan, menunggu), lalu tandai sub-langkah yang bisa dihapus atau dipercepat. Teknik yang sama dipakai untuk membandingkan dua alternatif desain. Pemetaan flow lengkap, area cek level flow dan journey, dan format peta flow ada di `references/task-flow.md` (Lensa 1). Temuan tentang panjang atau urutan flow dilaporkan di Lensa 1 dengan prinsip ini sebagai dasar penilaian; temuan di level satu kontrol tetap di lensa ini.
  - Cek: splash screen atau layar tunggu yang tidak perlu; informasi yang disembunyikan di tab horizontal atau bagian yang tidak terlihat; daftar saran atau riwayat yang menambah beban memindai; jumlah langkah yang bisa dipangkas; perpindahan antar jendela atau halaman yang memaksa pengguna menyatukan informasi sendiri.
  - Catatan konteks: bobot setiap komponen berbeda menurut pengguna (pengguna disleksia lebih terbebani membaca, pengguna dengan hambatan motorik lebih terbebani klik) dan perangkat (menunggu terasa jauh lebih mahal di koneksi lambat). Pengguna yang wajib memakai sistem akan bertahan walau usahanya besar, tetapi itu tidak membuat usaha besar dapat diterima, karena biayanya muncul sebagai waktu kerja yang hilang, kesalahan, dan permintaan bantuan.

- Fitts's law
  - Inti: waktu menggerakkan kursor atau jari ke sebuah target bergantung pada jarak dan ukuran target. Target yang dekat dan besar lebih cepat dan lebih jarang meleset. Gerakan terdiri dari dua fase: fase cepat menuju arah target (dipengaruhi jarak) dan fase lambat untuk memastikan tepat sasaran (dipengaruhi ukuran).
  - Cek: target kecil; ikon dengan label yang area kliknya hanya ikonnya; target yang berdempetan sehingga mudah salah klik; area klik yang diperbesar dengan padding tak terlihat (pengguna tetap melambat karena tidak tahu); tombol submit jauh dari field terakhir (misalnya di header atas pada layar mobile); menu kontekstual yang opsinya muncul jauh dari tombol pemicu; urutan menu panjang yang tidak menaruh item paling sering dipakai di dekat pemicu.
  - Rekomendasi: perbesar target utama; jadikan seluruh area ikon dan label bisa diklik; beri jarak yang cukup antar target; letakkan tombol submit tepat setelah field terakhir; tampilkan opsi menu dekat pemicunya; urutkan item menu linear berdasarkan frekuensi pemakaian. Kaitkan temuan ukuran target dengan WCAG 2.5.8 di Lensa 3.
  - Catatan konteks: dengan mouse, target di tepi layar sangat mudah dicapai karena kursor berhenti di tepi (target dianggap tak terbatas). Keuntungan ini tidak berlaku di layar sentuh; target di tepi layar sentuh justru cenderung lebih lambat dicapai.

- Perilaku hemat usaha: device inertia, momentum behavior, dan selective attention
  - Inti: pengguna tidak malas; mereka menimbang manfaat dan usaha dengan cakrawala yang sangat pendek, biasanya hanya satu langkah ke depan. Tiga pola yang sering terlihat:
    - Device inertia: pengguna tetap memakai perangkat yang sedang dipegang walaupun perangkat lain lebih cocok, karena berpindah perangkat terasa mahal.
    - Momentum behavior: pengguna bertahan pada cara pertama yang mereka temukan dan yang "cukup berhasil", walaupun ada fitur yang lebih baik di depan mata.
    - Selective attention: pengguna fokus pada area yang mereka anggap relevan dan mengabaikan sisanya, terutama elemen yang mirip iklan atau banner.
  - Cek: tugas penting yang hanya nyaman dikerjakan di desktop padahal pengguna sering memakai ponsel; pekerjaan yang tidak tersinkron antar perangkat; fitur yang lebih efisien tetapi tidak terlihat di jalur yang biasa dilalui pengguna; jalan pintas yang ada tetapi tidak pernah ditawarkan di saat relevan; elemen penting yang bentuk, ukuran, atau posisinya mirip iklan.
  - Rekomendasi: pastikan tugas utama bisa diselesaikan di perangkat yang paling sering dipakai; sinkronkan pekerjaan antar perangkat; tawarkan cara yang lebih efisien tepat di titik pengguna sedang memakai cara lama; jangan membuat elemen penting tampil seperti iklan. Saat menulis temuan, jangan menyalahkan pengguna; jelaskan mengapa desainnya membuat jalan yang lebih baik tidak terlihat.

**H. Motivation dan psychological needs**

- Self-determination theory: autonomy, relatedness, dan competence
  - Inti: orang paling termotivasi memakai produk yang memenuhi tiga kebutuhan dasar. Autonomy adalah kebebasan memakai produk sesuai preferensi dan prioritas sendiri. Relatedness adalah rasa dipahami dan terhubung, baik dengan organisasi pembuat produk maupun dengan orang lain. Competence adalah rasa mampu menyelesaikan tugas dengan berhasil dan efisien.
  - Cek autonomy: hanya ada satu cara untuk menyelesaikan tugas (misalnya bantuan hanya lewat chatbot, atau informasi hanya bisa didapat setelah mengisi data pribadi); langkah perkenalan atau personalisasi yang wajib dan tidak bisa ditunda; pilihan preset tanpa opsi isian sendiri; konten yang sulit dipindai sehingga pengguna dipaksa membaca semuanya; tidak ada default sehingga pengguna harus mengatur semuanya sebelum bisa mulai.
  - Cek relatedness: pesan, notifikasi, atau email yang tidak relevan dengan situasi pengguna (misalnya promosi produk yang baru saja dibeli); nada bahasa yang tidak sesuai momen; tidak ada cara berbagi atau melibatkan rekan dalam alur kerja yang sebenarnya kolaboratif.
  - Cek competence: tutorial panjang yang dipaksakan di awal; bantuan yang tidak muncul saat pengguna benar-benar membutuhkannya; aplikasi rumit tanpa petunjuk sama sekali, sehingga pengguna harus mencari bantuan di luar produk.
  - Rekomendasi: beri beberapa cara untuk mencapai tujuan yang sama; izinkan pengguna menunda langkah opsional dan menjelajah sebelum memberi data pribadi; sediakan sedikit opsi kustomisasi yang bermakna (misalnya tampilan daftar atau kartu) dan akselerator untuk pengguna mahir; kirim pesan yang sedikit, relevan, dan tepat waktu; berikan bantuan dengan cara "pull" (muncul saat pengguna membuka fitur itu pertama kali) daripada "push" (dipaksakan di awal).
  - Catatan: bila tes dengan pengguna menunjukkan petunjuk tidak membantu, perbaiki desainnya; jangan menambah instruksi.

- Fresh start effect
  - Inti: orang lebih terdorong memulai tindakan menuju tujuan setelah penanda waktu yang terasa seperti awal baru, misalnya awal minggu, awal bulan, awal semester, tahun baru, atau momen pribadi seperti ulang tahun dan pindah kerja.
  - Cek: pengingat atau ajakan untuk tujuan jangka panjang yang waktunya acak; label periode yang datar sehingga tidak terasa sebagai awal baru; ajakan yang tidak terhubung dengan tujuan pengguna sendiri.
  - Rekomendasi: selaraskan pengingat dan ajakan dengan awal periode yang bermakna bagi pengguna; beri nama yang menonjolkan awal baru (misalnya "Semester baru dimulai" alih-alih hanya tanggal); hubungkan ajakan dengan tujuan yang memang ingin dicapai pengguna.
  - Batas etis: hanya rekomendasikan efek ini untuk mendorong tindakan yang menguntungkan pengguna. Jangan menyarankan meminta data pribadi (misalnya tanggal lahir) hanya untuk memanfaatkan efek ini.

**I. Persuasion, trust, dan ethics**

Prinsip persuasi sah dipakai bila informasinya benar dan tindakan yang didorong menguntungkan pengguna. Prinsip yang sama menjadi deceptive pattern bila informasinya dipalsukan atau tindakan yang didorong merugikan pengguna. Setiap temuan di kelompok ini harus menyebut ke arah mana penggunaannya.

- Trust pyramid
  - Inti: kepercayaan pengguna naik bertahap melalui lima tingkat: (1) yakin produk relevan dan kredibel, (2) lebih memilih produk ini dibanding alternatif, (3) bersedia memberi data pribadi, (4) bersedia memberi data sensitif atau keuangan, (5) bersedia berkomitmen jangka panjang (langganan, menghubungkan akun lain). Permintaan di tingkat atas akan ditolak bila tingkat bawah belum terpenuhi. Pengguna jarang menyadari keraguan ini, sehingga masalahnya terlihat dari perilaku (pergi, mengisi data palsu) dan jarang dari ucapan.
  - Cek: login wall atau pendaftaran sebelum pengguna bisa melihat apa yang ditawarkan; formulir yang meminta alamat lengkap, nomor telepon, atau akun media sosial di layar pertama; permintaan izin lokasi, notifikasi, kamera, atau mikrofon sebelum fiturnya dipakai; tombol ajakan mendaftar yang muncul berkali-kali sebelum nilai produk jelas.
  - Rekomendasi: beri kesempatan menjelajah dulu; tunda permintaan data sampai pengguna melihat nilainya; minta izin tepat saat fitur yang membutuhkannya dipakai, beserta alasan dan apa yang akan dikirim (misalnya jenis notifikasi); bila data dibutuhkan untuk menampilkan konten, minta versi paling ringan dulu (misalnya kode pos sebelum alamat lengkap).

- Faktor kredibilitas
  - Inti: kepercayaan dibangun dari empat faktor yang stabil dari tahun ke tahun: kualitas desain (organisasi, label, dan tampilan yang rapi), keterbukaan informasi di awal (harga lengkap, biaya tambahan, kontak, kebijakan), konten yang lengkap, benar, dan terbaru, serta keterhubungan dengan sumber luar (ulasan pihak ketiga, liputan media). Menurut prominence-interpretation theory, pengguna menilai kredibilitas dari elemen yang paling menonjol, lalu menafsirkannya sesuai konteks dan harapan mereka.
  - Cek: salah ketik, link rusak, dan konten yang lama tidak diperbarui; harga, biaya, atau waktu layanan yang hanya bisa diketahui lewat formulir panjang; iklan yang sulit dibedakan dari konten; elemen paling menonjol yang ditafsirkan negatif (misalnya ilustrasi kartun untuk layanan keuangan, atau dua ajakan mendaftar di layar pertama); foto yang hanya menunjukkan sebagian jenis pengguna sehingga kelompok lain merasa produk bukan untuk mereka.
  - Rekomendasi: perbaiki detail kecil yang merusak kesan; tampilkan informasi penting secara terbuka, atau beri kisaran bila angka pastinya butuh banyak data; pastikan elemen paling menonjol memberi tafsiran yang sesuai konteks domain; tampilkan cakupan layanan dan pengguna secara lengkap.

- Enam prinsip pengaruh (Cialdini)
  - Reciprocity: orang membalas kebaikan. Beri nilai lebih dulu (konten, ringkasan, akses mencoba) sebelum meminta data atau komitmen. Cek konten yang dikunci formulir tanpa cuplikan, dan tutorial panjang yang membebani pengguna di awal.
  - Social proof: orang melihat perilaku orang lain untuk memutuskan. Ulasan, jumlah pengguna, dan "orang lain juga melihat" membantu keputusan. Cek angka yang terlalu kecil sehingga justru menurunkan kepercayaan, widget sosial yang memperlambat halaman, dan ulasan yang disaring hanya positif.
  - Liking: orang lebih mudah setuju dengan pihak yang mereka sukai, yang mirip dengan mereka, dan yang terasa nyata. Foto tim atau petugas dukungan yang asli dan cerita organisasi bisa menurunkan ketegangan, termasuk di sistem internal. Cek foto orang yang tidak cocok dengan pengguna target.
  - Scarcity: barang, waktu, atau informasi yang terbatas terasa lebih berharga, karena terkait loss aversion. Sah bila datanya benar dan dipakai secukupnya. Cek hitung mundur atau stok "tinggal sedikit" yang tidak bisa diverifikasi.
  - Authority: orang cenderung mengikuti pihak yang dianggap ahli. Logo lembaga, sertifikasi, dan kutipan ahli menaikkan kepercayaan bila relevan dengan bidangnya dan sudah mendapat izin. Cek dukungan dari tokoh di bidang yang tidak berhubungan.
  - Commitment dan consistency: orang cenderung bertindak konsisten dengan keputusan sebelumnya. Mulai dengan komitmen kecil yang mudah dan berisiko rendah, tunjukkan progres, lalu tawarkan langkah berikutnya. Cek komitmen besar yang diminta di awal (misalnya akun wajib sebelum mencoba).

- Creepiness-convenience tradeoff
  - Inti: saat fitur memakai data pribadi (lokasi, perilaku, rekaman), pengguna menimbang rasa terganggu privasinya terhadap kemudahan yang didapat. Ambang ini berbeda antar orang dan antar budaya, dan bisa turun seiring pengguna terbiasa dan melihat manfaatnya.
  - Cek: data yang dikumpulkan tanpa penjelasan untuk apa; fitur personalisasi yang menunjukkan pengetahuan tentang pengguna secara mengejutkan; tidak ada cara mematikan fitur yang memakai data pribadi.
  - Rekomendasi: minta data bertahap seiring manfaat terlihat; jelaskan data apa yang dikumpulkan dan untuk apa; beri kendali untuk mematikan atau mengatur fitur tersebut.

- Pemeriksaan deceptive patterns
  - Inti: deceptive patterns mendorong pengguna mengambil tindakan yang menguntungkan organisasi dengan cara menipu, mengalihkan, mempermalukan, atau menghalangi pilihan lain. Pola ini paling berhasil pada pengguna yang paling rentan: sedang terburu-buru, literasi rendah, atau literasi digital rendah. Banyak di antaranya juga bermasalah secara hukum perlindungan konsumen dan data pribadi.
  - Jenis yang dicek:
    - Sneaking: forced continuity (masa coba gratis yang otomatis jadi berbayar tanpa pemberitahuan jelas, tagihan berulang tanpa pengingat), hidden costs (biaya tambahan baru muncul di langkah akhir), sneak into basket atau preselection (item, tahun langganan, atau persetujuan yang sudah tercentang).
    - Obstruction: membatalkan, berhenti berlangganan, atau menolak dibuat jauh lebih sulit daripada mendaftar.
    - Visual atau wording tricks: kalimat negatif ganda, tombol tutup yang disamarkan atau dipindah jauh, label yang sengaja menyesatkan.
    - Nagging: permintaan yang terus muncul lagi setelah pengguna menolak.
    - Emotional manipulation: confirmshaming (link penolakan yang mempermalukan, misalnya "Tidak, saya tidak suka hemat"), urgensi atau kelangkaan palsu, scare tactics yang menonjolkan kerugian, dan emotional framing (pilihan biasa dibingkai sebagai cerminan karakter pengguna).
    - Ketidakcocokan copy dan pilihan: teks menjanjikan sesuatu (misalnya "bukan langganan") yang tidak tersedia di pilihan sebenarnya. Contoh copy per pola ada di `references/ux-writing.md` bagian 11.
  - Pertanyaan pemeriksaan: apakah pengguna bisa membayar atau memberi data lebih dari yang mereka maksudkan; apakah pertukaran (data atau persetujuan dengan fitur) adil; apakah informasi tiap pilihan benar; apakah pilihan bisa disalahpahami atau terlewat; apakah informasi penting mudah diakses; apakah pilihan yang diinginkan pengguna bisa dijalankan tanpa langkah berlebihan; apakah pengguna didesak atau dibuat merasa bersalah saat menolak. Jawab pertanyaan ini dengan membayangkan pengguna paling rentan dalam profil konteks.
  - Severity: setiap deceptive pattern minimal Tinggi; yang menyebabkan kerugian uang atau data tanpa persetujuan jelas dinilai Kritis.

- Attention capture dan the Vortex
  - Inti: the Vortex adalah pola ketika satu interaksi yang disengaja berubah menjadi rangkaian interaksi yang tidak direncanakan, sehingga pengguna merasa ditarik masuk dan kehilangan kendali atas waktunya. Pemicunya antara lain notifikasi, konten tanpa akhir, putar otomatis, FOMO (takut ketinggalan), dan teknik foot-in-the-door (ajakan "cukup satu klik" yang membuka rangkaian interaksi panjang).
  - Cek: notifikasi yang tidak bisa diatur jenis atau frekuensinya; notifikasi yang mengantar ke beranda atau feed alih-alih ke item yang dimaksud ("hide the milk"); scroll tanpa titik henti atau putar otomatis tanpa opsi mematikan; titik akhir alami sebuah tugas yang langsung diisi ajakan lain.
  - Rekomendasi: notifikasi yang bisa diatur dan langsung membuka konteksnya; titik henti yang jelas; opsi mematikan putar otomatis; akhiri tugas dengan konfirmasi yang tuntas.
  - Catatan konteks: untuk produk yang dipakai anak, orang tua adalah pengambil keputusan dan khawatir soal pemakaian berlebihan. Periksa mekanisme pencegah pemakaian berlebihan, kontrol orang tua yang mudah ditemukan dan dijelaskan secara terus terang, serta komponen edukatif.

- Anthropomorphism dan trust pada AI
  - Inti: pengguna cepat menganggap sistem percakapan punya sifat manusia (ELIZA effect), mulai dari sekadar sopan santun, memuji atau menegur, memberi peran ("bertindaklah sebagai manajer proyek"), sampai menjadikannya teman. Kecenderungan ini sudah bawaan teknologi model bahasa. Humanisasi adalah keputusan desain yang memperkuatnya, misalnya nama dan avatar manusia, kepribadian yang bisa dipilih, bahasa emosional, dan basa-basi pembuka. Riset menunjukkan pengguna lebih mau mengikuti saran AI yang terlihat cerdas, dan justru kurang mau mengikuti AI yang terlihat punya emosi. Model yang diarahkan supaya lebih hangat juga cenderung lebih sering salah dan lebih sering sekadar mengiyakan pengguna (sycophancy).
  - Inti (overtrust): jawaban AI selalu terdengar yakin, rapi, dan benar secara tata bahasa. Lewat halo effect, kerapian ini membuat pengguna menganggap isinya juga akurat, lalu menerima jawaban tanpa memeriksa (magic-8-ball thinking). Risiko ini paling tinggi saat pengguna bertanya di luar keahliannya, saat jawaban sebelumnya sering benar, dan pada pengguna yang menganggap AI seperti sihir. Pengguna yang paling antusias belum tentu yang paling kritis.
  - Cek: nama, avatar, atau salinan teks yang memposisikan AI sebagai orang atau teman; basa-basi atau pujian di awal jawaban yang tidak membawa informasi; klaim AI memahami, peduli, atau berpikir; nada santai untuk topik serius; chatbot sebagai satu-satunya jalur bantuan; tidak ada penjelasan batas kemampuan; tidak ada jalur ke petugas manusia untuk masalah sensitif; peringatan akurasi yang hanya berupa teks kecil statis.
  - Rekomendasi: posisikan AI sebagai alat kerja dengan nama yang menjelaskan fungsinya; boleh memakai kata "saya" dan nada yang ramah, tetapi jangan mengklaim punya perasaan; boleh mengakui perasaan pengguna bila pengguna menyampaikannya; persempit cakupan fitur supaya kompetensinya terlihat; nyatakan apa yang tidak bisa dilakukan dengan andal; sediakan jalur alternatif (menu, FAQ, petugas manusia). Cara mendukung pemeriksaan jawaban dibahas di Lensa 7.
  - Catatan konteks: humanisasi hanya relevan untuk produk yang memang dirancang untuk relasi (pendamping belajar, mitra kreatif), dan tetap harus aman. Untuk produk kerja dan layanan resmi, prioritaskan kompetensi dan ketepatan.

## Aturan khusus Lensa 2
- Setiap temuan wajib menyebut alasan kontekstual, yaitu mengapa prinsip itu penting untuk produk dan pengguna ini (contoh: "karena layar ini dibuka setiap hari oleh staf administrasi, perubahan urutan menu akan merusak kebiasaan mereka").
- Jangan memaksakan semua prinsip. Prinsip yang tidak relevan dengan profil konteks cukup disebut singkat di laporan sebagai "dikesampingkan" beserta alasannya dalam satu kalimat.
- Bedakan dugaan perilaku dari bukti. Dampak psikologis yang disimpulkan dari tampilan statis diberi confidence "Perlu verifikasi" kecuali sangat jelas, dan sarankan cara memvalidasinya (usability testing, 5-second test, analytics).
