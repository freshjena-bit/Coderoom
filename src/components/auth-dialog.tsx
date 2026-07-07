"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useAppStore } from "@/lib/store";
import { authApi } from "@/lib/api";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Mail, Lock, User as UserIcon } from "lucide-react";
import { toast } from "sonner";

export function AuthDialog() {
  const { authDialog, closeAuth, setUser, goDashboard, goAdmin } = useAppStore();
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState<"login" | "register">("login");

  // Login form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register form
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  useEffect(() => {
    if (authDialog) setTab(authDialog);
  }, [authDialog]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { user } = await authApi.login(loginEmail, loginPassword);
      setUser(user);
      toast.success(`Selamat datang kembali, ${user.name}!`);
      closeAuth();
      setLoginEmail("");
      setLoginPassword("");
      if (user.role === "ADMIN") goAdmin();
      else goDashboard();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Login gagal");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { user } = await authApi.register(regName, regEmail, regPassword);
      setUser(user);
      toast.success(`Akun berhasil dibuat. Selamat datang, ${user.name}!`);
      closeAuth();
      setRegName("");
      setRegEmail("");
      setRegPassword("");
      if (user.role === "ADMIN") goAdmin();
      else goDashboard();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Pendaftaran gagal");
    } finally {
      setLoading(false);
    }
  };

  const fillDemo = () => {
    setLoginEmail("demo@coderoom.id");
    setLoginPassword("demo12345");
    setTab("login");
  };

  return (
    <Dialog open={authDialog !== null} onOpenChange={(open) => !open && closeAuth()}>
      <DialogContent className="sm:max-w-[420px]">
        <DialogHeader>
          <div className="mb-2 flex justify-center">
            <div className="relative h-16 w-16 overflow-hidden rounded-xl ring-1 ring-border/60 shadow-md">
              <Image
                src="/logo-pgsi.jpg"
                alt="CodeRoom"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <DialogTitle className="text-center text-xl">
            {tab === "login" ? "Masuk ke CodeRoom" : "Buat Akun Baru"}
          </DialogTitle>
          <DialogDescription>
            {tab === "login"
              ? "Masuk untuk melanjutkan perjalanan belajar Anda"
              : "Daftar gratis dan mulai belajar coding hari ini"}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={tab} onValueChange={(v) => setTab(v as "login" | "register")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Masuk</TabsTrigger>
            <TabsTrigger value="register">Daftar</TabsTrigger>
          </TabsList>

          {/* Login */}
          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="nama@email.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="pl-9"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="pl-9"
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Memproses...
                  </>
                ) : (
                  "Masuk"
                )}
              </Button>
              <button
                type="button"
                onClick={fillDemo}
                className="w-full text-center text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Gunakan akun demo →
              </button>
            </form>
          </TabsContent>

          {/* Register */}
          <TabsContent value="register">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reg-name">Nama Lengkap</Label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="reg-name"
                    type="text"
                    placeholder="Nama Anda"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    className="pl-9"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="reg-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="reg-email"
                    type="email"
                    placeholder="nama@email.com"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    className="pl-9"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="reg-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="reg-password"
                    type="password"
                    placeholder="Minimal 6 karakter"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    className="pl-9"
                    required
                    minLength={6}
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Memproses...
                  </>
                ) : (
                  "Daftar Sekarang"
                )}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
