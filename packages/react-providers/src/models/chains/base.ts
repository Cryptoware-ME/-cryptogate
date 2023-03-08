
import { goerliBasescanUrl } from "../../constants/chains";
import { getAddressLink, getTransactionLink } from "../../helpers";
import { Chain, EvmAddress } from "../types";

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
export const BaseGoerli: Chain = {
    chainId: 84531,
    chainName: 'BaseGoerli',
    isTestChain: true,
    isLocalChain: false,
    blockExplorerUrl: goerliBasescanUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(goerliBasescanUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(goerliBasescanUrl, txnId)
}