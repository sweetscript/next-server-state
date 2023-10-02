'use client';

import { useTwoServerState } from '../state';
import { FormEventHandler, useState } from 'react';

const E2ClientComponent = () => {
  const [state, updateState] = useTwoServerState();

  const handleIncrement = () => {
    updateState({
      counter: Number(state.counter ?? 0) + 1
    });
  };
  const handleDecrement = () => {
    updateState({
      counter: Number(state.counter ?? 0) - 1
    });
  };

  return (
    <div className="relative mb-4 rounded-lg p-4">
      <div
        className="absolute inset-0 -z-10 animate-flash-once rounded-lg border border-dashed border-teal-500 bg-teal-100 dark:bg-teal-500/20"
        key={Math.random()}
      ></div>
      <p>Client Component</p>

      <div className="mt-2 flex max-w-full items-center">
        <p className="flex-auto rounded bg-teal-700/10 px-2 py-1 font-semibold">
          Counter: {`${state.counter ?? '0'}`}
        </p>
        <button
          type="button"
          className="button button-primary ml-2 shrink-0"
          onClick={handleDecrement}
        >
          <span className="inline-block scale-125 font-light">-</span>
        </button>
        <button
          type="button"
          className="button button-primary ml-2 shrink-0"
          onClick={handleIncrement}
        >
          <span className="inline-block scale-125 font-light">+</span>
        </button>
      </div>
    </div>
  );
};

export default E2ClientComponent;
