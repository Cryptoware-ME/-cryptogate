/// <reference types="react" />
declare enum EthWallets {
    all = "all",
    metamask = "metamask",
    walletConnect = "walletConnect",
    coinbase = "coinbase"
}
declare enum SolWallets {
    all = "all",
    phantom = "phantom",
    slope = "slope",
    solflare = "solflare"
}
declare const ConnectWalletComponent: ({ message, onSign, EthWalletList, SolWalletList, }: {
    message?: string | undefined;
    onSign?: any;
    EthWalletList: EthWallets[];
    SolWalletList: SolWallets[];
}) => JSX.Element;

declare const getWithExpiry: (key: any) => any;

declare const setWithExpiry: (key: any, value: any, ttl: any) => void;

export { ConnectWalletComponent, EthWallets, SolWallets, getWithExpiry, setWithExpiry };
