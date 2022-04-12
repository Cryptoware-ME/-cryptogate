import React, { useEffect, useState } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { SolWalletsContext, SolWalletsContextProvider } from "./SolWallets";

export const SolDappContext = React.createContext();

export const SolDappContextProvider = ({ config, children }) => {
  const [Config, setConfig] = useState({});

  const network =
    config.env === "development"
      ? WalletAdapterNetwork.Devnet
      : config.env === "staging"
      ? WalletAdapterNetwork.Testnet
      : WalletAdapterNetwork.Mainnet;

  useEffect(() => {
    setConfig({ lamportsPerSol: 1000000000, ...config });
  }, [config]);

  return (
    <SolDappContext.Provider value={{ setSolConfig: setConfig }}>
      <ConnectionProvider endpoint={clusterApiUrl(network)}>
        <SolWalletsContextProvider config={network}>
          <SolWalletsContext.Consumer>
            {({ Wallets }) => (
              <WalletProvider
                wallets={Wallets}
                autoConnect={Config.autoConnect || false}
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
