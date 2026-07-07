import { NextRequest, NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/admin";
import { db } from "@/lib/db";

// Delete a forum post (admin)
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Akses ditolak" }, { status: 403 });
  }

  const { id } = await params;
  await db.forumPost.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
