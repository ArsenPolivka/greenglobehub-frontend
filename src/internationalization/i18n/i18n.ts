'use client';

import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions, languages, runsOnServerSide } from './options';

let hasInit = false;

export const initialize = (lng?: string) => {
  if (hasInit) {
    return;
  }
  hasInit = true;

  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`/public/locales/${language}/${namespace}.json`)
      )
    )
    .init({
      ...getOptions(),
      lng: lng || undefined,
      detection: {
        order: [ "cookie", "path", "htmlTag", "navigator"],
      },
      preload: runsOnServerSide ? languages : [],
    });
};
