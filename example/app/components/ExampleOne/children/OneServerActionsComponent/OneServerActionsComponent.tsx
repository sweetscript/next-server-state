'use client';

import { useEffect, useState } from 'react';
import { useOneServerState } from '../../state';
import { actionUpdateName } from './actions';

const OneServerActionsComponent = () => {
  const [state] = useOneServerState();

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  useEffect(() => {
    if (state && state.first_name !== '') {
      setFirstName('');
      setLastName('');
    }
  }, [state]);

  return (
    <div className="p-4 rounded-lg relative">
      <div
        className="absolute inset-0 border border-dashed border-blue-500 bg-blue-100 rounded-lg animate-flash-once -z-10"
        key={Math.random()}
      ></div>
      <p>Client component with server actions</p>
      <p className="font-semibold flex-auto mt-2 bg-blue-700/10 px-2 py-1 rounded">
        Full Name: {(state.first_name ?? '') + ' ' + (state.last_name ?? '')}
      </p>

      <form
        action={actionUpdateName}
        className="flex mt-2 items-center max-w-full"
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
          className="input w-auto flex-auto ml-2"
          name="last_name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button className="button button-sky ml-2">Update</button>
      </form>
    </div>
  );
};

export default OneServerActionsComponent;
