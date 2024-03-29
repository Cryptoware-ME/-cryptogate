import React from "react";
import { EthConfig, SolConfig, SuiConfig, WalletsConfig } from "../models/types";
export declare type MultiChainProviderConfigProps = {
    ethConfig?: EthConfig;
    solConfig?: SolConfig;
    suiConfig?: SuiConfig;
    walletsConfig?: WalletsConfig;
};
export interface MultiChainProviderProps {
    children: React.ReactNode;
    config: MultiChainProviderConfigProps;
}
export declare const MultiChainProvider: ({ config, children, }: MultiChainProviderProps) => React.JSX.Element;
