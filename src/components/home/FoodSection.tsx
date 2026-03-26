"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StampGraphic } from "@/components/shared/StampGraphic";
import { IMAGES } from "@/lib/images";

const foodCards: {
  key: string;
  image: string;
  stamp: string;
  large: boolean;
}[] = [
  { key: "mexican", image: IMAGES.chilaquiles, stamp: IMAGES.stampCactus, large: true },
  { key: "gringo", image: IMAGES.huevosRancheros, stamp: IMAGES.stampBeans, large: false },
  { key: "pastry", image: IMAGES.greenEnchiladas, stamp: IMAGES.stampCat, large: false },
];

export const FoodSection = () => {
  const t = useTranslations("food");

  return (
    <section className="relative overflow-hidden bg-kibok-ink py-24 md:py-32">
      {/* Subtle bean pattern background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <Image src={IMAGES.beanPattern} alt="" fill className="object-cover" sizes="100vw" aria-hidden />
      </div>

      <Container className="relative z-10">
        <SectionHeading light>{t("heading")}</SectionHeading>
        <ScrollReveal delay={0.1}>
          <p className="mt-4 max-w-xl font-body text-lg text-kibok-cream/50">
            {t("subheading")}
          </p>
        </ScrollReveal>

        {/* Food cards grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {foodCards.map((card, i) => (
            <ScrollReveal
              key={card.key}
              delay={i * 0.1}
              className={card.large ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <div className="group relative overflow-hidden rounded-sm">
                {/* Photo background */}
                <div className={`relative ${card.large ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover photo-warm transition-transform duration-700 group-hover:scale-105"
                    sizes={card.large ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kibok-ink via-kibok-ink/60 to-transparent" />
                </div>

                {/* Text overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3 className={`font-heading font-bold uppercase tracking-tight text-kibok-cream ${card.large ? "text-2xl md:text-3xl" : "text-xl"}`}>
                    {t(`${card.key}_title`)}
                  </h3>
                  <p className={`mt-2 font-body leading-relaxed text-kibok-cream/60 ${card.large ? "max-w-lg text-base" : "text-sm"}`}>
                    {t(`${card.key}_desc`)}
                  </p>
                </div>

                {/* Stamp */}
                <div className="absolute right-3 top-3">
                  <StampGraphic src={card.stamp} size={card.large ? 70 : 55} rotation={10 - i * 7} opacity={0.15} blendMode="screen" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/menu"
              className="inline-block rounded-sm bg-kibok-brown px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-kibok-cream transition-all hover:bg-kibok-brown-light active:scale-95"
            >
              {t("cta")}
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
