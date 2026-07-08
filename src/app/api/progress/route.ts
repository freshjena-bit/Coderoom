import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ progress: [], stats: null });
  }

  const progress = await db.progress.findMany({
    where: { userId: user.id },
    include: {
      material: {
        select: {
          id: true,
          level: true,
          title: true,
          slug: true,
          icon: true,
          isProject: true,
        },
      },
    },
  });

  const totalMaterials = await db.material.count();
  const completedCount = progress.filter((p) => p.completed).length;
  const completionRate =
    totalMaterials > 0
      ? Math.round((completedCount / totalMaterials) * 100)
      : 0;

  // Progress by level
  const materialsByLevel = await db.material.groupBy({
    by: ["level"],
    _count: true,
  });

  const levelStats = materialsByLevel.map((ml) => {
    const levelProgress = progress.filter(
      (p) => p.material.level === ml.level && p.completed
    );
    return {
      level: ml.level,
      total: ml._count,
      completed: levelProgress.length,
    };
  });

  return NextResponse.json({
    progress,
    stats: {
      totalMaterials,
      completedCount,
      completionRate,
      levelStats: levelStats.sort((a, b) => a.level - b.level),
    },
  });
}
