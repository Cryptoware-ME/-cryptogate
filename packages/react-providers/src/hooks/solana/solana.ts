import React from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react"
import { WalletReadyState } from "@solana/wallet-adapter-base";

export const useSolana = () => {
    const { autoConnect, wallets, wallet, publicKey, connecting, connected, disconnecting, select, connect, disconnect, sendTransaction, signTransaction, signAllTransactions, signMessage } = useWallet();
    const { connection } = useConnection();

    React.useEffect(() => {
        if (
            !connected &&
            wallet &&
            wallet.readyState === WalletReadyState.Installed
        ) {
            connect().catch(() => alert("user rejected"));
        }
    }, [wallet, connected]);

    return { autoConnect, wallets, wallet, publicKey, connecting, connected, disconnecting, select, connect, disconnect, sendTransaction, signTransaction, signAllTransactions, signMessage, connection }
}