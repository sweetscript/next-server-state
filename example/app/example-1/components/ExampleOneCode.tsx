'use client';

import CodeBlock from '../../components/CodeBlock';

const ExampleOneCode = () => {
  return (
    <CodeBlock
      code={`import {
  createServerState,
  getServerState,
  useServerState
} from 'next-server-state';

type MyStateProps = {
  first_name: string;
  last_name: string;
};

const myState =
  createServerState<MyStateProps>('example-one', {
    first_name: '',
    last_name: ''
  });

function useMyServerState() {
  return useServerState<MyStateProps>(myState);
}
async function getMyServerState() {
  return getServerState<MyStateProps>(myState);
}

export myState, useMyServerState, getMyServerState;`}
      language={'typescript'}
    />
  );
};

export default ExampleOneCode;
