
import { mainnetArbsanUrl } from "../../constants/chains";
import { getAddressLink, getTransactionLink } from "../../helpers";
import { Chain, EvmAddress } from "../types";

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
export const Arbitrum: Chain = {
    chainId: 42161,
    chainName: 'Arbitrum',
    isTestChain: false,
    isLocalChain: false,
    blockExplorerUrl: mainnetArbsanUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(mainnetArbsanUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(mainnetArbsanUrl, txnId)
}