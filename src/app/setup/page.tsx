"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle, Database, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SetupPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { status: string; message?: string; details?: Record<string, unknown>; error?: string }>(null);

  const handleSetup = async () => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: "{}",
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ status: "error", error: err instanceof Error ? err.message : "Unknown error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <Card className="border-primary/30">
        <CardHeader className="text-center">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Database className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">Setup CyberLab</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">
            Klik tombol di bawah untuk mengisi database dengan 82 materi + akun admin
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={handleSetup}
            disabled={loading}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sedang mengisi data...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Mulai Setup
              </>
            )}
          </Button>

          {result && (
            <div
              className={
                result.status === "success" || result.status === "already_seeded"
                  ? "rounded-lg border border-primary/30 bg-primary/5 p-4"
                  : "rounded-lg border border-destructive/30 bg-destructive/5 p-4"
              }
            >
              {result.status === "success" && (
                <>
                  <p className="flex items-center gap-2 font-medium text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                    Berhasil!
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{result.message}</p>
                  {result.details && (
                    <div className="mt-3 space-y-1 rounded-lg bg-background/50 p-3 text-sm">
                      <p>📧 Admin: {String(result.details.adminEmail)}</p>
                      <p>📚 Materi: {String(result.details.materialsCount)} materi</p>
                      <p>💬 Forum: {String(result.details.forumPosts)} posts</p>
                    </div>
                  )}
                  <a
                    href="/#/home"
                    className="mt-4 block rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Buka CyberLab →
                  </a>
                </>
              )}

              {result.status === "already_seeded" && (
                <>
                  <p className="flex items-center gap-2 font-medium text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                    Sudah Terisi
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{result.message}</p>
                  <a
                    href="/#/home"
                    className="mt-4 block rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Buka CyberLab →
                  </a>
                </>
              )}

              {result.status === "error" && (
                <>
                  <p className="flex items-center gap-2 font-medium text-destructive">
                    <AlertCircle className="h-5 w-5" />
                    Gagal
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {result.error || "Terjadi kesalahan. Coba lagi."}
                  </p>
                </>
              )}
            </div>
          )}

          <div className="rounded-lg border border-border/60 bg-muted/30 p-3 text-xs text-muted-foreground">
            <p className="font-medium">ℹ️ Info:</p>
            <ul className="mt-1 space-y-0.5">
              <li>• Tombol ini akan mengisi database dengan 82 materi + akun admin</li>
              <li>• Hanya perlu diklik SEKALI saja</li>
              <li>• Login admin pakai email & password dari Environment Variables</li>
              <li>• Jika sudah pernah setup, tidak akan mengisi ulang</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
