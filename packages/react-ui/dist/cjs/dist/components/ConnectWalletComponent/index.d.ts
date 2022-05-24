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
export declare const ConnectWalletComponent: ({ ActiveComponent, DiabledComponent, ConnectedComponent, EthWalletList, SolWalletList, SignatureMessage, NetworkChainIds, NetworkAlertMessage, ConnectedMenu, WalletListStyle, onSign, }: {
    ActiveComponent?: React.ReactNode;
    DiabledComponent?: React.ReactNode;
    ConnectedComponent?: React.ReactNode;
    EthWalletList?: EthWallets[] | undefined;
    SolWalletList?: SolWallets[] | undefined;
    SignatureMessage?: string | undefined;
    NetworkChainIds?: number[] | undefined;
    NetworkAlertMessage?: string | undefined;
    ConnectedMenu?: boolean | undefined;
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
