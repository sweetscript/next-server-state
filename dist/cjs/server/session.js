'use strict';

var _tslib = require('../_virtual/_tslib.js');
var nextAppSession = require('next-app-session');

function serverStateSession(options) {
    var defaultOptions = {
        name: 'NextServerState',
        touchAfter: true,
        cookie: {
            maxAge: 0
        }
    };
    return nextAppSession(_tslib.__assign(_tslib.__assign({}, defaultOptions), (options !== null && options !== void 0 ? options : {})));
}

exports.serverStateSession = serverStateSession;
