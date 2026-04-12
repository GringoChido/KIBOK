"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { IMAGES } from "@/lib/images";
import { VibeMeter } from "@/components/shared/VibeMeter";

const spacePhotos = [
  { src: IMAGES.coffeeTrio, alt: "Three coffees on dark wood bar" },
  { src: IMAGES.espressoShot, alt: "Espresso shot with golden crema" },
  { src: IMAGES.extraChemex, alt: "Chemex pour-over on wooden table at Ki'bok" },
  { src: IMAGES.extraLatteArt, alt: "Ki'bok latte art on branded table" },
];

export const SpaceSection = () => {
  const t = useTranslations();

  return (
    <section className="overflow-hidden">
      <div className="bg-kibok-ink py-20 md:py-24">
        <Container>
          <SectionHeading light>{t("visit_page.the_space")}</SectionHeading>
          <ScrollReveal delay={0.1}>
            <p className="mt-4 max-w-lg font-body text-base text-kibok-cream/50 md:text-lg">
              {t("about_page.space_body_1")}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-8">
              <VibeMeter />
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-2 gap-2 md:gap-3 lg:grid-cols-4">
            {spacePhotos.map((photo, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group relative aspect-square overflow-hidden rounded-sm">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover photo-warm transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};
