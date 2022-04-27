import ConnectWalletButton from "../ConnectWalletButton";
import ConnectWalletList from "../ConnectWalletList";
import { useState } from "react";

export const ConnectWalletComponent = () => {
  const [openOptions, setOpenOptions] = useState(false);
  const EthWallets = {
    metamask: true,
    coinbase: true,
    fortmatic: true,
    walletConnect: true,
  };
  const SolWallets = {
    phantom: true,
    slope: true,
    solflare: true,
  };

  return (
    <>
      <ConnectWalletButton
        setOpenOptions={setOpenOptions}
        toSign={true}
        onSign={(key: any) => console.log("This is from sign function: " + key)}
      />
      {openOptions ? (
        <ConnectWalletList
          openOptions={openOptions}
          setOpenOptions={setOpenOptions}
          EthWallets={EthWallets}
          SolWallets={SolWallets}
        />
      ) : (
        <></>
      )}
    </>
  );
};
