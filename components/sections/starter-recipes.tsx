"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Rocket, BookOpen, ChevronRight } from "lucide-react";

export function StarterRecipes() {
  const recipes = [
    {
      title: "Personal Portfolio Site",
      time: "60 minutes",
      difficulty: "Beginner",
      description: "Create a beautiful personal portfolio with an about section, projects gallery, and contact form.",
      stack: ["Next.js", "Tailwind CSS", "Vercel"],
      steps: [
        "Ask AI to create a Next.js portfolio template",
        "Customize colors, fonts, and content",
        "Add your projects and bio",
        "Deploy to Vercel",
      ],
    },
    {
      title: "Landing Page for a Product",
      time: "90 minutes",
      difficulty: "Beginner",
      description: "Build a marketing landing page with hero section, features, pricing, and call-to-action.",
      stack: ["Astro", "Tailwind CSS", "Netlify"],
      steps: [
        "Generate Astro landing page structure",
        "Add hero with compelling headline",
        "Create features and benefits section",
        "Add pricing cards and CTA",
        "Deploy to Netlify",
      ],
    },
    {
      title: "Task Management App",
      time: "120 minutes",
      difficulty: "Intermediate",
      description: "Build a full-stack todo app with user authentication and data persistence.",
      stack: ["Next.js", "Supabase", "Vercel"],
      steps: [
        "Set up Next.js with Supabase auth",
        "Create task CRUD operations",
        "Add categories and filters",
        "Style with shadcn/ui components",
        "Deploy to Vercel",
      ],
    },
    {
      title: "Blog with CMS",
      time: "90 minutes",
      difficulty: "Intermediate",
      description: "Launch a blog with markdown support and easy content management.",
      stack: ["Next.js", "Contentlayer", "Vercel"],
      steps: [
        "Initialize Next.js with Contentlayer",
        "Create blog post layout",
        "Add markdown rendering",
        "Build archive and category pages",
        "Deploy to Vercel",
      ],
    },
  ];

  return (
    <section id="recipes" className={`${designSystem.spacing.section} bg-muted/30`}>
      <div className={designSystem.spacing.container}>
        <motion.div
          initial={designSystem.animations.fadeIn.initial}
          whileInView={designSystem.animations.fadeIn.animate}
          viewport={{ once: true }}
          transition={designSystem.animations.fadeIn.transition}
          className="text-center mb-12"
        >
          <h2 className={`${designSystem.typography.h2Gradient} mb-6`}>
            Starter Recipes
          </h2>
          <p className={`${designSystem.typography.bodyLarge} text-muted-foreground max-w-3xl mx-auto`}>
            Follow-the-recipe quick wins. Pick a project and build it today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {recipes.map((recipe, index) => (
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
              <Card className={`p-6 h-full ${designSystem.cards.gradientBorder} ${designSystem.cards.hover} overflow-hidden relative`}>
                <div className="flex flex-col h-full relative z-10">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className={`${designSystem.typography.h4} flex-1`}>
                        {recipe.title}
                      </h3>
                      <Rocket className="w-6 h-6 text-primary flex-shrink-0 ml-2" />
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {recipe.time}
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        recipe.difficulty === 'Beginner'
                          ? 'bg-green-500/10 text-green-700 dark:text-green-400'
                          : 'bg-blue-500/10 text-blue-700 dark:text-blue-400'
                      }`}>
                        {recipe.difficulty}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {recipe.description}
                    </p>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {recipe.stack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="flex-1 mb-4">
                    <div className="flex items-center gap-2 text-sm font-semibold mb-3">
                      <BookOpen className="w-4 h-4" />
                      Steps to build:
                    </div>
                    <ol className="space-y-2">
                      {recipe.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="font-semibold text-primary">{stepIndex + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* CTA */}
                  <Button variant="outline" className="w-full group">
                    Start This Recipe
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
