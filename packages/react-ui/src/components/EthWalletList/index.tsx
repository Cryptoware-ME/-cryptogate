import WalletListing from "./WalletListing";
import { EthWallets } from "../ConnectWalletComponent";
import { useEthereum } from "@cryptogate/react-providers";
import Metamask from "../wallets/Metamask";
import Brave from "../wallets/Brave";
import Coinbase from "../wallets/Coinbase";
import WalletConnect from "../wallets/WalletConnect";

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
        borderLeft: "black 1px solid",
        borderTop: "black 1px solid",
        borderRight: "black 1px solid",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        marginBottom: "20px",
      }}
    >
      {(EthWalletList.indexOf(EthWallets.ALL) > -1 ||
        EthWalletList.indexOf(EthWallets.METAMASK) > -1) && (
        <WalletListing
          heading="Metamask"
          Icon={<Metamask />}
          onWalletCall={activateMetamaskWallet}
        />
      )}

      {(EthWalletList.indexOf(EthWallets.ALL) > -1 ||
        EthWalletList.indexOf(EthWallets.BRAVEWALLET) > -1) && (
        <WalletListing
          heading="Brave Wallet"
          Icon={<Brave />}
          onWalletCall={activateBraveWallet}
        />
      )}

      {(EthWalletList.indexOf(EthWallets.ALL) > -1 ||
        EthWalletList.indexOf(EthWallets.COINBASE) > -1) && (
        <WalletListing
          heading="Coinbase"
          Icon={<Coinbase />}
          onWalletCall={activateCoinbaseWallet}
        />
      )}

      {(EthWalletList.indexOf(EthWallets.ALL) > -1 ||
        EthWalletList.indexOf(EthWallets.WALLETCONNECT) > -1) && (
        <WalletListing
          heading="Wallet Connect"
          Icon={<WalletConnect />}
          onWalletCall={activateWalletConnect}
        />
      )}
    </div>
  );
};

export default EthWalletListComp;
