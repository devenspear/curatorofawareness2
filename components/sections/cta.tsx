"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CtaProps {
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: "default" | "gradient" | "card";
}

export function Cta({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "default",
}: CtaProps) {
  const isGradient = variant === "gradient";
  const isCard = variant === "card";

  const content = (
    <div className="text-center">
      <motion.h2
        initial={designSystem.animations.fadeInUp.initial}
        whileInView={designSystem.animations.fadeInUp.animate}
        viewport={{ once: true }}
        transition={designSystem.animations.fadeInUp.transition}
        className={`${isGradient ? designSystem.typography.h2Gradient : designSystem.typography.h2} mb-4 ${
          !isGradient ? "text-foreground" : ""
        }`}
      >
        {title}
      </motion.h2>

      <motion.p
        initial={designSystem.animations.fadeInUp.initial}
        whileInView={designSystem.animations.fadeInUp.animate}
        viewport={{ once: true }}
        transition={{
          ...designSystem.animations.fadeInUp.transition,
          delay: 0.1,
        }}
        className={`${designSystem.typography.bodyLarge} mb-8 ${
          isGradient ? "text-gray-300" : "text-muted-foreground"
        } max-w-2xl mx-auto`}
      >
        {description}
      </motion.p>

      <motion.div
        initial={designSystem.animations.fadeInUp.initial}
        whileInView={designSystem.animations.fadeInUp.animate}
        viewport={{ once: true }}
        transition={{
          ...designSystem.animations.fadeInUp.transition,
          delay: 0.2,
        }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
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
        {secondaryCta && (
          <Button
            asChild
            size="lg"
            variant="outline"
          >
            <a href={secondaryCta.href}>{secondaryCta.label}</a>
          </Button>
        )}
      </motion.div>
    </div>
  );

  if (isCard) {
    return (
      <section className={designSystem.spacing.section}>
        <div className={designSystem.spacing.container}>
          <Card className="border-2">
            <CardContent className="py-16">{content}</CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`${designSystem.spacing.section} ${
        isGradient ? "bg-black" : ""
      }`}
    >
      <div className={designSystem.spacing.containerNarrow}>{content}</div>
    </section>
  );
}