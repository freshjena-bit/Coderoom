import { MaterialData } from "../src/lib/content-types";

export const contentLevels4to5: MaterialData[] = [
  // ============================================
  // LEVEL 4 - JARINGAN KOMPUTER (10 materials)
  // ============================================
  {
    level: 4,
    order: 1,
    title: "Pengenalan Jaringan",
    slug: "pengenalan-jaringan",
    description: "Dasar jaringan komputer: LAN, WAN, topologi, dan komponennya.",
    icon: "🌐",
    isProject: false,
    content: `# Pengenalan Jaringan

**Jaringan komputer** adalah kumpulan dua atau lebih perangkat yang saling terhubung untuk berbagi sumber daya dan data. Jaringan menjadi tulang punggung komunikasi digital modern — mulai dari browsing web hingga transaksi perbankan.

## Jenis Jaringan Berdasarkan Skala

\`\`\`text
PAN   (Personal Area Network)      → Bluetooth, perangkat personal (≤ 10m)
LAN   (Local Area Network)         → Rumah, kantor, sekolah (≤ 1 km)
MAN   (Metropolitan Area Network)  → Antar gedung dalam kota (≤ 50 km)
WAN   (Wide Area Network)          → Antar kota/negara, contoh: internet
\`\`\`

## Topologi Jaringan

Topologi menentukan cara perangkat dihubungkan secara fisik atau logis:

- **Star** — semua perangkat terhubung ke switch pusat, paling umum dipakai
- **Bus** — satu kabel backbone, mudah dipasang tapi rentan gagal total
- **Ring** — perangkat membentuk lingkaran, data mengalir satu arah
- **Mesh** — setiap node terhubung ke banyak node lain, sangat tangguh

## Komponen Utama Jaringan

\`\`\`bash
# Cek interface jaringan di Linux
ip addr show
ip link show

# Lihat gateway default
ip route | grep default

# Cek koneksi ke host
ping -c 4 8.8.8.8
\`\`\`

Komponen penting yang harus dikenali:

1. **NIC** (Network Interface Card) — kartu jaringan pada perangkat
2. **Switch** — menghubungkan perangkat dalam satu LAN
3. **Router** — menghubungkan jaringan berbeda dan meneruskan paket
4. **Access Point** — menyediakan koneksi Wi-Fi
5. **Modem** — menerjemahkan sinyal ISP menjadi data digital

## Karakteristik Jaringan yang Baik

> Jaringan ideal harus **cepat**, **andal (reliable)**, **aman**, dan **skalabel**. Tidak ada satu topologi yang sempurna untuk semua skenario — pilihan selalu merupakan trade-off antara biaya, performa, dan kompleksitas.

**Tips belajar:** Bangun lab kecil di rumah dengan satu router dan dua perangkat untuk merasakan alur paket secara nyata. Pahami dulu konsep LAN sebelum melangkah ke WAN.`,
    quiz: [
      {
        question: "Jaringan yang mencakup area rumah atau kantor kecil disebut?",
        options: ["WAN", "MAN", "LAN", "PAN"],
        answer: 2,
        explanation: "LAN (Local Area Network) mencakup area terbatas seperti rumah, kantor, atau sekolah, biasanya dalam radius ≤ 1 km."
      },
      {
        question: "Topologi yang menggunakan switch pusat sebagai penghubung semua perangkat adalah?",
        options: ["Bus", "Ring", "Mesh", "Star"],
        answer: 3,
        explanation: "Topologi Star menghubungkan semua perangkat ke satu titik pusat (switch/hub). Ini topologi paling umum di LAN modern."
      },
      {
        question: "Fungsi utama router dalam jaringan adalah?",
        options: [
          "Menyediakan koneksi Wi-Fi",
          "Menghubungkan dua atau lebih jaringan berbeda",
          "Menyimpan data sementara",
          "Menerjemahkan sinyal analog"
        ],
        answer: 1,
        explanation: "Router bekerja di layer 3 (Network) dan berfungsi menghubungkan jaringan berbeda serta meneruskan paket berdasarkan IP tujuan."
      }
    ]
  },
  {
    level: 4,
    order: 2,
    title: "OSI Model",
    slug: "osi-model",
    description: "7 layer OSI model dan fungsinya masing-masing.",
    icon: "📚",
    isProject: false,
    content: `# OSI Model

**OSI Model** (Open Systems Interconnection) adalah kerangka konseptual 7 layer yang menjelaskan bagaimana data berpindah dari aplikasi di satu komputer ke aplikasi di komputer lain melalui jaringan. Model ini dikembangkan ISO pada 1984 sebagai standar referensi.

## Tujuh Layer OSI

\`\`\`text
Layer 7  | Application  | HTTP, FTP, SMTP, DNS
Layer 6  | Presentation | Enkripsi, kompresi, encoding (TLS, JPEG)
Layer 5  | Session      | Manajemen sesi (NetBIOS, RPC)
Layer 4  | Transport    | TCP, UDP (port & segment)
Layer 3  | Network      | IP, ICMP, routing antar jaringan
Layer 2  | Data Link    | Ethernet, MAC address, switch
Layer 1  | Physical     | Kabel, sinyal listrik/cahaya/gelombang
\`\`\`

## Cara Mengingat Urutan

Mnemonic populer dari atas ke bawah: **A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing. Dari bawah ke atas: **P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way.

## Alur Data (Encapsulation)

Saat data dikirim, tiap layer menambahkan header sendiri:

\`\`\`bash
# Layer 4 menambahkan port (TCP/UDP)
# Layer 3 menambahkan IP sumber & tujuan
# Layer 2 menambahkan MAC address + frame check
# Layer 1 mengirim sebagai bit/sinyal fisik

# Simulasi capture paket melihat header tiap layer
sudo tcpdump -i eth0 -nn -vv
\`\`\`

## Layer yang Paling Sering Diuji

- **Layer 3 (Network):** IP addressing, routing
- **Layer 4 (Transport):** TCP vs UDP, port number
- **Layer 7 (Application):** protokol yang dipakai user

> **Tips:** TCP/IP model (4 layer) adalah versi sederhana yang dipakai di dunia nyata. OSI 7 layer lebih cocok untuk pembelajaran karena lebih granular.

**Tips belajar:** Saat troubleshooting, identifikasi dulu di layer mana masalahnya. Tidak bisa ping? Layer 3. Kabel lepas? Layer 1. DNS error? Layer 7.`,
    quiz: [
      {
        question: "Pada layer OSI manakah protokol HTTP beroperasi?",
        options: ["Layer 4 (Transport)", "Layer 5 (Session)", "Layer 6 (Presentation)", "Layer 7 (Application)"],
        answer: 3,
        explanation: "HTTP, FTP, SMTP, dan DNS adalah protokol layer 7 (Application) karena berinteraksi langsung dengan aplikasi pengguna."
      },
      {
        question: "Layer OSI yang bertanggung jawab atas routing dan IP addressing adalah?",
        options: ["Layer 2", "Layer 3", "Layer 4", "Layer 7"],
        answer: 1,
        explanation: "Layer 3 (Network) menangani logical addressing (IP) dan routing paket antar jaringan. IP dan ICMP bekerja di layer ini."
      },
      {
        question: "Apa perbedaan utama antara TCP dan UDP yang berada di layer 4?",
        options: [
          "TCP untuk Wi-Fi, UDP untuk kabel",
          "TCP connection-oriented & andal, UDP connectionless & cepat",
          "TCP hanya untuk LAN, UDP untuk WAN",
          "TCP menggunakan IP, UDP tidak"
        ],
        answer: 1,
        explanation: "TCP menjamin pengiriman dengan handshake dan retransmisi (andal), sedangkan UDP mengirim tanpa koneksi (cepat tapi tidak dijamin sampai)."
      }
    ]
  },
  {
    level: 4,
    order: 3,
    title: "TCP/IP Protocol",
    slug: "tcp-ip-protocol",
    description: "Protocol suite TCP/IP: 4 layer, handshake, dan packet.",
    icon: "🔌",
    isProject: false,
    content: `# TCP/IP Protocol

**TCP/IP** adalah suite protokol dasar yang menjalankan internet. Berbeda dengan OSI 7 layer, TCP/IP menggunakan model 4 layer yang lebih sederhana dan menjadi standar de facto di dunia nyata.

## 4 Layer TCP/IP

\`\`\`text
Application  → HTTP, HTTPS, DNS, SSH, FTP, SMTP
Transport    → TCP (andal), UDP (cepat)
Internet     → IP, ICMP, ARP
Link/Access  → Ethernet, Wi-Fi, MAC address
\`\`\`

## TCP Three-Way Handshake

Sebelum mengirim data, TCP membuat koneksi dengan handshake:

\`\`\`bash
# 1. Client → Server : SYN (synchronize)
# 2. Server → Client : SYN-ACK (acknowledge)
# 3. Client → Server : ACK (connection established)

# Lihat handshake secara langsung
sudo tcpdump -i any -n 'tcp port 80' -S
\`\`\`

Setelah handshake selesai, data dapat dikirim secara dua arah dengan nomor urut (sequence number) untuk memastikan tidak ada paket hilang.

## TCP vs UDP

| Aspek        | TCP                  | UDP                  |
|--------------|----------------------|----------------------|
| Koneksi      | Connection-oriented  | Connectionless       |
| Reliability  | Tinggi (retransmit)  | Rendah (best effort) |
| Kecepatan    | Lebih lambat         | Lebih cepat          |
| Use case     | Web, email, file     | Streaming, game, DNS |

## Struktur Paket IP

\`\`\`text
[IP Header (20 byte)] [TCP/UDP Header] [Payload Data]
   - Source IP
   - Destination IP
   - TTL (Time To Live)
   - Protocol field (6=TCP, 17=UDP)
\`\`\`

> **Tips:** Gunakan \`netstat -tulpn\` di Linux untuk melihat koneksi TCP/UDP aktif dan port yang terbuka.

**Tips belajar:** Pahami konsep state mesin TCP (SYN_SENT, ESTABLISHED, TIME_WAIT) — ini kunci untuk debugging jaringan dan analisis serangan seperti SYN flood.`,
    quiz: [
      {
        question: "Urutan benar TCP three-way handshake adalah?",
        options: [
          "ACK → SYN → SYN-ACK",
          "SYN → SYN-ACK → ACK",
          "SYN → ACK → SYN-ACK",
          "SYN-ACK → SYN → ACK"
        ],
        answer: 1,
        explanation: "Client mengirim SYN, server membalas dengan SYN-ACK, lalu client mengirim ACK. Setelah itu koneksi ESTABLISHED."
      },
      {
        question: "Protokol berikut menggunakan UDP, KECUALI?",
        options: ["DNS query", "Video streaming", "File transfer FTP", "Online game real-time"],
        answer: 2,
        explanation: "FTP menggunakan TCP karena butuh keandalan transfer file. DNS query, streaming, dan game real-time umumnya pakai UDP."
      },
      {
        question: "Pada layer mana IP (Internet Protocol) beroperasi dalam model TCP/IP?",
        options: ["Application", "Transport", "Internet", "Link"],
        answer: 2,
        explanation: "IP beroperasi di layer Internet pada model TCP/IP, setara dengan layer 3 (Network) pada OSI, bertugas routing antar jaringan."
      }
    ]
  },
  {
    level: 4,
    order: 4,
    title: "IP Addressing & Subnetting",
    slug: "ip-addressing-subnetting",
    description: "IPv4, IPv6, subnet mask, CIDR, dan perhitungan subnet.",
    icon: "🔢",
    isProject: false,
    content: `# IP Addressing & Subnetting

**IP Address** adalah alamat unik untuk setiap perangkat di jaringan. Ada dua versi: **IPv4** (32-bit, ditulis desimal) dan **IPv6** (128-bit, ditulis heksadesimal).

## IPv4 Classes

\`\`\`text
Class A: 1.0.0.0     - 126.255.255.255   (subnet: 255.0.0.0     /8)
Class B: 128.0.0.0   - 191.255.255.255   (subnet: 255.255.0.0   /16)
Class C: 192.0.0.0   - 223.255.255.255   (subnet: 255.255.255.0 /24)
Class D: 224.0.0.0   - 239.255.255.255   (multicast)
Class E: 240.0.0.0   - 255.255.255.255   (eksperimen)
\`\`\`

Private range (RFC 1918): \`10.0.0.0/8\`, \`172.16.0.0/12\`, \`192.168.0.0/16\`.

## Subnet Mask & CIDR

Subnet mask menentukan bagian network dan host dari IP:

\`\`\`bash
# CIDR notation
192.168.1.0/24  = 255.255.255.0    (256 alamat, 254 host)
192.168.1.0/25  = 255.255.255.128  (128 alamat, 126 host)
192.168.1.0/30  = 255.255.255.252  (4 alamat, 2 host)

# Hitung subnet otomatis
ipcalc 192.168.1.0/26
# Output: Network 192.168.1.0, HostMin .1, HostMax .62, Broadcast .63
\`\`\`

## Perhitungan Subnet

Rumus jumlah host per subnet: \`2^(32-prefix) - 2\` (kurangi network & broadcast). Rumus jumlah subnet: \`2^(prefix - default_prefix)\`.

Contoh: \`192.168.1.0/26\` dari Class C default /24:
- Bit dipinjam: 26 - 24 = 2 → 4 subnet
- Host per subnet: 2^(32-26) - 2 = 64 - 2 = 62 host

## IPv6 Singkat

\`\`\`text
2001:0db8:85a3:0000:0000:8a2e:0370:7334
→ disingkat: 2001:db8:85a3::8a2e:370:7334
\`\`\`

IPv6 menghapus broadcast, menggunakan fe80::/10 untuk link-local, dan mendukung auto-konfigurasi (SLAAC).

> **Tips:** Gunakan \`ipcalc\` atau \`sipcalc\` di Linux untuk menghitung subnet dengan cepat tanpa salah hitung manual.

**Tips belajar:** Hafalkan tabel prefix /24, /25, /26, /27, /28, /29, /30 karena paling sering dipakai di soal ujian dan konfigurasi router nyata.`,
    quiz: [
      {
        question: "Berapa jumlah host yang tersedia di /24 network?",
        options: ["128", "254", "256", "512"],
        answer: 1,
        explanation: "/24 memiliki 2^8 = 256 alamat, dikurangi network dan broadcast = 254 host可用."
      },
      {
        question: "Subnet mask untuk /24 adalah?",
        options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
        answer: 2,
        explanation: "/24 berarti 24 bit pertama untuk network, sisanya 8 bit untuk host. Subnet mask-nya 255.255.255.0."
      },
      {
        question: "IP 192.168.1.100 termasuk kelas berapa?",
        options: ["Class A", "Class B", "Class C", "Class D"],
        answer: 2,
        explanation: "Range 192.0.0.0 - 223.255.255.255 adalah Class C. IP 192.168.1.100 juga termasuk private range RFC 1918."
      }
    ]
  },
  {
    level: 4,
    order: 5,
    title: "DNS & Domain",
    slug: "dns-domain",
    description: "Cara kerja DNS, record types, dan registrasi domain.",
    icon: "🔗",
    isProject: false,
    content: `# DNS & Domain

**DNS (Domain Name System)** adalah sistem yang menerjemahkan nama domain yang mudah diingat (mis. \`google.com\`) menjadi IP address numerik (\`142.250.190.46\`). Tanpa DNS, kita harus menghafal IP setiap website.

## Hierarki DNS

\`\`\`text
Root DNS Server (.)
  └─ TLD (.com, .org, .id, .net)
       └─ Authoritative nameserver (example.com)
            └─ Record A / AAAA / CNAME / MX
\`\`\`

## Cara Kerja Resolusi DNS

\`\`\`bash
# Query DNS manual
dig google.com
dig +short example.com
dig MX gmail.com

# Cek cache DNS lokal
nslookup example.com 8.8.8.8

# Flush DNS cache (systemd-resolved)
sudo resolvectl flush-caches
\`\`\`

Alur resolusi: browser → cache lokal → resolver ISP → root server → TLD server → authoritative server → jawaban IP.

## Jenis Record DNS

\`\`\`text
A       → Domain ke IPv4
AAAA    → Domain ke IPv6
CNAME   → Alias ke domain lain
MX      → Mail server
TXT     → Verifikasi & SPF/DKIM
NS      → Nameserver otoritatif
SOA     → Start of Authority (metadata zone)
SRV     → Service record (VoIP, Active Directory)
\`\`\`

## Registrasi Domain

Domain dibeli dari **registrar** (Namecheap, Cloudflare, GoDaddy, Idwebhost). Saat membeli, Anda menyewa nama untuk periode tertentu (1-10 tahun). Setelah punya domain:

1. Set **NS records** ke hosting/DNS provider
2. Tambahkan **A record** untuk subdomain utama
3. Konfigurasi **MX** untuk email
4. Set **TXT SPF/DKIM/DMARC** untuk keamanan email

> **Tips:** Gunakan \`dig\` bukan \`ping\` untuk debugging DNS karena lebih detail menampilkan TTL dan record type.

**Tips belajar:** Setup domain sendiri di Cloudflare (gratis) untuk memahami cara kerja record A, CNAME, dan propagasi DNS secara praktis.`,
    quiz: [
      {
        question: "Record DNS yang memetakan domain ke IPv4 adalah?",
        options: ["AAAA", "CNAME", "A", "MX"],
        answer: 2,
        explanation: "Record A memetakan hostname ke IPv4 32-bit. Record AAAA digunakan untuk IPv6 128-bit."
      },
      {
        question: "Record DNS yang menentukan mail server sebuah domain adalah?",
        options: ["A", "MX", "TXT", "NS"],
        answer: 1,
        explanation: "MX (Mail Exchange) record menentukan server yang menerima email untuk domain tersebut, lengkap dengan prioritas."
      },
      {
        question: "Hierarki DNS yang BENAR dari tertinggi ke terendah adalah?",
        options: [
          "TLD → Root → Authoritative",
          "Root → Authoritative → TLD",
          "Root → TLD → Authoritative",
          "Authoritative → TLD → Root"
        ],
        answer: 2,
        explanation: "Resolusi dimulai dari Root (.), turun ke TLD (.com), lalu ke Authoritative nameserver domain yang bersangkutan."
      }
    ]
  },
  {
    level: 4,
    order: 6,
    title: "HTTP/HTTPS Protocol",
    slug: "http-https-protocol",
    description: "HTTP methods, status code, header, dan HTTPS/TLS.",
    icon: "🔒",
    isProject: false,
    content: `# HTTP/HTTPS Protocol

**HTTP (HyperText Transfer Protocol)** adalah protokol layer aplikasi untuk mentransfer dokumen web. Versi terbaru adalah **HTTP/3** berbasis QUIC. **HTTPS** adalah HTTP yang dibungkus enkripsi TLS/SSL.

## HTTP Methods

\`\`\`text
GET     → Mengambil data (safe, idempotent)
POST    → Mengirim data baru (create)
PUT     → Update seluruh resource (idempotent)
PATCH   → Update sebagian resource
DELETE  → Hapus resource
HEAD    → Hanya header, tanpa body
OPTIONS → Cek method yang didukung
\`\`\`

## Status Code

\`\`\`bash
# Curl untuk lihat response header
curl -I https://example.com

# Verifikasi TLS certificate
openssl s_client -connect example.com:443 -servername example.com
\`\`\`

Kategori status code:

\`\`\`text
1xx Informational  (100 Continue)
2xx Success        (200 OK, 201 Created, 204 No Content)
3xx Redirection    (301 Moved, 302 Found, 304 Not Modified)
4xx Client Error   (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
5xx Server Error   (500 Internal, 502 Bad Gateway, 503 Service Unavailable)
\`\`\`

## HTTP Headers Penting

- \`Authorization: Bearer <token>\` — autentikasi
- \`Content-Type: application/json\` — tipe body
- \`Cookie\` / \`Set-Cookie\` — sesi
- \`Cache-Control\` — caching policy
- \`CSP\` — Content Security Policy
- \`HSTS\` — paksa HTTPS

## HTTPS & TLS Handshake

\`\`\`text
1. ClientHello  → client kirim supported cipher & random
2. ServerHello  → server pilih cipher & kirim certificate
3. Key Exchange → client verifikasi cert & kirim pre-master secret
4. Finished     → kedua pihak punya session key simetris
5. Application data dienkripsi dengan session key
\`\`\`

> **Tips:** Selalu aktifkan **HSTS** dan redirect HTTP → HTTPS untuk mencegah serangan downgrade.

**Tips belajar:** Buka DevTools → tab Network di browser untuk melihat setiap request, header, dan timing secara real-time saat browsing.`,
    quiz: [
      {
        question: "HTTP status code 404 berarti?",
        options: ["Server error", "Resource tidak ditemukan", "Tidak otorisasi", "Redirect permanen"],
        answer: 1,
        explanation: "404 Not Found berarti resource yang diminta tidak ada di server. Termasuk kategori 4xx Client Error."
      },
      {
        question: "HTTP method yang aman (safe) dan idempotent untuk mengambil data adalah?",
        options: ["POST", "PUT", "GET", "DELETE"],
        answer: 2,
        explanation: "GET bersifat safe (tidak mengubah state server) dan idempotent (request berulang memberi hasil sama)."
      },
      {
        question: "Apa fungsi utama HTTPS dibanding HTTP biasa?",
        options: [
          "Membuat halaman lebih cepat dimuat",
          "Mengenkripsi komunikasi dengan TLS/SSL",
          "Mengurangi ukuran file",
          "Memperbanyak header request"
        ],
        answer: 1,
        explanation: "HTTPS membungkus HTTP dalam enkripsi TLS/SSL, sehingga data antara client dan server tidak dapat disadap atau dimodifikasi pihak ketiga."
      }
    ]
  },
  {
    level: 4,
    order: 7,
    title: "Routing & Switching",
    slug: "routing-switching",
    description: "Router, switch, routing table, dan protocol (OSPF, BGP).",
    icon: "🛣️",
    isProject: false,
    content: `# Routing & Switching

**Switching** menghubungkan perangkat dalam satu jaringan (LAN) berdasarkan MAC address, sedangkan **routing** menghubungkan antar jaringan berbeda berdasarkan IP address. Keduanya adalah fondasi infrastruktur jaringan.

## Switch vs Router

\`\`\`text
Switch             | Router
-------------------|---------------------
Layer 2 (Data Link)| Layer 3 (Network)
Pakai MAC address  | Pakai IP address
Forward frame      | Forward packet
Buat satu broadcast| Pisahkan broadcast domain
\`\`\`

## Routing Table

Setiap router menyimpan tabel yang menentukan ke mana paket diteruskan:

\`\`\`bash
# Lihat routing table Linux
ip route show
route -n

# Tambah route statik manual
sudo ip route add 10.50.0.0/24 via 192.168.1.1

# Trace jalur paket
traceroute 8.8.8.8
mtr 8.8.8.8
\`\`\`

Isi routing table:

\`\`\`text
Destination   Gateway         Interface  Metric
0.0.0.0/0     192.168.1.1     eth0       100   (default route)
10.0.0.0/8    10.0.0.254      eth1       10
192.168.1.0/24 0.0.0.0         eth0       0     (directly connected)
\`\`\`

## Routing Protocol

\`\`\`text
Static routing   → Manual, cocok untuk jaringan kecil
RIP              → Distance vector, metric = hop count (max 15)
OSPF             → Link-state, konvergen cepat, area-based
BGP              → Antar autonomous system, dipakai internet global
EIGRP            → Cisco proprietary, hybrid
\`\`\`

## OSPF vs BGP

- **OSPF** digunakan **di dalam** satu organisasi (IGP), memilih jalur berdasarkan bandwidth/cost.
- **BGP** menghubungkan **antar** ISP/AS (EGP), jalur ditentukan berdasarkan kebijakan (policy-based routing) bukan hanya metric.

> **Tips:** Gunakan \`traceroute\` untuk melihat router-router mana yang dilewati paket dari komputer Anda menuju server tujuan.

**Tips belajar:** Instal **GNS3** atau **EVE-NG** untuk simulasi router Cisco/Juniper tanpa perlu hardware fisik. Praktik konfigurasi OSPF antar 3 router.`,
    quiz: [
      {
        question: "Perbedaan utama switch dan router adalah?",
        options: [
          "Switch lebih cepat dari router",
          "Switch bekerja di layer 2 (MAC), router di layer 3 (IP)",
          "Router hanya untuk Wi-Fi",
          "Switch bisa routing, router tidak"
        ],
        answer: 1,
        explanation: "Switch bekerja di layer 2 Data Link menggunakan MAC address, sedangkan router bekerja di layer 3 Network menggunakan IP address untuk routing antar jaringan."
      },
      {
        question: "Routing protocol yang digunakan antar Autonomous System di internet adalah?",
        options: ["OSPF", "RIP", "BGP", "EIGRP"],
        answer: 2,
        explanation: "BGP (Border Gateway Protocol) adalah EGP yang menghubungkan antar Autonomous System. OSPF/RIP/EIGRP adalah IGP untuk dalam AS."
      },
      {
        question: "Entry 0.0.0.0/0 pada routing table disebut?",
        options: ["Loopback route", "Default route", "Multicast route", "Static route khusus"],
        answer: 1,
        explanation: "0.0.0.0/0 adalah default route — paket dengan tujuan yang tidak cocok entry lain akan diteruskan ke gateway default ini."
      }
    ]
  },
  {
    level: 4,
    order: 8,
    title: "Firewall & Network Security",
    slug: "firewall-network-security",
    description: "Firewall, IDS/IPS, dan network security basics.",
    icon: "🧱",
    isProject: false,
    content: `# Firewall & Network Security

**Firewall** adalah sistem (hardware atau software) yang memfilter traffic jaringan berdasarkan aturan keamanan. **IDS** mendeteksi serangan, **IPS** mendeteksi sekaligus memblokir. Keduanya melindungi jaringan dari ancaman.

## Jenis Firewall

\`\`\`text
Packet Filtering  → Filter per paket (IP, port, protocol)
Stateful          → Lacak state koneksi TCP
Proxy             → Memproxy traffic di layer aplikasi
NGFW              → Next-Gen: deep packet inspection + IPS
WAF               → Web App Firewall (HTTP/HTTPS layer 7)
\`\`\`

## Contoh Rules iptables (Linux)

\`\`\`bash
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
\`\`\`

## IDS vs IPS

\`\`\`text
IDS (Intrusion Detection System)
  → Pasif, hanya alert & log (mis. Snort mode pasif)
  → Biasanya span/mirror port switch

IPS (Intrusion Prevention System)
  → Aktif, inline memblokir serangan
  → Bisa drop paket, reset koneksi, ban IP
\`\`\`

Populer: **Snort**, **Suricata**, **Zeek**, **Security Onion**.

## Network Security Best Practices

1. **Principle of least privilege** — buka port secukupnya
2. **Default deny** — tolak semua, izinkan yang perlu
3. **Segmentasi jaringan** — pisahkan DMZ, internal, guest
4. **Logging & monitoring** — kirim log ke SIEM (Splunk, ELK)
5. **Patch management** — update rutin router & firewall
6. **Strong authentication** — 2FA untuk akses administrasi

> **Tips:** Kombinasikan firewall dengan IPS dan SIEM untuk pertahanan berlapis (defense in depth). Firewall saja tidak cukup melawan serangan layer 7.

**Tips belajar:** Setup Snort di lab virtual untuk melihat signature attack seperti port scan dan SQL injection secara nyata.`,
    quiz: [
      {
        question: "Perbedaan IDS dan IPS adalah?",
        options: [
          "IDS hanya mendeteksi, IPS mendeteksi sekaligus memblokir",
          "IDS lebih cepat dari IPS",
          "IPS hanya untuk Wi-Fi",
          "IDS bekerja di layer 7, IPS di layer 3"
        ],
        answer: 0,
        explanation: "IDS (Intrusion Detection System) bersifat pasif hanya memberi alert. IPS (Intrusion Prevention System) inline aktif memblokir serangan secara real-time."
      },
      {
        question: "Prinsip 'default deny' pada firewall berarti?",
        options: [
          "Semua traffic ditolak kecuali yang diizinkan eksplisit",
          "Semua traffic diizinkan kecuali yang ditolak",
          "Tidak ada rule yang dibuat",
          "Firewall dimatikan default"
        ],
        answer: 0,
        explanation: "Default deny berarti semua traffic default ditolak, hanya traffic yang secara eksplisit diizinkan rule yang lolos. Ini prinsip paling aman."
      },
      {
        question: "WAF (Web Application Firewall) bekerja di layer OSI mana?",
        options: ["Layer 3 (Network)", "Layer 4 (Transport)", "Layer 7 (Application)", "Layer 2 (Data Link)"],
        answer: 2,
        explanation: "WAF bekerja di layer 7 Application, memfilter request HTTP/HTTPS untuk melindungi aplikasi web dari serangan seperti SQLi dan XSS."
      }
    ]
  },
  {
    level: 4,
    order: 9,
    title: "VPN & Tunneling",
    slug: "vpn-tunneling",
    description: "VPN, tunneling protocol, dan akses remote aman.",
    icon: "🔒",
    isProject: false,
    content: `# VPN & Tunneling

**VPN (Virtual Private Network)** membuat terowongan terenkripsi antara perangkat Anda dan server VPN sehingga traffic tidak dapat disadap pihak ketiga. **Tunneling** adalah teknik mengkapsulasi paket satu protokol di dalam protokol lain.

## Cara Kerja VPN

\`\`\`text
[Client] --encrypted tunnel-- [VPN Server] --plain-- [Internet]

Tanpa VPN:  ISP lihat traffic, bisa disadap MITM
Dengan VPN: ISP hanya lihat enkripsi, IP asli tersembunyi
\`\`\`

## Protokol VPN

\`\`\`text
OpenVPN    → Open-source, OpenSSL, sangat aman & fleksibel
WireGuard  → Modern, ringan, cepat, sedikit kode (audit mudah)
IPsec      → Standar industri, sering site-to-site
L2TP/IPsec → Tunnel layer 2 + enkripsi IPsec
PPTP       → Usang & tidak aman, jangan dipakai
SSTP       → Microsoft, over HTTPS (port 443)
\`\`\`

## Setup WireGuard Cepat

\`\`\`bash
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
\`\`\`

## Use Case VPN

- **Remote work** — akses jaringan kantor dari rumah
- **Privasi** — sembunyikan IP dari ISP dan website
- **Bypass geoblock** — akses konten regional terbatas
- **Keamanan Wi-Fi publik** — enkripsi traffic di kafe/bandara
- **Site-to-site** — menghubungkan kantor cabang ke pusat

## Tunneling Populer

\`\`\`text
SSH tunnel      → ssh -L 8080:localhost:80 user@server
IP-in-IP        → Sederhana, no encryption
GRE             → Cisco, no encryption
STunnel         → SSL wrap arbitrary TCP
\`\`\`

> **Tips:** WireGuard lebih cepat dan lebih mudah dikonfigurasi dibanding OpenVPN untuk pemula. Pilih WireGuard bila memungkinkan.

**Tips belajar:** Setup VPN server WireGuard sendiri di VPS murah untuk praktik enkripsi tunneling dan pengalaman administrasi nyata.`,
    quiz: [
      {
        question: "Protokol VPN yang USANG dan tidak aman adalah?",
        options: ["WireGuard", "OpenVPN", "PPTP", "IPsec"],
        answer: 2,
        explanation: "PPTP memiliki enkripsi lemah (MPPE) dan sudah banyak vulnerabilitas. Tidak boleh dipakai untuk VPN modern."
      },
      {
        question: "Tujuan utama menggunakan VPN adalah?",
        options: [
          "Mempercepat koneksi internet",
          "Membuat terowongan terenkripsi untuk melindungi traffic",
          "Mengganti antivirus",
          "Meningkatkan kapasitas storage"
        ],
        answer: 1,
        explanation: "VPN membuat tunnel terenkripsi sehingga traffic terlindungi dari penyadapan, dan IP asli perangkat tersembunyi."
      },
      {
        question: "Protokol VPN modern yang ringan, cepat, dan kode-nya sedikit sehingga mudah diaudit?",
        options: ["PPTP", "L2TP", "WireGuard", "SSTP"],
        answer: 2,
        explanation: "WireGuard memiliki sekitar 4.000 baris kode (jauh lebih sedikit dari OpenVPN ~100rb), sehingga audit keamanan jauh lebih mudah dan performanya cepat."
      }
    ]
  },
  {
    level: 4,
    order: 10,
    title: "Network Troubleshooting Wireshark",
    slug: "network-troubleshooting-wireshark",
    description: "Troubleshooting jaringan dengan Wireshark dan tools (ping, traceroute, nmap).",
    icon: "🦈",
    isProject: false,
    content: `# Network Troubleshooting Wireshark

**Wireshark** adalah network protocol analyzer paling populer di dunia. Ia menangkap paket real-time dan menampilkannya dalam bentuk yang bisa dibaca manusia. Kombinasikan dengan tool klasik seperti \`ping\`, \`traceroute\`, dan \`nmap\` untuk troubleshooting jaringan yang efektif.

## Tools Dasar

\`\`\`bash
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
\`\`\`

## Capture dengan Wireshark

\`\`\`bash
# Capture dari CLI (tanpa GUI)
sudo tshark -i eth0 -f "tcp port 80" -w capture.pcap

# Buka file capture
wireshark capture.pcap
\`\`\`

Langkah capture di GUI Wireshark:

1. Pilih interface (eth0/wlan0)
2. Klik **Start capturing**
3. Lakukan aktivitas (buka website, ping)
4. **Stop** dan analisa paket

## Display Filter Wireshark

\`\`\`text
ip.addr == 192.168.1.10         # IP tertentu
tcp.port == 443                  # HTTPS saja
http.request.method == "POST"    # POST request
dns.qry.name contains "google"   # DNS lookup tertentu
tcp.flags.syn == 1 && tcp.flags.ack == 0   # SYN packets (scan?)
\`\`\`

## Skenario Troubleshooting

- **Tidak bisa internet** → cek \`ping 8.8.8.8\` (IP) lalu \`ping google.com\` (DNS). Kalau IP ok tapi DNS gagal → masalah DNS.
- **Website lambat** → Wireshark filter \`tcp.analysis.retransmission\` untuk lihat paket rusak.
- **Port scan terdeteksi** → filter \`tcp.flags.syn==1 && tcp.flags.ack==0\` berulang dari IP yang sama.
- **Credensial bocor** → cari \`http.request.method == "POST"\` di website non-HTTPS.

> **Tips:** Gunakan \`tcpdump\` di server tanpa GUI, lalu buka file \`.pcap\` di Wireshark lokal untuk analisis mendalam.

**Tips belajar:** Buka Wireshark saat login ke website non-HTTPS, lalu cari paket POST — Anda akan langsung paham mengapa HTTPS penting.`,
    quiz: [
      {
        question: "Tool yang paling tepat untuk melihat jalur (hop) yang dilewati paket ke server adalah?",
        options: ["ping", "traceroute", "nmap", "netstat"],
        answer: 1,
        explanation: "traceroute mengirim paket dengan TTL bertingkat untuk memetakan setiap router (hop) antara sumber dan tujuan."
      },
      {
        question: "Filter Wireshark untuk hanya menampilkan traffic HTTP POST adalah?",
        options: [
          "http.post",
          "tcp.port == 80",
          "http.request.method == \"POST\"",
          "http.method == post"
        ],
        answer: 2,
        explanation: "Filter Wireshark yang benar adalah \`http.request.method == \"POST\"\`. Filter ini menampilkan hanya request HTTP dengan method POST."
      },
      {
        question: "Jika ping ke 8.8.8.8 berhasil tapi ping google.com gagal, masalah kemungkinan di?",
        options: [
          "Kabel jaringan putus",
          "DNS tidak berfungsi",
          "Firewall memblokir semua traffic",
          "Router mati"
        ],
        answer: 1,
        explanation: "Kalau IP bisa di-ping tapi nama domain tidak, berarti koneksi ke internet OK tapi DNS resolver gagal menerjemahkan nama ke IP."
      }
    ]
  },

  // ============================================
  // LEVEL 5 - DATABASE (8 materials)
  // ============================================
  {
    level: 5,
    order: 1,
    title: "Pengenalan Database",
    slug: "pengenalan-database",
    description: "Apa itu database, RDBMS vs NoSQL, dan perannya dalam aplikasi.",
    icon: "🗄️",
    isProject: false,
    content: `# Pengenalan Database

**Database** adalah kumpulan data terorganisir yang disimpan secara elektronik dan dapat diakses, dikelola, dan diperbarui dengan efisien. **DBMS** (Database Management System) adalah software yang mengelola database — mis. MySQL, PostgreSQL, MongoDB.

## Mengapa Perlu Database?

\`\`\`text
File biasa (.txt/.csv):
  + Sederhana
  - Tidak konsisten saat banyak user
  - Sulit query kompleks
  - Tidak ada transaksi & integritas

Database:
  + Concurrent access aman
  + Query cepat dengan SQL
  + ACID transaction
  + Backup, indexing, security
\`\`\`

## RDBMS vs NoSQL

\`\`\`text
RDBMS (Relational)         | NoSQL
---------------------------|---------------------------
Tabel, row, column         | Document / Key-value / Graph
SQL query language         | API khusus (MongoDB query)
Skema kaku                 | Skema fleksibel
ACID strong                | CAP trade-off (sering eventual)
MySQL, PostgreSQL, SQLite  | MongoDB, Redis, Cassandra
Cocok: data terstruktur   | Cocok: data dinamis, skala besar
\`\`\`

## Komponen Database

\`\`\`bash
# Cek koneksi ke PostgreSQL
psql -U postgres -h localhost

# Lihat database yang ada
\\l

# Buat database baru
CREATE DATABASE coderoom;

# Pilih database
\\c coderoom
\`\`\`

Komponen penting:

1. **Table** — struktur penyimpanan data (row × column)
2. **Schema** — blueprint tabel, tipe data, relasi
3. **Index** — struktur B-Tree untuk pencarian cepat
4. **View** — virtual table hasil query
5. **Stored procedure** — fungsi tersimpan di server DB
6. **Trigger** — aksi otomatis saat event tertentu

## Peran dalam Aplikasi Modern

Hampir semua aplikasi web/mobile menggunakan database untuk menyimpan: user, transaksi, konten, log, konfigurasi. Pemilihan database yang tepat menentukan skalabilitas dan keandalan sistem.

> **Tips:** Pilih RDBMS untuk data yang butuh konsistensi kuat (keuangan, inventory). Pilih NoSQL untuk data dengan skema dinamis atau skala horizontal masif.

**Tips belajar:** Mulai dengan SQLite — zero-config, tanpa server, cocok untuk belajar SQL di laptop tanpa instalasi rumit.`,
    quiz: [
      {
        question: "Perbedaan utama RDBMS dan NoSQL adalah?",
        options: [
          "RDBMS lebih cepat dari NoSQL",
          "RDBMS pakai tabel & SQL, NoSQL pakai document/key-value dengan skema fleksibel",
          "RDBMS gratis, NoSQL berbayar",
          "RDBMS untuk web, NoSQL untuk mobile"
        ],
        answer: 1,
        explanation: "RDBMS menyimpan data dalam tabel relasional dengan SQL dan skema kaku. NoSQL menyimpan dalam bentuk document/key-value/graph dengan skema fleksibel."
      },
      {
        question: "Berikut yang BUKAN contoh RDBMS adalah?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        answer: 2,
        explanation: "MongoDB adalah database NoSQL tipe document store. MySQL, PostgreSQL, dan SQLite adalah RDBMS."
      },
      {
        question: "Apa kepanjangan DBMS?",
        options: [
          "Database Management System",
          "Data Backup Management Service",
          "Database Multi Schema",
          "Direct Base Memory Storage"
        ],
        answer: 0,
        explanation: "DBMS = Database Management System, yaitu software untuk mengelola database (membuat, query, update, backup)."
      }
    ]
  },
  {
    level: 5,
    order: 2,
    title: "Relational Database SQL",
    slug: "relational-database-sql",
    description: "Konsep relational database: table, row, column, primary/foreign key.",
    icon: "📊",
    isProject: false,
    content: `# Relational Database SQL

**Relational Database** menyimpan data dalam tabel saling berhubungan. Konsep ini diperkenalkan E.F. Codd (1970) dan hingga kini mendominasi penyimpanan data terstruktur. **SQL (Structured Query Language)** adalah bahasa standar untuk berinteraksi dengannya.

## Anatomi Tabel

\`\`\`sql
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
\`\`\`

- **Table** — entitas (users, posts, orders)
- **Column/Field** — atribut (id, email, name)
- **Row/Record** — satu baris data
- **Schema** — struktur tabel beserta tipe data

## Kunci: Primary & Foreign Key

\`\`\`text
PRIMARY KEY   → Unik untuk setiap row, tidak boleh NULL
                contoh: users.id

FOREIGN KEY   → Reference ke PK di tabel lain
                contoh: posts.user_id → users.id

UNIQUE        → Nilai unik tapi boleh NULL
NOT NULL      → Wajib diisi
DEFAULT       → Nilai default bila kosong
\`\`\`

## Tipe Data Umum

\`\`\`text
INTEGER / SERIAL    → Bilangan bulat, SERIAL auto-increment
VARCHAR(n)          → String dengan panjang maks n
TEXT                → String panjang tak terbatas
BOOLEAN             → true / false
TIMESTAMP           → Tanggal + waktu
DECIMAL(p,s)        → Angka desimal presisi tetap (uang)
JSON / JSONB        → Data JSON (PostgreSQL)
\`\`\`

## Relasi Antar Tabel

\`\`\`text
One-to-One     → 1 user = 1 profile
One-to-Many    → 1 user = banyak posts (paling umum)
Many-to-Many   → butuh junction table: posts_tags
\`\`\`

> **Tips:** Selalu set **foreign key constraint** dengan \`ON DELETE CASCADE\` atau \`ON DELETE RESTRICT\` agar integritas data terjaga otomatis.

**Tips belajar:**gambar ER diagram di atas kertas sebelum membuat tabel — ini memaksa Anda berpikir soal relasi sebelum coding.`,
    quiz: [
      {
        question: "Apa fungsi PRIMARY KEY dalam tabel?",
        options: [
          "Menghubungkan ke tabel lain",
          "Identifikasi unik setiap row, tidak boleh NULL",
          "Mempercepat pencarian saja",
          "Menyimpan data terenkripsi"
        ],
        answer: 1,
        explanation: "PRIMARY KEY adalah kolom (atau kombinasi) yang unik untuk setiap row dan tidak boleh NULL. Contoh: id pada tabel users."
      },
      {
        question: "Foreign key pada tabel posts yang mereferensikan users(id) menunjukkan relasi?",
        options: ["Many-to-Many", "One-to-One", "One-to-Many", "Tidak ada relasi"],
        answer: 2,
        explanation: "Satu user bisa punya banyak posts, tapi setiap post milik satu user. Itu relasi One-to-Many yang paling umum."
      },
      {
        question: "Tipe data yang TEPAT untuk kolom harga dalam rupiah adalah?",
        options: ["INTEGER", "VARCHAR", "DECIMAL(10,2)", "BOOLEAN"],
        answer: 2,
        explanation: "Untuk uang gunakan DECIMAL(presisi, skala) agar tidak ada pembulatan yang hilang seperti pada FLOAT. DECIMAL(10,2) = maks 99999999.99."
      }
    ]
  },
  {
    level: 5,
    order: 3,
    title: "SQL Query Basics",
    slug: "sql-query-basics",
    description: "SELECT, WHERE, ORDER BY, LIMIT, dan operator SQL dasar.",
    icon: "🔍",
    isProject: false,
    content: `# SQL Query Basics

**SQL** adalah bahasa standar untuk query database relasional. Untuk membaca data, kita gunakan perintah **SELECT**. Modifikasi data menggunakan **INSERT**, **UPDATE**, **DELETE**. Berikut dasar-dasarnya.

## SELECT Dasar

\`\`\`sql
-- Ambil semua kolom
SELECT * FROM users;

-- Ambil kolom tertentu
SELECT id, email, name FROM users;

-- Beri alias
SELECT name AS nama_lengkap FROM users;
\`\`\`

## WHERE & Operator

\`\`\`sql
-- Filter data
SELECT * FROM users
WHERE age >= 18 AND status = 'active';

-- Operator perbandingan & logika
SELECT * FROM products
WHERE price BETWEEN 1000 AND 5000
  AND category IN ('electronics', 'book')
  AND name LIKE 'Laptop%';

-- NULL handling (pakai IS NULL bukan = NULL)
SELECT * FROM users WHERE deleted_at IS NULL;
\`\`\`

Operator umum:

\`\`\`text
=  !=  >  <  >=  <=        → perbandingan
AND  OR  NOT               → logika
BETWEEN x AND y            → range
IN (a, b, c)               → keanggotaan
LIKE 'pre%'  /  '_x_'      → pattern (% multi char, _ single)
IS NULL  /  IS NOT NULL    → null check
\`\`\`

## ORDER BY & LIMIT

\`\`\`sql
-- Urutkan
SELECT * FROM posts
ORDER BY created_at DESC, title ASC;

-- Pagination
SELECT * FROM posts
ORDER BY id DESC
LIMIT 10 OFFSET 20;       -- halaman 3 (10 per halaman)
\`\`\`

## INSERT / UPDATE / DELETE

\`\`\`sql
-- Tambah data
INSERT INTO users (email, name)
VALUES ('andi@mail.com', 'Andi');

-- Update data (selalu pakai WHERE!)
UPDATE users
SET name = 'Andi Wibowo', updated_at = NOW()
WHERE id = 5;

-- Hapus data
DELETE FROM users WHERE id = 5;

-- Hapus semua (HATI-HATI!)
-- DELETE FROM users;   -- JANGAN lupa WHERE
\`\`\`

> **Tips:** Saat UPDATE/DELETE, selalu jalankan \`SELECT\` dengan WHERE yang sama dulu untuk verifikasi baris yang akan terdampak.

**Tips belajar:** Latih di [SQLZoo](https://sqlzoo.net) atau LeetCode Database. Praktik 20 soal SELECT akan terasa jauh lebih melekat daripada sekadar membaca.`,
    quiz: [
      {
        question: "Klausa SQL untuk membatasi jumlah baris hasil query adalah?",
        options: ["WHERE", "ORDER BY", "LIMIT", "GROUP BY"],
        answer: 2,
        explanation: "LIMIT membatasi jumlah baris yang dikembalikan. Kombinasi LIMIT + OFFSET untuk pagination."
      },
      {
        question: "Operator yang benar untuk mencari nama berawalan 'Laptop' adalah?",
        options: [
          "name = 'Laptop*'",
          "name LIKE 'Laptop%'",
          "name MATCH 'Laptop'",
          "name BEGINS 'Laptop'"
        ],
        answer: 1,
        explanation: "Operator LIKE dengan wildcard % (nol/lebih karakter) dan _ (satu karakter). 'Laptop%' cocok dengan 'Laptop', 'Laptop Gaming', dll."
      },
      {
        question: "Cara yang BENAR untuk mengecek nilai NULL di SQL?",
        options: [
          "WHERE column = NULL",
          "WHERE column == NULL",
          "WHERE column IS NULL",
          "WHERE column EQUALS NULL"
        ],
        answer: 2,
        explanation: "NULL tidak bisa dibandingkan dengan = (hasilnya NULL, bukan true/false). Gunakan IS NULL atau IS NOT NULL."
      }
    ]
  },
  {
    level: 5,
    order: 4,
    title: "SQL Advanced JOIN Aggregation",
    slug: "sql-advanced-join",
    description: "INNER/LEFT/RIGHT JOIN, GROUP BY, HAVING, dan aggregate function.",
    icon: "🔗",
    isProject: false,
    content: `# SQL Advanced: JOIN & Aggregation

**JOIN** menggabungkan data dari beberapa tabel berdasarkan relasi. **Aggregation** merangkum banyak baris menjadi satu nilai (count, sum, average). Kedua skill ini esensial untuk analisis data nyata.

## Jenis JOIN

\`\`\`text
INNER JOIN  → Hanya baris yang match di kedua tabel
LEFT JOIN   → Semua baris kiri + match kanan (NULL jika tidak match)
RIGHT JOIN  → Semua baris kanan + match kiri
FULL JOIN   → Semua baris dari kedua tabel
CROSS JOIN  → Cartesian product (kombinasi semua)
\`\`\`

## Contoh JOIN

\`\`\`sql
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
\`\`\`

## Aggregate Functions

\`\`\`text
COUNT(*)          → jumlah baris
COUNT(DISTINCT x) → jumlah nilai unik
SUM(x)            → total
AVG(x)            → rata-rata
MIN(x) / MAX(x)   → nilai ekstrem
STRING_AGG(x, ',')→ gabung string (PostgreSQL)
\`\`\`

## GROUP BY & HAVING

\`\`\`sql
-- Total post per user, hanya yang punya ≥ 3
SELECT u.name, COUNT(p.id) AS total_posts
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
GROUP BY u.id, u.name
HAVING COUNT(p.id) >= 3
ORDER BY total_posts DESC;
\`\`\`

Bedanya:

\`\`\`text
WHERE  → filter baris SEBELUM agregasi
HAVING → filter hasil SETELAH agregasi
\`\`\`

## Tips Performa JOIN

1. Pastikan kolom JOIN ter-INDEX (terutama FK)
2. Hindari SELECT *, ambil kolom yang perlu
3. Filter di WHERE sebelum JOIN bila memungkinkan
4. EXPLAIN ANALYZE untuk lihat query plan

\`\`\`sql
EXPLAIN ANALYZE
SELECT u.name, COUNT(p.id)
FROM users u LEFT JOIN posts p ON u.id = p.user_id
GROUP BY u.id;
\`\`\`

> **Tips:** LEFT JOIN adalah default terbaik saat Anda ingin memastikan tidak ada data dari tabel kiri yang hilang karena tidak ada match.

**Tips belajar:** Gambar **diagram Venn JOIN** di atas kertas. Visualisasi ini akan sangat membantu saat memilih jenis JOIN yang tepat.`,
    quiz: [
      {
        question: "JOIN yang mengembalikan SEMUA baris dari tabel kiri meski tidak ada match di tabel kanan adalah?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"],
        answer: 1,
        explanation: "LEFT JOIN mengembalikan semua baris tabel kiri. Kolom dari tabel kanan akan bernilai NULL bila tidak ada match."
      },
      {
        question: "Perbedaan WHERE dan HAVING adalah?",
        options: [
          "Tidak ada perbedaan",
          "WHERE filter sebelum agregasi, HAVING filter setelah agregasi",
          "WHERE untuk SELECT, HAVING untuk UPDATE",
          "WHERE lebih cepat dari HAVING"
        ],
        answer: 1,
        explanation: "WHERE memfilter baris individual sebelum GROUP BY, sedangkan HAVING memfilter hasil agregat setelah GROUP BY."
      },
      {
        question: "Query untuk menghitung jumlah post per user adalah?",
        options: [
          "SELECT user, COUNT(*) FROM posts",
          "SELECT user_id, COUNT(*) FROM posts GROUP BY user_id",
          "SELECT COUNT(post) GROUP BY user",
          "SELECT user_id, SUM(*) FROM posts"
        ],
        answer: 1,
        explanation: "Untuk menghitung per kelompok, gunakan GROUP BY user_id lalu COUNT(*). Tanpa GROUP BY, COUNT hanya mengembalikan satu angka total."
      }
    ]
  },
  {
    level: 5,
    order: 5,
    title: "Database Design & Normalisasi",
    slug: "database-design-normalisasi",
    description: "ER diagram, normalisasi 1NF/2NF/3NF, dan best practice design.",
    icon: "🏗️",
    isProject: false,
    content: `# Database Design & Normalisasi

**Database design** yang baik membuat sistem cepat, konsisten, dan mudah dipelihara. **Normalisasi** adalah proses menyusun tabel untuk mengurangi redundansi dan anomali data. **ER Diagram** adalah alat visual untuk merancang skema.

## ER Diagram (Entity-Relationship)

\`\`\`text
[Entity] ---(relationship)---> [Entity]
   |                              |
  attributes                   attributes

Contoh:
  User ---< Posts >--- Tags
  (1)         (M:N)
\`\`\`

Komponen ERD:

- **Entity** — tabel (persegi)
- **Attribute** — kolom (oval)
- **Relationship** — garis dengan kardinalitas (1:1, 1:N, M:N)
- **Primary key** — underline pada atribut

## Normalisasi: 1NF, 2NF, 3NF

\`\`\`text
1NF → Atomik (tidak ada nilai ganda/komplit dalam 1 sel)
2NF → 1NF + tidak ada partial dependency (PK komposit)
3NF → 2NF + tidak ada transitive dependency (non-PK → non-PK)
\`\`\`

### Contoh Sebelum Normalisasi (0NF)

\`\`\`text
orders:
  order_id | customer_name | products
  ---------+---------------+------------------------
  1        | Andi          | "Laptop, Mouse, Keyboard"
\`\`\`

Masalah: kolom products tidak atomik → melanggar 1NF.

### Setelah Normalisasi (3NF)

\`\`\`sql
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
\`\`\`

## Best Practice Design

1. **Pilih PK yang stabil** — SERIAL/UUID lebih baik daripada email
2. **Hindari redundancy** — jangan simpan nama user di tabel orders
3. **Index kolom yang sering di-WHERE/JOIN**
4. **Pakai tipe data sekecil mungkin** — SMALLINT bila cukup
5. **Tambahkan created_at & updated_at** di setiap tabel
6. **Soft delete** (kolom deleted_at) bila perlu audit
7. **Naming konsisten** — snake_case, jamak untuk tabel

## Kapan Denormalisasi?

Untuk performa baca ekstrem (data warehouse, dashboard), denormalisasi (menyengaja menambah redundansi) bisa diterima. Tapi untuk OLTP, tetap normalisasi.

> **Tips:** "Normalize until it hurts, denormalize until it works" — Josh Berkus.

**Tips belajar:** Gunakan tool seperti **dbdiagram.io** atau **drawSQL** untuk menggambar ERD online sebelum menulis CREATE TABLE.`,
    quiz: [
      {
        question: "Bentuk normal yang menjamin setiap sel tabel berisi nilai atomik (tidak ganda) adalah?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        answer: 0,
        explanation: "1NF (First Normal Form) mensyaratkan setiap kolom berisi nilai atomik/ tunggal. Tidak boleh ada list dipisah koma dalam satu sel."
      },
      {
        question: "Apa yang harus dilakukan untuk relasi Many-to-Many antara posts dan tags?",
        options: [
          "Tambah kolom tags di tabel posts",
          "Tambah kolom posts di tabel tags",
          "Buat junction table posts_tags dengan FK ke keduanya",
          "Tidak mungkin diimplementasikan"
        ],
        answer: 2,
        explanation: "Many-to-Many butuh junction table (post_tags) berisi post_id dan tag_id sebagai foreign key. PK-nya gabungan keduanya (atau id terpisah)."
      },
      {
        question: "Praktik terbaik untuk primary key user adalah?",
        options: [
          "Email user",
          "Nama lengkap",
          "SERIAL/UUID auto-generated",
          "Nomor telepon"
        ],
        answer: 2,
        explanation: "PK harus stabil & tidak berubah. Email bisa berubah, nama tidak unik. SERIAL (auto-increment) atau UUID adalah pilihan terbaik."
      }
    ]
  },
  {
    level: 5,
    order: 6,
    title: "NoSQL Database MongoDB",
    slug: "nosql-database-mongodb",
    description: "MongoDB, document store, CRUD, dan kapan menggunakan NoSQL.",
    icon: "🍃",
    isProject: false,
    content: `# NoSQL Database MongoDB

**MongoDB** adalah database NoSQL tipe **document store** yang menyimpan data dalam format **BSON** (binary JSON). Sangat fleksibel karena tidak perlu skema kaku — cocok untuk aplikasi modern dengan data dinamis.

## Struktur Data MongoDB

\`\`\`text
Database
  └─ Collection (≈ tabel di RDBMS)
       └─ Document (≈ row, tapi format JSON)
            └─ Field (≈ column)
\`\`\`

Contoh document user:

\`\`\`javascript
{
  _id: ObjectId("65a1b2c3d4e5f6..."),
  name: "Andi",
  email: "andi@mail.com",
  addresses: [
    { city: "Jakarta", zip: "10110" },
    { city: "Bandung", zip: "40111" }
  ],
  meta: { lastLogin: ISODate("2024-01-15"), verified: true }
}
\`\`\`

## Operasi CRUD (Mongo Shell)

\`\`\`bash
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
\`\`\`

## Operator Query Umum

\`\`\`text
$eq, $ne      → sama dengan / tidak
$gt, $gte     → lebih besar (sama dengan)
$lt, $lte     → lebih kecil (sama dengan)
$in, $nin     → ada di / tidak di array
$and, $or     → logika
$regex        → pattern matching
$exists       → field ada/tidak
\`\`\`

## Index di MongoDB

\`\`\`javascript
// Buat index untuk query cepat
db.users.createIndex({ email: 1 }, { unique: true })
db.posts.createIndex({ author: 1, createdAt: -1 })

// Lihat index
db.users.getIndexes()
\`\`\`

## Kapan Pakai MongoDB (vs RDBMS)?

**Pilih MongoDB bila:**
- Skema data berubah cepat / tidak terstruktur
- Butuh skala horizontal (sharding)
- Hierarki dalam (nested document) — komentar, log
- Prototype cepat tanpa migration

**Pilih RDBMS bila:**
- Data sangat relasional & banyak JOIN
- Butuh transaksi ACID kuat (multi-document)
- Skema sudah matang dan jarang berubah

> **Tips:** MongoDB sejak v4.0 mendukung **multi-document ACID transactions**, tapi lebih lambat dari RDBMS untuk kasus tersebut.

**Tips belajar:** Install **MongoDB Atlas** (gratis 512MB cloud) atau jalankan \`docker run mongo\` untuk praktik tanpa setup rumit.`,
    quiz: [
      {
        question: "MongoDB menyimpan data dalam format?",
        options: ["Tabel relasional", "Document BSON (mirip JSON)", "Key-value pair saja", "Graph node"],
        answer: 1,
        explanation: "MongoDB menyimpan data sebagai document BSON (Binary JSON). Tiap document bisa punya struktur berbeda dalam satu collection."
      },
      {
        question: "Konsep di MongoDB yang setara dengan tabel di RDBMS adalah?",
        options: ["Document", "Collection", "Field", "Database"],
        answer: 1,
        explanation: "Collection di MongoDB setara dengan tabel di RDBMS. Berisi kumpulan document, mirip tabel berisi kumpulan row."
      },
      {
        question: "Kapan MongoDB LEBIH cocok dipilih dibanding PostgreSQL?",
        options: [
          "Sistem keuangan dengan banyak transaksi ACID",
          "Data dengan skema dinamis & sering berubah",
          "Aplikasi dengan banyak JOIN kompleks",
          "Sistem inventory dengan integritas ketat"
        ],
        answer: 1,
        explanation: "MongoDB unggul untuk data dengan skema dinamis dan tidak terstruktur. Untuk transaksi keuangan & banyak JOIN, RDBMS masih lebih baik."
      }
    ]
  },
  {
    level: 5,
    order: 7,
    title: "Database Indexing & Performance",
    slug: "database-indexing-performance",
    description: "Index, query optimization, dan database performance tuning.",
    icon: "⚡",
    isProject: false,
    content: `# Database Indexing & Performance

**Index** adalah struktur data khusus (biasanya **B-Tree** atau **Hash**) yang mempercepat pencarian baris. Tanpa index, database harus **full table scan** — membaca semua baris. Dengan index, pencarian jadi O(log n) bukan O(n).

## Cara Kerja Index

\`\`\`text
Tabel users (1 juta baris):
Tanpa index: SELECT * WHERE email='x@y.com'  → scan 1.000.000 baris
Dengan index email:                          → ≈ 20 langkah (B-Tree)
\`\`\`

## Membuat Index

\`\`\`sql
-- Single column index
CREATE INDEX idx_users_email ON users(email);

-- Composite index (urutan kolom PENTING)
CREATE INDEX idx_posts_author_date ON posts(user_id, created_at);

-- Unique index
CREATE UNIQUE INDEX idx_unique_email ON users(email);

-- Lihat index
\\d users    -- di psql
SHOW INDEX FROM users;  -- di MySQL
\`\`\`

## Kapan Index Membantu / Tidak?

\`\`\`text
Bermanfaat:
  ✓ Kolom di WHERE, JOIN, ORDER BY, GROUP BY
  ✓ Kolom dengan kardinalitas tinggi (banyak nilai unik)
  ✓ Foreign key

Tidak bermanfaat / merugikan:
  ✗ Tabel kecil (< 1000 baris)
  ✗ Kolom jarang di-query
  ✗ Tabel yang sering INSERT/UPDATE (index memperlambat write)
  ✗ Kolom boolean (kardinalitas rendah)
\`\`\`

## Analisis Query: EXPLAIN

\`\`\`sql
EXPLAIN ANALYZE
SELECT u.name, COUNT(p.id)
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id;
\`\`\`

Lihat output:

\`\`\`text
Seq Scan    → full table scan (BURUK bila tabel besar)
Index Scan  → pakai index (BAIK)
Hash Join   → join dengan hash table
Nested Loop → cocok untuk sedikit baris
\`\`\`

## Tips Optimasi Query

1. **SELECT spesifik**, hindari \`SELECT *\`
2. **Index kolom yang di-WHERE & JOIN**
3. **Batasi hasil** dengan LIMIT
4. **Pagination pakai keyset** (WHERE id > last_id) lebih cepat dari OFFSET
5. **Hindari function di kolom** — \`WHERE YEAR(date) = 2024\` skip index; pakai range
6. **Materialized view** untuk query agregat berat

\`\`\`sql
-- BURUK: function di kolom mengabaikan index
WHERE DATE(created_at) = '2024-01-15'

-- BAIK: range tetap pakai index
WHERE created_at >= '2024-01-15'
  AND created_at <  '2024-01-16'
\`\`\`

> **Tips:** Setiap index tambahan memperlambat INSERT/UPDATE. Jangan over-index — audit dengan \`pg_stat_user_indexes\` (PostgreSQL) dan hapus yang tidak terpakai.

**Tips belajar:** Aktifkan \`log_min_duration_statement = 100\` di PostgreSQL untuk log query yang lambat dari 100ms — ini cara termudah menemukan query yang perlu dioptimasi.`,
    quiz: [
      {
        question: "Tanpa index, database melakukan pencarian dengan cara?",
        options: [
          "B-Tree lookup",
          "Hash lookup",
          "Full table scan — baca semua baris",
          "Binary search"
        ],
        answer: 2,
        explanation: "Tanpa index, database harus memindai seluruh baris (full table scan) — O(n) kompleksitas. Index mempercepat ke O(log n)."
      },
      {
        question: "Perintah untuk melihat query plan di PostgreSQL adalah?",
        options: ["SHOW PLAN", "DESCRIBE", "EXPLAIN ANALYZE", "PLAN QUERY"],
        answer: 2,
        explanation: "EXPLAIN menunjukkan rencana eksekusi query. EXPLAIN ANALYZE juga menjalankan query dan menampilkan waktu nyata tiap langkah."
      },
      {
        question: "Manakah yang BURUK untuk performa query ber-index?",
        options: [
          "SELECT id, name FROM users WHERE id = 5",
          "WHERE created_at >= '2024-01-15' AND created_at < '2024-01-16'",
          "WHERE DATE(created_at) = '2024-01-15'",
          "SELECT name FROM users ORDER BY email LIMIT 10"
        ],
        answer: 2,
        explanation: "Function pada kolom (DATE(created_at)) menyebabkan index tidak bisa dipakai. Gunakan range comparison agar index tetap efektif."
      }
    ]
  },
  {
    level: 5,
    order: 8,
    title: "Project: Desain Database",
    slug: "project-desain-database",
    description: "Merancang dan membangun database lengkap untuk aplikasi nyata.",
    icon: "🛠️",
    isProject: true,
    content: `# Project: Desain Database Aplikasi E-Commerce

Dalam project ini Anda akan merancang database lengkap untuk aplikasi **e-commerce sederhana** mulai dari ER diagram, skema SQL, sampai query analitik. Project ini menggabungkan semua konsep Level 5.

## 1. Spesifikasi Aplikasi

Aplikasi e-commerce dengan fitur:

- **User** dapat register, login, dan memiliki satu **profile**
- **Seller** dapat menjual banyak **products**
- **Customer** dapat membuat **orders** berisi banyak product
- Setiap order punya **order_items** (qty, harga saat order)
- Product punya **categories** (M:N — satu product bisa banyak kategori)
- Setiap order menghasilkan **payment** dan **shipment**

## 2. Buat ER Diagram

\`\`\`text
users 1--1 profiles
users 1--M orders
users 1--M products (sebagai seller)
orders 1--M order_items
products 1--M order_items
products M--N categories   (lewat product_categories)
orders 1--1 payments
orders 1--1 shipments
\`\`\`

Gunakan **dbdiagram.io** atau **drawSQL** untuk visualisasi sebelum coding.

## 3. Implementasi Skema SQL

\`\`\`sql
CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  email       VARCHAR(255) UNIQUE NOT NULL,
  password    TEXT NOT NULL,
  role        VARCHAR(20) DEFAULT 'customer',
  created_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE categories (
  id    SERIAL PRIMARY KEY,
  name  VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE products (
  id          SERIAL PRIMARY KEY,
  seller_id   INTEGER REFERENCES users(id),
  name        VARCHAR(200) NOT NULL,
  price       DECIMAL(12,2) NOT NULL,
  stock       INTEGER DEFAULT 0,
  created_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE orders (
  id           SERIAL PRIMARY KEY,
  customer_id  INTEGER REFERENCES users(id),
  status       VARCHAR(20) DEFAULT 'pending',
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
\`\`\`

## 4. Tugas Query Analitik

Buat query SQL untuk menjawab:

\`\`\`sql
-- a) Top 5 produk terlaris bulan ini
SELECT p.name, SUM(oi.qty) AS total_sold
FROM order_items oi
JOIN orders o ON oi.order_id = o.id
JOIN products p ON oi.product_id = p.id
WHERE o.created_at >= date_trunc('month', NOW())
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
WHERE o.id IS NULL AND u.role = 'customer';
\`\`\`

## 5. Deliverables

1. File \`schema.sql\` berisi CREATE TABLE lengkap
2. File \`seed.sql\` dengan data dummy (≥ 5 user, 10 produk, 20 order)
3. File \`analytics.sql\` berisi 5 query analitik
4. ER diagram (PNG/PDF)
5. Dokumentasi singkat pilihan design (kenapa pakai snapshot harga di order_items?)

## 6. Bonus Challenge

- Tambahkan **soft delete** (kolom \`deleted_at\`) di semua tabel
- Implementasi **trigger** untuk update \`orders.total\` otomatis saat order_items di-insert
- Buat **view** untuk dashboard seller (revenue harian 30 hari terakhir)
- Migrasikan ke **MongoDB** untuk perbandingan — dokumen product dengan kategori nested

> **Tips:** Kerjakan secara bertahap — skema dulu, lalu seed, baru query analitik. Jangan langsung ke bonus sebelum 5 deliverable utama selesai.

**Tips belajar:** Presentasikan hasil ke teman/recruiter. Penjelasan kenapa Anda memilih desain tertentu (mis. snapshot price) lebih bernilai daripada SQL-nya sendiri.`,
    quiz: [
      {
        question: "Mengapa kolom \`price\` disimpan juga di tabel order_items (snapshot)?",
        options: [
          "Supaya tabel lebih besar",
          "Agar harga historis order tidak berubah saat product.price di-update",
          "Karena tidak bisa JOIN ke products",
          "Untuk mempercepat query INSERT"
        ],
        answer: 1,
        explanation: "Harga product bisa berubah, tapi order yang sudah dibuat harus merekam harga saat transaksi. Maka order_items menyimpan snapshot price."
      },
      {
        question: "Untuk relasi M:N antara products dan categories, kita butuh?",
        options: [
          "Kolom array di tabel products",
          "Junction table product_categories dengan FK ke keduanya",
          "Foreign key di tabel products",
          "Trigger khusus"
        ],
        answer: 1,
        explanation: "Many-to-Many butuh junction table (product_categories) berisi product_id dan category_id sebagai foreign key, dengan PK gabungan."
      },
      {
        question: "Query yang benar untuk menemukan customer yang belum pernah order adalah?",
        options: [
          "SELECT email FROM users WHERE id NOT IN orders",
          "SELECT email FROM users WHERE orders = 0",
          "SELECT u.email FROM users u LEFT JOIN orders o ON o.customer_id = u.id WHERE o.id IS NULL",
          "SELECT email FROM users WHERE customer_id IS NULL"
        ],
        answer: 2,
        explanation: "LEFT JOIN + IS NULL adalah pola klasik untuk 'baris di A yang tidak punya match di B'. Alternatif modern: NOT EXISTS."
      }
    ]
  }
];
