"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Code2, Terminal, ExternalLink } from "lucide-react";

export function PlatformLadder() {
  const levels = [
    {
      level: "Level 1",
      icon: MessageCircle,
      title: "Chat-to-App Builders",
      description: "Perfect for absolute beginners. Build full-stack apps through conversation alone.",
      platforms: [
        { name: "Lovable", url: "https://lovable.dev", description: "AI platform for full-stack websites" },
        { name: "Replit Agent", url: "https://replit.com", description: "Code and deploy from your browser" },
      ],
      gradient: "from-blue-500 to-cyan-500",
      bestFor: "Non-coders who want to build and deploy quickly",
    },
    {
      level: "Level 2",
      icon: Code2,
      title: "AI-Native IDEs",
      description: "For those ready to see and edit code. AI assistance built into your code editor.",
      platforms: [
        { name: "Cursor", url: "https://cursor.com", description: "AI-first code editor with Agent mode" },
        { name: "Windsurf", url: "https://codeium.com/windsurf", description: "Agentic flows with Cascade" },
      ],
      gradient: "from-purple-500 to-pink-500",
      bestFor: "Developers who want AI to speed up coding",
    },
    {
      level: "Level 3",
      icon: Terminal,
      title: "Terminal & CLI Workflows",
      description: "Advanced setup for power users. Full control with command-line AI agents.",
      platforms: [
        { name: "Claude Code CLI", url: "https://docs.claude.com", description: "Terminal-first AI agent" },
        { name: "GitHub CLI", url: "https://cli.github.com", description: "Manage repos from terminal" },
        { name: "Vercel CLI", url: "https://vercel.com/cli", description: "Deploy from command line" },
      ],
      gradient: "from-orange-500 to-red-500",
      bestFor: "Experienced developers who live in the terminal",
    },
  ];

  return (
    <section id="platform-ladder" className={designSystem.spacing.section}>
      <div className={designSystem.spacing.container}>
        <motion.div
          initial={designSystem.animations.fadeIn.initial}
          whileInView={designSystem.animations.fadeIn.animate}
          viewport={{ once: true }}
          transition={designSystem.animations.fadeIn.transition}
          className="text-center mb-12"
        >
          <h2 className={`${designSystem.typography.h2Gradient} mb-6`}>
            The Platform Ladder
          </h2>
          <p className={`${designSystem.typography.bodyLarge} text-muted-foreground max-w-3xl mx-auto`}>
            Pick your tier based on your experience level. Start simple, level up when ready.
          </p>
        </motion.div>

        <div className="space-y-8">
          {levels.map((tier, index) => {
            const Icon = tier.icon;
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
                whileHover={{ scale: 1.01 }}
              >
                <Card className={`overflow-hidden ${designSystem.cards.gradientBorder} ${designSystem.cards.hover} relative group`}>
                  <div className="p-8 relative z-10">
                    <div className="flex items-start gap-6">
                      <motion.div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center flex-shrink-0 shadow-2xl`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        style={{ boxShadow: `0 10px 40px -10px currentColor` }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <div className="text-sm font-semibold text-primary mb-2">
                          {tier.level}
                        </div>
                        <h3 className={`${designSystem.typography.h3} mb-3`}>
                          {tier.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {tier.description}
                        </p>

                        <div className="bg-muted/50 rounded-lg p-4 mb-4">
                          <div className="text-sm font-semibold mb-2">Best for:</div>
                          <div className="text-sm text-muted-foreground">{tier.bestFor}</div>
                        </div>

                        <div className="space-y-3">
                          <div className="text-sm font-semibold">Platforms:</div>
                          {tier.platforms.map((platform, pIndex) => (
                            <div key={pIndex} className="flex items-start justify-between gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                              <div className="flex-1">
                                <div className="font-semibold">{platform.name}</div>
                                <div className="text-sm text-muted-foreground">{platform.description}</div>
                              </div>
                              <Button variant="ghost" size="sm" asChild>
                                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none`} />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
