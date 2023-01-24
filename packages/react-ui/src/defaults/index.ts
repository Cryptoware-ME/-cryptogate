import { Active, Disabled } from "./components";
import { ChainId } from "@cryptogate/react-providers"

/**
 * This is the default export for the ConnectWalletButton component.
 */
export { Active, Disabled };

export const defaults = {
  NetworkChainIds: [ChainId.Mainnet],
  ConnectWalletButtonText: "Connect Wallet",
  SignatureMessage:
    "This is the default signaure message provided by Cryptogate.",
  NetworkAlertMessage: "Selected network is not supported.",
};
