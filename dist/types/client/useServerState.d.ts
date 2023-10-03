import { CreateServerState, UseServerContext } from '../types';
export declare function useServerState<T extends Record<string, any>>(serverContext: CreateServerState<T>): UseServerContext<T>;
