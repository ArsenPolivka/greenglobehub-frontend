'use client';

import { useClientTranslation } from "@/internationalization/useClientTranslations";

export default function SignIn() {
  const { t } = useClientTranslation();

  return (
    <main>
      <h1>{t('signIn.title')}</h1>
    </main>
  );
}
