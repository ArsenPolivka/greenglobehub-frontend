'use client';

import Link from "next/link";
import { useClientTranslation } from "@/internationalization/i18n/useClientTranslations";

export default function News() {
  const { t } = useClientTranslation();

  return (
    <main className="">
      <Link href="/">{t("links.home")}</Link>
    </main>
  );
}
