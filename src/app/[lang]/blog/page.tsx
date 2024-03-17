'use client';

import { useClientTranslation } from "@/internationalization/useClientTranslations";

export default function Blog() {
  const { t } = useClientTranslation();

  return (
    <main>
      <h1>{t('blog.title')}</h1>
    </main>
  );
}
