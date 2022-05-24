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
declare const ConnectWalletComponent: ({ ActiveComponent, DiabledComponent, ConnectedComponent, EthWalletList, SolWalletList, SignatureMessage, NetworkChainIds, NetworkAlertMessage, ConnectMenu, onSign, WalletListStyle, }: {
    ActiveComponent?: React.ReactNode;
    DiabledComponent?: React.ReactNode;
    ConnectedComponent?: React.ReactNode;
    EthWalletList?: EthWallets[] | undefined;
    SolWalletList?: SolWallets[] | undefined;
    SignatureMessage?: string | undefined;
    NetworkChainIds?: number[] | undefined;
    NetworkAlertMessage?: string | undefined;
    ConnectMenu?: boolean | undefined;
    onSign?: ((key: {
        address: string;
        message: string;
        signature: string;
        chain: typeof useDapp.ChainId;
    }) => void) | undefined;
    WalletListStyle?: {
        top?: any;
        background?: string | undefined;
    } | undefined;
}) => JSX.Element;

declare const Identicon: ({ accountToUse }: {
    accountToUse?: string | undefined;
}) => JSX.Element;

declare const getWithExpiry: (key: any) => any;

declare const setWithExpiry: (key: any, value: any, ttl: any) => void;

export { ConnectWalletComponent, EthWallets, Identicon, SolWallets, getWithExpiry, setWithExpiry };
