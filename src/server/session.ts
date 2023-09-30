import nextAppSession from 'next-app-session';

export const serverStateSession = nextAppSession<any>({
  name: `NextServerState`
});
