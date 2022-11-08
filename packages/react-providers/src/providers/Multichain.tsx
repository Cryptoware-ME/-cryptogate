import React from "react";
import { EthConfig } from "../models/types";
import { ConfigProvider } from "./config";
import { ErrorsBagProvider } from "./errors/provider";
import { EvmNodeProvider } from "./evmNode";
import { WindowProvider } from "./window";
import { WalletProvider } from "./wallet";

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
        <ErrorsBagProvider>
          <EvmNodeProvider readOnlyUrls={config.ethConfig.readOnlyUrls}>
            <WalletProvider>{children}</WalletProvider>
          </EvmNodeProvider>
        </ErrorsBagProvider>
      </ConfigProvider>
    </WindowProvider>
  );
};
