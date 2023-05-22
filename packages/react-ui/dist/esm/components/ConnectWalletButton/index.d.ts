import React from "react";
import { ConnectedMenuOptions } from "../ConnectWalletComponent";
export declare const ConnectWalletButton: ({ ActiveComponent, DisabledComponent, ConnectedComponent, SignatureMessage, NetworkAlertMessage, ChosenConnectedMenu, onSign, Store, setOpenOptions, LocalStorage, }: {
    ActiveComponent: React.ReactNode;
    DisabledComponent: React.ReactNode;
    ConnectedComponent: React.ReactNode;
    SignatureMessage: {
        msg: string;
        address: boolean;
        timestamp: boolean;
    };
    NetworkAlertMessage: string;
    ChosenConnectedMenu: ConnectedMenuOptions;
    Store: {
        Tokens?: string[];
        NFTs?: string[];
    };
    onSign?: ((key: {
        address: string;
        message: string;
        signature: string;
    }) => void) | undefined;
    LocalStorage: boolean;
    setOpenOptions: any;
}) => JSX.Element;
