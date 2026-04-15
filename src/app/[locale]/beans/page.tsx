import type { Metadata } from "next";
import { BeansPageContent } from "./BeansPageContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const meta = {
    en: {
      title: "Our Coffee — Ki'bok Coffee SMA | Organic Mexican Beans",
      description:
        "Single-origin organic beans from Chiapas, Oaxaca & Veracruz. Ki'bok Signature Blend 2026 and Café Explosión — available in-store at Sollano 25, San Miguel de Allende.",
    },
    es: {
      title:
        "Nuestro Café — Ki'bok Coffee SMA | Granos Orgánicos Mexicanos",
      description:
        "Granos orgánicos de origen único de Chiapas, Oaxaca y Veracruz. Ki'bok Signature Blend 2026 y Café Explosión — disponibles en Sollano 25, San Miguel de Allende.",
    },
    ja: {
      title:
        "コーヒー — Ki'bok Coffee SMA | オーガニックメキシカンビーンズ",
      description:
        "チアパス、オアハカ、ベラクルスのシングルオリジンオーガニック豆。Ki'bokシグネチャーブレンド2026とカフェエクスプロシオン — ソラーノ25番地で販売中。",
    },
  };

  const t = meta[locale as keyof typeof meta] || meta.en;

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://kibokcoffee-sma.com/${locale}/beans`,
      siteName: "Ki'bok Coffee SMA",
      locale: locale === "es" ? "es_MX" : locale === "ja" ? "ja_JP" : "en_US",
      type: "website",
      images: [
        {
          url: "/ASSETS/86364c926e7f98c6039a30012bff5781.webp",
          width: 1200,
          height: 630,
          alt: "Ki'bok Coffee SMA — Our Coffee",
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
      canonical: `https://kibokcoffee-sma.com/${locale}/beans`,
      languages: { en: "/en/beans", es: "/es/beans", ja: "/ja/beans" },
    },
  };
}

export default function BeansPage() {
  return <BeansPageContent />;
}
