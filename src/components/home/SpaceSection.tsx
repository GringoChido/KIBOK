"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StampGraphic } from "@/components/shared/StampGraphic";
import { IMAGES } from "@/lib/images";

const spacePhotos = [
  { src: IMAGES.coffeeTrio, alt: "Three coffees on dark wood bar" },
  { src: IMAGES.espressoShot, alt: "Espresso shot with golden crema" },
  { src: IMAGES.baristaHandoff, alt: "Barista serving coffee" },
  { src: IMAGES.latteArtLeaf, alt: "Latte art in ribbed glass" },
];

const perks = ["wifi", "power", "vibe"] as const;

const perkIcons: Record<string, string> = {
  wifi: "M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z",
  power: "M7 2v11h3v9l7-12h-4l4-8z",
  vibe: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",
};

export const SpaceSection = () => {
  const t = useTranslations();

  return (
    <section className="overflow-hidden">
      {/* The Space — photo gallery on dark background */}
      <div className="bg-kibok-ink py-20 md:py-24">
        <Container>
          <SectionHeading light>{t("visit_page.the_space")}</SectionHeading>
          <ScrollReveal delay={0.1}>
            <p className="mt-4 max-w-lg font-body text-base text-kibok-cream/50 md:text-lg">
              {t("about_page.space_body_1")}
            </p>
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

      {/* Come Work at Ki'bok — cream background with perks */}
      <div className="relative bg-kibok-cream py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            {/* Text + perks */}
            <div>
              <SectionHeading>{t("cowork.heading")}</SectionHeading>
              <ScrollReveal delay={0.1}>
                <p className="mt-4 font-body text-base leading-relaxed text-kibok-warm-gray md:text-lg">
                  {t("cowork.subheading")}
                </p>
              </ScrollReveal>

              <div className="mt-8 space-y-5">
                {perks.map((perk, i) => (
                  <ScrollReveal key={perk} delay={0.2 + i * 0.08}>
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-kibok-brown/10">
                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-kibok-brown" fill="currentColor">
                          <path d={perkIcons[perk]} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-heading text-sm font-bold text-kibok-ink md:text-base">
                          {t(`cowork.${perk}`)}
                        </h3>
                        <p className="mt-0.5 font-body text-sm text-kibok-warm-gray">
                          {t(`cowork.${perk}_desc`)}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.5}>
                <div className="mt-8">
                  <Link
                    href="/visit"
                    className="inline-block rounded-sm bg-kibok-brown px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-kibok-cream transition-all hover:bg-kibok-brown-light active:scale-95"
                  >
                    {t("cowork.cta")}
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Interior photo */}
            <ScrollReveal direction="right">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm md:aspect-square">
                <Image
                  src={IMAGES.cafeInterior}
                  alt="Ki'bok Coffee interior"
                  fill
                  className="object-cover photo-warm"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>

        {/* Stamp */}
        <div className="absolute bottom-8 right-8 hidden md:block">
          <StampGraphic src={IMAGES.stampTeapot} size={80} rotation={12} opacity={0.1} />
        </div>
      </div>
    </section>
  );
};
