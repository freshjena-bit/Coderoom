import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { randomBytes } from "crypto";

// Generate a unique certificate ID
function generateCertificateId(): string {
  const bytes = randomBytes(6);
  const hex = bytes.toString("hex").toUpperCase();
  return `CYBERLAB-${hex.substring(0, 4)}-${hex.substring(4, 8)}-${hex.substring(8, 12)}`;
}

// POST: Generate certificate for user who completed 100% of materials
export async function POST() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Anda harus login" }, { status: 401 });
  }

  // Check if user already has a certificate
  if (user.certificateId) {
    return NextResponse.json({
      certificateId: user.certificateId,
      issuedAt: user.certificateIssuedAt,
      message: "Sertifikat sudah ada",
    });
  }

  // Verify user completed ALL materials (levels 1-8)
  const totalMaterials = await db.material.count({ where: { level: { lte: 8 } } });
  const completedCount = await db.progress.count({
    where: {
      userId: user.id,
      completed: true,
      material: { level: { lte: 8 } },
    },
  });

  if (completedCount < totalMaterials) {
    return NextResponse.json(
      { error: `Selesaikan semua materi (${completedCount}/${totalMaterials}) untuk mendapatkan sertifikat` },
      { status: 403 }
    );
  }

  // Generate unique certificate ID
  let certificateId = generateCertificateId();
  let attempts = 0;
  while (attempts < 10) {
    const existing = await db.user.findUnique({
      where: { certificateId },
      select: { id: true },
    });
    if (!existing) break;
    certificateId = generateCertificateId();
    attempts++;
  }

  // Save certificate to user
  const updated = await db.user.update({
    where: { id: user.id },
    data: {
      certificateId,
      certificateIssuedAt: new Date(),
    },
    select: {
      id: true,
      name: true,
      email: true,
      certificateId: true,
      certificateIssuedAt: true,
    },
  });

  return NextResponse.json({
    certificateId: updated.certificateId,
    issuedAt: updated.certificateIssuedAt,
    name: updated.name,
    message: "Sertifikat berhasil dibuat!",
  });
}
