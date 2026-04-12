"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { MarqueeStrip } from "@/components/layout/MarqueeStrip";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PullQuote } from "@/components/shared/PullQuote";
import { IMAGES } from "@/lib/images";

export const AboutPageContent = () => {
  const t = useTranslations("about_page");

  return (
    <>
      {/* Hero with espresso steam photo */}
      <section className="grain-overlay relative overflow-hidden bg-kibok-ink pb-20 pt-36">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.espressoSteam}
            alt=""
            fill
            className="object-cover photo-warm opacity-30"
            sizes="100vw"
            priority
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-kibok-ink/60 via-kibok-ink/40 to-kibok-ink" />
        </div>
        <Container className="relative z-10">
          <h1 className="font-display text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.85] tracking-tight text-kibok-cream">
            {t("heading_1")}
            <br />
            <span className="text-kibok-terracotta">
              {t("heading_2")}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-kibok-cream/60">
            {t("intro")}
          </p>
        </Container>
      </section>

      <MarqueeStrip />

      {/* The Beans — photo left, text right with overlap */}
      <section className="bg-kibok-off-white py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src={IMAGES.beansBag}
                    alt="Hands holding open bag of roasted coffee beans"
                    fill
                    className="object-cover photo-warm"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </ScrollReveal>
            <div>
              <SectionHeading>{t("beans_heading")}</SectionHeading>
              <ScrollReveal delay={0.2}>
                <p className="mt-6 font-body text-lg leading-relaxed text-kibok-warm-gray">
                  {t("beans_body_1")}
                </p>
                <p className="mt-4 font-body text-lg leading-relaxed text-kibok-warm-gray">
                  {t("beans_body_2")}
                </p>
              </ScrollReveal>
            </div>
          </div>

          <PullQuote>{t("pull_quote")}</PullQuote>
        </Container>
      </section>

      {/* The Space — SMA photos */}
      <section className="relative overflow-hidden bg-kibok-ink py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <ScrollReveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={IMAGES.smaStreetSunset}
                  alt="San Miguel de Allende cobblestone street at sunset"
                  fill
                  className="object-cover photo-warm"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <div>
              <SectionHeading light>{t("space_heading")}</SectionHeading>
              <ScrollReveal delay={0.1}>
                <p className="mt-6 font-body text-lg leading-relaxed text-kibok-cream/70">
                  {t("space_body_1")}
                </p>
                <p className="mt-4 font-body text-lg leading-relaxed text-kibok-cream/70">
                  {t("space_body_2")}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* The Craft — photo grid */}
      <section className="bg-kibok-cream py-24">
        <Container>
          <SectionHeading>{t("craft_heading")}</SectionHeading>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-kibok-warm-gray">
              {t("craft_body")}
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: IMAGES.latteArtHeart,
                alt: "Barista pouring latte art",
              },
              {
                src: IMAGES.espressoShot,
                alt: "Espresso shot with golden crema",
              },
              {
                src: IMAGES.coffeeTrio,
                alt: "Three beautiful coffees on dark wood",
              },
            ].map((photo, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover photo-warm transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
