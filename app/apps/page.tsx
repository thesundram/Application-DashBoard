"use client";

import { AppCard } from "@/components/app-card";
import { Header } from "@/components/header";
import { CategorySection } from "@/components/category-section";
import { IdleTimer } from "@/components/idle-timer";
import { categories } from "@/lib/data";
import { Boxes } from "lucide-react";

export default function ApplicationsPage() {
  const totalApps = categories.reduce((acc, cat) => acc + cat.apps.length, 0);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      {/* Auto logout detector for inactivity when authenticated */}
      <IdleTimer />

      {/* Top Header */}
      <Header appCount={totalApps} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 py-6 sm:py-10 space-y-8">
        {/* Page Title & Count Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/60">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-1">
              <Boxes className="w-3 h-3" />
              <span>Plant Applications Directory</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
              Operations &amp; Optimization Systems
            </h1>
            <p className="text-xs text-muted-foreground mt-0.5">
              Select an application to view operational impact, time savings, and SOP &mdash; or click Launch for direct access.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
              {totalApps} Production Systems
            </span>
          </div>
        </div>

        {/* Categories & Cards Grid */}
        <div className="space-y-6 sm:space-y-8">
          {categories.map((category) => (
            <CategorySection
              key={category.title}
              title={category.title}
              count={category.apps.length}
            >
              {category.apps.map((app, idx) => (
                <AppCard
                  key={app.url}
                  title={app.title}
                  slug={app.slug}
                  description={app.description}
                  url={app.url}
                  icon={app.icon}
                  accentColor={app.accentColor}
                  iconBg={app.iconBg}
                  index={idx + 1}
                  impact={app.impact}
                />
              ))}
            </CategorySection>
          ))}
        </div>

        {/* Bottom helper note */}
        <div className="pt-2">
          <p className="text-center text-xs text-muted-foreground/80 italic">
            Click any application card to view complete plant ROI and SOP &mdash; or click Launch to open directly.
          </p>
        </div>
      </main>
    </div>
  );
}
