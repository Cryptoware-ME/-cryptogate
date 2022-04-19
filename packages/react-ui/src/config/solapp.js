import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

import {
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter
} from '@solana/wallet-adapter-wallets';

import { clusterApiUrl } from '@solana/web3.js';

const stage = 'staging'
const network = stage === 'development' ? WalletAdapterNetwork.Devnet : stage === 'staging' ? WalletAdapterNetwork.Testnet : WalletAdapterNetwork.Mainnet

const SolappConfig = {
    solNetwork: network,
    wallets: [
        new PhantomWalletAdapter(),
        new SlopeWalletAdapter(),
        new SolflareWalletAdapter({ network }),
        new SolletExtensionWalletAdapter({ network })
    ],
    endpoint: clusterApiUrl(network),
    autoConnect: false,
    lamportsPerSol: 1000000000
}

export default SolappConfig;