import { ExampleThreeServerState } from './state';
import E3ServerComponent from './children/E3ServerComponent';
import E3ClientComponent from './children/E3ClientComponent';
import E3ServerActionsComponent from './children/E3ServerActionsComponent/E3ServerActionsComponent';
import ExampleThreeCode from './ExampleThreeCode';

const ExampleThree = () => {
  return (
    <div className="rounded-lg border-2 border-dashed border-slate-500 p-4 text-sm">
      <h2 className="mb-2 text-lg font-bold">Example 3 (no router refresh)</h2>
      <p className="mb-3 text-sm">
        In this example we have the router refresh option disabled{' '}
        <code className="code">disableRouterRefresh: true</code>.<br />
        Notice when the router refresh is disabled the server component does not
        rerender when the state is updated, This option is to be used if router
        refresh is not necessary.
      </p>
      <div className="relative items-start gap-4 md:flex md:flex-row-reverse md:flex-nowrap">
        <div className="md:w-1/2 md:pl-2">
          <ExampleThreeServerState.Provider>
            <E3ServerComponent />
            <E3ClientComponent />
            <E3ServerActionsComponent />
          </ExampleThreeServerState.Provider>
        </div>
        <div className="top-0 mt-4 md:sticky md:mt-0 md:w-1/2 md:pr-2">
          <ExampleThreeCode />
        </div>
      </div>
    </div>
  );
};

export default ExampleThree;
