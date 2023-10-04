import nextAppSession from 'next-app-session';
import { Obj, SessionOptions } from '../types';

export function serverStateSession<T extends Obj>(options?: SessionOptions) {
  const defaultOptions: SessionOptions = {
    name: 'NextServerState',
    touchAfter: true,
    cookie: {
      maxAge: 0
    }
  };
  return nextAppSession<T>({
    ...defaultOptions,
    ...(options ?? {})
  });
}
