import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET: Public certificate verification — anyone can check if a certificate is valid
// Accessed via QR code scan: /api/certificate/verify/[certificateId]
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: certificateId } = await params;

  if (!certificateId) {
    return NextResponse.json(
      { valid: false, error: "ID sertifikat tidak ditemukan" },
      { status: 400 }
    );
  }

  // Find user with this certificate ID
  const user = await db.user.findFirst({
    where: { certificateId },
    select: {
      id: true,
      name: true,
      email: true,
      certificateId: true,
      certificateIssuedAt: true,
    },
  });

  if (!user || !user.certificateId) {
    return NextResponse.json(
      { valid: false, error: "Sertifikat tidak valid atau tidak ditemukan" },
      { status: 404 }
    );
  }

  // Get completion stats for verification
  const totalMaterials = await db.material.count({ where: { level: { lte: 8 } } });
  const completedCount = await db.progress.count({
    where: {
      userId: user.id,
      completed: true,
      material: { level: { lte: 8 } },
    },
  });

  const quizAttempted = await db.progress.findMany({
    where: { userId: user.id, quizScore: { not: null } },
    select: { quizScore: true },
  });
  const avgScore = quizAttempted.length > 0
    ? Math.round(quizAttempted.reduce((sum, p) => sum + (p.quizScore || 0), 0) / quizAttempted.length)
    : 0;

  return NextResponse.json({
    valid: true,
    certificate: {
      certificateId: user.certificateId,
      name: user.name,
      email: user.email,
      issuedAt: user.certificateIssuedAt,
      completionRate: totalMaterials > 0 ? Math.round((completedCount / totalMaterials) * 100) : 0,
      materialsCompleted: `${completedCount}/${totalMaterials}`,
      avgQuizScore: avgScore,
      programName: "CyberLab — Belajar Cyber & IT dari Nol",
      issuer: "CyberLab",
    },
  });
}
