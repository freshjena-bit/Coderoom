import { NextResponse } from "next/server";
import { db } from "@/lib/db";

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

  // Find the current material to get its level
  const material = await db.material.findUnique({
    where: { slug },
    select: { id: true, level: true, title: true },
  });

  if (!material) {
    return NextResponse.json(
      { error: "Materi tidak ditemukan" },
      { status: 404 }
    );
  }

  // Get all materials in the same level (including current)
  const levelMaterials = await db.material.findMany({
    where: { level: material.level },
    select: { id: true, title: true, quiz: true },
  });

  // Collect all quiz questions from the level
  const allQuestions: (QuizQuestion & { materialTitle: string })[] = [];
  for (const m of levelMaterials) {
    try {
      const questions = JSON.parse(m.quiz) as QuizQuestion[];
      for (const q of questions) {
        allQuestions.push({ ...q, materialTitle: m.title });
      }
    } catch {
      // skip invalid JSON
    }
  }

  // If not enough questions in this level, also pull from adjacent levels
  if (allQuestions.length < 30) {
    const otherMaterials = await db.material.findMany({
      where: { level: { not: material.level } },
      select: { id: true, title: true, quiz: true },
    });
    for (const m of otherMaterials) {
      try {
        const questions = JSON.parse(m.quiz) as QuizQuestion[];
        for (const q of questions) {
          allQuestions.push({ ...q, materialTitle: m.title });
        }
      } catch {
        // skip
      }
    }
  }

  // Shuffle all questions and pick 30 (or all if fewer)
  const shuffledQuestions = shuffle(allQuestions);
  const selectedQuestions = shuffledQuestions.slice(0, 30);

  // Also shuffle the answer options for each question (anti-cheating)
  const finalQuestions = selectedQuestions.map((q) => {
    const { materialTitle, ...quizData } = q;
    return shuffleQuestionOptions(quizData);
  });

  return NextResponse.json({
    materialId: material.id,
    materialTitle: material.title,
    level: material.level,
    totalQuestions: finalQuestions.length,
    questions: finalQuestions,
    timePerQuestion: 30,
    passingScore: 75,
  });
}
