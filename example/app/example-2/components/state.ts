import {
  createServerState,
  getServerState,
  useServerState
} from 'next-server-state';

type ExampleTwoServerStateProps = {
  counter: number;
};

export const ExampleTwoServerState =
  createServerState<ExampleTwoServerStateProps>(
    'example-two',
    {
      counter: 0
    },
    {
      persist: true
    }
  );

export function useTwoServerState() {
  return useServerState<ExampleTwoServerStateProps>(ExampleTwoServerState);
}
export async function getTwoServerState() {
  return getServerState<ExampleTwoServerStateProps>(ExampleTwoServerState);
}
