"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { MarqueeStrip } from "@/components/layout/MarqueeStrip";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { IMAGES } from "@/lib/images";
import {
  DRINK_SECTIONS,
  FOOD_SECTIONS,
  DRINK_EXTRAS,
  FOOD_EXTRAS,
  type MenuItemDef,
  type MenuExtraDef,
  type MenuSectionDef,
  type TempIndicator,
  type DietaryTag,
} from "@/lib/constants";

/* ═══════════════════════════════════════════════════════════
   Temperature dot — small colored indicator matching the
   physical menu's hot/cold/both icons
   ═══════════════════════════════════════════════════════════ */
const TempDot = ({ temp }: { temp: TempIndicator }) => {
  if (temp === "hot")
    return (
      <span
        className="ml-2 inline-block h-2 w-2 shrink-0 rounded-full bg-kibok-terracotta"
        aria-label="Hot"
      />
    );
  if (temp === "cold")
    return (
      <span
        className="ml-2 inline-block h-2 w-2 shrink-0 rounded-full border-[1.5px] border-kibok-sage"
        aria-label="Cold"
      />
    );
  // both
  return (
    <span
      className="temp-dot-both ml-2 inline-block h-2 w-2 shrink-0 rounded-full"
      aria-label="Hot or Cold"
    />
  );
};

/* ═══════════════════════════════════════════════════════════
   Dietary badge — small pill for vegan / vegetarian
   ═══════════════════════════════════════════════════════════ */
const DietBadge = ({
  diet,
  label,
}: {
  diet: DietaryTag;
  label: string;
}) => {
  const cls =
    diet === "vegan"
      ? "border-emerald-600/30 bg-emerald-900/20 text-emerald-400"
      : "border-kibok-gold/30 bg-kibok-gold/10 text-kibok-gold";
  return (
    <span
      className={`ml-2 inline-flex shrink-0 items-center rounded-full border px-1.5 py-px font-body text-[9px] font-bold uppercase tracking-wider ${cls}`}
    >
      {label}
    </span>
  );
};

/* ═══════════════════════════════════════════════════════════
   Seasonal badge
   ═══════════════════════════════════════════════════════════ */
const SeasonalBadge = ({ label }: { label: string }) => (
  <span className="ml-2 inline-flex shrink-0 items-center rounded-full border border-kibok-terracotta/30 bg-kibok-terracotta/10 px-1.5 py-px font-body text-[9px] font-bold uppercase tracking-wider text-kibok-terracotta">
    {label}
  </span>
);

/* ═══════════════════════════════════════════════════════════
   Temperature legend — shows what the dots mean
   ═══════════════════════════════════════════════════════════ */
const TempLegend = ({
  t,
  isDark,
}: {
  t: ReturnType<typeof useTranslations>;
  isDark: boolean;
}) => (
  <div
    className={`inline-flex items-center gap-4 rounded-sm border px-4 py-2.5 font-body text-xs ${
      isDark
        ? "border-kibok-cream/10 text-kibok-cream/50"
        : "border-kibok-ink/10 text-kibok-warm-gray"
    }`}
  >
    <span className="flex items-center gap-1.5">
      <span className="inline-block h-2 w-2 rounded-full bg-kibok-terracotta" />
      {t("menu_page.legend_hot")}
    </span>
    <span className="flex items-center gap-1.5">
      <span className="inline-block h-2 w-2 rounded-full border-[1.5px] border-kibok-sage" />
      {t("menu_page.legend_cold")}
    </span>
    <span className="flex items-center gap-1.5">
      <span className="temp-dot-both inline-block h-2 w-2 rounded-full" />
      {t("menu_page.legend_both")}
    </span>
  </div>
);

/* ═══════════════════════════════════════════════════════════
   Menu item row
   ═══════════════════════════════════════════════════════════ */
const MenuItemRow = ({
  item,
  isDark,
  t,
  delay,
}: {
  item: MenuItemDef;
  isDark: boolean;
  t: ReturnType<typeof useTranslations>;
  delay: number;
}) => {
  const name = t(`menu_items.${item.key}.name`);
  const desc = t(`menu_items.${item.key}.desc`);

  return (
    <ScrollReveal delay={delay}>
      <div
        className={`group flex items-baseline gap-2 rounded-sm px-4 py-3 transition-colors ${
          isDark ? "hover:bg-kibok-charcoal" : "hover:bg-kibok-off-white"
        }`}
      >
        <h3
          className={`shrink-0 font-heading text-lg font-bold ${
            isDark ? "text-kibok-cream" : "text-kibok-ink"
          }`}
        >
          {name}
        </h3>
        {item.temp && <TempDot temp={item.temp} />}
        {item.dietary && (
          <DietBadge
            diet={item.dietary}
            label={t(`menu_page.${item.dietary}`)}
          />
        )}
        {item.seasonal && (
          <SeasonalBadge label={t("menu_page.seasonal")} />
        )}
        <span className="menu-leader" />
        <span className="shrink-0 font-heading text-lg font-bold text-kibok-gold">
          {item.price || "—"}
        </span>
      </div>
      {desc && (
        <p
          className={`px-4 pb-1 font-body text-sm leading-relaxed ${
            isDark ? "text-kibok-cream/40" : "text-kibok-warm-gray"
          }`}
        >
          {desc}
        </p>
      )}
    </ScrollReveal>
  );
};

/* ═══════════════════════════════════════════════════════════
   Extras card — styled like the boxed area on the
   physical menu
   ═══════════════════════════════════════════════════════════ */
const ExtrasCard = ({
  extras,
  heading,
  isDark,
  t,
  children,
}: {
  extras: MenuExtraDef[];
  heading: string;
  isDark: boolean;
  t: ReturnType<typeof useTranslations>;
  children?: React.ReactNode;
}) => (
  <ScrollReveal>
    <div
      className={`rounded-sm border-2 border-dashed p-6 ${
        isDark
          ? "border-kibok-gold/20 bg-kibok-charcoal/50"
          : "border-kibok-brown/20 bg-kibok-off-white"
      }`}
    >
      <h3
        className={`font-heading text-sm font-bold uppercase tracking-widest ${
          isDark ? "text-kibok-gold" : "text-kibok-brown"
        }`}
      >
        {heading}
      </h3>
      <div className="mt-4 space-y-2">
        {extras.map((extra) => (
          <div
            key={extra.key}
            className="flex items-center justify-between"
          >
            <span
              className={`font-body text-sm ${
                isDark ? "text-kibok-cream/70" : "text-kibok-ink/70"
              }`}
            >
              {t(`menu_extras.${extra.key}`)}
            </span>
            <span
              className={`font-heading text-sm font-bold ${
                isDark ? "text-kibok-gold" : "text-kibok-brown"
              }`}
            >
              {extra.price}
            </span>
          </div>
        ))}
      </div>
      {children}
    </div>
  </ScrollReveal>
);

/* ═══════════════════════════════════════════════════════════
   Category section — single menu category block with
   alternating dark/cream backgrounds
   ═══════════════════════════════════════════════════════════ */
const CategorySection = ({
  section,
  index,
  t,
  extraContent,
}: {
  section: MenuSectionDef;
  index: number;
  t: ReturnType<typeof useTranslations>;
  extraContent?: React.ReactNode;
}) => {
  const isDark = index % 2 === 0;

  return (
    <section
      className={`relative py-16 ${isDark ? "bg-kibok-ink" : "bg-kibok-cream"}`}
    >
      <Container>
        <div className="flex items-start justify-between">
          <ScrollReveal>
            <h2
              className={`font-heading text-[clamp(1.5rem,4vw,2.5rem)] font-bold uppercase tracking-tight ${
                isDark ? "text-kibok-cream" : "text-kibok-ink"
              }`}
            >
              {t(`menu_page.categories.${section.categoryKey}`)}
            </h2>
            <div className="mt-2 h-0.5 w-16 bg-kibok-gold" />
          </ScrollReveal>
        </div>

        {extraContent && (
          <ScrollReveal delay={0.05}>
            <p
              className={`mt-3 max-w-xl font-body text-sm italic leading-relaxed ${
                isDark ? "text-kibok-cream/40" : "text-kibok-warm-gray"
              }`}
            >
              {extraContent}
            </p>
          </ScrollReveal>
        )}

        <div className="mt-8 space-y-0.5">
          {section.items.map((item, i) => (
            <MenuItemRow
              key={item.key}
              item={item}
              isDark={isDark}
              t={t}
              delay={i * 0.03}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════ */
export const MenuPageContent = () => {
  const [activeTab, setActiveTab] = useState<"drinks" | "food">("drinks");
  const contentRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  const handleTabChange = (tab: "drinks" | "food") => {
    setActiveTab(tab);
    // Smooth scroll to beginning of menu content
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="grain-overlay relative overflow-hidden bg-kibok-ink pb-20 pt-36">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.shootPastrySpread}
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
          <h1 className="font-display text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.85] tracking-tight text-kibok-cream">
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
      </section>

      <MarqueeStrip />

      {/* ── Sticky Tab Bar ───────────────────────────── */}
      <div
        ref={contentRef}
        className="sticky top-16 z-30 border-b border-kibok-cream/10 bg-kibok-ink/95 backdrop-blur-md"
      >
        <Container>
          <div className="relative flex">
            {(["drinks", "food"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`relative px-6 py-4 font-heading text-sm font-bold uppercase tracking-wider transition-colors ${
                  activeTab === tab
                    ? "text-kibok-gold"
                    : "text-kibok-cream/40 hover:text-kibok-cream/70"
                }`}
              >
                {t(`menu_page.tab_${tab}`)}
                {activeTab === tab && (
                  <motion.div
                    layoutId="menu-tab-indicator"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-kibok-gold"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Tab Content ──────────────────────────────── */}
      <AnimatePresence mode="wait">
        {activeTab === "drinks" ? (
          <motion.div
            key="drinks"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {/* Temperature legend */}
            <section className="bg-kibok-ink pb-2 pt-8">
              <Container>
                <TempLegend t={t} isDark />
              </Container>
            </section>

            {/* Drink categories */}
            {DRINK_SECTIONS.map((section, i) => (
              <CategorySection
                key={section.categoryKey}
                section={section}
                index={i}
                t={t}
              />
            ))}

            {/* Drink extras */}
            <section className="bg-kibok-ink py-12">
              <Container className="max-w-xl">
                <ExtrasCard
                  extras={DRINK_EXTRAS}
                  heading={t("menu_page.extras_heading")}
                  isDark
                  t={t}
                />
              </Container>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="food"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {/* Food categories */}
            {FOOD_SECTIONS.map((section, i) => (
              <CategorySection
                key={section.categoryKey}
                section={section}
                index={i}
                t={t}
                extraContent={
                  section.categoryKey === "ciabatta_sandwich"
                    ? t("menu_page.sandwich_desc")
                    : undefined
                }
              />
            ))}

            {/* Food extras + patience note */}
            <section className="bg-kibok-ink py-12">
              <Container className="max-w-xl">
                <ExtrasCard
                  extras={FOOD_EXTRAS}
                  heading={t("menu_page.food_extras_heading")}
                  isDark
                  t={t}
                >
                  {/* Patience note */}
                  <div className="mt-6 rounded-sm border border-kibok-gold/15 bg-kibok-ink/60 p-4">
                    <p className="font-body text-sm italic leading-relaxed text-kibok-cream/50">
                      {t("menu_page.patience_note")}
                    </p>
                  </div>
                  {/* Biodegradable note */}
                  <p className="mt-3 font-body text-xs text-kibok-cream/30">
                    {t("menu_page.biodegradable_note")}
                  </p>
                </ExtrasCard>
              </Container>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
