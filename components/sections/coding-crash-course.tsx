"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Card } from "@/components/ui/card";
import { FileCode, Palette, Zap, FileJson } from "lucide-react";

export function CodingCrashCourse() {
  const concepts = [
    {
      icon: FileCode,
      title: "HTML",
      subtitle: "Structure",
      description: "The skeleton of web pages. Define headings, paragraphs, links, and images.",
      example: "<h1>Hello World</h1>",
      color: "text-orange-500",
    },
    {
      icon: Palette,
      title: "CSS",
      subtitle: "Styling",
      description: "Make it beautiful. Control colors, fonts, spacing, and layouts.",
      example: "color: blue; font-size: 24px;",
      color: "text-blue-500",
    },
    {
      icon: Zap,
      title: "JavaScript",
      subtitle: "Interactivity",
      description: "Add behavior and logic. Handle clicks, fetch data, and create dynamic experiences.",
      example: "button.addEventListener('click', ...)",
      color: "text-yellow-500",
    },
    {
      icon: FileJson,
      title: "Python",
      subtitle: "Backend Logic",
      description: "Server-side code, data processing, and APIs. Great for beginners.",
      example: "def hello(): return 'Hello!'",
      color: "text-green-500",
    },
  ];

  return (
    <section id="crash-course" className={`${designSystem.spacing.section} bg-muted/30`}>
      <div className={designSystem.spacing.container}>
        <motion.div
          initial={designSystem.animations.fadeIn.initial}
          whileInView={designSystem.animations.fadeIn.animate}
          viewport={{ once: true }}
          transition={designSystem.animations.fadeIn.transition}
          className="text-center mb-12"
        >
          <h2 className={`${designSystem.typography.h2Gradient} mb-6`}>
            Beginner Coding Crash Course
          </h2>
          <p className={`${designSystem.typography.bodyLarge} text-muted-foreground max-w-3xl mx-auto`}>
            A 10-minute tour of the fundamental building blocks. You don&apos;t need to master these—just understand what they do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {concepts.map((concept, index) => {
            const Icon = concept.icon;
            return (
              <motion.div
                key={index}
                initial={designSystem.animations.scaleIn.initial}
                whileInView={designSystem.animations.scaleIn.animate}
                viewport={{ once: true }}
                transition={{
                  ...designSystem.animations.scaleIn.transition,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
              >
                <Card className={`p-6 h-full ${designSystem.cards.gradientBorder} ${designSystem.cards.hover} overflow-hidden relative`}>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`w-12 h-12 rounded-lg bg-${concept.color.split('-')[1]}-500/10 flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${concept.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-2">
                        <h3 className={`${designSystem.typography.h4}`}>
                          {concept.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {concept.subtitle}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {concept.description}
                      </p>
                      <div className="bg-muted rounded-md p-3 font-mono text-sm">
                        {concept.example}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={designSystem.animations.fadeIn.initial}
          whileInView={designSystem.animations.fadeIn.animate}
          viewport={{ once: true }}
          transition={{ ...designSystem.animations.fadeIn.transition, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <Card className="p-6 bg-primary/5 border-primary/20">
            <p className="text-muted-foreground">
              <strong>Remember:</strong> With vibe coding, the AI writes most of this for you.
              You just need to know <em>what</em> to ask for, not <em>how</em> to write every line.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
