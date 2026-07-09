import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

// Fisher-Yates shuffle
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Shuffle answer options while tracking the correct answer
function shuffleQuestionOptions(q: QuizQuestion): QuizQuestion {
  const correctAnswer = q.options[q.answer];
  const shuffledOptions = shuffle(q.options);
  const newAnswerIndex = shuffledOptions.indexOf(correctAnswer);
  return {
    ...q,
    options: shuffledOptions,
    answer: newAnswerIndex,
    explanation: q.explanation,
  };
}

export async function GET() {
  // Require login
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json(
      { error: "Anda harus login untuk mengakses final quiz" },
      { status: 401 }
    );
  }

  // Check if user has completed ALL materials in levels 1-8
  const allMaterialsCount = await db.material.count({
    where: { level: { lte: 8 } },
  });

  const completedCount = await db.progress.count({
    where: {
      userId: user.id,
      completed: true,
      material: { level: { lte: 8 } },
    },
  });

  if (completedCount < allMaterialsCount) {
    return NextResponse.json(
      {
        error: "Selesaikan semua materi Level 1-8 terlebih dahulu",
        completed: completedCount,
        total: allMaterialsCount,
      },
      { status: 403 }
    );
  }

  // Collect ALL quiz questions from all materials (levels 1-8)
  const allMaterials = await db.material.findMany({
    where: { level: { lte: 8 } },
    select: { id: true, title: true, quiz: true, level: true },
    orderBy: [{ level: "asc" }, { order: "asc" }],
  });

  const allQuestions: QuizQuestion[] = [];
  for (const m of allMaterials) {
    try {
      const questions = JSON.parse(m.quiz) as QuizQuestion[];
      allQuestions.push(...questions);
    } catch {
      // skip invalid JSON
    }
  }

  // Shuffle ALL questions — no limit, use every question from levels 1-8
  const shuffledQuestions = shuffle(allQuestions);

  // Also shuffle the answer options for each question (anti-cheating)
  const finalQuestions = shuffledQuestions.map((q) => shuffleQuestionOptions(q));

  return NextResponse.json({
    materialId: "final",
    materialTitle: "Final Quiz — Ujian Akhir",
    level: 9,
    totalQuestions: finalQuestions.length,
    questions: finalQuestions,
    timePerQuestion: 30,
    passingScore: 75,
    sourceMaterialsCount: allMaterials.length,
    isFinal: true,
  });
}
