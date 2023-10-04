import { CreateServerState, Obj, UseServerContext } from '../types';
export declare function useServerState<T extends Obj>(serverContext: CreateServerState<T>): UseServerContext<T>;
