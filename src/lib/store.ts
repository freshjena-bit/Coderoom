"use client";

import { create } from "zustand";

export type ViewName =
  | "home"
  | "materi"
  | "detail"
  | "dashboard"
  | "forum"
  | "admin"
  | "finalQuiz"
  | "certificate"
  | "verify";

export interface SafeUser {
  id: string;
  name: string;
  email: string;
  role: string; // "USER" | "ADMIN"
  banned: boolean;
  violationCount: number;
  certificateId: string | null;
  createdAt: string;
}

interface AppState {
  // Navigation
  view: ViewName;
  materialSlug: string | null;
  forumPostId: string | null;
  verifyCertId: string | null;

  // Auth
  user: SafeUser | null;
  authDialog: "login" | "register" | null;

  // Actions
  goHome: () => void;
  goMateri: () => void;
  goDetail: (slug: string) => void;
  goDashboard: () => void;
  goForum: () => void;
  goForumPost: (id: string) => void;
  goAdmin: () => void;
  goFinalQuiz: () => void;
  goCertificate: () => void;
  goVerify: (certId: string) => void;
  goBack: () => void;

  setUser: (user: SafeUser | null) => void;
  openAuth: (mode: "login" | "register") => void;
  closeAuth: () => void;

  syncFromHash: () => void;
}

function parseHash(): Partial<Pick<AppState, "view" | "materialSlug" | "forumPostId" | "verifyCertId">> {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const parts = hash.split("/").filter(Boolean);

  if (parts.length === 0) return { view: "home", materialSlug: null, forumPostId: null, verifyCertId: null };

  if (parts[0] === "materi") {
    if (parts[1]) return { view: "detail", materialSlug: parts[1], forumPostId: null, verifyCertId: null };
    return { view: "materi", materialSlug: null, forumPostId: null, verifyCertId: null };
  }
  if (parts[0] === "dashboard") return { view: "dashboard", materialSlug: null, forumPostId: null, verifyCertId: null };
  if (parts[0] === "admin") return { view: "admin", materialSlug: null, forumPostId: null, verifyCertId: null };
  if (parts[0] === "final-quiz") return { view: "finalQuiz", materialSlug: null, forumPostId: null, verifyCertId: null };
  if (parts[0] === "certificate") return { view: "certificate", materialSlug: null, forumPostId: null, verifyCertId: null };
  if (parts[0] === "verify") {
    if (parts[1]) return { view: "verify", materialSlug: null, forumPostId: null, verifyCertId: parts[1] };
    return { view: "verify", materialSlug: null, forumPostId: null, verifyCertId: null };
  }
  if (parts[0] === "forum") {
    if (parts[1]) return { view: "forum", materialSlug: null, forumPostId: parts[1], verifyCertId: null };
    return { view: "forum", materialSlug: null, forumPostId: null, verifyCertId: null };
  }

  return { view: "home", materialSlug: null, forumPostId: null, verifyCertId: null };
}

export const useAppStore = create<AppState>((set, get) => ({
  view: "home",
  materialSlug: null,
  forumPostId: null,
  verifyCertId: null,
  user: null,
  authDialog: null,

  goHome: () => {
    window.location.hash = "/";
    set({ view: "home", materialSlug: null, forumPostId: null });
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  goMateri: () => {
    window.location.hash = "/materi";
    set({ view: "materi", materialSlug: null, forumPostId: null });
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  goDetail: (slug: string) => {
    window.location.hash = `/materi/${slug}`;
    set({ view: "detail", materialSlug: slug, forumPostId: null });
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  goDashboard: () => {
    window.location.hash = "/dashboard";
    set({ view: "dashboard", materialSlug: null, forumPostId: null });
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  goForum: () => {
    window.location.hash = "/forum";
    set({ view: "forum", materialSlug: null, forumPostId: null });
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  goForumPost: (id: string) => {
    window.location.hash = `/forum/${id}`;
    set({ view: "forum", materialSlug: null, forumPostId: id });
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  goAdmin: () => {
    window.location.hash = "/admin";
    set({ view: "admin", materialSlug: null, forumPostId: null });
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  goFinalQuiz: () => {
    window.location.hash = "/final-quiz";
    set({ view: "finalQuiz", materialSlug: null, forumPostId: null, verifyCertId: null });
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  goCertificate: () => {
    window.location.hash = "/certificate";
    set({ view: "certificate", materialSlug: null, forumPostId: null, verifyCertId: null });
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  goVerify: (certId: string) => {
    window.location.hash = `/verify/${certId}`;
    set({ view: "verify", materialSlug: null, forumPostId: null, verifyCertId: certId });
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  goBack: () => {
    const current = get();
    if (current.view === "detail") {
      get().goMateri();
    } else if (current.view === "forum" && current.forumPostId) {
      set({ forumPostId: null });
      window.location.hash = "/forum";
    } else {
      get().goHome();
    }
  },

  setUser: (user) => set({ user }),
  openAuth: (mode) => set({ authDialog: mode }),
  closeAuth: () => set({ authDialog: null }),

  syncFromHash: () => {
    const parsed = parseHash();
    set(parsed);
  },
}));
