import { CreateServerState, Obj, ServerStateOptions } from './types.js';
import { createServerStateProvider } from './server/createServerStateProvider.js';
import { ClientContext } from './client/context.js';
import { serverStateSession } from './server/session.js';

export function createServerState<T extends Obj>(
  uniqueKey: string,
  defaultValues: T,
  options: ServerStateOptions = {}
): CreateServerState<T> {
  const session = serverStateSession<T>(options.sessionOptions);

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
