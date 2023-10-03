import { CreateServerState, ServerStateOptions } from './types';
export declare function createServerState<T extends Record<string, any>>(uniqueKey: string, defaultValues: T, options?: ServerStateOptions): CreateServerState<T>;
