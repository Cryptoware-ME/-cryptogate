import { ReactNode } from "react";
import { EthContractConfig } from "./EthContracts";
import { EthWalletsContextProviderProps } from "./EthWallets";
import { SolDappContextProvider } from "./SolDapp";
export interface MultichainProviderProps {
    children?: ReactNode;
    ethConfig: EthWalletsContextProviderProps;
    ethContracts: EthContractConfig[];
    solConfig: SolDappContextProvider;
}
export declare const MultichainProvider: ({ ethConfig, solConfig, ethContracts, children }: MultichainProviderProps) => JSX.Element;
