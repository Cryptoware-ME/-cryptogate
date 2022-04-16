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
exports.EthWalletsContextProvider = exports.EthWalletsContext = void 0;
var react_1 = __importStar(require("react"));
var core_1 = require("@usedapp/core");
var walletconnect_connector_1 = require("@web3-react/walletconnect-connector");
var ledger_connector_1 = require("@web3-react/ledger-connector");
var trezor_connector_1 = require("@web3-react/trezor-connector");
var walletlink_connector_1 = require("@web3-react/walletlink-connector");
exports.EthWalletsContext = react_1["default"].createContext({});
var EthWalletsContextProvider = function (_a) {
    var config = _a.config, children = _a.children;
    var network = (0, core_1.useNetwork)().network;
    var _b = (0, react_1.useState)({}), Wallets = _b[0], setWallets = _b[1];
    (0, react_1.useEffect)(function () {
        var _a;
        if (network.chainId) {
            setWallets({
                WalletConnect: new walletconnect_connector_1.WalletConnectConnector({
                    rpc: (_a = {},
                        _a[network.chainId] = config.readOnlyUrls[network.chainId].toString() || "",
                        _a),
                    bridge: "https://bridge.walletconnect.org",
                    qrcode: true,
                    supportedChainIds: [network.chainId],
                    chainId: network.chainId
                }),
                Coinbase: new walletlink_connector_1.WalletLinkConnector({
                    url: config.readOnlyUrls[network.chainId].toString() || "",
                    appName: config.appName,
                    appLogoUrl: config.appLogo,
                    supportedChainIds: [network.chainId],
                    darkMode: true
                }),
                Ledger: new ledger_connector_1.LedgerConnector({
                    chainId: network.chainId,
                    url: config.readOnlyUrls[network.chainId].toString() || "",
                    pollingInterval: config.pollingInterval
                }),
                Trezor: new trezor_connector_1.TrezorConnector({
                    chainId: network.chainId,
                    url: config.readOnlyUrls[network.chainId].toString() || "",
                    pollingInterval: config.pollingInterval,
                    manifestEmail: config.appEmail,
                    manifestAppUrl: config.appUrl
                })
            });
        }
    }, [network]);
    return (react_1["default"].createElement(exports.EthWalletsContext.Provider, { value: __assign({}, Wallets) }, children));
};
exports.EthWalletsContextProvider = EthWalletsContextProvider;
//# sourceMappingURL=EthWallets.js.map