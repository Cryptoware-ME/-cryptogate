/// <reference types="@solana/web3.js" />
import React, { ReactNode } from 'react';
import * as _ethersproject_contracts from '@ethersproject/contracts';
import { Contract } from '@ethersproject/contracts';
import * as _ethersproject_abi from '@ethersproject/abi';
import { Interface } from '@ethersproject/abi';
import * as _usedapp_core from '@usedapp/core';
import { NodeUrls, Chain, useEtherBalance } from '@usedapp/core';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { LedgerConnector } from '@web3-react/ledger-connector';
import { TrezorConnector } from '@web3-react/trezor-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import * as _solana_wallet_adapter_base from '@solana/wallet-adapter-base';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, SolletExtensionWalletAdapter } from '@solana/wallet-adapter-wallets';
import * as _ethersproject_providers from '@ethersproject/providers';
import * as _solana_wallet_adapter_react from '@solana/wallet-adapter-react';
import * as _solana_web3_js from '@solana/web3.js';
import { PublicKey, Connection } from '@solana/web3.js';
import * as _ethersproject_bignumber from '@ethersproject/bignumber';

interface EthContractConfig {
    name: string;
    address: {
        [chain: number]: string;
    };
    abi: any;
}
interface EthContracts {
    [name: string]: {
        address?: string;
        interface?: Interface;
        contract?: Contract;
    };
}
interface EthContractsContextProviderProps {
    children?: ReactNode;
    contracts: EthContractConfig[];
}
declare const EthContractsContext: React.Context<EthContracts>;
declare const EthContractsContextProvider: ({ contracts, children }: EthContractsContextProviderProps) => JSX.Element;

interface EthWalletsContextProviderProps {
    children?: ReactNode;
    config: {
        readOnlyUrls: NodeUrls;
        appName: string;
        appEmail: string;
        appUrl: string;
        appLogo: string;
        pollingInterval: number;
        networks: (Chain | undefined)[];
    };
}
interface EthWallets {
    WalletConnect?: WalletConnectConnector;
    Coinbase?: WalletLinkConnector;
    Ledger?: LedgerConnector;
    Trezor?: TrezorConnector;
}
declare const EthWalletsContext: React.Context<EthWallets>;
declare const EthWalletsContextProvider: ({ config, children }: EthWalletsContextProviderProps) => JSX.Element;

interface SolWalletsContextProviderProps {
    children?: ReactNode;
    network: WalletAdapterNetwork;
}
interface SolWallets {
    Phantom: PhantomWalletAdapter;
    Slope: SlopeWalletAdapter;
    Solflare: SolflareWalletAdapter;
    Sollet: SolletExtensionWalletAdapter;
}
declare const SolWalletsContext: React.Context<SolWallets>;
declare const SolWalletsContextProvider: ({ network, children }: SolWalletsContextProviderProps) => JSX.Element;

declare const defaultConfig: {
    pollingInterval: number;
    notifications: {
        checkInterval: number;
        expirationPeriod: number;
    };
    autoConnect: boolean;
};
interface EthDappContextProviderProps {
    children?: ReactNode;
    contracts: EthContractConfig[];
    config: {
        readOnlyUrls: NodeUrls;
        appName: string;
        appEmail: string;
        appUrl: string;
        appLogo: string;
        pollingInterval: number;
        networks: (Chain | undefined)[];
    };
}
interface EthConfigSetter {
    setEthConfig: (conf: {
        readOnlyUrls: NodeUrls;
        appName: string;
        appEmail: string;
        appUrl: string;
        appLogo: string;
        pollingInterval: number;
        networks: (Chain | undefined)[];
    }) => void;
}
declare const EthDappContext: React.Context<EthConfigSetter>;
declare const EthDappContextProvider: ({ config, contracts, children }: EthDappContextProviderProps) => JSX.Element;

declare const solDefaultConfig: {
    lamportsPerSol: number;
};
interface SolDappContextProviderProps {
    children?: ReactNode;
    config: {
        env: string;
        autoConnect: boolean;
        lamportsPerSol?: number;
    };
}
interface SolConfigSetter {
    setSolConfig: (conf: SolDappContextProviderProps) => void;
}
declare const SolDappContext: React.Context<SolConfigSetter>;
declare const SolDappContextProvider: ({ config, children }: SolDappContextProviderProps) => JSX.Element;

interface MultichainProviderProps {
    children?: ReactNode;
    ethConfig: {
        readOnlyUrls: NodeUrls;
        appName: string;
        appEmail: string;
        appUrl: string;
        appLogo: string;
        pollingInterval: number;
        networks: (Chain | undefined)[];
    };
    ethContracts: EthContractConfig[];
    solConfig: SolDappContextProviderProps;
}
declare const MultichainProvider: ({ ethConfig, solConfig, ethContracts, children }: MultichainProviderProps) => JSX.Element;

declare const useEthereum: () => {
    wallets: EthWallets;
    contracts: EthContracts;
    getContract: (name: string) => {
        address?: string | undefined;
        interface?: _ethersproject_abi.Interface | undefined;
        contract?: _ethersproject_contracts.Contract | undefined;
    };
    getEthBalance: typeof useEtherBalance;
    setEthConfig: (conf: {
        readOnlyUrls: _usedapp_core.NodeUrls;
        appName: string;
        appEmail: string;
        appUrl: string;
        appLogo: string;
        pollingInterval: number;
        networks: (_usedapp_core.Chain | undefined)[];
    }) => void;
    activate: (provider: _ethersproject_providers.JsonRpcProvider | _ethersproject_providers.ExternalProvider | {
        getProvider: () => any;
        activate: () => Promise<any>;
    }) => Promise<void>;
    setError: (error: Error) => void;
    deactivate: () => void;
    connector: undefined;
    chainId?: number | undefined;
    account?: string | null | undefined;
    error?: Error | undefined;
    library?: _ethersproject_providers.JsonRpcProvider | undefined;
    active: boolean;
    activateBrowserWallet: () => void;
    isLoading: boolean;
};

declare const useSolana: () => {
    wallets: SolWallets;
    setSolConfig: (conf: SolDappContextProviderProps) => void;
    connection: _solana_web3_js.Connection;
    autoConnect: boolean;
    wallet: _solana_wallet_adapter_react.Wallet | null;
    publicKey: _solana_web3_js.PublicKey | null;
    connecting: boolean;
    connected: boolean;
    disconnecting: boolean;
    select(walletName: _solana_wallet_adapter_base.WalletName): void;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    sendTransaction(transaction: _solana_web3_js.Transaction, connection: _solana_web3_js.Connection, options?: _solana_wallet_adapter_base.SendTransactionOptions | undefined): Promise<string>;
    signTransaction: ((transaction: _solana_web3_js.Transaction) => Promise<_solana_web3_js.Transaction>) | undefined;
    signAllTransactions: ((transaction: _solana_web3_js.Transaction[]) => Promise<_solana_web3_js.Transaction[]>) | undefined;
    signMessage: ((message: Uint8Array) => Promise<Uint8Array>) | undefined;
};

declare const useMultichain: () => {
    network: {
        update: (network: Partial<_usedapp_core.Network>) => void;
        reportError: (error: Error) => void;
        activate: (provider: _ethersproject_providers.JsonRpcProvider | _ethersproject_providers.ExternalProvider) => Promise<void>;
        deactivate: () => void;
        network: _usedapp_core.Network;
        activateBrowserWallet: () => void;
        isLoading: boolean;
    };
    account: string | PublicKey;
    ethereum: {
        wallets: EthWallets;
        contracts: EthContracts;
        getContract: (name: string) => {
            address?: string | undefined;
            interface?: _ethersproject_abi.Interface | undefined;
            contract?: _ethersproject_contracts.Contract | undefined;
        };
        getEthBalance: typeof _usedapp_core.useEtherBalance;
        setEthConfig: (conf: {
            readOnlyUrls: _usedapp_core.NodeUrls;
            appName: string;
            appEmail: string;
            appUrl: string;
            appLogo: string;
            pollingInterval: number;
            networks: (_usedapp_core.Chain | undefined)[];
        }) => void;
        activate: (provider: _ethersproject_providers.JsonRpcProvider | _ethersproject_providers.ExternalProvider | {
            getProvider: () => any;
            activate: () => Promise<any>;
        }) => Promise<void>;
        setError: (error: Error) => void;
        deactivate: () => void;
        connector: undefined;
        chainId?: number | undefined;
        account?: string | null | undefined;
        error?: Error | undefined;
        library?: _ethersproject_providers.JsonRpcProvider | undefined;
        active: boolean;
        activateBrowserWallet: () => void;
        isLoading: boolean;
    };
    solana: {
        wallets: SolWallets;
        setSolConfig: (conf: SolDappContextProviderProps) => void;
        connection: Connection;
        autoConnect: boolean;
        wallet: _solana_wallet_adapter_react.Wallet | null;
        publicKey: PublicKey | null;
        connecting: boolean;
        connected: boolean;
        disconnecting: boolean;
        select(walletName: _solana_wallet_adapter_base.WalletName): void;
        connect(): Promise<void>;
        disconnect(): Promise<void>;
        sendTransaction(transaction: _solana_web3_js.Transaction, connection: Connection, options?: _solana_wallet_adapter_base.SendTransactionOptions | undefined): Promise<string>;
        signTransaction: ((transaction: _solana_web3_js.Transaction) => Promise<_solana_web3_js.Transaction>) | undefined;
        signAllTransactions: ((transaction: _solana_web3_js.Transaction[]) => Promise<_solana_web3_js.Transaction[]>) | undefined;
        signMessage: ((message: Uint8Array) => Promise<Uint8Array>) | undefined;
    };
    etherBalance: _ethersproject_bignumber.BigNumber | undefined;
    solBalance: number;
};

export { EthConfigSetter, EthContractConfig, EthContracts, EthContractsContext, EthContractsContextProvider, EthContractsContextProviderProps, EthDappContext, EthDappContextProvider, EthDappContextProviderProps, EthWallets, EthWalletsContext, EthWalletsContextProvider, EthWalletsContextProviderProps, MultichainProvider, MultichainProviderProps, SolConfigSetter, SolDappContext, SolDappContextProvider, SolDappContextProviderProps, SolWallets, SolWalletsContext, SolWalletsContextProvider, SolWalletsContextProviderProps, defaultConfig, solDefaultConfig, useEthereum, useMultichain, useSolana };
