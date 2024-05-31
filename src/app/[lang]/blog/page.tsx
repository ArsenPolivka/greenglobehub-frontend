import { ArticleList } from "@/sections/Blog/ArticleList";
import { cookies } from "next/headers";

export default async function Page(): Promise<JSX.Element> {
  const cookieStore = cookies();
  const authToken = cookieStore.get('authToken');

  return (
    <>
      <ArticleList authToken={authToken?.value || ''} />
    </>
  );
}
