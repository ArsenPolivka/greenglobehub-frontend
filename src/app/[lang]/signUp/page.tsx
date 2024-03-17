'use client';

import { useClientTranslation } from "@/internationalization/useClientTranslations";

export default function SignUp() {
  const { t } = useClientTranslation();

  return (
    <main>
      <h1>{t('signUp.title')}</h1>
    </main>
  );
}
