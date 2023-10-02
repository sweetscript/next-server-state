'use client';

import { useE1ServerState } from '../state';
import { FormEventHandler, useState } from 'react';

const E1ClientComponent = () => {
  const [state, updateState] = useE1ServerState();

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    updateState({
      first_name: firstName,
      last_name: lastName
    });
    setFirstName('');
    setLastName('');
  };

  return (
    <div className="relative z-10 mb-4 rounded-lg p-4">
      <div
        className="absolute inset-0 -z-10 animate-flash-once rounded-lg border border-dashed border-teal-500 bg-teal-100 dark:bg-teal-500/20"
        key={Math.random()}
      ></div>
      <p>Client Component</p>

      <p className="mt-2 flex-auto rounded bg-teal-700/10 px-2 py-1 font-semibold">
        Full Name: {(state.first_name ?? '') + ' ' + (state.last_name ?? '')}
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-2 flex max-w-full items-center"
      >
        <input
          type="text"
          placeholder="First name"
          className="input w-auto flex-auto"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          className="input ml-2 w-auto flex-auto"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button className="button button-primary ml-2">Update</button>
      </form>
    </div>
  );
};

export default E1ClientComponent;
