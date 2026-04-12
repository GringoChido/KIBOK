"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { IMAGES } from "@/lib/images";

interface FoodCard {
  titleKey: string;
  descKey: string;
  heroKey?: string;
  image: string;
  large: boolean;
  colSpan: string;
  rowSpan?: string;
  aspect: string;
  veganDot?: boolean;
}

const foodCards: FoodCard[] = [
  {
    titleKey: "food.mexican_title",
    descKey: "food.mexican_desc",
    heroKey: "food.mexican_hero",
    image: IMAGES.chilaquiles,
    large: true,
    colSpan: "col-span-12 md:col-span-8",
    rowSpan: "md:row-span-2",
    aspect: "aspect-[4/3] md:aspect-auto md:h-full",
  },
  {
    titleKey: "food_expanded.avocado_title",
    descKey: "food_expanded.avocado_desc",
    heroKey: "food_expanded.avocado_hero",
    image: IMAGES.baristaHandoff,
    large: false,
    colSpan: "col-span-12 sm:col-span-6 md:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    titleKey: "food_expanded.enchiladas_title",
    descKey: "food_expanded.enchiladas_desc",
    heroKey: "food_expanded.enchiladas_hero",
    image: IMAGES.greenEnchiladas,
    large: false,
    colSpan: "col-span-12 sm:col-span-6 md:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    titleKey: "food_expanded.rancheros_title",
    descKey: "food_expanded.rancheros_desc",
    heroKey: "food_expanded.rancheros_hero",
    image: IMAGES.huevosRancheros,
    large: false,
    colSpan: "col-span-12 sm:col-span-6 md:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    titleKey: "food_expanded.red_enchiladas_title",
    descKey: "food_expanded.red_enchiladas_desc",
    heroKey: "food_expanded.red_enchiladas_hero",
    image: IMAGES.redEnchiladas,
    large: false,
    colSpan: "col-span-12 sm:col-span-6 md:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    titleKey: "food_expanded.quinoa_title",
    descKey: "food_expanded.quinoa_desc",
    heroKey: "food_expanded.quinoa_hero",
    image: IMAGES.coffeeTrio,
    large: false,
    colSpan: "col-span-12 sm:col-span-6 md:col-span-4",
    aspect: "aspect-[4/3]",
    veganDot: true,
  },
  {
    titleKey: "food_expanded.ciabatta_title",
    descKey: "food_expanded.ciabatta_desc",
    heroKey: "food_expanded.ciabatta_hero",
    image: IMAGES.redEnchiladas,
    large: false,
    colSpan: "col-span-12 sm:col-span-6 md:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    titleKey: "food.pastry_title",
    descKey: "food.pastry_desc",
    heroKey: "food.pastry_hero",
    image: IMAGES.huevosRancheros,
    large: true,
    colSpan: "col-span-12 md:col-span-8",
    aspect: "aspect-[16/9]",
  },
];

export const FoodSection = () => {
  const t = useTranslations();

  return (
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
        <SectionHeading light>{t("food.heading")}</SectionHeading>

        <ScrollReveal delay={0.1}>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-kibok-cream/50">
            {t("food_expanded.kitchen_intro")}
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-12 gap-3 md:gap-4">
          {foodCards.map((card, i) => (
            <ScrollReveal
              key={card.titleKey}
              delay={i * 0.08}
              className={`${card.colSpan} ${card.rowSpan ?? ""}`}
            >
              <div className="group relative h-full overflow-hidden rounded-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40">
                <div className={`relative ${card.aspect} min-h-0 ${card.rowSpan ? "h-full" : ""}`}>
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover photo-warm transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes={
                      card.large
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kibok-ink via-kibok-ink/50 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  {card.veganDot && (
                    <span className="mb-2 inline-block size-2.5 rounded-full bg-kibok-sage" />
                  )}
                  <h3
                    className={`font-display font-bold tracking-tight text-kibok-cream ${
                      card.large ? "text-2xl md:text-3xl lg:text-4xl" : "text-lg md:text-xl"
                    }`}
                  >
                    {t(card.titleKey)}
                  </h3>
                  <p
                    className={`mt-2 font-body leading-relaxed text-kibok-cream/60 ${
                      card.large ? "max-w-lg text-sm md:text-base" : "text-sm"
                    }`}
                  >
                    {t(card.descKey)}
                  </p>
                  {card.heroKey && (
                    <p className="mt-2 font-heading text-xs font-semibold uppercase tracking-wider text-kibok-gold">
                      {t(card.heroKey)}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/menu"
              className="inline-block rounded-sm bg-kibok-brown px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-kibok-cream transition-all hover:bg-kibok-brown-light active:scale-95"
            >
              {t("food.cta")}
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
