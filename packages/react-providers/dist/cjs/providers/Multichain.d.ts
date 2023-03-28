import React from "react";
import { EthConfig, SolConfig, WalletsConfig } from "../models/types";
export declare type MultiChainProviderConfigProps = {
    ethConfig?: EthConfig;
    solConfig?: SolConfig;
    walletsConfig?: WalletsConfig;
};
export interface MultiChainProviderProps {
    children: React.ReactNode;
    config: MultiChainProviderConfigProps;
}
export declare const MultiChainProvider: ({ config, children }: MultiChainProviderProps) => JSX.Element;
