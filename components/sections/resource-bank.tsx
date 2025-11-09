"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, BookOpen, FileText, ExternalLink, BookMarked } from "lucide-react";

export function ResourceBank() {
  const resources = [
    {
      category: "Video Courses",
      icon: Video,
      items: [
        {
          title: "What is Vibe Coding?",
          provider: "Replit + DeepLearning.AI",
          url: "https://blog.replit.com/what-is-vibe-coding",
          description: "Short course on instructing AI agents to write code",
        },
        {
          title: "Build with Cursor",
          provider: "Cursor Official",
          url: "https://cursor.com/features",
          description: "Learn AI-powered code editing and Agent tasks",
        },
      ],
    },
    {
      category: "Documentation",
      icon: BookOpen,
      items: [
        {
          title: "Claude Code Documentation",
          provider: "Anthropic",
          url: "https://docs.claude.com/en/docs/claude-code/overview",
          description: "Terminal-first AI agent with headless mode",
        },
        {
          title: "Windsurf Documentation",
          provider: "Codeium",
          url: "https://docs.windsurf.com",
          description: "Agentic flows, Cascade, and Memories/Rules",
        },
        {
          title: "Vercel Deployment Docs",
          provider: "Vercel",
          url: "https://vercel.com/docs/git/vercel-for-github",
          description: "Auto-deploy with preview URLs from GitHub",
        },
        {
          title: "Netlify Deploy Guides",
          provider: "Netlify",
          url: "https://docs.netlify.com/deploy/create-deploys",
          description: "Continuous deployment and deploy previews",
        },
      ],
    },
    {
      category: "Prompting Guides",
      icon: FileText,
      items: [
        {
          title: "OpenAI Prompt Engineering",
          provider: "OpenAI",
          url: "https://platform.openai.com/docs/guides/prompt-engineering",
          description: "Best practices for writing effective prompts",
        },
        {
          title: "Anthropic Prompting Guide",
          provider: "Anthropic",
          url: "https://docs.anthropic.com/claude/docs/prompt-engineering",
          description: "Claude-specific prompting techniques",
        },
        {
          title: "Google Gemini Prompts",
          provider: "Google",
          url: "https://ai.google.dev/gemini-api/docs/prompting-intro",
          description: "Model-agnostic prompt patterns",
        },
      ],
    },
    {
      category: "Starter Templates",
      icon: BookMarked,
      items: [
        {
          title: "Next.js Starters",
          provider: "Vercel",
          url: "https://vercel.com/templates/next.js",
          description: "Pre-built Next.js templates for various use cases",
        },
        {
          title: "Astro Themes",
          provider: "Astro",
          url: "https://astro.build/themes",
          description: "Beautiful Astro templates and themes",
        },
        {
          title: "Lovable Templates",
          provider: "Lovable",
          url: "https://lovable.dev",
          description: "AI-generated full-stack website templates",
        },
      ],
    },
  ];

  return (
    <section id="resources" className={designSystem.spacing.section}>
      <div className={designSystem.spacing.container}>
        <motion.div
          initial={designSystem.animations.fadeIn.initial}
          whileInView={designSystem.animations.fadeIn.animate}
          viewport={{ once: true }}
          transition={designSystem.animations.fadeIn.transition}
          className="text-center mb-12"
        >
          <h2 className={`${designSystem.typography.h2Gradient} mb-6`}>
            Resource Bank
          </h2>
          <p className={`${designSystem.typography.bodyLarge} text-muted-foreground max-w-3xl mx-auto`}>
            Curated videos, docs, and guides to help you master vibe coding
          </p>
        </motion.div>

        <div className="space-y-8">
          {resources.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={designSystem.animations.fadeInUp.initial}
                whileInView={designSystem.animations.fadeInUp.animate}
                viewport={{ once: true }}
                transition={{
                  ...designSystem.animations.fadeInUp.transition,
                  delay: categoryIndex * 0.1,
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${
                      categoryIndex === 0 ? 'from-red-500 to-pink-500' :
                      categoryIndex === 1 ? 'from-blue-500 to-purple-500' :
                      categoryIndex === 2 ? 'from-green-500 to-emerald-500' :
                      'from-orange-500 to-yellow-500'
                    } shadow-lg`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CategoryIcon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className={`${designSystem.typography.h3}`}>
                    {category.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      className={`p-5 ${designSystem.cards.gradientBorder} ${designSystem.cards.hover} overflow-hidden relative`}
                    >
                      <div className="flex flex-col h-full relative z-10">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="font-bold text-lg mb-1">
                              {item.title}
                            </h4>
                            <div className="text-sm text-muted-foreground mb-3">
                              {item.provider}
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" asChild className="flex-shrink-0">
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground flex-1">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={designSystem.animations.fadeIn.initial}
          whileInView={designSystem.animations.fadeIn.animate}
          viewport={{ once: true }}
          transition={{ ...designSystem.animations.fadeIn.transition, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
            <p className="text-muted-foreground mb-4">
              Want to dive deeper? All these resources are free and beginner-friendly.
            </p>
            <Button size="lg" variant="outline">
              <BookOpen className="w-4 h-4 mr-2" />
              Explore All Resources
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
