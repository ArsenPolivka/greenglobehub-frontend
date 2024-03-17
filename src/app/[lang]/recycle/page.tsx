'use client';

import { useClientTranslation } from "@/internationalization/useClientTranslations";

export default function Recycle() {
  const { t } = useClientTranslation();

  return (
    <main className="">
      <h1>{t('recycle.title')}</h1>
    </main>
  );
}
