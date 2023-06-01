import React, { useEffect } from "react";
import { EthConfig, SolConfig, WalletsConfig } from "../models/types";
import { ConfigProvider } from "./config";
import { ErrorsBagProvider } from "./errors/provider";
import { EvmNodeProvider } from "./evmNode";
import { WindowProvider } from "./window";
import { WalletProvider } from "./wallet";
import { NetworkProvider } from "./network";
import { SolanaProvider } from "./solana";
import { defaultEthConfig } from "../constants/defaults";

export type MultiChainProviderConfigProps = {
  ethConfig?: EthConfig;
  solConfig?: SolConfig;
  walletsConfig?: WalletsConfig;
};

export interface MultiChainProviderProps {
  children: React.ReactNode;
  config: MultiChainProviderConfigProps;
}

/**

Provider component for managing multiple blockchain configurations and related providers.
@component
@param {MultiChainProviderProps} props - The component props.
@param {React.ReactNode} props.children - The child components.
@param {MultiChainProviderConfigProps} props.config - The configuration for the multi-chain provider.
@returns {JSX.Element} The rendered component.
@example
<MultiChainProvider config={config}>
<App />
</MultiChainProvider>
*/
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
                <WalletProvider>{children}</WalletProvider>
              </SolanaProvider>
            </EvmNodeProvider>
          </NetworkProvider>
        </ErrorsBagProvider>
      </ConfigProvider>
    </WindowProvider>
  );
};
