import { CreateServerState, UseServerContext } from '../types';
import { useContext } from 'react';

export function useServerState<T extends Record<string, any>>(
  serverContext: CreateServerState<T>
): UseServerContext<T> {
  const context = useContext(serverContext.ClientContext);
  return [context.state, context.updateState];
}
