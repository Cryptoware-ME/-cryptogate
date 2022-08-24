import React from "react";
export declare const ThemeContext: React.Context<{
    Theme: {
        primaryText: string;
        secondaryText: string;
        primaryBackground: string;
        secondaryBackground: string;
    };
}>;
export declare const ThemeContextProvider: ({ Theme, children, }: {
    Theme: {
        primaryText: string;
        secondaryText: string;
        primaryBackground: string;
        secondaryBackground: string;
    };
    children: React.ReactNode;
}) => JSX.Element;
