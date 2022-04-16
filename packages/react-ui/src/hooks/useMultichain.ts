import { useNetwork } from '@usedapp/core';
import { useEthereum } from './useEthereum';
import { useSolana } from './useSolana';

export const useMultichain = () => {
    return {
        network: useNetwork() || 'Solana',
        ethereum: useEthereum(),
        solana: useSolana() 
    }
}
