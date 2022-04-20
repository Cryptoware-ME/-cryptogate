import { useEtherBalance } from '@usedapp/core';
export declare const useEthereum: () => {
    wallets: import("../providers").EthWallets;
    getContract: (name: string) => {
        address?: string | undefined;
        interface?: import("@ethersproject/abi").Interface | undefined;
        contract?: import("@ethersproject/contracts").Contract | undefined;
    };
    getEthBalance: typeof useEtherBalance;
    setEthConfig: (conf: {
        readOnlyUrls: import("@usedapp/core").NodeUrls;
        appName: string;
        appEmail: string;
        appUrl: string;
        appLogo: string;
        pollingInterval: number;
        networks: import("@usedapp/core").Chain[];
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
