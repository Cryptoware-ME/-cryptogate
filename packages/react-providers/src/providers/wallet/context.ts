import React from 'react'
import { WalletDataType } from './provider'

/**
 * The WalletContextType represents the context object for the WalletContext.
 * It contains the walletData, which is an object containing the user's account,
 * and a setWalletData function for updating the walletData.
 */
type WalletContextType = {
  /**
   * The current walletData, which is an object containing the user's account.
   */
  walletData: WalletDataType,
  /**
   * The function for updating the walletData, which takes in a React.SetStateAction
   * of the walletData.
   */
  setWalletData: React.Dispatch<React.SetStateAction<WalletDataType>>
}

/**
 * Creates a new context object for the Wallet, which can be accessed and updated
 * using the useWallet hook.
 * The default value is set to undefined
 */
export const WalletContext = React.createContext<WalletContextType>({ walletData: { account: undefined }, setWalletData: () => { } })

/**
 * A hook for accessing the WalletContext.
 * Returns the context object, which contains the walletData and setWalletData function.
 */
export function useWallet() {
  const context = React.useContext(WalletContext)
  return context
}
