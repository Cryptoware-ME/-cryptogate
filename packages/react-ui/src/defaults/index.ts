import { Active, Disabled } from "./components";
import { ChainId } from "../../cryptogate"

export { Active, Disabled };

export const defaults = {
  NetworkChainIds: [ChainId.Mainnet],
  ConnectWalletButtonText: "Connect Wallet",
  SignatureMessage:
    "This is the default signaure message provided by Cryptogate.",
  NetworkAlertMessage: "Selected network is not supported.",
};
