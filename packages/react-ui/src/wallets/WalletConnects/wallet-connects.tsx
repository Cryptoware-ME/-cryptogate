import { NextPage } from "next";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import Image from "next/image";

const WalletConnects: NextPage = () => {
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

  //end trustwallet

  return (
    <div>
      <Image
        // loader={myLoader}
        src="/imgs/trustwallet.png"
        alt="Picture of the author"
        width={50}
        height={50}
        onClick={turstWallet}
      />
    </div>
  );
};
export default WalletConnects;
