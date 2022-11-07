import { Goerli, Mainnet } from "../../models/chains";
import { Chain } from "../../models/types";

export const DEFAULT_SUPPORTED_CHAINS: Chain[] = [Goerli, Mainnet]

export enum ChainId { Mainnet = 1, Goerli = 5 }
