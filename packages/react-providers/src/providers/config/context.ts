import React from 'react'
import { MultiChainProviderConfigProps } from '../Multichain'

/**
 * @description ConfigContext is used to store the configuration settings of the application and make them available to other components
 */
export const ConfigContext = React.createContext<MultiChainProviderConfigProps>({ ethConfig: { defaultNetwork: undefined, readOnlyUrls: {} } })

/**
 * @description useConfig is a hook that allows other components to access the configuration context
 *
 * @returns {MultiChainProviderConfigProps} the configuration context object
 */
export function useConfig(): MultiChainProviderConfigProps {
  /**
   * @description the context variable is used to access the configuration context
   */
  const context = React.useContext(ConfigContext)
  return context
}

