'use client';

import { debounce, set } from 'lodash';
import { Input } from '@/components/Input';
import { ContainerNoSSR } from '@/components/Layout';
import { useGetAllArticles } from '@/hooks/useGetAllArticles';
import React, { useCallback, useEffect, useState } from 'react'
import { AddArticle } from '../AddArticle';
import { useAuthContext } from '@/hooks/useAuthContext';
import { searchArticles } from '@/api/articles';
import { ArticleT } from '@/utils/types';
import Link from 'next/link';
import GetLang from '@/helpers/getLang';
import { usePathname } from 'next/navigation';
import { Loader } from '@/components/Loader';
import Image from 'next/image';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

type ArticleListProps = {
  authToken: string;
}

export const ArticleList = ({ authToken }: ArticleListProps) => {
  const { articles, refetch, loading: initialLoading } = useGetAllArticles();
  const [{ user }] = useAuthContext();
  const pathname = usePathname();

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const lang = GetLang();

  const debouncedSearch = useCallback(
    debounce(async (query) => {
      setLoading(true);
      const response = await searchArticles(query);
      setFilteredArticles(response);
      setLoading(false);
    }, 1000),
    []
  );

  useEffect(() => {
    if (searchQuery) {
      debouncedSearch(searchQuery);
    } else {
      setFilteredArticles(articles);
    }
  }, [searchQuery, articles]);

  return (
    <ContainerNoSSR>
      <h2 className='text-h2-mobile md:text-h2 uppercase mb-10'>Blog</h2>

      <section className='flex justify-between gap-4 mb-8 border-b border-black/20 pb-6'>
        <Input
          wrapperClassName='mt-full rounded-md flex-1 max-w-md'
          className='w-full h-full'
          placeholder='Search for articles'
          onChangeInput={(e) => setSearchQuery(e.target.value)}
        />

        {user && <AddArticle refetch={refetch} authToken={authToken} />}
      </section>
        {loading || initialLoading ? (
          <div className='w-full flex justify-center mt-20'>
            <Loader />
          </div>
        ) : (
          <>
            {articles.length === 0 && <p className='h-60 mt-20 text-center'>No articles found.</p>}

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-stretch'>
              {(searchQuery ? filteredArticles : articles).map((article: ArticleT) => {
                const date = new Date(article.createdAt).toLocaleString('uk-UA');
                const normalizedPathname = pathname.replace(new RegExp(`/${lang}`, 'g'), `/${lang}`).replace(`/${lang}/${lang}`, `/${lang}`);

                return (
                  <Link key={article.title} href={`${normalizedPathname}/${article.id}`}>
                    <div key={article.title} className='w-full flex flex-col bg-primary-100 bg-opacity-25 group rounded-lg overflow-hidden'>
                      <div className='relative group-hover:scale-110 duration-300 ease-in-out transition-all'>
                        <div className='w-full h-full absolute bg-black/0 z-10 group-hover:bg-black/20' />
                        <Image
                          width={1200}
                          height={600}
                          src={article.thumbnail}
                          alt={article.title}
                          className='w-full h-60 object-cover transform group-hover:shadow-lg rounded-t-lg'
                        />
                      </div>

                      <div className='p-4 flex flex-col justify-between h-full'>
                        <div className='mb-10'>
                          <h2 className='text-xl uppercase font-semibold mb-3'>{article.title}</h2>
                          <p className='truncate'>{article.description}</p>
                        </div>

                        <div className='flex justify-between'>
                          <span>{date}</span>
                          <span>Likes: {article.likesCount}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )}
    </ContainerNoSSR>
  )
}
