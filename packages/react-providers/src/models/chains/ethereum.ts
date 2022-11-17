
import { goerliEtherscanUrl, mainnetEtherscanUrl } from "../../constants/chains";
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