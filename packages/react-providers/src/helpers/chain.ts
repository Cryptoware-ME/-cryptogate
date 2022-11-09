import { ChainId, DEFAULT_SUPPORTED_CHAINS } from "../constants/chains";
import { Chain } from "../models/types";

export const getChainById = (chainId: ChainId) => DEFAULT_SUPPORTED_CHAINS.find((network: Chain) => network.chainId == chainId)