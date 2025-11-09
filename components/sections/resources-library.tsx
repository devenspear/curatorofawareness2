"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Book, Video, FileText, Globe } from "lucide-react";

const resources = [
  {
    category: "Academic Papers",
    icon: FileText,
    items: [
      {
        title: "Are You Living in a Computer Simulation?",
        author: "Nick Bostrom",
        type: "Philosophical Quarterly, 2003",
        url: "https://www.simulation-argument.com/simulation.html",
        description: "The foundational paper that launched modern simulation theory discourse.",
      },
      {
        title: "The Interface Theory of Perception",
        author: "Donald Hoffman",
        type: "Scientific American, 2015",
        url: "https://www.scientificamerican.com/article/do-we-see-reality-as-it-is/",
        description: "Why evolution shaped us to see fitness, not reality.",
      },
      {
        title: "The Mathematical Universe",
        author: "Max Tegmark",
        type: "Foundations of Physics, 2008",
        url: "https://arxiv.org/abs/0704.0646",
        description: "The universe is a mathematical structure.",
      },
    ],
  },
  {
    category: "Websites & Portals",
    icon: Globe,
    items: [
      {
        title: "The Simulation Argument",
        author: "Nick Bostrom",
        type: "Official Website",
        url: "https://www.simulation-argument.com/",
        description: "Comprehensive resource on the simulation argument with papers, FAQs, and discussions.",
      },
      {
        title: "Consciousness Research",
        author: "Various",
        type: "Academic Portal",
        url: "https://www.consciousness.arizona.edu/",
        description: "Center for Consciousness Studies at the University of Arizona.",
      },
      {
        title: "The Big TOE",
        author: "Tom Campbell",
        type: "Official Website",
        url: "https://www.my-big-toe.com/",
        description: "Tom Campbell's website exploring consciousness and reality as a virtual system.",
      },
    ],
  },
  {
    category: "Podcasts & Audio",
    icon: Video,
    items: [
      {
        title: "Lex Fridman Podcast",
        author: "Various Guests",
        type: "Podcast",
        url: "https://lexfridman.com/podcast/",
        description: "Deep conversations with researchers on simulation theory, consciousness, and AI.",
      },
      {
        title: "The Joe Rogan Experience",
        author: "Various Guests",
        type: "Podcast",
        url: "https://www.joerogan.com/",
        description: "Long-form interviews with thinkers exploring reality, consciousness, and simulation theory.",
      },
      {
        title: "Making Sense with Sam Harris",
        author: "Sam Harris",
        type: "Podcast",
        url: "https://www.samharris.org/podcasts",
        description: "Discussions on consciousness, meditation, and the nature of reality.",
      },
    ],
  },
  {
    category: "Online Courses",
    icon: Book,
    items: [
      {
        title: "Philosophy of Mind",
        author: "Various Universities",
        type: "Coursera/edX",
        url: "https://www.coursera.org/",
        description: "Online courses exploring consciousness, perception, and the philosophy of mind.",
      },
      {
        title: "Quantum Mechanics",
        author: "Various Universities",
        type: "Coursera/edX",
        url: "https://www.edx.org/",
        description: "Learn the physics that suggests reality might be fundamentally probabilistic.",
      },
    ],
  },
];

export function ResourcesLibrary() {
  return (
    <section className={`${designSystem.spacing.section} relative bg-gradient-to-b from-background via-accent/10 to-background`}>
      <div className={designSystem.spacing.container}>
        <motion.div
          {...designSystem.animations.fadeInUp}
          className="text-center mb-16"
        >
          <h2 className={`${designSystem.typography.h2} mb-4 text-foreground`}>
            Resources Library
          </h2>
          <p className={`${designSystem.typography.bodyLarge} text-muted-foreground max-w-3xl mx-auto`}>
            Dive deeper into simulation theory, consciousness, and the nature of reality with these 
            carefully curated resources. From academic papers to podcasts, expand your understanding 
            through multiple mediums.
          </p>
        </motion.div>

        <div className="space-y-12">
          {resources.map((resource, resourceIndex) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.category}
                {...designSystem.animations.fadeInUp}
                transition={{ delay: resourceIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className={`${designSystem.typography.h3} text-foreground`}>
                    {resource.category}
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resource.items.map((item) => (
                    <Card
                      key={item.title}
                      className="bg-card/50 border-border backdrop-blur-sm hover:border-primary/40 transition-all"
                    >
                      <CardHeader>
                        <CardTitle className="text-foreground text-lg">{item.title}</CardTitle>
                        <CardDescription className="text-primary">{item.author}</CardDescription>
                        <CardDescription className="text-muted-foreground text-xs">{item.type}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full"
                        >
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            Visit Resource
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

