import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MarqueeStrip } from "@/components/layout/MarqueeStrip";
import { LOCATION } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { VisitPageClient } from "./VisitPageClient";

export const metadata: Metadata = {
  title: "Visit — Ki'bok Coffee SMA",
  description: `Find Ki'bok Coffee at ${LOCATION.fullAddress}. ${LOCATION.hours}.`,
};

export default function VisitPage() {
  return (
    <>
      {/* Hero with SMA street photo */}
      <section className="relative overflow-hidden bg-kibok-charcoal pb-20 pt-36">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.smaStreet}
            alt="Colorful street in San Miguel de Allende"
            fill
            className="object-cover photo-warm opacity-40"
            sizes="100vw"
            priority
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-kibok-charcoal/60 via-kibok-charcoal/40 to-kibok-charcoal" />
        </div>
        <Container className="relative z-10">
          <h1 className="font-heading text-[clamp(3rem,9vw,7rem)] font-bold uppercase leading-[0.85] tracking-tight text-kibok-cream">
            Visit
            <br />
            <span className="text-kibok-gold">Us</span>
          </h1>
          <p className="mt-6 max-w-lg font-body text-lg text-kibok-cream/60">
            We&apos;re in the heart of Centro, on one of San Miguel&apos;s most
            beautiful streets.
          </p>
        </Container>
      </section>

      <MarqueeStrip
        items={["OPEN DAILY", "CLOSES 7 PM", "CENTRO HISTORICO", "SAN MIGUEL DE ALLENDE"]}
        bgColor="bg-kibok-gold"
        textColor="text-kibok-ink"
      />

      <VisitPageClient />
    </>
  );
}
