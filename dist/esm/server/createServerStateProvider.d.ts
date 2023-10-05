import { CreateServerStateProvider, Obj, ServerStateProviderProps } from '../types';
export declare function createServerStateProvider<T extends Obj>(defaultValues: T, options: ServerStateProviderProps<T>): CreateServerStateProvider;
