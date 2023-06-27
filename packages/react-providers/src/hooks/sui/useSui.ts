import {
  useWallet,
  useSuiProvider,
  useAccountBalance,
  useCoinBalance,
  useChain,
} from "@suiet/wallet-kit";

export const useSui = () => {
  const wallet = useWallet();
  const suiBalance = useAccountBalance();

  return {
    ...wallet,
    suiBalance: suiBalance.balance,
    useAccountBalance,
    useCoinBalance,
    useChain,
    useSuiProvider,
  };
};
