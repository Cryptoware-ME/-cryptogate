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
exports.EthDappContextProvider = exports.EthDappContext = exports.defaultConfig = void 0;
var react_1 = __importStar(require("react"));
var core_1 = require("@usedapp/core");
var EthContracts_1 = require("./EthContracts");
var EthWallets_1 = require("./EthWallets");
exports.defaultConfig = {
    pollingInterval: 1000,
    notifications: {
        checkInterval: 1000,
        expirationPeriod: 10000
    },
    autoConnect: false
};
exports.EthDappContext = react_1["default"].createContext({});
var EthDappContextProvider = function (_a) {
    var config = _a.config, contracts = _a.contracts, children = _a.children;
    var _b = (0, react_1.useState)({}), Config = _b[0], setConfig = _b[1];
    var _c = (0, react_1.useState)({}), DappConfig = _c[0], setDappConfig = _c[1];
    var _d = (0, react_1.useState)({}), Contracts = _d[0], setContracts = _d[1];
    var concatConfig = (0, react_1.useCallback)(function (conf) {
        setConfig(__assign(__assign(__assign({}, Config), exports.defaultConfig), conf.config));
    }, [Config]);
    (0, react_1.useEffect)(function () {
        setConfig(__assign(__assign({}, exports.defaultConfig), config));
    }, [config]);
    (0, react_1.useEffect)(function () {
        setDappConfig(Config.config);
    }, [Config]);
    (0, react_1.useEffect)(function () {
        setContracts(contracts);
    }, [contracts]);
    return (react_1["default"].createElement(core_1.DAppProvider, { config: DappConfig },
        react_1["default"].createElement(exports.EthDappContext.Provider, { value: { setEthConfig: concatConfig } },
            react_1["default"].createElement(EthWallets_1.EthWalletsContextProvider, { config: Config.config },
                react_1["default"].createElement(EthContracts_1.EthContractsContextProvider, { contracts: Contracts }, children)))));
};
exports.EthDappContextProvider = EthDappContextProvider;
//# sourceMappingURL=EthDapp.js.map