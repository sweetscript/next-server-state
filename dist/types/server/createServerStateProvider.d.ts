import { CreateServerStateProvider, ServerStateProviderProps } from '../types';
export declare function createServerStateProvider<T extends Record<string, any>>(defaultValues: T, options: ServerStateProviderProps<T>): CreateServerStateProvider;
