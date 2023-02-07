
import { avalancheExplorerUrl, testAvalancheExplorerUrl } from "../../constants/chains";
import { getAddressLink, getTransactionLink } from "../../helpers";
import { Chain, EvmAddress } from "../types";

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
export const Avalanche: Chain = {
    chainId: 43114,
    chainName: 'Avalanche',
    isTestChain: false,
    isLocalChain: false,
    blockExplorerUrl: avalancheExplorerUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(avalancheExplorerUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(avalancheExplorerUrl, txnId)
}

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
export const AvalancheTestnet: Chain = {
    chainId: 43113,
    chainName: 'AvalancheTestnet',
    isTestChain: true,
    isLocalChain: false,
    blockExplorerUrl: testAvalancheExplorerUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(testAvalancheExplorerUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(testAvalancheExplorerUrl, txnId)
}