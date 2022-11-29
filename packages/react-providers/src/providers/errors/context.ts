import React from 'react'

export const ErrorsBagContext = React.createContext<{
  errors: string[],
  addError: (error: any) => void;
  clearErrors: () => void;
}>({ errors: [], addError: (err) => { }, clearErrors: () => { } })

export function useErrorsBag() {
  return React.useContext(ErrorsBagContext)
}
