import React, { ReactNode } from 'react';
import * as ethers from 'ethers';
import { providers } from 'ethers';

declare type EvmAddress = string;

/**
 * @public
 * @typedef {object} Chain
*/
declare type Chain = {
    chainId: number;
    chainName: string;
    isTestChain: boolean;
    isLocalChain: boolean;
    blockExplorerUrl?: string;
    nativeCurrency?: {
        name: string;
        symbol: string;
        decimals: number;
    };
    getExplorerAddressLink: (address: EvmAddress) => string;
    getExplorerTransactionLink: (txnId: string) => string;
};

declare type NodeUrls = {
    [chainId: number]: string;
};
declare type ContractIO = {
    internalType: string;
    name: string;
    type: string;
};
declare type ContractABIUnit = {
    inputs: ContractIO[];
    name: string;
    outputs: ContractIO[];
    stateMutability: string;
    type: string;
};
declare type EthContract = {
    name: string;
    abi: ContractABIUnit[];
    addresses: {
        [chainId: number]: EvmAddress;
    };
};
declare type EthConfig = {
    defaultNetwork: Chain;
    allowedNetworks?: (Chain | undefined)[];
    readOnlyUrls: NodeUrls;
    contractList?: EthContract[];
};

declare type CoinbaseConfig = {
    appName: string;
    appLogoUrl: string;
    darkMode: boolean;
};
declare type WalletsConfig = {
    coinbase?: CoinbaseConfig;
};

declare type MultiChainProviderConfigProps = {
    ethConfig: EthConfig;
    walletsConfig?: WalletsConfig;
};
interface MultiChainProviderProps {
    children: React.ReactNode;
    config: MultiChainProviderConfigProps;
}
declare const MultiChainProvider: ({ config, children, }: MultiChainProviderProps) => JSX.Element;

declare const ConfigContext: React.Context<MultiChainProviderConfigProps>;
declare function useConfig(): MultiChainProviderConfigProps;

interface Props$5 {
    children: React.ReactNode;
    config: MultiChainProviderConfigProps;
}
declare function ConfigProvider({ config, children }: Props$5): JSX.Element;

declare type EvmNodeContextType = {
    provider: providers.JsonRpcProvider | providers.Web3Provider | undefined;
    setProvider: React.Dispatch<React.SetStateAction<providers.JsonRpcProvider | providers.Web3Provider | undefined>>;
};
declare const EvmNodeContext: React.Context<EvmNodeContextType>;
declare function useEvmNode(): EvmNodeContextType;

interface Props$4 {
    children: React.ReactNode;
    readOnlyUrls: NodeUrls;
}
declare function EvmNodeProvider({ children, readOnlyUrls }: Props$4): JSX.Element;

declare const WindowContext: React.Context<boolean>;
declare function useWindow(): boolean;

interface Props$3 {
    children: ReactNode;
}
declare function WindowProvider({ children }: Props$3): JSX.Element;

declare const ErrorsBagContext: React.Context<{
    errors: string[];
    addError: (error: any) => void;
    clearErrors: () => void;
}>;
declare function useErrorsBag(): {
    errors: string[];
    addError: (error: any) => void;
    clearErrors: () => void;
};

interface Props$2 {
    children: React.ReactNode;
}
declare function ErrorsBagProvider({ children }: Props$2): JSX.Element;

interface Props$1 {
    children: React.ReactNode;
}
declare type WalletDataType = {
    account: EvmAddress | undefined;
};
declare function WalletProvider({ children }: Props$1): JSX.Element;

declare type WalletContextType = {
    walletData: WalletDataType;
    setWalletData: React.Dispatch<React.SetStateAction<WalletDataType>>;
};
declare const WalletContext: React.Context<WalletContextType>;
declare function useWallet(): WalletContextType;

declare const mainnetEtherscanUrl = "https://mainnet.etherscan.io";
declare const goerliEtherscanUrl = "https://goerli.etherscan.io";
declare const bscScanUrl = "https://testnet.bscscan.com";
declare const bscTestnetScanUrl = "https://testnet.bscscan.com";
declare const polygonScanUrl = "https://polygonscan.com";
declare const mumbaiPolygonScanUrl = "https://mumbai.polygonscan.com";
declare const avalancheExplorerUrl = "https://snowtrace.io";
declare const testAvalancheExplorerUrl = "https://testnet.snowtrace.io";

/**
 * @array
 * @description The Default Chains Supported By Cryptogate
*/
declare const DEFAULT_SUPPORTED_CHAINS: Chain[];
/**
 * @enum
 * @description ChainIds Of The Default Chains Supported By Cryptogate
*/
declare enum ChainId {
    Mainnet = 1,
    Goerli = 5,
    BSC = 56,
    BSCTestnet = 97,
    Polygon = 137,
    Mumbai = 80001,
    Avalanche = 43114,
    AvalancheTestnet = 43113
}

interface Props {
    children: React.ReactNode;
    config: MultiChainProviderConfigProps;
}
declare type NetworkDataType = {
    chainId: ChainId;
    chain: Chain | undefined;
};
declare function NetworkProvider({ children, config }: Props): JSX.Element;

declare type NetworkContextType = {
    networkData: NetworkDataType;
    setNetworkData: React.Dispatch<React.SetStateAction<NetworkDataType>>;
};
declare const NetworkContext: React.Context<NetworkContextType>;
declare function useNetwork(): NetworkContextType;

/**
 * @public
 * @param {ChainId} chainId The Id of the requested chain
 * @return {Chain | undefined} Chain object of the requested chain or undefined
 * @example
 *  const mainnetChain = getChainById(ChainId.Mainnet)
*/
declare const getChainById: (chainId: ChainId) => Chain | undefined;

/**
 * @internal INTENDED FOR INTERNAL USE ONLY. USE AT YOUR OWN RISK
 * @param {string} explorerUrl Base URL of the chain explorer
 * @param {EvmAddress} address Contract or wallet address
 * @return {string} URL
 * @example
 *  const url = getAddressLink("https://etherscan.io", "0x00")
*/
declare const getAddressLink: (explorerUrl: string, address: EvmAddress) => string;
/**
 * @internal INTENDED FOR INTERNAL USE ONLY. USE AT YOUR OWN RISK
 * @param {string} explorerUrl Base URL of the chain explorer
 * @param {EvmAddress} txnHash Transaction Hash
 * @return {string} URL
 * @example
 *  const url = getTransactionLink("https://etherscan.io", "0x24..01f")
*/
declare const getTransactionLink: (explorerUrl: string, txnHash: string) => string;

declare const Mainnet: Chain;
declare const Goerli: Chain;

declare const BSC: Chain;
declare const BSCTestnet: Chain;

declare const Polygon: Chain;
declare const Mumbai: Chain;

declare const Avalanche: Chain;
declare const AvalancheTestnet: Chain;

/**
 * @public
*/
declare const useEthereum: () => {
    account: string | undefined;
    ethBalance: string | undefined;
    ens: string | undefined;
    provider: ethers.ethers.providers.JsonRpcProvider | ethers.ethers.providers.Web3Provider | undefined;
    active: boolean;
    network: NetworkDataType;
    activateBraveWallet: () => Promise<void>;
    activateMetamaskWallet: () => Promise<void>;
    activateCoinbaseWallet: () => Promise<void>;
    activateWalletConnect: () => void;
    deactivate: () => void;
    errors: string[];
};

/**
 * @public
 * @return Gas Price
 * @example
 *  const {gasPrice} = useNetworkInfo()
*/
declare const useNetworkInfo: () => {
    gasPrice: ethers.BigNumber | undefined;
};

/**
 * @public
 * @param {EvmAddress | undefined} address Base URL of the chain explorer
 * @return Eth balance and ENS of the provided address
 * @example
 *  const {ethbalance, ens} = useAccount("0x00")
*/
declare const useAccount: (address: EvmAddress | undefined) => {
    ethBalance: string | undefined;
    ens: string | undefined;
};
/**
 * @public
 * @param {string} ens ENS Name
 * @return {EvmAddress | undefined} Wallet or contract address resolved from the provided ENS
 * @example
 *  const address = resolveENS("ens.eth")
*/
declare const resolveENS: (ens: string) => EvmAddress | undefined;

interface GetContractCallParams {
    abi?: ContractABIUnit[] | ethers.ContractInterface;
    address?: EvmAddress;
    contract?: string;
    method: string;
    args?: any[];
    enabled?: boolean;
}
/**
 * @public
 * @param {GetContractCallParams} ContractCallObject
 * @return Call response and error
*/
declare const readContractCall: ({ abi, address, contract, method, args, enabled }: GetContractCallParams) => {
    response: any;
    error: any;
};
/**
 * @public
 * @param {GetContractCallParams[]} params
 * @return {any[]} Call response
*/
declare const readContractCalls: (params: GetContractCallParams[]) => any[];
interface PostContractCallParams {
    abi?: ContractABIUnit[] | ethers.ContractInterface;
    address?: EvmAddress;
    contract?: string;
    method: string;
}
declare type optionsType = {
    gasLimit: Number;
    gasPrice: string;
    nounce: Number;
    value: string;
    chainId: Number;
};
/**
 * @public
 * @param {PostContractCallParams} ContractCallObject
 * @return send, loading, response & error
*/
declare const writeContractCall: ({ abi, address, contract, method }: PostContractCallParams) => {
    send: (args?: any[], options?: optionsType) => void;
    loading: boolean;
    response: any;
    error: any;
};

export { Avalanche, AvalancheTestnet, BSC, BSCTestnet, Chain, ChainId, CoinbaseConfig, ConfigContext, ConfigProvider, ContractABIUnit, ContractIO, DEFAULT_SUPPORTED_CHAINS, ErrorsBagContext, ErrorsBagProvider, EthConfig, EthContract, EvmAddress, EvmNodeContext, EvmNodeProvider, Goerli, Mainnet, MultiChainProvider, MultiChainProviderConfigProps, MultiChainProviderProps, Mumbai, NetworkContext, NetworkProvider, NodeUrls, Polygon, WalletContext, WalletProvider, WalletsConfig, WindowContext, WindowProvider, avalancheExplorerUrl, bscScanUrl, bscTestnetScanUrl, getAddressLink, getChainById, getTransactionLink, goerliEtherscanUrl, mainnetEtherscanUrl, mumbaiPolygonScanUrl, polygonScanUrl, readContractCall, readContractCalls, resolveENS, testAvalancheExplorerUrl, useAccount, useConfig, useErrorsBag, useEthereum, useEvmNode, useNetwork, useNetworkInfo, useWallet, useWindow, writeContractCall };
