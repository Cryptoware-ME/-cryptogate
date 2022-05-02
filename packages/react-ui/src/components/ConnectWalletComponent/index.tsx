import { ConnectWalletButton } from "../ConnectWalletButton";
import { ConnectWalletList } from "../ConnectWalletList";
import { useState } from "react";
import { useDapp } from "@cryptogate/react-providers";

const { ChainId } = useDapp;

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
  WalletListStyle,
  ConnectWalletButtonClass,
  ConnectWalletButtonText,
  ConnectMenu = true,
}: {
  message?: string;
  onSign?: (key: {
    address: string;
    message: string;
    signature: string;
    chain: typeof ChainId;
  }) => void;
  EthWalletList?: EthWallets[];
  SolWalletList?: SolWallets[];
  WalletListStyle?: {
    background?: string;
    marginTop?: any;
  };
  ConnectWalletButtonClass?: string;
  ConnectWalletButtonText?: string;
  ConnectMenu?: boolean;
}) => {
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <>
      <ConnectWalletButton
        setOpenOptions={setOpenOptions}
        message={message}
        onSign={onSign}
        btnClass={ConnectWalletButtonClass ? ConnectWalletButtonClass : ""}
        btnText={
          ConnectWalletButtonText ? ConnectWalletButtonText : "Connect Wallet"
        }
        connectMenu={ConnectMenu}
      />
      {openOptions ? (
        <ConnectWalletList
          openOptions={openOptions}
          setOpenOptions={setOpenOptions}
          EthWalletList={EthWalletList ? EthWalletList : []}
          SolWalletList={SolWalletList ? SolWalletList : []}
          WalletListStyle={{
            background: WalletListStyle?.background
              ? WalletListStyle.background
              : "white",
            marginTop: WalletListStyle?.marginTop
              ? WalletListStyle.marginTop
              : "50px",
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};
