import {
  useWallet,
  useSuiProvider,
  useAccountBalance,
  useCoinBalance,
  useChain,
} from "@suiet/wallet-kit";

export const useSui = () => {
  const wallet = useWallet();
  return {
    ...wallet,
    useAccountBalance,
    useCoinBalance,
    useChain,
    useSuiProvider,
  };
};
