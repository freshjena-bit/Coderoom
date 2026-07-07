"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Award,
  Trophy,
  Target,
  Flame,
  TrendingUp,
  BookOpen,
  CheckCircle2,
  Circle,
  Lock,
  Download,
  ArrowRight,
  Star,
} from "lucide-react";
import { useAppStore } from "@/lib/store";
import { progressApi, materialsApi } from "@/lib/api";
import { LEVEL_INFO } from "@/lib/content-types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function DashboardView() {
  const { user, openAuth, goMateri, goDetail } = useAppStore();

  const { data: progressData, isLoading } = useQuery({
    queryKey: ["progress"],
    queryFn: progressApi.get,
    enabled: !!user,
  });

  const { data: materialsData } = useQuery({
    queryKey: ["materials"],
    queryFn: materialsApi.list,
    enabled: !!user,
  });

  if (!user) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <Lock className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">Login Diperlukan</h2>
        <p className="mt-2 text-muted-foreground">
          Masuk atau daftar untuk melihat dashboard dan progress belajar Anda.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button variant="outline" onClick={() => openAuth("login")}>
            Masuk
          </Button>
          <Button
            onClick={() => openAuth("register")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Daftar
          </Button>
        </div>
      </div>
    );
  }

  if (isLoading || !progressData?.stats) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Skeleton className="h-10 w-64 mb-8" />
        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-28" />
          ))}
        </div>
        <Skeleton className="h-64" />
      </div>
    );
  }

  const { stats, progress } = progressData;
  const allMaterials = materialsData?.materials || [];
  const completedMaterials = progress.filter((p) => p.completed);
  const quizAttempted = progress.filter((p) => p.quizScore !== null);
  const quizPassed = quizAttempted.filter((p) => (p.quizScore ?? 0) >= 70);
  const avgScore = quizAttempted.length > 0
    ? Math.round(quizAttempted.reduce((sum, p) => sum + (p.quizScore || 0), 0) / quizAttempted.length)
    : 0;

  // Find next incomplete material
  const nextMaterial = allMaterials.find(
    (m) => !completedMaterials.some((c) => c.material.id === m.id)
  );

  // Achievements
  const achievements = [
    {
      icon: BookOpen,
      title: "Langkah Pertama",
      desc: "Selesaikan materi pertama",
      unlocked: completedMaterials.length >= 1,
    },
    {
      icon: Flame,
      title: "Semangat Belajar",
      desc: "Selesaikan 5 materi",
      unlocked: completedMaterials.length >= 5,
    },
    {
      icon: Target,
      title: "Fokus",
      desc: "Selesaikan 15 materi",
      unlocked: completedMaterials.length >= 15,
    },
    {
      icon: TrendingUp,
      title: "Setengah Jalan",
      desc: "Capai 50% progress",
      unlocked: stats.completionRate >= 50,
    },
    {
      icon: Star,
      title: "Quiz Master",
      desc: "Lulus 10 quiz",
      unlocked: quizPassed.length >= 10,
    },
    {
      icon: Trophy,
      title: "Lulus Semua",
      desc: "Selesaikan 100% materi",
      unlocked: stats.completionRate === 100,
    },
  ];

  const canGetCertificate = stats.completionRate === 100;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Welcome */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold sm:text-4xl">
            Halo, {user.name}! 👋
          </h1>
          <p className="mt-1 text-muted-foreground">
            Terus semangat belajar! Ini progress Anda sejauh ini.
          </p>
        </div>
        {nextMaterial && (
          <Button
            onClick={() => goDetail(nextMaterial.slug)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0"
          >
            Lanjut Belajar
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Stats cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          icon={CheckCircle2}
          label="Materi Selesai"
          value={`${stats.completedCount}`}
          sub={`dari ${stats.totalMaterials} materi`}
          color="primary"
        />
        <StatCard
          icon={Target}
          label="Progress Keseluruhan"
          value={`${stats.completionRate}%`}
          sub={`${stats.totalMaterials - stats.completedCount} tersisa`}
          color="rose"
        />
        <StatCard
          icon={Award}
          label="Rata-rata Quiz"
          value={`${avgScore}%`}
          sub={`${quizPassed.length} quiz lulus`}
          color="amber"
        />
      </div>

      {/* Overall progress bar */}
      <Card className="mb-8 border-border/60">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-lg">
            <span className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Progress Belajar
            </span>
            <span className="text-2xl font-bold text-primary">{stats.completionRate}%</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={stats.completionRate} className="h-3" />
          <p className="mt-2 text-sm text-muted-foreground">
            {stats.completionRate === 100
              ? "🎉 Selamat! Anda telah menyelesaikan semua materi!"
              : `Lengkapi ${stats.totalMaterials - stats.completedCount} materi lagi untuk menyelesaikan course.`}
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Level breakdown */}
        <div className="lg:col-span-2">
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="text-lg">Progress per Level</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {stats.levelStats.map((ls) => {
                const info = LEVEL_INFO[ls.level];
                const pct = ls.total > 0 ? (ls.completed / ls.total) * 100 : 0;
                return (
                  <div key={ls.level} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <button
                        onClick={goMateri}
                        className="flex items-center gap-2 font-medium hover:text-primary transition-colors"
                      >
                        <span className="text-base">{info.icon}</span>
                        Level {ls.level} — {info.title}
                      </button>
                      <span className="text-muted-foreground">
                        {ls.completed}/{ls.total}
                      </span>
                    </div>
                    <Progress value={pct} className="h-1.5" />
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Recent activity */}
          {completedMaterials.length > 0 && (
            <Card className="mt-6 border-border/60">
              <CardHeader>
                <CardTitle className="text-lg">Materi Terselesaikan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-h-64 space-y-2 overflow-y-auto">
                  {completedMaterials
                    .slice()
                    .reverse()
                    .slice(0, 10)
                    .map((p) => (
                      <button
                        key={p.id}
                        onClick={() => goDetail(p.material.slug)}
                        className="flex w-full items-center gap-3 rounded-lg border border-border/60 p-2.5 text-left transition-colors hover:bg-muted"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-lg">
                          {p.material.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium">{p.material.title}</p>
                          <p className="text-xs text-muted-foreground">
                            Level {p.material.level}
                            {p.quizScore !== null && ` · Quiz: ${p.quizScore}%`}
                          </p>
                        </div>
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      </button>
                    ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Certificate */}
          <Card
            className={cn(
              "border-2",
              canGetCertificate
                ? "border-primary bg-primary/5"
                : "border-dashed border-border"
            )}
          >
            <CardHeader>
              <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                {canGetCertificate ? (
                  <Award className="h-6 w-6 text-primary" />
                ) : (
                  <Lock className="h-6 w-6 text-muted-foreground" />
                )}
              </div>
              <CardTitle className="text-lg">Sertifikat</CardTitle>
            </CardHeader>
            <CardContent>
              {canGetCertificate ? (
                <>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Selamat! Anda berhak mendapatkan sertifikat penyelesaian.
                  </p>
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => {
                      toast.success("Sertifikat diunduh! 🎉");
                      // Generate a simple certificate text file
                      const cert = `SERTIFIKAT PENYELESAIAN\n\nDiberikan kepada:\n${user.name}\n\nAtas keberhasilan menyelesaikan seluruh materi\ndi CodeRoom - Belajar Coding dari Nol\n\nTanggal: ${new Date().toLocaleDateString("id-ID")}\nCompletion Rate: 100%`;
                      const blob = new Blob([cert], { type: "text/plain" });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = "sertifikat-coderoom.txt";
                      a.click();
                    }}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Unduh Sertifikat
                  </Button>
                </>
              ) : (
                <>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Selesaikan semua materi untuk mendapatkan sertifikat.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Progress value={stats.completionRate} className="h-1.5 flex-1" />
                    <span className="font-medium">{stats.completionRate}%</span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Trophy className="h-5 w-5 text-primary" />
                Pencapaian
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2.5">
              {achievements.map((ach) => (
                <div
                  key={ach.title}
                  className={cn(
                    "flex items-center gap-3 rounded-lg p-2.5 transition-colors",
                    ach.unlocked ? "bg-primary/5" : "opacity-50"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                      ach.unlocked ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
                    )}
                  >
                    {ach.unlocked ? (
                      <ach.icon className="h-4 w-4" />
                    ) : (
                      <Lock className="h-3.5 w-3.5" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{ach.title}</p>
                    <p className="text-xs text-muted-foreground">{ach.desc}</p>
                  </div>
                  {ach.unlocked && <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  color,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub: string;
  color: "primary" | "rose" | "amber";
}) {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    rose: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  };

  return (
    <Card className="border-border/60">
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{label}</p>
          <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg", colorClasses[color])}>
            <Icon className="h-4 w-4" />
          </div>
        </div>
        <p className="mt-2 text-3xl font-bold">{value}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
      </CardContent>
    </Card>
  );
}
