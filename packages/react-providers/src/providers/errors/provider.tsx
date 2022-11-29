import React from "react";
import { ErrorsBagContext } from "./context";

interface Props {
  children: React.ReactNode;
}

export function ErrorsBagProvider({ children }: Props) {
  const [errors, setErrors]: [
    string[],
    React.Dispatch<React.SetStateAction<string[]>>
  ] = React.useState([] as string[]);

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
