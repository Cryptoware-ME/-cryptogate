import { useContext } from "react";
import { ThemeContext } from "../providers";

export const useTheme = () => {
  const themeCtx = useContext(ThemeContext);
  return { theme: themeCtx };
};
