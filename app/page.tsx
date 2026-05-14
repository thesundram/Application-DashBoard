import { AppCard } from "@/components/app-card"
import { PortalHeader } from "@/components/portal-header"
import { CategorySection } from "@/components/category-section"
import { categories } from "@/lib/data"

export default function HomePage() {
  const totalApps = categories.reduce((acc, cat) => acc + cat.apps.length, 0)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <PortalHeader appCount={totalApps} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 py-10 flex flex-col gap-12">
        {categories.map((category) => (
          <CategorySection key={category.title} title={category.title}>
            {category.apps.map((app, idx) => (
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
          </CategorySection>
        ))}

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-muted-foreground italic">
          Click any application card to open it in a new tab &mdash; all links are live and secured.
        </p>
      </main>
    </div>
  )
}
