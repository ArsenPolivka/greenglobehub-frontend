import { cookies } from "next/headers";

const setGlobalLocaleHack = () => {
  const cookieLocale = cookies().get('i18next')?.value;
  (global as any).locale = cookieLocale || 'en';
};

export default setGlobalLocaleHack;
