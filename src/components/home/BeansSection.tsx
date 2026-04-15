"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { IMAGES } from "@/lib/images";

const products = [
  { key: "1", rotate: "rotate-1", image: IMAGES.beanLabel2026, alt: "Ki'bok Signature Blend 2026 coffee bag label" },
  { key: "2", rotate: "-rotate-1", image: IMAGES.beanLabelExplosion, alt: "Café Explosión coffee bag label" },
] as const;

export const BeansSection = () => {
  const t = useTranslations();

  return (
    <section className="relative overflow-hidden bg-kibok-cream py-24 md:py-32">
      <div className="paper-overlay absolute inset-0" />
      <div className="absolute inset-0 z-[1] opacity-[0.04]">
        <Image
          src={IMAGES.shootPourOver}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden
        />
      </div>

      <Container className="relative z-10">
        <SectionHeading>{t("beans_section.heading")}</SectionHeading>
        <ScrollReveal delay={0.1}>
          <p className="mt-4 max-w-xl font-body text-lg text-kibok-ink/60">
            {t("beans_section.subheading")}
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {products.map((product, i) => (
            <ScrollReveal key={product.key} delay={i * 0.15}>
              <div
                className={`group ${product.rotate} rounded-sm bg-white p-6 shadow-lg transition-transform duration-500 hover:rotate-0`}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>

                <div className="mt-6">
                  <h3 className="font-display text-2xl font-bold text-kibok-ink">
                    {t(`beans_page.product_${product.key}_name`)}
                  </h3>
                  <p className="mt-1 font-body text-sm text-kibok-ink/50">
                    {t(`beans_page.product_${product.key}_origin`)}
                  </p>
                  <p className="mt-2 font-body text-sm text-kibok-brown">
                    {t(`beans_page.product_${product.key}_notes`)}
                  </p>
                </div>

                <Link
                  href="/beans"
                  className="mt-6 inline-block rounded-sm bg-kibok-brown px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-kibok-cream transition-all hover:bg-kibok-brown-light active:scale-95"
                >
                  {t("beans_section.learn_more")}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
