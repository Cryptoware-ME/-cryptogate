import { EvmAddress } from "../models/types"

export const getAddressLink = (explorerUrl: string, address: EvmAddress) => `${explorerUrl}/address/${address}`

export const getTransactionLink = (explorerUrl: string, txnId: string) => `${explorerUrl}/tx/${txnId}`
