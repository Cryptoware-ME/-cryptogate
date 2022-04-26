import { getChainById, ChainId } from '@usedapp/core';

const DappConfig = {
    readOnlyUrls: {
      [ChainId.Mainnet]: `${process.env.NEXT_PUBLIC_NODE_URL_MAINNET}`,
      [ChainId.Rinkeby]: `${process.env.NEXT_PUBLIC_NODE_URL_RINKEBY}`,
      [ChainId.Mumbai]: `${process.env.NEXT_PUBLIC_NODE_URL_MUMBAI}`,
      [ChainId.Polygon]: `${process.env.NEXT_PUBLIC_NODE_URL_POLYGON}`,
      [ChainId.BSC]: `${process.env.NEXT_PUBLIC_NODE_URL_BSC}`,
      [ChainId.Avalanche]: `${process.env.NEXT_PUBLIC_NODE_URL_AVALANCHE}`,
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