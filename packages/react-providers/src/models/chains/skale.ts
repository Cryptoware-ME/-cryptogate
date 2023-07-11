import { skaleTestnetExplorerUrl } from "../../constants/chains";
import { getAddressLink, getTransactionLink } from "../../helpers";
import { Chain, EvmAddress } from "../types";

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
 */
export const SkaleTestnet: Chain = {
  chainId: 1351057110,
  chainName: "SkaleTestnet",
  isTestChain: true,
  isLocalChain: false,
  blockExplorerUrl: skaleTestnetExplorerUrl,
  getExplorerAddressLink: (address: EvmAddress) =>
    getAddressLink(skaleTestnetExplorerUrl, address),
  getExplorerTransactionLink: (txnId: string) =>
    getTransactionLink(skaleTestnetExplorerUrl, txnId),
};
