
import { polygonScanUrl, mumbaiPolygonScanUrl } from "../../constants/chains";
import { getAddressLink, getTransactionLink } from "../../helpers";
import { Chain, EvmAddress } from "../types";

export const Polygon: Chain = {
    chainId: 137,
    chainName: 'Polygon Mainnet',
    isTestChain: false,
    isLocalChain: false,
    nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18,
    },
    blockExplorerUrl: polygonScanUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(polygonScanUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(polygonScanUrl, txnId)
}

export const Mumbai: Chain = {
    chainId: 80001,
    chainName: 'Mumbai',
    isTestChain: true,
    isLocalChain: false,
    nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18,
    },
    blockExplorerUrl: mumbaiPolygonScanUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(mumbaiPolygonScanUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(mumbaiPolygonScanUrl, txnId)
}