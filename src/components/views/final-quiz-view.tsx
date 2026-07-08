"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Award,
  RefreshCw,
  Timer,
  Play,
  AlertCircle,
  CheckCircle2,
  Lock,
  Trophy,
  MessageCircle,
} from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { quizApi } from "@/lib/api";
import type { QuizPoolQuestion } from "@/lib/api";
import { useAppStore } from "@/lib/store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const TIME_PER_QUESTION = 30;
const PASSING_SCORE = 75;
const WHATSAPP_NUMBER = "6283114593730";

export function FinalQuizView() {
  const { user, openAuth, goMateri } = useAppStore();
  const queryClient = useQueryClient();
  const [phase, setPhase] = useState<"idle" | "loading" | "playing" | "finished">("idle");
  const [questions, setQuestions] = useState<QuizPoolQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const answersRef = useRef<(number | null)[]>([]);
  const questionsRef = useRef<QuizPoolQuestion[]>([]);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => { answersRef.current = answers; }, [answers]);
  useEffect(() => { questionsRef.current = questions; }, [questions]);

  const totalQuestions = questions.length;
  const correctCount = answers.filter((a, i) => a === questions[i]?.answer).length;
  const passed = finalScore >= PASSING_SCORE;

  // Check if user can access final quiz (all levels 1-8 completed)
  const { data: progressData } = useQuery({
    queryKey: ["progress"],
    queryFn: () => import("@/lib/api").then((m) => m.progressApi.get()),
    enabled: !!user,
  });

  const allLevelsCompleted = (() => {
    if (!user || !progressData?.stats) return false;
    // Check all 8 levels have 100% completion
    const levelStats = progressData.stats.levelStats;
    if (!levelStats || levelStats.length < 8) return false;
    return levelStats.slice(0, 8).every((ls) => ls.completed >= ls.total && ls.total > 0);
  })();

  const startQuiz = async () => {
    if (!user) {
      openAuth("login");
      return;
    }
    if (!allLevelsCompleted) {
      toast.error("Selesaikan semua materi Level 1-8 terlebih dahulu!");
      return;
    }
    setPhase("loading");
    try {
      const data = await quizApi.getFinal();
      setQuestions(data.questions);
      setAnswers(new Array(data.questions.length).fill(null));
      setCurrentIndex(0);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setTimeLeft(TIME_PER_QUESTION);
      setPhase("playing");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Gagal memuat final quiz");
      setPhase("idle");
    }
  };

  const finishQuiz = useCallback(async () => {
    setPhase("finished");
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    const finalAnswers = answersRef.current;
    const finalQuestions = questionsRef.current;
    const finalCorrect = finalAnswers.filter((a, i) => a === finalQuestions[i]?.answer).length;
    const finalTotal = finalQuestions.length;
    const score = finalTotal > 0 ? Math.round((finalCorrect / finalTotal) * 100) : 0;
    setFinalScore(score);

    queryClient.invalidateQueries({ queryKey: ["progress"] });

    if (score >= PASSING_SCORE) {
      toast.success(`🎉 LULUS! Final Quiz selesai dengan skor ${score}%`);
    } else {
      toast.info(`Skor: ${score}% — Belum lulus (min. ${PASSING_SCORE}%)`);
    }
  }, [queryClient]);

  const goToNext = useCallback(() => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    setTimeLeft(TIME_PER_QUESTION);
    if (currentIndex + 1 >= totalQuestions) {
      finishQuiz();
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, totalQuestions, finishQuiz]);

  const handleAnswer = (optionIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(optionIndex);
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionIndex;
      return next;
    });
    setShowFeedback(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setTimeout(() => goToNext(), 1500);
  };

  useEffect(() => {
    if (phase !== "playing" || showFeedback) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
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

  // Build WhatsApp message text
  const buildWhatsAppMessage = () => {
    if (!user) return "";
    return `🎉 SELAMAT! Saya telah LULUS Final Quiz CyberLab!

📋 Informasi Akun:
• Nama: ${user.name}
• Email: ${user.email}
• Tanggal: ${new Date().toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}

🏆 Hasil Final Quiz:
• Skor: ${finalScore}%
• Status: LULUS (min. ${PASSING_SCORE}%)
• Jawaban benar: ${correctCount}/${totalQuestions}

Mohon informasi selanjutnya untuk pengambilan sertifikat. Terima kasih!`;
  };

  // Redirect to WhatsApp with user info
  const redirectToWhatsApp = () => {
    if (!user) return;
    setRedirecting(true);
    const message = buildWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setRedirecting(false);
  };

  // ===== NOT LOGGED IN =====
  if (!user) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <Lock className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">Login Diperlukan</h2>
        <p className="mt-2 text-muted-foreground">
          Masuk untuk mengakses Final Quiz.
        </p>
        <Button variant="outline" onClick={() => openAuth("login")} className="mt-4">
          Masuk
        </Button>
      </div>
    );
  }

  // ===== IDLE SCREEN =====
  if (phase === "idle") {
    return (
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
        <button
          onClick={goMateri}
          className="mb-6 flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Kembali ke Materi
        </button>

        <Card className="border-primary/30">
          <CardHeader className="text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-4xl">
              🏆
            </div>
            <CardTitle className="text-2xl">Final Quiz — Ujian Akhir</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Level 9 · Ujian terakhir dari semua materi Level 1-8
            </p>
          </CardHeader>
          <CardContent className="space-y-5">
            {!allLevelsCompleted ? (
              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-center">
                <Lock className="mx-auto mb-2 h-8 w-8 text-amber-600" />
                <p className="font-medium text-amber-700 dark:text-amber-400">
                  Final Quiz Terkunci
                </p>
                <p className="mt-1 text-sm text-amber-700/80 dark:text-amber-400/80">
                  Selesaikan semua materi dari Level 1 sampai Level 8 untuk membuka Final Quiz.
                </p>
                {progressData?.stats && (
                  <div className="mt-3 space-y-1">
                    {progressData.stats.levelStats.slice(0, 8).map((ls) => (
                      <div key={ls.level} className="flex items-center justify-between text-xs">
                        <span>Level {ls.level}</span>
                        <span className={cn(
                          ls.completed >= ls.total ? "text-primary font-medium" : "text-muted-foreground"
                        )}>
                          {ls.completed}/{ls.total} {ls.completed >= ls.total && "✓"}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <Button variant="outline" onClick={goMateri} className="mt-4" size="sm">
                  Pelajari Materi
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg border border-border/60 p-3 text-center">
                    <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                      <AlertCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-lg font-bold">
                      {progressData?.stats?.totalMaterials ? progressData.stats.totalMaterials * 3 : "SEMUA"}
                    </p>
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

                <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                  <p className="flex items-center gap-2 font-medium text-primary">
                    <Trophy className="h-4 w-4" />
                    Final Quiz
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                    <li>• SEMUA soal dari materi Level 1-8 (±{progressData?.stats?.totalMaterials ? progressData.stats.totalMaterials * 3 : 246} soal, diacak)</li>
                    <li>• Soal & jawaban diacak setiap kali mengulang</li>
                    <li>• Jika lulus, Anda akan diarahkan ke WhatsApp untuk klaim sertifikat</li>
                    <li>• Jika waktu habis, soal otomatis lanjut (dijawab salah)</li>
                  </ul>
                </div>

                <Button
                  onClick={startQuiz}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Mulai Final Quiz
                </Button>

                {/* Preview pesan WhatsApp yang akan dikirim jika lulus */}
                <details className="group">
                  <summary className="flex cursor-pointer items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
                    Lihat preview pesan WhatsApp yang akan dikirim
                    <span className="ml-auto text-xs group-open:hidden">▼</span>
                    <span className="ml-auto hidden text-xs group-open:inline">▲</span>
                  </summary>
                  <div className="mt-3 rounded-lg border border-[#25D366]/30 bg-[#25D366]/5 p-4">
                    <div className="rounded-lg bg-white p-3 text-sm text-gray-800 shadow-sm dark:bg-zinc-900 dark:text-zinc-200">
                      <pre className="whitespace-pre-wrap break-words font-sans text-xs leading-relaxed">
{`🎉 SELAMAT! Saya telah LULUS Final Quiz CyberLab!

📋 Informasi Akun:
• Nama: ${user?.name || "[Nama Anda]"}
• Email: ${user?.email || "[Email Anda]"}
• Tanggal: [Tanggal Lulus]

🏆 Hasil Final Quiz:
• Skor: [Skor]%
• Status: LULUS (min. ${PASSING_SCORE}%)
• Jawaban benar: [X]/${progressData?.stats?.totalMaterials ? progressData.stats.totalMaterials * 3 : 246}

Mohon informasi selanjutnya untuk pengambilan sertifikat. Terima kasih!`}
                      </pre>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      → Pesan ini akan dikirim ke: <strong>wa.me/{WHATSAPP_NUMBER}</strong> setelah Anda lulus Final Quiz
                    </p>
                  </div>
                </details>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  // ===== LOADING =====
  if (phase === "loading") {
    return (
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <RefreshCw className="mr-2 h-5 w-5 animate-spin text-primary" />
            <span className="text-muted-foreground">Memuat final quiz...</span>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ===== FINISHED =====
  if (phase === "finished") {
    return (
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
        <Card className={cn("border-2", passed ? "border-primary" : "border-amber-500")}>
          <CardHeader className="text-center">
            <div className={cn(
              "mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full",
              passed ? "bg-primary/10" : "bg-amber-500/10"
            )}>
              {passed ? <Trophy className="h-10 w-10 text-primary" /> : <AlertCircle className="h-10 w-10 text-amber-500" />}
            </div>
            <CardTitle className="text-2xl">
              {passed ? "🎉 SELAMAT! ANDA LULUS!" : "Belum Lulus"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex flex-col items-center py-4">
              <div className={cn(
                "flex h-24 w-24 items-center justify-center rounded-full border-4",
                passed ? "border-primary bg-primary/10" : "border-amber-500 bg-amber-500/10"
              )}>
                <span className={cn("text-2xl font-bold", passed ? "text-primary" : "text-amber-600 dark:text-amber-400")}>
                  {finalScore}%
                </span>
              </div>
              <p className={cn("mt-3 text-lg font-semibold", passed ? "text-primary" : "text-amber-600 dark:text-amber-400")}>
                {passed ? "Lulus Final Quiz!" : "Belum Lulus"}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {correctCount} dari {totalQuestions} soal benar
              </p>
            </div>

            {passed ? (
              <>
                <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                  <p className="text-center font-medium text-primary">
                    🏆 Selamat! Anda telah menyelesaikan seluruh program CyberLab!
                  </p>
                  <p className="mt-1 text-center text-sm text-muted-foreground">
                    Klik tombol di bawah untuk mengirim informasi kelulusan Anda via WhatsApp dan klaim sertifikat.
                  </p>
                </div>

                {/* WhatsApp message preview */}
                <div className="rounded-lg border border-[#25D366]/30 bg-[#25D366]/5 p-4">
                  <p className="mb-2 flex items-center gap-1.5 text-sm font-medium text-[#1ebe5d]">
                    <MessageCircle className="h-4 w-4" />
                    Preview Pesan WhatsApp
                  </p>
                  <div className="rounded-lg bg-white p-3 text-sm text-gray-800 shadow-sm dark:bg-zinc-900 dark:text-zinc-200">
                    <pre className="whitespace-pre-wrap break-words font-sans text-xs leading-relaxed">
                      {buildWhatsAppMessage()}
                    </pre>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    → Dikirim ke: wa.me/{WHATSAPP_NUMBER}
                  </p>
                </div>

                <Button
                  onClick={redirectToWhatsApp}
                  className="w-full bg-[#25D366] text-white hover:bg-[#1ebe5d]"
                  size="lg"
                  disabled={redirecting}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {redirecting ? "Mengarahkan..." : "Kirim ke WhatsApp & Klaim Sertifikat"}
                </Button>
                <Button
                  onClick={startQuiz}
                  variant="outline"
                  className="w-full"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Coba Lagi
                </Button>
              </>
            ) : (
              <>
                <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-center">
                  <p className="text-sm text-amber-700 dark:text-amber-400">
                    Minimal {PASSING_SCORE}% untuk lulus. Soal akan diacak saat mengulang.
                  </p>
                </div>
                <Button
                  onClick={startQuiz}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Ulangi Final Quiz
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  // ===== PLAYING =====
  const q = questions[currentIndex];
  if (!q) return null;

  const timerPct = (timeLeft / TIME_PER_QUESTION) * 100;
  const isCorrect = selectedAnswer === q.answer;

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <Card className="border-border/60">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Trophy className="h-5 w-5 text-primary" />
              Final Quiz
            </CardTitle>
            <Badge variant="secondary">
              Soal {currentIndex + 1} / {totalQuestions}
            </Badge>
          </div>
          <Progress value={(currentIndex / totalQuestions) * 100} className="h-1.5" />
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Timer */}
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

          {showFeedback && (
            <p className="text-center text-xs text-muted-foreground">
              Lanjut otomatis dalam 1.5 detik...
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
