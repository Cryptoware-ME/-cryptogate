import { useEthereum } from './useEthereum';
import { useSolana } from './useSolana';

export const useMultichain = () => {
    return {
        ethereum: useEthereum(),
        solana: useSolana()
    }
}
