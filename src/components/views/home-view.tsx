"use client";

import {
  ArrowRight,
  BookOpen,
  Code2,
  Trophy,
  Users,
  Zap,
  Target,
  CheckCircle2,
  Brain,
  Award,
  Rocket,
  Moon,
} from "lucide-react";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LEVEL_INFO } from "@/lib/content-types";

const features = [
  {
    icon: Brain,
    title: "Quiz Interaktif",
    desc: "Uji pemahaman dengan quiz di setiap materi. Dapatkan feedback langsung.",
  },
  {
    icon: Rocket,
    title: "Project Nyata",
    desc: "Bangun 7+ project praktis dari landing page hingga e-commerce.",
  },
  {
    icon: Award,
    title: "Sertifikat",
    desc: "Dapatkan sertifikat resmi setelah menyelesaikan semua materi.",
  },
  {
    icon: Users,
    title: "Forum Diskusi",
    desc: "Diskusi dengan sesama peserta, tanya jawab, dan berbagi ilmu.",
  },
  {
    icon: Target,
    title: "Progress Tracking",
    desc: "Pantau perkembangan belajar Anda dengan dashboard interaktif.",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    desc: "Belajar dengan nyaman, siang maupun malam dengan dark mode.",
  },
];

const levelCards = Object.entries(LEVEL_INFO).map(([key, info]) => ({
  level: Number(key),
  ...info,
}));

export function HomeView() {
  const { goMateri, goDashboard, openAuth, user } = useAppStore();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 gap-1.5 px-3 py-1">
              <Zap className="h-3 w-3 text-primary" />
              7 Level · 55+ Materi · Gratis
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Belajar Coding{" "}
              <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                dari Nol
              </span>{" "}
              hingga Mahir
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Platform belajar coding lengkap dengan materi terstruktur, quiz interaktif,
              project praktis, dan sertifikat. Mulai perjalanan Anda menjadi web developer hari ini.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={() => (user ? goMateri() : openAuth("register"))}
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {user ? "Lanjut Belajar" : "Mulai Gratis"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={goMateri}
                className="w-full sm:w-auto"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Lihat Materi
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
              {[
                { value: "55+", label: "Materi" },
                { value: "7", label: "Level" },
                { value: "100%", label: "Gratis" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Kenapa CodeRoom?</h2>
          <p className="mt-4 text-muted-foreground">
            Semua yang Anda butuhkan untuk belajar coding dengan cara yang menyenangkan dan efektif
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative overflow-hidden border-border/60 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Level Roadmap */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-3">Roadmap Belajar</Badge>
            <h2 className="text-3xl font-bold sm:text-4xl">7 Level Pembelajaran</h2>
            <p className="mt-4 text-muted-foreground">
              Kurikulum terstruktur dari dasar hingga mahir membangun aplikasi web lengkap
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {levelCards.map((lvl) => (
              <button
                key={lvl.level}
                onClick={goMateri}
                className="group text-left"
              >
                <Card className="h-full border-border/60 transition-all hover:border-primary/40 hover:shadow-md">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                      {lvl.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">Level {lvl.level}</Badge>
                      </div>
                      <h3 className="mt-1.5 font-semibold">{lvl.title}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground line-clamp-2">
                        {lvl.subtitle}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Cara Belajar</h2>
          <p className="mt-4 text-muted-foreground">Tiga langkah sederhana untuk memulai</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              step: "01",
              icon: Code2,
              title: "Buat Akun",
              desc: "Daftar gratis dalam hitungan detik. Tidak perlu kartu kredit.",
            },
            {
              step: "02",
              icon: BookOpen,
              title: "Pelajari Materi",
              desc: "Ikuti materi dari Level 1 hingga 7. Selesaikan quiz di setiap materi.",
            },
            {
              step: "03",
              icon: Trophy,
              title: "Bangun & Dapatkan Sertifikat",
              desc: "Kerjakan project akhir dan dapatkan sertifikat sebagai web developer.",
            },
          ].map((item) => (
            <div key={item.step} className="relative">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-3xl font-bold text-muted/40">{item.step}</span>
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="absolute inset-0 -z-10 opacity-20">
            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-white blur-3xl" />
          </div>
          <Trophy className="mx-auto h-10 w-10 text-primary-foreground" />
          <h2 className="mt-4 text-2xl font-bold text-primary-foreground sm:text-3xl">
            Siap Menjadi Web Developer?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            Bergabung dengan ribuan peserta lainnya. Mulai belajar coding hari ini, gratis!
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => (user ? goMateri() : openAuth("register"))}
              className="w-full sm:w-auto"
            >
              {user ? "Lanjut Belajar" : "Daftar Sekarang"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => (user ? goDashboard() : openAuth("login"))}
              className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
            >
              {user ? "Lihat Dashboard" : "Sudah punya akun? Masuk"}
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-primary-foreground/70">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" /> Gratis selamanya
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" /> Tanpa kartu kredit
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
