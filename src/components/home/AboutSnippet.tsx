"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/layout/Container";
import { IMAGES } from "@/lib/images";

const features = [
  {
    key: "feature_menu" as const,
    href: "/menu" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    key: "feature_breakfast" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M3 2l3 18h12l3-18" />
        <path d="M6.5 2C6.5 2 8 6 12 6s5.5-4 5.5-4" />
      </svg>
    ),
  },
  {
    key: "feature_wifi" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M5 12.55a11 11 0 0114.08 0" />
        <path d="M1.42 9a16 16 0 0121.16 0" />
        <path d="M8.53 16.11a6 6 0 016.95 0" />
        <circle cx="12" cy="20" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "feature_dogs" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M4.5 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm15 0a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM12 14.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm-5.5 5a2 2 0 110-4 2 2 0 010 4zm11 0a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
    ),
  },
] as const;

export const AboutSnippet = () => {
  const t = useTranslations("about_snippet");

  return (
    <section className="bg-kibok-cream py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Collage: main photo + overlapping small photo */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm md:-ml-6 lg:-ml-8">
                <Image
                  src={IMAGES.shootLatteHands}
                  alt="Close-up of hands holding latte with gorgeous latte art at Ki'bok"
                  fill
                  className="object-cover photo-warm"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
              <div className="absolute -right-2 -top-4 z-10 hidden md:block">
                <div className="relative h-32 w-32 overflow-hidden rounded-sm shadow-xl ring-4 ring-kibok-cream">
                  <Image
                    src={IMAGES.shootTableScene}
                    alt="Overhead table scene with two lattes, food plate, and hands at Ki'bok"
                    fill
                    className="object-cover photo-warm"
                    sizes="128px"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text block */}
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

                {/* Feature strip */}
                <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
                  {features.map((feature) => {
                    const content = (
                      <span className="flex items-center gap-1.5 rounded-full bg-kibok-brown/10 px-3 py-2 font-heading text-[10px] font-bold uppercase tracking-wider text-kibok-brown transition-colors hover:bg-kibok-brown/20 md:text-xs">
                        <span className="shrink-0">{feature.icon}</span>
                        <span>{t(feature.key)}</span>
                      </span>
                    );

                    if ("href" in feature && feature.href) {
                      return (
                        <Link key={feature.key} href={feature.href}>
                          {content}
                        </Link>
                      );
                    }

                    return <div key={feature.key}>{content}</div>;
                  })}
                </div>

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
