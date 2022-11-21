import React from 'react';
import { NetworkDataType } from './provider';
declare type NetworkContextType = {
    networkData: NetworkDataType;
    setNetworkData: React.Dispatch<React.SetStateAction<NetworkDataType>>;
};
export declare const NetworkContext: React.Context<NetworkContextType>;
export declare function useNetwork(): NetworkContextType;
export {};
