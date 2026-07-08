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

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // Find the current material
  const material = await db.material.findUnique({
    where: { slug },
    select: { id: true, level: true, title: true, quiz: true },
  });

  if (!material) {
    return NextResponse.json(
      { error: "Materi tidak ditemukan" },
      { status: 404 }
    );
  }

  // Get current user (quiz requires login)
  const user = await getCurrentUser();

  // Pool of question sources: current material + completed materials by this user
  // This ensures user only gets questions from materials they've actually studied
  const questionSources: { id: string; title: string; quiz: string }[] = [
    { id: material.id, title: material.title, quiz: material.quiz },
  ];

  if (user) {
    // Get all materials the user has completed (in order of level then order)
    const completedProgress = await db.progress.findMany({
      where: { userId: user.id, completed: true },
      include: {
        material: {
          select: { id: true, title: true, quiz: true, level: true, order: true },
        },
      },
    });

    // Add completed materials (exclude current material to avoid duplication)
    const completedMaterials = completedProgress
      .filter((p) => p.material.id !== material.id)
      .map((p) => p.material)
      .sort((a, b) => {
        if (a.level !== b.level) return a.level - b.level;
        return a.order - b.order;
      });

    for (const m of completedMaterials) {
      questionSources.push({ id: m.id, title: m.title, quiz: m.quiz });
    }
  }

  // Collect all quiz questions from the studied materials
  const allQuestions: QuizQuestion[] = [];
  for (const m of questionSources) {
    try {
      const questions = JSON.parse(m.quiz) as QuizQuestion[];
      allQuestions.push(...questions);
    } catch {
      // skip invalid JSON
    }
  }

  // Shuffle all questions and pick up to 30 (or all if fewer)
  const shuffledQuestions = shuffle(allQuestions);
  const maxQuestions = Math.min(30, shuffledQuestions.length);
  const selectedQuestions = shuffledQuestions.slice(0, maxQuestions);

  // Also shuffle the answer options for each question (anti-cheating)
  const finalQuestions = selectedQuestions.map((q) => shuffleQuestionOptions(q));

  return NextResponse.json({
    materialId: material.id,
    materialTitle: material.title,
    level: material.level,
    totalQuestions: finalQuestions.length,
    questions: finalQuestions,
    timePerQuestion: 30,
    passingScore: 75,
    // Info for frontend: how many materials contributed to this quiz
    sourceMaterialsCount: questionSources.length,
  });
}
