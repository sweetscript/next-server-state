import { CreateServerState, GetServerContext } from '../types';

export async function getServerState<T>(
  context: CreateServerState<any>
): Promise<GetServerContext<T>> {
  // return function handler(): GetServerContext<T> {
  const state =
    (context.session && (await context.session().get(context.uniqueKey))) ??
    ({} as T);
  async function updateState(data: Partial<T>) {
    await context.session().set(context.uniqueKey, {
      ...state,
      ...data
    });
  }

  return [state, updateState];
  // };
}
