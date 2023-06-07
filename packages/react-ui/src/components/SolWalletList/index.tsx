import WalletListing from "./WalletListing";
import { SolWallets, useSolana } from "@cryptogate/react-providers";
import {
  PhantomWalletAdapter,
  PhantomWalletName,
  SlopeWalletAdapter,
  SlopeWalletName,
  SolflareWalletAdapter,
  SolflareWalletName,
  SolletExtensionWalletAdapter,
  SolletWalletName,
} from "@solana/wallet-adapter-wallets";

/**

SolWalletListComp is a React component that represents a list of Solana wallets.
@param {Object} props - The component props.
@param {SolWallets[]} props.wallets - The array of Solana wallets to display.
@returns {React.ReactNode} The rendered SolWalletListComp component.
@example
// Example usage
const ExampleComponent = () => {
const wallets = [SolWallets.ALL, SolWallets.PHANTOM];
return (
<SolWalletListComp wallets={wallets} />
);
};
*/

const SolWalletListComp = ({ wallets }: { wallets: SolWallets[] }) => {
  const { wallet } = useSolana();

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
      {(wallets.indexOf(SolWallets.ALL) > -1 ||
        wallets.indexOf(SolWallets.PHANTOM) > -1) && (
        <WalletListing
          heading="Phantom"
          wallet={new PhantomWalletAdapter()}
          onWalletCall={() => wallet.select(PhantomWalletName)}
        />
      )}

      {(wallets.indexOf(SolWallets.ALL) > -1 ||
        wallets.indexOf(SolWallets.SLOPE) > -1) && (
        <WalletListing
          heading="Slope"
          wallet={new SlopeWalletAdapter()}
          onWalletCall={() => wallet.select(SlopeWalletName)}
        />
      )}

      {(wallets.indexOf(SolWallets.ALL) > -1 ||
        wallets.indexOf(SolWallets.SOLFLARE) > -1) && (
        <WalletListing
          heading="Solflare"
          wallet={new SolflareWalletAdapter()}
          onWalletCall={() => wallet.select(SolflareWalletName)}
        />
      )}

      {(wallets.indexOf(SolWallets.ALL) > -1 ||
        wallets.indexOf(SolWallets.SOLLETEXTENSION) > -1) && (
        <WalletListing
          heading="Sollet"
          wallet={new SolletExtensionWalletAdapter()}
          onWalletCall={() => wallet.select(SolletWalletName)}
        />
      )}
    </div>
  );
};

export default SolWalletListComp;
