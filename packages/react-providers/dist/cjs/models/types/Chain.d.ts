import { EvmAddress } from "./common";
/**
 * @public
 * @typedef {object} Chain
 */
export declare type Chain = {
    chainId: number;
    chainName: string;
    isTestChain: boolean;
    isLocalChain: boolean;
    blockExplorerUrl?: string;
    getExplorerAddressLink: (address: EvmAddress) => string;
    getExplorerTransactionLink: (txnId: string) => string;
};
