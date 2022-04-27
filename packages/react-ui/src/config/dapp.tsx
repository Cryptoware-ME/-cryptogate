import { getChainById, ChainId } from '@usedapp/core';

const DappConfig = {
    readOnlyUrls: {
      [ChainId.Mainnet]: 'https://eth-node.oasisx.world/',
      [ChainId.Rinkeby]: 'https://rink-node.oasisx.world/',
      [ChainId.Mumbai]: 'https://rpc.maticvigil.com/',
      [ChainId.Polygon]: 'https://polygon-node.oasisx.world/',
      [ChainId.BSC]: 'https://bsc-node.oasisx.world/',
      [ChainId.Avalanche]: 'https://avalanche-node.oasisx.world/',
    },
    appName: 'Cryptogate',
    appEmail: 'cryptoware@yahoo.com',
    appUrl: 'cryptoware.me',
    appLogo: '',
    pollingInterval: 1000,
    networks: [
      getChainById(ChainId.Rinkeby), 
      getChainById(ChainId.Mainnet), 
      getChainById(ChainId.Mumbai),
      getChainById(ChainId.Polygon),
      getChainById(ChainId.BSC),
      getChainById(ChainId.Avalanche)
    ],
    notifications: {
      checkInterval: 1000,
      expirationPeriod: 10000,
    },
    autoConnect: false,
}

export default DappConfig;