import { CreateServerState, Obj, UseServerContext } from '../types';
import { useContext } from 'react';

export function useServerState<T extends Obj>(
  serverContext: CreateServerState<T>
): UseServerContext<T> {
  const context = useContext(serverContext.ClientContext);
  return [context.state, context.updateState];
}
