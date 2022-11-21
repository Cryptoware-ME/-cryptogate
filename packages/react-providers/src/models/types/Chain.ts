import { EvmAddress } from "./common"

/**
 * @public
 * @typedef {object} Chain
*/
export type Chain = {
    chainId: number
    chainName: string
    isTestChain: boolean
    isLocalChain: boolean
    blockExplorerUrl?: string
    nativeCurrency?: {
        name: string
        symbol: string
        decimals: number
    }
    getExplorerAddressLink: (address: EvmAddress) => string
    getExplorerTransactionLink: (txnId: string) => string
}
