import WalletListing from "./WalletListing";
import { SuiWallets, useSui } from "@cryptogate/react-providers";

const SuiWalletListComp = ({ wallets }: { wallets: SuiWallets[] }) => {
  const { select } = useSui();

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
      {(wallets.indexOf(SuiWallets.ALL) > -1 ||
        wallets.indexOf(SuiWallets.SUIET) > -1) && (
        <WalletListing heading="Suiet" onWalletCall={() => select("Suiet")} />
      )}

      {(wallets.indexOf(SuiWallets.ALL) > -1 ||
        wallets.indexOf(SuiWallets.SUI) > -1) && (
        <WalletListing
          heading="Sui Wallet"
          onWalletCall={() => select("Sui Wallet")}
        />
      )}

      {(wallets.indexOf(SuiWallets.ALL) > -1 ||
        wallets.indexOf(SuiWallets.ETHOS) > -1) && (
        <WalletListing
          heading="Ethos"
          onWalletCall={() => select("Ethos Wallet")}
        />
      )}
    </div>
  );
};

export default SuiWalletListComp;
