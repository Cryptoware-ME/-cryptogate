import { useEthereum } from "./ethereum";
import { useSolana } from "./solana";
import { useSui } from "./sui";

export const useMultichain = () => {
  const ethereum = useEthereum();
  const solana = useSolana();
  const sui = useSui();

  return {
    ethereum,
    solana,
    sui,
  };
};
