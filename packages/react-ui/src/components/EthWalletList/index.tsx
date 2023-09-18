import WalletListing from "./WalletListing";
import { EvmWallets, useEvm } from "@cryptogate/react-providers";
import Shabakat from "../wallets/Shabakat";
import Metamask from "../wallets/Metamask";
import Brave from "../wallets/Brave";
import Coinbase from "../wallets/Coinbase";
import Torus from "../wallets/Torus";
import WalletConnect from "../wallets/WalletConnect";

const EvmWalletListComp = ({ wallets }: { wallets: EvmWallets[] }) => {
  const {
    activateBraveWallet,
    activateMetamaskWallet,
    activateCoinbaseWallet,
    activateWalletConnect,
    activateShabakatWallet,
    activateTorus,
  } = useEvm();

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
        wallets.indexOf(EvmWallets.SHABAKAT) > -1) && (
        <WalletListing
          heading="Shabakat"
          Icon={<Shabakat />}
          onWalletCall={activateShabakatWallet}
        />
      )}

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

      {(wallets.indexOf(EvmWallets.ALL) > -1 ||
        wallets.indexOf(EvmWallets.TORUS) > -1) && (
        <WalletListing
          heading="Torus"
          Icon={<Torus />}
          onWalletCall={activateTorus}
        />
      )}
    </div>
  );
};

export default EvmWalletListComp;
