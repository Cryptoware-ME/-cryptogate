import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useNetwork, DAppProvider, useEthers, useEtherBalance } from '@usedapp/core';
import * as core from '@usedapp/core';
export { core as useDapp };
import { Contract } from '@ethersproject/contracts';
import { Interface } from '@ethersproject/abi';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { LedgerConnector } from '@web3-react/ledger-connector';
import { TrezorConnector } from '@web3-react/trezor-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

/*! *****************************************************************************
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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var EthContractsContext = React.createContext({});
var EthContractsContextProvider = function (_a) {
    var contracts = _a.contracts, children = _a.children;
    var network = useNetwork().network;
    var _b = useState({}), Contracts = _b[0], setContracts = _b[1];
    useEffect(function () {
        var ethContracts = {};
        if (network.chainId && contracts && contracts.length > 0) {
            contracts.forEach(function (c) {
                if (c.name && c.address && c.abi) {
                    var interfaceABI = new Interface(c.abi);
                    ethContracts[c.name] = {
                        address: network.chainId ? c.address[network.chainId] : '',
                        interface: interfaceABI,
                        contract: new Contract(network.chainId ? c.address[network.chainId] : '', interfaceABI)
                    };
                }
            });
            if (ethContracts && ethContracts !== {} && ethContracts !== null) {
                setContracts(ethContracts);
            }
        }
    }, [network, contracts]);
    return (React.createElement(EthContractsContext.Provider, { value: __assign({}, Contracts) }, children));
};

var EthWalletsContext = React.createContext({});
var EthWalletsContextProvider = function (_a) {
    var config = _a.config, children = _a.children;
    var _b = useNetwork(), network = _b.network, updateNetwork = _b.update;
    var _c = useState({}), Wallets = _c[0], setWallets = _c[1];
    useEffect(function () {
        var _a;
        if (config && config.networks) {
            updateNetwork({ chainId: ((_a = config.networks[0]) === null || _a === void 0 ? void 0 : _a.chainId) || 4 });
        }
    }, [config]);
    useEffect(function () {
        var _a;
        if (network.chainId && config) {
            setWallets({
                WalletConnect: new WalletConnectConnector({
                    rpc: (_a = {},
                        _a[network.chainId] = config.readOnlyUrls[network.chainId].toString() || "",
                        _a),
                    bridge: "https://bridge.walletconnect.org",
                    qrcode: true,
                    supportedChainIds: [network.chainId],
                    chainId: network.chainId,
                }),
                Coinbase: new WalletLinkConnector({
                    url: config.readOnlyUrls[network.chainId].toString() || "",
                    appName: config.appName,
                    appLogoUrl: config.appLogo,
                    supportedChainIds: [network.chainId],
                    darkMode: true,
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
                    manifestAppUrl: config.appUrl,
                }),
            });
        }
    }, [network, config]);
    return (React.createElement(EthWalletsContext.Provider, { value: __assign({}, Wallets) }, children));
};

var defaultConfig = {
    pollingInterval: 1000,
    notifications: {
        checkInterval: 1000,
        expirationPeriod: 10000,
    },
    autoConnect: false,
};
var EthDappContext = React.createContext({});
var EthDappContextProvider = function (_a) {
    var config = _a.config, contracts = _a.contracts, children = _a.children;
    var _b = useState({}), Config = _b[0], setConfig = _b[1];
    var _c = useState({}), DappConfig = _c[0], setDappConfig = _c[1];
    var _d = useState([]), Contracts = _d[0], setContracts = _d[1];
    var concatConfig = useCallback(function (conf) {
        if (conf) {
            setConfig(__assign(__assign(__assign({}, defaultConfig), Config), conf));
        }
    }, [Config]);
    useEffect(function () {
        if (config) {
            setConfig(__assign(__assign({}, defaultConfig), config));
        }
    }, [config]);
    useEffect(function () {
        if (Config) {
            setDappConfig(Config);
        }
    }, [Config]);
    useEffect(function () {
        if (contracts && contracts.length > 0) {
            setContracts(contracts);
        }
    }, [contracts]);
    return (React.createElement(DAppProvider, { config: DappConfig },
        React.createElement(EthDappContext.Provider, { value: { setEthConfig: concatConfig } },
            React.createElement(EthWalletsContextProvider, { config: Config },
                React.createElement(EthContractsContextProvider, { contracts: Contracts }, children)))));
};

var ThemeContext = React.createContext({});
var ThemeContextProvider = function (_a) {
    var Theme = _a.Theme, children = _a.children;
    var _b = useState({}), theme = _b[0], setTheme = _b[1];
    useEffect(function () {
        setTheme(Theme);
    }, [Theme]);
    return (React.createElement(ThemeContext.Provider, { value: { Theme: theme } }, children));
};

var MultichainProvider = function (_a) {
    var ethConfig = _a.ethConfig, ethContracts = _a.ethContracts, children = _a.children, _b = _a.theme, theme = _b === void 0 ? {
        primaryText: "#000000",
        secondaryText: "#000000",
        primaryBackground: "#ffffff",
        secondaryBackground: "#000000",
    } : _b;
    return (React.createElement(EthDappContextProvider, { config: ethConfig, contracts: ethContracts },
        React.createElement(ThemeContextProvider, { Theme: theme }, children)));
};

var useEthereum = function () {
    var ethereum = useEthers();
    var dappCtx = React.useContext(EthDappContext);
    var walletsCtx = React.useContext(EthWalletsContext);
    var contractsCtx = React.useContext(EthContractsContext);
    if (dappCtx === undefined) {
        throw new Error("useEthereum must be used within a EthDappContext");
    }
    if (walletsCtx === undefined) {
        throw new Error("useEthereum must be used within a EthWalletsContext");
    }
    if (contractsCtx === undefined) {
        throw new Error("useEthereum must be used within a EthContractsContext");
    }
    var setEthConfig = dappCtx.setEthConfig;
    var getContract = function (name) { return contractsCtx[name]; };
    return __assign(__assign({}, ethereum), { wallets: walletsCtx, contracts: contractsCtx, getContract: getContract, getEthBalance: useEtherBalance, setEthConfig: setEthConfig });
};

var useMultichain = function () {
    var ethereum = useEthereum();
    var account = ethereum.account, getEthBalance = ethereum.getEthBalance;
    getEthBalance(account, {});
    return {
        network: useNetwork(),
        account: account || "",
        ethereum: ethereum,
        // etherBalance: etherBalance,
    };
};

var useTheme = function () {
    var themeCtx = useContext(ThemeContext);
    var Theme = themeCtx.Theme;
    return { Theme: Theme };
};

export { EthContractsContext, EthContractsContextProvider, EthDappContext, EthDappContextProvider, EthWalletsContext, EthWalletsContextProvider, MultichainProvider, ThemeContext, ThemeContextProvider, defaultConfig, useEthereum, useMultichain, useTheme };
//# sourceMappingURL=index.js.map
