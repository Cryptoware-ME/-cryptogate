import React, { useEffect, useState } from "react";
import { DAppProvider } from "@usedapp/core";
import { EthContractsContextProvider } from "./EthContracts";
import { EthWalletsContextProvider } from "./EthWallets";

export const EthDappContext = React.createContext();

export const EthDappContextProvider = ({ config, contracts, children }) => {
  const [Config, setConfig] = useState({});

  useEffect(() => {
    setConfig({
      pollingInterval: 1000,
      notifications: {
        checkInterval: 1000,
        expirationPeriod: 10000,
      },
      autoConnect: false,
      ...config,
    });
  }, [config]);

  return (
    <DAppProvider config={Config}>
      <EthDappContext.Provider value={{ setEthConfig: setConfig }}>
        <EthWalletsContextProvider config={Config}>
          <EthContractsContextProvider config={{ contracts: contracts }}>
            {children}
          </EthContractsContextProvider>
        </EthWalletsContextProvider>
      </EthDappContext.Provider>
    </DAppProvider>
  );
};