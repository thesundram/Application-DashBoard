import { Factory, LayoutGrid } from "lucide-react"

interface PortalHeaderProps {
  appCount: number
}

export function PortalHeader({ appCount }: PortalHeaderProps) {
  return (
    <header
      className="w-full"
      style={{ background: "var(--header-bg)", color: "var(--header-fg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/20 border border-primary/30">
              <Factory className="w-5 h-5 text-primary" strokeWidth={1.75} />
            </div>
            <span className="text-sm font-medium tracking-wide" style={{ color: "var(--header-muted)" }}>
              Manufacturing Operations Suite
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold tracking-wide" style={{ color: "var(--header-muted)" }}>
              By Uttam Innovative Solution
            </span>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2 text-xs" style={{ color: "var(--header-muted)" }}>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div className="py-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--header-muted)" }}>
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Application Portal</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-balance" style={{ color: "var(--header-fg)" }}>
              Operations Dashboard
            </h1>
            <p className="text-sm leading-relaxed max-w-md" style={{ color: "var(--header-muted)" }}>
              Your centralized hub for all manufacturing and operations management applications.
              Click any card to launch the application.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-6 mt-2 md:mt-0">
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-2xl font-bold" style={{ color: "var(--header-fg)" }}>{appCount}</span>
              <span className="text-xs" style={{ color: "var(--header-muted)" }}>Applications</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-2xl font-bold text-green-400">Live</span>
              <span className="text-xs" style={{ color: "var(--header-muted)" }}>Status</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
