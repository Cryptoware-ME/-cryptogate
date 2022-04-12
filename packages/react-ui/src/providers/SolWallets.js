import React, { useEffect, useState } from "react";
import {
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
} from "@solana/wallet-adapter-wallets";

export const SolWalletsContext = React.createContext();

export const SolWalletsContextProvider = ({ config, children }) => {
  const network = config.network;

  const [Wallets, setWallets] = useState({});

  useEffect(() => {
    if (network) {
      setWallets({
        Phantom: new PhantomWalletAdapter(),
        Slope: new SlopeWalletAdapter(),
        Solflare: new SolflareWalletAdapter({ network }),
        Sollet: new SolletExtensionWalletAdapter({ network }),
      });
    }
  }, [network]);

  return (
    <SolWalletsContext.Provider value={{ Wallets }}>
      {children}
    </SolWalletsContext.Provider>
  );
};