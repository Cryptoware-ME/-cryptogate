export declare const useMultichain: () => {
    network: {
        update: (network: Partial<import("@usedapp/core").Network>) => void;
        reportError: (error: Error) => void;
        activate: (provider: import("@ethersproject/providers").JsonRpcProvider | import("@ethersproject/providers").ExternalProvider) => Promise<void>;
        deactivate: () => void;
        network: import("@usedapp/core").Network;
        activateBrowserWallet: () => void;
        isLoading: boolean;
    };
    account: string;
    ethereum: {
        wallets: import("..").EthWallets;
        contracts: import("..").EthContracts;
        getContract: (name: string) => {
            address?: string | undefined;
            interface?: import("@ethersproject/abi").Interface | undefined;
            contract?: import("@ethersproject/contracts").Contract | undefined;
        };
        getEthBalance: typeof import("@usedapp/core").useEtherBalance;
        setEthConfig: (conf: {
            readOnlyUrls: import("@usedapp/core").NodeUrls;
            appName: string;
            appEmail: string;
            appUrl: string;
            appLogo: string;
            pollingInterval: number;
            networks: (import("@usedapp/core").Chain | undefined)[];
        }) => void;
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
};
