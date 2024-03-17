'use client';

import { useClientTranslation } from "@/internationalization/useClientTranslations";

export default function GGAI() {
  const { t } = useClientTranslation();

  return (
    <main>
      <h1>{t('greenGlobeAI.title')}</h1>
    </main>
  );
}
