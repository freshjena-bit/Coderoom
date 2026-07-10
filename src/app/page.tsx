"use client";

import { useEffect } from "react";
import { useAppStore } from "@/lib/store";
import { authApi } from "@/lib/api";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AuthDialog } from "@/components/auth-dialog";
import { LogoBackground } from "@/components/logo-background";
import { HomeView } from "@/components/views/home-view";
import { MateriView } from "@/components/views/materi-view";
import { DetailView } from "@/components/views/detail-view";
import { DashboardView } from "@/components/views/dashboard-view";
import { ForumView } from "@/components/views/forum-view";
import { AdminView } from "@/components/views/admin-view";
import { FinalQuizView } from "@/components/views/final-quiz-view";
import { CertificateView } from "@/components/views/certificate-view";
import { VerifyView } from "@/components/views/verify-view";

export default function Home() {
  const { view, syncFromHash, setUser } = useAppStore();

  // Initialize: sync from hash + fetch current user
  useEffect(() => {
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    authApi.me().then(({ user }) => setUser(user)).catch(() => {});
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [syncFromHash, setUser]);

  return (
    <div className="relative flex min-h-screen flex-col">
      <LogoBackground />
      <Navbar />
      <main className="flex-1">
        {view === "home" && <HomeView />}
        {view === "materi" && <MateriView />}
        {view === "detail" && <DetailView />}
        {view === "dashboard" && <DashboardView />}
        {view === "forum" && <ForumView />}
        {view === "admin" && <AdminView />}
        {view === "finalQuiz" && <FinalQuizView />}
        {view === "certificate" && <CertificateView />}
        {view === "verify" && <VerifyView />}
      </main>
      <Footer />
      <AuthDialog />
    </div>
  );
}
