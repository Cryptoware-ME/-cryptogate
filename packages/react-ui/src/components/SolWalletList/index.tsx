const SolWalletList = ({ SolWallets }: { SolWallets: any }) => {
  return (
    <div
      style={{
        border: "black 1px solid",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    >
      {SolWallets.phantom && (
        // <WalletListing
        //   heading="Metamask"
        //   iconSrc={DCBMetamask}
        //   onWalletCall={injectedHandle}
        // />
        <></>
      )}
      {SolWallets.slope && (
        // <WalletListing
        //   heading="Coinbase"
        //   iconSrc={DCBCoinbase}
        //   onWalletCall={() => regHandle("Coinbase Wallet", wallets.Coinbase)}
        // />
        <></>
      )}
      {SolWallets.solflare && (
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
