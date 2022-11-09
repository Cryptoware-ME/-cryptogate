import React from 'react'
import { ChainId } from '../../constants/chains'
import { getChainById } from '../../helpers'
import { NetworkDataInterface } from './provider'

interface NetworkContextInterface {
  networkData: NetworkDataInterface,
  setNetworkData: React.Dispatch<React.SetStateAction<NetworkDataInterface>>
}

export const NetworkContext = React.createContext<NetworkContextInterface>({ networkData: { chainId: ChainId.Mainnet, chain: getChainById(ChainId.Mainnet) }, setNetworkData: () => { } })

export function useNetwork() {
  const context = React.useContext(NetworkContext)
  return context
}
