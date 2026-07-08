import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const material = await db.material.findUnique({
    where: { slug },
  });

  if (!material) {
    return NextResponse.json(
      { error: "Materi tidak ditemukan" },
      { status: 404 }
    );
  }

  // Get adjacent materials for navigation
  const prev = await db.material.findFirst({
    where: {
      OR: [
        { level: material.level, order: { lt: material.order } },
        { level: { lt: material.level } },
      ],
    },
    orderBy: [{ level: "desc" }, { order: "desc" }],
    select: { slug: true, title: true, level: true },
  });

  const next = await db.material.findFirst({
    where: {
      OR: [
        { level: material.level, order: { gt: material.order } },
        { level: { gt: material.level } },
      ],
    },
    orderBy: [{ level: "asc" }, { order: "asc" }],
    select: { slug: true, title: true, level: true },
  });

  // Check user progress
  let userProgress = null;
  const user = await getCurrentUser();
  if (user) {
    userProgress = await db.progress.findUnique({
      where: {
        userId_materialId: {
          userId: user.id,
          materialId: material.id,
        },
      },
    });
  }

  return NextResponse.json({
    material: {
      ...material,
      quiz: JSON.parse(material.quiz),
    },
    prev,
    next,
    progress: userProgress,
  });
}
