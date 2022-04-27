import { useState, useEffect } from "react";
import { useMultichain } from "@cryptogate/react-providers";
const styles = require("./walletlist.module.css");
import WalletListing from "./WalletListing";
const DCBMetamask = require("../../assets/images/wallets/dcb-metamask-icon.svg");
const DCBWalletconnect = require("../../assets/images/wallets/dcb-walletconnect.svg");
// const DCBFortmatic = require("../../assets/images/wallets/dcb-fortmatic.svg");
const DCBCoinbase = require("../../assets/images/wallets/dcb-coinbase.png");
import detectEthereumProvider from "@metamask/detect-provider";
import { isMobile } from "react-device-detect";

const EthWalletList = ({ EthWallets }: { EthWallets: any }) => {
  const { ethereum } = useMultichain();
  const { activateBrowserWallet, activate, wallets } = ethereum;
  const [openMetamaskAllow, setOpenMetamaskAllow] = useState(false);

  useEffect(() => {
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

  const regHandle = (name: String, connector: any) => {
    activate(connector);
  };

  return (
    <div className={styles.walletListWrapper}>
      {EthWallets.metamask && (
        <WalletListing
          isWhite={false}
          noBottomBorder={false}
          heading="Metamask"
          iconSrc={DCBMetamask}
          onWalletCall={injectedHandle}
        />
      )}
      {EthWallets.coinbase && (
        <WalletListing
          isWhite={false}
          noBottomBorder={false}
          heading="Coinbase"
          iconSrc={DCBCoinbase}
          onWalletCall={() => regHandle("Coinbase Wallet", wallets.Coinbase)}
        />
      )}
      {/* {EthWallets.fortmatic && (
        <WalletListing
          heading="Fortmatic"
          iconSrc={DCBFortmatic}
          onWalletCall={() => regHandle("Fortmatic", wallets.fortmatic)}
        />
      )} */}
      {EthWallets.walletConnect && (
        <WalletListing
          isWhite={false}
          noBottomBorder={true}
          heading="WalletConnect"
          iconSrc={DCBWalletconnect}
          onWalletCall={() =>
            regHandle("Wallet Connect API", wallets.WalletConnect)
          }
        />
      )}
    </div>
  );
};

export default EthWalletList;
