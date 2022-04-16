import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { DAppProvider, Config as dappConfig } from "@usedapp/core";
import { EthContractConfig, EthContractsContextProvider } from "./EthContracts";
import { EthWalletsContextProvider, EthWalletsContextProviderProps } from "./EthWallets";

export const defaultConfig = {
  pollingInterval: 1000,
  notifications: {
    checkInterval: 1000,
    expirationPeriod: 10000,
  },
  autoConnect: false
}

export interface EthDappContextProviderProps {
  children?: ReactNode;
  contracts: EthContractConfig[],
  config: EthWalletsContextProviderProps
}

export interface EthConfigSetter {
  setEthConfig: (conf: EthWalletsContextProviderProps) => void
}

export const EthDappContext = React.createContext({} as EthConfigSetter);

export const EthDappContextProvider = ({ config, contracts, children }: EthDappContextProviderProps) => {

  const [Config, setConfig] = useState({} as EthWalletsContextProviderProps);
  const [DappConfig, setDappConfig] = useState({} as dappConfig);
  const [Contracts, setContracts] = useState({} as EthContractConfig[]);

  const concatConfig = 
    useCallback((conf: EthWalletsContextProviderProps) => {
      setConfig({
        ...Config,
        ...defaultConfig,
        ...conf.config
      });
    }, [Config]);

  useEffect(() => {
    setConfig({
      ...defaultConfig,
      ...config
    });
  }, [config]);

  useEffect(() => {
    setDappConfig(Config.config)
  }, [Config]);

  useEffect(() => {
    setContracts(contracts)
  }, [contracts]);

  return (
    <DAppProvider config={DappConfig}>
      <EthDappContext.Provider value={{ setEthConfig: concatConfig }}>
        <EthWalletsContextProvider config={Config.config}>
          <EthContractsContextProvider contracts={Contracts}>
            {children}
          </EthContractsContextProvider>
        </EthWalletsContextProvider>
      </EthDappContext.Provider>
    </DAppProvider>
  );
};