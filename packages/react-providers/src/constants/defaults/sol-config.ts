import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";

export const defaultSolConfig = {
  network: WalletAdapterNetwork.Mainnet,
  endpoint: clusterApiUrl(WalletAdapterNetwork.Mainnet),
  autoConnect: false,
  lamportsPerSol: 1000000000,
};
