"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { IMAGES } from "@/lib/images";

const cards: { key: string; large: boolean; image?: string }[] = [
  { key: "music", large: true },
  { key: "art", large: false },
  { key: "community", large: false, image: IMAGES.baristaHandoff },
  { key: "festival", large: false },
];

export const CulturalSection = () => {
  const t = useTranslations("cultural");

  return (
    <section className="relative overflow-hidden bg-kibok-ink py-24 md:py-32">
      {/* Subtle bean pattern background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <Image
          src={IMAGES.beanPattern}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden
        />
      </div>

      <Container className="relative z-10">
        <SectionHeading light>{t("heading")}</SectionHeading>
        <ScrollReveal delay={0.1}>
          <p className="mt-4 max-w-xl font-body text-lg text-kibok-cream/50">
            {t("subheading")}
          </p>
        </ScrollReveal>

        {/* Asymmetric card grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <ScrollReveal
              key={card.key}
              delay={i * 0.1}
              className={card.large ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <div
                className={`group relative overflow-hidden rounded-sm border border-kibok-cream/10 transition-colors hover:border-kibok-cream/20 ${
                  card.large ? "p-8 md:p-10" : "p-6"
                } ${card.image ? "min-h-[240px]" : ""}`}
              >
                {/* Background image for community card */}
                {card.image && (
                  <>
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      className="object-cover photo-warm opacity-20 transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      aria-hidden
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-kibok-ink via-kibok-ink/80 to-transparent" />
                  </>
                )}

                <div className="relative z-10">
                  <h3
                    className={`font-heading font-bold uppercase tracking-tight text-kibok-cream ${
                      card.large ? "text-2xl md:text-3xl" : "text-xl"
                    }`}
                  >
                    {t(`${card.key}_title`)}
                  </h3>
                  <p
                    className={`mt-3 font-body leading-relaxed text-kibok-cream/50 ${
                      card.large ? "max-w-lg text-base" : "text-sm"
                    }`}
                  >
                    {t(`${card.key}_desc`)}
                  </p>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
