import { EthWallets, SolWallets } from "../ConnectWalletComponent";
export declare const ConnectWalletList: ({ openOptions, setOpenOptions, EthWalletList, SolWalletList, WalletListStyle, }: {
    openOptions: boolean;
    setOpenOptions: any;
    EthWalletList?: EthWallets[] | undefined;
    SolWalletList?: SolWallets[] | undefined;
    WalletListStyle?: {
        top?: any;
        background?: string | undefined;
    } | undefined;
}) => JSX.Element;
