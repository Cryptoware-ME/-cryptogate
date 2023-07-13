import { rskExplorer, rskTestnetExplorer } from "../../constants/chains";
import { getAddressLink, getTransactionLink } from "../../helpers";
import { Chain, EvmAddress } from "../types";

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
 */
export const RSKMainnet: Chain = {
  chainId: 30,
  chainName: "RSK Mainnet",
  isTestChain: false,
  isLocalChain: false,
  blockExplorerUrl: rskExplorer,
  getExplorerAddressLink: (address: EvmAddress) =>
    getAddressLink(rskExplorer, address),
  getExplorerTransactionLink: (txnId: string) =>
    getTransactionLink(rskExplorer, txnId),
};

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
 */
export const RSKTestnet: Chain = {
  chainId: 21,
  chainName: "RSK Testnet",
  isTestChain: true,
  isLocalChain: false,
  blockExplorerUrl: rskTestnetExplorer,
  getExplorerAddressLink: (address: EvmAddress) =>
    getAddressLink(rskTestnetExplorer, address),
  getExplorerTransactionLink: (txnId: string) =>
    getTransactionLink(rskTestnetExplorer, txnId),
};
