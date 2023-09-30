'use client';

import React, { useCallback, useEffect, useReducer, useRef } from 'react';
import { ClientContext } from './context';
import { ClientProviderProps } from '../types';
import Bridge from '../bridge/Bridge';
import { useRouter } from 'next/navigation';

function ClientProvider<T>(props: ClientProviderProps<T>) {
  const { initState, uniqueKey, enableSSE, children } = props;
  const router = useRouter();
  const readyRef = useRef(false);

  const refreshTimestamp = useCallback(() => {
    if (!readyRef.current) {
      readyRef.current = true;
      return;
    }
    // Not ideal, but only way to refresh server components is refresh router
    router.refresh();
  }, [readyRef.current]);

  const [state, updateState] = useReducer(
    (prev: T, next: Partial<T> | Record<string, any>) => {
      return { ...prev, ...next };
    },
    initState
  );
  // console.log(`${uniqueKey} render`);

  // useEffect(() => {
  //   if (!readyRef.current) {
  //     readyRef.current = true;
  //     return;
  //   }
  //
  //   refreshTimestamp();
  // }, [state]);

  useEffect(() => {
    console.log(`ClientProvider ${uniqueKey} Added`);

    // Create fetch proxy if it doesn't already exist
    // The proxy triggers an event when next server actions are settled
    if (!window.fetchProxyAdded) {
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
    return () => {
      console.log(`ClientProvider ${uniqueKey} REMOVED`);
    };
  }, []);

  return (
    <ClientContext.Provider value={{ state, updateState }}>
      {children}
      <Bridge
        state={state}
        updateState={updateState}
        uniqueKey={uniqueKey}
        enableSSE={enableSSE}
        onUpdateFinish={refreshTimestamp}
      />
    </ClientContext.Provider>
  );
}

export default ClientProvider;
