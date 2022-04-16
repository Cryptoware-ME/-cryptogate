import { useNetwork } from '@usedapp/core';
import { useEthereum } from './useEthereum';
import { useSolana } from './useSolana';
export var useMultichain = function () {
    return {
        network: useNetwork() || 'Solana',
        ethereum: useEthereum(),
        solana: useSolana()
    };
};
//# sourceMappingURL=useMultichain.js.map