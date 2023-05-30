import { EvmWallets } from "../../constants/wallets";
import { Chain } from "./Chain";
import { EvmAddress } from "./common";
export declare type NodeUrls = {
    [chainId: number]: string;
};
export declare type ContractIO = {
    internalType: string;
    name: string;
    type: string;
};
export declare type ContractABIUnit = {
    inputs: ContractIO[];
    name: string;
    outputs: ContractIO[];
    stateMutability: string;
    type: string;
};
export declare type EthContract = {
    name: string;
    abi: ContractABIUnit[];
    addresses: {
        [chainId: number]: EvmAddress;
    };
};
export declare type EthConfig = {
    defaultNetwork: Chain | undefined;
    allowedNetworks?: (Chain | undefined)[];
    readOnlyUrls: NodeUrls;
    wallets: EvmWallets[];
    contractList?: EthContract[];
};
