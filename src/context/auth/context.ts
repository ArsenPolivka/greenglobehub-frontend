import { createContext } from 'react';
import { SetState, State } from './types';

export const AuthContext = createContext<[State, SetState] | undefined>(undefined);
