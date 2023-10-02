import {
  createServerState,
  getServerState,
  useServerState
} from '../../../../src/index';

type Example3ServerStateProps = {
  note: string;
};

export const ExampleThreeServerState =
  createServerState<Example3ServerStateProps>(
    'example-three',
    {
      note: ''
    },
    {
      persist: true,
      disableRouterRefresh: true
    }
  );

export function useE3ServerState() {
  return useServerState<Example3ServerStateProps>(ExampleThreeServerState);
}
export async function getE3ServerState() {
  return getServerState<Example3ServerStateProps>(ExampleThreeServerState);
}
