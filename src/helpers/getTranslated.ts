'use client';

import { useClientTranslation } from "@/internationalization/useClientTranslations";

const getTranslated = (key: string) => {
  const { t } = useClientTranslation();

  return t(key);
};

export default getTranslated;
