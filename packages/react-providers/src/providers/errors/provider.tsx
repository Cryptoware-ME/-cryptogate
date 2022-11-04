import React from "react";
import { ErrorsContext } from "./context";

interface Props {
  children: React.ReactNode;
}

export function ErrorsProvider({ children }: Props) {
  const [errors, setErrors] = React.useState<string[]>([]);

  const addError = (error: any) => {
    setErrors([...errors, error]);
  };

  return (
    <ErrorsContext.Provider
      value={{ errors: errors, addError: addError }}
      children={children}
    />
  );
}
