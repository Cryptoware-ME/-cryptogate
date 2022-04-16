import React, { ReactNode } from "react";
import { EthContractConfig } from "./EthContracts";
import { EthDappContextProvider } from "./EthDapp";
import { EthWalletsContextProviderProps } from "./EthWallets";
import { SolDappContextProvider } from "./SolDapp";

export interface MultichainProviderProps {
  children?: ReactNode,
  ethConfig: EthWalletsContextProviderProps,
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