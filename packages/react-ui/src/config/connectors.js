import {WalletConnectConnector} from '@web3-react/walletconnect-connector';

import DappConfig from './dapp.js';
import {FortmaticConnector} from "@web3-react/fortmatic-connector";
import {TorusConnector} from "@web3-react/torus-connector";
import {WalletLinkConnector} from "@web3-react/walletlink-connector";

const POLLING_INTERVAL = DappConfig.pollingInterval;
const FORTMATIC_API_KEY = process.env.REACT_APP_FORTMATIC;
const RPC_URLS = DappConfig.readOnlyUrls[DappConfig.readOnlyChainId];

const walletconnect = new WalletConnectConnector({
    rpc: {[DappConfig.readOnlyChainId]: RPC_URLS},
    bridge: 'https://bridge.walletconnect.org',
    infuraId: process.env.REACT_APP_INFURA_KEY,
    qrcode: true,
    pollingInterval: POLLING_INTERVAL,
    supportedChainIds: [DappConfig.readOnlyChainId],
    chainId: DappConfig.readOnlyChainId,
});

const fortmatic = new FortmaticConnector({
    apiKey: FORTMATIC_API_KEY,
    chainId: DappConfig.readOnlyChainId
});

const torus = new TorusConnector({chainId: DappConfig.readOnlyChainId});

const coinbase = new WalletLinkConnector({
    url: RPC_URLS,
    appName: 'Wallet Provider',
    // appLogoUrl: '/logo192.png',
    supportedChainIds: [DappConfig.readOnlyChainId],
    darkMode: true
})

export default {
    walletconnect,
    fortmatic,
    torus,
    coinbase
}