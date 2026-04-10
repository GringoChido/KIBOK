import { Hero } from "@/components/home/Hero";
import { MarqueeStrip } from "@/components/layout/MarqueeStrip";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { MenuCarousel } from "@/components/home/MenuCarousel";
import { LocationBanner } from "@/components/home/LocationBanner";
import { InstagramGrid } from "@/components/home/InstagramGrid";
import { MARQUEE_ITEMS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip items={MARQUEE_ITEMS} />
      <AboutSnippet />
      <MenuCarousel />
      <MarqueeStrip
        items={["CRAFTED WITH CARE", "ORGANIC BEANS", "SAN MIGUEL DE ALLENDE", "HOMEMADE DAILY"]}
        bgColor="bg-kibok-cream"
        textColor="text-kibok-brown"
      />
      <LocationBanner />
      <InstagramGrid />
    </>
  );
}
