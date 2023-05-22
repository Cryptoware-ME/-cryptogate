import { Active, Disabled } from "./components";
import { ChainId } from "@cryptogate/react-providers"

export { Active, Disabled };

export const defaults = {
  NetworkChainIds: [ChainId.Mainnet],
  ConnectWalletButtonText: "Connect Wallet",
  SignatureMessage: {
    msg: "This is the default signature message provided by Cryptogate",
    address: true,
    timestamp: true
  },
  NetworkAlertMessage: "Selected network is not supported.",
  LocalStorage: false
};
