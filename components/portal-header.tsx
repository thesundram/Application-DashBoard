import { Factory, LayoutGrid, CheckCircle2 } from "lucide-react"

interface PortalHeaderProps {
  appCount: number
}

export function PortalHeader({ appCount }: PortalHeaderProps) {
  return (
    <header
      className="w-full border-b border-white/5"
      style={{
        background: `radial-gradient(circle at 0% 0%, oklch(0.45 0.15 250 / 0.15), transparent 40%), 
                     radial-gradient(circle at 100% 100%, oklch(0.4 0.12 260 / 0.1), transparent 40%), 
                     linear-gradient(135deg, oklch(0.28 0.08 260) 0%, oklch(0.22 0.06 265) 100%)`,
        color: "var(--header-fg)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between py-6 gap-6">
          {/* Brand & Title */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md shadow-inner">
              <Factory className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase opacity-50">
                <LayoutGrid className="w-3 h-3" />
                <span>Operational Portal</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Operations <span className="text-primary/90">Dashboard</span>
              </h1>
              <p className="text-xs font-medium opacity-60 mt-0.5">
                Manufacturing Operations Suite &bull; By Uttam Innovative Solution
              </p>
            </div>
          </div>

          {/* Stats & Status */}
          <div className="flex items-center gap-4 md:gap-8 bg-white/5 rounded-2xl p-1.5 pl-5 border border-white/5 backdrop-blur-sm">
            <div className="flex flex-col items-start">
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black">{appCount}</span>
                <span className="text-[10px] font-bold uppercase opacity-40 tracking-wider">Live</span>
              </div>
              <span className="text-[10px] font-medium opacity-40 uppercase tracking-tighter">Applications</span>
            </div>

            <div className="w-px h-8 bg-white/10" />

            <div className="flex items-center gap-3 pr-4">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold leading-tight">System Online</span>
                <span className="text-[9px] font-medium opacity-50 uppercase tracking-tight">All modules operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
