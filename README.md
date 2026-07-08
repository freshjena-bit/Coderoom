# 🛡️ CyberLab — Belajar Cyber & IT dari Nol

Platform belajar cyber & IT lengkap dengan materi terstruktur, quiz, project, dan sertifikat. Dibangun dengan Next.js 16, TypeScript, Tailwind CSS, dan PostgreSQL (Supabase).

## ✨ Fitur

- 🏠 **Beranda** — Landing page dengan logo background, hero section, dan roadmap 7 level
- 📚 **Materi Belajar** — 54 materi cybersecurity dalam 7 level (Dasar Cyber, Jaringan, Kriptografi, Web Security, Ethical Hacking, Forensik, Project Akhir)
- 📖 **Detail Materi** — Konten markdown dengan code highlighting + quiz interaktif (3 soal per materi)
- 👤 **Dashboard User** — Progress tracking, achievements, dan sertifikat
- 🛡️ **Dashboard Admin** — Kelola pengguna, materi, dan forum (admin only)
- 💬 **Forum Diskusi** — Tanya jawab dan berbagi dengan komunitas
- 🌙 **Dark Mode** — Toggle tema terang/gelap
- 📱 **Responsive** — Optimal di mobile, tablet, dan desktop
- 🏆 **Sertifikat** — Download sertifikat setelah menyelesaikan 100% materi
- ☁️ **Deploy ke Vercel** — Siap deploy dengan database Supabase

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| Framework | Next.js 16 (App Router) |
| Bahasa | TypeScript 5 |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Database | PostgreSQL (Supabase / lokal) |
| ORM | Prisma |
| State | Zustand + TanStack Query |
| Auth | Custom session (scrypt + HMAC token, HTTP-only cookie) |
| Deployment | Vercel |
| Markdown | react-markdown + remark-gfm |
| Icons | Lucide React |

## 📋 Persyaratan

- Node.js 18+ atau Bun
- PostgreSQL 14+ (lokal) atau akun Supabase (untuk production)

## 🚀 Quick Start (Local Development)

### 1. Clone repository

```bash
git clone https://github.com/freshjena-bit/Coderoom.git
cd Coderoom
```

### 2. Install dependencies

```bash
bun install
```

### 3. Setup database PostgreSQL

**Opsi A — PostgreSQL lokal:**

```bash
# Buat database dan user
sudo -u postgres psql -c "CREATE DATABASE coderoom;"
sudo -u postgres psql -c "CREATE USER coderoom WITH PASSWORD 'coderoom_pass';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE coderoom TO coderoom;"
sudo -u postgres psql -c "ALTER DATABASE coderoom OWNER TO coderoom;"
```

**Opsi B — Supabase (gratis, recommended):**
1. Daftar di [supabase.com](https://supabase.com) dan buat project baru
2. Pergi ke **Project Settings → Database → Connection string**
3. Copy connection string (format: `postgresql://postgres.[REF]:[PASSWORD]@...`)

### 4. Konfigurasi environment

```bash
cp .env.example .env
```

Edit `.env` sesuai database Anda:

```env
# Untuk PostgreSQL lokal:
DATABASE_URL=postgresql://coderoom:coderoom_pass@127.0.0.1:5432/coderoom
DIRECT_URL=postgresql://coderoom:coderoom_pass@127.0.0.1:5432/coderoom

# Untuk Supabase (lihat .env.example untuk format lengkap):
# DATABASE_URL=postgresql://postgres.[REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres
# DIRECT_URL=postgresql://postgres.[REF]:[PASSWORD]@aws-0-[REGION].supabase.com:5432/postgres

SESSION_SECRET=generate-random-string-here
```

### 5. Push schema & seed data

```bash
bun run db:push     # Buat semua tabel di database
bun run seed        # Isi 55 materi + akun admin
```

### 6. Jalankan dev server

```bash
bun run dev
```

Buka `http://localhost:3000` di browser.

## ☁️ Deploy ke Vercel + Supabase

### Step 1: Buat database di Supabase

1. Daftar/login di [supabase.com](https://supabase.com)
2. Klik **New Project**, isi nama, password database, dan region
3. Tunggu project selesai dibuat (~2 menit)
4. Pergi ke **Project Settings → Database → Connection string**
5. Copy dua URL ini:
   - **Transaction URL** (port 6543, dengan pooling) → untuk `DATABASE_URL`
   - **Session URL** (port 5432, direct) → untuk `DIRECT_URL`
6. Ganti `[YOUR-PASSWORD]` dengan password database Anda

### Step 2: Setup schema di Supabase

Jalankan lokal dengan env Supabase:

```bash
# Set env sementara di terminal
export DATABASE_URL="postgresql://postgres.[REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres"
export DIRECT_URL="postgresql://postgres.[REF]:[PASSWORD]@aws-0-[REGION].supabase.com:5432/postgres"

# Push schema & seed data
bun run db:push
bun run seed
```

### Step 3: Deploy ke Vercel

1. Pergi ke [vercel.com](https://vercel.com) dan login dengan GitHub
2. Klik **Add New → Project**
3. Import repository `freshjena-bit/Coderoom`
4. Di **Environment Variables**, tambahkan:

   | Name | Value |
   |------|-------|
   | `DATABASE_URL` | Transaction URL Supabase (port 6543) |
   | `DIRECT_URL` | Session URL Supabase (port 5432) |
   | `SESSION_SECRET` | String random (generate dengan `openssl rand -hex 32`) |

5. Klik **Deploy** — tunggu 2-3 menit
6. Selesai! 🎉 Aplikasi siap diakses

> ℹ️ **Catatan:** Vercel akan otomatis menjalankan `postinstall` (generate Prisma client) dan `vercel-build` (next build) saat deploy.

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
├── schema.prisma         # Database schema (PostgreSQL)
├── seed.ts               # Seed script
├── content-levels-1-3.ts # Materi Level 1-3
└── content-levels-4-7.ts # Materi Level 4-7
scripts/
├── dev.sh                # Dev startup script (start PostgreSQL + Next.js)
└── postinstall.sh        # Generate Prisma client (untuk Vercel)
vercel.json               # Vercel deployment config
```

## 📚 Kurikulum (7 Level)

| Level | Topik | Jumlah Materi |
|-------|-------|---------------|
| 1 | Dasar Cyber | 5 |
| 2 | Jaringan | 9 |
| 3 | Kriptografi | 9 |
| 4 | Web Security | 10 |
| 5 | Ethical Hacking | 8 |
| 6 | Forensik & Malware | 7 |
| 7 | Project Akhir | 6 |
| **Total** | | **54 materi** |

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
bun run build      # Build untuk production
bun run lint       # ESLint check
bun run db:push    # Push schema ke database
bun run db:generate # Generate Prisma client
bun run seed       # Seed data (admin + 55 materi)
```

## 🔧 Environment Variables

| Variable | Wajib | Deskripsi |
|----------|-------|-----------|
| `DATABASE_URL` | ✅ | PostgreSQL connection string (Supabase Transaction URL untuk pooling) |
| `DIRECT_URL` | ✅ | Direct PostgreSQL connection (Supabase Session URL, untuk migrasi) |
| `SESSION_SECRET` | ✅ | Secret key untuk signing session tokens |

## 📄 Lisensi

MIT License — bebas digunakan untuk pembelajaran.

---

Dibuat dengan ❤️ untuk komunitas belajar cybersecurity Indonesia.
