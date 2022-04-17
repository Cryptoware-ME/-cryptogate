import { useEtherBalance, useEthers, useNetwork } from '@usedapp/core';
import { useEthereum } from './useEthereum';
import { useSolana } from './useSolana';

export const useMultichain = () => {
    const { account } = useEthers();
    return {
        network: useNetwork() || 'Solana',
        ethereum: useEthereum(),
        solana: useSolana(),
        etherBalance: useEtherBalance(account)
    }
}
