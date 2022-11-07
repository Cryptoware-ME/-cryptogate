import React from "react";
import { ethers } from "ethers";
import { EvmAddress } from "../models/types";
import { useEvmNode } from "../providers";

// TODO: Fix these hooks to work around a UseEffect

export const getAddress = () => {

}

export const getBalance = (address: EvmAddress) => {
    const [balance, setBalance]: [string | undefined, React.Dispatch<React.SetStateAction<string | undefined>>] = React.useState()
    const provider = useEvmNode()
    provider && provider.getBalance(address).then((balanceBigNbWei) => {
        setBalance(ethers.utils.formatEther(balanceBigNbWei.toString()))
    })
    return balance
}

export const getENS = (address: EvmAddress) => {
    const [ens, setEns]: [string, React.Dispatch<React.SetStateAction<string>>] = React.useState("")
    const provider = useEvmNode()
    provider && provider.lookupAddress(address).then((res) => {
        console.log("RES: ", res)
        res && setEns(res)
    })
    return ens
}

export const resolveENS = (ens: string) => {
    const [address, setAddress]: [EvmAddress, React.Dispatch<React.SetStateAction<EvmAddress>>] = React.useState("")
    const provider = useEvmNode()
    provider && provider.resolveName(ens).then((res) => {
        res && setAddress(res)
    })
    return address
}