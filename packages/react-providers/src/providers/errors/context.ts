import React from 'react'

export const ErrorsContext = React.createContext<{
  errors: string[],
  addError: (error: any) => void;
}>({ errors: [], addError: (err) => { } })

export function useErrorsBag() {
  return React.useContext(ErrorsContext)
}
