import { Hero } from "@/components/home/Hero";
import { MarqueeStrip } from "@/components/layout/MarqueeStrip";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { MenuCarousel } from "@/components/home/MenuCarousel";
import { FoodSection } from "@/components/home/FoodSection";
import { CoworkSection } from "@/components/home/CoworkSection";
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
      <FoodSection />
      <CoworkSection />
      <LocationBanner />
      <InstagramGrid />
    </>
  );
}
