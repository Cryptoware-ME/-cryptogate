import { useDapp } from '@cryptogate/react-providers';

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
declare const ConnectWalletComponent: ({ message, onSign, EthWalletList, SolWalletList, WalletListStyle, ConnectWalletButtonClass, ConnectWalletButtonText, }: {
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
        background?: string | undefined;
        marginTop?: any;
    } | undefined;
    ConnectWalletButtonClass?: string | undefined;
    ConnectWalletButtonText?: string | undefined;
}) => JSX.Element;

declare const getWithExpiry: (key: any) => any;

declare const setWithExpiry: (key: any, value: any, ttl: any) => void;

declare const ConnectWalletButton: ({ setOpenOptions, onSign, message, btnClass, btnText, }: {
    setOpenOptions: any;
    onSign?: any;
    message?: string | undefined;
    btnClass?: string | undefined;
    btnText?: string | undefined;
}) => JSX.Element;

declare const ConnectWalletList: ({ openOptions, setOpenOptions, EthWalletList, SolWalletList, WalletListStyle, }: {
    openOptions: boolean;
    setOpenOptions: any;
    EthWalletList?: EthWallets[] | undefined;
    SolWalletList?: SolWallets[] | undefined;
    WalletListStyle?: any;
}) => JSX.Element;

export { ConnectWalletButton, ConnectWalletComponent, ConnectWalletList, EthWallets, SolWallets, getWithExpiry, setWithExpiry };
