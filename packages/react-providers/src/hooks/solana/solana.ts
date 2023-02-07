import React from "react";
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletReadyState } from "@solana/wallet-adapter-base";
import { useConfig } from "../../providers";

export const useSolana = () => {
    const solWalletData = useWallet();
    const { solConfig } = useConfig()

    React.useEffect(() => {
        if (
            solConfig?.autoConnect &&
            !solWalletData.connected &&
            solWalletData.wallet &&
            solWalletData.wallet.readyState === WalletReadyState.Installed
        ) {
            solWalletData.connect().catch(() => alert("user rejected"));
        }
    }, [solWalletData.wallet, solWalletData.connected]);

    return { ...solWalletData }
}