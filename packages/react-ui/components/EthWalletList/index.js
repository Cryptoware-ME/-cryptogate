import { useState, useEffect } from "react";
import { useMultichain } from "@cryptogate/react-providers";
import styles from "./walletlist.module.css";
import WalletListing from "./WalletListing";
import DCBMetamask from "../../assets/images/wallets/dcb-metamask-icon.svg";
import DCBWalletconnect from "../../assets/images/wallets/dcb-walletconnect.svg";
import DCBFortmatic from "../../assets/images/wallets/dcb-fortmatic.svg";
import DCBCoinbase from "../../assets/images/wallets/dcb-coinbase.png";
import detectEthereumProvider from "@metamask/detect-provider";
import { isMobile } from "react-device-detect";

const EthWalletList = ({ EthWallets }) => {
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

  const regHandle = (name, connector) => {
    activate(connector);
  };

  return (
    <div className={styles.walletListWrapper}>
      {EthWallets.metamask && (
        <WalletListing
          heading="Metamask"
          iconSrc={DCBMetamask}
          onWalletCall={injectedHandle}
        />
      )}
      {EthWallets.coinbase && (
        <WalletListing
          heading="Coinbase"
          iconSrc={DCBCoinbase}
          onWalletCall={() => regHandle("Coinbase Wallet", wallets.Coinbase)}
        />
      )}
      {EthWallets.fortmatic && (
        <WalletListing
          heading="Fortmatic"
          iconSrc={DCBFortmatic}
          onWalletCall={() => regHandle("Fortmatic", wallets.fortmatic)}
        />
      )}
      {EthWallets.walletConnect && (
        <WalletListing
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
