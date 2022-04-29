/// <reference types="react" />
export declare enum EthWallets {
    all = "all",
    metamask = "metamask",
    walletConnect = "walletConnect",
    coinbase = "coinbase"
}
export declare enum SolWallets {
    all = "all",
    phantom = "phantom",
    slope = "slope",
    solflare = "solflare"
}
export declare const ConnectWalletComponent: ({ message, onSign, EthWalletList, SolWalletList, }: {
    message?: string | undefined;
    onSign?: ((key: {
        address: string;
        message: string;
        signature: string;
        chain: any;
    }) => void) | undefined;
    EthWalletList?: EthWallets[] | undefined;
    SolWalletList?: SolWallets[] | undefined;
}) => JSX.Element;
