import { Context, ReactNode } from 'react';
import { NextApiRequest, NextApiResponse } from 'next';
import { AppSession, Options } from 'next-app-session';

type Obj = {
    [key: string]: any;
};
type SessionOptions = Options;
type ServerContext<T> = {
    state: T;
    updateState: (data: Partial<T>) => Promise<void> | void;
};
type ServerContextReducer<T> = [
    ServerContext<T>['state'],
    ServerContext<T>['updateState']
];
type ServerStateOptions = {
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
type CreateServerStateProvider = (props: {
    children: ReactNode;
}) => any;
type CreateServerState<T extends Obj> = {
    uniqueKey: string;
    Provider: CreateServerStateProvider;
    ClientContext: Context<ServerContext<T>>;
    options: ServerStateOptions;
    refData: T;
    session: (req?: NextApiRequest) => AppSession<T>;
};
type UseServerContext<T> = ServerContextReducer<T>;
type GetServerContext<T> = ServerContextReducer<T>;
type ServerStateRoutesOptions = {
    restrictKeys?: string[];
    sessionOptions?: SessionOptions;
};
declare global {
    interface Window {
        fetchProxyAdded: boolean;
    }
}

declare function createServerState<T extends Obj>(uniqueKey: string, defaultValues: T, options?: ServerStateOptions): CreateServerState<T>;

declare function setupServerStateRoutes(options?: ServerStateRoutesOptions): (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

declare function useServerState<T extends Obj>(serverContext: CreateServerState<T>): UseServerContext<T>;

declare function getServerState<T>(context: CreateServerState<any>): Promise<GetServerContext<T>>;

export { createServerState, getServerState, setupServerStateRoutes, useServerState };
