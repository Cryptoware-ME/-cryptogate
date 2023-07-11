import * as ethers from "ethers";
/**
 * @public
 */
export declare const useEvm: () => {
    account: `0x${string}` | undefined;
    ethBalance: string | undefined;
    ens: string | undefined;
    provider: ethers.ethers.providers.JsonRpcProvider | ethers.ethers.providers.Web3Provider | undefined;
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
