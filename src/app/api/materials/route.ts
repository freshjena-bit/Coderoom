import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const materials = await db.material.findMany({
    orderBy: [{ level: "asc" }, { order: "asc" }],
    select: {
      id: true,
      level: true,
      order: true,
      title: true,
      slug: true,
      description: true,
      icon: true,
      isProject: true,
    },
  });

  // Group by level
  const byLevel: Record<number, typeof materials> = {};
  for (const m of materials) {
    if (!byLevel[m.level]) byLevel[m.level] = [];
    byLevel[m.level].push(m);
  }

  return NextResponse.json({ materials, byLevel });
}
