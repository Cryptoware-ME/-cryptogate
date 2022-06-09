import { Chain, NodeUrls } from "@usedapp/core";
import React, { ReactNode } from "react";
import { EthContractConfig } from "./EthContracts";
import { EthDappContextProvider } from "./EthDapp";
import { SolDappContextProvider, SolDappContextProviderProps } from "./SolDapp";
import { ThemeContextProvider, ThemeContextProviderProps } from "./Theme";

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
  theme: ThemeContextProviderProps;
}

export const MultichainProvider = ({
  ethConfig,
  solConfig,
  ethContracts,
  children,
  theme,
}: MultichainProviderProps) => {
  return (
    <EthDappContextProvider config={ethConfig} contracts={ethContracts}>
      <SolDappContextProvider {...solConfig}>
        <ThemeContextProvider
          primary={theme.primary}
          secondary={theme.secondary}
        >
          {children}
        </ThemeContextProvider>
      </SolDappContextProvider>
    </EthDappContextProvider>
  );
};
