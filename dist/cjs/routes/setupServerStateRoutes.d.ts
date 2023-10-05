import { NextApiRequest, NextApiResponse } from 'next';
import { ServerStateRoutesOptions } from '../types';
export declare function setupServerStateRoutes(options?: ServerStateRoutesOptions): (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
