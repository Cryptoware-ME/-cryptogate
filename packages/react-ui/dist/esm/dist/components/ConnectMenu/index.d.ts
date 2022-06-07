import { ConnectedMenu } from "../ConnectWalletComponent";
export declare const ConnectMenu: ({ ChosenConnectedMenu, onClose, onDisconnect, isOpen, Store, }: {
    ChosenConnectedMenu: ConnectedMenu;
    onClose: any;
    isOpen: boolean;
    onDisconnect?: any;
    Store?: {
        Tokens?: string[] | undefined;
        NFTs?: string[] | undefined;
    } | undefined;
}) => JSX.Element;
