import React from "react";
export interface ThemeContextProviderProps {
    children?: React.ReactNode;
    primary: string;
    secondary: string;
}
export declare const ThemeContext: React.Context<{
    primary: string;
    secondary: string;
}>;
export declare const ThemeContextProvider: ({ primary, secondary, children, }: ThemeContextProviderProps) => JSX.Element;
