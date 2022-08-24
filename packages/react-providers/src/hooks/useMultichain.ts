
import { useNetwork } from "@usedapp/core";
import { useEthereum } from "./useEthereum";

export const useMultichain = () => {
  const ethereum = useEthereum();
  const { account, getEthBalance } = ethereum;
  const etherBalance = getEthBalance(account, {});

  return {
    network: useNetwork(),
    account: account || "",
    ethereum: ethereum,
    // etherBalance: etherBalance,
  };
}