"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function DigitalMatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Digital line system
    class DigitalLine {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      isVertical: boolean;

      constructor(width: number, height: number) {
        this.isVertical = Math.random() > 0.5;
        if (this.isVertical) {
          this.x = Math.random() * width;
          this.y = -Math.random() * height;
          this.length = Math.random() * 100 + 50;
        } else {
          this.x = -Math.random() * width;
          this.y = Math.random() * height;
          this.length = Math.random() * 100 + 50;
        }
        this.speed = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update(width: number, height: number) {
        if (this.isVertical) {
          this.y += this.speed;
          if (this.y > height + this.length) {
            this.y = -this.length;
            this.x = Math.random() * width;
          }
        } else {
          this.x += this.speed;
          if (this.x > width + this.length) {
            this.x = -this.length;
            this.y = Math.random() * height;
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = this.isVertical
          ? ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.length)
          : ctx.createLinearGradient(this.x, this.y, this.x + this.length, this.y);

        gradient.addColorStop(0, `rgba(167, 139, 250, 0)`); // Purple-lavender transparent
        gradient.addColorStop(0.5, `rgba(167, 139, 250, ${this.opacity})`); // Purple-lavender
        gradient.addColorStop(1, `rgba(167, 139, 250, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();

        if (this.isVertical) {
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x, this.y + this.length);
        } else {
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x + this.length, this.y);
        }
        ctx.stroke();
      }
    }

    // Create lines
    const lines: DigitalLine[] = [];
    const lineCount = 30;
    for (let i = 0; i < lineCount; i++) {
      lines.push(new DigitalLine(canvas.width, canvas.height));
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw lines
      lines.forEach((line) => {
        line.update(canvas.width, canvas.height);
        line.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
}

export function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="rgb(167, 139, 250)"
              strokeWidth="0.5"
              opacity="0.1"
            />
          </pattern>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(167, 139, 250)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(167, 139, 250)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(167, 139, 250)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#gridGradient)"
        />
      </svg>

      {/* Floating orbs - purple-lavender theme */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-violet-400/15 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/15 to-purple-400/15 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [-50, 50, -50],
          y: [-30, 30, -30],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
