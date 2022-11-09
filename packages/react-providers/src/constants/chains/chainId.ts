import {
    Goerli, Mainnet, Kovan, Rinkeby, Ropsten,
    BSC, BSCTestnet
} from "../../models/chains";
import { Chain } from "../../models/types";

export const DEFAULT_SUPPORTED_CHAINS: Chain[] = [
    Goerli, Mainnet, Kovan, Rinkeby, Ropsten,
    BSC, BSCTestnet
]

export enum ChainId {
    Mainnet = 1, Goerli = 5, Kovan = 42, Rinkeby = 4, Ropsten = 3,
    BSC = 56, BSCTestnet = 97
}
