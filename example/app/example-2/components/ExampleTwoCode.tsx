'use client';

// import { dracula, CodeBlock } from 'react-code-blocks';
import { Highlight, themes } from 'prism-react-renderer';
import { Fragment } from 'react';
import CodeBlock from '../../components/CodeBlock';

const ExampleTwoCode = () => {
  return (
    <CodeBlock
      code={`import {
  createServerState,
  getServerState,
  useServerState
} from 'next-server-state';

type MyStateProps = {
  counter: number;
};

const myState =
  createServerState<MyStateProps>('example-two', {
      counter: 0
    },
    {
      persist: true // <-- enables persist data
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

export default ExampleTwoCode;
