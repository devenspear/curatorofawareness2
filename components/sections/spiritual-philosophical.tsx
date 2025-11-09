"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Heart, Eye, Infinity } from "lucide-react";

const perspectives = [
  {
    tradition: "Advaita Vedanta",
    teacher: "Adi Shankara, Ramana Maharshi",
    view: "Only consciousness (Brahman) is real. The world is Maya—a dream-like illusion. The goal is to realize one's true nature as pure awareness.",
    icon: Infinity,
  },
  {
    tradition: "Buddhism",
    teacher: "Buddha, Nagarjuna, Thich Nhat Hanh",
    view: "Reality is empty of inherent existence. All phenomena are interdependent and lack independent reality. The world is like a dream, a bubble, a shadow.",
    icon: Eye,
  },
  {
    tradition: "Mystical Christianity",
    teacher: "Meister Eckhart, St. John of the Cross",
    view: "The world is a divine dream. God is the dreamer, and we are characters in the dream, yet also the dreamer itself. The Kingdom of Heaven is within.",
    icon: Heart,
  },
  {
    tradition: "Sufism",
    teacher: "Rumi, Ibn Arabi",
    view: "The world is a reflection of the divine. Reality is a veil over the truth. Through love and awareness, one can see through the illusion to the Beloved.",
    icon: Sparkles,
  },
  {
    tradition: "Kabbalah",
    teacher: "Isaac Luria, Gershom Scholem",
    view: "The material world is the lowest of ten emanations from the divine. Reality is a series of veils, and the goal is to return to the source.",
    icon: Infinity,
  },
  {
    tradition: "Taoism",
    teacher: "Lao Tzu, Chuang Tzu",
    view: "The Tao that can be named is not the eternal Tao. Reality is beyond concepts. The dream of the butterfly questions what is real and what is dream.",
    icon: Eye,
  },
];

export function SpiritualPhilosophical() {
  return (
    <section className={`${designSystem.spacing.section} relative bg-gradient-to-b from-background via-accent/10 to-background`}>
      <div className={designSystem.spacing.container}>
        <motion.div
          {...designSystem.animations.fadeInUp}
          className="text-center mb-16"
        >
          <h2 className={`${designSystem.typography.h2} mb-4 text-foreground`}>
            Spiritual & Mystical Perspectives
          </h2>
          <p className={`${designSystem.typography.bodyLarge} text-muted-foreground max-w-3xl mx-auto`}>
            Across all major spiritual traditions, mystics and sages have described reality as 
            dream-like, illusory, or a divine play. Their direct experiences of consciousness 
            point to the same possibility: that what we call reality is a construct of awareness itself.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {perspectives.map((perspective, index) => {
            const Icon = perspective.icon;
            return (
              <motion.div
                key={perspective.tradition}
                {...designSystem.animations.fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/50 border-border backdrop-blur-sm hover:border-primary/40 transition-all h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-foreground text-lg">{perspective.tradition}</CardTitle>
                    <CardDescription className="text-primary text-sm">{perspective.teacher}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground text-sm leading-relaxed">{perspective.view}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          {...designSystem.animations.fadeInUp}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20 border-primary/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground mb-4">The Common Thread</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Despite different languages, cultures, and epochs, the world&apos;s mystical traditions
                converge on a remarkable insight: <em className="text-primary">reality as we experience it is not ultimate reality.</em>
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                Whether described as Maya, Samsara, the Veil, or the Dream, the message is consistent:
                consciousness is primary, and the material world is secondary—a projection, a simulation,
                or a divine play. The path to truth is not through external observation, but through
                inner awakening to the nature of awareness itself.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

