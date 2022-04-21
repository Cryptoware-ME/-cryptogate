import React, { ReactNode } from "react";
export declare const solDefaultConfig: {
    lamportsPerSol: number;
};
export interface SolDappContextProviderProps {
    children?: ReactNode;
    config: {
        env: string;
        autoConnect: boolean;
        lamportsPerSol?: number;
    };
}
export interface SolConfigSetter {
    setSolConfig: (conf: SolDappContextProviderProps) => void;
}
export declare const SolDappContext: React.Context<SolConfigSetter>;
export declare const SolDappContextProvider: ({ config, children }: SolDappContextProviderProps) => JSX.Element;
