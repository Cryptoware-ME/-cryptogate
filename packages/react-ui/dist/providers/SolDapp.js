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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.SolDappContextProvider = exports.SolDappContext = exports.solDefaultConfig = void 0;
var react_1 = __importStar(require("react"));
var web3_js_1 = require("@solana/web3.js");
var wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
var SolWallets_1 = require("./SolWallets");
var wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
exports.solDefaultConfig = {
    lamportsPerSol: 1000000000
};
exports.SolDappContext = react_1["default"].createContext({});
var SolDappContextProvider = function (_a) {
    var config = _a.config, children = _a.children;
    var _b = (0, react_1.useState)({}), Config = _b[0], setConfig = _b[1];
    var _c = (0, react_1.useState)(wallet_adapter_base_1.WalletAdapterNetwork.Devnet), network = _c[0], setNetwork = _c[1];
    var concatConfig = (0, react_1.useCallback)(function (conf) {
        setConfig({
            config: __assign(__assign(__assign({}, Config), exports.solDefaultConfig), conf.config)
        });
    }, [Config]);
    var onError = (0, react_1.useCallback)(function (error) {
        throw error;
    }, []);
    var mapWallets = (0, react_1.useCallback)(function (wallets) { return ([
        wallets.Phantom,
        wallets.Slope,
        wallets.Solflare,
        wallets.Sollet
    ]); }, []);
    (0, react_1.useEffect)(function () {
        setConfig({ config: __assign(__assign({}, exports.solDefaultConfig), config) });
    }, [config]);
    (0, react_1.useEffect)(function () {
        setNetwork(Config.config.env === "mainnet"
            ? wallet_adapter_base_1.WalletAdapterNetwork.Mainnet
            : config.env === "staging"
                ? wallet_adapter_base_1.WalletAdapterNetwork.Testnet
                : wallet_adapter_base_1.WalletAdapterNetwork.Devnet);
    }, [Config]);
    return (react_1["default"].createElement(exports.SolDappContext.Provider, { value: { setSolConfig: concatConfig } },
        react_1["default"].createElement(wallet_adapter_react_1.ConnectionProvider, { endpoint: (0, web3_js_1.clusterApiUrl)(network) },
            react_1["default"].createElement(SolWallets_1.SolWalletsContextProvider, { network: network },
                react_1["default"].createElement(SolWallets_1.SolWalletsContext.Consumer, null, function (Wallets) { return (react_1["default"].createElement(wallet_adapter_react_1.WalletProvider, { wallets: mapWallets(Wallets), autoConnect: Config.config.autoConnect || false, onError: onError }, children)); })))));
};
exports.SolDappContextProvider = SolDappContextProvider;
//# sourceMappingURL=SolDapp.js.map