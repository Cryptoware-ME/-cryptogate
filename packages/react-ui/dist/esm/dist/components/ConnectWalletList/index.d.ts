import { EthWallets, SolWallets } from "../ConnectWalletComponent";
declare const ConnectWalletList: ({ openOptions, setOpenOptions, EthWalletList, SolWalletList, }: {
    openOptions: boolean;
    setOpenOptions: any;
    EthWalletList: EthWallets[];
    SolWalletList: SolWallets[];
}) => JSX.Element;
export default ConnectWalletList;
