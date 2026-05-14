"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface CategorySectionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function CategorySection({
  title,
  children,
  defaultOpen = true,
}: CategorySectionProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <section className="mb-8 last:mb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 px-1 border-b border-border/50 group transition-colors hover:border-primary/30"
      >
        <h2 className="text-sm font-bold tracking-wider uppercase text-muted-foreground group-hover:text-foreground transition-colors">
          {title}
        </h2>
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-border/30 min-w-[20px] md:min-w-[100px]" />
          <ChevronDown
            className={cn(
              "w-5 h-5 text-muted-foreground transition-transform duration-300 ease-in-out",
              isOpen ? "rotate-0" : "-rotate-90"
            )}
          />
        </div>
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-6"
            : "grid-rows-[0fr] opacity-0 mt-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-2">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
