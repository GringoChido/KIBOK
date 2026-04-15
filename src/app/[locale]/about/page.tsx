import type { Metadata } from "next";
import { AboutPageContent } from "./AboutPageContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const meta = {
    en: {
      title: "Our Story — Ki'bok Coffee SMA | Good Aromas Since 2017",
      description:
        "Ki'bok means good aromas in Maya. Since 2017 we've served organic coffee from Mexican farms in the heart of San Miguel de Allende. Featured in National Geographic.",
    },
    es: {
      title:
        "Nuestra Historia — Ki'bok Coffee SMA | Buenos Aromas Desde 2017",
      description:
        "Ki'bok significa buenos aromas en maya. Desde 2017 servimos café orgánico de fincas mexicanas en el corazón de San Miguel de Allende. Destacado en National Geographic.",
    },
    ja: {
      title:
        "私たちの物語 — Ki'bok Coffee SMA | 2017年からの良い香り",
      description:
        "Ki'bokはマヤ語で「良い香り」。2017年からサン・ミゲル・デ・アジェンデの中心でメキシコ農園のオーガニックコーヒーを提供。National Geographicに掲載。",
    },
  };

  const t = meta[locale as keyof typeof meta] || meta.en;

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://kibokcoffee-sma.com/${locale}/about`,
      siteName: "Ki'bok Coffee SMA",
      locale: locale === "es" ? "es_MX" : locale === "ja" ? "ja_JP" : "en_US",
      type: "website",
      images: [
        {
          url: "/ASSETS/86364c926e7f98c6039a30012bff5781.webp",
          width: 1200,
          height: 630,
          alt: "Ki'bok Coffee SMA — Our Story",
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
      canonical: `https://kibokcoffee-sma.com/${locale}/about`,
      languages: { en: "/en/about", es: "/es/about", ja: "/ja/about" },
    },
  };
}

export default function AboutPage() {
  return <AboutPageContent />;
}
