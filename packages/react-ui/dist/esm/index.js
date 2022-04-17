import React, { useState, useEffect, useCallback } from 'react';
import { useNetwork, DAppProvider, useEthers } from '@usedapp/core';
import { Contract } from '@ethersproject/contracts';
import { Interface } from '@ethersproject/abi';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { LedgerConnector } from '@web3-react/ledger-connector';
import { TrezorConnector } from '@web3-react/trezor-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, SolletExtensionWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useWallet, useConnection } from '@solana/wallet-adapter-react';

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
        if (network.chainId && contracts) {
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
            if (!ethContracts && ethContracts !== {} && ethContracts !== null) {
                setContracts(ethContracts);
            }
        }
    }, [network, contracts]);
    return (React.createElement(EthContractsContext.Provider, { value: __assign({}, Contracts) }, children));
};

var EthWalletsContext = React.createContext({});
var EthWalletsContextProvider = function (_a) {
    var config = _a.config, children = _a.children;
    var network = useNetwork().network;
    var _b = useState({}), Wallets = _b[0], setWallets = _b[1];
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

var SolWalletsContext = React.createContext({});
var SolWalletsContextProvider = function (_a) {
    var network = _a.network, children = _a.children;
    var _b = useState({}), Wallets = _b[0], setWallets = _b[1];
    useEffect(function () {
        if (network) {
            setWallets({
                Phantom: new PhantomWalletAdapter(),
                Slope: new SlopeWalletAdapter(),
                Solflare: new SolflareWalletAdapter({ network: network }),
                Sollet: new SolletExtensionWalletAdapter({ network: network })
            });
        }
    }, [network]);
    return (React.createElement(SolWalletsContext.Provider, { value: __assign({}, Wallets) }, children));
};

var defaultConfig = {
    pollingInterval: 1000,
    notifications: {
        checkInterval: 1000,
        expirationPeriod: 10000,
    },
    autoConnect: false
};
var EthDappContext = React.createContext({});
var EthDappContextProvider = function (_a) {
    var config = _a.config, contracts = _a.contracts, children = _a.children;
    var _b = useState({}), Config = _b[0], setConfig = _b[1];
    var _c = useState({}), DappConfig = _c[0], setDappConfig = _c[1];
    var _d = useState({}), Contracts = _d[0], setContracts = _d[1];
    var concatConfig = useCallback(function (conf) {
        if (conf) {
            setConfig(__assign(__assign(__assign({}, Config), defaultConfig), conf.config));
        }
    }, [Config]);
    useEffect(function () {
        if (config) {
            setConfig(__assign(__assign({}, defaultConfig), config));
        }
    }, [config]);
    useEffect(function () {
        if (Config.config) {
            setDappConfig(Config.config);
        }
    }, [Config]);
    useEffect(function () {
        if (contracts && contracts.length > 0) {
            setContracts(contracts);
        }
    }, [contracts]);
    return (React.createElement(DAppProvider, { config: DappConfig },
        React.createElement(EthDappContext.Provider, { value: { setEthConfig: concatConfig } },
            React.createElement(EthWalletsContextProvider, { config: Config.config },
                React.createElement(EthContractsContextProvider, { contracts: Contracts }, children)))));
};

var solDefaultConfig = {
    lamportsPerSol: 1000000000
};
var SolDappContext = React.createContext({});
var SolDappContextProvider = function (_a) {
    var config = _a.config, children = _a.children;
    var _b = useState({}), Config = _b[0], setConfig = _b[1];
    var _c = useState(WalletAdapterNetwork.Devnet), network = _c[0], setNetwork = _c[1];
    var concatConfig = useCallback(function (conf) {
        if (conf) {
            setConfig({
                config: __assign(__assign(__assign({}, Config), solDefaultConfig), conf.config)
            });
        }
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
        if (config) {
            setConfig({ config: __assign(__assign({}, solDefaultConfig), config) });
        }
    }, [config]);
    useEffect(function () {
        if (Config && Config.config) {
            setNetwork(Config.config.env === "mainnet"
                ? WalletAdapterNetwork.Mainnet
                : Config.config.env === "staging"
                    ? WalletAdapterNetwork.Testnet
                    : WalletAdapterNetwork.Devnet);
        }
    }, [Config]);
    return (React.createElement(SolDappContext.Provider, { value: { setSolConfig: concatConfig } },
        React.createElement(ConnectionProvider, { endpoint: clusterApiUrl(network) },
            React.createElement(SolWalletsContextProvider, { network: network },
                React.createElement(SolWalletsContext.Consumer, null, function (Wallets) { return Wallets && Wallets.Phantom && (React.createElement(WalletProvider, { wallets: mapWallets(Wallets), autoConnect: (Config && Config.config) ? Config.config.autoConnect : false, onError: onError }, children)); })))));
};

var MultichainProvider = function (_a) {
    var ethConfig = _a.ethConfig, solConfig = _a.solConfig, ethContracts = _a.ethContracts, children = _a.children;
    return (React.createElement(EthDappContextProvider, { config: ethConfig, contracts: ethContracts },
        React.createElement(SolDappContextProvider, __assign({}, solConfig), children)));
};

var useEthereum = function () {
    var ethereum = useEthers();
    var dappCtx = React.useContext(EthDappContext);
    var walletsCtx = React.useContext(EthWalletsContext);
    var contractsCtx = React.useContext(EthContractsContext);
    if (dappCtx === undefined) {
        throw new Error('useEthereum must be used within a EthDappContext');
    }
    if (walletsCtx === undefined) {
        throw new Error('useEthereum must be used within a EthWalletsContext');
    }
    if (contractsCtx === undefined) {
        throw new Error('useEthereum must be used within a EthContractsContext');
    }
    var setEthConfig = dappCtx.setEthConfig;
    var Wallets = walletsCtx;
    var getContract = function (name) { return contractsCtx[name]; };
    return __assign(__assign({}, ethereum), { wallets: Wallets, getContract: getContract, setEthConfig: setEthConfig });
};

var useSolana = function () {
    var wallet = useWallet();
    var connection = useConnection();
    var dappCtx = React.useContext(SolDappContext);
    var walletsCtx = React.useContext(SolWalletsContext);
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

var useMultichain = function () {
    return {
        network: useNetwork() || 'Solana',
        ethereum: useEthereum(),
        solana: useSolana()
    };
};

export { EthContractsContext, EthContractsContextProvider, EthDappContext, EthDappContextProvider, EthWalletsContext, EthWalletsContextProvider, MultichainProvider, SolDappContext, SolDappContextProvider, SolWalletsContext, SolWalletsContextProvider, defaultConfig, solDefaultConfig, useEthereum, useMultichain, useSolana };
//# sourceMappingURL=index.js.map
