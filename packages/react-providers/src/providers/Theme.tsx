import React, { useEffect, useState } from "react";

export const ThemeContext = React.createContext(
  {} as {
    Theme: {
      primaryText: string;
      secondaryText: string;
      primaryBackground: string;
      secondaryBackground: string;
    };
  }
);

export const ThemeContextProvider = ({
  Theme,
  children,
}: {
  Theme:  {
    primaryText: string;
    secondaryText: string;
    primaryBackground: string;
    secondaryBackground: string;
  };
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState(
    {} as  {
      primaryText: string;
      secondaryText: string;
      primaryBackground: string;
      secondaryBackground: string;
    }
  );

  useEffect(() => {
    setTheme(Theme);
  }, [Theme]);

  return (
    <ThemeContext.Provider value={{ Theme: theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
