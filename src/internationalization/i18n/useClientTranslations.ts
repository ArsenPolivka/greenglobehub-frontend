'use client';

import { useEffect } from "react";
import { useTranslation as useTranslationOrg } from 'react-i18next';
import { initialize } from "./i18n";
import { defaultNS, runsOnServerSide } from "./options";

export function useClientTranslation(
  lng?: string | undefined,
  ns: string | string[] = defaultNS,
  options: any = {}
) {
  initialize(lng);
  const ret = useTranslationOrg(ns, options);
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const { i18n } = ret;

  const globalLocale = (global as any).locale;
  if (runsOnServerSide && i18n.resolvedLanguage !== globalLocale) {
    i18n.changeLanguage(globalLocale);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (lng && i18n.language !== lng) {
        i18n.changeLanguage(lng);
      }
    }, [lng, i18n, pathname]);
  }
  return ret;
}
