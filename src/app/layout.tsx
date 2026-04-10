import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ki'bok Coffee SMA — Specialty Coffee in San Miguel de Allende",
  description:
    "Organic specialty coffee, homemade pastries, and locally sourced meals in the heart of San Miguel de Allende's Centro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
