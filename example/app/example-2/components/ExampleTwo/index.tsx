import TwoServerComponent from './children/TwoServerComponent';
import TwoClientComponent from './children/TwoClientComponent';
import TwoServerActionsComponent from './children/TwoServerActionsComponent/TwoServerActionsComponent';
import { ExampleTwoServerState } from './state';

const ExampleTwo = () => {
  return (
    <div className="border-2 border-dashed border-slate-500 p-4 rounded-lg  text-sm">
      <h2 className="font-bold text-lg mb-2">
        Example 2 (with preserve enabled)
      </h2>
      <p className="text-xs mb-2">
        In this example we have a counter state, The preserve option is enabled{' '}
        <code>preserve: true</code>, meaning the state will be preserved even
        after you refresh or navigate out of this page
      </p>
      <ExampleTwoServerState.Provider>
        <TwoServerComponent />
        <TwoClientComponent />
        <TwoServerActionsComponent />
      </ExampleTwoServerState.Provider>
    </div>
  );
};

export default ExampleTwo;
