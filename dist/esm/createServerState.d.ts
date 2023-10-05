import { CreateServerState, Obj, ServerStateOptions } from './types';
export declare function createServerState<T extends Obj>(uniqueKey: string, defaultValues: T, options?: ServerStateOptions): CreateServerState<T>;
