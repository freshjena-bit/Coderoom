"use client";

import { useQuery } from "@tanstack/react-query";
import {
  ShieldCheck,
  ShieldX,
  Award,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  Search,
} from "lucide-react";
import { useAppStore } from "@/lib/store";
import { certificateApi } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function VerifyView() {
  const { verifyCertId, goHome } = useAppStore();
  const [manualId, setManualId] = useState("");
  const [searchId, setSearchId] = useState<string | null>(verifyCertId);

  const certIdToVerify = searchId || verifyCertId;

  const { data, isLoading, error } = useQuery({
    queryKey: ["verify-cert", certIdToVerify],
    queryFn: () => certificateApi.verify(certIdToVerify!),
    enabled: !!certIdToVerify,
    retry: false,
  });

  const handleManualSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (manualId.trim()) {
      setSearchId(manualId.trim().toUpperCase());
    }
  };

  // No cert ID provided — show search form
  if (!certIdToVerify) {
    return (
      <div className="mx-auto max-w-md px-4 py-12 sm:px-6 lg:px-8">
        <button
          onClick={goHome}
          className="mb-6 flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Beranda
        </button>

        <Card className="border-primary/20">
          <CardContent className="py-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold">Verifikasi Sertifikat</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Masukkan ID sertifikat untuk memverifikasi keasliannya
            </p>

            <form onSubmit={handleManualSearch} className="mt-6 space-y-3">
              <input
                type="text"
                value={manualId}
                onChange={(e) => setManualId(e.target.value)}
                placeholder="CYBERLAB-XXXX-XXXX-XXXX"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-center font-mono text-sm uppercase tracking-wider focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={!manualId.trim()}
              >
                <Search className="mr-2 h-4 w-4" />
                Verifikasi
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Loading
  if (isLoading) {
    return (
      <div className="mx-auto max-w-md px-4 py-12">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-48 rounded bg-muted" />
          <div className="h-48 rounded-xl bg-muted" />
        </div>
      </div>
    );
  }

  // Error / invalid certificate
  if (error || (data && !data.valid)) {
    return (
      <div className="mx-auto max-w-md px-4 py-12 sm:px-6 lg:px-8">
        <button
          onClick={() => { setSearchId(null); setManualId(""); }}
          className="mb-6 flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Coba lagi
        </button>

        <Card className="border-destructive/30">
          <CardContent className="py-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10">
              <ShieldX className="h-8 w-8 text-destructive" />
            </div>
            <h1 className="text-2xl font-bold text-destructive">Sertifikat Tidak Valid</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {data?.error || error instanceof Error ? error.message : "Sertifikat dengan ID ini tidak ditemukan atau tidak sah."}
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              ID yang dicek: <code className="rounded bg-muted px-1.5 py-0.5 font-mono">{certIdToVerify}</code>
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Valid certificate
  const cert = data?.certificate;
  if (!cert) return null;

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Valid badge */}
      <div className="mb-6 flex justify-center">
        <Badge className="gap-2 bg-primary px-4 py-2 text-sm">
          <CheckCircle2 className="h-4 w-4" />
          Sertifikat Valid & Terverifikasi
        </Badge>
      </div>

      {/* Certificate Card */}
      <Card className="overflow-hidden border-2 border-primary/30">
        {/* Header */}
        <div className="bg-primary p-6 text-center text-primary-foreground">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-6 w-6" />
            <span className="text-lg font-bold">CyberLab</span>
          </div>
          <p className="mt-1 text-xs opacity-80">Belajar Cyber & IT dari Nol</p>
        </div>

        <CardContent className="p-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Sertifikat Penyelesaian</p>
            <p className="mt-1 text-xs text-muted-foreground">Certificate of Completion</p>

            <div className="my-6">
              <p className="text-sm text-muted-foreground">Diberikan kepada</p>
              <p className="mt-1 text-2xl font-bold">{cert.name}</p>
            </div>

            <p className="mx-auto max-w-md text-sm text-muted-foreground">
              Atas keberhasilan menyelesaikan seluruh program pembelajaran
              <br />
              <span className="font-medium text-foreground">{cert.programName}</span>
            </p>

            {/* Stats */}
            <div className="mt-6 flex justify-center gap-6">
              <div>
                <p className="text-2xl font-bold text-primary">{cert.completionRate}%</p>
                <p className="text-xs text-muted-foreground">Completion</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{cert.materialsCompleted}</p>
                <p className="text-xs text-muted-foreground">Materi</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{cert.avgQuizScore}%</p>
                <p className="text-xs text-muted-foreground">Avg Quiz</p>
              </div>
            </div>

            {/* Certificate ID + Date */}
            <div className="mt-8 border-t border-border/60 pt-4">
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">ID Sertifikat</p>
                  <code className="text-sm font-mono font-bold">{cert.certificateId}</code>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Tanggal Terbit</p>
                  <p className="text-sm font-medium">
                    {cert.issuedAt ? new Date(cert.issuedAt).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" }) : "-"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        {/* Footer */}
        <div className="border-t border-border/60 bg-muted/30 p-4 text-center">
          <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Sertifikat ini telah diverifikasi secara otomatis oleh sistem CyberLab
          </p>
        </div>
      </Card>

      {/* Back button */}
      <div className="mt-6 text-center">
        <Button variant="outline" onClick={goHome}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Beranda
        </Button>
      </div>
    </div>
  );
}
