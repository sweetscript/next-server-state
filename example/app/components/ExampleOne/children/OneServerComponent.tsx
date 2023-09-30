import { getOneServerState } from '../state';

const OneServerComponent = async () => {
  const [state] = await getOneServerState();

  return (
    <div className="p-4 rounded-lg relative mb-4">
      <div
        className="absolute inset-0 border border-dashed border-purple-500 bg-purple-100 rounded-lg animate-flash-once -z-10"
        key={Math.random()}
      ></div>
      <p>Server Component</p>
      <p className="font-semibold flex-auto mt-2 bg-purple-700/10 px-2 py-1 rounded">
        Full Name: {(state.first_name ?? '') + ' ' + (state.last_name ?? '')}
      </p>
    </div>
  );
};

export default OneServerComponent;
