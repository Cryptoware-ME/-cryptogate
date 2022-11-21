import { ChainId } from "../constants/chains";
import { Chain } from "../models/types";
/**
 * @public
 * @param {ChainId} chainId The Id of the requested chain
 * @return {Chain | undefined} Chain object of the requested chain or undefined
 * @example
 *  const mainnetChain = getChainById(ChainId.Mainnet)
*/
export declare const getChainById: (chainId: ChainId) => Chain | undefined;
