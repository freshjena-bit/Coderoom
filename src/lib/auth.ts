import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { db } from "./db";

const SESSION_COOKIE = "coderoom_session";
const SESSION_DURATION = 1000 * 60 * 60 * 24 * 7; // 7 days
const SECRET = process.env.SESSION_SECRET || "coderoom-dev-secret-change-in-production";

// --- Password hashing (scrypt) ---
export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const hashBuf = Buffer.from(hash, "hex");
  const testBuf = scryptSync(password, salt, 64);
  if (hashBuf.length !== testBuf.length) return false;
  return timingSafeEqual(hashBuf, testBuf);
}

// --- Session token (HMAC-signed payload) ---
export function signToken(userId: string): string {
  const expiresAt = Date.now() + SESSION_DURATION;
  const payload = `${userId}.${expiresAt}`;
  const sig = createHmac("sha256", SECRET).update(payload).digest("hex");
  return `${payload}.${sig}`;
}

export function verifyToken(token: string): { userId: string; expiresAt: number } | null {
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [userId, expiresAtStr, sig] = parts;
  const payload = `${userId}.${expiresAtStr}`;
  const expectedSig = createHmac("sha256", SECRET).update(payload).digest("hex");
  if (sig !== expectedSig) return null;
  const expiresAt = Number(expiresAtStr);
  if (Number.isNaN(expiresAt) || Date.now() > expiresAt) return null;
  return { userId, expiresAt };
}

// --- Cookie helpers ---
export async function setSessionCookie(userId: string) {
  const token = signToken(userId);
  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DURATION / 1000,
  });
}

export async function clearSessionCookie() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

export async function getSessionCookie(): Promise<string | undefined> {
  const store = await cookies();
  return store.get(SESSION_COOKIE)?.value;
}

// --- Current user ---
export async function getCurrentUser() {
  const token = await getSessionCookie();
  if (!token) return null;
  const payload = verifyToken(token);
  if (!payload) return null;
  const user = await db.user.findUnique({
    where: { id: payload.userId },
    select: { id: true, name: true, email: true, role: true, createdAt: true },
  });
  return user;
}

export type SafeUser = NonNullable<Awaited<ReturnType<typeof getCurrentUser>>>;
