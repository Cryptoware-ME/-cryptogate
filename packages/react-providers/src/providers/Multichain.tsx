import React, { useEffect } from "react";
import {
  EthConfig,
  SolConfig,
  SuiConfig,
  WalletsConfig,
} from "../models/types";
import { ConfigProvider } from "./config";
import { ErrorsBagProvider } from "./errors/provider";
import { EvmNodeProvider } from "./evmNode";
import { WindowProvider } from "./window";
import { WalletProvider } from "./wallet";
import { NetworkProvider } from "./network";
import { SolanaProvider } from "./solana";
import { defaultEthConfig } from "../constants/defaults";
import { SuiProvider } from "./sui";

export type MultiChainProviderConfigProps = {
  ethConfig?: EthConfig;
  solConfig?: SolConfig;
  suiConfig?: SuiConfig;
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
  if (!config) {
    console.error("@Cryptogate: Missing config param in MultiChainProvider");
    return <>{children}</>;
  }
  if (!config.ethConfig)
    console.warn(
      "@Cryptogate: Missing ethConfig in config. ethConfig is required for EVM providers and hooks"
    );
  if (!config.solConfig)
    console.warn(
      "@Cryptogate: Missing solConfig in config. solConfig is required for Solana providers and hooks"
    );
  if (!config.suiConfig)
    console.warn(
      "@Cryptogate: Missing suiConfig in config. suiConfig is required for Sui providers and hooks"
    );

  useEffect(() => {
    if (config.ethConfig)
      config.ethConfig = { ...defaultEthConfig, ...config.ethConfig };
  }, [config]);

  return (
    <WindowProvider>
      <ConfigProvider config={config}>
        <ErrorsBagProvider>
          <NetworkProvider config={config}>
            <EvmNodeProvider readOnlyUrls={config.ethConfig?.readOnlyUrls}>
              <SolanaProvider solConfig={config.solConfig}>
                <SuiProvider suiConfig={config.suiConfig}>
                  <WalletProvider>{children}</WalletProvider>
                </SuiProvider>
              </SolanaProvider>
            </EvmNodeProvider>
          </NetworkProvider>
        </ErrorsBagProvider>
      </ConfigProvider>
    </WindowProvider>
  );
};
