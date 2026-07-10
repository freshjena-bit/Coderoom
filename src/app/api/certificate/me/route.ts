import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

// GET: Get current user's certificate info + completion stats
export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ user: null, certificate: null });
  }

  const totalMaterials = await db.material.count({ where: { level: { lte: 8 } } });
  const completedCount = await db.progress.count({
    where: {
      userId: user.id,
      completed: true,
      material: { level: { lte: 8 } },
    },
  });

  const quizAttempted = await db.progress.findMany({
    where: { userId: user.id, quizScore: { not: null } },
    select: { quizScore: true },
  });
  const avgScore = quizAttempted.length > 0
    ? Math.round(quizAttempted.reduce((sum, p) => sum + (p.quizScore || 0), 0) / quizAttempted.length)
    : 0;

  return NextResponse.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    certificate: user.certificateId
      ? {
          certificateId: user.certificateId,
          issuedAt: user.certificateIssuedAt,
        }
      : null,
    stats: {
      totalMaterials,
      completedCount,
      completionRate: totalMaterials > 0 ? Math.round((completedCount / totalMaterials) * 100) : 0,
      avgScore,
    },
  });
}
