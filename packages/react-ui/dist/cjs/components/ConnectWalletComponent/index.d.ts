import React from "react";
export declare enum EthWallets {
    ALL = "all",
    METAMASK = "metamask",
    WALLETCONNECT = "walletconnect",
    COINBASE = "coinbase",
    BRAVEWALLET = "braveWallet"
}
export declare enum ConnectedMenuOptions {
    NOMENU = "nomenu",
    WALLETINFORMATION = "walletinformation",
    STORE = "store"
}
export declare const ConnectWalletComponent: ({ ActiveComponent, DisabledComponent, ConnectedComponent, EthWalletList, SignatureMessage, NetworkAlertMessage, ConnectedMenuChosen, Store, onSign, }: {
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
