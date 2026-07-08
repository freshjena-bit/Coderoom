import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CyberRoom — Belajar Cybersecurity dari Nol",
  description: "Platform belajar cybersecurity interaktif: Dasar Cyber, Jaringan, Kriptografi, Web Security, Ethical Hacking, Forensik. Dilengkapi quiz, project, dan sertifikat.",
  keywords: ["belajar cybersecurity", "ethical hacking", "web security", "kriptografi", "pentest", "malware analysis", "keamanan siber"],
  authors: [{ name: "CyberRoom" }],
  icons: {
    icon: "/logo-pgsi.jpg",
    appleIcon: "/logo-pgsi.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Providers>
          {children}
          <Toaster />
          <SonnerToaster richColors position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
