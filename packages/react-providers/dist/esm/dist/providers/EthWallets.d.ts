import React, { ReactNode } from "react";
import { Chain, NodeUrls } from "@usedapp/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { LedgerConnector } from "@web3-react/ledger-connector";
import { TrezorConnector } from "@web3-react/trezor-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
export interface EthWalletsContextProviderProps {
    children?: ReactNode;
    config: {
        readOnlyUrls: NodeUrls;
        appName: string;
        appEmail: string;
        appUrl: string;
        appLogo: string;
        pollingInterval: number;
        networks: (Chain | undefined)[];
    };
}
export interface EthWallets {
    WalletConnect?: WalletConnectConnector;
    Coinbase?: WalletLinkConnector;
    Ledger?: LedgerConnector;
    Trezor?: TrezorConnector;
}
export declare const EthWalletsContext: React.Context<EthWallets>;
export declare const EthWalletsContextProvider: ({ config, children }: EthWalletsContextProviderProps) => JSX.Element;
