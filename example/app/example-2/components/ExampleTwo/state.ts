import {
  createServerState,
  getServerState,
  useServerState
} from '../../../../../src/index';

type TwoServerStateProps = {
  counter: number;
};

export const ExampleTwoServerState = createServerState<TwoServerStateProps>(
  'example-two',
  {
    counter: 0
  },
  {
    preserve: true
    // enableSSE: true
  }
);

export function useTwoServerState() {
  return useServerState<TwoServerStateProps>(ExampleTwoServerState);
}
export async function getTwoServerState() {
  return getServerState<TwoServerStateProps>(ExampleTwoServerState);
}
