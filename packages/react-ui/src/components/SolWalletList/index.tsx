import { SolWallets } from "../ConnectWalletComponent";

const SolWalletList = ({ SolWalletList }: { SolWalletList: SolWallets[] }) => {
  return (
    <div
      style={{
        border: "black 1px solid",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    >
      {(SolWalletList.indexOf(SolWallets.all) > -1 || SolWalletList.indexOf(SolWallets.phantom) > -1) && (
        // <WalletListing
        //   heading="Metamask"
        //   iconSrc={DCBMetamask}
        //   onWalletCall={injectedHandle}
        // />
        <></>
      )}
      {(SolWalletList.indexOf(SolWallets.all) > -1 || SolWalletList.indexOf(SolWallets.slope) > -1) && (
        // <WalletListing
        //   heading="Coinbase"
        //   iconSrc={DCBCoinbase}
        //   onWalletCall={() => regHandle("Coinbase Wallet", wallets.Coinbase)}
        // />
        <></>
      )}
      {(SolWalletList.indexOf(SolWallets.all) > -1 || SolWalletList.indexOf(SolWallets.solflare) > -1) && (
        // <WalletListing
        //   heading="Fortmatic"
        //   iconSrc={DCBFortmatic}
        //   onWalletCall={() => regHandle("Fortmatic", wallets.fortmatic)}
        // />
        <></>
      )}
    </div>
  );
};

export default SolWalletList;
