"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  Award,
  RefreshCw,
  ChevronRight,
  Timer,
  Play,
  AlertCircle,
} from "lucide-react";
import { useAppStore } from "@/lib/store";
import { materialsApi, progressApi, quizApi } from "@/lib/api";
import type { QuizPoolQuestion } from "@/lib/api";
import { LEVEL_INFO } from "@/lib/content-types";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const TIME_PER_QUESTION = 30;
const PASSING_SCORE = 75;

export function DetailView() {
  const { materialSlug, goMateri, goDetail, goDashboard, user, openAuth } = useAppStore();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["material", materialSlug],
    queryFn: () => materialsApi.detail(materialSlug!),
    enabled: !!materialSlug,
  });

  if (isLoading || !data) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <Skeleton className="h-5 w-24 mb-4" />
        <Skeleton className="h-10 w-3/4 mb-3" />
        <Skeleton className="h-5 w-full mb-2" />
        <Skeleton className="h-5 w-5/6 mb-8" />
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </div>
      </div>
    );
  }

  const { material, prev, next, progress } = data;
  const levelInfo = LEVEL_INFO[material.level];
  const isCompleted = progress?.completed ?? false;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <button onClick={goMateri} className="hover:text-primary transition-colors">
          Materi
        </button>
        <ChevronRight className="h-3 w-3" />
        <span>{levelInfo.title}</span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground font-medium truncate">{material.title}</span>
      </nav>

      {/* Material header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary">Level {material.level} — {levelInfo.title}</Badge>
          {material.isProject && (
            <Badge variant="outline" className="gap-1">
              <Award className="h-3 w-3" /> Project
            </Badge>
          )}
          {isCompleted && (
            <Badge className="gap-1 bg-primary text-primary-foreground">
              <CheckCircle2 className="h-3 w-3" /> Selesai
            </Badge>
          )}
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
            {material.icon}
          </div>
          <div className="min-w-0">
            <h1 className="text-2xl font-bold sm:text-3xl">{material.title}</h1>
            <p className="mt-1 text-muted-foreground">{material.description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <Card className="mb-8 border-border/60">
        <CardContent className="p-5 sm:p-8">
          <MarkdownRenderer content={material.content} />
        </CardContent>
      </Card>

      {/* Quiz */}
      <QuizSection
        materialId={material.id}
        materialSlug={material.slug}
        currentScore={progress?.quizScore ?? null}
        isLoggedIn={!!user}
        onRequireLogin={() => openAuth("login")}
        onScoreSubmitted={() => {
          queryClient.invalidateQueries({ queryKey: ["material", materialSlug] });
          queryClient.invalidateQueries({ queryKey: ["progress"] });
        }}
      />

      {/* Mark complete */}
      {user && (
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardContent className="flex flex-col items-center justify-between gap-4 p-5 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full",
                isCompleted ? "bg-primary text-primary-foreground" : "bg-muted"
              )}>
                {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
              </div>
              <div>
                <p className="font-medium">
                  {isCompleted ? "Materi Selesai!" : "Tandai Materi Selesai"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {isCompleted
                    ? "Anda telah menyelesaikan materi ini."
                    : "Selesaikan quiz lalu tandai materi ini sebagai selesai."}
                </p>
              </div>
            </div>
            <Button
              onClick={async () => {
                try {
                  await progressApi.update(material.id, { completed: !isCompleted });
                  queryClient.invalidateQueries({ queryKey: ["material", materialSlug] });
                  queryClient.invalidateQueries({ queryKey: ["progress"] });
                  toast.success(isCompleted ? "Materi dibatalkan" : "Materi ditandai selesai!");
                } catch {
                  toast.error("Gagal menyimpan progress");
                }
              }}
              variant={isCompleted ? "outline" : "default"}
              className={cn(!isCompleted && "bg-primary text-primary-foreground hover:bg-primary/90")}
            >
              {isCompleted ? "Batalkan" : "Tandai Selesai"}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        {prev ? (
          <Button
            variant="outline"
            onClick={() => goDetail(prev.slug)}
            className="justify-start sm:w-[48%]"
          >
            <ArrowLeft className="mr-2 h-4 w-4 shrink-0" />
            <div className="text-left min-w-0">
              <div className="text-xs text-muted-foreground">Sebelumnya</div>
              <div className="truncate font-medium">{prev.title}</div>
            </div>
          </Button>
        ) : (
          <div className="hidden sm:block sm:w-[48%]" />
        )}
        {next ? (
          <Button
            variant="outline"
            onClick={() => goDetail(next.slug)}
            className="justify-end sm:w-[48%]"
          >
            <div className="text-right min-w-0">
              <div className="text-xs text-muted-foreground">Selanjutnya</div>
              <div className="truncate font-medium">{next.title}</div>
            </div>
            <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
          </Button>
        ) : (
          <Button
            onClick={goDashboard}
            className="bg-primary text-primary-foreground hover:bg-primary/90 sm:w-[48%]"
          >
            <Award className="mr-2 h-4 w-4" />
            Lihat Dashboard
          </Button>
        )}
      </div>
    </div>
  );
}

function QuizSection({
  materialId,
  materialSlug,
  currentScore,
  isLoggedIn,
  onRequireLogin,
  onScoreSubmitted,
}: {
  materialId: string;
  materialSlug: string;
  currentScore: number | null;
  isLoggedIn: boolean;
  onRequireLogin: () => void;
  onScoreSubmitted: () => void;
}) {
  const [phase, setPhase] = useState<"idle" | "loading" | "playing" | "finished">("idle");
  const [questions, setQuestions] = useState<QuizPoolQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const answersRef = useRef<(number | null)[]>([]);
  const questionsRef = useRef<QuizPoolQuestion[]>([]);

  // Keep refs in sync with state
  useEffect(() => { answersRef.current = answers; }, [answers]);
  useEffect(() => { questionsRef.current = questions; }, [questions]);

  const totalQuestions = questions.length;
  const correctCount = answers.filter((a, i) => a === questions[i]?.answer).length;
  const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const passed = score >= PASSING_SCORE;

  // Start quiz — fetch random questions from API
  const startQuiz = async () => {
    if (!isLoggedIn) {
      onRequireLogin();
      return;
    }
    setPhase("loading");
    try {
      const data = await quizApi.getPool(materialSlug);
      setQuestions(data.questions);
      setAnswers(new Array(data.questions.length).fill(null));
      setCurrentIndex(0);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setTimeLeft(TIME_PER_QUESTION);
      setPhase("playing");
    } catch {
      toast.error("Gagal memuat soal quiz");
      setPhase("idle");
    }
  };

  // Finish quiz and save score — reads from refs to avoid stale closure
  // MUST be defined before goToNext (which references it)
  const finishQuiz = useCallback(async () => {
    setPhase("finished");
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    // Calculate final score from refs (always latest)
    const finalAnswers = answersRef.current;
    const finalQuestions = questionsRef.current;
    const finalCorrect = finalAnswers.filter((a, i) => a === finalQuestions[i]?.answer).length;
    const finalTotal = finalQuestions.length;
    const finalScore = finalTotal > 0 ? Math.round((finalCorrect / finalTotal) * 100) : 0;

    setSubmitting(true);
    try {
      await progressApi.update(materialId, { quizScore: finalScore });
      onScoreSubmitted();
      if (finalScore >= PASSING_SCORE) {
        toast.success(`Quiz selesai! Skor: ${finalScore}% — Lulus!`);
      } else {
        toast.info(`Skor: ${finalScore}% — Belum lulus (min. ${PASSING_SCORE}%)`);
      }
    } catch {
      toast.error("Gagal menyimpan skor quiz");
    } finally {
      setSubmitting(false);
    }
  }, [materialId, onScoreSubmitted]);

  // Move to next question or finish
  const goToNext = useCallback(() => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    setTimeLeft(TIME_PER_QUESTION);

    if (currentIndex + 1 >= totalQuestions) {
      // Quiz finished — calculate and save score
      finishQuiz();
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, totalQuestions, finishQuiz]);

  // Handle answer selection
  const handleAnswer = (optionIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(optionIndex);
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionIndex;
      return next;
    });
    setShowFeedback(true);
    // Stop timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    // Auto-advance after 1.5s (show feedback)
    setTimeout(() => {
      goToNext();
    }, 1500);
  };

  // Timer effect — runs when playing and not showing feedback
  useEffect(() => {
    if (phase !== "playing" || showFeedback) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Time's up — mark as null (wrong) and advance
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          setShowFeedback(true);
          setTimeout(() => goToNext(), 1500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [phase, currentIndex, showFeedback, goToNext]);

  // ===== IDLE SCREEN (before starting) =====
  if (phase === "idle") {
    return (
      <Card className="mb-8 border-border/60">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Award className="h-5 w-5 text-primary" />
            Quiz Materi
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentScore !== null && (
            <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-muted/50 p-3">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm">
                Skor terakhir: <span className={cn("font-bold", currentScore >= PASSING_SCORE ? "text-primary" : "text-amber-600 dark:text-amber-400")}>{currentScore}%</span>
                {currentScore >= PASSING_SCORE ? " (Lulus)" : " (Belum Lulus)"}
              </span>
            </div>
          )}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg border border-border/60 p-3 text-center">
              <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <AlertCircle className="h-4 w-4 text-primary" />
              </div>
              <p className="text-lg font-bold">≤30</p>
              <p className="text-xs text-muted-foreground">Soal</p>
            </div>
            <div className="rounded-lg border border-border/60 p-3 text-center">
              <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Timer className="h-4 w-4 text-primary" />
              </div>
              <p className="text-lg font-bold">30s</p>
              <p className="text-xs text-muted-foreground">Per Soal</p>
            </div>
            <div className="rounded-lg border border-border/60 p-3 text-center">
              <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle2 className="h-4 w-4 text-primary" />
              </div>
              <p className="text-lg font-bold">{PASSING_SCORE}%</p>
              <p className="text-xs text-muted-foreground">Min. Lulus</p>
            </div>
          </div>
          <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 text-sm text-amber-700 dark:text-amber-400">
            <p className="flex items-center gap-2 font-medium">
              <AlertCircle className="h-4 w-4" />
              Penting!
            </p>
            <ul className="mt-1.5 space-y-1 text-xs text-amber-700/80 dark:text-amber-400/80">
              <li>• Soal diambil dari materi ini + materi-materi sebelumnya yang sudah kamu pelajari</li>
              <li>• Makin jauh belajar, makin banyak soal quiz (maks. 30 soal)</li>
              <li>• Soal diacak setiap kali mengulang — tidak bisa mencontek!</li>
              <li>• Jika waktu habis, soal otomatis lanjut (dijawab salah)</li>
            </ul>
          </div>
          <Button
            onClick={startQuiz}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            size="lg"
          >
            <Play className="mr-2 h-4 w-4" />
            Mulai Quiz
          </Button>
        </CardContent>
      </Card>
    );
  }

  // ===== LOADING SCREEN =====
  if (phase === "loading") {
    return (
      <Card className="mb-8 border-border/60">
        <CardContent className="flex items-center justify-center py-12">
          <RefreshCw className="mr-2 h-5 w-5 animate-spin text-primary" />
          <span className="text-muted-foreground">Memuat soal quiz...</span>
        </CardContent>
      </Card>
    );
  }

  // ===== FINISHED SCREEN =====
  if (phase === "finished") {
    return (
      <Card className="mb-8 border-border/60">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-lg">
            <span className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Hasil Quiz
            </span>
            <Badge
              className={cn(
                passed
                  ? "bg-primary text-primary-foreground"
                  : "bg-amber-500 text-white"
              )}
            >
              Skor: {score}%
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Score circle */}
          <div className="flex flex-col items-center py-4">
            <div className={cn(
              "flex h-24 w-24 items-center justify-center rounded-full border-4",
              passed ? "border-primary bg-primary/10" : "border-amber-500 bg-amber-500/10"
            )}>
              <span className={cn("text-2xl font-bold", passed ? "text-primary" : "text-amber-600 dark:text-amber-400")}>
                {score}%
              </span>
            </div>
            <p className={cn("mt-3 text-lg font-semibold", passed ? "text-primary" : "text-amber-600 dark:text-amber-400")}>
              {passed ? "🎉 Lulus!" : "Belum Lulus"}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {correctCount} dari {totalQuestions} soal benar
            </p>
            {!passed && (
              <p className="mt-1 text-xs text-muted-foreground">
                Minimal {PASSING_SCORE}% untuk lulus. Soal akan diacak saat mengulang.
              </p>
            )}
          </div>

          {/* Progress bar */}
          <div className="space-y-1.5">
            <Progress value={score} className="h-3" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0%</span>
              <span className="font-medium text-primary">{PASSING_SCORE}% (min. lulus)</span>
              <span>100%</span>
            </div>
          </div>

          {/* Retake button */}
          <Button
            onClick={startQuiz}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={submitting}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            {submitting ? "Menyimpan..." : passed ? "Coba Lagi" : "Ulangi Quiz"}
          </Button>
        </CardContent>
      </Card>
    );
  }

  // ===== PLAYING SCREEN (one question at a time) =====
  const q = questions[currentIndex];
  if (!q) return null;

  const timerPct = (timeLeft / TIME_PER_QUESTION) * 100;
  const isCorrect = selectedAnswer === q.answer;

  return (
    <Card className="mb-8 border-border/60">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Award className="h-5 w-5 text-primary" />
            Quiz Materi
          </CardTitle>
          <Badge variant="secondary">
            Soal {currentIndex + 1} / {totalQuestions}
          </Badge>
        </div>
        {/* Overall progress */}
        <Progress value={((currentIndex) / totalQuestions) * 100} className="h-1.5" />
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Timer bar */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1.5 font-medium text-muted-foreground">
              <Timer className="h-4 w-4" />
              Waktu tersisa
            </span>
            <span className={cn(
              "font-bold tabular-nums",
              timeLeft <= 5 ? "text-destructive" : timeLeft <= 10 ? "text-amber-600 dark:text-amber-400" : "text-primary"
            )}>
              {timeLeft}s
            </span>
          </div>
          <Progress
            value={timerPct}
            className={cn(
              "h-2 transition-all",
              timeLeft <= 5 && "[&>div]:bg-destructive",
              timeLeft <= 10 && timeLeft > 5 && "[&>div]:bg-amber-500"
            )}
          />
        </div>

        {/* Question */}
        <div className="rounded-lg border border-border/60 p-4">
          <div className="flex gap-2">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              {currentIndex + 1}
            </span>
            <p className="font-medium pt-0.5 text-base">{q.question}</p>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-2 pl-1">
          {q.options.map((opt, oi) => {
            const isCorrectAnswer = q.answer === oi;
            const isUserChoice = selectedAnswer === oi;
            let optionClass = "border-border hover:bg-muted hover:border-primary/40";

            if (showFeedback) {
              if (isCorrectAnswer) {
                optionClass = "border-primary bg-primary/10 text-primary";
              } else if (isUserChoice) {
                optionClass = "border-destructive bg-destructive/10 text-destructive";
              } else {
                optionClass = "border-border opacity-50";
              }
            }

            return (
              <button
                key={oi}
                onClick={() => handleAnswer(oi)}
                disabled={showFeedback}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-all",
                  optionClass,
                  !showFeedback && "cursor-pointer"
                )}
              >
                <span className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                  showFeedback && isCorrectAnswer && "border-primary bg-primary text-primary-foreground",
                  showFeedback && isUserChoice && !isCorrectAnswer && "border-destructive bg-destructive text-destructive-foreground",
                  !showFeedback && "border-border"
                )}>
                  {String.fromCharCode(65 + oi)}
                </span>
                <span className="text-sm flex-1">{opt}</span>
                {showFeedback && isCorrectAnswer && (
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className={cn(
            "rounded-lg p-3 text-sm",
            isCorrect ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"
          )}>
            {isCorrect ? "✓ Benar!" : selectedAnswer === null ? "⏰ Waktu habis!" : "✗ Salah. "}
            {" "}
            {q.explanation}
          </div>
        )}

        {/* Auto-advance indicator */}
        {showFeedback && (
          <p className="text-center text-xs text-muted-foreground">
            Lanjut otomatis dalam 1.5 detik...
          </p>
        )}
      </CardContent>
    </Card>
  );
}
