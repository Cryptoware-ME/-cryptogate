import React from "react";
import { useDapp } from "@cryptogate/react-providers";
import { ConnectedMenuOptions } from "../ConnectWalletComponent";
export declare const ConnectWalletButton: ({ ActiveComponent, DisabledComponent, ConnectedComponent, SignatureMessage, NetworkChainIds, NetworkAlertMessage, ChosenConnectedMenu, onSign, Store, setOpenOptions, }: {
    ActiveComponent: React.ReactNode;
    DisabledComponent?: React.ReactNode;
    ConnectedComponent?: React.ReactNode;
    SignatureMessage: string;
    NetworkChainIds?: number[] | undefined;
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
        chain: typeof useDapp.ChainId;
    }) => void) | undefined;
    setOpenOptions: any;
}) => JSX.Element;
