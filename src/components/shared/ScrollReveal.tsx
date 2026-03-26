"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

const offsets = {
  up: { y: 40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className,
}: ScrollRevealProps) => {
  const offset = offsets[direction];
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
