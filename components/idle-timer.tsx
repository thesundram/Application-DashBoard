"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// Auto logout after 1 hour (60 minutes) of inactivity (in milliseconds)
const INACTIVITY_TIMEOUT_MS = 60 * 60 * 1000;

export function IdleTimer() {
  const router = useRouter();
  const lastActivityRef = useRef<number>(Date.now());

  useEffect(() => {
    // 1. Tab-Close / Fresh-Tab Detection:
    // When a tab is closed, the browser permanently deletes its sessionStorage.
    // If a user opens a new tab or re-opens after closing, sessionStorage is empty.
    if (typeof window !== "undefined") {
      const isTabSessionActive = sessionStorage.getItem("uttam_active_session");
      if (!isTabSessionActive) {
        // Tab was closed! Clear server session and redirect to login
        fetch("/api/auth/logout", { method: "POST" }).finally(() => {
          window.location.href = "/login";
        });
        return;
      }
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
        router.push("/login?reason=inactivity");
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

    // Check immediately when tab becomes visible again
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        checkInactivity();
      }
    };

    // Interaction events to detect user presence
    const events: (keyof WindowEventMap)[] = [
      "mousedown",
      "mousemove",
      "keydown",
      "scroll",
      "touchstart",
      "click",
    ];

    events.forEach((event) => {
      window.addEventListener(event, updateActivity, { passive: true });
    });

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Periodically check inactivity every 15 seconds
    const intervalId = setInterval(checkInactivity, 15000);

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, updateActivity);
      });
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(intervalId);
    };
  }, [router]);

  return null;
}
