"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  LayoutGrid,
  LogOut,
  Shield,
  User,
  Loader2,
  Lock,
  Building2,
  Boxes,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { categories } from "@/lib/data";

const DEFAULT_TOTAL_APPS = categories.reduce((acc, cat) => acc + cat.apps.length, 0);

interface HeaderProps {
  appCount?: number;
}

interface CurrentUser {
  username: string;
  role: "admin" | "user";
}

export function Header({ appCount = DEFAULT_TOTAL_APPS }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Auto close mobile menu on route navigation
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Check if user is authenticated
    fetch("/api/auth/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.authenticated && data.user) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      if (typeof window !== "undefined") {
        sessionStorage.removeItem("uttam_active_session");
      }
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null);
      router.push("/");
      router.refresh();
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
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
        {/* Main Header Bar - Clean Single Row on Mobile & Desktop */}
        <div className="flex items-center justify-between py-3 sm:py-4 gap-3">
          {/* Brand & Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-4 group focus-visible:outline-none min-w-0"
          >
            {/* Square, Bold Logo Container */}
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-b from-[#0b1e47] to-[#081533] border border-blue-400/25 backdrop-blur-md shadow-md p-1.5 sm:p-2 overflow-hidden shrink-0 aspect-square group-hover:scale-105 transition-transform">
              <Image
                src="/UttamLogo-transparent.png"
                alt="Uttam Galva Logo"
                width={56}
                height={56}
                className="w-7 h-7 sm:w-11 sm:h-11 object-contain drop-shadow"
                priority
              />
            </div>

            <div className="flex flex-col min-w-0">
              <div className="hidden sm:flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase opacity-75">
                <LayoutGrid className="w-3 h-3 text-blue-400 shrink-0" />
                <span>Industry 4.0 Operations Portal</span>
              </div>
              <h1 className="text-base sm:text-2xl font-extrabold tracking-tight leading-tight text-white truncate">
                Uttam Galva <span className="text-blue-300 font-bold">Innovative Solutions</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation Links (lg+) */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold">
            <Link
              href={user ? "/about" : "/"}
              className={`px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1.5 ${pathname === "/" || pathname === "/about"
                  ? "bg-white/15 text-white"
                  : "hover:bg-white/10 text-white/80 hover:text-white"
                }`}
            >
              <Building2 className="w-3.5 h-3.5 text-blue-300" />
              <span>About Uttam</span>
            </Link>

            {/* Applications link - Only shown after user logs in */}
            {user && (
              <Link
                href="/apps"
                className={`px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1.5 ${pathname.startsWith("/apps")
                    ? "bg-white/15 text-white"
                    : "hover:bg-white/10 text-white/80 hover:text-white"
                  }`}
              >
                <Boxes className="w-3.5 h-3.5 text-blue-300" />
                <span>Applications</span>
              </Link>
            )}
          </nav>

          {/* Desktop Controls (lg+) */}
          <div className="hidden lg:flex items-center justify-end gap-3">
            {/* Live Applications Counter - Only shown after user logs in */}
            {user && (
              <div className="flex items-center gap-3 bg-white/5 rounded-2xl py-2 px-3.5 border border-white/10 backdrop-blur-sm">
                <div className="flex flex-col items-start">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-black text-white">{appCount}</span>
                    <span className="text-[10px] font-bold uppercase opacity-50 tracking-wider text-white">
                      Live
                    </span>
                  </div>
                  <span className="text-[9px] font-medium opacity-50 uppercase tracking-tighter text-white">
                    Apps
                  </span>
                </div>

                <div className="w-px h-6 bg-white/10" />

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                    <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75" />
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight">
                    Online
                  </span>
                </div>
              </div>
            )}

            {/* Authentication Action: User logged in OR Login button */}
            {user ? (
              <div className="flex items-center gap-2 bg-white/5 rounded-2xl p-1.5 pl-2.5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 pr-2">
                  <div className="w-7 h-7 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-primary-foreground font-bold text-xs shrink-0">
                    {user.role === "admin" ? (
                      <Shield className="w-3.5 h-3.5 text-amber-400" />
                    ) : (
                      <User className="w-3.5 h-3.5 text-blue-300" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold leading-tight text-white">
                      {user.username}
                    </span>
                    <span className="text-[9px] font-semibold text-blue-300/80 uppercase tracking-wider">
                      {user.role === "admin" ? "Admin" : "User"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  aria-label="Logout"
                  title="Sign out of Operations Portal"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-red-500/15 hover:bg-red-500/25 active:bg-red-500/35 border border-red-500/30 text-red-200 hover:text-white transition-all text-xs font-semibold cursor-pointer disabled:opacity-50"
                >
                  {isLoggingOut ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <LogOut className="w-3.5 h-3.5" />
                  )}
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              pathname !== "/login" && (
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-xs shadow-md shadow-blue-900/30 transition-all cursor-pointer shrink-0"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Portal Login</span>
                </Link>
              )
            )}
          </div>

          {/* Mobile Right Controls (< lg) */}
          <div className="flex lg:hidden items-center gap-2">
            {!user && pathname !== "/login" && (
              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-sm transition-all"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Login</span>
              </Link>
            )}

            {user && (
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-white shrink-0">
                {user.role === "admin" ? (
                  <Shield className="w-4 h-4 text-amber-400" />
                ) : (
                  <User className="w-4 h-4 text-blue-300" />
                )}
              </div>
            )}

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 pt-2 border-t border-white/10 space-y-3">
            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-1.5">
              <Link
                href={user ? "/about" : "/"}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3.5 py-2.5 rounded-xl transition-colors flex items-center justify-between text-xs font-semibold ${pathname === "/" || pathname === "/about"
                    ? "bg-white/15 text-white"
                    : "hover:bg-white/10 text-white/80 hover:text-white"
                  }`}
              >
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-blue-300" />
                  <span>About Uttam</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 opacity-60" />
              </Link>

              {user && (
                <Link
                  href="/apps"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl transition-colors flex items-center justify-between text-xs font-semibold ${pathname.startsWith("/apps")
                      ? "bg-white/15 text-white"
                      : "hover:bg-white/10 text-white/80 hover:text-white"
                    }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Boxes className="w-4 h-4 text-blue-300" />
                    <span>Applications Directory</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-200">
                      {appCount}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                  </div>
                </Link>
              )}
            </nav>

            {/* Live Systems Telemetry (when logged in) */}
            {user && (
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75" />
                  </div>
                  <span className="font-semibold text-white">System Telemetry</span>
                </div>
                <span className="text-xs font-bold text-emerald-300">
                  {appCount} Systems Online
                </span>
              </div>
            )}

            {/* Mobile Auth Actions */}
            <div className="pt-2 border-t border-white/10">
              {user ? (
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-white shrink-0">
                      {user.role === "admin" ? (
                        <Shield className="w-4 h-4 text-amber-400" />
                      ) : (
                        <User className="w-4 h-4 text-blue-300" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white">{user.username}</span>
                      <span className="text-[10px] text-blue-300/80 font-medium uppercase">
                        {user.role === "admin" ? "Plant Administrator" : "Plant Operator"}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleLogout();
                    }}
                    disabled={isLoggingOut}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-200 text-xs font-bold transition-colors cursor-pointer"
                  >
                    {isLoggingOut ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <LogOut className="w-4 h-4" />
                    )}
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                pathname !== "/login" && (
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors shadow-md"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Portal Sign In</span>
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
