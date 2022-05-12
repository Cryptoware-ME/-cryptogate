import React from "react";
export declare const ConnectWalletButton: ({ activeComponent, diabledComponent, connectedComponent, setOpenOptions, onSign, alertMessage, message, btnClass, btnText, connectMenu, networkChainId, }: {
    activeComponent?: React.ReactNode;
    diabledComponent?: React.ReactNode;
    connectedComponent?: React.ReactNode;
    setOpenOptions: any;
    onSign?: any;
    alertMessage: string;
    message?: string | undefined;
    btnClass?: string | undefined;
    btnText?: string | undefined;
    connectMenu: boolean;
    networkChainId?: number[] | undefined;
}) => JSX.Element;
