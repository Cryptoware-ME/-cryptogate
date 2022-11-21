import { Chain } from "../../models/types";
/**
 * @array
 * @description The Default Chains Supported By Cryptogate
*/
export declare const DEFAULT_SUPPORTED_CHAINS: Chain[];
/**
 * @enum
 * @description ChainIds Of The Default Chains Supported By Cryptogate
*/
export declare enum ChainId {
    Mainnet = 1,
    Goerli = 5,
    BSC = 56,
    BSCTestnet = 97,
    Polygon = 137,
    Mumbai = 80001,
    Avalanche = 43114,
    AvalancheTestnet = 43113
}
