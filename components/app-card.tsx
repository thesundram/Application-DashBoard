import { type LucideIcon } from "lucide-react"

interface AppCardProps {
  title: string
  description: string
  url: string
  icon: LucideIcon
  accentColor: string
  iconBg: string
  index: number
}

export function AppCard({
  title,
  description,
  url,
  icon: Icon,
  accentColor,
  iconBg,
  index,
}: AppCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`Open ${title}`}
    >
      {/* Top accent bar */}
      <div className={`h-1 w-full ${accentColor} transition-all duration-300 group-hover:h-1.5`} />

      {/* Card body */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        {/* Icon container */}
        <div className="flex items-start justify-between">
          <div
            className={`flex items-center justify-center w-14 h-14 rounded-xl ${iconBg} transition-transform duration-300 group-hover:scale-105`}
          >
            <Icon className="w-7 h-7" strokeWidth={1.75} />
          </div>
          <span className="text-xs font-semibold text-muted-foreground bg-secondary rounded-full px-2.5 py-1 tabular-nums">
            {String(index).padStart(2, "0")}
          </span>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1.5 flex-1">
          <h2 className="text-[15px] font-semibold text-card-foreground leading-snug text-balance group-hover:text-primary transition-colors duration-200">
            {title}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{description}</p>
        </div>

        {/* Launch link */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span>Launch application</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </div>
      </div>
    </a>
  )
}
