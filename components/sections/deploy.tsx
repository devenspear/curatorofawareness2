"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Cloud, Globe, ExternalLink } from "lucide-react";

export function Deploy() {
  const workflow = [
    {
      step: "1",
      title: "Push to GitHub",
      description: "Store your code in a GitHub repository. It's free and essential for deployment.",
      icon: Github,
    },
    {
      step: "2",
      title: "Connect to Host",
      description: "Link your GitHub repo to a hosting platform. They'll auto-detect your framework.",
      icon: Cloud,
    },
    {
      step: "3",
      title: "Deploy Live",
      description: "Your site goes live with a URL. Every code push automatically updates production.",
      icon: Globe,
    },
  ];

  const platforms = [
    {
      name: "Vercel",
      description: "Best for Next.js and React apps. Auto-deploys with preview URLs.",
      url: "https://vercel.com",
      bestFor: "Next.js, React, Frontend",
    },
    {
      name: "Netlify",
      description: "Great for static sites and Astro. Includes serverless functions.",
      url: "https://netlify.com",
      bestFor: "Static sites, Astro, React",
    },
    {
      name: "Cloudflare Pages",
      description: "Fast edge deployment with Workers integration.",
      url: "https://pages.cloudflare.com",
      bestFor: "Edge apps, Workers, Static",
    },
    {
      name: "Render",
      description: "Full-stack hosting with databases included.",
      url: "https://render.com",
      bestFor: "Full-stack, Databases, APIs",
    },
    {
      name: "Railway",
      description: "Simple deployment for web apps and databases.",
      url: "https://railway.app",
      bestFor: "Apps, APIs, PostgreSQL",
    },
    {
      name: "Fly.io",
      description: "Deploy apps close to your users with edge computing.",
      url: "https://fly.io",
      bestFor: "Global apps, Docker, APIs",
    },
  ];

  return (
    <section id="deploy" className={designSystem.spacing.section}>
      <div className={designSystem.spacing.container}>
        <motion.div
          initial={designSystem.animations.fadeIn.initial}
          whileInView={designSystem.animations.fadeIn.animate}
          viewport={{ once: true }}
          transition={designSystem.animations.fadeIn.transition}
          className="text-center mb-12"
        >
          <h2 className={`${designSystem.typography.h2Gradient} mb-6`}>
            Deploy What You Build
          </h2>
          <p className={`${designSystem.typography.bodyLarge} text-muted-foreground max-w-3xl mx-auto`}>
            From GitHub to live URL in minutes. Choose the platform that fits your project.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {workflow.map((item, index) => {
            const Icon = item.icon;
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
              >
                <Card className={`p-6 h-full ${designSystem.cards.gradientBorder} ${designSystem.cards.hover} bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden relative`}>
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-sm font-semibold text-primary mb-2">
                      Step {item.step}
                    </div>
                    <h3 className={`${designSystem.typography.h4} mb-3`}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Platform Options */}
        <motion.div
          initial={designSystem.animations.fadeIn.initial}
          whileInView={designSystem.animations.fadeIn.animate}
          viewport={{ once: true }}
          transition={designSystem.animations.fadeIn.transition}
        >
          <h3 className={`${designSystem.typography.h3} text-center mb-8`}>
            Hosting Platforms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={designSystem.animations.scaleIn.initial}
                whileInView={designSystem.animations.scaleIn.animate}
                viewport={{ once: true }}
                transition={{
                  ...designSystem.animations.scaleIn.transition,
                  delay: index * 0.05,
                }}
              >
                <Card className={`p-5 h-full ${designSystem.cards.gradientBorder} ${designSystem.cards.hover} overflow-hidden relative`}>
                  <div className="flex flex-col h-full relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-lg">{platform.name}</h4>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={platform.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 flex-1">
                      {platform.description}
                    </p>
                    <div className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 inline-block self-start">
                      {platform.bestFor}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
