'use client';

import CodeBlock from './CodeBlock';

const Guide = () => {
  return (
    <div>
      <p className="mb-4 text-xl font-bold uppercase text-red-500">
        🚧 Work in progress
      </p>

      <h2 className="mb-3 text-2xl font-bold">Introduction</h2>

      <p>
        This library is to provide shared state between server and client
        components in Next.js RSC App router. The library uses serverside
        session storage to store the server state.
      </p>
      <hr className="my-6 border-slate-200 dark:border-white/20" />
      <h2 className="mb-3 text-2xl font-bold">Setup</h2>

      <p className="mb-2">Install package:</p>
      <div className="mb-4">
        <CodeBlock
          code="npm i next-app-session"
          language="bash"
          showLineNumbers={false}
        />
      </div>
      <p className="mb-2">
        Setup dynamic route: create file with path:{' '}
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
      <p className="mb-2">Setup your server state:</p>
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
        Setup state context: Wrap your server and client component of which you
        wish to consume the server state in
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
        In <code className="code">Client Component</code> you can read and set
        state data like so:
      </p>
      <div className="mb-4">
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
        <span>
            <p>Counter: <span>{state.counter}</span></p>
            <button type="button" onClick={handleIncrement}>Increment</button>
        </p>
    )
}`}
          language="jsx"
          showLineNumbers={false}
        />
      </div>
      <p className="mb-2">
        In <code className="code">Server Component</code> you can read state and
        render it like so:
      </p>
      <div className="mb-4">
        <CodeBlock
          code={`import { getMyServerState } from '../lib/my-server-state.ts'; // import from the file you initialised the server state in

export async function MyServerComponent(){
    const [state, updateState] = await getMyServerState();
    
    // If needed although not recommended, You can also update state on server component render 
    // await updateState({ first_name: 'new name' })
    
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
        In <code className="code">Client Component with Server Actions</code>{' '}
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
      <div className="mb-4">
        <CodeBlock
          code={`// MyClientComponent.ts
'use client'
import { useMyServerState } from '../lib/my-server-state.ts'; // import from the file you initialised the server state in
import { actionIncrementCounter } from './server-actions.ts'; // import from the file you initialised the server state in

export function MyClientComponent(){
    const [state] = useMyServerState();
    
    return (
        <span>
            <p>Counter: <span>{state.counter}</span></p>
            <form action={actionIncrementCounter}>
                <button type="submit">Increment</button>
            </form>
        </p>
    )
}`}
          language="jsx"
          showLineNumbers={false}
        />
      </div>
      <p className="mb-2">
        In <code className="code">App Route Handler</code> you can read and set
        state data like so:
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
