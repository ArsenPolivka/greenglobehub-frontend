'use client';

import { ReactNode, useEffect } from 'react';
import { useClientTranslation } from '@/internationalization/useClientTranslations';
import { Languages } from '@/utils/enums';

type LanguageDetectorProps = {
  children: ReactNode;
};

export const LanguageDetector = ({ children }: LanguageDetectorProps) => {
  const { i18n } = useClientTranslation();

  useEffect(() => {
    const pathname = window.location.pathname;

    if (pathname.includes(Languages.EN)) {
      i18n.changeLanguage(Languages.EN);
    } else {
      i18n.changeLanguage(Languages.UA);
    }
  }, [i18n]);

  return (
    <>
      {children}
    </>
  );
};
