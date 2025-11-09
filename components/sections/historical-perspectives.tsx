"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scroll, Users, Book } from "lucide-react";

const historicalFigures = [
  {
    name: "Plato (428-348 BCE)",
    period: "Ancient Greece",
    contribution: "The Allegory of the Cave—the foundational metaphor questioning the nature of reality and perception.",
    icon: Scroll,
  },
  {
    name: "René Descartes (1596-1650)",
    period: "17th Century",
    contribution: "Cogito ergo sum—questioned whether reality could be an elaborate deception, laying groundwork for modern philosophy.",
    icon: Book,
  },
  {
    name: "Immanuel Kant (1724-1804)",
    period: "18th Century",
    contribution: "Proposed that we can never know 'things-in-themselves'—only our perceptions, which are shaped by our mental structures.",
    icon: Users,
  },
  {
    name: "Hindu & Buddhist Traditions",
    period: "Ancient to Present",
    contribution: "Maya (illusion) and the concept that the material world is a veil over ultimate reality. The dream-like nature of existence.",
    icon: Scroll,
  },
  {
    name: "Advaita Vedanta",
    period: "8th Century CE",
    contribution: "Non-dual philosophy asserting that only consciousness (Brahman) is real, and the world of appearances is illusion (Maya).",
    icon: Book,
  },
  {
    name: "Taoist Philosophy",
    period: "6th Century BCE",
    contribution: "The Tao that can be named is not the eternal Tao. Reality transcends our conceptual understanding.",
    icon: Scroll,
  },
];

export function HistoricalPerspectives() {
  return (
    <section className={`${designSystem.spacing.section} relative bg-gradient-to-b from-background via-accent/10 to-background`}>
      <div className={designSystem.spacing.container}>
        <motion.div
          {...designSystem.animations.fadeInUp}
          className="text-center mb-16"
        >
          <h2 className={`${designSystem.typography.h2} mb-4 text-foreground`}>
            Ancient Wisdom, Timeless Questions
          </h2>
          <p className={`${designSystem.typography.bodyLarge} text-muted-foreground max-w-3xl mx-auto`}>
            Long before computers and quantum physics, sages and philosophers across cultures 
            recognized that reality might not be what it appears. Their insights echo through 
            the ages, finding new expression in modern science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {historicalFigures.map((figure, index) => {
            const Icon = figure.icon;
            return (
              <motion.div
                key={figure.name}
                {...designSystem.animations.fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/50 border-border backdrop-blur-sm hover:border-primary/40 transition-all h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-foreground text-lg">{figure.name}</CardTitle>
                    <CardDescription className="text-primary text-sm">{figure.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground text-sm leading-relaxed">{figure.contribution}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          {...designSystem.animations.fadeInUp}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20 border-primary/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground mb-4">The Thread of Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground text-lg leading-relaxed">
                From the caves of ancient Greece to the monasteries of the East, from the salons of
                Enlightenment Europe to the laboratories of quantum physics—the question persists:
                <em className="text-primary"> What is real?</em> Each era brings new tools, new
                language, new evidence, but the fundamental mystery remains. Perhaps the greatest
                discovery is that this question itself may be the key to awakening.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

