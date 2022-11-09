import React, { ReactNode } from "react";
import { WindowContext } from "./context";

type Props = {
  children: ReactNode;
};

export function WindowProvider({ children }: Props) {
  const [isActiveWindow, setActiveWindow]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = React.useState(true);

  React.useEffect(() => {
    const visibilityChangeListener = () => {
      switch (document.visibilityState) {
        case "hidden":
          setActiveWindow(false);
          break;
        case "visible":
          setActiveWindow(true);
          break;
      }
    };
    document.addEventListener("visibilitychange", visibilityChangeListener);
    return () =>
      document.removeEventListener(
        "visibilitychange",
        visibilityChangeListener
      );
  }, []);

  return <WindowContext.Provider value={isActiveWindow} children={children} />;
}
