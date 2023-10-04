import React from 'react';
import {
  CreateServerStateProvider,
  Obj,
  ServerStateProviderProps
} from '../types';
import ClientProvider from '../client/ClientProvider';

export function createServerStateProvider<T extends Obj>(
  defaultValues: T,
  options: ServerStateProviderProps<T>
): CreateServerStateProvider {
  const { session, uniqueKey, enableSSE, persist, disableRouterRefresh } =
    options;

  return async function handler(props) {
    const initState = session ? ((await session().get(uniqueKey)) as T) : null;

    const { children } = props;

    return (
      <ClientProvider
        initState={initState ?? defaultValues}
        defaultValues={defaultValues}
        uniqueKey={uniqueKey}
        enableSSE={enableSSE}
        persist={persist}
        disableRouterRefresh={disableRouterRefresh}
      >
        {children}
      </ClientProvider>
    );
  };
}
