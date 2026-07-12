import { MaterialData } from "./content-types";

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

**Jaringan komputer** adalah kumpulan dua atau lebih perangkat komputer yang saling terhubung melalui media komunikasi untuk berbagi sumber daya (data, printer, internet) dan saling berkomunikasi. Sejak munculnya ARPANET pada 1969, jaringan berevolusi menjadi fondasi internet, aplikasi mobile, cloud computing, hingga Internet of Things (IoT). Memahami konsep dasar jaringan sangat penting bagi developer, sysadmin, dan engineer modern karena hampir semua aplikasi saat ini bergantung pada konektivitas yang andal.

![Gambaran umum arsitektur jaringan komputer](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## Klasifikasi Jaringan Berdasarkan Skala

Jaringan dikelompokkan berdasarkan cakupan geografisnya. Pemahaman skala ini menentukan pilihan teknologi dan topologi yang sesuai:

\`\`\`text
PAN   (Personal Area Network)      → Bluetooth, perangkat personal (≤ 10m)
LAN   (Local Area Network)         → Rumah, kantor, sekolah (≤ 1 km)
MAN   (Metropolitan Area Network)  → Antar gedung dalam kota (≤ 50 km)
WAN   (Wide Area Network)          → Antar kota/negara, contoh: internet
GAN   (Global Area Network)        → Jaringan global lintas benua
\`\`\`

LAN umumnya menggunakan Ethernet dengan kecepatan 1 Gbps hingga 10 Gbps, sementara WAN bergantung pada teknologi ISP seperti fiber optic, MPLS, atau satelit. Wi-Fi adalah contoh LAN wireless yang sangat populer di rumah dan kantor karena fleksibilitasnya.

## Topologi Jaringan

Topologi menentukan cara perangkat dihubungkan secara fisik atau logis. Setiap topologi punya kelebihan dan kekurangan masing-masing:

- **Star** — semua perangkat terhubung ke switch pusat. Paling umum dipakai karena mudah dikelola dan jika satu node gagal, yang lain tetap jalan. Tapi jika switch pusat mati, seluruh jaringan down.
- **Bus** — satu kabel backbone. Mudah dipasang dan murah, tapi rentan gagal total bila kabel putus dan performa menurun saat node bertambah.
- **Ring** — perangkat membentuk lingkaran, data mengalir satu arah. Dulu dipakai Token Ring IBM, kini jarang digunakan.
- **Mesh** — setiap node terhubung ke banyak node lain. Sangat tangguh dan dipakai di jaringan kritis (militer, backbone internet), namun biaya tinggi.
- **Tree** — kombinasi beberapa star dengan struktur hierarki. Cocok untuk jaringan organisasi besar.

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

Jaringan komputer adalah tulang punggung dunia digital modern. Dengan memahami jenis jaringan (PAN/LAN/MAN/WAN), topologi (star/bus/ring/mesh), komponen (switch/router/AP), dan media transmisi, Anda memiliki fondasi yang kuat untuk belajar lebih dalam. Bangunlah lab kecil di rumah dengan satu router dan beberapa perangkat untuk merasakan alur paket secara nyata sebelum melangkah ke konfigurasi profesional.`,
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

**OSI Model** (Open Systems Interconnection) adalah kerangka konseptual 7 layer yang dikembangkan oleh ISO pada 1984 untuk menjelaskan bagaimana data berpindah dari aplikasi di satu komputer ke aplikasi di komputer lain melalui jaringan. Model ini menjadi standar referensi akademik dan industri untuk memahami komunikasi data, walau dalam praktiknya internet lebih banyak menggunakan model TCP/IP yang lebih sederhana. OSI tetap relevan karena memberikan pemisahan tanggung jawab yang jelas antar layer, memudahkan troubleshooting dan desain protokol baru.

![Ilustrasi 7 layer OSI Model](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## Tujuh Layer OSI

\`\`\`text
Layer 7  | Application  | HTTP, FTP, SMTP, DNS, SSH
Layer 6  | Presentation | Enkripsi, kompresi, encoding (TLS, JPEG, ASCII)
Layer 5  | Session      | Manajemen sesi (NetBIOS, RPC, PPTP)
Layer 4  | Transport    | TCP, UDP (port & segment)
Layer 3  | Network      | IP, ICMP, routing antar jaringan
Layer 2  | Data Link    | Ethernet, MAC address, switch
Layer 1  | Physical     | Kabel, sinyal listrik/cahaya/gelombang
\`\`\`

Setiap layer memiliki tugas spesifik dan hanya berkomunikasi dengan layer di atas dan bawahnya. Pendekatan ini disebut **encapsulation** — saat data turun dari layer 7 ke 1, setiap layer menambahkan header sendiri.

## Cara Mengingat Urutan

Mnemonic populer dari atas ke bawah: **A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing. Dari bawah ke atas: **P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way. Trik ini sangat membantu saat ujian sertifikasi seperti CCNA atau CompTIA Network+.

## Alur Data (Encapsulation)

Saat data dikirim dari aplikasi, tiap layer menambahkan header sendiri:

\`\`\`bash
# Layer 4 menambahkan port (TCP/UDP)
# Layer 3 menambahkan IP sumber & tujuan
# Layer 2 menambahkan MAC address + frame check
# Layer 1 mengirim sebagai bit/sinyal fisik

# Simulasi capture paket melihat header tiap layer
sudo tcpdump -i eth0 -nn -vv
\`\`\`

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

\`\`\`text
Port penting yang harus dihafal:
HTTP=80 | HTTPS=443 | SSH=22 | FTP=21 | SMTP=25 | DNS=53 | DHCP=67/68
\`\`\`

## Tips & Best Practices

1. Saat troubleshooting, gunakan pendekatan **bottom-up** — cek layer 1 dulu (kabel, power) sebelum naik ke layer 7.
2. Pahami perbedaan TCP dan UDP karena menentukan pilihan protokol aplikasi.
3. Pelajari nomor port umum: HTTP 80, HTTPS 443, SSH 22, DNS 53, SMTP 25.
4. Gunakan Wireshark untuk melihat header tiap layer secara visual.
5. Hafalkan mnemonic untuk memudahkan mengingat urutan saat ujian sertifikasi.

## Kesimpulan

OSI Model adalah peta mental penting bagi siapa pun yang bekerja dengan jaringan. Walau model TCP/IP lebih dekat dengan implementasi nyata, OSI memberikan kerangka berpikir yang lebih granular dan terstruktur. Dengan menguasai 7 layer, fungsi masing-masing, dan proses encapsulation/decapsulation, Anda dapat melakukan troubleshooting yang lebih sistematis dan memahami protokol baru dengan lebih cepat.`,
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

**TCP/IP** adalah suite protokol dasar yang menjalankan internet. Berbeda dengan OSI 7 layer, TCP/IP menggunakan model 4 layer yang lebih sederhana dan menjadi standar de facto di dunia nyata. Dikembangkan oleh Vint Cerf dan Bob Kahn pada 1970-an untuk ARPANET, TCP/IP terbukti tangguh dan skalabel hingga menghubungkan miliaran perangkat hari ini. Hampir semua aplikasi internet — web, email, streaming, game — berjalan di atas TCP/IP.

![Arsitektur model TCP/IP 4 layer](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## 4 Layer TCP/IP

\`\`\`text
Application  → HTTP, HTTPS, DNS, SSH, FTP, SMTP
Transport    → TCP (andal), UDP (cepat)
Internet     → IP, ICMP, ARP
Link/Access  → Ethernet, Wi-Fi, MAC address
\`\`\`

Pemetaan ke OSI: Application (TCP/IP) mencakup layer 7+6+5 (OSI), Transport = layer 4, Internet = layer 3, Link = layer 2+1. Pendekatan TCP/IP lebih praktis karena menggabungkan layer yang jarang diimplementasikan terpisah di dunia nyata.

## TCP Three-Way Handshake

Sebelum mengirim data, TCP membuat koneksi dengan handshake tiga langkah:

\`\`\`bash
# 1. Client → Server : SYN (synchronize)
# 2. Server → Client : SYN-ACK (acknowledge)
# 3. Client → Server : ACK (connection established)

# Lihat handshake secara langsung
sudo tcpdump -i any -n 'tcp port 80' -S
\`\`\`

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

\`\`\`text
[IP Header (20 byte)] [TCP/UDP Header] [Payload Data]
   - Source IP
   - Destination IP
   - TTL (Time To Live)
   - Protocol field (6=TCP, 17=UDP)
\`\`\`

Field TTL (Time To Live) berkurang 1 setiap kali paket melewati router. Jika mencapai 0, paket dibuang. Mekanisme ini mencegah paket loop selamanya di jaringan. Default TTL: 64 (Linux/macOS), 128 (Windows).

## State Mesin TCP

\`\`\`bash
# Lihat state koneksi TCP
ss -tunap
netstat -tunap

# State umum:
# LISTEN, SYN_SENT, SYN_RECV, ESTABLISHED,
# FIN_WAIT_1, FIN_WAIT_2, TIME_WAIT, CLOSE_WAIT, CLOSED
\`\`\`

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

1. Gunakan \`netstat -tulpn\` atau \`ss -tlnp\` di Linux untuk melihat koneksi aktif dan port terbuka.
2. Pahami state mesin TCP untuk debugging — banyak bug production terkait TIME_WAIT dan CLOSE_WAIT.
3. Untuk aplikasi real-time, pertimbangkan UDP atau QUIC (HTTP/3) untuk performa lebih baik.
4. Aktifkan **TCP keepalive** untuk mendeteksi koneksi mati pada aplikasi long-lived.
5. Gunakan \`tcpdump\` atau Wireshark untuk analisis paket nyata saat debugging.

## Kesimpulan

TCP/IP adalah fondasi yang menjalankan internet. Memahami 4 layer, three-way handshake, perbedaan TCP vs UDP, struktur paket IP, dan state mesin TCP memberi Anda kemampuan untuk membangun aplikasi yang andal dan melakukan debugging jaringan secara efektif. Konsep ini juga kunci untuk memahami serangan seperti SYN flood dan cara mitigasinya.`,
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

**IP Address** adalah alamat unik untuk setiap perangkat di jaringan, sama seperti nomor rumah di dunia nyata. Ada dua versi: **IPv4** (32-bit, ditulis desimal) dan **IPv6** (128-bit, ditulis heksadesimal). IPv4 masih dominan di LAN, sementara IPv6 semakin dipakai di internet publik karena IPv4 sudah kehabisan alamat. Memahami IP addressing dan subnetting adalah skill wajib bagi network engineer, sysadmin, dan cloud architect.

![Konsep IP addressing dan subnetting](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## IPv4 Classes

\`\`\`text
Class A: 1.0.0.0     - 126.255.255.255   (subnet: 255.0.0.0     /8)
Class B: 128.0.0.0   - 191.255.255.255   (subnet: 255.255.0.0   /16)
Class C: 192.0.0.0   - 223.255.255.255   (subnet: 255.255.255.0 /24)
Class D: 224.0.0.0   - 239.255.255.255   (multicast)
Class E: 240.0.0.0   - 255.255.255.255   (eksperimen)
\`\`\`

Private range (RFC 1918): \`10.0.0.0/8\`, \`172.16.0.0/12\`, \`192.168.0.0/16\`. IP ini tidak dialokasikan ke internet publik dan bebas dipakai di LAN. Loopback: \`127.0.0.0/8\` (umumnya 127.0.0.1 = localhost).

## Subnet Mask & CIDR

Subnet mask menentukan bagian network dan host dari IP. CIDR (Classless Inter-Domain Routing) menuliskan prefix dalam format \`/n\`:

\`\`\`bash
# CIDR notation
192.168.1.0/24  = 255.255.255.0    (256 alamat, 254 host)
192.168.1.0/25  = 255.255.255.128  (128 alamat, 126 host)
192.168.1.0/30  = 255.255.255.252  (4 alamat, 2 host)

# Hitung subnet otomatis
ipcalc 192.168.1.0/26
# Output: Network 192.168.1.0, HostMin .1, HostMax .62, Broadcast .63
\`\`\`

CIDR memungkinkan alokasi IP lebih fleksibel dibanding class tradisional. Saat ini hampir semua routing modern menggunakan CIDR.

## Perhitungan Subnet

Rumus jumlah host per subnet: \`2^(32-prefix) - 2\` (kurangi network & broadcast). Rumus jumlah subnet: \`2^(prefix - default_prefix)\`.

Contoh: \`192.168.1.0/26\` dari Class C default /24:
- Bit dipinjam: 26 - 24 = 2 → 4 subnet
- Host per subnet: 2^(32-26) - 2 = 64 - 2 = 62 host
- Range: .0-.63, .64-.127, .128-.191, .192-.255

## Tabel Prefix Populer

\`\`\`text
Prefix | Subnet Mask        | Host | Use case
/24    | 255.255.255.0      | 254  | LAN kantor kecil
/25    | 255.255.255.128    | 126  | Subnet medium
/26    | 255.255.255.192    | 62   | Subnet kecil
/27    | 255.255.255.224    | 30   | VLAN kecil
/28    | 255.255.255.240    | 14   | DMZ / lab
/30    | 255.255.255.252    | 2    | Link point-to-point router
/32    | 255.255.255.255    | 1    | Host tunggal (loopback)
\`\`\`

## IPv6 Singkat

\`\`\`text
2001:0db8:85a3:0000:0000:8a2e:0370:7334
→ disingkat: 2001:db8:85a3::8a2e:370:7334
\`\`\`

IPv6 menghapus broadcast (diganti multicast), menggunakan \`fe80::/10\` untuk link-local, dan mendukung auto-konfigurasi (SLAAC). Setiap interface bisa punya multiple IPv6 address secara bersamaan.

## VLSM (Variable Length Subnet Masking)

VLSM memungkinkan subnet dengan prefix berbeda dalam satu jaringan — menghemat IP. Contoh: department besar pakai /24, department kecil pakai /28. Tanpa VLSM, semua subnet harus pakai ukuran sama (mubazir).

Contoh penerapan VLSM: Anda diberi blok 192.168.10.0/24 dan harus membagi untuk 4 department:
- Engineering (60 host) → 192.168.10.0/26 (62 host)
- Sales (30 host) → 192.168.10.64/27 (30 host)
- Marketing (14 host) → 192.168.10.96/28 (14 host)
- IT Admin (6 host) → 192.168.10.112/29 (6 host)

Tanpa VLSM, semua department akan dapat /26 (62 host) — boros untuk yang kecil. Dengan VLSM, alokasi pas kebutuhan dan sisanya bisa untuk future use.

## Public vs Private IP & NAT

\`\`\`text
Public IP  → Unik di internet, dialokasikan IANA/RIR
Private IP → Hanya untuk LAN, tidak routing di internet
             10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
NAT        → Network Address Translation, translasi private↔public
             Memungkinkan banyak device share 1 public IP
\`\`\`

NAT (Network Address Translation) di router rumah mengubah private IP (192.168.1.x) menjadi public IP ISP saat paket keluar. Inilah yang memungkinkan semua perangkat di rumah share satu koneksi internet. NAT juga memberi lapisan keamanan dasar karena koneksi inbound tidak otomatis diteruskan.

## Tips & Best Practices

1. Gunakan \`ipcalc\` atau \`sipcalc\` di Linux untuk menghitung subnet dengan cepat tanpa salah hitung manual.
2. Hafalkan tabel prefix /24 sampai /30 karena paling sering dipakai di ujian dan konfigurasi router.
3. Dokumentasikan IP allocation di NetBox atau spreadsheet untuk hindari konflik.
4. Pisahkan subnet berdasarkan fungsi: server, guest Wi-Fi, IoT, management.
5. Pertimbangkan IPv6 dual-stack untuk jaringan baru — masa depan internet.

## Kesimpulan

IP addressing dan subnetting adalah skill fundamental yang memungkinkan Anda merancang jaringan yang efisien, menghindari konflik IP, dan mengoptimalkan alokasi. Dengan menguasai IPv4 classes, CIDR, perhitungan subnet, VLSM, dan dasar IPv6, Anda siap menghadapi konfigurasi jaringan nyata maupun ujian sertifikasi seperti CCNA.`,
    quiz: [
      {
        question: "Berapa jumlah host yang tersedia di /24 network?",
        options: ["128", "254", "256", "512"],
        answer: 1,
        explanation: "/24 memiliki 2^8 = 256 alamat, dikurangi network dan broadcast = 254 host tersedia."
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

**DNS (Domain Name System)** adalah sistem yang menerjemahkan nama domain yang mudah diingat (mis. \`google.com\`) menjadi IP address numerik (\`142.250.190.46\`). Tanpa DNS, kita harus menghafal IP setiap website — sesuatu yang mustahil dengan miliaran host di internet. Sering disebut "phonebook internet", DNS adalah salah satu protokol paling penting dan paling sering diabaikan dalam debugging. Memahami DNS sangat berguna saat setup website, email server, atau troubleshoot koneksi.

![Hierarki dan cara kerja DNS](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## Hierarki DNS

\`\`\`text
Root DNS Server (.)
  └─ TLD (.com, .org, .id, .net)
       └─ Authoritative nameserver (example.com)
            └─ Record A / AAAA / CNAME / MX
\`\`\`

Root server dikelola 12 organisasi berbeda dengan total 13 logical instances (A-M). Ada ribuan instance fisik menggunakan anycast. TLD dibagi menjadi gTLD (.com, .org, .net) dan ccTLD (.id, .uk, .jp).

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

Alur resolusi: browser → cache lokal OS → resolver ISP → root server → TLD server → authoritative server → jawaban IP. Setiap langkah di-cache untuk mempercepat query berikutnya (TTL-based).

## Jenis Record DNS

\`\`\`text
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
\`\`\`

## Contoh Konfigurasi Zone

\`\`\`text
; Zone file example.com
@       IN  A      203.0.113.10
www     IN  CNAME  example.com.
mail    IN  A      203.0.113.20
@       IN  MX 10  mail.example.com.
@       IN  TXT    "v=spf1 include:_spf.google.com ~all"
_dmarc  IN  TXT    "v=DMARC1; p=reject;"
\`\`\`

Record TXT untuk SPF dan DKIM sangat penting agar email dari domain Anda tidak ditandai sebagai spam oleh Gmail/Outlook. DMARC menentukan kebijakan jika SPF/DKIM gagal.

## Registrasi Domain

Domain dibeli dari **registrar** (Namecheap, Cloudflare, GoDaddy, Idwebhost, Rumahweb). Saat membeli, Anda menyewa nama untuk periode tertentu (1-10 tahun). Setelah punya domain:

1. Set **NS records** ke hosting/DNS provider
2. Tambahkan **A record** untuk subdomain utama
3. Konfigurasi **MX** untuk email
4. Set **TXT SPF/DKIM/DMARC** untuk keamanan email

DNS propagation (waktu perubahan tersebar ke seluruh dunia) biasanya 1-48 jam tergantung TTL. Untuk perubahan mendesak, turunkan TTL 24 jam sebelumnya.

## DNS Resolver Publik

\`\`\`text
Google DNS    : 8.8.8.8, 8.8.4.4
Cloudflare   : 1.1.1.1, 1.0.0.1 (privacy-first, cepat)
OpenDNS      : 208.67.222.222
Quad9        : 9.9.9.9 (security-focused)
\`\`\`

Cloudflare (1.1.1.1) sering jadi pilihan terbaik untuk performa dan privasi karena tidak log query.

## Tips & Best Practices

1. Gunakan \`dig\` bukan \`ping\` untuk debugging DNS karena lebih detail menampilkan TTL dan record type.
2. Set TTL rendah (300s) saat akan migrasi, tinggikan (3600s) setelah stabil.
3. Selalu konfigurasi SPF, DKIM, DMARC untuk domain yang mengirim email.
4. Gunakan DNSSEC untuk validasi otoritatif (mencegah spoofing).
5. Monitor DNS dengan tools seperti \`dnsmeter\` atau Pingdom untuk pastikan tersedia.

## Kesimpulan

DNS adalah protokol esensial yang membuat internet ramah manusia. Dengan memahami hierarki DNS, jenis record (A, AAAA, CNAME, MX, TXT), alur resolusi, dan cara registrasi domain, Anda dapat mengelola website dan email secara profesional. Setup domain sendiri di Cloudflare (gratis) adalah cara terbaik untuk mempraktikkan teori ini secara langsung.`,
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

**HTTP (HyperText Transfer Protocol)** adalah protokol layer aplikasi untuk mentransfer dokumen web. Diciptakan Tim Berners-Lee di CERN (1989), HTTP berevolusi dari versi 0.9 (text only) ke HTTP/1.1 (1997, persistent connection), HTTP/2 (2015, multiplexing), dan HTTP/3 (2022, QUIC over UDP). **HTTPS** adalah HTTP yang dibungkus enkripsi TLS/SSL — saat ini wajib untuk semua website modern karena browser seperti Chrome menandai HTTP sebagai "Not Secure".

![Cara kerja HTTP dan HTTPS](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## HTTP Methods

\`\`\`text
GET     → Mengambil data (safe, idempotent)
POST    → Mengirim data baru (create)
PUT     → Update seluruh resource (idempotent)
PATCH   → Update sebagian resource
DELETE  → Hapus resource
HEAD    → Hanya header, tanpa body
OPTIONS → Cek method yang didukung (CORS preflight)
\`\`\`

**Safe** = tidak mengubah state server. **Idempotent** = request berulang memberi hasil sama. GET/HEAD/OPTIONS safe; GET/PUT/DELETE idempotent; POST tidak keduanya.

## Status Code

\`\`\`bash
# Curl untuk lihat response header
curl -I https://example.com

# Verifikasi TLS certificate
openssl s_client -connect example.com:443 -servername example.com
\`\`\`

Kategori status code:

\`\`\`text
1xx Informational  (100 Continue, 101 Switching Protocol)
2xx Success        (200 OK, 201 Created, 204 No Content)
3xx Redirection    (301 Moved, 302 Found, 304 Not Modified)
4xx Client Error   (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many Requests)
5xx Server Error   (500 Internal, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout)
\`\`\`

## HTTP Headers Penting

- \`Authorization: Bearer <token>\` — autentikasi JWT/OAuth
- \`Content-Type: application/json\` — tipe body request
- \`Cookie\` / \`Set-Cookie\` — sesi & autentikasi
- \`Cache-Control\` — caching policy (max-age, no-cache)
- \`CSP\` — Content Security Policy (mitigasi XSS)
- \`HSTS\` — paksa HTTPS di browser
- \`X-Frame-Options\` — klikjacking protection
- \`CORS\` — cross-origin resource sharing

## HTTPS & TLS Handshake

\`\`\`text
1. ClientHello  → client kirim supported cipher & random
2. ServerHello  → server pilih cipher & kirim certificate
3. Key Exchange → client verifikasi cert & kirim pre-master secret
4. Finished     → kedua pihak punya session key simetris
5. Application data dienkripsi dengan session key
\`\`\`

TLS 1.3 (2018) menyederhanakan handshake jadi 1-RTT, lebih cepat dan aman. Browser modern sudah drop TLS 1.0/1.1 karena rentan serangan.

## HTTP/2 vs HTTP/1.1

- **Multiplexing** — multiple request dalam 1 koneksi TCP
- **Header compression** (HPACK) — hemat bandwidth
- **Server push** — server bisa kirim resource proaktif
- **Binary protocol** — lebih efisien dari text

\`\`\`bash
# Cek apakah HTTP/2 aktif
curl -I --http2 https://example.com

# Cek versi TLS yang dinegosiasi
openssl s_client -connect example.com:443 -tls1_3
\`\`\`

## Cookies & Session

\`\`\`text
Set-Cookie: session=abc123; HttpOnly; Secure; SameSite=Lax; Max-Age=3600
\`\`\`

Atribut penting cookie:
- **HttpOnly** — tidak bisa diakses JavaScript (anti XSS)
- **Secure** — hanya dikirim via HTTPS
- **SameSite** — proteksi CSRF (Lax/Strict/None)
- **Max-Age / Expires** — lifetime cookie

## Tips & Best Practices

1. Selalu aktifkan **HSTS** dan redirect HTTP → HTTPS untuk mencegah serangan downgrade.
2. Set cookie atribut \`HttpOnly\`, \`Secure\`, \`SameSite=Lax\` untuk keamanan.
3. Gunakan CSP header untuk mitigasi XSS.
4. Aktifkan HTTP/2 atau HTTP/3 di web server untuk performa.
5. Manfaatkan \`Cache-Control\` dan ETag untuk caching efektif.

## Kesimpulan

HTTP/HTTPS adalah protokol inti web. Memahami methods, status code, headers, TLS handshake, dan evolusi HTTP/1.1 → 2 → 3 membuat Anda mampu membangun API yang baik, debugging request di DevTools, dan mengoptimalkan performa website. Selalu gunakan HTTPS di production dengan TLS 1.3 dan aktifkan header keamanan modern.`,
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

**Switching** menghubungkan perangkat dalam satu jaringan (LAN) berdasarkan MAC address di layer 2, sedangkan **routing** menghubungkan antar jaringan berbeda berdasarkan IP address di layer 3. Keduanya adalah fondasi infrastruktur jaringan — tanpa routing, internet global tidak akan ada. Memahami cara router memilih jalur dan cara switch meneruskan frame adalah ilmu wajib bagi network engineer, cloud architect, dan sysadmin yang mengelola infrastruktur multi-tier.

![Routing dan switching antar jaringan](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## Switch vs Router

\`\`\`text
Switch             | Router
-------------------|---------------------
Layer 2 (Data Link)| Layer 3 (Network)
Pakai MAC address  | Pakai IP address
Forward frame      | Forward packet
Buat satu broadcast| Pisahkan broadcast domain
Learning MAC table | Routing table & next-hop
Cepat, hardware    | Lebih cerdas, software
\`\`\`

Switch modern (L3 switch) juga bisa routing antar VLAN, menggabungkan kecepatan hardware dengan inteligensi layer 3.

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

Router memilih entry dengan **longest prefix match** — paling spesifik menang. Bila ada 0.0.0.0/0 (default route), paket dengan tujuan tidak dikenal akan diteruskan ke sana.

## Routing Protocol

\`\`\`text
Static routing   → Manual, cocok untuk jaringan kecil
RIP              → Distance vector, metric = hop count (max 15)
OSPF             → Link-state, konvergen cepat, area-based
IS-IS            → Link-state, dipakai ISP besar
BGP              → Antar autonomous system, dipakai internet global
EIGRP            → Cisco proprietary, hybrid
\`\`\`

Routing protocol dibagi IGP (Interior Gateway Protocol — OSPF, RIP, EIGRP) untuk dalam organisasi, dan EGP (Exterior — BGP) untuk antar organisasi/AS.

## OSPF vs BGP

- **OSPF** digunakan **di dalam** satu organisasi (IGP), memilih jalur berdasarkan bandwidth/cost. Konvergen cepat, mendukung area hierarchy untuk skalabilitas.
- **BGP** menghubungkan **antar** ISP/AS (EGP), jalur ditentukan berdasarkan kebijakan (policy-based routing) bukan hanya metric. BGP adalah protokol yang menjalankan internet global.

\`\`\`text
Contoh Autonomous System:
AS15169 = Google
AS32934 = Facebook/Meta
AS13335 = Cloudflare
AS1299  = Telia (transit)
\`\`\`

## VLAN & Trunking

VLAN (Virtual LAN) membagi satu switch fisik menjadi multiple broadcast domain logis:

\`\`\`text
VLAN 10 → Engineering (192.168.10.0/24)
VLAN 20 → Sales       (192.168.20.0/24)
VLAN 30 → Guest       (192.168.30.0/24)

Inter-VLAN routing dilakukan oleh L3 switch atau router-on-a-stick
\`\`\`

Trunk link antar switch membawa multiple VLAN menggunakan 802.1Q tagging. VLAN meningkatkan keamanan dan mengurangi broadcast traffic.

## Konfigurasi Router Cisco (Contoh)

\`\`\`text
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
\`\`\`

## Tips & Best Practices

1. Gunakan \`traceroute\` atau \`mtr\` untuk melihat router-router mana yang dilewati paket dari komputer Anda menuju server tujuan.
2. Selalu dokumentasikan routing table dan VLAN mapping di NetBox atau spreadsheet.
3. Hindari routing loop dengan protokol yang mendukung split horizon / poison reverse.
4. Untuk high availability, konfigurasi redundancy seperti VRRP/HSRP atau BGP multihoming.
5. Monitor routing updates dengan SNMP/syslog untuk deteksi masalah cepat.

## Kesimpulan

Routing dan switching adalah dua sisi mata uang jaringan. Switch bekerja di layer 2 berbasis MAC untuk hubungkan perangkat dalam LAN, sedangkan router bekerja di layer 3 berbasis IP untuk hubungkan antar jaringan. Dengan memahami routing table, protokol (OSPF, BGP), dan VLAN, Anda dapat merancang jaringan yang efisien dan scalable — dari LAN kantor hingga backbone ISP.`,
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

**Firewall** adalah sistem (hardware atau software) yang memfilter traffic jaringan berdasarkan aturan keamanan. **IDS** (Intrusion Detection System) mendeteksi serangan secara pasif, **IPS** (Intrusion Prevention System) mendeteksi sekaligus memblokir secara aktif. Keduanya melindungi jaringan dari ancaman eksternal dan internal. Di era serangan siber yang makin canggih, firewall saja tidak cukup — diperlukan pendekatan **defense in depth** (pertahanan berlapis) yang menggabungkan berbagai teknologi keamanan.

![Arsitektur firewall dan keamanan jaringan](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## Jenis Firewall

\`\`\`text
Packet Filtering  → Filter per paket (IP, port, protocol) - stateless
Stateful          → Lacak state koneksi TCP - paling umum
Proxy             → Memproxy traffic di layer aplikasi
NGFW              → Next-Gen: deep packet inspection + IPS
WAF               → Web App Firewall (HTTP/HTTPS layer 7)
\`\`\`

NGFW (Next-Gen Firewall) seperti Palo Alto, Fortinet, dan Cisco Firepower menggabungkan traditional firewall dengan IPS, application awareness, dan threat intelligence. WAF (Cloudflare, AWS WAF, ModSecurity) fokus melindungi aplikasi web dari serangan layer 7.

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

Alternatif modern: \`nftables\` (pengganti iptables di kernel 5.x) dan \`ufw\` (Uncomplicated Firewall, wrapper user-friendly di Ubuntu).

## IDS vs IPS

\`\`\`text
IDS (Intrusion Detection System)
  → Pasif, hanya alert & log (mis. Snort mode pasif)
  → Biasanya span/mirror port switch
  → Tidak mempengaruhi traffic

IPS (Intrusion Prevention System)
  → Aktif, inline memblokir serangan
  → Bisa drop paket, reset koneksi, ban IP
  → Sedikit menambah latency
\`\`\`

Populer: **Snort**, **Suricata**, **Zeek** (dulu Bro), **Security Onion** (distro all-in-one). Sumber rule: Emerging Threats, Talos, dan feed komersial.

## Jenis Serangan Jaringan Umum

\`\`\`text
Port Scan         → Reconnaissance (nmap)
SYN Flood         → DoS dengan TCP SYN palsu
DDoS             → Banjir traffic dari botnet
MITM             → Man-in-the-Middle, sniff password
SQL Injection    → Eksploitasi input form
XSS              → Inject script ke web orang lain
Brute Force      → Tebak password SSH/RDP
ARP Spoofing     → Palsukan MAC di LAN
DNS Poisoning    → Corrupt cache DNS
\`\`\`

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

\`\`\`text
Tradisional: "Castle and moat" — sekali masuk, bebas akses
Zero Trust  : "Never trust, always verify" — verifikasi setiap request
            → Identity-based, micro-segmentation, least privilege
\`\`\`

Zero Trust mengasumsikan jaringan sudah terkompromi. Setiap akses diverifikasi berdasarkan identitas, device, konteks (lokasi, waktu), dan policy — bukan sekadar "berada di dalam network".

## Tips & Best Practices

1. Kombinasikan firewall dengan IPS dan SIEM untuk pertahanan berlapis (defense in depth). Firewall saja tidak cukup melawan serangan layer 7.
2. Lakukan penetration test rutin (internal & external) untuk validasi efektivitas aturan.
3. Disable service yang tidak dipakai — setiap port terbuka adalah attack surface.
4. Monitor log secara real-time dengan alerting otomatis untuk anomali.
5. Latih staff dengan phishing simulation — human adalah link terlemah.

## Kesimpulan

Keamanan jaringan bukan produk tunggal, melainkan proses berkelanjutan yang menggabungkan teknologi (firewall, IDS/IPS, WAF), proses (patch, audit, monitoring), dan orang (training, awareness). Dengan menerapkan defense in depth, prinsip least privilege, dan beralih ke Zero Trust, Anda membangun postur keamanan yang lebih tangguh terhadap ancaman modern.`,
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

**VPN (Virtual Private Network)** membuat terowongan terenkripsi antara perangkat Anda dan server VPN sehingga traffic tidak dapat disadap pihak ketiga. **Tunneling** adalah teknik mengkapsulasi paket satu protokol di dalam protokol lain — biasanya dengan enkripsi. VPN dulunya untuk akses kantor dari rumah, kini juga dipakai untuk privasi, bypass geoblock, dan keamanan di Wi-Fi publik. Dengan naiknya remote work sejak pandemi, VPN menjadi tools wajib bagi profesional IT.

![Cara kerja VPN dan tunneling](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

## Cara Kerja VPN

\`\`\`text
[Client] --encrypted tunnel-- [VPN Server] --plain-- [Internet]

Tanpa VPN:  ISP lihat traffic, bisa disadap MITM
Dengan VPN: ISP hanya lihat enkripsi, IP asli tersembunyi
            Website melihat IP VPN server, bukan IP Anda
\`\`\`

VPN mengenkripsi payload paket dan membungkusnya dalam header baru. Hasilnya: tunnel yang aman melalui jaringan tidak terpercaya (internet). Karena ada overhead enkripsi, VPN biasanya sedikit lebih lambat dari koneksi langsung.

## Protokol VPN

\`\`\`text
OpenVPN    → Open-source, OpenSSL, sangat aman & fleksibel
WireGuard  → Modern, ringan, cepat, sedikit kode (audit mudah)
IPsec      → Standar industri, sering site-to-site
L2TP/IPsec → Tunnel layer 2 + enkripsi IPsec
PPTP       → Usang & tidak aman, jangan dipakai
SSTP       → Microsoft, over HTTPS (port 443)
SoftEther  → Multi-protokol, sangat fleksibel
\`\`\`

**WireGuard** (rilis stabil 2020) menjadi tren baru karena kode kecil (~4.000 baris vs OpenVPN ~100.000), performa tinggi, dan kriptografi modern. Sudah terintegrasi kernel Linux sejak 5.6.

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

WireGuard menggunakan UDP saja (default port 51820). Tidak ada handshake TCP yang berat seperti OpenVPN, sehingga lebih cepat terutama pada jaringan mobile dengan latency tinggi.

## Tipe VPN Berdasarkan Skala

\`\`\`text
Remote access  → 1 client ke jaringan kantor (work from home)
Site-to-site   → Kantor cabang ke pusat (rutin menghubungkan LAN)
Host-to-host   → 2 server langsung (mis. DB replication)
Mesh VPN       → Banyak node saling terhubung (Tailscale, ZeroTier)
\`\`\`

**Tailscale** dan **ZeroTier** adalah VPN mesh modern di atas WireGuard — setiap node terhubung langsung ke node lain tanpa server pusat, sangat mudah setup untuk tim kecil.

## Use Case VPN

- **Remote work** — akses jaringan kantor dari rumah dengan aman
- **Privasi** — sembunyikan IP dari ISP dan website pelacak
- **Bypass geoblock** — akses konten regional terbatas (Netflix US, BBC iPlayer)
- **Keamanan Wi-Fi publik** — enkripsi traffic di kafe/bandara/hostel
- **Site-to-site** — menghubungkan kantor cabang ke pusat
- **Bypass sensor** — akses internet bebas di negara dengan pembatasan

## Tunneling Populer

\`\`\`text
SSH tunnel      → ssh -L 8080:localhost:80 user@server (port forwarding)
IP-in-IP        → Sederhana, no encryption
GRE             → Cisco, no encryption (sering dipakai dengan IPsec)
STunnel         → SSL wrap arbitrary TCP
6in4            → Tunnel IPv6 melalui IPv4
\`\`\`

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

VPN dan tunneling adalah teknologi esensial untuk akses remote aman, privasi, dan konektivitas antar jaringan. Dengan menguasai protokol (WireGuard, OpenVPN, IPsec), tipe (remote access, site-to-site, mesh), dan tools modern (Tailscale), Anda dapat membangun infrastruktur akses yang aman untuk individu maupun organisasi. Setup VPN server WireGuard sendiri di VPS murah adalah latihan terbaik untuk praktik nyata.`,
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

**Wireshark** adalah network protocol analyzer paling populer di dunia. Ia menangkap paket real-time dan menampilkannya dalam bentuk yang bisa dibaca manusia — mulai dari header Ethernet hingga payload HTTP. Kombinasikan dengan tool klasik seperti \`ping\`, \`traceroute\`, \`nmap\`, dan \`tcpdump\` untuk troubleshooting jaringan yang efektif. Skill Wireshark sangat dihargai di industri jaringan, keamanan siber, dan DevOps karena memberi visibilitas ke dalam traffic yang tidak bisa dilihat tool lain.

![Wireshark untuk analisis paket jaringan](https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg)

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

**ping** mengirim ICMP Echo Request dan menunggu Reply — cek apakah host reachable dan ukur latency. **traceroute** memetakan router antara Anda dan tujuan dengan TTL bertingkat. **mtr** menggabungkan keduanya real-time. **nmap** adalah swiss army knife untuk scanning jaringan.

## Capture dengan Wireshark

\`\`\`bash
# Capture dari CLI (tanpa GUI)
sudo tshark -i eth0 -f "tcp port 80" -w capture.pcap

# Buka file capture
wireshark capture.pcap

# Filter saat capture (lebih efisien)
sudo tcpdump -i eth0 -w capture.pcap 'tcp port 443'
\`\`\`

Langkah capture di GUI Wireshark:

1. Pilih interface (eth0/wlan0)
2. Klik **Start capturing**
3. Lakukan aktivitas (buka website, ping)
4. **Stop** dan analisa paket
5. Gunakan display filter untuk fokus pada traffic tertentu

## Display Filter Wireshark

\`\`\`text
ip.addr == 192.168.1.10         # IP tertentu
tcp.port == 443                  # HTTPS saja
http.request.method == "POST"    # POST request
dns.qry.name contains "google"   # DNS lookup tertentu
tcp.flags.syn == 1 && tcp.flags.ack == 0   # SYN packets (scan?)
http.response.code == 500        # HTTP 500 errors
tcp.analysis.retransmission      # paket rusak/retry
\`\`\`

Filter Wireshark sangat powerful — bisa filter hampir semua field di setiap protokol. Pelajari filter yang sering dipakai karena bisa menghemat banyak waktu analisis.

## Skenario Troubleshooting

- **Tidak bisa internet** → cek \`ping 8.8.8.8\` (IP) lalu \`ping google.com\` (DNS). Kalau IP ok tapi DNS gagal → masalah DNS.
- **Website lambat** → Wireshark filter \`tcp.analysis.retransmission\` untuk lihat paket rusak.
- **Port scan terdeteksi** → filter \`tcp.flags.syn==1 && tcp.flags.ack==0\` berulang dari IP yang sama.
- **Credensial bocor** → cari \`http.request.method == "POST"\` di website non-HTTPS.
- **Latency tinggi** → \`tcp.analysis.ack_rtt\` untuk lihat round-trip time per paket.
- **Koneksi terputus-putus** → lihat TCP reset (\`tcp.flags.reset==1\`).

## Analisis TCP di Wireshark

\`\`\`text
TCP Stream: Follow TCP Stream untuk lihat percakapan lengkap
TCP Graph: Round-trip time, throughput, window size
Sequence Analysis: Lihat retransmission, dup ACK, out-of-order
\`\`\`

Klik kanan paket TCP → Follow → TCP Stream untuk melihat seluruh percakapan sebagai teks. Sangat berguna untuk debugging HTTP, FTP, atau protokol text-based lainnya.

## Nmap untuk Security Audit

\`\`\`bash
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
\`\`\`

Nmap wajib ada di toolkit setiap sysadmin/security engineer. Pelajari flag utama (\`-sS\`, \`-sV\`, \`-A\`, \`-p\`, \`-O\`) untuk efektif audit jaringan sendiri.

## Topologi & Tools Monitoring

Selain Wireshark, ada tool monitoring jaringan populer:

- **Nagios / Icinga** — alerting berbasis threshold
- **Zabbix** — monitoring komprehensif dengan agent
- **Prometheus + Grafana** — metric time-series + dashboard
- **Cacti / Observium** — SNMP polling untuk SNMP device
- **Elastic Stack (ELK)** — log analysis dan SIEM

## Tips & Best Practices

1. Gunakan \`tcpdump\` di server tanpa GUI, lalu buka file \`.pcap\` di Wireshark lokal untuk analisis mendalam.
2. Capture hanya yang perlu dengan capture filter (\`-f\`) untuk hemat disk dan memory.
3. Untuk traffic HTTPS, gunakan \`SSLKEYLOGFILE\` environment variable agar Wireshark bisa dekripsi TLS.
4. Jangan capture terlalu lama — file bisa menjadi GB dalam menit di jaringan sibuk.
5. Pelajari display filter cheat sheet — ini skill yang membedakan pemula dan ahli.

## Kesimpulan

Wireshark bersama \`ping\`, \`traceroute\`, \`nmap\`, dan \`tcpdump\` adalah toolkit fundamental untuk troubleshooting jaringan. Dengan menguasai capture paket, display filter, analisis TCP stream, dan skenario debugging umum, Anda dapat menyelesaikan masalah jaringan yang kompleks dengan cepat. Praktik terbaik: buka Wireshark saat login ke website non-HTTPS lalu cari paket POST — Anda akan langsung paham mengapa HTTPS penting.`,
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

**Database** adalah kumpulan data terorganisir yang disimpan secara elektronik dan dapat diakses, dikelola, dan diperbarui dengan efisien. **DBMS** (Database Management System) adalah software yang mengelola database — mis. MySQL, PostgreSQL, MongoDB, Redis. Database menjadi jantung hampir semua aplikasi modern: dari e-commerce, banking, social media, hingga IoT. Tanpa database yang andal, aplikasi tidak bisa menyimpan data user, transaksi, atau konten secara persisten.

![Konsep dasar database dan DBMS](https://sfile.chatglm.cn/images-ppt/732bf850a843.jpeg)

## Mengapa Perlu Database?

\`\`\`text
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
\`\`\`

Untuk aplikasi mainan, file mungkin cukup. Tapi begitu ada multiple user, butuh transaksi, atau query kompleks, database menjadi keharusan.

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

Pilih RDBMS bila data terstruktur dan butuh ACID (keuangan, inventory, ERP). Pilih NoSQL bila skema sering berubah atau butuh skala horizontal masif (real-time analytics, content management, IoT).

## Jenis NoSQL

- **Document store** — MongoDB, CouchDB (simpan JSON document)
- **Key-value** — Redis, Memcached (super cepat, sederhana)
- **Column-family** — Cassandra, HBase (skala besar, write-heavy)
- **Graph** — Neo4j, ArangoDB (hubungan kompleks, social network)
- **Time-series** — InfluxDB, TimescaleDB (metric, monitoring)
- **Search engine** — Elasticsearch, Meilisearch (full-text search)

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
6. **Trigger** — aksi otomatis saat event tertentu (INSERT/UPDATE/DELETE)
7. **Transaction** — unit kerja ACID (commit/rollback)

## Konsep ACID

\`\`\`text
A - Atomicity     → Semua operasi berhasil, atau tidak sama sekali
C - Consistency   → Data selalu valid sesuai constraint
I - Isolation     → Concurrent transaction tidak saling mengganggu
D - Durability    → Data tersimpan permanen setelah commit
\`\`\`

ACID menjamin reliabilitas transaksi — khususnya penting di aplikasi keuangan di mana inkonsistensi bisa berarti kehilangan uang.

## Peran dalam Aplikasi Modern

Hampir semua aplikasi web/mobile menggunakan database untuk menyimpan: user, transaksi, konten, log, konfigurasi. Pemilihan database yang tepat menentukan skalabilitas dan keandalan sistem. Pola arsitektur modern:

- **Single DB** — aplikasi kecil, satu DB server
- **Master-slave replication** — write ke master, read dari slave
- **Sharding** — bagi data horizontal ke multiple server
- **CQRS** — terpisah antara command (write) dan query (read)
- **Polyglot persistence** — kombinasi berbagai DB sesuai use case

## Populer DB di Industri 2024

\`\`\`text
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
\`\`\`

## Tips & Best Practices

1. Pilih RDBMS untuk data yang butuh konsistensi kuat (keuangan, inventory). Pilih NoSQL untuk data dengan skema dinamis atau skala horizontal masif.
2. Mulai dengan SQLite — zero-config, tanpa server, cocok untuk belajar SQL di laptop tanpa instalasi rumit.
3. Backup otomatis harian dan test restore secara berkala — backup yang tidak pernah ditest = tidak ada backup.
4. Gunakan connection pooling (PgBouncer, HikariCP) untuk aplikasi production.
5. Monitor slow query dan optimasi dengan index sebelum naik ke hardware lebih besar.

## Kesimpulan

Database adalah komponen esensial setiap aplikasi modern. Dengan memahami perbedaan RDBMS vs NoSQL, jenis-jenis NoSQL, konsep ACID, dan komponen utama database, Anda dapat memilih teknologi yang tepat untuk setiap kasus. Mulailah dengan SQLite untuk belajar, lalu naik ke PostgreSQL untuk production — keduanya gratis dan powerful.`,
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

**Relational Database** menyimpan data dalam tabel saling berhubungan. Konsep ini diperkenalkan E.F. Codd (1970) dengan landasan matematis relational algebra, dan hingga kini mendominasi penyimpanan data terstruktur. **SQL (Structured Query Language)** adalah bahasa standar untuk berinteraksi dengannya — dirancang khusus untuk query data deklaratif (Anda bilang **apa** yang mau diambil, bukan **bagaimana**). PostgreSQL, MySQL, SQLite, SQL Server, dan Oracle semuanya berbasis konsep ini.

![Struktur relational database dengan tabel dan relasi](https://sfile.chatglm.cn/images-ppt/732bf850a843.jpeg)

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
- **Database** — kumpulan tabel yang berelasi

## Kunci: Primary & Foreign Key

\`\`\`text
PRIMARY KEY   → Unik untuk setiap row, tidak boleh NULL
                contoh: users.id

FOREIGN KEY   → Reference ke PK di tabel lain
                contoh: posts.user_id → users.id

UNIQUE        → Nilai unik tapi boleh NULL
NOT NULL      → Wajib diisi
DEFAULT       → Nilai default bila kosong
CHECK         → Validasi kondisi (age >= 0)
\`\`\`

Primary key bisa single column (id) atau composite (post_id + tag_id di junction table). Foreign key menjaga **referential integrity** — tidak bisa insert post dengan user_id yang tidak ada di users.

## Tipe Data Umum

\`\`\`text
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
\`\`\`

## Constraint & Integrity

\`\`\`sql
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
\`\`\`

## Relasi Antar Tabel

\`\`\`text
One-to-One     → 1 user = 1 profile (tambah user_id UNIQUE di profile)
One-to-Many    → 1 user = banyak posts (FK di posts) — PALING UMUM
Many-to-Many   → butuh junction table: posts_tags(post_id, tag_id)
Self-reference → employee.manager_id → employee.id
\`\`\`

Untuk Many-to-Many, junction table berisi FK ke kedua tabel. PK-nya bisa composite (post_id + tag_id) atau id terpisah (lebih fleksibel).

## Normalisasi vs Denormalisasi

- **Normalisasi** — pecah tabel untuk hindari redundansi (3NF umumnya cukup)
- **Denormalisasi** — sengaja duplikasi untuk performa read (data warehouse)

Untuk OLTP (aplikasi transaksi), normalisasi menjamin konsistensi. Untuk OLAP (analitik/reporting), denormalisasi mempercepat query agregat.

## Index Singkat

\`\`\`sql
-- Index untuk pencarian cepat
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_posts_created ON posts(created_at DESC);
\`\`\`

Index adalah topik besar di materi terpisah, tapi ingat: index kolom yang sering di-WHERE/JOIN/ORDER BY.

## Tips & Best Practices

1. Selalu set **foreign key constraint** dengan \`ON DELETE CASCADE\` atau \`ON DELETE RESTRICT\` agar integritas data terjaga otomatis.
2. Gunakan \`SERIAL\` atau \`UUID\` sebagai PK — jangan pakai email/nama yang bisa berubah.
3. Tambahkan \`created_at\` dan \`updated_at\` di setiap tabel untuk audit.
4. Konsisten penamaan: snake_case, tabel jamak (users, posts), kolom tunggal.
5. Untuk uang, SELALU pakai \`DECIMAL\`, bukan \`FLOAT\` (presisi penting).

## Kesimpulan

Relational database dengan SQL adalah fondasi penyimpanan data terstruktur. Dengan menguasai anatomi tabel, primary/foreign key, tipe data, constraint, dan jenis relasi (1:1, 1:N, M:N), Anda dapat merancang skema yang konsisten dan efisien. Gambar ER diagram di atas kertas sebelum membuat tabel — ini memaksa Anda berpikir soal relasi sebelum coding.`,
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

**SQL** adalah bahasa standar untuk query database relasional. Untuk membaca data, kita gunakan perintah **SELECT**. Modifikasi data menggunakan **INSERT**, **UPDATE**, **DELETE**. SQL adalah bahasa **deklaratif** — Anda menyatakan **apa** yang ingin diambil, database yang menentukan **bagaimana**. Ini berbeda dari bahasa prosedural (Python, Java) di mana Anda harus menjelaskan langkah demi langkah. Skill SQL dasar adalah prasyarat wajib bagi setiap developer, data analyst, dan DBA.

![Query SQL dasar dengan SELECT](https://sfile.chatglm.cn/images-ppt/732bf850a843.jpeg)

## SELECT Dasar

\`\`\`sql
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
\`\`\`

Hindari \`SELECT *\` di production — ambil hanya kolom yang dibutuhkan untuk hemat bandwidth dan memory, serta memastikan perubahan skema tidak merusak aplikasi.

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
BETWEEN x AND y            → range (inklusif)
IN (a, b, c)               → keanggotaan
LIKE 'pre%'  /  '_x_'      → pattern (% multi char, _ single)
IS NULL  /  IS NOT NULL    → null check
EXISTS (subquery)          → existensi
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

Untuk pagination besar (>100rb baris), \`OFFSET\` lambat karena harus skip baris. Gunakan **keyset pagination** (\`WHERE id > last_id\`) yang jauh lebih cepat.

## INSERT / UPDATE / DELETE

\`\`\`sql
-- Tambah data
INSERT INTO users (email, name)
VALUES ('andi@mail.com', 'Andi');

-- Insert multiple rows
INSERT INTO users (email, name) VALUES
  ('budi@mail.com', 'Budi'),
  ('citra@mail.com', 'Citra');

-- Insert dengan returning (PostgreSQL)
INSERT INTO users (email, name)
VALUES ('dewi@mail.com', 'Dewi')
RETURNING id, created_at;

-- Update data (selalu pakai WHERE!)
UPDATE users
SET name = 'Andi Wibowo', updated_at = NOW()
WHERE id = 5;

-- Hapus data
DELETE FROM users WHERE id = 5;

-- Hapus semua (HATI-HATI!)
-- DELETE FROM users;   -- JANGAN lupa WHERE
\`\`\`

## Agregasi Sederhana

\`\`\`sql
-- Statistik dasar
SELECT
  COUNT(*)                AS total,
  AVG(price)              AS avg_price,
  MIN(price)              AS min_price,
  MAX(price)              AS max_price,
  SUM(stock)              AS total_stock
FROM products
WHERE category = 'electronics';
\`\`\`

## Pattern Matching dengan LIKE

\`\`\`text
LIKE 'Laptop%'    → mulai dengan 'Laptop' (apapun setelahnya)
LIKE '%Laptop'    → diakhiri 'Laptop'
LIKE '%top%'      → mengandung 'top' di mana saja
LIKE 'L_top'      → 4 huruf, diawali 'L' diakhiri 'top'
ILIKE             → case-insensitive (PostgreSQL)
\`\`\`

LIKE lambat di tabel besar karena tidak bisa pakai index biasa. Untuk pencarian teks advanced, gunakan **full-text search** (\`tsvector\`, \`tsquery\` di PostgreSQL) atau Elasticsearch.

## Transaction (BEGIN/COMMIT)

\`\`\`sql
BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Bila semua OK
COMMIT;

-- Bila ada error, batalkan semua
-- ROLLBACK;
\`\`\`

Transaction menjamin atomicity — kedua update berhasil bareng, atau tidak sama sekali. Sangat penting untuk transfer uang, pemesanan, dan operasi multi-tabel lainnya.

## Tips & Best Practices

1. Saat UPDATE/DELETE, selalu jalankan \`SELECT\` dengan WHERE yang sama dulu untuk verifikasi baris yang akan terdampak.
2. Selalu pakai \`WHERE\` di UPDATE/DELETE — tanpa WHERE, semua baris terkena!
3. Gunakan \`BEGIN/COMMIT\` untuk operasi multi-statement yang harus atomic.
4. Hindari \`SELECT *\` di production — sebut kolom yang dibutuhkan.
5. Untuk pagination besar, gunakan keyset (\`WHERE id > last_id\`) bukan OFFSET.

## Kesimpulan

SQL dasar (SELECT, WHERE, ORDER BY, LIMIT, INSERT, UPDATE, DELETE) adalah fondasi yang harus dikuasai sebelum melangkah ke topik advanced seperti JOIN dan agregasi. Dengan memahami operator, pattern matching, dan transaction, Anda dapat mengelola data di database relasional secara efektif. Latih di SQLZoo atau LeetCode Database — praktik 20 soal SELECT akan terasa jauh lebih melekat daripada sekadar membaca teori.`,
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

**JOIN** menggabungkan data dari beberapa tabel berdasarkan relasi. **Aggregation** merangkum banyak baris menjadi satu nilai (count, sum, average). Kedua skill ini esensial untuk analisis data nyata — hampir semua laporan bisnis (dashboard, revenue, statistik) dibangun dari JOIN + GROUP BY. Menguasai JOIN dan agregasi membedakan developer pemula dari yang mahir — di sinilah SQL benar-benar bersinar dibanding processing manual di aplikasi.

![Diagram Venn berbagai jenis JOIN](https://sfile.chatglm.cn/images-ppt/732bf850a843.jpeg)

## Jenis JOIN

\`\`\`text
INNER JOIN  → Hanya baris yang match di kedua tabel (irisan)
LEFT JOIN   → Semua baris kiri + match kanan (NULL jika tidak match)
RIGHT JOIN  → Semua baris kanan + match kiri
FULL JOIN   → Semua baris dari kedua tabel
CROSS JOIN  → Cartesian product (kombinasi semua, hati-hati!)
SELF JOIN   → Tabel di-JOIN dengan dirinya sendiri
\`\`\`

Visualisasi dengan diagram Venn membantu memilih JOIN yang tepat. LEFT JOIN paling sering dipakai karena memastikan tidak ada data dari tabel utama yang hilang.

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
ARRAY_AGG(x)      → gabung jadi array (PostgreSQL)
BOOL_OR(x)        → true jika ada yang true
BOOL_AND(x)       → true jika semua true
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

Aturan: kolom di SELECT (selain agregat) harus ada di GROUP BY. PostgreSQL ketat soal ini; MySQL dengan mode default juga ketat sejak v5.7.

## Subquery & CTE

\`\`\`sql
-- Subquery
SELECT name, age FROM users
WHERE age > (SELECT AVG(age) FROM users);

-- CTE (Common Table Expression) - lebih readable
WITH active_users AS (
  SELECT * FROM users WHERE status = 'active'
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
\`\`\`

CTE (\`WITH\`) membuat query complex lebih readable dan dapat di-chain. Recursive CTE sangat powerful untuk tree/graph traversal.

## Window Functions

\`\`\`sql
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
\`\`\`

Window function (\`OVER\`) melakukan agregasi tanpa collapse baris — sangat berguna untuk ranking, running total, dan analisis time-series.

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

## Jenis Join di PostgreSQL Lainnya

- \`LATERAL\` — subquery bisa akses kolom tabel outer
- \`NATURAL JOIN\` — JOIN otomatis berdasarkan nama kolom sama (hindari, rentan bug)
- \`USING (col)\` — shorthand jika nama kolom sama di kedua tabel

## Tips & Best Practices

1. LEFT JOIN adalah default terbaik saat Anda ingin memastikan tidak ada data dari tabel kiri yang hilang karena tidak ada match.
2. Gunakan alias tabel (\`u\`, \`p\`) untuk query lebih ringkas — tapi konsisten dan jelas.
3. Untuk query kompleks, pecah dengan CTE (\`WITH\`) supaya readable.
4. Hindari \`SELECT *\` di JOIN — ambil kolom spesifik.
5. Untuk "tidak ada match" pattern, gunakan \`LEFT JOIN ... WHERE right.id IS NULL\` atau \`NOT EXISTS\`.

## Kesimpulan

JOIN dan aggregation adalah jantung SQL untuk analisis data. Dengan menguasai INNER/LEFT/RIGHT JOIN, GROUP BY/HAVING, subquery, CTE, dan window function, Anda dapat menjawab hampir semua pertanyaan bisnis dari data. Gambar diagram Venn JOIN di atas kertas — visualisasi ini akan sangat membantu saat memilih jenis JOIN yang tepat untuk setiap kasus.`,
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

**Database design** yang baik membuat sistem cepat, konsisten, dan mudah dipelihara. **Normalisasi** adalah proses menyusun tabel untuk mengurangi redundansi dan anomali data. **ER Diagram** adalah alat visual untuk merancang skema sebelum coding. Desain yang buruk menghasilkan data tidak konsisten, query lambat, dan migrasi yang menyiksa. Sebaliknya, desain baik bisa bertahan puluhan tahun (banyak skema bank masih mirip desain 1970-an). Investasi waktu di fase desain selalu lebih murah dari refactor di production.

![ER Diagram dan proses normalisasi](https://sfile.chatglm.cn/images-ppt/732bf850a843.jpeg)

## ER Diagram (Entity-Relationship)

\`\`\`text
[Entity] ---(relationship)---> [Entity]
   |                              |
  attributes                   attributes

Contoh:
  User ---< Posts >--- Tags
  (1)         (M:N)

  Customer ---< Orders ---< OrderItems >--- Products
\`\`\`

Komponen ERD:

- **Entity** — tabel (persegi)
- **Attribute** — kolom (oval)
- **Relationship** — garis dengan kardinalitas (1:1, 1:N, M:N)
- **Primary key** — underline pada atribut
- **Notation** — Chen, Crow's Foot, UML (paling umum: Crow's Foot)

## Normalisasi: 1NF, 2NF, 3NF

\`\`\`text
1NF → Atomik (tidak ada nilai ganda/komplit dalam 1 sel)
2NF → 1NF + tidak ada partial dependency (PK komposit)
3NF → 2NF + tidak ada transitive dependency (non-PK → non-PK)
BCNF → 3NF yang lebih ketat
4NF, 5NF → kasus khusus (multi-valued dependency)
\`\`\`

Tujuan normalisasi: eliminasi anomali (insert, update, delete) dan redundansi. Sebagian besar aplikasi cukup sampai 3NF.

### Contoh Sebelum Normalisasi (0NF)

\`\`\`text
orders:
  order_id | customer_name | products
  ---------+---------------+------------------------
  1        | Andi          | "Laptop, Mouse, Keyboard"
\`\`\`

Masalah: kolom products tidak atomik → melanggar 1NF. Juga ada redundansi nama customer di setiap order (anomali update).

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

Sekarang: nama customer disimpan sekali di \`customers\`. Detail produk per order di \`order_items\`. Tidak ada redundansi.

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

\`\`\`text
- Single table inheritance   → 1 tabel untuk semua tipe (simple, banyak NULL)
- Class table inheritance    → 1 tabel parent + 1 tabel per subtype
- Junction table             → untuk M:N (post_tags)
- Slowly Changing Dimension  → untuk data warehouse (SCD Type 2)
- Snapshot                   → simpan nilai historis (price di order_items)
\`\`\`

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

Desain database yang baik dimulai dari ER diagram yang matang, dilanjutkan normalisasi hingga 3NF, dan diakhiri dengan best practice naming + indexing. Walau denormalisasi kadang perlu untuk performa, default-nya normalisasi. Dengan tool seperti dbdiagram.io dan pemahaman 1NF/2NF/3NF, Anda dapat merancang skema yang konsisten, efisien, dan tahan uji waktu.`,
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

**MongoDB** adalah database NoSQL tipe **document store** yang menyimpan data dalam format **BSON** (Binary JSON). Sangat fleksibel karena tidak perlu skema kaku — cocok untuk aplikasi modern dengan data dinamis, prototype cepat, dan skala horizontal. Diciptakan pada 2009 oleh perusahaan 10gen (sekarang MongoDB Inc), MongoDB kini menjadi NoSQL terpopuler dengan adopsi luas di startup hingga enterprise seperti Uber, eBay, dan Adobe.

![Struktur document store MongoDB](https://sfile.chatglm.cn/images-ppt/732bf850a843.jpeg)

## Struktur Data MongoDB

\`\`\`text
Database
  └─ Collection (≈ tabel di RDBMS)
       └─ Document (≈ row, tapi format JSON)
            └─ Field (≈ column)
\`\`\`

Perbedaan kunci: document bisa punya struktur berbeda dalam satu collection (schemaless). Tapi best practice tetap maintain konsistensi schema via application layer atau MongoDB schema validation.

## Contoh Document

\`\`\`javascript
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
\`\`\`

Nested document dan array mendalam sangat natural di MongoDB. Hal yang di RDBMS butuh 3 tabel (users, addresses, tags) bisa di MongoDB disimpan dalam 1 document.

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
$elemMatch    → match element di array
$size         → panjang array
$type         → tipe BSON
\`\`\`

## Update Operator

\`\`\`javascript
$set    : set nilai field
$unset  : hapus field
$inc    : increment angka
$push   : tambah ke array
$pull   : hapus dari array
$rename : ganti nama field
$min/$max : update hanya jika lebih kecil/besar
\`\`\`

Operator \`$\` adalah positional operator — update element pertama yang match di array. Sangat powerful untuk update nested.

## Index di MongoDB

\`\`\`javascript
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
\`\`\`

MongoDB mendukung banyak tipe index: single, compound, multikey (array), text, geospatial, hashed (untuk sharding). Tanpa index, query melakukan \`COLLSCAN\` (collection scan) yang lambat di data besar.

## Aggregation Pipeline

\`\`\`javascript
// Total order per user, hanya yang > 5
db.orders.aggregate([
  { $group: { _id: "$userId", total: { $sum: "$amount" } } },
  { $match: { total: { $gt: 5 } } },
  { $sort: { total: -1 } },
  { $limit: 10 }
])
\`\`\`

Aggregation pipeline adalah fitur paling powerful MongoDB — mirip SQL JOIN+GROUP BY+HAVING tapi dengan stage berantai. Stage umum: \`$match\`, \`$group\`, \`$project\`, \`$sort\`, \`$limit\`, \`$lookup\` (JOIN), \`$unwind\` (explode array).

## Replica Set & Sharding

\`\`\`text
Replica Set → 1 primary + N secondary, auto-failover
              - High availability
              - Read scaling (read dari secondary)
              - Disaster recovery

Sharding    → Data dibagi horizontal ke multiple shard
              - Horizontal scaling (write scaling)
              - Sharding key menentukan distribusi
              - Mongos sebagai query router
\`\`\`

Sharding cocok untuk dataset >1TB atau write throughput tinggi. Pemilihan shard key krusial — salah pilih = hot shard dan tidak scalable.

## Transaksi Multi-Document

Sejak v4.0, MongoDB mendukung **multi-document ACID transactions**:

\`\`\`javascript
const session = db.getMongo().startSession()
session.startTransaction()
try {
  db.accounts.updateOne({_id: 1}, {$inc: {balance: -100}}, {session})
  db.accounts.updateOne({_id: 2}, {$inc: {balance: 100}}, {session})
  session.commitTransaction()
} catch (e) {
  session.abortTransaction()
}
\`\`\`

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
2. Tetap validasi schema di application layer walau MongoDB schemaless — gunakan \`JSON Schema Validation\` di collection.
3. Index field yang sering di-query, terutama yang dipakai bersamaan (compound index).
4. Hindari document yang tumbuh tak terbatas (16MB limit) — gunakan referensi untuk data besar.
5. Gunakan \`explain()\` untuk verifikasi query pakai index, bukan COLLSCAN.

## Kesimpulan

MongoDB adalah database document store yang fleksibel dan scalable. Dengan menguasai struktur document, operator CRUD, aggregation pipeline, index, replica set, dan transaksi multi-document, Anda dapat membangun aplikasi yang tangguh untuk data dinamis. Untuk skema yang sangat relasional atau transaksi berat, RDBMS tetap pilihan lebih baik. Polyglot persistence — menggunakan beberapa DB sesuai kebutuhan — adalah pola modern.`,
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

**Index** adalah struktur data khusus (biasanya **B-Tree** atau **Hash**) yang mempercepat pencarian baris. Tanpa index, database harus **full table scan** — membaca semua baris. Dengan index, pencarian jadi O(log n) bukan O(n). Perbedaannya dramatis: query yang butuh detik bisa jadi milidetik. Tapi index juga punya biaya — memperlambat INSERT/UPDATE/DELETE dan memakan storage. Skill indexing adalah seni yang membedakan developer biasa dari DBA profesional.

![Cara kerja database index B-Tree](https://sfile.chatglm.cn/images-ppt/732bf850a843.jpeg)

## Cara Kerja Index

\`\`\`text
Tabel users (1 juta baris):
Tanpa index: SELECT * WHERE email='x@y.com'  → scan 1.000.000 baris
Dengan index email:                          → ≈ 20 langkah (B-Tree)
\`\`\`

B-Tree (Balanced Tree) adalah struktur pohon seimbang di mana pencarian membutuhkan log₂(n) langkah. Untuk 1 juta baris, itu sekitar 20 langkah — jauh lebih cepat dari scan 1 juta baris.

## Membuat Index

\`\`\`sql
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
\\d users    -- di psql
SHOW INDEX FROM users;  -- di MySQL
\`\`\`

## Tipe Index

\`\`\`text
B-Tree        → Default, cocok untuk =, <, >, BETWEEN, ORDER BY
Hash          → Hanya = equality (cepat tapi terbatas)
GIN           → Array, JSONB, full-text search (PostgreSQL)
GiST          → Geometric, range (PostgreSQL)
BRIN          → Block range, hemat space untuk data time-series
Bitmap        → Internal, gabungan beberapa index
\`\`\`

## Composite Index: Urutan Kolom Penting

\`\`\`sql
-- Index ini berguna untuk:
CREATE INDEX idx ON posts(user_id, created_at);

-- ✓ WHERE user_id = 5
-- ✓ WHERE user_id = 5 AND created_at > '2024-01-01'
-- ✓ WHERE user_id = 5 ORDER BY created_at
-- ✗ WHERE created_at > '2024-01-01'   -- TIDAK pakai index (leftmost rule)
\`\`\`

Aturan leftmost: index composite hanya efektif jika query pakai prefix kolom dari kiri. Susun kolom berdasarkan selectivity (paling unik/filtering dulu).

## Kapan Index Membantu / Tidak?

\`\`\`text
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
Index Only Scan → pakai index saja, tidak baca tabel (TERBAIK)
Hash Join   → join dengan hash table (baik untuk besar)
Nested Loop → cocok untuk sedikit baris
Hash Aggregate → agregasi dengan hash
Sort        → bisa dihilangkan dengan index yang tepat
\`\`\`

\`ANALYZE\` menjalankan query dan menampilkan waktu nyata. \`EXPLAIN\` saja hanya menampilkan plan tanpa eksekusi.

## Tips Optimasi Query

1. **SELECT spesifik**, hindari \`SELECT *\` — bawa lebih sedikit kolom
2. **Index kolom yang di-WHERE & JOIN** — terutama FK
3. **Batasi hasil** dengan LIMIT
4. **Pagination pakai keyset** (\`WHERE id > last_id\`) lebih cepat dari OFFSET untuk halaman besar
5. **Hindari function di kolom** — \`WHERE YEAR(date) = 2024\` skip index; pakai range
6. **Materialized view** untuk query agregat berat yang sering dijalankan
7. **Partition tabel besar** berdasarkan range (mis. per bulan)

\`\`\`sql
-- BURUK: function di kolom mengabaikan index
WHERE DATE(created_at) = '2024-01-15'

-- BAIK: range tetap pakai index
WHERE created_at >= '2024-01-15'
  AND created_at <  '2024-01-16'
\`\`\`

## Connection Pooling

Setiap koneksi DB memakan memory (5-10MB di PostgreSQL). Tanpa pooling, aplikasi akan cepat habis koneksi:

\`\`\`text
Tanpa pool: 1000 request → 1000 koneksi → DB overload
Dengan pool: 1000 request → 20 koneksi pool → DB stabil
\`\`\`

Tool populer:
- **PgBouncer** (PostgreSQL) — connection pooler eksternal
- **HikariCP** (Java) — library di aplikasi
- **pgxpool** (Go) — built-in driver
- **Prisma** — pooling otomatis

## Monitoring & Tuning

\`\`\`sql
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
\`\`\`

## Tips & Best Practices

1. Setiap index tambahan memperlambat INSERT/UPDATE. Jangan over-index — audit dengan \`pg_stat_user_indexes\` (PostgreSQL) dan hapus yang tidak terpakai.
2. Aktifkan \`log_min_duration_statement = 100\` di PostgreSQL untuk log query yang lambat dari 100ms — ini cara termudah menemukan query yang perlu dioptimasi.
3. Lakukan \`ANALYZE\` setelah import data besar agar statistik planner akurat.
4. Monitor \`pg_stat_activity\` untuk koneksi yang stuck long-query.
5. Untuk data time-series besar, pertimbangkan TimescaleDB atau partition native.

## Kesimpulan

Indexing dan query optimization adalah skill esensial untuk aplikasi yang skalabel. Dengan memahami B-Tree, composite index (leftmost rule), EXPLAIN ANALYZE, dan anti-pattern (function di kolom), Anda dapat membuat query 100x lebih cepat. Selalu ukur sebelum dan sesudah optimasi — "premature optimization is the root of all evil" tapi begitu ada bottleneck, index biasanya solusi pertama.`,
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

\`\`\`text
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
\`\`\`

Gunakan **dbdiagram.io** atau **drawSQL** untuk visualisasi sebelum coding. Tool ini juga bisa generate SQL dari diagram langsung.

## 3. Implementasi Skema SQL

\`\`\`sql
CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  email       VARCHAR(255) UNIQUE NOT NULL,
  password    TEXT NOT NULL,
  role        VARCHAR(20) DEFAULT 'customer',
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
CREATE INDEX idx_products_active ON products(is_active, price);
\`\`\`

## 4. Seed Data Dummy

\`\`\`sql
-- Insert users (3 seller + 2 customer)
INSERT INTO users (email, password, role) VALUES
  ('seller1@mail.com', '$2a$10$hash1', 'seller'),
  ('seller2@mail.com', '$2a$10$hash2', 'seller'),
  ('cust1@mail.com', '$2a$10$hash3', 'customer'),
  ('cust2@mail.com', '$2a$10$hash4', 'customer');

-- Insert categories
INSERT INTO categories (name, slug) VALUES
  ('Elektronik', 'elektronik'),
  ('Fashion', 'fashion'),
  ('Makanan', 'makanan');

-- Insert products (10 items)
INSERT INTO products (seller_id, name, price, stock) VALUES
  (1, 'Laptop ASUS', 12000000, 5),
  (1, 'Mouse Logitech', 250000, 50),
  (2, 'Kaos Premium', 95000, 100),
  (2, 'Celana Jeans', 250000, 30);

-- Insert orders (20 orders)
INSERT INTO orders (customer_id, status, total)
SELECT
  3 + (random() * 1)::int,
  CASE (random() * 3)::int WHEN 0 THEN 'pending' WHEN 1 THEN 'paid' ELSE 'shipped' END,
  (random() * 1000000)::numeric(12,2)
FROM generate_series(1, 20);
\`\`\`

## 5. Tugas Query Analitik

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
  SELECT customer_id, DATE_TRUNC('month', MIN(created_at)) AS first_month
  FROM orders GROUP BY customer_id
),
month2_orders AS (
  SELECT DISTINCT o.customer_id
  FROM orders o
  JOIN first_order f ON f.customer_id = o.customer_id
  WHERE DATE_TRUNC('month', o.created_at) = f.first_month + INTERVAL '1 month'
)
SELECT COUNT(DISTINCT f.customer_id) AS retained,
       (SELECT COUNT(*) FROM first_order) AS total
FROM first_order f
JOIN month2_orders m ON m.customer_id = f.customer_id;
\`\`\`

## 6. Trigger & View (Bonus)

\`\`\`sql
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
WHERE o.created_at >= NOW() - INTERVAL '30 days'
GROUP BY u.id, u.email;
\`\`\`

## 7. Deliverables

1. File \`schema.sql\` berisi CREATE TABLE lengkap dengan constraint & index
2. File \`seed.sql\` dengan data dummy (≥ 5 user, 10 produk, 20 order)
3. File \`analytics.sql\` berisi 5 query analitik
4. ER diagram (PNG/PDF dari dbdiagram.io)
5. Dokumentasi singkat pilihan design (kenapa pakai snapshot harga di order_items?)
6. File \`bonus.sql\` berisi trigger & view (opsional)

## 8. Bonus Challenge

- Tambahkan **soft delete** (kolom \`deleted_at\`) di semua tabel
- Implementasi **trigger** untuk update \`orders.total\` otomatis saat order_items di-insert
- Buat **view** untuk dashboard seller (revenue harian 30 hari terakhir)
- Migrasikan ke **MongoDB** untuk perbandingan — dokumen product dengan kategori nested
- Implementasi **full-text search** untuk produk dengan PostgreSQL \`tsvector\`
- Tambahkan **row-level security** agar seller hanya lihat produk sendiri

## Tips & Best Practices

1. Kerjakan secara bertahap — skema dulu, lalu seed, baru query analitik. Jangan langsung ke bonus sebelum 5 deliverable utama selesai.
2. Test skema dengan data edge case: qty=0, price negatif, order tanpa item, dsb.
3. Verifikasi query dengan \`EXPLAIN ANALYZE\` — pastikan pakai index.
4. Dokumentasikan setiap keputusan desain (mis. "snapshot price karena harga bisa berubah, order harus tetap akurat").
5. Presentasikan hasil ke teman/recruiter. Penjelasan kenapa Anda memilih desain tertentu (mis. snapshot price) lebih bernilai daripada SQL-nya sendiri.

## Kesimpulan

Project ini mengintegrasikan semua konsep Level 5: desain skema, normalisasi, indexing, SQL query, JOIN, agregasi, trigger, dan view. Dengan menyelesaikan e-commerce database end-to-end, Anda memiliki portofolio konkret yang menunjukkan kemampuan database engineering. Hasilnya bisa dijadikan bahan diskusi interview dan dasar untuk aplikasi nyata.`,
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
