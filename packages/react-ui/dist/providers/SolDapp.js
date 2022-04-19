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
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { SolWalletsContext, SolWalletsContextProvider } from "./SolWallets";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
export var solDefaultConfig = {
    lamportsPerSol: 1000000000
};
export var SolDappContext = React.createContext({});
export var SolDappContextProvider = function (_a) {
    var config = _a.config, children = _a.children;
    var _b = useState({}), Config = _b[0], setConfig = _b[1];
    var _c = useState(WalletAdapterNetwork.Devnet), network = _c[0], setNetwork = _c[1];
    var concatConfig = useCallback(function (conf) {
        setConfig({
            config: __assign(__assign(__assign({}, Config), solDefaultConfig), conf.config)
        });
    }, [Config]);
    var onError = useCallback(function (error) {
        throw error;
    }, []);
    var mapWallets = useCallback(function (wallets) { return ([
        wallets.Phantom,
        wallets.Slope,
        wallets.Solflare,
        wallets.Sollet
    ]); }, []);
    useEffect(function () {
        setConfig({ config: __assign(__assign({}, solDefaultConfig), config) });
    }, [config]);
    useEffect(function () {
        setNetwork(Config.config.env === "mainnet"
            ? WalletAdapterNetwork.Mainnet
            : config.env === "staging"
                ? WalletAdapterNetwork.Testnet
                : WalletAdapterNetwork.Devnet);
    }, [Config]);
    return (React.createElement(SolDappContext.Provider, { value: { setSolConfig: concatConfig } },
        React.createElement(ConnectionProvider, { endpoint: clusterApiUrl(network) },
            React.createElement(SolWalletsContextProvider, { network: network },
                React.createElement(SolWalletsContext.Consumer, null, function (Wallets) { return (React.createElement(WalletProvider, { wallets: mapWallets(Wallets), autoConnect: Config.config.autoConnect || false, onError: onError }, children)); })))));
};
//# sourceMappingURL=SolDapp.js.map