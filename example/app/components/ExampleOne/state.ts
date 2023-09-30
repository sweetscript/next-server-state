import {
  createServerState,
  getServerState,
  useServerState
} from '../../../../src/index';

type OneServerStateProps = {
  first_name: string;
  last_name: string;
};

export const ExampleOneServerState = createServerState<OneServerStateProps>(
  'example-one',
  {
    first_name: '',
    last_name: ''
  }
);

export function useOneServerState() {
  return useServerState<OneServerStateProps>(ExampleOneServerState);
}
export async function getOneServerState() {
  return getServerState<OneServerStateProps>(ExampleOneServerState);
}
