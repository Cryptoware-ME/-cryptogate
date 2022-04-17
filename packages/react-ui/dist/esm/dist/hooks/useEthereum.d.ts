export declare const useEthereum: () => {
    wallets: import("../providers").EthWallets;
    getContract: (name: string) => {
        address?: string | undefined;
        interface?: import("@ethersproject/abi").Interface | undefined;
        contract?: import("@ethersproject/contracts").Contract | undefined;
    };
    setEthConfig: (conf: import("../providers").EthWalletsContextProviderProps) => void;
    activate: (provider: import("@ethersproject/providers").JsonRpcProvider | import("@ethersproject/providers").ExternalProvider | {
        getProvider: () => any;
        activate: () => Promise<any>;
    }) => Promise<void>;
    setError: (error: Error) => void;
    deactivate: () => void;
    connector: undefined;
    chainId?: number | undefined;
    account?: string | null | undefined;
    error?: Error | undefined;
    library?: import("@ethersproject/providers").JsonRpcProvider | undefined;
    active: boolean;
    activateBrowserWallet: () => void;
    isLoading: boolean;
};
