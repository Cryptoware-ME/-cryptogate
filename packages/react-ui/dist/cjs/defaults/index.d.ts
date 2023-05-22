import { Active, Disabled } from "./components";
import { ChainId } from "@cryptogate/react-providers";
export { Active, Disabled };
export declare const defaults: {
    NetworkChainIds: ChainId[];
    ConnectWalletButtonText: string;
    SignatureMessage: {
        msg: string;
        address: boolean;
        timestamp: boolean;
    };
    NetworkAlertMessage: string;
    LocalStorage: boolean;
};
