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
import React, { useEffect, useState } from "react";
import { useNetwork } from "@usedapp/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { LedgerConnector } from "@web3-react/ledger-connector";
import { TrezorConnector } from "@web3-react/trezor-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
export var EthWalletsContext = React.createContext({});
export var EthWalletsContextProvider = function (_a) {
    var config = _a.config, children = _a.children;
    var network = useNetwork().network;
    var _b = useState({}), Wallets = _b[0], setWallets = _b[1];
    useEffect(function () {
        var _a;
        if (network.chainId) {
            setWallets({
                WalletConnect: new WalletConnectConnector({
                    rpc: (_a = {},
                        _a[network.chainId] = config.readOnlyUrls[network.chainId].toString() || "",
                        _a),
                    bridge: "https://bridge.walletconnect.org",
                    qrcode: true,
                    supportedChainIds: [network.chainId],
                    chainId: network.chainId
                }),
                Coinbase: new WalletLinkConnector({
                    url: config.readOnlyUrls[network.chainId].toString() || "",
                    appName: config.appName,
                    appLogoUrl: config.appLogo,
                    supportedChainIds: [network.chainId],
                    darkMode: true
                }),
                Ledger: new LedgerConnector({
                    chainId: network.chainId,
                    url: config.readOnlyUrls[network.chainId].toString() || "",
                    pollingInterval: config.pollingInterval
                }),
                Trezor: new TrezorConnector({
                    chainId: network.chainId,
                    url: config.readOnlyUrls[network.chainId].toString() || "",
                    pollingInterval: config.pollingInterval,
                    manifestEmail: config.appEmail,
                    manifestAppUrl: config.appUrl
                })
            });
        }
    }, [network]);
    return (React.createElement(EthWalletsContext.Provider, { value: __assign({}, Wallets) }, children));
};
//# sourceMappingURL=EthWallets.js.map