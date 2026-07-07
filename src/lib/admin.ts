import { getCurrentUser } from "./auth";
import { db } from "./db";

export async function getCurrentAdmin() {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") return null;
  return user;
}

export interface AdminStats {
  totalUsers: number;
  totalAdmins: number;
  totalMaterials: number;
  totalForumPosts: number;
  totalForumReplies: number;
  totalProgress: number;
  completedProgress: number;
  usersByLevel: { level: number; usersCompleted: number }[];
  recentUsers: { id: string; name: string; email: string; role: string; createdAt: string }[];
}

export async function getAdminStats(): Promise<AdminStats> {
  const [
    totalUsers,
    totalAdmins,
    totalMaterials,
    totalForumPosts,
    totalForumReplies,
    totalProgress,
    completedProgress,
    recentUsers,
  ] = await Promise.all([
    db.user.count(),
    db.user.count({ where: { role: "ADMIN" } }),
    db.material.count(),
    db.forumPost.count(),
    db.forumReply.count(),
    db.progress.count(),
    db.progress.count({ where: { completed: true } }),
    db.user.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    }),
  ]);

  return {
    totalUsers,
    totalAdmins,
    totalMaterials,
    totalForumPosts,
    totalForumReplies,
    totalProgress,
    completedProgress,
    usersByLevel: [],
    recentUsers,
  };
}
