'use client';

import { useClientTranslation } from "@/internationalization/useClientTranslations";

export default function News() {
  const { t } = useClientTranslation();

  return (
    <main>
      <h1>{t('news.title')}</h1>
    </main>
  );
}
