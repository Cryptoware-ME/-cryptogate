import React from 'react'
const ethers = require("ethers")

type EthNodeContextType = typeof ethers.providers.JsonRpcProvider
  | typeof ethers.providers.BaseProvider

export const EthNodeContext = React.createContext<EthNodeContextType>({})

export function useEthNode() {
  return React.useContext(EthNodeContext)
}
