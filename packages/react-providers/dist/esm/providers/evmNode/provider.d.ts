import React from "react";
import { NodeUrls } from "../../models/types";
interface Props {
    children: React.ReactNode;
    readOnlyUrls?: NodeUrls;
}
export declare function EvmNodeProvider({ children, readOnlyUrls }: Props): JSX.Element;
export {};
