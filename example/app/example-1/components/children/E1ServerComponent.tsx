import { getE1ServerState } from '../state';

const E1ServerComponent = async () => {
  const [state] = await getE1ServerState();

  return (
    <div className="relative mb-4 rounded-lg p-4">
      <div
        className="absolute inset-0 -z-10 animate-flash-once rounded-lg border border-dashed border-purple-500 bg-purple-100 dark:bg-purple-500/20"
        key={Math.random()}
      ></div>
      <p>Server Component</p>
      <p className="mt-2 flex-auto rounded bg-purple-700/10 px-2 py-1 font-semibold">
        Full Name: {(state.first_name ?? '') + ' ' + (state.last_name ?? '')}
      </p>
    </div>
  );
};

export default E1ServerComponent;
