import { useState, useEffect } from "react";
import { useMultichain } from "@cryptogate/react-providers";
import WalletListing from "./WalletListing";
import detectEthereumProvider from "@metamask/detect-provider";
import { isMobile } from "react-device-detect";
import { EthWallets } from "../ConnectWalletComponent";
import DCBMetamask from "../../assets/images/wallets/dcb-metamask-icon.svg";
import DCBWalletconnect from "../../assets/images/wallets/dcb-walletconnect.svg";
// import DCBCoinbase from "../../assets/images/wallets/dcb-coinbase.png";
const DCBCoinbase = "";

const EthWalletListComp = ({
  EthWalletList,
}: {
  EthWalletList: EthWallets[];
}) => {
  const { ethereum } = useMultichain();
  const { activateBrowserWallet, activate, wallets } = ethereum;
  const [openMetamaskAllow, setOpenMetamaskAllow] = useState(false);

  useEffect(() => {
    detectEthereumProvider().then((provider: any) => {
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
    <div
      style={{
        border: "black 1px solid",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    >
      {(EthWalletList.indexOf(EthWallets.all) > -1 ||
        EthWalletList.indexOf(EthWallets.metamask) > -1) && (
        <WalletListing
          noBottomBorder={
            EthWalletList.indexOf(EthWallets.metamask) ==
            EthWalletList.length - 1
              ? true
              : false
          }
          heading="Metamask"
          iconSrc={DCBMetamask}
          onWalletCall={injectedHandle}
        />
      )}
      {(EthWalletList.indexOf(EthWallets.all) > -1 ||
        EthWalletList.indexOf(EthWallets.coinbase) > -1) && (
        <WalletListing
          noBottomBorder={
            EthWalletList.indexOf(EthWallets.coinbase) ==
            EthWalletList.length - 1
              ? true
              : false
          }
          heading="Coinbase"
          iconSrc={DCBCoinbase}
          onWalletCall={() => regHandle("Coinbase Wallet", wallets.Coinbase)}
        />
      )}
      {(EthWalletList.indexOf(EthWallets.all) > -1 ||
        EthWalletList.indexOf(EthWallets.walletConnect) > -1) && (
        <WalletListing
          noBottomBorder={
            EthWalletList.indexOf(EthWallets.all) > -1 ||
            EthWalletList.indexOf(EthWallets.walletConnect) ==
              EthWalletList.length - 1
              ? true
              : false
          }
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

export default EthWalletListComp;
