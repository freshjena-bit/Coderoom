import { db } from "../src/lib/db";
import { hashPassword } from "../src/lib/auth";
import { contentLevels1to3 } from "./content-levels-1-3";
import { contentLevels4to5 } from "./content-levels-4-5";
import { contentLevels6to8 } from "./content-levels-6-8";

async function main() {
  console.log("🌱 Seeding database...");

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
      name: "Admin CodeRoom",
      email: "admin@coderoom.id",
      password: hashPassword("admin12345"),
      role: "ADMIN",
    },
  });
  console.log(`  ✓ Created admin user: ${adminUser.email}`);

  // Insert all materials
  const allMaterials = [...contentLevels1to3, ...contentLevels4to5, ...contentLevels6to8];
  console.log(`  → Inserting ${allMaterials.length} materials...`);

  for (const mat of allMaterials) {
    await db.material.create({
      data: {
        level: mat.level,
        order: mat.order,
        title: mat.title,
        slug: mat.slug,
        description: mat.description,
        content: mat.content,
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

  // Create some demo forum posts
  const posts = [
    {
      title: "Cara mengatasi error 'port 3000 already in use'",
      content:
        "Halo teman-teman, saat saya menjalankan `npm run dev` selalu muncul error port 3000 sudah digunakan. Ada yang tahu cara mengatasinya?\n\nSaya sudah coba restart komputer tapi tetap sama.",
      category: "Pertanyaan",
    },
    {
      title: "Tips belajar CSS Flexbox untuk pemula",
      content:
        "Setelah saya pelajari Flexbox, layout web jadi jauh lebih mudah! Berikut tips saya:\n\n1. Pahami konsep **container** dan **item**\n2. Gunakan `justify-content` untuk horizontal\n3. Gunakan `align-items` untuk vertikal\n4. Latihan dengan Flexbox Froggy!\n\nSemoga membantu 🙏",
      category: "Tips & Trik",
    },
    {
      title: "Sharing: Pengalaman menyelesaikan Project To-Do List",
      content:
        "Akhirnya selesai juga project To-Do List di Level 4! 🎉\n\nYang paling menantang adalah menyimpan data ke localStorage agar tidak hilang saat refresh. Tapi setelah paham konsepnya, ternyata menyenangkan.\n\nUntuk yang masih struggle, jangan menyerah ya!",
      category: "Sharing",
    },
  ];

  for (const post of posts) {
    await db.forumPost.create({
      data: {
        ...post,
        userId: adminUser.id,
      },
    });
  }
  console.log(`  ✓ Created ${posts.length} demo forum posts`);

  // Add a reply (admin replies to the first post)
  const firstPost = await db.forumPost.findFirst({
    orderBy: { createdAt: "asc" },
  });
  if (firstPost) {
    await db.forumReply.create({
      data: {
        postId: firstPost.id,
        userId: adminUser.id,
        content:
          "Coba gunakan perintah `npx kill-port 3000` di terminal untuk menghentikan proses yang menggunakan port 3000. Setelah itu jalankan lagi `npm run dev`.",
      },
    });
    console.log("  ✓ Created demo forum reply");
  }

  console.log("\n✅ Seeding complete!");
  console.log(`   Total materials: ${allMaterials.length}`);
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
