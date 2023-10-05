'use strict';

var _tslib = require('./_virtual/_tslib.js');
var createServerStateProvider = require('./server/createServerStateProvider.js');
var context = require('./client/context.js');
var session = require('./server/session.js');

function createServerState(uniqueKey, defaultValues, options) {
    if (options === void 0) { options = {}; }
    var session$1 = session.serverStateSession(options.sessionOptions);
    return {
        uniqueKey: uniqueKey,
        Provider: createServerStateProvider.createServerStateProvider(defaultValues, _tslib.__assign(_tslib.__assign({}, options), { uniqueKey: uniqueKey, session: session$1 })),
        ClientContext: context.ClientContext,
        session: session$1,
        options: options !== null && options !== void 0 ? options : {},
        refData: defaultValues
    };
}

exports.createServerState = createServerState;
