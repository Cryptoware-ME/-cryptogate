
import { polygonScanUrl, mumbaiPolygonScanUrl } from "../../constants/chains";
import { getAddressLink, getTransactionLink } from "../../helpers";
import { Chain, EvmAddress } from "../types";

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
export const Polygon: Chain = {
    chainId: 137,
    chainName: 'Polygon Mainnet',
    isTestChain: false,
    isLocalChain: false,
    blockExplorerUrl: polygonScanUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(polygonScanUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(polygonScanUrl, txnId)
}

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
export const Mumbai: Chain = {
    chainId: 80001,
    chainName: 'Mumbai',
    isTestChain: true,
    isLocalChain: false,
    blockExplorerUrl: mumbaiPolygonScanUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(mumbaiPolygonScanUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(mumbaiPolygonScanUrl, txnId)
}