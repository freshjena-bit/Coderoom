"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Award,
  Lock,
  MessageCircle,
  ShieldCheck,
  QrCode,
  Copy,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { useAppStore } from "@/lib/store";
import { certificateApi } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useState } from "react";

const WHATSAPP_NUMBER = "6283114593730";

export function CertificateView() {
  const { user, openAuth, goHome, goDashboard } = useAppStore();
  const [copied, setCopied] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["certificate-me"],
    queryFn: certificateApi.me,
    enabled: !!user,
  });

  if (!user) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <Lock className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">Login Diperlukan</h2>
        <p className="mt-2 text-muted-foreground">
          Masuk untuk melihat sertifikat Anda.
        </p>
        <Button variant="outline" onClick={() => openAuth("login")} className="mt-4">
          Masuk
        </Button>
      </div>
    );
  }

  if (isLoading || !data) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-48 rounded bg-muted" />
          <div className="h-64 rounded-xl bg-muted" />
        </div>
      </div>
    );
  }

  const { certificate, stats } = data;
  const canGetCertificate = stats.completionRate === 100;

  // Generate QR code URL — links to public verification page
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const verifyUrl = certificate ? `${baseUrl}/#/verify/${certificate.certificateId}` : "";
  const qrCodeUrl = certificate
    ? `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(verifyUrl)}&bgcolor=ffffff&color=000000&margin=10`
    : "";

  const handleCopyId = () => {
    if (certificate) {
      navigator.clipboard.writeText(certificate.certificateId);
      setCopied(true);
      toast.success("ID sertifikat disalin!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsAppClaim = () => {
    const msg = `🎉 HALO! Saya ingin KLAIM SERTIFIKAT CyberLab!

📋 Informasi Akun:
• Nama: ${user.name}
• Email: ${user.email}
• ID Sertifikat: ${certificate?.certificateId || "Belum ada"}
• Tanggal: ${new Date().toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}

🏆 Status:
• Completion Rate: 100%
• Materi selesai: ${stats.completedCount}/${stats.totalMaterials}
• Rata-rata Quiz: ${stats.avgScore}%

Saya telah menyelesaikan seluruh program CyberLab. Mohon informasi untuk pengambilan sertifikat resmi. Terima kasih!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <button
        onClick={goDashboard}
        className="mb-6 flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali ke Dashboard
      </button>

      <h1 className="mb-6 text-3xl font-bold">Sertifikat</h1>

      {/* Not eligible yet */}
      {!canGetCertificate && (
        <Card className="border-dashed">
          <CardContent className="py-12 text-center">
            <Lock className="mx-auto mb-3 h-12 w-12 text-muted-foreground/50" />
            <h2 className="text-xl font-bold">Sertifikat Belum Tersedia</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Selesaikan semua materi ({stats.completedCount}/{stats.totalMaterials}) untuk mendapatkan sertifikat.
            </p>
            <div className="mx-auto mt-4 max-w-xs">
              <Progress value={stats.completionRate} className="h-2" />
              <p className="mt-1 text-center text-xs text-muted-foreground">{stats.completionRate}%</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Eligible but no certificate yet — user must claim via WhatsApp */}
      {canGetCertificate && !certificate && (
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="py-10 text-center">
            <Award className="mx-auto mb-3 h-12 w-12 text-primary" />
            <h2 className="text-xl font-bold text-primary">Selamat! Anda Berhak Mendapat Sertifikat!</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Anda telah menyelesaikan 100% materi. Klaim sertifikat Anda via WhatsApp — admin akan
              membuatkan sertifikat resmi dengan QR code verifikasi.
            </p>
            <Button
              onClick={handleWhatsAppClaim}
              className="mt-5 bg-[#25D366] text-white hover:bg-[#1ebe5d]"
              size="lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Klaim Sertifikat via WhatsApp
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              → Admin akan memverifikasi kelulusan Anda dan membuat sertifikat dengan QR code.
              <br />
              Sertifikat berisi QR code yang bisa di-scan siapa saja untuk verifikasi keaslian.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Certificate exists — show it */}
      {certificate && (
        <>
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

            {/* Body */}
            <CardContent className="p-8">
              <div className="text-center">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Sertifikat Penyelesaian</p>
                <p className="mt-1 text-xs text-muted-foreground">Certificate of Completion</p>

                <div className="my-6">
                  <p className="text-sm text-muted-foreground">Diberikan kepada</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">{user.name}</p>
                </div>

                <p className="mx-auto max-w-md text-sm text-muted-foreground">
                  Atas keberhasilan menyelesaikan seluruh program pembelajaran
                  <br />
                  <span className="font-medium text-foreground">CyberLab — Belajar Cyber & IT dari Nol</span>
                </p>

                {/* Stats */}
                <div className="mt-6 flex justify-center gap-6">
                  <div>
                    <p className="text-2xl font-bold text-primary">{stats.completionRate}%</p>
                    <p className="text-xs text-muted-foreground">Completion</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{stats.completedCount}/{stats.totalMaterials}</p>
                    <p className="text-xs text-muted-foreground">Materi</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{stats.avgScore}%</p>
                    <p className="text-xs text-muted-foreground">Avg Quiz</p>
                  </div>
                </div>

                {/* QR Code + Certificate ID */}
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">ID Sertifikat</p>
                    <div className="mt-1 flex items-center gap-2">
                      <code className="rounded bg-muted px-2 py-1 text-sm font-mono font-bold">
                        {certificate.certificateId}
                      </code>
                      <button
                        onClick={handleCopyId}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="Salin ID"
                      >
                        {copied ? <CheckCircle2 className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Diterbitkan: {certificate.issuedAt ? new Date(certificate.issuedAt).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" }) : "-"}
                    </p>
                  </div>

                  {/* QR Code */}
                  <div className="flex flex-col items-center">
                    <div className="rounded-xl border-2 border-primary/20 bg-white p-3">
                      <img
                        src={qrCodeUrl}
                        alt="QR Code untuk verifikasi sertifikat"
                        width={120}
                        height={120}
                        className="h-[120px] w-[120px]"
                      />
                    </div>
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground">
                      <QrCode className="h-3 w-3" />
                      Scan untuk verifikasi
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>

            {/* Footer */}
            <div className="border-t border-border/60 bg-muted/30 p-4 text-center">
              <p className="text-xs text-muted-foreground">
                Sertifikat ini sah dan dapat diverifikasi melalui QR code di atas.
                <br />
                Verifikasi online: {baseUrl}/#/verify/{certificate.certificateId}
              </p>
            </div>
          </Card>

          {/* Actions */}
          <div className="mt-6 space-y-3">
            <div className="rounded-lg border border-[#25D366]/30 bg-[#25D366]/5 p-3 text-sm">
              <p className="text-center text-muted-foreground">
                💡 Sertifikat digital ini berisi QR code untuk verifikasi keaslian.
                Bagikan QR code atau ID sertifikat kepada siapa pun untuk membuktikan kelulusan Anda.
              </p>
            </div>

            <Button
              onClick={handleWhatsAppClaim}
              className="w-full bg-[#25D366] text-white hover:bg-[#1ebe5d]"
              size="lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Klaim Sertifikat Resmi via WhatsApp
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              → Sertifikat fisik/resmi hanya bisa didapat dengan menghubungi admin via WhatsApp.
              <br />
              Sertifikat digital di atas dapat digunakan untuk verifikasi online.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
