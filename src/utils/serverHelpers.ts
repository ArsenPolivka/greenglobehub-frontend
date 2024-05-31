'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const authSecurity = (params: any) => {
  const cookieStore = cookies();
  const authToken = cookieStore.get('authToken');
  const lang = cookieStore.get('i18next')?.value;

  if (!lang) {
    redirect('/');
  }

  const { lang: urlLang, rest: urlRest } = params;
  const pathname = `/${urlLang}/${urlRest}`;

  const normalizedPathname = pathname.replace(new RegExp(`/${lang}`, 'g'), `/${lang}`).replace(`/${lang}/${lang}`, `/${lang}`);

  if (pathname !== normalizedPathname) {
    redirect(normalizedPathname);
  }

  if (!authToken || !authToken.value) {
    redirect(`/${lang}/signUp`);
  }
}
