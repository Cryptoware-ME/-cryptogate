import { bscScanUrl, bscTestnetScanUrl } from "../../constants/chains"
import { getAddressLink, getTransactionLink } from "../../helpers"
import { Chain, EvmAddress } from "../types"

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
export const BSC: Chain = {
    chainId: 56,
    chainName: 'BSC',
    isTestChain: false,
    isLocalChain: false,
    nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
    },
    blockExplorerUrl: bscScanUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(bscScanUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(bscScanUrl, txnId)
}

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
export const BSCTestnet: Chain = {
    chainId: 97,
    chainName: 'BSCTestnet',
    isTestChain: true,
    isLocalChain: false,
    blockExplorerUrl: bscTestnetScanUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(bscTestnetScanUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(bscTestnetScanUrl, txnId)
}