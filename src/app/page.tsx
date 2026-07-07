"use client";

import { useEffect } from "react";
import { useAppStore } from "@/lib/store";
import { authApi } from "@/lib/api";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AuthDialog } from "@/components/auth-dialog";
import { HomeView } from "@/components/views/home-view";
import { MateriView } from "@/components/views/materi-view";
import { DetailView } from "@/components/views/detail-view";
import { DashboardView } from "@/components/views/dashboard-view";
import { ForumView } from "@/components/views/forum-view";

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
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {view === "home" && <HomeView />}
        {view === "materi" && <MateriView />}
        {view === "detail" && <DetailView />}
        {view === "dashboard" && <DashboardView />}
        {view === "forum" && <ForumView />}
      </main>
      <Footer />
      <AuthDialog />
    </div>
  );
}
