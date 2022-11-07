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
  // const { turstWallet } = useConnectors();
  const { activateBrowserWallet, activate, wallets } = ethereum;
  const [openMetamaskAllow, setOpenMetamaskAllow] = useState(false);
  const { metamask, brave } = useBrowserWallets();
  useEffect(() => {
    detectEthereumProvider().then((provider: any) => {
      setOpenMetamaskAllow(!!provider);
    });
  }, []);


    //trustwallet
    var turstWallet = () => {
      connector = new WalletConnect({
        bridge: "https://bridge.walletconnect.org", // Required
        qrcodeModal: QRCodeModal,
      });
      // Check if connection is already established
      if (!connector.connected) {
        // create new session
        connector.createSession();
      }
      // Subscribe to connection events
      connector.on("connect", (error: any, payload: any) => {
        if (error) {
          throw error;
        }
        // Get provided accounts and chainId
        const { accounts, chainId } = payload.params[0];
      });
      connector.on("session_update", (error: any, payload: any) => {
        if (error) {
          throw error;
        }
        // Get updated accounts and chainId
        const { accounts, chainId } = payload.params[0];
      });
      connector.on("disconnect", (error: any, payload: any) => {
        if (error) {
          throw error;
        }
        // Delete connector
      });
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
          onWalletCall={ turstWallet}
        />
        // <WalletConnects />
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
