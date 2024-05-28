'use client';

import { ContainerNoSSR } from '@/components/Layout';
import { NewsCard } from '@/components/NewsCard';
import { Link } from '@/components/Link';
import { Routes } from '@/utils/enums';

import { useClientTranslation } from '@/internationalization/useClientTranslations';
import { useFetchShortNews } from '@/hooks/news/useFetchShortNews';
import { Loader } from '@/components/Loader';

export const News = () => {
  const { t, i18n } = useClientTranslation();
  const { articles, loading, error } = useFetchShortNews(4);

  const title = t('home.news.title');
  const linkLabel = t('home.news.linkLabel');

  if (loading) {
    return (
      <div className='bg-white w-full h-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
        <Loader />
      </div>
    );
  }

  if (error) return <p className='text-red-700'>Error: {error}</p>;

  return (
    <ContainerNoSSR>
      <div className='flex justify-between items-center mb-10'>
        <h2 className='text-h2-mobile md:text-h2 uppercase'>
          { title }
        </h2>

        <Link to={`${i18n.language}${Routes.News}`} variant='tertiary'>
          { linkLabel }
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10'>
        {articles?.map((article: any) => (
          <NewsCard
            content={article}
            key={article?.title}
          />
        ))}
      </div>
    </ContainerNoSSR>
  )
}
