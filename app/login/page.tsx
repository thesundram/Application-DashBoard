"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, User, Eye, EyeOff, ArrowRight, Loader2, ShieldCheck, AlertCircle } from "lucide-react";

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

      // Successful login - redirect to dashboard
      router.push("/");
      router.refresh();
    } catch (err) {
      console.error("Login request failed:", err);
      setErrorMessage("Unable to connect to authentication server. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-110px)] flex items-center justify-center p-2 sm:p-4 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-6 left-6 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-6 right-6 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-[360px] my-auto">
        {/* Compact Glass Card */}
        <div className="rounded-2xl border border-white/10 bg-card/85 dark:bg-zinc-900/85 backdrop-blur-xl shadow-2xl p-5 sm:p-6 transition-all">
          {/* Company Branding */}
          <div className="flex flex-col items-center text-center mb-5">
            {/* Square & prominent Logo container */}
            <div className="relative w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] mb-3 rounded-2xl bg-gradient-to-b from-[#0b1e47] to-[#07132e] p-2.5 shadow-xl shadow-blue-950/40 border border-blue-400/25 flex items-center justify-center aspect-square group">
              <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-sm group-hover:bg-blue-500/20 transition-all" />
              <Image
                src="/UttamLogo-transparent.png"
                alt="Uttam Galva Logo"
                width={64}
                height={64}
                className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] object-contain drop-shadow"
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>

            <h1 className="text-2xl sm:text-[26px] font-extrabold tracking-tight text-foreground leading-tight">
              Uttam Galva
            </h1>

            <div className="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-medium text-primary">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Solutions Portal Authentication</span>
            </div>
          </div>

          {/* Error Message Alert */}
          {errorMessage && (
            <div className="mb-4 p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs flex items-start gap-2 animate-in fade-in slide-in-from-top-1 duration-200">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div className="leading-tight">{errorMessage}</div>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* User ID field */}
            <div className="space-y-1">
              <label
                htmlFor="username"
                className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
              >
                User ID
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
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
                  placeholder="Enter User ID"
                  disabled={isLoading}
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-input bg-background/60 focus:bg-background text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-1">
              <label
                htmlFor="password"
                className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
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
                  placeholder="Enter Password"
                  disabled={isLoading}
                  className="w-full pl-9 pr-10 py-2 rounded-xl border border-input bg-background/60 focus:bg-background text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-1.5 py-2.5 px-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-md shadow-primary/25 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer note */}
          <div className="mt-5 pt-4 border-t border-border/50 text-center">
            <p className="text-[10px] text-muted-foreground/80 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
              <span>Protected Corporate Portal &bull; Encrypted Session</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
