import { Chain, NodeUrls } from "@usedapp/core";
import { ReactNode } from "react";
import { EthContractConfig } from "./EthContracts";
import { SolDappContextProviderProps } from "./SolDapp";
export interface MultichainProviderProps {
    children?: ReactNode;
    ethConfig: {
        readOnlyUrls: NodeUrls;
        appName: string;
        appEmail: string;
        appUrl: string;
        appLogo: string;
        pollingInterval: number;
        networks: (Chain | undefined)[];
    };
    ethContracts: EthContractConfig[];
    solConfig: SolDappContextProviderProps;
    theme?: {
        primaryText: string;
        secondaryText: string;
        primaryBackground: string;
        secondaryBackground: string;
    };
}
export declare const MultichainProvider: ({ ethConfig, solConfig, ethContracts, children, theme, }: MultichainProviderProps) => JSX.Element;
