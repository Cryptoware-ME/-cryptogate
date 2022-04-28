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

export { ConnectWalletComponent, EthWallets, SolWallets };
