import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { PressBar } from "@/components/home/PressBar";
import { MarqueeStrip } from "@/components/layout/MarqueeStrip";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { MenuCarousel } from "@/components/home/MenuCarousel";
import { HemingwaySpotlight } from "@/components/home/HemingwaySpotlight";
import { FoodSection } from "@/components/home/FoodSection";
import { BeansSection } from "@/components/home/BeansSection";
import { SpaceSection } from "@/components/home/SpaceSection";
import { SpotifyBlock } from "@/components/shared/SpotifyBlock";
import { LocationBanner } from "@/components/home/LocationBanner";
import { InstagramGrid } from "@/components/home/InstagramGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const meta = {
    en: {
      title:
        "Ki'bok Coffee SMA — Organic Coffee & Rooftop Cafe in San Miguel de Allende",
      description:
        "Organic Mexican coffee from Chiapas & Veracruz, house-made food, and a rooftop terrace with Parroquia views. Three floors of good aromas on Sollano since 2017. Open daily 8–7.",
    },
    es: {
      title:
        "Ki'bok Coffee SMA — Café Orgánico y Terraza en San Miguel de Allende",
      description:
        "Café mexicano orgánico de Chiapas y Veracruz, comida casera y una terraza con vistas a la Parroquia. Tres pisos de buenos aromas en Sollano desde 2017. Abierto todos los días 8–7.",
    },
    ja: {
      title:
        "Ki'bok Coffee SMA — サン・ミゲル・デ・アジェンデのオーガニックカフェ",
      description:
        "チアパス＆ベラクルスのオーガニックメキシカンコーヒー、手作り料理、パロキア教会を望むルーフトップテラス。2017年からソラーノ通りで毎日営業。",
    },
  };

  const t = meta[locale as keyof typeof meta] || meta.en;

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://kibokcoffee-sma.com/${locale}`,
      siteName: "Ki'bok Coffee SMA",
      locale: locale === "es" ? "es_MX" : locale === "ja" ? "ja_JP" : "en_US",
      type: "website",
      images: [
        {
          url: "/ASSETS/86364c926e7f98c6039a30012bff5781.webp",
          width: 1200,
          height: 630,
          alt: "Ki'bok Coffee SMA — Organic coffee in San Miguel de Allende",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["/ASSETS/86364c926e7f98c6039a30012bff5781.webp"],
    },
    alternates: {
      canonical: `https://kibokcoffee-sma.com/${locale}`,
      languages: {
        en: "/en",
        es: "/es",
        ja: "/ja",
      },
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <PressBar />
      <MarqueeStrip />
      <AboutSnippet />
      <MenuCarousel />
      <HemingwaySpotlight />
      <MarqueeStrip
        reversed
        bgColor="bg-kibok-cream"
        textColor="text-kibok-brown"
      />
      <FoodSection />
      <BeansSection />
      <SpaceSection />
      <SpotifyBlock />
      <LocationBanner />
      <InstagramGrid />
    </>
  );
}
