import { useDapp } from "@cryptogate/react-providers";
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
export declare const ConnectWalletComponent: ({ networkChainId, message, onSign, EthWalletList, SolWalletList, WalletListStyle, ConnectWalletButtonClass, ConnectWalletButtonText, ConnectMenu, }: {
    networkChainId?: number[] | undefined;
    message?: string | undefined;
    onSign?: ((key: {
        address: string;
        message: string;
        signature: string;
        chain: typeof useDapp.ChainId;
    }) => void) | undefined;
    EthWalletList?: EthWallets[] | undefined;
    SolWalletList?: SolWallets[] | undefined;
    WalletListStyle?: {
        top?: any;
        background?: string | undefined;
    } | undefined;
    ConnectWalletButtonClass?: string | undefined;
    ConnectWalletButtonText?: string | undefined;
    ConnectMenu?: boolean | undefined;
}) => JSX.Element;
