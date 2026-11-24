import { Header } from "@/components/header";
import { AboutUttamSection } from "@/components/about-uttam-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
        <AboutUttamSection />
      </main>
    </div>
  );
}
