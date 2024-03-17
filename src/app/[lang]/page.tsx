'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useClientTranslation } from "@/internationalization/useClientTranslations";

export default function Page() {
  const [lang, setLang] = useState('');
  const { t } = useClientTranslation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const location = window.location.pathname;
      const lang = location.split("/")[1];
      setLang(lang);
    }
  }, []);

  return (
    <main className="">
      <Link href={`${lang}/news`}>{t('links.news')}</Link>
    </main>
  );
}
