import { Chain, NodeUrls } from "@usedapp/core";
import React, { ReactNode } from "react";
import { EthContractConfig } from "./EthContracts";
import { EthDappContextProvider } from "./EthDapp";
// import { SolDappContextProvider, SolDappContextProviderProps } from "./SolDapp";
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
  // solConfig: SolDappContextProviderProps;
  theme?: {
    primaryText: string;
    secondaryText: string;
    primaryBackground: string;
    secondaryBackground: string;
  };
}

export const MultichainProvider = ({
  ethConfig,
  // solConfig,
  ethContracts,
  children,
  theme = {
    primaryText: "#000000",
    secondaryText: "#000000",
    primaryBackground: "#ffffff",
    secondaryBackground: "#000000",
  },
}: MultichainProviderProps) => {
  return (
    <EthDappContextProvider config={ethConfig} contracts={ethContracts}>
      {/* <SolDappContextProvider {...solConfig}> */}
        <ThemeContextProvider Theme={theme}>{children}</ThemeContextProvider>
      {/* </SolDappContextProvider> */}
    </EthDappContextProvider>
  );
};
