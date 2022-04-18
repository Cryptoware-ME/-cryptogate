import { Connection, PublicKey } from "@solana/web3.js";
import { useMulticallAddress, useNetwork } from "@usedapp/core";
import { useEffect, useState } from "react";
import { useEthereum } from "./useEthereum";
import { useSolana } from "./useSolana";

export const useMultichain = () => {

  const ethereum = useEthereum();
  const { account, getEthBalance } = ethereum;
  const etherBalance = getEthBalance(account);
  const multicallAddress = useMulticallAddress();
  const solana = useSolana();
  const { publicKey, connected, connection } = solana;
  const [solBalance, setSolbalance] = useState(0);

  const getUserSOLBalance = async (
    publicKey: PublicKey,
    connection: Connection
  ) => {
    try {
      return await connection.getBalance(publicKey, "confirmed");
    } catch (e) {
      console.log(`error getting balance: `, e);
      return 0;
    }
  };

  useEffect(() => {
    if (publicKey && connection && connected) {
      getUserSOLBalance(publicKey, connection).then(setSolbalance);
    }
  }, [publicKey, connection]);

  console.log(multicallAddress);
  console.log("accounts", account, publicKey);
  console.log("balances", etherBalance, solBalance);

  return {
    network: useNetwork() || "Solana",
    account: account || publicKey || "",
    ethereum,
    solana,
    etherBalance,
    solBalance,
  };
};
