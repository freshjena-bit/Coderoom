import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentAdmin } from "@/lib/admin";
import { randomBytes } from "crypto";

function generateCertificateId(): string {
  const bytes = randomBytes(6);
  const hex = bytes.toString("hex").toUpperCase();
  return `CYBERLAB-${hex.substring(0, 4)}-${hex.substring(4, 8)}-${hex.substring(8, 12)}`;
}

// POST: Admin generates certificate for a specific user
export async function POST(req: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Akses ditolak" }, { status: 403 });
  }

  const body = await req.json();
  const { userId } = body;

  if (!userId) {
    return NextResponse.json({ error: "User ID wajib diisi" }, { status: 400 });
  }

  const targetUser = await db.user.findUnique({
    where: { id: userId },
    select: { id: true, name: true, email: true, certificateId: true, certificateIssuedAt: true },
  });

  if (!targetUser) {
    return NextResponse.json({ error: "User tidak ditemukan" }, { status: 404 });
  }

  // If user already has a certificate, return it
  if (targetUser.certificateId) {
    return NextResponse.json({
      certificateId: targetUser.certificateId,
      issuedAt: targetUser.certificateIssuedAt,
      name: targetUser.name,
      email: targetUser.email,
      message: "User sudah memiliki sertifikat",
    });
  }

  // Verify user completed all materials
  const totalMaterials = await db.material.count({ where: { level: { lte: 8 } } });
  const completedCount = await db.progress.count({
    where: {
      userId: targetUser.id,
      completed: true,
      material: { level: { lte: 8 } },
    },
  });

  if (completedCount < totalMaterials) {
    return NextResponse.json(
      { error: `User belum menyelesaikan semua materi (${completedCount}/${totalMaterials})` },
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

  const updated = await db.user.update({
    where: { id: targetUser.id },
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
    email: updated.email,
    message: "Sertifikat berhasil dibuat!",
  });
}

// DELETE: Admin revokes a certificate
export async function DELETE(req: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Akses ditolak" }, { status: 403 });
  }

  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "User ID wajib diisi" }, { status: 400 });
  }

  await db.user.update({
    where: { id: userId },
    data: {
      certificateId: null,
      certificateIssuedAt: null,
    },
  });

  return NextResponse.json({ success: true });
}
