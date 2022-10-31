import { Chain } from "./Chain";

export type NodeUrls = {
    [chainId: number]: {
        [name: string]: string
    }
}

export type EthContract = {
    abi: object;
    addresses: { [id: number]: string }
}

export type EthConfig = {
    allowedNetworks?: (Chain | undefined)[];
    readOnlyUrls?: NodeUrls;
    contractList?: EthContract[];
}
