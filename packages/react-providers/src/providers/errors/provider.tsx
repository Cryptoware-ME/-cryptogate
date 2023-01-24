import React from "react";
import { ErrorsBagContext } from "./context";

/**
 * Props for the ErrorsBagProvider component.
 * Expects a children prop to render.
 */
interface Props {
  children: React.ReactNode;
}

/**
 * It maintains the state of the errors in an array and provides functions
 * to add and clear the errors.
 * @param Props - Expects a children prop to render.
 */
export function ErrorsBagProvider({ children }: Props) {
  /**
   * The state of the errors, which is an array of strings.
   * The setErrors function is used to update the errors state.
   */
  const [errors, setErrors]: [
    string[],
    React.Dispatch<React.SetStateAction<string[]>>
  ] = React.useState([] as string[]);

  /**
   * A function for adding an error to the errors state.
   * @param error - The error to be added to the errors state.
   */
  const addError = (error: any) => {
    setErrors([...errors, error]);
  };

  const clearErrors = () => {
    setErrors([]);
  };

  return (
    <ErrorsBagContext.Provider
     
      value={{ errors: errors, addError: addError, clearErrors: clearErrors }}
      children={children}
    />
  );
}
