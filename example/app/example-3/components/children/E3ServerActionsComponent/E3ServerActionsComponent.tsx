'use client';

import { useEffect, useState } from 'react';
import { useE3ServerState } from '../../state';
import { actionUpdateNote } from './actions';

const E3ServerActionsComponent = () => {
  const [state] = useE3ServerState();

  const [note, setNote] = useState<string>('');

  useEffect(() => {
    if (state && state.note !== '') {
      setNote('');
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
        action={actionUpdateNote}
        className="mt-2 flex max-w-full items-start"
      >
        <textarea
          rows={3}
          placeholder="Note"
          className="input w-auto flex-auto"
          name="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <button className="button button-primary ml-2">Update</button>
      </form>
    </div>
  );
};

export default E3ServerActionsComponent;
