import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { VisitPageContent } from "./VisitPageContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("visit_page");
  return {
    title: `${t("heading_1")}${t("heading_2")} — Ki'bok Coffee SMA`,
  };
}

export default function VisitPage() {
  return <VisitPageContent />;
}
