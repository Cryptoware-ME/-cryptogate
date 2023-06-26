/// <reference types="@solana/web3.js" />
export declare const useSolana: () => {
    publicKey: string | import("@solana/web3.js").PublicKey | null;
    solBalance: number;
    connection: import("@solana/web3.js").Connection;
    connected: boolean;
    disconnect: () => Promise<void>;
    select: (walletName: import("@solana/wallet-adapter-base").WalletName<string> | null) => void;
    wallet: import("@solana/wallet-adapter-react").WalletContextState;
};
