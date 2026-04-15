import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Noto_Sans_JP } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/shared/GrainOverlay";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { SpotifyWidget } from "@/components/layout/SpotifyWidget";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-ja",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: false,
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "es" | "ja")) {
    notFound();
  }

  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Ki'bok Coffee SMA",
    image:
      "https://kibokcoffee-sma.com/ASSETS/86364c926e7f98c6039a30012bff5781.webp",
    url: "https://kibokcoffee-sma.com",
    telephone: "+524151215267",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Diez de Sollano y Dávalos #25",
      addressLocality: "San Miguel de Allende",
      addressRegion: "Guanajuato",
      postalCode: "37700",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.914,
      longitude: -100.7438,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
    servesCuisine: ["Coffee", "Mexican", "Breakfast", "Lunch"],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "728",
      bestRating: "5",
    },
    sameAs: [
      "https://www.instagram.com/kibokcoffeesma/",
      "https://www.facebook.com/Kiboksma/",
      "https://www.tripadvisor.com/Restaurant_Review-g151932-d12553292-Reviews-Ki_bok_Coffee_SMA-San_Miguel_de_Allende_Central_Mexico_and_Gulf_Coast.html",
    ],
  };

  return (
    <NextIntlClientProvider messages={messages}>
      <div className={locale === "ja" ? notoSansJP.variable : undefined}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GrainOverlay />
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <SpotifyWidget />
        <MobileCTA />
      </div>
    </NextIntlClientProvider>
  );
}
