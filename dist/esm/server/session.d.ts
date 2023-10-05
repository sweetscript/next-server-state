import { Obj, SessionOptions } from '../types';
export declare function serverStateSession<T extends Obj>(options?: SessionOptions): (req?: import("next").NextApiRequest | undefined) => import("next-app-session").AppSession<T>;
