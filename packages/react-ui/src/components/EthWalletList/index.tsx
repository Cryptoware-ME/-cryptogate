import { useState, useEffect } from "react";
import { useMultichain } from "@cryptogate/react-providers";
import WalletListing from "./WalletListing";
import detectEthereumProvider from "@metamask/detect-provider";
import { isMobile } from "react-device-detect";
import { EthWallets } from "../ConnectWalletComponent";
import MetaMask from "../../wallets/MetaMask/meta-mask";
import BraveWallet from "../../wallets/BraveWallet/brave-wallet";
import CoinBaseWallet from "../../wallets/CoinbaseWallet/coin-base";
import TrustWallet from "../../wallets/TrustWallet/trust-wallet";




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
      {(EthWalletList.indexOf(EthWallets.ALL) > -1 ||
        EthWalletList.indexOf(EthWallets.METAMASK) > -1) && (
        // <WalletListing
        //   noBottomBorder={
        //     EthWalletList.indexOf(EthWallets.METAMASK) ==
        //     EthWalletList.length - 1
        //       ? true
        //       : false
        //   }
        //   heading="Metamask"
        //   iconSrc={DCBMetamask}
        //   onWalletCall={injectedHandle}
        // />
        <MetaMask/>
      )} 
      
       {(EthWalletList.indexOf(EthWallets.ALL) > -1 ||
        EthWalletList.indexOf(EthWallets.BRAVEWALLET) > -1) && (
        // <WalletListing
        //   noBottomBorder={
        //     EthWalletList.indexOf(EthWallets.METAMASK) ==
        //     EthWalletList.length - 1
        //       ? true
        //       : false
        //   }
        //   heading="Metamask"
        //   iconSrc={DCBMetamask}
        //   onWalletCall={injectedHandle}
        // />
        <BraveWallet/>
      )}





      {(EthWalletList.indexOf(EthWallets.ALL) > -1 ||
        EthWalletList.indexOf(EthWallets.WALLETCONNECT) > -1) && (
        // <WalletListing
        //   noBottomBorder={
        //     EthWalletList.indexOf(EthWallets.COINBASE) ==
        //     EthWalletList.length - 1
        //       ? true
        //       : false
        //   }
        //   heading="Coinbase"
        //   iconSrc={DCBCoinbase}
        //   onWalletCall={() => regHandle("Coinbase Wallet", wallets.Coinbase)}
        // />
        <TrustWallet/>
      )}



      {(EthWalletList.indexOf(EthWallets.ALL) > -1 ||
        EthWalletList.indexOf(EthWallets.COINBASE) > -1) && (
        // <WalletListing
        //   noBottomBorder={
        //     EthWalletList.indexOf(EthWallets.ALL) > -1 ||
        //     EthWalletList.indexOf(EthWallets.WALLETCONNECT) ==
        //       EthWalletList.length - 1
        //       ? true
        //       : false
        //   }
        //   heading="WalletConnect"
        //   iconSrc={DCBWalletconnect}
        //   onWalletCall={() =>
        //     regHandle("Wallet Connect API", wallets.WalletConnect)
        //   }
        // />
        <CoinBaseWallet />
      
      )}
    </div>
  );
};

export default EthWalletListComp;
