"use client";

import { useQuery } from "@tanstack/react-query";
import {
  BookOpen,
  CheckCircle2,
  Circle,
  Lock,
  Search,
  FolderGit2,
  ArrowRight,
} from "lucide-react";
import { useAppStore } from "@/lib/store";
import { materialsApi, progressApi } from "@/lib/api";
import { LEVEL_INFO } from "@/lib/content-types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function MateriView() {
  const { goDetail, user, openAuth } = useAppStore();
  const [search, setSearch] = useState("");
  const [activeLevel, setActiveLevel] = useState<number | null>(null);

  const { data: materialsData, isLoading: loadingMaterials } = useQuery({
    queryKey: ["materials"],
    queryFn: materialsApi.list,
  });

  const { data: progressData } = useQuery({
    queryKey: ["progress"],
    queryFn: progressApi.get,
    enabled: !!user,
  });

  const completedSlugs = useMemo(() => {
    const set = new Set<string>();
    progressData?.progress?.forEach((p) => {
      if (p.completed) set.add(p.material.slug);
    });
    return set;
  }, [progressData]);

  const allMaterials = materialsData?.materials || [];

  const filteredMaterials = useMemo(() => {
    if (!search) return allMaterials;
    return allMaterials.filter((m) =>
      m.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [allMaterials, search]);

  const levels = [1, 2, 3, 4, 5, 6, 7, 8];

  const getLevelStats = (level: number) => {
    const levelMaterials = allMaterials.filter((m) => m.level === level);
    const completed = levelMaterials.filter((m) => completedSlugs.has(m.slug)).length;
    return { total: levelMaterials.length, completed };
  };

  const handleMaterialClick = (slug: string) => {
    if (!user) {
      openAuth("login");
      return;
    }
    // Check if material is locked
    const mat = allMaterials.find((m) => m.slug === slug);
    if (mat && isMaterialLocked(mat)) {
      toast.error("Selesaikan materi sebelumnya terlebih dahulu!");
      return;
    }
    goDetail(slug);
  };

  // A material is locked if the previous material (in global order) is not completed
  // First material is always unlocked
  const isMaterialLocked = (mat: { level: number; order: number; slug: string }) => {
    if (!user) return false; // not logged in — let login prompt handle it
    // Find the previous material in global order (level asc, order asc)
    const sortedAll = [...allMaterials].sort((a, b) => {
      if (a.level !== b.level) return a.level - b.level;
      return a.order - b.order;
    });
    const idx = sortedAll.findIndex((m) => m.slug === mat.slug);
    if (idx <= 0) return false; // first material — never locked
    const prevMat = sortedAll[idx - 1];
    return !completedSlugs.has(prevMat.slug);
  };

  if (loadingMaterials) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Skeleton className="h-10 w-64 mb-4" />
        <Skeleton className="h-10 w-full mb-8" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="mb-8">
            <Skeleton className="h-8 w-48 mb-4" />
            <div className="grid gap-3 sm:grid-cols-2">
              {[1, 2, 3, 4].map((j) => (
                <Skeleton key={j} className="h-20 w-full" />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold sm:text-4xl">Materi Belajar</h1>
        <p className="mt-2 text-muted-foreground">
          8 level pembelajaran, 82+ materi cyber & IT. Klik materi untuk mulai belajar.
        </p>
      </div>

      {/* Search & Login prompt */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Cari materi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        {!user && (
          <Button
            variant="outline"
            onClick={() => openAuth("login")}
            className="shrink-0"
          >
            Masuk untuk simpan progress
          </Button>
        )}
      </div>

      {/* Level filter pills */}
      {!search && (
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveLevel(null)}
            className={cn(
              "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
              activeLevel === null
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            Semua Level
          </button>
          {levels.map((lvl) => {
            const stats = getLevelStats(lvl);
            return (
              <button
                key={lvl}
                onClick={() => setActiveLevel(lvl)}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                  activeLevel === lvl
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                <span>{LEVEL_INFO[lvl].icon}</span>
                Level {lvl}
                {user && stats.completed > 0 && (
                  <span className="ml-1 rounded-full bg-primary-foreground/20 px-1.5 text-xs">
                    {stats.completed}/{stats.total}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Materials by level */}
      <div className="space-y-10">
        {levels
          .filter((lvl) => !activeLevel || activeLevel === lvl)
          .map((level) => {
            const info = LEVEL_INFO[level];
            const levelMats = filteredMaterials.filter((m) => m.level === level);
            if (levelMats.length === 0) return null;
            const stats = getLevelStats(level);
            const levelProgress = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;

            return (
              <div key={level}>
                {/* Level header */}
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                      {info.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">Level {level}</Badge>
                        {level === 7 && (
                          <Badge variant="outline" className="text-xs gap-1">
                            <FolderGit2 className="h-3 w-3" /> Project
                          </Badge>
                        )}
                      </div>
                      <h2 className="text-xl font-semibold">{info.title}</h2>
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    </div>
                  </div>
                  {user && (
                    <div className="sm:w-40">
                      <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                        <span>{stats.completed}/{stats.total} selesai</span>
                        <span>{Math.round(levelProgress)}%</span>
                      </div>
                      <Progress value={levelProgress} className="h-1.5" />
                    </div>
                  )}
                </div>

                {/* Material cards */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {levelMats.map((mat) => {
                    const isCompleted = completedSlugs.has(mat.slug);
                    const isLocked = isMaterialLocked(mat);
                    return (
                      <button
                        key={mat.id}
                        onClick={() => handleMaterialClick(mat.slug)}
                        className="group text-left"
                      >
                        <Card
                          className={cn(
                            "h-full transition-all",
                            isCompleted && "border-primary/30 bg-primary/5",
                            isLocked && "opacity-60 cursor-not-allowed",
                            !isLocked && "hover:border-primary/40 hover:shadow-md"
                          )}
                        >
                          <CardContent className="flex items-center gap-3 p-4">
                            <div
                              className={cn(
                                "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xl",
                                isCompleted
                                  ? "bg-primary/15"
                                  : isLocked
                                  ? "bg-muted"
                                  : "bg-muted"
                              )}
                            >
                              {isCompleted ? (
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                              ) : isLocked ? (
                                <Lock className="h-4 w-4 text-muted-foreground" />
                              ) : (
                                mat.icon
                              )}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium text-sm truncate">{mat.title}</h3>
                                {mat.isProject && (
                                  <Badge variant="outline" className="shrink-0 text-xs gap-1">
                                    <FolderGit2 className="h-2.5 w-2.5" />
                                    Project
                                  </Badge>
                                )}
                                {isLocked && (
                                  <Badge variant="secondary" className="shrink-0 text-xs gap-1">
                                    <Lock className="h-2.5 w-2.5" />
                                    Terkunci
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                                {isLocked
                                  ? "Selesaikan materi sebelumnya untuk membuka"
                                  : mat.description}
                              </p>
                            </div>
                            {!isLocked && (
                              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                            )}
                          </CardContent>
                        </Card>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>

      {filteredMaterials.length === 0 && (
        <div className="py-20 text-center">
          <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/50" />
          <p className="mt-4 text-muted-foreground">
            Tidak ada materi yang ditemukan untuk "{search}"
          </p>
        </div>
      )}
    </div>
  );
}
