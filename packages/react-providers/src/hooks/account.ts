import React from "react";
import { ethers } from "ethers";
import { EvmAddress } from "../models/types";
import { useEvmNode } from "../providers";

export const useAccount = (address: EvmAddress) => {
    const [ethBalance, setEhBalance]: [string | undefined, React.Dispatch<React.SetStateAction<string | undefined>>] = React.useState()
    const [ens, setEns]: [string | undefined, React.Dispatch<React.SetStateAction<string | undefined>>] = React.useState()
    const provider = useEvmNode()

    React.useEffect(() => {
        if (provider) {
            provider.getBalance(address).then((balanceBigNbWei) => {
                setEhBalance(ethers.utils.formatEther(balanceBigNbWei.toString()))
            })
            provider.lookupAddress(address).then((res) => res && setEns(res))
        }
    }, [provider])

    return {
        ethBalance,
        ens
    }

}

export const resolveENS = (ens: string) => {
    const [address, setAddress]: [EvmAddress, React.Dispatch<React.SetStateAction<EvmAddress>>] = React.useState("")
    const provider = useEvmNode()

    React.useEffect(() => {
        if (provider)
            provider.resolveName(ens).then((res) => {
                res && setAddress(res)
            })
    }, [provider])

    return address
}