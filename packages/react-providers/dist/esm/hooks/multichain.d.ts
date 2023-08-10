/// <reference types="@solana/web3.js" />
export declare const useMultichain: () => {
    evm: {
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
    solana: {
        publicKey: string | import("@solana/web3.js").PublicKey | null;
        solBalance: number;
        connection: import("@solana/web3.js").Connection;
        connected: boolean;
        disconnect: () => Promise<void>;
        select: (walletName: import("@solana/wallet-adapter-base").WalletName<string> | null) => void;
        wallet: import("@solana/wallet-adapter-react").WalletContextState;
    };
    sui: {
        suiBalance: bigint | undefined;
        useAccountBalance: typeof import("@suiet/wallet-kit").useAccountBalance;
        useCoinBalance: typeof import("@suiet/wallet-kit").useCoinBalance;
        useChain: typeof import("@suiet/wallet-kit").useChain;
        useSuiProvider: typeof import("@suiet/wallet-kit").useSuiProvider;
        configuredWallets: import("@suiet/wallet-kit").IWallet[];
        detectedWallets: import("@suiet/wallet-kit").IWallet[];
        allAvailableWallets: import("@suiet/wallet-kit").IWallet[];
        chains: import("@suiet/wallet-kit").Chain[];
        chain: import("@suiet/wallet-kit").Chain | undefined;
        name: string | undefined;
        adapter: import("@suiet/wallet-kit").IWalletAdapter | undefined;
        account: import("@wallet-standard/base").WalletAccount | undefined;
        address: string | undefined;
        connecting: boolean;
        connected: boolean;
        status: "disconnected" | "connected" | "connecting";
        select: (walletName: string) => Promise<void>;
        disconnect: () => Promise<void>;
        getAccounts: () => readonly import("@wallet-standard/base").WalletAccount[];
        signAndExecuteTransactionBlock(input: Omit<import("@mysten/wallet-standard").SuiSignAndExecuteTransactionBlockInput, "chain" | "account">): Promise<import("@mysten/wallet-standard").SuiSignAndExecuteTransactionBlockOutput>;
        signTransactionBlock(input: Omit<import("@mysten/wallet-standard").SuiSignTransactionBlockInput, "chain" | "account">): Promise<import("@mysten/wallet-standard").SuiSignTransactionBlockOutput>;
        signMessage(input: Omit<import("@mysten/wallet-standard").SuiSignMessageInput, "account">): Promise<import("@mysten/wallet-standard").SuiSignMessageOutput>;
        verifySignedMessage(input: import("@mysten/wallet-standard").SuiSignMessageOutput, publicKey: Uint8Array): Promise<boolean>;
        on: <E extends import("@suiet/wallet-kit").WalletEvent>(event: E, listener: import("@suiet/wallet-kit").WalletEventListeners[E]) => () => void;
    };
};
