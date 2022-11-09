
import { goerliEtherscanUrl, mainnetEtherscanUrl, kovanEtherscanUrl, rinkebyEtherscanUrl, ropstenEtherscanUrl } from "../../constants/chains";
import { getAddressLink, getTransactionLink } from "../../helpers";
import { Chain, EvmAddress } from "../types";

export const Mainnet: Chain = {
    chainId: 1,
    chainName: 'Mainnet',
    isTestChain: false,
    isLocalChain: false,
    blockExplorerUrl: mainnetEtherscanUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(mainnetEtherscanUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(mainnetEtherscanUrl, txnId)
}

export const Goerli: Chain = {
    chainId: 5,
    chainName: 'Goerli',
    isTestChain: true,
    isLocalChain: false,
    blockExplorerUrl: goerliEtherscanUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(goerliEtherscanUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(goerliEtherscanUrl, txnId)
}

export const Ropsten: Chain = {
    chainId: 3,
    chainName: 'Ropsten',
    isTestChain: true,
    isLocalChain: false,
    blockExplorerUrl: ropstenEtherscanUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(ropstenEtherscanUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(ropstenEtherscanUrl, txnId),
}

export const Rinkeby: Chain = {
    chainId: 4,
    chainName: 'Rinkeby',
    isTestChain: true,
    isLocalChain: false,
    blockExplorerUrl: rinkebyEtherscanUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(rinkebyEtherscanUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(rinkebyEtherscanUrl, txnId),
}

export const Kovan: Chain = {
    chainId: 42,
    chainName: 'Kovan',
    isTestChain: true,
    isLocalChain: false,
    blockExplorerUrl: kovanEtherscanUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(kovanEtherscanUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(kovanEtherscanUrl, txnId),
}