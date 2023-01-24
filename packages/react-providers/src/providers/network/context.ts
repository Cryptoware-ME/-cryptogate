import React from 'react'
import { ChainId } from '../../constants/chains'
import { getChainById } from '../../helpers'
import { NetworkDataType } from './provider'

/**
 * The NetworkContextType represents the context object for the NetworkContext.
 * It contains the networkData, which is an object containing chainId and chain,
 * and a setNetworkData function for updating the networkData.
 */
type NetworkContextType = {
  /**
   * The current networkData, which is an object containing chainId and chain.
   */
  networkData: NetworkDataType,
  /**
   * The function for updating the networkData, which takes in a React.SetStateAction
   * of the networkData.
   */
  setNetworkData: React.Dispatch<React.SetStateAction<NetworkDataType>>
}

/**
 * Creates a new context object for the Network, which can be accessed and updated
 * using the useNetwork hook.
 * The default value is set to Mainnet
 */
export const NetworkContext = React.createContext<NetworkContextType>({
  networkData: { chainId: ChainId.Mainnet, chain: getChainById(ChainId.Mainnet) },
  setNetworkData: () => { }
})

/**
 * A hook for accessing the NetworkContext.
 * Returns the context object, which contains the networkData and setNetworkData function.
 */
export function useNetwork() {
  const context = React.useContext(NetworkContext)
  return context
}
