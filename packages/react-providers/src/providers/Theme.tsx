import React, { useEffect, useState } from "react";

export const ThemeContext = React.createContext(
  {} as {
    Theme: {
      titles: string;
      text: string;
      background: string;
    };
  }
);

export const ThemeContextProvider = ({
  Theme,
  children,
}: {
  Theme: {
    titles: string;
    text: string;
    background: string;
  };
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState(
    {} as {
      titles: string;
      text: string;
      background: string;
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
