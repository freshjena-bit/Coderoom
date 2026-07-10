import { NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import { formatDistanceToNow } from "date-fns";
import { id as idLocale } from "date-fns/locale";

export async function GET() {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json(
      { error: "Akses ditolak" },
      { status: 403 }
    );
  }

  const users = await db.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      banned: true,
      violationCount: true,
      createdAt: true,
      _count: {
        select: {
          progress: { where: { completed: true } },
          forumPosts: true,
        },
      },
    },
  });

  const formatted = users.map((u) => ({
    ...u,
    createdAtFormatted: formatDistanceToNow(new Date(u.createdAt), {
      addSuffix: true,
      locale: idLocale,
    }),
  }));

  return NextResponse.json({ users: formatted });
}
