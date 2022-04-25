import React, { useState, useEffect, useCallback } from 'react';
import { useNetwork, DAppProvider, useEthers, useEtherBalance } from '@usedapp/core';
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

var EthContractsContext = React.createContext({});
var EthContractsContextProvider = function (_a) {
    var contracts = _a.contracts, children = _a.children;
    var network = useNetwork().network;
    var _b = useState({}), Contracts = _b[0], setContracts = _b[1];
    useEffect(function () {
        var ethContracts = {};
        console.log('1:', contracts);
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
            console.log('eth contracts', ethContracts);
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
    console.log("#: ", ethContracts);
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
    var getContract = function (name) { return contractsCtx[name]; };
    return __assign(__assign({}, ethereum), { wallets: walletsCtx, contracts: contractsCtx, getContract: getContract, getEthBalance: useEtherBalance, setEthConfig: setEthConfig });
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
    var ethereum = useEthereum();
    var account = ethereum.account, getEthBalance = ethereum.getEthBalance;
    var etherBalance = getEthBalance(account, {});
    var solana = useSolana();
    var publicKey = solana.publicKey, connected = solana.connected, connection = solana.connection;
    var _a = useState(0), solBalance = _a[0], setSolbalance = _a[1];
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
    useEffect(function () {
        if (publicKey && connection && connected) {
            getUserSOLBalance(publicKey, connection).then(setSolbalance);
        }
    }, [publicKey, connection]);
    return {
        network: useNetwork() || "Solana",
        account: account || publicKey || "",
        ethereum: ethereum,
        solana: solana,
        etherBalance: etherBalance,
        solBalance: solBalance,
    };
};

export { EthContractsContext, EthContractsContextProvider, EthDappContext, EthDappContextProvider, EthWalletsContext, EthWalletsContextProvider, MultichainProvider, SolDappContext, SolDappContextProvider, SolWalletsContext, SolWalletsContextProvider, defaultConfig, solDefaultConfig, useEthereum, useMultichain, useSolana };
//# sourceMappingURL=index.js.map
