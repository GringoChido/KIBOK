"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const PressBar = () => {
  const t = useTranslations("press");

  return (
    <section className="bg-kibok-ink py-10 md:py-14">
      <ScrollReveal>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <blockquote>
            <p className="font-display text-xl italic leading-relaxed text-kibok-cream md:text-2xl lg:text-3xl">
              &ldquo;{t("quote")}&rdquo;
            </p>
            <footer className="mt-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-kibok-gold">
              &mdash; {t("attribution")}
            </footer>
          </blockquote>
          <p className="mt-6 font-body text-[11px] tracking-wide text-kibok-cream/40 md:text-xs">
            {t("featured_in")}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};
