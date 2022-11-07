import WalletConnects from "../../wallets/WalletConnects/wallet-connects";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { ethers } from "ethers";
import CoinBaseWallet from "../../wallets/CoinbaseWallet/coin-base";

const useConnectors = () => {
  let coinbaseWallet;
  let ethereum: any = null;
  let connector: any;

  //trustwallet
  var trustWallet = () => {
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


  const connectCoinWallet = async () => {
    coinbaseWallet = new CoinbaseWalletSDK({
        appName: "My Awesome App",   
        appLogoUrl: "https://example.com/logo.png",
        darkMode: true,
      });
      ethereum = coinbaseWallet.makeWeb3Provider(
        "https://goerli.infura.io/v3/7e3e924eb24f4cb99fb7dc68e559cdff",
        1
      );
    debugger
    try {
      const provider = new ethers.providers.Web3Provider(ethereum as any);
      await provider.send("eth_requestAccounts", []);
    } catch (error: any) {
      alert(error.message);
    }
  };

  //   trustWallet();

  return { trustWallet ,connectCoinWallet};
};
export default useConnectors;
