import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { getAllApps, getAppBySlug, categories } from "@/lib/data";
import {
  ExternalLink,
  ArrowLeft,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Building,
  ShieldCheck,
  Sparkles,
  Layers,
  ArrowRight,
  Boxes,
  Zap,
  Cpu,
  Lock,
} from "lucide-react";

interface AppDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const apps = getAllApps();
  return apps.map((app) => ({
    slug: app.slug,
  }));
}

export default async function AppDetailPage({ params }: AppDetailPageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  const Icon = app.icon;
  const impact = app.impact;

  // Find related apps in the same category
  const category = categories.find((c) => c.title === app.categoryTitle);
  const relatedApps = category?.apps.filter((a) => a.slug !== app.slug) || [];

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      {/* Top Header */}
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 py-6 sm:py-10 space-y-8">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/apps"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Applications</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/apps" className="hover:text-primary transition-colors">Applications</Link>
            <span>/</span>
            <span className="font-semibold text-foreground/80">{app.categoryTitle}</span>
            <span>/</span>
            <span className="font-bold text-primary">{app.title}</span>
          </div>
        </div>

        {/* Hero Card - Full Width 7xl */}
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-card via-card to-secondary/30 p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden">
          {/* Top-right ambient glow inspired by sundram-tech */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-500/20 via-blue-400/5 to-transparent rounded-bl-full pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-border/60 relative z-10">
            <div className="flex items-start sm:items-center gap-4 sm:gap-6">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-white/10"
                style={{
                  background: "rgba(37, 99, 235, 0.12)",
                  border: "1px solid rgba(37, 99, 235, 0.25)",
                  color: "#60A5FA",
                }}
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={1.75} />
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-primary/10 text-primary border border-primary/20">
                    <Sparkles className="w-3 h-3" />
                    {impact?.roiBadge || "Industry 4.0"}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-secondary text-secondary-foreground border border-border/60">
                    <Building className="w-3 h-3 text-muted-foreground" />
                    {impact?.department || app.categoryTitle}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live Plant System</span>
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground leading-tight">
                  {app.title}
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                  {app.description}
                </p>
              </div>
            </div>

            {/* Big Launch Action CTA */}
            <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-primary hover:bg-primary/90 active:scale-95 text-primary-foreground font-bold text-sm shadow-xl shadow-primary/25 transition-all cursor-pointer"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Direct URL & Status Bar */}
          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2 text-muted-foreground min-w-0">
              <span className="font-semibold text-foreground/80 shrink-0">Application Endpoint:</span>
              <code className="px-2.5 py-1 rounded-lg bg-secondary/80 border border-border/80 font-mono text-[11px] text-foreground select-all break-all sm:break-normal max-w-full">
                {app.url}
              </code>
            </div>

            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-xs shrink-0">
              <ShieldCheck className="w-4 h-4" />
              <span>Production Live &amp; Secured on Plant Network</span>
            </div>
          </div>
        </div>

        {/* 12-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main 8 Columns: Value, ROI, Before/After & Technicals */}
          <div className="lg:col-span-8 space-y-8">
            {/* Operational Plant Value & Metrics */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Plant Floor Value &amp; Operational ROI
                </h2>
              </div>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl p-5 bg-emerald-500/10 border border-emerald-500/20 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>Primary Benefit</span>
                  </div>
                  <div className="text-lg sm:text-xl font-black text-emerald-700 dark:text-emerald-300 mt-2 tracking-tight">
                    {impact?.keyBenefit || "Production Optimization"}
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400/90 mt-2">
                    Verified Plant Floor Result
                  </div>
                </div>

                <div className="rounded-2xl p-5 bg-blue-500/10 border border-blue-500/20 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-400">
                    <Clock className="w-4 h-4" />
                    <span>Shift Hours Saved</span>
                  </div>
                  <div className="text-lg sm:text-xl font-black text-blue-700 dark:text-blue-300 mt-2 tracking-tight">
                    {impact?.timeSaved || "Instant Real-Time"}
                  </div>
                  <div className="text-[11px] font-semibold text-blue-600 dark:text-blue-400/90 mt-2 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>Automated Calculations</span>
                  </div>
                </div>

                <div className="rounded-2xl p-5 bg-amber-500/10 border border-amber-500/20 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400">
                    <Zap className="w-4 h-4" />
                    <span>Estimated Annual Impact</span>
                  </div>
                  <div className="text-lg sm:text-xl font-black text-amber-700 dark:text-amber-300 mt-2 tracking-tight">
                    {impact?.annualEstimatedSavings || "Direct Cost Optimization"}
                  </div>
                  <div className="text-[11px] font-semibold text-amber-600 dark:text-amber-400/90 mt-2">
                    High Yield Efficiency
                  </div>
                </div>
              </div>

              {/* Before vs After Detailed Transformation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Before */}
                <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Before Digitalization (Manual Challenge)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed pl-6">
                    {impact?.beforeProcess ||
                      "Manual registers, delayed shift handovers, and trial-and-error calculations that resulted in scrap and operational delays."}
                  </p>
                </div>

                {/* After */}
                <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>After Digitalization (Uttam Galva Solution)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed pl-6">
                    {impact?.afterProcess ||
                      "Automated real-time workflows, algorithmic optimization, and direct digital traceability across the shopfloor."}
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Highlights & SOP */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Technical Capabilities &amp; Plant Integration
                </h2>
              </div>

              <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Deployment:</strong> High-Availability Serverless Infrastructure with sub-second latency
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Authentication:</strong> Role-based access control (RBAC) &amp; Encrypted Sessions
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Target Line:</strong> {impact?.department || "Steel Operations Bays"}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Data Output:</strong> Real-time production telemetry and exportable shift reports
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar 4 Columns: Quick Launch Box & Related Applications */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Launch & Plant Access Box */}
            <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-border/60">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground">
                  <Cpu className="w-4 h-4 text-primary" />
                  <span>System Access</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Online</span>
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="text-muted-foreground">Authorized Division:</div>
                <div className="font-semibold text-foreground bg-secondary/70 p-2.5 rounded-xl border border-border/60">
                  {impact?.department || app.categoryTitle}
                </div>
              </div>

              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:bg-primary/90 transition-all shadow-md shadow-primary/20 active:scale-95"
              >
                <span>Launch {app.title}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="pt-2 border-t border-border/50 text-[11px] text-muted-foreground flex items-center gap-1.5 justify-center">
                <Lock className="w-3.5 h-3.5 text-primary" />
                <span>Encrypted plant network connection</span>
              </div>
            </div>

            {/* Related Applications */}
            {relatedApps.length > 0 && (
              <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 space-y-4 shadow-sm">
                <div className="flex items-center gap-2 pb-3 border-b border-border/60">
                  <Boxes className="w-4 h-4 text-primary" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Related {app.categoryTitle}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {relatedApps.slice(0, 4).map((rel) => {
                    const RelIcon = rel.icon;
                    return (
                      <Link
                        key={rel.slug}
                        href={`/apps/${rel.slug}`}
                        className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary border border-border/60 hover:border-primary/40 transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className={`w-8 h-8 rounded-lg ${rel.iconBg} flex items-center justify-center shrink-0`}>
                            <RelIcon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-foreground group-hover:text-primary transition-colors truncate">
                              {rel.title}
                            </div>
                            <div className="text-[10px] text-muted-foreground truncate">
                              {rel.impact?.roiBadge || rel.categoryTitle}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="pt-4" />
      </main>
    </div>
  );
}
