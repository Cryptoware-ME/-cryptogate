'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@usedapp/core');
var contracts = require('@ethersproject/contracts');
var abi = require('@ethersproject/abi');
var walletconnectConnector = require('@web3-react/walletconnect-connector');
var ledgerConnector = require('@web3-react/ledger-connector');
var trezorConnector = require('@web3-react/trezor-connector');
var walletlinkConnector = require('@web3-react/walletlink-connector');
var walletAdapterWallets = require('@solana/wallet-adapter-wallets');
var web3_js = require('@solana/web3.js');
var walletAdapterBase = require('@solana/wallet-adapter-base');
var walletAdapterReact = require('@solana/wallet-adapter-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

var EthContractsContext = React__default["default"].createContext({});
var EthContractsContextProvider = function (_a) {
    var contracts$1 = _a.contracts, children = _a.children;
    var network = core.useNetwork().network;
    var _b = React.useState({}), Contracts = _b[0], setContracts = _b[1];
    React.useEffect(function () {
        var ethContracts = {};
        if (network.chainId && contracts$1) {
            contracts$1.forEach(function (c) {
                if (c.name && c.address && c.abi) {
                    var interfaceABI = new abi.Interface(c.abi);
                    ethContracts[c.name] = {
                        address: network.chainId ? c.address[network.chainId] : '',
                        interface: interfaceABI,
                        contract: new contracts.Contract(network.chainId ? c.address[network.chainId] : '', interfaceABI)
                    };
                }
            });
            if (!ethContracts && ethContracts !== {} && ethContracts !== null) {
                setContracts(ethContracts);
            }
        }
    }, [network, contracts$1]);
    return (React__default["default"].createElement(EthContractsContext.Provider, { value: __assign({}, Contracts) }, children));
};

var EthWalletsContext = React__default["default"].createContext({});
var EthWalletsContextProvider = function (_a) {
    var config = _a.config, children = _a.children;
    var network = core.useNetwork().network;
    var _b = React.useState({}), Wallets = _b[0], setWallets = _b[1];
    React.useEffect(function () {
        var _a;
        if (network.chainId && config) {
            setWallets({
                WalletConnect: new walletconnectConnector.WalletConnectConnector({
                    rpc: (_a = {},
                        _a[network.chainId] = config.readOnlyUrls[network.chainId].toString() || "",
                        _a),
                    bridge: "https://bridge.walletconnect.org",
                    qrcode: true,
                    supportedChainIds: [network.chainId],
                    chainId: network.chainId,
                }),
                Coinbase: new walletlinkConnector.WalletLinkConnector({
                    url: config.readOnlyUrls[network.chainId].toString() || "",
                    appName: config.appName,
                    appLogoUrl: config.appLogo,
                    supportedChainIds: [network.chainId],
                    darkMode: true,
                }),
                Ledger: new ledgerConnector.LedgerConnector({
                    chainId: network.chainId,
                    url: config.readOnlyUrls[network.chainId].toString() || "",
                    pollingInterval: config.pollingInterval
                }),
                Trezor: new trezorConnector.TrezorConnector({
                    chainId: network.chainId,
                    url: config.readOnlyUrls[network.chainId].toString() || "",
                    pollingInterval: config.pollingInterval,
                    manifestEmail: config.appEmail,
                    manifestAppUrl: config.appUrl,
                }),
            });
        }
    }, [network, config]);
    return (React__default["default"].createElement(EthWalletsContext.Provider, { value: __assign({}, Wallets) }, children));
};

var SolWalletsContext = React__default["default"].createContext({});
var SolWalletsContextProvider = function (_a) {
    var network = _a.network, children = _a.children;
    var _b = React.useState({}), Wallets = _b[0], setWallets = _b[1];
    React.useEffect(function () {
        if (network) {
            setWallets({
                Phantom: new walletAdapterWallets.PhantomWalletAdapter(),
                Slope: new walletAdapterWallets.SlopeWalletAdapter(),
                Solflare: new walletAdapterWallets.SolflareWalletAdapter({ network: network }),
                Sollet: new walletAdapterWallets.SolletExtensionWalletAdapter({ network: network })
            });
        }
    }, [network]);
    return (React__default["default"].createElement(SolWalletsContext.Provider, { value: __assign({}, Wallets) }, children));
};

var defaultConfig = {
    pollingInterval: 1000,
    notifications: {
        checkInterval: 1000,
        expirationPeriod: 10000,
    },
    autoConnect: false
};
var EthDappContext = React__default["default"].createContext({});
var EthDappContextProvider = function (_a) {
    var config = _a.config, contracts = _a.contracts, children = _a.children;
    var _b = React.useState({}), Config = _b[0], setConfig = _b[1];
    var _c = React.useState({}), DappConfig = _c[0], setDappConfig = _c[1];
    var _d = React.useState({}), Contracts = _d[0], setContracts = _d[1];
    var concatConfig = React.useCallback(function (conf) {
        if (conf) {
            setConfig(__assign(__assign(__assign({}, defaultConfig), Config), conf.config));
        }
    }, [Config]);
    React.useEffect(function () {
        if (config) {
            setConfig(__assign(__assign({}, defaultConfig), config));
        }
    }, [config]);
    React.useEffect(function () {
        if (Config) {
            setDappConfig(Config);
        }
    }, [Config]);
    React.useEffect(function () {
        if (contracts && contracts.length > 0) {
            setContracts(contracts);
        }
    }, [contracts]);
    console.log(Config);
    console.log(DappConfig);
    return (React__default["default"].createElement(core.DAppProvider, { config: DappConfig },
        React__default["default"].createElement(EthDappContext.Provider, { value: { setEthConfig: concatConfig } },
            React__default["default"].createElement(EthWalletsContextProvider, __assign({}, Config),
                React__default["default"].createElement(EthContractsContextProvider, { contracts: Contracts }, children)))));
};

var solDefaultConfig = {
    lamportsPerSol: 1000000000
};
var SolDappContext = React__default["default"].createContext({});
var SolDappContextProvider = function (_a) {
    var config = _a.config, children = _a.children;
    var _b = React.useState({}), Config = _b[0], setConfig = _b[1];
    var _c = React.useState(walletAdapterBase.WalletAdapterNetwork.Devnet), network = _c[0], setNetwork = _c[1];
    var concatConfig = React.useCallback(function (conf) {
        if (conf) {
            setConfig({
                config: __assign(__assign(__assign({}, Config), solDefaultConfig), conf.config)
            });
        }
    }, [Config]);
    var onError = React.useCallback(function (error) {
        throw error;
    }, []);
    var mapWallets = React.useCallback(function (wallets) { return ([
        wallets.Phantom,
        wallets.Slope,
        wallets.Solflare,
        wallets.Sollet
    ]); }, []);
    React.useEffect(function () {
        if (config) {
            setConfig({ config: __assign(__assign({}, solDefaultConfig), config) });
        }
    }, [config]);
    React.useEffect(function () {
        if (Config && Config.config) {
            setNetwork(Config.config.env === "mainnet"
                ? walletAdapterBase.WalletAdapterNetwork.Mainnet
                : Config.config.env === "staging"
                    ? walletAdapterBase.WalletAdapterNetwork.Testnet
                    : walletAdapterBase.WalletAdapterNetwork.Devnet);
        }
    }, [Config]);
    return (React__default["default"].createElement(SolDappContext.Provider, { value: { setSolConfig: concatConfig } },
        React__default["default"].createElement(walletAdapterReact.ConnectionProvider, { endpoint: web3_js.clusterApiUrl(network) },
            React__default["default"].createElement(SolWalletsContextProvider, { network: network },
                React__default["default"].createElement(SolWalletsContext.Consumer, null, function (Wallets) { return Wallets && Wallets.Phantom && (React__default["default"].createElement(walletAdapterReact.WalletProvider, { wallets: mapWallets(Wallets), autoConnect: (Config && Config.config) ? Config.config.autoConnect : false, onError: onError }, children)); })))));
};

var MultichainProvider = function (_a) {
    var ethConfig = _a.ethConfig, solConfig = _a.solConfig, ethContracts = _a.ethContracts, children = _a.children;
    return (React__default["default"].createElement(EthDappContextProvider, { config: ethConfig, contracts: ethContracts },
        React__default["default"].createElement(SolDappContextProvider, __assign({}, solConfig), children)));
};

var useEthereum = function () {
    var ethereum = core.useEthers();
    var dappCtx = React__default["default"].useContext(EthDappContext);
    var walletsCtx = React__default["default"].useContext(EthWalletsContext);
    var contractsCtx = React__default["default"].useContext(EthContractsContext);
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
    var wallet = walletAdapterReact.useWallet();
    var connection = walletAdapterReact.useConnection();
    var dappCtx = React__default["default"].useContext(SolDappContext);
    var walletsCtx = React__default["default"].useContext(SolWalletsContext);
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
        network: core.useNetwork() || 'Solana',
        ethereum: useEthereum(),
        solana: useSolana()
    };
};

exports.EthContractsContext = EthContractsContext;
exports.EthContractsContextProvider = EthContractsContextProvider;
exports.EthDappContext = EthDappContext;
exports.EthDappContextProvider = EthDappContextProvider;
exports.EthWalletsContext = EthWalletsContext;
exports.EthWalletsContextProvider = EthWalletsContextProvider;
exports.MultichainProvider = MultichainProvider;
exports.SolDappContext = SolDappContext;
exports.SolDappContextProvider = SolDappContextProvider;
exports.SolWalletsContext = SolWalletsContext;
exports.SolWalletsContextProvider = SolWalletsContextProvider;
exports.defaultConfig = defaultConfig;
exports.solDefaultConfig = solDefaultConfig;
exports.useEthereum = useEthereum;
exports.useMultichain = useMultichain;
exports.useSolana = useSolana;
//# sourceMappingURL=index.js.map
