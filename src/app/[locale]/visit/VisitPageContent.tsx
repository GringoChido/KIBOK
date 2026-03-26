"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { LOCATION, SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { StampGraphic } from "@/components/shared/StampGraphic";
import { StampBadge } from "@/components/shared/StampBadge";
import { MarqueeStrip } from "@/components/layout/MarqueeStrip";

const galleryPhotos = [
  { src: IMAGES.coffeeTrio, alt: "Three coffees on dark wood" },
  { src: IMAGES.espressoShot, alt: "Espresso shot" },
  { src: IMAGES.latteArtLeaf, alt: "Latte art" },
  { src: IMAGES.baristaHandoff, alt: "Barista serving coffee" },
  { src: IMAGES.smaStreetSunset, alt: "SMA street at sunset" },
  { src: IMAGES.parroquiaEvening, alt: "La Parroquia at evening" },
];

const tipKeys = ["jardin", "parroquia", "aurora", "mercado"] as const;

export const VisitPageContent = () => {
  const t = useTranslations();

  return (
    <>
      {/* Hero with SMA sunset street */}
      <section className="relative overflow-hidden bg-kibok-charcoal pb-20 pt-36">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.smaStreetSunset}
            alt=""
            fill
            className="object-cover photo-warm opacity-40"
            sizes="100vw"
            priority
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-kibok-charcoal/50 via-kibok-charcoal/30 to-kibok-charcoal" />
        </div>
        <Container className="relative z-10">
          <h1 className="font-heading text-[clamp(3rem,10vw,8rem)] font-bold uppercase leading-[0.85] tracking-tight text-kibok-cream">
            {t("visit_page.heading_1")}
            <br />
            <span className="text-kibok-gold">
              {t("visit_page.heading_2")}
            </span>
          </h1>
          <p className="mt-6 max-w-lg font-body text-lg text-kibok-cream/60">
            {t("visit_page.subheading")}
          </p>
        </Container>
      </section>

      <MarqueeStrip />

      {/* Storefront + Address */}
      <section className="bg-kibok-off-white py-24">
        <Container>
          <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <SectionHeading>
                {t("visit_page.find_us")}
              </SectionHeading>
              <ScrollReveal delay={0.1}>
                <address className="mt-8 not-italic">
                  <p className="font-heading text-xl font-bold text-kibok-ink">
                    {LOCATION.address}
                  </p>
                  <p className="mt-1 font-body text-lg text-kibok-warm-gray">
                    {LOCATION.area}
                  </p>
                  <p className="font-body text-lg text-kibok-warm-gray">
                    {LOCATION.city} {LOCATION.zip}
                  </p>
                </address>
                <div className="mt-6 space-y-2">
                  <p className="font-heading text-sm font-bold uppercase tracking-wider text-kibok-brown">
                    {t("location.hours")}
                  </p>
                  <p className="font-body text-sm text-kibok-warm-gray">
                    {LOCATION.rating} {t("location.rating_text")}{" "}
                    · {LOCATION.reviewCount} reviews
                  </p>
                </div>
                <div className="mt-8">
                  <Button href={LOCATION.googleMapsUrl}>
                    {t("location.directions")}
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={IMAGES.storefront}
                  alt="Ki'bok Coffee SMA storefront"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Photo Gallery */}
      <section className="bg-kibok-ink py-24">
        <Container>
          <SectionHeading light>
            {t("visit_page.the_space")}
          </SectionHeading>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPhotos.map((photo, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover photo-warm transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Neighborhood tips with Parroquia background */}
      <section className="relative overflow-hidden bg-kibok-cream py-24">
        <Container className="relative z-10">
          <SectionHeading>
            {t("visit_page.neighborhood")}
          </SectionHeading>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {tipKeys.map((key, i) => (
              <ScrollReveal key={key} delay={i * 0.1}>
                <div className="rounded-sm bg-kibok-off-white p-6">
                  <h3 className="font-heading text-lg font-bold text-kibok-ink">
                    {t(`visit_page.tips.${key}.title`)}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-kibok-warm-gray">
                    {t(`visit_page.tips.${key}.desc`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
        <div className="absolute right-8 top-8 hidden md:block">
          <StampBadge size={100} rotation={8} variant="dark" />
        </div>
        <div className="absolute bottom-8 left-8 hidden md:block">
          <StampGraphic
            src={IMAGES.stampCactus}
            size={80}
            rotation={-6}
            opacity={0.1}
          />
        </div>
      </section>

      {/* Proximity note */}
      <section className="bg-kibok-brown py-4 text-center">
        <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-kibok-cream/80">
          {t("location.proximity")}
        </p>
      </section>
    </>
  );
};
