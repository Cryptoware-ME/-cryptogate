import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";
import { useEtherBalance, useNetwork } from "@usedapp/core";
import { useEffect, useState } from "react";
import { useEthereum } from "./useEthereum";
import { useSolana } from "./useSolana";

export const useMultichain = () => {
  const { account } = useEthereum();
  const { publicKey, connected } = useWallet();
  const { connection } = useConnection();
  const [solBalance, setSolbalance] = useState(0);
  const etherBalance = useEtherBalance(account);

  const getUserSOLBalance = async (
    publicKey: PublicKey,
    connection: Connection
  ) => {
    try {
      let balance = await connection.getBalance(publicKey, "confirmed");
      return balance;
    } catch (e) {
      console.log(`error getting balance: `, e);
      return 0;
    }
  };

  useEffect(() => {
    if (!solBalance && publicKey && connection && connected) {
      getUserSOLBalance(publicKey, connection).then(setSolbalance);
    }
  }, [publicKey, connection]);

  console.log("balances", etherBalance, solBalance);

  return {
    network: useNetwork() || "Solana",
    account: account || publicKey || "",
    ethereum: useEthereum(),
    solana: useSolana(),
    etherBalance,
    solBalance,
  };
};
