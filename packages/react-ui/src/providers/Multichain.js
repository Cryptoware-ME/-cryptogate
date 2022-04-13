import React from "react";
import { EthDappContextProvider } from "./EthDapp";
import { SolDappContextProvider } from "./SolDapp";

const MultichainProvider = ({ ethConfig, solConfig, ethContracts, children }) => {
  return (
    <EthDappContextProvider config={ethConfig} contracts={ethContracts}>
      <SolDappContextProvider config={solConfig}>
        {children}
      </SolDappContextProvider>
    </EthDappContextProvider>
  );
};

export default MultichainProvider;