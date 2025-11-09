"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Youtube } from "lucide-react";

interface Video {
  title: string;
  speaker: string;
  description: string;
  youtubeId: string;
  duration?: string;
}

const videoCategories = [
  {
    category: "Simulation Theory & Physics",
    videos: [
      {
        title: "Are We Living in a Simulation?",
        speaker: "Nick Bostrom",
        description: "The philosopher who started it all explains his simulation argument and why we might be living in a computer simulation.",
        youtubeId: "nnl6nY8YKHs",
      },
      {
        title: "The Case Against Reality",
        speaker: "Donald Hoffman",
        description: "Cognitive scientist Donald Hoffman explains why evolution hid reality from our eyes and why we see an interface, not truth.",
        youtubeId: "oYp5XuGYqqY",
      },
      {
        title: "Is the Universe a Computer?",
        speaker: "Max Tegmark",
        description: "MIT physicist explores the mathematical universe hypothesis and whether reality is computational.",
        youtubeId: "G0Wdt8w1y6I",
      },
      {
        title: "The Simulation Hypothesis",
        speaker: "Rizwan Virk",
        description: "MIT computer scientist explains how video game technology, quantum physics, and ancient wisdom point to simulation.",
        youtubeId: "yX1qXApz9DQ",
      },
    ],
  },
  {
    category: "Consciousness & Philosophy",
    videos: [
      {
        title: "The Hard Problem of Consciousness",
        speaker: "David Chalmers",
        description: "Philosopher David Chalmers discusses the hard problem of consciousness and its implications for reality.",
        youtubeId: "uhRhtFFhNzQ",
      },
      {
        title: "Reality+ Virtual Worlds and Philosophy",
        speaker: "David Chalmers",
        description: "Exploring virtual reality, simulation theory, and what it means for the nature of reality.",
        youtubeId: "X8kFk3VqjqE",
      },
      {
        title: "Why Materialism Is Baloney",
        speaker: "Bernardo Kastrup",
        description: "Philosopher argues that consciousness is fundamental and materialism is false.",
        youtubeId: "8rEjMy3t6WY",
      },
      {
        title: "The Idea of the World",
        speaker: "Bernardo Kastrup",
        description: "Exploring idealism—the view that reality is fundamentally mental, not material.",
        youtubeId: "5jF7GKhuV5k",
      },
    ],
  },
  {
    category: "Spiritual & Mystical Perspectives",
    videos: [
      {
        title: "The Power of Now",
        speaker: "Eckhart Tolle",
        description: "Spiritual teacher discusses present-moment awareness and transcending the illusion of time.",
        youtubeId: "7z2l5q4n3jY",
      },
      {
        title: "The Nature of Reality",
        speaker: "Alan Watts",
        description: "Classic lecture on the nature of reality, illusion, and the cosmic game.",
        youtubeId: "rBpaUICxEhk",
      },
      {
        title: "You Are the Universe",
        speaker: "Deepak Chopra",
        description: "Exploring how consciousness shapes reality and our cosmic nature.",
        youtubeId: "X7rmTI-hYyI",
      },
      {
        title: "Biocentrism: Life Creates the Universe",
        speaker: "Robert Lanza",
        description: "Scientist explains biocentrism—that life and consciousness create reality.",
        youtubeId: "Hn8hbt6T1xE",
      },
    ],
  },
  {
    category: "Documentaries & Deep Dives",
    videos: [
      {
        title: "Simulation Theory Explained",
        speaker: "Kurzgesagt",
        description: "Animated explanation of simulation theory, the evidence, and the arguments for and against.",
        youtubeId: "ymF1bp-qrjU",
      },
      {
        title: "The Simulation Hypothesis Documentary",
        speaker: "Various Experts",
        description: "Comprehensive documentary exploring simulation theory from multiple perspectives.",
        youtubeId: "ZqZgJhQqJqY",
      },
      {
        title: "Quantum Physics and Consciousness",
        speaker: "Various Physicists",
        description: "Exploring the connection between quantum mechanics and consciousness.",
        youtubeId: "W9yWv5dqSKk",
      },
    ],
  },
];

export function VideoInterviews() {
  return (
    <section className={`${designSystem.spacing.section} relative bg-gradient-to-b from-background via-accent/10 to-background`}>
      <div className={designSystem.spacing.container}>
        <motion.div
          {...designSystem.animations.fadeInUp}
          className="text-center mb-16"
        >
          <h2 className={`${designSystem.typography.h2} mb-4 text-foreground`}>
            Video Interviews & Lectures
          </h2>
          <p className={`${designSystem.typography.bodyLarge} text-muted-foreground max-w-3xl mx-auto`}>
            Watch leading researchers, philosophers, and spiritual teachers discuss simulation theory, 
            consciousness, and the nature of reality. These videos bring the ideas to life through 
            direct conversations and presentations.
          </p>
        </motion.div>

        <div className="space-y-16">
          {videoCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              {...designSystem.animations.fadeInUp}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className={`${designSystem.typography.h3} text-foreground mb-8`}>
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.videos.map((video) => (
                  <Card
                    key={video.youtubeId}
                    className="bg-card/50 border-border backdrop-blur-sm hover:border-primary/40 transition-all overflow-hidden group"
                  >
                    <div className="relative aspect-video bg-muted">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Youtube className="w-5 h-5 text-red-500" />
                        <CardTitle className="text-foreground text-base">{video.title}</CardTitle>
                      </div>
                      <CardDescription className="text-primary">{video.speaker}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground text-sm leading-relaxed">{video.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

