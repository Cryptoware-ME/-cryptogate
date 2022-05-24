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
export declare const ConnectWalletComponent: ({ ActiveComponent, ConnectedComponent, EthWalletList, SolWalletList, SignatureMessage, NetworkChainIds, NetworkAlertMessage, ConnectMenu, onSign, WalletListStyle, diabledComponent, }: {
    ActiveComponent?: React.ReactNode;
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
    diabledComponent?: React.ReactNode;
}) => JSX.Element;
