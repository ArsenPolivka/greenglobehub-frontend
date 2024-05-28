import { Article } from "@/sections/Blog/Article";

type ArticlePageProps = {
  params: {
    id: string,
  },
}

export default async function Page({ params }: ArticlePageProps): Promise<JSX.Element> {
  return (
    <>
      <Article articleId={params.id} />
    </>
  );
}
