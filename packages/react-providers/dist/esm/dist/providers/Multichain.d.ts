import { Chain, NodeUrls } from "@usedapp/core";
import { ReactNode } from "react";
import { EthContractConfig } from "./EthContracts";
import { SolDappContextProvider } from "./SolDapp";
export interface MultichainProviderProps {
    children?: ReactNode;
    ethConfig: {
        readOnlyUrls: NodeUrls;
        appName: string;
        appEmail: string;
        appUrl: string;
        appLogo: string;
        pollingInterval: number;
        networks: Chain[];
    };
    ethContracts: EthContractConfig[];
    solConfig: SolDappContextProvider;
}
export declare const MultichainProvider: ({ ethConfig, solConfig, ethContracts, children }: MultichainProviderProps) => JSX.Element;