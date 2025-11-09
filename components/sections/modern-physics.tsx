"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, Zap, Brain, Microscope } from "lucide-react";

const researchers = [
  {
    name: "Nick Bostrom",
    title: "Philosopher, Oxford University",
    contribution: "Simulation Argument: If advanced civilizations run ancestor simulations, we are almost certainly living in one.",
    keyWork: "Are You Living in a Computer Simulation? (2003)",
    icon: Brain,
  },
  {
    name: "Donald Hoffman",
    title: "Cognitive Scientist, UC Irvine",
    contribution: "Interface Theory of Perception: Reality is an interface, not objective truth. Evolution shaped us to see fitness, not reality.",
    keyWork: "The Case Against Reality (2019)",
    icon: Microscope,
  },
  {
    name: "Max Tegmark",
    title: "Physicist, MIT",
    contribution: "Mathematical Universe Hypothesis: Our physical reality is a mathematical structure. The universe is mathematics.",
    keyWork: "Our Mathematical Universe (2014)",
    icon: Atom,
  },
  {
    name: "David Chalmers",
    title: "Philosopher of Mind, NYU",
    contribution: "The hard problem of consciousness and the possibility that reality is fundamentally computational.",
    keyWork: "The Conscious Mind (1996)",
    icon: Brain,
  },
  {
    name: "Rizwan Virk",
    title: "Computer Scientist, MIT",
    contribution: "The Simulation Hypothesis: Evidence from quantum physics, video games, and computer science points to a simulated reality.",
    keyWork: "The Simulation Hypothesis (2019)",
    icon: Zap,
  },
  {
    name: "Tom Campbell",
    title: "Physicist, Consciousness Researcher",
    contribution: "My Big TOE (Theory of Everything): Reality is a virtual reality system created by consciousness itself.",
    keyWork: "My Big TOE Trilogy (2003-2007)",
    icon: Atom,
  },
];

const keyConcepts = [
  {
    title: "Quantum Mechanics",
    description: "Observation collapses the wave function. Reality appears to be probabilistic until measured—suggesting information, not matter, is fundamental.",
  },
  {
    title: "Fine-Tuning Problem",
    description: "The universe's physical constants are precisely tuned for life. This could indicate design, simulation, or the anthropic principle.",
  },
  {
    title: "Digital Physics",
    description: "The universe may be fundamentally computational. Information theory suggests reality operates like a computer program.",
  },
  {
    title: "Holographic Principle",
    description: "All information in a volume of space can be encoded on its boundary—suggesting our 3D reality might be a projection.",
  },
];

export function ModernPhysics() {
  return (
    <section className={`${designSystem.spacing.section} relative bg-gradient-to-b from-background via-accent/10 to-background`}>
      <div className={designSystem.spacing.container}>
        <motion.div
          {...designSystem.animations.fadeInUp}
          className="text-center mb-16"
        >
          <h2 className={`${designSystem.typography.h2} mb-4 text-foreground`}>
            Modern Science Meets Ancient Questions
          </h2>
          <p className={`${designSystem.typography.bodyLarge} text-muted-foreground max-w-3xl mx-auto`}>
            Today's physicists, cognitive scientists, and philosophers are discovering that 
            cutting-edge science may be pointing toward the same insights ancient sages described 
            millennia ago. The evidence is mounting—and it's extraordinary.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className={`${designSystem.typography.h3} text-foreground mb-8 text-center`}>
            Leading Researchers & Thinkers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchers.map((researcher, index) => {
              const Icon = researcher.icon;
              return (
                <motion.div
                  key={researcher.name}
                  {...designSystem.animations.fadeIn}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 border-border backdrop-blur-sm hover:border-primary/40 transition-all h-full">
                    <CardHeader>
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-foreground text-lg">{researcher.name}</CardTitle>
                      <CardDescription className="text-primary text-sm">{researcher.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground text-sm leading-relaxed mb-3">{researcher.contribution}</p>
                      <p className="text-primary text-xs italic">"{researcher.keyWork}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className={`${designSystem.typography.h3} text-foreground mb-8 text-center`}>
            Key Scientific Concepts
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {keyConcepts.map((concept, index) => (
              <motion.div
                key={concept.title}
                {...designSystem.animations.fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20 border-primary/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-foreground text-xl">{concept.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground leading-relaxed">{concept.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

