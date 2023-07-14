/// <reference types="@solana/web3.js" />
import React from 'react';
import * as _solana_web3_js from '@solana/web3.js';
import { PublicKey } from '@solana/web3.js';
import * as _solana_wallet_adapter_base from '@solana/wallet-adapter-base';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import * as _ethersproject_providers from '@ethersproject/providers';
import * as ethers from 'ethers';
import * as _solana_wallet_adapter_react from '@solana/wallet-adapter-react';
import * as _mysten_wallet_standard from '@mysten/wallet-standard';
import * as _wallet_standard_base from '@wallet-standard/base';
import * as _suiet_wallet_kit from '@suiet/wallet-kit';
import { useAccountBalance, useCoinBalance, useChain, useSuiProvider } from '@suiet/wallet-kit';
import { TransactionResponse, TransactionReceipt } from '@ethersproject/abstract-provider';
import { LogDescription } from 'ethers/lib/utils';

declare type EvmAddress = `0x${string}`;
declare type SolAddress = PublicKey;

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
    SHABAKAT = "shabakat",
    METAMASK = "metamask",
    WALLETCONNECT = "walletconnect",
    COINBASE = "coinbase",
    BRAVEWALLET = "braveWallet"
}

declare enum SuiWallets {
    ALL = "all",
    SUIET = "suiet",
    SUI = "sui",
    ETHOS = "ethos"
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
    defaultNetwork: Chain | undefined;
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

declare type SuiConfig = {
    wallets: SuiWallets[];
    autoConnect?: boolean;
};

declare type WalletsConfig = {
    appName: string;
    appLogoUrl: string;
    darkMode: boolean;
};

declare type MultiChainProviderConfigProps = {
    ethConfig?: EthConfig;
    solConfig?: SolConfig;
    suiConfig?: SuiConfig;
    walletsConfig?: WalletsConfig;
};
interface MultiChainProviderProps {
    children: React.ReactNode;
    config: MultiChainProviderConfigProps;
}
declare const MultiChainProvider: ({ config, children, }: MultiChainProviderProps) => JSX.Element;

declare function useConfig(): MultiChainProviderConfigProps;

declare function useErrorsBag(): {
    errors: string[];
    addError: (_: any) => void;
    clearErrors: () => void;
};

declare const mainnetEtherscanUrl = "https://mainnet.etherscan.io";
declare const goerliEtherscanUrl = "https://goerli.etherscan.io";
declare const sepoliaEtherscanUrl = "https://sepolia.etherscan.io";
declare const bscScanUrl = "https://testnet.bscscan.com";
declare const bscTestnetScanUrl = "https://testnet.bscscan.com";
declare const polygonScanUrl = "https://polygonscan.com";
declare const mumbaiPolygonScanUrl = "https://mumbai.polygonscan.com";
declare const avalancheExplorerUrl = "https://snowtrace.io";
declare const testAvalancheExplorerUrl = "https://testnet.snowtrace.io";
declare const goerliBasescanUrl = "https://goerli.basescan.org";
declare const mainnetArbscanUrl = "https://arbscan.io";
declare const xinfinExplorerUrl = "https://explorer.xinfin.nerwork";
declare const apothemExplorerUrl = "https://explorer.apothem.network";
declare const bellatrixExplorerUrl = "https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com";
declare const calypsoExplorer = "https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com/";
declare const rskExplorer = "https://explorer.rsk.co";
declare const rskTestnetExplorer = "https://explorer.testnet.rsk.co";

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
    Sepolia = 11155111,
    BSC = 56,
    BSCTestnet = 97,
    Polygon = 137,
    Mumbai = 80001,
    Avalanche = 43114,
    AvalancheTestnet = 43113,
    BaseGoerli = 84531,
    Arbitrum = 42161,
    XinFin = 50,
    Apothem = 51,
    Bellatrix = 1351057110,
    Calypso = 344106930,
    RSKMainnet = 30,
    RSKTestnet = 31
}

declare type NetworkDataType = {
    chainId: ChainId | undefined;
    chain: Chain | undefined;
};

declare type NetworkContextType = {
    networkData: NetworkDataType;
    setNetworkData: React.Dispatch<React.SetStateAction<NetworkDataType>>;
    updateNetwork: (_chainId: ChainId) => void;
};
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
declare const Sepolia: Chain;

declare const BSC: Chain;
declare const BSCTestnet: Chain;

declare const Polygon: Chain;
declare const Mumbai: Chain;

declare const Avalanche: Chain;
declare const AvalancheTestnet: Chain;

declare const BaseGoerli: Chain;

declare const Arbitrum: Chain;

declare const XinFin: Chain;
declare const Apothem: Chain;

declare const Bellatrix: Chain;
declare const Calypso: Chain;

declare const RSKMainnet: Chain;
declare const RSKTestnet: Chain;

/**
 * @deprecated This hook is deprecated and has been replaced by useEvm()
 */
declare const useEthereum: () => {
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
    activateShabakatWallet: () => Promise<void>;
    deactivate: () => void;
    errors: string[];
};

/**
 * @public
 */
declare const useEvm: () => {
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
    activateShabakatWallet: () => Promise<void>;
    deactivate: () => void;
    errors: string[];
};

declare const useSolana: () => {
    publicKey: string | _solana_web3_js.PublicKey | null;
    solBalance: number;
    connection: _solana_web3_js.Connection;
    connected: boolean;
    disconnect: () => Promise<void>;
    select: (walletName: _solana_wallet_adapter_base.WalletName<string> | null) => void;
    wallet: _solana_wallet_adapter_react.WalletContextState;
};

declare const useSui: () => {
    suiBalance: bigint | undefined;
    useAccountBalance: typeof useAccountBalance;
    useCoinBalance: typeof useCoinBalance;
    useChain: typeof useChain;
    useSuiProvider: typeof useSuiProvider;
    configuredWallets: _suiet_wallet_kit.IWallet[];
    detectedWallets: _suiet_wallet_kit.IWallet[];
    allAvailableWallets: _suiet_wallet_kit.IWallet[];
    chains: _suiet_wallet_kit.Chain[];
    chain: _suiet_wallet_kit.Chain | undefined;
    name: string | undefined;
    adapter: _suiet_wallet_kit.IWalletAdapter | undefined;
    account: _wallet_standard_base.WalletAccount | undefined;
    address: string | undefined;
    connecting: boolean;
    connected: boolean;
    status: "disconnected" | "connected" | "connecting";
    select: (walletName: string) => Promise<void>;
    disconnect: () => Promise<void>;
    getAccounts: () => readonly _wallet_standard_base.WalletAccount[];
    signAndExecuteTransactionBlock(input: Omit<_mysten_wallet_standard.SuiSignAndExecuteTransactionBlockInput, "chain" | "account">): Promise<_mysten_wallet_standard.SuiSignAndExecuteTransactionBlockOutput>;
    signTransactionBlock(input: Omit<_mysten_wallet_standard.SuiSignTransactionBlockInput, "chain" | "account">): Promise<_mysten_wallet_standard.SuiSignTransactionBlockOutput>;
    signMessage(input: Omit<_mysten_wallet_standard.SuiSignMessageInput, "account">): Promise<_mysten_wallet_standard.SuiSignMessageOutput>;
    verifySignedMessage(input: _mysten_wallet_standard.SuiSignMessageOutput): boolean;
    on: <E extends _suiet_wallet_kit.WalletEvent>(event: E, listener: _suiet_wallet_kit.WalletEventListeners[E]) => () => void;
};

declare const useMultichain: () => {
    evm: {
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
        activateShabakatWallet: () => Promise<void>;
        deactivate: () => void;
        errors: string[];
    };
    solana: {
        publicKey: string | _solana_web3_js.PublicKey | null;
        solBalance: number;
        connection: _solana_web3_js.Connection;
        connected: boolean;
        disconnect: () => Promise<void>;
        select: (walletName: _solana_wallet_adapter_base.WalletName<string> | null) => void;
        wallet: _solana_wallet_adapter_react.WalletContextState;
    };
    sui: {
        suiBalance: bigint | undefined;
        useAccountBalance: typeof _suiet_wallet_kit.useAccountBalance;
        useCoinBalance: typeof _suiet_wallet_kit.useCoinBalance;
        useChain: typeof _suiet_wallet_kit.useChain;
        useSuiProvider: typeof _suiet_wallet_kit.useSuiProvider;
        configuredWallets: _suiet_wallet_kit.IWallet[];
        detectedWallets: _suiet_wallet_kit.IWallet[];
        allAvailableWallets: _suiet_wallet_kit.IWallet[];
        chains: _suiet_wallet_kit.Chain[];
        chain: _suiet_wallet_kit.Chain | undefined;
        name: string | undefined;
        adapter: _suiet_wallet_kit.IWalletAdapter | undefined;
        account: _wallet_standard_base.WalletAccount | undefined;
        address: string | undefined;
        connecting: boolean;
        connected: boolean;
        status: "disconnected" | "connected" | "connecting";
        select: (walletName: string) => Promise<void>;
        disconnect: () => Promise<void>;
        getAccounts: () => readonly _wallet_standard_base.WalletAccount[];
        signAndExecuteTransactionBlock(input: Omit<_mysten_wallet_standard.SuiSignAndExecuteTransactionBlockInput, "chain" | "account">): Promise<_mysten_wallet_standard.SuiSignAndExecuteTransactionBlockOutput>;
        signTransactionBlock(input: Omit<_mysten_wallet_standard.SuiSignTransactionBlockInput, "chain" | "account">): Promise<_mysten_wallet_standard.SuiSignTransactionBlockOutput>;
        signMessage(input: Omit<_mysten_wallet_standard.SuiSignMessageInput, "account">): Promise<_mysten_wallet_standard.SuiSignMessageOutput>;
        verifySignedMessage(input: _mysten_wallet_standard.SuiSignMessageOutput): boolean;
        on: <E extends _suiet_wallet_kit.WalletEvent>(event: E, listener: _suiet_wallet_kit.WalletEventListeners[E]) => () => void;
    };
};

/**
 * @public
 * @return Gas Price
 * @example
 *  const gas = useGasPrice()
 */
declare const useGasPrice: () => ethers.BigNumber | undefined;

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
declare const readContractCall: ({ abi, address, contract, method, args, enabled, }: GetContractCallParams) => {
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
declare type TransactionState = "None" | "PendingSignature" | "Mining" | "Success" | "Fail" | "Exception";
declare type TransactionStatus = {
    status: TransactionState;
    transaction?: TransactionResponse;
    receipt?: TransactionReceipt;
    chainId?: ChainId;
    errorMessage?: string;
    originalTransaction?: TransactionResponse;
};
/**
 * @public
 * @param {PostContractCallParams} ContractCallObject
 * @return send, loading, response & error
 */
declare const writeContractCall: ({ abi, address, contract, method, }: PostContractCallParams) => {
    send: (args?: any[], options?: optionsType) => void;
    state: TransactionStatus;
    events: LogDescription[] | undefined;
    resetState: () => void;
};
interface DeployContractParams {
    abi: ContractABIUnit[] | ethers.ContractInterface;
    byteCode: any;
    args?: any;
}
/**
 * @public
 */
declare const useContract: () => {
    deployContract: ({ abi, byteCode, args, }: DeployContractParams) => Promise<ethers.ethers.Contract>;
};

export { Apothem, Arbitrum, Avalanche, AvalancheTestnet, BSC, BSCTestnet, BaseGoerli, Bellatrix, Calypso, Chain, ChainId, ContractABIUnit, ContractIO, DEFAULT_SUPPORTED_CHAINS, EthConfig, EthContract, EvmAddress, EvmWallets, Goerli, Mainnet, MultiChainProvider, MultiChainProviderConfigProps, MultiChainProviderProps, Mumbai, NodeUrls, Polygon, RSKMainnet, RSKTestnet, Sepolia, SolAddress, SolConfig, SolWallets, SuiConfig, SuiWallets, WalletsConfig, XinFin, apothemExplorerUrl, avalancheExplorerUrl, bellatrixExplorerUrl, bscScanUrl, bscTestnetScanUrl, calypsoExplorer, getAddressLink, getChainById, getTransactionLink, goerliBasescanUrl, goerliEtherscanUrl, mainnetArbscanUrl, mainnetEtherscanUrl, mumbaiPolygonScanUrl, polygonScanUrl, readContractCall, readContractCalls, resolveENS, rskExplorer, rskTestnetExplorer, sepoliaEtherscanUrl, testAvalancheExplorerUrl, useAccount, useConfig, useContract, useErrorsBag, useEthereum, useEvm, useGasPrice, useMultichain, useNetwork, useSolana, useSui, writeContractCall, xinfinExplorerUrl };
