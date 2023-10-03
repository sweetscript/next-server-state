var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { createServerStateProvider } from './server/createServerStateProvider';
import { ClientContext } from './client/context';
import { serverStateSession } from './server/session';
export function createServerState(uniqueKey, defaultValues, options) {
    if (options === void 0) { options = {}; }
    var session = serverStateSession;
    return {
        uniqueKey: uniqueKey,
        Provider: createServerStateProvider(defaultValues, __assign(__assign({}, options), { uniqueKey: uniqueKey, session: session })),
        ClientContext: ClientContext,
        session: session,
        options: options !== null && options !== void 0 ? options : {},
        refData: defaultValues
    };
}
//# sourceMappingURL=createServerState.js.map