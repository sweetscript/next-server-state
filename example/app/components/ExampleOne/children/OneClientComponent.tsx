'use client';

import { useOneServerState } from '../state';
import { FormEventHandler, useState } from 'react';

const OneClientComponent = () => {
  const [state, updateState] = useOneServerState();

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
    <div className="p-4 rounded-lg mb-4 relative z-10">
      <div
        className="absolute inset-0 border border-dashed border-teal-500 bg-teal-100 rounded-lg animate-flash-once -z-10"
        key={Math.random()}
      ></div>
      <p>Client Component</p>

      <p className="font-semibold flex-auto mt-2 bg-teal-700/10 px-2 py-1 rounded">
        Full Name: {(state.first_name ?? '') + ' ' + (state.last_name ?? '')}
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex mt-2 items-center max-w-full"
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
          className="input w-auto flex-auto ml-2"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button className="button button-sky ml-2">Update</button>
      </form>
    </div>
  );
};

export default OneClientComponent;
