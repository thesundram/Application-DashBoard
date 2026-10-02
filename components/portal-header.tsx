"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LayoutGrid, LogOut, Shield, User, Loader2 } from "lucide-react";

interface PortalHeaderProps {
  appCount: number;
}

interface CurrentUser {
  username: string;
  role: "admin" | "user";
}

export function PortalHeader({ appCount }: PortalHeaderProps) {
  const router = useRouter();
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    // Fetch authenticated user info
    fetch("/api/auth/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.authenticated && data.user) {
          setUser(data.user);
        }
      })
      .catch(() => {});
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      if (typeof window !== "undefined") {
        sessionStorage.removeItem("uttam_active_session");
      }
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
      router.refresh();
    } catch (err) {
      console.error("Logout failed:", err);
      setIsLoggingOut(false);
    }
  };

  return (
    <header
      className="w-full border-b border-white/10 sticky top-0 z-40 backdrop-blur-xl shadow-lg shadow-black/15"
      style={{
        background: `radial-gradient(circle at 0% 0%, oklch(0.45 0.15 250 / 0.18), transparent 40%), 
                     radial-gradient(circle at 100% 100%, oklch(0.4 0.12 260 / 0.12), transparent 40%), 
                     linear-gradient(135deg, oklch(0.26 0.08 260) 0%, oklch(0.20 0.06 265) 100%)`,
        color: "var(--header-fg)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between py-4 sm:py-5 gap-4">
          {/* Brand & Title */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            {/* Square, Bold Logo Container */}
            <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-b from-[#0b1e47] to-[#081533] border border-blue-400/25 backdrop-blur-md shadow-lg shadow-black/30 p-2.5 overflow-hidden shrink-0 aspect-square">
              <Image
                src="/UttamLogo-transparent.png"
                alt="Uttam Galva Logo"
                width={64}
                height={64}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow"
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase opacity-75">
                <LayoutGrid className="w-3 h-3 text-blue-400 shrink-0" />
                <span>Manufacturing Operations Portal</span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                Uttam Galva Solutions <span className="text-primary/90">Dashboards</span>
              </h1>
              <p className="text-xs font-medium opacity-70 mt-0.5">
                Uttam Galva Innovative Solutions Pvt. Ltd.
              </p>
            </div>
          </div>

          {/* Right: Stats, User Session & Logout */}
          <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4">
            {/* Live Applications Counter */}
            <div className="flex items-center gap-3 bg-white/5 rounded-2xl py-2 px-3.5 sm:px-4 border border-white/10 backdrop-blur-sm">
              <div className="flex flex-col items-start">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-black">{appCount}</span>
                  <span className="text-[10px] font-bold uppercase opacity-50 tracking-wider">Live</span>
                </div>
                <span className="text-[10px] font-medium opacity-50 uppercase tracking-tighter">Applications</span>
              </div>

              <div className="w-px h-7 bg-white/10" />

              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold leading-tight">System Online</span>
                  <span className="text-[9px] font-medium opacity-50 uppercase tracking-tight">Operational</span>
                </div>
              </div>
            </div>

            {/* Authenticated User & Logout */}
            <div className="flex items-center gap-2 bg-white/5 rounded-2xl p-1.5 pl-3 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 pr-1 sm:pr-2">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-primary-foreground font-bold text-xs shrink-0">
                  {user?.role === "admin" ? (
                    <Shield className="w-4 h-4 text-amber-400" />
                  ) : (
                    <User className="w-4 h-4 text-blue-300" />
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold leading-tight text-white">
                    {user?.username || "Authenticated"}
                  </span>
                  <span className="text-[10px] font-semibold text-blue-300/80 uppercase tracking-wider">
                    {user?.role === "admin" ? "Admin Role" : "User Role"}
                  </span>
                </div>
              </div>

              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                aria-label="Logout"
                title="Sign out of Operations Portal"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/15 hover:bg-red-500/25 active:bg-red-500/35 border border-red-500/30 text-red-200 hover:text-white transition-all text-xs font-semibold cursor-pointer disabled:opacity-50"
              >
                {isLoggingOut ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <LogOut className="w-3.5 h-3.5" />
                )}
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
