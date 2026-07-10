/**
 * Content Enhancer Script
 * Reads the content files, adds images and expands content for each material,
 * then re-seeds the database.
 */
import { db } from "../src/lib/db";
import { hashPassword } from "../src/lib/auth";
import { contentLevels1to3 } from "./content-levels-1-3";
import { contentLevels4to5 } from "./content-levels-4-5";
import { contentLevels6to8 } from "./content-levels-6-8";
import type { MaterialData } from "../src/lib/content-types";

// Material-specific images — unique image per material (not per level)
const MATERIAL_IMAGES: Record<string, string> = {
  "1_command-line-interface": "https://sfile.chatglm.cn/images-ppt/55ec96ace5b7.jpg",
  "1_dasar-internet-web": "https://sfile.chatglm.cn/images-ppt/02ebffcc571f.jpg",
  "1_file-system-management": "https://sfile.chatglm.cn/images-ppt/bd0adb63f340.jpeg",
  "1_git-version-control": "https://sfile.chatglm.cn/images-ppt/844b3398d70d.png",
  "1_hardware-komputer": "https://sfile.chatglm.cn/images-ppt/5736e9a0cfac.jpg",
  "1_pengenalan-dunia-it": "https://sfile.chatglm.cn/images-ppt/85b8ec210a95.jpg",
  "1_sistem-bilangan-encoding": "https://sfile.chatglm.cn/images-ppt/26f868bc9643.jpg",
  "1_sistem-operasi": "https://sfile.chatglm.cn/images-ppt/87a4b1b2ec74.jpg",
  "1_software-installation": "https://sfile.chatglm.cn/images-ppt/aeed7d5f72ca.jpg",
  "1_virtual-machine-container": "https://sfile.chatglm.cn/images-ppt/ddf18b19db90.jpg",
  "2_bahasa-pemrograman-populer": "https://sfile.chatglm.cn/images-ppt/db8eb4afe425.jpg",
  "2_error-handling": "https://sfile.chatglm.cn/images-ppt/1bb13cbd71ae.png",
  "2_file-io": "https://sfile.chatglm.cn/images-ppt/a9cd79450b7c.jpg",
  "2_function-modular-code": "https://sfile.chatglm.cn/images-ppt/81f6cfb86174.jpg",
  "2_operator-ekspresi": "https://sfile.chatglm.cn/images-ppt/966ef2c7a2d4.jpg",
  "2_pengenalan-pemrograman": "https://sfile.chatglm.cn/images-ppt/99fa98a727a9.jpg",
  "2_perulangan-loop": "https://sfile.chatglm.cn/images-ppt/a9bb2941d047.jpg",
  "2_project-aplikasi-cli": "https://sfile.chatglm.cn/images-ppt/fcb439bdacf9.jpg",
  "2_python-dasar": "https://sfile.chatglm.cn/images-ppt/75bd99a38ebe.jpg",
  "2_struktur-data-array-object": "https://sfile.chatglm.cn/images-ppt/c9a5bf558fe0.jpeg",
  "2_struktur-kontrol-if-else": "https://sfile.chatglm.cn/images-ppt/c4138a6bf0fb.png",
  "2_variabel-tipe-data": "https://sfile.chatglm.cn/images-ppt/9ce74a4875e6.jpg",
  "3_backend-nodejs": "https://sfile.chatglm.cn/images-ppt/aa202d2999af.jpg",
  "3_css-dasar": "https://sfile.chatglm.cn/images-ppt/a68ab3ebb443.png",
  "3_css-layout-flexbox-grid": "https://sfile.chatglm.cn/images-ppt/7097fbf56a3e.jpg",
  "3_dom-manipulation": "https://sfile.chatglm.cn/images-ppt/d92a0f5df781.jpg",
  "3_fetch-api-ajax": "https://sfile.chatglm.cn/images-ppt/573cdc58d69c.jpg",
  "3_frontend-framework-react": "https://sfile.chatglm.cn/images-ppt/9c4f823056e5.jpg",
  "3_html-dasar": "https://sfile.chatglm.cn/images-ppt/759baf68f428.jpg",
  "3_html-forms-semantic": "https://sfile.chatglm.cn/images-ppt/5f4bd43552ac.png",
  "3_javascript-dasar": "https://sfile.chatglm.cn/images-ppt/0193c69c0227.png",
  "3_pengenalan-web-development": "https://sfile.chatglm.cn/images-ppt/5cfe7a5509f6.jpg",
  "3_project-website-lengkap": "https://sfile.chatglm.cn/images-ppt/fb9ee1a14d97.png",
  "3_responsive-design": "https://sfile.chatglm.cn/images-ppt/20d54ef6908a.jpg",
  "4_dns-domain": "https://sfile.chatglm.cn/images-ppt/bf3612922e44.png",
  "4_firewall-network-security": "https://sfile.chatglm.cn/images-ppt/e8dd87b49cc5.png",
  "4_http-https-protocol": "https://sfile.chatglm.cn/images-ppt/8d2503202540.jpg",
  "4_ip-addressing-subnetting": "https://sfile.chatglm.cn/images-ppt/c5a37b7c3a5a.jpg",
  "4_network-troubleshooting-wireshark": "https://sfile.chatglm.cn/images-ppt/4278efeee316.jpg",
  "4_osi-model": "https://sfile.chatglm.cn/images-ppt/8bc9e410d70d.png",
  "4_pengenalan-jaringan": "https://sfile.chatglm.cn/images-ppt/bf3612922e44.png",
  "4_routing-switching": "https://sfile.chatglm.cn/images-ppt/4db8e4f5fbc8.png",
  "4_tcp-ip-protocol": "https://sfile.chatglm.cn/images-ppt/8bc9e410d70d.png",
  "4_vpn-tunneling": "https://sfile.chatglm.cn/images-ppt/41f6d4b2456d.svg",
  "5_database-design-normalisasi": "https://sfile.chatglm.cn/images-ppt/65e4540aa5b5.jpg",
  "5_database-indexing-performance": "https://sfile.chatglm.cn/images-ppt/6d61d7d2fc1c.jpg",
  "5_nosql-database-mongodb": "https://sfile.chatglm.cn/images-ppt/d43c88c0cb94.png",
  "5_pengenalan-database": "https://sfile.chatglm.cn/images-ppt/65e4540aa5b5.jpg",
  "5_project-desain-database": "https://sfile.chatglm.cn/images-ppt/9b305d115eeb.png",
  "5_relational-database-sql": "https://sfile.chatglm.cn/images-ppt/d99f1a9c2724.png",
  "5_sql-advanced-join": "https://sfile.chatglm.cn/images-ppt/a977022a91ca.png",
  "5_sql-query-basics": "https://sfile.chatglm.cn/images-ppt/a977022a91ca.png",
  "6_cia-triad-prinsip-keamanan": "https://sfile.chatglm.cn/images-ppt/ea5752d183cb.png",
  "6_digital-forensics": "https://sfile.chatglm.cn/images-ppt/af57c8aa621a.jpg",
  "6_etika-legalitas-hacker": "https://sfile.chatglm.cn/images-ppt/5b081de41c09.jpg",
  "6_incident-response": "https://sfile.chatglm.cn/images-ppt/02236e640fdd.jpg",
  "6_jenis-ancaman-cyber": "https://sfile.chatglm.cn/images-ppt/348dd40a7b36.jpg",
  "6_kriptografi-dasar": "https://sfile.chatglm.cn/images-ppt/e397dfcf2e9a.jpg",
  "6_malware-virus": "https://sfile.chatglm.cn/images-ppt/2e8490eab537.png",
  "6_owasp-top-10": "https://sfile.chatglm.cn/images-ppt/fcb68a3f591d.jpg",
  "6_password-security-hashing": "https://sfile.chatglm.cn/images-ppt/e397dfcf2e9a.jpg",
  "6_penetration-testing-basics": "https://sfile.chatglm.cn/images-ppt/b960626436f4.jpg",
  "6_pengenalan-cybersecurity": "https://sfile.chatglm.cn/images-ppt/b960626436f4.jpg",
  "6_social-engineering": "https://sfile.chatglm.cn/images-ppt/3986387e7191.png",
  "6_sql-injection": "https://sfile.chatglm.cn/images-ppt/e18f8adfbecf.jpg",
  "6_xss-cross-site-scripting": "https://sfile.chatglm.cn/images-ppt/d65fdb2e0431.png",
  "7_aws-cloud-services": "https://sfile.chatglm.cn/images-ppt/1328eb2e4cb1.jpeg",
  "7_ci-cd-pipeline": "https://sfile.chatglm.cn/images-ppt/015de1c2cc89.webp",
  "7_cloud-computing-basics": "https://sfile.chatglm.cn/images-ppt/1328eb2e4cb1.jpeg",
  "7_docker-containerization": "https://sfile.chatglm.cn/images-ppt/015de1c2cc89.webp",
  "7_kubernetes-orchestration": "https://sfile.chatglm.cn/images-ppt/66f09b9941cd.jpg",
  "7_linux-server-administration": "https://sfile.chatglm.cn/images-ppt/ba6179ea0cf0.jpg",
  "7_monitoring-logging": "https://sfile.chatglm.cn/images-ppt/4708a4e56bc6.png",
  "7_web-server-nginx-apache": "https://sfile.chatglm.cn/images-ppt/b29d8053f167.jpg",
  "8_data-preprocessing": "https://sfile.chatglm.cn/images-ppt/effe006fe738.png",
  "8_deep-learning": "https://sfile.chatglm.cn/images-ppt/25c9e605248f.png",
  "8_neural-networks": "https://sfile.chatglm.cn/images-ppt/dd77ac8e6c34.jpeg",
  "8_pengenalan-ai-ml": "https://sfile.chatglm.cn/images-ppt/a74823b737fd.jpg",
  "8_project-ml-model": "https://sfile.chatglm.cn/images-ppt/7ad703572113.png",
  "8_python-data-science": "https://sfile.chatglm.cn/images-ppt/a74823b737fd.jpg",
  "8_supervised-learning": "https://sfile.chatglm.cn/images-ppt/dd77ac8e6c34.jpeg",
  "8_unsupervised-learning": "https://sfile.chatglm.cn/images-ppt/25c9e605248f.png",
};

// Level-specific additional context sections
const LEVEL_EXTRA_SECTIONS: Record<number, string> = {
  1: `## Studi Kasus di Dunia Nyata

Bayangkan Anda bekerja di sebuah perusahaan startup. Setiap hari Anda berurusan dengan:
- **Komputer workstation** untuk coding dan desain
- **Server** untuk hosting aplikasi
- **Cloud storage** untuk backup data
- **Network infrastructure** untuk konektivitas

Memahami komponen IT dasar membantu Anda troubleshoot masalah, berkomunikasi dengan tim teknis, dan membuat keputusan yang tepat saat memilih teknologi.

## Kesalahan Umum Pemula

Banyak pemula yang langsung terjun ke coding tanpa memahami dasar IT. Akibatnya:
1. **Tidak paham cara kerja komputer** → sulit debug masalah low-level
2. **Tidak familiar dengan command line** → ketergantungan pada GUI
3. **Tidak paham file system** → susah mengelola project
4. **Tidak tahu dasar jaringan** → bingung saat deployment

> **Tips:** Luangkan waktu 1-2 minggu untuk benar-benar memahami dasar IT sebelum lanjut ke pemrograman. Investasi ini akan sangat berbalik di kemudian hari.`,

  2: `## Studi Kasus: Membangun Aplikasi Nyata

Saat membangun aplikasi to-do list sederhana, Anda akan menggunakan:
- **Variabel** untuk menyimpan data tugas
- **Array** untuk menyimpan list tugas
- **Function** untuk operasi tambah/hapus/edit
- **Loop** untuk menampilkan semua tugas
- **If/else** untuk filter tugas selesai/belum
- **File I/O** untuk save/load data

Setiap konsep pemrograman saling terkait. Tidak ada yang berdiri sendiri.

## Tips Belajar Pemrograman

> **Best Practice:** "Practice makes perfect." Pemrograman adalah skill, bukan teori.

1. **Kode setiap hari** — minimal 30 menit
2. **Bangun project kecil** — bukan cuma baca teori
3. **Pelajari dari error** — error adalah guru terbaik
4. **Baca kode orang lain** — di GitHub, open source projects
5. **Jangan copy-paste** — ketik ulang untuk muscle memory

## Kesalahan Umum

- **Memorizing syntax** vs memahami konsep → konsep lebih penting
- **Langsung ke framework** sebelum paham dasar → akan kesulitan saat debugging
- **Tidak membaca error message** → error message sebenarnya sangat membantu

## Kesimpulan

Pemrograman adalah cara berpikir terstruktur untuk memecahkan masalah. Kuasai dasar (variabel, kontrol flow, function, struktur data) dengan baik, sisanya akan jauh lebih mudah dipelajari.`,

  3: `## Studi Kasus: Membangun Website E-Commerce

Saat membangun website toko online, Anda akan menggunakan:
- **HTML** untuk struktur halaman (produk, kategori, keranjang)
- **CSS** untuk styling (warna, layout, animasi)
- **JavaScript** untuk interaktivitas (add to cart, filter, search)
- **Fetch API** untuk komunikasi dengan backend
- **React** untuk komponen yang reusable (product card, navbar)
- **Node.js** untuk API server (produk, order, payment)

Web development adalah gabungan frontend (yang user lihat) dan backend (logika server).

## Tips Menjadi Web Developer

> **Best Practice:** Belajar dengan membuat project nyata, bukan cuma tutorial.

1. **Mulai dengan HTML/CSS/JS murni** sebelum framework
2. **Bangun 3-5 project kecil** sebelum lanjut ke kompleks
3. **Pelajari DevTools** browser untuk debugging
4. **Pahami HTTP** — method, status code, header
5. **Version control dengan Git** sejak awal

## Tren Web Development Terkini

- **SSR (Server-Side Rendering)** — Next.js, Nuxt
- **Edge computing** — deploy closer to users
- **WebAssembly** — performance near-native
- **AI-assisted coding** — GitHub Copilot, Cursor

## Kesimpulan

Web development adalah skill yang sangat dibutuhkan. Kuasai HTML, CSS, JavaScript dasar dulu, baru lanjut ke framework. Bangun project nyata untuk pengalaman praktis.`,

  4: `## Studi Kasus: Troubleshooting Jaringan

Saat website perusahaan tidak bisa diakses, langkah troubleshooting:
1. **Ping** server → cek konektivitas dasar
2. **Traceroute** → cek path mana yang putus
3. **Check DNS** → apakah domain resolve ke IP benar?
4. **Check port** → apakah port 80/443 open?
5. **Wireshark** → capture packet untuk analisis detail
6. **Check firewall** → apakah ada rule yang block?

Memahami jaringan membantu Anda diagnose masalah dengan cepat.

## Tips Belajar Jaringan

> **Best Practice:** Setup lab sendiri dengan virtual machines atau Cisco Packet Tracer.

1. **Praktik dengan Wireshark** — capture traffic di jaringan rumah
2. **Pelajari OSI model** dengan contoh nyata per layer
3. **Setup home lab** — router, switch, multiple devices
4. **Ambil sertifikasi** — CCNA, Network+, atau setara
5. **Pahami IPv6** — masa depan internet

## Kesimpulan

Jaringan komputer adalah fondasi internet. Pahami OSI model, TCP/IP, dan tools seperti Wireshark untuk menjadi network engineer yang kompeten.`,

  5: `## Studi Kasus: Mendesain Database E-Commerce

Untuk toko online, Anda butuh tabel:
- **Users** (id, name, email, password)
- **Products** (id, name, price, stock, category_id)
- **Categories** (id, name)
- **Orders** (id, user_id, total, status)
- **OrderItems** (id, order_id, product_id, qty, price)

Relasi: Users → Orders → OrderItems ← Products → Categories

Desain yang baik = query cepat, data konsisten, mudah di-maintain.

## Tips Belajar Database

> **Best Practice:** Praktik dengan dataset nyata. Gunakan sample databases seperti Sakila, Northwind.

1. **Mulai dengan SQL** sebelum NoSQL
2. **Pelajari normalisasi** dengan contoh nyata
3. **Latih query kompleks** — JOIN, subquery, aggregate
4. **Pahami indexing** — kapan dan bagaimana menggunakannya
5. **Backup selalu** — data adalah aset paling berharga

## Kesimpulan

Database adalah jantung setiap aplikasi. Kuasai SQL, desain relasional, dan optimasi query untuk menjadi developer yang kompeten.`,

  6: `## Studi Kasus: Security Audit Website

Saat melakukan audit keamanan website:
1. **Reconnaissance** — kumpulkan info target (WHOIS, DNS, tech stack)
2. **Scanning** — scan port, service, vulnerability (nmap, nikto)
3. **Testing** — test OWASP Top 10 (SQLi, XSS, CSRF, dll)
4. **Exploitation** — proof of concept untuk kerentanan
5. **Reporting** — dokumentasi dengan severity dan remediasi

## Tips Belajar Cybersecurity

> **Best Practice:** Hanya uji sistem yang Anda miliki atau punya izin tertulis.

1. **Setup lab sendiri** — DVWA, Metasploitable, HackTheBox
2. **Pelajari OWASP Top 10** sampai bisa exploit dan fix
3. **Ikuti CTF** — Capture The Flag untuk praktik
4. **Baca security news** — The Hacker News, Krebs on Security
5. **Ambil sertifikasi** — CEH, OSCP, Security+

## Etika & Legalitas

> ⚠️ **PENTING:** Menyerang sistem tanpa izin adalah kejahatan (UU ITE Pasal 30). Selalu dapatkan izin tertulis sebelum penetration testing.

## Kesimpulan

Cybersecurity adalah bidang yang terus berkembang. Kuasai dasar (CIA Triad, OWASP), praktik di lab, dan selalu utamakan etika.`,

  7: `## Studi Kasus: Deploy Aplikasi ke Production

Saat deploy aplikasi ke production:
1. **Containerize** aplikasi dengan Docker
2. **Push image** ke registry (Docker Hub, ECR)
3. **Deploy** ke Kubernetes cluster
4. **Setup CI/CD** untuk auto-deploy pada git push
5. **Configure** ingress, SSL, monitoring
6. **Monitor** logs, metrics, alerts

DevOps menggabungkan development + operations untuk delivery yang cepat dan reliable.

## Tips Belajar DevOps

> **Best Practice:** Praktik dengan project nyata — deploy aplikasi Anda sendiri.

1. **Kuasai Linux** sebelum Docker/K8s
2. **Mulai dengan Docker** sebelum Kubernetes
3. **Setup CI/CD** untuk project pribadi
4. **Pelajari Infrastructure as Code** — Terraform, Ansible
5. **Monitor everything** — logs, metrics, traces

## Kesimpulan

Cloud & DevOps adalah skill yang sangat dicari. Mulai dengan Docker, lalu Kubernetes, dan CI/CD. Praktik dengan project nyata untuk pengalaman terbaik.`,

  8: `## Studi Kasus: Membangun Model Prediksi Harga

Untuk memprediksi harga rumah:
1. **Collect data** — fitur: lokasi, luas, kamar, harga
2. **Preprocessing** — handle missing values, normalize
3. **Split data** — train (80%) / test (20%)
4. **Pilih model** — Linear Regression, Random Forest
5. **Train model** — fit dengan training data
6. **Evaluate** — RMSE, MAE pada test data
7. **Deploy** — API endpoint untuk prediksi

## Tips Belajar AI/ML

> **Best Practice:** Kuasai Python, NumPy, Pandas sebelum ML framework.

1. **Mulai dengan statistik dasar** — mean, median, std dev
2. **Pelajari Python untuk data science** — NumPy, Pandas, Matplotlib
3. **Praktik dengan Kaggle** — competition dan dataset nyata
4. **Pahami algoritma** sebelum menggunakan library
5. **Build project end-to-end** — dari data sampai deployment

## Tren AI Terkini

- **LLM (Large Language Models)** — GPT, Claude, LLaMA
- **Generative AI** — image, video, code generation
- **MLOps** — deploy dan monitor ML models di production
- **AI Ethics** — bias, fairness, explainability

## Kesimpulan

AI & Machine Learning adalah masa depan teknologi. Kuasai Python, statistik, dan ML dasar sebelum lanjut ke deep learning. Praktik dengan dataset nyata di Kaggle.`,
};

/**
 * Enhance material content: add image + expand with extra sections
 */
function enhanceContent(material: MaterialData): string {
  // Use material-specific image (unique per material slug, not per level)
  const imageKey = `${material.level}_${material.slug}`;
  const imageUrl = MATERIAL_IMAGES[imageKey] || "";
  const extraSections = LEVEL_EXTRA_SECTIONS[material.level] || "";

  let content = material.content;

  // Add image after the first paragraph (after first "\n\n" following the title)
  const firstParaEnd = content.indexOf("\n\n");
  if (firstParaEnd > 0 && imageUrl) {
    const before = content.substring(0, firstParaEnd + 2);
    const after = content.substring(firstParaEnd + 2);
    content = before + `\n![${material.title}](${imageUrl})\n\n` + after;
  }

  // Add extra sections if not already present
  if (extraSections && !content.includes("## Studi Kasus")) {
    content += "\n\n" + extraSections;
  }

  return content;
}

async function main() {
  console.log("🌱 Seeding database with enhanced content...");

  // Clean existing data
  await db.forumReply.deleteMany();
  await db.forumPost.deleteMany();
  await db.progress.deleteMany();
  await db.session.deleteMany();
  await db.material.deleteMany();
  await db.user.deleteMany();
  console.log("  ✓ Cleaned existing data");

  // Create admin user
  const adminUser = await db.user.create({
    data: {
      name: "Admin CyberLab",
      email: "admin@coderoom.id",
      password: hashPassword("admin12345"),
      role: "ADMIN",
    },
  });
  console.log(`  ✓ Created admin user: ${adminUser.email}`);

  // Insert all materials with ENHANCED content
  const allMaterials = [...contentLevels1to3, ...contentLevels4to5, ...contentLevels6to8];
  console.log(`  → Inserting ${allMaterials.length} materials with enhanced content...`);

  for (const mat of allMaterials) {
    const enhancedContent = enhanceContent(mat);
    await db.material.create({
      data: {
        level: mat.level,
        order: mat.order,
        title: mat.title,
        slug: mat.slug,
        description: mat.description,
        content: enhancedContent,
        icon: mat.icon,
        isProject: mat.isProject,
        quiz: JSON.stringify(mat.quiz),
      },
    });
  }

  // Count by level
  for (let lvl = 1; lvl <= 8; lvl++) {
    const count = allMaterials.filter((m) => m.level === lvl).length;
    console.log(`    Level ${lvl}: ${count} materials`);
  }

  // Create forum posts
  const posts = [
    {
      title: "Cara mengatasi error 'port already in use'",
      content: "Halo, saat menjalankan `npm run dev` muncul error port sudah digunakan. Solusinya?",
      category: "Pertanyaan",
    },
    {
      title: "Tips belajar Python untuk pemula",
      content: "Setelah saya pelajari Python, coding jadi jauh lebih mudah! Mulai dari dasar variabel dulu.",
      category: "Tips & Trik",
    },
    {
      title: "Sharing: Pengalaman setup Docker",
      content: "Akhirnya berhasil containerize aplikasi dengan Docker. Ternyata tidak sesulit yang dibayangkan!",
      category: "Sharing",
    },
  ];

  for (const post of posts) {
    await db.forumPost.create({
      data: { ...post, userId: adminUser.id },
    });
  }
  console.log(`  ✓ Created ${posts.length} forum posts`);

  // Add a reply
  const firstPost = await db.forumPost.findFirst({ orderBy: { createdAt: "asc" } });
  if (firstPost) {
    await db.forumReply.create({
      data: {
        postId: firstPost.id,
        userId: adminUser.id,
        content: "Coba gunakan `npx kill-port 3000` untuk menghentikan proses yang menggunakan port tersebut.",
      },
    });
  }

  console.log("\n✅ Seeding complete!");
  console.log(`   Total materials: ${allMaterials.length} (all with images + expanded content)`);
  console.log(`   Admin login: admin@coderoom.id / admin12345`);
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
