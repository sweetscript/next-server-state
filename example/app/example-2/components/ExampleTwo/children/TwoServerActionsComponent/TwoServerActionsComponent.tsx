'use client';

import { useTwoServerState } from '../../state';
import { actionDecrementCounter, actionIncrementCounter } from './actions';

const TwoServerActionsComponent = () => {
  const [state] = useTwoServerState();

  return (
    <div className="p-4 rounded-lg relative">
      <div
        className="absolute inset-0 border border-dashed border-blue-500 bg-blue-100 rounded-lg animate-flash-once -z-10"
        key={Math.random()}
      ></div>
      <p>Client component with server actions</p>
      <div className="flex mt-2 items-center max-w-full">
        <p className="font-semibold flex-auto bg-blue-700/10 px-2 py-1 rounded">
          Counter: {`${state.counter ?? '0'}`}
        </p>
        <form action={actionDecrementCounter}>
          <button className="button button-sky ml-2 shrink-0">
            <span className="font-light scale-125 inline-block">-</span>
          </button>
        </form>
        <form action={actionIncrementCounter}>
          <button className="button button-sky ml-2 shrink-0">
            <span className="font-light scale-125 inline-block">+</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default TwoServerActionsComponent;
