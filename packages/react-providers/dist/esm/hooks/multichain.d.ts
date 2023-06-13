/// <reference types="@solana/web3.js" />
export declare const useMultichain: () => {
    publicKey: string | import("@solana/web3.js").PublicKey | null;
    solBalance: number;
    connection: import("@solana/web3.js").Connection;
    connected: boolean;
    disconnect: () => Promise<void>;
    select: (walletName: import("@solana/wallet-adapter-base").WalletName<string> | null) => void;
    wallet: import("@solana/wallet-adapter-react").WalletContextState;
    account: `0x${string}` | undefined;
    ethBalance: string | undefined;
    ens: string | undefined;
    provider: import("@ethersproject/providers").JsonRpcProvider | import("@ethersproject/providers").Web3Provider | undefined;
    active: boolean;
    network: import("../providers/network/provider").NetworkDataType;
    activateBraveWallet: () => Promise<void>;
    activateMetamaskWallet: () => Promise<void>;
    activateCoinbaseWallet: () => Promise<void>;
    activateWalletConnect: () => Promise<void>;
    activateShabakatWallet: () => Promise<void>;
    deactivate: () => void;
    errors: string[];
};
