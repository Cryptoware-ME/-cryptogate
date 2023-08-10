import React from "react";
import { ChainId } from "../../constants/chains";
import { Chain } from "../../models/types";
import { MultiChainProviderConfigProps } from "../Multichain";
interface Props {
    children: React.ReactNode;
    config: MultiChainProviderConfigProps;
}
export declare type NetworkDataType = {
    chainId: ChainId | undefined;
    chain: Chain | undefined;
};
export declare function NetworkProvider({ children, config }: Props): React.JSX.Element;
export {};
