import React from "react";
import { SuiConfig } from "../../models/types";
interface Props {
    children: React.ReactNode;
    suiConfig: SuiConfig | undefined;
}
export declare function SuiProvider({ children, suiConfig }: Props): React.JSX.Element;
export {};
