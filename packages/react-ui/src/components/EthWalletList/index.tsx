import { useState, useEffect, useCallback } from "react";
import { useMultichain } from "@cryptogate/react-providers";
import WalletListing from "./WalletListing";
import detectEthereumProvider from "@metamask/detect-provider";
import { isMobile } from "react-device-detect";
import { EthWallets } from "../ConnectWalletComponent";
import CoinBaseWallet from "../../wallets/CoinbaseWallet/coin-base";
import useBrowserWallets from "../../wallets/useBrowserWallets";
import WalletConnects from "../../wallets/WalletConnects/wallet-connects";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import useConnectors from "./connectors";

const EthWalletListComp = ({
  EthWalletList,
}: {
  EthWalletList: EthWallets[];
}) => {
  let connector: any;
  const { ethereum } = useMultichain();
  const { trustWallet,connectCoinWallet } = useConnectors();
  const { activateBrowserWallet, activate, wallets } = ethereum;
  const [openMetamaskAllow, setOpenMetamaskAllow] = useState(false);
  const { metamask, brave } = useBrowserWallets();




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
          onWalletCall={useCallback(
            () =>
              metamask &&
              metamask.send("eth_requestAccounts", []).catch(console.log),
            [metamask]
          )}
        />
        // <MetaMask/>
      )}

      {(EthWalletList.indexOf(EthWallets.ALL) > -1 ||
        EthWalletList.indexOf(EthWallets.BRAVEWALLET) > -1) && (
        <WalletListing
          heading="Brave Wallet"
          iconSrc={"/imgs/brave-wallet.png"}
          onWalletCall={useCallback(
            () =>
              brave && brave.send("eth_requestAccounts", []).catch(console.log),
            [brave]
          )}
        />
        // <BraveWallet/>
      )}

      {(EthWalletList.indexOf(EthWallets.ALL) > -1 ||
        EthWalletList.indexOf(EthWallets.WALLETCONNECT) > -1) && (
        <WalletListing
          heading="Trust Wallet"
          iconSrc={"/imgs/trustwallet.png"}
          onWalletCall={ trustWallet}
        />
        // <WalletConnects />
      )}

      {(EthWalletList.indexOf(EthWallets.ALL) > -1 ||
        EthWalletList.indexOf(EthWallets.COINBASE) > -1) && (
        <WalletListing
          heading="Coinbase Wallet"
          iconSrc={"/imgs/coinbase.jpg"}
          onWalletCall={connectCoinWallet}
        />
        // <CoinBaseWallet />
      )}
    </div>
  );
};

export default EthWalletListComp;
