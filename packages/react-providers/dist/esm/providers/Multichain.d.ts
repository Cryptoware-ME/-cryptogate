import { Chain, NodeUrls } from "@usedapp/core";
import { ReactNode } from "react";
import { EthContractConfig } from "./EthContracts";
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
    theme?: {
        primaryText: string;
        secondaryText: string;
        primaryBackground: string;
        secondaryBackground: string;
    };
}
export declare const MultichainProvider: ({ ethConfig, ethContracts, children, theme, }: MultichainProviderProps) => JSX.Element;
