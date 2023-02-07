import React from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react"
import { WalletReadyState } from "@solana/wallet-adapter-base";
import { useConfig, useErrorsBag } from "../../providers";

export const useSolana = () => {
    const { autoConnect, wallets, wallet, publicKey, connecting, connected, disconnecting, select, connect, disconnect, sendTransaction, signTransaction, signAllTransactions, signMessage } = useWallet();
    const { connection } = useConnection();
    const { solConfig } = useConfig();
    const { addError } = useErrorsBag()
    const [solBalance, setSolBalance] = React.useState(0);

    const getUserSOLBalance = async (
        _lamportsPerSol: number
    ) => {
        let balance = 0;
        try {
            balance =
                (await connection.getBalance(publicKey, "confirmed")) /
                _lamportsPerSol;
            setSolBalance(balance);
        } catch (e) {
            addError(e);
        }
    };

    React.useEffect(() => {
        if (
            !connected &&
            wallet &&
            wallet.readyState === WalletReadyState.Installed
        )
            connect().catch(() => alert("user rejected"));
    }, [wallet, connected]);

    React.useEffect(() => {
        if (solConfig && publicKey && connected && connection)
            getUserSOLBalance(solConfig.lamportsPerSol);
    }, [solConfig, publicKey, connected, connection]);

    return { autoConnect, wallets, wallet, publicKey, connecting, connected, disconnecting, select, connect, disconnect, solBalance, sendTransaction, signTransaction, signAllTransactions, signMessage, connection }
}