
import { avalancheExplorerUrl, testAvalancheExplorerUrl } from "../../constants/chains";
import { getAddressLink, getTransactionLink } from "../../helpers";
import { Chain, EvmAddress } from "../types";

export const Avalanche: Chain = {
    chainId: 43114,
    chainName: 'Avalanche',
    isTestChain: false,
    isLocalChain: false,
    nativeCurrency: {
        name: 'Avalanche',
        symbol: 'AVAX',
        decimals: 18,
    },
    blockExplorerUrl: avalancheExplorerUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(avalancheExplorerUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(avalancheExplorerUrl, txnId)
}

export const AvalancheTestnet: Chain = {
    chainId: 43113,
    chainName: 'AvalancheTestnet',
    isTestChain: true,
    isLocalChain: false,
    nativeCurrency: {
        name: 'Avalanche',
        symbol: 'AVAX',
        decimals: 18,
    },
    blockExplorerUrl: testAvalancheExplorerUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(testAvalancheExplorerUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(testAvalancheExplorerUrl, txnId)
}