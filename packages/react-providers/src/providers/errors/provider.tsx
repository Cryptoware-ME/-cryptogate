import React from "react";
import { ErrorsBagContext } from "./context";

type Props = {
  children: React.ReactNode;
};

export function ErrorsBagProvider({ children }: Props) {
  const [errors, setErrors]: [
    string[],
    React.Dispatch<React.SetStateAction<string[]>>
  ] = React.useState([] as string[]);

  const addError = (error: any) => {
    setErrors([...errors, error]);
  };

  return (
    <ErrorsBagContext.Provider
      value={{ errors: errors, addError: addError }}
      children={children}
    />
  );
}
