import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json(
      { error: "Anda harus login untuk membalas" },
      { status: 401 }
    );
  }

  const { id } = await params;
  const body = await req.json();
  const { content } = body;

  if (!content?.trim()) {
    return NextResponse.json(
      { error: "Konten balasan wajib diisi" },
      { status: 400 }
    );
  }

  const post = await db.forumPost.findUnique({ where: { id } });
  if (!post) {
    return NextResponse.json(
      { error: "Postingan tidak ditemukan" },
      { status: 404 }
    );
  }

  const reply = await db.forumReply.create({
    data: {
      postId: id,
      userId: user.id,
      content: content.trim(),
    },
    include: {
      user: { select: { id: true, name: true } },
    },
  });

  return NextResponse.json({ reply });
}
