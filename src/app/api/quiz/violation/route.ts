import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser, clearSessionCookie } from "@/lib/auth";

const MAX_VIOLATIONS = 5;

export async function POST(req: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: "Anda harus login" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { reason } = body;

    // Increment violation count
    const newCount = user.violationCount + 1;
    const shouldBan = newCount >= MAX_VIOLATIONS;

    const updated = await db.user.update({
      where: { id: user.id },
      data: {
        violationCount: newCount,
        banned: shouldBan,
      },
      select: { id: true, name: true, email: true, violationCount: true, banned: true },
    });

    // If banned, clear session
    if (shouldBan) {
      await clearSessionCookie();
    }

    return NextResponse.json({
      violationCount: updated.violationCount,
      banned: updated.banned,
      maxViolations: MAX_VIOLATIONS,
      remaining: Math.max(0, MAX_VIOLATIONS - updated.violationCount),
      reason: reason || "unknown",
      message: shouldBan
        ? `Akun diblokir! ${updated.violationCount}x pelanggaran terdeteksi. Hubungi admin via WhatsApp: wa.me/6283114593730`
        : `Pelanggaran terdeteksi! Quiz diulang dari awal. Sisa kesempatan: ${MAX_VIOLATIONS - updated.violationCount}`,
    });
  } catch (error) {
    console.error("Violation error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan" },
      { status: 500 }
    );
  }
}

// Check violation status
export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ user: null });
  }
  return NextResponse.json({
    violationCount: user.violationCount,
    banned: user.banned,
    maxViolations: MAX_VIOLATIONS,
    remaining: Math.max(0, MAX_VIOLATIONS - user.violationCount),
  });
}
