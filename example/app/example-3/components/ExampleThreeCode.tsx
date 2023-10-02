'use client';

import CodeBlock from '../../components/CodeBlock';

const ExampleThreeCode = () => {
  return (
    <CodeBlock
      code={`import {
  createServerState,
  getServerState,
  useServerState
} from 'next-server-state';

type MyStateProps = {
  note: string;
};

const myState =
  createServerState<MyStateProps>('example-three', {
      note: ''
    },
    {
      persist: true,
      disableRouterRefresh: true //<-- disable router refresh on state change
    });

function useMyServerState() {
  return useServerState<MyStateProps>(myState);
}
async function getMyServerState() {
  return getServerState<MyStateProps>(myState);
}

export myState, useMyServerState, getMyServerState;
`}
      language={'typescript'}
    />
  );
};

export default ExampleThreeCode;
