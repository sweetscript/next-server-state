import React from 'react';
import { CreateServerStateProvider, ServerStateProviderProps } from '../types';
import ClientProvider from '../client/ClientProvider';

export function createServerStateProvider<T extends Record<string, any>>(
  defaultValues: T,
  options: ServerStateProviderProps<T>
): CreateServerStateProvider {
  const { session, uniqueKey, enableSSE, persist, disableRouterRefresh } =
    options;

  return async function handler(props) {
    const initState = session ? ((await session().get(uniqueKey)) as T) : null;

    const { children } = props;
    console.log(`server render ${uniqueKey}`);
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
