'use client';

import { useEffect } from 'react';
import { useClientTranslation } from '@/internationalization/i18n/useClientTranslations';
import { Languages } from '@/utils/enums';

export const LanguageDetector = () => {
  const { i18n } = useClientTranslation();

  useEffect(() => {
    const pathname = window.location.pathname;

    if (pathname.includes(Languages.EN)) {
      i18n.changeLanguage(Languages.EN);
    } else {
      i18n.changeLanguage(Languages.UA);
    }
    console.log('Language detected based on pathname');
  }, [i18n]);

  return null;
};
