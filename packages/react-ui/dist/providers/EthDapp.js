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
import React, { useCallback, useEffect, useState } from "react";
import { DAppProvider } from "@usedapp/core";
import { EthContractsContextProvider } from "./EthContracts";
import { EthWalletsContextProvider } from "./EthWallets";
export var defaultConfig = {
    pollingInterval: 1000,
    notifications: {
        checkInterval: 1000,
        expirationPeriod: 10000
    },
    autoConnect: false
};
export var EthDappContext = React.createContext({});
export var EthDappContextProvider = function (_a) {
    var config = _a.config, contracts = _a.contracts, children = _a.children;
    var _b = useState({}), Config = _b[0], setConfig = _b[1];
    var _c = useState({}), DappConfig = _c[0], setDappConfig = _c[1];
    var _d = useState({}), Contracts = _d[0], setContracts = _d[1];
    var concatConfig = useCallback(function (conf) {
        setConfig(__assign(__assign(__assign({}, Config), defaultConfig), conf.config));
    }, [Config]);
    useEffect(function () {
        setConfig(__assign(__assign({}, defaultConfig), config));
    }, [config]);
    useEffect(function () {
        setDappConfig(Config.config);
    }, [Config]);
    useEffect(function () {
        setContracts(contracts);
    }, [contracts]);
    return (React.createElement(DAppProvider, { config: DappConfig },
        React.createElement(EthDappContext.Provider, { value: { setEthConfig: concatConfig } },
            React.createElement(EthWalletsContextProvider, { config: Config.config },
                React.createElement(EthContractsContextProvider, { contracts: Contracts }, children)))));
};
//# sourceMappingURL=EthDapp.js.map