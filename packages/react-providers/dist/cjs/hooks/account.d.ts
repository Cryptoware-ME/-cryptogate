import { EvmAddress } from "../models/types";
/**
 * @public
 * @param {EvmAddress | undefined} address Base URL of the chain explorer
 * @return Eth balance and ENS of the provided address
 * @example
 *  const {ethbalance, ens} = useAccount("0x00")
*/
export declare const useAccount: (address: EvmAddress | undefined) => {
    ethBalance: string | undefined;
    ens: string | undefined;
};
/**
 * @public
 * @param {string} ens ENS Name
 * @return {EvmAddress | undefined} Wallet or contract address resolved from the provided ENS
 * @example
 *  const address = resolveENS("ens.eth")
*/
export declare const resolveENS: (ens: string) => EvmAddress | undefined;
