import React from 'react';
import { providers } from "ethers";
declare type EvmNodeContextType = {
    provider: providers.JsonRpcProvider | providers.Web3Provider | undefined;
    setProvider: React.Dispatch<React.SetStateAction<providers.JsonRpcProvider | providers.Web3Provider | undefined>>;
};
export declare const EvmNodeContext: React.Context<EvmNodeContextType>;
export declare function useEvmNode(): EvmNodeContextType;
export {};
