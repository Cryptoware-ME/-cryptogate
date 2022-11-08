import React from "react";
import WalletListing from "./WalletListing";
import { EthWallets } from "../ConnectWalletComponent";
import { useEthereum } from "../../../cryptogate";

const EthWalletListComp = ({
  EthWalletList,
}: {
  EthWalletList: EthWallets[];
}) => {
  const {
    activateBraveWallet,
    activateMetamaskWallet,
    activateCoinbaseWallet,
    activateWalletConnect,
  } = useEthereum();

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
        <WalletListing
          heading="Metamask"
          iconSrc={"/imgs/meta-mask.png"}
          onWalletCall={activateMetamaskWallet}
        />
      )}

      {(EthWalletList.indexOf(EthWallets.ALL) > -1 ||
        EthWalletList.indexOf(EthWallets.BRAVEWALLET) > -1) && (
        <WalletListing
          heading="Brave Wallet"
          iconSrc={"/imgs/brave-wallet.png"}
          onWalletCall={activateBraveWallet}
        />
      )}

      {(EthWalletList.indexOf(EthWallets.ALL) > -1 ||
        EthWalletList.indexOf(EthWallets.COINBASE) > -1) && (
        <WalletListing
          heading="Coinbase Wallet"
          iconSrc={"/imgs/coinbase.jpg"}
          onWalletCall={activateCoinbaseWallet}
        />
      )}

      {(EthWalletList.indexOf(EthWallets.ALL) > -1 ||
        EthWalletList.indexOf(EthWallets.WALLETCONNECT) > -1) && (
        <WalletListing
          heading="Wallet Connect"
          iconSrc={"/imgs/trustwallet.png"}
          onWalletCall={activateWalletConnect}
        />
      )}
    </div>
  );
};

export default EthWalletListComp;
