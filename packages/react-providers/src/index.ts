import {
    MultiChainProvider, MultiChainProviderConfigProps, MultiChainProviderProps,
    ConfigContext, ConfigProvider, useConfig,
    EvmNodeContext, EvmNodeProvider, useEvmNode,
    WalletContext, WalletProvider, useWallet,
    WindowContext, WindowProvider, useWindow,
    ErrorsBagContext, ErrorsBagProvider, useErrorsBag,
    NetworkContext, NetworkProvider, useNetwork
} from "./providers"
import {
    ChainId, DEFAULT_SUPPORTED_CHAINS,
    goerliEtherscanUrl, mainnetEtherscanUrl,
    bscScanUrl, bscTestnetScanUrl,
    polygonScanUrl, mumbaiPolygonScanUrl,
    avalancheExplorerUrl, testAvalancheExplorerUrl
} from "./constants/chains"
import { getAddressLink, getChainById, getTransactionLink } from "./helpers"
import {
    Goerli, Mainnet,
    BSC, BSCTestnet,
    Polygon, Mumbai,
    Avalanche, AvalancheTestnet
} from "./models/chains"
import { Chain, EthConfig, EthContract, NodeUrls, ContractABIUnit, ContractIO, EvmAddress, CoinbaseConfig, WalletsConfig } from "./models/types"
import {
    useBrowserWallets, useEthereum,
    readContractCall, readContractCalls, writeContractCall,
    useAccount, resolveENS
} from "./hooks"

export {
    MultiChainProvider,
    ConfigContext, ConfigProvider, useConfig,
    EvmNodeContext, EvmNodeProvider, useEvmNode,
    WalletContext, WalletProvider, useWallet,
    WindowContext, WindowProvider, useWindow,
    ErrorsBagContext, ErrorsBagProvider, useErrorsBag,
    NetworkContext, NetworkProvider, useNetwork
}
export type { MultiChainProviderConfigProps, MultiChainProviderProps }
export {
    ChainId, DEFAULT_SUPPORTED_CHAINS,
    goerliEtherscanUrl, mainnetEtherscanUrl,
    bscScanUrl, bscTestnetScanUrl,
    polygonScanUrl, mumbaiPolygonScanUrl,
    avalancheExplorerUrl, testAvalancheExplorerUrl
}
export { getAddressLink, getChainById, getTransactionLink }
export {
    Goerli, Mainnet,
    BSC, BSCTestnet,
    Polygon, Mumbai,
    Avalanche, AvalancheTestnet
}
export type { Chain, EthConfig, EthContract, NodeUrls, ContractABIUnit, ContractIO, EvmAddress, CoinbaseConfig, WalletsConfig }

export {
    useBrowserWallets, useEthereum,
    readContractCall, readContractCalls, writeContractCall,
    useAccount, resolveENS
}