import React, { ReactNode } from "react";
import { WindowContext } from "./context";

/**
 * Props for the WindowProvider component.
 * Expects a children prop to render.
 */
interface Props {
  children: ReactNode;
}

/**
 * A provider component for the WindowContext.
 * It maintains the state of the isActiveWindow, which is a boolean indicating if the window is currently active.
 * It uses the browser's visibilitychange event to update the state of the isActiveWindow.
 * @param Props - Expects a children prop to render.
 */
export function WindowProvider({ children }: Props) {
  /**
   * The state of the isActiveWindow, which is a boolean indicating if the window is currently active.
   * The setActiveWindow function is used to update the isActiveWindow state.
   */
  const [isActiveWindow, setActiveWindow]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = React.useState(true);

  /**
   * React.useEffect Hook that listens for the browser's visibilitychange event and updates the state of the isActiveWindow.
   */
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
