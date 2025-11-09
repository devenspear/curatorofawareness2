import { SimulationHero } from "@/components/sections/simulation-hero";
import { TheCave } from "@/components/sections/the-cave";
import { HistoricalPerspectives } from "@/components/sections/historical-perspectives";
import { ModernPhysics } from "@/components/sections/modern-physics";
import { SpiritualPhilosophical } from "@/components/sections/spiritual-philosophical";
import { TopAuthorsBooks } from "@/components/sections/top-authors-books";
import { VideoInterviews } from "@/components/sections/video-interviews";
import { ResourcesLibrary } from "@/components/sections/resources-library";
import { Navigation } from "@/components/shared/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <section id="home">
        <SimulationHero />
      </section>

      {/* The Cave - Plato's Allegory */}
      <section id="the-cave">
        <TheCave />
      </section>

      {/* Historical Perspectives */}
      <section id="history">
        <HistoricalPerspectives />
      </section>

      {/* Modern Physics & Research */}
      <section id="physics">
        <ModernPhysics />
      </section>

      {/* Spiritual & Philosophical Views */}
      <section id="spiritual">
        <SpiritualPhilosophical />
      </section>

      {/* Top Authors & Books */}
      <section id="books">
        <TopAuthorsBooks />
      </section>

      {/* Video Interviews */}
      <section id="videos">
        <VideoInterviews />
      </section>

      {/* Resources Library */}
      <section id="resources">
        <ResourcesLibrary />
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-2">
            Curator of Awareness
          </p>
          <p className="text-muted-foreground text-sm">
            Exploring simulation theory, consciousness, and the nature of reality
          </p>
          <p className="text-muted-foreground text-xs mt-4 opacity-70">
            © {new Date().getFullYear()} curatorofawareness.com
          </p>
        </div>
      </footer>
    </div>
  );
}
