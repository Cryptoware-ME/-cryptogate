import { Chain, NodeUrls } from "@usedapp/core";
import React, { ReactNode } from "react";
import { EthContractConfig } from "./EthContracts";
import { EthDappContextProvider } from "./EthDapp";
import { SolDappContextProvider, SolDappContextProviderProps } from "./SolDapp";
import { ThemeContextProvider } from "./Theme";

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
    titles: string;
    text: string;
    background: string;
  };
}

export const MultichainProvider = ({
  ethConfig,
  solConfig,
  ethContracts,
  children,
  theme = {
    titles: "#000000",
    text: "#000000",
    background: "#ffffff",
  },
}: MultichainProviderProps) => {
  return (
    <EthDappContextProvider config={ethConfig} contracts={ethContracts}>
      <SolDappContextProvider {...solConfig}>
        <ThemeContextProvider Theme={theme}>{children}</ThemeContextProvider>
      </SolDappContextProvider>
    </EthDappContextProvider>
  );
};
