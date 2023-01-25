import React from 'react'

export const ErrorsBagContext = React.createContext<{
  errors: string[],
  addError: (_: any) => void;
  clearErrors: () => void;
}>({ errors: [], addError: (_) => { }, clearErrors: () => { } })

export function useErrorsBag() {
  return React.useContext(ErrorsBagContext)
}
