import React, { useEffect, useState } from "react";
import { useNetwork } from "@usedapp/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { LedgerConnector } from "@web3-react/ledger-connector";
import { TrezorConnector } from "@web3-react/trezor-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

export const EthWalletsContext = React.createContext();

export const EthWalletsContextProvider = ({ config, children }) => {
  const { network } = useNetwork();

  const [Wallets, setWallets] = useState({});

  useEffect(() => {
    if (network.chainId) {
      setWallets({
        WalletConnect: new WalletConnectConnector({
          rpc: {
            [network.chainId]: config.readOnlyUrls[network.chainId] || "",
          },
          bridge: "https://bridge.walletconnect.org",
          qrcode: true,
          pollingInterval: config.pollingInterval,
          supportedChainIds: [network.chainId],
          chainId: network.chainId,
        }),
        Coinbase: new WalletLinkConnector({
          url: config.readOnlyUrls[network.chainId] || "",
          appName: config.appName,
          appLogoUrl: config.appLogoUrl,
          supportedChainIds: [network.chainId],
          darkMode: true,
        }),
        Ledger: new LedgerConnector({
          chainId: network.chainId,
          url: config.readOnlyUrls[network.chainId] || ""
        }),
        Trezor: new TrezorConnector({
          chainId: network.chainId,
          url: config.readOnlyUrls[network.chainId] || ""
        }),
      });
    }
  }, [network]);

  return (
    <EthWalletsContext.Provider value={{ Wallets }}>
      {children}
    </EthWalletsContext.Provider>
  );
};