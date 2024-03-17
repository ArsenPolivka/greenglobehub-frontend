'use client';

import { useClientTranslation } from "@/internationalization/i18n/useClientTranslations";
import { redirect } from "next/navigation";

export default function Home() {
  const { i18n } = useClientTranslation();
  return i18n.language === "en" ? redirect("/en") : redirect("/ua");
}
