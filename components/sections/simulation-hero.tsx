"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import { DigitalMatrixBackground, AnimatedGrid } from "@/components/shared/particle-background";

export function SimulationHero() {
  return (
    <section className={`${designSystem.spacing.section} relative overflow-hidden bg-gradient-to-b from-background via-accent/20 to-background text-foreground min-h-screen flex items-center`}>
      {/* Animated background elements */}
      <AnimatedGrid />
      <DigitalMatrixBackground />
      
      <div className={`${designSystem.spacing.containerNarrow} relative z-10`}>
        <div className="text-center">
          <motion.div
            {...designSystem.animations.fadeIn}
            className={`${designSystem.typography.small} font-semibold mb-4 flex items-center justify-center gap-2 text-primary`}
          >
            <Sparkles className="w-4 h-4" />
            Curator of Awareness
            <Sparkles className="w-4 h-4" />
          </motion.div>

          <motion.h1
            initial={designSystem.animations.fadeInUp.initial}
            animate={designSystem.animations.fadeInUp.animate}
            transition={{
              ...designSystem.animations.fadeInUp.transition,
              delay: 0.1,
            }}
            className={`${designSystem.typography.h1} mb-6 drop-shadow-2xl text-foreground`}
          >
            Are We Living in a
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Simulation?
            </span>
          </motion.h1>

          <motion.p
            initial={designSystem.animations.fadeInUp.initial}
            animate={designSystem.animations.fadeInUp.animate}
            transition={{
              ...designSystem.animations.fadeInUp.transition,
              delay: 0.2,
            }}
            className={`${designSystem.typography.bodyLarge} mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed`}
          >
            For millennia, philosophers, mystics, and now physicists have questioned the nature of reality.
            From Plato&apos;s Cave to quantum mechanics, from ancient wisdom to cutting-edge science—explore
            the profound possibility that consciousness itself may be the fundamental reality, and our
            perceived world a carefully constructed illusion.
          </motion.p>

          <motion.div
            initial={designSystem.animations.fadeInUp.initial}
            animate={designSystem.animations.fadeInUp.animate}
            transition={{
              ...designSystem.animations.fadeInUp.transition,
              delay: 0.3,
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              asChild
              size="lg"
              variant="default"
            >
              <a href="#the-cave">
                Begin the Journey
                <ArrowDown className="ml-2" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
            >
              <a href="#resources">Explore Resources</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

