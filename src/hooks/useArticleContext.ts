import { useContext } from 'react';

import { ArticlesContext } from '@/context/articles/context';

export const useArticleContext = () => {
  const context = useContext(ArticlesContext);

  if (!context) {
    throw new Error('useArticlesContext must be used within a ArticleProvider');
  }

  return context;
};
