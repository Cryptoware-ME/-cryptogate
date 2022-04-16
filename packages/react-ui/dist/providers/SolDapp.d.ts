import React, { ReactNode } from "react";
export declare const solDefaultConfig: {
    lamportsPerSol: number;
};
export interface SolDappContextProvider {
    children?: ReactNode;
    config: {
        env: string;
        autoConnect: boolean;
    };
}
export interface SolConfigSetter {
    setSolConfig: (conf: SolDappContextProvider) => void;
}
export declare const SolDappContext: React.Context<SolConfigSetter>;
export declare const SolDappContextProvider: ({ config, children }: SolDappContextProvider) => JSX.Element;
