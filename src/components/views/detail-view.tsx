"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  Clock,
  Award,
  RefreshCw,
  ChevronRight,
} from "lucide-react";
import { useAppStore } from "@/lib/store";
import { materialsApi, progressApi } from "@/lib/api";
import { LEVEL_INFO } from "@/lib/content-types";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import type { QuizQuestion } from "@/lib/api";

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
        questions={material.quiz}
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
  questions,
  currentScore,
  isLoggedIn,
  onRequireLogin,
  onScoreSubmitted,
}: {
  materialId: string;
  questions: QuizQuestion[];
  currentScore: number | null;
  isLoggedIn: boolean;
  onRequireLogin: () => void;
  onScoreSubmitted: () => void;
}) {
  const [answers, setAnswers] = useState<(number | null)[]>(questions.map(() => null));
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const allAnswered = answers.every((a) => a !== null);
  const correctCount = answers.filter((a, i) => a === questions[i].answer).length;
  const score = Math.round((correctCount / questions.length) * 100);

  const handleSubmit = async () => {
    if (!isLoggedIn) {
      onRequireLogin();
      return;
    }
    setSubmitting(true);
    try {
      await progressApi.update(materialId, { quizScore: score });
      setSubmitted(true);
      onScoreSubmitted();
      if (score >= 70) {
        toast.success(`Quiz selesai! Skor: ${score}%`);
      } else {
        toast.info(`Skor: ${score}. Coba lagi ya!`);
      }
    } catch {
      toast.error("Gagal menyimpan skor quiz");
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setAnswers(questions.map(() => null));
    setSubmitted(false);
  };

  return (
    <Card className="mb-8 border-border/60">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Award className="h-5 w-5 text-primary" />
            Quiz Materi
          </CardTitle>
          {currentScore !== null && !submitted && (
            <Badge variant="secondary">Skor terakhir: {currentScore}%</Badge>
          )}
          {submitted && (
            <Badge
              className={cn(
                score >= 70
                  ? "bg-primary text-primary-foreground"
                  : "bg-amber-500 text-white"
              )}
            >
              Skor: {score}%
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {questions.map((q, qi) => {
          const userAnswer = answers[qi];
          const isCorrect = userAnswer === q.answer;

          return (
            <div key={qi} className="space-y-3">
              <div className="flex gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {qi + 1}
                </span>
                <p className="font-medium pt-0.5">{q.question}</p>
              </div>
              <RadioGroup
                value={userAnswer?.toString() ?? ""}
                onValueChange={(val) => {
                  if (submitted) return;
                  setAnswers((prev) => {
                    const next = [...prev];
                    next[qi] = Number(val);
                    return next;
                  });
                }}
                className="space-y-2 pl-8"
              >
                {q.options.map((opt, oi) => {
                  const isUserChoice = userAnswer === oi;
                  const isCorrectAnswer = q.answer === oi;
                  let optionClass = "";
                  if (submitted) {
                    if (isCorrectAnswer) {
                      optionClass = "border-primary bg-primary/10 text-primary";
                    } else if (isUserChoice) {
                      optionClass = "border-destructive bg-destructive/10 text-destructive";
                    }
                  }

                  return (
                    <Label
                      key={oi}
                      htmlFor={`q${qi}-o${oi}`}
                      className={cn(
                        "flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors",
                        optionClass || "border-border hover:bg-muted",
                        submitted && "cursor-default"
                      )}
                    >
                      <RadioGroupItem
                        id={`q${qi}-o${oi}`}
                        value={oi.toString()}
                        disabled={submitted}
                      />
                      <span className="text-sm">{opt}</span>
                      {submitted && isCorrectAnswer && (
                        <CheckCircle2 className="ml-auto h-4 w-4 text-primary" />
                      )}
                    </Label>
                  );
                })}
              </RadioGroup>
              {submitted && (
                <div className={cn(
                  "ml-8 rounded-lg p-3 text-sm",
                  isCorrect ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                )}>
                  {isCorrect ? "✓ Benar! " : "✗ Kurang tepat. "}
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}

        {/* Submit / Reset */}
        <div className="flex items-center justify-between gap-3 pt-2">
          {submitted ? (
            <>
              <div className="flex items-center gap-2 text-sm">
                <Progress value={score} className="h-2 w-24" />
                <span className="font-medium">{score}%</span>
                {score >= 70 ? (
                  <span className="text-primary">Lulus!</span>
                ) : (
                  <span className="text-amber-600 dark:text-amber-400">Belum lulus (min. 70%)</span>
                )}
              </div>
              <Button variant="outline" onClick={handleReset} size="sm">
                <RefreshCw className="mr-2 h-3.5 w-3.5" />
                Coba Lagi
              </Button>
            </>
          ) : (
            <>
              <p className="text-xs text-muted-foreground">
                {allAnswered
                  ? "Semua jawaban siap dikirim"
                  : `${answers.filter((a) => a !== null).length}/${questions.length} terjawab`}
              </p>
              <Button
                onClick={handleSubmit}
                disabled={!allAnswered || submitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                size="sm"
              >
                {submitting ? "Menyimpan..." : "Kirim Jawaban"}
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
