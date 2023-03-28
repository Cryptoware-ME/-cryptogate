/// <reference types="@solana/web3.js" />
import React, { ReactNode } from 'react';
import * as _solana_wallet_adapter_base from '@solana/wallet-adapter-base';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import * as ethers from 'ethers';
import { providers } from 'ethers';
import * as _solana_web3_js from '@solana/web3.js';
import * as _solana_wallet_adapter_react from '@solana/wallet-adapter-react';
import * as _ethersproject_providers from '@ethersproject/providers';

declare type EvmAddress = `0x${string}`;
declare type SolAddress = string;

/**
 * @public
 * @typedef {object} Chain
*/
declare type Chain = {
    chainId?: number;
    chainName: string;
    isTestChain: boolean;
    isLocalChain: boolean;
    blockExplorerUrl?: string;
    getExplorerAddressLink: (address: EvmAddress) => string;
    getExplorerTransactionLink: (txnId: string) => string;
};

declare enum SolWallets {
    ALL = "all",
    PHANTOM = "phantom",
    SLOPE = "slope",
    SOLFLARE = "solflare",
    SOLLETEXTENSION = "solletExtension"
}

declare enum EvmWallets {
    ALL = "all",
    METAMASK = "metamask",
    WALLETCONNECT = "walletconnect",
    COINBASE = "coinbase",
    BRAVEWALLET = "braveWallet"
}

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
    wallets: EvmWallets[];
    contractList?: EthContract[];
};

declare type SolConfig = {
    network: WalletAdapterNetwork;
    wallets: SolWallets[];
    endpoint: string;
    autoConnect: boolean;
    lamportsPerSol: number;
};

declare type WalletsConfig = {
    appName: string;
    appLogoUrl: string;
    darkMode: boolean;
};

declare type MultiChainProviderConfigProps = {
    ethConfig?: EthConfig;
    solConfig?: SolConfig;
    walletsConfig?: WalletsConfig;
};
interface MultiChainProviderProps {
    children: React.ReactNode;
    config: MultiChainProviderConfigProps;
}
declare const MultiChainProvider: ({ config, children }: MultiChainProviderProps) => JSX.Element;

declare const ConfigContext: React.Context<MultiChainProviderConfigProps>;
declare function useConfig(): MultiChainProviderConfigProps;

interface Props$6 {
    children: React.ReactNode;
    config: MultiChainProviderConfigProps;
}
declare function ConfigProvider({ config, children }: Props$6): JSX.Element;

declare type EvmNodeContextType = {
    provider: providers.JsonRpcProvider | providers.Web3Provider | undefined;
    setProvider: React.Dispatch<React.SetStateAction<providers.JsonRpcProvider | providers.Web3Provider | undefined>>;
};
declare const EvmNodeContext: React.Context<EvmNodeContextType>;
declare function useEvmNode(): EvmNodeContextType;

interface Props$5 {
    children: React.ReactNode;
    readOnlyUrls?: NodeUrls;
}
declare function EvmNodeProvider({ children, readOnlyUrls }: Props$5): JSX.Element;

declare const WindowContext: React.Context<boolean>;
declare function useWindow(): boolean;

interface Props$4 {
    children: ReactNode;
}
declare function WindowProvider({ children }: Props$4): JSX.Element;

declare const ErrorsBagContext: React.Context<{
    errors: string[];
    addError: (_: any) => void;
    clearErrors: () => void;
}>;
declare function useErrorsBag(): {
    errors: string[];
    addError: (_: any) => void;
    clearErrors: () => void;
};

interface Props$3 {
    children: React.ReactNode;
}
declare function ErrorsBagProvider({ children }: Props$3): JSX.Element;

interface Props$2 {
    children: React.ReactNode;
}
declare type WalletDataType = {
    account: EvmAddress | undefined;
};
declare function WalletProvider({ children }: Props$2): JSX.Element;

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
declare const mainnetSolscanUrl = "https://solscan.io";
declare const goerliBasescanUrl = "https://goerli.basescan.org";
declare const mainnetArbscanUrl = "https://arbscan.io";

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
    AvalancheTestnet = 43113,
    BaseGoerli = 84531,
    Arbitrum = 42161
}

interface Props$1 {
    children: React.ReactNode;
    config: MultiChainProviderConfigProps;
}
declare type NetworkDataType = {
    chainId: ChainId | undefined;
    chain: Chain | undefined;
};
declare function NetworkProvider({ children, config }: Props$1): JSX.Element;

declare type NetworkContextType = {
    networkData: NetworkDataType;
    setNetworkData: React.Dispatch<React.SetStateAction<NetworkDataType>>;
};
declare const NetworkContext: React.Context<NetworkContextType>;
declare function useNetwork(): NetworkContextType;

interface Props {
    children: React.ReactNode;
    solConfig: SolConfig | undefined;
}
declare function SolanaProvider({ children, solConfig }: Props): JSX.Element;

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
 * @param {EvmAddress | SolAddress} address Contract or wallet address
 * @return {string} URL
 * @example
 *  const url = getAddressLink("https://etherscan.io", "0x00")
*/
declare const getAddressLink: (explorerUrl: string, address: EvmAddress | SolAddress) => string;
/**
 * @internal INTENDED FOR INTERNAL USE ONLY. USE AT YOUR OWN RISK
 * @param {string} explorerUrl Base URL of the chain explorer
 * @param {string} txnHash Transaction Hash
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

declare const SolanaMainnet: Chain;
declare const SolanaTestnet: Chain;
declare const SolanaDevnet: Chain;

declare const BaseGoerli: Chain;

declare const Arbitrum: Chain;

/**
 * @public
*/
declare const useEthereum: () => {
    account: `0x${string}` | undefined;
    ethBalance: string | undefined;
    ens: string | undefined;
    provider: ethers.ethers.providers.JsonRpcProvider | ethers.ethers.providers.Web3Provider | undefined;
    active: boolean;
    network: NetworkDataType;
    activateBraveWallet: () => Promise<void>;
    activateMetamaskWallet: () => Promise<void>;
    activateCoinbaseWallet: () => Promise<void>;
    activateWalletConnect: () => Promise<void>;
    deactivate: () => void;
    errors: string[];
};

declare const useSolana: () => {
    autoConnect: boolean;
    wallets: _solana_wallet_adapter_react.Wallet[];
    wallet: _solana_wallet_adapter_react.Wallet | null;
    publicKey: _solana_web3_js.PublicKey | null;
    connecting: boolean;
    connected: boolean;
    disconnecting: boolean;
    select: (walletName: _solana_wallet_adapter_base.WalletName<string> | null) => void;
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
    solBalance: number;
    sendTransaction: (transaction: _solana_web3_js.Transaction | _solana_web3_js.VersionedTransaction, connection: _solana_web3_js.Connection, options?: _solana_wallet_adapter_base.SendTransactionOptions | undefined) => Promise<string>;
    signTransaction: (<T extends _solana_web3_js.Transaction | _solana_web3_js.VersionedTransaction>(transaction: T) => Promise<T>) | undefined;
    signAllTransactions: (<T_1 extends _solana_web3_js.Transaction | _solana_web3_js.VersionedTransaction>(transactions: T_1[]) => Promise<T_1[]>) | undefined;
    signMessage: ((message: Uint8Array) => Promise<Uint8Array>) | undefined;
    connection: _solana_web3_js.Connection;
};

declare const useMultichain: () => {
    autoConnect: boolean;
    wallets: _solana_wallet_adapter_react.Wallet[];
    wallet: _solana_wallet_adapter_react.Wallet | null;
    publicKey: _solana_web3_js.PublicKey | null;
    connecting: boolean;
    connected: boolean;
    disconnecting: boolean;
    select: (walletName: _solana_wallet_adapter_base.WalletName<string> | null) => void;
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
    solBalance: number;
    sendTransaction: (transaction: _solana_web3_js.Transaction | _solana_web3_js.VersionedTransaction, connection: _solana_web3_js.Connection, options?: _solana_wallet_adapter_base.SendTransactionOptions | undefined) => Promise<string>;
    signTransaction: (<T extends _solana_web3_js.Transaction | _solana_web3_js.VersionedTransaction>(transaction: T) => Promise<T>) | undefined;
    signAllTransactions: (<T_1 extends _solana_web3_js.Transaction | _solana_web3_js.VersionedTransaction>(transactions: T_1[]) => Promise<T_1[]>) | undefined;
    signMessage: ((message: Uint8Array) => Promise<Uint8Array>) | undefined;
    connection: _solana_web3_js.Connection;
    account: `0x${string}` | undefined;
    ethBalance: string | undefined;
    ens: string | undefined;
    provider: _ethersproject_providers.JsonRpcProvider | _ethersproject_providers.Web3Provider | undefined;
    active: boolean;
    network: NetworkDataType;
    activateBraveWallet: () => Promise<void>;
    activateMetamaskWallet: () => Promise<void>;
    activateCoinbaseWallet: () => Promise<void>;
    activateWalletConnect: () => Promise<void>;
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
    gasLimit?: Number;
    gasPrice?: string;
    nounce?: Number;
    value?: string;
    chainId?: Number;
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
interface deployContractParams {
    abi: ContractABIUnit[] | ethers.ContractInterface;
    byteCode: any;
    args?: any;
}
/**
 * @public
 * @param {PostContractCallParams} ContractCallObject
 * @return send, loading, response & error
*/
declare const useContract: () => {
    deployContract: ({ abi, byteCode, args }: deployContractParams) => Promise<ethers.ethers.Contract>;
};

export { Arbitrum, Avalanche, AvalancheTestnet, BSC, BSCTestnet, BaseGoerli, Chain, ChainId, ConfigContext, ConfigProvider, ContractABIUnit, ContractIO, DEFAULT_SUPPORTED_CHAINS, ErrorsBagContext, ErrorsBagProvider, EthConfig, EthContract, EvmAddress, EvmNodeContext, EvmNodeProvider, EvmWallets, Goerli, Mainnet, MultiChainProvider, MultiChainProviderConfigProps, MultiChainProviderProps, Mumbai, NetworkContext, NetworkProvider, NodeUrls, Polygon, SolAddress, SolConfig, SolWallets, SolanaDevnet, SolanaMainnet, SolanaProvider, SolanaTestnet, WalletContext, WalletProvider, WalletsConfig, WindowContext, WindowProvider, avalancheExplorerUrl, bscScanUrl, bscTestnetScanUrl, getAddressLink, getChainById, getTransactionLink, goerliBasescanUrl, goerliEtherscanUrl, mainnetArbscanUrl, mainnetEtherscanUrl, mainnetSolscanUrl, mumbaiPolygonScanUrl, polygonScanUrl, readContractCall, readContractCalls, resolveENS, testAvalancheExplorerUrl, useAccount, useConfig, useContract, useErrorsBag, useEthereum, useEvmNode, useMultichain, useNetwork, useNetworkInfo, useSolana, useWallet, useWindow, writeContractCall };
