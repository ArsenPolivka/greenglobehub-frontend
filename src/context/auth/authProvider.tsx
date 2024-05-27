'use client';

import { ReactNode, useState } from 'react';

import { AuthContext } from './context';
import { State } from './types';

interface StorageProviderProps {
  children: ReactNode;
}

export const initialState: State = {
  user: null,
  token: null,
};

export const AuthProvider = ({ children }: StorageProviderProps) => {
  const [state, setState] = useState(initialState);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};
