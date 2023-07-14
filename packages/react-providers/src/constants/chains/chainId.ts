import {
  Sepolia,
  Goerli,
  Mainnet,
  BSC,
  BSCTestnet,
  Polygon,
  Mumbai,
  Avalanche,
  AvalancheTestnet,
  BaseGoerli,
  Arbitrum,
  XinFin,
  Apothem,
  Bellatrix,
  Calypso,
  RSKMainnet,
  RSKTestnet,
} from "../../models/chains";
import { Chain } from "../../models/types";

/**
 * @array
 * @description The Default Chains Supported By Cryptogate
 */
export const DEFAULT_SUPPORTED_CHAINS: Chain[] = [
  Sepolia,
  Goerli,
  Mainnet,
  BSC,
  BSCTestnet,
  Polygon,
  Mumbai,
  Avalanche,
  AvalancheTestnet,
  BaseGoerli,
  Arbitrum,
  XinFin,
  Apothem,
  Bellatrix,
  Calypso,
  RSKMainnet,
  RSKTestnet,
];

/**
 * @enum
 * @description ChainIds Of The Default Chains Supported By Cryptogate
 */
export enum ChainId {
  Mainnet = 1,
  Goerli = 5,
  Sepolia = 11155111,
  BSC = 56,
  BSCTestnet = 97,
  Polygon = 137,
  Mumbai = 80001,
  Avalanche = 43114,
  AvalancheTestnet = 43113,
  BaseGoerli = 84531,
  Arbitrum = 42161,
  XinFin = 50,
  Apothem = 51,
  Bellatrix = 1351057110,
  Calypso = 344106930,
  RSKMainnet = 30,
  RSKTestnet = 31,
}
