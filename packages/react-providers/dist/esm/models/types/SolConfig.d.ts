import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { SolWallets } from "../../constants/wallets";
export declare type SolConfig = {
    network: WalletAdapterNetwork;
    wallets: SolWallets[];
    endpoint: string;
    autoConnect: boolean;
    lamportsPerSol: number;
};
