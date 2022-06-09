import React from "react";
import { useDapp } from "@cryptogate/react-providers";
export declare enum EthWallets {
    ALL = "all",
    METAMASK = "metamask",
    WALLETCONNECT = "walletconnect",
    COINBASE = "coinbase"
}
export declare enum SolWallets {
    ALL = "all",
    PHANTOM = "phantom",
    SLOPE = "slope",
    SOLFLARE = "solflare"
}
export declare enum ConnectedMenuOptions {
    NOMENU = "nomenu",
    WALLETINFORMATION = "walletinformation",
    STORE = "store"
}
export declare const ConnectWalletComponent: ({ ActiveComponent, DisabledComponent, ConnectedComponent, EthWalletList, SolWalletList, SignatureMessage, NetworkChainIds, NetworkAlertMessage, ConnectedMenuChosen, Store, WalletListStyle, onSign, }: {
    ActiveComponent?: React.ReactNode;
    DisabledComponent?: React.ReactNode;
    ConnectedComponent?: React.ReactNode;
    EthWalletList?: EthWallets[] | undefined;
    SolWalletList?: SolWallets[] | undefined;
    SignatureMessage?: string | undefined;
    NetworkChainIds?: number[] | undefined;
    NetworkAlertMessage?: string | undefined;
    ConnectedMenuChosen?: ConnectedMenuOptions | undefined;
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
