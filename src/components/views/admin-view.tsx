"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  MessageSquare,
  Shield,
  ShieldCheck,
  Trash2,
  ArrowLeft,
  Lock,
  TrendingUp,
  Award,
  Reply,
  CheckCircle2,
  Search,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";
import { useAppStore } from "@/lib/store";
import { adminApi, forumApi } from "@/lib/api";
import { LEVEL_INFO } from "@/lib/content-types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function AdminView() {
  const { user, openAuth, goHome } = useAppStore();
  const [tab, setTab] = useState("overview");

  // Not logged in
  if (!user) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <Lock className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">Login Diperlukan</h2>
        <p className="mt-2 text-muted-foreground">
          Masuk dengan akun admin untuk mengakses dashboard admin.
        </p>
        <Button variant="outline" onClick={() => openAuth("login")} className="mt-4">
          Masuk sebagai Admin
        </Button>
      </div>
    );
  }

  // Logged in but not admin
  if (user.role !== "ADMIN") {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10">
          <Shield className="h-8 w-8 text-destructive" />
        </div>
        <h2 className="text-2xl font-bold">Akses Ditolak</h2>
        <p className="mt-2 text-muted-foreground">
          Halaman ini khusus untuk admin. Akun Anda ({user.email}) tidak memiliki akses admin.
        </p>
        <Button variant="outline" onClick={goHome} className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Beranda
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <ShieldCheck className="h-6 w-6 text-primary" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold sm:text-4xl">Dashboard Admin</h1>
            <Badge className="gap-1 bg-primary text-primary-foreground">
              <Shield className="h-3 w-3" /> ADMIN
            </Badge>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Kelola pengguna, materi, dan forum CyberLab
          </p>
        </div>
      </div>

      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
          <TabsTrigger value="overview" className="gap-1.5">
            <LayoutDashboard className="h-4 w-4" />
            <span className="hidden sm:inline">Overview</span>
          </TabsTrigger>
          <TabsTrigger value="users" className="gap-1.5">
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">Pengguna</span>
          </TabsTrigger>
          <TabsTrigger value="materials" className="gap-1.5">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Materi</span>
          </TabsTrigger>
          <TabsTrigger value="forum" className="gap-1.5">
            <MessageSquare className="h-4 w-4" />
            <span className="hidden sm:inline">Forum</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <OverviewTab />
        </TabsContent>
        <TabsContent value="users" className="mt-6">
          <UsersTab />
        </TabsContent>
        <TabsContent value="materials" className="mt-6">
          <MaterialsTab />
        </TabsContent>
        <TabsContent value="forum" className="mt-6">
          <ForumTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ============ OVERVIEW TAB ============
function OverviewTab() {
  const { data, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: adminApi.stats,
  });

  if (isLoading || !data) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-28" />
        ))}
      </div>
    );
  }

  const { stats } = data;
  const completionRate =
    stats.totalProgress > 0
      ? Math.round((stats.completedProgress / stats.totalProgress) * 100)
      : 0;

  const statCards = [
    {
      icon: Users,
      label: "Total Pengguna",
      value: stats.totalUsers,
      sub: `${stats.totalAdmins} admin`,
      color: "primary",
    },
    {
      icon: BookOpen,
      label: "Total Materi",
      value: stats.totalMaterials,
      sub: "8 level",
      color: "fuchsia",
    },
    {
      icon: MessageSquare,
      label: "Postingan Forum",
      value: stats.totalForumPosts,
      sub: `${stats.totalForumReplies} balasan`,
      color: "cyan",
    },
    {
      icon: TrendingUp,
      label: "Progress Selesai",
      value: stats.completedProgress,
      sub: `dari ${stats.totalProgress} (${completionRate}%)`,
      color: "primary",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((s) => (
          <Card key={s.label} className="border-border/60">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-2 text-3xl font-bold">{s.value}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{s.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent users */}
      <Card className="border-border/60">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Users className="h-5 w-5 text-primary" />
            Pengguna Terbaru
          </CardTitle>
        </CardHeader>
        <CardContent>
          {stats.recentUsers.length === 0 ? (
            <p className="text-sm text-muted-foreground">Belum ada pengguna.</p>
          ) : (
            <div className="space-y-2">
              {stats.recentUsers.map((u) => (
                <div
                  key={u.id}
                  className="flex items-center gap-3 rounded-lg border border-border/60 p-3"
                >
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-primary/15 text-primary text-xs font-semibold">
                      {u.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{u.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{u.email}</p>
                  </div>
                  <Badge variant={u.role === "ADMIN" ? "default" : "secondary"} className="text-xs">
                    {u.role === "ADMIN" ? "Admin" : "User"}
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// ============ USERS TAB ============
function UsersTab() {
  const queryClient = useQueryClient();
  const { user: currentUser } = useAppStore();
  const { data, isLoading } = useQuery({
    queryKey: ["admin-users"],
    queryFn: adminApi.users,
  });
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const users = data?.users || [];
  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggleRole = async (id: string, currentRole: string) => {
    const newRole = currentRole === "ADMIN" ? "USER" : "ADMIN";
    try {
      await adminApi.updateUserRole(id, newRole);
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
      queryClient.invalidateQueries({ queryKey: ["admin-stats"] });
      toast.success(`Role diubah menjadi ${newRole === "ADMIN" ? "Admin" : "User"}`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Gagal mengubah role");
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await adminApi.deleteUser(deleteId);
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
      queryClient.invalidateQueries({ queryKey: ["admin-stats"] });
      toast.success("Pengguna berhasil dihapus");
      setDeleteId(null);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Gagal menghapus pengguna");
    } finally {
      setDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-20" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Cari pengguna..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {filtered.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="py-12 text-center text-muted-foreground">
            {search ? `Tidak ada pengguna "${search}"` : "Belum ada pengguna."}
          </CardContent>
        </Card>
      ) : (
        <div className="max-h-[600px] space-y-2 overflow-y-auto">
          {filtered.map((u) => {
            const isSelf = u.id === currentUser?.id;
            return (
              <Card key={u.id} className="border-border/60">
                <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
                  <div className="flex flex-1 items-center gap-3">
                    <Avatar className="h-10 w-10 shrink-0">
                      <AvatarFallback className="bg-primary/15 text-primary text-sm font-semibold">
                        {u.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate font-medium">{u.name}</p>
                        {isSelf && (
                          <Badge variant="outline" className="text-xs">Anda</Badge>
                        )}
                      </div>
                      <p className="truncate text-xs text-muted-foreground">{u.email}</p>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          {u._count.progress} materi selesai
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          {u._count.forumPosts} postingan
                        </span>
                        <span>· {u.createdAtFormatted}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={u.role === "ADMIN" ? "default" : "secondary"}
                      className={cn(u.role === "ADMIN" && "bg-primary text-primary-foreground")}
                    >
                      {u.role === "ADMIN" ? (
                        <>
                          <Shield className="mr-1 h-3 w-3" /> Admin
                        </>
                      ) : (
                        "User"
                      )}
                    </Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleToggleRole(u.id, u.role)}
                      disabled={isSelf}
                      title={isSelf ? "Tidak dapat mengubah role sendiri" : ""}
                    >
                      {u.role === "ADMIN" ? "Turunkan" : "Jadikan Admin"}
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
                      onClick={() => setDeleteId(u.id)}
                      disabled={isSelf}
                      title={isSelf ? "Tidak dapat menghapus akun sendiri" : "Hapus pengguna"}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Delete confirmation */}
      <AlertDialog open={deleteId !== null} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Hapus Pengguna?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat dibatalkan. Semua data pengguna termasuk progress belajar
              dan postingan forum akan dihapus permanen.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Batal</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={deleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleting ? "Menghapus..." : "Hapus Permanen"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

// ============ MATERIALS TAB ============
function MaterialsTab() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["admin-materials"],
    queryFn: adminApi.materials,
  });
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const materials = data?.materials || [];
  const byLevel = materials.reduce((acc, m) => {
    if (!acc[m.level]) acc[m.level] = [];
    acc[m.level].push(m);
    return acc;
  }, {} as Record<number, typeof materials>);

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await adminApi.deleteMaterial(deleteId);
      queryClient.invalidateQueries({ queryKey: ["admin-materials"] });
      queryClient.invalidateQueries({ queryKey: ["admin-stats"] });
      queryClient.invalidateQueries({ queryKey: ["materials"] });
      toast.success("Materi berhasil dihapus");
      setDeleteId(null);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Gagal menghapus materi");
    } finally {
      setDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-16" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {Object.keys(byLevel).length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="py-12 text-center text-muted-foreground">
            Belum ada materi.
          </CardContent>
        </Card>
      ) : (
        Object.entries(byLevel)
          .sort(([a], [b]) => Number(a) - Number(b))
          .map(([levelStr, mats]) => {
            const level = Number(levelStr);
            const info = LEVEL_INFO[level];
            return (
              <div key={level}>
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-lg">{info.icon}</span>
                  <h3 className="font-semibold">
                    Level {level} — {info.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {mats.length} materi
                  </Badge>
                </div>
                <div className="space-y-1.5">
                  {mats.map((m) => (
                    <Card key={m.id} className="border-border/60">
                      <CardContent className="flex items-center gap-3 p-3">
                        <span className="text-lg">{m.icon}</span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <p className="truncate text-sm font-medium">{m.title}</p>
                            {m.isProject && (
                              <Badge variant="outline" className="text-xs">Project</Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {m._count.progress} pengguna menyelesaikan
                          </p>
                        </div>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
                          onClick={() => setDeleteId(m.id)}
                          title="Hapus materi"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })
      )}

      <AlertDialog open={deleteId !== null} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Hapus Materi?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat dibatalkan. Materi dan semua data progress terkait akan
              dihapus permanen.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Batal</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={deleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleting ? "Menghapus..." : "Hapus Permanen"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

// ============ FORUM TAB ============
function ForumTab() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["forum-posts"],
    queryFn: forumApi.list,
  });
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const posts = data?.posts || [];

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await adminApi.deleteForumPost(deleteId);
      queryClient.invalidateQueries({ queryKey: ["forum-posts"] });
      queryClient.invalidateQueries({ queryKey: ["admin-stats"] });
      toast.success("Postingan berhasil dihapus");
      setDeleteId(null);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Gagal menghapus postingan");
    } finally {
      setDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-20" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {posts.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="py-12 text-center text-muted-foreground">
            Belum ada postingan forum.
          </CardContent>
        </Card>
      ) : (
        posts.map((post) => (
          <Card key={post.id} className="border-border/60">
            <CardContent className="flex items-start gap-3 p-4">
              <Avatar className="h-9 w-9 shrink-0">
                <AvatarFallback className="bg-primary/15 text-primary text-xs font-semibold">
                  {post.user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                  <p className="truncate font-medium">{post.title}</p>
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{post.content}</p>
                <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post.user.name}</span>
                  <span className="flex items-center gap-1">
                    <Reply className="h-3 w-3" />
                    {post._count.replies} balasan
                  </span>
                </div>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 shrink-0 text-destructive hover:bg-destructive/10 hover:text-destructive"
                onClick={() => setDeleteId(post.id)}
                title="Hapus postingan"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))
      )}

      <AlertDialog open={deleteId !== null} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Hapus Postingan Forum?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat dibatalkan. Postingan dan semua balasannya akan dihapus
              permanen.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Batal</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={deleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleting ? "Menghapus..." : "Hapus Permanen"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
