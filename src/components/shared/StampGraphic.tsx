"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface StampGraphicProps {
  src: string;
  alt?: string;
  size?: number;
  rotation?: number;
  opacity?: number;
  blendMode?: "multiply" | "screen";
  className?: string;
  animate?: boolean;
}

export const StampGraphic = ({
  src,
  alt = "",
  size = 120,
  rotation = -12,
  opacity = 0.25,
  blendMode = "multiply",
  className = "",
  animate = true,
}: StampGraphicProps) => {
  const imgElement = (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        mixBlendMode: blendMode,
        filter: "contrast(1.2) saturate(0.8)",
        transform: animate ? undefined : `rotate(${rotation}deg)`,
      }}
      aria-hidden={!alt}
    />
  );

  if (!animate) {
    return (
      <div
        className={`pointer-events-none select-none ${className}`}
        style={{ opacity }}
      >
        {imgElement}
      </div>
    );
  }

  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      initial={{ opacity: 0, scale: 0.7, rotate: rotation - 5 }}
      whileInView={{ opacity, scale: 1, rotate: rotation }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" as const }}
    >
      {imgElement}
    </motion.div>
  );
};
