import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { MenuPageContent } from "./MenuPageContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("menu_page");
  return {
    title: `${t("heading_2")} — Ki'bok Coffee SMA`,
    description: t("subheading"),
  };
}

export default function MenuPage() {
  return <MenuPageContent />;
}
