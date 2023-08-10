import React from "react";
import { MultiChainProviderConfigProps } from "../Multichain";
interface Props {
    children: React.ReactNode;
    config: MultiChainProviderConfigProps;
}
export declare function ConfigProvider({ config, children }: Props): React.JSX.Element;
export {};
