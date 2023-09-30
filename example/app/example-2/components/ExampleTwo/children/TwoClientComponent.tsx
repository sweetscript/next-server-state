'use client';

import { useTwoServerState } from '../state';
import { FormEventHandler, useState } from 'react';

const TwoClientComponent = () => {
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
    <div className="p-4 rounded-lg mb-4 relative">
      <div
        className="absolute inset-0 border border-dashed border-teal-500 bg-teal-100 rounded-lg animate-flash-once -z-10"
        key={Math.random()}
      ></div>
      <p>Client Component</p>

      <div className="flex mt-2 items-center max-w-full">
        <p className="font-semibold flex-auto bg-teal-700/10 px-2 py-1 rounded">
          Counter: {`${state.counter ?? '0'}`}
        </p>
        <button
          type="button"
          className="button button-sky ml-2 shrink-0"
          onClick={handleDecrement}
        >
          <span className="font-light scale-125 inline-block">-</span>
        </button>
        <button
          type="button"
          className="button button-sky ml-2 shrink-0"
          onClick={handleIncrement}
        >
          <span className="font-light scale-125 inline-block">+</span>
        </button>
      </div>
    </div>
  );
};

export default TwoClientComponent;
