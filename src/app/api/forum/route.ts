import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

export async function GET() {
  const posts = await db.forumPost.findMany({
    include: {
      user: {
        select: { id: true, name: true },
      },
      _count: {
        select: { replies: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ posts });
}

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json(
      { error: "Anda harus login untuk membuat postingan" },
      { status: 401 }
    );
  }

  const body = await req.json();
  const { title, content, category } = body;

  if (!title?.trim() || !content?.trim()) {
    return NextResponse.json(
      { error: "Judul dan konten wajib diisi" },
      { status: 400 }
    );
  }

  const post = await db.forumPost.create({
    data: {
      title: title.trim(),
      content: content.trim(),
      category: category?.trim() || "Umum",
      userId: user.id,
    },
    include: {
      user: { select: { id: true, name: true } },
    },
  });

  return NextResponse.json({ post });
}
