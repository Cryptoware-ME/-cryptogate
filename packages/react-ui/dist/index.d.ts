/// <reference types="react" />
import React from 'react';
import { ContractABIUnit } from '@cryptogate/react-providers';

declare enum EthWallets {
    ALL = "all",
    METAMASK = "metamask",
    WALLETCONNECT = "walletconnect",
    COINBASE = "coinbase",
    BRAVEWALLET = "braveWallet"
}
declare enum ConnectedMenuOptions {
    NOMENU = "nomenu",
    WALLETINFORMATION = "walletinformation",
    STORE = "store"
}
declare const ConnectWalletComponent: ({ ActiveComponent, DisabledComponent, ConnectedComponent, EthWalletList, SignatureMessage, NetworkAlertMessage, ConnectedMenuChosen, Store, onSign, }: {
    ActiveComponent?: React.ReactNode;
    DisabledComponent?: React.ReactNode;
    ConnectedComponent?: React.ReactNode;
    EthWalletList?: EthWallets[] | undefined;
    SignatureMessage?: string | undefined;
    NetworkAlertMessage?: string | undefined;
    ConnectedMenuChosen?: ConnectedMenuOptions | undefined;
    Store?: {
        Tokens?: string[] | undefined;
        NFTs?: string[] | undefined;
    } | undefined;
    onSign?: ((key: {
        address: string;
        message: string;
        signature: string;
    }) => void) | undefined;
}) => JSX.Element;

declare const Identicon: ({ walletAddress }: {
    walletAddress?: string | undefined;
}) => JSX.Element;

declare const ConnectedMenu: ({ ChosenConnectedMenu, onClose, onDisconnect, isOpen, Store, }: {
    ChosenConnectedMenu: ConnectedMenuOptions;
    onClose: any;
    isOpen: boolean;
    onDisconnect?: any;
    Store?: {
        Tokens?: string[] | undefined;
        NFTs?: string[] | undefined;
    } | undefined;
}) => JSX.Element;

declare const AbiToUi: ({ contract, address, abi, methodData, gasPrice, gasLimit, }: {
    contract?: string | undefined;
    address?: any;
    abi?: ContractABIUnit[] | undefined;
    methodData?: {
        [name: string]: {
            description: string;
            gasLimit: number;
        };
    } | undefined;
    gasPrice?: string | undefined;
    gasLimit?: number | undefined;
}) => JSX.Element;

declare const getWithExpiry: (key: any) => any;

declare const setWithExpiry: (key: any, value: any, ttl: any) => void;

export { AbiToUi, ConnectWalletComponent, ConnectedMenu, ConnectedMenuOptions, EthWallets, Identicon, getWithExpiry, setWithExpiry };
