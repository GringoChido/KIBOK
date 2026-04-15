import type { Metadata } from "next";
import { BlogPageContent } from "./BlogPageContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const meta = {
    en: {
      title:
        "Blog — Ki'bok Coffee SMA | Coffee Stories from San Miguel de Allende",
      description:
        "Stories from the roastery, brewing guides, and dispatches from San Miguel de Allende.",
    },
    es: {
      title:
        "Blog — Ki'bok Coffee SMA | Historias de Café desde San Miguel de Allende",
      description:
        "Historias de la tostaduría, guías de preparación y despachos desde San Miguel de Allende.",
    },
    ja: {
      title:
        "ブログ — Ki'bok Coffee SMA | サン・ミゲル・デ・アジェンデからのコーヒーストーリー",
      description:
        "焙煎所からの物語、淹れ方ガイド、サン・ミゲル・デ・アジェンデからの便り。",
    },
  };

  const t = meta[locale as keyof typeof meta] || meta.en;

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://kibokcoffee-sma.com/${locale}/blog`,
      siteName: "Ki'bok Coffee SMA",
      locale: locale === "es" ? "es_MX" : locale === "ja" ? "ja_JP" : "en_US",
      type: "website",
      images: [
        {
          url: "/ASSETS/86364c926e7f98c6039a30012bff5781.webp",
          width: 1200,
          height: 630,
          alt: "Ki'bok Coffee SMA — Blog",
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
      canonical: `https://kibokcoffee-sma.com/${locale}/blog`,
      languages: { en: "/en/blog", es: "/es/blog", ja: "/ja/blog" },
    },
  };
}

export default function BlogPage() {
  return <BlogPageContent />;
}
