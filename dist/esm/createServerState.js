import { __assign } from './_virtual/_tslib.js';
import { createServerStateProvider } from './server/createServerStateProvider.js';
import { ClientContext } from './client/context.js';
import { serverStateSession } from './server/session.js';

function createServerState(uniqueKey, defaultValues, options) {
    if (options === void 0) { options = {}; }
    var session = serverStateSession(options.sessionOptions);
    return {
        uniqueKey: uniqueKey,
        Provider: createServerStateProvider(defaultValues, __assign(__assign({}, options), { uniqueKey: uniqueKey, session: session })),
        ClientContext: ClientContext,
        session: session,
        options: options !== null && options !== void 0 ? options : {},
        refData: defaultValues
    };
}

export { createServerState };
