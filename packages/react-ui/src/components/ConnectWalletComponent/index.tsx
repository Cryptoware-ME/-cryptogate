import ConnectWalletButton from "../ConnectWalletButton";
import ConnectWalletList from "../ConnectWalletList";
import { useState } from "react";

export enum EthWallets {
  all = "all",
  metamask = "metamask",
  walletConnect = "walletConnect",
  coinbase = "coinbase",
}

export enum SolWallets {
  all = "all",
  phantom = "phantom",
  slope = "slope",
  solflare = "solflare",
}

export const ConnectWalletComponent = ({
  message = "This is the default message provided by Cryptogate when signing a message",
  onSign,
  EthWalletList,
  SolWalletList,
}: {
  message?: string;
  onSign?: any;
  EthWalletList: EthWallets[];
  SolWalletList: SolWallets[];
}) => {
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <>
      <ConnectWalletButton
        setOpenOptions={setOpenOptions}
        message={message}
        onSign={onSign}
      />
      {openOptions ? (
        <ConnectWalletList
          openOptions={openOptions}
          setOpenOptions={setOpenOptions}
          EthWalletList={EthWalletList}
          SolWalletList={SolWalletList}
        />
      ) : (
        <></>
      )}
    </>
  );
};
