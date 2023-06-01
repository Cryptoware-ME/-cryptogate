import React, { ReactNode } from "react";
import { WindowContext } from "./context";

interface Props {
  children: ReactNode;
}

/**

Provider component for managing the active window state.
@component
@param {Props} props - The component props.
@param {ReactNode} props.children - The child components.
@returns {JSX.Element} The rendered component.
@example
<WindowProvider>
<App />
</WindowProvider>
*/
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
    AC;
  }, []);

  return <WindowContext.Provider value={isActiveWindow} children={children} />;
}
