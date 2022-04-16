export {
  EthConfigSetter,
  EthContractConfig,
  EthContracts,
  EthContractsContext,
  EthContractsContextProvider,
  EthContractsContextProviderProps,
  EthDappContext,
  EthDappContextProvider,
  EthDappContextProviderProps,
  EthWallets,
  EthWalletsContext,
  EthWalletsContextProvider,
  EthWalletsContextProviderProps,
  SolConfigSetter,
  SolDappContext,
  SolDappContextProvider,
  SolWallets,
  SolWalletsContext,
  SolWalletsContextProvider,
  SolWalletsContextProviderProps,
  defaultConfig,
  solDefaultConfig,
  MultichainProvider,
  MultichainProviderProps,
} from "./providers/index";

export { useEthereum, useSolana, useMultichain } from "./hooks/index";