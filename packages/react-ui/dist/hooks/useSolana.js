"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useSolana = void 0;
var react_1 = __importDefault(require("react"));
var wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
var SolDapp_1 = require("../providers/SolDapp");
var SolWallets_1 = require("../providers/SolWallets");
var useSolana = function () {
    var wallet = (0, wallet_adapter_react_1.useWallet)();
    var connection = (0, wallet_adapter_react_1.useConnection)();
    var dappCtx = react_1["default"].useContext(SolDapp_1.SolDappContext);
    var walletsCtx = react_1["default"].useContext(SolWallets_1.SolWalletsContext);
    if (dappCtx === undefined) {
        throw new Error('useSolana must be used within a SolDappContext');
    }
    if (walletsCtx === undefined) {
        throw new Error('useSolana must be used within a SolDappContext');
    }
    var setSolConfig = dappCtx.setSolConfig;
    var Wallets = walletsCtx;
    return __assign(__assign(__assign({}, wallet), connection), { wallets: Wallets, setSolConfig: setSolConfig });
};
exports.useSolana = useSolana;
//# sourceMappingURL=useSolana.js.map