import { useContext } from 'react';
import { ClientContext } from './context';

export function useClientContext<T extends Record<any, any>>() {
  return useContext<T>(ClientContext as any);
}
