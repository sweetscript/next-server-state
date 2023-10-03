'use client';

import React, { useEffect, useRef } from 'react';
import { BridgeProps } from '../types';

const Bridge = (props: BridgeProps) => {
  const {
    // enableSSE,
    state,
    updateState,
    uniqueKey,
    onUpdateFinish
  } = props;
  const updateController = useRef<AbortController | null>(null);
  const readyRef = useRef(false);

  useEffect(() => {
    if (!readyRef.current) {
      readyRef.current = true;
      return;
    }

    if (!state) return;
    if (updateController.current) {
      updateController.current.abort();
    }

    const newController = new AbortController();
    updateController.current = newController;

    fetch(`/api/server-state/handle/${uniqueKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state),
      signal: newController.signal
    })
      .then(() => {
        onUpdateFinish();
      })
      .catch((e) => {
        console.log('e', e);
      });

    return () => {
      updateController.current?.abort();
    };
  }, [state]);

  useEffect(() => {
    // Attach fetch listener to listen for server actions and refresh the status
    function fetchStateFromServer() {
      fetch(`/api/server-state/handle/${uniqueKey}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
        .then((res) => res.json())
        .then((res) => {
          updateState(res);
          setTimeout(() => {
            onUpdateFinish();
          }, 50);
        })
        .catch(() => {
          //
        });
    }
    window.addEventListener('server-action-settled', fetchStateFromServer);

    return () => {
      // Detach fetch listener
      window.removeEventListener('server-action-settled', fetchStateFromServer);
    };
  }, []);

  /*let eventSource: EventSource | undefined;
  useEffect(() => {
    if (enableSSE) {
      eventSource = new EventSource(`/api/server-state/sse`, {
        withCredentials: true
      });
      eventSource.onopen = () => {
        console.log('open');
      };
      eventSource.onmessage = (e) => {
        console.log(e.data);
      };
      eventSource.onerror = (e) => {
        console.log(e);
      };
    }
    return () => {
      if (enableSSE && eventSource) {
        eventSource.close();
      }
    };
  }, []);*/

  return <span></span>;
};

export default Bridge;
