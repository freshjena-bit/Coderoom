import { MaterialData } from "./content-types";

export const contentLevels1to3: MaterialData[] = [
  // ============================================
  // LEVEL 1 - DASAR IT & TEKNOLOGI (10 materials)
  // ============================================
  {
    level: 1,
    order: 1,
    title: "Pengenalan Dunia IT",
    slug: "pengenalan-dunia-it",
    description: "Mengenal dunia IT, peran teknologi informasi, dan karir di bidang tech.",
    icon: "💻",
    isProject: false,
    content: `# Pengenalan Dunia IT

**Teknologi Informasi (IT)** adalah bidang yang berkaitan dengan pengelolaan, pemrosesan, penyimpanan, dan distribusi informasi menggunakan teknologi komputer. Di era digital ini, IT menjadi tulang punggung hampir setiap industri mulai dari kesehatan, keuangan, pendidikan, hingga hiburan.

## Apa Itu Teknologi Informasi?

IT mencakup hardware, software, jaringan, dan sistem yang digunakan untuk mengelola data. Dari smartphone di saku Anda hingga server raksasa di data center, semuanya adalah bagian dari ekosistem IT. Bidang ini terus berkembang pesat dengan inovasi seperti cloud computing, artificial intelligence, blockchain, dan Internet of Things (IoT).

\`\`\`text
Komponen Utama IT:
- Hardware: CPU, RAM, Storage, Network Device
- Software: Operating System, Applications, Games
- Network: Internet, LAN, WAN, WiFi
- Data: Database, Files, Big Data
\`\`\`

## Karir di Bidang IT

Industri IT menawarkan berbagai jalur karir yang menjanjikan dengan gaji kompetitif. Setiap peran membutuhkan kombinasi skill teknis dan soft skill yang berbeda, sehingga Anda bisa memilih jalur yang sesuai dengan minat.

\`\`\`text
1. Software Developer       - membuat aplikasi web/mobile
2. Network Engineer         - mengelola jaringan komputer
3. Database Administrator   - mengelola database
4. Cybersecurity Specialist - mengamankan sistem
5. DevOps Engineer          - otomasi dan deployment
6. Data Scientist           - analisis data besar
7. UI/UX Designer           - desain antarmuka pengguna
\`\`\`

## Skill Dasar yang Dibutuhkan

Untuk memulai di dunia IT, kuasai fondasi berikut: pemahaman komputer dasar, kemampuan problem-solving, logika pemrograman, kemampuan komunikasi, dan kemauan belajar terus-menerus karena teknologi selalu berubah. Banyak sumber belajar gratis tersedia online seperti dokumentasi resmi, tutorial video, dan platform interaktif seperti freeCodeCamp.

Dunia IT juga menuntut soft skill: kemampuan kerja tim, komunikasi teknis, dan manajemen waktu. Banyak proyek IT dikerjakan dalam tim cross-functional sehingga kolaborasi sangat penting. Selain itu, bergabunglah dengan komunitas seperti forum online, meetup, atau kontribusi open-source untuk memperluas jaringan dan mempercepat pembelajaran. Komunitas seperti Stack Overflow, GitHub, dan Discord developer Indonesia adalah tempat bagus untuk bertanya dan berbagi pengetahuan dengan sesama praktisi IT.

> **Tips:** Jangan mencoba belajar semua sekaligus. Pilih satu bidang fokus, kuasai dasar-dasarnya, bangun proyek kecil, lalu kembangkan secara bertahap.`,
    quiz: [
      {
        question: "Apa kepanjangan dari IT?",
        options: ["Internet Technology", "Information Technology", "Integrated Tech", "International Telecom"],
        answer: 1,
        explanation: "IT adalah singkatan dari Information Technology (Teknologi Informasi)."
      },
      {
        question: "Manakah yang BUKAN termasuk komponen utama IT?",
        options: ["Hardware", "Software", "Network", "Seni rupa"],
        answer: 3,
        explanation: "Komponen utama IT meliputi hardware, software, network, dan data. Seni rupa bukan komponen IT."
      },
      {
        question: "Peran yang bertugas mengamankan sistem komputer adalah?",
        options: ["Data Scientist", "Cybersecurity Specialist", "UI/UX Designer", "Network Engineer"],
        answer: 1,
        explanation: "Cybersecurity Specialist bertanggung jawab melindungi sistem, jaringan, dan data dari ancaman digital."
      }
    ]
  },
  {
    level: 1,
    order: 2,
    title: "Hardware Komputer",
    slug: "hardware-komputer",
    description: "Memahami komponen hardware: CPU, RAM, storage, GPU, dan motherboard.",
    icon: "🖥️",
    isProject: false,
    content: `# Hardware Komputer

**Hardware** adalah komponen fisik komputer yang bisa disentuh. Memahami hardware penting karena menjadi fondasi kerja seluruh sistem komputer, dari menjalankan aplikasi sederhana hingga server skala besar.

## Komponen Utama Hardware

Setiap komponen memiliki peran spesifik. Berikut bagian terpenting yang harus Anda ketahui:

\`\`\`text
1. CPU     - otak komputer, memproses instruksi
2. RAM     - memori sementara berkecepatan tinggi
3. Storage - penyimpanan permanen (HDD/SSD)
4. GPU     - memproses grafis dan komputasi paralel
5. Motherboard - papan yang menyatukan semua komponen
6. PSU     - Power Supply Unit, sumber daya
\`\`\`

## CPU dan RAM

**CPU (Central Processing Unit)** adalah otak komputer yang mengeksekusi instruksi program. Kecepatan CPU diukur dalam GHz dan jumlah core. CPU multi-core bisa menjalankan banyak tugas secara paralel.

**RAM (Random Access Memory)** adalah memori volatile yang menyimpan data sementara saat komputer menyala. Semakin besar RAM, semakin banyak aplikasi yang bisa berjalan bersamaan tanpa lag.

\`\`\`bash
# Cek info hardware di Linux
lscpu              # info CPU
free -h            # info RAM
lsblk              # info storage
nvidia-smi         # info GPU (jika ada)
\`\`\`

## Storage: HDD vs SSD

**HDD (Hard Disk Drive)** menggunakan piringan magnetik, lebih murah namun lambat. **SSD (Solid State Drive)** menggunakan chip flash, jauh lebih cepat, lebih hemat energi, dan tahan goncangan. Untuk performa modern, SSD sangat direkomendasikan sebagai boot drive.

Selain komponen di atas, perangkat input/output seperti keyboard, mouse, monitor, dan kartu jaringan (NIC) juga penting. Saat membangun atau membeli komputer, pastikan komponen saling kompatibel: motherboard harus mendukung socket CPU, RAM dengan tipe yang sesuai (DDR4 atau DDR5), dan PSU dengan daya cukup untuk seluruh sistem. Memahami komponen hardware membantu Anda saat troubleshooting, upgrade, maupun merakit server sendiri untuk kebutuhan lab atau bisnis kecil.

Suhu juga penting: jaga sirkulasi udara dan pendinginan CPU agar komponen tidak overheating, karena panas berlebih dapat memperpendek umur hardware dan menurunkan performa sistem secara signifikan.

> **Tips:** Saat membeli komputer, prioritaskan SSD daripada HDD. SSD memberi peningkatan kecepatan paling terasa dibanding upgrade lain.`,
    quiz: [
      {
        question: "Apa fungsi CPU pada komputer?",
        options: ["Menyimpan data permanen", "Memproses instruksi program", "Menampilkan grafis", "Menyuplai daya listrik"],
        answer: 1,
        explanation: "CPU (Central Processing Unit) adalah otak komputer yang mengeksekusi dan memproses instruksi program."
      },
      {
        question: "Apa perbedaan utama RAM dan Storage?",
        options: ["RAM lebih lambat", "RAM volatile (sementara), storage permanen", "Storage lebih mahal", "Tidak ada perbedaan"],
        answer: 1,
        explanation: "RAM bersifat volatile (data hilang saat mati) sebagai memori sementara, sedangkan storage menyimpan data permanen."
      },
      {
        question: "Keunggulan SSD dibanding HDD adalah?",
        options: ["Lebih murah", "Kapasitas lebih besar", "Jauh lebih cepat dan tahan goncangan", "Lebih berat"],
        answer: 2,
        explanation: "SSD menggunakan chip flash sehingga jauh lebih cepat, hemat energi, dan tahan goncangan dibanding HDD."
      }
    ]
  },
  {
    level: 1,
    order: 3,
    title: "Sistem Operasi",
    slug: "sistem-operasi",
    description: "Windows, Linux, macOS - cara kerja OS dan perbedaannya.",
    icon: "🪟",
    isProject: false,
    content: `# Sistem Operasi

**Sistem Operasi (OS)** adalah software yang mengelola hardware dan software lain, serta menyediakan layanan untuk aplikasi. Tanpa OS, komputer hanya bongkahan logam yang tidak berguna.

## Jenis Sistem Operasi Populer

\`\`\`text
1. Windows  - Microsoft, paling umum untuk desktop
2. Linux    - open-source, banyak distro (Ubuntu, Debian)
3. macOS    - Apple, eksklusif untuk Mac
4. Android  - Google, untuk perangkat mobile
5. iOS      - Apple, untuk iPhone/iPad
\`\`\`

## Cara Kerja OS

OS berperan sebagai jembatan antara user, aplikasi, dan hardware. Saat Anda klik ikon, OS mengatur CPU untuk menjalankan program, mengalokasikan RAM, mengakses storage, dan menampilkan output ke layar.

\`\`\`text
User -> Aplikasi -> OS (Kernel) -> Hardware
              |
              +-> Manajemen: CPU, Memori, File, Proses, I/O
\`\`\`

## Linux: OS para Developer

Linux sangat populer di kalangan developer dan server karena gratis, open-source, stabil, dan aman. Banyak layanan internet besar seperti Google dan Facebook berjalan di atas Linux.

\`\`\`bash
# Cek informasi sistem di Linux
uname -a            # info kernel
cat /etc/os-release # info distro
whoami              # user aktif
date                # tanggal & waktu
\`\`\`

## Perbedaan Kunci

- **Windows** — mudah digunakan, kompatibilitas software tinggi, cocok untuk gaming.
- **Linux** — gratis, fleksibel, ideal untuk server dan programming.
- **macOS** — stabil, ekosistem Apple, populer untuk desain dan development.

Setiap OS punya filosofi dan ekosistem aplikasi berbeda. Windows mendominasi desktop rumah dan kantor, macOS favorit desainer dan developer iOS, sedangkan Linux memerintah server, cloud, dan embedded device. Untuk pemula IT, sangat disarankan menginstal Linux (misalnya Ubuntu) lewat Virtual Machine atau WSL (Windows Subsystem for Linux) agar bisa belajar tanpa meninggalkan Windows. Banyak tutorial, tool, dan dokumentasi teknis berbahasa Linux, jadi familiaritas dengan Linux akan sangat membantu perjalanan karir IT Anda.

> **Tips:** Untuk belajar IT/cybersecurity, kuasai Linux. Banyak tool dan server production berjalan di Linux, dan Anda bisa mencobanya lewat Virtual Machine atau WSL di Windows.`,
    quiz: [
      {
        question: "Apa fungsi utama Sistem Operasi?",
        options: ["Menyimpan file", "Mengelola hardware dan software", "Menampilkan gambar", "Menghubungkan ke internet"],
        answer: 1,
        explanation: "OS mengelola resource hardware dan menyediakan layanan untuk aplikasi agar bisa berjalan."
      },
      {
        question: "Sistem operasi open-source yang populer untuk server adalah?",
        options: ["Windows", "Linux", "macOS", "iOS"],
        answer: 1,
        explanation: "Linux adalah OS open-source yang paling banyak digunakan untuk server karena gratis, stabil, dan aman."
      },
      {
        question: "Perintah Linux untuk melihat info kernel adalah?",
        options: ["whoami", "uname -a", "ls", "pwd"],
        answer: 1,
        explanation: "Perintah 'uname -a' menampilkan informasi kernel dan sistem operasi secara lengkap."
      }
    ]
  },
  {
    level: 1,
    order: 4,
    title: "Command Line Interface",
    slug: "command-line-interface",
    description: "Dasar command line Linux/Windows untuk navigasi dan manajemen file.",
    icon: "⌨️",
    isProject: false,
    content: `# Command Line Interface

**Command Line Interface (CLI)** adalah cara berinteraksi dengan komputer menggunakan perintah teks. CLI lebih cepat dan powerful dibanding GUI untuk banyak tugas administrasi dan development.

## Perintah Dasar Linux

\`\`\`bash
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
\`\`\`

## Melihat Isi File

\`\`\`bash
cat file.txt         # tampilkan seluruh isi
less file.txt        # buka dengan pager (q untuk keluar)
head -n 10 file.txt  # 10 baris pertama
tail -n 10 file.txt  # 10 baris terakhir
grep "error" log.txt # cari kata 'error'
\`\`\`

## Permission File

Setiap file memiliki 3 level permission: **owner**, **group**, **others**, dengan hak read (r), write (w), execute (x).

\`\`\`bash
chmod +x script.sh    # tambah execute permission
chmod 755 file.txt    # rwxr-xr-x
chown user file.txt   # ubah owner
\`\`\`

## Tips Produktivitas

- Gunakan \`Tab\` untuk auto-complete nama file/perintah.
- Gunakan \`↑/↓\` untuk menavigasi history perintah.
- Gunakan \`Ctrl+C\` untuk menghentikan proses yang berjalan.
- Gunakan \`Ctrl+L\` atau \`clear\` untuk membersihkan layar.

Menguasai CLI juga berarti memahami pipeline dan redirect. Operator pipe mengalirkan output satu perintah ke perintah lain, sementara operator redirect mengarahkan output ke file. Contohnya, kombinasi perintah ls, grep, dan redirect bisa menyaring file tertentu dan menyimpan hasilnya ke sebuah file teks. Kombinasi perintah-perintah kecil menjadi pipeline yang powerful adalah inti filosofi Unix yang membuat CLI begitu efisien untuk tugas kompleks seperti analisis log, pemrosesan teks, dan otomasi sistem.

> **Tips:** Investasikan waktu mempelajari CLI. Sekali bisa, Anda akan jauh lebih cepat dan efisien dalam tugas IT apapun.`,
    quiz: [
      {
        question: "Perintah untuk menampilkan direktori saat ini?",
        options: ["ls", "pwd", "cd", "dir"],
        answer: 1,
        explanation: "pwd (print working directory) menampilkan path direktori saat ini."
      },
      {
        question: "Apa fungsi perintah 'cd ..' ?",
        options: ["Pindah ke root", "Naik satu level direktori", "Hapus direktori", "Buat direktori baru"],
        answer: 1,
        explanation: "cd .. berarti naik satu level ke direktori parent."
      },
      {
        question: "Perintah untuk membuat direktori baru?",
        options: ["touch", "mkdir", "create", "newdir"],
        answer: 1,
        explanation: "mkdir (make directory) membuat direktori/folder baru."
      }
    ]
  },
  {
    level: 1,
    order: 5,
    title: "File System & Management",
    slug: "file-system-management",
    description: "Struktur direktori, path, permission, dan manajemen file.",
    icon: "📁",
    isProject: false,
    content: `# File System & Management

**File System** adalah cara sistem operasi mengorganisir, menyimpan, dan menemukan file di storage. Memahami file system penting untuk mengelola data secara efektif.

## Struktur Direktori Linux

Linux menggunakan struktur hierarki berbentuk pohon yang dimulai dari root (\`/\`).

\`\`\`text
/            root directory
/home        direktori user
/etc         file konfigurasi sistem
/var         data variabel (log, cache)
/tmp         file sementara
/usr         program & library
/bin         binary esensial
/opt         software optional
\`\`\`

## Path: Absolute vs Relative

\`\`\`bash
# Absolute path - dimulai dari root
cd /home/user/documents

# Relative path - relatif terhadap direktori saat ini
cd documents
cd ../images    # naik lalu masuk images

# Path khusus
.       # direktori saat ini
..      # direktori parent
~       # home directory user
\`\`\`

## Permission dan Ownership

Setiap file punya 3 set permission (owner, group, others) dengan kombinasi rwx.

\`\`\`bash
# Lihat permission
ls -l file.txt
# Output: -rw-r--r-- 1 user group 1024 Jan 1 file.txt

# Ubah permission numerik
chmod 644 file.txt   # rw-r--r--
chmod 755 script.sh  # rwxr-xr-x

# Ubah owner
chown user:group file.txt
\`\`\`

## Wildcard dan Find

\`\`\`bash
ls *.txt            # semua file .txt
rm temp_*           # hapus file diawali 'temp_'
find /home -name "*.log"        # cari file .log
find . -type d -name "backup"   # cari direktori 'backup'
\`\`\`

Selain permission standar, Linux juga mendukung ACL (Access Control List) untuk permission yang lebih granular, serta atribut khusus seperti immutable yang mencegah file diubah bahkan oleh root. Pahami juga konsep symlink (symbolic link) dan hardlink: symlink adalah shortcut ke path, sedangkan hardlink adalah nama tambahan untuk file yang sama. Keduanya berguna untuk mengorganisir file tanpa menduplikasi data. Untuk mencari file berdasarkan konten, gunakan grep rekursif atau tool alternatif seperti ripgrep yang jauh lebih cepat di project berskala besar.

> **Tips:** Hati-hati menggunakan \`rm -rf\`. Kombinasi ini menghapus secara rekursif tanpa konfirmasi dan tidak bisa di-undo. Selalu cek path dulu!`,
    quiz: [
      {
        question: "Direktori root di Linux dilambangkan dengan?",
        options: ["\\\\", "/", "C:", "~"],
        answer: 1,
        explanation: "Linux menggunakan '/' sebagai root directory, berbeda dengan Windows yang menggunakan drive letter seperti C:."
      },
      {
        question: "Apa arti permission '755'?",
        options: ["rwxr-xr-x", "rw-rw-rw-", "rwxrwxrwx", "r--r--r--"],
        answer: 0,
        explanation: "755 = rwx (7) untuk owner, r-x (5) untuk group, r-x (5) untuk others."
      },
      {
        question: "Symbol '~' di path Linux berarti?",
        options: ["Root directory", "Direktori parent", "Home directory user", "Direktori sementara"],
        answer: 2,
        explanation: "Tilde '~' adalah shortcut untuk home directory user yang sedang aktif."
      }
    ]
  },
  {
    level: 1,
    order: 6,
    title: "Software Installation & Package Manager",
    slug: "software-installation",
    description: "Cara install software dan menggunakan package manager (apt, npm, pip).",
    icon: "📦",
    isProject: false,
    content: `# Software Installation & Package Manager

**Package Manager** adalah tool yang mengotomatisasi proses instalasi, update, dan removal software. Package manager menyelesaikan dependency secara otomatis sehingga Anda tidak perlu install satu per satu manual.

## Package Manager Populer

\`\`\`text
OS / Bahasa      Package Manager
-----------------------------------
Ubuntu/Debian   apt
CentOS/RHEL     yum / dnf
macOS           brew (Homebrew)
Windows         winget / choco
JavaScript      npm / yarn / pnpm
Python          pip / poetry
Rust            cargo
\`\`\`

## Menggunakan APT (Linux Debian/Ubuntu)

\`\`\`bash
sudo apt update            # update daftar package
sudo apt upgrade           # upgrade semua package
sudo apt install nginx     # install nginx
sudo apt remove nginx      # hapus nginx
apt search python3         # cari package
apt show nginx             # lihat info package
\`\`\`

## NPM untuk JavaScript

\`\`\`bash
npm init -y                # buat package.json
npm install express        # install package lokal
npm install -g typescript  # install global
npm update                 # update semua package
npm uninstall express      # hapus package
npm list                   # lihat package terinstall
\`\`\`

## PIP untuk Python

\`\`\`bash
pip install requests       # install package
pip install -r requirements.txt  # install dari file
pip list                   # daftar package
pip freeze > requirements.txt    # simpan daftar package
pip uninstall requests     # hapus package
\`\`\`

Setiap package manager punya file konfigurasi sumber repository. Pada apt, sumber didefinisikan di berkas sources.list. Pada npm, registry default adalah npmjs.com tapi bisa diganti ke mirror lokal untuk kecepatan. Penting juga untuk mengunci versi dependency: npm menggunakan package-lock.json, pip menggunakan requirements.txt, sementara tool modern seperti Poetry dan pnpm menawarkan locking yang lebih ketat. Mengunci versi mencegah bug tak terduga saat dependency rilis versi baru yang breaking, terutama di environment production di mana stabilitas adalah prioritas utama.

> **Tips:** Selalu gunakan package manager daripada download installer manual. Selain otomatis resolve dependency, update dan uninstall juga jauh lebih mudah dan bersih.`,
    quiz: [
      {
        question: "Package manager default untuk Ubuntu/Debian adalah?",
        options: ["yum", "apt", "brew", "npm"],
        answer: 1,
        explanation: "apt (Advanced Package Tool) adalah package manager default untuk distribusi Linux Debian/Ubuntu."
      },
      {
        question: "Perintah npm untuk install package secara global?",
        options: ["npm install pkg", "npm install -g pkg", "npm global pkg", "npm -global pkg"],
        answer: 1,
        explanation: "Flag '-g' (global) membuat package tersedia di seluruh sistem, bukan hanya di project lokal."
      },
      {
        question: "Apa fungsi 'pip install -r requirements.txt'?",
        options: ["Update pip", "Install semua package dari file requirements", "Hapus semua package", "Cek versi pip"],
        answer: 1,
        explanation: "Perintah ini menginstall semua package yang terdaftar di file requirements.txt, biasanya untuk reproduksi environment."
      }
    ]
  },
  {
    level: 1,
    order: 7,
    title: "Virtual Machine & Container",
    slug: "virtual-machine-container",
    description: "Konsep virtualisasi dengan VM dan container (Docker).",
    icon: "📦",
    isProject: false,
    content: `# Virtual Machine & Container

**Virtualisasi** memungkinkan satu komputer fisik menjalankan banyak environment terisolasi. Virtual Machine (VM) dan Container adalah dua pendekatan virtualisasi yang banyak digunakan di industri IT modern.

## Virtual Machine (VM)

VM adalah emulasi komputer lengkap yang menjalankan OS sendiri di atas hypervisor. Setiap VM memiliki kernel tersendiri sehingga lebih berat namun isolasinya sangat kuat.

\`\`\`text
+-----------------------------------+
|        Host OS (Windows)          |
|  +----------+  +----------+       |
|  | VM1      |  | VM2      |       |
|  | Ubuntu   |  | Windows  |       |
|  | App A    |  | App B    |       |
|  +----------+  +----------+       |
|         Hypervisor (VMware/VBox)  |
+-----------------------------------+
\`\`\`

## Container (Docker)

Container berbagi kernel host OS tetapi mengisolasi aplikasi dan dependency-nya. Container jauh lebih ringan dan cepat start dibanding VM.

\`\`\`bash
# Perintah dasar Docker
docker pull nginx              # download image
docker images                  # list image
docker run -d -p 8080:80 nginx # jalankan container
docker ps                      # list container aktif
docker stop <container_id>     # hentikan container
docker exec -it <id> bash      # masuk ke container
\`\`\`

## VM vs Container

\`\`\`text
Aspek        | VM          | Container
-------------|-------------|-----------
Isolasi      | Kuat        | Sedang
Boot time    | Menit       | Detik
Resource     | Berat       | Ringan
OS           | Full guest  | Share kernel
Use case     | Multi-OS    | Microservice
\`\`\`

## Dockerfile Sederhana

\`\`\`dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]
\`\`\`

Untuk manajemen container skala produksi, digunakan orchestrator seperti Kubernetes yang mengelola ratusan container, scaling otomatis, dan self-healing. Sementara itu, tools seperti Vagrant memudahkan membuat VM development yang reproducible via kode (Infrastructure as Code). Pilihan antara VM dan container sering bukan either-or: banyak perusahaan menjalankan container di dalam VM untuk mendapat isolasi ganda. Pahami use case masing-masing agar bisa memilih teknologi virtualisasi yang tepat sesuai kebutuhan performance, security, dan kompleksitas tim Anda.

> **Tips:** Gunakan container untuk development agar environment konsisten antar developer. "It works on my machine" akan jadi masa lalu!`,
    quiz: [
      {
        question: "Apa perbedaan utama VM dan Container?",
        options: ["VM lebih cepat", "Container berbagi kernel host, VM punya kernel sendiri", "Container tidak ada", "VM tidak butuh OS"],
        answer: 1,
        explanation: "Container berbagi kernel host OS sehingga lebih ringan, sedangkan VM menjalankan OS lengkap sendiri (kernel tersendiri)."
      },
      {
        question: "Perintah Docker untuk menjalankan container adalah?",
        options: ["docker start", "docker run", "docker create", "docker exec"],
        answer: 1,
        explanation: "docker run membuat dan menjalankan container baru dari image yang ditentukan."
      },
      {
        question: "Keunggulan container dibanding VM adalah?",
        options: ["Isolasi lebih kuat", "Boot lebih cepat dan ringan", "Bisa jalankan OS berbeda", "Lebih aman"],
        answer: 1,
        explanation: "Container boot dalam hitungan detik dan menggunakan resource jauh lebih sedikit dibanding VM karena berbagi kernel host."
      }
    ]
  },
  {
    level: 1,
    order: 8,
    title: "Git & Version Control",
    slug: "git-version-control",
    description: "Dasar Git: init, commit, branch, push, pull, dan GitHub.",
    icon: "🔀",
    isProject: false,
    content: `# Git & Version Control

**Git** adalah sistem version control terdistribusi yang melacak perubahan kode. Git memungkinkan banyak developer berkolaborasi, kembali ke versi sebelumnya, dan mengelola fitur secara paralel melalui branch.

## Setup Awal

\`\`\`bash
git config --global user.name "Nama Anda"
git config --global user.email "email@example.com"
git config --global init.defaultBranch main
\`\`\`

## Workflow Dasar

\`\`\`bash
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
\`\`\`

## Branch dan Remote

\`\`\`bash
# Branch
git branch fitur-baru
git checkout fitur-baru   # pindah branch
git checkout -b fitur-x   # buat & pindah
git merge fitur-baru      # gabungkan ke branch aktif

# Remote (GitHub/GitLab)
git remote add origin https://github.com/user/repo.git
git push -u origin main
git pull origin main
\`\`\`

## Best Practice Commit Message

\`\`\`text
feat:     fitur baru
fix:      perbaikan bug
docs:     perubahan dokumentasi
refactor: refactor kode
test:     tambah/ubah test
chore:    task rutin
\`\`\`

Konsep penting lainnya adalah merge dan rebase. Merge menggabungkan branch dengan membuat commit merge, menjaga history lengkap. Rebase memindahkan commit ke base baru sehingga history jadi linear dan rapi, namun berbahaya pada branch yang dipakai bersama karena mengubah history. Untuk kolaborasi tim, alur kerja populer adalah Git Flow dengan branch develop dan release, atau GitHub Flow dengan branch fitur plus Pull Request. Pull Request memungkinkan code review sebelum merge, meningkatkan kualitas kode dan menangkap bug lebih awal. Selalu pull sebelum push untuk menghindari konflik, dan selesaikan konflik dengan teliti menggunakan tool visual seperti VS Code. Platform seperti GitHub dan GitLab juga menyediakan fitur Issues, Wiki, dan CI/CD yang melengkapi workflow Git untuk kolaborasi tim modern.

> **Tips:** Commit sering dengan pesan yang jelas. Satu commit = satu perubahan logis. Hindari commit "update" atau "fix bug" tanpa konteks.`,
    quiz: [
      {
        question: "Perintah untuk membuat repository Git baru?",
        options: ["git start", "git init", "git new", "git create"],
        answer: 1,
        explanation: "git init membuat repository Git baru di direktori saat ini."
      },
      {
        question: "Apa fungsi 'git commit -m'?",
        options: ["Upload ke server", "Menyimpan perubahan ke history dengan pesan", "Membuat branch", "Menghapus file"],
        answer: 1,
        explanation: "git commit -m menyimpan snapshot perubahan yang sudah di-stage ke history dengan pesan commit."
      },
      {
        question: "Perintah untuk mengirim perubahan ke remote repository?",
        options: ["git send", "git push", "git upload", "git remote"],
        answer: 1,
        explanation: "git push mengirim commit lokal ke remote repository seperti GitHub."
      }
    ]
  },
  {
    level: 1,
    order: 9,
    title: "Dasar Internet & Web",
    slug: "dasar-internet-web",
    description: "Cara kerja internet: client-server, browser, URL, dan protokol.",
    icon: "🌐",
    isProject: false,
    content: `# Dasar Internet & Web

**Internet** adalah jaringan global yang menghubungkan miliaran perangkat. Memahami cara kerja internet penting bagi siapapun yang ingin terjun di dunia web development atau cybersecurity.

## Cara Kerja Internet

\`\`\`text
[Browser/Client] --HTTP/HTTPS--> [Server] --query--> [Database]
      |                                |
      +---- DNS resolve domain -------+
\`\`\`

Saat Anda mengetik URL, browser melakukan DNS lookup untuk menerjemahkan domain ke IP address, lalu mengirim request HTTP ke server, server memproses dan mengembalikan response (HTML/CSS/JS) yang dirender browser.

## Komponen Penting

\`\`\`text
1. Client   - browser/app yang membuat request
2. Server   - komputer yang menyajikan resource
3. Protocol - aturan komunikasi (HTTP, HTTPS, FTP)
4. DNS      - Domain Name System, penerjemah domain->IP
5. URL      - alamat resource (https://example.com/path)
6. IP       - alamat unik perangkat di jaringan
\`\`\`

## Anatomi URL

Setiap bagian URL punya fungsi spesifik. Berikut contoh dan bagiannya:

\`\`\`text
URL: https://www.example.com:443/blog/post?id=10#section

- https     -> scheme (protokol)
- www...com -> domain (host)
- 443       -> port
- /blog/post-> path
- id=10     -> query string
- section   -> fragment (anchor)
\`\`\`

## HTTP Methods

\`\`\`bash
GET     - mengambil data
POST    - mengirim data baru
PUT     - update seluruh resource
PATCH   - update sebagian resource
DELETE  - hapus resource

# Test request dengan curl
curl https://api.example.com/users
curl -X POST -d '{"name":"Budi"}' https://api.example.com/users
\`\`\`

## Status Code HTTP

\`\`\`text
1xx Informational
2xx Success       (200 OK, 201 Created)
3xx Redirection   (301, 302)
4xx Client Error  (400 Bad, 401 Unauth, 404 Not Found)
5xx Server Error  (500 Internal, 503 Service Unavailable)
\`\`\`

Internet bekerja berkat ribuan kabel bawah laut, satelit, dan data center yang saling terhubung membentuk jaringan global. Protokol seperti TCP/IP memastikan data sampai utuh dan berurutan, sementara HTTPS menambah enkripsi TLS agar data tidak bisa disadap. Saat belajar web, pahami juga konsep cookie, session, dan caching yang mempengaruhi cara aplikasi web menyimpan state dan mempercepat loading. Browser developer tools atau F12 adalah senjata utama untuk inspeksi request, response, header, dan performa halaman web Anda secara mendalam.

> **Tips:** Pahami HTTP dengan baik. Semua komunikasi web — dari browser, API, hingga serangan web — berbasis protokol HTTP.`,
    quiz: [
      {
        question: "Apa fungsi DNS?",
        options: ["Mengirim email", "Menerjemahkan domain ke IP address", "Menyimpan file", "Melindungi dari virus"],
        answer: 1,
        explanation: "DNS (Domain Name System) menerjemahkan nama domain seperti google.com menjadi IP address yang dipahami komputer."
      },
      {
        question: "HTTP method untuk mengambil data dari server adalah?",
        options: ["POST", "GET", "DELETE", "PUT"],
        answer: 1,
        explanation: "GET digunakan untuk mengambil/membaca data dari server tanpa mengubah state server."
      },
      {
        question: "Status code HTTP yang berarti 'Not Found' adalah?",
        options: ["200", "301", "404", "500"],
        answer: 2,
        explanation: "404 Not Found berarti resource yang diminta tidak ditemukan di server."
      }
    ]
  },
  {
    level: 1,
    order: 10,
    title: "Sistem Bilangan & Encoding",
    slug: "sistem-bilangan-encoding",
    description: "Binary, hex, ASCII, Unicode - representasi data di komputer.",
    icon: "🔢",
    isProject: false,
    content: `# Sistem Bilangan & Encoding

Komputer hanya memahami angka **0 dan 1** (binary). Semua data — teks, gambar, video — direpresentasikan dalam bentuk bilangan biner. Memahami sistem bilangan dan encoding adalah fondasi penting dalam IT dan cybersecurity.

## Sistem Bilangan

\`\`\`text
Decimal  (base 10) : 0,1,2,3,4,5,6,7,8,9
Binary   (base 2)  : 0,1
Octal    (base 8)  : 0-7
Hex      (base 16) : 0-9, A-F
\`\`\`

## Konversi Bilangan

\`\`\`python
# Konversi di Python
print(bin(255))    # '0b11111111'
print(hex(255))    # '0xff'
print(int('1010', 2))   # 10 (binary to decimal)
print(int('FF', 16))    # 255 (hex to decimal)
print(oct(64))     # '0o100'
\`\`\`

## ASCII & Unicode

**ASCII** adalah encoding 7-bit untuk 128 karakter (huruf, angka, simbol dasar). **Unicode** (UTF-8) adalah standar modern yang mendukung jutaan karakter termasuk emoji dan aksara non-Latin.

\`\`\`python
# ASCII dan Unicode di Python
print(ord('A'))        # 65 (kode ASCII)
print(chr(65))         # 'A'
print(ord('😍'))       # 128525 (Unicode)

# String ke bytes
text = "Halo"
print(text.encode('utf-8'))   # b'Halo'
\`\`\`

## Hex di Dunia Nyata

Hexadecimal sering digunakan karena lebih ringkas dari binary. Warna HTML (\`#FF5733\`), MAC address, IPv6, dan hash kriptografi semuanya ditulis dalam hex.

\`\`\`text
#FF5733  -> warna RGB (255, 87, 51)
00:1A:2B:3C:4D:5E -> MAC address
2001:0db8::1 -> IPv6
\`\`\`

## Bit dan Byte

\`\`\`text
1 bit   = 0 atau 1
1 byte  = 8 bit  (256 nilai: 0-255)
1 KB    = 1024 byte
1 MB    = 1024 KB
1 GB    = 1024 MB
\`\`\`

Konsep bit dan byte menjadi dasar ukuran data di komputer. File 1 MB sebenarnya adalah sekitar satu juta byte atau delapan juta bit. Dalam kriptografi, panjang kunci diukur dalam bit: kunci AES-256 berarti 256 bit, yang berarti 2 pangkat 256 kemungkinan kunci — angka yang lebih besar dari jumlah atom di alam semesta yang teramati. Inilah yang membuat enkripsi modern sangat sulit dipecahkan. Memahami binary dan hex juga membantu saat membaca memory dump, network packet, atau menganalisis malware di low level.

> **Tips:** Saat debugging jaringan atau malware, Anda akan sering melihat data dalam hex. Latih kemampuan membaca hex — ini skill penting di cybersecurity.`,
    quiz: [
      {
        question: "Berapa nilai decimal dari biner '1010'?",
        options: ["8", "10", "12", "5"],
        answer: 1,
        explanation: "1010 biner = 8+0+2+0 = 10 decimal."
      },
      {
        question: "Apa kepanjangan ASCII?",
        options: ["American Standard Code for Information Interchange", "Advanced Symbol Code", "Automatic System Character", "American Symbol Code"],
        answer: 0,
        explanation: "ASCII = American Standard Code for Information Interchange, encoding 7-bit untuk 128 karakter."
      },
      {
        question: "Berapa bit dalam 1 byte?",
        options: ["4", "8", "16", "32"],
        answer: 1,
        explanation: "1 byte terdiri dari 8 bit, sehingga bisa merepresentasikan 256 nilai (0-255)."
      }
    ]
  },

  // ============================================
  // LEVEL 2 - PEMROGRAMAN (12 materials)
  // ============================================
  {
    level: 2,
    order: 1,
    title: "Pengenalan Pemrograman",
    slug: "pengenalan-pemrograman",
    description: "Apa itu programming, algoritma, dan cara berpikir komputasional.",
    icon: "💡",
    isProject: false,
    content: `# Pengenalan Pemrograman

**Pemrograman (programming)** adalah seni memberi instruksi kepada komputer untuk menyelesaikan suatu masalah. Inti dari programming bukan mengetik kode, melainkan **berpikir komputasional** untuk memecah masalah menjadi langkah-langkah logis.

## Apa Itu Algoritma?

Algoritma adalah urutan langkah terstruktur untuk menyelesaikan masalah. Bayangkan resep masakan: ada urutan bahan dan langkah yang menghasilkan hidungan akhir.

\`\`\`text
Algoritma membuat teh:
1. Didihkan air
2. Masukkan teh ke gelas
3. Tuang air panas
4. Tambahkan gula
5. Aduk dan sajikan
\`\`\`

## Cara Berpikir Komputasional

Empat pilar berpikir komputasional:

\`\`\`text
1. Decomposition     - pecah masalah besar jadi kecil
2. Pattern Recognition - cari pola berulang
3. Abstraction       - fokus hal penting, abaikan detail
4. Algorithm Design  - susun langkah penyelesaian
\`\`\`

## Contoh Sederhana

\`\`\`python
# Program menghitung rata-rata
nilai = [80, 75, 90, 65, 85]
total = sum(nilai)
rata_rata = total / len(nilai)
print(f"Rata-rata: {rata_rata}")

if rata_rata >= 75:
    print("Lulus")
else:
    print("Tidak lulus")
\`\`\`

## Tahap Membuat Program

\`\`\`text
1. Pahami masalah
2. Rancang algoritma (flowchart/pseudocode)
3. Tulis kode (coding)
4. Test dan debug
5. Optimasi dan dokumentasi
\`\`\`

Pemrograman melatih pola pikir logis dan sistematis yang berguna bahkan di luar coding. Mulailah dengan proyek kecil yang relevan: kalkulator, to-do list, atau program konversi satuan. Bangun kebiasaan menulis pseudocode sebelum kode sesungguhnya untuk memperjelas algoritma. Saat menemui bug, jangan panik — gunakan teknik seperti print debugging, baca pesan error dengan teliti, dan pecah masalah menjadi bagian lebih kecil. Belajar dari kesalahan adalah bagian normal dan tak terhindarkan dari menjadi programmer. Konsistensi berlatih setiap hari, meski hanya 30 menit, jauh lebih efektif daripada belajar maraton sekali seminggu. Manfaatkan platform seperti LeetCode atau HackerRank untuk melatih algoritma, dan baca kode orang lain di GitHub untuk memperluas wawasan. Bergabunglah dengan komunitas programmer untuk diskusi dan saling membantu saat menemui kesulitan.

> **Tips:** Jangan langsung coding. Pikirkan dulu algoritmanya di kertas atau pseudocode. 80% pekerjaan programmer adalah berpikir, 20% mengetik kode.`,
    quiz: [
      {
        question: "Apa itu algoritma?",
        options: ["Bahasa pemrograman", "Urutan langkah terstruktur menyelesaikan masalah", "Software khusus", "Jenis komputer"],
        answer: 1,
        explanation: "Algoritma adalah urutan langkah logis dan terstruktur untuk menyelesaikan suatu masalah."
      },
      {
        question: "Berikut yang BUKAN pilar berpikir komputasional adalah?",
        options: ["Decomposition", "Pattern Recognition", "Compilation", "Abstraction"],
        answer: 2,
        explanation: "Empat pilar berpikir komputasional: Decomposition, Pattern Recognition, Abstraction, dan Algorithm Design. Compilation bukan termasuk."
      },
      {
        question: "Tahap pertama dalam membuat program adalah?",
        options: ["Menulis kode", "Menguji program", "Memahami masalah", "Optimasi"],
        answer: 2,
        explanation: "Memahami masalah adalah langkah pertama. Tanpa memahami masalah, kita tidak bisa merancang solusi yang tepat."
      }
    ]
  },
  {
    level: 2,
    order: 2,
    title: "Bahasa Pemrograman Populer",
    slug: "bahasa-pemrograman-populer",
    description: "Python, JavaScript, Java, C++ - kapan menggunakan masing-masing.",
    icon: "🗣️",
    isProject: false,
    content: `# Bahasa Pemrograman Populer

Ada ratusan bahasa pemrograman, masing-masing dengan kekuatan dan use case berbeda. Memilih bahasa yang tepat bergantung pada tujuan: web, mobile, game, data science, atau sistem.

## Bahasa Populer & Kegunaannya

\`\`\`text
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
\`\`\`

## Python: Bahasa Pemula Terbaik

Python populer karena sintaks mirip bahasa Inggris, mudah dibaca, dan ekosistem luas (NumPy, Pandas, Django, Flask).

\`\`\`python
print("Halo Dunia!")
nama = input("Nama kamu siapa? ")
print(f"Senang bertemu, {nama}!")
\`\`\`

## JavaScript: Raja Web

JavaScript wajib dikuasai untuk web development. Berjalan di browser dan server (Node.js).

\`\`\`javascript
console.log("Halo Dunia!");
let nama = prompt("Nama kamu siapa?");
alert("Senang bertemu, " + nama);
\`\`\`

## Java: Stabil untuk Enterprise

Java berjalan di JVM (Java Virtual Machine), strongly typed, dan banyak dipakai di perusahaan besar.

\`\`\`java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Halo Dunia!");
    }
}
\`\`\`

## Cara Memilih Bahasa

\`\`\`text
- Web frontend -> JavaScript/TypeScript
- Web backend  -> Python, JS, Go, PHP, Java
- Data/AI      -> Python, R
- Mobile       -> Swift (iOS), Kotlin (Android), Dart (Flutter)
- Game         -> C++, C#
- Sistem       -> C, C++, Rust
\`\`\`

Tidak ada bahasa terbaik mutlak — semua tergantung konteks. Untuk pemula, fokus satu bahasa dulu hingga menguasai konsep inti: variabel, tipe data, kontrol flow, function, dan struktur data. Setelah itu, belajar bahasa kedua jauh lebih mudah karena konsepnya mirip. Perhatikan juga paradigma: bahasa imperatif seperti C dan Python, object-oriented seperti Java dan C#, functional seperti Haskell dan Elixir, serta multi-paradigma seperti JavaScript dan Rust. Memahami beberapa paradigma membuat Anda jadi programmer lebih fleksibel. Terakhir, ikuti tren industri namun jangan terburu-buru pindah bahasa hanya karena hype — kuasai dulu yang Anda pakai.

> **Tips:** Kuasai satu bahasa dengan baik dulu. Konsep pemrograman (variabel, loop, function) universal — sekali paham, mudah berpindah ke bahasa lain.`,
    quiz: [
      {
        question: "Bahasa paling populer untuk Data Science dan AI adalah?",
        options: ["Java", "Python", "C++", "PHP"],
        answer: 1,
        explanation: "Python mendominasi Data Science dan AI berkat library seperti NumPy, Pandas, dan TensorFlow."
      },
      {
        question: "Bahasa wajib untuk web frontend?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: 2,
        explanation: "JavaScript adalah satu-satunya bahasa yang berjalan native di browser, menjadikannya wajib untuk web frontend."
      },
      {
        question: "Bahasa yang direkomendasikan untuk pemula?",
        options: ["Assembly", "Python", "C++", "Rust"],
        answer: 1,
        explanation: "Python direkomendasikan untuk pemula karena sintaks sederhana, mirip bahasa Inggris, dan mudah dibaca."
      }
    ]
  },
  {
    level: 2,
    order: 3,
    title: "Python Dasar",
    slug: "python-dasar",
    description: "Instalasi Python, print, input, dan program pertama Hello World.",
    icon: "🐍",
    isProject: false,
    content: `# Python Dasar

**Python** adalah bahasa pemrograman high-level yang populer karena mudah dipelajari, ekspresif, dan punya ekosistem luas. Python digunakan untuk web, automation, data science, AI, dan banyak lagi.

## Instalasi Python

\`\`\`bash
# Cek versi Python
python --version       # Windows
python3 --version      # Linux/macOS

# Menjalankan file Python
python3 hello.py

# Mode interaktif (REPL)
python3
>>> print("Halo")
\`\`\`

## Hello World

\`\`\`python
# Program pertama
print("Halo Dunia!")
print("Belajar Python itu menyenangkan")
\`\`\`

## Variabel dan Input

\`\`\`python
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
\`\`\`

## Operator Dasar

\`\`\`python
a = 10
b = 3

print(a + b)    # 13 (penjumlahan)
print(a - b)    # 7  (pengurangan)
print(a * b)    # 30 (perkalian)
print(a / b)    # 3.333 (pembagian)
print(a // b)   # 3  (pembagian bulat)
print(a % b)    # 1  (modulo/sisa)
print(a ** b)   # 1000 (pangkat)
\`\`\`

## Komentar

\`\`\`python
# Ini komentar satu baris

"""
Ini komentar
multi-baris (docstring)
"""
\`\`\`

Python punya filosofi The Zen of Python yang menekankan keterbacaan dan kesederhanaan. Ketik import this di interpreter untuk membacanya. Python juga terkenal dengan library standar yang kaya: os untuk operasi sistem, datetime untuk tanggal, json untuk parsing JSON, dan banyak lagi. Untuk menjalankan script Python, gunakan perintah python3 namafile.py. Untuk project serius, gunakan virtual environment (venv) agar dependency tiap project terisolasi dan tidak bentrok. IDE populer untuk Python antara lain VS Code, PyCharm, dan Jupyter Notebook untuk data science.

Python juga punya REPL interaktif yang berguna untuk eksperimen cepat dan mengevaluasi ekspresi tanpa harus membuat file script terlebih dahulu, sehingga sangat cocok untuk belajar dan prototyping.

> **Tips:** Python menggunakan indentasi (spasi) untuk blok kode, bukan kurung kurawal. Konsisten gunakan 4 spasi per level indentasi.`,
    quiz: [
      {
        question: "Fungsi untuk menampilkan output di Python?",
        options: ["echo()", "console.log()", "print()", "printf()"],
        answer: 2,
        explanation: "print() adalah fungsi bawaan Python untuk menampilkan output ke layar."
      },
      {
        question: "Fungsi untuk menerima input dari user?",
        options: ["scan()", "input()", "get()", "read()"],
        answer: 1,
        explanation: "input() membaca input dari user sebagai string. Gunakan int()/float() untuk konversi ke angka."
      },
      {
        question: "Apa output '10 // 3' di Python?",
        options: ["3.33", "3", "4", "1"],
        answer: 1,
        explanation: "Operator // adalah pembagian bulat (floor division), sehingga 10 // 3 = 3."
      }
    ]
  },
  {
    level: 2,
    order: 4,
    title: "Variabel & Tipe Data",
    slug: "variabel-tipe-data",
    description: "Variabel, tipe data primitif: int, float, string, boolean.",
    icon: "📦",
    isProject: false,
    content: `# Variabel & Tipe Data

**Variabel** adalah wadah untuk menyimpan data. **Tipe data** menentukan jenis nilai yang bisa disimpan. Memahami keduanya adalah fondasi pemrograman.

## Variabel di Python

\`\`\`python
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
\`\`\`

## Tipe Data Primitif

\`\`\`python
# Integer (bilangan bulat)
umur = 25
tahun = 2024

# Float (bilangan desimal)
pi = 3.14159
berat = 65.5

# String (teks)
nama = "Budi"
pesan = 'Halo'
multi = """Teks
multi baris"""

# Boolean (True/False)
aktif = True
selesai = False
\`\`\`

## Konversi Tipe (Type Casting)

\`\`\`python
# String ke int/float
umur_str = "25"
umur = int(umur_str)       # 25
harga = float("99.5")      # 99.5

# Angka ke string
teks = str(100)            # "100"

# Cek tipe data
print(type(umur))          # <class 'int'>
print(type(nama))          # <class 'str'>
\`\`\`

## Operasi String

\`\`\`python
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
\`\`\`

Python mendukung dynamic typing, artinya tipe variabel ditentukan saat runtime dan bisa berubah. Sejak Python 3.5, Anda bisa menambahkan type hint opsional untuk dokumentasi dan static checker seperti mypy. Type hint tidak mengubah behavior runtime, namun sangat membantu di project besar untuk menangkap bug lebih awal. Pahami juga mutable vs immutable: list dan dict mutable (bisa diubah), sementara tuple, str, dan int immutable. Mengubah string akan membuat objek string baru, bukan memodifikasi yang lama, sehingga operasi string bisa boros memori jika dilakukan berulang dalam loop.

> **Tips:** Python dinamis sehingga variabel bisa berganti tipe. Namun, untuk kode yang jelas, jaga konsistensi tipe agar tidak membingungkan.`,
    quiz: [
      {
        question: "Tipe data untuk bilangan desimal di Python?",
        options: ["int", "float", "decimal", "double"],
        answer: 1,
        explanation: "float menyimpan bilangan desimal seperti 3.14 atau 0.5."
      },
      {
        question: "Apa output dari 'str(100)' di Python?",
        options: ["100", "'100'", "Error", "100.0"],
        answer: 1,
        explanation: "str(100) mengkonversi integer 100 menjadi string '100'."
      },
      {
        question: "Fungsi untuk mengecek tipe data di Python?",
        options: ["typeof()", "type()", "datatype()", "gettype()"],
        answer: 1,
        explanation: "type() mengembalikan tipe data dari suatu objek, misalnya type(5) -> <class 'int'>."
      }
    ]
  },
  {
    level: 2,
    order: 5,
    title: "Operator & Ekspresi",
    slug: "operator-ekspresi",
    description: "Operator aritmatika, perbandingan, logika, dan assignment.",
    icon: "➕",
    isProject: false,
    content: `# Operator & Ekspresi

**Operator** adalah simbol yang melakukan operasi pada nilai/variabel. **Ekspresi** adalah kombinasi nilai, variabel, dan operator yang menghasilkan nilai baru.

## Operator Aritmatika

\`\`\`python
a = 10
b = 3

print(a + b)    # 13  penjumlahan
print(a - b)    # 7   pengurangan
print(a * b)    # 30  perkalian
print(a / b)    # 3.333 pembagian
print(a // b)   # 3   pembagian bulat
print(a % b)    # 1   modulo (sisa)
print(a ** b)   # 1000 pangkat
\`\`\`

## Operator Perbandingan

Menghasilkan nilai boolean \`True\` atau \`False\`.

\`\`\`python
x = 5
y = 10

print(x == y)   # False (sama dengan)
print(x != y)   # True  (tidak sama)
print(x > y)    # False (lebih besar)
print(x < y)    # True  (lebih kecil)
print(x >= 5)   # True  (lebih besar atau sama)
print(x <= 4)   # False (lebih kecil atau sama)
\`\`\`

## Operator Logika

\`\`\`python
a = True
b = False

print(a and b)  # False  (keduanya True)
print(a or b)   # True   (salah satu True)
print(not a)    # False  (negasi)

# Kombinasi
umur = 20
print(umur >= 17 and umur <= 65)  # True
\`\`\`

## Operator Assignment

\`\`\`python
x = 10       # assignment
x += 5       # x = x + 5  -> 15
x -= 3       # x = x - 3  -> 12
x *= 2       # x = x * 2  -> 24
x /= 4       # x = x / 4  -> 6.0
x %= 4       # x = x % 4  -> 2.0
\`\`\`

## Prioritas Operator

\`\`\`text
1. ()           - kurung
2. **           - pangkat
3. * / // %     - perkalian/pembagian
4. + -          - penjumlahan/pengurangan
5. == != > <    - perbandingan
6. not and or   - logika
\`\`\`

> **Tips:** Jika ragu urutan operasi, gunakan tanda kurung. Kode yang eksplisit lebih mudah dibaca danhindari bug logika.`,
    quiz: [
      {
        question: "Operator modulo (%) menghasilkan?",
        options: ["Hasil bagi", "Sisa pembagian", "Pangkat", "Pembulatan"],
        answer: 1,
        explanation: "Operator modulo (%) menghasilkan sisa pembagian, misalnya 10 % 3 = 1."
      },
      {
        question: "Apa hasil dari 'True and False'?",
        options: ["True", "False", "Error", "None"],
        answer: 1,
        explanation: "Operator 'and' menghasilkan True hanya jika kedua operand True. Karena False, hasilnya False."
      },
      {
        question: "Operator untuk pangkat di Python?",
        options: ["^", "**", "//", "pow"],
        answer: 1,
        explanation: "Di Python, operator pangkat adalah ** (contoh: 2 ** 3 = 8). Simbol ^ adalah XOR di Python, bukan pangkat."
      }
    ]
  },
  {
    level: 2,
    order: 6,
    title: "Struktur Kontrol If/Else",
    slug: "struktur-kontrol-if-else",
    description: "Pengambilan keputusan dengan if, elif, else dan nested condition.",
    icon: "🔀",
    isProject: false,
    content: `# Struktur Kontrol If/Else

**Struktur kontrol** memungkinkan program mengambil keputusan berdasarkan kondisi. \`if/else\` adalah fondasi logika dalam pemrograman.

## Sintaks Dasar

\`\`\`python
umur = 18

if umur >= 17:
    print("Dewasa")
else:
    print("Belum dewasa")
\`\`\`

## If / Elif / Else

\`\`\`python
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
\`\`\`

## Kondisi Gabungan

\`\`\`python
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
\`\`\`

## Nested If (If bersarang)

\`\`\`python
umur = 20
punya_ktp = True

if umur >= 17:
    if punya_ktp:
        print("Buat SIM")
    else:
        print("Buat KTP dulu")
else:
    print("Belum cukup umur")
\`\`\`

## Conditional Expression (Ternary)

\`\`\`python
umur = 20
status = "Dewasa" if umur >= 17 else "Anak"
print(status)  # Dewasa
\`\`\`

## Match Case (Python 3.10+)

\`\`\`python
hari = "Senin"
match hari:
    case "Senin" | "Selasa" | "Rabu" | "Kamis" | "Jumat":
        print("Hari kerja")
    case "Sabtu" | "Minggu":
        print("Weekend")
    case _:
        print("Tidak valid")
\`\`\`

Logika kondisional adalah jantung dari hampir semua program. Saat menulis if/else bertingkat yang dalam (lebih dari 3 level), pertimbangkan untuk refactor dengan guard clause atau early return, atau memecah ke function terpisah agar kode lebih mudah dibaca. Hindari juga negasi ganda yang membingungkan. Untuk validasi input, gunakan pola fail-fast: cek kondisi invalid lebih dulu dan return atau tolak, lalu tulis logic utama tanpa nested if. Kode yang rata atau flat umumnya lebih mudah dipahami daripada kode yang bersarang dalam, dan mengurangi risiko bug logika yang sulit dilacak.

> **Tips:** Perhatikan indentasi! Python menggunakan indentasi (4 spasi) untuk blok. Salah indentasi = syntax error atau logic error.`,
    quiz: [
      {
        question: "Kapan blok 'else' dieksekusi?",
        options: ["Selalu", "Jika semua kondisi if/elif False", "Jika kondisi if True", "Tidak pernah"],
        answer: 1,
        explanation: "Blok else dieksekusi ketika semua kondisi if dan elif sebelumnya bernilai False."
      },
      {
        question: "Kata kunci untuk multiple condition di Python?",
        options: ["else if", "elseif", "elif", "elsif"],
        answer: 2,
        explanation: "Python menggunakan 'elif' (singkatan else if) untuk multiple condition."
      },
      {
        question: "Indentasi yang benar di Python?",
        options: ["2 spasi", "4 spasi (standar)", "Tab saja", "Tidak perlu indentasi"],
        answer: 1,
        explanation: "PEP 8 (style guide Python) merekomendasikan 4 spasi per level indentasi."
      }
    ]
  },
  {
    level: 2,
    order: 7,
    title: "Perulangan / Loop",
    slug: "perulangan-loop",
    description: "For loop, while loop, break, continue, dan nested loop.",
    icon: "🔁",
    isProject: false,
    content: `# Perulangan / Loop

**Loop** memungkinkan menjalankan blok kode berulang. Tanpa loop, kita harus menulis kode yang sama berkali-kali. Python punya dua loop utama: \`for\` dan \`while\`.

## For Loop

\`\`\`python
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
\`\`\`

## While Loop

\`\`\`python
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
\`\`\`

## Break dan Continue

\`\`\`python
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
\`\`\`

## Nested Loop

\`\`\`python
# Tabel perkalaan
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i*j}")
    print("---")
\`\`\`

## Enumerate dan Zip

\`\`\`python
# Enumerate - index + value
buah = ["apel", "mangga", "jeruk"]
for i, b in enumerate(buah):
    print(f"{i}: {b}")

# Zip - iterasi dua list paralel
nama = ["Andi", "Budi", "Citra"]
nilai = [80, 75, 90]
for n, val in zip(nama, nilai):
    print(f"{n} mendapat {val}")
\`\`\`

Pilih loop yang tepat: for ketika jumlah iterasi diketahui (misal iterasi list), while ketika iterasi bergantung kondisi yang berubah (misal menunggu input). Hindari while True tanpa kondisi keluar yang jelas, karena berisiko infinite loop. Untuk operasi pada list, Python menyediakan list comprehension yang ringkas dan cepat, misalnya membuat kuadrat bilangan genap dalam satu baris. Tools seperti enumerate, zip, dan sorted sangat membantu menulis loop yang ekspresif. Selalu pastikan loop memiliki kondisi terminasi yang pasti agar program tidak menggantung dan menghabiskan resource.

> **Tips:** Hindari mengubah list saat di-iterasi. Gunakan list comprehension atau buat copy untuk menghindari bug tak terduga.`,
    quiz: [
      {
        question: "Apa output 'for i in range(3): print(i)'?",
        options: ["1 2 3", "0 1 2", "0 1 2 3", "1 2"],
        answer: 1,
        explanation: "range(3) menghasilkan 0, 1, 2 (3 elemen mulai dari 0)."
      },
      {
        question: "Apa fungsi 'break' dalam loop?",
        options: ["Lewati iterasi", "Hentikan loop sepenuhnya", "Lanjut iterasi berikutnya", "Pause loop"],
        answer: 1,
        explanation: "break menghentikan loop sepenuhnya dan keluar dari blok loop."
      },
      {
        question: "Fungsi 'enumerate()' dalam for loop?",
        options: ["Membalik list", "Memberi index + value", "Mengurutkan list", "Menghitung total"],
        answer: 1,
        explanation: "enumerate() menghasilkan tuple (index, value) sehingga kita dapat keduanya saat iterasi."
      }
    ]
  },
  {
    level: 2,
    order: 8,
    title: "Function & Modular Code",
    slug: "function-modular-code",
    description: "Membuat function, parameter, return value, dan scope.",
    icon: "🔧",
    isProject: false,
    content: `# Function & Modular Code

**Function** adalah blok kode reusable yang melakukan tugas tertentu. Function membuat kode modular, lebih rapi, dan mudah dirawat. Prinsipnya: jangan ulang kode (DRY — Don't Repeat Yourself).

## Mendefinisikan Function

\`\`\`python
# Function sederhana
def sapa():
    print("Halo, selamat datang!")

# Memanggil function
sapa()

# Function dengan parameter
def sapa_nama(nama):
    print(f"Halo, {nama}!")

sapa_nama("Budi")
\`\`\`

## Parameter dan Return

\`\`\`python
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
\`\`\`

## Args dan Kwargs

\`\`\`python
# *args - argumen posisi tak terbatas
def jumlah(*args):
    return sum(args)

print(jumlah(1, 2, 3, 4))   # 10

# **kwargs - keyword argumen tak terbatas
def info(**kwargs):
    for k, v in kwargs.items():
        print(f"{k}: {v}")

info(nama="Andi", umur=20, kota="Jakarta")
\`\`\`

## Scope (Lingkup Variabel)

\`\`\`python
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
\`\`\`

## Lambda Function

\`\`\`python
# Function anonim satu baris
kuadrat = lambda x: x ** 2
print(kuadrat(5))   # 25

# Berguna untuk sort, map, filter
angka = [1, 2, 3, 4, 5]
genap = list(filter(lambda x: x % 2 == 0, angka))
print(genap)   # [2, 4]
\`\`\`

Prinsip penting dalam mendesain function adalah Single Responsibility Principle: satu function melakukan satu tugas. Function yang baik punya nama deskriptif, parameter minimal, dan return value jelas. Hindari side effect tak terduga seperti memodifikasi global state. Dokumentasikan function dengan docstring yang menjelaskan parameter, return value, dan contoh penggunaan. Tool seperti doctest bahkan bisa menjalankan contoh di docstring sebagai test otomatis. Di project besar, kelompokkan function terkait ke dalam modul atau file terpisah untuk organisasi yang lebih baik dan memudahkan reuse oleh anggota tim lain.

> **Tips:** Function harus melakukan SATU hal dengan baik. Jika function terlalu panjang atau banyak tanggung jawab, pecah jadi function lebih kecil.`,
    quiz: [
      {
        question: "Kata kunci untuk mendefinisikan function di Python?",
        options: ["function", "def", "func", "define"],
        answer: 1,
        explanation: "Python menggunakan kata kunci 'def' untuk mendefinisikan function."
      },
      {
        question: "Apa fungsi 'return' dalam function?",
        options: ["Mencetak output", "Mengembalikan nilai", "Menghentikan program", "Menerima input"],
        answer: 1,
        explanation: "return mengembalikan nilai dari function ke pemanggil dan mengakhiri eksekusi function."
      },
      {
        question: "Variabel yang didefinisikan di dalam function disebut?",
        options: ["Global", "Local", "Static", "Constant"],
        answer: 1,
        explanation: "Variabel di dalam function bersifat local — hanya bisa diakses di dalam function tersebut."
      }
    ]
  },
  {
    level: 2,
    order: 9,
    title: "Struktur Data Array & Object",
    slug: "struktur-data-array-object",
    description: "Array, list, dictionary, dan operasi dasar struktur data.",
    icon: "📚",
    isProject: false,
    content: `# Struktur Data Array & Object

**Struktur data** adalah cara mengorganisir dan menyimpan data. Pilihan struktur data yang tepat membuat program efisien. Di Python, yang paling umum: **list**, **tuple**, **set**, dan **dict**.

## List

List adalah kumpulan terurut, bisa diubah (mutable), dan menerima tipe data campuran.

\`\`\`python
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
\`\`\`

## Tuple

Tuple seperti list tapi **immutable** (tidak bisa diubah). Cocok untuk data konstan.

\`\`\`python
koordinat = (10, 20)
warna = ("merah", "hijau", "biru")
print(koordinat[0])   # 10
# koordinat[0] = 5    # ERROR - tuple immutable

# Unpacking
x, y = koordinat
print(x, y)   # 10 20
\`\`\`

## Set

Set adalah kumpulan **unik** dan tidak berurutan. Cocok untuk menghilangkan duplikat.

\`\`\`python
angka = {1, 2, 3, 2, 1}
print(angka)   # {1, 2, 3}

# Operasi set
a = {1, 2, 3}
b = {3, 4, 5}
print(a | b)   # union {1,2,3,4,5}
print(a & b)   # intersection {3}
print(a - b)   # difference {1,2}
\`\`\`

## Dictionary (Object)

Dict menyimpan pasangan **key-value**, mirip object di JavaScript.

\`\`\`python
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
\`\`\`

> **Tips:** Pilih struktur data sesuai kebutuhan: list untuk urutan, set untuk unik, dict untuk lookup cepat berbasis key.`,
    quiz: [
      {
        question: "Struktur data yang tidak bisa diubah (immutable)?",
        options: ["list", "tuple", "set", "dict"],
        answer: 1,
        explanation: "Tuple bersifat immutable — sekali dibuat, elemennya tidak bisa diubah, ditambah, atau dihapus."
      },
      {
        question: "Apa kegunaan utama 'set'?",
        options: ["Menyimpan data terurut", "Menyimpan data unik tanpa duplikat", "Lookup by key", "Stack LIFO"],
        answer: 1,
        explanation: "Set otomatis menghilangkan duplikat, sehingga cocok untuk menyimpan kumpulan nilai unik."
      },
      {
        question: "Cara akses value dict dengan key 'nama'?",
        options: ["dict.nama", "dict['nama']", "dict->nama", "dict(nama)"],
        answer: 1,
        explanation: "Dict diakses dengan kurung siku: dict['nama']. Bisa juga dengan dict.get('nama') yang aman dari KeyError."
      }
    ]
  },
  {
    level: 2,
    order: 10,
    title: "Error Handling",
    slug: "error-handling",
    description: "Try-except, jenis error, dan debugging teknik.",
    icon: "⚠️",
    isProject: false,
    content: `# Error Handling

**Error handling** adalah mekanisme menangani error saat runtime agar program tidak crash. Python menggunakan \`try/except\` untuk menangkap dan menangani exception.

## Try / Except Dasar

\`\`\`python
try:
    angka = int(input("Masukkan angka: "))
    hasil = 10 / angka
    print(f"Hasil: {hasil}")
except ZeroDivisionError:
    print("Error: tidak bisa dibagi nol!")
except ValueError:
    print("Error: input bukan angka!")
\`\`\`

## Struktur Lengkap

\`\`\`python
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
    if 'file' in locals():
        file.close()
    print("Selesai")
\`\`\`

## Raise Exception

\`\`\`python
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
\`\`\`

## Custom Exception

\`\`\`python
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
\`\`\`

## Teknik Debugging

\`\`\`python
# 1. Print debugging
print(f"DEBUG: nilai x = {x}")

# 2. Logging
import logging
logging.basicConfig(level=logging.DEBUG)
logging.debug("Pesan debug")
logging.error("Pesan error")

# 3. pdb (Python debugger)
import pdb; pdb.set_trace()
\`\`\`

Error handling yang baik membedakan aplikasi tangguh dengan yang rapuh. Selain try-except, manfaatkan logging untuk mencatat error ke file agar bisa dianalisis kemudian. Jangan pernah menelan exception diam-diam dengan except pass atau except kosong tanpa log — ini menyembunyikan bug dan menyulitkan debugging. Untuk aplikasi production, gunakan tool monitoring seperti Sentry yang otomatis menangkap dan mengelompokkan error dari pengguna nyata. Tes juga edge case: input kosong, null, nilai ekstrem, dan format tak terduga. Test-driven development atau TDD membantu menemukan error potensial sejak fase pengembangan.

> **Tips:** Tangani error secara spesifik (e.g. \`except ValueError\`), bukan generic \`except:\`. Ini membuat error tak terduga tidak tertelan diam-diam.`,
    quiz: [
      {
        question: "Blok yang selalu dijalankan terlepas ada error atau tidak?",
        options: ["try", "except", "else", "finally"],
        answer: 3,
        explanation: "Blok finally selalu dieksekusi baik ada error maupun tidak, cocok untuk cleanup (menutup file/koneksi)."
      },
      {
        question: "Kata kunci untuk membangkitkan exception manual?",
        options: ["throw", "raise", "error", "exception"],
        answer: 1,
        explanation: "Python menggunakan 'raise' untuk membangkitkan exception secara manual."
      },
      {
        question: "Exception apa yang muncul saat membagi dengan nol?",
        options: ["ValueError", "TypeError", "ZeroDivisionError", "DivisionError"],
        answer: 2,
        explanation: "ZeroDivisionError muncul saat operasi pembagian dengan nol dilakukan."
      }
    ]
  },
  {
    level: 2,
    order: 11,
    title: "File I/O",
    slug: "file-io",
    description: "Membaca dan menulis file, mode operasi, dan context manager.",
    icon: "📄",
    isProject: false,
    content: `# File I/O

**File I/O** (Input/Output) adalah operasi membaca dan menulis file. Hampir semua aplikasi nyata melibatkan file: konfigurasi, log, data, dokumen. Python menyediakan fungsi bawaan yang sederhana namun powerful untuk bekerja dengan file dalam berbagai mode, baik teks maupun biner.

## Membaca File

\`\`\`python
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
\`\`\`

## Menulis File

\`\`\`python
# Mode 'w' - overwrite (hapus isi lama)
with open("output.txt", "w") as f:
    f.write("Baris pertama\\n")
    f.write("Baris kedua\\n")

# Mode 'a' - append (tambah di akhir)
with open("log.txt", "a") as f:
    f.write("Log baru\\n")

# Menulis list
lines = ["satu", "dua", "tiga"]
with open("list.txt", "w") as f:
    f.writelines(line + "\\n" for line in lines)
\`\`\`

## Mode Operasi File

\`\`\`text
'r'  - read (default), file harus ada
'w'  - write, overwrite / buat baru
'a'  - append, tambah di akhir
'r+' - read & write
'w+' - write & read (overwrite)
'a+' - append & read
'b'  - binary mode (rb, wb)
\`\`\`

## Context Manager (with)

\`\`\`python
# Dengan 'with' - file otomatis ditutup
with open("data.txt") as f:
    data = f.read()
# file tertutup otomatis di sini

# Tanpa 'with' - harus close manual
f = open("data.txt")
data = f.read()
f.close()   # mudah lupa!
\`\`\`

## Bekerja dengan CSV dan JSON

\`\`\`python
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
\`\`\`

> **Tips:** Selalu gunakan \`with\` statement saat membuka file. Ini memastikan file tertutup otomatis meski terjadi error, mencegah resource leak.`,
    quiz: [
      {
        question: "Mode file untuk menambahkan isi tanpa menghapus yang lama?",
        options: ["'w'", "'r'", "'a'", "'x'"],
        answer: 2,
        explanation: "Mode 'a' (append) menambahkan konten di akhir file tanpa menghapus isi yang sudah ada."
      },
      {
        question: "Keunggulan menggunakan 'with open()' dibanding 'open()' manual?",
        options: ["Lebih cepat", "File otomatis tertutup", "Bisa baca file binary", "Tidak perlu nama file"],
        answer: 1,
        explanation: "'with' (context manager) memastikan file otomatis ditutup meski terjadi exception, mencegah resource leak."
      },
      {
        question: "Modul Python untuk membaca file JSON?",
        options: ["csv", "json", "yaml", "file"],
        answer: 1,
        explanation: "Modul 'json' menyediakan fungsi json.load() dan json.dump() untuk membaca/menulis file JSON."
      }
    ]
  },
  {
    level: 2,
    order: 12,
    title: "Project: Aplikasi CLI",
    slug: "project-aplikasi-cli",
    description: "Membangun aplikasi command-line interaktif dengan Python.",
    icon: "🚀",
    isProject: true,
    content: `# Project: Aplikasi CLI

Saatnya menggabungkan semua yang Anda pelajari! Kita akan membangun **Aplikasi To-Do List CLI** interaktif dengan Python. Project ini melatih variabel, function, loop, struktur data, dan file I/O.

## Spesifikasi Aplikasi

Aplikasi to-do list dengan fitur:
- Tambah tugas
- Lihat semua tugas
- Tandai tugas selesai
- Hapus tugas
- Simpan ke file (persisten)

## Struktur Kode

\`\`\`python
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
\`\`\`

## Menu Utama

\`\`\`python
def lihat_tugas(todos):
    if not todos:
        print("Belum ada tugas.")
        return
    for i, t in enumerate(todos):
        status = "✓" if t["selesai"] else "○"
        print(f"{i+1}. [{status}] {t['tugas']}")

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
\`\`\`

## Loop Utama

\`\`\`python
def main():
    todos = load_todos()
    while True:
        print("\\n=== TO-DO LIST ===")
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
\`\`\`

## Tantangan Lanjutan

- Tambahkan prioritas (tinggi/sedang/rendah)
- Tambahkan deadline & sort by deadline
- Tambahkan kategori/tag
- Buat fitur search/filter
- Tambahkan warna di terminal (library \`colorama\`)

Setelah selesai, paketkan aplikasi Anda dengan library seperti Click atau Typer untuk CLI yang lebih profesional, lengkap dengan help otomatis dan auto-completion di terminal.

> **Tips:** Pisahkan logic ke function kecil. Tes setiap fitur sebelum lanjut. Gunakan Git untuk version control!`,
    quiz: [
      {
        question: "Tujuan utama project CLI ini?",
        options: ["Belajar database", "Menggabungkan konsep Python dalam aplikasi nyata", "Membuat GUI", "Belajar web"],
        answer: 1,
        explanation: "Project ini menggabungkan konsep variabel, function, loop, struktur data, dan file I/O menjadi aplikasi nyata."
      },
      {
        question: "Format file yang digunakan untuk menyimpan data tugas?",
        options: ["CSV", "JSON", "XML", "TXT"],
        answer: 1,
        explanation: "Project ini menggunakan JSON karena mudah merepresentasikan struktur data dict/list dan dibaca modul json."
      },
      {
        question: "Agar data tugas tetap ada setelah aplikasi ditutup, kita harus?",
        options: ["Gunakan variabel global", "Simpan ke file", "Gunakan list", "Pakai loop"],
        answer: 1,
        explanation: "Data di memori hilang saat program berhenti. Menyimpan ke file membuat data persisten (tetap ada)."
      }
    ]
  },

  // ============================================
  // LEVEL 3 - WEB DEVELOPMENT (12 materials)
  // ============================================
  {
    level: 3,
    order: 1,
    title: "Pengenalan Web Development",
    slug: "pengenalan-web-development",
    description: "Frontend vs backend, full-stack, dan tech stack web modern.",
    icon: "🌐",
    isProject: false,
    content: `# Pengenalan Web Development

**Web development** adalah pembuatan aplikasi/website yang berjalan di browser. Web developer dibagi jadi **frontend** (apa yang dilihat user), **backend** (logic di server), dan **full-stack** (keduanya).

## Frontend vs Backend

\`\`\`text
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
\`\`\`

## Frontend Development

Frontend berfokus pada antarmuka pengguna. Tiga teknologi wajib:

\`\`\`text
HTML       - struktur & konten halaman
CSS        - tampilan & layout
JavaScript - interaktivitas & logic
\`\`\`

Framework frontend populer: **React**, **Vue**, **Angular**, **Svelte**. Mereka mempermudah membangun UI kompleks dan reaktif.

## Backend Development

Backend menangani logic server, database, dan API. Bahasa populer untuk backend:

\`\`\`text
Node.js (JavaScript) - Express, NestJS
Python              - Django, Flask, FastAPI
PHP                 - Laravel
Java                - Spring Boot
Go                  - Gin, Echo
Ruby                - Ruby on Rails
\`\`\`

## Database

\`\`\`text
SQL (Relational)        NoSQL
- PostgreSQL             - MongoDB (document)
- MySQL                  - Redis (key-value)
- SQLite                 - Cassandra (column)
- SQL Server             - Neo4j (graph)
\`\`\`

## Tech Stack Populer

\`\`\`text
MERN  - MongoDB, Express, React, Node.js
MEAN  - MongoDB, Express, Angular, Node
LAMP  - Linux, Apache, MySQL, PHP
JAM   - JavaScript, API, Markup
Next.js + Prisma + PostgreSQL
\`\`\`

## Perjalanan Request Web

1. User buka \`https://example.com\`
2. Browser resolve DNS ke IP server
3. Browser kirim HTTP request
4. Server terima request, jalankan backend
5. Backend query database
6. Backend kirim response (HTML/JSON)
7. Browser render halaman ke user

Sebagai web developer, Anda akan sering berinteraksi dengan tools seperti browser DevTools atau F12 untuk inspeksi DOM, network, dan debugging JavaScript. Version control Git dan platform GitHub atau GitLab adalah standar untuk kolaborasi. Package manager seperti npm atau pnpm mengelola dependency, sementara bundler seperti Vite dan Webpack mengoptimasi aset untuk produksi. Deployment modern menggunakan platform seperti Vercel, Netlify, atau VPS dengan Docker. Pahami juga konsep API (REST, GraphQL), autentikasi (JWT, session), dan web performance (Core Web Vitals). Belajar web development adalah perjalanan panjang namun sangat memuaskan dan penuh peluang karir.

> **Tips:** Mulai dengan HTML → CSS → JavaScript dasar. Setelah kuat frontend, lanjut backend. Jangan langsung lompat ke framework sebelum menguasai fundamental!`,
    quiz: [
      {
        question: "Apa yang dikerjakan frontend developer?",
        options: ["Database", "Server logic", "Antarmuka pengguna di browser", "Jaringan"],
        answer: 2,
        explanation: "Frontend developer fokus pada antarmuka pengguna yang tampil di browser menggunakan HTML, CSS, dan JavaScript."
      },
      {
        question: "Tiga teknologi wajib frontend adalah?",
        options: ["Python, Java, C++", "HTML, CSS, JavaScript", "SQL, PHP, Ruby", "React, Vue, Angular"],
        answer: 1,
        explanation: "HTML (struktur), CSS (tampilan), dan JavaScript (interaktivitas) adalah tiga teknologi fundamental frontend."
      },
      {
        question: "Apa itu developer 'full-stack'?",
        options: ["Hanya frontend", "Hanya backend", "Menguasai frontend dan backend", "Spesialis database"],
        answer: 2,
        explanation: "Full-stack developer mampu mengerjakan baik frontend maupun backend (dan biasanya database)."
      }
    ]
  },
  {
    level: 3,
    order: 2,
    title: "HTML Dasar",
    slug: "html-dasar",
    description: "Struktur HTML, tag, elemen, atribut, dan dokumen dasar.",
    icon: "📄",
    isProject: false,
    content: `# HTML Dasar

**HTML (HyperText Markup Language)** adalah bahasa markup yang menjadi struktur setiap halaman web. HTML bukan bahasa pemrograman — ia hanya mendeskripsikan struktur konten dengan tag.

## Struktur Dokumen HTML

\`\`\`html
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
\`\`\`

## Tag dan Elemen

\`\`\`html
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
\`\`\`

## Atribut

Atribut memberi informasi tambahan pada elemen.

\`\`\`html
<a href="url" target="_blank">Buka di tab baru</a>
<img src="foto.jpg" alt="Foto" width="300">
<div id="header" class="container main">Konten</div>
<input type="text" placeholder="Nama" required>
\`\`\`

## Elemen Struktural

\`\`\`html
<div class="card">
    <h3>Judul Card</h3>
    <p>Isi card di sini.</p>
    <button>Klik</button>
</div>

<span class="highlight">teks inline</span>
\`\`\`

## Komentar

\`\`\`html
<!-- Ini komentar, tidak tampil di browser -->
\`\`\`

HTML dirancang untuk struktur, bukan tampilan — gunakan CSS untuk styling. Hindari tag seperti font atau center yang sudah deprecated. Strukturkan dokumen dengan logis: gunakan heading secara hierarkis (h1 sekali per halaman, lalu h2, h3), dan pastikan setiap input form punya label terkait untuk aksesibilitas. Validasi HTML Anda lewat W3C Validator di validator.w3.org untuk memastikan tidak ada error sintaks. Semantik HTML yang baik tidak hanya membantu SEO dan screen reader, tapi juga membuat kode lebih mudah dirawat dalam jangka panjang. Gunakan komentar HTML untuk mendokumentasikan bagian penting halaman, terutama di project besar. Pelajari juga elemen baru HTML5 seperti video, audio, canvas, dan SVG yang memungkinkan konten multimedia tanpa plugin. Terakhir, pisahkan struktur (HTML), tampilan (CSS), dan perilaku (JavaScript) ke file terpisah agar kode bersih, modular, dan mudah di-maintain oleh tim.

> **Tips:** Selalu tutup tag yang dibuka (kecuali self-closing seperti \`<img>\`). Gunakan atribut \`alt\` di setiap gambar untuk aksesibilitas dan SEO.`,
    quiz: [
      {
        question: "Apa kepanjangan HTML?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink Text Mark Language"],
        answer: 0,
        explanation: "HTML = HyperText Markup Language, bahasa markup untuk struktur halaman web."
      },
      {
        question: "Tag HTML untuk membuat heading terbesar?",
        options: ["<head>", "<h6>", "<h1>", "<title>"],
        answer: 2,
        explanation: "<h1> adalah heading level 1 (terbesar). Urutan: h1, h2, h3, h4, h5, h6 (terkecil)."
      },
      {
        question: "Atribut HTML untuk membuka link di tab baru?",
        options: ["target='_new'", "target='_blank'", "new='true'", "open='tab'"],
        answer: 1,
        explanation: "target='_blank' membuka link di tab/jendela baru browser."
      }
    ]
  },
  {
    level: 3,
    order: 3,
    title: "HTML Forms & Semantic",
    slug: "html-forms-semantic",
    description: "Form, input, semantic HTML5: header, nav, main, section, footer.",
    icon: "📝",
    isProject: false,
    content: `# HTML Forms & Semantic

**Form** adalah cara menerima input dari user. **Semantic HTML5** menggunakan tag yang bermakna untuk struktur halaman, meningkatkan aksesibilitas dan SEO.

## Form Dasar

\`\`\`html
<form action="/submit" method="POST">
    <label for="nama">Nama:</label>
    <input type="text" id="nama" name="nama" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="pwd">Password:</label>
    <input type="password" id="pwd" name="pwd">

    <button type="submit">Kirim</button>
</form>
\`\`\`

## Tipe Input

\`\`\`html
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
\`\`\`

## Dropdown, Textarea, Select

\`\`\`html
<select name="kota">
    <option value="jakarta">Jakarta</option>
    <option value="bandung">Bandung</option>
    <option value="surabaya">Surabaya</option>
</select>

<textarea name="pesan" rows="4" cols="30"></textarea>
\`\`\`

## Semantic HTML5

Tag semantic memberi makna pada struktur, lebih baik dari \`<div>\` generik.

\`\`\`html
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
\`\`\`

## Tabel

\`\`\`html
<table>
    <thead>
        <tr><th>Nama</th><th>Umur</th></tr>
    </thead>
    <tbody>
        <tr><td>Andi</td><td>25</td></tr>
        <tr><td>Budi</td><td>30</td></tr>
    </tbody>
</table>
\`\`\`

Form adalah gerbang interaksi user dengan aplikasi web. Selalu validasi input di sisi client dengan atribut required, type, dan pattern, DAN juga di sisi server — jangan pernah percaya input client karena bisa dimanipulasi. Gunakan atribut autocomplete untuk pengalaman yang lebih baik, dan label yang terhubung via for dan id untuk aksesibilitas. Untuk upload file, set atribut enctype menjadi multipart atau form-data pada elemen form. Semantic HTML5 tidak hanya soal tag, tapi juga struktur logis: gunakan main sekali per halaman, article untuk konten mandiri, dan section untuk pengelompokan tematik. Aksesibilitas atau a11y bukan fitur tambahan, tapi keharusan agar web bisa dipakai semua orang termasuk penyandang disabilitas. Gunakan atribut ARIA ketika diperlukan untuk komponen interaktif kustom. Test halaman Anda menggunakan screen reader seperti NVDA atau tool Lighthouse di Chrome DevTools untuk memastikan aksesibilitas yang baik.

> **Tips:** Gunakan tag semantic (\`<header>\`, \`<nav>\`, \`<main>\`, \`<article>\`) daripada \`<div>\` generik. Ini membantu screen reader dan SEO memahami struktur halaman.`,
    quiz: [
      {
        question: "Tag HTML untuk membuat form adalah?",
        options: ["<input>", "<form>", "<field>", "<submit>"],
        answer: 1,
        explanation: "<form> adalah container untuk elemen input. Method POST/GET dan atribut action menentukan cara submit."
      },
      {
        question: "Tag semantic untuk bagian navigasi?",
        options: ["<menu>", "<nav>", "<navigation>", "<navbar>"],
        answer: 1,
        explanation: "<nav> adalah tag semantic HTML5 untuk bagian navigasi utama halaman."
      },
      {
        question: "Tipe input untuk menerima email dengan validasi otomatis?",
        options: ["type='text'", "type='email'", "type='mail'", "type='address'"],
        answer: 1,
        explanation: "type='email' otomatis memvalidasi format email saat form disubmit."
      }
    ]
  },
  {
    level: 3,
    order: 4,
    title: "CSS Dasar",
    slug: "css-dasar",
    description: "Selector, properti, warna, font, dan box model CSS.",
    icon: "🎨",
    isProject: false,
    content: `# CSS Dasar

**CSS (Cascading Style Sheets)** mengatur tampilan halaman web: warna, font, layout, dan animasi. CSS memisahkan presentasi dari struktur (HTML).

## Cara Menambahkan CSS

\`\`\`html
<!-- 1. Inline (tidak disarankan) -->
<p style="color: red;">Teks merah</p>

<!-- 2. Internal di <head> -->
<style>
  p { color: blue; }
</style>

<!-- 3. External (REKOMENDASI) -->
<link rel="stylesheet" href="style.css">
\`\`\`

## Selector

\`\`\`css
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
\`\`\`

## Warna dan Font

\`\`\`css
body {
    color: #333;                    /* hex */
    background-color: rgb(240, 240, 240);  /* rgb */
    color: rgba(0, 0, 0, 0.8);      /* rgb + alpha */
    font-family: 'Segoe UI', Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.6;
}
\`\`\`

## Box Model

Setiap elemen HTML adalah "box" dengan content, padding, border, dan margin.

\`\`\`text
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
\`\`\`

\`\`\`css
.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 2px solid black;
    margin: 15px;
    box-sizing: border-box;  /* padding & border termasuk width */
}
\`\`\`

> **Tips:** Selalu set \`box-sizing: border-box\` di reset CSS. Ini membuat width/height konsisten karena sudah termasuk padding dan border.`,
    quiz: [
      {
        question: "Apa kepanjangan CSS?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"],
        answer: 1,
        explanation: "CSS = Cascading Style Sheets, bahasa untuk mendesain tampilan halaman web."
      },
      {
        question: "Selector CSS untuk elemen dengan class 'btn'?",
        options: ["#btn", ".btn", "btn", "*btn"],
        answer: 1,
        explanation: "Class dipilih dengan titik (.) di depan, jadi '.btn'. ID pakai #, elemen tanpa prefix."
      },
      {
        question: "Urutan box model dari luar ke dalam?",
        options: ["content, padding, border, margin", "margin, border, padding, content", "margin, padding, border, content", "padding, margin, border, content"],
        answer: 1,
        explanation: "Dari luar ke dalam: margin → border → padding → content."
      }
    ]
  },
  {
    level: 3,
    order: 5,
    title: "CSS Layout Flexbox & Grid",
    slug: "css-layout-flexbox-grid",
    description: "Layout modern dengan Flexbox dan CSS Grid.",
    icon: "📐",
    isProject: false,
    content: `# CSS Layout Flexbox & Grid

**Flexbox** dan **CSS Grid** adalah sistem layout modern CSS. Flexbox cocok untuk layout 1 dimensi (baris/kolom), Grid untuk 2 dimensi (baris dan kolom sekaligus).

## Flexbox Dasar

\`\`\`css
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
\`\`\`

Contoh: navbar dengan logo di kiri dan menu di kanan.

\`\`\`css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
}
\`\`\`

## Properti Flexbox Penting

\`\`\`text
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
\`\`\`

## CSS Grid

\`\`\`css
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
\`\`\`

## Grid Area

\`\`\`css
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
\`\`\`

## Kapan Pakai Apa?

\`\`\`text
FLEXBOX                 GRID
- 1 dimensi             - 2 dimensi
- Navbar, button row    - Page layout, gallery
- Align items           - Complex grid
- Content-driven        - Layout-driven
\`\`\`

Subgrid yang merupakan bagian dari CSS Grid Level 2 memungkinkan child mengikuti grid parent, sangat berguna untuk membuat komponen yang rapi dan sejajar sempurna.

> **Tips:** Banyak layout bisa pakai keduanya. Mulai dengan Flexbox untuk hal sederhana, Grid untuk layout kompleks. Mereka bisa dikombinasikan!`,
    quiz: [
      {
        question: "Flexbox paling cocok untuk layout?",
        options: ["2 dimensi kompleks", "1 dimensi (baris/kolom)", "Animasi", "Tabel data"],
        answer: 1,
        explanation: "Flexbox dirancang untuk layout 1 dimensi (satu baris atau satu kolom). Untuk 2 dimensi gunakan Grid."
      },
      {
        question: "Properti CSS untuk membuat container menjadi flex?",
        options: ["display: block", "display: flex", "flex: 1", "layout: flex"],
        answer: 1,
        explanation: "display: flex mengaktifkan flexbox pada elemen container sehingga children-nya jadi flex items."
      },
      {
        question: "Properti flexbox untuk alignment horizontal?",
        options: ["align-items", "justify-content", "flex-direction", "flex-wrap"],
        answer: 1,
        explanation: "justify-content mengatur alignment sepanjang main axis (horizontal jika flex-direction: row)."
      }
    ]
  },
  {
    level: 3,
    order: 6,
    title: "Responsive Design",
    slug: "responsive-design",
    description: "Media query, mobile-first, dan viewport untuk responsive web.",
    icon: "📱",
    isProject: false,
    content: `# Responsive Design

**Responsive design** membuat website tampil baik di semua ukuran layar: desktop, tablet, dan mobile. Lebih dari 50% traffic web berasal dari mobile, jadi responsive wajib hukumnya.

## Viewport Meta

\`\`\`html
<!-- WAJIB di <head> agar responsive bekerja -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

## Media Query

Media query menerapkan style berbeda berdasarkan ukuran layar.

\`\`\`css
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
\`\`\`

## Breakpoint Umum

\`\`\`text
Mobile      : < 768px
Tablet      : 768px - 1023px
Desktop     : 1024px - 1439px
Large       : >= 1440px
\`\`\`

## Unit Responsif

\`\`\`css
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
\`\`\`

## Mobile-First Approach

Mulai dengan style mobile dulu (paling sederhana), lalu tambah kompleksitas untuk layar lebih besar.

\`\`\`css
/* Mobile (default) */
.menu { display: none; }
.hamburger { display: block; }

/* Desktop */
@media (min-width: 768px) {
    .menu { display: flex; }
    .hamburger { display: none; }
}
\`\`\`

## Tips Responsive

\`\`\`text
1. Selalu set viewport meta
2. Gunakan unit relatif (%, vw, vh, rem)
3. Gambar: max-width 100%
4. Mobile-first approach
5. Test di banyak device
6. Gunakan DevTools device emulation
\`\`\`

Gunakan unit seperti rem untuk font dan em untuk spacing agar skala mengikuti preferensi ukuran teks pengguna, sehingga meningkatkan aksesibilitas web Anda.

> **Tips:** Tekan F12 di browser → klik icon device (Ctrl+Shift+M) untuk simulasi berbagai perangkat. Test di mobile asli juga penting!`,
    quiz: [
      {
        question: "Tag meta yang WAJIB untuk responsive web?",
        options: ["<meta charset>", "<meta name='viewport'>", "<meta description>", "<meta keywords>"],
        answer: 1,
        explanation: "<meta name='viewport' content='width=device-width, initial-scale=1.0'> mengatur skala viewport agar responsive bekerja di mobile."
      },
      {
        question: "Pendekatan mobile-first berarti?",
        options: ["Desain desktop dulu", "Desain mobile dulu lalu scale up", "Hanya mobile", "Tampilan sama semua device"],
        answer: 1,
        explanation: "Mobile-first: tulis style mobile sebagai default, lalu tambah style untuk layar lebih besar via min-width media query."
      },
      {
        question: "CSS function untuk font size responsif otomatis?",
        options: ["resize()", "clamp()", "scale()", "auto()"],
        answer: 1,
        explanation: "clamp(min, preferred, max) membuat font size menyesuaikan otomatis dalam rentang tertentu, misal: clamp(1rem, 5vw, 3rem)."
      }
    ]
  },
  {
    level: 3,
    order: 7,
    title: "JavaScript Dasar",
    slug: "javascript-dasar",
    description: "Variabel (let/const), tipe data, operator, dan kontrol flow JS.",
    icon: "⚙️",
    isProject: false,
    content: `# JavaScript Dasar

**JavaScript** adalah bahasa pemrograman web yang berjalan di browser (dan server via Node.js). JavaScript menambah interaktivitas dan logic ke halaman web.

## Variabel

\`\`\`javascript
// const - tidak bisa di-assign ulang (rekomendasi default)
const nama = "Budi";
const PI = 3.14;

// let - bisa di-assign ulang
let umur = 25;
umur = 26;

// var - lama, hindari (function-scoped)
var x = 10;

// var HOISTING & global scope bikin bermasalah
\`\`\`

## Tipe Data

\`\`\`javascript
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
\`\`\`

## Operator dan String

\`\`\`javascript
// Aritmatika
5 + 3;   // 8
10 % 3;  // 1
2 ** 3;  // 8

// Perbandingan
5 == "5";   // true  (loose, konversi tipe) - HINDARI
5 === "5";  // false (strict) - REKOMENDASI

// Template literal
const nama = "Andi";
console.log(\`Halo \${nama}, umur \${25}\`);

// String methods
"Halo".length;          // 4
"Halo".toUpperCase();   // HALO
"Halo Dunia".split(" "); // ["Halo", "Dunia"]
\`\`\`

## Kontrol Flow

\`\`\`javascript
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
\`\`\`

## Function

\`\`\`javascript
// Function declaration
function tambah(a, b) {
    return a + b;
}

// Arrow function
const kurang = (a, b) => a - b;
const sapa = nama => \`Halo \${nama}\`;

console.log(tambah(2, 3));  // 5
\`\`\`

> **Tips:** Selalu gunakan \`===\` (strict equality) bukan \`==\`. Default ke \`const\`, ganti ke \`let\` hanya jika perlu re-assign. Hindari \`var\`.`,
    quiz: [
      {
        question: "Kata kunci untuk variabel yang TIDAK bisa di-assign ulang?",
        options: ["let", "var", "const", "static"],
        answer: 2,
        explanation: "const membuat variabel yang tidak bisa di-assign ulang. Gunakan const sebagai default, let jika perlu re-assign."
      },
      {
        question: "Operator perbandingan strict equality di JavaScript?",
        options: ["==", "===", "=", "!="],
        answer: 1,
        explanation: "=== adalah strict equality yang membandingkan nilai DAN tipe. == melakukan konversi tipe yang bisa menimbulkan bug."
      },
      {
        question: "Cara menulis arrow function di JavaScript?",
        options: ["function => () {}", "() => {}", "=> () {}", "function() => {}"],
        answer: 1,
        explanation: "Sintaks arrow function: (param) => expression atau (param) => { statements }. Contoh: const f = (a, b) => a + b;"
      }
    ]
  },
  {
    level: 3,
    order: 8,
    title: "DOM Manipulation",
    slug: "dom-manipulation",
    description: "Memanipulasi DOM: getElementById, querySelector, event listener.",
    icon: "🌳",
    isProject: false,
    content: `# DOM Manipulation

**DOM (Document Object Model)** adalah representasi struktur HTML sebagai object JavaScript. Dengan DOM, JavaScript bisa mengubah konten, style, dan struktur halaman secara dinamis.

## Mengakses Elemen

\`\`\`javascript
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
\`\`\`

## Mengubah Konten dan Style

\`\`\`javascript
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
\`\`\`

## Membuat dan Menambah Elemen

\`\`\`javascript
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
\`\`\`

## Event Listener

\`\`\`javascript
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
\`\`\`

## Contoh: Counter Interaktif

\`\`\`javascript
let count = 0;
const display = document.querySelector("#count");
const incBtn = document.querySelector("#inc");

incBtn.addEventListener("click", () => {
    count++;
    display.textContent = count;
});
\`\`\`

Saat memanipulasi DOM, perhatikan performa. Operasi DOM mahal — minimalkan reflow dan repaint dengan batch update. Gunakan DocumentFragment saat menambah banyak elemen, lalu append sekali. Untuk aplikasi kompleks dengan banyak interaksi, pertimbangkan framework seperti React atau Vue yang mengelola DOM secara efisien via virtual DOM. Pahami juga event bubbling dan capturing: event naik dari child ke parent, berguna untuk delegation. Beberapa event punya default action yang bisa dicegah dengan preventDefault. Selalu bersihkan event listener yang tidak terpakai untuk mencegah memory leak, terutama di Single Page Application yang berjalan lama di browser.

> **Tips:** Gunakan \`event delegation\` untuk banyak elemen serupa. Pasang listener di parent, cek \`e.target\` — lebih efisien daripada pasang listener di setiap child.`,
    quiz: [
      {
        question: "Method untuk memilih 1 elemen dengan selector CSS?",
        options: ["getElementById", "querySelector", "querySelectorAll", "getElement"],
        answer: 1,
        explanation: "querySelector() memilih elemen pertama yang cocok dengan selector CSS, mirip jQuery. Lebih fleksibel dari getElementById."
      },
      {
        question: "Method untuk menambah class pada elemen?",
        options: ["element.add('cls')", "element.class.add('cls')", "element.classList.add('cls')", "element.className.add('cls')"],
        answer: 2,
        explanation: "element.classList.add('cls') menambah class. Ada juga remove(), toggle(), dan contains()."
      },
      {
        question: "Method untuk mencegah reload saat form disubmit?",
        options: ["e.stop()", "e.preventDefault()", "e.cancel()", "e.returnFalse()"],
        answer: 1,
        explanation: "e.preventDefault() mencegah aksi default event, misal reload halaman saat submit form atau navigasi saat klik link."
      }
    ]
  },
  {
    level: 3,
    order: 9,
    title: "Fetch API & AJAX",
    slug: "fetch-api-ajax",
    description: "HTTP request dengan Fetch API, async/await, dan JSON.",
    icon: "📡",
    isProject: false,
    content: `# Fetch API & AJAX

**Fetch API** adalah cara modern JavaScript melakukan HTTP request ke server (AJAX). Fetch mengembalikan Promise, cocok dipakai dengan \`async/await\`.

## Fetch Dasar

\`\`\`javascript
// GET request sederhana
fetch("https://api.example.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
\`\`\`

## Async/Await (REKOMENDASI)

\`\`\`javascript
async function getUsers() {
    try {
        const response = await fetch("https://api.example.com/users");
        if (!response.ok) {
            throw new Error(\`HTTP error: \${response.status}\`);
        }
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.error("Gagal mengambil data:", error);
    }
}

getUsers();
\`\`\`

## POST Request

\`\`\`javascript
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
\`\`\`

## Method HTTP Lain

\`\`\`javascript
// PUT - update seluruh resource
await fetch(\`/api/users/1\`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nama: "Budi Update", umur: 26 })
});

// DELETE
await fetch(\`/api/users/1\`, { method: "DELETE" });
\`\`\`

## Handle Response

\`\`\`javascript
const res = await fetch("/api/data");

res.ok;          // true jika status 2xx
res.status;      // 200, 404, 500, dll
res.headers.get("Content-Type");

// Body parsing
const json = await res.json();      // JSON
const text = await res.text();      // plain text
const blob = await res.blob();      // file/binary
\`\`\`

## Contoh: Tampilkan Data ke DOM

\`\`\`javascript
async function tampilkanUser() {
    const res = await fetch("/api/users");
    const users = await res.json();

    const list = document.querySelector("#user-list");
    users.forEach(u => {
        const li = document.createElement("li");
        li.textContent = \`\${u.nama} (\${u.umur})\`;
        list.appendChild(li);
    });
}
\`\`\`

Untuk produksi, pertimbangkan gunakan library seperti Axios yang menangani interceptor, timeout, dan transformasi response otomatis. Selalu set timeout agar request tidak menggantung selamanya, dan implementasikan retry dengan exponential backoff untuk transient error. Perhatikan CORS (Cross-Origin Resource Sharing) — browser memblokir request cross-origin kecuali server mengizinkan via header. Untuk data sensitif, kirim via HTTPS dan jangan simpan token di localStorage (gunakan httpOnly cookie). Cache response yang jarang berubah untuk mengurangi request. Untuk upload file, gunakan FormData, dan progress upload bisa dipantau via event handler pada XMLHttpRequest.

> **Tips:** Selalu handle error dengan try/catch dan cek \`response.ok\`. Jangan asumsikan request selalu sukses — jaringan bisa gagal, server bisa down.`,
    quiz: [
      {
        question: "Fetch API mengembalikan tipe data apa?",
        options: ["Callback", "Promise", "Observable", "Stream"],
        answer: 1,
        explanation: "fetch() mengembalikan Promise yang resolve ke Response object, sehingga bisa pakai .then() atau async/await."
      },
      {
        question: "Method HTTP untuk mengirim data baru ke server?",
        options: ["GET", "POST", "DELETE", "HEAD"],
        answer: 1,
        explanation: "POST digunakan untuk membuat resource baru. Body request berisi data yang akan disimpan."
      },
      {
        question: "Method JavaScript untuk convert object ke JSON string?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.toString()", "JSON.convert()"],
        answer: 1,
        explanation: "JSON.stringify() mengubah object JS menjadi string JSON untuk dikirim via fetch. JSON.parse() kebalikannya."
      }
    ]
  },
  {
    level: 3,
    order: 10,
    title: "Frontend Framework React",
    slug: "frontend-framework-react",
    description: "Dasar React: component, props, state, dan JSX.",
    icon: "⚛️",
    isProject: false,
    content: `# Frontend Framework React

**React** adalah library JavaScript buatan Facebook (Meta) untuk membangun UI berbasis component. React populer karena deklaratif, berbasis component, dan ekosistemnya besar.

## Konsep Inti React

\`\`\`text
1. Component  - UI dibagi jadi bagian reusable
2. JSX        - sintaks HTML dalam JavaScript
3. Props      - data dari parent ke child
4. State      - data internal component (mutable)
5. Hooks      - function khusus (useState, useEffect)
\`\`\`

## Membuat Component

\`\`\`jsx
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
\`\`\`

## State dengan useState

\`\`\`jsx
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
\`\`\`

## Props

\`\`\`jsx
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
\`\`\`

## useEffect (Side Effect)

\`\`\`jsx
import { useState, useEffect } from "react";

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(\`/api/users/\${userId}\`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [userId]);  // jalankan saat userId berubah

    if (!user) return <p>Loading...</p>;
    return <div>{user.nama}</div>;
}
\`\`\`

## List Rendering

\`\`\`jsx
function TodoList({ todos }) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
}
\`\`\`

Ekosistem React sangat luas: Next.js untuk SSR atau SSG dan routing, React Router untuk SPA, Redux atau Zustand untuk state management global, dan React Query untuk data fetching dengan caching. Pelajari juga React Context untuk state ringan tanpa library tambahan. Konsep penting lain: controlled vs uncontrolled component, lifting state up, dan composition over inheritance. React 18 dan setelahnya membawa fitur seperti concurrent rendering dan automatic batching yang meningkatkan performa. Meskipun ada alternatif seperti Vue dan Svelte, menguasai React membuka peluang karir paling luas karena adopsi industri yang sangat tinggi. Mulailah dari React docs resmi di react.dev yang sangat berkualitas dan terus diperbarui.

> **Tips:** Selalu gunakan \`key\` unik saat render list. Jangan pakai index sebagai key jika list bisa berubah urutannya — bisa menyebabkan bug rendering.`,
    quiz: [
      {
        question: "Apa itu JSX?",
        options: ["Bahasa baru", "Ekstensi sintaks HTML dalam JavaScript", "Framework CSS", "Library state"],
        answer: 1,
        explanation: "JSX adalah ekstensi sintaks yang memungkinkan menulis HTML-like code dalam JavaScript, di-compile menjadi React.createElement()."
      },
      {
        question: "Hook React untuk menyimpan state adalah?",
        options: ["useEffect", "useState", "useRef", "useMemo"],
        answer: 1,
        explanation: "useState([initial]) mengembalikan [state, setState] untuk menyimpan dan mengubah state dalam functional component."
      },
      {
        question: "Cara mengoper data dari parent ke child component?",
        options: ["Via state", "Via props", "Via context", "Via global variable"],
        answer: 1,
        explanation: "Props adalah mekanisme mengirim data dari parent ke child component di React (one-way data flow)."
      }
    ]
  },
  {
    level: 3,
    order: 11,
    title: "Backend dengan Node.js",
    slug: "backend-nodejs",
    description: "Node.js, Express, routing, dan REST API dasar.",
    icon: "🟢",
    isProject: false,
    content: `# Backend dengan Node.js

**Node.js** adalah runtime JavaScript di server. Dengan **Express.js** (framework minimalis), kita bisa membangun REST API dengan cepat. Keunggulan: satu bahasa (JavaScript) untuk frontend dan backend.

## Setup Project

\`\`\`bash
# Inisialisasi project
mkdir my-api && cd my-api
npm init -y

# Install Express
npm install express

# (Opsional) nodemon untuk auto-restart
npm install -D nodemon
\`\`\`

## Server Express Dasar

\`\`\`javascript
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware: parse JSON body
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Halo dari API!" });
});

app.listen(PORT, () => {
    console.log(\`Server berjalan di http://localhost:\${PORT}\`);
});
\`\`\`

## Routing dan REST API

\`\`\`javascript
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
\`\`\`

## Middleware

\`\`\`javascript
// Logging middleware
app.use((req, res, next) => {
    console.log(\`\${req.method} \${req.url} - \${new Date().toISOString()}\`);
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
\`\`\`

## Test API dengan curl

\`\`\`bash
curl http://localhost:3000/api/users
curl -X POST -H "Content-Type: application/json" \\
  -d '{"nama":"Citra","umur":22}' \\
  http://localhost:3000/api/users
\`\`\`

> **Tips:** Untuk produksi, gunakan database (PostgreSQL/MongoDB), validasi input (zod/joi), environment variable (dotenv), dan helmet untuk security headers.`,
    quiz: [
      {
        question: "Apa itu Node.js?",
        options: ["Framework CSS", "Runtime JavaScript di server", "Database", "Bahasa pemrograman baru"],
        answer: 1,
        explanation: "Node.js adalah runtime yang memungkinkan JavaScript berjalan di server (di luar browser), menggunakan V8 engine."
      },
      {
        question: "Framework paling populer untuk REST API di Node.js?",
        options: ["Django", "Express", "Laravel", "Spring"],
        answer: 1,
        explanation: "Express.js adalah framework minimalis paling populer untuk Node.js. Untuk struktur lebih besar ada NestJS."
      },
      {
        question: "Method HTTP untuk mengambil semua user dari endpoint /api/users?",
        options: ["POST", "GET", "DELETE", "PATCH"],
        answer: 1,
        explanation: "GET digunakan untuk mengambil/membaca data. POST untuk membuat, PUT/PATCH untuk update, DELETE untuk hapus."
      }
    ]
  },
  {
    level: 3,
    order: 12,
    title: "Project: Website Lengkap",
    slug: "project-website-lengkap",
    description: "Membangun website full-stack lengkap dari frontend hingga backend.",
    icon: "🚀",
    isProject: true,
    content: `# Project: Website Lengkap

Saatnya menggabungkan semua yang Anda pelajari di Level 3! Kita akan membangun **Website Blog Full-Stack** dengan frontend HTML/CSS/JS dan backend Node.js/Express.

## Spesifikasi Project

- **Frontend**: HTML, CSS, JavaScript (Fetch API)
- **Backend**: Node.js + Express
- **Database**: In-memory (array) — bisa upgrade ke PostgreSQL
- **Fitur**: CRUD artikel blog (Create, Read, Update, Delete)

## Struktur Folder

\`\`\`text
blog-app/
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── server.js
└── package.json
\`\`\`

## Backend (server.js)

\`\`\`javascript
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
\`\`\`

## Frontend (index.html)

\`\`\`html
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
\`\`\`

## Frontend Logic (app.js)

\`\`\`javascript
async function loadPosts() {
    const res = await fetch("/api/posts");
    const posts = await res.json();
    const div = document.getElementById("posts");
    div.innerHTML = posts.map(p => \`
        <article>
            <h3>\${p.judul} <button onclick="hapus(\${p.id})">Hapus</button></h3>
            <p>\${p.isi}</p>
        </article>
    \`).join("");
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
    await fetch(\`/api/posts/\${id}\`, { method: "DELETE" });
    loadPosts();
}

loadPosts();
\`\`\`

## Cara Menjalankan

\`\`\`bash
npm install express
node server.js
# Buka http://localhost:3000
\`\`\`

## Tantangan Lanjutan

- Tambahkan edit post (PUT)
- Gunakan database PostgreSQL + Prisma
- Tambahkan autentikasi (login/register)
- Tambahkan komentar per post
- Deploy ke Vercel/Render/Railway

> **Tips:** Kerjakan fitur satu per satu, test sebelum lanjut. Commit sering di Git. Bangun versi minimal dulu, lalu tambah fitur (MVP approach).`,
    quiz: [
      {
        question: "Apa arti CRUD dalam web development?",
        options: ["Create, Read, Update, Delete", "Copy, Run, Update, Drop", "Create, Run, Use, Debug", "Connect, Request, Update, Download"],
        answer: 0,
        explanation: "CRUD = Create, Read, Update, Delete — empat operasi dasar dalam aplikasi yang mengelola data."
      },
      {
        question: "Middleware Express untuk menyajikan file static (HTML/CSS/JS)?",
        options: ["app.static()", "express.static()", "app.serve()", "app.files()"],
        answer: 1,
        explanation: "express.static('public') menyajikan file statis dari folder 'public' sehingga bisa diakses via URL langsung."
      },
      {
        question: "Pendekatan terbaik membangun project kompleks?",
        options: ["Bangun semua sekaligus", "MVP - versi minimal dulu lalu tambah fitur", "Tunggu inspirasi", "Copy paste dari tutorial"],
        answer: 1,
        explanation: "MVP (Minimum Viable Product) approach: bangun versi paling sederhana yang berfungsi dulu, lalu tambah fitur secara bertahap. Lebih mudah dikelola dan testable."
      }
    ]
  }
];
