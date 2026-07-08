import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ materialId: string }> }
) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json(
      { error: "Anda harus login terlebih dahulu" },
      { status: 401 }
    );
  }

  const { materialId } = await params;
  const body = await req.json();
  const { completed, quizScore } = body;

  const material = await db.material.findUnique({
    where: { id: materialId },
  });
  if (!material) {
    return NextResponse.json(
      { error: "Materi tidak ditemukan" },
      { status: 404 }
    );
  }

  const progress = await db.progress.upsert({
    where: {
      userId_materialId: {
        userId: user.id,
        materialId,
      },
    },
    update: {
      completed: completed ?? undefined,
      quizScore: quizScore ?? undefined,
      completedAt: completed ? new Date() : null,
    },
    create: {
      userId: user.id,
      materialId,
      completed: completed ?? false,
      quizScore: quizScore ?? null,
      completedAt: completed ? new Date() : null,
    },
  });

  return NextResponse.json({ progress });
}
