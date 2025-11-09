"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Card } from "@/components/ui/card";
import { Sparkles, Zap, Users } from "lucide-react";

export function WhatIsVibeCoding() {
  const features = [
    {
      icon: Sparkles,
      title: "Natural Language to Code",
      description: "Instruct AI agents to write code using plain English. No complex syntax memorization required.",
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Go from idea to working prototype in minutes, not days. Perfect for makers and entrepreneurs.",
    },
    {
      icon: Users,
      title: "Beginner Friendly",
      description: "Lower the barrier to software creation. If you can describe what you want, you can build it.",
    },
  ];

  return (
    <section id="what-is" className={designSystem.spacing.section}>
      <div className={designSystem.spacing.container}>
        <motion.div
          initial={designSystem.animations.fadeIn.initial}
          whileInView={designSystem.animations.fadeIn.animate}
          viewport={{ once: true }}
          transition={designSystem.animations.fadeIn.transition}
          className="text-center mb-12"
        >
          <h2 className={`${designSystem.typography.h2Gradient} mb-6`}>
            What is Vibe Coding?
          </h2>
          <p className={`${designSystem.typography.bodyLarge} text-muted-foreground max-w-3xl mx-auto mb-4`}>
            Vibe coding is the practice of building software by conversing with AI assistants.
            Instead of writing every line of code yourself, you describe what you want to build
            and let AI agents generate the implementation.
          </p>
          <p className={`${designSystem.typography.body} text-muted-foreground max-w-3xl mx-auto`}>
            It&apos;s a revolutionary approach that makes software development accessible to anyone
            with an idea, regardless of their coding background.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={designSystem.animations.fadeInUp.initial}
                whileInView={designSystem.animations.fadeInUp.animate}
                viewport={{ once: true }}
                transition={{
                  ...designSystem.animations.fadeInUp.transition,
                  delay: index * 0.1,
                }}
                className="h-full"
              >
                <Card className={`p-6 h-full ${designSystem.cards.gradientBorder} ${designSystem.cards.hover} overflow-hidden`}>
                  <div className="flex flex-col items-center text-center relative z-10">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-violet-400 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/50"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className={`${designSystem.typography.h4} mb-3 bg-gradient-to-r from-purple-600 to-violet-500 dark:from-purple-400 dark:to-violet-300 bg-clip-text text-transparent`}>
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-400/5 pointer-events-none" />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
