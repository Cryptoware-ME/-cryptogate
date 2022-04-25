import React, { ReactNode, useEffect, useState } from "react";
import { Chain, NodeUrls, useNetwork } from "@usedapp/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { LedgerConnector } from "@web3-react/ledger-connector";
import { TrezorConnector } from "@web3-react/trezor-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

export interface EthWalletsContextProviderProps {
  children?: ReactNode;
  config: {
    readOnlyUrls: NodeUrls,
    appName: string,
    appEmail: string,
    appUrl: string,
    appLogo: string,
    pollingInterval: number,
    networks: (Chain | undefined)[]
  }
}

export interface EthWallets {
  WalletConnect?: WalletConnectConnector,
  Coinbase?: WalletLinkConnector,
  Ledger?: LedgerConnector,
  Trezor?: TrezorConnector
}

export const EthWalletsContext = React.createContext({} as EthWallets);

export const EthWalletsContextProvider = ({ config, children }: EthWalletsContextProviderProps) => {
  const { network, update: updateNetwork } = useNetwork();

  const [Wallets, setWallets] = useState({} as EthWallets);

  useEffect(() => {
    if(config && config.networks){
      updateNetwork({ chainId: config.networks[0]?.chainId || 4});
    }
  }, [config]);

  useEffect(() => {
    if (network.chainId && config) {
      setWallets({
        WalletConnect: new WalletConnectConnector({
          rpc: {
            [network.chainId]: config.readOnlyUrls[network.chainId].toString() || "",
          },
          bridge: "https://bridge.walletconnect.org",
          qrcode: true,
          supportedChainIds: [network.chainId],
          chainId: network.chainId,
        }),
        Coinbase: new WalletLinkConnector({
          url: config.readOnlyUrls[network.chainId].toString() || "",
          appName: config.appName,
          appLogoUrl: config.appLogo,
          supportedChainIds: [network.chainId],
          darkMode: true,
        }),
        Ledger: new LedgerConnector({
          chainId: network.chainId,
          url: config.readOnlyUrls[network.chainId].toString() || "",
          pollingInterval: config.pollingInterval
        }),
        Trezor: new TrezorConnector({
          chainId: network.chainId,
          url: config.readOnlyUrls[network.chainId].toString() || "",
          pollingInterval: config.pollingInterval,
          manifestEmail: config.appEmail,
          manifestAppUrl: config.appUrl,
        }),
      });
    }
  }, [network, config]);

  return (
    <EthWalletsContext.Provider value={{ ...Wallets }}>
      {children}
    </EthWalletsContext.Provider>
  );
};