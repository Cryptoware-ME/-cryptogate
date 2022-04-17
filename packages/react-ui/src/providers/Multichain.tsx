import { Chain, NodeUrls } from "@usedapp/core";
import React, { ReactNode } from "react";
import { EthContractConfig } from "./EthContracts";
import { EthDappContextProvider } from "./EthDapp";
import { SolDappContextProvider } from "./SolDapp";

export interface MultichainProviderProps {
  children?: ReactNode,
  ethConfig: {
    readOnlyUrls: NodeUrls,
    appName: string,
    appEmail: string,
    appUrl: string,
    appLogo: string,
    pollingInterval: number,
    networks: Chain[]
  },
  ethContracts: EthContractConfig[],
  solConfig: SolDappContextProvider
}

export const MultichainProvider = ({ ethConfig, solConfig, ethContracts, children }: MultichainProviderProps) => {
  return (
    <EthDappContextProvider config={ethConfig} contracts={ethContracts}>
      <SolDappContextProvider {...solConfig}>
        {children}
      </SolDappContextProvider>
    </EthDappContextProvider>
  );
};