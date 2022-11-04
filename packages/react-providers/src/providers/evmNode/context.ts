import React from 'react'
import { providers } from "ethers"

type EvmNodeContextType = providers.JsonRpcProvider | providers.BaseProvider | undefined

export const EvmNodeContext = React.createContext<EvmNodeContextType>(providers.getDefaultProvider())

export function useEvmNode() {
  return React.useContext(EvmNodeContext)
}
