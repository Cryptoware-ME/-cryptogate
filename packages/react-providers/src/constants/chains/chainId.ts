import {
    Goerli, Mainnet,
    BSC, BSCTestnet,
    Polygon, Mumbai,
    Avalanche, AvalancheTestnet,
    SolanaMainnet
} from "../../models/chains";
import { Chain } from "../../models/types";

/**
 * @array
 * @description The Default Chains Supported By Cryptogate
*/
export const DEFAULT_SUPPORTED_CHAINS: Chain[] = [
    Goerli, Mainnet,
    BSC, BSCTestnet,
    Polygon, Mumbai,
    Avalanche, AvalancheTestnet,
    SolanaMainnet
]

/** 
 * @enum
 * @description ChainIds Of The Default Chains Supported By Cryptogate 
*/
export enum ChainId {
    Mainnet = 1, Goerli = 5,
    BSC = 56, BSCTestnet = 97,
    Polygon = 137, Mumbai = 80001,
    Avalanche = 43114, AvalancheTestnet = 43113
}
