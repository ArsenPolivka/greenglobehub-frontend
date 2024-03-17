'use client';

import Link from "next/link";
import { useClientTranslation } from "@/internationalization/useClientTranslations";

export default function News() {
  const { t } = useClientTranslation();

  return (
    <main>
      <Link href="/">{t("links.home")}</Link>
    </main>
  );
}
