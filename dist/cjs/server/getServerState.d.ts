import { CreateServerState, GetServerContext } from '../types';
export declare function getServerState<T>(context: CreateServerState<any>): Promise<GetServerContext<T>>;
