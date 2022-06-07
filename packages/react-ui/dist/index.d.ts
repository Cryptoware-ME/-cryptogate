import React from 'react';
import { useDapp } from '@cryptogate/react-providers';

declare enum EthWallets {
    ALL = "all",
    METAMASK = "metamask",
    WALLETCONNECT = "walletconnect",
    COINBASE = "coinbase"
}
declare enum SolWallets {
    ALL = "all",
    PHANTOM = "phantom",
    SLOPE = "slope",
    SOLFLARE = "solflare"
}
declare enum ConnectedMenu {
    NOMENU = "nomenu",
    WALLETINFORMATION = "walletinformation",
    STORE = "store"
}
declare const ConnectWalletComponent: ({ ActiveComponent, DisabledComponent, ConnectedComponent, EthWalletList, SolWalletList, SignatureMessage, NetworkChainIds, NetworkAlertMessage, ConnectedMenuChosen, Store, WalletListStyle, onSign, }: {
    ActiveComponent?: React.ReactNode;
    DisabledComponent?: React.ReactNode;
    ConnectedComponent?: React.ReactNode;
    EthWalletList?: EthWallets[] | undefined;
    SolWalletList?: SolWallets[] | undefined;
    SignatureMessage?: string | undefined;
    NetworkChainIds?: number[] | undefined;
    NetworkAlertMessage?: string | undefined;
    ConnectedMenuChosen?: ConnectedMenu | undefined;
    Store?: {
        Tokens?: string[] | undefined;
        NFTs?: string[] | undefined;
    } | undefined;
    WalletListStyle?: {
        top?: any;
        background?: string | undefined;
    } | undefined;
    onSign?: ((key: {
        address: string;
        message: string;
        signature: string;
        chain: typeof useDapp.ChainId;
    }) => void) | undefined;
}) => JSX.Element;

declare const Identicon: ({ walletAddress }: {
    walletAddress?: string | undefined;
}) => JSX.Element;

declare const ConnectMenu: ({ ChosenConnectedMenu, onClose, isOpen, Store, }: {
    ChosenConnectedMenu: ConnectedMenu;
    onClose: any;
    isOpen: boolean;
    Store?: {
        Tokens?: string[] | undefined;
        NFTs?: string[] | undefined;
    } | undefined;
}) => JSX.Element;

declare const getWithExpiry: (key: any) => any;

declare const setWithExpiry: (key: any, value: any, ttl: any) => void;

export { ConnectMenu, ConnectWalletComponent, ConnectedMenu, EthWallets, Identicon, SolWallets, getWithExpiry, setWithExpiry };
