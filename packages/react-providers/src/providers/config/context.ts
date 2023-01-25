import React from 'react'
import { Chain } from '../../models/types'
import { MultiChainProviderConfigProps } from '../Multichain'

export const ConfigContext = React.createContext<MultiChainProviderConfigProps>({ ethConfig: { defaultNetwork: undefined as unknown as Chain, readOnlyUrls: {} } })

export function useConfig() {
  const context = React.useContext(ConfigContext)
  return context
}
