import React from 'react'

export const WindowContext = React.createContext<boolean>(true)

export function useWindow() {
  return React.useContext(WindowContext)
}
