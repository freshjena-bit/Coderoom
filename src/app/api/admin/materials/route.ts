import { NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/admin";
import { db } from "@/lib/db";

export async function GET() {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Akses ditolak" }, { status: 403 });
  }

  const materials = await db.material.findMany({
    orderBy: [{ level: "asc" }, { order: "asc" }],
    select: {
      id: true,
      level: true,
      order: true,
      title: true,
      slug: true,
      icon: true,
      isProject: true,
      _count: { select: { progress: { where: { completed: true } } } },
    },
  });

  return NextResponse.json({ materials });
}

// Delete material
export async function DELETE(req: Request) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Akses ditolak" }, { status: 403 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "ID materi wajib diisi" }, { status: 400 });
  }

  await db.material.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
