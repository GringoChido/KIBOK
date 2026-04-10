import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MarqueeStrip } from "@/components/layout/MarqueeStrip";
import { IMAGES } from "@/lib/images";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About — Ki'bok Coffee SMA",
  description:
    "The story of Ki'bok Coffee in San Miguel de Allende — organic Mexican-sourced beans, community, and craft.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-kibok-cream pb-20 pt-36">
        {/* Subtle background texture */}
        <div className="absolute inset-0 z-0 opacity-5">
          <Image
            src={IMAGES.beanPattern}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden
          />
        </div>
        <Container className="relative z-10">
          <h1 className="font-heading text-[clamp(3rem,9vw,7rem)] font-bold uppercase leading-[0.85] tracking-tight text-kibok-ink">
            Our
            <br />
            <span className="text-kibok-terracotta">Story</span>
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-kibok-warm-gray">
            Ki&apos;bok Coffee was born from a deep love for Mexican coffee and
            the belief that every cup should tell a story. We source our beans
            directly from organic producers across Mexico, roast them with care,
            and serve them in spaces designed to bring people together.
          </p>
        </Container>
        {/* Floating cactus stamp */}
        <div className="absolute bottom-8 right-8 z-10 hidden opacity-15 md:block">
          <Image
            src={IMAGES.stampCactus}
            alt=""
            width={100}
            height={100}
            className="h-20 w-20 rotate-6 rounded-sm"
            aria-hidden
          />
        </div>
      </section>

      <MarqueeStrip
        items={["FROM SEED TO CUP", "ORGANIC MEXICAN BEANS", "ROASTED WITH CARE", "COMMUNITY FIRST"]}
        bgColor="bg-kibok-brown"
        textColor="text-kibok-cream"
      />

      <AboutPageClient />
    </>
  );
}
