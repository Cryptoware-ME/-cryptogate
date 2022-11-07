import React from 'react'

export const ErrorsBagContext = React.createContext<{
  errors: string[],
  addError: (error: any) => void;
}>({ errors: [], addError: (err) => { } })

export function useErrorsBag() {
  return React.useContext(ErrorsBagContext)
}
