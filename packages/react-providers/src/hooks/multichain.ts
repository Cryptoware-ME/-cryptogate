import { useEvm } from "./evm";
import { useSolana } from "./solana";
import { useSui } from "./sui";

export const useMultichain = () => {
  const evm = useEvm();
  const solana = useSolana();
  const sui = useSui();

  return {
    evm,
    solana,
    sui,
  };
};
