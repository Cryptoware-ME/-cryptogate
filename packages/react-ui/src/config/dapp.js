import {ChainId, Localhost, Mainnet, Rinkeby} from '@usedapp/core';

const stage = 'MAINNET'
console.log(stage)
console.log(`Network: ${stage === 'development' ? 'DEVNET' : (stage === 'staging' ? 'RINKEBY' : 'MAINNET')}`);

const DappConfig = {
    readOnlyChainId: stage === 'development' ? ChainId.Localhost : (stage === 'staging' ? ChainId.Rinkeby : ChainId.Mainnet),
    readOnlyUrls: {
        [ChainId.Localhost]: 'http://127.0.0.1:8545',
        [ChainId.Mainnet]: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
        [ChainId.Rinkeby]: `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`
    },
    pollingInterval: 1000,
    networks: [
        stage === 'development' ? Localhost : (stage === 'staging' ? Rinkeby : Mainnet)
    ],
    notifications: {
        checkInterval: 100,
        expirationPeriod: 10000,
    }
}

export default DappConfig;