"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StampGraphic } from "@/components/shared/StampGraphic";
import { Container } from "@/components/layout/Container";
import { IMAGES } from "@/lib/images";

export const AboutSnippet = () => {
  const t = useTranslations("about_snippet");

  return (
    <section className="bg-kibok-cream py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Collage: main photo + overlapping small photo + stamp */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Main photo — bleeds to edge on desktop only */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm md:-ml-6 lg:-ml-8">
                <Image
                  src={IMAGES.latteArtLeaf}
                  alt="Latte art in ribbed glass"
                  fill
                  className="object-cover photo-warm"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
              {/* Overlapping small photo */}
              <div className="absolute -right-2 -top-4 z-10 hidden md:block">
                <div className="relative h-32 w-32 overflow-hidden rounded-sm shadow-xl ring-4 ring-kibok-cream">
                  <Image
                    src={IMAGES.espressoShot}
                    alt=""
                    fill
                    className="object-cover photo-warm"
                    sizes="128px"
                    aria-hidden
                  />
                </div>
              </div>
              {/* Stamp at intersection — hidden on small mobile */}
              <div className="absolute -bottom-4 right-8 z-20 hidden sm:block">
                <StampGraphic src={IMAGES.stampTeapot} size={100} rotation={-8} opacity={0.6} />
              </div>
            </div>
          </ScrollReveal>

          {/* Text block overlaps photo area slightly */}
          <div className="md:-ml-8 md:relative md:z-10">
            <div className="md:rounded-sm md:bg-kibok-cream/90 md:p-8 md:backdrop-blur-sm">
              <SectionHeading>{t("heading")}</SectionHeading>
              <ScrollReveal delay={0.2}>
                <p className="mt-6 font-body text-base leading-relaxed text-kibok-warm-gray md:text-lg">
                  {t("body")}
                </p>
                <p className="mt-4 font-body text-sm leading-relaxed text-kibok-warm-gray/80 md:text-base">
                  {t("terroir")}
                </p>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-kibok-brown transition-colors hover:text-kibok-terracotta"
                >
                  {t("link")}
                  <span className="text-lg">&rarr;</span>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
