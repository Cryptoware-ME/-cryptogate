import React, { ReactNode } from "react";
import { Contract } from '@ethersproject/contracts';
import { Interface } from '@ethersproject/abi';
export interface EthContractConfig {
    name: string;
    address: string;
    abi: any;
}
export interface EthContracts {
    [name: string]: {
        address?: string;
        interface?: Interface;
        contract?: Contract;
    };
}
export interface EthContractsContextProviderProps {
    children?: ReactNode;
    contracts: EthContractConfig[];
}
export declare const EthContractsContext: React.Context<EthContracts>;
export declare const EthContractsContextProvider: ({ contracts, children }: EthContractsContextProviderProps) => JSX.Element;
