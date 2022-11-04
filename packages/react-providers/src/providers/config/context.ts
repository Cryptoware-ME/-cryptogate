import React from 'react'
import { DEFAULT_MULTICHAIN_CONFIG } from '../../constants/config/Multichain'
import { MultiChainProviderConfigProps } from '../Multichain'

export const ConfigContext = React.createContext<MultiChainProviderConfigProps>(DEFAULT_MULTICHAIN_CONFIG)

export function useConfig() {
  const context = React.useContext(ConfigContext)
  return context
}
