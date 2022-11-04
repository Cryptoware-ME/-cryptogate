import { Chain } from "./Chain";

export type EthAddress = string

export type NodeUrls = {
    [chainId: number]: string
}

export type ContractIO = {
    internalType: string,
    name: string,
    type: string
}

export type ContractABIUnit = {
    inputs: ContractIO[],
    name: string,
    outputs: ContractIO[],
    stateMutability: string,
    type: string
}

export type EthContract = {
    name: string,
    abi: ContractABIUnit[];
    addresses: { [chainId: number]: EthAddress }
}

export type EthConfig = {
    allowedNetworks?: (Chain | undefined)[];
    readOnlyUrls: NodeUrls;
    contractList?: EthContract[];
}
