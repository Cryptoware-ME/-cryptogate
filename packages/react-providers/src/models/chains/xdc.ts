
import { xinfinExplorerUrl, apothemExplorerUrl } from "../../constants/chains";
import { getAddressLink, getTransactionLink } from "../../helpers";
import { Chain, EvmAddress } from "../types";

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
export const XinFin: Chain = {
    chainId: 50,
    chainName: 'XinFin',
    isTestChain: false,
    isLocalChain: false,
    blockExplorerUrl: xinfinExplorerUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(xinfinExplorerUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(xinfinExplorerUrl, txnId)
}

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
export const Apothem: Chain = {
    chainId: 51,
    chainName: 'Apothem',
    isTestChain: true,
    isLocalChain: false,
    blockExplorerUrl: apothemExplorerUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(apothemExplorerUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(apothemExplorerUrl, txnId)
}