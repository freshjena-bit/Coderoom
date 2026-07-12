import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/auth";
import { contentLevels1to3 } from "@/lib/content-levels-1-3";
import { contentLevels4to5 } from "@/lib/content-levels-4-5";
import { contentLevels6to8 } from "@/lib/content-levels-6-8";
import type { MaterialData } from "@/lib/content-types";

// Material-specific images
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

const LEVEL_EXTRA_SECTIONS: Record<number, string> = {
  1: `\n\n## Studi Kasus di Dunia Nyata\n\nBayangkan Anda bekerja di perusahaan startup. Anda berurusan dengan komputer, server, cloud storage, dan network. Memahami dasar IT membantu troubleshoot masalah dan berkomunikasi dengan tim teknis.\n\n## Tips Memulai\n\n> Luangkan waktu 1-2 minggu untuk benar-benar memahami dasar IT sebelum lanjut ke pemrograman.`,
  2: `\n\n## Studi Kasus: Membangun Aplikasi\n\nSaat membangun aplikasi to-do list, Anda menggunakan variabel, array, function, loop, dan if/else. Setiap konsep saling terkait.\n\n## Tips Belajar\n\n> "Practice makes perfect." Kode setiap hari, minimal 30 menit. Bangun project kecil, bukan cuma baca teori.`,
  3: `\n\n## Studi Kasus: Website E-Commerce\n\nSaat membangun toko online: HTML untuk struktur, CSS untuk styling, JavaScript untuk interaktivitas, React untuk komponen, Node.js untuk API.\n\n## Tips Menjadi Web Developer\n\n> Mulai dengan HTML/CSS/JS murni sebelum framework. Bangun 3-5 project kecil.`,
  4: `\n\n## Studi Kasus: Troubleshooting Jaringan\n\nSaat website tidak bisa diakses: ping server, traceroute, check DNS, check port, Wireshark untuk analisis detail.\n\n## Tips Belajar Jaringan\n\n> Setup lab sendiri dengan virtual machines. Praktik dengan Wireshark di jaringan rumah.`,
  5: `\n\n## Studi Kasus: Database E-Commerce\n\nTabel: Users, Products, Categories, Orders, OrderItems. Relasi yang baik = query cepat, data konsisten.\n\n## Tips Belajar Database\n\n> Mulai dengan SQL sebelum NoSQL. Pelajari normalisasi dengan contoh nyata.`,
  6: `\n\n## Studi Kasus: Security Audit\n\nReconnaissance → Scanning → Testing (OWASP Top 10) → Exploitation → Reporting.\n\n## Tips Belajar Cybersecurity\n\n> Hanya uji sistem yang Anda miliki atau punya izin tertulis. Setup lab: DVWA, HackTheBox.`,
  7: `\n\n## Studi Kasus: Deploy ke Production\n\nContainerize dengan Docker → Push ke registry → Deploy ke Kubernetes → Setup CI/CD → Monitor.\n\n## Tips Belajar DevOps\n\n> Kuasai Linux sebelum Docker/K8s. Setup CI/CD untuk project pribadi.`,
  8: `\n\n## Studi Kasus: Model Prediksi\n\nCollect data → Preprocessing → Split train/test → Pilih model → Train → Evaluate → Deploy.\n\n## Tips Belajar AI/ML\n\n> Kuasai Python, NumPy, Pandas sebelum ML framework. Praktik dengan Kaggle.`,
};

function enhanceContent(material: MaterialData): string {
  const imageKey = `${material.level}_${material.slug}`;
  const imageUrl = MATERIAL_IMAGES[imageKey] || "";
  const extraSections = LEVEL_EXTRA_SECTIONS[material.level] || "";
  let content = material.content;
  const firstParaEnd = content.indexOf("\n\n");
  if (firstParaEnd > 0 && imageUrl) {
    const before = content.substring(0, firstParaEnd + 2);
    const after = content.substring(firstParaEnd + 2);
    content = before + `\n![${material.title}](${imageUrl})\n\n` + after;
  }
  if (extraSections && !content.includes("## Studi Kasus")) {
    content += "\n\n" + extraSections;
  }
  return content;
}

export async function GET() {
  return NextResponse.json({
    message: "CyberLab Setup API",
    instructions: "Send POST request to seed database (82 materials + admin account)",
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const setupKey = process.env.SETUP_KEY;
    if (setupKey && body.key !== setupKey) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    // Always clean ALL data first (correct order: child tables first)
    await db.forumReply.deleteMany();
    await db.forumPost.deleteMany();
    await db.progress.deleteMany();
    await db.session.deleteMany();
    await db.material.deleteMany();
    await db.user.deleteMany();

    // Create admin user (upsert to handle existing email)
    const adminName = process.env.ADMIN_NAME || "Admin CyberLab";
    const adminEmail = process.env.ADMIN_EMAIL || "admin@coderoom.id";
    const adminPassword = process.env.ADMIN_PASSWORD || "admin12345";

    const adminUser = await db.user.upsert({
      where: { email: adminEmail.toLowerCase().trim() },
      update: {
        name: adminName,
        password: hashPassword(adminPassword),
        role: "ADMIN",
        banned: false,
        violationCount: 0,
        certificateId: null,
        certificateIssuedAt: null,
      },
      create: {
        name: adminName,
        email: adminEmail.toLowerCase().trim(),
        password: hashPassword(adminPassword),
        role: "ADMIN",
      },
    });

    // Insert all materials (upsert to handle existing slugs)
    const allMaterials = [...contentLevels1to3, ...contentLevels4to5, ...contentLevels6to8];
    for (const mat of allMaterials) {
      const enhancedContent = enhanceContent(mat);
      await db.material.upsert({
        where: { slug: mat.slug },
        update: {
          level: mat.level,
          order: mat.order,
          title: mat.title,
          description: mat.description,
          content: enhancedContent,
          icon: mat.icon,
          isProject: mat.isProject,
          quiz: JSON.stringify(mat.quiz),
        },
        create: {
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

    // Create forum posts
    const posts = [
      { title: "Cara mengatasi error 'port already in use'", content: "Saat menjalankan npm run dev muncul error port sudah digunakan. Solusi?", category: "Pertanyaan" },
      { title: "Tips belajar Python untuk pemula", content: "Mulai dari dasar variabel dulu, coding jadi jauh lebih mudah!", category: "Tips & Trik" },
      { title: "Sharing: Pengalaman setup Docker", content: "Akhirnya berhasil containerize aplikasi dengan Docker!", category: "Sharing" },
    ];
    for (const post of posts) {
      await db.forumPost.create({ data: { ...post, userId: adminUser.id } });
    }

    // Add a reply
    const firstPost = await db.forumPost.findFirst({ orderBy: { createdAt: "asc" } });
    if (firstPost) {
      await db.forumReply.create({
        data: {
          postId: firstPost.id,
          userId: adminUser.id,
          content: "Coba gunakan npx kill-port 3000 untuk menghentikan proses yang menggunakan port tersebut.",
        },
      });
    }

    return NextResponse.json({
      status: "success",
      message: "Database berhasil di-seed!",
      details: {
        adminEmail: adminUser.email,
        materialsCount: allMaterials.length,
        forumPosts: posts.length,
      },
    });
  } catch (error) {
    console.error("Setup error:", error);
    return NextResponse.json(
      { status: "error", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
