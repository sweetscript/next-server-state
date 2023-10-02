'use client';

import { useE3ServerState } from '../state';
import { FormEventHandler, useState } from 'react';

const E3ClientComponent = () => {
  const [state, updateState] = useE3ServerState();

  const [note, setNote] = useState<string>('');

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    updateState({
      note: note
    });
    setNote('');
  };

  return (
    <div className="relative z-10 mb-4 rounded-lg p-4">
      <div
        className="absolute inset-0 -z-10 animate-flash-once rounded-lg border border-dashed border-teal-500 bg-teal-100 dark:bg-teal-500/20"
        key={Math.random()}
      ></div>
      <p>Client Component</p>

      <p className="mt-2 flex-auto rounded bg-teal-700/10 px-2 py-1 font-semibold">
        Note: <br />
        {state.note
          ? state.note.split('\n').map((item, key) => {
              return (
                <span key={key}>
                  {item}
                  <br />
                </span>
              );
            })
          : ''}
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-2 flex max-w-full items-start"
      >
        <textarea
          rows={3}
          placeholder="Note"
          className="input w-auto flex-auto"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <button className="button button-primary ml-2">Update</button>
      </form>
    </div>
  );
};

export default E3ClientComponent;
