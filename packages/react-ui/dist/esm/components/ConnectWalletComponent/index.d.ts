import React from "react";
export declare enum ConnectedMenuOptions {
    NOMENU = "nomenu",
    WALLETINFORMATION = "walletinformation",
    STORE = "store"
}
export declare const ConnectWalletComponent: ({ ActiveComponent, DisabledComponent, ConnectedComponent, SignatureMessage, NetworkAlertMessage, ConnectedMenuChosen, Store, onSign, LocalStorage, }: {
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
