import React from "react";
import { EthConfig, SolConfig, WalletsConfig } from "../models/types";
import { ConfigProvider } from "./config";
import { ErrorsBagProvider } from "./errors/provider";
import { EvmNodeProvider } from "./evmNode";
import { WindowProvider } from "./window";
import { WalletProvider } from "./wallet";
import { NetworkProvider } from "./network";
import { SolanaProvider } from "./solana";

export type MultiChainProviderConfigProps = {
  ethConfig: EthConfig;
  solConfig?: SolConfig;
  walletsConfig?: WalletsConfig;
};

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
          <NetworkProvider config={config}>
            <EvmNodeProvider readOnlyUrls={config.ethConfig.readOnlyUrls}>
              <SolanaProvider solConfig={config.solConfig}>
                <WalletProvider>{children}</WalletProvider>
              </SolanaProvider>
            </EvmNodeProvider>
          </NetworkProvider>
        </ErrorsBagProvider>
      </ConfigProvider>
    </WindowProvider>
  );
};
