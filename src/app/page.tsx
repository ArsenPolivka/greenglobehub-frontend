'use client';

import { redirect } from "next/navigation";
import { useClientTranslation } from "@/internationalization/useClientTranslations";
import { Languages } from "@/utils/enums";

export default function Home() {
  const { i18n } = useClientTranslation();
  return i18n.language === Languages.EN ? redirect(`/${Languages.EN}`) : redirect(`/${Languages.UA}`);
}
