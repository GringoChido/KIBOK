import { redirect } from "next/navigation";

// Redirect non-localized /menu to the default locale
export default function MenuPage() {
  redirect("/en/menu");
}
