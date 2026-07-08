"use client";

import { Heart, Github, Twitter, Mail } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { Logo } from "@/components/logo";

export function Footer() {
  const { goHome, goMateri, goDashboard, goForum } = useAppStore();

  return (
    <footer className="mt-auto border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <Logo size="sm" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Platform belajar coding dari nol hingga mahir. Gratis, interaktif, dan lengkap.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Navigasi</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={goHome} className="hover:text-primary transition-colors">
                  Beranda
                </button>
              </li>
              <li>
                <button onClick={goMateri} className="hover:text-primary transition-colors">
                  Materi Belajar
                </button>
              </li>
              <li>
                <button onClick={goDashboard} className="hover:text-primary transition-colors">
                  Dashboard
                </button>
              </li>
              <li>
                <button onClick={goForum} className="hover:text-primary transition-colors">
                  Forum Diskusi
                </button>
              </li>
            </ul>
          </div>

          {/* Levels */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Level Belajar</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Level 1 — Dasar</li>
              <li>Level 2 — HTML</li>
              <li>Level 3 — CSS</li>
              <li>Level 4 — JavaScript</li>
              <li>Level 5 — Backend</li>
              <li>Level 6 — Database</li>
              <li>Level 7 — Project Akhir</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Hubungi Kami</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CodeRoom. Dibuat untuk pembelajaran.
          </p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            Dibuat dengan <Heart className="h-3 w-3 fill-primary text-primary" /> oleh developer Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
