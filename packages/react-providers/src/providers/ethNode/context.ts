import React from 'react'
import { providers } from "ethers"

type EthNodeContextType = providers.JsonRpcProvider | providers.BaseProvider | undefined

export const EthNodeContext = React.createContext<EthNodeContextType>(providers.getDefaultProvider())

export function useEthNode() {
  return React.useContext(EthNodeContext)
}
