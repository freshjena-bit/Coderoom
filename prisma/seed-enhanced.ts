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

// Level-specific images (from image-search)
const LEVEL_IMAGES: Record<number, string> = {
  1: "https://sfile.chatglm.cn/images-ppt/a4b74500f2c4.jpg",
  2: "https://sfile.chatglm.cn/images-ppt/db156d3c9d5c.jpg",
  3: "https://sfile.chatglm.cn/images-ppt/71cbfff04b83.jpg",
  4: "https://sfile.chatglm.cn/images-ppt/69006b36966a.jpg",
  5: "https://sfile.chatglm.cn/images-ppt/732bf850a843.jpeg",
  6: "https://sfile.chatglm.cn/images-ppt/cdb300ed8989.jpg",
  7: "https://sfile.chatglm.cn/images-ppt/631c50fce301.jpg",
  8: "https://sfile.chatglm.cn/images-ppt/2ccd2dc8282b.png",
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
  const imageUrl = LEVEL_IMAGES[material.level];
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
