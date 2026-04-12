"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { MarqueeStrip } from "@/components/layout/MarqueeStrip";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { IMAGES } from "@/lib/images";
import { OriginMap } from "@/components/shared/OriginMap";

const products = [
  { key: "1", rotate: "rotate-1" },
  { key: "2", rotate: "-rotate-1" },
] as const;

export const BeansPageContent = () => {
  const t = useTranslations("beans_page");

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
            priority
            sizes="100vw"
            quality={85}
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-kibok-ink via-kibok-ink/70 to-kibok-ink/40" />

        <Container className="relative z-10 py-32 text-center">
          <h1 className="font-heading font-bold uppercase leading-[0.85] tracking-tight">
            <span className="block text-[clamp(2.5rem,9vw,6rem)] text-kibok-cream">
              {t("heading_1")}
            </span>
            <span className="block text-[clamp(3rem,11vw,8rem)] text-kibok-gold">
              {t("heading_2")}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg font-body text-base text-kibok-cream/60 md:text-lg">
            {t("subheading")}
          </p>
        </Container>
      </section>

      <MarqueeStrip />

      {/* Product Showcase */}
      <section className="bg-kibok-cream py-24 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            {products.map((product, i) => (
              <ScrollReveal key={product.key} delay={i * 0.15}>
                <div
                  className={`group ${product.rotate} rounded-sm bg-white p-6 shadow-lg transition-transform duration-500 hover:rotate-0 md:p-8`}
                >
                  <div className="aspect-[3/4] flex items-center justify-center rounded-sm bg-kibok-charcoal/10">
                    <span className="font-body text-sm text-kibok-ink/30">
                      Product Image
                    </span>
                  </div>

                  <div className="mt-6">
                    <h2 className="font-display text-2xl font-bold text-kibok-ink md:text-3xl">
                      {t(`product_${product.key}_name`)}
                    </h2>
                    <p className="mt-2 font-body text-sm text-kibok-ink/50">
                      {t(`product_${product.key}_origin`)}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <span className="rounded-full bg-kibok-brown/10 px-3 py-1 font-body text-xs text-kibok-brown">
                        {t(`product_${product.key}_notes`)}
                      </span>
                      <span className="rounded-full bg-kibok-brown/10 px-3 py-1 font-body text-xs text-kibok-brown">
                        {t(`product_${product.key}_roast`)}
                      </span>
                    </div>

                    <div className="mt-4">
                      <span className="inline-block rounded-sm bg-kibok-sage px-3 py-1.5 font-heading text-xs font-bold uppercase tracking-wider text-kibok-cream">
                        {t("available")}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
              <SectionHeading light>{t("origin_heading")}</SectionHeading>
              <ScrollReveal delay={0.1}>
                <p className="mt-6 font-body text-lg leading-relaxed text-kibok-cream/60">
                  {t("origin_body")}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div className="mt-12">
                  <Link
                href="/visit"
                className="inline-block rounded-sm bg-kibok-brown px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-kibok-cream transition-all hover:bg-kibok-brown-light active:scale-95"
              >
                {t("visit_cta")}
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
