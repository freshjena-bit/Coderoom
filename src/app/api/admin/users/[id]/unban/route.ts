import { NextRequest, NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/admin";
import { db } from "@/lib/db";

// Unban user — reset violation count and banned status (admin only)
export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Akses ditolak" }, { status: 403 });
  }

  const { id } = await params;

  const updated = await db.user.update({
    where: { id },
    data: {
      banned: false,
      violationCount: 0,
    },
    select: { id: true, name: true, email: true, banned: true, violationCount: true },
  });

  return NextResponse.json({ user: updated });
}
