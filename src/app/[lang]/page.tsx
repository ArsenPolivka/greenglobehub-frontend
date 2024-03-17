'use client';

import { useClientTranslation } from "@/internationalization/useClientTranslations";

export default function Page() {
  const { t } = useClientTranslation();

  return (
    <main className="">
      <h1>{t('home.title')}</h1>
    </main>
  );
}
