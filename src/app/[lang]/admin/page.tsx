import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { ArticleList } from '@/sections/Blog/ArticleList';

export default async function Page({ params }: { params: { lang: string, rest: string } }): Promise<JSX.Element> {
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

  return (
    <>
      <ArticleList authToken={authToken.value} />
    </>
  );
}
