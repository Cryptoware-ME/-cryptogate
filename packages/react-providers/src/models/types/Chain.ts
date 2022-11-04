import { EthAddress } from "./EthConfig"

export type Chain = {
    chainId: number
    chainName: string
    isTestChain: boolean
    isLocalChain: boolean
    rpcUrl?: string
    blockExplorerUrl?: string
    nativeCurrency?: {
        name: string
        symbol: string
        decimals: number
    }
    getExplorerAddressLink: (address: EthAddress) => string
    getExplorerTransactionLink: (txnId: string) => string
}
