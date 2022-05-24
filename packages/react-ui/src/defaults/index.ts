export * from "./components";

export const defaults = {
  EthWallets: [],
  SolWallets: [],
  NetworkChainIds: [1],
  ConnectedMenu: true,
  ConnectWalletButtonText: "Connect Wallet",
  SignatureMessage:
    "This is the default signaure message provided by Cryptogate.",
  NetworkAlertMessage: "Selected network is not supported.",
  WalletListStyle: {
    background: "white",
    top: "0",
  },
};
