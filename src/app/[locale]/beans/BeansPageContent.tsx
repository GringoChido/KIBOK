"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { MarqueeStrip } from "@/components/layout/MarqueeStrip";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PullQuote } from "@/components/shared/PullQuote";
import { IMAGES } from "@/lib/images";
import { OriginMap } from "@/components/shared/OriginMap";

export const BeansPageContent = () => {
  const t = useTranslations();

  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-kibok-ink">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.beansBag}
            alt=""
            fill
            className="object-cover photo-warm"
            preload
            sizes="100vw"
            quality={85}
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-kibok-ink via-kibok-ink/70 to-kibok-ink/40" />

        <Container className="relative z-10 py-32 text-center">
          <h1 className="font-heading font-bold uppercase leading-[0.85] tracking-tight">
            <span className="block text-[clamp(2.5rem,9vw,6rem)] text-kibok-cream">
              {t("beans_page.heading_1")}
            </span>
            <span className="block text-[clamp(3rem,11vw,8rem)] text-kibok-gold">
              {t("beans_page.heading_2")}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg font-body text-base text-kibok-cream/60 md:text-lg">
            {t("beans_page.subheading")}
          </p>
        </Container>
      </section>

      <MarqueeStrip />

      {/* The Beans Story — moved from About page */}
      <section className="bg-kibok-off-white py-24 md:py-32">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src={IMAGES.extraIcedCoffee}
                  alt="Ki'bok iced coffee with beans, cinnamon, and star anise"
                  fill
                  className="object-cover photo-warm"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <div>
              <SectionHeading>{t("about_page.beans_heading")}</SectionHeading>
              <ScrollReveal delay={0.2}>
                <p className="mt-6 font-body text-lg leading-relaxed text-kibok-warm-gray">
                  {t("about_page.beans_body_1")}
                </p>
                <p className="mt-4 font-body text-lg leading-relaxed text-kibok-warm-gray">
                  {t("about_page.beans_body_2")}
                </p>
              </ScrollReveal>
            </div>
          </div>
          <PullQuote>{t("about_page.pull_quote")}</PullQuote>
        </Container>
      </section>

      {/* Product 1: Ki'bok Signature Blend 2026 */}
      <section className="bg-kibok-cream py-24 md:py-32">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <ScrollReveal direction="left">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-lg">
                <Image
                  src={IMAGES.beanLabel2026}
                  alt="Ki'bok Signature Blend 2026 coffee bag label"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <div>
              <ScrollReveal delay={0.1}>
                <h2 className="font-display text-3xl font-bold text-kibok-ink md:text-4xl">
                  {t("beans_page.product_1_name")}
                </h2>
                <p className="mt-4 font-body text-lg leading-relaxed text-kibok-ink/60">
                  {t("beans_page.product_1_origin")}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {t("beans_page.product_1_notes").split(", ").map((note) => (
                    <span
                      key={note}
                      className="rounded-full bg-kibok-brown/10 px-4 py-1.5 font-body text-sm text-kibok-brown"
                    >
                      {note}
                    </span>
                  ))}
                  <span className="rounded-full bg-kibok-brown/10 px-4 py-1.5 font-body text-sm text-kibok-brown">
                    {t("beans_page.product_1_roast")}
                  </span>
                </div>
                <div className="mt-6">
                  <span className="inline-block rounded-sm bg-kibok-sage px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-kibok-cream">
                    {t("beans_page.available")}
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Product 2: Café Explosión — reversed layout */}
      <section className="bg-kibok-off-white py-24 md:py-32">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="order-2 md:order-1">
              <ScrollReveal delay={0.1}>
                <h2 className="font-display text-3xl font-bold text-kibok-ink md:text-4xl">
                  {t("beans_page.product_2_name")}
                </h2>
                <p className="mt-4 font-body text-lg leading-relaxed text-kibok-ink/60">
                  {t("beans_page.product_2_origin")}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {t("beans_page.product_2_notes").split(", ").map((note) => (
                    <span
                      key={note}
                      className="rounded-full bg-kibok-brown/10 px-4 py-1.5 font-body text-sm text-kibok-brown"
                    >
                      {note}
                    </span>
                  ))}
                  <span className="rounded-full bg-kibok-brown/10 px-4 py-1.5 font-body text-sm text-kibok-brown">
                    {t("beans_page.product_2_roast")}
                  </span>
                </div>
                <div className="mt-6">
                  <span className="inline-block rounded-sm bg-kibok-sage px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-kibok-cream">
                    {t("beans_page.available")}
                  </span>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right" className="order-1 md:order-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-lg">
                <Image
                  src={IMAGES.beanLabelExplosion}
                  alt="Café Explosión coffee bag label"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Origin Story */}
      <section className="relative overflow-hidden bg-kibok-ink py-24 md:py-32">
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
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <SectionHeading light>{t("beans_page.origin_heading")}</SectionHeading>
              <ScrollReveal delay={0.1}>
                <p className="mt-6 font-body text-lg leading-relaxed text-kibok-cream/60">
                  {t("beans_page.origin_body")}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div className="mt-12">
                  <Link
                    href="/visit"
                    className="inline-block rounded-sm bg-kibok-brown px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-kibok-cream transition-all hover:bg-kibok-brown-light active:scale-95"
                  >
                    {t("beans_page.visit_cta")}
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3} direction="right">
              <OriginMap variant="dark" />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <MarqueeStrip reversed />
    </main>
  );
};
