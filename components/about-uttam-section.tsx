"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  companyProfile,
  digitalTransformationSavings,
  type TransformationSaving,
} from "@/lib/impact-data";
import {
  Factory,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Target,
  Sparkles,
  Boxes,
  CheckCircle2,
  Eye,
  Activity,
  Zap,
  TrendingUp,
} from "lucide-react";

export function AboutUttamSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "MES",
    "Optimizers",
    "Maintenance",
    "Logistics",
    "Commercial",
    "AI & Vision",
  ];

  const filteredSavings =
    selectedCategory === "All"
      ? digitalTransformationSavings
      : digitalTransformationSavings.filter(
          (item) => item.category === selectedCategory
        );

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Activity className="w-5 h-5 text-blue-400" />; // Digital Twin
      case 1:
        return <TrendingUp className="w-5 h-5 text-emerald-400" />; // Predictive Analytics
      case 2:
        return <Eye className="w-5 h-5 text-amber-400" />; // Computer Vision
      default:
        return <Cpu className="w-5 h-5 text-purple-400" />; // Industrial Intelligence
    }
  };

  return (
    <section id="about" className="space-y-8 sm:space-y-12">
      {/* Hero Overview Card - Integrated with Manager's Report */}
      <div className="relative rounded-3xl border border-white/10 overflow-hidden bg-gradient-to-br from-[#0a1838] via-[#081530] to-card text-white p-6 sm:p-8 md:p-10 shadow-2xl">
        {/* Ambient lighting */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 pb-8 border-b border-white/15">
          <div className="flex items-start gap-4 sm:gap-6">
            {/* Square Bold Logo Box */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-b from-[#0f2a63] to-[#081533] p-3 shadow-xl border border-blue-400/30 flex items-center justify-center shrink-0 aspect-square">
              <Image
                src="/UttamLogo-transparent.png"
                alt="Uttam Galva Logo"
                width={72}
                height={72}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow"
                priority
              />
            </div>

            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-[11px] font-bold text-blue-300 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>{companyProfile.siteTitle}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
                {companyProfile.tagline}
              </h1>
              <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed font-medium">
                {companyProfile.fullName} &bull; {companyProfile.positioning}
              </p>
            </div>
          </div>

          {/* Quick CTA to Dashboard */}
          <Link
            href="/apps"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-900/40 hover:scale-[1.02] active:scale-95 cursor-pointer shrink-0"
          >
            <Boxes className="w-4 h-4" />
            <span>View All Applications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Core Theme Box & Detailed Narrative */}
        <div className="relative z-10 pt-6 space-y-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-blue-300">
                  Core Platform Mission
                </div>
                <div className="text-sm sm:text-base font-extrabold text-white">
                  {companyProfile.coreTheme}
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-bold text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Smart Factory Industry 4.0 Standard</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            {companyProfile.overview}
          </p>
        </div>
      </div>

      {/* 4 Core Pillars from Manager's Report (Digital Twin, Predictive Analytics, Computer Vision, Industrial Intelligence) */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-primary" />
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Four Core Capabilities (Platform Architecture)
            </h2>
          </div>
          <span className="text-[11px] text-muted-foreground">
            Monitoring &bull; Prediction &bull; Inspection &bull; Decision Support
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {companyProfile.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-5 rounded-2xl bg-card border border-border/70 shadow-sm flex flex-col justify-between space-y-3 hover:border-primary/50 transition-all group"
            >
              <div className="space-y-2">
                <div className="p-2.5 w-fit rounded-xl bg-secondary border border-border/60 group-hover:scale-105 transition-transform">
                  {getPillarIcon(idx)}
                </div>
                <h3 className="text-sm font-extrabold text-foreground leading-snug">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* NEW SECTION: Official 16-Point Digital Transformation Applications – Benefits & Estimated Savings Matrix */}
      {/* Source: UGIS APP Front Page.docx */}
      <div className="space-y-5 pt-2">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 border-b border-border/60">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-1.5">
              <TrendingUp className="w-3 h-3" />
              <span>Verified Plant Floor Impact</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-black tracking-tight text-foreground">
              Digital Transformation Applications – Benefits &amp; Estimated Savings
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5 max-w-2xl">
              Official operational performance matrix outlining primary functional benefits and verified percentage savings for each production module.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary/70 hover:bg-secondary text-muted-foreground hover:text-foreground border border-border/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 16 Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSavings.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-card border border-border/80 shadow-sm flex flex-col justify-between space-y-3.5 hover:border-primary/50 transition-all group"
            >
              {/* Header: Number, App Name, Category & Savings Badge */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-muted-foreground bg-secondary px-2 py-0.5 rounded-md border border-border/60">
                      #{String(item.id).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-foreground group-hover:text-primary transition-colors">
                    {item.application}
                  </h3>
                </div>

                <div className="shrink-0 text-right">
                  <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                    Savings
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 font-black text-xs sm:text-sm">
                    <Zap className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{item.savings}</span>
                  </div>
                </div>
              </div>

              {/* 2 Important Benefits */}
              <div className="space-y-2 pt-1 border-t border-border/50 flex-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Two Important Benefits:
                </div>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item.benefits[0]}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item.benefits[1]}</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Manager Footnote */}
        <div className="p-3.5 rounded-xl bg-secondary/50 border border-border/70 text-xs text-muted-foreground flex items-center justify-between gap-2 flex-wrap">
          <p className="italic">
            * PPE figures represent potential reduction in observed safety violations, not a guaranteed reduction in accidents.
          </p>
          <Link
            href="/apps"
            className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
          >
            <span>Explore all live applications</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Integrated Plant Facilities */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2">
          <Factory className="w-4 h-4 text-primary" />
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Integrated Steel Processing Bays &amp; Automated Facilities
          </h2>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {companyProfile.facilities.map((facility) => (
            <span
              key={facility}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-card border border-border/80 text-xs font-semibold text-foreground shadow-sm hover:border-primary/40 transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{facility}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
