import React from 'react'
import { providers } from "ethers"

type EvmNodeContextType = {
  provider: providers.JsonRpcProvider | providers.Web3Provider | undefined,
  setProvider: React.Dispatch<React.SetStateAction<providers.JsonRpcProvider | providers.Web3Provider | undefined>>
}

export const EvmNodeContext = React.createContext<EvmNodeContextType>({ provider: undefined, setProvider: () => { } })

export function useEvmNode() {
  return React.useContext(EvmNodeContext)
}
