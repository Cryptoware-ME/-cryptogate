import React from "react";
import { EthConfig, WalletsConfig } from "../models/types";
export declare type MultiChainProviderConfigProps = {
    ethConfig: EthConfig;
    walletsConfig?: WalletsConfig;
};
export interface MultiChainProviderProps {
    children: React.ReactNode;
    config: MultiChainProviderConfigProps;
}
export declare const MultiChainProvider: ({ config, children, }: MultiChainProviderProps) => JSX.Element;
