'use client';

import { ReactNode, useEffect, useState } from 'react';

import { ArticlesContext } from './context';
import { State } from './types';

interface StorageProviderProps {
  children: ReactNode;
}

export const initialState: State = {
  articles: [],
  currentArticle: null,
};

export const ArticleProvider = ({ children }: StorageProviderProps) => {
  const [state, setState] = useState(initialState);

  return (
    <ArticlesContext.Provider value={[state, setState]}>
      {children}
    </ArticlesContext.Provider>
  );
};
