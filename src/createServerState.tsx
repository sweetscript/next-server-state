import { CreateServerState, ServerStateOptions } from './types';
import { createServerStateProvider } from './server/createServerStateProvider';
import { ClientContext } from './client/context';
import { serverStateSession } from './server/session';

export function createServerState<T extends Record<string, any>>(
  uniqueKey: string,
  defaultValues: T,
  options: ServerStateOptions = {}
): CreateServerState<T> {
  const session = serverStateSession;

  return {
    uniqueKey: uniqueKey,
    Provider: createServerStateProvider<T>(defaultValues, {
      ...options,
      uniqueKey: uniqueKey,
      session: session
    }),
    ClientContext: ClientContext,
    session: session,
    options: options ?? {},
    refData: defaultValues as T
  };
}
