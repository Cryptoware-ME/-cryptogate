'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ethers = require('ethers');
var CoinbaseWalletSDK = require('@coinbase/wallet-sdk');
var WalletConnect = require('@walletconnect/client');
var QRCodeModal = require('@walletconnect/qrcode-modal');

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
var ethers__namespace = /*#__PURE__*/_interopNamespace(ethers);
var CoinbaseWalletSDK__default = /*#__PURE__*/_interopDefaultLegacy(CoinbaseWalletSDK);
var WalletConnect__default = /*#__PURE__*/_interopDefaultLegacy(WalletConnect);
var QRCodeModal__default = /*#__PURE__*/_interopDefaultLegacy(QRCodeModal);

const ConfigContext = React__default["default"].createContext({ ethConfig: { defaultNetwork: undefined, readOnlyUrls: {} } });
function useConfig() {
    const context = React__default["default"].useContext(ConfigContext);
    return context;
}

function ConfigProvider({ config, children }) {
    const [DAppConfig, setDAppConfig] = React__default["default"].useState({});
    React__default["default"].useEffect(() => {
        setDAppConfig(Object.assign({}, config));
    }, [config]);
    return React__default["default"].createElement(ConfigContext.Provider, { value: DAppConfig, children: children });
}

const ErrorsBagContext = React__default["default"].createContext({ errors: [], addError: (err) => { } });
function useErrorsBag() {
    return React__default["default"].useContext(ErrorsBagContext);
}

function ErrorsBagProvider({ children }) {
    const [errors, setErrors] = React__default["default"].useState([]);
    const addError = (error) => {
        setErrors([...errors, error]);
    };
    return (React__default["default"].createElement(ErrorsBagContext.Provider, { value: { errors: errors, addError: addError }, children: children }));
}

const EvmNodeContext = React__default["default"].createContext({ provider: undefined, setProvider: () => { } });
function useEvmNode() {
    return React__default["default"].useContext(EvmNodeContext);
}

// Chain Explorer URLs
// Etherscan
const mainnetEtherscanUrl = 'https://mainnet.etherscan.io';
const goerliEtherscanUrl = 'https://goerli.etherscan.io';
// BSC Scan
const bscScanUrl = 'https://testnet.bscscan.com';
const bscTestnetScanUrl = 'https://testnet.bscscan.com';
// Polygon Scan
const polygonScanUrl = 'https://polygonscan.com';
const mumbaiPolygonScanUrl = 'https://mumbai.polygonscan.com';
// Snow Trace (Avalanche)
const avalancheExplorerUrl = 'https://snowtrace.io';
const testAvalancheExplorerUrl = 'https://testnet.snowtrace.io';

/**
 * @public
 * @param {ChainId} chainId The Id of the requested chain
 * @return {Chain | undefined} Chain object of the requested chain or undefined
 * @example
 *  const mainnetChain = getChainById(ChainId.Mainnet)
*/
const getChainById = (chainId) => DEFAULT_SUPPORTED_CHAINS.find((network) => network.chainId == chainId);

/**
 * @internal INTENDED FOR INTERNAL USE ONLY. USE AT YOUR OWN RISK
 * @param {string} explorerUrl Base URL of the chain explorer
 * @param {EvmAddress} address Contract or wallet address
 * @return {string} URL
 * @example
 *  const url = getAddressLink("https://etherscan.io", "0x00")
*/
const getAddressLink = (explorerUrl, address) => `${explorerUrl}/address/${address}`;
/**
 * @internal INTENDED FOR INTERNAL USE ONLY. USE AT YOUR OWN RISK
 * @param {string} explorerUrl Base URL of the chain explorer
 * @param {EvmAddress} txnHash Transaction Hash
 * @return {string} URL
 * @example
 *  const url = getTransactionLink("https://etherscan.io", "0x24..01f")
*/
const getTransactionLink = (explorerUrl, txnHash) => `${explorerUrl}/tx/${txnHash}`;

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
const Mainnet = {
    chainId: 1,
    chainName: 'Mainnet',
    isTestChain: false,
    isLocalChain: false,
    blockExplorerUrl: mainnetEtherscanUrl,
    getExplorerAddressLink: (address) => getAddressLink(mainnetEtherscanUrl, address),
    getExplorerTransactionLink: (txnId) => getTransactionLink(mainnetEtherscanUrl, txnId)
};
/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
const Goerli = {
    chainId: 5,
    chainName: 'Goerli',
    isTestChain: true,
    isLocalChain: false,
    blockExplorerUrl: goerliEtherscanUrl,
    getExplorerAddressLink: (address) => getAddressLink(goerliEtherscanUrl, address),
    getExplorerTransactionLink: (txnId) => getTransactionLink(goerliEtherscanUrl, txnId)
};

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
const BSC = {
    chainId: 56,
    chainName: 'BSC',
    isTestChain: false,
    isLocalChain: false,
    nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
    },
    blockExplorerUrl: bscScanUrl,
    getExplorerAddressLink: (address) => getAddressLink(bscScanUrl, address),
    getExplorerTransactionLink: (txnId) => getTransactionLink(bscScanUrl, txnId)
};
/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
const BSCTestnet = {
    chainId: 97,
    chainName: 'BSCTestnet',
    isTestChain: true,
    isLocalChain: false,
    blockExplorerUrl: bscTestnetScanUrl,
    getExplorerAddressLink: (address) => getAddressLink(bscTestnetScanUrl, address),
    getExplorerTransactionLink: (txnId) => getTransactionLink(bscTestnetScanUrl, txnId)
};

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
const Polygon = {
    chainId: 137,
    chainName: 'Polygon Mainnet',
    isTestChain: false,
    isLocalChain: false,
    nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18,
    },
    blockExplorerUrl: polygonScanUrl,
    getExplorerAddressLink: (address) => getAddressLink(polygonScanUrl, address),
    getExplorerTransactionLink: (txnId) => getTransactionLink(polygonScanUrl, txnId)
};
/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
const Mumbai = {
    chainId: 80001,
    chainName: 'Mumbai',
    isTestChain: true,
    isLocalChain: false,
    nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18,
    },
    blockExplorerUrl: mumbaiPolygonScanUrl,
    getExplorerAddressLink: (address) => getAddressLink(mumbaiPolygonScanUrl, address),
    getExplorerTransactionLink: (txnId) => getTransactionLink(mumbaiPolygonScanUrl, txnId)
};

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
const Avalanche = {
    chainId: 43114,
    chainName: 'Avalanche',
    isTestChain: false,
    isLocalChain: false,
    nativeCurrency: {
        name: 'Avalanche',
        symbol: 'AVAX',
        decimals: 18,
    },
    blockExplorerUrl: avalancheExplorerUrl,
    getExplorerAddressLink: (address) => getAddressLink(avalancheExplorerUrl, address),
    getExplorerTransactionLink: (txnId) => getTransactionLink(avalancheExplorerUrl, txnId)
};
/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
const AvalancheTestnet = {
    chainId: 43113,
    chainName: 'AvalancheTestnet',
    isTestChain: true,
    isLocalChain: false,
    nativeCurrency: {
        name: 'Avalanche',
        symbol: 'AVAX',
        decimals: 18,
    },
    blockExplorerUrl: testAvalancheExplorerUrl,
    getExplorerAddressLink: (address) => getAddressLink(testAvalancheExplorerUrl, address),
    getExplorerTransactionLink: (txnId) => getTransactionLink(testAvalancheExplorerUrl, txnId)
};

/**
 * @array
 * @description The Default Chains Supported By Cryptogate
*/
const DEFAULT_SUPPORTED_CHAINS = [
    Goerli, Mainnet,
    BSC, BSCTestnet,
    Polygon, Mumbai,
    Avalanche, AvalancheTestnet
];
/**
 * @enum
 * @description ChainIds Of The Default Chains Supported By Cryptogate
*/
exports.ChainId = void 0;
(function (ChainId) {
    ChainId[ChainId["Mainnet"] = 1] = "Mainnet";
    ChainId[ChainId["Goerli"] = 5] = "Goerli";
    ChainId[ChainId["BSC"] = 56] = "BSC";
    ChainId[ChainId["BSCTestnet"] = 97] = "BSCTestnet";
    ChainId[ChainId["Polygon"] = 137] = "Polygon";
    ChainId[ChainId["Mumbai"] = 80001] = "Mumbai";
    ChainId[ChainId["Avalanche"] = 43114] = "Avalanche";
    ChainId[ChainId["AvalancheTestnet"] = 43113] = "AvalancheTestnet";
})(exports.ChainId || (exports.ChainId = {}));

const NetworkContext = React__default["default"].createContext({
    networkData: { chainId: exports.ChainId.Mainnet, chain: getChainById(exports.ChainId.Mainnet) },
    setNetworkData: () => { }
});
function useNetwork() {
    const context = React__default["default"].useContext(NetworkContext);
    return context;
}

function NetworkProvider({ children, config }) {
    const [networkData, setNetworkData] = React__default["default"].useState({});
    React.useEffect(() => {
        if (config) {
            setNetworkData({
                chainId: config.ethConfig.defaultNetwork.chainId,
                chain: config.ethConfig.defaultNetwork,
            });
        }
    }, [config]);
    return (React__default["default"].createElement(NetworkContext.Provider, { value: {
            networkData,
            setNetworkData,
        }, children: children }));
}

function EvmNodeProvider({ children, readOnlyUrls }) {
    const [provider, setProvider] = React__default["default"].useState();
    const { networkData } = useNetwork();
    React__default["default"].useEffect(() => {
        if (!provider && readOnlyUrls[networkData.chainId]) {
            let _provider = new ethers.providers.JsonRpcProvider(readOnlyUrls[networkData.chainId]);
            setProvider(_provider);
        }
    }, [networkData, readOnlyUrls]);
    return (React__default["default"].createElement(EvmNodeContext.Provider, { value: { provider, setProvider }, children: children }));
}

const WindowContext = React__default["default"].createContext(true);
function useWindow() {
    return React__default["default"].useContext(WindowContext);
}

function WindowProvider({ children }) {
    const [isActiveWindow, setActiveWindow] = React__default["default"].useState(true);
    React__default["default"].useEffect(() => {
        const visibilityChangeListener = () => {
            switch (document.visibilityState) {
                case "hidden":
                    setActiveWindow(false);
                    break;
                case "visible":
                    setActiveWindow(true);
                    break;
            }
        };
        document.addEventListener("visibilitychange", visibilityChangeListener);
        return () => document.removeEventListener("visibilitychange", visibilityChangeListener);
    }, []);
    return React__default["default"].createElement(WindowContext.Provider, { value: isActiveWindow, children: children });
}

const WalletContext = React__default["default"].createContext({ walletData: { account: undefined }, setWalletData: () => { } });
function useWallet() {
    const context = React__default["default"].useContext(WalletContext);
    return context;
}

function WalletProvider({ children }) {
    const [walletData, setWalletData] = React__default["default"].useState({
        account: undefined,
    });
    return (React__default["default"].createElement(WalletContext.Provider, { value: {
            walletData,
            setWalletData,
        }, children: children }));
}

const MultiChainProvider = ({ config, children, }) => {
    return (React__default["default"].createElement(WindowProvider, null,
        React__default["default"].createElement(ConfigProvider, { config: config },
            React__default["default"].createElement(ErrorsBagProvider, null,
                React__default["default"].createElement(NetworkProvider, { config: config },
                    React__default["default"].createElement(EvmNodeProvider, { readOnlyUrls: config.ethConfig.readOnlyUrls },
                        React__default["default"].createElement(WalletProvider, null, children)))))));
};

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

/**
 * @internal INTENDED FOR INTERNAL USE ONLY. USE AT YOUR OWN
 * @return Providers (if available) for metamask, brave wallet and coinbase
 * @example
 *  const {metamask, brave, coinbase} = useBrowserWallets()
*/
const useBrowserWallets = () => {
    const [metamask, setMetamask] = React__default["default"].useState();
    const [brave, setBrave] = React__default["default"].useState();
    const [coinbase, setCoinbase] = React__default["default"].useState();
    const [browserProviders, setBrowserProviders] = React__default["default"].useState();
    React__default["default"].useEffect(() => {
        var _a;
        setBrowserProviders(window.ethereum);
        if (typeof browserProviders !== "undefined") {
            if (((_a = browserProviders.providers) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                browserProviders.providers.forEach((p) => __awaiter(void 0, void 0, void 0, function* () {
                    if (p.isMetaMask) {
                        setMetamask(p);
                    }
                    if (p.isBraveWallet) {
                        setBrave(p);
                    }
                    if (p.isWalletLink || p.isCoinbaseWallet) {
                        setCoinbase(p);
                    }
                }));
            }
            else {
                if (browserProviders.isMetaMask)
                    setMetamask(browserProviders);
                if (browserProviders.isBraveWallet)
                    setBrave(browserProviders);
                if (browserProviders.isCoinbase)
                    setCoinbase(browserProviders);
            }
        }
    }, [browserProviders]);
    return { metamask, brave, coinbase };
};

/**
 * @public
 * @param {EvmAddress | undefined} address Base URL of the chain explorer
 * @return Eth balance and ENS of the provided address
 * @example
 *  const {ethbalance, ens} = useAccount("0x00")
*/
const useAccount = (address) => {
    const { provider } = useEvmNode();
    const [ethBalance, setEhBalance] = React__default["default"].useState();
    const [ens, setEns] = React__default["default"].useState();
    React__default["default"].useEffect(() => {
        if (provider && address) {
            provider.getBalance(address).then((balanceBigNbWei) => {
                setEhBalance(ethers__namespace.utils.formatEther(balanceBigNbWei.toString()));
            });
            provider.lookupAddress(address).then((res) => res && setEns(res));
        }
    }, [provider]);
    return {
        ethBalance,
        ens
    };
};
/**
 * @public
 * @param {string} ens ENS Name
 * @return {EvmAddress | undefined} Wallet or contract address resolved from the provided ENS
 * @example
 *  const address = resolveENS("ens.eth")
*/
const resolveENS = (ens) => {
    const { provider } = useEvmNode();
    const [address, setAddress] = React__default["default"].useState();
    React__default["default"].useEffect(() => {
        if (provider && ens)
            provider.resolveName(ens).then((res) => {
                res && setAddress(res);
            });
    }, [provider]);
    return address;
};

/**
 * @public
*/
const useEthereum = () => {
    const { walletData: { account }, setWalletData } = useWallet();
    const { brave, metamask, coinbase } = useBrowserWallets();
    const { networkData, setNetworkData } = useNetwork();
    const { ethConfig, walletsConfig } = useConfig();
    const { ens, ethBalance } = useAccount(account);
    const { provider, setProvider } = useEvmNode();
    const { errors, addError } = useErrorsBag();
    const setData = (_account, _chainId, _provider) => {
        setWalletData({ account: _account });
        setNetworkData({ chainId: _chainId, chain: getChainById(_chainId) });
        _provider && setProvider(new ethers__namespace.providers.Web3Provider(_provider));
    };
    const activateWallet = (_provider) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const res = yield _provider.send("eth_requestAccounts", []);
            const chainIdRes = yield _provider.send("eth_chainId", []);
            if (res.result)
                setData(res.result[0], chainIdRes.result.split("x")[1], _provider);
            else
                setData(res[0], chainIdRes.split("x")[1], _provider);
        }
        catch (err) {
            addError(err);
        }
    });
    const activateBraveWallet = React__default["default"].useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if (brave)
            activateWallet(brave);
    }), [brave]);
    const activateMetamaskWallet = React__default["default"].useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if (metamask)
            activateWallet(metamask);
    }), [metamask]);
    const activateCoinbaseWallet = React__default["default"].useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if (coinbase)
            activateWallet(coinbase);
        // @Cryptogate: Might remove this later (handles popup if no extension found)
        else if (walletsConfig === null || walletsConfig === void 0 ? void 0 : walletsConfig.coinbase) {
            const _coinbase = new CoinbaseWalletSDK__default["default"](walletsConfig.coinbase).makeWeb3Provider();
            activateWallet(_coinbase);
        }
    }), [coinbase, walletsConfig]);
    // @Cryptogate: REBUILD THIS METHOD
    const activateWalletConnect = () => {
        let connector = new WalletConnect__default["default"]({
            bridge: "https://bridge.walletconnect.org",
            qrcodeModal: QRCodeModal__default["default"],
        });
        if (connector) {
            if (!connector.connected) {
                connector.createSession();
            }
            connector.on("connect", (error, payload) => {
                if (error)
                    addError(error);
                const { accounts, chainId } = payload.params[0];
                setData(accounts[0], chainId, undefined);
            });
            connector.on("session_update", (error, payload) => {
                if (error)
                    addError(error);
                const { accounts, chainId } = payload.params[0];
                setData(accounts[0], chainId, undefined);
            });
            connector.on("disconnect", (error, payload) => {
                if (error)
                    addError(error);
                connector = undefined;
            });
        }
    };
    const deactivate = React__default["default"].useCallback(() => {
        setWalletData({ account: undefined });
        if (ethConfig) {
            setNetworkData({ chainId: ethConfig.defaultNetwork.chainId, chain: ethConfig.defaultNetwork });
            setProvider(new ethers__namespace.providers.JsonRpcProvider(ethConfig.readOnlyUrls[ethConfig.defaultNetwork.chainId]));
        }
    }, [ethConfig]);
    return {
        account,
        ethBalance,
        ens,
        provider,
        active: !!provider,
        network: networkData,
        activateBraveWallet,
        activateMetamaskWallet,
        activateCoinbaseWallet,
        activateWalletConnect,
        deactivate,
        errors,
    };
};

/**
 * @public
 * @param {GetContractCallParams} ContractCallObject
 * @return Call response and error
*/
const readContractCall = ({ abi, address, contract, method, args, enabled = true }) => {
    const config = useConfig();
    const { addError } = useErrorsBag();
    const { network, provider } = useEthereum();
    const [response, setResponse] = React__default["default"].useState(undefined);
    const [error, setError] = React__default["default"].useState(undefined);
    const callFunction = React__default["default"].useCallback((contract, args) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const res = args ? yield contract[method](...args) : yield contract[method]();
            setResponse(res.toString());
        }
        catch (err) {
            setError(err);
            addError(err);
        }
    }), [method]);
    React__default["default"].useEffect(() => {
        var _a;
        if (provider) {
            if (enabled) {
                let _abi = undefined;
                let _address = undefined;
                if (abi && address) {
                    _abi = abi;
                    _address = address;
                }
                else if (config) {
                    const contracts = (_a = config.ethConfig.contractList) === null || _a === void 0 ? void 0 : _a.filter((_contract) => _contract.name == contract);
                    if (contracts && contracts.length) {
                        _abi = contracts[0].abi;
                        _address = contracts[0].addresses[network.chainId];
                    }
                    else {
                        setError(`Contract ${contract} doesn't exist in your config`);
                        addError(`Contract ${contract} doesn't exist in your config`);
                    }
                }
                if (_abi && _address) {
                    try {
                        const contractObj = new ethers__namespace.Contract(_address, _abi, provider);
                        callFunction(contractObj, args);
                    }
                    catch (err) {
                        setError(err);
                        addError(err);
                    }
                }
                else {
                    setError(`You need to either provide a contract name from your contracts config or a contract address & abi`);
                    addError(`You need to either provide a contract name from your contracts config or a contract address & abi`);
                }
            }
        }
        else {
            setError("No provider available");
            addError("No provider available");
        }
    }, [provider, config, enabled, args]);
    return { response, error };
};
/**
 * @public
 * @param {GetContractCallParams[]} params
 * @return {any[]} Call response
*/
const readContractCalls = (params) => {
    const config = useConfig();
    const { addError } = useErrorsBag();
    const { network, provider } = useEthereum();
    const [response, setResponse] = React__default["default"].useState([]);
    const callFunction = (contract, name, args) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const res = args ? yield contract[name](...args) : yield contract[name]();
            return res;
        }
        catch (err) {
            addError(err);
        }
    });
    React__default["default"].useEffect(() => {
        if (provider) {
            let _abi = undefined;
            let _address = undefined;
            const res = params.map((param) => {
                var _a;
                if (param.abi && param.address) {
                    _abi = param.abi;
                    _address = param.address;
                }
                else if (config) {
                    const contracts = (_a = config.ethConfig.contractList) === null || _a === void 0 ? void 0 : _a.filter((_contract) => _contract.name == param.contract);
                    if (contracts && contracts.length) {
                        _abi = contracts[0].abi;
                        _address = contracts[0].addresses[network.chainId];
                    }
                    else
                        addError(`Contract ${param.contract} doesn't exist in your config`);
                }
                if (_abi && _address) {
                    try {
                        const contractObj = new ethers__namespace.Contract(_address, _abi, provider);
                        return callFunction(contractObj, param.method, param.args);
                    }
                    catch (err) {
                        addError(err);
                    }
                }
                else
                    addError(`You need to either provide a contract name from your contracts config or a contract address & abi`);
            });
            Promise.all(res).then((result) => setResponse(result));
        }
        else
            addError("No provider available");
    }, [provider, config]);
    return response;
};
/**
 * @public
 * @param {PostContractCallParams} ContractCallObject
 * @return send, loading, response & error
*/
const writeContractCall = ({ abi, address, contract, method }) => {
    const config = useConfig();
    const { addError } = useErrorsBag();
    const { network, provider } = useEthereum();
    const [contractObj, setContractObj] = React__default["default"].useState();
    const [loading, setLoading] = React__default["default"].useState(false);
    const [response, setResponse] = React__default["default"].useState(undefined);
    const [error, setError] = React__default["default"].useState(undefined);
    const send = React.useCallback((_contractObj, args) => __awaiter(void 0, void 0, void 0, function* () {
        if (_contractObj) {
            setLoading(true);
            try {
                const res = args ? yield _contractObj[method](...args) : yield _contractObj[method]();
                setResponse(res.toString());
                setLoading(false);
            }
            catch (err) {
                setError(err);
                addError(err);
                setLoading(false);
            }
        }
    }), [method]);
    React__default["default"].useEffect(() => {
        var _a;
        if (provider) {
            let _abi = undefined;
            let _address = undefined;
            if (abi && address) {
                _abi = abi;
                _address = address;
            }
            else if (config) {
                const contracts = (_a = config.ethConfig.contractList) === null || _a === void 0 ? void 0 : _a.filter((_contract) => _contract.name == contract);
                if (contracts && contracts.length) {
                    _abi = contracts[0].abi;
                    _address = contracts[0].addresses[network.chainId];
                }
                else {
                    setError(`Contract ${contract} doesn't exist in your config`);
                    addError(`Contract ${contract} doesn't exist in your config`);
                }
            }
            if (_abi && _address) {
                try {
                    const signer = provider.getSigner();
                    const _contractObj = new ethers__namespace.Contract(_address, _abi, signer);
                    setContractObj(_contractObj);
                }
                catch (err) {
                    setError(err);
                    addError(err);
                }
            }
            else {
                setError(`You need to either provide a contract name from your contracts config or a contract address & abi`);
                addError(`You need to either provide a contract name from your contracts config or a contract address & abi`);
            }
        }
        else {
            setError("No provider available");
            addError("No provider available");
        }
    }, [provider, config]);
    return {
        send: (args) => { send(contractObj, args); },
        loading,
        response,
        error
    };
};

exports.Avalanche = Avalanche;
exports.AvalancheTestnet = AvalancheTestnet;
exports.BSC = BSC;
exports.BSCTestnet = BSCTestnet;
exports.ConfigContext = ConfigContext;
exports.ConfigProvider = ConfigProvider;
exports.DEFAULT_SUPPORTED_CHAINS = DEFAULT_SUPPORTED_CHAINS;
exports.ErrorsBagContext = ErrorsBagContext;
exports.ErrorsBagProvider = ErrorsBagProvider;
exports.EvmNodeContext = EvmNodeContext;
exports.EvmNodeProvider = EvmNodeProvider;
exports.Goerli = Goerli;
exports.Mainnet = Mainnet;
exports.MultiChainProvider = MultiChainProvider;
exports.Mumbai = Mumbai;
exports.NetworkContext = NetworkContext;
exports.NetworkProvider = NetworkProvider;
exports.Polygon = Polygon;
exports.WalletContext = WalletContext;
exports.WalletProvider = WalletProvider;
exports.WindowContext = WindowContext;
exports.WindowProvider = WindowProvider;
exports.avalancheExplorerUrl = avalancheExplorerUrl;
exports.bscScanUrl = bscScanUrl;
exports.bscTestnetScanUrl = bscTestnetScanUrl;
exports.getAddressLink = getAddressLink;
exports.getChainById = getChainById;
exports.getTransactionLink = getTransactionLink;
exports.goerliEtherscanUrl = goerliEtherscanUrl;
exports.mainnetEtherscanUrl = mainnetEtherscanUrl;
exports.mumbaiPolygonScanUrl = mumbaiPolygonScanUrl;
exports.polygonScanUrl = polygonScanUrl;
exports.readContractCall = readContractCall;
exports.readContractCalls = readContractCalls;
exports.resolveENS = resolveENS;
exports.testAvalancheExplorerUrl = testAvalancheExplorerUrl;
exports.useAccount = useAccount;
exports.useConfig = useConfig;
exports.useErrorsBag = useErrorsBag;
exports.useEthereum = useEthereum;
exports.useEvmNode = useEvmNode;
exports.useNetwork = useNetwork;
exports.useWallet = useWallet;
exports.useWindow = useWindow;
exports.writeContractCall = writeContractCall;
//# sourceMappingURL=index.js.map
