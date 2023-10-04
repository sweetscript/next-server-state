import { ExampleOneServerState } from './state';
import E1ServerComponent from './children/E1ServerComponent';
import E1ClientComponent from './children/E1ClientComponent';
import E1ServerActionsComponent from './children/E1ServerActionsComponent/E1ServerActionsComponent';
import ExampleOneCode from './ExampleOneCode';

const ExampleOne = () => {
  return (
    <div className="rounded-lg border-2 border-dashed border-slate-500 p-4 font-mono text-sm">
      <h2 className="mb-3 text-lg font-bold">Example 1</h2>
      <div className="relative items-start md:flex md:flex-row-reverse md:flex-nowrap">
        <div className="md:w-1/2 md:pl-2">
          <ExampleOneServerState.Provider>
            <E1ServerComponent />
            <E1ClientComponent />
            <E1ServerActionsComponent />
          </ExampleOneServerState.Provider>
        </div>
        <div className="top-0 mt-4 md:sticky md:mt-0 md:w-1/2 md:pr-2">
          <ExampleOneCode />
        </div>
      </div>
    </div>
  );
};

export default ExampleOne;
