import { ConnectedMenu } from "../ConnectWalletComponent";
declare const ConnectMenu: ({ ChosenConnectedMenu, onClose, isOpen, Store, }: {
    ChosenConnectedMenu: ConnectedMenu;
    onClose: any;
    isOpen: boolean;
    Store?: {
        Tokens?: string[] | undefined;
        NFTs?: string[] | undefined;
    } | undefined;
}) => JSX.Element;
export default ConnectMenu;
