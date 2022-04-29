import { EthWallets, SolWallets } from "../ConnectWalletComponent";
declare const ConnectWalletList: ({ openOptions, setOpenOptions, EthWalletList, SolWalletList, WalletListBG, }: {
    openOptions: boolean;
    setOpenOptions: any;
    EthWalletList: EthWallets[];
    SolWalletList: SolWallets[];
    WalletListBG: string;
}) => JSX.Element;
export default ConnectWalletList;
