import { EthAddress } from "../models/types"

export const getAddressLink = (explorerUrl: string, address: EthAddress) => `${explorerUrl}/address/${address}`

export const getTransactionLink = (explorerUrl: string, txnId: string) => `${explorerUrl}/tx/${txnId}`
