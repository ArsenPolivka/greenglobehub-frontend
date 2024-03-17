'use client';

import { useEffect, useState } from "react";

const getLang = () => {
  const [lang, setLang] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const location = window.location.pathname;
      const lang = location.split("/")[1];
      setLang(lang);
    }
  }, []);

  return lang;
};

export default getLang;
