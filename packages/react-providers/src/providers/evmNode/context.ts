import React from 'react'
import { providers } from "ethers"

/**
 * The EvmNodeContextType represents the context object for the EvmNodeContext.
 * It contains the provider, which can be either a JsonRpcProvider or a Web3Provider,
 * and a setProvider function for updating the provider.
 */
type EvmNodeContextType = {
  /**
   * The current provider, which can be either a JsonRpcProvider or a Web3Provider.
   */
  provider: providers.JsonRpcProvider | providers.Web3Provider | undefined,
  /**
   * The function for updating the provider, which takes in a React.SetStateAction
   * of the provider.
   */
  setProvider: React.Dispatch<React.SetStateAction<providers.JsonRpcProvider | providers.Web3Provider | undefined>>
}

/**
 * Creates a new context object for the EvmNode, which can be accessed and updated
 * using the useEvmNode hook.
 */
export const EvmNodeContext = React.createContext<EvmNodeContextType>({ provider: undefined, setProvider: () => { } })

/**
 * A hook for accessing the EvmNodeContext.
 * Returns the context object, which contains the provider and setProvider function.
 */
export function useEvmNode() {
  return React.useContext(EvmNodeContext)
} 
