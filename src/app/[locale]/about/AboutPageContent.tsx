"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { MarqueeStrip } from "@/components/layout/MarqueeStrip";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PullQuote } from "@/components/shared/PullQuote";
import { SpotifyBlock } from "@/components/shared/SpotifyBlock";
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
            preload
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
            {t("origin_story")}
          </p>
        </Container>
      </section>

      <MarqueeStrip />

      {/* National Geographic Press Quote — hero social proof */}
      <section className="bg-kibok-off-white py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <blockquote className="font-display text-2xl font-bold leading-snug text-kibok-ink md:text-3xl lg:text-4xl">
                &ldquo;{t("press_quote")}&rdquo;
              </blockquote>
              <p className="mt-4 font-heading text-sm font-bold uppercase tracking-wider text-kibok-brown">
                — {t("press_attribution")}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* The Space — NatGeo description */}
      <section className="relative overflow-hidden bg-kibok-ink py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <ScrollReveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={IMAGES.craftCopperPourover}
                  alt="Pour-over coffee being brewed with a copper gooseneck kettle"
                  fill
                  className="object-cover photo-warm"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <div>
              <SectionHeading light>{t("space_heading")}</SectionHeading>
              <ScrollReveal delay={0.1}>
                <p className="mt-6 font-body text-lg leading-relaxed text-kibok-cream/70 italic">
                  &ldquo;{t("natgeo_atmosphere")}&rdquo;
                </p>
                <p className="mt-2 font-heading text-xs font-bold uppercase tracking-wider text-kibok-gold/60">
                  — {t("press_attribution")}
                </p>
                <p className="mt-6 font-body text-lg leading-relaxed text-kibok-cream/70">
                  {t("space_body_2")}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* The Hemingway — signature drink spotlight */}
      <section className="bg-kibok-cream py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <ScrollReveal>
                <SectionHeading>{t("hemingway_heading")}</SectionHeading>
                <p className="mt-6 font-body text-lg leading-relaxed text-kibok-warm-gray">
                  {t("hemingway_body")}
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src={IMAGES.extraBlackCup}
                  alt="Beautifully crafted latte art in black ceramic cup"
                  fill
                  className="object-cover photo-warm"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Beans teaser — short, links to beans page */}
      <section className="bg-kibok-off-white py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <ScrollReveal direction="left">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src={IMAGES.beansMacroCloseup}
                  alt="Extreme close-up of a perfectly roasted coffee bean"
                  fill
                  className="object-cover photo-warm"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <div>
              <ScrollReveal>
                <SectionHeading>{t("beans_heading")}</SectionHeading>
                <p className="mt-4 font-body text-lg text-kibok-warm-gray">
                  {t("beans_teaser")}
                </p>
                <Link
                  href="/beans"
                  className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-kibok-brown transition-colors hover:text-kibok-terracotta"
                >
                  {t("beans_cta")}
                  <span className="text-lg">&rarr;</span>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* The Craft — photo grid with real Ki'bok photos */}
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
                src: IMAGES.beansCuppedHands,
                alt: "Selecting the perfect roasted beans by hand",
              },
              {
                src: IMAGES.craftLattePour,
                alt: "Barista pouring steamed milk into espresso — latte art in progress",
              },
              {
                src: IMAGES.craftCopperPourover,
                alt: "Copper gooseneck kettle brewing V60 pour-over coffee",
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

      <section className="bg-kibok-cream py-8">
        <Container>
          <PullQuote>{t("pull_quote")}</PullQuote>
        </Container>
      </section>

      {/* Spotify Block */}
      <SpotifyBlock />
    </>
  );
};
