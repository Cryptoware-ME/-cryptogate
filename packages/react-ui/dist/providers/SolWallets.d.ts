import React, { ReactNode } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, SolletExtensionWalletAdapter } from "@solana/wallet-adapter-wallets";
export interface SolWalletsContextProviderProps {
    children?: ReactNode;
    network: WalletAdapterNetwork;
}
export interface SolWallets {
    Phantom: PhantomWalletAdapter;
    Slope: SlopeWalletAdapter;
    Solflare: SolflareWalletAdapter;
    Sollet: SolletExtensionWalletAdapter;
}
export declare const SolWalletsContext: React.Context<SolWallets>;
export declare const SolWalletsContextProvider: ({ network, children }: SolWalletsContextProviderProps) => JSX.Element;
