import React from 'react'
import { WalletDataType } from './provider'

type WalletContextType = {
  walletData: WalletDataType,
  setWalletData: React.Dispatch<React.SetStateAction<WalletDataType>>
}

export const WalletContext = React.createContext<WalletContextType>({ walletData: { account: undefined }, setWalletData: () => { } })

export function useWallet() {
  const context = React.useContext(WalletContext)
  return context
}
