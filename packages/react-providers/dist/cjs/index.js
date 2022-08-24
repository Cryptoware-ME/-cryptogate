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

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var core__namespace = /*#__PURE__*/_interopNamespace(core);

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
        if (network.chainId && contracts$1 && contracts$1.length > 0) {
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
            if (ethContracts && ethContracts !== {} && ethContracts !== null) {
                setContracts(ethContracts);
            }
        }
    }, [network, contracts$1]);
    return (React__default["default"].createElement(EthContractsContext.Provider, { value: __assign({}, Contracts) }, children));
};

var EthWalletsContext = React__default["default"].createContext({});
var EthWalletsContextProvider = function (_a) {
    var config = _a.config, children = _a.children;
    var _b = core.useNetwork(), network = _b.network, updateNetwork = _b.update;
    var _c = React.useState({}), Wallets = _c[0], setWallets = _c[1];
    React.useEffect(function () {
        var _a;
        if (config && config.networks) {
            updateNetwork({ chainId: ((_a = config.networks[0]) === null || _a === void 0 ? void 0 : _a.chainId) || 4 });
        }
    }, [config]);
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

var defaultConfig = {
    pollingInterval: 1000,
    notifications: {
        checkInterval: 1000,
        expirationPeriod: 10000,
    },
    autoConnect: false,
};
var EthDappContext = React__default["default"].createContext({});
var EthDappContextProvider = function (_a) {
    var config = _a.config, contracts = _a.contracts, children = _a.children;
    var _b = React.useState({}), Config = _b[0], setConfig = _b[1];
    var _c = React.useState({}), DappConfig = _c[0], setDappConfig = _c[1];
    var _d = React.useState([]), Contracts = _d[0], setContracts = _d[1];
    var concatConfig = React.useCallback(function (conf) {
        if (conf) {
            setConfig(__assign(__assign(__assign({}, defaultConfig), Config), conf));
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
    return (React__default["default"].createElement(core.DAppProvider, { config: DappConfig },
        React__default["default"].createElement(EthDappContext.Provider, { value: { setEthConfig: concatConfig } },
            React__default["default"].createElement(EthWalletsContextProvider, { config: Config },
                React__default["default"].createElement(EthContractsContextProvider, { contracts: Contracts }, children)))));
};

var ThemeContext = React__default["default"].createContext({});
var ThemeContextProvider = function (_a) {
    var Theme = _a.Theme, children = _a.children;
    var _b = React.useState({}), theme = _b[0], setTheme = _b[1];
    React.useEffect(function () {
        setTheme(Theme);
    }, [Theme]);
    return (React__default["default"].createElement(ThemeContext.Provider, { value: { Theme: theme } }, children));
};

var MultichainProvider = function (_a) {
    var ethConfig = _a.ethConfig, ethContracts = _a.ethContracts, children = _a.children, _b = _a.theme, theme = _b === void 0 ? {
        primaryText: "#000000",
        secondaryText: "#000000",
        primaryBackground: "#ffffff",
        secondaryBackground: "#000000",
    } : _b;
    return (React__default["default"].createElement(EthDappContextProvider, { config: ethConfig, contracts: ethContracts },
        React__default["default"].createElement(ThemeContextProvider, { Theme: theme }, children)));
};

var useEthereum = function () {
    var ethereum = core.useEthers();
    var dappCtx = React__default["default"].useContext(EthDappContext);
    var walletsCtx = React__default["default"].useContext(EthWalletsContext);
    var contractsCtx = React__default["default"].useContext(EthContractsContext);
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
    return __assign(__assign({}, ethereum), { wallets: walletsCtx, contracts: contractsCtx, getContract: getContract, getEthBalance: core.useEtherBalance, setEthConfig: setEthConfig });
};

var useMultichain = function () {
    var ethereum = useEthereum();
    var account = ethereum.account, getEthBalance = ethereum.getEthBalance;
    var etherBalance = getEthBalance(account, {});
    return {
        network: core.useNetwork(),
        account: account || "",
        ethereum: ethereum,
        etherBalance: etherBalance,
    };
};

var useTheme = function () {
    var themeCtx = React.useContext(ThemeContext);
    var Theme = themeCtx.Theme;
    return { Theme: Theme };
};

exports.useDapp = core__namespace;
exports.EthContractsContext = EthContractsContext;
exports.EthContractsContextProvider = EthContractsContextProvider;
exports.EthDappContext = EthDappContext;
exports.EthDappContextProvider = EthDappContextProvider;
exports.EthWalletsContext = EthWalletsContext;
exports.EthWalletsContextProvider = EthWalletsContextProvider;
exports.MultichainProvider = MultichainProvider;
exports.ThemeContext = ThemeContext;
exports.ThemeContextProvider = ThemeContextProvider;
exports.defaultConfig = defaultConfig;
exports.useEthereum = useEthereum;
exports.useMultichain = useMultichain;
exports.useTheme = useTheme;
//# sourceMappingURL=index.js.map
