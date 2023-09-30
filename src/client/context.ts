'use client';

import { Context, createContext } from 'react';
import { ServerContext } from '../types';

export const ClientContext: Context<ServerContext<any>> = createContext<
  ServerContext<any>
>({} as any);
