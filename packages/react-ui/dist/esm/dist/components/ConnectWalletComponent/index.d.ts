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
    onSign?: any;
    EthWalletList: EthWallets[];
    SolWalletList: SolWallets[];
}) => JSX.Element;
