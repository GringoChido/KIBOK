import type { Metadata } from "next";
import { MenuPageContent } from "./MenuPageContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const meta = {
    en: {
      title: "Menu — Ki'bok Coffee SMA | Coffee, Breakfast & Lunch in Centro",
      description:
        "Full menu — organic espresso drinks, the signature Hemingway, house-baked pastries, and locally sourced breakfast & lunch. Vegetarian, vegan & GF options. San Miguel de Allende.",
    },
    es: {
      title:
        "Menú — Ki'bok Coffee SMA | Café, Desayuno y Comida en el Centro",
      description:
        "Menú completo — bebidas de espresso orgánico, el Hemingway, repostería casera, desayuno y comida con ingredientes locales. Opciones vegetarianas, veganas y sin gluten. San Miguel de Allende.",
    },
    ja: {
      title: "メニュー — Ki'bok Coffee SMA | セントロのコーヒー＆ブランチ",
      description:
        "オーガニックエスプレッソ、シグネチャーのヘミングウェイ、自家製ペストリー、地元食材の朝食＆ランチ。ベジタリアン・ヴィーガン対応。サン・ミゲル・デ・アジェンデ。",
    },
  };

  const t = meta[locale as keyof typeof meta] || meta.en;

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://kibokcoffee-sma.com/${locale}/menu`,
      siteName: "Ki'bok Coffee SMA",
      locale: locale === "es" ? "es_MX" : locale === "ja" ? "ja_JP" : "en_US",
      type: "website",
      images: [
        {
          url: "/ASSETS/86364c926e7f98c6039a30012bff5781.webp",
          width: 1200,
          height: 630,
          alt: "Ki'bok Coffee SMA — Menu",
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
      canonical: `https://kibokcoffee-sma.com/${locale}/menu`,
      languages: { en: "/en/menu", es: "/es/menu", ja: "/ja/menu" },
    },
  };
}

export default function MenuPage() {
  return <MenuPageContent />;
}
