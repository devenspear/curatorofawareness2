"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Card } from "@/components/ui/card";
import { MessageSquare, Lightbulb, Paintbrush, Rocket } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      step: "1. Prompts",
      title: "Describe Your Vision",
      description: "Tell the AI what you want to build in plain English. Be specific about features, design, and functionality.",
    },
    {
      icon: Lightbulb,
      step: "2. Prototypes",
      title: "AI Generates Code",
      description: "The AI assistant creates working code based on your description. Review, test, and iterate quickly.",
    },
    {
      icon: Paintbrush,
      step: "3. Polish",
      title: "Refine & Enhance",
      description: "Work with the AI to fix bugs, improve design, and add features. Make it pixel-perfect.",
    },
    {
      icon: Rocket,
      step: "4. Publish",
      title: "Deploy Live",
      description: "Push to GitHub and deploy to the cloud. Share your creation with the world in minutes.",
    },
  ];

  return (
    <section id="how-it-works" className={`${designSystem.spacing.section} bg-muted/30`}>
      <div className={designSystem.spacing.container}>
        <motion.div
          initial={designSystem.animations.fadeIn.initial}
          whileInView={designSystem.animations.fadeIn.animate}
          viewport={{ once: true }}
          transition={designSystem.animations.fadeIn.transition}
          className="text-center mb-12"
        >
          <h2 className={`${designSystem.typography.h2Gradient} mb-6`}>
            How It Works
          </h2>
          <p className={`${designSystem.typography.bodyLarge} text-muted-foreground max-w-3xl mx-auto`}>
            Four simple steps from idea to deployed application
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={designSystem.animations.fadeInUp.initial}
                whileInView={designSystem.animations.fadeInUp.animate}
                viewport={{ once: true }}
                transition={{
                  ...designSystem.animations.fadeInUp.transition,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -5 }}
              >
                <Card className={`p-6 h-full ${designSystem.cards.gradientBorder} ${designSystem.cards.hover} overflow-hidden relative`}>
                  <div className="flex flex-col relative z-10">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/50"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                      {step.step}
                    </div>
                    <h3 className={`${designSystem.typography.h4} mb-3`}>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
