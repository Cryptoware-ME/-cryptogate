import { mainnetSolscanUrl } from "../../constants/chains";
import { getAddressLink, getTransactionLink } from "../../helpers";
import { SolAddress, SolChain } from "../types";

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
 */
export const SolanaMainnet: SolChain = {
  chainName: "SolanaMainnet",
  isTestChain: false,
  isLocalChain: false,
  blockExplorerUrl: mainnetSolscanUrl,
  getExplorerAddressLink: (address: SolAddress) =>
    getAddressLink(mainnetSolscanUrl, address),
  getExplorerTransactionLink: (txnId: string) =>
    getTransactionLink(mainnetSolscanUrl, txnId),
};

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
 */
export const SolanaTestnet: SolChain = {
  chainName: "SolanaTestnet",
  isTestChain: true,
  isLocalChain: false,
  blockExplorerUrl: mainnetSolscanUrl,
  getExplorerAddressLink: (address: SolAddress) =>
    getAddressLink(mainnetSolscanUrl, address) + "?cluster=testnet",
  getExplorerTransactionLink: (txnId: string) =>
    getTransactionLink(mainnetSolscanUrl, txnId) + "?cluster=testnet",
};

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
 */
export const SolanaDevnet: SolChain = {
  chainName: "SolanaDevnet",
  isTestChain: true,
  isLocalChain: false,
  blockExplorerUrl: mainnetSolscanUrl,
  getExplorerAddressLink: (address: SolAddress) =>
    getAddressLink(mainnetSolscanUrl, address) + "?cluster=devnet",
  getExplorerTransactionLink: (txnId: string) =>
    getTransactionLink(mainnetSolscanUrl, txnId) + "?cluster=devnet",
};
