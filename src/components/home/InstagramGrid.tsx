"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const gridPhotos = [
  { src: IMAGES.espressoShot, alt: "Espresso shot", tall: true },
  { src: IMAGES.chilaquiles, alt: "Chilaquiles", tall: false },
  { src: IMAGES.smaStreetSunset, alt: "SMA street at sunset", tall: false },
  { src: IMAGES.coffeeTrio, alt: "Three coffees", tall: false },
  { src: IMAGES.baristaHandoff, alt: "Barista serving", tall: true },
  { src: IMAGES.latteArtLeaf, alt: "Latte art", tall: false },
];

export const InstagramGrid = () => {
  const t = useTranslations("instagram");

  return (
    <section className="bg-kibok-off-white py-24 md:py-32">
      <Container>
        <div className="text-center">
          <SectionHeading>{t("heading")}</SectionHeading>
          <ScrollReveal delay={0.1}>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-heading text-sm font-bold uppercase tracking-wider text-kibok-brown transition-colors hover:text-kibok-terracotta"
            >
              {SITE.instagramHandle}
            </a>
          </ScrollReveal>
        </div>

        {/* Masonry-style grid */}
        <div className="mt-12 columns-2 gap-3 md:columns-3">
          {gridPhotos.map((photo, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mb-3 block overflow-hidden rounded-sm"
              >
                <div className={`relative w-full ${photo.tall ? "aspect-[3/4]" : "aspect-square"}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover photo-warm transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-kibok-ink/0 transition-all duration-300 group-hover:bg-kibok-ink/50">
                    <span className="absolute inset-0 flex items-center justify-center font-heading text-xs font-bold uppercase tracking-wider text-kibok-cream opacity-0 transition-opacity group-hover:opacity-100">
                      {SITE.instagramHandle}
                    </span>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
