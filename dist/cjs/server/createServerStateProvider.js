'use strict';

var _tslib = require('../_virtual/_tslib.js');
var React = require('react');
var ClientProvider = require('../client/ClientProvider.js');

function createServerStateProvider(defaultValues, options) {
    var session = options.session, uniqueKey = options.uniqueKey, enableSSE = options.enableSSE, persist = options.persist, disableRouterRefresh = options.disableRouterRefresh, disableApiUpdateRequest = options.disableApiUpdateRequest, disableApiFetchRequest = options.disableApiFetchRequest;
    return function handler(props) {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            var initState, _a, children;
            return _tslib.__generator(this, function (_b) {
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
                        return [2 /*return*/, (React.createElement(ClientProvider.default, { initState: initState !== null && initState !== void 0 ? initState : defaultValues, defaultValues: defaultValues, uniqueKey: uniqueKey, enableSSE: enableSSE, persist: persist, disableRouterRefresh: disableRouterRefresh, disableApiUpdateRequest: disableApiUpdateRequest, disableApiFetchRequest: disableApiFetchRequest }, children))];
                }
            });
        });
    };
}

exports.createServerStateProvider = createServerStateProvider;
