import { MaterialData } from "../src/lib/content-types";

export const contentLevels1to3: MaterialData[] = [
  // ============================================
  // LEVEL 1 - DASAR
  // ============================================
  {
    level: 1,
    order: 1,
    title: "Pengenalan Coding",
    slug: "pengenalan-coding",
    description: "Mengenal apa itu coding, bahasa pemrograman, dan mengapa belajar coding penting di era digital.",
    icon: "💡",
    isProject: false,
    content: `# Pengenalan Coding

**Coding** atau pemrograman adalah proses menulis instruksi yang dapat dipahami oleh komputer menggunakan bahasa pemrograman. Instruksi ini disebut **kode**, dan ketika dijalankan, komputer akan melakukan tugas sesuai kode yang ditulis.

## Mengapa Belajar Coding?

Di era digital, hampir semua aspek kehidupan melibatkan teknologi. Belajar coding memberikan kamu kemampuan untuk:

- **Membuat aplikasi** dan website sendiri
- **Memecahkan masalah** secara logis dan terstruktur
- **Berkarir** di bidang teknologi yang terus berkembang
- **Mengotomatisasi** tugas-tugas berulang

## Bahasa Pemrograman

Ada banyak bahasa pemrograman, masing-masing dirancang untuk tujuan berbeda:

\`\`\`text
JavaScript  → Web frontend & backend
Python      → Data science, AI, automation
Java        → Android, enterprise apps
C++         → Game, system programming
\`\`\`

## Cara Komputer Membaca Kode

Komputer hanya memahami **0 dan 1** (binary). Bahasa pemrograman adalah jembatan antara manusia dan komputer. Prosesnya:

1. Kamu menulis kode dalam bahasa tingkat tinggi (misal JavaScript)
2. **Compiler** atau **interpreter** menerjemahkan kode ke bahasa mesin
3. Komputer menjalankan instruksi tersebut

## Tips untuk Pemula

- Mulai dari **dasar**, jangan terburu-buru
- **Latihan** setiap hari, bahkan hanya 30 menit
- Jangan takut **salah** — error adalah bagian dari belajar
- Bangun **proyek kecil** untuk mempraktikkan teori

> "Cara terbaik belajar coding adalah dengan menulis kode." — Prinsip utama belajar pemrograman`,
    quiz: [
      {
        question: "Apa yang dimaksud dengan coding?",
        options: [
          "Proses merakit komputer",
          "Proses menulis instruksi untuk komputer menggunakan bahasa pemrograman",
          "Proses mendesain tampilan website",
          "Proses mengelola database"
        ],
        answer: 1,
        explanation: "Coding adalah menulis instruksi (kode) menggunakan bahasa pemrograman agar komputer dapat melakukan tugas tertentu."
      },
      {
        question: "Mengapa komputer membutuhkan compiler atau interpreter?",
        options: [
          "Untuk membuat website lebih cepat",
          "Untuk menerjemahkan bahasa tingkat tinggi ke bahasa mesin (binary)",
          "Untuk menyimpan data di database",
          "Untuk mendesain antarmuka pengguna"
        ],
        answer: 1,
        explanation: "Komputer hanya memahami binary (0 dan 1). Compiler/interpreter menerjemahkan kode bahasa tingkat tinggi ke bahasa mesin."
      },
      {
        question: "Bahasa pemrograman mana yang paling tepat untuk pengembangan web frontend?",
        options: ["Python", "C++", "JavaScript", "Java"],
        answer: 2,
        explanation: "JavaScript adalah bahasa utama untuk web frontend karena didukung oleh semua browser modern."
      }
    ]
  },
  {
    level: 1,
    order: 2,
    title: "Cara Kerja Website",
    slug: "cara-kerja-website",
    description: "Memahami arsitektur web: client, server, HTTP, dan peran browser dalam menampilkan halaman.",
    icon: "🌐",
    isProject: false,
    content: `# Cara Kerja Website

Setiap kali kamu membuka sebuah website, terjadi serangkaian proses di balik layar yang melibatkan **client**, **server**, dan jaringan internet. Memahami proses ini penting sebelum mulai membangun web.

## Client dan Server

Website bekerja dengan model **client-server**:

- **Client**: Perangkat kamu (laptop, HP) yang menjalankan **browser** seperti Chrome atau Firefox. Browser bertugas meminta dan menampilkan halaman web.
- **Server**: Komputer khusus yang menyimpan file website dan merespons permintaan dari client. Server selalu menyala dan terhubung ke internet.

## Alur Permintaan HTTP

Ketika kamu mengetik URL di browser, terjadi langkah-langkah berikut:

\`\`\`text
1. Browser mencari alamat IP via DNS
2. Browser mengirim request HTTP ke server
3. Server memproses request dan mencari file
4. Server mengirim response (HTML, CSS, JS) ke browser
5. Browser merender halaman web untuk ditampilkan
\`\`\`

**HTTP** (HyperText Transfer Protocol) adalah aturan komunikasi antara client dan server. Saat aman, digunakan **HTTPS** yang datanya dienkripsi.

## DNS: Buku Telepon Internet

Manusia mengingat nama domain seperti \`google.com\`, tapi komputer butuh **alamat IP** berupa angka seperti \`142.250.190.46\`. **DNS** (Domain Name System) menerjemahkan nama domain ke alamat IP.

## Teknologi Frontend vs Backend

Pengembangan web dibagi menjadi dua bagian besar:

- **Frontend**: Bagian yang dilihat user di browser. Teknologinya: **HTML** (struktur), **CSS** (tampilan), **JavaScript** (interaktivitas).
- **Backend**: Bagian di server yang mengelola data dan logika. Teknologinya: **Node.js**, **Python**, **PHP**, dan **database** seperti MySQL atau PostgreSQL.

## Tips Memahami Arsitektur Web

- Coba buka **DevTools** (F12) di browser, lihat tab **Network** untuk melihat request yang terjadi
- Perhatikan bahwa setiap gambar, file CSS, dan JS adalah request terpisah
- Pahami bahwa frontend berjalan di browser, backend berjalan di server

> Memahami alur request-response adalah fondasi penting sebelum mendalami web development.`,
    quiz: [
      {
        question: "Apa peran browser dalam arsitektur web?",
        options: [
          "Menyimpan data user secara permanen",
          "Berperan sebagai client yang meminta dan menampilkan halaman web",
          "Menjalankan kode backend",
          "Mengelola database server"
        ],
        answer: 1,
        explanation: "Browser adalah client yang mengirim request HTTP ke server dan merender response (HTML/CSS/JS) untuk ditampilkan ke user."
      },
      {
        question: "Apa fungsi DNS dalam internet?",
        options: [
          "Mengenkripsi data antara client dan server",
          "Menyimpan file website",
          "Menerjemahkan nama domain menjadi alamat IP",
          "Menjalankan JavaScript di server"
        ],
        answer: 2,
        explanation: "DNS (Domain Name System) berfungsi seperti buku telepon yang menerjemahkan nama domain (mis. google.com) menjadi alamat IP numerik."
      },
      {
        question: "Manakah yang termasuk teknologi frontend?",
        options: [
          "MySQL dan PostgreSQL",
          "Node.js dan Express",
          "HTML, CSS, dan JavaScript",
          "Python dan Django"
        ],
        answer: 2,
        explanation: "Frontend berjalan di browser dan menggunakan HTML (struktur), CSS (tampilan), dan JavaScript (interaktivitas)."
      }
    ]
  },
  {
    level: 1,
    order: 3,
    title: "Instalasi VS Code",
    slug: "instalasi-vscode",
    description: "Langkah instalasi Visual Studio Code, pengenalan interface, dan ekstensi wajib untuk web developer.",
    icon: "📦",
    isProject: false,
    content: `# Instalasi VS Code

**Visual Studio Code (VS Code)** adalah code editor gratis buatan Microsoft yang paling populer di kalangan developer. Editor ini ringan, cepat, dan punya ekosistem ekstensi yang sangat kaya.

## Mengapa VS Code?

VS Code dipilih banyak developer karena:

- **Gratis** dan open source
- **Ringan** dan cepat dibuka
- Dukungan **ekstensi** untuk berbagai bahasa
- **Integrated terminal** tanpa pindah aplikasi
- **Git integration** bawaan
- **IntelliSense** (autocomplete cerdas)

## Langkah Instalasi

Berikut cara instalasi VS Code di berbagai sistem operasi:

\`\`\`bash
# Windows
# 1. Download installer dari https://code.visualstudio.com
# 2. Jalankan VSCodeUserSetup.exe
# 3. Ikuti wizard instalasi

# macOS
# 1. Download .zip dari website resmi
# 2. Ekstrak dan pindahkan ke folder Applications
# Atau via Homebrew:
brew install --cask visual-studio-code

# Linux (Debian/Ubuntu)
sudo apt install ./<file>.deb
\`\`\`

## Mengenal Interface

Setelah dibuka, kamu akan melihat beberapa bagian utama:

- **Activity Bar** (kiri): Ikon untuk Explorer, Search, Source Control, Run, Extensions
- **Side Bar**: Navigasi file dan folder
- **Editor**: Tempat menulis kode
- **Terminal** (bawah): Jalankan perintah, tekan \`Ctrl + \\\`\` (backtick)
- **Status Bar** (bawah): Info branch Git, bahasa, baris/kolom

## Ekstensi Wajib untuk Web Developer

Buka tab Extensions (\`Ctrl+Shift+X\`) dan install:

\`\`\`text
1. Live Server         → Preview HTML otomatis di browser
2. Prettier            → Auto-format kode
3. ESLint              → Cek error JavaScript
4. Auto Rename Tag     → Rename tag HTML berpasangan
5. Path Intellisense   → Autocomplete path file
\`\`\`

## Shortcut Penting

Hafalkan shortcut berikut agar lebih produktif:

- \`Ctrl + P\`: Cari file cepat
- \`Ctrl + Shift + P\`: Command Palette
- \`Ctrl + \\\`\`: Buka terminal
- \`Ctrl + B\`: Toggle side bar
- \`Alt + ↑/↓\`: Pindah baris ke atas/bawah

> Investasi waktu mempelajari shortcut akan sangat menghemat waktumu sebagai developer.`,
    quiz: [
      {
        question: "Apa kegunaan ekstensi Live Server di VS Code?",
        options: [
          "Menjalankan server backend Node.js",
          "Mempreview halaman HTML otomatis di browser saat file disimpan",
          "Mengelola database",
          "Mengcompile kode TypeScript"
        ],
        answer: 1,
        explanation: "Live Server membuka halaman HTML di browser dan otomatis me-refresh saat file disimpan, sangat membantu saat development frontend."
      },
      {
        question: "Shortcut apa yang digunakan untuk membuka terminal di VS Code?",
        options: ["Ctrl + P", "Ctrl + Shift + P", "Ctrl + ` (backtick)", "Ctrl + B"],
        answer: 2,
        explanation: "Tekan Ctrl + ` (backtick) untuk membuka integrated terminal di VS Code tanpa pindah aplikasi."
      },
      {
        question: "Mengapa VS Code banyak dipilih developer?",
        options: [
          "Karena berbayar dan eksklusif",
          "Karena ringan, gratis, dan punya banyak ekstensi",
          "Karena hanya mendukung satu bahasa pemrograman",
          "Karena tidak punya terminal bawaan"
        ],
        answer: 1,
        explanation: "VS Code gratis, ringan, cepat, dan punya ekosistem ekstensi yang kaya untuk berbagai bahasa pemrograman."
      }
    ]
  },
  {
    level: 1,
    order: 4,
    title: "Struktur Folder Proyek",
    slug: "struktur-folder-proyek",
    description: "Belajar menyusun struktur folder proyek yang rapi dan mengikuti best practice web development.",
    icon: "📁",
    isProject: false,
    content: `# Struktur Folder Proyek

Struktur folder yang rapi adalah ciri khas proyek yang sehat. Mengatur file dengan baik membuat proyek **mudah dipelihara**, **mudah dicari**, dan **kolaboratif** bersama developer lain.

## Mengapa Struktur Folder Penting?

Bayangkan proyek dengan ratusan file bercampur aduk di satu folder — pasti pusing. Struktur folder yang baik memberi:

- **Keterbacaan**: Developer baru cepat paham letak file
- **Maintainability**: Mudah update dan debug
- **Kolaborasi**: Tim bisa bekerja tanpa konflik
- **Scaling**: Proyek tetap rapi saat berkembang

## Struktur Folder Website Sederhana

Berikut contoh struktur proyek website statis:

\`\`\`text
my-website/
├── index.html
├── about.html
├── contact.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── main.js
│   └── utils.js
├── images/
│   ├── logo.png
│   └── hero.jpg
└── assets/
    ├── fonts/
    └── icons/
\`\`\`

## Prinsip Penataan Folder

Beberapa prinsip yang harus dipegang:

1. **Pisahkan berdasarkan jenis** — file CSS, JS, dan gambar di folder terpisah
2. **Gunakan nama deskriptif** — \`style.css\` lebih jelas dari \`s.css\`
3. **Huruf kecil dan kebab-case** — \`about-us.html\` bukan \`AboutUs.html\`
4. **Hindari spasi** — gunakan tanda hubung (\`-\`) sebagai pemisah
5. **Satu file, satu tanggung jawab** — pisahkan logika besar ke file kecil

## File Penting yang Sering Ada

Beberapa file umum di hampir setiap proyek:

\`\`\`text
README.md       → Dokumentasi proyek
.gitignore      → File/folder yang diabaikan Git
index.html      → Halaman utama website
package.json    → Konfigurasi proyek Node.js
\`\`\`

## Tips untuk Pemula

- Buat struktur folder **di awal** sebelum mulai coding
- **Konsisten** dengan konvensi penamaan
- Jangan buat folder terlalu dalam (maksimal 3-4 level)
- **Dokumentasikan** struktur di \`README.md\` agar tim paham

> Struktur folder yang baik adalah investasi jangka panjang untuk proyekmu.`,
    quiz: [
      {
        question: "Apa prinsip terbaik dalam memberi nama file proyek?",
        options: [
          "Gunakan huruf besar dan spasi",
          "Gunakan huruf kecil dengan kebab-case dan hindari spasi",
          "Gunakan angka acak agar unik",
          "Gunakan nama sependek mungkin meski tidak jelas"
        ],
        answer: 1,
        explanation: "Penamaan file terbaik menggunakan huruf kecil dengan kebab-case (mis. about-us.html) dan menghindari spasi agar konsisten dan URL-friendly."
      },
      {
        question: "Mengapa file CSS, JS, dan gambar sebaiknya dipisah ke folder berbeda?",
        options: [
          "Agar ukuran proyek lebih kecil",
          "Agar mudah dicari, dipelihara, dan dikelola sesuai jenisnya",
          "Karena browser hanya mau membaca dari folder terpisah",
          "Agar proyek terlihat lebih kompleks"
        ],
        answer: 1,
        explanation: "Memisahkan file berdasarkan jenis membuat proyek rapi, mudah dicari, dan mudah dipelihara seiring berkembangnya proyek."
      },
      {
        question: "Apa fungsi file .gitignore dalam proyek?",
        options: [
          "Mendokumentasikan struktur proyek",
          "Menentukan file/folder yang diabaikan oleh Git",
          "Menyimpan dependency proyek",
          "Menjadi halaman utama website"
        ],
        answer: 1,
        explanation: ".gitignore mendaftar file/folder (seperti node_modules atau .env) yang tidak ingin dilacak dan di-commit oleh Git."
      }
    ]
  },
  {
    level: 1,
    order: 5,
    title: "Dasar Git & GitHub",
    slug: "dasar-git-github",
    description: "Mengenal Git sebagai version control system dan GitHub untuk kolaborasi serta menyimpan kode online.",
    icon: "🔀",
    isProject: false,
    content: `# Dasar Git & GitHub

**Git** adalah sistem **version control** yang melacak perubahan kode seiring waktu. **GitHub** adalah platform online untuk menyimpan dan berkolaborasi pada proyek Git. Keduanya wajib dikuasai developer modern.

## Apa Itu Version Control?

Version control adalah sistem yang mencatat setiap perubahan pada file. Manfaatnya:

- **Riwayat lengkap**: Tahu siapa mengubah apa dan kapan
- **Rollback**: Kembali ke versi sebelumnya jika ada bug
- **Branching**: Bekerja pada fitur baru tanpa ganggu kode utama
- **Kolaborasi**: Banyak orang kerja pada proyek yang sama

## Konsep Dasar Git

Beberapa istilah penting yang harus dipahami:

- **Repository (repo)**: Folder proyek yang dilacak Git
- **Commit**: Snapshot perubahan dengan pesan deskriptif
- **Branch**: Cabang independen untuk pengembangan paralel
- **Remote**: Versi repo di server (mis. GitHub)

## Perintah Git Dasar

Berikut perintah Git yang paling sering dipakai:

\`\`\`bash
# Inisialisasi repo baru di folder saat ini
git init

# Clone repo dari GitHub
git clone https://github.com/user/repo.git

# Lihat status perubahan
git status

# Tambahkan semua perubahan ke staging
git add .

# Commit dengan pesan
git commit -m "Tambah halaman about"

# Kirim commit ke remote
git push origin main

# Ambil perubahan terbaru dari remote
git pull origin main
\`\`\`

## Alur Kerja Standar

Workflow harian developer dengan Git biasanya seperti ini:

\`\`\`text
1. git pull         → Ambil update terbaru
2. Edit kode        → Buat perubahan
3. git add .        → Stage perubahan
4. git commit -m    → Simpan dengan pesan
5. git push         → Kirim ke GitHub
\`\`\`

## Git vs GitHub

Banyak yang bingung membedakan keduanya:

- **Git**: Tool di komputermu untuk melacak perubahan (offline)
- **GitHub**: Layanan cloud untuk menyimpan repo dan kolaborasi (online)

> Analogi: Git seperti kamera yang mengambil foto, GitHub seperti album foto online tempat menyimpan dan berbagi foto-foto tersebut.

## Tips Commit yang Baik

- Pesan commit harus **deskriptif** dan **jelas**
- Gunakan **imperatif**: "Tambah fitur login" bukan "Menambah fitur login"
- **Commit kecil dan sering** lebih baik dari commit besar sekali
- Jangan commit file **sensitif** seperti password atau API key`,
    quiz: [
      {
        question: "Apa perbedaan utama antara Git dan GitHub?",
        options: [
          "Git dan GitHub adalah hal yang sama",
          "Git adalah tool version control di komputer, GitHub adalah platform online untuk menyimpan dan berkolaborasi repo",
          "Git adalah platform online, GitHub adalah tool di komputer",
          "Git untuk backend, GitHub untuk frontend"
        ],
        answer: 1,
        explanation: "Git adalah version control system yang berjalan lokal di komputermu, sedangkan GitHub adalah layanan cloud untuk hosting dan berkolaborasi pada repository Git."
      },
      {
        question: "Perintah apa yang digunakan untuk mengirim commit lokal ke repository remote?",
        options: ["git pull", "git add", "git commit", "git push"],
        answer: 3,
        explanation: "git push mengirim commit dari repo lokal ke repo remote (mis. GitHub). git pull sebaliknya, menarik perubahan dari remote ke lokal."
      },
      {
        question: "Apa fungsi perintah 'git commit -m pesan'?",
        options: [
          "Mengirim perubahan ke GitHub",
          "Menyimpan snapshot perubahan dengan pesan deskriptif",
          "Menghapus file yang diubah",
          "Membuat branch baru"
        ],
        answer: 1,
        explanation: "git commit -m menyimpan snapshot dari perubahan yang sudah di-stage (git add) dengan pesan deskriptif sebagai catatan versi."
      }
    ]
  },

  // ============================================
  // LEVEL 2 - HTML
  // ============================================
  {
    level: 2,
    order: 1,
    title: "Pengenalan HTML",
    slug: "pengenalan-html",
    description: "Mengenal HTML sebagai bahasa markup untuk membuat struktur halaman web dan elemen dasarnya.",
    icon: "📄",
    isProject: false,
    content: `# Pengenalan HTML

**HTML** (HyperText Markup Language) adalah bahasa standar untuk membuat struktur halaman web. HTML bukan bahasa pemrograman, melainkan **bahasa markup** yang menggunakan **tag** untuk menandai elemen.

## Apa Itu HTML?

HTML mendeskripsikan **struktur** halaman web menggunakan elemen-elemen. Browser membaca HTML dan menampilkannya sebagai halaman web. HTML terdiri dari serangkaian **elemen** yang dibungkus dengan **tag**.

## Struktur Dokumen HTML

Setiap halaman HTML memiliki struktur dasar seperti ini:

\`\`\`html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <title>Halaman Pertamaku</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>Ini paragraf pertamaku.</p>
  </body>
</html>
\`\`\`

Penjelasan setiap bagian:

- \`<!DOCTYPE html>\`: Memberitahu browser ini HTML5
- \`<html>\`: Elemen root yang membungkus semua konten
- \`<head>\`: Berisi metadata (judul, charset, dll) yang tidak tampil
- \`<title>\`: Judul halaman yang tampil di tab browser
- \`<body>\`: Berisi semua konten yang tampil di halaman

## Anatomi Elemen HTML

Sebuah elemen HTML umumnya terdiri dari **tag pembuka**, **konten**, dan **tag penutup**:

\`\`\`text
<p>Halo, ini paragraf</p>
^                 ^
|                 |
tag pembuka    tag penutup (dengan /)
\`\`\`

Beberapa elemen tidak punya penutup, disebut **void element**, seperti \`<img>\`, \`<br>\`, dan \`<input>\`.

## Atribut HTML

Elemen bisa punya **atribut** untuk memberi informasi tambahan:

\`\`\`html
<a href="https://google.com">Klik di sini</a>
<img src="foto.jpg" alt="Foto profil">
\`\`\`

- \`href\`: URL tujuan link
- \`src\`: Sumber gambar
- \`alt\`: Teks alternatif jika gambar gagal dimuat

## Cara Mencoba HTML

1. Buka **VS Code**, buat file \`index.html\`
2. Ketik kode di atas dan simpan
3. Klik kanan → **Open with Live Server**
4. Browser akan terbuka dan menampilkan halamanmu

> HTML adalah tulang punggung web. Tanpa HTML, tidak ada halaman web yang bisa ditampilkan browser.`,
    quiz: [
      {
        question: "Apa kepanjangan dari HTML?",
        options: [
          "High Text Machine Language",
          "HyperText Markup Language",
          "Hyperlink Text Management Language",
          "Home Tool Markup Language"
        ],
        answer: 1,
        explanation: "HTML adalah HyperText Markup Language, bahasa markup standar untuk membuat struktur halaman web."
      },
      {
        question: "Tag mana yang berisi konten yang akan ditampilkan di halaman browser?",
        options: ["<head>", "<title>", "<body>", "<meta>"],
        answer: 2,
        explanation: "Tag <body> berisi semua konten yang akan ditampilkan di halaman web, sedangkan <head> berisi metadata yang tidak tampil."
      },
      {
        question: "Manakah yang termasuk void element (tanpa tag penutup)?",
        options: ["<p>", "<div>", "<img>", "<span>"],
        answer: 2,
        explanation: "<img> adalah void element yang tidak punya tag penutup. Begitu juga <br>, <hr>, dan <input>."
      }
    ]
  },
  {
    level: 2,
    order: 2,
    title: "Heading & Paragraph",
    slug: "heading-paragraph",
    description: "Menggunakan tag heading h1-h6 dan paragraf untuk menyusun teks pada halaman web.",
    icon: "📝",
    isProject: false,
    content: `# Heading & Paragraph

**Heading** dan **paragraph** adalah elemen dasar untuk menampilkan teks di halaman web. Heading digunakan untuk judul dan subjudul, sementara paragraf untuk blok teks.

## Tag Heading

HTML menyediakan 6 level heading, dari \`<h1>\` (terbesar) hingga \`<h6>\` (terkecil):

\`\`\`html
<h1>Heading Level 1 - Paling Penting</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6 - Terkecil</h6>
\`\`\`

## Aturan Penggunaan Heading

- Gunakan **hanya satu \`<h1>\`** per halaman (judul utama)
- Urutkan heading secara **hirarkis**: h1 → h2 → h3, jangan loncat
- Heading membantu **SEO** dan **accessibility** (screen reader)
- Jangan gunakan heading hanya untuk **memperbesar teks** — gunakan CSS untuk styling

## Tag Paragraf

Tag \`<p>\` digunakan untuk menulis paragraf teks:

\`\`\`html
<p>HTML adalah bahasa markup untuk membuat halaman web.
Setiap paragraf akan otomatis diberi jarak oleh browser.</p>

<p>Ini paragraf kedua, terpisah dari paragraf pertama.</p>
\`\`\`

## Formatting Teks

HTML menyediakan tag untuk memformat teks:

\`\`\`html
<p>Teks <strong>tebal</strong> dan <em>miring</em>.</p>
<p>Teks <b>bold</b> dan <i>italic</i> (tanpa makna semantik).</p>
<p>Teks <u>bergaris bawah</u>, <s>dicoret</s>.</p>
<p>Rumus: H<sub>2</sub>O, E = mc<sup>2</sup>.</p>
\`\`\`

Perbedaan penting:

- \`<strong>\`: Penekanan **penting** (tampil tebal)
- \`<b>\`: Hanya tebal tanpa makna semantik
- \`<em>\`: Penekanan (tampil miring)
- \`<i>\`: Hanya miring tanpa makna semantik

## Line Break dan Horizontal Rule

\`\`\`html
<p>Baris pertama<br>Baris kedua</p>
<hr>
<p>Setelah garis pemisah</p>
\`\`\`

- \`<br>\`: Pindah baris tanpa membuat paragraf baru
- \`<hr>\`: Garis horizontal pemisah

## Contoh Lengkap

\`\`\`html
<article>
  <h1>Belajar HTML</h1>
  <p>HTML adalah fondasi dari setiap halaman web.</p>

  <h2>Apa itu Heading?</h2>
  <p>Heading membantu menyusun struktur konten secara <em>hirarkis</em>.</p>

  <h2>Apa itu Paragraf?</h2>
  <p>Paragraf adalah blok teks yang terpisah oleh <strong>jarak otomatis</strong>.</p>
</article>
\`\`\`

> Gunakan heading dan paragraf dengan benar untuk membuat konten yang rapi dan mudah dibaca.`,
    quiz: [
      {
        question: "Berapa banyak level heading yang tersedia di HTML?",
        options: ["3 level (h1, h2, h3)", "5 level (h1-h5)", "6 level (h1-h6)", "Tidak terbatas"],
        answer: 2,
        explanation: "HTML menyediakan 6 level heading dari <h1> (terbesar/penting) hingga <h6> (terkecil)."
      },
      {
        question: "Tag mana yang sebaiknya digunakan untuk penekanan penting (bukan sekadar tebal)?",
        options: ["<b>", "<strong>", "<u>", "<br>"],
        answer: 1,
        explanation: "<strong> memiliki makna semantik 'penting' (tampil tebal), sedangkan <b> hanya membuat teks tebal tanpa makna khusus."
      },
      {
        question: "Berapa banyak tag <h1> yang sebaiknya digunakan dalam satu halaman?",
        options: ["Beberapa, sesuai kebutuhan", "Hanya satu", "Maksimal 3", "Bebas"],
        answer: 1,
        explanation: "Sebaiknya hanya ada satu <h1> per halaman karena ini adalah judul utama dan penting untuk SEO serta accessibility."
      }
    ]
  },
  {
    level: 2,
    order: 3,
    title: "Link",
    slug: "html-link",
    description: "Membuat hyperlink dengan tag <a> untuk menghubungkan halaman dan sumber daya web.",
    icon: "🔗",
    isProject: false,
    content: `# Link

**Link** (hyperlink) adalah elemen yang membuat web saling terhubung. Tanpa link, web hanyalah halaman terpisah. Tag \`<a>\` (anchor) digunakan untuk membuat link di HTML.

## Dasar Tag Anchor

Link dibuat dengan tag \`<a>\` dan atribut \`href\` yang berisi URL tujuan:

\`\`\`html
<a href="https://google.com">Kunjungi Google</a>
<a href="about.html">Halaman About</a>
<a href="mailto:hello@email.com">Kirim Email</a>
\`\`\`

## Jenis Link

### 1. External Link

Link ke website lain (selalu gunakan \`https://\`):

\`\`\`html
<a href="https://github.com">GitHub</a>
\`\`\`

### 2. Internal Link

Link ke halaman lain di dalam proyekmu:

\`\`\`html
<a href="about.html">Tentang Kami</a>
<a href="products/detail.html">Detail Produk</a>
\`\`\`

### 3. Anchor Link

Link ke bagian tertentu di halaman yang sama (gunakan \`id\`):

\`\`\`html
<a href="#section-2">Lompat ke Section 2</a>

<h2 id="section-2">Section 2</h2>
\`\`\`

## Atribut Target

Atribut \`target\` mengatur cara link dibuka:

\`\`\`html
<!-- Buka di tab yang sama (default) -->
<a href="page.html" target="_self">Buka di sini</a>

<!-- Buka di tab baru -->
<a href="page.html" target="_blank">Buka di tab baru</a>
\`\`\`

Untuk link external dengan \`target="_blank"\`, tambahkan \`rel="noopener"\` demi keamanan:

\`\`\`html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Link Aman
</a>
\`\`\`

## Link sebagai Tombol

Link juga bisa berisi elemen lain seperti gambar:

\`\`\`html
<a href="home.html">
  <img src="logo.png" alt="Logo">
</a>
\`\`\`

## Tips Accessibility

- Gunakan **teks deskriptif**, hindari "klik di sini"
- Pastikan link terlihat berbeda dari teks biasa (biru/garis bawah)
- Untuk link eksternal, pertimbangkan ikon external link
- \`alt\` pada gambar dalam link membantu screen reader

\`\`\`html
<!-- Buruk -->
<p>Klik <a href="about.html">di sini</a> untuk info.</p>

<!-- Baik -->
<p>Pelajari <a href="about.html">tentang kami</a> lebih lanjut.</p>
\`\`\`

> Link adalah jantung dari web. Gunakan dengan bijak agar navigasi pengguna nyaman.`,
    quiz: [
      {
        question: "Atribut apa yang menentukan URL tujuan pada tag <a>?",
        options: ["src", "href", "link", "url"],
        answer: 1,
        explanation: "Atribut href (hypertext reference) pada tag <a> berisi URL tujuan link."
      },
      {
        question: "Bagaimana cara membuat link terbuka di tab baru?",
        options: [
          "Tambahkan atribut target='_blank'",
          "Tambahkan atribut new='true'",
          "Tambahkan atribut tab='new'",
          "Tidak bisa dilakukan di HTML"
        ],
        answer: 0,
        explanation: "Atribut target='_blank' membuat link terbuka di tab/jendela baru. Untuk link eksternal, tambahkan rel='noopener' demi keamanan."
      },
      {
        question: "Bagaimana cara membuat link ke bagian tertentu di halaman yang sama?",
        options: [
          "Gunakan href='section-name'",
          "Gunakan href='#id-element' di mana id-element adalah id elemen tujuan",
          "Gunakan href='@section'",
          "Tidak mungkin di HTML"
        ],
        answer: 1,
        explanation: "Tambahkan atribut id pada elemen tujuan, lalu gunakan href='#id-element' untuk berpindah ke bagian tersebut."
      }
    ]
  },
  {
    level: 2,
    order: 4,
    title: "Gambar",
    slug: "html-gambar",
    description: "Menampilkan gambar dengan tag <img>, format gambar, dan pentingnya atribut alt.",
    icon: "🖼️",
    isProject: false,
    content: `# Gambar

Gambar membuat halaman web lebih menarik dan informatif. HTML menggunakan tag \`<img>\` untuk menampilkan gambar, yang merupakan **void element** (tanpa tag penutup).

## Dasar Tag Image

Tag \`<img>\` membutuhkan dua atribut utama:

\`\`\`html
<img src="foto.jpg" alt="Foto pemandangan gunung">
\`\`\`

- \`src\`: Sumber/path file gambar (wajib)
- \`alt\`: Teks alternatif (wajib untuk accessibility)

## Path Gambar

Sumber gambar bisa berupa path relatif, absolut, atau URL:

\`\`\`html
<!-- Path relatif, folder yang sama -->
<img src="logo.png" alt="Logo">

<!-- Path relatif, folder berbeda -->
<img src="images/hero.jpg" alt="Hero image">
<img src="../assets/icon.png" alt="Icon">

<!-- URL eksternal -->
<img src="https://example.com/image.jpg" alt="External image">
\`\`\`

## Atribut Alt yang Penting

Atribut \`alt\` sangat penting karena beberapa alasan:

1. **Accessibility**: Screen reader membacanya untuk pengguna tunanetra
2. **SEO**: Membantu mesin pencari memahami gambar
3. **Fallback**: Ditampilkan jika gambar gagal dimuat

\`\`\`html
<!-- Baik: deskriptif -->
<img src="chart.jpg" alt="Grafik penjualan kuartal 1 2024">

<!-- Buruk: tidak membantu -->
<img src="chart.jpg" alt="gambar">

<!-- Dekoratif: pakai alt kosong -->
<img src="divider.png" alt="">
\`\`\`

## Ukuran Gambar

Atur ukuran gambar dengan atribut \`width\` dan \`height\` (idealnya via CSS):

\`\`\`html
<img src="photo.jpg" alt="Photo" width="300" height="200">
\`\`\`

## Format Gambar Umum

\`\`\`text
JPEG/JPG → Foto, banyak warna, lossy compression
PNG      → Logo, butuh transparansi, lossless
GIF      → Animasi sederhana, 256 warna
SVG      → Vector, scalable, untuk ikon
WebP     → Modern, ukuran kecil, mendukung transparansi
\`\`\`

## Figure dan Figcaption

Untuk gambar dengan caption, gunakan \`<figure>\` dan \`<figcaption>\`:

\`\`\`html
<figure>
  <img src="mountain.jpg" alt="Pegunungan saat sunset">
  <figcaption>Pegunungan Indah saat Sunset, foto oleh John.</figcaption>
</figure>
\`\`\`

## Tips Optimasi Gambar

- **Kompres** gambar sebelum upload (gunakan TinyPNG atau Squoosh)
- Pilih **format yang tepat**: JPEG untuk foto, PNG untuk logo
- Gunakan **SVG** untuk ikon agar tajam di semua resolusi
- Sediakan **alt text** yang deskriptif untuk setiap gambar bermakna
- Pertimbangkan **lazy loading** untuk performa:

\`\`\`html
<img src="heavy.jpg" alt="Heavy" loading="lazy">
\`\`\`

> Gambar yang dioptimasi membuat website lebih cepat dan ramah pengguna.`,
    quiz: [
      {
        question: "Mengapa atribut alt pada tag <img> sangat penting?",
        options: [
          "Untuk menentukan ukuran gambar",
          "Untuk accessibility (screen reader), SEO, dan fallback jika gambar gagal dimuat",
          "Untuk mengubah format gambar",
          "Untuk membuat animasi gambar"
        ],
        answer: 1,
        explanation: "Alt text dibaca screen reader untuk tunanetra, membantu SEO, dan ditampilkan jika gambar gagal dimuat."
      },
      {
        question: "Format gambar apa yang paling cocok untuk logo dengan transparansi?",
        options: ["JPEG", "PNG", "BMP", "TIFF"],
        answer: 1,
        explanation: "PNG mendukung transparansi dan lossless compression, cocok untuk logo. SVG juga bagus untuk logo vector."
      },
      {
        question: "Tag mana yang digunakan untuk membungkus gambar dengan caption?",
        options: [
          "<picture> dengan <caption>",
          "<figure> dengan <figcaption>",
          "<image> dengan <text>",
          "<media> dengan <description>"
        ],
        answer: 1,
        explanation: "Gunakan <figure> untuk membungkus gambar dan <figcaption> untuk caption. Ini semantic HTML yang benar."
      }
    ]
  },
  {
    level: 2,
    order: 5,
    title: "List",
    slug: "html-list",
    description: "Membuat daftar dengan unordered list (ul), ordered list (ol), dan description list (dl).",
    icon: "📋",
    isProject: false,
    content: `# List

**List** digunakan untuk menampilkan kumpulan item secara terstruktur. HTML menyediakan beberapa jenis list: **unordered**, **ordered**, dan **description list**.

## Unordered List

\`<ul>\` (unordered list) membuat daftar **tanpa urutan** (bullet point):

\`\`\`html
<ul>
  <li>Apel</li>
  <li>Pisang</li>
  <li>Mangga</li>
</ul>
\`\`\`

Hasilnya berupa bullet point. Cocok untuk item yang urutannya tidak penting.

## Ordered List

\`<ol>\` (ordered list) membuat daftar **berurutan** (angka):

\`\`\`html
<ol>
  <li>Bangun pagi</li>
  <li>Mandi</li>
  <li>Sarapan</li>
  <li>Berangkat kerja</li>
</ol>
\`\`\`

Hasilnya berupa nomor 1, 2, 3, dst. Cocok untuk langkah atau ranking.

## Atribut pada Ordered List

\`\`\`html
<!-- Mulai dari angka tertentu -->
<ol start="5">
  <li>Item kelima</li>
  <li>Item keenam</li>
</ol>

<!-- Urutan terbalik -->
<ol reversed>
  <li>Item</li>
  <li>Item</li>
</ol>

<!-- Ubah tipe penomoran -->
<ol type="A">  <!-- A, B, C -->
<ol type="a">  <!-- a, b, c -->
<ol type="I">  <!-- I, II, III -->
\`\`\`

## List Bersarang (Nested)

List bisa berisi list lain untuk membuat struktur hirarkis:

\`\`\`html
<ul>
  <li>Buah
    <ul>
      <li>Apel</li>
      <li>Pisang</li>
    </ul>
  </li>
  <li>Sayur
    <ul>
      <li>Bayam</li>
      <li>Wortel</li>
    </ul>
  </li>
</ul>
\`\`\`

## Description List

\`<dl>\` (description list) untuk pasangan **istilah-deskripsi**:

\`\`\`html
<dl>
  <dt>HTML</dt>
  <dd>Bahasa markup untuk struktur halaman web</dd>

  <dt>CSS</dt>
  <dd>Bahasa untuk styling halaman web</dd>

  <dt>JavaScript</dt>
  <dd>Bahasa pemrograman untuk interaktivitas web</dd>
</dl>
\`\`\`

- \`<dl>\`: Description list
- \`<dt>\`: Term (istilah)
- \`<dd>\`: Description (deskripsi)

## Kapan Menggunakan Jenis List Mana?

| Jenis | Kapan Dipakai |
|-------|---------------|
| \`<ul>\` | Item tanpa urutan penting (fitur, opsi) |
| \`<ol>\` | Langkah berurutan, ranking, instruksi |
| \`<dl>\` | Glossary, FAQ, pasangan istilah-definisi |

## Tips Penting

- \`<li>\` **harus** berada di dalam \`<ul>\` atau \`<ol>\`
- Jangan gunakan list hanya untuk indentasi — gunakan CSS
- List bawaan browser punya padding/margin, atur via CSS
- Untuk menu navigasi, gunakan \`<ul>\` di dalam \`<nav>\`

\`\`\`html
<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
\`\`\`

> List adalah salah satu elemen HTML paling sering digunakan. Kuasai baik-baik!`,
    quiz: [
      {
        question: "Tag mana yang digunakan untuk membuat daftar dengan urutan nomor (1, 2, 3)?",
        options: ["<ul>", "<ol>", "<li>", "<dl>"],
        answer: 1,
        explanation: "<ol> (ordered list) membuat daftar berurutan dengan nomor. <ul> untuk daftar tanpa urutan (bullet)."
      },
      {
        question: "Apa fungsi tag <dd> dalam description list?",
        options: [
          "Mendefinisikan istilah",
          "Mendefinisikan deskripsi dari istilah",
          "Membuat daftar terurut",
          "Membuat bullet point"
        ],
        answer: 1,
        explanation: "Dalam <dl>, <dt> berisi istilah dan <dd> berisi deskripsi/definisi dari istilah tersebut."
      },
      {
        question: "Pilih struktur list bersarang yang benar.",
        options: [
          "<ul><li>Item<ul><li>Sub-item</li></ul></li></ul>",
          "<li><ul>Item</ul></li>",
          "<ul><ul><li>Item</li></ul></ul>",
          "<li>Item<li>Sub-item</li></li>"
        ],
        answer: 0,
        explanation: "List bersarang diletakkan di dalam <li>, bukan langsung di dalam <ul>. Struktur yang benar: <ul><li>...<ul>...</ul></li></ul>."
      }
    ]
  },
  {
    level: 2,
    order: 6,
    title: "Table",
    slug: "html-table",
    description: "Membuat tabel data dengan table, tr, td, th, thead, tbody, dan caption.",
    icon: "📊",
    isProject: false,
    content: `# Table

**Table** digunakan untuk menampilkan data tabular — data dalam baris dan kolom. HTML menyediakan elemen \`<table>\` beserta elemen pendukungnya.

## Struktur Dasar Tabel

Tabel terdiri dari **baris** (\`<tr>\`) dan **sel** (\`<td>\`):

\`\`\`html
<table>
  <tr>
    <td>Baris 1, Kolom 1</td>
    <td>Baris 1, Kolom 2</td>
  </tr>
  <tr>
    <td>Baris 2, Kolom 1</td>
    <td>Baris 2, Kolom 2</td>
  </tr>
</table>
\`\`\`

## Header Sel dengan th

\`<th>\` (table header) untuk sel header, biasanya tampil **tebal dan tengah**:

\`\`\`html
<table>
  <tr>
    <th>Nama</th>
    <th>Umur</th>
    <th>Kota</th>
  </tr>
  <tr>
    <td>Andi</td>
    <td>25</td>
    <td>Jakarta</td>
  </tr>
  <tr>
    <td>Budi</td>
    <td>30</td>
    <td>Bandung</td>
  </tr>
</table>
\`\`\`

## Struktur Semantik: thead, tbody, tfoot

Untuk tabel yang baik, gunakan \`<thead>\`, \`<tbody>\`, dan \`<tfoot>\`:

\`\`\`html
<table>
  <caption>Daftar Karyawan</caption>
  <thead>
    <tr>
      <th>Nama</th>
      <th>Posisi</th>
      <th>Gaji</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Andi</td>
      <td>Developer</td>
      <td>Rp 10.000.000</td>
    </tr>
    <tr>
      <td>Budi</td>
      <td>Designer</td>
      <td>Rp 8.000.000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total</td>
      <td>Rp 18.000.000</td>
    </tr>
  </tfoot>
</table>
\`\`\`

- \`<caption>\`: Judul tabel
- \`<thead>\`: Header tabel
- \`<tbody>\`: Isi tabel
- \`<tfoot>\`: Footer tabel (biasanya total/ringkasan)

## Merged Cells: colspan & rowspan

Atribut \`colspan\` dan \`rowspan\` untuk menggabung sel:

\`\`\`html
<table border="1">
  <tr>
    <th colspan="2">Header gabungan 2 kolom</th>
  </tr>
  <tr>
    <td rowspan="2">Sel gabungan 2 baris</td>
    <td>Sel biasa</td>
  </tr>
  <tr>
    <td>Sel biasa</td>
  </tr>
</table>
\`\`\`

- \`colspan="2"\`: Gabung 2 kolom
- \`rowspan="2"\`: Gabung 2 baris

## Tips Membuat Tabel yang Baik

- Selalu gunakan \`<th>\` untuk header (membantu accessibility)
- Pisahkan struktur dengan \`<thead>\`, \`<tbody>\`, \`<tfoot>\`
- Beri \`<caption>\` untuk menjelaskan isi tabel
- **Jangan** gunakan tabel untuk layout halaman — gunakan CSS Flexbox/Grid
- Styling tabel (border, padding) via CSS, bukan atribut \`border\`

\`\`\`html
<!-- Hindari: atribut border (usang) -->
<table border="1" cellpadding="5">

<!-- Sebaiknya: gunakan CSS -->
<table class="data-table">
\`\`\`

> Tabel cocok untuk data tabular. Jangan disalahgunakan untuk layout!`,
    quiz: [
      {
        question: "Tag apa yang digunakan untuk membuat sel header pada tabel?",
        options: ["<td>", "<th>", "<tr>", "<thead>"],
        answer: 1,
        explanation: "<th> (table header) membuat sel header yang biasanya tampil tebal dan rata tengah, penting untuk accessibility."
      },
      {
        question: "Apa fungsi atribut colspan pada sel tabel?",
        options: [
          "Menggabungkan beberapa baris",
          "Menggabungkan beberapa kolom menjadi satu sel",
          "Mengatur warna sel",
          "Mengatur lebar tabel"
        ],
        answer: 1,
        explanation: "colspan menggabungkan beberapa kolom menjadi satu sel horizontal. rowspan sebaliknya, menggabungkan baris."
      },
      {
        question: "Pernyataan mana yang benar tentang penggunaan tabel?",
        options: [
          "Tabel sebaiknya digunakan untuk layout halaman",
          "Tabel hanya untuk menampilkan data tabular, bukan untuk layout",
          "Tabel tidak boleh memiliki header",
          "Tabel harus selalu diberi border tebal"
        ],
        answer: 1,
        explanation: "Tabel ditujukan untuk data tabular. Untuk layout halaman, gunakan CSS Flexbox atau Grid yang lebih fleksibel."
      }
    ]
  },
  {
    level: 2,
    order: 7,
    title: "Form",
    slug: "html-form",
    description: "Membuat form interaktif dengan form, input, label, textarea, select, dan button.",
    icon: "📋",
    isProject: false,
    content: `# Form

**Form** adalah elemen penting untuk menerima input dari pengguna — mulai dari login, registrasi, pencarian, hingga upload file. HTML menyediakan berbagai elemen form yang powerful.

## Struktur Dasar Form

Form dibungkus dengan tag \`<form>\` dan elemen input di dalamnya:

\`\`\`html
<form action="/submit" method="POST">
  <label for="name">Nama:</label>
  <input type="text" id="name" name="name">

  <button type="submit">Kirim</button>
</form>
\`\`\`

- \`action\`: URL tujuan pengiriman data
- \`method\`: HTTP method (\`GET\` atau \`POST\`)

## Jenis Input

HTML5 menyediakan banyak \`type\` input:

\`\`\`html
<input type="text" placeholder="Teks biasa">
<input type="email" placeholder="email@contoh.com">
<input type="password" placeholder="Password">
<input type="number" min="0" max="100">
<input type="date">
<input type="checkbox">
<input type="radio" name="gender">
<input type="file">
<input type="color">
<input type="range" min="0" max="10">
\`\`\`

## Label yang Benar

Selalu gunakan \`<label>\` dan kaitkan dengan input via \`for\` dan \`id\`:

\`\`\`html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
\`\`\`

Ini penting untuk **accessibility** — klik label akan fokus ke input.

## Textarea untuk Teks Panjang

\`<textarea>\` untuk input multi-baris:

\`\`\`html
<label for="bio">Bio:</label>
<textarea id="bio" name="bio" rows="4" cols="40"></textarea>
\`\`\`

## Select (Dropdown)

\`<select>\` untuk pilihan dropdown:

\`\`\`html
<label for="country">Negara:</label>
<select id="country" name="country">
  <option value="id">Indonesia</option>
  <option value="my">Malaysia</option>
  <option value="sg">Singapura</option>
</select>
\`\`\`

## Radio dan Checkbox

\`\`\`html
<!-- Radio: pilih satu -->
<fieldset>
  <legend>Jenis Kelamin:</legend>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Laki-laki</label>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Perempuan</label>
</fieldset>

<!-- Checkbox: pilih banyak -->
<label>
  <input type="checkbox" name="subscribe" value="yes">
  Berlangganan newsletter
</label>
\`\`\`

## Atribut Penting Input

\`\`\`html
<input type="text"
  name="username"
  placeholder="Masukkan username"
  required
  minlength="3"
  maxlength="20"
  pattern="[A-Za-z]+"
  value="default">
\`\`\`

- \`placeholder\`: Hint teks
- \`required\`: Wajib diisi
- \`minlength\`/\`maxlength\`: Panjang min/maks
- \`pattern\`: Regex validasi
- \`value\`: Nilai default

## Button dan Submit

\`\`\`html
<button type="submit">Kirim</button>
<button type="reset">Reset</button>
<button type="button">Tombol Biasa</button>
\`\`\`

## Tips Membuat Form yang Baik

- Selalu gunakan \`<label>\` untuk setiap input
- Atur \`name\` pada setiap input (penting untuk backend)
- Gunakan \`type\` yang sesuai (\`email\`, \`number\`, \`date\`) untuk validasi bawaan
- Tambahkan \`required\` pada field wajib
- Validasi sisi **server** tetap perlu, jangan andalkan HTML saja

> Form adalah gerbang interaksi user dengan aplikasi. Buatlah yang ramah dan mudah digunakan.`,
    quiz: [
      {
        question: "Atribut apa pada <form> yang menentukan URL tujuan pengiriman data?",
        options: ["method", "action", "url", "target"],
        answer: 1,
        explanation: "Atribut action menentukan URL tujuan pengiriman data form, sedangkan method menentukan HTTP method (GET/POST)."
      },
      {
        question: "Mengapa penting menggunakan tag <label> dengan atribut for yang cocok dengan id input?",
        options: [
          "Hanya untuk styling",
          "Untuk accessibility dan agar klik label otomatis fokus ke input",
          "Tidak penting, hanya estetika",
          "Untuk mengirim data form"
        ],
        answer: 1,
        explanation: "Label yang di-link via for-id membantu screen reader dan membuat klik label otomatis fokus ke input terkait, meningkatkan accessibility."
      },
      {
        question: "Manakah perbedaan utama antara radio button dan checkbox?",
        options: [
          "Radio untuk pilih banyak, checkbox untuk pilih satu",
          "Radio untuk pilih satu dalam grup, checkbox untuk pilih banyak",
          "Tidak ada perbedaan",
          "Radio hanya untuk teks, checkbox untuk angka"
        ],
        answer: 1,
        explanation: "Radio button dengan name yang sama memungkinkan memilih satu opsi, sedangkan checkbox memungkinkan memilih beberapa opsi sekaligus."
      }
    ]
  },
  {
    level: 2,
    order: 8,
    title: "Semantic HTML",
    slug: "semantic-html",
    description: "Menggunakan elemen semantic seperti header, nav, main, article, section, dan footer untuk struktur bermakna.",
    icon: "🏛️",
    isProject: false,
    content: `# Semantic HTML

**Semantic HTML** berarti menggunakan elemen yang **bermakna** sesuai fungsinya, bukan sekadar \`<div>\` untuk segalanya. Semantic HTML meningkatkan **accessibility**, **SEO**, dan **keterbacaan kode**.

## Mengapa Semantic HTML Penting?

Bayangkan struktur dengan \`<div>\` semua:

\`\`\`html
<div class="header">
  <div class="nav">...</div>
</div>
<div class="main">...</div>
<div class="footer">...</div>
\`\`\`

Dibanding dengan semantic HTML:

\`\`\`html
<header>
  <nav>...</nav>
</header>
<main>...</main>
<footer>...</footer>
\`\`\`

Kedua versi tampil sama di browser, tapi versi semantic lebih **bermakna** untuk:

- **Screen reader** — pengguna tunanetra mendapat struktur jelas
- **Search engine** — Google lebih paham kontenmu
- **Developer** — kode lebih mudah dibaca dan dipelihara

## Elemen Semantic Utama

### Header

\`<header>\` berisi judul atau navigasi pengantar:

\`\`\`html
<header>
  <h1>Nama Website</h1>
  <nav>...</nav>
</header>
\`\`\`

### Nav

\`<nav>\` khusus untuk **navigasi utama**:

\`\`\`html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
\`\`\`

### Main

\`<main>\` berisi **konten utama** halaman (hanya satu per halaman):

\`\`\`html
<main>
  <h1>Judul Halaman</h1>
  <p>Konten utama...</p>
</main>
\`\`\`

### Section

\`<section>\` untuk pengelompokan tematik konten:

\`\`\`html
<section>
  <h2>Layanan Kami</h2>
  <p>Deskripsi layanan...</p>
</section>
\`\`\`

### Article

\`\`<article>\` untuk konten **mandiri** seperti blog post:

\`\`\`html
<article>
  <h2>Judul Artikel</h2>
  <p>Isi artikel...</p>
  <time datetime="2024-01-15">15 Januari 2024</time>
</article>
\`\`\`

### Aside

\`<aside>\` untuk konten sampingan (sidebar, iklan, related):

\`\`\`html
<aside>
  <h3>Artikel Terkait</h3>
  <ul>...</ul>
</aside>
\`\`\`

### Footer

\`<footer>\` untuk footer halaman (copyright, link, info):

\`\`\`html
<footer>
  <p>&copy; 2024 Perusahaan Saya. All rights reserved.</p>
</footer>
\`\`\`

## Contoh Struktur Lengkap

\`\`\`html
<body>
  <header>
    <h1>Blog Saya</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h2>Belajar HTML Semantic</h2>
      <time datetime="2024-01-15">15 Jan 2024</time>
      <p>Isi artikel...</p>
    </article>

    <aside>
      <h3>Tentang Penulis</h3>
      <p>Profil singkat...</p>
    </aside>
  </main>

  <footer>
    <p>&copy; 2024 Blog Saya</p>
  </footer>
</body>
\`\`\`

## Aturan Penting

- Satu halaman hanya **satu \`<main>\`** dan idealnya **satu \`<h1>\`**
- \`<section>\` biasanya punya **heading** di dalamnya
- \`<article>\` harus bisa **berdiri sendiri** (RSS, copy-paste)
- \`<header>\` dan \`<footer>\` bisa ada beberapa (per section)
- Tetap gunakan \`<div>\` untuk styling bila tidak ada elemen semantic yang cocok

> Semantic HTML bukan sekadar tren — ini cara membuat web yang lebih baik untuk semua.`,
    quiz: [
      {
        question: "Apa manfaat utama menggunakan semantic HTML?",
        options: [
          "Membuat halaman lebih cepat dimuat",
          "Meningkatkan accessibility, SEO, dan keterbacaan kode",
          "Mengurangi ukuran file HTML",
          "Mengganti fungsi CSS"
        ],
        answer: 1,
        explanation: "Semantic HTML memberi makna pada struktur: membantu screen reader (accessibility), search engine (SEO), dan developer membaca kode."
      },
      {
        question: "Elemen semantic mana yang tepat untuk konten artikel blog yang mandiri?",
        options: ["<section>", "<div>", "<article>", "<aside>"],
        answer: 2,
        explanation: "<article> untuk konten mandiri yang bisa berdiri sendiri seperti blog post, berita, atau komentar. <section> untuk pengelompokan tematik."
      },
      {
        question: "Berapa jumlah elemen <main> yang ideal dalam satu halaman?",
        options: ["Tidak boleh ada", "Satu", "Maksimal 3", "Bebas"],
        answer: 1,
        explanation: "Satu halaman sebaiknya hanya punya satu <main> yang berisi konten utama, sesuai spec HTML5."
      }
    ]
  },
  {
    level: 2,
    order: 9,
    title: "Project: Landing Page",
    slug: "project-landing-page",
    description: "Proyek membangun landing page sederhana dengan HTML semantic, gambar, link, dan form.",
    icon: "🚀",
    isProject: true,
    content: `# Project: Landing Page

Saatnya mengaplikasikan semua yang telah kamu pelajari di Level 2! Kamu akan membangun **landing page** utuh menggunakan HTML semantic. Proyek ini menguji pemahaman tentang struktur HTML, heading, link, gambar, list, dan form.

## Tujuan Proyek

Bangun landing page untuk produk/layanan fiktif. Contoh: kursus online, aplikasi mobile, atau jasa digital. Halaman harus mencakup semua elemen HTML yang telah dipelajari.

## Spesifikasi

Landing page harus memiliki bagian berikut:

1. **Header** dengan logo dan navigasi
2. **Hero section** — judul besar, deskripsi, dan tombol CTA
3. **Features section** — daftar fitur dengan ikon (3-6 fitur)
4. **Pricing section** — tabel harga paket
5. **Testimonial section** — kutipan pelanggan
6. **Contact form** — form pendaftaran/kontak
7. **Footer** dengan link dan copyright

## Struktur File

Buat struktur folder berikut:

\`\`\`text
landing-page/
├── index.html
├── css/
│   └── style.css        (kosong dulu, akan diisi Level 3)
└── images/
    ├── logo.png
    ├── hero.jpg
    └── feature-icon.svg
\`\`\`

## Kerangka Kode Awal

Berikut kerangka yang bisa kamu kembangkan:

\`\`\`html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nama Produk - Solusi Modern</title>
</head>
<body>
  <!-- Header -->
  <header>
    <img src="images/logo.png" alt="Logo Produk" width="120">
    <nav>
      <ul>
        <li><a href="#features">Fitur</a></li>
        <li><a href="#pricing">Harga</a></li>
        <li><a href="#contact">Kontak</a></li>
      </ul>
    </nav>
  </header>

  <!-- Hero Section -->
  <section id="hero">
    <h1>Solusi Terbaik untuk Kebutuhanmu</h1>
    <p>Deskripsi singkat tentang produk dan manfaatnya.</p>
    <a href="#contact" target="_blank" rel="noopener">Coba Gratis</a>
  </section>

  <!-- Features Section -->
  <section id="features">
    <h2>Fitur Unggulan</h2>
    <ul>
      <li>Fitur 1: Deskripsi singkat</li>
      <li>Fitur 2: Deskripsi singkat</li>
      <li>Fitur 3: Deskripsi singkat</li>
    </ul>
  </section>

  <!-- Pricing Section -->
  <section id="pricing">
    <h2>Paket Harga</h2>
    <table>
      <thead>
        <tr>
          <th>Fitur</th>
          <th>Basic</th>
          <th>Pro</th>
          <th>Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Storage</td>
          <td>1 GB</td>
          <td>10 GB</td>
          <td>Unlimited</td>
        </tr>
        <tr>
          <td>Harga/bulan</td>
          <td>Rp 50.000</td>
          <td>Rp 150.000</td>
          <td>Rp 500.000</td>
        </tr>
      </tbody>
    </table>
  </section>

  <!-- Contact Form -->
  <section id="contact">
    <h2>Hubungi Kami</h2>
    <form action="/submit" method="POST">
      <label for="name">Nama:</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="message">Pesan:</label>
      <textarea id="message" name="message" rows="4"></textarea>

      <button type="submit">Kirim</button>
    </form>
  </section>

  <!-- Footer -->
  <footer>
    <p>&copy; 2024 Nama Produk. All rights reserved.</p>
  </footer>
</body>
</html>
\`\`\`

## Konsep yang Diuji

Proyek ini mengharuskanmu menerapkan:

- **Semantic HTML**: \`<header>\`, \`<nav>\`, \`<section>\`, \`<footer>\`
- **Heading hirarkis**: \`<h1>\` untuk judul utama, \`<h2>\` untuk section
- **Link**: internal (\`#features\`) dan external
- **Gambar**: dengan \`alt\` yang deskriptif
- **List**: \`<ul>\` untuk navigasi dan fitur
- **Table**: untuk perbandingan harga
- **Form**: dengan berbagai \`type\` input dan \`<label>\`

## Tantangan Tambahan

Selesai dengan dasar? Coba tantangan berikut:

1. Tambahkan **testimonial section** dengan \`<article>\` untuk setiap testimoni
2. Tambahkan **FAQ section** dengan \`<dl>\` (description list)
3. Sertakan **gambar** di hero section dan setiap fitur
4. Tambahkan **metadata SEO** di \`<head>\`: \`<meta name="description">\`
5. Validasi HTML di [W3C Validator](https://validator.w3.org/)

## Kriteria Penilaian Diri

- ✅ Semua elemen semantic digunakan dengan benar
- ✅ Setiap input form punya \`<label>\` dan \`name\`
- ✅ Semua gambar punya \`alt\` deskriptif
- ✅ Heading tersusun hirarkis (h1 → h2 → h3)
- ✅ Tidak ada elemen \`<div>\` yang seharusnya elemen semantic
- ✅ Kode rapi dan ter-indentasi konsisten

> Proyek ini adalah fondasi portofoliomu. Di Level 3, kita akan percantik dengan CSS!`,
    quiz: [
      {
        question: "Apa elemen semantic yang tepat untuk bagian navigasi utama di landing page?",
        options: ["<div class='nav'>", "<nav>", "<menu>", "<navigation>"],
        answer: 1,
        explanation: "<nav> adalah elemen semantic khusus untuk navigasi utama, membantu accessibility dan SEO."
      },
      {
        question: "Mengapa setiap input di form landing page harus punya <label>?",
        options: [
          "Agar tampilan form lebih cantik",
          "Untuk accessibility dan agar klik label otomatis fokus ke input",
          "Karena tanpa label form tidak bisa submit",
          "Tidak penting, hanya formalitas"
        ],
        answer: 1,
        explanation: "Label yang di-link via for-id membantu screen reader dan membuat klik label otomatis fokus ke input, meningkatkan usability dan accessibility."
      },
      {
        question: "Apa elemen terbaik untuk menampilkan perbandingan paket harga di landing page?",
        options: ["<ul>", "<table>", "<div>", "<section>"],
        answer: 1,
        explanation: "Perbandingan paket harga adalah data tabular (baris-kolom), jadi <table> dengan <thead>, <tbody> adalah pilihan tepat."
      }
    ]
  },

  // ============================================
  // LEVEL 3 - CSS
  // ============================================
  {
    level: 3,
    order: 1,
    title: "Dasar CSS",
    slug: "dasar-css",
    description: "Mengenal CSS, cara menambahkannya ke HTML, dan sintaks dasar selector-property-value.",
    icon: "🎨",
    isProject: false,
    content: `# Dasar CSS

**CSS** (Cascading Style Sheets) adalah bahasa untuk mendesain tampilan halaman web. Jika HTML adalah **struktur**, maka CSS adalah **gaya** — warna, font, layout, animasi, dan lain-lain.

## Apa Itu CSS?

CSS bekerja dengan **memilih elemen** HTML lalu **menerapkan style**. Tanpa CSS, halaman web terlihat polos seperti dokumen notepad. Dengan CSS, kamu bisa membuat web yang indah dan modern.

## Cara Menambahkan CSS ke HTML

Ada 3 cara menggunakan CSS:

### 1. Inline CSS (tidak disarankan)

Style langsung di atribut \`style\` elemen:

\`\`\`html
<p style="color: blue; font-size: 18px;">Teks biru besar</p>
\`\`\`

### 2. Internal CSS

CSS di tag \`<style>\` dalam \`<head>\`:

\`\`\`html
<head>
  <style>
    p {
      color: blue;
      font-size: 18px;
    }
  </style>
</head>
\`\`\`

### 3. External CSS (paling disarankan)

CSS di file \`.css\` terpisah, di-link via \`<link>\`:

\`\`\`html
<head>
  <link rel="stylesheet" href="css/style.css">
</head>
\`\`\`

**Kenapa external?** Karena bisa dipakai banyak halaman, lebih mudah dipelihara, dan browser bisa cache file.

## Sintaks Dasar CSS

\`\`\`css
selector {
  property: value;
}
\`\`\`

Contoh:

\`\`\`css
h1 {
  color: #ff0000;
  font-size: 32px;
  text-align: center;
}

p {
  color: #333333;
  line-height: 1.6;
}
\`\`\`

- **Selector**: \`h1\`, \`p\` — elemen apa yang di-style
- **Property**: \`color\`, \`font-size\` — apa yang diubah
- **Value**: \`#ff0000\`, \`32px\` — nilai properti
- **Declaration block**: antara \`{ }\`
- **Declaration**: satu pasang property:value (diakhiri \`;\`)

## Komentar CSS

\`\`\`css
/* Ini komentar satu baris */

/*
  Komentar
  multi-baris
*/
\`\`\`

## Cascading: Aturan Prioritas

CSS namanya **Cascading** karena style bisa ditimpa. Aturan prioritas:

1. **Inline** (\`style="..."\`) — tertinggi
2. **Internal & External** — urutan deklarasi terakhir menang
3. **Specificity** — selector lebih spesifik menang (\`#id\` > \`.class\` > \`tag\`)
4. \`!important\` — paling tinggi (tapi hindari)

\`\`\`css
p { color: black; }
.text { color: blue; }       /* menang: class lebih spesifik */
#intro { color: red; }       /* menang: id paling spesifik */
\`\`\`

## Contoh Lengkap

\`\`\`css
/* Reset margin default browser */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

/* Style heading */
h1 {
  color: #2c3e50;
  text-align: center;
}

/* Style paragraf */
p {
  font-size: 16px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 20px;
}
\`\`\`

## Tips untuk Pemula

- Selalu gunakan **external CSS** untuk proyek nyata
- Akhiri setiap deklarasi dengan **titik koma** (\`;\`)
- Gunakan ** komentar** untuk dokumentasi
- **Hindari** \`!important\` kecuali sangat perlu
- Cek tampilan di browser setiap perubahan

> CSS adalah seni. Banyak berlatih, banyak bereksperimen, maka kamu akan jago!`,
    quiz: [
      {
        question: "Apa cara terbaik menambahkan CSS ke proyek web?",
        options: [
          "Inline CSS di setiap elemen",
          "Internal CSS di tag <style>",
          "External CSS di file .css terpisah yang di-link dari HTML",
          "Tidak perlu CSS, biarkan browser default"
        ],
        answer: 2,
        explanation: "External CSS paling disarankan karena bisa dipakai banyak halaman, mudah dipelihara, dan bisa di-cache browser."
      },
      {
        question: "Dalam sintaks CSS, apa yang disebut 'selector'?",
        options: [
          "Atribut HTML",
          "Bagian yang menentukan elemen HTML mana yang akan di-style",
          "Nilai properti CSS",
          "Nama file CSS"
        ],
        answer: 1,
        explanation: "Selector adalah bagian sebelum { } yang menentukan elemen HTML mana yang akan diberi style, misalnya 'h1' atau '.class'."
      },
      {
        question: "Urutan prioritas CSS dari tertinggi ke terendah adalah...",
        options: [
          "External > Internal > Inline",
          "Inline > External > Internal",
          "Inline > Internal & External (dengan specificity)",
          "Tag selector > class selector > ID selector"
        ],
        answer: 2,
        explanation: "Inline CSS paling tinggi, lalu internal/external bergantung specificity (#id > .class > tag) dan urutan deklarasi."
      }
    ]
  },
  {
    level: 3,
    order: 2,
    title: "Selector",
    slug: "css-selector",
    description: "Menguasai berbagai jenis selector: type, class, ID, attribute, dan combinators.",
    icon: "🎯",
    isProject: false,
    content: `# Selector

**Selector** adalah pola untuk memilih elemen HTML yang akan di-style. Menguasai selector adalah kunci untuk menulis CSS yang efisien dan tepat sasaran.

## Type Selector (Tag)

Memilih berdasarkan nama tag HTML:

\`\`\`css
p {
  color: #333;
}

h1, h2, h3 {
  font-family: Georgia, serif;
}

a {
  color: blue;
  text-decoration: none;
}
\`\`\`

## Class Selector

Memilih elemen dengan class tertentu, diawali **titik** (\`.\`):

\`\`\`css
.button {
  background-color: blue;
  padding: 10px 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
}
\`\`\`

Gunakan di HTML:

\`\`\`html
<button class="button">Klik</button>
<div class="card">Konten card</div>
\`\`\`

Satu elemen bisa punya beberapa class:

\`\`\`html
<button class="button primary">Klik</button>
\`\`\`

## ID Selector

Memilih elemen dengan ID tertentu, diawali **hash** (\`#\`):

\`\`\`css
#header {
  background-color: #333;
  color: white;
}
\`\`\`

\`\`\`html
<header id="header">...</header>
\`\`\`

> **Penting**: ID harus **unik** per halaman. Untuk style berulang, gunakan class, bukan ID.

## Universal Selector

Memilih **semua elemen**, dengan \`*\`:

\`\`\`css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
\`\`\`

## Attribute Selector

Memilih berdasarkan atribut:

\`\`\`css
/* Semua elemen dengan atribut type */
[type] { border: 1px solid #ccc; }

/* Input type text spesifik */
[type="text"] { padding: 8px; }

/* Link yang membuka tab baru */
[target="_blank"] { color: red; }
\`\`\`

## Combinators

### Descendant (spasi)

Memilih **semua turunan**:

\`\`\`css
/* Semua <a> di dalam <nav> */
nav a {
  color: white;
}
\`\`\`

### Child (>)

Memilih **anak langsung** saja:

\`\`\`css
/* Hanya <li> anak langsung <ul> */
ul > li {
  list-style: none;
}
\`\`\`

### Adjacent Sibling (+)

Memilih elemen **tepat setelah** elemen lain:

\`\`\`css
/* Paragraf tepat setelah h1 */
h1 + p {
  font-size: 1.2em;
  color: gray;
}
\`\`\`

### General Sibling (~)

Memilih **semua saudara** setelah elemen:

\`\`\`css
h2 ~ p {
  margin-top: 10px;
}
\`\`\`

## Pseudo-class

Memilih elemen berdasarkan **state**:

\`\`\`css
a:link { color: blue; }       /* link belum dikunjungi */
a:visited { color: purple; }  /* link sudah dikunjungi */
a:hover { color: red; }       /* saat di-hover */
a:active { color: orange; }   /* saat diklik */

li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(odd) { background: #f4f4f4; }
\`\`\`

## Pseudo-element

Memilih **bagian** elemen:

\`\`\`css
p::first-letter { font-size: 2em; }
p::first-line { font-weight: bold; }

/* Tambah konten sebelum/sesudah */
.quote::before { content: '"'; }
.quote::after { content: '"'; }
\`\`\`

## Specificity (Kekhususan)

Ketika beberapa selector memilih elemen yang sama, yang **lebih spesifik** menang:

\`\`\`text
ID        = 100
Class     = 10
Tag       = 1
\`\`\`

Contoh:

\`\`\`css
#header .nav a { }  /* 100 + 10 + 1 = 111 */
.nav a { }          /* 10 + 1 = 11 */
a { }               /* 1 */
\`\`\`

## Tips Menulis Selector

- **Gunakan class** sebagai pondasi styling (paling fleksibel)
- Hindari **ID** untuk styling (terlalu spesifik, susah di-override)
- Jangan selector **terlalu panjang** (\`.nav ul li a span\`) — susah dipelihara
- Manfaatkan **pseudo-class** (\`:hover\`, \`:nth-child\`) untuk interaktivitas
- Beri nama class **deskriptif** (\`.user-card\` bukan \`.box1\`)

> Selector yang tepat = CSS yang efisien. Pelajari baik-baik!`,
    quiz: [
      {
        question: "Apa simbol yang digunakan untuk memilih elemen berdasarkan class?",
        options: ["# (hash)", ". (titik)", "* (bintang)", "> (lebih besar dari)"],
        answer: 1,
        explanation: "Class selector diawali titik (mis. .button). ID selector diawali hash (#header)."
      },
      {
        question: "Apa perbedaan descendant selector (spasi) dan child selector (>)?",
        options: [
          "Tidak ada perbedaan",
          "Descendant memilih semua turunan, child hanya anak langsung",
          "Child memilih semua turunan, descendant hanya anak langsung",
          "Keduanya memilih elemen di luar parent"
        ],
        answer: 1,
        explanation: "Descendant (spasi) memilih semua turunan di semua level. Child (>) hanya memilih anak langsung dari parent."
      },
      {
        question: "Pseudo-class mana yang aktif saat user mengarahkan kursor ke elemen?",
        options: [":active", ":hover", ":focus", ":visited"],
        answer: 1,
        explanation: ":hover aktif saat kursor di atas elemen. :active saat diklik, :focus saat elemen terfokus, :visited untuk link yang sudah dikunjungi."
      }
    ]
  },
  {
    level: 3,
    order: 3,
    title: "Warna & Font",
    slug: "warna-font",
    description: "Mengatur warna, background, font-family, font-size, dan tipografi pada halaman web.",
    icon: "🌈",
    isProject: false,
    content: `# Warna & Font

**Warna** dan **font** adalah dua aspek terpenting dalam desain web. Kombinasi yang baik membuat halaman terlihat profesional dan nyaman dibaca.

## Cara Mendefinisikan Warna

CSS mendukung beberapa format warna:

\`\`\`css
/* Named colors */
color: red;
color: tomato;
color: cornflowerblue;

/* HEX (paling umum) */
color: #ff0000;     /* merah */
color: #f00;        /* singkatan #ff0000 */
color: #ff0000ff;   /* dengan alpha (transparansi) */

/* RGB */
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);  /* alpha 0.5 */

/* HSL (hue, saturation, lightness) */
color: hsl(0, 100%, 50%);
color: hsla(0, 100%, 50%, 0.5);
\`\`\`

## Properti Warna

\`\`\`css
.card {
  color: #333;                    /* warna teks */
  background-color: #f4f4f4;      /* warna background */
  border: 1px solid #ddd;         /* warna border */
}
\`\`\`

## Font Family

Properti \`font-family\` mengatur jenis font:

\`\`\`css
body {
  font-family: Arial, sans-serif;
}

h1 {
  font-family: "Times New Roman", Georgia, serif;
}

.code {
  font-family: "Courier New", monospace;
}
\`\`\`

Browser akan coba font pertama, jika tidak ada, coba berikutnya. Selalu sediakan **fallback** (\`sans-serif\`, \`serif\`, \`monospace\`).

## Kategori Font

\`\`\`text
serif      → Times New Roman, Georgia (memiliki kaki)
sans-serif → Arial, Helvetica, Roboto (tanpa kaki)
monospace  → Courier New, Consolas (lebar sama)
cursive    → Comic Sans, Brush Script
fantasy    → Impact, fantasy fonts
\`\`\`

## Font Size

\`\`\`css
h1 { font-size: 32px; }     /* pixel (fix) */
h2 { font-size: 2em; }      /* relatif terhadap parent */
p { font-size: 1rem; }      /* relatif terhadap root (html) */
.small { font-size: 0.875rem; }
\`\`\`

- **px**: pixel absolut (16px = 1rem default)
- **em**: relatif ke parent (bisa compound)
- **rem**: relatif ke root (lebih konsisten)

## Font Weight dan Style

\`\`\`css
h1 { font-weight: bold; }      /* atau 700 */
h2 { font-weight: 600; }       /* semi-bold */
p { font-weight: normal; }     /* atau 400 */

em { font-style: italic; }
strong { font-style: normal; font-weight: bold; }
\`\`\`

## Text Properties

\`\`\`css
p {
  text-align: justify;         /* left, right, center, justify */
  text-decoration: underline;  /* none, line-through, overline */
  text-transform: uppercase;   /* lowercase, capitalize */
  letter-spacing: 1px;         /* jarak antar huruf */
  word-spacing: 2px;           /* jarak antar kata */
  line-height: 1.6;            /* jarak antar baris */
  text-indent: 20px;           /* indentasi baris pertama */
}
\`\`\`

## Menggunakan Google Fonts

Tambahkan \`<link>\` di \`<head>\`:

\`\`\`html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
\`\`\`

Lalu pakai di CSS:

\`\`\`css
body {
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-family: 'Playfair Display', serif;
}
\`\`\`

## Contoh Tipografi Lengkap

\`\`\`css
body {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #2d3748;
  background-color: #ffffff;
}

h1, h2, h3 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: #1a202c;
  line-height: 1.2;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }

a {
  color: #3182ce;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
\`\`\`

## Tips Desain

- Gunakan **maksimal 2-3 font** per halaman
- **Kontras warna** cukup (teks gelap di bg terang, atau sebaliknya)
- Gunakan **rem** untuk font-size (aksesibilitas)
- **Line-height** 1.4-1.8 paling nyaman dibaca
- Tes dengan **Color Contrast Checker** untuk aksesibilitas

> Tipografi yang baik adalah 90% dari desain web yang baik.`,
    quiz: [
      {
        question: "Format warna mana yang paling umum digunakan di CSS?",
        options: ["Named colors (red, blue)", "HEX (#ff0000)", "RGB (rgb(255,0,0))", "HSL"],
        answer: 1,
        explanation: "HEX (#rrggbb) paling umum karena ringkas dan didukung luas. RGB/HSL juga populer terutama saat butuh alpha."
      },
      {
        question: "Apa perbedaan em dan rem untuk font-size?",
        options: [
          "Tidak ada perbedaan",
          "em relatif terhadap parent, rem relatif terhadap root (html)",
          "rem lebih besar dari em",
          "em hanya untuk heading, rem untuk paragraf"
        ],
        answer: 1,
        explanation: "em relatif terhadap font-size parent (bisa compound). rem relatif terhadap root html, lebih konsisten dan dipakai untuk font-size."
      },
      {
        question: "Berapa line-height ideal untuk keterbacaan teks body?",
        options: ["0.8 - 1.0", "1.4 - 1.8", "2.5 - 3.0", "5.0 atau lebih"],
        answer: 1,
        explanation: "Line-height 1.4-1.8 paling nyaman dibaca. Terlalu rapat (1.0) sulit dibaca, terlalu renggang (3.0) memutus aliran."
      }
    ]
  },
  {
    level: 3,
    order: 4,
    title: "Margin & Padding",
    slug: "margin-padding",
    description: "Memahami box model: content, padding, border, margin, dan cara mengaturnya.",
    icon: "📐",
    isProject: false,
    content: `# Margin & Padding

Setiap elemen HTML adalah **kotak** (box). Memahami **box model** — terdiri dari content, padding, border, dan margin — adalah kunci untuk membuat layout yang rapi.

## Box Model

Setiap elemen punya 4 lapisan:

\`\`\`text
┌─────────────────────────────────┐
│           margin                │
│  ┌───────────────────────────┐  │
│  │         border            │  │
│  │  ┌─────────────────────┐  │  │
│  │  │      padding        │  │  │
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │   content     │  │  │  │
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
\`\`\`

- **Content**: Isi elemen (teks, gambar)
- **Padding**: Ruang **di dalam** border (antara content dan border)
- **Border**: Garis tepi elemen
- **Margin**: Ruang **di luar** border (antar elemen)

## Padding

\`\`\`css
.box {
  padding: 20px;              /* semua sisi */
  padding: 10px 20px;         /* vertikal horizontal */
  padding: 10px 20px 30px 40px;  /* atas kanan bawah kiri */
  /* atau per sisi */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}
\`\`\`

Urutan singkatan: **atas → kanan → bawah → kiri** (searah jarum jam dari atas).

## Margin

\`\`\`css
.box {
  margin: 20px;
  margin: 10px 20px;
  margin: 0 auto;             /* center horizontal (butuh width) */
  margin-top: 10px;
  margin-bottom: 20px;
}
\`\`\`

## Border

\`\`\`css
.box {
  border: 1px solid #ddd;     /* width style color */
  border: 2px dashed blue;

  /* atau per properti */
  border-width: 2px;
  border-style: solid;
  border-color: #333;

  /* per sisi */
  border-top: 1px solid #ddd;
  border-radius: 8px;          /* sudut membulat */
}
\`\`\`

## Box Sizing Penting!

Secara default, \`width\` dan \`height\` hanya mengukur **content**. Padding dan border **menambah** ukuran total. Ini bikin pusing.

\`\`\`css
/* Default (susah diprediksi) */
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid;
  /* total width = 200 + 40 + 10 = 250px */
}

/* Solusi: border-box */
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid;
  /* total width = 200px (padding & border termasuk) */
}
\`\`\`

Praktik terbaik: terapkan \`border-box\` ke **semua elemen**:

\`\`\`css
* {
  box-sizing: border-box;
}
\`\`\`

## Margin Collapse

Margin vertikal **berdekatan** kadang **menyatu** (bukan bertambah):

\`\`\`css
.box1 { margin-bottom: 30px; }
.box2 { margin-top: 20px; }
\`\`\`

Jarak antar box1 dan box2 = **30px** (bukan 50px), karena yang lebih besar menang. Ini disebut **margin collapse**. Hanya terjadi pada margin vertikal, tidak horizontal.

## Contoh Implementasi

\`\`\`css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.card {
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 20px auto;     /* center horizontal */
  background: white;
}

.card-title {
  margin-bottom: 12px;
  font-size: 1.25rem;
}

.card-text {
  margin-bottom: 16px;
  line-height: 1.6;
}

.card-button {
  padding: 10px 20px;
  background: blue;
  color: white;
  border: none;
  border-radius: 4px;
}
\`\`\`

## Tips

- **Reset** margin dan padding default di awal dengan \`* { margin: 0; padding: 0; }\`
- Selalu pakai **\`box-sizing: border-box\`**
- Gunakan **margin** untuk jarak **antar** elemen, **padding** untuk jarak **dalam** elemen
- Untuk center horizontal: \`margin: 0 auto;\` (butuh \`width\`)
- Hindari margin negatif kecuali benar-benar perlu

> Box model adalah konsep paling fundamental di CSS. Pahami baik-baik!`,
    quiz: [
      {
        question: "Apa perbedaan margin dan padding?",
        options: [
          "Tidak ada perbedaan",
          "Margin ruang di luar border (antar elemen), padding ruang di dalam border (antara content dan border)",
          "Margin ruang dalam, padding ruang luar",
          "Margin hanya untuk teks, padding untuk gambar"
        ],
        answer: 1,
        explanation: "Margin adalah ruang di luar border (antar elemen). Padding adalah ruang di dalam border (antara content dan border)."
      },
      {
        question: "Apa efek dari 'box-sizing: border-box'?",
        options: [
          "Menghapus border elemen",
          "Padding dan border ikut dihitung dalam width/height",
          "Membuat elemen berbentuk kotak",
          "Menghilangkan padding"
        ],
        answer: 1,
        explanation: "Dengan border-box, padding dan border termasuk dalam width/height yang ditentukan, membuat ukuran elemen lebih mudah diprediksi."
      },
      {
        question: "Urutan nilai pada shorthand 'margin: 10px 20px 30px 40px' adalah...",
        options: [
          "kanan atas bawah kiri",
          "atas kanan bawah kiri",
          "atas bawah kiri kanan",
          "kiri atas kanan bawah"
        ],
        answer: 1,
        explanation: "Shorthand margin/padding urutannya searah jarum jam dari atas: atas → kanan → bawah → kiri."
      }
    ]
  },
  {
    level: 3,
    order: 5,
    title: "Flexbox",
    slug: "flexbox",
    description: "Menggunakan CSS Flexbox untuk layout satu dimensi yang fleksibel dan responsif.",
    icon: "📦",
    isProject: false,
    content: `# Flexbox

**Flexbox** (Flexible Box Layout) adalah sistem layout CSS modern untuk menyusun elemen dalam **satu dimensi** (baris atau kolom). Flexbox sangat powerful untuk navbar, card, dan layout sederhana.

## Konsep Dasar

Flexbox melibatkan dua peran:

- **Flex container**: elemen parent dengan \`display: flex\`
- **Flex items**: anak-anak langsung dari container

\`\`\`css
.container {
  display: flex;
}
\`\`\`

\`\`\`html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
\`\`\`

## Flex Direction

Mengatur arah utama (main axis):

\`\`\`css
.container {
  display: flex;
  flex-direction: row;            /* default: kiri ke kanan */
  flex-direction: row-reverse;    /* kanan ke kiri */
  flex-direction: column;         /* atas ke bawah */
  flex-direction: column-reverse; /* bawah ke atas */
}
\`\`\`

## Justify Content (Main Axis)

Mengatur alignment item pada **main axis**:

\`\`\`css
.container {
  display: flex;
  justify-content: flex-start;     /* default: di awal */
  justify-content: flex-end;       /* di akhir */
  justify-content: center;         /* di tengah */
  justify-content: space-between;  /* rata, jarak sama antar item */
  justify-content: space-around;   /* jarak sama, termasuk tepi */
  justify-content: space-evenly;   /* jarak benar-benar sama */
}
\`\`\`

## Align Items (Cross Axis)

Mengatur alignment item pada **cross axis**:

\`\`\`css
.container {
  display: flex;
  align-items: stretch;       /* default: penuhi tinggi */
  align-items: flex-start;    /* di atas */
  align-items: flex-end;      /* di bawah */
  align-items: center;        /* di tengah */
  align-items: baseline;      /* berdasarkan baseline teks */
}
\`\`\`

## Flex Wrap

Secara default, item tidak wrap (bisa meluap). Aktifkan wrap:

\`\`\`css
.container {
  display: flex;
  flex-wrap: nowrap;   /* default */
  flex-wrap: wrap;     /* pindah baris jika tidak muat */
  flex-wrap: wrap-reverse;
}
\`\`\`

## Gap

Jarak antar item tanpa perlu margin:

\`\`\`css
.container {
  display: flex;
  gap: 16px;            /* jarak antar item */
  row-gap: 10px;        /* jarak antar baris */
  column-gap: 20px;     /* jarak antar kolom */
}
\`\`\`

## Properti Flex Item

Setiap item flex bisa diatur:

\`\`\`css
.item {
  flex-grow: 1;       /* tumbuh mengisi ruang */
  flex-shrink: 0;     /* tidak menyusut */
  flex-basis: 200px;  /* ukuran awal */
  /* shorthand */
  flex: 1;            /* flex: 1 1 0 */
  flex: 0 0 200px;    /* fix 200px */
  flex: 1 1 auto;     /* default */
}

/* align individual */
.item-special {
  align-self: center;
}
\`\`\`

## Contoh: Center Vertical & Horizontal

\`\`\`css
.center-box {
  display: flex;
  justify-content: center;   /* horizontal */
  align-items: center;       /* vertikal */
  height: 100vh;
}
\`\`\`

## Contoh: Navbar

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: #2c3e50;
  color: white;
}

.nav-links {
  display: flex;
  gap: 24px;
  list-style: none;
}
\`\`\`

\`\`\`html
<nav class="navbar">
  <div class="logo">MyApp</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
\`\`\`

## Contoh: Card Grid Sederhana

\`\`\`css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 250px;  /* basis 250px, bisa tumbuh */
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
\`\`\`

## Tips

- Flexbox untuk layout **satu dimensi** (baris ATAU kolom)
- Untuk **dua dimensi** (baris DAN kolom), gunakan **CSS Grid**
- \`gap\` lebih praktis daripada margin untuk jarak antar item
- Center horizontal+vertikal: \`justify-content: center; align-items: center;\`
- Untuk navbar: \`justify-content: space-between\` paling sering dipakai

> Flexbox adalah senjata utama web developer modern. Wajib kuasai!`,
    quiz: [
      {
        question: "Properti apa yang mengatur alignment flex item pada main axis?",
        options: ["align-items", "justify-content", "flex-direction", "align-self"],
        answer: 1,
        explanation: "justify-content mengatur alignment item pada main axis. align-items pada cross axis."
      },
      {
        question: "Apa efek dari 'flex-direction: column'?",
        options: [
          "Item tersusun horizontal kiri ke kanan",
          "Item tersusun vertikal atas ke bawah",
          "Item menyusut",
          "Item berpindah ke kanan"
        ],
        answer: 1,
        explanation: "flex-direction: column menyusun item dari atas ke bawah (vertikal). Defaultnya row (horizontal kiri ke kanan)."
      },
      {
        question: "Cara terbaik memberi jarak antar item di flexbox modern?",
        options: [
          "Margin negatif pada setiap item",
          "Properti gap pada container",
          "Padding pada container",
          "Border pada setiap item"
        ],
        answer: 1,
        explanation: "Properti gap pada container lebih praktis daripada margin, otomatis memberi jarak antar item tanpa masalah margin collapse."
      }
    ]
  },
  {
    level: 3,
    order: 6,
    title: "Grid",
    slug: "css-grid",
    description: "Menggunakan CSS Grid untuk layout dua dimensi yang powerful: baris dan kolom.",
    icon: "🔲",
    isProject: false,
    content: `# Grid

**CSS Grid** adalah sistem layout **dua dimensi** — bisa mengatur **baris dan kolom** sekaligus. Grid lebih powerful dari Flexbox untuk layout kompleks seperti halaman utuh.

## Konsep Dasar

\`\`\`css
.container {
  display: grid;
}
\`\`\`

Grid container memiliki:

- **Column**: kolom vertikal
- **Row**: baris horizontal
- **Cell**: perpotongan kolom dan baris
- **Gap**: jarak antar cell

## Mendefinisikan Kolom dan Baris

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: 200px 200px 200px;  /* 3 kolom fix */
  grid-template-columns: 1fr 1fr 1fr;        /* 3 kolom sama */
  grid-template-columns: repeat(3, 1fr);     /* singkatan */
  grid-template-columns: 200px 1fr 1fr;      /* mix */

  grid-template-rows: 100px 100px;           /* 2 baris fix */
}
\`\`\`

**fr** (fraction) = unit fraksi ruang yang tersedia.

## Gap

\`\`\`css
.grid {
  display: grid;
  gap: 20px;
  row-gap: 16px;
  column-gap: 24px;
}
\`\`\`

## Auto-fit dan Minmax

Layout responsif tanpa media query:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
\`\`\`

- \`auto-fit\`: jumlah kolom menyesuaikan lebar container
- \`minmax(250px, 1fr)\`: minimal 250px, maksimal 1fr

Ini membuat **grid otomatis responsif**!

## Menempatkan Item

\`\`\`css
.item-a {
  grid-column: 1 / 3;   /* dari garis kolom 1 ke 3 (2 kolom) */
  grid-row: 1 / 2;      /* dari garis baris 1 ke 2 (1 baris) */
}

.item-b {
  grid-column: 3 / 4;
  grid-row: 1 / 3;      /* 2 baris */
}

/* shorthand */
.item-c {
  grid-area: 2 / 1 / 3 / 4;  /* row-start / col-start / row-end / col-end */
}
\`\`\`

## Grid Template Areas

Cara visual menyusun layout:

\`\`\`css
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 60px 1fr 40px;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

\`\`\`html
<div class="layout">
  <header class="header">Header</header>
  <aside class="sidebar">Sidebar</aside>
  <main class="main">Main Content</main>
  <footer class="footer">Footer</footer>
</div>
\`\`\`

Hasilnya: layout lengkap dengan header full width, sidebar kiri, main kanan, footer full width.

## Alignment

\`\`\`css
.grid {
  display: grid;
  justify-items: start;   /* alignment horizontal item dalam cell */
  align-items: center;    /* alignment vertikal */

  justify-content: center;  /* alignment grid dalam container */
  align-content: center;

  /* shorthand */
  place-items: center;      /* align & justify items sekaligus */
}
\`\`\`

## Contoh: Photo Gallery Responsif

\`\`\`css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 20px;
}

.gallery img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
\`\`\`

## Contoh: Card Grid 3 Kolom

\`\`\`css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
\`\`\`

## Flexbox vs Grid

\`\`\`text
Flexbox → Satu dimensi (baris ATAU kolom)
         Cocok: navbar, button group, card row
Grid    → Dua dimensi (baris DAN kolom)
         Cocok: page layout, gallery, dashboard
\`\`\`

Aturan praktis:

- **Navbar, button group, centering** → Flexbox
- **Page layout, gallery, complex grid** → CSS Grid
- Bisa **dikombinasikan** — Grid untuk layout utama, Flexbox untuk komponen

## Tips

- Gunakan \`fr\` untuk kolom fleksibel, \`px\` untuk fix
- \`auto-fit\` + \`minmax\` untuk grid responsif tanpa media query
- \`grid-template-areas\` untuk layout yang "visual" dan mudah dibaca
- Bisa kombinasikan dengan Flexbox di level item

> Grid adalah layout tool paling powerful di CSS. Kuasai untuk layout kompleks!`,
    quiz: [
      {
        question: "Apa perbedaan utama CSS Grid dan Flexbox?",
        options: [
          "Tidak ada perbedaan",
          "Grid untuk dua dimensi (baris dan kolom), Flexbox untuk satu dimensi",
          "Flexbox lebih powerful dari Grid",
          "Grid hanya untuk gambar, Flexbox untuk teks"
        ],
        answer: 1,
        explanation: "Grid mengatur baris dan kolom sekaligus (dua dimensi). Flexbox hanya satu dimensi (baris ATAU kolom)."
      },
      {
        question: "Apa fungsi unit 'fr' di CSS Grid?",
        options: [
          "Pixel fix",
          "Fraction (fraksi) dari ruang yang tersedia",
          "Font-relative unit",
          "Frame per detik"
        ],
        answer: 1,
        explanation: "fr (fraction) adalah unit fraksi dari ruang yang tersisa. 1fr 1fr 1fr berarti tiga kolom dengan ukuran sama."
      },
      {
        question: "Cara membuat grid responsif otomatis tanpa media query?",
        options: [
          "grid-template-columns: 1fr 1fr 1fr",
          "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))",
          "grid-template-columns: auto auto auto",
          "display: flex; flex-wrap: wrap"
        ],
        answer: 1,
        explanation: "repeat(auto-fit, minmax(250px, 1fr)) membuat jumlah kolom menyesuaikan lebar container otomatis, dengan minimum 250px per kolom."
      }
    ]
  },
  {
    level: 3,
    order: 7,
    title: "Animation",
    slug: "css-animation",
    description: "Membuat animasi dengan transition, transform, dan @keyframes untuk halaman interaktif.",
    icon: "✨",
    isProject: false,
    content: `# Animation

**Animasi CSS** membuat halaman web terasa hidup dan interaktif. Ada dua cara utama: **transition** untuk perubahan halus, dan **@keyframes** untuk animasi kompleks.

## Transition

\`transition\` membuat perubahan property **halus** saat ada trigger (hover, click, dll):

\`\`\`css
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: darkblue;
}
\`\`\`

Saat di-hover, warna berubah **halus** selama 0.3 detik, bukan mendadak.

### Sintaks Transition

\`\`\`css
.box {
  /* Satu property */
  transition: transform 0.3s ease;

  /* Beberapa property */
  transition: background-color 0.3s, transform 0.5s, opacity 0.2s;

  /* Shorthand lengkap */
  transition: property duration timing-function delay;

  /* Contoh */
  transition: all 0.3s ease-in-out 0.1s;
}
\`\`\`

### Timing Functions

\`\`\`text
ease        → default, mulai lambat, cepat, akhir lambat
linear      → kecepatan konstan
ease-in     → mulai lambat, akhir cepat
ease-out    → mulai cepat, akhir lambat
ease-in-out → mulai & akhir lambat
cubic-bezier(...) → custom curve
\`\`\`

## Transform

\`transform\` mengubah elemen tanpa mengganggu layout:

\`\`\`css
.box {
  /* Translate (pindah) */
  transform: translateX(50px);
  transform: translateY(-20px);
  transform: translate(50px, 20px);

  /* Scale (skala) */
  transform: scale(1.5);
  transform: scaleX(2);
  transform: scale(0.5);

  /* Rotate (putar) */
  transform: rotate(45deg);
  transform: rotate(-90deg);

  /* Skew (miring) */
  transform: skew(20deg, 10deg);

  /* Kombinasi */
  transform: translate(50px, 0) rotate(45deg) scale(1.2);
}
\`\`\`

> **Penting**: Gunakan \`transform\` dan \`opacity\` untuk animasi — keduanya **performant** karena tidak trigger layout ulang.

## Hover Effect Populer

\`\`\`css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.image {
  transition: transform 0.5s ease;
  overflow: hidden;
}

.image:hover img {
  transform: scale(1.1);
}
\`\`\`

## @keyframes Animation

Untuk animasi berulang atau kompleks, gunakan \`@keyframes\`:

\`\`\`css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.ball {
  animation: bounce 1s ease-in-out infinite;
}
\`\`\`

### Sintaks Animation

\`\`\`css
.element {
  animation: name duration timing-function delay iteration-count direction fill-mode play-state;
}

/* Contoh */
.spinner {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
\`\`\`

### Properti Animation

\`\`\`text
animation-name         → nama @keyframes
animation-duration     → durasi (1s, 500ms)
animation-timing-function → ease, linear, dll
animation-delay        → jeda sebelum mulai
animation-iteration-count → angka atau infinite
animation-direction    → normal, reverse, alternate
animation-fill-mode    → forwards, backwards, both
\`\`\`

## Contoh Animasi Loading

\`\`\`css
.loader {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
\`\`\`

## Fade In Saat Page Load

\`\`\`css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero {
  animation: fadeIn 1s ease-out;
}
\`\`\`

## Pulse Animation

\`\`\`css
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.notification {
  animation: pulse 2s ease-in-out infinite;
}
\`\`\`

## Tips Performa

- Animasikan hanya **\`transform\`** dan **\`opacity\`** untuk performa terbaik
- Hindari animasi \`width\`, \`height\`, \`top\`, \`left\` (trigger layout)
- Gunakan \`will-change\` untuk elemen yang akan dianimasi:
  \`\`\`css
  .animated { will-change: transform; }
  \`\`\`
- Jangan berlebihan — terlalu banyak animasi bikin pusing

## Tips UX

- Durasi **200-500ms** paling natural untuk micro-interaction
- Gunakan **ease-out** untuk feedback (cepat lalu melambat)
- Sediakan \`prefers-reduced-motion\` untuk accessibility:

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
\`\`\`

> Animasi yang tepat membuat web terasa premium. Tapi jangan berlebihan!`,
    quiz: [
      {
        question: "Apa perbedaan transition dan @keyframes animation?",
        options: [
          "Tidak ada perbedaan",
          "Transition untuk perubahan halus saat trigger (hover), @keyframes untuk animasi kompleks berurutan",
          "Transition lebih cepat dari @keyframes",
          "@keyframes hanya untuk gambar"
        ],
        answer: 1,
        explanation: "Transition membuat perubahan property halus saat ada trigger (hover/focus). @keyframes untuk animasi berurutan dengan banyak step, bisa berulang."
      },
      {
        question: "Properti mana yang paling performant untuk animasi CSS?",
        options: [
          "width dan height",
          "top dan left",
          "transform dan opacity",
          "margin dan padding"
        ],
        answer: 2,
        explanation: "transform dan opacity paling performant karena diproses di GPU dan tidak trigger layout ulang. Hindari animasi width/height/top/left."
      },
      {
        question: "Apa fungsi 'animation-iteration-count: infinite'?",
        options: [
          "Membuat animasi berjalan sekali",
          "Membuat animasi berulang tanpa henti",
          "Membatasi animasi 100 kali",
          "Menghentikan animasi"
        ],
        answer: 1,
        explanation: "infinite membuat animasi berulang tanpa henti. Bisa juga diisi angka tertentu (mis. 3) untuk animasi berjalan sebanyak itu."
      }
    ]
  },
  {
    level: 3,
    order: 8,
    title: "Responsive Design",
    slug: "responsive-design",
    description: "Membuat website responsif dengan media queries, mobile-first, dan viewport meta tag.",
    icon: "📱",
    isProject: false,
    content: `# Responsive Design

**Responsive design** memastikan website terlihat baik di **semua perangkat** — desktop, tablet, dan HP. Dengan lebih dari 50% pengunjung dari mobile, ini wajib dikuasai.

## Viewport Meta Tag

Pertama, tambahkan meta tag ini di \`<head>\` HTML:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

Tanpa ini, website di HP akan tampil seperti di desktop (kecil dan harus zoom). Tag ini memastikan lebar viewport = lebar perangkat.

## Media Queries

Media query adalah inti dari responsive design — menerapkan CSS berbeda berdasarkan ukuran layar:

\`\`\`css
/* Default (desktop) */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Tablet */
@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .container {
    padding: 0 12px;
  }
}
\`\`\`

## Breakpoints Umum

\`\`\`text
Mobile    : 320px - 480px
Tablet    : 481px - 768px
Laptop    : 769px - 1024px
Desktop   : 1025px - 1200px
Large     : 1201px+
\`\`\`

Breakpoints populer: **480px, 768px, 1024px, 1200px**.

## Mobile-First Approach

Pendekatan **mobile-first** menulis CSS untuk HP **dulu**, lalu scale up:

\`\`\`css
/* Default: Mobile */
.grid {
  grid-template-columns: 1fr;
}

/* Tablet dan lebih besar */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
\`\`\`

Mobile-first lebih disarankan karena:

- HP adalah perangkat paling banyak digunakan
- Kode lebih ringkas (override sedikit)
- Lebih mudah ditambah fitur di layar besar

## Media Query untuk Fitur Lain

\`\`\`css
/* Dark mode */
@media (prefers-color-scheme: dark) {
  body {
    background: #1a1a1a;
    color: #f4f4f4;
  }
}

/* Print */
@media print {
  .no-print { display: none; }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
  }
}
\`\`\`

## Unit Responsif

Gunakan unit relatif, bukan fix:

\`\`\`css
/* Hindari: fix pixel */
.bad { width: 1000px; font-size: 16px; }

/* Gunakan: unit relatif */
.good {
  max-width: 1200px;     /* batas maksimum */
  width: 100%;           /* tapi responsif */
  font-size: 1rem;       /* relatif root */
  padding: 2vw;          /* relatif viewport */
}

/* Modern: clamp() */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
  /* minimum 1.5rem, ideal 4vw, maksimum 3rem */
}
\`\`\`

## Responsive Image

\`\`\`css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
\`\`\`

Atau gunakan \`<picture>\` untuk gambar berbeda per ukuran:

\`\`\`html
<picture>
  <source media="(max-width: 600px)" srcset="small.jpg">
  <source media="(max-width: 1200px)" srcset="medium.jpg">
  <img src="large.jpg" alt="Hero image">
</picture>
\`\`\`

## Responsive Navigation

Pola umum: navbar desktop, hamburger menu mobile:

\`\`\`css
.nav-menu {
  display: flex;
  gap: 24px;
}

.hamburger {
  display: none;
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;       /* sembunyi di mobile */
  }

  .hamburger {
    display: block;      /* tampilkan hamburger */
  }

  .nav-menu.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: #333;
    width: 200px;
    padding: 20px;
  }
}
\`\`\`

## Tools untuk Test Responsive

- **DevTools** (F12) → Toggle device toolbar (Ctrl+Shift+M)
- **BrowserStack** untuk tes di banyak device
- Tes di device fisik sesering mungkin

## Tips

- Selalu mulai dengan **mobile-first**
- Gunakan **\`max-width\`** alih-alih \`width\` fix
- Gambar: \`max-width: 100%; height: auto;\`
- Test di **berbagai ukuran** layar
- Jangan target device spesifik (iPhone, Samsung), tapi target **breakpoints**
- Gunakan **Flexbox/Grid** yang otomatis responsif

> Website yang tidak responsif di 2024 = kehilangan 50%+ pengguna. Wajib dikuasai!`,
    quiz: [
      {
        question: "Apa fungsi meta viewport tag?",
        options: [
          "Mengatur tema warna browser",
          "Memastikan website tampil dengan lebar yang sesuai perangkat, bukan versi desktop diperkecil",
          "Mempercepat loading website",
          "Mengaktifkan JavaScript"
        ],
        answer: 1,
        explanation: "meta name='viewport' content='width=device-width, initial-scale=1.0' membuat lebar viewport = lebar perangkat, mencegah HP menampilkan versi desktop yang diperkecil."
      },
      {
        question: "Apa itu pendekatan mobile-first dalam responsive design?",
        options: [
          "Hanya mendesain untuk mobile",
          "Menulis CSS untuk mobile dulu, lalu menambahkan media query min-width untuk layar lebih besar",
          "Mendesain desktop dulu, lalu menyesuaikan mobile",
          "Tidak perlu media query"
        ],
        answer: 1,
        explanation: "Mobile-first menulis CSS default untuk mobile, lalu override dengan @media (min-width: ...) untuk layar lebih besar. Lebih ringkas dan performa lebih baik."
      },
      {
        question: "Breakpoint umum untuk tablet adalah sekitar berapa px?",
        options: ["320px", "480px", "768px", "1200px"],
        answer: 2,
        explanation: "Breakpoint 768px umumnya untuk tablet. 480px untuk mobile, 1024px untuk laptop, 1200px+ untuk desktop besar."
      }
    ]
  },
  {
    level: 3,
    order: 9,
    title: "Project: Company Profile",
    slug: "project-company-profile",
    description: "Proyek membangun halaman company profile responsif dengan HTML semantic dan CSS modern.",
    icon: "🏢",
    isProject: true,
    content: `# Project: Company Profile

Saatnya mengaplikasikan semua pengetahuan HTML dan CSS! Kamu akan membangun **company profile** profesional untuk perusahaan fiktif. Proyek ini menguji semua konsep Level 2 dan 3.

## Tujuan Proyek

Bangun halaman company profile yang **responsif**, **indah**, dan **modern** menggunakan HTML semantic + CSS (Flexbox, Grid, animasi, dan media queries).

## Spesifikasi

Company profile harus memiliki:

1. **Header sticky** dengan logo, navigasi, dan tombol CTA
2. **Hero section** dengan headline, subheadline, dan background
3. **About section** — deskripsi perusahaan dengan gambar
4. **Services section** — grid kartu layanan (3-6 services)
5. **Stats section** — angka pencapaian (klien, proyek, tahun)
6. **Team section** — grid foto + nama tim
7. **Testimonials** — kartu kutipan pelanggan
8. **Contact section** — form + info kontak
9. **Footer** dengan link, social media, copyright

## Struktur File

\`\`\`text
company-profile/
├── index.html
├── css/
│   ├── reset.css         → Reset default browser
│   ├── variables.css     → CSS variables (warna, font, spacing)
│   ├── style.css         → Style utama
│   └── responsive.css    → Media queries
└── images/
    ├── logo.svg
    ├── hero.jpg
    ├── about.jpg
    ├── team-1.jpg ... team-4.jpg
    └── services-icon.svg
\`\`\`

## Kerangka HTML

\`\`\`html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TechCorp - Solusi Digital Modern</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
  <!-- Header -->
  <header class="header">
    <div class="container header-inner">
      <a href="#" class="logo">
        <img src="images/logo.svg" alt="TechCorp Logo">
      </a>
      <nav class="nav">
        <ul class="nav-list">
          <li><a href="#about">Tentang</a></li>
          <li><a href="#services">Layanan</a></li>
          <li><a href="#team">Tim</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
      </nav>
      <a href="#contact" class="btn btn-primary">Hubungi Kami</a>
      <button class="hamburger" aria-label="Menu">☰</button>
    </div>
  </header>

  <!-- Hero -->
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-text">
        <h1>Solusi Digital untuk Bisnis Modern</h1>
        <p>Kami membantu perusahaan berkembang dengan teknologi terkini.</p>
        <a href="#services" class="btn btn-primary">Lihat Layanan</a>
      </div>
      <div class="hero-image">
        <img src="images/hero.jpg" alt="Ilustrasi solusi digital">
      </div>
    </div>
  </section>

  <!-- About, Services, Stats, Team, Testimonials, Contact... -->
</body>
</html>
\`\`\`

## CSS Variables

\`\`\`css
/* variables.css */
:root {
  /* Colors */
  --color-primary: #3182ce;
  --color-primary-dark: #2c5282;
  --color-secondary: #ed8936;
  --color-text: #2d3748;
  --color-text-light: #718096;
  --color-bg: #ffffff;
  --color-bg-alt: #f7fafc;
  --color-border: #e2e8f0;

  /* Typography */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;

  /* Layout */
  --container-width: 1200px;
  --border-radius: 8px;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}
\`\`\`

## Layout dengan Grid

\`\`\`css
/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-md);
}

/* Team Grid */
.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
}
\`\`\`

## Header Sticky + Flexbox

\`\`\`css
.header {
  position: sticky;
  top: 0;
  background: var(--color-bg);
  box-shadow: var(--shadow);
  z-index: 100;
}

.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-sm) 0;
}

.nav-list {
  display: flex;
  gap: var(--spacing-md);
  list-style: none;
}
\`\`\`

## Animasi Hover

\`\`\`css
.service-card {
  padding: var(--spacing-md);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow);
}

.btn {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

.btn-primary {
  background: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
}

/* Fade in saat load */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-text {
  animation: fadeInUp 1s ease-out;
}
\`\`\`

## Responsive Navigation

\`\`\`css
.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-list {
    display: none;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--color-bg);
    padding: var(--spacing-md);
    box-shadow: var(--shadow);
  }

  .nav-list.active {
    display: flex;
  }

  .hamburger {
    display: block;
  }
}
\`\`\`

## Konsep yang Diuji

Proyek ini mengharuskanmu menerapkan:

- **HTML semantic**: \`<header>\`, \`<nav>\`, \`<section>\`, \`<article>\`, \`<footer>\`
- **CSS Variables** untuk konsistensi
- **Flexbox** untuk header, navbar, hero
- **CSS Grid** untuk services, team, testimonials
- **Responsive design**: mobile-first, media queries, hamburger menu
- **Animasi**: transition, transform, @keyframes
- **Tipografi**: Google Fonts, hirarki ukuran
- **Box model**: padding, margin, border konsisten

## Tantangan Tambahan

1. Tambahkan **dark mode** toggle dengan \`prefers-color-scheme\`
2. Implementasi **smooth scroll** untuk anchor link
3. Tambahkan **scroll animation** (fade-in saat scroll) dengan CSS atau JS
4. Optimasi gambar dengan \`<picture>\` dan \`srcset\`
5. Validasi HTML/CSS di W3C Validator
6. Test performa di Google PageSpeed Insights

## Kriteria Penilaian Diri

- ✅ Tampil baik di desktop, tablet, dan mobile
- ✅ Semua elemen semantic digunakan benar
- ✅ CSS terorganisir (variables, reset, style, responsive)
- ✅ Konsistensi spacing, warna, dan tipografi
- ✅ Animasi halus, tidak berlebihan
- ✅ Form punya label dan input yang tepat
- ✅ Accessibility: alt text, kontras warna, focus state
- ✅ Kode rapi, ter-indentasi konsisten, ada komentar

> Proyek ini adalah showcase kemampuanmu. Jadikan portofolio pertama yang bangga!`,
    quiz: [
      {
        question: "Apa keuntungan menggunakan CSS Variables (custom properties)?",
        options: [
          "Membuat CSS lebih cepat dimuat",
          "Memudahkan konsistensi dan pemeliharaan (ubah sekali, berlaku semua)",
          "Mengganti fungsi JavaScript",
          "Hanya untuk warna"
        ],
        answer: 1,
        explanation: "CSS Variables menyimpan nilai (warna, spacing, font) di :root, sehingga ubah sekali langsung berlaku di seluruh kode. Sangat membantu konsistensi dan maintainability."
      },
      {
        question: "Layout mana yang paling cocok untuk grid kartu services yang responsif?",
        options: [
          "CSS Grid dengan repeat(auto-fit, minmax(280px, 1fr))",
          "Flexbox dengan flex-direction: column",
          "Float dengan clear: both",
          "Table HTML"
        ],
        answer: 0,
        explanation: "CSS Grid dengan auto-fit + minmax otomatis menyesuaikan jumlah kolom dengan lebar container, sangat ideal untuk kartu responsif."
      },
      {
        question: "Bagaimana cara membuat header yang tetap tampil saat scroll?",
        options: [
          "position: fixed",
          "position: sticky; top: 0",
          "position: absolute",
          "position: relative"
        ],
        answer: 1,
        explanation: "position: sticky; top: 0 membuat header menempel saat scroll, namun tetap mengambil ruang di alur normal. Lebih fleksibel dari position: fixed."
      }
    ]
  }
];
