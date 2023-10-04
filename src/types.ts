import { Context, ReactNode } from 'react';
import { NextApiRequest } from 'next';
import { AppSession, Options as _SessionOptions } from 'next-app-session';

export type Obj = { [key: string]: any };

export type SessionOptions = _SessionOptions;

export type ServerContext<T> = {
  state: T;
  updateState: (data: Partial<T>) => Promise<void> | void;
};
export type ServerContextReducer<T> = [
  ServerContext<T>['state'],
  ServerContext<T>['updateState']
];

export type ServerStateOptions = {
  /**
   * THis preserves the state even after refresh or navigation
   */
  persist?: boolean;

  /**
   * Disable router refresh when state is updated on client side.
   * this is the only way to rerender server component with new state values
   */
  disableRouterRefresh?: boolean;

  /**
   * Disable api update request
   * this request is used to update the server state when client state has been updated
   */
  disableApiUpdateRequest?: boolean;

  /**
   * Disable fetch api request
   * this request is used to update the client state when a server action has been triggered
   */
  disableApiFetchRequest?: boolean;

  /**
   * Work in progress feature
   */
  enableSSE?: boolean;

  /**
   * next-app-session settings
   */
  sessionOptions?: SessionOptions;

  /**
   * Base URL for api requests
   * @default '/'
   */
  apiBaseUrl?: string;
};

export type ServerStateProviderProps<T extends Obj> = ServerStateOptions & {
  uniqueKey: string;
  session: (req?: NextApiRequest) => AppSession<T>;
};

export type CreateServerStateProvider = (props: { children: ReactNode }) => any;

export type CreateServerState<T extends Obj> = {
  uniqueKey: string;
  Provider: CreateServerStateProvider;
  ClientContext: Context<ServerContext<T>>;
  options: ServerStateOptions;
  refData: T;
  session: (req?: NextApiRequest) => AppSession<T>;
};

export interface ClientProviderProps<T> extends ServerStateOptions {
  uniqueKey: string;
  defaultValues?: T;
  initState: T;
  children: ReactNode;
}

export type UseServerContext<T> = ServerContextReducer<T>;
export type GetServerContext<T> = ServerContextReducer<T>;

export type BridgeProps = Pick<
  ServerStateOptions,
  | 'enableSSE'
  | 'apiBaseUrl'
  | 'disableApiUpdateRequest'
  | 'disableApiFetchRequest'
> & {
  uniqueKey: string;
  state: any;
  updateState: (data: any) => void;
  onUpdateFinish: () => void;
};

export type ServerStateRoutesOptions = {
  restrictKeys?: string[];
  sessionOptions?: SessionOptions;
};

declare global {
  interface Window {
    fetchProxyAdded: boolean;
  }
}
