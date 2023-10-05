import { NextApiRequest, NextApiResponse } from 'next';
import { serverStateSession } from '../server/session';
import { ServerStateRoutesOptions } from '../types';

export function setupServerStateRoutes(options?: ServerStateRoutesOptions) {
  const { restrictKeys, sessionOptions } = options || {};
  return async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await serverStateSession(sessionOptions)(req);

    // GET/POST endpoints to manage state by key
    if (req.query?.path?.[0] === 'handle') {
      const stateKey = req.query.path?.[1];
      if (!stateKey || stateKey === '') {
        res.status(401).end();
        return;
      }

      // Make sure key is whitelisted
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
        // Endpoint to update session data
        await session.set(stateKey, req.body);
        res.status(200).json({ message: 'Updated' });
        return;
      } else if (req.method?.toUpperCase() === 'GET') {
        // Endpoint to get session data
        res.status(200).json(await session.get(stateKey));
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
