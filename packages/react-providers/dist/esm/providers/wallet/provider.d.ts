import React from "react";
import { EvmAddress } from "../../models/types";
interface Props {
    children: React.ReactNode;
}
export declare type WalletDataType = {
    account: EvmAddress | undefined;
};
export declare function WalletProvider({ children }: Props): React.JSX.Element;
export {};
