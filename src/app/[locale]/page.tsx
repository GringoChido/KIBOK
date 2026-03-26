import { Hero } from "@/components/home/Hero";
import { MarqueeStrip } from "@/components/layout/MarqueeStrip";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { MenuCarousel } from "@/components/home/MenuCarousel";
import { CulturalSection } from "@/components/home/CulturalSection";
import { SmaDivider } from "@/components/home/SmaDivider";
import { LocationBanner } from "@/components/home/LocationBanner";
import { InstagramGrid } from "@/components/home/InstagramGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <AboutSnippet />
      <MenuCarousel />
      <MarqueeStrip
        reversed
        bgColor="bg-kibok-cream"
        textColor="text-kibok-brown"
      />
      <CulturalSection />
      <SmaDivider />
      <LocationBanner />
      <InstagramGrid />
    </>
  );
}
