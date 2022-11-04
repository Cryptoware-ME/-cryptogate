import React from "react";
import { EthConfig } from "../models/types";
import { ConfigProvider } from "./config";
import { ErrorsProvider } from "./errors/provider";
import { EthNodeProvider } from "./ethNode";
import { WindowProvider } from "./window";

export interface MultiChainProviderConfigProps {
  ethConfig: EthConfig;
}

export interface MultiChainProviderProps {
  children: React.ReactNode;
  config: MultiChainProviderConfigProps;
}

export const MultiChainProvider = ({
  config,
  children,
}: MultiChainProviderProps) => {
  return (
    <WindowProvider>
      <ConfigProvider config={config}>
        <ErrorsProvider>
          <EthNodeProvider readOnlyUrls={config.ethConfig.readOnlyUrls}>
            {children}
          </EthNodeProvider>
        </ErrorsProvider>
      </ConfigProvider>
    </WindowProvider>
  );
};
