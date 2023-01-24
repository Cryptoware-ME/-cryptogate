import React from 'react'

/**
 * Creates a new context object for the Window, which can be accessed and updated
 * using the useWindow hook.
 * The default value is set to true.
 */
export const WindowContext = React.createContext<boolean>(true)

/**
 * A hook for accessing the WindowContext.
 * Returns the context object, which is a boolean indicating if the window is currently active.
 */
export function useWindow() {
  return React.useContext(WindowContext)
}
