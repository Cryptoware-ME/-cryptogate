import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork, WalletError } from "@solana/wallet-adapter-base";
import { SolWallets, SolWalletsContext, SolWalletsContextProvider } from "./SolWallets";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

export const solDefaultConfig = {
  lamportsPerSol: 1000000000
}

export interface SolDappContextProvider {
  children?: ReactNode,
  config: {
    env: string,
    autoConnect: boolean
    lamportsPerSol?: number
  }
}

export interface SolConfigSetter {
  setSolConfig: (conf: SolDappContextProvider) => void
}

export const SolDappContext = React.createContext({} as SolConfigSetter);

export const SolDappContextProvider = ({ config, children }: SolDappContextProvider) => {
  const [Config, setConfig] = useState({} as SolDappContextProvider);
  const [network, setNetwork] = useState(WalletAdapterNetwork.Devnet);

  const concatConfig =
    useCallback((conf: SolDappContextProvider) => {
      setConfig({
        config: {
          ...Config,
          ...solDefaultConfig,
          ...conf.config
        }
      });
    }, [Config]);

  const onError = useCallback(
    (error: WalletError) => {
      throw error;
    },
    []
  );

  const mapWallets = useCallback(
    (wallets: SolWallets) => ([
      wallets.Phantom,
      wallets.Slope,
      wallets.Solflare,
      wallets.Sollet
    ]),
    []
  )

  useEffect(() => {
    setConfig({ config: { ...solDefaultConfig, ...config } });
  }, [config]);

  useEffect(() => {
    setNetwork(
      Config.config.env === "mainnet"
      ? WalletAdapterNetwork.Mainnet
      : config.env === "staging"
      ? WalletAdapterNetwork.Testnet
      : WalletAdapterNetwork.Devnet
    );
  }, [Config]);

  return (
    <SolDappContext.Provider value={{ setSolConfig: concatConfig }}>
      <ConnectionProvider endpoint={clusterApiUrl(network)}>
        <SolWalletsContextProvider network={network}>
          <SolWalletsContext.Consumer>
            {(Wallets: SolWallets) => (
              <WalletProvider
                wallets={mapWallets(Wallets)}
                autoConnect={Config.config.autoConnect || false}
                onError={onError}
              >
                {children}
              </WalletProvider>
            )}
          </SolWalletsContext.Consumer>
        </SolWalletsContextProvider>
      </ConnectionProvider>
    </SolDappContext.Provider>
  );
};
