import { AppCard } from "@/components/app-card"
import { PortalHeader } from "@/components/portal-header"
import {
  Wrench,
  Gauge,
  PackageSearch,
  Truck,
  ClipboardList,
  Smartphone,
  SlidersHorizontal,
  Scissors,
  Store,
  Scale,
  TimerReset,
  BarChart3,
} from "lucide-react"

const applications = [
  {
    title: "Crane Maintenance",
    description:
      "Manage crane inspection schedules, track maintenance work orders, and monitor equipment health to ensure operational safety.",
    url: "https://crane-maintenance-new.vercel.app/",
    icon: Wrench,
    accentColor: "bg-orange-500",
    iconBg: "bg-orange-50 text-orange-600",
  },
  {
    title: "Tube Mill Production",
    description:
      "Monitor real-time tube mill production metrics, shift targets, downtime events, and OEE performance across all mill lines.",
    url: "https://tube-mill-production-system.vercel.app/",
    icon: Gauge,
    accentColor: "bg-blue-600",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    title: "Inventory Module",
    description:
      "Track raw material and finished goods inventory levels, manage stock movements, and generate replenishment alerts.",
    url: "https://stores-inventory.vercel.app",
    icon: PackageSearch,
    accentColor: "bg-emerald-500",
    iconBg: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Yard Management (YMS)",
    description:
      "Oversee yard operations including bay allocation, material placement, coil tracking, and space utilization reporting.",
    url: "https://yms-new.vercel.app/",
    icon: Truck,
    accentColor: "bg-amber-500",
    iconBg: "bg-amber-50 text-amber-600",
  },
  {
    title: "Truck Turn Around Time (TAT)",
    description:
      "Measure and optimize truck dwell times from gate-in to gate-out, identify bottlenecks, and improve logistics throughput.",
    url: "https://tat-manager.vercel.app/",
    icon: TimerReset,
    accentColor: "bg-rose-500",
    iconBg: "bg-rose-50 text-rose-600",
  },
  {
    title: "Order Management System (OMS)",
    description:
      "Create, track, and fulfil customer orders end-to-end with real-time status updates, delivery scheduling, and dispatch coordination.",
    url: "https://order-management-system-pearl.vercel.app",
    icon: ClipboardList,
    accentColor: "bg-indigo-500",
    iconBg: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Mobile MES App",
    description:
      "Access the Manufacturing Execution System on mobile devices for shop-floor data entry, work order scanning, and live production feedback.",
    url: "https://mobil-mes.vercel.app",
    icon: Smartphone,
    accentColor: "bg-teal-500",
    iconBg: "bg-teal-50 text-teal-600",
  },
  {
    title: "CTL Optimizer",
    description:
      "Optimize cut-to-length operations with intelligent scheduling, minimize material waste, and maximize yield across cutting lines.",
    url: "https://ctl-optimizer.vercel.app/",
    icon: SlidersHorizontal,
    accentColor: "bg-violet-500",
    iconBg: "bg-violet-50 text-violet-600",
  },
  {
    title: "CRS Optimizer",
    description:
      "Plan and optimize slitter configurations, manage coil recoiling schedules, and reduce setup time on cold rolling and slitting lines.",
    url: "https://slitter-optimization.vercel.app/",
    icon: Scissors,
    accentColor: "bg-pink-500",
    iconBg: "bg-pink-50 text-pink-600",
  },
  {
    title: "Roll Shop",
    description:
      "Manage roll inventory, track grinding history, monitor roll wear profiles, and schedule roll changes for mill operations.",
    url: "https://roll-shop.vercel.app",
    icon: Store,
    accentColor: "bg-cyan-500",
    iconBg: "bg-cyan-50 text-cyan-600",
  },
  {
    title: "Weighbridge Integration",
    description:
      "Capture and validate weighbridge data in real time, automate tare and gross weight recording, and integrate with dispatch workflows.",
    url: "https://weigh-bridge-data-capture-system.vercel.app",
    icon: Scale,
    accentColor: "bg-lime-500",
    iconBg: "bg-lime-50 text-lime-600",
  },
  {
    title: "RM Stock Optimizer",
    description:
      "Analyze raw material stock levels, optimize procurement planning, reduce excess inventory, and align stock with production schedules.",
    url: "https://stock-optimization.vercel.app",
    icon: BarChart3,
    accentColor: "bg-sky-500",
    iconBg: "bg-sky-50 text-sky-600",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <PortalHeader appCount={applications.length} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 py-10">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {applications.map((app, idx) => (
            <AppCard
              key={app.url}
              title={app.title}
              description={app.description}
              url={app.url}
              icon={app.icon}
              accentColor={app.accentColor}
              iconBg={app.iconBg}
              index={idx + 1}
            />
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-12 text-center text-xs text-muted-foreground">
          Click any application card to open it in a new tab &mdash; all links are live and secured.
        </p>
      </main>

      <footer
        className="w-full py-5 mt-4 border-t border-white/10"
        style={{ background: "var(--header-bg)", color: "var(--header-muted)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <span>Manufacturing Operations Suite &mdash; Internal Portal</span>
          <span>{new Date().getFullYear()} &copy; All rights reserved</span>
        </div>
      </footer>
    </div>
  )
}
