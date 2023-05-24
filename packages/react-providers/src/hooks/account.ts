import React from "react";
import * as ethers from "ethers";
import { EvmAddress } from "../models/types";
import { useEvmNode } from "../providers";

/**
 * @public
 * @param {EvmAddress | undefined} address Base URL of the chain explorer
 * @return Eth balance and ENS of the provided address
 * @example 
 *  const {ethbalance, ens} = useAccount("0x00")
*/
export const useAccount = (address: EvmAddress | undefined): { ethBalance: string | undefined, ens: string | undefined } => {
    const { provider } = useEvmNode()

    const [ethBalance, setEhBalance]: [string | undefined, React.Dispatch<React.SetStateAction<string | undefined>>] = React.useState()
    const [ens, setEns]: [string | undefined, React.Dispatch<React.SetStateAction<string | undefined>>] = React.useState()

    React.useEffect(() => {
        if (provider && address) {
            provider.getBalance(address).then((balanceBigNbWei) => {
                setEhBalance(ethers.utils.formatEther(balanceBigNbWei.toString()))
            })
            provider.lookupAddress(address).then((res) => res && setEns(res)).catch((err) => { })
        } else {
            setEhBalance("");
            setEns("")
        }
    }, [provider])

    return {
        ethBalance,
        ens
    }
}

/**
 * @public
 * @param {string} ens ENS Name
 * @return {EvmAddress | undefined} Wallet or contract address resolved from the provided ENS
 * @example 
 *  const address = resolveENS("ens.eth")
*/
export const resolveENS = (ens: string): EvmAddress | undefined => {
    const { provider } = useEvmNode()

    const [address, setAddress]: [EvmAddress | undefined, React.Dispatch<React.SetStateAction<EvmAddress | undefined>>] = React.useState()

    React.useEffect(() => {
        if (provider && ens)
            provider.resolveName(ens).then((res) => {
                res && setAddress(res as EvmAddress)
            })
    }, [provider])

    return address
}