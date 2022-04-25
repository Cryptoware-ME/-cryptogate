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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var EthContractsContext = React__default["default"].createContext({});
var EthContractsContextProvider = function (_a) {
    var contracts$1 = _a.contracts, children = _a.children;
    var network = core.useNetwork().network;
    var _b = React.useState({}), Contracts = _b[0], setContracts = _b[1];
    React.useEffect(function () {
        var ethContracts = {};
        console.log('1:', contracts$1);
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
            console.log('eth contracts', ethContracts);
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
        console.log('&: ', contracts);
        if (contracts && contracts.length > 0) {
            console.log("Entered");
            setContracts(contracts);
        }
    }, []);
    return (React__default["default"].createElement(core.DAppProvider, { config: DappConfig },
        React__default["default"].createElement(EthDappContext.Provider, { value: { setEthConfig: concatConfig } },
            React__default["default"].createElement(EthWalletsContextProvider, { config: Config },
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
    console.log("#: ", ethContracts);
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
    var getContract = function (name) { return contractsCtx[name]; };
    return __assign(__assign({}, ethereum), { wallets: walletsCtx, contracts: contractsCtx, getContract: getContract, getEthBalance: core.useEtherBalance, setEthConfig: setEthConfig });
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
    var ethereum = useEthereum();
    var account = ethereum.account, getEthBalance = ethereum.getEthBalance;
    var etherBalance = getEthBalance(account, {});
    var solana = useSolana();
    var publicKey = solana.publicKey, connected = solana.connected, connection = solana.connection;
    var _a = React.useState(0), solBalance = _a[0], setSolbalance = _a[1];
    var getUserSOLBalance = function (publicKey, connection) { return __awaiter(void 0, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, connection.getBalance(publicKey, "confirmed")];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    e_1 = _a.sent();
                    console.log("error getting balance: ", e_1);
                    return [2 /*return*/, 0];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        if (publicKey && connection && connected) {
            getUserSOLBalance(publicKey, connection).then(setSolbalance);
        }
    }, [publicKey, connection]);
    return {
        network: core.useNetwork() || "Solana",
        account: account || publicKey || "",
        ethereum: ethereum,
        solana: solana,
        etherBalance: etherBalance,
        solBalance: solBalance,
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
