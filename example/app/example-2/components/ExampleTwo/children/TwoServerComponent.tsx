import { getTwoServerState } from '../state';

const TwoServerComponent = async () => {
  const [state] = await getTwoServerState();

  return (
    <div className="p-4 rounded-lg mb-4 relative">
      <div
        className="absolute inset-0 border border-dashed border-purple-500 bg-purple-100 rounded-lg animate-flash-once -z-10"
        key={Math.random()}
      ></div>
      <p>Server Component</p>
      <p className="font-semibold flex-auto mt-2 bg-purple-700/10 px-2 py-1 rounded">
        Counter: {`${state.counter ?? '0'}`}
      </p>
    </div>
  );
};

export default TwoServerComponent;
