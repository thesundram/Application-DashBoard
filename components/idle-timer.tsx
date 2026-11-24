"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// Auto logout after 1 hour (60 minutes) of inactivity (in milliseconds)
const INACTIVITY_TIMEOUT_MS = 60 * 60 * 1000;

export function IdleTimer() {
  const router = useRouter();
  const lastActivityRef = useRef<number>(Date.now());

  useEffect(() => {
    // Only monitor idle activity if user has logged in
    if (typeof window === "undefined") return;

    const isTabSessionActive = sessionStorage.getItem("uttam_active_session");
    if (!isTabSessionActive) {
      // Guest visitor: no need to trigger inactivity logout
      return;
    }

    const updateActivity = () => {
      lastActivityRef.current = Date.now();
    };

    const triggerAutoLogout = async () => {
      try {
        if (typeof window !== "undefined") {
          sessionStorage.removeItem("uttam_active_session");
        }
        await fetch("/api/auth/logout", { method: "POST" });
      } catch (err) {
        console.error("Auto logout failed:", err);
      } finally {
        router.refresh();
      }
    };

    // Check if user has exceeded inactivity timeout
    const checkInactivity = () => {
      const elapsed = Date.now() - lastActivityRef.current;
      if (elapsed >= INACTIVITY_TIMEOUT_MS) {
        triggerAutoLogout();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        checkInactivity();
      }
    };

    const intervalId = setInterval(checkInactivity, 30 * 1000);

    const events = ["mousedown", "mousemove", "keydown", "scroll", "touchstart"];
    events.forEach((event) => {
      window.addEventListener(event, updateActivity, { passive: true });
    });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      events.forEach((event) => {
        window.removeEventListener(event, updateActivity);
      });
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [router]);

  return null;
}
