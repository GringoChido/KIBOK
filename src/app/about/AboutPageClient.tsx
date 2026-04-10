"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StampBadge } from "@/components/shared/StampBadge";
import { IMAGES } from "@/lib/images";

export const AboutPageClient = () => (
  <>
    {/* Coffee sourcing */}
    <section className="bg-kibok-off-white py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading>The Beans</SectionHeading>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 font-body text-lg leading-relaxed text-kibok-warm-gray">
                Every bean we serve is sourced directly from organic producers in
                Chiapas, Oaxaca, and Veracruz. We believe in transparent
                relationships with our farmers &mdash; fair prices, sustainable
                practices, and exceptional quality from seed to cup.
              </p>
              <p className="mt-4 font-body text-lg leading-relaxed text-kibok-warm-gray">
                Our roasting process honors each origin&apos;s unique character,
                bringing out the natural sweetness, complexity, and depth that
                make Mexican coffee extraordinary.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src={IMAGES.multiplePourOvers}
                  alt="Multiple pour-over coffee brewers in action"
                  fill
                  className="object-cover photo-warm"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Overlapping stamp */}
              <div className="absolute -bottom-6 -left-4 z-10">
                <Image
                  src={IMAGES.stampBeans}
                  alt=""
                  width={120}
                  height={120}
                  className="h-20 w-20 rounded-sm opacity-80 shadow-lg md:h-24 md:w-24"
                  aria-hidden
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>

    {/* The space */}
    <section className="relative overflow-hidden bg-kibok-ink py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <ScrollReveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src={IMAGES.smaStreet}
                alt="Colorful street in San Miguel de Allende with La Parroquia"
                fill
                className="object-cover photo-warm"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
          <div>
            <SectionHeading light>The Space</SectionHeading>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 font-body text-lg leading-relaxed text-kibok-cream/70">
                Our San Miguel de Allende location sits on Diez de Sollano y
                D&aacute;valos, one of Centro&apos;s most beautiful streets. The
                space is an intimate retreat &mdash; dark, moody, and warm, with
                artistic wall elements and bar seating that invites you to stay a
                while.
              </p>
              <p className="mt-4 font-body text-lg leading-relaxed text-kibok-cream/70">
                It&apos;s a place where expats meet locals, where artists find
                inspiration, and where every conversation is accompanied by
                something delicious.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-8 left-8 hidden opacity-15 md:block">
        <StampBadge size={120} rotation={10} variant="light" />
      </div>
    </section>

    {/* The craft */}
    <section className="bg-kibok-cream py-24">
      <Container>
        <SectionHeading>The Craft</SectionHeading>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-kibok-warm-gray">
            Behind every great cup is a passionate team. Our baristas are trained
            to honor the craft &mdash; from precise extraction to latte art,
            every detail matters.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: IMAGES.baristaV60, alt: "Barista brewing pour-over coffee" },
            { src: IMAGES.kalitaOrange, alt: "Kalita pour-over on orange background" },
            { src: IMAGES.pourOverBag, alt: "Pour-over with coffee bag" },
          ].map((photo, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover photo-warm"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  </>
);
