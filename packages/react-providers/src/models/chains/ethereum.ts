
import { goerliEtherscanUrl, mainnetEtherscanUrl } from "../../constants/chains";
import { getAddressLink, getTransactionLink } from "../../helpers";
import { Chain, EvmAddress } from "../types";

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
export const Mainnet: Chain = {
    chainId: 1,
    chainName: 'Mainnet',
    isTestChain: false,
    isLocalChain: false,
    blockExplorerUrl: mainnetEtherscanUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(mainnetEtherscanUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(mainnetEtherscanUrl, txnId)
}

/*
 * @Cryptogate: For intertanl use only, reference at your own risk
*/
export const Goerli: Chain = {
    chainId: 5,
    chainName: 'Goerli',
    isTestChain: true,
    isLocalChain: false,
    blockExplorerUrl: goerliEtherscanUrl,
    getExplorerAddressLink: (address: EvmAddress) => getAddressLink(goerliEtherscanUrl, address),
    getExplorerTransactionLink: (txnId: string) => getTransactionLink(goerliEtherscanUrl, txnId)
}