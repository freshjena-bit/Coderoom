"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  MessageSquare,
  Plus,
  ArrowLeft,
  Send,
  Lock,
  MessageCircle,
  Clock,
  User as UserIcon,
} from "lucide-react";
import { useAppStore } from "@/lib/store";
import { forumApi } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";
import { id as idLocale } from "date-fns/locale";

const categories = ["Umum", "Pertanyaan", "Tips & Trik", "Sharing", "Project"];

export function ForumView() {
  const { forumPostId, user, openAuth } = useAppStore();

  if (forumPostId) {
    return <ForumPostDetail postId={forumPostId} />;
  }
  return <ForumList />;
}

function ForumList() {
  const { goForumPost, user, openAuth } = useAppStore();
  const { data, isLoading } = useQuery({
    queryKey: ["forum-posts"],
    queryFn: forumApi.list,
  });

  const [showCreate, setShowCreate] = useState(false);

  const posts = data?.posts || [];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold sm:text-4xl">Forum Diskusi</h1>
          <p className="mt-2 text-muted-foreground">
            Tanya jawab, berbagi tips, dan diskusi dengan sesama peserta.
          </p>
        </div>
        <Button
          onClick={() => (user ? setShowCreate(true) : openAuth("login"))}
          className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0"
        >
          <Plus className="mr-2 h-4 w-4" />
          Posting Baru
        </Button>
      </div>

      {/* Posts */}
      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-28 w-full" />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="py-16 text-center">
            <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground/50" />
            <p className="mt-4 text-muted-foreground">Belum ada postingan.</p>
            <p className="text-sm text-muted-foreground">Jadilah yang pertama!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <button
              key={post.id}
              onClick={() => goForumPost(post.id)}
              className="block w-full text-left"
            >
              <Card className="transition-all hover:border-primary/40 hover:shadow-sm">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="mb-1.5 flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {formatDistanceToNow(new Date(post.createdAt), {
                            addSuffix: true,
                            locale: idLocale,
                          })}
                        </span>
                      </div>
                      <h3 className="font-semibold leading-snug">{post.title}</h3>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {post.content}
                      </p>
                      <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary text-[10px] font-bold">
                            {post.user.name.charAt(0).toUpperCase()}
                          </div>
                          {post.user.name}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3" />
                          {post._count.replies} balasan
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>
      )}

      {/* Create post dialog */}
      <CreatePostDialog open={showCreate} onOpenChange={setShowCreate} />
    </div>
  );
}

function CreatePostDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Umum");
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await forumApi.create(title, content, category);
      queryClient.invalidateQueries({ queryKey: ["forum-posts"] });
      toast.success("Postingan berhasil dibuat!");
      setTitle("");
      setContent("");
      setCategory("Umum");
      onOpenChange(false);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Gagal membuat postingan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Buat Postingan Baru</DialogTitle>
          <DialogDescription>
            Bagikan pertanyaan, tips, atau pengalaman Anda dengan komunitas.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="post-title">Judul</Label>
            <Input
              id="post-title"
              placeholder="Tulis judul postingan..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Kategori</Label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                    category === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="post-content">Konten</Label>
            <Textarea
              id="post-content"
              placeholder="Tulis konten postingan..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Batal
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {loading ? "Mengirim..." : "Posting"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function ForumPostDetail({ postId }: { postId: string }) {
  const { goForum, user, openAuth } = useAppStore();
  const queryClient = useQueryClient();
  const [reply, setReply] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["forum-post", postId],
    queryFn: () => forumApi.detail(postId),
  });

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      openAuth("login");
      return;
    }
    setSubmitting(true);
    try {
      await forumApi.reply(postId, reply);
      queryClient.invalidateQueries({ queryKey: ["forum-post", postId] });
      setReply("");
      toast.success("Balasan terkirim!");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Gagal mengirim balasan");
    } finally {
      setSubmitting(false);
    }
  };

  if (isLoading || !data) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <Skeleton className="h-5 w-24 mb-4" />
        <Skeleton className="h-10 w-3/4 mb-3" />
        <Skeleton className="h-24 w-full mb-8" />
        <Skeleton className="h-16 w-full" />
      </div>
    );
  }

  const { post } = data;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back */}
      <button
        onClick={goForum}
        className="mb-6 flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali ke Forum
      </button>

      {/* Post */}
      <Card className="mb-6 border-border/60">
        <CardHeader>
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(post.createdAt), {
                addSuffix: true,
                locale: idLocale,
              })}
            </span>
          </div>
          <CardTitle className="text-xl sm:text-2xl">{post.title}</CardTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold">
              {post.user.name.charAt(0).toUpperCase()}
            </div>
            {post.user.name}
          </div>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-wrap text-[0.95rem] leading-relaxed">{post.content}</p>
        </CardContent>
      </Card>

      {/* Replies header */}
      <div className="mb-4 flex items-center gap-2">
        <MessageCircle className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">
          {post.replies.length} Balasan
        </h2>
      </div>

      {/* Replies */}
      {post.replies.length === 0 ? (
        <p className="mb-6 text-sm text-muted-foreground">
          Belum ada balasan. Jadilah yang pertama!
        </p>
      ) : (
        <div className="mb-6 space-y-3">
          {post.replies.map((r) => (
            <Card key={r.id} className="border-border/60">
              <CardContent className="p-4">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold">
                    {r.user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium">{r.user.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(r.createdAt), {
                      addSuffix: true,
                      locale: idLocale,
                    })}
                  </span>
                </div>
                <p className="whitespace-pre-wrap text-sm leading-relaxed">{r.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Reply form */}
      <Card className="border-border/60">
        <CardContent className="p-4">
          {user ? (
            <form onSubmit={handleReply} className="space-y-3">
              <Label htmlFor="reply">Tulis Balasan</Label>
              <Textarea
                id="reply"
                placeholder="Tulis balasan Anda..."
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                rows={3}
                required
              />
              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={submitting || !reply.trim()}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {submitting ? "Mengirim..." : "Kirim Balasan"}
                </Button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-3 py-4 text-center">
              <Lock className="h-8 w-8 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground">
                Masuk untuk berpartisipasi dalam diskusi
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => openAuth("login")}
              >
                Masuk
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
