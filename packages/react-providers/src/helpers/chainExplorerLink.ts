import { EvmAddress, SolAddress } from "../models/types"

/**
 * @internal INTENDED FOR INTERNAL USE ONLY. USE AT YOUR OWN RISK
 * @param {string} explorerUrl Base URL of the chain explorer
 * @param {EvmAddress | SolAddress} address Contract or wallet address
 * @return {string} URL
 * @example 
 *  const url = getAddressLink("https://etherscan.io", "0x00")
*/
export const getAddressLink = (explorerUrl: string, address: EvmAddress | SolAddress): string => `${explorerUrl}/address/${address}`

/**
 * @internal INTENDED FOR INTERNAL USE ONLY. USE AT YOUR OWN RISK
 * @param {string} explorerUrl Base URL of the chain explorer
 * @param {string} txnHash Transaction Hash
 * @return {string} URL
 * @example 
 *  const url = getTransactionLink("https://etherscan.io", "0x24..01f")
*/
export const getTransactionLink = (explorerUrl: string, txnHash: string): string => `${explorerUrl}/tx/${txnHash}`
