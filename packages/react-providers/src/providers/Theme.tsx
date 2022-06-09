import React, { useEffect, useState } from "react";

export interface ThemeContextProviderProps {
  children?: React.ReactNode;
  primary: string;
  secondary: string;
}

export const ThemeContext = React.createContext(
  {} as {
    primary: string;
    secondary: string;
  }
);

export const ThemeContextProvider = ({
  primary,
  secondary,
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState(
    {} as {
      primary: string;
      secondary: string;
    }
  );

  useEffect(() => {
    setTheme({ primary: primary, secondary: secondary });
    console.log("THEME::: ", { primary: primary, secondary: secondary });
  }, [primary, secondary]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
