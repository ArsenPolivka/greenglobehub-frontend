import { createContext } from 'react';
import { SetState, State } from './types';

export const ArticlesContext = createContext<[State, SetState] | undefined>(undefined);
