/// <reference types="@solana/web3.js" />
export declare const useSolana: () => {
    wallets: import("../providers/SolWallets").SolWallets;
    setSolConfig: (conf: import("../providers/SolDapp").SolDappContextProviderProps) => void;
    connection: import("@solana/web3.js").Connection;
    autoConnect: boolean;
    wallet: import("@solana/wallet-adapter-react").Wallet | null;
    publicKey: import("@solana/web3.js").PublicKey | null;
    connecting: boolean;
    connected: boolean;
    disconnecting: boolean;
    select(walletName: import("@solana/wallet-adapter-base").WalletName): void;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    sendTransaction(transaction: import("@solana/web3.js").Transaction, connection: import("@solana/web3.js").Connection, options?: import("@solana/wallet-adapter-base").SendTransactionOptions | undefined): Promise<string>;
    signTransaction: ((transaction: import("@solana/web3.js").Transaction) => Promise<import("@solana/web3.js").Transaction>) | undefined;
    signAllTransactions: ((transaction: import("@solana/web3.js").Transaction[]) => Promise<import("@solana/web3.js").Transaction[]>) | undefined;
    signMessage: ((message: Uint8Array) => Promise<Uint8Array>) | undefined;
};
