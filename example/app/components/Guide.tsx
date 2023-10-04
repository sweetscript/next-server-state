'use client';

import CodeBlock from './CodeBlock';

const Guide = () => {
  return (
    <div>
      <p className="mb-4 text-xl font-bold uppercase text-red-500">
        🚧 Experimental
      </p>

      <h2 className="mb-3 text-2xl font-bold">Introduction</h2>

      <p>
        This package provides shared state between server and client components
        in Next.js App router. It utilizes server-side session storage to store
        the state, seamlessly synchronizing it across components. Additionally,
        it offers a easy approach for reading and writing state data from both
        server and client sides.
      </p>
      <hr className="my-6 border-slate-200 dark:border-white/20" />
      <h2 className="mb-3 text-2xl font-bold">Setup</h2>

      <p className="mb-2 font-semibold">Install package:</p>
      <div className="mb-4">
        <CodeBlock
          code="npm i next-app-session"
          language="bash"
          showLineNumbers={false}
        />
      </div>
      <p className="mb-2">
        <span className="font-semibold">Setup dynamic route:</span> create file
        with path:{' '}
        <code className="code">/pages/api/server-state/[...path].ts</code>
      </p>
      <div className="mb-4">
        <CodeBlock
          code={`// /pages/api/server-state/[...path].ts
import { setupServerStateRoutes } from 'next-server-state';

export default setupServerStateRoutes();`}
          language="jsx"
          showLineNumbers={false}
        />
      </div>
      <p className="mb-2 font-semibold">Setup your server state:</p>
      <div className="mb-4">
        <CodeBlock
          code={`// /lib/my-server-state.ts
import {
  createServerState,
  getServerState,
  useServerState
} from 'next-server-state';

type MyServerStateProps = {
  first_name: string;
  last_name: string;
  counter: number;
};

export const MyServerState =
  createServerState<MyServerStateProps>('my-state-unique-key', {
    first_name: '',
    last_name: '',
    counter: ''
  });

export function useMyServerState() {
  return useServerState<MyServerStateProps>(MyServerState);
}
export async function getMyServerState() {
  return getServerState<MyServerStateProps>(ExampleOneServerState);
}`}
          language="jsx"
          showLineNumbers={false}
        />
      </div>
      <p className="mb-2">
        <span className="font-semibold">Setup state context:</span> Wrap your
        server and client component of which you wish to consume the server
        state in
      </p>
      <div className="mb-4">
        <CodeBlock
          code={`import { MyServerState } from '../lib/my-server-state.ts'; // import state variable from the file you initialised it in

export const MyParentComponent = () => {
    return (
        <MyServerState.Provider>
            // ...your server and client components go here
        </MyServerState.Provider>
    )
}`}
          language="jsx"
          showLineNumbers={false}
        />
      </div>
      <hr className="my-6 border-slate-200 dark:border-white/20" />
      <h2 className="mb-3 mt-8 text-2xl font-bold">Usage</h2>
      <p className="mb-2">
        How you use the server state depends on whether you're using it on
        server side or client side:
      </p>
      <ul className="mb-6 ml-4 list-outside list-disc space-y-4">
        <li>
          <span className="font-semibold">Client Components</span>
          <CodeBlock
            code={`const [state, updateState] = useServerSide(myServerState)`}
            showLineNumbers={false}
          />
        </li>
        <li>
          <span className="font-semibold">
            Server Components + Server Actions + Route Handlers
          </span>
          <CodeBlock
            code={`const [state, updateState] = getServerSide(myServerState)`}
            showLineNumbers={false}
          />
        </li>
      </ul>
      <h3 className="mb-2 text-lg font-bold">Usage cases</h3>
      <p className="mb-2">
        <span className="font-semibold">Client Component</span> you can read and
        set state data like so:
      </p>
      <div className="mb-5">
        <CodeBlock
          code={`'use client'
import { useMyServerState } from '../lib/my-server-state.ts'; // import from the file you initialised the server state in

export function MyClientComponent(){
    const [state, updateState] = useMyServerState();
    
    const handleIncrement = ()=>{
		updateState({
		    counter: Number(state.counter) + 1
		})
    }
    
    return (
        <div>
            <p>Counter: <span>{state.counter}</span></p>
            <button type="button" onClick={handleIncrement}>Increment</button>
        </div>
    )
}`}
          language="jsx"
          showLineNumbers={false}
        />
      </div>
      <p className="mb-2">
        <span className="font-semibold">Server Component</span> you can read
        state and render it like so:
      </p>
      <div className="mb-5">
        <CodeBlock
          code={`import { getMyServerState } from '../lib/my-server-state.ts'; // import from the file you initialised the server state in

export async function MyServerComponent(){
    const [state, updateState] = await getMyServerState();
    
    // If needed although not recommended, You can also update state on server component render 
    // await updateState({ first_name: 'new name' })
    // const [newState] = await getServerState();
    
    return (
        <span>
            <span>{state.first_name}</span>
            // ...
        </span>
    )
}`}
          language="jsx"
          showLineNumbers={false}
        />
      </div>
      <p className="mb-2">
        <span className="font-semibold">
          Client Component with Server Actions
        </span>{' '}
        you can read and set state data like so:
      </p>
      <div className="mb-1">
        <CodeBlock
          code={`// server-actions.ts
'use server'
import { getMyServerState } from '../lib/my-server-state.ts'; // import from the file you initialised the server state in

export async function actionIncrementCounter(formData: FormData) {
  const [state, updateState] = await getMyServerState();

  updateState({
    counter: Number(state.counter ?? 0) + 1
  });

  return { message: 'Updated' };
}`}
          language="jsx"
          showLineNumbers={false}
        />
      </div>
      <div className="mb-5">
        <CodeBlock
          code={`// MyClientComponent.ts
'use client'
import { useMyServerState } from '../lib/my-server-state.ts'; // import from the file you initialised the server state in
import { actionIncrementCounter } from './server-actions.ts'; // Your server actions

export function MyClientComponent(){
    const [state] = useMyServerState();
    
    return (
        <div>
            <p>Counter: <span>{state.counter}</span></p>
            <form action={actionIncrementCounter}>
                <button type="submit">Increment</button>
            </form>
        </div>
    )
}`}
          language="jsx"
          showLineNumbers={false}
        />
      </div>
      <p className="mb-2">
        <span className="font-semibold">App Route Handler</span> you can read
        and set state data like so:
      </p>
      <div className="mb-4">
        <CodeBlock
          code={`import { getMyServerState } from '../lib/my-server-state.ts'; // import from the file you initialised the server state in

export async function POST() {
    const [state, updateState] = await getMyServerState();
    
    updateState({
        counter: Number(state.counter) + 1
    })
    
    return { message: 'Counter incremented' };
}`}
          language="jsx"
          showLineNumbers={false}
        />
      </div>
    </div>
  );
};

export default Guide;
