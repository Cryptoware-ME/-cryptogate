import React from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { SolDappContext } from '../providers/SolDapp';
import { SolWalletsContext } from '../providers/SolWallets';

export const useSolana = () => {
    const wallet = useWallet();
    const connection = useConnection();

    const dappCtx = React.useContext(SolDappContext);
    const walletsCtx = React.useContext(SolWalletsContext);

    if (dappCtx === undefined) {
        throw new Error('useSolana must be used within a SolDappContext')
    }
    if (walletsCtx === undefined) {
        throw new Error('useSolana must be used within a SolDappContext')
    }

    const { setSolConfig } = dappCtx;
    const Wallets = walletsCtx;

    return {
        ...wallet,
        ...connection,
        wallets: Wallets,
        setSolConfig
    }
}
