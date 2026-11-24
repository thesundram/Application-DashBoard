"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import {
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Loader2,
  ShieldCheck,
  AlertCircle,
  Sparkles,
  Zap,
  TrendingDown,
  FileCheck2,
  Award,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("reason") === "inactivity") {
        setErrorMessage("You were automatically logged out due to inactivity for security.");
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setErrorMessage("Please enter both User ID and Password.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setErrorMessage(data.error || "Invalid User ID or Password. Please try again.");
        setIsLoading(false);
        return;
      }

      // Set tab-bound session
      if (typeof window !== "undefined") {
        sessionStorage.setItem("uttam_active_session", "true");
      }

      // Successful login - redirect to applications directory
      router.push("/apps");
      router.refresh();
    } catch (err) {
      console.error("Login request failed:", err);
      setErrorMessage("Unable to connect to authentication server. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      {/* Unified Top Header */}
      <Header />

      {/* Main Login Area */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-transparent rounded-full blur-3xl opacity-70" />
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full max-w-5xl mx-auto my-auto">
          {/* Split Container: Left Showcase + Right Login Form (Optimized for Mobile & Desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-border/80 bg-card shadow-2xl overflow-hidden">
            {/* Form Side: Order 1 on Mobile (< lg) so inputs are immediately accessible, Order 2 on Desktop */}
            <div className="lg:col-span-7 order-1 lg:order-2 p-6 sm:p-8 lg:p-12 flex flex-col justify-between bg-card border-b lg:border-b-0">
              <div className="max-w-md mx-auto w-full space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-bold text-primary mb-3">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Authorized Plant Personnel Only</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
                    Portal Sign In
                  </h1>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Enter your authorized user ID and password to access the production systems dashboard.
                  </p>
                </div>

                {/* Error Alert */}
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div className="leading-relaxed font-medium">{errorMessage}</div>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="username"
                      className="block text-xs font-bold uppercase tracking-wider text-muted-foreground"
                    >
                      User ID
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="username"
                        name="username"
                        type="text"
                        autoComplete="username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your User ID"
                        disabled={isLoading}
                        className="w-full pl-10 pr-3.5 py-3 sm:py-2.5 rounded-xl border border-input bg-background focus:bg-background text-base sm:text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="password"
                      className="block text-xs font-bold uppercase tracking-wider text-muted-foreground"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your Password"
                        disabled={isLoading}
                        className="w-full pl-10 pr-11 py-3 sm:py-2.5 rounded-xl border border-input bg-background focus:bg-background text-base sm:text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer min-h-[44px] min-w-[44px] justify-center"
                        tabIndex={-1}
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-3 py-3 px-5 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 active:scale-[0.99] min-h-[46px]"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Verifying Credentials...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign In to Dashboard</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                {/* Security Footer Notice */}
                <div className="pt-4 border-t border-border/50 text-center space-y-1">
                  <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Protected Corporate Portal &bull; Encrypted Session</span>
                  </p>
                  <p className="text-[10.5px] text-muted-foreground/70">
                    Automatic logout after period of inactivity for plant security.
                  </p>
                </div>
              </div>
            </div>

            {/* Showcase Side: Order 2 on Mobile (< lg), Order 1 on Desktop */}
            <div className="lg:col-span-5 order-2 lg:order-1 bg-gradient-to-br from-[#0a1838] via-[#081530] to-[#050c1e] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-r border-white/10 relative overflow-hidden">
              {/* Subtle ambient circle */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                {/* Logo & Platform Name */}
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#0f2a63] to-[#081533] p-2.5 shadow-lg border border-blue-400/30 flex items-center justify-center shrink-0 aspect-square">
                    <Image
                      src="/UttamLogo-transparent.png"
                      alt="Uttam Galva Logo"
                      width={48}
                      height={48}
                      className="w-8 h-8 object-contain drop-shadow"
                      priority
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                      Industry 4.0 Platform
                    </div>
                    <div className="text-base font-extrabold text-white leading-tight">
                      Uttam Galva Innovative Solutions
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-black text-white leading-snug">
                    Autonomous Steel Operations &amp; Intelligence
                  </h2>
                  <p className="text-xs text-blue-200/80 leading-relaxed">
                    Secure real-time access to mathematical scrap optimizers, MES telemetry, and autonomous plant scheduling.
                  </p>
                </div>

                {/* 3 Quantitative Plant Value Points with Lucide Icons */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300 shrink-0 mt-0.5">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">75% Faster Logistics TAT</div>
                      <div className="text-[11px] text-blue-200/70 leading-snug">Gate turnaround down from ~4.5h to 45 mins</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 shrink-0 mt-0.5">
                      <TrendingDown className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">5–8% Scrap Reduction</div>
                      <div className="text-[11px] text-blue-200/70 leading-snug">Combinatorial optimization on CTL &amp; Slitting</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="p-2 rounded-lg bg-blue-500/20 text-blue-300 shrink-0 mt-0.5">
                      <FileCheck2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">100% Paperless Floor</div>
                      <div className="text-[11px] text-blue-200/70 leading-snug">Direct PLC sensor telemetry synchronized to ERP</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Security & Home Link */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-blue-200/80">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors group font-semibold"
                >
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  <span>Company Overview</span>
                </Link>

                <div className="inline-flex items-center gap-1 text-[10.5px]">
                  <Award className="w-3.5 h-3.5 text-blue-400" />
                  <span>ISO 9001 &bull; 14001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
