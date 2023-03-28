import WalletListing from "./WalletListing";
import { EvmWallets, useEthereum } from "@cryptogate/react-providers";
import Metamask from "../wallets/Metamask";
import Brave from "../wallets/Brave";
import Coinbase from "../wallets/Coinbase";
import WalletConnect from "../wallets/WalletConnect";

const EvmWalletListComp = ({
  wallets,
}: {
  wallets: EvmWallets[];
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
      {(wallets.indexOf(EvmWallets.ALL) > -1 ||
        wallets.indexOf(EvmWallets.METAMASK) > -1) && (
        <WalletListing
          heading="Metamask"
          Icon={<Metamask />}
          onWalletCall={activateMetamaskWallet}
        />
      )}

      {(wallets.indexOf(EvmWallets.ALL) > -1 ||
        wallets.indexOf(EvmWallets.BRAVEWALLET) > -1) && (
        <WalletListing
          heading="Brave Wallet"
          Icon={<Brave />}
          onWalletCall={activateBraveWallet}
        />
      )}

      {(wallets.indexOf(EvmWallets.ALL) > -1 ||
        wallets.indexOf(EvmWallets.COINBASE) > -1) && (
        <WalletListing
          heading="Coinbase"
          Icon={<Coinbase />}
          onWalletCall={activateCoinbaseWallet}
        />
      )}

      {(wallets.indexOf(EvmWallets.ALL) > -1 ||
        wallets.indexOf(EvmWallets.WALLETCONNECT) > -1) && (
        <WalletListing
          heading="Wallet Connect"
          Icon={<WalletConnect />}
          onWalletCall={activateWalletConnect}
        />
      )}
    </div>
  );
};

export default EvmWalletListComp;
