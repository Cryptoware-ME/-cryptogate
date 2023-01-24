import React from "react";

/**
 * The ErrorsBagContext is used to store the errors of the application and make them available to other components
 */
export const ErrorsBagContext = React.createContext<{
  errors: string[];
  /**
   * Add an error to the list
   * @param error
   */
  addError: (error: any) => void;
  /**
   * Clear all errors in the list
   */
  clearErrors: () => void;
}>({ errors: [], addError: (err) => {}, clearErrors: () => {} });

/**
 * useErrorsBag is a hook that allows other components to access the errors bag context
 *
 * @returns {MultiChainProviderConfigProps} the errors bag context object
 */
export function useErrorsBag(): {
  errors: string[];
  addError: (error: any) => void;
  clearErrors: () => void;
} {
  return React.useContext(ErrorsBagContext);
}
