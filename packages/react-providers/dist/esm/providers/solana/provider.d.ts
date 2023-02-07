import React from "react";
import { SolConfig } from "../../models/types";
interface Props {
    children: React.ReactNode;
    solConfig: SolConfig | undefined;
}
export declare function SolanaProvider({ children, solConfig }: Props): JSX.Element;
export {};
