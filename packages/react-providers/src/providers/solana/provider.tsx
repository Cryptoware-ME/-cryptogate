import React from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { SolConfig } from "../../models/types";
import {
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
} from "@solana/wallet-adapter-wallets";

interface Props {
  children: React.ReactNode;
  solConfig: SolConfig | undefined;
}

export function SolanaProvider({ children, solConfig }: Props) {
  const wallets = [
    new PhantomWalletAdapter(),
    new SlopeWalletAdapter(),
    new SolflareWalletAdapter({ network: solConfig?.network }),
    new SolletExtensionWalletAdapter({ network: solConfig?.network }),
  ];

  return (
    <>
      {solConfig ? (
        <ConnectionProvider endpoint={solConfig.endpoint}>
          <WalletProvider wallets={wallets} autoConnect={solConfig.autoConnect}>
            {children}
          </WalletProvider>
        </ConnectionProvider>
      ) : (
        { children }
      )}
    </>
  );
}
