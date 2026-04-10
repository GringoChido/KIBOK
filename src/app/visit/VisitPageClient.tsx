"use client";

import Image from "next/image";
import { LOCATION } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { StampBadge } from "@/components/shared/StampBadge";

const galleryPhotos = [
  { src: IMAGES.heroPoruOver, alt: "Moody pour-over brewing" },
  { src: IMAGES.multiplePourOvers, alt: "Multiple pour-overs" },
  { src: IMAGES.baristaV60, alt: "Barista at work" },
  { src: IMAGES.chilaquiles, alt: "Chilaquiles" },
  { src: IMAGES.beansBurlap, alt: "Coffee beans in burlap" },
  { src: IMAGES.parroquiaAerial, alt: "La Parroquia aerial view" },
];

const neighborhoodTips = [
  { title: "Jardin Principal", desc: "The main square, just a 2-minute walk. Grab a coffee and sit in the jardín." },
  { title: "La Parroquia", desc: "The iconic pink parish church — unmissable and right around the corner." },
  { title: "Fábrica La Aurora", desc: "Art galleries and workshops in a converted textile factory. 10 min walk." },
  { title: "Mercado de Artesanías", desc: "Local crafts, textiles, and souvenirs. Perfect for a morning browse." },
];

export const VisitPageClient = () => (
  <>
    {/* Address + Map */}
    <section className="bg-kibok-off-white py-24">
      <Container>
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading>Find Us</SectionHeading>
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
                  {LOCATION.hours}
                </p>
                <p className="font-body text-sm text-kibok-warm-gray">
                  {LOCATION.rating} stars &middot; {LOCATION.reviewCount}{" "}
                  reviews on Google
                </p>
              </div>
              <div className="mt-8">
                <Button href={LOCATION.googleMapsUrl}>Get Directions</Button>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right">
            <div className="aspect-square overflow-hidden rounded-sm">
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

    {/* Photo Gallery */}
    <section className="bg-kibok-ink py-24">
      <Container>
        <SectionHeading light>The Space</SectionHeading>
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
                <div className="absolute inset-0 bg-kibok-ink/0 transition-colors group-hover:bg-kibok-ink/20" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>

    {/* Neighborhood tips */}
    <section className="relative bg-kibok-cream py-24">
      <Container>
        <SectionHeading>While You&apos;re in Centro</SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {neighborhoodTips.map((tip, i) => (
            <ScrollReveal key={tip.title} delay={i * 0.1}>
              <div className="rounded-sm bg-kibok-off-white p-6">
                <h3 className="font-heading text-lg font-bold text-kibok-ink">
                  {tip.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-kibok-warm-gray">
                  {tip.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
      {/* Floating stamp */}
      <div className="absolute right-8 top-8 hidden opacity-10 md:block">
        <StampBadge size={100} rotation={8} variant="dark" />
      </div>
      <div className="absolute bottom-8 left-8 hidden opacity-10 md:block">
        <Image
          src={IMAGES.stampCactus}
          alt=""
          width={80}
          height={80}
          className="h-16 w-16 -rotate-6 rounded-sm"
          aria-hidden
        />
      </div>
    </section>
  </>
);
