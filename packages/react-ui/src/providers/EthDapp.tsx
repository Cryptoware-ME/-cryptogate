import React, { useEffect, useState } from "react";
import { DAppProvider, Config as dConfig } from "@usedapp/core";
import { EthContractsContextProvider } from "./EthContracts";
import { EthWalletsContextProvider, EthWalletsContextProviderProps } from "./EthWallets";

export const EthDappContext = React.createContext({});

export const EthDappContextProvider = ({ config, contracts, children }) => {

  const [Config, setConfig] = useState({} as EthWalletsContextProviderProps);
  const [DappConfig, setDappConfig] = useState({} as dConfig)

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
    <DAppProvider config={DappConfig}>
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