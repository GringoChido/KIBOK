"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { LOCATION } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const LocationBanner = () => {
  const t = useTranslations("location");

  return (
    <>
      <section className="grain-overlay relative overflow-hidden bg-kibok-charcoal py-24 md:py-32">
        {/* Storefront background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.storefront}
            alt=""
            fill
            className="object-cover photo-warm opacity-20"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-kibok-charcoal via-kibok-charcoal/80 to-kibok-charcoal/60" />
        </div>

        <Container className="relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <ScrollReveal>
                <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[0.95] text-kibok-cream">
                  {t("heading_1")}
                  <br />
                  <span className="text-kibok-gold">{t("heading_2")}</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <address className="mt-8 not-italic">
                  <p className="font-body text-lg text-kibok-cream/80">{LOCATION.address}</p>
                  <p className="font-body text-lg text-kibok-cream/80">{LOCATION.area}</p>
                  <p className="font-body text-lg text-kibok-cream/80">{LOCATION.city}</p>
                </address>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="mt-4 font-heading text-sm font-bold uppercase tracking-wider text-kibok-gold">
                  {t("hours")}
                </p>
                <p className="mt-2 font-body text-sm text-kibok-cream/40">
                  {LOCATION.rating} {t("rating_text")} &middot; {LOCATION.reviewCount} reviews
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="mt-8">
                  <a
                    href={LOCATION.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-sm border-2 border-kibok-cream px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-kibok-cream transition-all hover:bg-kibok-cream hover:text-kibok-ink active:scale-95"
                  >
                    {t("directions")}
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Parroquia evening shot */}
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm md:aspect-square">
                <Image
                  src={IMAGES.parroquiaEvening}
                  alt="La Parroquia at golden hour with people on cobblestones"
                  fill
                  className="object-cover photo-warm"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kibok-charcoal/30 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </Container>

      </section>

      {/* Proximity strip */}
      <div className="bg-kibok-brown py-3 text-center">
        <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-kibok-cream/80">
          {t("proximity")}
        </p>
      </div>
    </>
  );
};
