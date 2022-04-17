import React, { ReactNode } from "react";
import { EthContractConfig } from "./EthContracts";
import { EthWalletsContextProviderProps } from "./EthWallets";
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
    config: EthWalletsContextProviderProps;
}
export interface EthConfigSetter {
    setEthConfig: (conf: EthWalletsContextProviderProps) => void;
}
export declare const EthDappContext: React.Context<EthConfigSetter>;
export declare const EthDappContextProvider: ({ config, contracts, children }: EthDappContextProviderProps) => JSX.Element;
