import { ExampleTwoServerState } from './state';
import E2ServerComponent from './children/E2ServerComponent';
import E2ClientComponent from './children/E2ClientComponent';
import E2ServerActionsComponent from './children/E2ServerActionsComponent/E2ServerActionsComponent';
import ExampleTwoCode from './ExampleTwoCode';

const ExampleTwo = () => {
  return (
    <div className="rounded-lg border-2 border-dashed border-slate-500 p-4  text-sm">
      <h2 className="mb-2 text-lg font-bold">
        Example 2 (with persist enabled)
      </h2>
      <p className="mb-3 text-sm">
        In this example we have a counter state, The persist option is enabled{' '}
        <code className="code">persist: true</code>, meaning the state will be
        preserved even after you refresh or navigate out of this page
      </p>
      <div className="relative items-start gap-4 md:flex md:flex-row-reverse md:flex-nowrap">
        <div className="md:w-1/2">
          <ExampleTwoServerState.Provider>
            <E2ServerComponent />
            <E2ClientComponent />
            <E2ServerActionsComponent />
          </ExampleTwoServerState.Provider>
        </div>
        <div className="top-0 mt-4 md:sticky md:mt-0 md:w-1/2">
          <ExampleTwoCode />
        </div>
      </div>
    </div>
  );
};

export default ExampleTwo;
