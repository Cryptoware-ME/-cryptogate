import React from "react";
import { ConnectWalletButton } from "../ConnectWalletButton";
import { ConnectWalletList } from "../ConnectWalletList";
import { useState } from "react";
import { useDapp } from "@cryptogate/react-providers";

const { ChainId } = useDapp;

export enum EthWallets {
  all,
  metamask,
  walletConnect,
  coinbase,
}

export enum SolWallets {
  all,
  phantom,
  slope,
  solflare,
}

export const ConnectWalletComponent = ({
  activeComponent,
  diabledComponent,
  connectedComponent,
  networkChainId = [],
  alertMessage = "Selected network is not supported",
  message = "This is the default message provided by Cryptogate when signing a message",
  onSign,
  EthWalletList,
  SolWalletList,
  WalletListStyle,
  ConnectWalletButtonClass = "",
  ConnectWalletButtonText = "Connect Wallet",
  ConnectMenu = true,
}: {
  activeComponent?: React.ReactNode;
  diabledComponent?: React.ReactNode;
  connectedComponent?: React.ReactNode;
  networkChainId?: number[];
  alertMessage?:string,
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
    top?: any;
    background?: string;
  };
  ConnectWalletButtonClass?: string;
  ConnectWalletButtonText?: string;
  ConnectMenu?: boolean;
}) => {
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <>
      <ConnectWalletButton
        activeComponent={activeComponent}
        diabledComponent={diabledComponent}
        connectedComponent={connectedComponent}
        setOpenOptions={setOpenOptions}
        alertMessage={alertMessage}
        message={message}
        onSign={onSign}
        btnClass={ConnectWalletButtonClass}
        btnText={ConnectWalletButtonText}
        connectMenu={ConnectMenu}
        networkChainId={networkChainId}
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
            top: WalletListStyle?.top ? WalletListStyle.top : "0",
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};
