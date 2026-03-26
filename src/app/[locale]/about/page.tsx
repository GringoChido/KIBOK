import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutPageContent } from "./AboutPageContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about_page");
  return {
    title: `${t("heading_2")} — Ki'bok Coffee SMA`,
  };
}

export default function AboutPage() {
  return <AboutPageContent />;
}
