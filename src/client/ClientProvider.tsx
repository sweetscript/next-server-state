'use client';

import React, { useCallback, useEffect, useReducer } from 'react';
import { ClientContext } from './context';
import { ClientProviderProps, Obj } from '../types';
import Bridge from '../bridge/Bridge';
import { useRouter } from 'next/navigation';

function ClientProvider<T>(props: ClientProviderProps<T>) {
  const {
    initState,
    uniqueKey,
    enableSSE,
    persist,
    disableRouterRefresh,
    disableApiUpdateRequest,
    disableApiFetchRequest,
    defaultValues,
    children
  } = props;
  const router = useRouter();

  const refreshRouter = useCallback(() => {
    if (disableRouterRefresh) return;
    // Not ideal, but only way to rerender server components is refresh router
    router.refresh();
  }, []);

  const [state, updateState] = useReducer(
    (prev: T, next: Partial<T> | Obj) => {
      return { ...prev, ...next };
    },
    initState,
    (data: any) => {
      // Reset state if persist disabled
      return persist ? data : defaultValues;
    }
  );

  useEffect(() => {
    // Create fetch proxy if it doesn't already exist
    // The proxy triggers an event when next server actions are settled
    if (!disableApiFetchRequest && !window.fetchProxyAdded) {
      window.fetch = new Proxy(window.fetch, {
        apply(actualFetch, that, args) {
          const result = Reflect.apply(actualFetch, that, args);

          result.then(() => {
            if (
              args &&
              Array.isArray(args) &&
              args.filter((a) => a.headers?.['Next-Action']).length > 0
            ) {
              window.dispatchEvent(new Event('server-action-settled'));
            }
          });

          return result;
        }
      });
      window.fetchProxyAdded = true;
    }
    return () => {};
  }, []);

  return (
    <ClientContext.Provider value={{ state, updateState }}>
      {children}
      <Bridge
        state={state}
        updateState={updateState}
        uniqueKey={uniqueKey}
        enableSSE={enableSSE}
        onUpdateFinish={refreshRouter}
      />
    </ClientContext.Provider>
  );
}

export default ClientProvider;
