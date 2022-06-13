import React from "react";
export declare const ThemeContext: React.Context<{
    Theme: {
        titles: string;
        text: string;
        background: string;
    };
}>;
export declare const ThemeContextProvider: ({ Theme, children, }: {
    Theme: {
        titles: string;
        text: string;
        background: string;
    };
    children: React.ReactNode;
}) => JSX.Element;
