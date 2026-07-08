import { NextRequest, NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/admin";
import { db } from "@/lib/db";

// Update user role
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Akses ditolak" }, { status: 403 });
  }

  const { id } = await params;
  const body = await req.json();
  const { role } = body;

  if (role !== "USER" && role !== "ADMIN") {
    return NextResponse.json({ error: "Role tidak valid" }, { status: 400 });
  }

  // Prevent admin from demoting themselves
  if (id === admin.id && role !== "ADMIN") {
    return NextResponse.json(
      { error: "Anda tidak dapat menurunkan role diri sendiri" },
      { status: 400 }
    );
  }

  const updated = await db.user.update({
    where: { id },
    data: { role },
    select: { id: true, name: true, email: true, role: true },
  });

  return NextResponse.json({ user: updated });
}

// Delete user
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Akses ditolak" }, { status: 403 });
  }

  const { id } = await params;

  // Prevent admin from deleting themselves
  if (id === admin.id) {
    return NextResponse.json(
      { error: "Anda tidak dapat menghapus akun sendiri" },
      { status: 400 }
    );
  }

  await db.user.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
