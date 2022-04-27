import { Strategy } from 'passport';
import { verifySolSig, verifyEthSig } from '@cryptogate/core';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
}

var Web3Strategy = /** @class */ (function (_super) {
    __extends(Web3Strategy, _super);
    function Web3Strategy(options, verify) {
        var _this = this;
        if (typeof options == "function") {
            verify = options;
            options = {};
        }
        if (!verify) {
            throw new TypeError("Web3Strategy requires a verify callback");
        }
        _this = _super.call(this) || this;
        _this._verify = verify;
        _this.name = (options === null || options === void 0 ? void 0 : options.name) || "web3";
        return _this;
    }
    /**
     * Authenticate request based on the contents of a form submission.
     *
     * @param {Object} req
     * @api protected
     */
    Web3Strategy.prototype.authenticate = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var credentials, address, msg, signed, chain, isevm, done;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        credentials = this.getCredentials(req);
                        if (!credentials) {
                            return [2 /*return*/, this.fail("Missing credentials", 401)];
                        }
                        address = credentials.address, msg = credentials.msg, signed = credentials.signed, chain = credentials.chain, isevm = credentials.isevm;
                        if (!isevm) return [3 /*break*/, 2];
                        return [4 /*yield*/, verifyEthSig(address, {
                                data: msg,
                                signature: signed,
                            }).catch(function (e) {
                                _this.fail(e, 401);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, verifySolSig(address, {
                            data: msg,
                            signature: signed,
                        }).catch(function (e) {
                            _this.fail(e, 401);
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        done = function (err, user, info) {
                            if (err) {
                                return _this.error(err);
                            }
                            if (!user) {
                                return _this.fail(info);
                            }
                            _this.success(user, info);
                        };
                        try {
                            if (this._verify) {
                                this._verify({ address: address, msg: msg, signed: signed, chain: chain, isevm: isevm, done: done, req: req });
                            }
                            else {
                                this.error("Verify callback is not defined");
                            }
                        }
                        catch (ex) {
                            return [2 /*return*/, this.error(ex)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get the required auth params from request body, or fallback to query if
     * not provided in body, but provided in query
     * @param {Object} req
     * @return {Object}
     */
    Web3Strategy.prototype.getCredentials = function (req) {
        var has = function (obj, key) {
            return Object.prototype.hasOwnProperty.call(obj, key);
        };
        var hasAll = function (obj, keys) {
            return obj && keys.every(function (k) { return has(obj, k); });
        };
        var body = req.body, query = req.query, headers = req.headers;
        var paramKeys = ["address", "msg", "signed", "chain", "isevm"];
        var headerParamKeys = [
            "x-web3-auth-address",
            "x-web3-auth-msg",
            "x-web3-auth-signed",
            "x-web3-auth-chain",
            "x-web3-auth-isevm",
        ];
        if (hasAll(body, paramKeys)) {
            return body;
        }
        else if (hasAll(query, paramKeys)) {
            return query;
        }
        else if (hasAll(headers, headerParamKeys)) {
            return {
                address: headers["x-web3-auth-address"],
                msg: headers["x-web3-auth-msg"],
                signed: headers["x-web3-auth-signed"],
                chain: headers["x-web3-auth-chain"],
                isevm: headers["x-web3-auth-isevm"],
            };
        }
        return null;
    };
    return Web3Strategy;
}(Strategy));

export { Web3Strategy };
//# sourceMappingURL=index.js.map
