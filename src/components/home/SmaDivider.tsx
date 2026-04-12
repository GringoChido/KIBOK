"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { IMAGES } from "@/lib/images";

export const SmaDivider = () => {
  const t = useTranslations("sma_divider");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[60vh] overflow-hidden">
      {/* Parallax background — La Parroquia evening */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src={IMAGES.parroquiaEvening}
          alt="La Parroquia de San Miguel Arcángel at golden hour"
          fill
          className="object-cover photo-warm scale-120"
          sizes="100vw"
        />
      </motion.div>

      {/* Warm overlay */}
      <div className="absolute inset-0 z-[1] bg-kibok-brown/30 mix-blend-multiply" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-kibok-ink/60 via-transparent to-kibok-ink/40" />

      {/* Centered text */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center font-heading text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase tracking-[0.15em] text-kibok-cream drop-shadow-xl"
        >
          {t("text")}
        </motion.h2>
      </div>

    </section>
  );
};
