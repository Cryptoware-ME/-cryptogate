import WalletListing from "./WalletListing";
import { EvmWallets, useEthereum } from "@cryptogate/react-providers";
import Shabakat from "../wallets/Shabakat";
import Metamask from "../wallets/Metamask";
import Brave from "../wallets/Brave";
import Coinbase from "../wallets/Coinbase";
import WalletConnect from "../wallets/WalletConnect";


/**

EvmWalletListComp is a React component that displays a list of Ethereum wallet options.
@param {Object} props - The component props.
@param {Array} props.wallets - An array of EvmWallets representing the selected wallet options.
@returns {React.ReactNode} The rendered EvmWalletListComp component.
*/
const EvmWalletListComp = ({ wallets }: { wallets: EvmWallets[] }) => {
  const {
    activateBraveWallet,
    activateMetamaskWallet,
    activateCoinbaseWallet,
    activateWalletConnect,
    activateShabakatWallet,
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
    </div>
  );
};

export default EvmWalletListComp;
