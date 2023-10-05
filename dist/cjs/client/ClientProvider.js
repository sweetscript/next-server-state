'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var React = require('react');
var context = require('./context.js');
var Bridge = require('../bridge/Bridge.js');
var navigation = require('next/navigation');

function ClientProvider(props) {
    var initState = props.initState, uniqueKey = props.uniqueKey, enableSSE = props.enableSSE, persist = props.persist, disableRouterRefresh = props.disableRouterRefresh; props.disableApiUpdateRequest; var disableApiFetchRequest = props.disableApiFetchRequest, defaultValues = props.defaultValues, children = props.children;
    var router = navigation.useRouter();
    var refreshRouter = React.useCallback(function () {
        if (disableRouterRefresh)
            return;
        // Not ideal, but only way to rerender server components is refresh router
        router.refresh();
    }, []);
    var _a = React.useReducer(function (prev, next) {
        return _tslib.__assign(_tslib.__assign({}, prev), next);
    }, initState, function (data) {
        // Reset state if persist disabled
        return persist ? data : defaultValues;
    }), state = _a[0], updateState = _a[1];
    React.useEffect(function () {
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
    return (React.createElement(context.ClientContext.Provider, { value: { state: state, updateState: updateState } },
        children,
        React.createElement(Bridge.default, { state: state, updateState: updateState, uniqueKey: uniqueKey, enableSSE: enableSSE, onUpdateFinish: refreshRouter })));
}

exports.default = ClientProvider;
