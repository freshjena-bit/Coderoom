import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifyPassword, setSessionCookie } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email dan password wajib diisi" },
        { status: 400 }
      );
    }

    const user = await db.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!user || !verifyPassword(password, user.password)) {
      return NextResponse.json(
        { error: "Email atau password salah" },
        { status: 401 }
      );
    }

    // Block banned users
    if (user.banned) {
      return NextResponse.json(
        {
          error: `Akun Anda diblokir karena terdeteksi mencontek (${user.violationCount}x pelanggaran). Hubungi admin via WhatsApp: wa.me/6283114593730 untuk membuka kembali akun Anda.`,
          banned: true,
          violationCount: user.violationCount,
        },
        { status: 403 }
      );
    }

    await setSessionCookie(user.id);

    return NextResponse.json({
      user: { id: user.id, name: user.name, email: user.email, role: user.role, banned: user.banned, violationCount: user.violationCount },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat login" },
      { status: 500 }
    );
  }
}
