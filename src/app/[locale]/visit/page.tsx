import type { Metadata } from "next";
import { VisitPageContent } from "./VisitPageContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const meta = {
    en: {
      title:
        "Visit Ki'bok Coffee SMA | Sollano 25, Centro, San Miguel de Allende",
      description:
        "Find Ki'bok Coffee at Sollano 25, Centro, San Miguel de Allende. Open daily 8am–7pm. Free WiFi. Three floors. Rooftop terrace. Directions, map & contact info.",
    },
    es: {
      title:
        "Visítanos — Ki'bok Coffee SMA | Sollano 25, Centro, San Miguel de Allende",
      description:
        "Encuentra Ki'bok Coffee en Sollano 25, Centro, San Miguel de Allende. Abierto todos los días 8am–7pm. WiFi gratis. Tres pisos. Terraza. Mapa y direcciones.",
    },
    ja: {
      title:
        "アクセス — Ki'bok Coffee SMA | ソラーノ25、セントロ、サン・ミゲル・デ・アジェンデ",
      description:
        "Ki'bok Coffeeはソラーノ25番地、セントロ、サン・ミゲル・デ・アジェンデ。毎日8時〜19時営業。無料WiFi。3フロア。ルーフトップテラス。地図＆アクセス情報。",
    },
  };

  const t = meta[locale as keyof typeof meta] || meta.en;

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://kibokcoffee-sma.com/${locale}/visit`,
      siteName: "Ki'bok Coffee SMA",
      locale: locale === "es" ? "es_MX" : locale === "ja" ? "ja_JP" : "en_US",
      type: "website",
      images: [
        {
          url: "/ASSETS/86364c926e7f98c6039a30012bff5781.webp",
          width: 1200,
          height: 630,
          alt: "Ki'bok Coffee SMA — Visit Us in Centro",
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
      canonical: `https://kibokcoffee-sma.com/${locale}/visit`,
      languages: { en: "/en/visit", es: "/es/visit", ja: "/ja/visit" },
    },
  };
}

export default function VisitPage() {
  return <VisitPageContent />;
}
