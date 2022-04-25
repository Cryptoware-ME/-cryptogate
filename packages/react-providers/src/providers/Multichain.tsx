import { Chain, NodeUrls } from "@usedapp/core";
import React, { ReactNode } from "react";
import { EthContractConfig } from "./EthContracts";
import { EthDappContextProvider } from "./EthDapp";
import { SolDappContextProvider, SolDappContextProviderProps } from "./SolDapp";

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
}

export const MultichainProvider = ({
  ethConfig,
  solConfig,
  ethContracts,
  children,
}: MultichainProviderProps) => {
  console.log("#: ", ethContracts);

  return (
    <EthDappContextProvider config={ethConfig} contracts={ethContracts}>
      <SolDappContextProvider {...solConfig}>{children}</SolDappContextProvider>
    </EthDappContextProvider>
  );
};
