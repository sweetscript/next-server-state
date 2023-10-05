'use strict';

var _tslib = require('../_virtual/_tslib.js');
var session = require('../server/session.js');

function setupServerStateRoutes(options) {
    var _a = options || {}, restrictKeys = _a.restrictKeys, sessionOptions = _a.sessionOptions;
    return function handler(req, res) {
        var _a, _b, _c, _d, _e, _f, _g;
        return _tslib.__awaiter(this, void 0, void 0, function () {
            var session$1, stateKey_1, _h, _j;
            return _tslib.__generator(this, function (_k) {
                switch (_k.label) {
                    case 0: return [4 /*yield*/, session.serverStateSession(sessionOptions)(req)];
                    case 1:
                        session$1 = _k.sent();
                        if (!(((_b = (_a = req.query) === null || _a === void 0 ? void 0 : _a.path) === null || _b === void 0 ? void 0 : _b[0]) === 'handle')) return [3 /*break*/, 6];
                        stateKey_1 = (_c = req.query.path) === null || _c === void 0 ? void 0 : _c[1];
                        if (!stateKey_1 || stateKey_1 === '') {
                            res.status(401).end();
                            return [2 /*return*/];
                        }
                        // Make sure key is whitelisted
                        if (restrictKeys &&
                            restrictKeys.filter(function (p) { return p.toLowerCase() == stateKey_1.toLowerCase(); }).length === 0) {
                            res.status(401).json({
                                message: 'Unrecognized server state key, make sure you add your state key to restrictedKeys'
                            });
                            return [2 /*return*/];
                        }
                        if (!(((_d = req.method) === null || _d === void 0 ? void 0 : _d.toUpperCase()) === 'POST')) return [3 /*break*/, 3];
                        // Endpoint to update session data
                        return [4 /*yield*/, session$1.set(stateKey_1, req.body)];
                    case 2:
                        // Endpoint to update session data
                        _k.sent();
                        res.status(200).json({ message: 'Updated' });
                        return [2 /*return*/];
                    case 3:
                        if (!(((_e = req.method) === null || _e === void 0 ? void 0 : _e.toUpperCase()) === 'GET')) return [3 /*break*/, 5];
                        // Endpoint to get session data
                        _j = (_h = res.status(200)).json;
                        return [4 /*yield*/, session$1.get(stateKey_1)];
                    case 4:
                        // Endpoint to get session data
                        _j.apply(_h, [_k.sent()]);
                        return [2 /*return*/];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        if (((_g = (_f = req.query) === null || _f === void 0 ? void 0 : _f.path) === null || _g === void 0 ? void 0 : _g[0]) === 'sse') ;
                        _k.label = 7;
                    case 7:
                        res.status(404).end();
                        return [2 /*return*/];
                }
            });
        });
    };
}

exports.setupServerStateRoutes = setupServerStateRoutes;
