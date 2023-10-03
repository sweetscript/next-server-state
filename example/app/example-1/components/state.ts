import {
  createServerState,
  getServerState,
  useServerState
} from '../../../../';

type ExampleOneServerStateProps = {
  first_name: string;
  last_name: string;
};

export const ExampleOneServerState =
  createServerState<ExampleOneServerStateProps>('example-one', {
    first_name: '',
    last_name: ''
  });

export function useE1ServerState() {
  return useServerState<ExampleOneServerStateProps>(ExampleOneServerState);
}
export async function getE1ServerState() {
  return getServerState<ExampleOneServerStateProps>(ExampleOneServerState);
}
