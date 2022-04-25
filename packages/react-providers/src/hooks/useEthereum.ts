import React from 'react';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { EthDappContext } from '../providers/EthDapp';
import { EthContractsContext } from '../providers/EthContracts';
import { EthWalletsContext } from '../providers';

export const useEthereum = () => {
    const ethereum = useEthers();

    const dappCtx = React.useContext(EthDappContext);
    const walletsCtx = React.useContext(EthWalletsContext);
    const contractsCtx = React.useContext(EthContractsContext);

    if (dappCtx === undefined) {
        throw new Error('useEthereum must be used within a EthDappContext')
    }
    if (walletsCtx === undefined) {
        throw new Error('useEthereum must be used within a EthWalletsContext')
    }
    if (contractsCtx === undefined) {
        throw new Error('useEthereum must be used within a EthContractsContext')
    }

    const { setEthConfig } = dappCtx;
    const Wallets = walletsCtx;

    const getContract = (name: string) => contractsCtx[name];

    return {
        ...ethereum,
        wallets: Wallets,
        contracts: contractsCtx,
        getContract,
        getEthBalance: useEtherBalance,
        setEthConfig
    }
}
