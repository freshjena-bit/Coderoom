// Frontend API helpers

import type { SafeUser } from "./store";

export interface MaterialSummary {
  id: string;
  level: number;
  order: number;
  title: string;
  slug: string;
  description: string;
  icon: string;
  isProject: boolean;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface MaterialDetail extends MaterialSummary {
  content: string;
  quiz: QuizQuestion[];
  createdAt: string;
  updatedAt: string;
}

export interface ProgressItem {
  id: string;
  completed: boolean;
  quizScore: number | null;
  completedAt: string | null;
  material: MaterialSummary;
}

export interface LevelStat {
  level: number;
  total: number;
  completed: number;
}

export interface ProgressStats {
  totalMaterials: number;
  completedCount: number;
  completionRate: number;
  levelStats: LevelStat[];
}

export interface ForumPostSummary {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  user: { id: string; name: string };
  _count: { replies: number };
}

export interface ForumReply {
  id: string;
  content: string;
  createdAt: string;
  user: { id: string; name: string };
}

export interface ForumPostDetail extends ForumPostSummary {
  replies: ForumReply[];
}

async function api<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || "Terjadi kesalahan");
  }
  return data as T;
}

// Auth
export const authApi = {
  register: (name: string, email: string, password: string) =>
    api<{ user: SafeUser }>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    }),
  login: (email: string, password: string) =>
    api<{ user: SafeUser }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
  me: () => api<{ user: SafeUser | null }>("/api/auth/me"),
  logout: () =>
    api<{ success: boolean }>("/api/auth/logout", { method: "POST" }),
};

// Materials
export const materialsApi = {
  list: () =>
    api<{ materials: MaterialSummary[]; byLevel: Record<number, MaterialSummary[]> }>("/api/materials"),
  detail: (slug: string) =>
    api<{
      material: MaterialDetail;
      prev: { slug: string; title: string; level: number } | null;
      next: { slug: string; title: string; level: number } | null;
      progress: { completed: boolean; quizScore: number | null } | null;
    }>(`/api/materials/${slug}`),
};

// Quiz
export interface QuizPoolQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface QuizPoolResponse {
  materialId: string;
  materialTitle: string;
  level: number;
  totalQuestions: number;
  questions: QuizPoolQuestion[];
  timePerQuestion: number;
  passingScore: number;
}

export const quizApi = {
  getPool: (slug: string) =>
    api<QuizPoolResponse>(`/api/quiz/${slug}`),
  getFinal: () =>
    api<QuizPoolResponse & { isFinal: boolean }>(`/api/quiz/final`),
};

// Progress
export const progressApi = {
  get: () =>
    api<{ progress: ProgressItem[]; stats: ProgressStats | null }>("/api/progress"),
  update: (materialId: string, data: { completed?: boolean; quizScore?: number }) =>
    api<{ progress: { id: string; completed: boolean; quizScore: number | null } }>(
      `/api/progress/${materialId}`,
      { method: "POST", body: JSON.stringify(data) }
    ),
};

// Forum
export const forumApi = {
  list: () => api<{ posts: ForumPostSummary[] }>("/api/forum"),
  create: (title: string, content: string, category: string) =>
    api<{ post: ForumPostSummary }>("/api/forum", {
      method: "POST",
      body: JSON.stringify({ title, content, category }),
    }),
  detail: (id: string) => api<{ post: ForumPostDetail }>(`/api/forum/${id}`),
  reply: (id: string, content: string) =>
    api<{ reply: ForumReply }>(`/api/forum/${id}/replies`, {
      method: "POST",
      body: JSON.stringify({ content }),
    }),
};

// Admin
export interface AdminStats {
  totalUsers: number;
  totalAdmins: number;
  totalMaterials: number;
  totalForumPosts: number;
  totalForumReplies: number;
  totalProgress: number;
  completedProgress: number;
  usersByLevel: { level: number; usersCompleted: number }[];
  recentUsers: {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
  }[];
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  createdAtFormatted: string;
  _count: { progress: number; forumPosts: number };
}

export interface AdminMaterial {
  id: string;
  level: number;
  order: number;
  title: string;
  slug: string;
  icon: string;
  isProject: boolean;
  _count: { progress: number };
}

export const adminApi = {
  stats: () =>
    api<{ stats: AdminStats; admin: { id: string; name: string; email: string; role: string } }>(
      "/api/admin/stats"
    ),
  users: () => api<{ users: AdminUser[] }>("/api/admin/users"),
  materials: () => api<{ materials: AdminMaterial[] }>("/api/admin/materials"),
  updateUserRole: (id: string, role: "USER" | "ADMIN") =>
    api<{ user: { id: string; role: string } }>(`/api/admin/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ role }),
    }),
  deleteUser: (id: string) =>
    api<{ success: boolean }>(`/api/admin/users/${id}`, { method: "DELETE" }),
  deleteMaterial: (id: string) =>
    api<{ success: boolean }>(`/api/admin/materials?id=${id}`, { method: "DELETE" }),
  deleteForumPost: (id: string) =>
    api<{ success: boolean }>(`/api/admin/forum/${id}`, { method: "DELETE" }),
};

