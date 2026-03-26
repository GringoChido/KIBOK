"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { MarqueeStrip } from "@/components/layout/MarqueeStrip";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { StampGraphic } from "@/components/shared/StampGraphic";
import { IMAGES } from "@/lib/images";
import { MENU_STRUCTURE, MENU_PRICES } from "@/lib/constants";

const stampMap: Record<string, string> = {
  espresso: IMAGES.stampBeans,
  filter: IMAGES.stampTeapot,
  cold: IMAGES.stampCactus,
  food: IMAGES.stampCat,
};

export const MenuPageContent = () => {
  const t = useTranslations();

  return (
    <>
      {/* Hero with coffeeTrio */}
      <section className="relative overflow-hidden bg-kibok-ink pb-20 pt-36">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.coffeeTrio}
            alt=""
            fill
            className="object-cover photo-warm opacity-40"
            sizes="100vw"
            priority
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-kibok-ink/70 via-kibok-ink/50 to-kibok-ink" />
        </div>
        <Container className="relative z-10">
          <h1 className="font-heading text-[clamp(3rem,10vw,8rem)] font-bold uppercase leading-[0.85] tracking-tight text-kibok-cream">
            {t("menu_page.heading_1")}
            <br />
            <span className="text-kibok-gold">
              {t("menu_page.heading_2")}
            </span>
          </h1>
          <p className="mt-6 max-w-lg font-body text-lg text-kibok-cream/60">
            {t("menu_page.subheading")}
          </p>
        </Container>
        <div className="absolute bottom-8 right-8 z-10 hidden md:block">
          <StampGraphic
            src={IMAGES.stampBeans}
            size={100}
            rotation={-12}
            opacity={0.15}
            blendMode="screen"
          />
        </div>
      </section>

      <MarqueeStrip />

      {/* Menu categories with alternating backgrounds */}
      {MENU_STRUCTURE.map((category, ci) => {
        const isDark = ci % 2 === 0;
        return (
          <section
            key={category.categoryKey}
            className={`relative py-20 ${isDark ? "bg-kibok-ink" : "bg-kibok-cream"}`}
          >
            <Container>
              <div className="flex items-start justify-between">
                <ScrollReveal>
                  <h2
                    className={`font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase tracking-tight ${isDark ? "text-kibok-cream" : "text-kibok-ink"}`}
                  >
                    {t(
                      `menu_page.categories.${category.categoryKey}`,
                    )}
                  </h2>
                  <div className="mt-2 h-0.5 w-16 bg-kibok-gold" />
                </ScrollReveal>
                <div className="hidden md:block">
                  <StampGraphic
                    src={
                      stampMap[category.categoryKey] ||
                      IMAGES.stampBeans
                    }
                    size={80}
                    rotation={ci * 5 - 10}
                    opacity={0.15}
                    blendMode={isDark ? "screen" : "multiply"}
                  />
                </div>
              </div>

              <div className="mt-10 space-y-1">
                {category.items.map((itemKey, i) => (
                  <ScrollReveal key={itemKey} delay={i * 0.04}>
                    <div
                      className={`flex items-baseline gap-2 rounded-sm px-4 py-3 transition-colors ${isDark ? "hover:bg-kibok-charcoal" : "hover:bg-kibok-off-white"}`}
                    >
                      <h3
                        className={`shrink-0 font-heading text-lg font-bold ${isDark ? "text-kibok-cream" : "text-kibok-ink"}`}
                      >
                        {t(`menu_items.${itemKey}.name`)}
                      </h3>
                      <span className="menu-leader" />
                      <span className="shrink-0 font-heading text-lg font-bold text-kibok-gold">
                        {
                          MENU_PRICES[
                            itemKey as keyof typeof MENU_PRICES
                          ]
                        }
                      </span>
                    </div>
                    <p
                      className={`px-4 pb-2 font-body text-sm ${isDark ? "text-kibok-cream/40" : "text-kibok-warm-gray"}`}
                    >
                      {t(`menu_items.${itemKey}.desc`)}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
};
