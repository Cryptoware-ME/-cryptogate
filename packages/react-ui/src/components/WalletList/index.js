import React from "react";

import WalletListing from "./WalletListing";

import DCBMetamask from "../../assets/images/wallets/dcb-metamask-icon.svg";
import DCBWalletconnect from "../../assets/images/wallets/dcb-walletconnect.svg";
import DCBFortmatic from "../../assets/images/wallets/dcb-fortmatic.svg";
import DCBTorus from "../../assets/images/wallets/dcb-torus.svg";
import DCBCoinbase from "../../assets/images/wallets/dcb-coinbase.png";

import { useEthers } from "@usedapp/core";

import config from "../../config";

import { isMobile } from "react-device-detect";
import detectEthereumProvider from "@metamask/detect-provider";

import "./styles.scss";

const WalletList = ({
  metamask,
  coinbase,
  fortmatic,
  torus,
  walletConnect,
}) => {
  const { activateBrowserWallet, activate } = useEthers();
  const [openMetamaskAllow, setOpenMetamaskAllow] = React.useState(false);

  React.useEffect(() => {
    detectEthereumProvider().then((provider) => {
      setOpenMetamaskAllow(!!provider);
    });
  }, []);

  const injectedHandle = () => {
    const currentLink =
      window.location.hostname +
      window.location.pathname +
      window.location.search;

    const metaMaskDeepLink = "https://metamask.app.link/dapp/" + currentLink;

    if (openMetamaskAllow) {
      activateBrowserWallet();
    } else {
      if (isMobile) {
        window.open(metaMaskDeepLink, "_blank");
      } else {
        alert("You should install MetaMask browser extension");
      }
    }
  };

  const regHandle = (name, connector) => {
    activate(connector);
  };

  return (
    <div className="walletListWrapper">
      {metamask && (
        <WalletListing
          heading="Metamask"
          iconSrc={DCBMetamask}
          onWalletCall={injectedHandle}
        />
      )}
      {coinbase && (
        <WalletListing
          heading="Coinbase"
          iconSrc={DCBCoinbase}
          onWalletCall={() =>
            regHandle("Coinbase Wallet", config.Connectors.coinbase)
          }
        />
      )}
      {fortmatic && (
        <WalletListing
          heading="Fortmatic"
          iconSrc={DCBFortmatic}
          onWalletCall={() =>
            regHandle("Fortmatic", config.Connectors.fortmatic)
          }
        />
      )}
      {torus && (
        <WalletListing
          heading="Torus"
          iconSrc={DCBTorus}
          onWalletCall={() => regHandle("Torus", config.Connectors.torus)}
        />
      )}
      {walletConnect && (
        <WalletListing
          noBottomBorder={true}
          heading="WalletConnect"
          iconSrc={DCBWalletconnect}
          onWalletCall={() =>
            regHandle("Wallet Connect API", config.Connectors.walletconnect)
          }
        />
      )}
    </div>
  );
};

export default WalletList;
