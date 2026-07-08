# 🏠 CodeRoom — Belajar Coding dari Nol

Platform belajar coding interaktif dengan materi terstruktur, quiz, project, dan sertifikat. Dibangun dengan Next.js 16, TypeScript, Tailwind CSS, dan MySQL.

## ✨ Fitur

- 🏠 **Beranda** — Landing page dengan logo background, hero section, dan roadmap 7 level
- 📚 **Materi Belajar** — 55+ materi dalam 7 level (Dasar, HTML, CSS, JavaScript, Backend, Database, Project Akhir)
- 📖 **Detail Materi** — Konten markdown dengan code highlighting + quiz interaktif (3 soal per materi)
- 👤 **Dashboard User** — Progress tracking, achievements, dan sertifikat
- 🛡️ **Dashboard Admin** — Kelola pengguna, materi, dan forum (admin only)
- 💬 **Forum Diskusi** — Tanya jawab dan berbagi dengan komunitas
- 🌙 **Dark Mode** — Toggle tema terang/gelap
- 📱 **Responsive** — Optimal di mobile, tablet, dan desktop
- 🏆 **Sertifikat** — Download sertifikat setelah menyelesaikan 100% materi

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| Framework | Next.js 16 (App Router) |
| Bahasa | TypeScript 5 |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Database | MySQL (MariaDB) |
| ORM | Prisma |
| State | Zustand + TanStack Query |
| Auth | Custom session (scrypt + HMAC token, HTTP-only cookie) |
| Markdown | react-markdown + remark-gfm |
| Icons | Lucide React |

## 📋 Persyaratan

- Node.js 18+
- Bun (runtime)
- MySQL 8+ atau MariaDB 10+

## 🚀 Instalasi

### 1. Clone repository

```bash
git clone https://github.com/freshjena-bit/Coderoom.git
cd Coderoom
```

### 2. Install dependencies

```bash
bun install
```

### 3. Setup database MySQL

Buat database dan user di MySQL:

```sql
CREATE DATABASE coderoom CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'coderoom'@'localhost' IDENTIFIED BY 'coderoom_pass';
GRANT ALL PRIVILEGES ON coderoom.* TO 'coderoom'@'localhost';
FLUSH PRIVILEGES;
```

### 4. Konfigurasi environment

Salin `.env.example` ke `.env` dan sesuaikan:

```bash
cp .env.example .env
```

```env
DATABASE_URL=mysql://coderoom:coderoom_pass@127.0.0.1:3306/coderoom
SESSION_SECRET=your-secret-key-here
```

### 5. Push schema ke database

```bash
bun run db:push
```

### 6. Seed data awal (materi + admin account)

```bash
bun run prisma/seed.ts
```

### 7. Jalankan dev server

```bash
bun run dev
```

Buka `http://localhost:3000` di browser.

## 🔑 Akun Admin

Setelah seeding, akun admin otomatis dibuat:

```
Email:    admin@coderoom.id
Password: admin12345
```

> ⚠️ **Penting:** Ganti password admin setelah login pertama untuk keamanan.

## 📂 Struktur Project

```
src/
├── app/
│   ├── api/              # API routes (auth, materials, progress, forum, admin)
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page (SPA dengan hash routing)
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── views/            # Page views (home, materi, detail, dashboard, admin, forum)
│   ├── navbar.tsx        # Navigation bar
│   ├── footer.tsx        # Footer
│   ├── auth-dialog.tsx   # Login/Register dialog
│   ├── logo.tsx          # Logo component
│   └── markdown-renderer.tsx
├── lib/
│   ├── auth.ts           # Auth utilities (hashing, session)
│   ├── db.ts             # Prisma client
│   ├── store.ts          # Zustand store
│   ├── api.ts            # Frontend API helpers
│   └── admin.ts          # Admin guard + stats
prisma/
├── schema.prisma         # Database schema (MySQL)
├── seed.ts               # Seed script
├── content-levels-1-3.ts # Materi Level 1-3
└── content-levels-4-7.ts # Materi Level 4-7
```

## 📚 Kurikulum (7 Level)

| Level | Topik | Jumlah Materi |
|-------|-------|---------------|
| 1 | Dasar | 5 |
| 2 | HTML | 9 |
| 3 | CSS | 9 |
| 4 | JavaScript | 12 |
| 5 | Backend (Node.js) | 8 |
| 6 | Database | 6 |
| 7 | Project Akhir | 6 |
| **Total** | | **55 materi** |

Setiap materi dilengkapi:
- 📝 Konten markdown dengan contoh kode
- ❓ Quiz 3 soal (pilihan ganda)
- ✅ Progress tracking
- 🎯 Penanda selesai

## 🎨 Fitur Admin

Dashboard admin (`/#/admin`) menampilkan:
- **Overview** — Statistik pengguna, materi, forum, progress
- **Pengguna** — Kelola user, promote/demote admin, hapus user
- **Materi** — Lihat semua materi per level, hapus materi
- **Forum** — Moderasi postingan forum

## 📝 Scripts

```bash
bun run dev        # Jalankan dev server (port 3000)
bun run lint       # ESLint check
bun run db:push    # Push schema ke database
bun run db:generate # Generate Prisma client
```

## 📄 Lisensi

MIT License — bebas digunakan untuk pembelajaran.

---

Dibuat dengan ❤️ untuk komunitas belajar coding Indonesia.
