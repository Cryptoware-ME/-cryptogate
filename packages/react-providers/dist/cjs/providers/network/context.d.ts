import React from "react";
import { ChainId } from "../../constants/chains";
import { NetworkDataType } from "./provider";
declare type NetworkContextType = {
    networkData: NetworkDataType;
    setNetworkData: React.Dispatch<React.SetStateAction<NetworkDataType>>;
    updateNetwork: (_chainId: ChainId) => void;
};
export declare const NetworkContext: React.Context<NetworkContextType>;
export declare function useNetwork(): NetworkContextType;
export {};
