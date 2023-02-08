/// <reference types="@solana/web3.js" />
export declare const useSolana: () => {
    autoConnect: boolean;
    wallets: import("@solana/wallet-adapter-react").Wallet[];
    wallet: import("@solana/wallet-adapter-react").Wallet | null;
    publicKey: import("@solana/web3.js").PublicKey | null;
    connecting: boolean;
    connected: boolean;
    disconnecting: boolean;
    select: (walletName: import("@solana/wallet-adapter-base").WalletName<string> | null) => void;
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
    solBalance: number;
    sendTransaction: (transaction: import("@solana/web3.js").Transaction | import("@solana/web3.js").VersionedTransaction, connection: import("@solana/web3.js").Connection, options?: import("@solana/wallet-adapter-base").SendTransactionOptions | undefined) => Promise<string>;
    signTransaction: (<T extends import("@solana/web3.js").Transaction | import("@solana/web3.js").VersionedTransaction>(transaction: T) => Promise<T>) | undefined;
    signAllTransactions: (<T_1 extends import("@solana/web3.js").Transaction | import("@solana/web3.js").VersionedTransaction>(transactions: T_1[]) => Promise<T_1[]>) | undefined;
    signMessage: ((message: Uint8Array) => Promise<Uint8Array>) | undefined;
    connection: import("@solana/web3.js").Connection;
};
