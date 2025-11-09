"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { DigitalMatrixBackground, AnimatedGrid } from "@/components/shared/particle-background";

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: "default" | "gradient" | "minimal";
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  variant = "default",
}: HeroProps) {
  const isGradient = variant === "gradient";

  return (
    <section
      className={`${designSystem.spacing.section} relative overflow-hidden ${
        isGradient ? "bg-black" : ""
      } ${isGradient ? "text-white" : ""}`}
    >
      {/* Animated background elements */}
      {isGradient && (
        <>
          <AnimatedGrid />
          <DigitalMatrixBackground />
        </>
      )}
      <div className={`${designSystem.spacing.containerNarrow} relative z-10`}>
        <div className="text-center">
          {subtitle && (
            <motion.div
              {...designSystem.animations.fadeIn}
              className={`${designSystem.typography.small} font-semibold mb-4 flex items-center justify-center gap-2 text-muted-foreground`}
            >
              <Sparkles className="w-4 h-4" />
              {subtitle}
              <Sparkles className="w-4 h-4" />
            </motion.div>
          )}

          <motion.h1
            initial={designSystem.animations.fadeInUp.initial}
            animate={designSystem.animations.fadeInUp.animate}
            transition={{
              ...designSystem.animations.fadeInUp.transition,
              delay: 0.1,
            }}
            className={`${designSystem.typography.h1} mb-6 drop-shadow-2xl ${
              isGradient ? "text-white" : "text-foreground"
            }`}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={designSystem.animations.fadeInUp.initial}
            animate={designSystem.animations.fadeInUp.animate}
            transition={{
              ...designSystem.animations.fadeInUp.transition,
              delay: 0.2,
            }}
            className={`${designSystem.typography.bodyLarge} mb-8 ${
              isGradient
                ? "text-gray-300"
                : "text-muted-foreground"
            } max-w-2xl mx-auto`}
          >
            {description}
          </motion.p>

          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={designSystem.animations.fadeInUp.initial}
              animate={designSystem.animations.fadeInUp.animate}
              transition={{
                ...designSystem.animations.fadeInUp.transition,
                delay: 0.3,
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {primaryCta && (
                <Button
                  asChild
                  size="lg"
                  variant={isGradient ? "secondary" : "default"}
                >
                  <a href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowRight className="ml-2" />
                  </a>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  asChild
                  size="lg"
                  variant={isGradient ? "outline" : "outline"}
                >
                  <a href={secondaryCta.href}>{secondaryCta.label}</a>
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}