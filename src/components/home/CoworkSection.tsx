"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StampGraphic } from "@/components/shared/StampGraphic";
import { IMAGES } from "@/lib/images";

const perks = ["wifi", "power", "vibe"] as const;

const perkIcons: Record<string, string> = {
  wifi: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  power: "M7 2v11h3v9l7-12h-4l4-8z",
  vibe: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",
};

export const CoworkSection = () => {
  const t = useTranslations("cowork");

  return (
    <section className="relative overflow-hidden bg-kibok-cream py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Photo side */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={IMAGES.cafeInterior}
                alt="Ki'bok Coffee interior — the perfect workspace"
                fill
                className="object-cover photo-warm"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Floating stamp */}
              <div className="absolute -bottom-4 -right-4 z-10">
                <StampGraphic src={IMAGES.stampTeapot} size={90} rotation={12} opacity={0.6} />
              </div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <div>
            <SectionHeading>{t("heading")}</SectionHeading>
            <ScrollReveal delay={0.1}>
              <p className="mt-4 font-body text-lg leading-relaxed text-kibok-warm-gray">
                {t("subheading")}
              </p>
            </ScrollReveal>

            <div className="mt-10 space-y-6">
              {perks.map((perk, i) => (
                <ScrollReveal key={perk} delay={0.2 + i * 0.1}>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-kibok-brown/10">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-kibok-brown" fill="currentColor">
                        <path d={perkIcons[perk]} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-kibok-ink">
                        {t(`${perk}`)}
                      </h3>
                      <p className="mt-1 font-body text-sm text-kibok-warm-gray">
                        {t(`${perk}_desc`)}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.5}>
              <div className="mt-10">
                <Link
                  href="/visit"
                  className="inline-block rounded-sm bg-kibok-brown px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-kibok-cream transition-all hover:bg-kibok-brown-light active:scale-95"
                >
                  {t("cta")}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
