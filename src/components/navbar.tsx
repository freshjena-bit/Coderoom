"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import {
  Home,
  BookOpen,
  LayoutDashboard,
  MessageSquare,
  Moon,
  Sun,
  Menu,
  X,
  LogOut,
  ShieldCheck,
} from "lucide-react";
import { useAppStore } from "@/lib/store";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Beranda", view: "home" as const, icon: Home },
  { label: "Materi", view: "materi" as const, icon: BookOpen },
  { label: "Dashboard", view: "dashboard" as const, icon: LayoutDashboard },
  { label: "Forum", view: "forum" as const, icon: MessageSquare },
];

export function Navbar() {
  const { view, goHome, goMateri, goDashboard, goForum, goAdmin, user, openAuth, setUser } =
    useAppStore();
  const { setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (target: "home" | "materi" | "dashboard" | "forum" | "admin") => {
    setMobileOpen(false);
    if (target === "home") goHome();
    else if (target === "materi") goMateri();
    else if (target === "dashboard") goDashboard();
    else if (target === "forum") goForum();
    else if (target === "admin") goAdmin();
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    goHome();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => handleNav("home")}
          className="flex items-center transition-opacity hover:opacity-80"
          aria-label="CodeRoom - Beranda"
        >
          <Logo size="md" showText={true} className="hidden sm:flex" />
          <Logo size="md" showText={false} className="sm:hidden" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => handleNav(item.view)}
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                view === item.view
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              const isDark = document.documentElement.classList.contains("dark");
              setTheme(isDark ? "light" : "dark");
            }}
            aria-label="Toggle theme"
            className="h-9 w-9"
          >
            <Sun className="hidden h-4 w-4 dark:block" />
            <Moon className="h-4 w-4 dark:hidden" />
          </Button>

          {/* Auth */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 px-2">
                  <div className="relative">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary/15 text-primary text-xs font-semibold">
                        {user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    {user.role === "ADMIN" && (
                      <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary border-2 border-background">
                        <ShieldCheck className="h-2 w-2 text-primary-foreground" />
                      </span>
                    )}
                  </div>
                  <span className="hidden sm:inline text-sm font-medium max-w-[100px] truncate">
                    {user.name}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                <div className="px-2 py-1.5">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{user.name}</p>
                    {user.role === "ADMIN" && (
                      <Badge className="text-[10px] gap-0.5 px-1 py-0 h-4 bg-primary text-primary-foreground">
                        <ShieldCheck className="h-2.5 w-2.5" /> ADMIN
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleNav("dashboard")}>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNav("materi")}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Materi Belajar
                </DropdownMenuItem>
                {user.role === "ADMIN" && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => handleNav("admin")}
                      className="text-primary focus:text-primary"
                    >
                      <ShieldCheck className="mr-2 h-4 w-4" />
                      Dashboard Admin
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Keluar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => openAuth("login")}
              >
                Masuk
              </Button>
              <Button
                size="sm"
                onClick={() => openAuth("register")}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Daftar
              </Button>
            </div>
          )}

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-9 w-9"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNav(item.view)}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  view === item.view
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
            {user?.role === "ADMIN" && (
              <button
                onClick={() => handleNav("admin")}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  view === "admin"
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                <ShieldCheck className="h-4 w-4" />
                Dashboard Admin
              </button>
            )}
            {!user && (
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    setMobileOpen(false);
                    openAuth("login");
                  }}
                >
                  Masuk
                </Button>
                <Button
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => {
                    setMobileOpen(false);
                    openAuth("register");
                  }}
                >
                  Daftar
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
