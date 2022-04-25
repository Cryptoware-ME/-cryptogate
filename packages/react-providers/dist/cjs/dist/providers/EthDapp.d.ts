import React, { ReactNode } from "react";
import { NodeUrls, Chain } from "@usedapp/core";
import { EthContractConfig } from "./EthContracts";
export declare const defaultConfig: {
    pollingInterval: number;
    notifications: {
        checkInterval: number;
        expirationPeriod: number;
    };
    autoConnect: boolean;
};
export interface EthDappContextProviderProps {
    children?: ReactNode;
    contracts: EthContractConfig[];
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
export interface EthConfigSetter {
    setEthConfig: (conf: {
        readOnlyUrls: NodeUrls;
        appName: string;
        appEmail: string;
        appUrl: string;
        appLogo: string;
        pollingInterval: number;
        networks: (Chain | undefined)[];
    }) => void;
}
export declare const EthDappContext: React.Context<EthConfigSetter>;
export declare const EthDappContextProvider: ({ config, contracts, children }: EthDappContextProviderProps) => JSX.Element;
