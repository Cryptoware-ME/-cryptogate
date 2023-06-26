import React from "react";
import { WalletProvider } from "@suiet/wallet-kit";
import { SuiConfig } from "../../models/types";

interface Props {
  children: React.ReactNode;
  suiConfig: SuiConfig | undefined;
}

export function SuiProvider({ children, suiConfig }: Props) {
  return (
    <WalletProvider autoConnect={suiConfig ? suiConfig.autoConnect : false}>
      {children}
    </WalletProvider>
  );
}
