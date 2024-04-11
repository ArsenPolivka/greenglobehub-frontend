'use client';

import { ContainerNoSSR } from "@/components/Layout";
import { Loader } from "@/components/Loader";
import { NewsPageCard } from "@/components/NewsCard";
import { useFetchShortNews } from "@/hooks/news/useFetchShortNews";
import { useClientTranslation } from "@/internationalization/useClientTranslations";

export default function Page(): JSX.Element {
  const { t } = useClientTranslation();

  const { articles, loading, error } = useFetchShortNews(12);

  const title = t('home.news.title');
  const linkLabel = t('home.news.linkLabel');

  if (loading) {
    return (
      <div className='bg-white w-full h-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Loader />
      </div>
    );
  }

  if (error) return <p className='text-red-700'>Error: {error}</p>;

  return (
    <ContainerNoSSR className="space-y-8">
      {articles.map((article: any) => (
          <NewsPageCard
            content={article}
            key={article?.title}
          />
        ))}
    </ContainerNoSSR>
  );
}
