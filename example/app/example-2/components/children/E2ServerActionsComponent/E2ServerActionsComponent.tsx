'use client';

import { useTwoServerState } from '../../state';
import { actionDecrementCounter, actionIncrementCounter } from './actions';

const E2ServerActionsComponent = () => {
  const [state] = useTwoServerState();

  return (
    <div className="relative rounded-lg p-4">
      <div
        className="absolute inset-0 -z-10 animate-flash-once rounded-lg border border-dashed border-blue-500 bg-blue-100 dark:bg-blue-500/20"
        key={Math.random()}
      ></div>
      <p>Client component with server actions</p>
      <div className="mt-2 flex max-w-full items-center">
        <p className="flex-auto rounded bg-blue-700/10 px-2 py-1 font-semibold">
          Counter: {`${state.counter ?? '0'}`}
        </p>
        <form action={actionDecrementCounter}>
          <button className="button button-primary ml-2 shrink-0">
            <span className="inline-block scale-125 font-light">-</span>
          </button>
        </form>
        <form action={actionIncrementCounter}>
          <button className="button button-primary ml-2 shrink-0">
            <span className="inline-block scale-125 font-light">+</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default E2ServerActionsComponent;
