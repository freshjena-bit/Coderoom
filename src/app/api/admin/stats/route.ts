import { NextResponse } from "next/server";
import { getCurrentAdmin, getAdminStats } from "@/lib/admin";

export async function GET() {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json(
      { error: "Akses ditolak. Halaman ini khusus admin." },
      { status: 403 }
    );
  }
  const stats = await getAdminStats();
  return NextResponse.json({ stats, admin });
}
