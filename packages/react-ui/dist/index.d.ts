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
    onSign?: ((key: {
        address: string;
        message: string;
        signature: string;
        chain: any;
    }) => void) | undefined;
    EthWalletList?: EthWallets[] | undefined;
    SolWalletList?: SolWallets[] | undefined;
}) => JSX.Element;

declare const getWithExpiry: (key: any) => any;

declare const setWithExpiry: (key: any, value: any, ttl: any) => void;

export { ConnectWalletComponent, EthWallets, SolWallets, getWithExpiry, setWithExpiry };
