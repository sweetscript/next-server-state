import { NextApiRequest, NextApiResponse } from 'next';
type ServerStateRoutesOptions = {
    restrictKeys?: string[];
};
export declare function setupServerStateRoutes(options?: ServerStateRoutesOptions): (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
export {};
