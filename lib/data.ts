import {
  Factory,
  UserCheck,
  Activity,
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
  type LucideIcon,
} from "lucide-react"

export interface AppEntry {
  title: string
  description: string
  url: string
  icon: LucideIcon
  accentColor: string
  iconBg: string
}

export interface Category {
  title: string
  apps: AppEntry[]
}

export const categories: Category[] = [
  {
    title: "Manufacturing Execution System (MES)",
    apps: [
      {
        title: "CTL Optimizer",
        description: "Optimize cut-to-length operations with intelligent scheduling, minimize material waste, and maximize yield.",
        url: "https://ctl-optimizer.vercel.app/",
        icon: SlidersHorizontal,
        accentColor: "bg-violet-500",
        iconBg: "bg-violet-50 text-violet-600",
      },
      {
        title: "CRS Optimizer",
        description: "Plan and optimize slitter configurations, manage coil recoiling schedules, and reduce setup time.",
        url: "https://slitter-optimization.vercel.app/",
        icon: Scissors,
        accentColor: "bg-pink-500",
        iconBg: "bg-pink-50 text-pink-600",
      },
      {
        title: "TubeMill",
        description: "Monitor real-time tube mill production metrics, shift targets, downtime events, and OEE performance.",
        url: "https://tube-mill-production-system.vercel.app/",
        icon: Gauge,
        accentColor: "bg-blue-600",
        iconBg: "bg-blue-50 text-blue-600",
      },
      {
        title: "RollShop",
        description: "Manage roll inventory, track grinding history, monitor roll wear profiles, and schedule roll changes.",
        url: "https://roll-shop.vercel.app",
        icon: Store,
        accentColor: "bg-cyan-500",
        iconBg: "bg-cyan-50 text-cyan-600",
      },
      {
        title: "Mobil MES",
        description: "Specialized Manufacturing Execution System for Mobil lubricant production, batch traceability, and quality control.",
        url: "https://mobil-mes.vercel.app",
        icon: Factory,
        accentColor: "bg-blue-600",
        iconBg: "bg-blue-50 text-blue-600",
      },
    ],
  },
  {
    title: "Maintenance Reliability Solutions",
    apps: [
      {
        title: "Crane Maintenance",
        description: "Manage crane inspection schedules, track maintenance work orders, and monitor equipment health.",
        url: "https://crane-maintenance-new.vercel.app/",
        icon: Wrench,
        accentColor: "bg-orange-500",
        iconBg: "bg-orange-50 text-orange-600",
      },
      {
        title: "Breakdown Analysis",
        description: "Monitor real-time breakdown metrics, track MTBF and MTTR, and analyze downtime patterns.",
        url: "https://plant-breakdown.vercel.app",
        icon: Activity,
        accentColor: "bg-red-600",
        iconBg: "bg-red-50 text-red-600",
      },
    ],
  },
  {
    title: "Inventory & Material Management",
    apps: [
      {
        title: "Inventory Management System",
        description: "Track raw material and finished goods inventory levels, manage stock movements, and replenishment.",
        url: "https://stores-inventory.vercel.app",
        icon: PackageSearch,
        accentColor: "bg-emerald-500",
        iconBg: "bg-emerald-50 text-emerald-600",
      },
      {
        title: "RM Stock Optimizer",
        description: "Analyze raw material stock levels, optimize procurement planning, and align with production schedules.",
        url: "https://stock-optimization.vercel.app",
        icon: BarChart3,
        accentColor: "bg-sky-500",
        iconBg: "bg-sky-50 text-sky-600",
      },
    ],
  },
  {
    title: "Logistics & Yard digitization",
    apps: [
      {
        title: "Yard Management System (YMS)",
        description: "Oversee yard operations including bay allocation, material placement, and coil tracking.",
        url: "https://yms-new.vercel.app/",
        icon: Truck,
        accentColor: "bg-amber-500",
        iconBg: "bg-amber-50 text-amber-600",
      },
      {
        title: "Truck Turn Around Time (TAT)",
        description: "Measure and optimize truck dwell times from gate-in to gate-out, and identify bottlenecks.",
        url: "https://tat-manager.vercel.app/",
        icon: TimerReset,
        accentColor: "bg-rose-500",
        iconBg: "bg-rose-50 text-rose-600",
      },
      {
        title: "Weigh Bridge",
        description: "Capture and validate weighbridge data in real time, and automate weight recording workflows.",
        url: "https://weigh-bridge-data-capture-system.vercel.app",
        icon: Scale,
        accentColor: "bg-lime-500",
        iconBg: "bg-lime-50 text-lime-600",
      },
    ],
  },
  {
    title: "Order & Visitor Management System",
    apps: [
      {
        title: "Order Management System (OMS)",
        description: "Create, track, and fulfil customer orders end-to-end with real-time status updates.",
        url: "https://order-management-system-pearl.vercel.app",
        icon: ClipboardList,
        accentColor: "bg-indigo-500",
        iconBg: "bg-indigo-50 text-indigo-600",
      },
      {
        title: "Visitor Management System (VMS)",
        description: "Streamline visitor registration, track real-time presence, and manage entry/exit logs.",
        url: "https://visitor-new.vercel.app",
        icon: UserCheck,
        accentColor: "bg-purple-600",
        iconBg: "bg-purple-50 text-purple-600",
      },
    ],
  },
]
