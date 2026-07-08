import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const post = await db.forumPost.findUnique({
    where: { id },
    include: {
      user: { select: { id: true, name: true } },
      replies: {
        include: {
          user: { select: { id: true, name: true } },
        },
        orderBy: { createdAt: "asc" },
      },
    },
  });

  if (!post) {
    return NextResponse.json(
      { error: "Postingan tidak ditemukan" },
      { status: 404 }
    );
  }

  return NextResponse.json({ post });
}
