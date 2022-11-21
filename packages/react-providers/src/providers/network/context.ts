import React from 'react'
import { ChainId } from '../../constants/chains'
import { getChainById } from '../../helpers'
import { NetworkDataType } from './provider'

type NetworkContextType = {
  networkData: NetworkDataType,
  setNetworkData: React.Dispatch<React.SetStateAction<NetworkDataType>>
}

export const NetworkContext = React.createContext<NetworkContextType>({
  networkData: { chainId: ChainId.Mainnet, chain: getChainById(ChainId.Mainnet) },
  setNetworkData: () => { }
})

export function useNetwork() {
  const context = React.useContext(NetworkContext)
  return context
}
