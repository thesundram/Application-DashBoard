"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// Auto logout after 15 minutes of inactivity (in milliseconds)
const INACTIVITY_TIMEOUT_MS = 15 * 60 * 1000;

export function IdleTimer() {
  const router = useRouter();
  const lastActivityRef = useRef<number>(Date.now());

  useEffect(() => {
    const updateActivity = () => {
      lastActivityRef.current = Date.now();
    };

    const triggerAutoLogout = async () => {
      try {
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
