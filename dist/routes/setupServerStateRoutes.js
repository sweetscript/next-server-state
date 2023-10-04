var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { serverStateSession } from '../server/session';
export function setupServerStateRoutes(options) {
    var _a = options || {}, restrictKeys = _a.restrictKeys, sessionOptions = _a.sessionOptions;
    return function handler(req, res) {
        var _a, _b, _c, _d, _e, _f, _g;
        return __awaiter(this, void 0, void 0, function () {
            var session, stateKey_1, _h, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0: return [4 /*yield*/, serverStateSession(sessionOptions)(req)];
                    case 1:
                        session = _k.sent();
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
                        return [4 /*yield*/, session.set(stateKey_1, req.body)];
                    case 2:
                        // Endpoint to update session data
                        _k.sent();
                        res.status(200).json({ message: 'Updated' });
                        return [2 /*return*/];
                    case 3:
                        if (!(((_e = req.method) === null || _e === void 0 ? void 0 : _e.toUpperCase()) === 'GET')) return [3 /*break*/, 5];
                        // Endpoint to get session data
                        _j = (_h = res.status(200)).json;
                        return [4 /*yield*/, session.get(stateKey_1)];
                    case 4:
                        // Endpoint to get session data
                        _j.apply(_h, [_k.sent()]);
                        return [2 /*return*/];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        if (((_g = (_f = req.query) === null || _f === void 0 ? void 0 : _f.path) === null || _g === void 0 ? void 0 : _g[0]) === 'sse') {
                            // Endpoint to feed Server Side Event
                            // TODO: Implement SSE option to catch route handler updates and rerender FE components
                            /*res.writeHead(200, {
                              Connection: 'keep-alive',
                              'Content-Encoding': 'none',
                              'Cache-Control': 'no-cache, no-transform',
                              'Content-Type': 'text/event-stream'
                            });
                      
                            let count = 1;
                            const interval = setInterval(() => {
                              res.write(
                                `data: ${JSON.stringify({
                                  message: 'hello',
                                  value: (count += 1)
                                })}\n\n`
                              );
                            }, 1000);
                      
                            res.on('close', () => {
                              console.log(`close ${count}`);
                              clearInterval(interval);
                              res.end();
                            });
                      
                            res.socket?.on('close', () => {
                              console.log(`close ${count}`);
                              clearInterval(interval);
                              res.end();
                            });
                            return;*/
                        }
                        _k.label = 7;
                    case 7:
                        res.status(404).end();
                        return [2 /*return*/];
                }
            });
        });
    };
}
//# sourceMappingURL=setupServerStateRoutes.js.map