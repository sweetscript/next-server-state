'use client';

import { useEffect, useState } from 'react';
import { useE1ServerState } from '../../state';
import { actionUpdateName } from './actions';

const E1ServerActionsComponent = () => {
  const [state] = useE1ServerState();

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  useEffect(() => {
    if (state && state.first_name !== '') {
      setFirstName('');
      setLastName('');
    }
  }, [state]);

  return (
    <div className="relative rounded-lg p-4">
      <div
        className="absolute inset-0 -z-10 animate-flash-once rounded-lg border border-dashed border-blue-500 bg-blue-100 dark:bg-blue-500/20"
        key={Math.random()}
      ></div>
      <p>Client component with server actions</p>
      <p className="mt-2 flex-auto rounded bg-blue-700/10 px-2 py-1 font-semibold">
        Full Name: {(state.first_name ?? '') + ' ' + (state.last_name ?? '')}
      </p>

      <form
        action={actionUpdateName}
        className="mt-2 flex max-w-full items-center"
      >
        <input
          type="text"
          placeholder="First name"
          className="input w-auto flex-auto"
          name="first_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          className="input ml-2 w-auto flex-auto"
          name="last_name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button className="button button-primary ml-2">Update</button>
      </form>
    </div>
  );
};

export default E1ServerActionsComponent;
