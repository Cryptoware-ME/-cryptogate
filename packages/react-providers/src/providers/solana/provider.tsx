import React from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { SolConfig } from "../../models/types";
import {
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { defaultSolConfig } from "../../constants/defaults";

interface Props {
  children: React.ReactNode;
  solConfig: SolConfig | undefined;
}

export function SolanaProvider({ children, solConfig }: Props) {
  const wallets = solConfig
    ? [
        new SlopeWalletAdapter(),
        new SolflareWalletAdapter({ network: solConfig.network }),
        new SolletExtensionWalletAdapter({ network: solConfig.network }),
      ]
    : [];

  return (
    <ConnectionProvider
      endpoint={solConfig ? solConfig.endpoint : defaultSolConfig.endpoint}
    >
      <WalletProvider
        wallets={wallets}
        autoConnect={
          solConfig ? solConfig.autoConnect : defaultSolConfig.autoConnect
        }
      >
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
}
