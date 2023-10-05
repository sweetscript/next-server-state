import { __awaiter, __generator } from '../_virtual/_tslib.js';
import React from 'react';
import ClientProvider from '../client/ClientProvider.js';

function createServerStateProvider(defaultValues, options) {
    var session = options.session, uniqueKey = options.uniqueKey, enableSSE = options.enableSSE, persist = options.persist, disableRouterRefresh = options.disableRouterRefresh, disableApiUpdateRequest = options.disableApiUpdateRequest, disableApiFetchRequest = options.disableApiFetchRequest;
    return function handler(props) {
        return __awaiter(this, void 0, void 0, function () {
            var initState, _a, children;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!session) return [3 /*break*/, 2];
                        return [4 /*yield*/, session().get(uniqueKey)];
                    case 1:
                        _a = (_b.sent());
                        return [3 /*break*/, 3];
                    case 2:
                        _a = null;
                        _b.label = 3;
                    case 3:
                        initState = _a;
                        children = props.children;
                        return [2 /*return*/, (React.createElement(ClientProvider, { initState: initState !== null && initState !== void 0 ? initState : defaultValues, defaultValues: defaultValues, uniqueKey: uniqueKey, enableSSE: enableSSE, persist: persist, disableRouterRefresh: disableRouterRefresh, disableApiUpdateRequest: disableApiUpdateRequest, disableApiFetchRequest: disableApiFetchRequest }, children))];
                }
            });
        });
    };
}

export { createServerStateProvider };
