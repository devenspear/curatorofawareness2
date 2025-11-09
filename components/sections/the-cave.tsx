"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Eye, Lightbulb } from "lucide-react";

export function TheCave() {
  return (
    <section className={`${designSystem.spacing.section} relative bg-gradient-to-b from-background via-accent/10 to-background`}>
      <div className={designSystem.spacing.container}>
        <motion.div
          {...designSystem.animations.fadeInUp}
          className="text-center mb-16"
        >
          <h2 className={`${designSystem.typography.h2} mb-4 text-foreground`}>
            The Cave and The Dream
          </h2>
          <p className={`${designSystem.typography.bodyLarge} text-muted-foreground max-w-3xl mx-auto`}>
            Two and a half millennia ago, Plato presented an allegory that would echo through the ages, 
            questioning everything we believe about reality, perception, and truth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            {...designSystem.animations.fadeIn}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-card/50 border-border backdrop-blur-sm hover:border-primary/40 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">The Prisoners</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Chained since birth, facing only the cave wall, they see only shadows cast by a fire behind them.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  To these prisoners, the shadows are reality. They name them, discuss them,
                  and believe them to be the true forms of things. Their entire world is a projection.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            {...designSystem.animations.fadeIn}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-card/50 border-border backdrop-blur-sm hover:border-primary/40 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">The Awakening</CardTitle>
                <CardDescription className="text-muted-foreground">
                  One prisoner breaks free, turns toward the fire, and begins the painful journey toward the cave&apos;s exit.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  The light hurts. The truth is blinding. But gradually, the freed prisoner sees the fire,
                  then the objects casting shadows, and finally—the sun itself, the source of all light.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            {...designSystem.animations.fadeIn}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-card/50 border-border backdrop-blur-sm hover:border-primary/40 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">The Return</CardTitle>
                <CardDescription className="text-muted-foreground">
                  The enlightened one returns to the cave, but the prisoners reject their testimony.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  Those still chained cannot comprehend the truth. They prefer their familiar shadows
                  to the blinding light of reality. The messenger is met with disbelief, even hostility.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          {...designSystem.animations.fadeInUp}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20 border-primary/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground mb-4">The Modern Parallel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Today, simulation theory asks: What if we are the prisoners? What if our entire reality—the
                physical world, time, space, matter itself—is a sophisticated simulation? What if consciousness
                is the fire, and our perceived reality the shadows on the wall?
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                From quantum mechanics revealing that observation affects reality, to the mathematical
                precision of our universe&apos;s constants, to the possibility that advanced civilizations
                could create ancestor simulations—the question persists: <em className="text-primary">Are we living in a dream?</em>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

