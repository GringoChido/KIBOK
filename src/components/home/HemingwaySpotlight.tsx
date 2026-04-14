"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { IMAGES } from "@/lib/images";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const HemingwaySpotlight = () => {
  const t = useTranslations("hemingway_spotlight");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section ref={ref} className="grain-overlay relative overflow-hidden bg-kibok-ink py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm md:aspect-[3/4]">
            <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
              <Image
                src={IMAGES.coffeeTrio}
                alt="Three craft coffees with latte art on dark wood bar at Ki'bok"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          {/* Text */}
          <ScrollReveal direction="right">
            <div>
              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-kibok-gold md:text-xs">
                {t("label")}
              </p>
              <div className="mt-3 h-px w-12 bg-kibok-gold/40" />
              <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[0.9] tracking-tight text-kibok-cream">
                {t("heading")}
              </h2>
              <p className="mt-6 max-w-md font-body text-base leading-relaxed text-kibok-cream/70 md:text-lg">
                {t("body")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
