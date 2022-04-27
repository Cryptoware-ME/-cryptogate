import ConnectWalletButton from "../ConnectWalletButton";
import ConnectWalletList from "../ConnectWalletList";
import { useState } from "react";

export const ConnectWalletComponent = ({
  toSign,
  message,
  onSign,
  EthWallets,
  SolWallets,
}: {
  toSign: boolean;
  message: string;
  onSign: any;
  EthWallets: any;
  SolWallets: any;
}) => {
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <>
      <ConnectWalletButton
        setOpenOptions={setOpenOptions}
        toSign={toSign}
        message={message}
        onSign={onSign}
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
