"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { IMAGES } from "@/lib/images";
import { StampGraphic } from "@/components/shared/StampGraphic";

export const Hero = () => {
  const t = useTranslations("hero");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-svh overflow-hidden">
      {/* Background photo — latte art heart barista */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, scale: bgScale }}>
        <Image
          src={IMAGES.latteArtHeart}
          alt="Tattooed barista pouring latte art"
          fill
          className="object-cover photo-warm"
          priority
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      {/* Layered overlays */}
      <div className="absolute inset-0 z-[1] bg-kibok-brown/20 mix-blend-multiply" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-kibok-ink/90 via-kibok-ink/20 to-kibok-ink/50" />
      <div className="absolute inset-0 z-[3] bg-gradient-to-r from-kibok-ink/30 via-transparent to-kibok-ink/10" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        style={{ y: textY, opacity }}
      >
        {/* Staggered headline */}
        {[t("headline_1"), t("headline_2"), t("headline_3")].map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, clipPath: "inset(100% 0 0 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: "easeOut" }}
          >
            <span
              className={`block font-heading font-bold uppercase leading-[0.85] tracking-tight drop-shadow-2xl ${
                i === 2
                  ? "text-[clamp(3rem,11vw,8rem)] text-kibok-gold"
                  : "text-[clamp(2.5rem,9vw,6rem)] text-kibok-cream"
              }`}
            >
              {line}
            </span>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-6 h-px w-24 bg-kibok-gold/60"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-4 max-w-md font-body text-sm leading-relaxed text-kibok-cream/60 md:text-base"
        >
          {t("subheadline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-8 flex gap-4"
        >
          <Link
            href="/menu"
            className="inline-block rounded-sm bg-kibok-brown px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-kibok-cream transition-all hover:bg-kibok-brown-light hover:shadow-lg active:scale-95"
          >
            {t("cta_menu")}
          </Link>
          <Link
            href="/visit"
            className="inline-block rounded-sm border-2 border-kibok-cream px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-kibok-cream transition-all hover:bg-kibok-cream hover:text-kibok-ink active:scale-95"
          >
            {t("cta_visit")}
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating stamps */}
      <div className="absolute bottom-32 right-6 z-10 md:bottom-24 md:right-16">
        <StampGraphic src={IMAGES.stampCactus} size={110} rotation={-12} opacity={0.15} blendMode="screen" />
      </div>
      <div className="absolute left-8 top-32 z-10 hidden opacity-10 md:block">
        <StampGraphic src={IMAGES.stampCat} size={80} rotation={15} opacity={0.08} blendMode="screen" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-8 w-5 rounded-full border-2 border-kibok-cream/30">
          <div className="mx-auto mt-1.5 h-2 w-0.5 rounded-full bg-kibok-cream/50" />
        </div>
      </motion.div>
    </section>
  );
};
