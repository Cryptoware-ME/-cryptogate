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
    goerliEtherscanUrl, mainnetEtherscanUrl, kovanEtherscanUrl, rinkebyEtherscanUrl, ropstenEtherscanUrl,
    bscScanUrl, bscTestnetScanUrl
} from "./constants/chains"
import { DEFAULT_ETH_CONFIG, DEFAULT_MULTICHAIN_CONFIG, DEFAULT_NODE_URLS } from "./constants/config"
import { getAddressLink, getChainById, getTransactionLink } from "./helpers"
import {
    Goerli, Mainnet, Kovan, Rinkeby, Ropsten,
    BSC, BSCTestnet
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
    goerliEtherscanUrl, mainnetEtherscanUrl, kovanEtherscanUrl, rinkebyEtherscanUrl, ropstenEtherscanUrl,
    bscScanUrl, bscTestnetScanUrl
}
export { DEFAULT_ETH_CONFIG, DEFAULT_MULTICHAIN_CONFIG, DEFAULT_NODE_URLS }
export { getAddressLink, getChainById, getTransactionLink }
export {
    Goerli, Mainnet, Kovan, Rinkeby, Ropsten,
    BSC, BSCTestnet
}
export type { Chain, EthConfig, EthContract, NodeUrls, ContractABIUnit, ContractIO, EvmAddress, CoinbaseConfig, WalletsConfig }

export {
    useBrowserWallets, useEthereum,
    readContractCall, readContractCalls, writeContractCall,
    useAccount, resolveENS
}