'use client';

import { useClientTranslation } from "@/internationalization/useClientTranslations";

const GetTranslated = (key: string) => {
  const { t } = useClientTranslation();

  return t(key);
};

export default GetTranslated;
