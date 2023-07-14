import { bellatrixExplorerUrl, calypsoExplorer } from "../../constants/chains";
import { getAddressLink, getTransactionLink } from "../../helpers";
import { Chain, EvmAddress } from "../types";

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
 */
export const Bellatrix: Chain = {
  chainId: 1351057110,
  chainName: "Bellatrix",
  isTestChain: true,
  isLocalChain: false,
  blockExplorerUrl: bellatrixExplorerUrl,
  getExplorerAddressLink: (address: EvmAddress) =>
    getAddressLink(bellatrixExplorerUrl, address),
  getExplorerTransactionLink: (txnId: string) =>
    getTransactionLink(bellatrixExplorerUrl, txnId),
};

export const Calypso: Chain = {
  chainId: 344106930,
  chainName: "Calypso",
  isTestChain: true,
  isLocalChain: false,
  blockExplorerUrl: calypsoExplorer,
  getExplorerAddressLink: (address: EvmAddress) =>
    getAddressLink(calypsoExplorer, address),
  getExplorerTransactionLink: (txnId: string) =>
    getTransactionLink(calypsoExplorer, txnId),
};
