"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { LOCATION, SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { SocialIcons } from "@/components/shared/SocialIcons";
import { MarqueeStrip } from "@/components/layout/MarqueeStrip";

const tipKeys = ["jardin", "parroquia", "aurora", "mercado"] as const;

export const VisitPageContent = () => {
  const t = useTranslations();

  return (
    <>
      {/* Hero */}
      <section className="grain-overlay relative overflow-hidden bg-kibok-charcoal pb-20 pt-36">
        <div className="absolute inset-0 z-0">
          <Image src={IMAGES.smaStreetSunset} alt="" fill className="object-cover photo-warm opacity-40" sizes="100vw" priority aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-b from-kibok-charcoal/50 via-kibok-charcoal/30 to-kibok-charcoal" />
        </div>
        <Container className="relative z-10">
          <h1 className="font-display text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.85] tracking-tight text-kibok-cream">
            {t("visit_page.heading_1")}<br />
            <span className="text-kibok-gold">{t("visit_page.heading_2")}</span>
          </h1>
          <p className="mt-6 max-w-lg font-body text-base text-kibok-cream/60 md:text-lg">{t("visit_page.subheading")}</p>
        </Container>
      </section>

      <MarqueeStrip />

      {/* Storefront + Address + Map */}
      <section className="bg-kibok-off-white py-20 md:py-24">
        <Container>
          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <SectionHeading>{t("visit_page.find_us")}</SectionHeading>
              <ScrollReveal delay={0.1}>
                <address className="mt-8 not-italic">
                  <p className="font-heading text-lg font-bold text-kibok-ink md:text-xl">{LOCATION.address}</p>
                  <p className="mt-1 font-body text-base text-kibok-warm-gray md:text-lg">{LOCATION.area}</p>
                  <p className="font-body text-base text-kibok-warm-gray md:text-lg">{LOCATION.city} {LOCATION.zip}</p>
                </address>
                <div className="mt-6 space-y-2">
                  <p className="font-heading text-sm font-bold uppercase tracking-wider text-kibok-brown">{t("location.hours")}</p>
                  <p className="font-body text-sm text-kibok-warm-gray">{LOCATION.rating} {t("location.rating_text")} &middot; {LOCATION.reviewCount} reviews</p>
                </div>
                <div className="mt-6">
                  <SocialIcons variant="dark" size={20} />
                </div>
                {/* Practical info */}
                <div className="mt-8 space-y-3 border-t border-kibok-warm-gray/20 pt-6">
                  <div className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-kibok-brown"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                    <p className="font-body text-sm text-kibok-warm-gray">{t("visit_page.payment")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-kibok-brown"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                    <p className="font-body text-sm text-kibok-warm-gray">{t("visit_page.parking")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-kibok-brown"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                    <p className="font-body text-sm text-kibok-warm-gray">{t("visit_page.accessibility")}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button href={LOCATION.googleMapsUrl}>{t("location.directions")}</Button>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image src={IMAGES.storefront} alt="Ki'bok Coffee SMA storefront" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              {/* Map below storefront */}
              <div className="mt-3 aspect-video overflow-hidden rounded-sm">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.5!2d${LOCATION.coordinates.lng}!3d${LOCATION.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU0JzQ4LjAiTiAxMDDCsDQ0JzM4LjgiVw!5e0!3m2!1sen!2smx!4v1`}
                  className="h-full w-full border-0 grayscale"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ki'bok Coffee SMA location"
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Neighborhood tips */}
      <section className="relative overflow-hidden bg-kibok-cream py-20 md:py-24">
        <Container className="relative z-10">
          <SectionHeading>{t("visit_page.neighborhood")}</SectionHeading>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {tipKeys.map((key, i) => (
              <ScrollReveal key={key} delay={i * 0.08}>
                <div className="rounded-sm bg-kibok-off-white p-5 md:p-6">
                  <h3 className="font-heading text-base font-bold text-kibok-ink md:text-lg">{t(`visit_page.tips.${key}.title`)}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-kibok-warm-gray">{t(`visit_page.tips.${key}.desc`)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Proximity strip */}
      <div className="bg-kibok-brown py-3 text-center">
        <p className="font-heading text-[10px] font-medium uppercase tracking-[0.2em] text-kibok-cream/80 md:text-xs">{t("location.proximity")}</p>
      </div>
    </>
  );
};
