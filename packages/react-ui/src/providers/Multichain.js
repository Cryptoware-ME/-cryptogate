import React from "react";
import { EthDappContextProvider } from "./EthDapp";
import { SolDappContextProvider } from "./SolDapp";

const MultichainProvider = ({ ethConfig, solConfig, children }) => {
  return (
    <EthDappContextProvider config={ethConfig}>
      <SolDappContextProvider config={solConfig}>
        {children}
      </SolDappContextProvider>
    </EthDappContextProvider>
  );
};

export default MultichainProvider;