"use client";

import { useEffect, useRef, useCallback } from "react";
import { quizApi } from "@/lib/api";
import { useAppStore } from "@/lib/store";
import { toast } from "sonner";

const MAX_VIOLATIONS = 5;

interface AntiCheatOptions {
  enabled: boolean;
  onViolation: () => void; // callback to reset quiz
}

/**
 * Anti-cheat hook for quiz.
 * Detects:
 * - Tab switching (visibilitychange)
 * - Window blur (user clicks away)
 * - Navigation attempts (popstate, beforeunload)
 *
 * On violation:
 * - Reports to API (increments violation count)
 * - Resets quiz to beginning
 * - If 5 violations → account banned, redirect to home
 */
export function useAntiCheat({ enabled, onViolation }: AntiCheatOptions) {
  const { setUser, goHome } = useAppStore();
  const reportedRef = useRef(false); // prevent double-reporting
  const onViolationRef = useRef(onViolation);
  useEffect(() => { onViolationRef.current = onViolation; }, [onViolation]);

  const handleViolation = useCallback(async (reason: string) => {
    if (reportedRef.current) return; // already reported this cycle
    reportedRef.current = true;

    try {
      const result = await quizApi.reportViolation(reason);

      if (result.banned) {
        // Account banned
        toast.error(`🚫 AKUN DIBLOKIR! ${result.message}`);
        setUser(null); // logout
        setTimeout(() => goHome(), 2000);
      } else {
        // Warning + reset quiz
        toast.error(
          `⚠️ ${result.message}`,
          { duration: 5000 }
        );
        onViolationRef.current(); // reset quiz
      }

      // Reset reported flag after a delay (allow next violation detection)
      setTimeout(() => { reportedRef.current = false; }, 3000);
    } catch {
      // API failed — still reset quiz as precaution
      toast.error("⚠️ Pelanggaran terdeteksi! Quiz diulang.");
      onViolationRef.current();
      setTimeout(() => { reportedRef.current = false; }, 3000);
    }
  }, [setUser, goHome]);

  useEffect(() => {
    if (!enabled) return;

    // 1. Detect tab switch / minimize
    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleViolation("User switched tab / minimized window");
      }
    };

    // 2. Detect window blur (clicking to another app, another window, address bar, etc.)
    const handleBlur = () => {
      handleViolation("Window lost focus (possible tab switch)");
    };

    // 3. Detect navigation attempts (hash change, back button)
    const handlePopState = (e: PopStateEvent) => {
      e.preventDefault();
      handleViolation("User attempted to navigate away during quiz");
      // Push state back to prevent navigation
      window.history.pushState(null, "", window.location.href);
    };

    // 4. Detect beforeunload (closing tab, refreshing)
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "Quiz sedang berjalan. Yakin ingin keluar?";
      return e.returnValue;
    };

    // 5. Block keyboard shortcuts that could be used to cheat
    const handleKeyDown = (e: KeyboardEvent) => {
      // Block Ctrl+T (new tab), Ctrl+W (close tab), Ctrl+N (new window), Alt+Tab
      if (
        (e.ctrlKey && (e.key === "t" || e.key === "w" || e.key === "n")) ||
        (e.altKey && e.key === "Tab")
      ) {
        e.preventDefault();
        handleViolation("Blocked keyboard shortcut during quiz");
      }
    };

    // Add listeners
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("keydown", handleKeyDown);

    // Push state to detect back button
    window.history.pushState(null, "", window.location.href);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [enabled, handleViolation]);

  return { handleViolation };
}
