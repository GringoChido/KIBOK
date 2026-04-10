"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { IMAGES } from "@/lib/images";
import { MENU_PRICES } from "@/lib/constants";

const highlights = [
  { key: "espresso", image: IMAGES.espressoShot, price: MENU_PRICES.espresso },
  { key: "cortado", image: IMAGES.latteArtLeaf, price: MENU_PRICES.cortado },
  { key: "cococcino", image: IMAGES.icedCoffeePour, price: MENU_PRICES.cococcino },
  { key: "chilaquiles_verdes", image: IMAGES.chilaquiles, price: MENU_PRICES.chilaquiles_verdes },
  { key: "cold_brew", image: IMAGES.coffeeTrio, price: MENU_PRICES.cold_brew },
  { key: "avocado_toast", image: IMAGES.huevosRancheros, price: MENU_PRICES.avocado_toast },
  { key: "latte", image: IMAGES.latteArtHeart, price: MENU_PRICES.latte },
  { key: "affogato", image: IMAGES.pourOverBag, price: MENU_PRICES.affogato },
];

export const MenuCarousel = () => {
  const t = useTranslations();

  return (
    <section className="bg-kibok-ink py-24 md:py-32">
      <Container>
        <div className="flex items-end justify-between">
          <SectionHeading light>{t("menu_highlights.heading")}</SectionHeading>
          <ScrollReveal>
            <Link
              href="/menu"
              className="hidden font-heading text-sm font-bold uppercase tracking-wider text-kibok-gold transition-colors hover:text-kibok-cream md:inline-block"
            >
              {t("menu_highlights.link")} &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </Container>

      <div className="mt-12 overflow-hidden">
        <div className="flex gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide lg:px-8">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.key} delay={i * 0.06}>
              <div className="group w-[260px] flex-shrink-0 overflow-hidden rounded-sm bg-kibok-charcoal md:w-[280px]">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={t(`menu_items.${item.key}.name`)}
                    fill
                    className="object-cover photo-warm transition-transform duration-700 group-hover:scale-110"
                    sizes="280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kibok-charcoal via-kibok-charcoal/20 to-transparent" />
                  {/* Content overlaid at bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-heading text-lg font-bold text-kibok-cream">
                      {t(`menu_items.${item.key}.name`)}
                    </h3>
                    <p className="mt-1 font-body text-xs text-kibok-cream/50">
                      {t(`menu_items.${item.key}.desc`)}
                    </p>
                    <p className="mt-2 font-heading text-lg font-bold text-kibok-gold">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Container className="mt-8 md:hidden">
        <Link
          href="/menu"
          className="font-heading text-sm font-bold uppercase tracking-wider text-kibok-gold"
        >
          {t("menu_highlights.link")} &rarr;
        </Link>
      </Container>
    </section>
  );
};
