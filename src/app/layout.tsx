import type { Metadata } from "next";
import { Space_Grotesk, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kibokcoffee-sma.com"),
  title: "Ki'bok Coffee SMA — Specialty Coffee in San Miguel de Allende",
  description:
    "Organic specialty coffee, homemade pastries, and locally sourced meals in the heart of San Miguel de Allende's Centro.",
  openGraph: {
    images: [
      {
        url: "/ASSETS/86364c926e7f98c6039a30012bff5781.webp",
        width: 1200,
        height: 630,
        alt: "Ki'bok Coffee SMA — Organic coffee in San Miguel de Allende",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${spaceGrotesk.variable} ${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        {children}
      </body>
    </html>
  );
}
