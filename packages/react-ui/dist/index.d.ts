import React from 'react';
import { ContractABIUnit } from '@cryptogate/react-providers';

declare enum ConnectedMenuOptions {
    NOMENU = "nomenu",
    WALLETINFORMATION = "walletinformation",
    STORE = "store"
}
declare const ConnectWalletComponent: ({ ActiveComponent, DisabledComponent, ConnectedComponent, SignatureMessage, NetworkAlertMessage, ConnectedMenuChosen, Store, onSign, LocalStorage, }: {
    ActiveComponent?: React.ReactNode;
    DisabledComponent?: React.ReactNode;
    ConnectedComponent?: React.ReactNode;
    SignatureMessage?: {
        msg: string;
        address: boolean;
        timestamp: boolean;
    } | undefined;
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
    LocalStorage?: boolean | undefined;
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
    address?: `0x${string}` | undefined;
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

export { AbiToUi, ConnectWalletComponent, ConnectedMenu, ConnectedMenuOptions, Identicon, getWithExpiry, setWithExpiry };
