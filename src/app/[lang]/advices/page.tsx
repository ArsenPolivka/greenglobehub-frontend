'use client';

import { useClientTranslation } from "@/internationalization/useClientTranslations";

export default function Advices() {
  const { t } = useClientTranslation();

  return (
    <main>
      <h1>{t('advices.title')}</h1>
    </main>
  );
}
