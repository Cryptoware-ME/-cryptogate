import { useEvm } from "./useEvm";

/**
 * @deprecated This hook is deprecated and has been replaced by useEvm()
 */
export const useEthereum = () => {
  const evm = useEvm();

  return {
    ...evm,
  };
};
