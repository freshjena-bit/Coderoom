import { MaterialData } from "../src/lib/content-types";

export const contentLevels1to3: MaterialData[] = [
  // ============================================
  // LEVEL 1 - DASAR CYBER
  // ============================================
  {
    level: 1,
    order: 1,
    title: "Pengenalan Cybersecurity",
    slug: "pengenalan-cybersecurity",
    description: "Mengenal apa itu cybersecurity, mengapa penting, dan peran seorang cybersecurity professional.",
    icon: "🛡️",
    isProject: false,
    content: `# Pengenalan Cybersecurity

**Cybersecurity** atau keamanan siber adalah praktik melindungi sistem, jaringan, dan data dari serangan digital. Tujuannya adalah memastikan **confidentiality**, **integrity**, dan **availability** informasi (CIA Triad).

## Mengapa Cybersecurity Penting?

Di era digital, hampir semua aspek kehidupan terhubung ke internet. Tanpa keamanan siber yang baik:

- **Data pribadi** dapat dicuri dan disalahgunakan
- **Sistem perusahaan** dapat dirusak atau dihentikan
- **Infrastruktur kritikal** (listrik, bank, kesehatan) dapat lumpuh
- **Kerugian finansial** akibat serangan bisa sangat besar

## Tipe Serangan Umum

\`\`\`text
Phishing      → Email palsu untuk mencuri kredensial
Malware       → Software berbahaya (virus, trojan, ransomware)
DDoS          → Membanjiri server dengan traffic hingga down
SQL Injection → Menyisipkan kode SQL berbahaya di form input
MITM          → Penyadap di tengah komunikasi dua pihak
\`\`\`

## Peran Cybersecurity Professional

Seorang ahli keamanan siber bertugas:

1. **Mendeteksi** celah keamanan sebelum hacker memanfaatkannya
2. **Mempertahankan** sistem dari serangan
3. **Merespons** insiden dengan cepat
4. **Mengedukasi** pengguna tentang ancaman

## Etika dalam Cybersecurity

> Seorang cybersecurity professional WAJIB bekerja dalam koridor hukum dan etika. Menyerang sistem tanpa izin adalah kejahatan, meskipun tujuannya "hanya untuk belajar".

Selalu dapatkan **izin tertulis** sebelum melakukan pengujian keamanan pada sistem manapun.

## Tips Memulai

- Kuasai **dasar jaringan** dan sistem operasi
- Buat **lab sendiri** dengan virtual machine
- Ikuti platform seperti **HackTheBox** dan **TryHackMe**
- Baca berita keamanan terbaru setiap hari`,
    quiz: [
      {
        question: "Apa tujuan utama dari cybersecurity?",
        options: [
          "Membuat website lebih cepat",
          "Melindungi sistem, jaringan, dan data dari serangan digital",
          "Mengelola database perusahaan",
          "Mendesain antarmuka pengguna"
        ],
        answer: 1,
        explanation: "Cybersecurity bertujuan melindungi sistem, jaringan, dan data dari ancaman digital dengan memastikan CIA Triad (Confidentiality, Integrity, Availability)."
      },
      {
        question: "Manakah yang termasuk jenis serangan cyber?",
        options: [
          "Phishing - email palsu untuk mencuri kredensial",
          "Compiling - mengubah kode jadi executable",
          "Caching - menyimpan data sementara",
          "Routing - mengarahkan traffic jaringan"
        ],
        answer: 0,
        explanation: "Phishing adalah teknik serangan sosial di mana pelaku mengirim email palsu untuk menipu korban memberikan kredensial atau informasi sensitif."
      },
      {
        question: "Apa prinsip etika yang paling penting dalam cybersecurity?",
        options: [
          "Serang dulu sebelum diserang",
          "Dapatkan izin tertulis sebelum menguji sistem orang lain",
          "Semua sistem boleh diuji asal untuk belajar",
          "Jangan pernah melaporkan celah yang ditemukan"
        ],
        answer: 1,
        explanation: "Etika tertinggi dalam cybersecurity adalah mendapatkan izin tertulis sebelum melakukan pengujian. Menyerang sistem tanpa izin adalah kejahatan."
      }
    ]
  },
  {
    level: 1,
    order: 2,
    title: "CIA Triad",
    slug: "cia-triad",
    description: "Tiga pilar fundamental keamanan informasi: Confidentiality, Integrity, dan Availability.",
    icon: "🎯",
    isProject: false,
    content: `# CIA Triad

**CIA Triad** adalah model paling fundamental dalam keamanan informasi. Tiga pilar ini menjadi pedoman dalam mendesain, mengevaluasi, dan menerapkan kontrol keamanan pada setiap sistem.

## Tiga Pilar CIA

\`\`\`text
C - Confidentiality (Kerahasiaan)
I - Integrity        (Integritas)
A - Availability     (Ketersediaan)
\`\`\`

### 1. Confidentiality

Memastikan data hanya dapat diakses oleh pihak yang berwenang. Contoh implementasi:

- **Enkripsi** data saat disimpan (at rest) dan saat dikirim (in transit)
- **Access control** berbasis peran (RBAC)
- **Autentikasi** kuat (MFA, biometrik)

Pelanggaran confidentiality terjadi saat data bocor, misalnya akibat **data breach** atau phishing.

### 2. Integrity

Memastikan data tidak diubah tanpa otorisasi. Data harus akurat dan dapat dipercaya. Contoh:

- **Hash function** (SHA-256) untuk mendeteksi perubahan
- **Digital signature** untuk verifikasi pengirim
- **Version control** dan audit log

Pelanggaran integrity terjadi saat attacker mengubah data, misalnya memodifikasi nilai transfer bank atau mengganti konten artikel berita.

### 3. Availability

Memastikan sistem dan data tersedia saat dibutuhkan oleh pengguna yang sah. Contoh:

- **Backup** rutin dan disaster recovery
- **Redundansi** server dan load balancer
- **Mitigasi DDoS** dengan rate limiting dan CDN

Pelanggaran availability terjadi pada serangan **DDoS**, ransomware, atau pemadaman server.

## Contoh Kasus

\`\`\`text
Kasus                | Pilar yang dilanggar
-------------------- | --------------------
Data breach email    | Confidentiality
Manipulasi nilai ujian| Integrity
Ransomware lockdown  | Availability
Phishing password    | Confidentiality
\`\`\`

## Trade-off Antar Pilar

Kadang kita harus bertrade-off. Misalnya: **enkripsi kuat** meningkatkan confidentiality, tetapi bisa menurunkan availability jika kunci hilang (data tidak bisa dibaca). Tugas security engineer adalah menyeimbangkan sesuai kebutuhan bisnis dan risiko.

## Contoh Kode: Verifikasi Integrity dengan Hash

\`\`\`python
import hashlib

data = "Transfer 1.000.000 ke rekening 12345"
hash_value = hashlib.sha256(data.encode()).hexdigest()
print(f"Data : {data}")
print(f"Hash : {hash_value}")
# Jika data berubah 1 karakter, hash berubah total
\`\`\`

Inilah mengapa hash digunakan untuk mendeteksi modifikasi data.`,
    quiz: [
      {
        question: "Apa kepanjangan dari CIA dalam CIA Triad?",
        options: [
          "Central Intelligence Agency",
          "Confidentiality, Integrity, Availability",
          "Cyber Internet Access",
          "Cryptographic Identity Algorithm"
        ],
        answer: 1,
        explanation: "Dalam konteks keamanan informasi, CIA Triad adalah Confidentiality (kerahasiaan), Integrity (integritas), dan Availability (ketersediaan)."
      },
      {
        question: "Serangan DDoS paling melanggar pilar CIA yang mana?",
        options: [
          "Confidentiality",
          "Integrity",
          "Availability",
          "Authentication"
        ],
        answer: 2,
        explanation: "DDoS membuat sistem tidak bisa diakses oleh pengguna sah, sehingga melanggar Availability (ketersediaan)."
      },
      {
        question: "Teknik mana yang paling tepat menjaga Integrity data?",
        options: [
          "Backup harian",
          "Load balancer",
          "Hash function untuk verifikasi",
          "Firewall rules"
        ],
        answer: 2,
        explanation: "Hash function menghasilkan fingerprint data. Jika data berubah, hash berubah — sehingga modifikasi dapat dideteksi."
      }
    ]
  },
  {
    level: 1,
    order: 3,
    title: "Jenis Ancaman Cyber",
    slug: "jenis-ancaman-cyber",
    description: "Mengklasifikasikan ancaman siber: malware, social engineering, network attack, dan web attack.",
    icon: "⚠️",
    isProject: false,
    content: `# Jenis Ancaman Cyber

Ancaman siber sangat beragam. Memahami klasifikasinya membantu kita memilih kontrol keamanan yang tepat. Kita akan kelompokkan menjadi 4 kategori utama.

## 1. Malware

**Malware** (malicious software) adalah program berbahaya yang dijalankan di sistem korban.

\`\`\`text
Virus     → Menempel di file lain, butuh host
Worm      → Mandiri, menyebar via jaringan
Trojan    → Menyamar sebagai program sah
Ransomware→ Mengenkripsi data, minta tebusan
Spyware   → Memata-matai aktivitas korban
Rootkit   → Bersembunyi di level kernel
\`\`\`

## 2. Social Engineering

Serangan yang menargetkan **manusia**, bukan sistem. Manusia adalah titik lemah terbesar.

- **Phishing** — email/SMS palsu yang menyamar sebagai entitas terpercaya
- **Spear phishing** — phishing yang ditargetkan ke individu spesifik
- **Pretexting** — membuat skenario palsu untuk mendapatkan info
- **Baiting** — USB/CD berbahaya ditinggal di lokasi umum

## 3. Network Attack

Serangan pada lapisan jaringan.

\`\`\`bash
# Contoh: MITM dengan ARP spoofing (hanya di lab pribadi!)
sudo arpspoof -i eth0 -t 192.168.1.10 192.168.1.1
sudo arpspoof -i eth0 -t 192.168.1.1 192.168.1.10
\`\`\`

- **MITM (Man-in-the-Middle)** — penyadapan komunikasi
- **DDoS** — membanjiri server hingga down
- **Port scanning** — menemukan layanan terbuka (nmap)
- **Packet sniffing** — membaca traffic jaringan

## 4. Web Application Attack

- **SQL Injection** — menyisipkan SQL di input form
- **XSS (Cross-Site Scripting)** — menyisipkan script di halaman web
- **CSRF** — memaksa korban melakukan aksi tanpa sadar
- **LFI/RFI** — menyertakan file lokal/remote berbahaya

## Contoh SQL Injection

\`\`\`text
Input username: admin' OR '1'='1
Input password: x' OR '1'='1

Query jadi:
SELECT * FROM users WHERE username='admin' OR '1'='1' AND password='x' OR '1'='1'
\`\`\`

Karena \`'1'='1'\` selalu true, attacker login tanpa password yang benar.

## Kill Chain Attack

Anatomi serangan umumnya mengikuti pola:

1. **Reconnaissance** — mengumpulkan info target
2. **Weaponization** — membuat payload
3. **Delivery** — mengirim payload (email, USB, web)
4. **Exploitation** — memanfaatkan celah
5. **Installation** — memasang backdoor
6. **C2 (Command & Control)** — kontrol jarak jauh
7. **Action on Objective** — eksekusi tujuan akhir

Memutus satu titik saja sudah bisa menggagalkan serangan.`,
    quiz: [
      {
        question: "Manakah malware yang meminta tebusan untuk mengembalikan akses data?",
        options: [
          "Virus",
          "Trojan",
          "Ransomware",
          "Spyware"
        ],
        answer: 2,
        explanation: "Ransomware mengenkripsi data korban dan meminta tebusan (umumnya cryptocurrency) untuk memberikan kunci dekripsi."
      },
      {
        question: "Apa perbedaan phishing dan spear phishing?",
        options: [
          "Phishing lewat email, spear phishing lewat SMS",
          "Phishing massal, spear phishing ditargetkan ke individu spesifik",
          "Phishing mencuri data, spear phishing merusak sistem",
          "Tidak ada perbedaan"
        ],
        answer: 1,
        explanation: "Phishing dikirim massal ke banyak orang, sedangkan spear phishing dirancang khusus untuk satu individu/organisasi tertentu setelah riset."
      },
      {
        question: "Pada kill chain, tahap pertama yang dilakukan attacker adalah?",
        options: [
          "Exploitation",
          "Installation",
          "Reconnaissance",
          "Action on Objective"
        ],
        answer: 2,
        explanation: "Reconnaissance adalah tahap pengumpulan informasi tentang target sebelum serangan, biasanya pasif untuk menghindari deteksi."
      }
    ]
  },
  {
    level: 1,
    order: 4,
    title: "Etika Hacker & Legalitas",
    slug: "etika-hacker-legalitas",
    description: "Memahami klasifikasi hacker (white/gray/black hat), UU ITE Indonesia, dan kode etik profesi.",
    icon: "⚖️",
    isProject: false,
    content: `# Etika Hacker & Legalitas

Bisa membobol sistem **tidak** berarti boleh membobolnya. Etika dan hukum adalah batas yang membedakan seorang profesional keamanan dari penjahat cyber.

## Klasifikasi Hacker

\`\`\`text
White Hat  → Hacker etis, izin resmi, melaporkan celah
Black Hat  → Penjahat, tanpa izin, merusak/mencuri
Gray Hat   → Mencari celah tanpa izin, tapi melaporkan
Red Hat    → Membalas serangan black hat (kontroversial)
Blue Hat   → Outsourced tester untuk produk sebelum rilis
\`\`\`

Hanya **White Hat** yang legal dan etis. Gray Hat tetap melanggar hukum meskipun niatnya baik.

## Kode Etik Hacker Etis (EC-Council)

1. **Keep private & confidential information** — jangan sebarkan data
2. **Disclose vulnerabilities responsibly** — lapor ke vendor dulu
3. **Protect infrastructure** — jangan meninggalkan backdoor
4. **Stay within scope** — hanya uji yang diizinkan
5. **Maintain competence** — terus belajar
6. **Respect privacy** — privasi korban uji tetap dihormati

## Dasar Hukum di Indonesia

\`\`\`text
UU No. 11/2008 (ITE) — diubah UU 19/2016 & UU 1/2024
Pasal 27: konten ilegal (SARA, cabul, pemerasan)
Pasal 30: akses ilegal & intercept (maks 12 tahun / 12 miliar)
Pasal 33: manipulasi data (maks 12 tahun / 12 miliar)
Pasal 35: akses ilegal untuk keuntungan (maks 12 tahun)

UU No. 27/2022 Pelindungan Data Pribadi (PDP)
\`\`\`

Konsekuensi sangat berat — penjara hingga **12 tahun** dan denda miliaran rupiah.

## Responsible Disclosure

Bila menemukan celah di sistem orang lain, alur yang benar:

\`\`\`text
1. Temukan celah SECARA TIDAK SENGAJA
2. Jangan eksploitasi lebih lanjut
3. Jangan akses data orang lain
4. Dokumentasikan dengan baik (PoC)
5. Hubungi vendor/security team secara privat
6. Beri waktu 90 hari untuk perbaikan
7. Publikasikan setelah patch dirilis
\`\`\`

Program **Bug Bounty** (HackerOne, Bugcrowd, Intigriti) adalah jalur legal untuk mendapat imbalan dengan menemukan celah di perusahaan yang membuka program.

## Syarat Pentest Legal

Untuk melakukan penetration testing secara legal:

- **Surat izin tertulis** dari pemilik sistem (Scope of Work)
- **Kontrak** yang jelas tentang batasan (rules of engagement)
- **Waktu** pengujian yang disepakati
- **Lingkup IP/domain** yang boleh diuji
- **Dilarang** mengakses data produksi sensitif

## Kasus Nyata

Banyak hacker "iseng" yang berakhir dipenjara karena merasa "hanya mencoba". Di Indonesia, beberapa kasus membobol situs pemerintah "untuk pamer" berakhir dengan tuntutan UU ITE. **Niat tidak menghapuskan unsur pidana.**

> Aturan emas: **Jika tidak ada izin tertulis, jangan lakukan.**`,
    quiz: [
      {
        question: "Apa perbedaan utama White Hat dan Black Hat hacker?",
        options: [
          "White Hat lebih pintar dari Black Hat",
          "White Hat bekerja dengan izin dan etis, Black Hat tanpa izin untuk kejahatan",
          "White Hat hanya di siang hari, Black Hat di malam hari",
          "White Hat pakai Windows, Black Hat pakai Linux"
        ],
        answer: 1,
        explanation: "Perbedaannya pada izin dan etika: White Hat bekerja resmi dan melaporkan celah, Black Hat bekerja tanpa izin untuk mencuri atau merusak."
      },
      {
        question: "Di Indonesia, ancaman hukum maksimal untuk akses ilegal sistem (Pasal 30 UU ITE)?",
        options: [
          "6 bulan penjara",
          "2 tahun penjara",
          "12 tahun penjara + denda miliaran",
          "Tidak ada ancaman pidana"
        ],
        answer: 2,
        explanation: "Pasal 30 UU ITE mengancam pidana hingga 12 tahun penjara dan/atau denda hingga Rp 12 miliar untuk akses ilegal dan intersepsi."
      },
      {
        question: "Apa langkah pertama yang benar setelah menemukan celah di situs orang lain?",
        options: [
          "Langsung publikasikan ke media sosial",
          "Eksploitasi untuk membuktikan dampaknya",
          "Hubungi security team vendor secara privat dan beri waktu perbaikan",
          "Jual celah tersebut di dark web"
        ],
        answer: 2,
        explanation: "Responsible disclosure: hubungi vendor secara privat, beri waktu (umumnya 90 hari) untuk memperbaiki sebelum publikasi."
      }
    ]
  },
  {
    level: 1,
    order: 5,
    title: "Lab Setup - Kali Linux",
    slug: "lab-setup-kali-linux",
    description: "Menyiapkan lab keamanan pribadi dengan VirtualBox dan Kali Linux untuk praktik aman.",
    icon: "🐧",
    isProject: false,
    content: `# Lab Setup - Kali Linux

Sebelum mempelajari teknik keamanan, kita butuh **lab pribadi** — lingkungan terisolasi untuk praktik tanpa melanggar hukum. Yang paling populer adalah **Kali Linux** di virtual machine.

## Mengapa Virtual Machine?

- **Isolasi** — terpisah dari host OS, tidak bisa rusak
- **Snapshot** — bisa kembali ke kondisi bersih
- **Multi-OS** — bisa jalankan target Linux & Windows bersamaan
- **Legal** — semua praktik di jaringan internal sendiri

## Tools yang Dibutuhkan

\`\`\`text
1. VirtualBox  (gratis) → virtualbox.org
   atau VMware Workstation Player (gratis untuk non-komersial)
2. Kali Linux ISO → kali.org/get-kali
3. Target VM: Metasploitable 2, DVWA, Windows 7/10 (trial)
\`\`\`

## Membuat VM Kali Linux

1. Buka VirtualBox → klik **New**
2. Name: \`Kali-Linux\`, Type: **Linux**, Version: **Debian 64-bit**
3. RAM minimal **4 GB** (rekomendasi 8 GB)
4. Disk **40 GB** (dynamically allocated)
5. Settings → Network → **NAT Network** (lebih realistis untuk lab)
6. Mount ISO Kali, boot, install

## Update & Konfigurasi Awal

Setelah login (default: \`kali / kali\`), jalankan:

\`\`\`bash
# Update repositori dan sistem
sudo apt update && sudo apt full-upgrade -y

# Install tools tambahan
sudo apt install -y guake terminator seclists cherrytree

# Aktifkan service database Metasploit
sudo systemctl enable --now postgresql
sudo msfdb init

# Cek tools yang sudah terpasang
nmap --version
burpsuite --version 2>/dev/null || echo "Burp Suite: siap"
\`\`\`

## Tools Wajib di Kali

\`\`\`text
nmap          → Port scanner & network discovery
wireshark     → Sniffer traffic jaringan
metasploit    → Framework exploit
burpsuite     → Web proxy & security testing
john/hashcat  → Password cracker
sqlmap        → Automated SQL injection
hydra         → Brute force login
aircrack-ng   → WiFi security testing
nikto         → Web server scanner
gobuster      → Directory brute force
\`\`\`

## Menyiapkan Target Lab

Buat VM target yang **sengaja rentan** untuk latihan:

\`\`\`bash
# Download Metasploitable 2 (Linux rentan)
wget https://sourceforge.net/projects/metasploitable/files/Metasploitable-Linux-2.0.0.zip

# Atau gunakan DVWA (Damn Vulnerable Web App) di Docker
docker run -d -p 80:80 vulnerables/web-dvwa
\`\`\`

## Tips Belajar di Lab

- **Snapshot** VM sebelum eksperimen — kalau rusak, restore 1 menit
- **Patok IP** target di NAT Network (mis. 192.168.56.0/24)
- **Dokumentasi** setiap langkah di CherryTree atau Obsidian
- **Jangan** pernah hubungkan lab ke internet publik tanpa firewall
- **Hapus** data sensitif dari snapshot sebelum share

## Verifikasi Lab Berfungsi

\`\`\`bash
# Dari Kali, scan IP target
ip addr show                    # cek IP sendiri
sudo nmap -sn 192.168.56.0/24   # discover host
sudo nmap -sV 192.168.56.102    # service version detection
\`\`\`

Jika berhasil menemukan port terbuka di VM target, lab kamu siap dipakai untuk mempelajari tingkat selanjutnya.`,
    quiz: [
      {
        question: "Mengapa praktik cybersecurity sebaiknya dilakukan di virtual machine?",
        options: [
          "Karena lebih cepat dari komputer asli",
          "Agar terisolasi dari host, aman dari kerusakan, dan bisa di-snapshot",
          "Karena VM tidak bisa dihack",
          "Karena murah"
        ],
        answer: 1,
        explanation: "VM memberikan isolasi dari host OS, fitur snapshot untuk rollback cepat, dan jaringan internal yang terkontrol — semua praktik menjadi aman dan legal."
      },
      {
        question: "Manakah tool yang TIDAK tersedia secara default di Kali Linux?",
        options: [
          "nmap",
          "metasploit-framework",
          "Microsoft Office",
          "wireshark"
        ],
        answer: 2,
        explanation: "Kali Linux berisi tools keamanan seperti nmap, metasploit, wireshark. Microsoft Office adalah aplikasi perkantoran komersial yang tidak tersedia default."
      },
      {
        question: "Perintah apa untuk mendeteksi versi service pada port terbuka dengan nmap?",
        options: [
          "nmap -sn target",
          "nmap -sV target",
          "nmap -Pn target",
          "nmap -p 80 target"
        ],
        answer: 1,
        explanation: "Flag \`-sV\` (service version detection) membuat nmap mengeksplorasi port terbuka dan menebak versi service yang berjalan."
      }
    ]
  },

  // ============================================
  // LEVEL 2 - JARINGAN
  // ============================================
  {
    level: 2,
    order: 1,
    title: "Dasar Jaringan Komputer",
    slug: "dasar-jaringan-komputer",
    description: "Konsep dasar jaringan: IP address, subnet, gateway, MAC address, dan topologi.",
    icon: "🌐",
    isProject: false,
    content: `# Dasar Jaringan Komputer

Jaringan komputer adalah fondasi dari internet dan sebagian besar serangan siber. Sebelum bisa menyerang atau mempertahankan jaringan, kamu harus memahami cara kerjanya.

## Konsep Dasar

**Jaringan komputer** adalah kumpulan perangkat yang saling terhubung untuk berkomunikasi dan berbagi sumber daya. Perangkat diidentifikasi dengan:

\`\`\`text
MAC Address → alamat fisik kartu jaringan (XX:XX:XX:XX:XX:XX)
IP Address  → alamat logis di jaringan (192.168.1.10)
Hostname    → nama yang dibaca manusia (server01.local)
\`\`\`

## IPv4 dan Subnetting

IPv4 adalah 32-bit, ditulis dalam 4 oktet:

\`\`\`text
192.168.1.10/24
│         │  │
│         │  └── Subnet mask = 24 bit pertama adalah network
│         └───── Host = 1.10
└─────────────── Network = 192.168.1.0
\`\`\`

Rumus jumlah host: \`2^(32-prefix) - 2\`. Untung /24: \`2^8 - 2 = 254 host\`.

## Kelas IP (Public vs Private)

\`\`\`text
PRIVATE (untuk LAN, tidak di-route di internet):
  10.0.0.0/8        (10.0.0.0 - 10.255.255.255)
  172.16.0.0/12     (172.16.0.0 - 172.31.255.255)
  192.168.0.0/16    (192.168.0.0 - 192.168.255.255)

PUBLIC  → selain di atas, di-route di internet

LOOPBACK → 127.0.0.0/8 (localhost)
\`\`\`

## Komponen Jaringan

- **Switch** → menghubungkan perangkat di LAN yang sama (Layer 2)
- **Router** → menghubungkan jaringan berbeda (Layer 3)
- **Firewall** → menyaring traffic berdasarkan aturan
- **Gateway** → pintu keluar ke jaringan lain
- **Modem** → mengubah sinyal ISP jadi data jaringan

## Cek Informasi Jaringan di Linux

\`\`\`bash
# Lihat IP dan interface
ip addr show

# Lihat tabel routing (gateway)
ip route

# Cek koneksi ke host
ping -c 4 8.8.8.8

# Lihat MAC address tetangga (ARP table)
ip neigh

# Resolve DNS
dig google.com +short
\`\`\`

## NAT (Network Address Translation)

NAT menerjemahkan IP private menjadi IP public agar bisa internetan. Inilah yang membuat semua perangkat di rumahmu bisa online meski cuma 1 IP public dari ISP.

\`\`\`text
192.168.1.10 (laptop)  ─┐
192.168.1.11 (HP)      ─┼─→ Router ──→ 103.x.x.x (IP public ISP) ──→ Internet
192.168.1.12 (TV)      ─┘
\`\`\`

## Topologi Umum

\`\`\`text
Star       → semua perangkat ke switch pusat
Mesh       → tiap perangkat saling terhubung (banyak kabel)
Bus        → satu kabel backbone (lama)
Ring       → melingkar, token passing
\`\`\`

## Cara Data Mengalir

Saat kamu membuka \`https://google.com\`:

1. **DNS** resolve \`google.com\` → IP (mis. 142.250.x.x)
2. Browser membuka **TCP connection** ke IP:443 (3-way handshake)
3. **TLS handshake** untuk enkripsi
4. **HTTP request** dikirim: \`GET / HTTP/1.1\`
5. Server balas dengan **HTTP response** (HTML, status 200)
6. Browser **render** halaman

Ini yang akan kita bedah di materi-materi selanjutnya.`,
    quiz: [
      {
        question: "Manakah rentang IP PRIVATE yang valid?",
        options: [
          "8.8.8.0/24",
          "192.168.1.0/24",
          "172.32.0.0/12",
          "203.130.0.0/16"
        ],
        answer: 1,
        explanation: "192.168.0.0/16 adalah range private. 8.8.8.0 (Google DNS) dan 203.x adalah IP public, sedangkan 172.32.0.0 di luar rentang 172.16.0.0/12."
      },
      {
        question: "Pada subnet 192.168.10.0/24, berapa jumlah host yang dapat digunakan?",
        options: [
          "256",
          "254",
          "128",
          "62"
        ],
        answer: 1,
        explanation: "Rumusnya 2^(32-24) - 2 = 256 - 2 = 254 host. Dikurangi 2 karena alamat network (192.168.10.0) dan broadcast (192.168.10.255) tidak bisa dipakai host."
      },
      {
        question: "Apa fungsi NAT (Network Address Translation)?",
        options: [
          "Mempercepat koneksi internet",
          "Menerjemahkan IP private ke IP public agar bisa internetan",
          "Memblokir serangan DDoS",
          "Mengenkripsi traffic jaringan"
        ],
        answer: 1,
        explanation: "NAT menerjemahkan IP private (yang tidak di-route internet) menjadi IP public milik router, sehingga perangkat di LAN bisa mengakses internet."
      }
    ]
  },
  {
    level: 2,
    order: 2,
    title: "OSI Model",
    slug: "osi-model",
    description: "7 lapisan OSI Model sebagai kerangka konseptual komunikasi jaringan.",
    icon: "📚",
    isProject: false,
    content: `# OSI Model

**OSI Model** (Open Systems Interconnection) adalah model 7 lapisan yang menjelaskan bagaimana data berpindah dari satu komputer ke komputer lain. Walaupun implementasi nyatanya TCP/IP yang dipakai, OSI tetap jadi rujukan untuk debugging.

## 7 Lapisan OSI

\`\`\`text
No | Layer         | Fungsi                    | Contoh
---|---------------|---------------------------|------------------------
7  | Application   | Antarmuka untuk aplikasi  | HTTP, FTP, DNS, SMTP
6  | Presentation  | Enkripsi, kompresi, format| SSL/TLS, JPEG, ASCII
5  | Session       | Membuka/menutup sesi      | NetBIOS, RPC
4  | Transport     | Reliabilitas, port        | TCP, UDP
3  | Network       | Routing antar jaringan    | IP, ICMP, Router
2  | Data Link     | Frame, MAC, switch        | Ethernet, Wi-Fi, ARP
1  | Physical      | Bit di kabel/udara        | Kabel UTP, fiber, radio
\`\`\`

Mnemonik untuk mengingat (dari bawah ke atas): **Please Do Not Throw Sausage Pizza Away**.

## Cara Data Mengalir

Saat browser mengirim request HTTP, data melewati semua lapisan:

\`\`\`text
[Pengirim]                              [Penerima]
Application  ─┐                  ┌── Application
Presentation  │   Encapsulation  │   Presentation
Session       │   = menambah     │   Session
Transport     │   header tiap    │   Transport
Network       │   lapisan        │   Network
Data Link     │                  │   Data Link
Physical      ─┘                  └── Physical
         → [ kabel / udara ] →
\`\`\`

Setiap lapisan menambahkan **header** sendiri (encapsulation). Di penerima, header dilepas satu per satu (decapsulation).

## Contoh Encapsulation

\`\`\`text
Data "GET / HTTP/1.1"
   ↓ [Layer 4 TCP header]    → TCP segment (port 80 → port 443)
   ↓ [Layer 3 IP header]     → IP packet (192.168.1.5 → 142.250.x.x)
   ↓ [Layer 2 Ethernet hdr]  → Frame (MAC A → MAC B)
   ↓ [Layer 1 bit]           → sinyal listrik di kabel
\`\`\`

## PDU (Protocol Data Unit) per Lapisan

\`\`\`text
Layer  | PDU Name
-------|----------
4      | Segment (TCP) / Datagram (UDP)
3      | Packet
2      | Frame
1      | Bit
\`\`\`

## Layer yang Sering Diserang

- **Layer 2** → ARP spoofing, MAC flooding, VLAN hopping
- **Layer 3** → IP spoofing, ICMP flood, routing attack
- **Layer 4** → SYN flood, port scan, UDP flood
- **Layer 7** → SQL Injection, XSS, DDoS aplikasi

## Tools per Layer

\`\`\`bash
# Layer 2 - ARP scan
sudo arp-scan --localnet

# Layer 3 - ping & traceroute
ping -c 4 8.8.8.8
traceroute 8.8.8.8

# Layer 4 - nmap (port scan)
nmap -sS 192.168.1.0/24

# Layer 7 - HTTP request
curl -v https://example.com
\`\`\`

## Perbedaan dengan TCP/IP Model

\`\`\`text
OSI Model        TCP/IP Model
----------       ------------
Application   ─┐
Presentation   ├─► Application
Session       ─┤
Transport     ──► Transport
Network       ──► Internet
Data Link     ─┐
Physical      ─┴─► Network Access
\`\`\`

TCP/IP menggabungkan Application+Presentation+Session jadi satu, dan Data Link+Physical jadi Network Access. TCP/IP inilah yang dipakai internet nyata.

## Tips Debugging

Saat troubleshooting, mulai dari bawah:

1. **Layer 1** — kabel nancap? WiFi nyala?
2. **Layer 2** — MAC address kelihatan? \`ip link\`
3. **Layer 3** — IP benar? Bisa ping gateway? \`ping 192.168.1.1\`
4. **Layer 4** — port bisa diakses? \`nmap -p 80 target\`
5. **Layer 7** — service merespons? \`curl http://target\`

Pendekatan ini menghemat waktu dan menemukan akar masalah lebih cepat.`,
    quiz: [
      {
        question: "Pada OSI Model, layer mana yang bertanggung jawab atas routing antar jaringan?",
        options: [
          "Layer 2 (Data Link)",
          "Layer 3 (Network)",
          "Layer 4 (Transport)",
          "Layer 7 (Application)"
        ],
        answer: 1,
        explanation: "Layer 3 (Network) menangani logical addressing (IP) dan routing antar jaringan. Router bekerja di layer ini."
      },
      {
        question: "HTTP, DNS, dan FTP bekerja di layer OSI mana?",
        options: [
          "Layer 4",
          "Layer 5",
          "Layer 6",
          "Layer 7"
        ],
        answer: 3,
        explanation: "Protokol aplikasi seperti HTTP, DNS, FTP, SMTP bekerja di Layer 7 (Application), lapisan teratas OSI yang berinteraksi langsung dengan software."
      },
      {
        question: "Apa PDU (Protocol Data Unit) di Layer 4 Transport?",
        options: [
          "Bit",
          "Frame",
          "Packet",
          "Segment"
        ],
        answer: 3,
        explanation: "Layer 4 Transport menggunakan istilah Segment (untuk TCP) atau Datagram (untuk UDP) sebagai PDU."
      }
    ]
  },
  {
    level: 2,
    order: 3,
    title: "TCP/IP Protocol",
    slug: "tcp-ip-protocol",
    description: "Model TCP/IP: perbedaan TCP vs UDP, three-way handshake, dan protokol inti internet.",
    icon: "🔌",
    isProject: false,
    content: `# TCP/IP Protocol

**TCP/IP** adalah protokol inti yang menjalankan internet. Berbeda dengan OSI yang teoritis, TCP/IP adalah model praktis yang benar-benar digunakan.

## 4 Lapisan TCP/IP

\`\`\`text
Layer              | Contoh Protokol
------------------ | ------------------------------
Application        | HTTP, HTTPS, DNS, SSH, FTP, SMTP
Transport          | TCP, UDP
Internet           | IP, ICMP, ARP
Network Access     | Ethernet, Wi-Fi, PPP
\`\`\`

## TCP vs UDP

Dua protokol transport utama dengan karakteristik berbeda:

\`\`\`text
Aspek        | TCP                    | UDP
-------------|------------------------|---------------------
Koneksi      | Connection-oriented    | Connectionless
Reliability  | Reliabel (ack, retry)  | Tidak reliabel
Urutan       | Terjamin               | Tidak terjamin
Kecepatan    | Lebih lambat           | Lebih cepat
Overhead     | Besar (header 20 byte) | Kecil (header 8 byte)
Use case     | Web, email, file       | Streaming, game, DNS, VoIP
\`\`\`

## TCP Three-Way Handshake

Sebelum data dikirim, TCP membuat koneksi dengan 3 langkah:

\`\`\`text
Client                          Server
  |                                |
  | ---- SYN (seq=x) ------------> |   1. Client minta koneksi
  |                                |
  | <--- SYN-ACK (seq=y, ack=x+1)- |   2. Server setuju & balas
  |                                |
  | ---- ACK (ack=y+1) ----------> |   3. Client konfirmasi
  |                                |
  | === DATA dua arah ===========> |
\`\`\`

Inilah yang dimanfaatkan serangan **SYN flood** — attacker kirim banyak SYN tapi tidak balas ACK, server menunggu hingga resource habis.

## Menutup Koneksi: Four-Way Handshake

\`\`\`text
Client                          Server
  | ---- FIN ..................-->|
  | <--- ACK ...................--|
  | <--- FIN ...................--|
  | ---- ACK ..................-->|
\`\`\`

## Protokol Inti Lainnya

\`\`\`text
ICMP → Ping, traceroute, error reporting
ARP  → IP → MAC resolution (Layer 2/3)
DHCP → Pemberian IP otomatis
NAT  → Translasi IP private ke public
\`\`\`

## Melihat Koneksi Aktif di Linux

\`\`\`bash
# Lihat semua koneksi TCP
ss -t -a

# Lihat koneksi dengan PID proses
sudo ss -t -p

# Lihat koneksi UDP
ss -u -a

# Statistik per protokol
netstat -s | head -40
\`\`\`

## Contoh: Capture TCP Handshake dengan tcpdump

\`\`\`bash
# Capture 3-way handshake ke port 80
sudo tcpdump -i eth0 -n 'tcp port 80 and (tcp[tcpflags] & tcp-syn != 0 or tcp[tcpflags] & tcp-ack != 0)' -c 10
\`\`\`

## Numbering & Port

TCP/UDP menggunakan **port** (0-65535) untuk membedakan service:

\`\`\`text
0-1023    → Well-known ports (HTTP=80, HTTPS=443, SSH=22, DNS=53)
1024-49151→ Registered ports (aplikasi umum)
49152+    → Dynamic/ephemeral ports (klien sementara)
\`\`\`

## Kapan Pilih TCP vs UDP?

| Kebutuhan               | Pilih |
|-------------------------|-------|
| Harus sampai semua data | TCP   |
| Latensi rendah > reliabilitas | UDP |
| Stream video live       | UDP   |
| Transfer file           | TCP   |
| DNS query               | UDP   |
| DNS zone transfer       | TCP   |

## State TCP Yang Penting

\`\`\`text
LISTEN      → Server menunggu koneksi
SYN_SENT    → Client kirim SYN, tunggu SYN-ACK
SYN_RECV    → Server kirim SYN-ACK, tunggu ACK
ESTABLISHED → Koneksi aktif
TIME_WAIT   → Menunggu setelah close (2*MSL)
CLOSE_WAIT  → Remote close, lokal belum close
\`\`\`

Banyak koneksi di \`CLOSE_WAIT\` atau \`TIME_WAIT\` adalah indikator masalah aplikasi (connection leak).`,
    quiz: [
      {
        question: "Apa urutan paket yang benar pada TCP three-way handshake?",
        options: [
          "FIN, ACK, SYN",
          "SYN, SYN-ACK, ACK",
          "SYN, ACK, FIN",
          "ACK, SYN, SYN-ACK"
        ],
        answer: 1,
        explanation: "Client kirim SYN, server balas SYN-ACK (mengonfirmasi + ikut sinkronisasi), client kirim ACK. Setelah itu koneksi ESTABLISHED."
      },
      {
        question: "Manakah protokol yang TEPAT menggunakan UDP?",
        options: [
          "HTTP web request",
          "SSH remote login",
          "DNS query (umumnya)",
          "SMTP email transfer"
        ],
        answer: 2,
        explanation: "DNS query umumnya pakai UDP karena paket kecil dan butuh respons cepat. HTTP, SSH, SMTP butuh reliabilitas sehingga pakai TCP. (Zone transfer DNS pakai TCP.)"
      },
      {
        question: "Serangan SYN flood memanfaatkan celah di fase apa?",
        options: [
          "DNS resolution",
          "Three-way handshake (setelah SYN, attacker tidak balas ACK)",
          "TLS handshake",
          "Four-way handshake penutupan"
        ],
        answer: 1,
        explanation: "Attacker kirim banyak SYN tapi tidak balas ACK, server menyimpan half-open connection hingga backlog penuh dan tidak bisa menerima koneksi baru."
      }
    ]
  },
  {
    level: 2,
    order: 4,
    title: "DNS & HTTP",
    slug: "dns-http",
    description: "Cara kerja DNS resolving nama domain dan protokol HTTP untuk komunikasi web.",
    icon: "🔗",
    isProject: false,
    content: `# DNS & HTTP

DNS dan HTTP adalah dua protokol paling terlihat di internet. Memahami keduanya krusial untuk web security dan debugging jaringan.

## DNS (Domain Name System)

**DNS** menerjemahkan nama domain yang dibaca manusia (\`google.com\`) menjadi IP address (\`142.250.193.78\`). Tanpa DNS, kita harus hafal IP tiap situs.

## Hierarki DNS

\`\`\`text
Root server (.)         → 13 cluster global
  └─ TLD (.com, .id, .org)
       └─ Authoritative (contoh.com)
            └─ Subdomain (www.contoh.com)
\`\`\`

## Proses Resolusi DNS

\`\`\`text
1. User ketik "example.com" di browser
2. OS cek cache lokal & /etc/hosts
3. Query ke Resolver ISP (umumnya 8.8.8.8 / 1.1.1.1)
4. Resolver tanya Root → beri NS TLD .com
5. Resolver tanya TLD .com → beri NS example.com
6. Resolver tanya NS example.com → dapat IP
7. IP dikembalikan ke browser
8. Browser buka koneksi ke IP tersebut
\`\`\`

## Jenis Record DNS

\`\`\`text
A     → domain → IPv4
AAAA  → domain → IPv6
CNAME → alias ke domain lain
MX    → mail server
TXT   → text bebas (SPF, DKIM, verifikasi)
NS    → name server otoritatif
SOA   → start of authority
PTR   → reverse (IP → domain)
\`\`\`

## Tools DNS

\`\`\`bash
# Query A record
dig example.com +short
dig @8.8.8.8 example.com A

# Query MX record (mail)
dig example.com MX

# Reverse lookup IP → domain
dig -x 8.8.8.8 +short

# Trace path resolusi
dig +trace example.com

# DNS enumeration
dig axfr @ns1.example.com example.com   # zone transfer (sering disabled)
\`\`\`

## HTTP (HyperText Transfer Protocol)

**HTTP** adalah protokol aplikasi untuk web. Komunikasinya berbasis request-response.

## Struktur HTTP Request

\`\`\`text
GET /api/users HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Accept: application/json
Authorization: Bearer eyJhbGc...
Cookie: session=abc123

(body kosong untuk GET)
\`\`\`

## Struktur HTTP Response

\`\`\`text
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 42
Set-Cookie: session=abc123; HttpOnly; Secure

{"id":1,"name":"Andi"}
\`\`\`

## HTTP Methods

\`\`\`text
GET     → ambil data (idempotent)
POST    → buat data baru
PUT     → update seluruh resource
PATCH   → update sebagian
DELETE  → hapus
OPTIONS → cek method yang didukung (CORS preflight)
HEAD    → header saja, tanpa body
\`\`\`

## HTTP Status Codes

\`\`\`text
1xx Informational
2xx Success       (200 OK, 201 Created, 204 No Content)
3xx Redirect      (301, 302, 304 Not Modified)
4xx Client error  (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many)
5xx Server error  (500 Internal, 502 Bad Gateway, 503 Service Unavailable)
\`\`\`

## HTTPS = HTTP + TLS

\`\`\`text
HTTP  → port 80, plaintext (bisa disadap)
HTTPS → port 443, terenkripsi TLS

Man in the Middle di HTTPS → lihat metadata saja (SNI, timing, ukuran)
Man in the Middle di HTTP  → bisa baca semua isi termasuk password
\`\`\`

## Praktik: curl untuk Inspeksi HTTP

\`\`\`bash
# Lihat header response
curl -I https://example.com

# Lihat seluruh request & response
curl -v https://example.com 2>&1 | head -50

# Kirim POST dengan JSON
curl -X POST https://api.example.com/users \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Andi","email":"andi@mail.com"}'

# Pakai custom Host header (untuk virtual host testing)
curl -H "Host: internal.local" http://target-ip/
\`\`\`

## Ancaman Umum DNS

- **DNS hijacking** — ubah record untuk redirect ke situs palsu
- **DNS poisoning** — masukkan record palsu ke cache resolver
- **DNS tunneling** — ekstraksi data lewat query DNS
- **Subdomain takeover** — klaim subdomain yang CNAME ke service tidak terpakai

## Ancaman Umum HTTP

- **HTTP downgrade** → paksa HTTPS ke HTTP
- **Clickjacking** → iframe + X-Frame-Options hilang
- **CSRF** → POST pakai cookie korban
- **Insecure deserialization** → objek dari body di-deserialize

Header keamanan penting: \`Strict-Transport-Security\`, \`Content-Security-Policy\`, \`X-Content-Type-Options\`, \`X-Frame-Options\`.`,
    quiz: [
      {
        question: "Record DNS mana yang menerjemahkan nama domain ke IPv6 address?",
        options: [
          "A record",
          "AAAA record",
          "CNAME record",
          "MX record"
        ],
        answer: 1,
        explanation: "AAAA record (quad-A) memetakan domain ke IPv6 128-bit. A record untuk IPv4, CNAME alias ke domain lain, MX untuk mail server."
      },
      {
        question: "HTTP status code 401 berarti?",
        options: [
          "Forbidden (akses ditolak meski login)",
          "Unauthorized (perlu autentikasi)",
          "Not Found",
          "Bad Request"
        ],
        answer: 1,
        explanation: "401 Unauthorized = client belum autentikasi (perlu login/token). 403 Forbidden = sudah autentikasi tapi tidak punya hak, 404 = resource tidak ada."
      },
      {
        question: "Mengapa HTTPS lebih aman daripada HTTP?",
        options: [
          "HTTPS pakai port 443 yang tidak bisa disadap",
          "HTTPS mengenkripsi isi komunikasi dengan TLS",
          "HTTPS otomatis memblokir SQL injection",
          "HTTPS membuat website lebih cepat"
        ],
        answer: 1,
        explanation: "HTTPS = HTTP di atas TLS. TLS mengenkripsi payload sehingga MITM hanya bisa melihat metadata (SNI, ukuran, timing) bukan isi termasuk password."
      }
    ]
  },
  {
    level: 2,
    order: 5,
    title: "Port & Services",
    slug: "port-services",
    description: "Memahami port, service umum, dan teknik port scanning dengan nmap untuk pemetaan jaringan.",
    icon: "🚪",
    isProject: false,
    content: `# Port & Services

Setiap service jaringan berjalan di **port** tertentu. Mengenali port dan service yang berjalan adalah langkah pertama dalam reconnaissance jaringan.

## Apa itu Port?

**Port** adalah angka 16-bit (0-65535) yang mengidentifikasi service spesifik di sebuah host. Analoginya: IP address = alamat gedung, port = nomor kamar.

\`\`\`text
192.168.1.10:22   → SSH service
192.168.1.10:80   → HTTP web server
192.168.1.10:443  → HTTPS web server
192.168.1.10:3306 → MySQL database
\`\`\`

## Klasifikasi Port

\`\`\`text
0 - 1023      → Well-known (butuh root untuk bind)
1024 - 49151  → Registered
49152 - 65535 → Dynamic / ephemeral (klien sementara)
\`\`\`

## Port & Service Umum

\`\`\`text
Port  | Protokol | Service
------|----------|-------------------------
20/21 | TCP      | FTP (file transfer)
22    | TCP      | SSH (remote shell aman)
23    | TCP      | Telnet (remote shell plaintext)
25    | TCP      | SMTP (mail submission)
53    | UDP/TCP  | DNS
80    | TCP      | HTTP
110   | TCP      | POP3 (mail)
143   | TCP      | IMAP (mail)
161   | UDP      | SNMP (network management)
389   | TCP      | LDAP
443   | TCP      | HTTPS
445   | TCP      | SMB (Windows file share)
3306  | TCP      | MySQL / MariaDB
3389  | TCP      | RDP (Windows remote desktop)
5432  | TCP      | PostgreSQL
6379  | TCP      | Redis
8080  | TCP      | HTTP alternate
\`\`\`

## Mengapa Memetakan Port?

- **Reconnaissance** — service apa yang mungkin punya celah
- **Inventory** — dokumentasi service yang berjalan
- **Hardening** — menemukan port tidak perlu yang harus ditutup
- **Compliance** — audit regulasi

## Nmap: Tool Port Scanner

\`\`\`bash
# Scan 1000 port paling umum
nmap 192.168.1.10

# Scan semua 65535 port
nmap -p- 192.168.1.10

# Scan range port tertentu
nmap -p 1-1024 192.168.1.10

# Service version detection
nmap -sV 192.168.1.10

# OS detection
sudo nmap -O 192.168.1.10

# Scan stealth (SYN scan, perlu root)
sudo nmap -sS 192.168.1.10

# UDP scan (lambat)
sudo nmap -sU 192.168.1.10
\`\`\`

## State Port

\`\`\`text
open      → service menerima koneksi
closed    → port bisa diakses tapi tidak ada service
filtered  → firewall/IDS memblokir, nmap tidak yakin
unfiltered → bisa akses tapi tidak tahu open/closed
\`\`\`

## Scan Cepat & Agresif

\`\`\`bash
# Fast scan, top 100 ports
nmap -F 192.168.1.10

# Aggressive: OS + version + script + traceroute
nmap -A 192.168.1.10

# Scan banyak host sekaligus (CIDR)
nmap 192.168.1.0/24

# Output ke file untuk analisis
nmap -oN scan.txt -oX scan.xml 192.168.1.10
\`\`\`

## NSE (Nmap Scripting Engine)

Nmap punya ratusan script untuk deteksi celah spesifik:

\`\`\`bash
# Deteksi versi & celah
nmap --script vuln 192.168.1.10

# Brute force SMB
nmap --script smb-brute 192.168.1.10

# Enumerate SMB shares
nmap --script smb-enum-shares 192.168.1.10

# Deteksi default credentials MySQL
nmap --script mysql-empty-password 192.168.1.10
\`\`\`

## Etika & Legalitas Scanning

\`\`\`text
✓ Scan jaringan sendiri / lab pribadi
✓ Scan dengan izin tertulis dari pemilik
✓ Scan bug bounty program (di scope)

✗ Scan random IP publik
✗ Scan infrastruktur kritikal tanpa izin
✗ Scan target yang tidak kamu miliki
\`\`\`

Port scanning tanpa izin **bisa dianggap ilegal** di banyak yurisdiksi, termasuk Indonesia (UU ITE Pasal 30).

## Cara Service Listen

\`\`\`bash
# Lihat service yang listen di Linux
sudo ss -tlnp
sudo netstat -tlnp

# Lihat service + PID
sudo lsof -i -P -n | grep LISTEN
\`\`\`

Output menunjukkan port, protocol, dan proses yang memilikinya — penting untuk hardening.

## Hardening: Tutup Port Tidak Perlu

1. Identifikasi semua service yang listen
2. Tanyakan: apakah service ini dibutuhkan?
3. Jika tidak → matikan service-nya (\`systemctl disable\`)
4. Jika ya tapi hanya lokal → bind ke \`127.0.0.1\` bukan \`0.0.0.0\`
5. Filter dengan firewall (ufw/iptables) untuk akses eksternal`,
    quiz: [
      {
        question: "Berapa port default untuk SSH dan HTTPS secara berurutan?",
        options: [
          "80 dan 443",
          "22 dan 443",
          "22 dan 80",
          "21 dan 443"
        ],
        answer: 1,
        explanation: "SSH default di port 22, HTTPS di port 443. HTTP di 80, FTP di 21, MySQL di 3306."
      },
      {
        question: "Apa perbedaan nmap -sS dan nmap -sT?",
        options: [
          "Tidak ada perbedaan",
          "-sS SYN scan (stealth), -sT full TCP connect scan",
          "-sS untuk UDP, -sT untuk TCP",
          "-sS lebih lambat dari -sT"
        ],
        answer: 1,
        explanation: "-sS adalah SYN scan yang tidak menyelesaikan handshake (stealth, butuh root). -sT melakukan full TCP connect sehingga tercatat di log aplikasi."
      },
      {
        question: "Apa arti state port \"filtered\" pada hasil nmap?",
        options: [
          "Port terbuka dan ada service",
          "Port tertutup tapi tidak ada firewall",
          "Firewall/IDS memblokir, nmap tidak bisa tentukan open/closed",
          "Port tidak ada di host"
        ],
        answer: 2,
        explanation: "Filtered berarti packet difilter oleh firewall/IDS sehingga nmap tidak bisa menentukan apakah port open atau closed. Perlu scan alternatif (UDP, source port 53, dll)."
      }
    ]
  },
  {
    level: 2,
    order: 6,
    title: "Wireshark Basics",
    slug: "wireshark-basics",
    description: "Menggunakan Wireshark untuk capture, filter, dan analisis packet jaringan.",
    icon: "🦈",
    isProject: false,
    content: `# Wireshark Basics

**Wireshark** adalah network protocol analyzer paling populer. Ia membaca setiap packet yang lewat di interface dan menampilkannya secara visual — sangat penting untuk debugging, forensik, dan keamanan.

## Konsep Capture

Wireshark bekerja dengan **promiscuous mode** — membaca semua packet di interface, bukan hanya yang ditujukan ke MAC sendiri. Di Wi-Fi, bisa juga **monitor mode** untuk menangkap semua traffic di udara.

\`\`\`text
[Komputer A] ──→ [Switch] ──→ [Komputer B]
                    ↓
              [Wireshark di komputer C]
              (perlu port mirror / hub / ARP spoof untuk lihat traffic A-B)
\`\`\`

## Memulai Capture

\`\`\`bash
# Capturing dengan tshark (Wireshark CLI)
sudo tshark -i eth0 -c 100 -w capture.pcap

# Capturing dengan filter
sudo tshark -i eth0 -f "tcp port 80" -w http.pcap

# Membaca file pcap
tshark -r capture.pcap -Y "http.request.method == GET"
\`\`\`

## Filter Capturing (BPF)

**BPF (Berkeley Packet Filter)** dipakai saat capture — efisien karena filter di kernel level:

\`\`\`bash
host 192.168.1.10              # traffic ke/dari host ini
src host 192.168.1.10         # hanya yang dari host ini
dst port 443                   # hanya tujuan port 443
tcp port 22                    # traffic SSH
not arp and not dns           # kecualikan ARP dan DNS
tcp[tcpflags] & tcp-syn != 0  # hanya SYN packet
\`\`\`

## Display Filter (Wireshark)

Display filter lebih powerful, dipakai setelah capture:

\`\`\`text
# Lapisan protokol
http                      → hanya HTTP
tcp                       → hanya TCP
dns                       → hanya DNS

# Field spesifik
http.request.method == "POST"
http.host contains "google"
ip.addr == 192.168.1.10
tcp.port == 443
tcp.flags.syn == 1

# Kombinasi dengan and/or/not
http and ip.addr == 192.168.1.10
tcp.port == 80 or tcp.port == 443
not arp and not icmp
\`\`\`

## Anatomi Tampilan Wireshark

\`\`\`text
+----------------------------------------------------+
| Filter: http                                       |
+----------------------------------------------------+
| No | Time | Source | Destination | Protocol | Info |
| 1  | 0.01 | .5     | .1          | TCP      | SYN |
| 2  | 0.02 | .1     | .5          | TCP      | SYN-ACK |
+----------------------------------------------------+
| Packet Detail (tree):
|   ▸ Frame 1: 66 bytes
|   ▸ Ethernet II: src MAC, dst MAC
|   ▸ IP: src 192.168.1.5, dst 192.168.1.10
|   ▸ TCP: src port 54321, dst port 80, SYN
+----------------------------------------------------+
| Packet Bytes (hex+ascii):
|   0000  45 00 00 3c 1c 46 40 00  E.. <..@.         |
+----------------------------------------------------+
\`\`\`

## Studi Kasus: Analisis HTTP Login

\`\`\`text
1. Filter: http.request.method == "POST"
2. Cari request ke /login
3. Klik kanan → Follow → HTTP Stream
4. Lihat body request:
   POST /login HTTP/1.1
   ...
   username=admin&password=secret123
\`\`\`

Inilah mengapa **HTTPS wajib** — di HTTP, password terbaca plaintext di Wireshark!

## Analisis Serangan: SYN Flood

\`\`\`text
1. Capture saat ada SYN flood (lab)
2. Filter: tcp.flags.syn == 1 and tcp.flags.ack == 0
3. Lihat apakah puluhan SYN/detik dari IP yang sama
4. Bandingkan jumlah SYN vs SYN-ACK → indikasi flood
\`\`\`

## Statistik Berguna

\`\`\`text
Statistics → Capture File Properties → jumlah packet
Statistics → Protocol Hierarchy     → komposisi protokol
Statistics → Conversations          → siapa ngobrol dengan siapa
Statistics → Endpoints              → IP/MAC pengirim terbanyak
Statistics → IO Graphs              → grafik traffic per detik
\`\`\`

## Praktik: Capture Login di Lab DVWA

\`\`\`bash
# Di Kali, mulai capture
sudo tshark -i eth0 -w dvwa.pcap &

# Buka browser, login ke DVWA via HTTP
curl -c cookies.txt -d "username=admin&password=password" \\
  http://192.168.56.102/login.php

# Stop capture
sudo pkill tshark

# Analisis password yang terkirim
tshark -r dvwa.pcap -Y 'http.request.method == "POST"' \\
  -T fields -e http.file_data | grep -i password
\`\`\`

## Tips Analisis Forensik

- **Time** — kapan serangan terjadi?
- **Source** — IP attacker, ASN, geolokasi
- **Pattern** — apakah ada otomasi (cron, repeat)?
- **Beacon** — apakah ada koneksi periodik ke IP mencurigakan (C2)?
- **Exfiltration** — upload data besar ke host asing?

## Etika Capture

Hanya capture traffic di **jaringan yang kamu punya izin**. Menangkap traffic WiFi publik atau jaringan kantor tanpa izin **ilegal** (UU ITE).`,
    quiz: [
      {
        question: "Apa perbedaan BPF filter dan Display filter di Wireshark?",
        options: [
          "Tidak ada, sama saja",
          "BPF saat capture (kernel level), Display filter setelah capture (UI)",
          "BPF untuk UDP, Display untuk TCP",
          "BPF lebih lambat dari Display"
        ],
        answer: 1,
        explanation: "BPF (capture filter) bekerja di kernel saat packet ditangkap — efisien. Display filter bekerja di UI Wireshark pada packet yang sudah ditangkap — lebih fleksibel."
      },
      {
        question: "Filter Wireshark yang benar untuk hanya menampilkan HTTP POST request?",
        options: [
          "http.method == post",
          "http.request.method == \"POST\"",
          "http post",
          "filter http post"
        ],
        answer: 1,
        explanation: "Field yang benar adalah \`http.request.method\` dengan nilai string \"POST\" (case-sensitive, gunakan tanda kutip)."
      },
      {
        question: "Apa risih keamanan utama protokol HTTP terhadap Wireshark?",
        options: [
          "HTTP tidak bisa di-capture Wireshark",
          "Password dan data terkirim plaintext, terbaca di Wireshark",
          "HTTP otomatis memblokir Wireshark",
          "HTTP membuat Wireshark crash"
        ],
        answer: 1,
        explanation: "HTTP tidak terenkripsi sehingga siapa yang capture traffic (MITM) bisa membaca isi termasuk password. Inilah alasan utama HTTPS wajib."
      }
    ]
  },
  {
    level: 2,
    order: 7,
    title: "Firewall & IDS",
    slug: "firewall-ids",
    description: "Cara kerja firewall, IDS/IPS, dan implementasi dengan iptables/ufw serta Snort/Suricata.",
    icon: "🧱",
    isProject: false,
    content: `# Firewall & IDS

Firewall dan IDS/IPS adalah dua lapis pertahanan utama jaringan. Firewall mencegah, IDS mendeteksi.

## Firewall

**Firewall** menyaring packet berdasarkan aturan (rules). Bekerja di Layer 3/4 (IP/port) atau Layer 7 (aplikasi, untuk next-gen firewall).

\`\`\`text
Tipe Firewall:
┌────────────────┬──────────────────────────────────┐
| Packet Filter  | Cek header IP/TCP/UDP, allow/deny |
| Stateful       | Ingat state koneksi (NEW, ESTABLISHED) |
| Proxy          | Perantara aplikasi (HTTP/SOCKS proxy) |
| NGFW           | + DPI, IPS, threat intel |
└────────────────┴──────────────────────────────────┘
\`\`\`

## Netfilter & iptables

Linux memakai **netfilter** (kernel) yang dikontrol via \`iptables\` atau \`nftables\`. \`ufw\` adalah wrapper sederhana.

### iptables — 4 tabel utama

\`\`\`text
filter  → aturan allow/drop packet (default)
nat     → translasi IP/port
mangle  → modifikasi header
raw     → sebelum conntrack
\`\`\`

### Chain (urutan evaluasi)

\`\`\`text
INPUT    → packet masuk ke host ini
OUTPUT   → packet keluar dari host ini
FORWARD → packet lewat (router/gateway)
PREROUTING → sebelum routing (DNAT)
POSTROUTING → setelah routing (SNAT)
\`\`\`

## Contoh Aturan iptables

\`\`\`bash
# Lihat aturan aktif
sudo iptables -L -n -v

# Allow loopback
sudo iptables -A INPUT -i lo -j ACCEPT

# Allow established connections
sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT

# Allow SSH (port 22) dari subnet tertentu
sudo iptables -A INPUT -p tcp -s 192.168.1.0/24 --dport 22 -j ACCEPT

# Allow HTTP dan HTTPS
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Drop sisanya (default deny)
sudo iptables -P INPUT DROP
sudo iptables -P FORWARD DROP

# Simpan aturan
sudo iptables-save | sudo tee /etc/iptables/rules.v4
\`\`\`

## ufw (Uncomplicated Firewall)

Lebih mudah untuk pemula:

\`\`\`bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
sudo ufw status verbose
\`\`\`

## IDS vs IPS

\`\`\`text
IDS (Intrusion Detection System)
  → Pasif, hanya melaporkan ke log/SIEM
  → Contoh: Snort di mode passive

IPS (Intrusion Prevention System)
  → Aktif, memblokir + melaporkan
  → Inline di traffic path
  → Contoh: Snort inline, Suricata IPS mode
\`\`\`

## Snort — Rule-Based IDS

Format rule Snort:

\`\`\`text
action proto src_ip src_port -> dst_ip dst_port (options)
\`\`\`

Contoh rule deteksi SSH brute force:

\`\`\`text
alert tcp any any -> $HOME_NET 22 (msg:"SSH Brute Force Attempt"; \
  threshold:type both, track by_src, count 5, seconds 60; \
  sid:1000001; rev:1;)
\`\`\`

Artinya: alert jika ada 5+ koneksi SSH dalam 60 detik dari IP yang sama.

## Suricata — IDS/IPS Modern

\`\`\`bash
# Update rules
sudo suricata-update

# Jalankan sebagai IDS
sudo suricata -i eth0

# Jalankan sebagai IPS (inline, NFQ)
sudo suricata --runmode workers -q 0 -q 1

# Cek log alert
tail -f /var/log/suricata/fast.log
\`\`\`

## Tipe Deteksi IDS

\`\`\`text
Signature-based → cocokkan pattern (seperti antivirus)
Anomaly-based   → deteksi perilaku abnormal (baseline deviation)
Heuristic       → rule + ML ringan
\`\`\`

## Contoh: Deteksi Nmap Scan

\`\`\`text
alert tcp $EXTERNAL_NET any -> $HOME_NET any \
  (msg:"Nmap TCP SYN Scan"; flags:S; \
   detection_filter:track by_src, count 30, seconds 5; \
   sid:2000001;)
\`\`\`

Rule ini alert bila satu IP kirim 30+ SYN dalam 5 detik — pola khas nmap -sS.

## SIEM (Security Info & Event Mgmt)

IDS menghasilkan alert tapi harus dikumpulkan dan dianalisis. **SIEM** (Splunk, ELK, Wazuh) menggabungkan log dari banyak sumber:

\`\`\`text
Sources:
  - Firewall logs
  - IDS alerts
  - Authentication logs
  - Endpoint EDR
  - Web server access log
  - DNS queries

Output: dashboard, alerting, threat hunting
\`\`\`

## Evasion Teknik Attacker

\`\`\`text
Fragmentation → pecah packet supaya bypass signature
Encoding      → URL encode, base64, unicode
Timing        → slow scan, low rate
Tunneling     → ssh/ICMP/DNS tunnel
Spoofing      → palsukan source IP
\`\`\`

Inilah mengapa pertahanan harus **multi-layered**: firewall + IDS + EDR + anomaly detection + threat intel.

## Best Practice Hardening

1. **Default deny** — blok semua, allow yang perlu
2. **Least privilege** — hanya port/IP/service yang dibutuhkan
3. **Log everything** — simpan log ke server terpisah
4. **Update rules** — IDS rule harian dari emerging threats
5. **Test** — uji aturan dengan attack simulation (atomic red team)`,
    quiz: [
      {
        question: "Apa perbedaan utama IDS dan IPS?",
        options: [
          "IDS pakai AI, IPS pakai rules",
          "IDS pasif (lapor), IPS aktif (blokir + lapor)",
          "IDS untuk network, IPS untuk host",
          "IDS lebih baru dari IPS"
        ],
        answer: 1,
        explanation: "IDS hanya mendeteksi dan melaporkan (pasif). IPS bekerja inline dan aktif memblokir traffic yang mencurigakan."
      },
      {
        question: "Pada iptables, chain mana yang memproses packet yang lewat dari jaringan lain ke jaringan lain (router)?",
        options: [
          "INPUT",
          "OUTPUT",
          "FORWARD",
          "PREROUTING"
        ],
        answer: 2,
        explanation: "FORWARD memproses packet yang melewati host (bukan ditujukan ke host itu sendiri). INPUT untuk packet ke host, OUTPUT dari host."
      },
      {
        question: "Prinsip \"default deny\" pada firewall berarti?",
        options: [
          "Blokir semua traffic, hanya allow yang eksplisit diizinkan",
          "Allow semua traffic, blokir yang berbahaya",
          "Tidak pakai firewall",
          "Hanya blokir traffic dari internet"
        ],
        answer: 0,
        explanation: "Default deny = default policy DROP, lalu hanya port/service yang dibutuhkan yang di-allow secara eksplisit. Lebih aman daripada default allow."
      }
    ]
  },
  {
    level: 2,
    order: 8,
    title: "VPN & Proxy",
    slug: "vpn-proxy",
    description: "Konsep VPN vs Proxy, enkripsi tunnel, dan use case keamanan masing-masing.",
    icon: "🔒",
    isProject: false,
    content: `# VPN & Proxy

VPN dan Proxy keduanya menjadi perantara traffic, tapi dengan tujuan dan tingkat keamanan berbeda. Pahami perbedaannya agar tidak salah pilih.

## Apa itu Proxy?

**Proxy** adalah server perantara yang meneruskan request client ke server tujuan. Yang terlihat oleh server tujuan adalah IP proxy, bukan IP client.

\`\`\`text
[Client] → [Proxy] → [Server tujuan]
            ↑
       IP proxy terlihat
       sebagai pengirim
\`\`\`

## Tipe Proxy

\`\`\`text
Forward Proxy  → mewakili client (mis. Squid, web filter)
Reverse Proxy  → mewakili server (mis. Nginx, Cloudflare)
Transparent    → client tidak tahu lewat proxy
Anonymous      → sembunyikan IP client
SOCKS5         → proxy generik, semua protokol TCP
HTTP Proxy     → hanya HTTP/HTTPS
\`\`\`

## Apa itu VPN?

**VPN (Virtual Private Network)** membuat tunnel terenkripsi antara client dan VPN server. SEMUA traffic (aplikasi apa pun) melewati tunnel dan terenkripsi.

\`\`\`text
[Client] ════encrypted tunnel════ [VPN Server] → [Internet]
         ↑
    semua traffic aplikasi
    terenkripsi end-to-end ke VPN server
\`\`\`

## Perbedaan VPN vs Proxy

\`\`\`text
Aspek         | Proxy               | VPN
--------------|---------------------|---------------------
Enkripsi      | Tidak (kecuali HTTPS| Ya, semua traffic
Aplikasi      | Per-app (browser)   | Sistem-wide
Lapisan OSI   | Layer 7 (HTTP) / 5 (SOCKS) | Layer 3 (tunnel)
Anonimitas    | Sembunyikan IP      | Sembunyikan IP + enkripsi
Performance   | Lebih cepat         | Ada overhead enkripsi
Use case      | Filter, bypass geo  | Keamanan WiFi publik, remote akses
\`\`\`

## Protokol VPN Umum

\`\`\`text
OpenVPN     → open source, UDP/TCP, sangat aman, cross-platform
WireGuard   → modern, ringan, performa tinggi, sedikit kode
IPsec/IKEv2 → native di banyak OS, cocok untuk mobile
L2TP/IPsec  → kombinasi, agak tua
PPTP        → JANGAN pakai, sudah tidak aman
SSTP        → Microsoft, over HTTPS
\`\`\`

## Setup WireGuard di Linux

\`\`\`bash
# Install WireGuard
sudo apt install -y wireguard

# Generate keypair server
wg genkey | tee server_private.key | wg pubkey > server_public.key

# Buat config /etc/wireguard/wg0.conf
cat << EOF | sudo tee /etc/wireguard/wg0.conf
[Interface]
PrivateKey = \$(cat server_private.key)
Address = 10.0.0.1/24
ListenPort = 51820

[Peer]
# Client
PublicKey = <client_public_key>
AllowedIPs = 10.0.0.2/32
EOF

# Aktifkan forwarding & nat
echo "net.ipv4.ip_forward=1" | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
sudo iptables -t nat -A POSTROUTING -s 10.0.0.0/24 -o eth0 -j MASQUERADE

# Jalankan
sudo wg-quick up wg0
sudo systemctl enable wg-quick@wg0
sudo wg show
\`\`\`

## Konfigurasi Client WireGuard

\`\`\`text
[Interface]
PrivateKey = <client_private_key>
Address = 10.0.0.2/24
DNS = 1.1.1.1

[Peer]
PublicKey = <server_public_key>
Endpoint = server-ip:51820
AllowedIPs = 0.0.0.0/0    # semua traffic via VPN
PersistentKeepalive = 25
\`\`\`

## Reverse Proxy dengan Nginx

\`\`\`nginx
server {
    listen 80;
    server_name app.example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
\`\`\`

Manfaat reverse proxy:
- **Load balancing** — distribusi ke beberapa backend
- **TLS termination** — sertifikat di proxy, backend plain HTTP
- **Rate limiting** — anti brute force
- **WAF** — modSecurity di depan aplikasi
- **Caching** — simpan response statis

## Use Case Keamanan

\`\`\`text
VPN:
  ✓ Akses jaringan kantor dari rumah
  ✓ Aman di WiFi publik (kafe, bandara)
  ✓ Bypass sensor internet
  ✓ Sembunyikan traffic dari ISP

Proxy:
  ✓ Filter konten web (sekolah, kantor)
  ✓ Caching bandwidth
  ✓ Anonymizer (hati-hati, banyak proxy gratis curi data!)
  ✓ Burp Suite untuk web pentest
\`\`\`

## Bahaya VPN/Proxy Gratis

Banyak VPN gratis:
- **Logging** traffic kamu untuk dijual
- **Inject** iklan ke halaman
- **Botnet** — pakai device kamu sebagai exit node
- **Malware** — installer bawa trojan

Aturan: **jika produk gratis, kamu yang menjadi produk**.

## Tunneling dengan SSH (Bonus)

SSH bisa jadi proxy SOCKS instan:

\`\`\`bash
# SOCKS5 proxy di localhost:1080
ssh -D 1080 user@server.com

# Browser set proxy SOCKS5 ke 127.0.0.1:1080
# Sekarang traffic browser lewat server.com
\`\`\`

## Deteksi VPN/Proxy (Sudut Defender)

\`\`\`text
- IP reputation database (MaxMind, IPinfo)
- ASN check (data center ASN = curiga)
- Multiple users dari 1 IP
- Timezone mismatch (IP di AS, device timezone Asia)
- WebRTC IP leak
- DNS leak (DNS query tidak lewat VPN)
\`\`\`

Tidak ada cara 100% memblokir VPN, tapi lapisan deteksi ini mempersempit ruang.`,
    quiz: [
      {
        question: "Apa perbedaan mendasar VPN dan Proxy?",
        options: [
          "VPN lebih cepat dari proxy",
          "VPN mengenkripsi semua traffic sistem, proxy hanya per-app dan biasanya tidak enkripsi",
          "VPN gratis, proxy berbayar",
          "Tidak ada perbedaan"
        ],
        answer: 1,
        explanation: "VPN mengenkripsi semua traffic di level sistem (Layer 3) dan tunnel. Proxy biasanya per-aplikasi (browser) dan tidak mengenkripsi (kecuali HTTPS)."
      },
      {
        question: "Protokol VPN manakah yang TIDAK boleh dipakai karena sudah tidak aman?",
        options: [
          "WireGuard",
          "OpenVPN",
          "PPTP",
          "IPsec/IKEv2"
        ],
        answer: 2,
        explanation: "PPTP punya banyak celah kriptografi (MS-CHAPv2 bisa di-crack). WireGuard, OpenVPN, dan IPsec/IKEv2 masih aman dipakai."
      },
      {
        question: "Apa peran reverse proxy seperti Nginx di depan aplikasi web?",
        options: [
          "Mengenkripsi traffic client",
          "Mewakili server: load balancing, TLS termination, rate limiting, WAF",
          "Menyembunyikan IP client",
          "Menggantikan firewall"
        ],
        answer: 1,
        explanation: "Reverse proxy mewakili server: menerima request publik, distribusikan ke backend, terminasi TLS, batasi rate, dan bisa tempel WAF. Berbeda dari forward proxy yang mewakili client."
      }
    ]
  },
  {
    level: 2,
    order: 9,
    title: "Project: Network Analysis",
    slug: "project-network-analysis",
    description: "Proyek akhir Level 2: lakukan network reconnaissance lengkap pada lab target dan buat laporan.",
    icon: "📊",
    isProject: true,
    content: `# Project: Network Analysis

Saatnya menggabungkan semua yang telah dipelajari di Level 2 untuk melakukan **network reconnaissance** dan analisis lengkap terhadap sebuah lab target, layaknya pentester junior pertama kali mendapat engagement.

## Tujuan Proyek

Setelah menyelesaikan proyek ini, kamu mampu:

1. Melakukan **host discovery** di subnet target
2. **Port scanning** dan service detection dengan nmap
3. **Capture traffic** dan analisis dengan Wireshark
4. **Identifikasi ancaman** dari hasil analisis
5. Membuat **laporan profesional** dengan rekomendasi hardening

## Persiapan Lab

\`\`\`text
1. Kali Linux VM (attacker)   IP: 192.168.56.5
2. Metasploitable 2 VM (target) IP: 192.168.56.102
3. DVWA di Docker (target)      IP: 192.168.56.103
4. Jaringan: VirtualBox NAT Network 192.168.56.0/24
\`\`\`

Pastikan semua VM bisa saling ping sebelum mulai.

## Tahap 1 — Host Discovery

\`\`\`bash
# Scan seluruh subnet untuk temukan host aktif
sudo nmap -sn 192.168.56.0/24 -oN hosts.txt

# Atau pakai arp-scan (lebih cepat di LAN)
sudo arp-scan --localnet
\`\`\`

**Deliverable**: daftar IP aktif dengan MAC address dan vendor.

## Tahap 2 — Port Scan Detail

\`\`\`bash
# Full port scan + service version + OS detection + default scripts
nmap -p- -sV -O -sC -T4 -oA fullscan 192.168.56.102

# Simpan dalam 3 format sekaligus (normal, XML, grepable)
\`\`\`

**Deliverable**: tabel port → service → versi → OS yang terdeteksi.

Contoh hasil yang diharapkan:

\`\`\`text
PORT     STATE SERVICE  VERSION
21/tcp   open  ftp      vsftpd 2.3.4
22/tcp   open  ssh      OpenSSH 4.7p1
23/tcp   open  telnet   Linux telnetd
25/tcp   open  smtp     Postfix smtpd
53/tcp   open  domain   ISC BIND 9.4.2
80/tcp   open  http     Apache 2.2.8
445/tcp  open  netbios  Samba smbd
1524/tcp open  bindshell Metasploitable root shell
3306/tcp open  mysql    MySQL 5.0.51a
5432/tcp open  postgres PostgreSQL 8.3.0
\`\`\`

## Tahap 3 — Vulnerability Identification

\`\`\`bash
# Pakai NSE script vuln untuk identifikasi cepat
nmap --script vuln 192.168.56.102 -oN vulnscan.txt

# Cek CVE spesifik dari service yang ditemukan
searchsploit vsftpd 2.3.4
searchsploit samba 3.0
\`\`\`

**Deliverable**: tabel service → CVE → severity → apakah ada exploit publik.

## Tahap 4 — Traffic Capture & Analysis

\`\`\`bash
# Mulai capture sambil berinteraksi dengan target
sudo tshark -i eth0 -w project.pcap &

# Lakukan aktivitas:
curl http://192.168.56.102/
curl -d "username=admin&password=admin" http://192.168.56.102/login.php
telnet 192.168.56.102 23  # coba default cred

# Stop capture
sudo pkill tshark
\`\`\`

Lalu analisis:

\`\`\`bash
# Lihat protocol hierarchy
tshark -r project.pcap -q -z io,phs

# Lihat konversation teratas
tshark -r project.pcap -q -z conv,tcp

# Cari password plaintext yang terkirim
tshark -r project.pcap -Y 'http.request.method == "POST"' \\
  -T fields -e http.file_data | sort -u
\`\`\`

**Deliverable**: ringkasan traffic per protokol + bukti password plaintext (jika ada).

## Tahap 5 — Anomali Detection

Cari pola mencurigakan di capture:

\`\`\`text
- Apakah ada SYN scan? (banyak SYN tanpa ACK dari 1 IP)
- Apakah ada brute force SSH? (banyak failed login di /var/log/auth.log target)
- Apakah ada DNS tunneling? (query sangat panjang/aneh)
- Apakah ada cleartext protocol sensitif? (FTP, Telnet, HTTP login)
\`\`\`

## Tahap 6 — Laporan Akhir

Susun laporan Markdown dengan struktur:

\`\`\`markdown
# Network Analysis Report

## 1. Ringkasan Eksekutif
- Target: 192.168.56.0/24
- Tanggal: [tanggal]
- Metode: nmap, tshark, manual analysis

## 2. Inventaris Aset
| IP | MAC | OS | Open Ports |

## 3. Temuan Kerentanan
| Port | Service | Version | CVE | Severity |

## 4. Bukti Traffic
- Screenshot Wireshark
- Filter yang dipakai
- PoC password plaintext

## 5. Rekomendasi Hardening
1. Update vsftpd 2.3.4 (backdoor CVE-2011-2523)
2. Matikan Telnet (pakai SSH)
3. Pakai HTTPS untuk DVWA
4. Default deny firewall
5. ...

## 6. Kesimpulan
\`\`\`

## Kriteria Self-Assessment

Cek kemampuanmu:

- [ ] Berhasil menemukan minimal 5 host aktif
- [ ] Mendeteksi minimal 10 port terbuka
- [ ] Mengidentifikasi minimal 3 kerentanan dengan CVE
- [ ] Capture minimal 1000 packet dan analisis protokol
- [ ] Menemukan minimal 1 contoh data sensitif di plaintext
- [ ] Laporan lengkap dengan screenshot bukti
- [ ] Minimal 5 rekomendasi hardening yang actionable

## Konsep yang Diuji

Proyek ini menggabungkan:

- **OSI & TCP/IP** — memahami di lapisan apa packet bergerak
- **DNS & HTTP** — analisis request/response web
- **Port & Services** — kenali service dari nomor port
- **Wireshark** — display filter, follow stream, statistics
- **Firewall & IDS** — usul aturan pencegahan
- **VPN & Proxy** — usul arsitektur aman

## Tantangan Tambahan (Opsional)

1. **Coba exploit** satu celah dengan Metasploit (di lab pribadi!) — misalnya \`vsftpd 2.3.4 backdoor\`
2. **Setup Suricata** di Kali dan ulangi scan, lihat apakah terdeteksi
3. **Buat aturan firewall** ufw untuk blok port berbahaya yang ditemukan
4. **Visualisasikan** hasil scan dengan \` Legion\` atau \`Maltego\`

> Catatan etika: Semua aktivitas HANYA di lab pribadi yang kamu miliki. Jangan pernah scan jaringan orang lain tanpa izin tertulis.`,
    quiz: [
      {
        question: "Urutan tahapan network analysis yang paling logis?",
        options: [
          "Laporan → Scan → Discovery → Capture",
          "Host discovery → Port scan → Vuln ID → Capture → Laporan",
          "Capture → Laporan → Discovery → Scan",
          "Vuln ID → Discovery → Laporan → Scan"
        ],
        answer: 1,
        explanation: "Mulai dari luas ke sempit: temukan host dulu, lalu scan port tiap host, identifikasi kerentanan, capture untuk bukti, terakhir buat laporan."
      },
      {
        question: "Pada nmap, flag apa yang menyimpan output dalam 3 format sekaligus (normal, XML, grepable)?",
        options: [
          "-oN",
          "-oX",
          "-oG",
          "-oA"
        ],
        answer: 3,
        explanation: "Flag \`-oA basename\` menyimpan output dalam 3 format: .nmap (normal), .xml (XML), .gnmap (grepable). Praktis untuk analisis lanjutan."
      },
      {
        question: "Apa yang harus ada di bagian Rekomendasi Hardening laporan pentest?",
        options: [
          "Daftar tools yang dipakai",
          "Langkah konkret perbaikan tiap temuan, prioritas, dan referensi CVE",
          "Biaya proyek",
          "Skor mahasiswa"
        ],
        answer: 1,
        explanation: "Rekomendasi harus actionable: untuk tiap temuan, berikan langkah konkret (update versi X, matikan port Y, ganti protocol Z), dengan prioritas dan referensi CVE/patch."
      }
    ]
  },

  // ============================================
  // LEVEL 3 - KRIPTOGRAFI
  // ============================================
  {
    level: 3,
    order: 1,
    title: "Pengenalan Kriptografi",
    slug: "pengenalan-kriptografi",
    description: "Sejarah, konsep dasar, dan terminologi kriptografi: plaintext, ciphertext, key, algoritma.",
    icon: "🔐",
    isProject: false,
    content: `# Pengenalan Kriptografi

**Kriptografi** adalah ilmu dan seni mengamankan informasi dengan mengubahnya menjadi bentuk yang tidak bisa dibaca tanpa kunci. Kriptografi sudah dipakai sejak zaman Romawi dan masih jadi fondasi keamanan digital.

## Sejarah Singkat

\`\`\`text
~50 SM  → Caesar Cipher (substitusi alfabet, geser 3)
800 M   → Al-Kindi menemukan frequency analysis (broke Caesar)
1586    → Vigenère Cipher (polialfabetis, "le chiffre indéchiffrable")
1854    → Playfair Cipher (substitusi digram)
WWII    → Enigma (Jerman) dikalahkan Alan Turing di Bletchley Park
1949    → Shannon: "Communication Theory of Secrecy Systems"
1976    → Diffie-Hellman key exchange (revolusi public-key)
1977    → RSA algoritma & DES standar
2001    → AES menggantikan DES
\`\`\`

## Terminologi Dasar

\`\`\`text
Plaintext  → pesan asli yang bisa dibaca ("HALO DUNIA")
Ciphertext → pesan terenkripsi ("KDOC GRQLD")
Key (Kunci)→ rahasia untuk enkripsi/dekripsi
Cipher     → algoritma enkripsi
Encrypt    → proses plaintext → ciphertext
Decrypt    → proses ciphertext → plaintext
Cryptanalysis → upaya memecahkan tanpa key
Kerckhoffs's Principle → keamanan ada pada key, bukan algoritma
\`\`\`

## Prinsip Kerckhoffs

> Sistem kriptografi harus tetap aman meskipun semua detail algoritmanya publik. Keamanan hanya bergantung pada kerahasiaan **key**.

Inilah mengapa AES, RSA, SHA — semua algoritma publik. Tidak ada "security by obscurity" yang baik.

## Caesar Cipher — Contoh Klasik

Geser tiap huruf 3 posisi:

\`\`\`text
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
↓
D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

HELLO → KHOOR
\`\`\`

Implementasi Python:

\`\`\`python
def caesar_encrypt(text, shift):
    result = ""
    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            result += chr((ord(char) - base + shift) % 26 + base)
        else:
            result += char
    return result

def caesar_decrypt(text, shift):
    return caesar_encrypt(text, -shift)

cipher = caesar_encrypt("HELLO WORLD", 3)
print(cipher)              # KHOOR ZRUOG
print(caesar_decrypt(cipher, 3))  # HELLO WORLD
\`\`\`

Caesar cipher sangat lemah — hanya 26 kemungkinan key, bisa di-brute force dalam milidetik.

## Tipe Modern Kriptografi

\`\`\`text
1. Symmetric   → 1 key untuk encrypt & decrypt (AES, DES)
2. Asymmetric  → pasangan key public & private (RSA, ECC)
3. Hash        → satu arah, tidak bisa didekripsi (SHA-256)
4. Digital Sig → tanda tangan dengan asymmetric + hash
5. Key Exchange→ tukar key aman via channel publik (Diffie-Hellman)
\`\`\`

## Aplikasi Kriptografi di Dunia Nyata

\`\`\`text
HTTPS/TLS        → enkripsi web browsing
SSH              → remote shell aman
VPN              → tunnel terenkripsi
Email PGP/S-MIME → enkripsi email
Signal/WhatsApp  → end-to-end chat encryption
Blockchain       → hash transaksi + signature
Password storage → hash (bcrypt, argon2)
Digital cert     → identitas situs via PKI
\`\`\`

## Aturan Emas

\`\`\`text
1. Jangan pernah buat algoritma kriptografi sendiri untuk produksi
2. Pakai library yang sudah teruji (OpenSSL, libsodium, BouncyCastle)
3. Jangan hardcode key di source code
4. Key management > algoritma kuat (key bocor = game over)
5. Selalu pakai mode operasi yang aman (GCM, CBC-MAC) bukan ECB
6. IV/nonce harus unik dan acak, JANGAN reuse
\`\`\`

## Layer of Cryptography

\`\`\`text
Mathematics → Number theory, finite fields, elliptic curves
Algorithms  → AES, RSA, SHA-256, ECDH
Protocols   → TLS, SSH, IPsec, Signal protocol
Applications→ Browser, VPN, banking, messaging
\`\`\`

## Cryptanalysis (Serangan Kriptografi)

\`\`\`text
Brute force      → coba semua key
Frequency analysis → analisis pola huruf (untuk klasik)
Known-plaintext  → punya plaintext & ciphertext-nya
Chosen-plaintext → bisa pilih plaintext untuk di-encrypt
Side-channel     → ukur power/time/EM untuk tebak key
Quantum          → Shor's algorithm mengancam RSA & ECC
\`\`\`

Inilah mengapa kita perlu **post-quantum cryptography** — algoritma yang tahan serangan komputer kuantum.

## Yang Akan Dipelajari di Level Ini

Level 3 akan membahas secara mendalam:

1. **Symmetric encryption** (AES, mode operasi)
2. **Asymmetric encryption** (RSA, ECC, key exchange)
3. **Hash function** (SHA, MD5, collision)
4. **Digital signature** (RSA sig, DSA, ECDSA)
5. **PKI & certificate** (CA, X.509, TLS)
6. **Password security** (salt, bcrypt, argon2)
7. **Steganography** (sembunyikan data di media)
8. **Project: encrypt/decrypt tool**`,
    quiz: [
      {
        question: "Apa yang dimaksud dengan Kerckhoffs's Principle?",
        options: [
          "Algoritma kriptografi harus dirahasiakan",
          "Sistem tetap aman meski algoritma publik, keamanan ada pada key",
          "Key harus sependek mungkin",
          "Setiap sistem harus pakai algoritma sendiri"
        ],
        answer: 1,
        explanation: "Kerckhoffs's Principle: keamanan sistem kriptografi hanya bergantung pada kerahasiaan key, bukan algoritma. Inilah dasar kriptografi modern — algoritma publik, key rahasia."
      },
      {
        question: "Mengapa Caesar Cipher tidak aman?",
        options: [
          "Karena menggunakan huruf alfabet",
          "Hanya 26 kemungkinan key, mudah di-brute force",
          "Karena sudah sangat lama",
          "Karena tidak bisa di-decrypt"
        ],
        answer: 1,
        explanation: "Caesar Cipher hanya punya 26 kemungkinan shift (0-25), sehingga brute force dalam milidetik. Frequency analysis juga langsung memecahkannya."
      },
      {
        question: "Manakah yang BUKAN tipe kriptografi modern?",
        options: [
          "Symmetric encryption",
          "Asymmetric encryption",
          "Hash function",
          "Caesar encryption"
        ],
        answer: 3,
        explanation: "Caesar Cipher adalah kriptografi klasik, bukan modern. Symmetric (AES), Asymmetric (RSA), dan Hash (SHA-256) adalah kriptografi modern."
      }
    ]
  },
  {
    level: 3,
    order: 2,
    title: "Symmetric Encryption",
    slug: "symmetric-encryption",
    description: "Kriptografi simetris: AES, mode operasi (ECB/CBC/GCM), dan implementasi praktis.",
    icon: "🔑",
    isProject: false,
    content: `# Symmetric Encryption

**Symmetric encryption** menggunakan **satu key yang sama** untuk enkripsi dan dekripsi. Inilah tipe kriptografi paling cepat dan paling banyak dipakai untuk enkripsi data dalam jumlah besar.

## Karakteristik

\`\`\`text
Kecepatan    : Cepat (10-100x lebih cepat dari asymmetric)
Key          : Sama untuk encrypt & decrypt (shared secret)
Distribusi   : Sulit — harus kirim key via channel aman
Use case     : Enkripsi file, disk, database, traffic TLS (setelah handshake)
\`\`\`

## Algoritma Symmetric Populer

\`\`\`text
AES-128/192/256 → Standar sejak 2001, sangat aman, paling umum
ChaCha20        → Stream cipher, cepat di mobile (no AES-NI)
3DES            → Lama, sudah deprecated (2024 discontinue)
DES             → 56-bit, TIDAK AMAN, jangan pakai
Blowfish        → 64-bit block, sudah tua
Twofish         → Finalis AES, masih aman
\`\`\`

## Block Cipher vs Stream Cipher

\`\`\`text
Block Cipher → enkripsi per blok (AES: 128-bit/block)
              butuh "mode operasi" untuk data > 1 blok

Stream Cipher → enkripsi per byte/bit, XOR dengan keystream
               (ChaCha20, RC4 [deprecated])
\`\`\`

## Mode Operasi AES

Mode menentukan cara blok-blok dirangkai. **Pilih mode yang AMAN**:

\`\`\`text
ECB  → JANGAN PAKAI! Pattern plaintext kelihatan di ciphertext
CBC  → OK dengan IV acak, tapi tidak ada integritas
CTR  → OK, parallelisable, tapi hati-hati nonce reuse
GCM  → REKOMENDASI! Enkripsi + otentikasi (AEAD)
CCM  → OK, dipakai di wireless (WPA2)
\`\`\`

## Bahaya ECB Mode

ECB mengenkripsi tiap blok identik → hasilnya identik. Pattern gambar tetap kelihatan:

\`\`\`text
Plaintext  (gambar penguin):  ▓▓▓▒▒▒▓▓▓
                            ▓▓▒▒░░▒▒▓▓
                            ▓▒▒░█░░▒▓

Ciphertext ECB:              ◆◆◆◇◇◇◆◆◆
                            ◆◆◇◇○○◇◇◆◆
                            ◆◇◇○■○○◇◆   ← pattern penguin masih kelihatan!
\`\`\`

## Implementasi AES-GCM dengan Python (cryptography)

\`\`\`python
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
import os

# Generate key (256-bit) dan nonce (96-bit)
key = AESGCM.generate_key(bit_length=256)
nonce = os.urandom(12)
aesgcm = AESGCM(key)

# Encrypt
plaintext = b"Halo, ini pesan rahasia dari Andi"
ciphertext = aesgcm.encrypt(nonce, plaintext, associated_data=None)
print("Ciphertext (hex):", ciphertext.hex())

# Decrypt
decrypted = aesgcm.decrypt(nonce, ciphertext, associated_data=None)
print("Decrypted:", decrypted.decode())
\`\`\`

GCM memberikan **enkripsi + otentikasi (AEAD)** — jika ciphertext dimodifikasi, decrypt akan error. Ini penting untuk mencegah tampering.

## Implementasi AES-CBC dengan OpenSSL CLI

\`\`\`bash
# Generate key & IV
KEY=$(openssl rand -hex 32)   # 256-bit
IV=$(openssl rand -hex 16)    # 128-bit

# Encrypt file
echo "Pesan rahasia" > pesan.txt
openssl enc -aes-256-cbc -K "$KEY" -iv "$IV" \\
  -in pesan.txt -out pesan.enc

# Decrypt
openssl enc -d -aes-256-cbc -K "$KEY" -iv "$IV" \\
  -in pesan.enc -out pesan.dec
cat pesan.dec

# Lihat hasil hexdump
xxd pesan.enc
\`\`\`

## Permasalahan Distribusi Key

Karena sender & receiver butuh key yang sama, bagaimana cara mengirim key tanpa disadap?

\`\`\`text
Solusi:
1. Asymmetric encryption untuk kirim symmetric key (hybrid encryption)
   → TLS pakai cara ini: RSA/ECDH tukar key, lalu AES untuk data

2. Diffie-Hellman Key Exchange
   → Dua pihak setuju shared secret tanpa pernah kirim via channel

3. Pre-shared key (PSK)
   → VPN WireGuard pakai ini; tapi butuh pertemuan fisik/secure channel

4. Key Derivation Function (KDF)
   → Password → key (PBKDF2, scrypt, argon2)
\`\`\`

## Aturan Penting

\`\`\`text
1. IV/nonce HARUS unik per key. Reuse = catastrophic failure (CTR/GCM)
2. Jangan pakai ECB kecuali untuk enkripsi 1 block saja
3. Pakai AEAD (GCM, ChaCha20-Poly1305) supaya ada integritas
4. Jangan reuse key untuk banyak session
5. Rotate key secara berkala
6. Key storage: HSM/KMS, bukan file plaintext
\`\`\`

## Brute Force Estimasi Waktu

\`\`\`text
Key size | Kombinasi       | Estimasi brute force (10^18 ops/detik)
---------|-----------------|----------------------------------------
56-bit   | 7.2 × 10^16     | beberapa menit (DES)
128-bit  | 3.4 × 10^38     | ~10 miliar tahun
192-bit  | 6.3 × 10^57     | tidak feasible
256-bit  | 1.2 × 10^77     | tidak feasible (lebih banyak dari atom di alam semesta)
\`\`\`

AES-256 aman bahkan dari komputer kuantum (Grover hanya mengurangi efektif ke 128-bit).

## Stream Cipher: ChaCha20-Poly1305

Alternatif AES untuk perangkat tanpa AES-NI (mobile lama, IoT):

\`\`\`python
from cryptography.hazmat.primitives.ciphers.aead import ChaCha20Poly1305
import os

key = ChaCha20Poly1305.generate_key()
nonce = os.urandom(12)
cipher = ChaCha20Poly1305(key)

ct = cipher.encrypt(nonce, b"pesan rahasia", None)
pt = cipher.decrypt(nonce, ct, None)
\`\`\`

## Use Case Modern

- **HTTPS/TLS** → AES-GCM atau ChaCha20-Poly1305 untuk session
- **Disk encryption** → AES-XTS (BitLocker, LUKS, FileVault)
- **Database** → AES-GCM per cell/row
- **Messaging** → Signal Protocol: AES-CBC + HMAC (sebelum Double Ratchet)
- **VPN** → WireGuard pakai ChaCha20Poly1305

## Yang Harus Diingat

> "Don't roll your own crypto." Pakai library standar: \`cryptography\` (Python), \`libsodium\`, \`BouncyCastle\` (Java), \`ring\` (Rust).`,
    quiz: [
      {
        question: "Mengapa mode ECB tidak boleh dipakai untuk enkripsi data lebih dari 1 blok?",
        options: [
          "Karena ECB lambat",
          "Karena blok plaintext identik menghasilkan ciphertext identik, pattern kelihatan",
          "Karena ECB butuh key lebih panjang",
          "Karena ECB hanya untuk stream cipher"
        ],
        answer: 1,
        explanation: "ECB mengenkripsi tiap blok independen. Blok plaintext yang sama → ciphertext yang sama, sehingga pattern (misal gambar) masih kelihatan di ciphertext. Pakai CBC/CTR/GCM."
      },
      {
        question: "Mode AES yang direkomendasikan karena memberikan enkripsi + otentikasi (AEAD)?",
        options: [
          "ECB",
          "CBC",
          "GCM",
          "CTR"
        ],
        answer: 2,
        explanation: "GCM (Galois/Counter Mode) adalah AEAD — selain enkripsi, juga otentikasi ciphertext. Jika ciphertext diubah, dekripsi gagal. Mencegah tampering."
      },
      {
        question: "Masalah utama distribusi key pada symmetric encryption?",
        options: [
          "Key terlalu pendek",
          "Key yang sama untuk encrypt/decrypt harus dikirim via channel aman",
          "Algoritma terlalu lambat",
          "Key harus di-update setiap detik"
        ],
        answer: 1,
        explanation: "Karena sender & receiver pakai key yang sama, key harus dibagikan via channel aman — inilah masalah distribusi key. Dipecahkan dengan asymmetric crypto (hybrid) atau Diffie-Hellman."
      }
    ]
  },
  {
    level: 3,
    order: 3,
    title: "Asymmetric Encryption",
    slug: "asymmetric-encryption",
    description: "Kriptografi asimetris: RSA, ECC, Diffie-Hellman key exchange, dan konsep public/private key.",
    icon: "🗝️",
    isProject: false,
    content: `# Asymmetric Encryption

**Asymmetric encryption** (public-key cryptography) menggunakan **sepasang key**: **public key** untuk enkripsi, **private key** untuk dekripsi. Inilah revolusi terbesar dalam kriptografi modern.

## Konsep Dasar

\`\`\`text
Public Key  → dibagikan ke siapa pun (untuk encrypt / verify signature)
Private Key → RAHASIA, hanya pemilik (untuk decrypt / sign)

Sifat matematis:
  - Tidak bisa derive private key dari public key (komputasi sangat mahal)
  - Apa yang di-encrypt dengan public key, hanya private key yang bisa decrypt
\`\`\`

## Manfaat utama

1. **Tidak perlu kirim shared secret** — solved key distribution problem
2. **Digital signature** — bukti otentik & non-repudiation
3. **Key exchange aman** — Diffie-Hellman

## Algoritma Asymmetric Populer

\`\`\`text
RSA        → Faktorisasi bilangan besar (2048/4096-bit)
ECC        → Elliptic Curve (256-bit ≈ RSA 3072-bit, lebih ringkas)
DH/DHE     → Diffie-Hellman key exchange
ECDH       → Versi ECC dari Diffie-Hellman
DSA/ECDSA  → Untuk signature (bukan encryption)
EdDSA/Ed25519 → Modern signature, sangat cepat & aman
\`\`\`

## RSA — Contoh Konseptual

\`\`\`text
1. Pilih 2 prime besar p, q (mis. 1024-bit each)
2. n = p × q          (modulus)
3. φ(n) = (p-1)(q-1)
4. Pilih e (umumnya 65537) → public exponent
5. d = e^(-1) mod φ(n) → private exponent

Public key  = (n, e)
Private key = (n, d)

Encrypt: c = m^e mod n
Decrypt: m = c^d mod n
\`\`\`

Keamanan RSA bergantung pada kesulitan **faktorisasi** n menjadi p dan q. Dengan n 2048-bit, faktorisasi belum feasible secara komersial.

## Implementasi RSA dengan Python

\`\`\`python
from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import hashes

# Generate keypair (4096-bit untuk produksi)
private_key = rsa.generate_private_key(public_exponent=65537, key_size=2048)
public_key = private_key.public_key()

# Encrypt dengan public key
pesan = b"Ini pesan rahasia untuk pemilik private key"
ciphertext = public_key.encrypt(
    pesan,
    padding.OAEP(
        mgf=padding.MGF1(algorithm=hashes.SHA256()),
        algorithm=hashes.SHA256(),
        label=None
    )
)
print("Ciphertext (hex):", ciphertext.hex()[:40], "...")

# Decrypt dengan private key
plaintext = private_key.decrypt(
    ciphertext,
    padding.OAEP(
        mgf=padding.MGF1(algorithm=hashes.SHA256()),
        algorithm=hashes.SHA256(),
        label=None
    )
)
print("Decrypted:", plaintext.decode())
\`\`\`

## Diffie-Hellman Key Exchange

Dua pihak bisa setuju shared secret **tanpa pernah mengirimnya**:

\`\`\`text
Alice & Bob setuju: prime p, generator g (publik)

Alice: pilih a (rahasia), kirim A = g^a mod p
Bob:   pilih b (rahasia), kirim B = g^b mod p

Alice hitung: s = B^a mod p
Bob   hitung: s = A^b mod p

Keduanya dapat s yang sama! s = g^(ab) mod p
Eavesdropper tahu A, B, g, p — tapi tidak bisa hitung a atau b (discrete log problem).
\`\`\`

## ECC (Elliptic Curve Cryptography)

ECC memberikan keamanan sama dengan key yang jauh lebih kecil:

\`\`\`text
Symmetric | RSA        | ECC
80-bit    | 1024-bit   | 160-bit
128-bit   | 3072-bit   | 256-bit
256-bit   | 15360-bit  | 512-bit
\`\`\`

ECC cocok untuk perangkat dengan resource terbatas (IoT, mobile, smart card). Kurva populer: \`secp256k1\` (Bitcoin), \`Curve25519\` (Signal, SSH).

## Hybrid Encryption (Yang Dipakai TLS)

Karena symmetric cepat tapi susah distribusi key, dan asymmetric lambat tapi selesaikan distribusi → gabungkan keduanya:

\`\`\`text
1. Client & server lakukan TLS handshake (asymmetric / ECDH)
2. Hasilnya: shared secret → turunkan symmetric key (AES-256)
3. Semua data selanjutnya di-encrypt dengan symmetric key
4. Asymmetric hanya untuk handshake (< 1 detik)
\`\`\`

Inilah yang dipakai HTTPS setiap kali kamu buka web.

## Generasi Key Pair dengan OpenSSL

\`\`\`bash
# Generate RSA private key 2048-bit
openssl genrsa -out private.pem 2048

# Extract public key
openssl rsa -in private.pem -pubout -out public.pem

# Lihat detail private key
openssl rsa -in private.pem -text -noout | head -20

# Generate ECDSA key (curve prime256v1)
openssl ecparam -name prime256v1 -genkey -noout -out ec-private.pem

# Generate Ed25519 key
openssl genpkey -algorithm Ed25519 -out ed25519.pem
\`\`\`

## Use Case Asymmetric

\`\`\`text
HTTPS/TLS handshake → ECDHE-RSA untuk key exchange + signature
SSH                 → RSA/Ed25519 untuk autentikasi server & user
PGP/GPG email       → RSA/ECC untuk encrypt & sign email
Git commit signing  → Ed25519 atau RSA
Code signing        → Microsoft Authenticode, Apple codesign
SSL/TLS certificate → RSA/ECDSA untuk sign cert oleh CA
Crypto wallet       → secp256k1 (ECC) di Bitcoin/Ethereum
\`\`\`

## Ancaman Kuantum

Komputer kuantum dengan algoritma **Shor** bisa memecahkan:
- Faktorisasi (RSA) → cepat
- Discrete log (DH, ECC) → cepat

\`\`\`text
Status saat ini:
- RSA-2048 masih aman (komputer kuantum belum cukup besar)
- Tapi "harvest now, decrypt later" menjadi ancaman jangka panjang
- NIST sudah standardisasi algoritma post-quantum:
  - ML-KEM (Kyber) untuk key encapsulation
  - ML-DSA (Dilithium) untuk signature
- TLS 1.3 + post-quantum hybrid sudah diuji (Chrome, Cloudflare)
\`\`\`

## Aturan Penting

\`\`\`text
1. Private key JANGAN PERNAH dibagikan, bahkan ke admin
2. Pakai key size yang aman: RSA ≥ 2048 (≥ 4096 untuk jangka panjang)
3. Untuk ECC, pakai kurva standar (Curve25519, secp256r1)
4. Selalu pakai padding scheme yang aman (OAEP, PSS) — bukan "textbook RSA"
5. Rotate key secara berkala (rekomendasi 1-2 tahun untuk cert)
6. Revoke key yang dicurigai bocor (CRL, OCSP)
7. Untuk encryption > panjang block, pakai hybrid (asymmetric + symmetric)
\`\`\`

## RSA dalam Bash (Encrypt File Kecil)

\`\`\`bash
# Encrypt dengan public key (max ~245 byte untuk RSA-2048 OAEP-SHA256)
echo "Pesan rahasia pendek" | openssl pkeyutl -encrypt \\
  -pubin -inkey public.pem \\
  -pkeyopt rsa_padding_mode:oaep \\
  -pkeyopt rsa_oaep_md:sha256 \\
  -out pesan.enc

# Decrypt dengan private key
openssl pkeyutl -decrypt \\
  -inkey private.pem \\
  -pkeyopt rsa_padding_mode:oaep \\
  -pkeyopt rsa_oaep_md:sha256 \\
  -in pesan.enc
\`\`\``,
    quiz: [
      {
        question: "Pada asymmetric encryption, key mana yang dipakai untuk MENDEKRIPSI pesan?",
        options: [
          "Public key",
          "Private key",
          "Shared secret",
          "Session key"
        ],
        answer: 1,
        explanation: "Pesan yang di-encrypt dengan public key hanya bisa di-decrypt dengan private key yang sesuai. Inilah inti asymmetric crypto."
      },
      {
        question: "Apa keuntungan utama ECC dibandingkan RSA?",
        options: [
          "ECC lebih mudah dihitung manual",
          "ECC memberi keamanan setara dengan ukuran key jauh lebih kecil",
          "ECC tidak butuh key pair",
          "ECC tidak bisa dipecahkan komputer kuantum"
        ],
        answer: 1,
        explanation: "ECC-256 ≈ RSA-3072 dalam keamanan. Key lebih kecil = bandwidth & storage lebih efisien, cocok untuk mobile/IoT. ECC tetap rentan komputer kuantum (Shor)."
      },
      {
        question: "Apa masalah yang dipecahkan oleh Diffie-Hellman Key Exchange?",
        options: [
          "Enkripsi pesan panjang",
          "Tukar shared secret via channel publik tanpa pernah mengirimnya",
          "Signature dokumen",
          "Komputasi kuantum"
        ],
        answer: 1,
        explanation: "DH memungkinkan dua pihak setuju shared secret tanpa pernah mengirimnya melalui channel — eavesdropper yang dengarkan tidak bisa dapat secret tersebut."
      }
    ]
  },
  {
    level: 3,
    order: 4,
    title: "Hash Function",
    slug: "hash-function",
    description: "Hash function satu arah: MD5, SHA, collision resistance, dan aplikasi praktis.",
    icon: "#️⃣",
    isProject: false,
    content: `# Hash Function

**Hash function** adalah fungsi satu arah yang mengubah input apa saja menjadi **output dengan panjang tetap** (fingerprint). Hash bukan enkripsi — tidak bisa di-\"decrypt\".

## Properti Hash yang Baik

\`\`\`text
1. Deterministic  → input sama, output selalu sama
2. Fixed output   → panjang output tetap (mis. SHA-256 = 256 bit)
3. Fast           → komputasi cepat
4. One-way        → tidak bisa derive input dari output (preimage resistant)
5. Avalanche      → 1 bit berubah → output berubah total
6. Collision-free → susah cari 2 input yang sama output-nya
\`\`\`

## Algoritma Hash Populer

\`\`\`text
Algoritma   | Panjang (bit) | Status
------------|---------------|------------------
MD5         | 128           | BROKEN, jangan untuk security
SHA-1       | 160           | BROKEN (2017, SHAttered), deprecated
SHA-256     | 256           | AMAN, standar saat ini
SHA-512     | 512           | AMAN, untuk long-term
SHA-3       | 224/256/384/512| AMAN, struktur berbeda (sponge)
BLAKE2/3    | variable      | AMAN, sangat cepat
RIPEMD-160  | 160           | OK (dipakai Bitcoin address)
\`\`\`

## Contoh Hash dengan Python

\`\`\`python
import hashlib

# SHA-256
data1 = b"Halo Dunia"
data2 = b"Halo Dunia."   # hanya tambah titik

h1 = hashlib.sha256(data1).hexdigest()
h2 = hashlib.sha256(data2).hexdigest()

print(f"Hash 1: {h1}")
print(f"Hash 2: {h2}")
# Walaupun beda 1 karakter, hash berubah TOTAL
\`\`\`

Output:

\`\`\`text
Hash 1: 0a4d55a8d778e5022fab701977c5d840bbc486d0f28a8c8b9b19c6b8c8b1a3a8
Hash 2: 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08
\`\`\`

## Hash di CLI

\`\`\`bash
# Hash file dengan SHA-256
sha256sum file.txt
# Output: <hash>  file.txt

# MD5 (hanya untuk integritas non-security)
md5sum file.txt

# SHA-1
sha1sum file.txt

# Hash string
echo -n "password" | sha256sum
echo -n "password" | md5sum
\`\`\`

## Aplikasi Hash

\`\`\`text
1. Integrity check     → bandingkan hash file yang dikirim & diterima
2. Password storage    → simpan hash password, bukan plaintext
3. Digital signature   → sign hash dokumen, bukan dokumen langsung
4. Blockchain          → hash block sebelumnya di block berikutnya
5. Git commit          → SHA-1 dari tree + parent + author
6. File deduplication  → file dengan hash sama = file sama
7. Bloom filter        → struktur data probabilistik
8. HMAC                → keyed hash untuk otentikasi pesan
9. Proof-of-Work       → Bitcoin mining = cari nonce dengan hash < target
\`\`\`

## HMAC (Hash-based MAC)

\`\`\`python
import hmac, hashlib

key = b"secret-key-shared"
message = b"Transfer 1.000.000 ke rekening 12345"

# HMAC-SHA256
signature = hmac.new(key, message, hashlib.sha256).hexdigest()
print(f"HMAC: {signature}")

# Verifikasi di sisi penerima
expected = hmac.new(key, message, hashlib.sha256).hexdigest()
is_valid = hmac.compare_digest(signature, expected)
print(f"Valid: {is_valid}")
\`\`\`

HMAC dipakai untuk memastikan **pesan tidak dimodifikasi** dan **beneran dari pengirim yang punya key**. Dipakai di JWT (HMAC-SHA256), API signature (Stripe, AWS), IPsec.

## Password Hashing (Beda dengan Hash Biasa!)

Hash biasa (SHA-256) **TERLALU CEPAT** untuk password. Attacker bisa brute force miliaran password/detik dengan GPU. Untuk password, pakai **slow hash** dengan **salt**:

\`\`\`python
# JANGAN GINI:
import hashlib
password_hash = hashlib.sha256("password123".encode()).hexdigest()
# Attacker dengan rainbow table langsung tahu password-nya

# GINI:
import bcrypt
# bcrypt otomatis generate salt & include di hash
hashed = bcrypt.hashpw("password123".encode(), bcrypt.gensalt(rounds=12))
print(hashed)  # $2b$12$xxxxx...

# Verifikasi
is_valid = bcrypt.checkpw("password123".encode(), hashed)
print(f"Valid: {is_valid}")
\`\`\`

Algoritma password hashing yang direkomendasikan (lihat juga materi Password Security):
\`\`\`text
bcrypt       → populer, rounds 12+ (cost factor)
scrypt       → memory-hard
argon2id     → PINNED! Pemenang Password Hashing Competition 2015
PBKDF2       → fallback, iterasi 600.000+
\`\`\`

## Collision Attack

**Collision** = dua input berbeda menghasilkan hash sama.

\`\`\`text
MD5 collision (2004): dihasilkan dalam beberapa detik
  → MD5 tidak boleh untuk signature/cert

SHA-1 collision (2017, SHAttered):
  → 2 PDF berbeda, hash SHA-1 sama
  → Google bikin, butuh 6.500 tahun CPU

SHA-256 collision: belum ditemukan, secara teoretis 2^128 operasi
\`\`\`

## Birthday Paradox

Mengapa collision lebih mudah dari preimage?

\`\`\`text
Preimage attack  : cari input untuk hash tertentu → 2^n operasi
Birthday attack  : cari 2 input dengan hash sama → 2^(n/2) operasi

Untuk SHA-256:
  Preimage: 2^256 operasi (tidak feasible)
  Birthday: 2^128 operasi (masih sangat sulit)
\`\`\`

Inilah mengapa SHA-256 dianggap aman — bahkan serangan birthday pun tidak feasible.

## Hash untuk Integrity

\`\`\`bash
# Download ISO + cek hash dari server resmi
wget https://cdimage.kali.org/current/kali-linux.iso
wget https://cdimage.kali.org/current/SHA256SUMS

# Verifikasi
sha256sum -c SHA256SUMS 2>/dev/null | grep kali-linux.iso
# Output: kali-linux.iso: OK
\`\`\`

Jika hash cocok, file tidak dimodifikasi (mis. oleh MITM saat download). Inilah mengapa situs serius selalu publikasikan checksum.

## Aturan Penting

\`\`\`text
1. JANGAN pakai MD5 atau SHA-1 untuk tujuan security baru
2. Untuk integrity umum: SHA-256 atau SHA-3
3. Untuk password: argon2id / bcrypt / scrypt (BUKAN SHA-256 langsung)
4. Untuk HMAC: HMAC-SHA256 atau HMAC-SHA512
5. Untuk signature: pakai SHA-256+ dengan RSA-PSS atau ECDSA
6. Jangan bandingkan hash dengan == (timing attack); pakai hmac.compare_digest
\`\`\`

## Hash vs Encryption

\`\`\`text
Encryption → dua arah, bisa di-decrypt dengan key
Hash       → satu arah, TIDAK bisa di-reverse

Tujuan:
  Encryption = confidentiality (kerahasiaan)
  Hash       = integrity (integritas)
\`\`\``,
    quiz: [
      {
        question: "Apa perbedaan mendasar hash function dan encryption?",
        options: [
          "Hash lebih cepat dari encryption",
          "Hash satu arah (tidak bisa reverse), encryption dua arah (bisa decrypt dengan key)",
          "Hash punya key, encryption tidak",
          "Tidak ada perbedaan"
        ],
        answer: 1,
        explanation: "Hash bersifat satu arah — tidak bisa di-reverse. Encryption dua arah — bisa di-decrypt dengan key yang sesuai. Hash untuk integrity, encryption untuk confidentiality."
      },
      {
        question: "Mengapa MD5 dan SHA-1 tidak boleh dipakai untuk tujuan security?",
        options: [
          "Karena algoritmanya tertutup",
          "Karena sudah ditemukan collision attack (dua input berbeda, hash sama)",
          "Karena terlalu lambat",
          "Karena panjangnya tidak tetap"
        ],
        answer: 1,
        explanation: "MD5 collision bisa dibuat dalam detik, SHA-1 collision dibuktikan Google 2017 (SHAttered). Collision memungkinkan attacker buat dokumen palsu dengan hash sama — berbahaya untuk signature/cert."
      },
      {
        question: "Mengapa hash cepat seperti SHA-256 tidak ideal untuk penyimpanan password?",
        options: [
          "Karena SHA-256 sudah deprecated",
          "Karena attacker bisa brute force miliaran password/detik dengan GPU",
          "Karena SHA-256 menghasilkan output terlalu panjang",
          "Karena SHA-256 bisa di-decrypt"
        ],
        answer: 1,
        explanation: "SHA-256 dirancang cepat — bagus untuk integrity, tapi buruk untuk password karena attacker bisa brute force miliaran tebakan/detik. Gunakan slow hash + salt: bcrypt, scrypt, argon2."
      }
    ]
  },
  {
    level: 3,
    order: 5,
    title: "Digital Signature",
    slug: "digital-signature",
    description: "Tanda tangan digital: cara kerja, RSA/ECDSA signature, dan penerapan untuk otentikasi & non-repudiation.",
    icon: "✍️",
    isProject: false,
    content: `# Digital Signature

**Digital signature** adalah padanan kriptografis dari tanda tangan fisik. Ia memberikan tiga jaminan: **otentikasi**, **integritas**, dan **non-repudiation**.

## Konsep Dasar

Signature dibuat dengan **private key**, diverifikasi dengan **public key** — kebalikan dari enkripsi.

\`\`\`text
[Signer]
  1. Hash dokumen → digest
  2. Encrypt digest dengan PRIVATE key → signature
  3. Kirim: dokumen + signature

[Verifier]
  1. Hash dokumen yang diterima → digest1
  2. Decrypt signature dengan PUBLIC key → digest2
  3. Bandingkan: digest1 == digest2?
  4. Jika sama → signature valid (dokumen asli & tidak diubah)
\`\`\`

## Tiga Jaminan

\`\`\`text
Authentication → pembuktian pengirim adalah pemilik private key
Integrity     → dokumen tidak berubah sejak di-sign
Non-repudiation → signer tidak bisa menyangkal telah menandatangani
\`\`\`

## Algoritma Signature Populer

\`\`\`text
RSA-PSS       → signature RSA dengan padding probabilistik (rekomendasi)
RSA-PKCS1v15  → versi lama, masih dipakai tapi PSS lebih aman
DSA           → Digital Signature Algorithm (lama, deprecated)
ECDSA         → versi ECC dari DSA (secp256r1, secp256k1)
EdDSA/Ed25519 → modern, deterministik, cepat, REKOMENDASI
Schnorr       → dasar banyak algoritma modern (Taproot Bitcoin)
\`\`\`

## Implementasi dengan Python

\`\`\`python
from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import hashes, serialization

# Generate keypair
private_key = rsa.generate_private_key(public_exponent=65537, key_size=2048)
public_key = private_key.public_key()

# Dokumen yang akan di-sign
dokumen = b"Kontrak: Transfer 1.000.000 ke rekening 12345 pada 1 Jan 2025"

# Buat signature dengan PRIVATE key
signature = private_key.sign(
    dokumen,
    padding.PSS(
        mgf=padding.MGF1(hashes.SHA256()),
        salt_length=padding.PSS.MAX_LENGTH
    ),
    hashes.SHA256()
)
print(f"Signature (hex): {signature.hex()[:60]}...")

# Verifikasi dengan PUBLIC key
try:
    public_key.verify(
        signature,
        dokumen,
        padding.PSS(
            mgf=padding.MGF1(hashes.SHA256()),
            salt_length=padding.PSS.MAX_LENGTH
        ),
        hashes.SHA256()
    )
    print("✓ Signature VALID — dokumen asli & tidak diubah")
except Exception:
    print("✗ Signature TIDAK VALID")

# Coba verifikasi dokumen yang dimodifikasi
dokumen_palsu = b"Kontrak: Transfer 1.000.000.000 ke rekening 99999"
try:
    public_key.verify(
        signature,
        dokumen_palsu,
        padding.PSS(
            mgf=padding.MGF1(hashes.SHA256()),
            salt_length=padding.PSS.MAX_LENGTH
        ),
        hashes.SHA256()
    )
    print("✓ VALID")
except Exception:
    print("✗ Dokumen dimodifikasi — signature TIDAK valid")
\`\`\`

## Ed25519 — Signature Modern

\`\`\`python
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey

# Generate & sign
private_key = Ed25519PrivateKey.generate()
public_key = private_key.public_key()

dokumen = b"Dokumen penting"
signature = private_key.sign(dokumen)

# Verifikasi
try:
    public_key.verify(signature, dokumen)
    print("✓ Valid")
except Exception:
    print("✗ Invalid")
\`\`\`

Ed25519 lebih cepat, deterministik (signature sama untuk input sama), dan tidak punya masalah random nonce seperti ECDSA.

## Signature dengan OpenSSL CLI

\`\`\`bash
# Generate Ed25519 keypair
openssl genpkey -algorithm Ed25519 -out private.pem
openssl pkey -in private.pem -pubout -out public.pem

# Sign file
openssl pkeyutl -sign -inkey private.pem \\
  -rawin -in dokumen.txt -out sig.bin

# Verify
openssl pkeyutl -verify -pubin -inkey public.pem \\
  -rawin -in dokumen.txt -sigfile sig.bin

# Untuk RSA, sign hash SHA-256
openssl dgst -sha256 -sign private.pem -out sig.bin dokumen.txt
openssl dgst -sha256 -verify public.pem -signature sig.bin dokumen.txt
\`\`\`

## Aplikasi Digital Signature

\`\`\`text
HTTPS certificate → CA sign public key situs (X.509)
Email PGP/GPG     → sign email agar penerima tahu asli dari pengirim
Git commit        → sign commit dengan GPG/SSH key
Code signing      → sign executable (Microsoft Authenticode, Apple)
PDF document      → sign PDF dengan cert (Adobe, DocuSign)
Blockchain tx     → ECDSA sign transaksi (Bitcoin, Ethereum)
JWT (RS256)       → token otentikasi yang di-sign
Software update   → sign update package (apt, yum)
\`\`\`

## Verifikasi Cert TLS di Browser

Saat buka \`https://example.com\`:

\`\`\`text
1. Server kirim cert (public key + identitas + signature CA)
2. Browser cek signature dengan CA public key (sudah pre-install)
3. Jika valid → cert asli dari CA yang dipercaya
4. Browser pakai public key server untuk TLS handshake
5. Setelah handshake → komunikasi di-encrypt dengan symmetric key

Sertifikat = public key + metadata + signature CA
\`\`\`

## Difference: Sign vs Encrypt

\`\`\`text
Encryption → public key encrypt, private key decrypt
             tujuan: confidentiality

Signature  → private key sign, public key verify
             tujuan: authentication + integrity

Signcrypt  → gabung keduanya (sign dulu, lalu encrypt)
             tujuan: confidentiality + authentication + non-repudiation
\`\`\`

Pesan yang hanya di-encrypt TIDAK menjamin pengirim asli (siapa saja bisa encrypt dengan public key recipient). Pesan yang hanya di-sign TIDAK menjamin kerahasiaan (siapa saja bisa verify dan baca).

## Aturan Penting

\`\`\`text
1. Selalu hash dulu sebelum sign (jangan sign dokumen besar langsung)
2. Pakai padding scheme aman: PSS untuk RSA, bukan PKCS1v15
3. Untuk ECDSA, gunakan deterministic nonce (RFC 6979) atau pakai EdDSA
4. Pisahkan key untuk encrypt vs sign (jangan pakai key yang sama)
5. Verifikasi signature SEBELUM memproses pesan
6. Gunakan compare_digest untuk perbandingan (hindari timing attack)
7. Rotate signing key secara berkala
8. Revoke key yang dicurigai kompromi (CRL/OCSP)
\`\`\`

## Tanda Tangan di Dunia Nyata: PGP Email

\`\`\`bash
# Generate GPG key
gpg --gen-key

# Sign file
gpg --output doc.sig --sign doc.txt

# Verify & extract
gpg --output doc.txt --decrypt doc.sig

# Clearsign (signature di akhir dokumen terbaca)
gpg --clearsign doc.txt

# Export public key untuk dibagikan
gpg --armor --export user@email.com > public.asc

# Import public key orang lain
gpg --import public.asc
\`\`\`

## Verifikasi Signature dengan Timing-Safe Comparison

\`\`\`python
import hmac

# JANGAN gini (timing attack possible)
# if signature_received == signature_expected: ...

# Gini:
is_valid = hmac.compare_digest(signature_received, signature_expected)
\`\`\`

Perbandingan \`==\` bisa bocor informasi waktu eksekusi (string match berhenti saat mismatch pertama). \`compare_digest\` selalu scan penuh.`,
    quiz: [
      {
        question: "Pada digital signature, key mana yang dipakai untuk MENANDATANGANI dokumen?",
        options: [
          "Public key",
          "Private key",
          "Session key",
          "Symmetric key"
        ],
        answer: 1,
        explanation: "Signature dibuat dengan private key (hanya pemilik yang bisa), diverifikasi dengan public key (siapa saja bisa verifikasi). Kebalikan dari enkripsi asimetris."
      },
      {
        question: "Manfaat utama digital signature yang TIDAK dimiliki enkripsi biasa?",
        options: [
          "Confidentiality",
          "Non-repudiation (penanda tidak bisa menyangkal)",
          "Kecepatan",
          "Kompresi"
        ],
        answer: 1,
        explanation: "Non-repudiation: karena hanya private key pemilik yang bisa sign, pemilik tidak bisa menyangkal telah menandatangani. Enkripsi biasa tidak memberi ini."
      },
      {
        "question": "Mengapa dokumen harus di-hash dulu sebelum di-sign (bukan di-sign langsung)?",
        "options": [
          "Karena hash lebih aman dari signature",
          "Agar signature ukurannya kecil & algoritma signature bisa untuk dokumen berukuran berapa pun",
          "Karena hash lebih cepat",
          "Karena tanpa hash signature tidak valid"
        ],
        answer: 1,
        explanation: "Algoritma signature (RSA, ECDSA) dibatasi ukuran input (mis. RSA-2048 ≤ 245 byte). Hash dokumen jadi digest tetap (32 byte untuk SHA-256), lalu digest di-sign. Praktis & efisien."
      }
    ]
  },
  {
    level: 3,
    order: 6,
    title: "PKI & Certificate",
    slug: "pki-certificate",
    description: "Public Key Infrastructure: Certificate Authority, X.509, dan rantai kepercayaan TLS.",
    icon: "📜",
    isProject: false,
    content: `# PKI & Certificate

**PKI (Public Key Infrastructure)** adalah sistem yang mengelola pasangan key, sertifikat, dan otoritas kepercayaan agar komunikasi asimetris bisa dipakai massal. Tanpa PKI, tidak ada HTTPS seperti sekarang.

## Komponen PKI

\`\`\`text
CA (Certificate Authority) → terbitkan & sign sertifikat
RA (Registration Authority) → verifikasi identitas pemohon
VA (Validation Authority)  → cek status revoke (OCSP, CRL)
Subscriber   → pemilik cert (website, organisasi)
Relying Party → pihak yang percaya cert (browser, OS)
Certificate  → dokumen X.509 berisi public key + identitas + signature CA
\`\`\`

## Struktur Sertifikat X.509

\`\`\`text
Version              : v3
Serial Number        : 0x...
Signature Algorithm  : sha256WithRSAEncryption
Issuer               : CN=Let's Encrypt R3, O=Let's Encrypt, C=US
Validity
  Not Before         : 2025-01-01 00:00:00 UTC
  Not After          : 2025-04-01 00:00:00 UTC
Subject              : CN=example.com, O=Example Inc, C=ID
Subject Public Key   : RSA 2048-bit (atau ECDSA P-256)
Extension            : SAN (Subject Alternative Names) - example.com, www.example.com
Signature            : <signature CA pada field di atas>
\`\`\`

## Rantai Kepercayaan (Chain of Trust)

\`\`\`text
[Root CA]  ← pre-install di browser/OS
   │
   │ sign
   ↓
[Intermediate CA]
   │
   │ sign
   ↓
[Leaf Cert (website)]

Browser memverifikasi: leaf → intermediate → root (yang sudah dipercaya)
\`\`\`

Root CA disimpan offline (HSM) demi keamanan. Intermediate CA sehari-hari dipakai untuk sign leaf cert.

## Cara Browser Memverifikasi HTTPS Cert

\`\`\`text
1. Server kirim: leaf cert + intermediate cert(s)
2. Browser cek:
   a. Signature intermediate ditandatangani root CA (terpercaya)
   b. Signature leaf ditandatangani intermediate
   c. Subject / SAN cocok dengan hostname yang dikunjungi
   d. Tanggal sekarang dalam range validity
   e. Cert tidak di-revoke (CRL/OCSP)
3. Jika semua valid → ikon gembok hijau di browser
4. Jika gagal → warning "Connection not secure"
\`\`\`

## Inspeksi Sertifikat dengan OpenSSL

\`\`\`bash
# Lihat detail cert yang dipresentasikan server
openssl s_client -connect example.com:443 -showcerts </dev/null

# Download & decode cert
echo | openssl s_client -connect example.com:443 2>/dev/null \\
  | openssl x509 -text -noout | head -40

# Cek tanggal kedaluwarsa
echo | openssl s_client -connect example.com:443 2>/dev/null \\
  | openssl x509 -noout -dates

# Verifikasi rantai sertifikat
openssl verify -CAfile chain.pem cert.pem
\`\`\`

## Jenis Validasi Certificate

\`\`\`text
DV (Domain Validation)    → hanya bukti punya domain (email DNS)
                             umumnya gratis (Let's Encrypt)
OV (Organization Val.)    → CA verifikasi organisasi (lebih ketat)
EV (Extended Validation)  → verifikasi mendalam, dulu tampil nama di browser
                             sekarang banyak dihapus dari UI
\`\`\`

## Membuat Self-Signed Cert (untuk Lab)

\`\`\`bash
# Generate key + self-signed cert
openssl req -x509 -newkey rsa:2048 -nodes \\
  -keyout key.pem -out cert.pem -days 365 \\
  -subj "/C=ID/ST=Jakarta/L=Jakarta/O=MyLab/CN=localhost" \\
  -addext "subjectAltName=DNS:localhost,IP:127.0.0.1"

# Lihat detail
openssl x509 -in cert.pem -text -noout

# Pakai dengan nginx
# ssl_certificate cert.pem;
# ssl_certificate_key key.pem;
\`\`\`

Self-signed cert akan memunculkan warning di browser karena tidak ditandatangani CA yang dipercaya.

## Mendapatkan Cert Gratis dengan Let's Encrypt

\`\`\`bash
# Install certbot
sudo apt install -y certbot python3-certbot-nginx

# Dapatkan cert untuk domain (butuh DNS mengarah ke server)
sudo certbot --nginx -d example.com -d www.example.com

# Auto-renew (sudah ter-setup cron)
sudo systemctl status certbot.timer

# Renew manual test
sudo certbot renew --dry-run
\`\`\`

Let's Encrypt cert berlaku 90 hari — pendek untuk mendorong automasi renewal.

## CRL dan OCSP — Cek Status Revoke

\`\`\`text
CRL (Cert Revocation List)
  → CA publikasikan list cert yang di-revoke
  → file besar, lambat update

OCSP (Online Cert Status Protocol)
  → browser query real-time ke CA: "cert ini masih valid?"
  → cepat tapi privacy concern (CA tahu situs yang dikunjungi)

OCSP Stapling
  → server sertifikat menempel OCSP response sendiri
  → client tidak perlu query OCSP langsung
\`\`\`

## Alasan Revoke Sertifikat

\`\`\`text
1. Private key dicurigai bocor/compromised
2. Sertifikat dikeluarkan secara keliru (mis. untuk domain yang tidak dimiliki)
3. CA dilanggar (mis. DigiNotar 2011 — bangkrut)
4. Pemohon minta revoke (sebelum expiry)
\`\`\`

Kasus terkenal: **DigiNotar 2011** — hacker dapat issuing cert untuk *.google.com, *.yahoo.com, dll. Digunakan untuk MITM pada 300.000+ pengguna Iran. DigiNotar akhirnya bangkrut.

## Certificate Transparency (CT)

Untuk mencegah CA menerbitkan cert tanpa sepengetahuan pemilik domain, **CT Log** dipakai:

\`\`\`text
- Setiap cert yang diterbitkan HARUS dicatat di log publik
- Domain owner bisa monitor: apakah ada cert untuk domain saya yang tidak saya minta?
- Browser Chrome mewajibkan CT untuk semua cert sejak 2018

Cek: https://crt.sh/?q=example.com
\`\`\`

## Mutual TLS (mTLS)

TLS biasa: client verifikasi server. **mTLS**: server juga verifikasi client (client juga punya cert).

\`\`\`text
Use case mTLS:
  - Internal API service-to-service
  - Zero Trust network
  - Bank, fintech, enterprise
  - IoT device authentication
\`\`\`

Konfigurasi nginx mTLS:

\`\`\`nginx
server {
    listen 443 ssl;
    ssl_certificate     server.crt;
    ssl_certificate_key server.key;
    ssl_client_certificate ca.crt;
    ssl_verify_client on;
    ssl_verify_depth 2;
}
\`\`\`

## Best Practice

\`\`\`text
1. Pakai Let's Encrypt atau CA berbayar terpercaya (jangan self-signed di produksi)
2. RSA-2048 atau ECDSA P-256 (lebih hemat)
3. Aktifkan OCSP stapling
4. Auto-renew dengan cron/timer
5. Monitor CT log untuk domain kamu
6. Revoke segera jika private key bocor
7. HSTS header untuk paksa HTTPS
8. Disable TLS 1.0/1.1, gunakan TLS 1.2/1.3
9. Sertifikat wildcard (domain.com + *.domain.com) hati-hati — kalau bocor, semua subdomain
\`\`\``,
    quiz: [
      {
        "question": "Apa peran Certificate Authority (CA) dalam PKI?",
        "options": [
          "Menyimpan private key semua user",
          "Menerbitkan dan menandatangani sertifikat yang mengikat public key dengan identitas",
          "Mengenkripsi traffic HTTPS",
          "Memblokir situs berbahaya"
        ],
        answer: 1,
        explanation: "CA memverifikasi identitas pemohon, lalu menerbitkan sertifikat yang berisi public key pemohon beserta signature CA. Browser mempercayai cert karena mempercayai CA."
      },
      {
        "question": "Mengapa Let's Encrypt certificate berlaku hanya 90 hari (relatif pendek)?",
        "options": [
          "Karena Let's Encrypt tidak aman",
          "Untuk mendorong automasi renewal & membatasi dampak jika key bocor",
          "Karena CA gratis tidak boleh lama",
          "Karena standar X.509 membatasi 90 hari"
        ],
        answer: 1,
        explanation: "Masa pendek mendorong admin setup auto-renew (lebih sehat operationally) dan memperkecil window kerusakan jika cert/private key compromised. Standar X.509 sendiri mengizinkan masa berlaku apa pun."
      },
      {
        "question": "Apa fungsi Certificate Transparency (CT)?",
        "options": [
          "Enkripsi cert dengan transparan",
          "Log publik semua cert yang diterbitkan, sehingga domain owner bisa deteksi cert yang tidak dia minta",
          "Membuat cert gratis",
          "Mempercepat validasi TLS"
        ],
        answer: 1,
        explanation: "CT mengharuskan setiap cert yang diterbitkan dicatat di log publik yang dapat diaudit. Pemilik domain bisa cek (mis. crt.sh) apakah ada cert palsu untuk domainnya."
      }
    ]
  },
  {
    level: 3,
    order: 7,
    title: "Password Security",
    slug: "password-security",
    description: "Penyimpanan password yang aman: salt, slow hash (bcrypt/argon2), policy, dan serangan brute force.",
    icon: "👁️",
    isProject: false,
    content: `# Password Security

Password adalah bentuk autentikasi paling umum, dan paling banyak disalahgunakan. Memahami cara menyimpan & memproteksi password adalah keterampilan inti seorang developer maupun security engineer.

## Mengapa Password Tidak Boleh Disimpan Plain?

\`\`\`text
Risiko simpan plaintext:
- Database bocor → semua password terbuka
- Admin/insider bisa baca password user
- User yang pakai password sama di banyak situs → semua akun mereka jebol

Solusi: simpan HASH password, bukan password-nya
\`\`\`

## Masalah Hash Biasa

Hash cepat (SHA-256) sangat buruk untuk password karena:

\`\`\`text
GPU modern (RTX 4090) bisa ~ 6 miliar SHA-256/detik
Dictionary 10 juta password → di-hash semua dalam 0.002 detik
\`\`\`

## Rainbow Table

Pre-computed table hash untuk password umum. Attacker tinggal lookup, bukan compute.

\`\`\`text
password123 → ef92b739ba...
letmein     → 0f35993969...
admin       → 8c6976e5b5...

Bila database leak berisi hash tanpa salt:
  attacker lookup → dapat password asli dalam detik
\`\`\`

## Solusi: Salt

**Salt** adalah string acak yang ditambahkan ke password sebelum di-hash. Salt disimpan bersama hash (tidak perlu rahasia).

\`\`\`text
Hash( password + salt ) = stored_hash

Salt membuat:
  - Password sama → hash berbeda (tiap user punya salt unik)
  - Rainbow table tidak bisa dipakai (harus compute ulang per salt)
  - Brute force harus per-user (tidak bisa batch)
\`\`\`

## Slow Hash — Slow Down Attacker

Karena attacker brute force per guess, kita buat tiap hash lambat:

\`\`\`text
SHA-256     : ~ 6 miliar/detik di GPU
bcrypt(12)  : ~ 100/detik di GPU (60 juta kali lebih lambat!)
argon2id    : bahkan lebih lambat + memory-hard
\`\`\`

Algoritma password hashing yang direkomendasikan:

\`\`\`text
1. argon2id  → PINNED! Pemenang Password Hashing Competition 2015
              memory-hard, tahan GPU/ASIC
2. bcrypt    → populer, cost factor (10-12 minimal, 14+ lebih aman)
3. scrypt    → memory-hard, alternative argon2
4. PBKDF2    → fallback, iterasi 600.000+ (OWASP 2023)
\`\`\`

## Implementasi dengan Python (bcrypt)

\`\`\`python
import bcrypt

# Saat user register
password = "passwordSaya123"
# bcrypt.generate_salt(rounds) → salt + cost
salt = bcrypt.gensalt(rounds=12)
hashed = bcrypt.hashpw(password.encode(), salt)
print(hashed)
# Output: $2b$12$<22-char-salt><31-char-hash>

# Simpan 'hashed' di database (string)

# Saat user login
input_password = "passwordSaya123"
is_valid = bcrypt.checkpw(input_password.encode(), hashed.encode())
print(f"Login valid: {is_valid}")

# Bila password salah
is_valid_wrong = bcrypt.checkpw("salah".encode(), hashed.encode())
print(f"Login salah: {is_valid_wrong}")
\`\`\`

Format bcrypt: \`$2b$<cost>$<salt 22 char><hash 31 char>\`. Cost menentukan iterasi \`2^cost\`.

## Implementasi dengan argon2id (lebih modern)

\`\`\`python
from argon2 import PasswordHasher, Type

ph = PasswordHasher(
    time_cost=3,        # iterasi
    memory_cost=65536,  # 64 MB RAM
    parallelism=4,      # thread
    type=Type.ID        # argon2id (hybrid)
)

# Hash
hashed = ph.hash("passwordSaya123")
print(hashed)
# $argon2id$v=19$m=65536,t=3,p=4$<salt>$<hash>

# Verify
try:
    ph.verify(hashed, "passwordSaya123")
    print("✓ Valid")
except Exception:
    print("✗ Invalid")

# Cek perlu rehash (kalau parameter upgrade)
if ph.check_needs_rehash(hashed):
    new_hash = ph.hash("passwordSaya123")
    # update database
\`\`\`

## Password Policy yang Baik

\`\`\`text
✓ Minimal 12 karakter (NIST 800-63B)
✓ Izinkan karakter apa saja (termasuk emoji, unicode)
✓ Jangan pakai rule kompleksitas berlebihan (P@ssw0rd! umum)
✓ Cek password terhadap breach database (HaveIBeenPwned API)
✓ MFA/2FA untuk akun sensitif
✓ Rate limit login (mis. 5 percobaan/menit)
✓ Lockout setelah N kali gagal, dengan unlock manual
✓ Password manager yang direkomendasikan (Bitwarden, 1Password)

✗ Jangan pakai pertanyaan keamanan (nama ibu, dll)
✗ Jangan expire password berkala tanpa alasan (NIST 2017)
✗ Jangan batasi panjang maksimal (sampai ratusan char)
\`\`\`

## Serangan Password Umum

\`\`\`text
Brute force    → coba semua kombinasi (a, aa, ab, ...)
Dictionary     → coba kata umum (rockyou.txt: 14 juta password)
Hybrid         → dictionary + variasi (password123, P@ssword)
Credential stuffing → pakai pasangan email:password dari breach lain
Phishing       → tipu user untuk input password di situs palsu
Keylogger      → malware rekam ketikan
Spraying       → 1 password umum dicoba ke banyak akun
\`\`\`

## Cara Memeriksa Password Bocor (k-anonymity)

\`\`\`python
import requests, hashlib

def check_password_breach(password):
    sha1 = hashlib.sha1(password.encode()).hexdigest().upper()
    prefix, suffix = sha1[:5], sha1[5:]
    # Hanya kirim prefix → server tidak tahu password kita
    r = requests.get(f"https://api.pwnedpasswords.com/range/{prefix}")
    for line in r.text.splitlines():
        s, count = line.split(":")
        if s == suffix:
            return int(count)
    return 0

count = check_password_breach("password123")
print(f"Ditemukan di {count} breach")  # jutaan
\`\`\`

Pendekatan **k-anonymity** — client hanya kirim 5 char pertama hash, server kembalikan semua suffix yang cocok. Server tidak pernah tahu password penuh.

## MFA (Multi-Factor Authentication)

\`\`\`text
Factor 1: Something you KNOW  (password, PIN)
Factor 2: Something you HAVE  (HP, token hardware, YubiKey)
Factor 3: Something you ARE   (biometrik: sidik jari, wajah)

MFA = minta minimal 2 factor

Tipe MFA:
- SMS OTP          → tidak direkomendasikan (SIM swap, interception)
- TOTP (Authenticator) → Google Auth, Authy, dll (RFC 6238)
- Push notification → approve di HP ( WhatsApp, banking)
- Hardware key      → YubiKey, FIDO2/WebAuthn (PALING AMAN)
- Biometric         → FaceID, fingerprint (convenient)
\`\`\`

## Implementasi TOTP di Python

\`\`\`python
import pyotp, qrcode

# Generate secret untuk user (simpan di DB)
secret = pyotp.random_base32()
print(f"Secret: {secret}")

# User scan QR ini di Google Authenticator
uri = pyotp.totp.TOTP(secret).provisioning_uri(
    name="user@example.com", issuer_name="MyApp"
)
img = qrcode.make(uri)
img.save("qr.png")

# Verifikasi saat login
totp = pyotp.TOTP(secret)
code = input("Masukkan kode 6 digit: ")
if totp.verify(code):
    print("✓ MFA valid")
else:
    print("✗ Kode salah atau kedaluwarsa (30 detik)")
\`\`\`

## Common Pitfalls

\`\`\`text
1. Simpan password di log (access log, error log)
2. Kirim password plain via email
3. Pakai MD5/SHA1 untuk password (BROKEN)
4. Pakai SHA-256 tanpa salt
5. Pakai salt statis (sama untuk semua user) → masih bisa rainbow table per app
6. Limit password length (sebenarnya hash fixed-length, jadi bebas)
7. Reset password via email link yang tidak expire
8. Trust client-side hashing (selalu hash juga di server)
9. Pakai "security questions" yang bisa ditebak
\`\`\`

## Aturan Emas Developer

\`\`\`text
1. Selalu hash password dengan argon2id / bcrypt (BUKAN SHA-256/MD5)
2. Salt unik per user (bcrypt/argon2 otomatis)
3. Pilih cost factor yang membuat tiap hash ~250ms di server production
4. Bandingkan dengan timing-safe comparison
5. Jangan expose info "username atau password salah" → pilih satu pesan generik
6. Implement rate limit + lockout
7. Sediakan MFA untuk akun sensitif
8. Test breach detection (HaveIBeenPwned API)
9. Penalti: buat hash lama bisa di-upgrade saat user login (check_needs_rehash)
\`\`\``,
    quiz: [
      {
        question: "Apa fungsi salt pada password hashing?",
        options: [
          "Mempercepat proses hashing",
          "Mencegah rainbow table & membuat password sama menghasilkan hash berbeda",
          "Mengenkripsi password agar bisa didecrypt",
          "Memendekkan password"
        ],
        answer: 1,
        explanation: "Salt unik per user membuat password identik menghasilkan hash berbeda, dan mencegah penggunaan rainbow table (harus recompute per salt). Salt tidak perlu rahasia, biasanya disimpan bersama hash."
      },
      {
        question: "Mengapa SHA-256 tidak direkomendasikan untuk penyimpanan password?",
        options: [
          "Karena SHA-256 sudah deprecated",
          "Karena terlalu cepat — GPU bisa brute force miliaran hash/detik",
          "Karena SHA-256 menghasilkan hash panjang",
          "Karena SHA-256 tidak deterministik"
        ],
        answer: 1,
        explanation: "SHA-256 dirancang cepat (bagus untuk integrity). Untuk password, ini malah jadi kelemahan: attacker bisa menebak miliaran password/detik. Pakai bcrypt/argon2 yang sengaja dibuat lambat."
      },
      {
        question: "Tipe MFA manakah yang PALING aman dari serangan phishing?",
        options: [
          "SMS OTP",
          "Email OTP",
          "Hardware security key (FIDO2/WebAuthn, YubiKey)",
          "Push notification ke HP"
        ],
        answer: 2,
        explanation: "FIDO2/WebAuthn (YubiKey dll) resistant terhadap phishing karena signature terikat ke origin (domain) yang benar — fake site tidak bisa dapat signature valid. SMS bisa SIM-swapped, push bisa fatigue attack."
      }
    ]
  },
  {
    level: 3,
    order: 8,
    title: "Steganography",
    slug: "steganography",
    description: "Seni menyembunyikan data di dalam media: LSB image, audio, dan deteksi steganografi.",
    icon: "🖼️",
    isProject: false,
    content: `# Steganography

Berbeda dengan kriptografi yang **menyembunyikan isi** pesan, **steganography** menyembunyikan **eksistensi** pesan itu sendiri. Pesan ditampilkan sebagai hal lain (gambar, audio, video) yang tidak mencurigakan.

## Kriptografi vs Steganography

\`\`\`text
Kriptografi    → "Aku punya pesan rahasia, tapi kamu tidak bisa baca isinya"
Steganography  → "Aku tidak punya pesan apa pun" (padahal ada)

Kombinasi terbaik: encrypt dulu, lalu sembunyikan via steganography
\`\`\`

## Teknik Umum

\`\`\`text
1. LSB (Least Significant Bit) → modifikasi bit terakhir pixel image
2. Frequency domain            → modifikasi koefisien DCT (JPEG, MP3)
3. Metadata/EXIF               → sisipkan di tag EXIF gambar
4. Whitespace/zero-width       → karakter tak terlihat di text
5. Network steganography       → sisipkan di header protocol (timing, TTL)
6. Audio steganography         → modifikasi sample audio
7. Video steganography         → modifikasi frame video
\`\`\`

## LSB (Least Significant Bit) — Paling Populer

Setiap pixel gambar RGB terdiri dari 3 byte (R, G, B). Bit terakhir tiap byte bisa diubah tanpa mengubah warna secara visual:

\`\`\`text
Pixel asli:        R=11001100  G=10011010  B=11110001
Sisipkan 'H'=01001000:
  bit 0 → R: 11001100 (tidak berubah)
  bit 1 → G: 10011011 (ubah LSB)
  bit 0 → B: 11110001 (tidak berubah)
  ... lanjut untuk bit berikutnya
\`\`\`

Kapasitas: 1 bit per channel per pixel. Gambar 1024×768 RGB bisa simpan ~295 KB pesan.

## Implementasi LSB dengan Python

\`\`\`python
from PIL import Image
import numpy as np

def text_to_bits(text):
    return ''.join(format(ord(c), '08b') for c in text)

def bits_to_text(bits):
    chars = [bits[i:i+8] for i in range(0, len(bits), 8)]
    return ''.join(chr(int(b, 2)) for b in chars)

def encode_lsb(image_path, message, output_path):
    img = Image.open(image_path).convert('RGB')
    data = np.array(img)
    bits = text_to_bits(message) + '00000000'  # null terminator
    
    flat = data.flatten()
    if len(bits) > len(flat):
        raise ValueError("Pesan terlalu besar untuk gambar ini")
    
    for i, bit in enumerate(bits):
        flat[i] = (flat[i] & 0xFE) | int(bit)
    
    new_img = Image.fromarray(flat.reshape(data.shape), 'RGB')
    new_img.save(output_path)
    print(f"Pesan disisipkan ke {output_path}")

def decode_lsb(image_path):
    img = Image.open(image_path).convert('RGB')
    flat = np.array(img).flatten()
    bits = ''
    for i in range(len(flat)):
        bits += str(flat[i] & 1)
        if len(bits) % 8 == 0:
            char = chr(int(bits[-8:], 2))
            if char == '\\x00':
                return bits_to_text(bits[:-8])
    return bits_to_text(bits)

# Pakai
encode_lsb('cover.png', 'Halo Dunia Rahasia', 'stego.png')
print(decode_lsb('stego.png'))  # Halo Dunia Rahasia
\`\`\`

## Pilih Format yang Tepat

\`\`\`text
Format yang BAIK untuk steganography:
  PNG, BMP, TIFF → lossless, LSB tidak rusak
  
Format yang BURUK:
  JPEG           → lossy compression, LSB rusak
  MP3, WebP      → lossy, merusak pesan

Lossless format menjaga bit pixel tetap sama persis setelah save.
\`\`\`

## Steganography vs Watermarking

\`\`\`text
Steganography → pesan RAHASIA, sembunyi dari deteksi
Watermarking  → TANDA kepemilikan, robust terhadap modifikasi

Watermarking dipakai:
  - Copyright foto/video
  - Anti-piracy (cinema watermark)
  -溯源 sumber kebocoran (tiap viewer punya watermark unik)
\`\`\`

## Tool Populer

\`\`\`bash
# Steghide — sisipkan & ekstrak pesan di image/audio
sudo apt install steghide
steghide embed -cf cover.jpg -ef secret.txt -p password123
steghide extract -sf stego.jpg -p password123

# Stegsnow — whitespace steganography di text
stegsnow -C -m "Pesan rahasia" -p "pass" input.txt output.txt
stegsnow -C -p "pass" output.txt

# Zsteg — deteksi LSB di PNG/BMP
gem install zsteg
zsteg stego.png

# Stegexpose — deteksi stego di gambar
java -jar StegExpose.jar stego.png

# Binwalk — cari file tersembunyi di binary
binwalk firmware.bin
binwalk -e firmware.bin   # extract
\`\`\`

## Deteksi Steganography (Steganalysis)

\`\`\`text
Statistical analysis:
  - Histogram analysis (LSB mengubah distribusi)
  - Chi-square attack
  - RS analysis (regular & singular groups)
  - Sample pair analysis

Visual analysis:
  - Bandingkan dengan gambar asli (kalau ada)
  - Lihat LSB plane (gambar dari bit terakhir)
  - Noise pattern yang tidak natural

Metadata analysis:
  - EXIF tool, exiftool
  - Cek software yang dipakai, timestamp, GPS
\`\`\`

## LSB Plane Visualization

\`\`\`python
from PIL import Image
import numpy as np

img = np.array(Image.open('stego.png').convert('RGB'))
# Ambil hanya LSB tiap channel, perbesar
lsb_plane = (img & 1) * 255
Image.fromarray(lsb_plane, 'RGB').save('lsb_plane.png')
\`\`\`

Jika LSB plane terlihat seperti noise acak → kemungkinan ada stego. Jika terlihat pola gambar asli → tidak ada stego LSB.

## Use Case Steganography

\`\`\`text
Positive:
  - Watermarking hak cipta
  - Tagging dokumen untuk tracking leak
  - Komunikasi rahasia di negara sensor (China, Iran)
  - Hidden trigger di ML dataset (backdoor attack)

Negative (malware):
  - Sisipkan payload di gambar (PowerShell obfuscation)
  - C2 communication via image upload/download
  - Exfiltrate data lewat gambar yang tidak mencurigakan
\`\`\`

## Kasus Nyata

\`\`\`text
1. Operation Tripwire (2014) → APT pakai stego di gambar untuk C2
2. Hamas terror plot (2014)   → pesan disembunyikan di foto di situs porno
3. Snowden documents         → NSA pakai stego untuk covert comms
4. Angler Exploit Kit        → payload disembunyikan di banner iklan
5. Flickr malware            → exfil data via upload foto ke Flickr
\`\`\`

## Deteksi dengan Binwalk (Cari File di Dalam File)

\`\`\`bash
# Binwalk cari signature file di dalam binary
$ binwalk firmware.bin

DECIMAL       HEXADECIMAL     DESCRIPTION
------------------------------------------------------------------
0             0x0             PEM certificate
1234          0x4D2           JPEG image data
5678          0x162E          gzip compressed data

# Extract semua yang ketemu
binwalk -e firmware.bin
ls _firmware.bin.extracted/
\`\`\`

Seringkali firmware IoT menyimpan file penting (config, key) tanpa enkripsi.

## Aturan & Etika

\`\`\`text
1. Steganography tidak menggantikan enkripsi — kombinasi keduanya
2. Jangan andalkan stego sebagai satu-satunya lapisan keamanan
3. Stego di gambar yang dishare publik bisa dideteksi
4. Untuk anti-forensik, stego efektif tapi tidak 100% tidak terdeteksi
5. Hanya pakai di konteks legal — menyembunyikan data di perangkat milik orang lain tetap ilegal
\`\`\`

## Tantangan untuk Dipraktikkan

1. Sisipkan pesan ke gambar cover dengan LSB (Python di atas)
2. Extract kembali pesan tersebut
3. Kompress gambar stego ke JPEG — apakah pesan selamat?
4. Pakai zsteg untuk deteksi stego di gambar yang kamu buat
5. Bandingkan ukuran file cover vs stego — apakah ada perbedaan?`,
    quiz: [
      {
        question: "Apa perbedaan utama kriptografi dan steganography?",
        options: [
          "Kriptografi menyembunyikan isi pesan, steganography menyembunyikan eksistensi pesan",
          "Kriptografi pakai key, steganography tidak",
          "Kriptografi untuk gambar, steganography untuk teks",
          "Tidak ada perbedaan"
        ],
        answer: 0,
        explanation: "Kriptografi membuat pesan tidak terbaca (eksistensi tetap kelihatan). Steganography menyembunyikan bahwa ada pesan sama sekali — pesan terlihat sebagai hal lain (gambar, audio)."
      },
      {
        question: "Mengapa format JPEG TIDAK cocok untuk steganography LSB?",
        options: [
          "Karena JPEG berukuran besar",
          "Karena kompresi lossy JPEG merusak bit LSB yang disisipkan",
          "Karena JPEG tidak bisa dikonversi",
          "Karena JPEG tidak punya pixel"
        ],
        answer: 1,
        explanation: "JPEG lossy — kompresi mengubah nilai pixel, sehingga LSB yang disisipkan ikut termodifikasi dan pesan hilang/rusak. Pakai format lossless seperti PNG, BMP, TIFF."
      },
      {
        question: "Teknik deteksi steganography dengan menganalisis bit terakhir tiap pixel disebut?",
        options: [
          "Brute force",
          "LSB plane visualization / statistical steganalysis",
          "Rainbow table",
          "Frequency analysis"
        ],
        answer: 1,
        explanation: "LSB plane visualization melihat pola bit terakhir tiap pixel. Jika terlihat noise acak (bukan pola gambar), kemungkinan ada stego. Statistical test (chi-square, RS analysis) juga dipakai."
      }
    ]
  },
  {
    level: 3,
    order: 9,
    title: "Project: Encrypt/Decrypt Tool",
    slug: "project-encrypt-decrypt",
    description: "Proyek akhir Level 3: bangun tool command-line untuk enkripsi file hybrid (AES + RSA) lengkap.",
    icon: "🛠️",
    isProject: true,
    content: `# Project: Encrypt/Decrypt Tool

Saatnya menggabungkan semua yang telah dipelajari di Level 3 untuk membangun **tool command-line** yang melakukan enkripsi file hybrid: AES-256-GCM untuk data + RSA-2048 untuk kunci.

## Tujuan Proyek

Bangun CLI tool \`cryptobox\` dengan fitur:

1. **Generate keypair** RSA-2048 (public + private)
2. **Encrypt file** dengan hybrid scheme:
   - Generate AES-256 key random
   - Encrypt file dengan AES-256-GCM
   - Encrypt AES key dengan RSA public key
   - Simpan: encrypted_key + nonce + ciphertext + tag → output file
3. **Decrypt file** dengan private key:
   - Decrypt AES key dengan RSA private key
   - Decrypt ciphertext dengan AES-256-GCM
4. **Sign file** dengan private key (RSA-PSS + SHA-256)
5. **Verify signature** dengan public key
6. **Hash file** untuk integritas (SHA-256)

## Skema Hybrid Encryption

\`\`\`text
[ENCRYPT]
  File plaintext
      ↓
  AES-256-GCM encrypt (key K, nonce N)
      ↓
  Ciphertext C + tag T
      ↓
  RSA-OAEP encrypt(K) dengan public key
      ↓
  Encrypted key EK
      ↓
  Output: [EK (256 bytes) | N (12 bytes) | T (16 bytes) | C]

[DECRYPT]
  Output: [EK | N | T | C]
      ↓
  RSA-OAEP decrypt(EK) dengan private key → K
      ↓
  AES-256-GCM decrypt(C, N, T, K) → plaintext
\`\`\`

## Tahap 1 — Setup Proyek

\`\`\`bash
mkdir cryptobox && cd cryptobox
python -m venv venv
source venv/bin/activate
pip install cryptography click

# Struktur
cryptobox/
├── cryptobox.py        # main CLI
├── keys/               # folder keypair
│   ├── public.pem
│   └── private.pem
└── README.md
\`\`\`

## Tahap 2 — Generate Keypair

\`\`\`python
# cryptobox.py
import os
import click
from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.ciphers.aead import AESGCM

KEY_DIR = "keys"
PUB_KEY = os.path.join(KEY_DIR, "public.pem")
PRIV_KEY = os.path.join(KEY_DIR, "private.pem")

@click.group()
def cli():
    """Cryptobox - Hybrid encryption tool"""
    pass

@cli.command()
def keygen():
    """Generate RSA-2048 keypair"""
    os.makedirs(KEY_DIR, exist_ok=True)
    private_key = rsa.generate_private_key(public_exponent=65537, key_size=2048)
    
    # Save private key (PEM, PKCS8, no encryption for simplicity)
    with open(PRIV_KEY, "wb") as f:
        f.write(private_key.private_bytes(
            encoding=serialization.Encoding.PEM,
            format=serialization.PrivateFormat.PKCS8,
            encryption_algorithm=serialization.NoEncryption()
        ))
    
    # Save public key
    with open(PUB_KEY, "wb") as f:
        f.write(private_key.public_key().public_bytes(
            encoding=serialization.Encoding.PEM,
            format=serialization.PublicFormat.SubjectPublicKeyInfo
        ))
    
    click.echo(f"✓ Private key: {PRIV_KEY}")
    click.echo(f"✓ Public key : {PUB_KEY}")

if __name__ == "__main__":
    cli()
\`\`\`

## Tahap 3 — Encrypt & Decrypt

\`\`\`python
def load_public_key():
    with open(PUB_KEY, "rb") as f:
        return serialization.load_pem_public_key(f.read())

def load_private_key():
    with open(PRIV_KEY, "rb") as f:
        return serialization.load_pem_private_key(f.read(), password=None)

@cli.command()
@click.argument('input_file')
@click.argument('output_file')
def encrypt(input_file, output_file):
    """Encrypt file with hybrid AES-256-GCM + RSA-2048"""
    public_key = load_public_key()
    
    # Generate AES key & nonce
    aes_key = AESGCM.generate_key(bit_length=256)
    nonce = os.urandom(12)
    aesgcm = AESGCM(aes_key)
    
    # Read & encrypt file
    with open(input_file, "rb") as f:
        plaintext = f.read()
    ciphertext = aesgcm.encrypt(nonce, plaintext, None)
    
    # Tag is appended to ciphertext in AESGCM (last 16 bytes)
    ct_data = ciphertext[:-16]
    tag = ciphertext[-16:]
    
    # Encrypt AES key with RSA public key (OAEP)
    encrypted_key = public_key.encrypt(
        aes_key,
        padding.OAEP(
            mgf=padding.MGF1(algorithm=hashes.SHA256()),
            algorithm=hashes.SHA256(),
            label=None
        )
    )
    
    # Write output: [encrypted_key (256)] [nonce (12)] [tag (16)] [ciphertext]
    with open(output_file, "wb") as f:
        f.write(encrypted_key)
        f.write(nonce)
        f.write(tag)
        f.write(ct_data)
    
    click.echo(f"✓ Encrypted {input_file} → {output_file}")
    click.echo(f"  Original size: {len(plaintext)} bytes")
    click.echo(f"  Encrypted size: {os.path.getsize(output_file)} bytes")

@cli.command()
@click.argument('input_file')
@click.argument('output_file')
def decrypt(input_file, output_file):
    """Decrypt file with hybrid scheme"""
    private_key = load_private_key()
    
    with open(input_file, "rb") as f:
        data = f.read()
    
    # Parse: encrypted_key (256) | nonce (12) | tag (16) | ciphertext
    encrypted_key = data[:256]
    nonce = data[256:268]
    tag = data[268:284]
    ct_data = data[284:]
    
    # Decrypt AES key
    aes_key = private_key.decrypt(
        encrypted_key,
        padding.OAEP(
            mgf=padding.MGF1(algorithm=hashes.SHA256()),
            algorithm=hashes.SHA256(),
            label=None
        )
    )
    
    # Decrypt ciphertext
    aesgcm = AESGCM(aes_key)
    # AESGCM expects tag appended to ciphertext
    ciphertext = ct_data + tag
    plaintext = aesgcm.decrypt(nonce, ciphertext, None)
    
    with open(output_file, "wb") as f:
        f.write(plaintext)
    
    click.echo(f"✓ Decrypted {input_file} → {output_file}")
\`\`\`

## Tahap 4 — Sign & Verify

\`\`\`python
import hashlib

@cli.command()
@click.argument('input_file')
@click.argument('signature_file')
def sign(input_file, signature_file):
    """Sign file with RSA-PSS (private key)"""
    private_key = load_private_key()
    
    with open(input_file, "rb") as f:
        data = f.read()
    
    signature = private_key.sign(
        data,
        padding.PSS(
            mgf=padding.MGF1(hashes.SHA256()),
            salt_length=padding.PSS.MAX_LENGTH
        ),
        hashes.SHA256()
    )
    
    with open(signature_file, "wb") as f:
        f.write(signature)
    
    click.echo(f"✓ Signed {input_file} → {signature_file}")
    click.echo(f"  Signature size: {len(signature)} bytes")

@cli.command()
@click.argument('input_file')
@click.argument('signature_file')
def verify(input_file, signature_file):
    """Verify file signature with public key"""
    public_key = load_public_key()
    
    with open(input_file, "rb") as f:
        data = f.read()
    with open(signature_file, "rb") as f:
        signature = f.read()
    
    try:
        public_key.verify(
            signature,
            data,
            padding.PSS(
                mgf=padding.MGF1(hashes.SHA256()),
                salt_length=padding.PSS.MAX_LENGTH
            ),
            hashes.SHA256()
        )
        click.echo("✓ Signature VALID — file asli & tidak diubah")
    except Exception:
        click.echo("✗ Signature INVALID — file dimodifikasi atau key salah")

@cli.command()
@click.argument('input_file')
def hash(input_file):
    """Compute SHA-256 hash of file"""
    h = hashlib.sha256()
    with open(input_file, "rb") as f:
        while chunk := f.read(8192):
            h.update(chunk)
    click.echo(f"{h.hexdigest()}  {input_file}")
\`\`\`

## Tahap 5 — Testing

\`\`\`bash
# Generate keypair
python cryptobox.py keygen

# Buat file test
echo "Ini dokumen rahasia dari CodeRoom" > secret.txt

# Encrypt
python cryptobox.py encrypt secret.txt secret.enc
# Output: ✓ Encrypted secret.txt → secret.enc

# Lihat file terenkripsi (binary)
xxd secret.enc | head -5

# Decrypt
python cryptobox.py decrypt secret.enc secret.dec
cat secret.dec
# Output: Ini dokumen rahasia dari CodeRoom

# Sign
python cryptobox.py sign secret.txt secret.sig

# Verify (file asli)
python cryptobox.py verify secret.txt secret.sig
# Output: ✓ Signature VALID

# Modifikasi file lalu verify
echo " TAMPERED" >> secret.txt
python cryptobox.py verify secret.txt secret.sig
# Output: ✗ Signature INVALID

# Hash
python cryptobox.py hash secret.txt
# Output: <hash>  secret.txt
\`\`\`

## Konsep yang Diuji

Proyek ini menggabungkan:

- **Symmetric encryption** (AES-256-GCM)
- **Asymmetric encryption** (RSA-2048-OAEP)
- **Hybrid encryption scheme** (TLS-like)
- **Hash function** (SHA-256)
- **Digital signature** (RSA-PSS)
- **File I/O & binary parsing**
- **Key management** (PEM serialization)

## Kriteria Self-Assessment

- [ ] \`keygen\` menghasilkan pasangan public/private key yang valid
- [ ] \`encrypt\` menghasilkan file yang tidak bisa dibaca tanpa private key
- [ ] \`decrypt\` mengembalikan file asli persis (byte-identical)
- [ ] \`sign\` + \`verify\` mendeteksi modifikasi file
- [ ] \`hash\` menghasilkan SHA-256 yang cocok dengan \`sha256sum\`
- [ ] Code terstruktur, ada docstring & error handling
- [ ] README.md dengan cara pakai

## Tantangan Tambahan (Opsional)

1. **Password protect private key** — encrypt private.pem dengan passphrase (PBKDF2 + AES)
2. **Stream encryption** — file besar (>1 GB) tanpa load semua ke memory
3. **Multiple recipients** — encrypt AES key dengan public key beberapa orang
4. **Compression** — gzip sebelum encrypt (lebih hemat)
5. **GUI** — buat interface dengan Tkinter atau web (Flask)
6. **Web API** — expose sebagai REST endpoint dengan Flask/FastAPI

## Pertanyaan Refleksi

1. Mengapa kita pakai hybrid scheme, bukan RSA langsung untuk encrypt file?  
   *(Jawaban: RSA lambat & dibatasi ukuran input ~245 byte. AES untuk data besar, RSA untuk kunci saja.)*

2. Mengapa AES-GCM lebih baik dari AES-CBC di proyek ini?  
   *(Jawaban: GCM memberikan otentikasi (AEAD) — jika ciphertext diubah, decrypt gagal. CBC tidak.)*

3. Mengapa signature dibuat dengan private key, bukan public key?  
   *(Jawaban: hanya pemilik private key yang bisa sign → bukti otentik & non-repudiation.)*

4. Apa risiko jika nonce AES-GCM di-reuse?  
   *(Jawaban: catastrophic — dua ciphertext dengan key+nonce sama bisa di-XOR untuk reveal plaintext.)*

5. Mengapa kita hash-then-sign, bukan sign file langsung?  
   *(Jawaban: signature bekerja pada digest tetap (32 byte), efisien untuk file berukuran berapa pun.)*

> Catatan etika: Tool ini untuk edukasi. Untuk produksi, pertimbangkan audit keamanan, key rotation, HSM untuk private key, dan standar seperti OpenPGP (RFC 4880) atau age encryption.`,
    quiz: [
      {
        question: "Mengapa skema hybrid (AES + RSA) dipakai alih-alih RSA langsung untuk enkripsi file?",
        options: [
          "Karena RSA tidak aman",
          "RSA lambat & dibatasi ukuran input, AES cepat untuk data besar tapi butuh distribusi key yang diatasi RSA",
          "Karena AES sudah deprecated",
          "Karena hybrid lebih mudah diimplementasikan"
        ],
        answer: 1,
        explanation: "RSA lambat dan hanya bisa encrypt ~245 byte (untuk RSA-2048 OAEP). AES cepat untuk data besar. Hybrid: RSA encrypt kunci AES, AES encrypt data. Inilah skema TLS."
      },
      {
        question: "Pada proyek ini, signature dibuat dengan key mana?",
        options: [
          "Public key pengirim",
          "Private key pengirim",
          "Symmetric key",
          "Public key penerima"
        ],
        answer: 1,
        explanation: "Signature dibuat dengan private key pengirim (hanya pengirim yang bisa), diverifikasi dengan public key pengirim (siapa saja bisa verifikasi). Memberi otentikasi & non-repudiation."
      },
      {
        question: "Apa yang terjadi jika nonce AES-GCM di-reuse dengan key yang sama?",
        options: [
          "Tidak terjadi apa-apa",
          "Ciphertext menjadi lebih pendek",
          "Kerentanan kritis — dua ciphertext bisa di-XOR untuk reveal plaintext",
          "Decrypt menjadi lebih cepat"
        ],
        answer: 2,
        explanation: "Reuse nonce di GCM/CTR adalah catastrophic failure. Karena keystream dihasilkan dari (key, nonce), reuse berarti keystream sama → XOR dua ciphertext = XOR dua plaintext → leak isi."
      }
    ]
  }
];
