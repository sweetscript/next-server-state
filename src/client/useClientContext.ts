import { useContext } from 'react';
import { ClientContext } from './context';
import { Obj } from '../types';

export function useClientContext<T extends Obj>() {
  return useContext<T>(ClientContext as any);
}
