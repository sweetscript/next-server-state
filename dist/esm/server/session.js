import { __assign } from '../_virtual/_tslib.js';
import nextAppSession from 'next-app-session';

function serverStateSession(options) {
    var defaultOptions = {
        name: 'NextServerState',
        touchAfter: true,
        cookie: {
            maxAge: 0
        }
    };
    return nextAppSession(__assign(__assign({}, defaultOptions), (options !== null && options !== void 0 ? options : {})));
}

export { serverStateSession };
