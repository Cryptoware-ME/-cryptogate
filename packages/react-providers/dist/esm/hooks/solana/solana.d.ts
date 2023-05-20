/// <reference types="@solana/web3.js" />
export declare const useSolana: () => {
    publicKey: string | import("@solana/web3.js").PublicKey | null;
    connected: boolean;
    wallet: import("@solana/wallet-adapter-react").WalletContextState;
    solBalance: number;
    connection: import("@solana/web3.js").Connection;
};
