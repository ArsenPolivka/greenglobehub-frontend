'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { ContainerNoSSR } from "@/components/Layout";
import { useArticleContext } from "@/hooks/useArticleContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import type { ArticleT } from "@/utils/types";
import Image from "next/image";
import { updateArticle } from '@/api/articles';
import { useGetAllArticles } from '@/hooks/useGetAllArticles';
import { Loader } from '@/components/Loader';
import { getUserById } from '@/api/auth';

type ArticleProps = {
  articleId: string;
};

export const Article = ({ articleId }: ArticleProps) => {
  const { articles: newArticles } = useGetAllArticles();
  const [{ articles }, setState] = useArticleContext();
  const [{ user }] = useAuthContext();

  const article = (articles || newArticles).find((article) => article.id === articleId);
  const { authorId, title, description, thumbnail, content, likesCount, createdAt, updatedAt } = article || {} as ArticleT;

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasLiked, setHasLiked] = useState(false);
  const [author, setAuthor] = useState<any>(null);

  const updatedDate = new Date(updatedAt || '').toLocaleString('uk-UA');
  const createdDate = new Date(createdAt || '').toLocaleString('uk-UA');

  useEffect(() => {
    if (article) {
      setEditedContent(content);
      setLoading(false);
      setLikes(likesCount);

      const likedArticles = JSON.parse(localStorage.getItem('likedArticles') || '{}');
      setHasLiked(likedArticles[articleId] || false);

      const findAuthor = async () => {
        const response = await getUserById(authorId);
        setAuthor(response);

        return response;
      }

      findAuthor();
    }
  }, [article, content, likesCount, articleId]);

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await updateArticle(articleId, {
      content: editedContent,
      updatedAt: new Date()
    });

    setState((state) => ({
      ...state,
      articles: state.articles.map((article) => {
        if (article.id === articleId) {
          return {
            ...article,
            content: editedContent,
          };
        }

        return article;
      })
    }));

    setIsEditing(false);
  };

  const handleLike = async () => {
    if (hasLiked) return;

    const newLikesCount = likes + 1;
    setLikes(newLikesCount);
    setHasLiked(true);

    await updateArticle(articleId, { likesCount: newLikesCount });

    setState((state) => ({
      ...state,
      articles: state.articles.map((article) => {
        if (article.id === articleId) {
          return {
            ...article,
            likesCount: newLikesCount,
          };
        }

        return article;
      })
    }));

    const likedArticles = JSON.parse(localStorage.getItem('likedArticles') || '{}');
    likedArticles[articleId] = true;
    localStorage.setItem('likedArticles', JSON.stringify(likedArticles));
  };

  if (loading) {
    return (
      <div className='bg-white w-full h-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="relative">
        <div className="absolute w-full h-full bg-black opacity-50" />
        <Image src={thumbnail} width={1200} height={600} alt={title} className="w-full h-96 object-cover" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-main-white text-center">
          <h2 className="text-h2 font-semibold uppercase mb-4">{title}</h2>
          <p className="font-light">{description}</p>
        </div>
      </div>

      <ContainerNoSSR>
        <div className="my-10">
          <div className='flex justify-between items-start mb-10'>
            <div>
              <p className="font-light text-xs uppercase mb-1">{author?.name}</p>
              <h3 className="text-2xl font-semibold capitalize mb-3">{title}</h3>
              <p className="text-xs font-light">Created at: {createdDate}</p>
              {(updatedAt && user) && <p className="text-xs font-light mt-1">Updated at: {updatedDate}</p>}
            </div>
            <Button onClick={handleLike} disabled={hasLiked} variant={`${hasLiked ? 'disabled' : 'secondary'}`}>
              Like: {likes}
            </Button>
          </div>

          {user ? (
            <>
              {isEditing ? (
                <form onSubmit={handleSave}>
                  <Input
                    variant="textarea"
                    id="content"
                    className="w-full h-[600px]"
                    value={editedContent}
                    onChangeTextarea={(e) => {
                      setEditedContent(e.target.value);
                    }}
                  />
                  <Button className="mt-4" type='submit'>Save changes</Button>
                </form>
              ) : (
                <div className="article-content">
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                  <Button className="mt-8" onClick={() => setIsEditing(true)}>Edit an article</Button>
                </div>
              )}
            </>
          ) : (
            <div className="article-content">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          )}
        </div>
      </ContainerNoSSR>
    </>
  );
};
