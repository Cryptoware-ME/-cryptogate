import React from 'react'
import { WalletDataInterface } from './provider'

interface WalletContextInterface {
  walletData: WalletDataInterface,
  setWalletData: React.Dispatch<React.SetStateAction<WalletDataInterface>> | undefined
}

export const WalletContext = React.createContext<WalletContextInterface>({ walletData: { account: undefined }, setWalletData: undefined })

export function useWallet() {
  const context = React.useContext(WalletContext)
  return context
}
