import React, { useEffect, useCallback } from 'react';
import * as ethers from 'ethers';
import { providers } from 'ethers';
import { ConnectionProvider, WalletProvider as WalletProvider$1, useWallet as useWallet$1, useConnection } from '@solana/wallet-adapter-react';
import { SlopeWalletAdapter, SolflareWalletAdapter, SolletExtensionWalletAdapter } from '@solana/wallet-adapter-wallets';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import QRCodeModal from '@walletconnect/qrcode-modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { WalletReadyState } from '@solana/wallet-adapter-base';

const ConfigContext = React.createContext({ ethConfig: { defaultNetwork: undefined, readOnlyUrls: {} } });
function useConfig() {
    const context = React.useContext(ConfigContext);
    return context;
}

function ConfigProvider({ config, children }) {
    const [DAppConfig, setDAppConfig] = React.useState({});
    React.useEffect(() => {
        setDAppConfig(Object.assign({}, config));
    }, [config]);
    return React.createElement(ConfigContext.Provider, { value: DAppConfig, children: children });
}

const ErrorsBagContext = React.createContext({ errors: [], addError: (_) => { }, clearErrors: () => { } });
function useErrorsBag() {
    return React.useContext(ErrorsBagContext);
}

function ErrorsBagProvider({ children }) {
    const [errors, setErrors] = React.useState([]);
    const addError = (error) => {
        setErrors([...errors, error]);
    };
    const clearErrors = () => {
        setErrors([]);
    };
    return (React.createElement(ErrorsBagContext.Provider, { value: { errors: errors, addError: addError, clearErrors: clearErrors }, children: children }));
}

const EvmNodeContext = React.createContext({ provider: undefined, setProvider: () => { } });
function useEvmNode() {
    return React.useContext(EvmNodeContext);
}

// Chain Explorer URLs
// Etherscan
const mainnetEtherscanUrl = 'https://mainnet.etherscan.io';
const goerliEtherscanUrl = 'https://goerli.etherscan.io';
const sepoliaEtherscanUrl = 'https://sepolia.etherscan.io';
// BSC Scan
const bscScanUrl = 'https://testnet.bscscan.com';
const bscTestnetScanUrl = 'https://testnet.bscscan.com';
// Polygon Scan
const polygonScanUrl = 'https://polygonscan.com';
const mumbaiPolygonScanUrl = 'https://mumbai.polygonscan.com';
// Snow Trace (Avalanche)
const avalancheExplorerUrl = 'https://snowtrace.io';
const testAvalancheExplorerUrl = 'https://testnet.snowtrace.io';
// Sol Scan
const mainnetSolscanUrl = "https://solscan.io";
// Basescan
const goerliBasescanUrl = "https://goerli.basescan.org";
// Arbscan
const mainnetArbscanUrl = "https://arbscan.io";
// XDC Scanner
const xinfinExplorerUrl = "https://explorer.xinfin.nerwork";
const apothemExplorerUrl = "https://explorer.apothem.network";

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
 * @param {EvmAddress | SolAddress} address Contract or wallet address
 * @return {string} URL
 * @example
 *  const url = getAddressLink("https://etherscan.io", "0x00")
*/
const getAddressLink = (explorerUrl, address) => `${explorerUrl}/address/${address}`;
/**
 * @internal INTENDED FOR INTERNAL USE ONLY. USE AT YOUR OWN RISK
 * @param {string} explorerUrl Base URL of the chain explorer
 * @param {string} txnHash Transaction Hash
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
const Sepolia = {
    chainId: 11155111,
    chainName: 'Sepolia',
    isTestChain: true,
    isLocalChain: false,
    blockExplorerUrl: sepoliaEtherscanUrl,
    getExplorerAddressLink: (address) => getAddressLink(sepoliaEtherscanUrl, address),
    getExplorerTransactionLink: (txnId) => getTransactionLink(sepoliaEtherscanUrl, txnId)
};

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
const BSC = {
    chainId: 56,
    chainName: 'BSC',
    isTestChain: false,
    isLocalChain: false,
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
    blockExplorerUrl: testAvalancheExplorerUrl,
    getExplorerAddressLink: (address) => getAddressLink(testAvalancheExplorerUrl, address),
    getExplorerTransactionLink: (txnId) => getTransactionLink(testAvalancheExplorerUrl, txnId)
};

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
const SolanaMainnet = {
    chainName: 'SolanaMainnet',
    isTestChain: false,
    isLocalChain: false,
    blockExplorerUrl: mainnetSolscanUrl,
    getExplorerAddressLink: (address) => getAddressLink(mainnetSolscanUrl, address),
    getExplorerTransactionLink: (txnId) => getTransactionLink(mainnetSolscanUrl, txnId)
};
/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
const SolanaTestnet = {
    chainName: 'SolanaTestnet',
    isTestChain: true,
    isLocalChain: false,
    blockExplorerUrl: mainnetSolscanUrl,
    getExplorerAddressLink: (address) => getAddressLink(mainnetSolscanUrl, address) + "?cluster=testnet",
    getExplorerTransactionLink: (txnId) => getTransactionLink(mainnetSolscanUrl, txnId) + "?cluster=testnet"
};
/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
const SolanaDevnet = {
    chainName: 'SolanaDevnet',
    isTestChain: true,
    isLocalChain: false,
    blockExplorerUrl: mainnetSolscanUrl,
    getExplorerAddressLink: (address) => getAddressLink(mainnetSolscanUrl, address) + "?cluster=devnet",
    getExplorerTransactionLink: (txnId) => getTransactionLink(mainnetSolscanUrl, txnId) + "?cluster=devnet"
};

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
const BaseGoerli = {
    chainId: 84531,
    chainName: 'BaseGoerli',
    isTestChain: true,
    isLocalChain: false,
    blockExplorerUrl: goerliBasescanUrl,
    getExplorerAddressLink: (address) => getAddressLink(goerliBasescanUrl, address),
    getExplorerTransactionLink: (txnId) => getTransactionLink(goerliBasescanUrl, txnId)
};

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
const Arbitrum = {
    chainId: 42161,
    chainName: 'Arbitrum',
    isTestChain: false,
    isLocalChain: false,
    blockExplorerUrl: mainnetArbscanUrl,
    getExplorerAddressLink: (address) => getAddressLink(mainnetArbscanUrl, address),
    getExplorerTransactionLink: (txnId) => getTransactionLink(mainnetArbscanUrl, txnId)
};

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
const XinFin = {
    chainId: 50,
    chainName: 'XinFin',
    isTestChain: false,
    isLocalChain: false,
    blockExplorerUrl: xinfinExplorerUrl,
    getExplorerAddressLink: (address) => getAddressLink(xinfinExplorerUrl, address),
    getExplorerTransactionLink: (txnId) => getTransactionLink(xinfinExplorerUrl, txnId)
};
/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
const Apothem = {
    chainId: 51,
    chainName: 'Apothem',
    isTestChain: true,
    isLocalChain: false,
    blockExplorerUrl: apothemExplorerUrl,
    getExplorerAddressLink: (address) => getAddressLink(apothemExplorerUrl, address),
    getExplorerTransactionLink: (txnId) => getTransactionLink(apothemExplorerUrl, txnId)
};

/**
 * @array
 * @description The Default Chains Supported By Cryptogate
*/
const DEFAULT_SUPPORTED_CHAINS = [
    Sepolia, Goerli, Mainnet,
    BSC, BSCTestnet,
    Polygon, Mumbai,
    Avalanche, AvalancheTestnet,
    SolanaMainnet,
    BaseGoerli,
    Arbitrum,
    XinFin, Apothem
];
/**
 * @enum
 * @description ChainIds Of The Default Chains Supported By Cryptogate
*/
var ChainId;
(function (ChainId) {
    ChainId[ChainId["Mainnet"] = 1] = "Mainnet";
    ChainId[ChainId["Goerli"] = 5] = "Goerli";
    ChainId[ChainId["Sepolia"] = 11155111] = "Sepolia";
    ChainId[ChainId["BSC"] = 56] = "BSC";
    ChainId[ChainId["BSCTestnet"] = 97] = "BSCTestnet";
    ChainId[ChainId["Polygon"] = 137] = "Polygon";
    ChainId[ChainId["Mumbai"] = 80001] = "Mumbai";
    ChainId[ChainId["Avalanche"] = 43114] = "Avalanche";
    ChainId[ChainId["AvalancheTestnet"] = 43113] = "AvalancheTestnet";
    ChainId[ChainId["BaseGoerli"] = 84531] = "BaseGoerli";
    ChainId[ChainId["Arbitrum"] = 42161] = "Arbitrum";
    ChainId[ChainId["XinFin"] = 50] = "XinFin";
    ChainId[ChainId["Apothem"] = 51] = "Apothem";
})(ChainId || (ChainId = {}));

const NetworkContext = React.createContext({
    networkData: { chainId: ChainId.Mainnet, chain: getChainById(ChainId.Mainnet) },
    setNetworkData: () => { }
});
function useNetwork() {
    const context = React.useContext(NetworkContext);
    return context;
}

function NetworkProvider({ children, config }) {
    const [networkData, setNetworkData] = React.useState({});
    useEffect(() => {
        var _a, _b, _c;
        setNetworkData({
            chainId: (_b = (_a = config.ethConfig) === null || _a === void 0 ? void 0 : _a.defaultNetwork) === null || _b === void 0 ? void 0 : _b.chainId,
            chain: (_c = config.ethConfig) === null || _c === void 0 ? void 0 : _c.defaultNetwork,
        });
    }, [config]);
    return (React.createElement(NetworkContext.Provider, { value: {
            networkData,
            setNetworkData,
        }, children: children }));
}

function EvmNodeProvider({ children, readOnlyUrls }) {
    const [provider, setProvider] = React.useState();
    const { networkData } = useNetwork();
    React.useEffect(() => {
        if (!provider && readOnlyUrls && (networkData === null || networkData === void 0 ? void 0 : networkData.chainId) && readOnlyUrls[networkData.chainId]) {
            let _provider = new providers.JsonRpcProvider(readOnlyUrls[networkData.chainId]);
            setProvider(_provider);
        }
    }, [networkData, readOnlyUrls]);
    return React.createElement(EvmNodeContext.Provider, { value: { provider, setProvider }, children: children });
}

const WindowContext = React.createContext(true);
function useWindow() {
    return React.useContext(WindowContext);
}

function WindowProvider({ children }) {
    const [isActiveWindow, setActiveWindow] = React.useState(true);
    React.useEffect(() => {
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
    return React.createElement(WindowContext.Provider, { value: isActiveWindow, children: children });
}

const WalletContext = React.createContext({ walletData: { account: undefined }, setWalletData: () => { } });
function useWallet() {
    const context = React.useContext(WalletContext);
    return context;
}

function WalletProvider({ children }) {
    const [walletData, setWalletData] = React.useState({
        account: undefined,
    });
    return (React.createElement(WalletContext.Provider, { value: {
            walletData,
            setWalletData,
        }, children: children }));
}

function SolanaProvider({ children, solConfig }) {
    const wallets = solConfig
        ? [
            new SlopeWalletAdapter(),
            new SolflareWalletAdapter({ network: solConfig.network }),
            new SolletExtensionWalletAdapter({ network: solConfig.network }),
        ]
        : [];
    if (!solConfig)
        return React.createElement(React.Fragment, null, children);
    return (React.createElement(ConnectionProvider, { endpoint: solConfig.endpoint },
        React.createElement(WalletProvider$1, { wallets: wallets, autoConnect: solConfig.autoConnect }, children)));
}

const defaultEthConfig = {
    defaultNetwork: Mainnet
};

const MultiChainProvider = ({ config, children, }) => {
    var _a;
    if (!config) {
        console.error("@Cryptogate: Missing config param in MultiChainProvider");
        return React.createElement(React.Fragment, null, children);
    }
    if (!config.ethConfig)
        console.warn("@Cryptogate: Missing ethConfig in config. ethConfig is required for EVM providers and hooks");
    if (!config.solConfig)
        console.warn("@Cryptogate: Missing solConfig in config. solConfig is required for Solana providers and hooks");
    useEffect(() => {
        if (config.ethConfig)
            config.ethConfig = Object.assign(Object.assign({}, defaultEthConfig), config.ethConfig);
    }, [config]);
    return (React.createElement(WindowProvider, null,
        React.createElement(ConfigProvider, { config: config },
            React.createElement(ErrorsBagProvider, null,
                React.createElement(NetworkProvider, { config: config },
                    React.createElement(EvmNodeProvider, { readOnlyUrls: (_a = config.ethConfig) === null || _a === void 0 ? void 0 : _a.readOnlyUrls },
                        React.createElement(SolanaProvider, { solConfig: config.solConfig },
                            React.createElement(WalletProvider, null, children))))))));
};

var SolWallets;
(function (SolWallets) {
    SolWallets["ALL"] = "all";
    SolWallets["PHANTOM"] = "phantom";
    SolWallets["SLOPE"] = "slope";
    SolWallets["SOLFLARE"] = "solflare";
    SolWallets["SOLLETEXTENSION"] = "solletExtension";
})(SolWallets || (SolWallets = {}));

var EvmWallets;
(function (EvmWallets) {
    EvmWallets["ALL"] = "all";
    EvmWallets["SHABAKAT"] = "shabakat";
    EvmWallets["METAMASK"] = "metamask";
    EvmWallets["WALLETCONNECT"] = "walletconnect";
    EvmWallets["COINBASE"] = "coinbase";
    EvmWallets["BRAVEWALLET"] = "braveWallet";
})(EvmWallets || (EvmWallets = {}));

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
    const [metamask, setMetamask] = React.useState();
    const [brave, setBrave] = React.useState();
    const [coinbase, setCoinbase] = React.useState();
    const [shabakat, setShabakat] = React.useState();
    const [browserProviders, setBrowserProviders] = React.useState();
    React.useEffect(() => {
        var _a;
        setBrowserProviders(window.ethereum);
        if (typeof browserProviders !== "undefined") {
            if (((_a = browserProviders.providers) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                browserProviders.providers.forEach((p) => __awaiter(void 0, void 0, void 0, function* () {
                    if (p.isShabakat) {
                        setShabakat(p);
                    }
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
                if (browserProviders.isShabakat)
                    setShabakat(browserProviders);
                if (browserProviders.isMetaMask)
                    setMetamask(browserProviders);
                if (browserProviders.isBraveWallet)
                    setBrave(browserProviders);
                if (browserProviders.isCoinbase)
                    setCoinbase(browserProviders);
            }
        }
    }, [browserProviders]);
    return { shabakat, metamask, brave, coinbase };
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
    const [ethBalance, setEhBalance] = React.useState();
    const [ens, setEns] = React.useState();
    React.useEffect(() => {
        if (provider && address) {
            provider.getBalance(address).then((balanceBigNbWei) => {
                setEhBalance(ethers.utils.formatEther(balanceBigNbWei.toString()));
            });
            provider.lookupAddress(address).then((res) => res ? setEns(res) : setEns(undefined)).catch(() => { });
        }
        else {
            setEhBalance(undefined);
            setEns(undefined);
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
    const [address, setAddress] = React.useState();
    React.useEffect(() => {
        if (provider && ens)
            provider.resolveName(ens).then((res) => {
                res ? setAddress(res) : setAddress(undefined);
            });
        else
            setAddress(undefined);
    }, [provider]);
    return address;
};

/**
 * @public
*/
const useEthereum = () => {
    const { walletData: { account }, setWalletData } = useWallet();
    const { brave, metamask, coinbase, shabakat } = useBrowserWallets();
    const { networkData, setNetworkData } = useNetwork();
    const { ethConfig, walletsConfig } = useConfig();
    const { ens, ethBalance } = useAccount(account);
    const { provider, setProvider } = useEvmNode();
    const { errors, addError } = useErrorsBag();
    useEffect(() => {
        let _provider = provider;
        let proxyProvider = _provider === null || _provider === void 0 ? void 0 : _provider.provider;
        if (proxyProvider) {
            proxyProvider.on("accountsChanged", (accounts) => {
                accounts[0] ? setWalletData({ account: accounts[0] }) : deactivate();
            });
            proxyProvider.on("chainChanged", (chainId) => {
                var _a;
                const _chainId = (_a = chainId.toString().split("x")[1]) !== null && _a !== void 0 ? _a : chainId;
                setNetworkData({
                    chainId: _chainId,
                    chain: getChainById(_chainId)
                });
            });
            proxyProvider.on("disconnect", (_) => deactivate);
        }
    }, [provider]);
    const setData = (_account, _chainId, _provider) => {
        setWalletData({ account: _account });
        setNetworkData({ chainId: _chainId, chain: getChainById(_chainId) });
        _provider && setProvider(new ethers.providers.Web3Provider(_provider));
    };
    const activateWallet = (_provider) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const res = yield _provider.send("eth_requestAccounts", []);
            const chainIdRes = yield _provider.send("eth_chainId", []);
            if (res.result)
                setData(res.result[0], parseInt(chainIdRes.result), _provider);
            else
                setData(res[0], parseInt(chainIdRes.result), _provider);
        }
        catch (err) {
            addError(err);
        }
    });
    const activateShabakatWallet = React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if (shabakat)
            activateWallet(shabakat);
    }), [shabakat]);
    const activateBraveWallet = React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if (brave)
            activateWallet(brave);
    }), [brave]);
    const activateMetamaskWallet = React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if (metamask)
            activateWallet(metamask);
    }), [metamask]);
    const activateCoinbaseWallet = React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if (coinbase)
            activateWallet(coinbase);
        // @Cryptogate: Might remove this later (handles popup if no extension found)
        // appLogo is optional
        else if (walletsConfig) {
            const _coinbase = new CoinbaseWalletSDK(Object.assign({}, walletsConfig)).makeWeb3Provider();
            activateWallet(_coinbase);
        }
    }), [coinbase, walletsConfig]);
    const activateWalletConnect = () => __awaiter(void 0, void 0, void 0, function* () {
        const provider = new WalletConnectProvider({
            infuraId: "98d5cf1c763f4224afa492b70366effa",
            bridge: "https://bridge.walletconnect.org",
            qrcodeModal: QRCodeModal,
        });
        if (!provider.connected) {
            yield provider.enable();
        }
        setData(provider.accounts[0], provider.chainId, provider);
    });
    const deactivate = React.useCallback(() => {
        var _a, _b;
        setWalletData({ account: undefined });
        if (ethConfig) {
            setNetworkData({ chainId: (_a = ethConfig.defaultNetwork.chainId) !== null && _a !== void 0 ? _a : -1, chain: ethConfig.defaultNetwork });
            setProvider(new ethers.providers.JsonRpcProvider(ethConfig.readOnlyUrls[(_b = ethConfig.defaultNetwork.chainId) !== null && _b !== void 0 ? _b : -1]));
        }
        else {
            addError("EthConfig not found");
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
        activateShabakatWallet,
        deactivate,
        errors,
    };
};

const useSolana = () => {
    const wallet = useWallet$1();
    const { connection } = useConnection();
    const { solConfig } = useConfig();
    const { addError } = useErrorsBag();
    const [solBalance, setSolBalance] = React.useState(0);
    const getUserSOLBalance = (_lamportsPerSol) => __awaiter(void 0, void 0, void 0, function* () {
        let balance = 0;
        if (wallet.publicKey) {
            try {
                balance =
                    (yield connection.getBalance(wallet.publicKey, "confirmed")) /
                        _lamportsPerSol;
                setSolBalance(balance);
            }
            catch (e) {
                addError(e);
            }
        }
        else {
            addError("Connected your wallet");
        }
    });
    React.useEffect(() => {
        if (solConfig &&
            !wallet.connected &&
            wallet.wallet &&
            wallet.wallet.readyState === WalletReadyState.Installed)
            wallet.connect().catch(() => { });
    }, [solConfig, wallet.wallet, wallet.connected]);
    React.useEffect(() => {
        if (solConfig && wallet.publicKey && wallet.connected && connection)
            getUserSOLBalance(solConfig.lamportsPerSol);
    }, [solConfig, wallet.publicKey, wallet.connected, connection]);
    return {
        publicKey: solConfig ? wallet.publicKey : "",
        connected: solConfig ? wallet.connected : false,
        wallet,
        solBalance,
        connection
    };
};

const useMultichain = () => {
    const ethereum = useEthereum();
    const solana = useSolana();
    return Object.assign(Object.assign({}, ethereum), solana);
};

/**
 * @public
 * @return Gas Price
 * @example
 *  const {gasPrice} = useNetworkInfo()
*/
const useNetworkInfo = () => {
    const { provider } = useEvmNode();
    const [gasPrice, setGasPrice] = React.useState();
    React.useEffect(() => {
        if (provider) {
            provider.getGasPrice().then((_gasPrice) => {
                if (_gasPrice)
                    setGasPrice(_gasPrice);
            });
        }
    }, [provider]);
    return {
        gasPrice
    };
};

/**
 * @public
 * @param {GetContractCallParams} ContractCallObject
 * @return Call response and error
*/
const readContractCall = ({ abi, address, contract, method, args, enabled = true }) => {
    const config = useConfig();
    const { addError, clearErrors } = useErrorsBag();
    const { network, provider } = useEthereum();
    const [response, setResponse] = React.useState(undefined);
    const [error, setError] = React.useState(undefined);
    const callFunction = React.useCallback((contract, args) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            clearErrors();
            setError(undefined);
            const res = args ? yield contract[method](...args) : yield contract[method]();
            setResponse(undefined);
            //! DON'T TO STRING
            setResponse(res.toString());
        }
        catch (err) {
            console.log("************************ ", err);
            setError(err);
            addError(err);
        }
    }), [method]);
    React.useEffect(() => {
        var _a;
        if (provider) {
            clearErrors();
            setError(undefined);
            if (enabled) {
                let _abi = undefined;
                let _address = undefined;
                if (abi && address) {
                    _abi = abi;
                    _address = address;
                }
                else if ((config === null || config === void 0 ? void 0 : config.ethConfig) && (network === null || network === void 0 ? void 0 : network.chainId)) {
                    clearErrors();
                    setError(undefined);
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
                    clearErrors();
                    setError(undefined);
                    try {
                        clearErrors();
                        setError(undefined);
                        const contractObj = new ethers.Contract(_address, _abi, provider);
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
    }, [network, provider, config, abi, address, contract, method, args, enabled]);
    return { response, error };
};
/**
 * @public
 * @param {GetContractCallParams[]} params
 * @return {any[]} Call response
*/
const readContractCalls = (params) => {
    const config = useConfig();
    const { addError, clearErrors } = useErrorsBag();
    const { network, provider } = useEthereum();
    const [response, setResponse] = React.useState([]);
    const callFunction = (contract, name, args) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const res = args ? yield contract[name](...args) : yield contract[name]();
            return res;
        }
        catch (err) {
            addError(err);
        }
    });
    React.useEffect(() => {
        if (provider) {
            clearErrors();
            let _abi = undefined;
            let _address = undefined;
            const res = params.map((param) => {
                var _a;
                if (param.abi && param.address) {
                    _abi = param.abi;
                    _address = param.address;
                }
                else if ((config === null || config === void 0 ? void 0 : config.ethConfig) && (network === null || network === void 0 ? void 0 : network.chainId)) {
                    const contracts = (_a = config.ethConfig.contractList) === null || _a === void 0 ? void 0 : _a.filter((_contract) => _contract.name == param.contract);
                    if (contracts && contracts.length) {
                        clearErrors();
                        _abi = contracts[0].abi;
                        _address = contracts[0].addresses[network.chainId];
                    }
                    else
                        addError(`Contract ${param.contract} doesn't exist in your config`);
                }
                if (_abi && _address) {
                    clearErrors();
                    try {
                        clearErrors();
                        const contractObj = new ethers.Contract(_address, _abi, provider);
                        return callFunction(contractObj, param.method, param.args);
                    }
                    catch (err) {
                        addError(err);
                        return [];
                    }
                }
                else {
                    addError(`You need to either provide a contract name from your contracts config or a contract address & abi`);
                    return [];
                }
            });
            Promise.all(res).then((result) => setResponse(result));
        }
        else
            addError("No provider available");
    }, [provider, config, params]);
    return response;
};
/**
 * @public
 * @param {PostContractCallParams} ContractCallObject
 * @return send, loading, response & error
*/
const writeContractCall = ({ abi, address, contract, method }) => {
    const config = useConfig();
    const { addError, clearErrors } = useErrorsBag();
    const { network, provider } = useEthereum();
    const [contractObj, setContractObj] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [response, setResponse] = React.useState(undefined);
    const [error, setError] = React.useState(undefined);
    const send = useCallback((_contractObj, args, options) => __awaiter(void 0, void 0, void 0, function* () {
        if (_contractObj) {
            setLoading(true);
            try {
                const res = args ? (options ? yield _contractObj[method](...args, options) : yield _contractObj[method](...args)) : (options ? yield _contractObj[method](options) : yield _contractObj[method]());
                setResponse(res);
                setError(undefined);
                setLoading(false);
            }
            catch (err) {
                setError(err);
                addError(err);
                setLoading(false);
            }
        }
    }), [method]);
    React.useEffect(() => {
        var _a;
        if (provider) {
            clearErrors();
            setError(undefined);
            let _abi = undefined;
            let _address = undefined;
            if (abi && address) {
                _abi = abi;
                _address = address;
            }
            else if ((config === null || config === void 0 ? void 0 : config.ethConfig) && (network === null || network === void 0 ? void 0 : network.chainId)) {
                const contracts = (_a = config.ethConfig.contractList) === null || _a === void 0 ? void 0 : _a.filter((_contract) => _contract.name == contract);
                if (contracts && contracts.length) {
                    clearErrors();
                    setError(undefined);
                    _abi = contracts[0].abi;
                    _address = contracts[0].addresses[network.chainId];
                }
                else {
                    setError(`Contract ${contract} doesn't exist in your config`);
                    addError(`Contract ${contract} doesn't exist in your config`);
                }
            }
            if (_abi && _address) {
                clearErrors();
                setError(undefined);
                try {
                    clearErrors();
                    setError(undefined);
                    const signer = provider.getSigner();
                    const _contractObj = new ethers.Contract(_address, _abi, signer);
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
        send: (args, options) => { send(contractObj, args, options); },
        loading,
        response,
        error
    };
};
/**
 * @public
 * @param {PostContractCallParams} ContractCallObject
 * @return send, loading, response & error
*/
const useContract = () => {
    const { provider } = useEthereum();
    const deployContract = ({ abi, byteCode, args }) => __awaiter(void 0, void 0, void 0, function* () {
        const signer = provider === null || provider === void 0 ? void 0 : provider.getSigner();
        const factory = new ethers.ContractFactory(abi, byteCode, signer);
        const contract = args ? yield factory.deploy(...args) : yield factory.deploy();
        return contract;
    });
    return { deployContract };
};

export { Apothem, Arbitrum, Avalanche, AvalancheTestnet, BSC, BSCTestnet, BaseGoerli, ChainId, ConfigContext, ConfigProvider, DEFAULT_SUPPORTED_CHAINS, EvmNodeContext, EvmNodeProvider, EvmWallets, Goerli, Mainnet, MultiChainProvider, Mumbai, NetworkContext, NetworkProvider, Polygon, Sepolia, SolWallets, SolanaDevnet, SolanaMainnet, SolanaProvider, SolanaTestnet, WalletContext, WalletProvider, WindowContext, WindowProvider, XinFin, apothemExplorerUrl, avalancheExplorerUrl, bscScanUrl, bscTestnetScanUrl, getAddressLink, getChainById, getTransactionLink, goerliBasescanUrl, goerliEtherscanUrl, mainnetArbscanUrl, mainnetEtherscanUrl, mainnetSolscanUrl, mumbaiPolygonScanUrl, polygonScanUrl, readContractCall, readContractCalls, resolveENS, sepoliaEtherscanUrl, testAvalancheExplorerUrl, useAccount, useConfig, useContract, useEthereum, useEvmNode, useMultichain, useNetwork, useNetworkInfo, useSolana, useWallet, useWindow, writeContractCall, xinfinExplorerUrl };
//# sourceMappingURL=index.js.map
