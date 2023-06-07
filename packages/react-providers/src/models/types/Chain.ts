import { EvmAddress, SolAddress } from "./common";

/**
 * @public
 * @typedef {object} Chain
 */
export type Chain = {
  chainId: number;
  chainName: string;
  isTestChain: boolean;
  isLocalChain: boolean;
  blockExplorerUrl?: string;
  getExplorerAddressLink: (address: EvmAddress) => string;
  getExplorerTransactionLink: (txnId: string) => string;
};

/**
 * @public
 * @typedef {object} Chain
 */
export type SolChain = {
  chainName: string;
  isTestChain: boolean;
  isLocalChain: boolean;
  blockExplorerUrl?: string;
  getExplorerAddressLink: (address: SolAddress) => string;
  getExplorerTransactionLink: (txnId: string) => string;
};
