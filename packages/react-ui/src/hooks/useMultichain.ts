import { useEtherBalance, useNetwork } from '@usedapp/core';
import { useEthereum } from './useEthereum';
import { useSolana } from './useSolana';

export const useMultichain = () => {
    const { account } = useEthereum();
    console.log(account);
    return {
        network: useNetwork() || 'Solana',
        ethereum: useEthereum(),
        solana: useSolana(),
        etherBalance: useEtherBalance(account)
    }
}
