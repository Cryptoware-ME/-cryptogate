import { ConnectedMenu } from "../components/ConnectWalletComponent";

import { Active, Disabled } from "./components";

export { Active, Disabled };

export const defaults = {
  EthWallets: [],
  SolWallets: [],
  // ConnectedMenu: ConnectedMenu.WALLETINFORMATION,
  NetworkChainIds: [1],
  ConnectWalletButtonText: "Connect Wallet",
  SignatureMessage:
    "This is the default signaure message provided by Cryptogate.",
  NetworkAlertMessage: "Selected network is not supported.",
  WalletListStyle: {
    background: "white",
    top: "0",
  },
};
