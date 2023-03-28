
import { mainnetArbscanUrl } from "../../constants/chains";
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
    blockExplorerUrl: mainnetArbscanUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(mainnetArbscanUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(mainnetArbscanUrl, txnId)
}