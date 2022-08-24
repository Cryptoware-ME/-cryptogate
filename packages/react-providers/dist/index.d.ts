import React, { ReactNode } from 'react';
import * as _ethersproject_contracts from '@ethersproject/contracts';
import { Contract } from '@ethersproject/contracts';
import * as _ethersproject_abi from '@ethersproject/abi';
import { Interface } from '@ethersproject/abi';
import * as _usedapp_core from '@usedapp/core';
import { NodeUrls, Chain, useEtherBalance } from '@usedapp/core';
export { _usedapp_core as useDapp };
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { LedgerConnector } from '@web3-react/ledger-connector';
import { TrezorConnector } from '@web3-react/trezor-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import * as _ethersproject_providers from '@ethersproject/providers';

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
declare const EthDappContextProvider: ({ config, contracts, children, }: EthDappContextProviderProps) => JSX.Element;

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
    theme?: {
        primaryText: string;
        secondaryText: string;
        primaryBackground: string;
        secondaryBackground: string;
    };
}
declare const MultichainProvider: ({ ethConfig, ethContracts, children, theme, }: MultichainProviderProps) => JSX.Element;

declare const ThemeContext: React.Context<{
    Theme: {
        primaryText: string;
        secondaryText: string;
        primaryBackground: string;
        secondaryBackground: string;
    };
}>;
declare const ThemeContextProvider: ({ Theme, children, }: {
    Theme: {
        primaryText: string;
        secondaryText: string;
        primaryBackground: string;
        secondaryBackground: string;
    };
    children: React.ReactNode;
}) => JSX.Element;

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
    account: string;
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
};

declare const useTheme: () => {
    Theme: {
        primaryText: string;
        secondaryText: string;
        primaryBackground: string;
        secondaryBackground: string;
    };
};

export { EthConfigSetter, EthContractConfig, EthContracts, EthContractsContext, EthContractsContextProvider, EthContractsContextProviderProps, EthDappContext, EthDappContextProvider, EthDappContextProviderProps, EthWallets, EthWalletsContext, EthWalletsContextProvider, EthWalletsContextProviderProps, MultichainProvider, MultichainProviderProps, ThemeContext, ThemeContextProvider, defaultConfig, useEthereum, useMultichain, useTheme };
