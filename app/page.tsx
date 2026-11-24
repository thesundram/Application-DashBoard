import Link from "next/link";
import { Header } from "@/components/header";
import { AboutUttamSection } from "@/components/about-uttam-section";
import { ArrowRight, Boxes, Lock } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      {/* Top Header */}
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 py-6 sm:py-10 space-y-10">
        {/* Full About Uttam Galva Showcase */}
        <AboutUttamSection />

        {/* Access Applications Call-to-Action Bar */}
        <section className="p-6 sm:p-8 rounded-3xl border border-primary/25 bg-gradient-to-r from-blue-950/40 via-card to-card shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-foreground">
              Explore 24 Production Applications &amp; Optimizers
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Sign in to launch live shopfloor execution, cutting optimizers, and real-time telemetry.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card hover:bg-secondary text-xs font-bold text-foreground transition-all shadow-sm"
            >
              <Boxes className="w-4 h-4 text-primary" />
              <span>Browse Applications</span>
            </Link>

            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold transition-all shadow-md shadow-primary/25"
            >
              <Lock className="w-4 h-4" />
              <span>Portal Sign In</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
