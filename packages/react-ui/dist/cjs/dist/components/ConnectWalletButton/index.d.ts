import React from "react";
import { useDapp } from "@cryptogate/react-providers";
export declare const ConnectWalletButton: ({ ActiveComponent, DiabledComponent, ConnectedComponent, SignatureMessage, NetworkChainIds, NetworkAlertMessage, ConnectMenuFlag, onSign, setOpenOptions, }: {
    ActiveComponent: React.ReactNode;
    DiabledComponent?: React.ReactNode;
    ConnectedComponent?: React.ReactNode;
    SignatureMessage: string;
    NetworkChainIds?: number[] | undefined;
    NetworkAlertMessage: string;
    ConnectMenuFlag: boolean;
    onSign?: ((key: {
        address: string;
        message: string;
        signature: string;
        chain: typeof useDapp.ChainId;
    }) => void) | undefined;
    setOpenOptions: any;
}) => JSX.Element;
