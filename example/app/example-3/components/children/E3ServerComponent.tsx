import { getE3ServerState } from '../state';

const E3ServerComponent = async () => {
  const [state] = await getE3ServerState();

  return (
    <div className="relative mb-4 rounded-lg p-4">
      <div
        className="absolute inset-0 -z-10 animate-flash-once rounded-lg border border-dashed border-purple-500 bg-purple-100 dark:bg-purple-500/20"
        key={Math.random()}
      ></div>
      <p>Server Component</p>
      <p className="mt-2 flex-auto rounded bg-purple-700/10 px-2 py-1 font-semibold">
        Note:
        <br />
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
    </div>
  );
};

export default E3ServerComponent;
