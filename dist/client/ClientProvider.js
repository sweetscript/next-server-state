'use client';
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
import React, { useCallback, useEffect, useReducer } from 'react';
import { ClientContext } from './context';
import Bridge from '../bridge/Bridge';
import { useRouter } from 'next/navigation';
function ClientProvider(props) {
    var initState = props.initState, uniqueKey = props.uniqueKey, enableSSE = props.enableSSE, persist = props.persist, disableRouterRefresh = props.disableRouterRefresh, disableApiUpdateRequest = props.disableApiUpdateRequest, disableApiFetchRequest = props.disableApiFetchRequest, defaultValues = props.defaultValues, children = props.children;
    var router = useRouter();
    var refreshRouter = useCallback(function () {
        if (disableRouterRefresh)
            return;
        // Not ideal, but only way to rerender server components is refresh router
        router.refresh();
    }, []);
    var _a = useReducer(function (prev, next) {
        return __assign(__assign({}, prev), next);
    }, initState, function (data) {
        // Reset state if persist disabled
        return persist ? data : defaultValues;
    }), state = _a[0], updateState = _a[1];
    useEffect(function () {
        // Create fetch proxy if it doesn't already exist
        // The proxy triggers an event when next server actions are settled
        if (!disableApiFetchRequest && !window.fetchProxyAdded) {
            window.fetch = new Proxy(window.fetch, {
                apply: function (actualFetch, that, args) {
                    var result = Reflect.apply(actualFetch, that, args);
                    result.then(function () {
                        if (args &&
                            Array.isArray(args) &&
                            args.filter(function (a) { var _a; return (_a = a.headers) === null || _a === void 0 ? void 0 : _a['Next-Action']; }).length > 0) {
                            window.dispatchEvent(new Event('server-action-settled'));
                        }
                    });
                    return result;
                }
            });
            window.fetchProxyAdded = true;
        }
        return function () { };
    }, []);
    return (React.createElement(ClientContext.Provider, { value: { state: state, updateState: updateState } },
        children,
        React.createElement(Bridge, { state: state, updateState: updateState, uniqueKey: uniqueKey, enableSSE: enableSSE, onUpdateFinish: refreshRouter })));
}
export default ClientProvider;
//# sourceMappingURL=ClientProvider.js.map