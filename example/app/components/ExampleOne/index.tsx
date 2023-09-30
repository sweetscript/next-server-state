import OneServerComponent from './children/OneServerComponent';
import OneClientComponent from './children/OneClientComponent';
import OneServerActionsComponent from './children/OneServerActionsComponent/OneServerActionsComponent';
import { ExampleOneServerState } from './state';

const ExampleOne = () => {
  return (
    <div className="border-2 border-dashed border-slate-500 p-4 rounded-lg font-mono text-sm">
      <h2 className="font-bold text-lg mb-3">Example 1</h2>
      <ExampleOneServerState.Provider>
        <OneServerComponent />
        <OneClientComponent />
        <OneServerActionsComponent />
      </ExampleOneServerState.Provider>
    </div>
  );
};

export default ExampleOne;
