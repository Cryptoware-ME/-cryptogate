import React from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { WalletReadyState } from "@solana/wallet-adapter-base";
import { useConfig, useErrorsBag } from "../../providers";

/**

Custom hook for interacting with the Solana blockchain using the Wallet Adapter.
@returns {{
  publicKey: string,
  connected: boolean,
  wallet: WalletAdapter,
  solBalance: number,
  connection: Connection
  }}
  @example
  const { publicKey, connected, wallet, solBalance, connection } = useSolana();
  */

export const useSolana = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const { solConfig } = useConfig();
  const { addError } = useErrorsBag();
  const [solBalance, setSolBalance] = React.useState(0);

  /**
  
  Retrieves the SOL balance for the current user.
  @param {_lamportsPerSol: number} _lamportsPerSol - Conversion rate from lamports to SOL.
  @returns {Promise<void>}
  */
  const getUserSOLBalance = async (_lamportsPerSol: number) => {
    let balance = 0;
    if (wallet.publicKey) {
      try {
        balance =
          (await connection.getBalance(wallet.publicKey, "confirmed")) /
          _lamportsPerSol;
        setSolBalance(balance);
      } catch (e) {
        addError(e);
      }
    } else {
      addError("Connect your wallet");
    }
  };

  React.useEffect(() => {
    if (
      !wallet.connected &&
      wallet.wallet &&
      wallet.wallet.readyState === WalletReadyState.Installed
    )
      wallet.connect().catch(() => {});
  }, [wallet.wallet, wallet.connected]);

  React.useEffect(() => {
    if (solConfig && wallet?.publicKey && wallet?.connected && connection)
      getUserSOLBalance(solConfig.lamportsPerSol);
  }, [solConfig, wallet.publicKey, wallet.connected, connection]);

  return {
    publicKey: solConfig ? wallet.publicKey : "",
    connected: solConfig ? wallet.connected : false,
    wallet,
    solBalance,
    connection,
  };
};
