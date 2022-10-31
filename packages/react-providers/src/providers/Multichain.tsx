import React from "react";
import { EthConfig } from "../models/types";
import { ConfigProvider } from "./config";
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
        <EthNodeProvider>{children}</EthNodeProvider>
      </ConfigProvider>
    </WindowProvider>
  );
};
