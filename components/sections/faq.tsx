"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "Do I need to know how to code already?",
      answer: "No! That's the whole point. Vibe coding lets you build software by describing what you want in plain English. The AI handles the code. You just need to understand what you're asking for.",
    },
    {
      question: "Is this real development or just toy projects?",
      answer: "It's real. Major companies are using AI-assisted development for production apps. You'll learn actual frameworks (Next.js, React) and real deployment workflows. The difference is you'll build faster.",
    },
    {
      question: "Which platform should I start with?",
      answer: "Complete beginners: start with Lovable or Replit Agent (Level 1). If you have some coding experience: try Cursor or Windsurf (Level 2). Comfortable with terminals: Claude Code CLI (Level 3).",
    },
    {
      question: "How much does it cost?",
      answer: "Many tools have free tiers. Lovable and Replit offer free plans. Cursor has a free tier. Deployment on Vercel/Netlify is free for personal projects. You can start learning for $0.",
    },
    {
      question: "Will AI replace developers?",
      answer: "No. AI is a powerful tool, but you still need to understand what you're building, make architectural decisions, and guide the AI. Think of it as a super-smart assistant, not a replacement.",
    },
    {
      question: "What if the AI makes mistakes?",
      answer: "It will. That's part of learning. You'll learn to spot issues, give better prompts, and iterate. The AI is a tool—you're still the architect and decision-maker.",
    },
    {
      question: "Can I build a real business with this?",
      answer: "Absolutely. Many startups are built entirely with AI-assisted development. The key is understanding your users, solving real problems, and iterating based on feedback—skills that have nothing to do with hand-coding.",
    },
    {
      question: "How long until I can build something useful?",
      answer: "You can have a working prototype deployed in 1-2 hours. Getting good at prompting and understanding how to guide the AI takes a few weeks of practice. Building production-ready apps takes longer, but you'll be shipping real projects much faster than traditional learning.",
    },
  ];

  const glossary = [
    { term: "IDE", definition: "Integrated Development Environment - A fancy text editor for code (like VS Code, Cursor)" },
    { term: "CLI", definition: "Command Line Interface - Text-based way to control your computer via terminal" },
    { term: "Deploy", definition: "Making your app live on the internet so others can access it" },
    { term: "Git", definition: "Version control system - tracks changes to your code over time" },
    { term: "GitHub", definition: "Website that hosts your code repositories and enables collaboration" },
    { term: "Framework", definition: "Pre-built tools that make building apps easier (e.g., Next.js, React)" },
    { term: "API", definition: "Application Programming Interface - lets different software talk to each other" },
    { term: "Frontend", definition: "The visual part of a website that users see and interact with" },
    { term: "Backend", definition: "Server-side code that handles data, logic, and database operations" },
  ];

  return (
    <section id="faq" className={`${designSystem.spacing.section} bg-muted/30`}>
      <div className={designSystem.spacing.container}>
        <motion.div
          initial={designSystem.animations.fadeIn.initial}
          whileInView={designSystem.animations.fadeIn.animate}
          viewport={{ once: true }}
          transition={designSystem.animations.fadeIn.transition}
          className="text-center mb-12"
        >
          <h2 className={`${designSystem.typography.h2Gradient} mb-6`}>
            FAQ + Glossary
          </h2>
          <p className={`${designSystem.typography.bodyLarge} text-muted-foreground max-w-3xl mx-auto`}>
            Remove the fear, name the parts
          </p>
        </motion.div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className={`${designSystem.typography.h3} text-center mb-8`}>
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={designSystem.animations.fadeInUp.initial}
                whileInView={designSystem.animations.fadeInUp.animate}
                viewport={{ once: true }}
                transition={{
                  ...designSystem.animations.fadeInUp.transition,
                  delay: index * 0.05,
                }}
              >
                <Card className={`p-6 h-full ${designSystem.cards.gradientBorder} ${designSystem.cards.hover} overflow-hidden relative`}>
                  <div className="flex items-start gap-3 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <HelpCircle className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-3">
                        {faq.question}
                      </h4>
                      <p className="text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Glossary Section */}
        <motion.div
          initial={designSystem.animations.fadeIn.initial}
          whileInView={designSystem.animations.fadeIn.animate}
          viewport={{ once: true }}
          transition={designSystem.animations.fadeIn.transition}
        >
          <h3 className={`${designSystem.typography.h3} text-center mb-8`}>
            Quick Glossary
          </h3>
          <Card className={`p-8 ${designSystem.cards.gradientBorder} ${designSystem.cards.hover} overflow-hidden relative`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {glossary.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-bold text-primary">{item.term}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.definition}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
