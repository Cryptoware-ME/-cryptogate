import WalletConnects from "../../wallets/WalletConnects/wallet-connects";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import CoinBaseWallet from "../../wallets/CoinbaseWallet/coin-base";

    const useConnectors = () => {
        let coinbaseWallet;
        let ethereum: any = null;
        let connector: any;

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

      
      turstWallet();

      return { turstWallet};
}
export default useConnectors;