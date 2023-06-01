import React from "react";
import { ErrorsBagContext } from "./context";

interface Props {
  children: React.ReactNode;
}
/**

Provider component for managing errors in the application.
@component
@param {Props} props - The component props.
@param {React.ReactNode} props.children - The child components.
@returns {JSX.Element} The rendered component.
@example
<ErrorsBagProvider>
<App />
</ErrorsBagProvider>
*/
export function ErrorsBagProvider({ children }: Props) {
  const [errors, setErrors]: [
    string[],
    React.Dispatch<React.SetStateAction<string[]>>
  ] = React.useState([] as string[]);
  /**

Add an error to the errors list.
@param {any} error - The error to be added.
@returns {void}
@example
const error = "Something went wrong";
addError(error);
*/
  const addError = (error: any) => {
    setErrors([...errors, error]);
  };
  /**

Clear all the errors from the errors list.
@returns {void}
@example
clearErrors();
*/
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
