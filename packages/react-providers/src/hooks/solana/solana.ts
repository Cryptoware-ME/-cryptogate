import React from "react";
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletReadyState } from "@solana/wallet-adapter-base";

export const useSolana = () => {
    const solWalletData = useWallet();

    React.useEffect(() => {
        if (
            !solWalletData.connected &&
            solWalletData.wallet &&
            solWalletData.wallet.readyState === WalletReadyState.Installed
        ) {
            solWalletData.connect().catch(() => alert("user rejected"));
        }
    }, [solWalletData.wallet, solWalletData.connected]);

    return { ...solWalletData }
}