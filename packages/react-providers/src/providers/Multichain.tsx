import React from "react";
import { EthConfig, WalletsConfig } from "../models/types";
import { ConfigProvider } from "./config";
import { ErrorsBagProvider } from "./errors/provider";
import { EvmNodeProvider } from "./evmNode";
import { WindowProvider } from "./window";
import { WalletProvider } from "./wallet";
import { NetworkProvider } from "./network";

export type MultiChainProviderConfigProps = {
  ethConfig: EthConfig;
  walletsConfig?: WalletsConfig;
};

export type MultiChainProviderProps = {
  children: React.ReactNode;
  config: MultiChainProviderConfigProps;
};

export const MultiChainProvider = ({
  config,
  children,
}: MultiChainProviderProps) => {
  return (
    <WindowProvider>
      <ConfigProvider config={config}>
        <ErrorsBagProvider>
          <NetworkProvider config={config}>
            <EvmNodeProvider readOnlyUrls={config.ethConfig.readOnlyUrls}>
              <WalletProvider>{children}</WalletProvider>
            </EvmNodeProvider>
          </NetworkProvider>
        </ErrorsBagProvider>
      </ConfigProvider>
    </WindowProvider>
  );
};
