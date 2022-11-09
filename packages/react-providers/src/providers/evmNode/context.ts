import React from 'react'
import { providers } from "ethers"

type EvmNodeContextType = {
  provider: providers.JsonRpcProvider | providers.BaseProvider | undefined,
  setProvider: React.Dispatch<React.SetStateAction<providers.JsonRpcProvider | providers.BaseProvider | undefined>>
}

export const EvmNodeContext = React.createContext<EvmNodeContextType>({ provider: providers.getDefaultProvider(), setProvider: () => { } })

export function useEvmNode() {
  return React.useContext(EvmNodeContext)
}
