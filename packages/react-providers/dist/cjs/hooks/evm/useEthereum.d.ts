/**
 * @deprecated This hook is deprecated and has been replaced by useEvm()
 */
export declare const useEthereum: () => {
    account: `0x${string}` | undefined;
    ethBalance: string | undefined;
    ens: string | undefined;
    provider: import("@ethersproject/providers").JsonRpcProvider | import("@ethersproject/providers").Web3Provider | undefined;
    active: boolean;
    network: import("../../providers/network/provider").NetworkDataType;
    activateBraveWallet: () => Promise<void>;
    activateMetamaskWallet: () => Promise<void>;
    activateCoinbaseWallet: () => Promise<void>;
    activateWalletConnect: () => Promise<void>;
    activateShabakatWallet: () => Promise<void>;
    deactivate: () => void;
    errors: string[];
};
