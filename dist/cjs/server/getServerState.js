'use strict';

var _tslib = require('../_virtual/_tslib.js');

function getServerState(context) {
    var _a;
    return _tslib.__awaiter(this, void 0, void 0, function () {
        function updateState(data) {
            return _tslib.__awaiter(this, void 0, void 0, function () {
                return _tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, context.session().set(context.uniqueKey, _tslib.__assign(_tslib.__assign({}, state), data))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        var state, _b;
        return _tslib.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = context.session;
                    if (!_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, context.session().get(context.uniqueKey)];
                case 1:
                    _b = (_c.sent());
                    _c.label = 2;
                case 2:
                    state = (_a = (_b)) !== null && _a !== void 0 ? _a : {};
                    return [2 /*return*/, [state, updateState]];
            }
        });
    });
}

exports.getServerState = getServerState;
