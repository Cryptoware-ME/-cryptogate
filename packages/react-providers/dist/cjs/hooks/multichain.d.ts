/// <reference types="@solana/web3.js" />
export declare const useMultichain: () => {
    publicKey: import("@solana/web3.js").PublicKey | null;
    connected: boolean;
    wallet: import("@solana/wallet-adapter-react").WalletContextState;
    solBalance: number;
    connection: import("@solana/web3.js").Connection;
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
    deactivate: () => void;
    errors: string[];
};
