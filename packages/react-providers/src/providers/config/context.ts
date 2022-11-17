import React from 'react'
import { MultiChainProviderConfigProps } from '../Multichain'

export const ConfigContext = React.createContext<MultiChainProviderConfigProps>({ ethConfig: { defaultNetwork: undefined, readOnlyUrls: {} } })

export function useConfig() {
  const context = React.useContext(ConfigContext)
  return context
}
