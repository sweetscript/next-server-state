import { NextApiRequest, NextApiResponse } from 'next';
import { serverStateSession } from '../server/session';

type ServerStateRoutesOptions = {
  restrictKeys?: string[];
};

export function setupServerStateRoutes(options?: ServerStateRoutesOptions) {
  const { restrictKeys } = options || {};
  return async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.query?.path?.[0] === 'handle') {
      const stateKey = req.query.path?.[1];
      if (!stateKey || stateKey === '') {
        res.status(401).end();
        return;
      }
      // Endpoint to update session data
      if (
        restrictKeys &&
        restrictKeys.filter(
          (p: string) => p.toLowerCase() == stateKey.toLowerCase()
        ).length === 0
      ) {
        res.status(401).json({
          message:
            'Unrecognized server state key, make sure you add your state key to restrictedKeys'
        });
        return;
      }

      if (req.method?.toUpperCase() === 'POST') {
        await serverStateSession(req).set(stateKey, req.body);
        res.status(200).json({ message: 'Updated' });
        return;
      } else if (req.method?.toUpperCase() === 'GET') {
        res.status(200).json(await serverStateSession(req).get(stateKey));
        return;
      }
    } else if (req.query?.path?.[0] === 'sse') {
      // Endpoint to feed Server Side Event
      // TODO: Implement SSE option to catch route handler updates and rerender FE components
      /*res.writeHead(200, {
        Connection: 'keep-alive',
        'Content-Encoding': 'none',
        'Cache-Control': 'no-cache, no-transform',
        'Content-Type': 'text/event-stream'
      });

      let count = 1;
      const interval = setInterval(() => {
        res.write(
          `data: ${JSON.stringify({
            message: 'hello',
            value: (count += 1)
          })}\n\n`
        );
      }, 1000);

      res.on('close', () => {
        console.log(`close ${count}`);
        clearInterval(interval);
        res.end();
      });

      res.socket?.on('close', () => {
        console.log(`close ${count}`);
        clearInterval(interval);
        res.end();
      });
      return;*/
    }
    res.status(404).end();
  };
}
