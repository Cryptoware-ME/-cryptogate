import React, { ReactNode, useCallback, useEffect, useState } from "react";
import {
  DAppProvider,
  Config as dappConfig,
  NodeUrls,
  Chain,
} from "@usedapp/core";
import { EthContractConfig, EthContractsContextProvider } from "./EthContracts";
import { EthWalletsContextProvider } from "./EthWallets";

export const defaultConfig = {
  pollingInterval: 1000,
  notifications: {
    checkInterval: 1000,
    expirationPeriod: 10000,
  },
  autoConnect: false,
};

export interface EthDappContextProviderProps {
  children?: ReactNode;
  contracts: EthContractConfig[];
  config: {
    readOnlyUrls: NodeUrls;
    appName: string;
    appEmail: string;
    appUrl: string;
    appLogo: string;
    pollingInterval: number;
    networks: (Chain | undefined)[];
  };
}

export interface EthConfigSetter {
  setEthConfig: (conf: {
    readOnlyUrls: NodeUrls;
    appName: string;
    appEmail: string;
    appUrl: string;
    appLogo: string;
    pollingInterval: number;
    networks: (Chain | undefined)[];
  }) => void;
}

export const EthDappContext = React.createContext({} as EthConfigSetter);

export const EthDappContextProvider = ({
  config,
  contracts,
  children,
}: EthDappContextProviderProps) => {
  const [Config, setConfig] = useState(
    {} as {
      readOnlyUrls: NodeUrls;
      appName: string;
      appEmail: string;
      appUrl: string;
      appLogo: string;
      pollingInterval: number;
      networks: (Chain | undefined)[];
    }
  );
  const [DappConfig, setDappConfig] = useState({} as dappConfig);
  const [Contracts, setContracts] = useState({} as EthContractConfig[]);

  const concatConfig = useCallback(
    (conf: {
      readOnlyUrls: NodeUrls;
      appName: string;
      appEmail: string;
      appUrl: string;
      appLogo: string;
      pollingInterval: number;
      networks: (Chain | undefined)[];
    }) => {
      if (conf) {
        setConfig({
          ...defaultConfig,
          ...Config,
          ...conf,
        });
      }
    },
    [Config]
  );

  useEffect(() => {
    if (config) {
      setConfig({
        ...defaultConfig,
        ...config,
      });
    }
  }, [config]);

  useEffect(() => {
    if (Config) {
      setDappConfig(Config as dappConfig);
    }
  }, [Config]);

  useEffect(() => {
    // ! .length returns undefined
    // if (contracts && contracts.length > 0) {
    //   setContracts(contracts);
    // }

    console.log("Contracts: ", contracts);
    console.log("Length: ",  Object.keys(contracts).length > 0);
    
    if (contracts && Object.keys(contracts).length > 0) {
      setContracts(contracts);
    }
  }, [contracts]);

  return (
    <DAppProvider config={DappConfig}>
      <EthDappContext.Provider value={{ setEthConfig: concatConfig }}>
        <EthWalletsContextProvider config={Config}>
          <EthContractsContextProvider contracts={Contracts}>
            {children}
          </EthContractsContextProvider>
        </EthWalletsContextProvider>
      </EthDappContext.Provider>
    </DAppProvider>
  );
};
