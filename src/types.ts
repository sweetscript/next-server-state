import { Context, ReactNode } from 'react';
import { NextApiRequest } from 'next';
import { AppSession } from 'next-app-session';

export type ServerContext<T> = {
  state: T;
  updateState: (data: Partial<T>) => Promise<void> | void;
};
export type ServerContextReducer<T> = [
  ServerContext<T>['state'],
  ServerContext<T>['updateState']
];

export type ServerStateOptions = {
  // uniqueKey: string;
  enableSSE?: boolean;
  persist?: boolean;
};

export type ServerStateProviderProps<T extends Record<string, any>> =
  ServerStateOptions & {
    uniqueKey: string;
    session: (req?: NextApiRequest) => AppSession<T>;
  };

export type CreateServerStateProvider = (props: { children: ReactNode }) => any;

export type CreateServerState<T extends Record<string, any>> = {
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

export type BridgeProps = Pick<ServerStateOptions, 'enableSSE'> & {
  enableSSE?: boolean;
  state: any;
  updateState: (data: any) => void;
  uniqueKey: string;
  onUpdateFinish: () => void;
};

declare global {
  interface Window {
    fetchProxyAdded: boolean;
  }
}
