"use client";

import Link from "next/link";
import {
  type LucideIcon,
  ExternalLink,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { type AppImpact } from "@/lib/data";

interface AppCardProps {
  title: string;
  slug?: string;
  description: string;
  url: string;
  icon: LucideIcon;
  accentColor?: string;
  iconBg?: string;
  index: number;
  impact?: AppImpact;
}

export function AppCard({
  title,
  slug,
  description,
  url,
  icon: Icon,
  index,
  impact,
}: AppCardProps) {
  const detailUrl = slug ? `/apps/${slug}` : "#";

  return (
    <Link
      href={detailUrl}
      className="group relative flex flex-col bg-card/85 hover:bg-card/95 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-500/40 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 ease-out hover:-translate-y-1.5 active:scale-[0.99] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`View details and plant impact for ${title}`}
    >
      {/* Corner hover glow accent (inspired by sundram-tech Core Services) */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-blue-500/20 via-blue-400/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Card body */}
      <div className="flex flex-col gap-4 p-5 sm:p-6 flex-1 relative z-10">
        {/* Top Meta: Icon & Status / Index */}
        <div className="flex items-start justify-between gap-3">
          {/* Glass Icon Box */}
          <div
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0 shadow-sm"
            style={{
              background: "rgba(37, 99, 235, 0.12)",
              border: "1px solid rgba(37, 99, 235, 0.22)",
              color: "#60A5FA",
            }}
          >
            <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.75} />
          </div>

          <div className="flex flex-col items-end gap-1.5">
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live</span>
              </span>
              <span className="text-[11px] font-mono font-bold text-muted-foreground bg-secondary/80 rounded-md px-2 py-0.5 tabular-nums border border-border/60">
                #{String(index).padStart(2, "0")}
              </span>
            </div>

            {impact?.department && (
              <span className="text-[10px] font-semibold text-muted-foreground line-clamp-1 max-w-[130px] text-right">
                {impact.department}
              </span>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <div className="flex flex-col gap-1.5 flex-1">
          <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug group-hover:text-blue-400 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Micro ROI / Plant Benefit Pill */}
        {impact?.roiBadge && (
          <div className="pt-0.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400 text-[10.5px] font-bold">
              <TrendingUp className="w-3 h-3 shrink-0" />
              <span className="truncate">{impact.roiBadge}</span>
            </div>
          </div>
        )}

        {/* Action Row */}
        <div className="flex items-center justify-between mt-auto pt-3.5 border-t border-white/10 text-xs">
          {/* Detail Link Indicator */}
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
            <span>Explore Details</span>
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>

          {/* Direct Launch Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(url, "_blank", "noopener,noreferrer");
            }}
            title={`Direct launch ${title} in new tab`}
            className="inline-flex items-center gap-1.5 font-bold text-xs px-3 py-1.5 min-h-[36px] rounded-xl bg-white/5 hover:bg-blue-600 hover:text-white text-foreground border border-white/10 hover:border-transparent transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <span>Launch</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </Link>
  );
}
